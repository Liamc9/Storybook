// src/components/__stories__/ToggleSwitch.stories.jsx

import React, { useState } from 'react';
import ToggleSwitch from '../../../components/form/inputs/toggleSwitches/ToggleSwitch';
import ToggleSwitch2 from '../../../components/form/inputs/toggleSwitches/ToggleSwitch2';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/ToggleSwitch',
  component: ToggleSwitch,
  subcomponents: { ToggleSwitch2 },
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

// Template for ToggleSwitch
const ToggleTemplate = (args) => {
 

  return <ToggleSwitch {...args} />;
};

// Default ToggleSwitch Story
export const DefaultToggle = ToggleTemplate.bind({});
DefaultToggle.args = {
  label: 'Default Toggle',
  id: 'toggle-default',
  disabled: false,
};

// Template for ToggleSwitch2
const ToggleSwitch2Template = (args) => {

  return <ToggleSwitch2 {...args} />;
};

// ToggleSwitch2 Story
export const AnimatedToggle = ToggleSwitch2Template.bind({});
AnimatedToggle.args = {
  label: 'Animated Toggle',
  id: 'toggle-animated',
  disabled: false,
};

