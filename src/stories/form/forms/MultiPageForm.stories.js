// MultiPageForm.stories.jsx
import React from "react";
import MultiPageForm from "../../../components/form/forms/MultiPageForm";

export default {
  title: "Form/Forms/MultiPageForm",
  component: MultiPageForm,
};

export const BasicThreePageForm = () => {
  const initialData = {
    name: "",
    email: "",
    message: "",
    color: "#000000",
    rating: 3,
    checkbox: false,
    toggle: false,
    role: "designer",
  };

  const handleFormSubmit = (formData) => {
    alert(`Submitted Data:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <MultiPageForm
      initialData={initialData}
      handleFormSubmit={handleFormSubmit}
    />
  );
};
