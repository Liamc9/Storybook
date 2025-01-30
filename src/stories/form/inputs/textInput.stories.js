// src/components/__stories__/TextInput.stories.jsx

import React, { useState } from 'react';
import TextInput from '../../../components/form/inputs/textInputs/TextInput';
import TextInput2 from '../../../components/form/inputs/textInputs/TextInput2';
import TextInput3 from '../../../components/form/inputs/textInputs/TextInput3';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/TextInput',
  component: TextInput,
  subcomponents: { TextInput2 },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the text input',
      defaultValue: 'Default Text Input',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the text input',
      defaultValue: 'text-input-default',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      defaultValue: 'Enter text here...',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Type of the input',
      defaultValue: 'text',
    },
    value: {
      control: 'text',
      description: 'Value of the input',
      defaultValue: '',
    },
  },
};

// Template for Default TextInput
const Template = (args) => {

  return (
    <div>
      <TextInput {...args}  />
    </div>
  );
};

// Default TextInput Story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Text Input',
  id: 'text-input-default',
  placeholder: 'Enter text here...',
  type: 'text',
};

// Template for TextInput2
const Template2 = (args) => {


  return (
    <div>
      <TextInput2 {...args}  />
    </div>
  );
};

// TextInput2 Story
export const FloatingLabel = Template2.bind({});
FloatingLabel.args = {
  label: 'Floating Label Input',
  id: 'text-input-floating',
  type: 'text',
};

// Template for TextInput2
const Template3 = (args) => {

  return (
    <div>
      <TextInput3 {...args} />
    </div>
  );
};

// TextInput3 Story
export const FloatingLabel2 = Template3.bind({});
FloatingLabel2.args = {
  label: 'Floating Label Input',
  id: 'text-input-floating',
  type: 'text',
};
