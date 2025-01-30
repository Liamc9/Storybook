import React, { useState, useEffect, useCallback } from "react";

/**
 * FormLogic
 * ----------
 * A flexible form manager component supporting both single-page and multi-page forms.
 *
 * Props:
 * - children: 
 *    - Single Page: All form fields as children, OR
 *    - Multi Page: A render function for navigation buttons (receives page info).
 * - pages: Array of pages (multi-page mode). Each page is an object with:
 *    - content: JSX containing the page's fields
 *    - customValidate?: (formData) => errors {}
 * - initialData: Initial values for form fields
 * - onSubmit: Callback for final form submission
 * - validate: Boolean; enable basic "required" validation for single-page forms
 * - customValidate: (formData) => errors {} for single-page forms
 */
export default function FormLogic({
  children,
  pages = [],
  initialData = {},
  onSubmit,
  validate = false,
  customValidate,
}) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const isMultiPage = pages.length > 0;
  const currentPage = isMultiPage ? pages[currentPageIndex] : null;
  const isLastPage = isMultiPage && currentPageIndex === pages.length - 1;

  // If the parent changes initialData, sync local formData
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  /**
   * handleChange
   * -----------
   * Universal change handler for text, checkbox, radio, etc.
   */
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear any existing error on this field once the user types/changes it
    if (errors[name]) {
      setErrors((prevErr) => ({ ...prevErr, [name]: undefined }));
    }
  };

  /**
   * validateRequiredFields
   * ----------------------
   * Performs a basic "required" check on fields that have `required` prop.
   */
  const validateRequiredFields = useCallback(
    (elements) => {
      const validationErrors = {};

      const traverseChildren = (nodeChildren) => {
        React.Children.forEach(nodeChildren, (child) => {
          if (!React.isValidElement(child)) return;

          const { name, required, label } = child.props || {};
          if (name && required) {
            const value = formData[name];
            const isEmptyString = typeof value === "string" && value.trim() === "";
            const isUncheckedBool = typeof value === "boolean" && !value;

            if (value === undefined || value === null || isEmptyString || isUncheckedBool) {
              validationErrors[name] = `${label || name} is required.`;
            }
          }

          // Recurse into nested children
          if (child.props?.children) {
            traverseChildren(child.props.children);
          }
        });
      };

      traverseChildren(elements);
      return validationErrors;
    },
    [formData]
  );

  /**
   * handleSubmit
   * -----------
   * The primary form submission handler. It:
   * - Checks required fields,
   * - Applies any custom validation,
   * - Advances page (if multi-page),
   * - Or calls onSubmit if on the last page or single-page mode.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Which children to validate depends on single vs. multi-page
    const elementsToValidate = isMultiPage ? currentPage.content.props.children : children;
    let validationErrors = {};

    // Basic validation:
    if (isMultiPage) {
      // For multi-page forms, always validate the current page's required fields
      validationErrors = validateRequiredFields(elementsToValidate);
    } else if (validate) {
      // For single-page forms, only validate if `validate` prop is true
      validationErrors = validateRequiredFields(elementsToValidate);
    }

    // Custom validation:
    const customValidationFn = isMultiPage ? currentPage.customValidate : customValidate;
    if (customValidationFn) {
      const customErrors = customValidationFn(formData);
      validationErrors = { ...validationErrors, ...customErrors };
    }

    // If any errors, stop submission and show them
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // For multi-page forms, move to next page if not the last
    if (isMultiPage && !isLastPage) {
      setCurrentPageIndex((prev) => prev + 1);
    } else {
      // If single-page or last page, finalize
      onSubmit?.(formData);
    }
  };

  /**
   * handlePrevious
   * --------------
   * Moves to the previous page in a multi-page form (if applicable).
   */
  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      setErrors({});
    }
  };

  /**
   * enhanceChildren
   * ---------------
   * Clones all form children to make them controlled components:
   * - Sets `value` or `checked` based on formData
   * - Provides `onChange`
   * - Injects validation `error` if present
   */
  const enhanceChildren = (elements) =>
    React.Children.map(elements, (child) => {
      if (!React.isValidElement(child)) return child; // Not a valid React element

      const { name, type, value: childValue, children: childChildren } = child.props;

      // If this child is a form field (has a `name`)
      if (name) {
        const extraProps = { onChange: handleChange, name };

        // Handle checkboxes, radio buttons, and standard inputs
        if (type === "checkbox") {
          extraProps.checked = !!formData[name];
        } else if (type === "radio") {
          extraProps.checked = formData[name] === childValue;
        } else {
          extraProps.value = formData[name] || "";
        }

        // Attach error if exists
        if (errors[name]) {
          extraProps.error = errors[name];
        }

        return React.cloneElement(child, extraProps);
      }

      // If the child has children, recurse to enhance them
      if (childChildren) {
        return React.cloneElement(child, {
          children: enhanceChildren(childChildren),
        });
      }

      return child;
    });

  // For multi-page, enhance the current page's content. Otherwise, enhance all children.
  const formFields = isMultiPage
    ? enhanceChildren(currentPage.content.props.children)
    : enhanceChildren(children);

  return (
    <form onSubmit={handleSubmit}>
      {formFields}

      {/* 
        If it's multi-page and the user passed a function as `children`, 
        we render that function with navigation info.
      */}
      {isMultiPage && typeof children === "function" && 
        children({
          currentPageIndex,
          isLastPage,
          handlePrevious,
        })
      }
    </form>
  );
}
