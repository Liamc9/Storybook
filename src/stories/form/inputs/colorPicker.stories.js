// src/components/__stories__/ColorPicker.stories.jsx

import React, { useState } from 'react';
import ColorPicker from '../../../components/form/inputs/colorPickers/ColorPicker';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/ColorPicker',
  component: ColorPicker,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the color picker',
      defaultValue: 'Choose Color',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the color picker',
      defaultValue: 'color-picker-default',
    },
    value: {
      control: 'color',
      description: 'Selected color value',
      defaultValue: '#ff0000',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the color picker when true',
      defaultValue: false,
    },
    onChange: { action: 'color-changed' },
  },
};

// Template for ColorPicker
const Template = (args) => {
  const [color, setColor] = useState(args.value);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <ColorPicker {...args} value={color} onChange={handleChange} />
      <p>Selected Color: <span style={{ color }}>{color}</span></p>
    </div>
  );
};

// Default ColorPicker Story
export const Default = Template.bind({});
Default.args = {
  label: 'Choose Color',
  id: 'color-picker-default',
  value: '#ff0000',
  disabled: false,
};

