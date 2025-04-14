// src/components/__stories__/SelectInput.stories.jsx

import React from 'react';
import SelectInput2 from '../../../components/form/inputs/selectInputs/SelectInput2';
import SelectInput3 from '../../../components/form/inputs/selectInputs/SelectInput3';
import SelectInput from '../../../components/form/inputs/selectInputs/SelectInput';
import SelectToTextInput from '../../../components/form/inputs/selectInputs/SelectToTextInput';

export default {
  title: 'Form/Inputs/SelectInput',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the select input',
      defaultValue: 'Choose an option',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the select input',
      defaultValue: 'select-input-default',
    },
    options: {
      control: 'object',
      description:
        'Options for the select input as an array of objects with `value` and `label`',
      defaultValue: [
        { value: '', label: 'Please select' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    },
    value: {
      control: 'text',
      description: 'Current selected value',
      defaultValue: '',
    },
    onChange: { action: 'value-changed' },
    disabled: {
      control: 'boolean',
      description: 'Disables the select input when true',
      defaultValue: false,
    },
  },
};

export const CustomOptionsSelectInput2 = (args) => <SelectInput2 {...args} />;
CustomOptionsSelectInput2.args = {
  label: 'Select Your Favorite Fruit',
  id: 'select-input-fruit',
  options: [
    { value: '', label: 'Please select' },
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ],
  value: '',
  disabled: false,
};


export const CustomOptionsSelectInput3 = (args) => <SelectInput3 {...args} />;
CustomOptionsSelectInput3.args = {
  label: 'Select Your Favorite Color',
  id: 'select-input3-color',
  options: [
    { value: '', label: 'Please select' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ],
  value: '',
  disabled: false,
};

export const DefaultSelectInput = (args) => <SelectInput {...args} />;
DefaultSelectInput.args = {
  label: 'Choose an option',
  id: 'select-input-default',
  options: [
    { value: '', label: 'Please select' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ],  value: '',
  disabled: false,
};

export const DefaultSelectToTextInput = (args) => <SelectToTextInput {...args} />;
DefaultSelectToTextInput.args = {
  label: 'Choose an option or enter a custom value',
  id: 'select-to-text-input-default',
  options: [
    { value: '', label: 'Please select' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ],  value: '',
  disabled: false,
};
