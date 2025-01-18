// src/stories/Input.stories.jsx

import React, { useState } from 'react';
import Input from '../../../components/atoms/inputs/Input.jsx';

export default {
  title: 'Atoms/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

The \`Input\` component is a reusable form element that supports various input types such as text, password, email, and textarea. It is highly customizable with label support and color options.

### Features
- **Multiple Input Types**: Supports \`text\`, \`password\`, \`email\`, \`number\`, and \`textarea\`.
- **Customizable Appearance**: Change label and color to fit your design.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import Input from './components/Input';

const ExampleComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-4">
      <Input
        name="exampleInput"
        type="text"
        label="Example Label"
        colour="#3B82F6" // Tailwind blue-500
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
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
    minHeight: { control: 'text' },
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
