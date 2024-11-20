import React, { useState } from 'react';
import ToggleField from '../../../components/atoms/menuitem/ToggleField';
import { UserIcon2 } from '../../../components/icons/Icons';

export default {
  title: 'Atoms/MenuItem/ToggleField',
  component: ToggleField,
  tags: ['atoms', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`ToggleField\` component is a reusable field with a toggle button on the right side. It allows toggling between \`true\` and \`false\` values.

### Features:
- **Icon:** Optional icon displayed on the left.
- **Field Name:** Label for the field displayed prominently.
- **Toggle Button:** Positioned on the right, toggles the value when clicked.
- **Boolean Value:** \`true\` when the toggle is active, \`false\` otherwise.
- **Callback:** Triggers the \`onChange\` function with the updated value.

### Props:
- \`icon\` (optional): A React component for displaying an icon.
- \`name\`: The label for the field.
- \`value\`: The current state of the toggle button (\`true\` or \`false\`).
- \`onChange\`: Callback function triggered when the state changes.

### Example Usage:
\`\`\`jsx
import React, { useState } from 'react';
import ToggleField from './ToggleField';
import { UserIcon2 } from '../../../components/icons/Icons';

const Example = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = (newValue) => {
    console.log('Toggle Value:', newValue);
    setIsToggled(newValue);
  };

  return (
    <ToggleField
      icon={UserIcon2}
      name="Enable Feature"
      value={isToggled}
      onChange={handleChange}
    />
  );
};

export default Example;
\`\`\`
`
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return <ToggleField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: UserIcon2,
  name: 'Enable Feature',
  value: false,
};
Default.parameters = {
  docs: {
    description: {
      story: `
This is the default usage of the \`ToggleField\` component. The toggle button reflects the \`true/false\` value and switches its state when clicked.`,
    },
  },
};
