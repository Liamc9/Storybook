// src/stories/FileUploadForm.stories.jsx

import React from 'react';
import FileUpload from '../../../components/FileUpload';

export default {
  title: 'Atoms/Inputs/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`FileUpload\` component provides a simple and user-friendly way for users to upload files. It is suitable for use in forms and file management interfaces where file input is required.

### Features
- **File Upload Handling**: Supports an event for handling file uploads, enabling integration with custom logic.
- **Simple Design**: A straightforward file input component that can be easily customized.
- **Reusable**: Adaptable for use in various forms or pages needing file input functionality.

### Usage

\`\`\`jsx
import React from 'react';
import FileUpload from './components/FileUpload';

const ExampleComponent = () => (
  <FileUpload onFileUpload={(file) => console.log('File uploaded:', file)} />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    onFileUpload: { action: 'file-uploaded', description: 'Event triggered when a file is uploaded.' },
  },
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
