// src/components/__stories__/SelectInput.stories.jsx

import React, { useState } from 'react';
import SelectInput2 from '../../../components/form/inputs/selectInputs/SelectInput2';
import SelectInput3 from '../../../components/form/inputs/selectInputs/SelectInput3';
import SelectInput from '../../../components/form/inputs/selectInputs/SelectInput';
import SelectToTextInput from '../../../components/form/inputs/selectInputs/SelectToTextInput';
// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/SelectInput',
  component: SelectInput2,
  subcomponents: { SelectInput3 },
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
      description: 'Options for the select input as an array of objects with `value` and `label`',
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

// Sample Options
const sampleOptions = [
  { value: '', label: 'Please select' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// Template for SelectInput2
const TemplateSelectInput2 = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <SelectInput2 {...args} value={selectedValue} onChange={handleChange} />
      <p>
        Selected Value: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

// Template for SelectInput3
const TemplateSelectInput3 = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <SelectInput3 {...args} value={selectedValue} onChange={handleChange} />
      <p>
        Selected Value: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

// Default SelectInput2 Story
export const DefaultSelectInput2 = TemplateSelectInput2.bind({});
DefaultSelectInput2.args = {
  label: 'Choose an option',
  id: 'select-input-default',
  options: sampleOptions,
  value: '',
  disabled: false,
};


// SelectInput2 with Different Options
export const CustomOptionsSelectInput2 = TemplateSelectInput2.bind({});
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

// Default SelectInput3 Story
export const DefaultSelectInput3 = TemplateSelectInput3.bind({});
DefaultSelectInput3.args = {
  label: 'Choose an option',
  id: 'select-input3-default',
  options: sampleOptions,
  value: '',
  disabled: false,
};



// SelectInput3 with Different Options
export const CustomOptionsSelectInput3 = TemplateSelectInput3.bind({});
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


// Template for SelectInput
const TemplateSelectInput = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <SelectInput {...args} value={selectedValue} onChange={handleChange} />
      <p>
        Selected Value: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

// Default SelectInput Story
export const DefaultSelectInput = TemplateSelectInput.bind({});
DefaultSelectInput.args = {
  label: 'Choose an option',
  id: 'select-input-default',
  options: sampleOptions,
  value: '',
  disabled: false,
};

// Template for SelectToTextInput
const TemplateSelectToTextInput = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <SelectToTextInput {...args} value={selectedValue} onChange={handleChange} />
      <p>
        Selected Value: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

// Default SelectToTextInput Story
export const DefaultSelectToTextInput = TemplateSelectToTextInput.bind({});
DefaultSelectToTextInput.args = {
  label: 'Choose an option or enter a custom value',
  id: 'select-to-text-input-default',
  options: sampleOptions,
  value: '',
  disabled: false,
};