import React from 'react';
import ColorPicker from '../../../components/form/inputs/colorPickers/ColorPicker';

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

export const Default = (args) => <ColorPicker {...args} />;
Default.args = {
  label: 'Choose Color',
  id: 'color-picker-default',
  value: '#ff0000',
  disabled: false,
};
