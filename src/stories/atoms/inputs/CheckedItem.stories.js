// src/stories/CustomCheckbox.stories.jsx

import React, { useState } from 'react';
import CheckedItem from '../../../components/CheckedItem';
import * as Icons from '../../../assets/Icons';

export default {
  title: 'Atoms/Inputs/CheckedItem',
  component: CheckedItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`CheckedItem\` component is a customizable checkbox input that can include an icon and a label. It provides flexibility for use cases that require enhanced user interaction or visualization with icons.

### Features
- **Customizable Icon**: Select from a range of icons to display within the checkbox.
- **Interactive State**: Supports controlled state changes with visual feedback.
- **Label Support**: Includes a label for context or explanation.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import CheckedItem from './components/CheckedItem';
import * as Icons from './assets/Icons';

const ExampleComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const IconComponent = Icons['HomeIcon'];

  return (
    <CheckedItem
      label="Custom Checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      svg={<IconComponent className="w-6 h-6" />}
    />
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Label text for the checkbox.' },
    checked: { control: 'boolean', description: 'Indicates whether the checkbox is checked.' },
    iconName: {
      control: 'select',
      options: Object.keys(Icons),
      description: 'Name of the icon to display inside the checkbox.',
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const IconComponent = Icons[args.iconName];

  return (
    <CheckedItem
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
      svg={<IconComponent className="w-6 h-6" />}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Custom Checkbox',
  checked: false,
  iconName: 'HomeIcon',
};
