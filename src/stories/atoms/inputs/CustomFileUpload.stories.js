// src/stories/CustomFileUpload.stories.js

import React from 'react';
import CustomFileUpload from '../../../components/atoms/inputs/CustomFileUpload';

export default {
  title: 'Atoms/Inputs/CustomFileUpload',
  component: CustomFileUpload,
  parameters: {
    docs: {
      description: {
        component: `
The \`CustomFileUpload\` component is a styled file input component that allows users to upload files with ease. It supports custom labels and handles file upload events, making it a flexible solution for forms and file management interfaces.

### Features
- **Customizable Label**: Set a custom label to guide users during file selection.
- **File Upload Event**: Triggers an event upon file selection, allowing for further handling in the parent component.
- **Flexible Design**: Can be styled and adjusted to fit various UI requirements.

### Usage

\`\`\`jsx
import React from 'react';
import CustomFileUpload from './components/CustomFileUpload';

const ExampleComponent = () => (
  <CustomFileUpload label="Upload a file:" onUpload={(file) => console.log('File uploaded:', file)} />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label for the file upload input.' },
    onUpload: { action: 'file uploaded', description: 'Event triggered when a file is uploaded.' },
  },
};

const Template = (args) => <CustomFileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upload a file:',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Choose your file:',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
};
