// src/components/__stories__/TextInput.stories.jsx

import React from 'react';
import TextInput from '../../../components/form/inputs/textInputs/TextInput';
import TextInput2 from '../../../components/form/inputs/textInputs/TextInput2';
import TextInput3 from '../../../components/form/inputs/textInputs/TextInput3';
import Input from '../../../components/form/inputs/textInputs/Input';

export default {
  title: 'Form/Inputs/TextInput',
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
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: 'Type of the input',
      defaultValue: 'text',
    },
    value: {
      control: 'text',
      description: 'Value of the input',
      defaultValue: '',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length of the input value',
      defaultValue: 100,
    },
    pattern: {
      control: 'text',
      description: 'Regular expression pattern for input validation',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required',
      defaultValue: false,
    },
    
  },
};

export const DefaultTextInput = (args) => <TextInput {...args} />;
DefaultTextInput.args = {
  label: 'Default Text Input',
  id: 'text-input-default',
  placeholder: 'Enter text here...',
  type: 'text',
};

export const FloatingLabel = (args) => <TextInput2 {...args} />;
FloatingLabel.args = {
  label: 'Floating Label Input',
  id: 'text-input-floating',
  type: 'text',
};

export const FloatingLabel2 = (args) => <TextInput3 {...args} />;
FloatingLabel2.args = {
  label: 'Floating Label Input',
  id: 'text-input-floating',
  type: 'text',
};

export const InputStory = (args) => <Input {...args} />;
InputStory.args = {
  label: 'Input',
  id: 'input-default',
  placeholder: 'Enter text here...',
  type: 'text',
  value: '',
};
