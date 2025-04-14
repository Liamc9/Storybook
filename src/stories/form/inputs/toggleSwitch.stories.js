// src/components/__stories__/ToggleSwitch.stories.jsx

import React from 'react';
import ToggleSwitch from '../../../components/form/inputs/toggleSwitches/ToggleSwitch';
import ToggleSwitch2 from '../../../components/form/inputs/toggleSwitches/ToggleSwitch2';

export default {
  title: 'Form/Inputs/ToggleSwitch',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the toggle switch',
      defaultValue: 'Default Toggle',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the toggle switch',
      defaultValue: 'toggle-default',
    },
    checked: {
      control: 'boolean',
      description: 'Toggle switch checked state',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle switch',
      defaultValue: false,
    },
  },
};

export const DefaultToggle = (args) => <ToggleSwitch {...args} />;
DefaultToggle.args = {
  label: 'Default Toggle',
  id: 'toggle-default',
  disabled: false,
};

export const AnimatedToggle = (args) => <ToggleSwitch2 {...args} />;
AnimatedToggle.args = {
  label: 'Animated Toggle',
  id: 'toggle-animated',
  disabled: false,
};
