// src/components/__stories__/Button.stories.jsx

import React, { useState } from 'react';
import SubmitButton from '../../../components/form/inputs/formButtons/SubmitButton';
import ResetButton from '../../../components/form/inputs/formButtons/ResetButton';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/FormButtons',
  component: SubmitButton,
  subcomponents: { ResetButton },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the button',
      defaultValue: 'Click Me',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
  },
};

// Template for SubmitButton
const SubmitTemplate = (args) => {

  return <SubmitButton {...args} />;
};

// SubmitButton Story
export const Submit = SubmitTemplate.bind({});
Submit.args = {
  label: 'Submit',
};

// Template for ResetButton
const ResetTemplate = (args) => {


  return <ResetButton {...args}  />;
};

// ResetButton Story
export const Reset = ResetTemplate.bind({});
Reset.args = {
  label: 'Reset',
};
