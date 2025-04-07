// src/components/__stories__/Checkbox.stories.jsx

import React, { useState } from 'react';
import Checkbox from '../../../components/form/inputs/checkboxInputs/Checkbox';
import Checkbox2 from '../../../components/form/inputs/checkboxInputs/Checkbox2';
import Checkbox3 from '../../../components/form/inputs/checkboxInputs/Checkbox3';
import CheckedItem from '../../../components/form/inputs/checkboxInputs/CheckedItem';
// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/Checkbox',
  component: Checkbox,
  subcomponents: { Checkbox2, Checkbox3 },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the checkbox',
      defaultValue: 'Default Checkbox',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the checkbox',
      defaultValue: 'checkbox-default',
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox checked state',
      defaultValue: false,
    },
  },
};

// Template for Default Checkbox
const Template = (args) => {


  return <Checkbox {...args}  />;
};

// Default Checkbox Story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
  id: 'checkbox-default',
};

// Template for Checkbox2
const Template2 = (args) => {


  return <Checkbox2 {...args}/>;
};

// Checkbox2 Story
export const AnimatedCheckbox = Template2.bind({});
AnimatedCheckbox.args = {
  label: 'Animated Checkbox',
  id: 'checkbox-animated',
};

// Template for Checkbox3
const Template3 = (args) => {


  return <Checkbox3 {...args}/>;
};

// Checkbox3 Story
export const SVGCheckbox = Template3.bind({});
SVGCheckbox.args = {
  label: 'SVG Checkbox',
  id: 'checkbox-svg',
};

// Template for CheckedItem
const Template4 = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <CheckedItem {...args} checked={checked} onChange={handleChange} />;
};
// CheckedItem Story
export const CheckedItemStory = Template4.bind({}); 
CheckedItemStory.args = {
  label: 'Checked Item',
  id: 'checked-item',
};
CheckedItemStory.argTypes = {
  onChange: { action: 'changed' },
};
