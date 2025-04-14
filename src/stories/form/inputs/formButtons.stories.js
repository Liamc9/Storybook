// src/components/__stories__/Button.stories.jsx

import React from 'react';
import SubmitButton from '../../../components/form/inputs/formButtons/SubmitButton';
import ResetButton from '../../../components/form/inputs/formButtons/ResetButton';

export default {
  title: 'Form/Inputs/FormButtons',
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

export const Submit = (args) => <SubmitButton {...args} />;
Submit.args = {
  label: 'Submit',
};

export const Reset = (args) => <ResetButton {...args} />;
Reset.args = {
  label: 'Reset',
};
