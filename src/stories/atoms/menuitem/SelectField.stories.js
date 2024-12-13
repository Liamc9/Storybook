import React, { useState } from 'react';
import SelectField from '../../../components/atoms/menuitem/SelectField';
import { UserIcon2 } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Atoms/MenuItem/SelectField',
  component: SelectField,
  tags: ['atoms', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SelectField\` component is a reusable dropdown field designed to display a field name, the current value, and a dropdown icon. 

### Features:
- **Icon:** Optional icon on the left side of the field.
- **Field Name:** Displayed in bold text for emphasis.
- **Current Value:** Displayed on the right in slightly lighter text.
- **Dropdown:** Clicking the value or chevron icon opens a dropdown menu with options.
- **Dynamic Options:** Pass an array of options to populate the dropdown.
- **Callback:** Pass the selected value back to the parent component using the \`onChange\` callback.

### Props:
- \`icon\` (optional): A React component for displaying an icon.
- \`name\`: The label for the field.
- \`value\`: The currently selected value.
- \`options\`: An array of options for the dropdown.
- \`onChange\`: Callback for handling changes to the selected value.

### Example Usage:
\`\`\`jsx
import React, { useState } from 'react';
import SelectField from './SelectField';
import { ReactComponent as SampleIcon } from './sample-icon.svg';

const Example = () => {
  const [selectedValue, setSelectedValue] = useState('Option 1');

  const handleChange = (newValue) => {
    console.log('Selected Value:', newValue);
    setSelectedValue(newValue);
  };

  return (
    <SelectField
      icon={SampleIcon}
      name="Field Name"
      value={selectedValue}
      options={['Option 1', 'Option 2', 'Option 3']}
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

  return <SelectField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: UserIcon2,
  name: 'Field Name',
  value: 'Option 1',
  options: ['Option 1', 'Option 2', 'Option 3'],
};
Default.parameters = {
  docs: {
    description: {
      story: `
This is the default usage of the \`SelectField\` component. It displays a dropdown field with an optional icon, a field name, and a current value.

- **Click on the value or chevron icon** to open the dropdown menu.
- **Select a new value** to trigger the \`onChange\` callback and update the displayed value.`,
    },
  },
};
