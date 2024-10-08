// src/stories/FileUploadForm.stories.jsx

import React from 'react';
import FileUpload from '../components/FileUpload';

export default {
  title: 'Atoms/FormComponents/FileUpload/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    onFileUpload: { action: 'file-uploaded' },
  },
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
