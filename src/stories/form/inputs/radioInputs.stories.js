// src/components/__stories__/RadioButtons.stories.jsx

import React, { useState } from 'react';
import RadioButtons from '../../../components/form/inputs/radioInputs/RadioButtons';
import RadioButtons2 from '../../../components/form/inputs/radioInputs/RadioButtons2';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/RadioInputs',
  component: RadioButtons,
  subcomponents: { RadioButtons2 },
  argTypes: {
    // Props for RadioButtons
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

    // Props for RadioButtons2
    options: {
      control: 'object',
      description: 'Options for the radio button group as an array of objects with `id`, `value`, and `label`',
      defaultValue: [
        { id: 'radio1', value: 'option1', label: 'Option 1' },
        { id: 'radio2', value: 'option2', label: 'Option 2' },
        { id: 'radio3', value: 'option3', label: 'Option 3' },
      ],
    },
  },
};

// Template for RadioButtons
const TemplateRadioButtons = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    args.onChange(e);
  };

  return (
    <div>
      <RadioButtons {...args} checked={isChecked} onChange={handleChange} />
      <p>
        Current State: <strong>{isChecked ? 'Checked' : 'Unchecked'}</strong>
      </p>
    </div>
  );
};

// Template for RadioButtons2
const TemplateRadioButtons2 = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    args.onChange(e);
  };

  return (
    <div>
      <RadioButtons2 {...args} value={selectedValue} onChange={handleChange} />
      <p>
        Selected Option: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

// Stories for RadioButtons

// Default RadioButtons Story
export const DefaultRadioButton = TemplateRadioButtons.bind({});
DefaultRadioButton.args = {
  label: 'Option 1',
  id: 'radio-button-default',
  name: 'radio-group',
  value: 'option1',
  checked: false,
  disabled: false,
};

// Checked RadioButtons Story
export const CheckedRadioButton = TemplateRadioButtons.bind({});
CheckedRadioButton.args = {
  label: 'Option 1 (Checked)',
  id: 'radio-button-checked',
  name: 'radio-group',
  value: 'option1',
  checked: true,
  disabled: false,
};


// Default RadioButtons2 Story
export const DefaultRadioButtonsGroup = TemplateRadioButtons2.bind({});
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

// RadioButtons2 with Preselected Option
export const PreselectedRadioButtonsGroup = TemplateRadioButtons2.bind({});
PreselectedRadioButtonsGroup.args = {
  name: 'radio-group2-preselected',
  options: [
    { id: 'radio1', value: 'option1', label: 'Option 1' },
    { id: 'radio2', value: 'option2', label: 'Option 2' },
    { id: 'radio3', value: 'option3', label: 'Option 3' },
  ],
  value: 'option2',
  disabled: false,
};


