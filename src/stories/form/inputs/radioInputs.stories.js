// src/components/__stories__/RadioButtons.stories.jsx

import React from 'react';
import RadioButtons2 from '../../../components/form/inputs/radioInputs/RadioButtons2';

export default {
  title: 'Form/Inputs/RadioInputs',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the radio button',
      defaultValue: 'Option 1',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the radio button',
      defaultValue: 'radio-button-default',
    },
    name: {
      control: 'text',
      description: 'Name attribute to group radio buttons',
      defaultValue: 'radio-group',
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
      defaultValue: 'option1',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the radio button',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button when true',
      defaultValue: false,
    },
    onChange: { action: 'radio-changed' },
    options: {
      control: 'object',
      description:
        'Options for the radio group in RadioButtons2: an array of objects with `id`, `value`, and `label`',
      defaultValue: [
        { id: 'radio1', value: 'option1', label: 'Option 1' },
        { id: 'radio2', value: 'option2', label: 'Option 2' },
        { id: 'radio3', value: 'option3', label: 'Option 3' },
      ],
    },
  },
};



export const DefaultRadioButtonsGroup = (args) => <RadioButtons2 {...args} />;
DefaultRadioButtonsGroup.args = {
  name: 'radio-group2',
  options: [
    { id: 'radio1', value: 'option1', label: 'Option 1' },
    { id: 'radio2', value: 'option2', label: 'Option 2' },
    { id: 'radio3', value: 'option3', label: 'Option 3' },
  ],
  value: '',
  disabled: false,
};