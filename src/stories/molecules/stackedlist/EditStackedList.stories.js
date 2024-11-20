import React from 'react';
import EditStackedList from '../../../components/molecules/stackedlist/EditStackedList';
import { UserIcon2 } from '../../../components/icons/Icons';

export default {
  title: 'Molecules/StackedList/EditStackedList',
  component: EditStackedList,
  tags: ['molecules', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### EditStackedList Component

The \`EditStackedList\` component displays a vertically stacked list of dynamic components. It supports components such as \`EditableTextField\`, \`SelectField\`, and \`ToggleField\`.

#### Features:
- Dynamically renders different types of components (e.g., editable text fields, dropdowns, toggle switches).
- Accepts configuration through an \`items\` array, where each item specifies the type of component and its props.

#### Props:
- **\`items\`** (Array of Objects): Defines the list of components to render. Each object should have:
  - **\`type\`** (String): The type of component to render (e.g., \`EditableTextField\`, \`SelectField\`, \`ToggleField\`).
  - **\`props\`** (Object): The props to pass to the respective component.

#### Usage Example:
\`\`\`jsx
import React, { useState } from 'react';
import EditStackedList from './EditStackedList';
import { UserIcon2 } from '../../icons/Icons';

const Example = () => {
  const [textValue, setTextValue] = useState('Edit me');
  const [selectValue, setSelectValue] = useState('Option 1');
  const [toggleValue, setToggleValue] = useState(false);

  const items = [
    {
      type: 'EditableTextField',
      props: {
        icon: UserIcon2,
        name: 'Text Field',
        value: textValue,
        onUpdate: setTextValue,
      },
    },
    {
      type: 'SelectField',
      props: {
        icon: UserIcon2,
        name: 'Select Field',
        value: selectValue,
        options: ['Option 1', 'Option 2', 'Option 3'],
        onChange: setSelectValue,
      },
    },
    {
      type: 'ToggleField',
      props: {
        icon: UserIcon2,
        name: 'Toggle Field',
        value: toggleValue,
        onChange: setToggleValue,
      },
    },
  ];

  return <EditStackedList items={items} />;
};

export default Example;
\`\`\`
`,
      },
    },
  },
};

const Template = (args) => <EditStackedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      type: 'EditableTextField',
      props: {
        icon: UserIcon2,
        name: 'Username',
        value: 'John Doe',
        onUpdate: (newValue) => console.log('Updated Username:', newValue),
      },
    },
    {
      type: 'SelectField',
      props: {
        icon: UserIcon2,
        name: 'Language',
        value: 'English',
        options: ['English', 'Spanish', 'French'],
        onChange: (newValue) => console.log('Updated Language:', newValue),
      },
    },
    {
      type: 'ToggleField',
      props: {
        icon: UserIcon2,
        name: 'Enable Notifications',
        value: true,
        onChange: (newValue) => console.log('Toggled Notifications:', newValue),
      },
    },
  ],
};
Default.parameters = {
  docs: {
    description: {
      story: `
This is the default usage of the \`EditStackedList\` component. It dynamically renders a stacked list of components (\`EditableTextField\`, \`SelectField\`, \`ToggleField\`), each configured with its specific props.`,
    },
  },
};
