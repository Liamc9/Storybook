// TextInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { BaseInput, BaseTextarea } from './BaseInput';
import { Wrapper, Label, ErrorMessage } from './InputWrapper';
import styled from 'styled-components';

const StyledInput = styled(BaseInput)`
  /* Additional styles if needed */
`;

const StyledTextarea = styled(BaseTextarea)`
  /* Additional styles if needed */
`;

const TextInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  maxLength,
  pattern,
  autoFocus,
  readOnly,
  className,
  validationMessage,
  error,
  tabIndex,
  ariaLabel,
  ariaDescribedBy,
  spellCheck,
  autoComplete,
  rows,
  cols,
  ...rest
}) => {
  const isTextarea = type === 'textarea';

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {isTextarea ? (
        <StyledTextarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern}
          autoFocus={autoFocus}
          readOnly={readOnly}
          hasError={error}
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          rows={rows}
          cols={cols}
          {...rest}
        />
      ) : (
        <StyledInput
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          pattern={pattern}
          autoFocus={autoFocus}
          readOnly={readOnly}
          hasError={error}
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
          {...rest}
        />
      )}
      {validationMessage && <ErrorMessage id={`${name}-error`}>{validationMessage}</ErrorMessage>}
    </Wrapper>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'search',
    'tel',
    'url',
    'textarea',
    // Add more types as needed
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  autoFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  validationMessage: PropTypes.string,
  error: PropTypes.bool,
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  spellCheck: PropTypes.bool,
  autoComplete: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

TextInput.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  required: false,
  disabled: false,
  maxLength: undefined,
  pattern: undefined,
  autoFocus: false,
  readOnly: false,
  className: '',
  validationMessage: '',
  error: false,
  tabIndex: 0,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
  spellCheck: true,
  autoComplete: 'on',
  rows: 4,
  cols: 50,
};

export default TextInput;
