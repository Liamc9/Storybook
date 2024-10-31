// CustomFileUpload.stories.js
import React from 'react';
import CustomFileUpload from '../components/CustomFileUpload';

export default {
  title: 'Components/CustomFileUpload',
  component: CustomFileUpload,
  argTypes: {
    label: { control: 'text' },
    onUpload: { action: 'file uploaded' },
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
