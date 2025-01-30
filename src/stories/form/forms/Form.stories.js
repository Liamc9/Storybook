import React from 'react';
import SinglePageForm from '../../../components/form/forms/SinglePageForm';
import MultiPageForm from '../../../components/form/forms/MultiPageForm';

export default {
  title: 'Form/Forms/Form',
  parameters: {
    docs: {
      description: {
        component: `
### Form Components

A collection of form components designed for flexibility and ease of use. This includes:

- **SinglePageForm**: A straightforward form component for simple use cases.
- **MultiPageForm**: A multi-step form for collecting complex data over multiple pages.

#### Best Practices

- **Validation**: Use both basic and custom validation to ensure data integrity.
- **Accessibility**: Ensure proper labeling for form fields.
- **Customization**: Adjust form fields and validation logic to suit your requirements.
        `,
      },
    },
  },
};

const handleFormSubmit = (formData) => {
  alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
};

// Example Story: SinglePageForm
export const SinglePageFormStory = () => {
  return <SinglePageForm handleFormSubmit={handleFormSubmit} />;
};

SinglePageFormStory.storyName = 'Single Page Form';
SinglePageFormStory.parameters = {
  docs: {
    description: {
      story: `
### SinglePageForm

A simple form component for collecting data on a single page. Suitable for straightforward use cases like contact forms, feedback forms, or settings pages.

#### How to Use

\`\`\`jsx
import React from 'react';
import SinglePageForm from '../components/forms/SinglePageForm';

const handleFormSubmit = (formData) => {
  console.log('Form Submitted:', formData);
};

const App = () => (
  <SinglePageForm
    initialFormData={{ name: '', email: '' }}
    handleFormSubmit={handleFormSubmit}
  />
);

export default App;
\`\`\`

#### Props

| Name             | Type     | Description                                      |
| ---------------- | -------- | ------------------------------------------------ |
| \`initialFormData\` | \`object\` | Initial values for the form fields.            |
| \`handleFormSubmit\` | \`function\` | Callback function triggered on form submission. |
      `,
    },
  },
};

// Example Story: MultiPageForm
export const MultiPageFormStory = () => {
  return <MultiPageForm handleFormSubmit={handleFormSubmit} />;
};

MultiPageFormStory.storyName = 'Multi Page Form';
MultiPageFormStory.parameters = {
  docs: {
    description: {
      story: `
### MultiPageForm

A dynamic, multi-step form for collecting complex data across multiple pages.

#### How to Use

\`\`\`jsx
import React from 'react';
import MultiPageForm from '../components/forms/MultiPageForm';

const handleFormSubmit = (formData) => {
  console.log('Form Submitted:', formData);
};

const App = () => (
  <MultiPageForm
    initialData={{ name: '', email: '' }}
    handleFormSubmit={handleFormSubmit}
  />
);

export default App;
\`\`\`

#### Customization

- **Pages Configuration**: Define the content and structure of each form page in the \`getPages\` function.
- **Custom Validation**: Add page-specific validation using the \`customValidate\` property for each page.
- **Navigation Buttons**: Customize navigation buttons by modifying the \`renderButtonLayout\` function.

#### Props

| Name             | Type     | Description                                      |
| ---------------- | -------- | ------------------------------------------------ |
| \`initialData\`    | \`object\` | Initial values for the form fields.            |
| \`handleFormSubmit\` | \`function\` | Callback function triggered on form submission. |
| \`pages\`          | \`array\`  | Configuration for multi-page forms.            |
      `,
    },
  },
};
