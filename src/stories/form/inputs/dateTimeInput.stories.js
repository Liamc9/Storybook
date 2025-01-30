// src/components/__stories__/DateInput.stories.jsx

import React, { useState } from 'react';
import DateInput from '../../../components/form/inputs/dateInputs/DateInput';
import DateTimeLocalInput from '../../../components/form/inputs/dateInputs/DateTimeLocalInput';
import TimeInput from '../../../components/form/inputs/dateInputs/TimeInput';

// Storybook Meta Configuration
export default {
  title: 'Form/Inputs/DateTimeInput',
  component: DateInput,
  subcomponents: { DateTimeLocalInput, TimeInput },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input',
      defaultValue: 'Select Date',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the input',
      defaultValue: 'date-input-default',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input',
      defaultValue: 'dateInput',
    },
    value: {
      control: 'date',
      description: 'Current value of the input',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true',
      defaultValue: false,
    },
    min: {
      control: 'date',
      description: 'Minimum selectable date',
      defaultValue: undefined,
    },
    max: {
      control: 'date',
      description: 'Maximum selectable date',
      defaultValue: undefined,
    },
    required: {
      control: 'boolean',
      description: 'Marks the input as required',
      defaultValue: false,
    },
  },
};

// Template for DateInput
const DateInputTemplate = (args) => {


  return (
    <div>
      <DateInput {...args}  />
    </div>
  );
};

// Default DateInput Story
export const DefaultDateInput = DateInputTemplate.bind({});
DefaultDateInput.args = {
  label: 'Select Date',
  id: 'date-input-default',
  name: 'dateInput',
  value: '',
  min: '2023-01-01',
  max: '2025-12-31',
  required: false,
};

// Template for DateTimeLocalInput
const DateTimeLocalTemplate = (args) => {

  return (
    <div>
      <DateTimeLocalInput {...args}  />
    </div>
  );
};

// DateTimeLocalInput Story
export const DateTimeLocal = DateTimeLocalTemplate.bind({});
DateTimeLocal.args = {
  label: 'Select Date & Time',
  name: 'dateTimeLocalInput',
  value: '',
  min: '2023-01-01T00:00',
  max: '2025-12-31T23:59',
  required: false,
};

// Template for TimeInput
const TimeInputTemplate = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <TimeInput {...args} value={value} onChange={handleChange} />
    </div>
  );
};

// Default TimeInput Story
export const DefaultTimeInput = TimeInputTemplate.bind({});
DefaultTimeInput.args = {
  label: 'Select Time',
  name: 'timeInput',
  value: '',
  placeholder: 'HH:MM',
  required: false,
};


