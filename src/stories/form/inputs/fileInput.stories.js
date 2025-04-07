// src/components/__stories__/FileInput.stories.jsx

import React, { useState } from 'react';
import FileInput from '../../../components/form/inputs/fileInputs/FileInput';
import FileInput2 from '../../../components/form/inputs/fileInputs/FileInput2';
import FileUpload from '../../../components/form/inputs/fileInputs/FileUpload';
import CustomFileUpload from '../../../components/form/inputs/fileInputs/CustomFileUpload';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/FileInput',
  component: FileInput,
  subcomponents: { FileInput2 },
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

// Sample Accepted File Types
const imageFileTypes = 'image/png, image/jpeg, image/jpg, image/gif';

// Template for FileInput
const TemplateFileInput = (args) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <FileInput {...args} onChange={handleChange} />
      <div>
        <h4>Selected File(s):</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        ) : (
          <p>No files selected.</p>
        )}
      </div>
    </div>
  );
};

// Template for FileInput2
const TemplateFileInput2 = (args) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <FileInput2 {...args} onChange={handleChange} />
      <div>
        <h4>Selected File(s):</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        ) : (
          <p>No files selected.</p>
        )}
      </div>
    </div>
  );
};

// Default FileInput Story
export const DefaultFileInput = TemplateFileInput.bind({});
DefaultFileInput.args = {
  label: 'Upload File',
  id: 'file-input-default',
  accept: '*/*',
  multiple: false,
  disabled: false,
};

// FileInput with Specific Accept Types Story
export const ImageFileInput = TemplateFileInput.bind({});
ImageFileInput.args = {
  label: 'Upload Image',
  id: 'file-input-image',
  accept: imageFileTypes,
  multiple: false,
  disabled: false,
};

// Multiple Files FileInput Story
export const MultipleFilesFileInput = TemplateFileInput.bind({});
MultipleFilesFileInput.args = {
  label: 'Upload Multiple Files',
  id: 'file-input-multiple',
  accept: '*/*',
  multiple: true,
  disabled: false,
};

// Default FileInput2 Story
export const DefaultFileInput2 = TemplateFileInput2.bind({});
DefaultFileInput2.args = {
  // FileInput2 does not have a label prop in the provided code,
  // but assuming it does based on the StyledLabel usage
  id: 'file-input2-default',
};


// FileInput2 with Specific Accept Types Story
export const ImageFileInput2 = TemplateFileInput2.bind({});
ImageFileInput2.args = {
  id: 'file-input2-image',
  accept: imageFileTypes,
};

// Multiple Files FileInput2 Story
export const MultipleFilesFileInput2 = TemplateFileInput2.bind({});
MultipleFilesFileInput2.args = {
  id: 'file-input2-multiple',
  accept: '*/*',
  multiple: true,
};

// FileUpload Component Story
export const FileUploadStory = (args) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <FileUpload {...args} onChange={handleChange} />
      <div>
        <h4>Selected File(s):</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        ) : (
          <p>No files selected.</p>
        )}
      </div>
    </div>
  );
};

// FileUpload Story
export const DefaultFileUpload = FileUploadStory.bind({});
DefaultFileUpload.args = {
  label: 'Upload File',
  id: 'file-upload-default',
  accept: '*/*',
  multiple: false,
  disabled: false,
};

// custom FileUpload Component Story
export const CustomFileUploadStory = (args) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div>
      <CustomFileUpload {...args} onChange={handleChange} />
      <div>
        <h4>Selected File(s):</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} - {(file.size / 1024).toFixed(2)} KB
              </li>
            ))}
          </ul>
        ) : (
          <p>No files selected.</p>
        )}
      </div>
    </div>
  );
};
