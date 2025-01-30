// src/stories/TextInput.stories.jsx

import React, { useState } from 'react';
import TextInput from '../../../components/form/inputs/textInputs/TextInput.jsx'; // Adjust the path based on your project structure

export default {
  title: 'Form/TextInputDocs',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

The \`TextInput\` component is a reusable and aesthetically pleasing text input field built with **React** and **Styled Components**. It is designed to be highly customizable, allowing developers to pass any standard HTML input attributes directly as props. Additionally, it supports custom props such as \`label\` and \`error\` for enhanced functionality.

### Features
- **All Standard HTML Input Attributes**: Supports attributes like \`type\`, \`name\`, \`placeholder\`, \`value\`, \`onChange\`, and more.
- **Customizable Labels and Error Messages**: Easily add labels and display error messages for better user experience.
- **Accessibility**: Built with accessibility in mind, associating labels with inputs and supporting ARIA attributes.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import TextInput from './components/TextInput';

const ExampleComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-4">
      <TextInput
        label="Username"
        type="text"
        name="username"
        placeholder="Enter your username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
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
    // Standard HTML Input Attributes
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'password',
        'email',
        'number',
        'url',
        'tel',
        'date',
        'file',
        'checkbox',
        'radio',
        'color',
        'range',
        'search',
        'submit',
        'reset',
        'hidden',
        'image',
        'month',
        'week',
        'time',
        'datetime-local',
        'month',
      ],
      description: 'Specifies the type of input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    name: {
      control: 'text',
      description: 'The name of the input, used when submitting form data.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    value: {
      control: 'text',
      description: 'The current value of the input. Controlled components should manage this value via state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      control: 'function',
      description: "Callback function triggered when the input's value changes. Receives the event object as an argument.",
      table: {
        type: { summary: '(event) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed inside the input when it is empty.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the input. Useful for associating the input with a label for accessibility.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Generated automatically if not provided' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the input is disabled and not editable.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the input is read-only and cannot be modified by the user.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'If true, the input must be filled out before submitting the form.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Specifies the maximum number of characters allowed in the input.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    minLength: {
      control: 'number',
      description: 'Specifies the minimum number of characters required in the input.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    pattern: {
      control: 'text',
      description: "A regular expression the input's value must match for validation.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'If true, the input will automatically focus when the component mounts.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoComplete: {
      control: { type: 'select' },
      options: ['on', 'off', 'username', 'current-password', 'new-password'],
      description: 'Specifies whether the browser should enable autocomplete for the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on' },
      },
    },
    list: {
      control: 'text',
      description: 'Refers to a <datalist> element that provides predefined options for the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    step: {
      control: 'number',
      description: 'Specifies the legal number intervals for the input (useful for number, range, etc.).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    min: {
      control: 'number',
      description: 'Specifies the minimum value for the input (useful for number, range, etc.).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'number',
      description: 'Specifies the maximum value for the input (useful for number, range, etc.).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows the user to enter multiple values (useful for file inputs).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      control: 'text',
      description: 'Specifies the types of files that the server accepts (useful for file inputs).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    capture: {
      control: 'text',
      description: 'Specifies which camera to use for file inputs capturing (useful for file inputs on mobile devices).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'number',
      description: 'Specifies the height of the input (useful for image inputs).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: 'number',
      description: 'Specifies the width of the input (useful for image inputs).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    form: {
      control: 'text',
      description: 'Associates the input with a <form> element by its id.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    formAction: {
      control: 'text',
      description: 'Specifies the URL that processes the form submission.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    formEncType: {
      control: { type: 'select' },
      options: [
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ],
      description: 'Specifies how form data should be encoded when submitted.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'application/x-www-form-urlencoded' },
      },
    },
    formMethod: {
      control: { type: 'select' },
      options: ['get', 'post'],
      description: 'Specifies the HTTP method to use when submitting the form.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'get' },
      },
    },
    formNoValidate: {
      control: 'boolean',
      description: 'If true, disables form validation when submitting the form.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    formTarget: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Specifies where to display the response after submitting the form.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
      },
    },
    src: {
      control: 'text',
      description: 'Specifies the URL of the image to be used as a submit button (useful for image inputs).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'number',
      description: 'Specifies the visible width of the input in characters.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    spellCheck: {
      control: 'boolean',
      description: 'Indicates whether the element is to have its spelling and grammar checked or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Specifies the tab order of the element.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    title: {
      control: 'text',
      description: 'Extra information about the element, typically shown as a tooltip when hovering.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // ARIA Attributes
    'aria-label': {
      control: 'text',
      description: 'Defines a string value that labels the current element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'aria-required': {
      control: 'boolean',
      description: 'Indicates that user input is required on the element before a form can be submitted.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'aria-invalid': {
      control: { type: 'select' },
      options: ['true', 'false'],
      description: 'Indicates the entered value does not conform to the format expected by the application.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
    },
    // Custom Props
    label: {
      control: 'text',
      description: 'The label text displayed above the input field.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message displayed below the input field.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

// Template for creating stories
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <TextInput
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
  placeholder: 'Enter text here',
};

// Password Input Story
export const Password = Template.bind({});
Password.args = {
  name: 'passwordInput',
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
  minLength: 6,
};

// Email Input Story
export const Email = Template.bind({});
Email.args = {
  name: 'emailInput',
  type: 'email',
  label: 'Email Address',
  placeholder: 'Enter your email',
};

// Number Input Story
export const NumberInput = Template.bind({});
NumberInput.args = {
  name: 'numberInput',
  type: 'number',
  label: 'Age',
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
  placeholder: 'https://example.com',
};

// Tel Input Story
export const Tel = Template.bind({});
Tel.args = {
  name: 'telInput',
  type: 'tel',
  label: 'Phone Number',
  placeholder: '+1 (555) 123-4567',
  pattern: '^\\+?[0-9\\s\\-]{7,15}$', // Simple pattern for international numbers
};

// Disabled Input Story
export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabledInput',
  type: 'text',
  label: 'Disabled Input',
  placeholder: 'Cannot edit this',
  disabled: true,
};

// ReadOnly Input Story
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  name: 'readOnlyInput',
  type: 'text',
  label: 'Read-Only Input',
  value: 'Read only',
  readOnly: true,
};

// Input with Error Message Story
export const WithError = Template.bind({});
WithError.args = {
  name: 'errorInput',
  type: 'text',
  label: 'Username',
  placeholder: 'Enter your username',
  error: 'Username must be at least 3 characters long.',
};

// Input with Custom ARIA Attributes Story
export const WithARIA = Template.bind({});
WithARIA.args = {
  name: 'ariaInput',
  type: 'text',
  label: 'Accessible Input',
  placeholder: 'Enter text',
  'aria-label': 'Accessible Text Input',
  'aria-required': true,
};

// Input with Datalist Story
export const WithDatalist = Template.bind({});
WithDatalist.args = {
  name: 'datalistInput',
  type: 'text',
  label: 'Choose a fruit',
  placeholder: 'Select a fruit',
  list: 'fruits',
};

// Input with Autocomplete Story
export const WithAutocomplete = Template.bind({});
WithAutocomplete.args = {
  name: 'autocompleteInput',
  type: 'text',
  label: 'Search',
  placeholder: 'Search...',
  autoComplete: 'off',
};
