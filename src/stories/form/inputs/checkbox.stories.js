// src/components/__stories__/Checkbox.stories.jsx

import React from 'react';
import Checkbox from '../../../components/form/inputs/checkboxInputs/Checkbox';
import Checkbox2 from '../../../components/form/inputs/checkboxInputs/Checkbox2';
import Checkbox3 from '../../../components/form/inputs/checkboxInputs/Checkbox3';
import CheckedItem from '../../../components/form/inputs/checkboxInputs/CheckedItem';
import { FaRegUserCircle } from 'react-icons/fa'; // Example icon, replace with your own

export default {
  title: 'Form/Inputs/Checkbox',
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


export const DefaultCheckbox = (args) => <Checkbox {...args} />;
DefaultCheckbox.args = {
  label: 'Default Checkbox',
  id: 'checkbox-default',
};


export const AnimatedCheckbox = (args) => <Checkbox2 {...args} />;
AnimatedCheckbox.args = {
  label: 'Animated Checkbox',
  id: 'checkbox-animated',
};


export const SVGCheckbox = (args) => <Checkbox3 {...args} />;
SVGCheckbox.args = {
  label: 'SVG Checkbox',
  id: 'checkbox-svg',
};


export const CheckedItemStory = (args) => <CheckedItem {...args} />;
CheckedItemStory.args = {
  label: 'Checked Item',
  id: 'checked-item',
  height: '7rem',
  width: '7rem',
  svg: <FaRegUserCircle size="3rem" />,
  color: '#3b82f6',
};

