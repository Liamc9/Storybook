// src/components/__stories__/RangeInput.stories.jsx

import React, { useState } from 'react';
import RangeInput from '../../../components/form/inputs/rangeInputs/RangeInput';
import RangeInput2 from '../../../components/form/inputs/rangeInputs/RangeInput2';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/RangeInput',
  component: RangeInput,
  subcomponents: { RangeInput2 },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the range input',
      defaultValue: 'Default Range',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the range input',
      defaultValue: 'range-default',
    },
    min: {
      control: 'number',
      description: 'Minimum value of the range',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: 'Maximum value of the range',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: 'Step value for the range input',
      defaultValue: 1,
    },
    defaultValue: {
      control: 'number',
      description: 'Default value of the range input',
      defaultValue: 50,
    },
  },
};

// Template for Default RangeInput
const Template = (args) => {
  const [value, setValue] = useState(args.defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <RangeInput {...args} value={value} onChange={handleChange} />
      <p>Selected Value: {value}</p>
    </div>
  );
};

// Default RangeInput Story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Range',
  id: 'range-default',
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
};

// Template for RangeInput2
const Template2 = (args) => {
  const [value, setValue] = useState(args.defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <RangeInput2 {...args} value={value} onChange={handleChange} />
      <p>Selected Value: {value}</p>
    </div>
  );
};

// RangeInput2 Story
export const StyledRange = Template2.bind({});
StyledRange.args = {
  id: 'range-styled',
  min: 0,
  max: 24,
  step: 1,
  defaultValue: 12,
};
