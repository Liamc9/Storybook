// src/stories/Input.stories.jsx

import React, { useState } from 'react';
import Input2 from '../../../components/form/inputs/Input2.jsx'; // Adjust the path based on your project structure

export default {
  title: 'Form/Input2',
  component: Input2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

# Input2 Component

The \`Input2\` component is a reusable form element that supports various input types such as text, password, email, number, URL, and telephone. It is highly customizable with label support and color options.

### Features
- **Multiple Input Types**: Supports \`text\`, \`password\`, \`email\`, \`number\`, \`url\`, and \`tel\`.
- **Customizable Appearance**: Change label and border colors to fit your design.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import Input2 from './components/Input2';

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
      options: ['text', 'password', 'email', 'number', 'url', 'tel'],
    },
    label: { control: 'text' },
    colour: {
      control: 'color', // Use the color picker control
    },
    minHeight: { control: 'text' }, // If applicable
  },
}

// Template for creating stories
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Input2
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  name: 'defaultInput',
  type: 'text',
  label: 'Default Input',
  colour: '#3B82F6', // Default color (e.g., Tailwind blue-500)
  placeholder: 'Enter text here',
};

// Password Input Story
export const Password = Template.bind({});
Password.args = {
  name: 'passwordInput',
  type: 'password',
  label: 'Password',
  colour: '#EF4444', // Red color
  placeholder: 'Enter your password',
  minLength: 6,
};

// Email Input Story
export const Email = Template.bind({});
Email.args = {
  name: 'emailInput',
  type: 'email',
  label: 'Email Address',
  colour: '#10B981', // Green color
  placeholder: 'Enter your email',
};

// Number Input Story
export const NumberInput = Template.bind({});
NumberInput.args = {
  name: 'numberInput',
  type: 'number',
  label: 'Age',
  colour: '#F59E0B', // Yellow color
  placeholder: 'Enter your age',
  min: 1,
  max: 100,
};

// URL Input Story
export const URL = Template.bind({});
URL.args = {
  name: 'urlInput',
  type: 'url',
  label: 'Website',
  colour: '#8B5CF6', // Purple color
  placeholder: 'https://example.com',
};

// Tel Input Story
export const Tel = Template.bind({});
Tel.args = {
  name: 'telInput',
  type: 'tel',
  label: 'Phone Number',
  colour: '#3B82F6', // Blue color
  placeholder: '+1 (555) 123-4567',
  pattern: '^\\+?[0-9\\s\\-]{7,15}$', // Simple pattern for international numbers
};
