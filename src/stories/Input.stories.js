// src/stories/Input.stories.jsx

import React, { useState } from 'react';
import Input from '../components/Input.jsx';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'textarea'],
    },
    label: { control: 'text' },
    colour: {
      control: 'color', // Use the color picker control
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'defaultInput',
  type: 'text',
  label: 'Default Input',
  colour: '#3B82F6', // Default color (e.g., Tailwind blue-500)
};

export const Password = Template.bind({});
Password.args = {
  name: 'passwordInput',
  type: 'password',
  label: 'Password',
  colour: '#EF4444', // Red color
};

export const Email = Template.bind({});
Email.args = {
  name: 'emailInput',
  type: 'email',
  label: 'Email Address',
  colour: '#10B981', // Green color
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: 'textArea',
  type: 'textarea',
  label: 'Your Message',
  colour: '#8B5CF6', // Purple color
};
