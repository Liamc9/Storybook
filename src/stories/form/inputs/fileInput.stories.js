// src/components/__stories__/FileInput.stories.jsx

import React from 'react';
import FileInput from '../../../components/form/inputs/fileInputs/FileInput';
import FileInput2 from '../../../components/form/inputs/fileInputs/FileInput2';
import FileUpload from '../../../components/form/inputs/fileInputs/FileUpload';
import CustomFileUpload from '../../../components/form/inputs/fileInputs/CustomFileUpload';

export default {
  title: 'Form/Inputs/FileInput',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the file input',
      defaultValue: 'Upload File',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the file input',
      defaultValue: 'file-input-default',
    },
    accept: {
      control: 'text',
      description: 'Comma-separated list of file types the server accepts',
      defaultValue: '*/*',
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple file selection when true',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the file input when true',
      defaultValue: false,
    },
    onChange: { action: 'file-changed' },
  },
};

export const DefaultFileInput = (args) => <FileInput {...args} />;
DefaultFileInput.args = {
  label: 'Upload File',
  id: 'file-input-default',
  accept: '*/*',
  multiple: false,
  disabled: false,
};

export const ImageFileInput = (args) => <FileInput {...args} />;
ImageFileInput.args = {
  label: 'Upload Image',
  id: 'file-input-image',
  accept: 'image/png, image/jpeg, image/jpg, image/gif',
  multiple: false,
  disabled: false,
};

export const DefaultFileInput2 = (args) => <FileInput2 {...args} />;
DefaultFileInput2.args = {
  id: 'file-input2-default',
};

export const DefaultFileUpload = (args) => <FileUpload {...args} />;
DefaultFileUpload.args = {
  label: 'Upload File',
  id: 'file-upload-default',
  accept: '*/*',
  multiple: false,
  disabled: false,
};

export const CustomFileUploadStory = (args) => <CustomFileUpload {...args} />;
CustomFileUploadStory.args = {
  label: 'Custom Upload',
  id: 'custom-file-upload',
  accept: '*/*',
  multiple: false,
  disabled: false,
};
