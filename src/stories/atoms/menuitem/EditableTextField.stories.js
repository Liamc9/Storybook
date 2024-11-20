import React, { useState } from 'react';
import EditableTextField from '../../../components/atoms/menuitem/EditableTextField';
import { UserIcon2 } from '../../../components/icons/Icons';

export default {
  title: 'Atoms/MenuItem/EditableTextField',
  component: EditableTextField,
  tags: ['atoms', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`EditableTextField\` component allows users to display a field value with an option to edit it inline. 
It includes an optional icon and allows you to pass the updated value to a parent component.

### Features:
- **Edit Button:** Toggles between editable and view-only modes.
- **Editable Input:** Displays an input field when in editing mode, which automatically saves the updated value on blur.
- **Props:**
  - \`icon\` (optional): A React component for displaying an icon.
  - \`name\`: The label for the field.
  - \`value\`: The initial value for the field.
  - \`onUpdate\`: Callback for handling updates to the field value.

### Usage:
\`\`\`jsx
import React, { useState } from 'react';
import EditableTextField from '../../../components/atoms/menuitem/EditableTextField';
import { UserIcon2 } from '../../../components/icons/Icons';

const Example = () => {
  const [value, setValue] = useState('Editable Field Value');

  const handleUpdate = (newValue) => {
    setValue(newValue);
    console.log('Updated value:', newValue);
  };

  return (
    <EditableTextField
      icon={UserIcon2}
      name="Field Name"
      value={value}
      onUpdate={handleUpdate}
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

  const handleUpdate = (newValue) => {
    setValue(newValue);
  };

  return <EditableTextField {...args} value={value} onUpdate={handleUpdate} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: UserIcon2,
  name: 'Field Name',
  value: 'Editable Field Value',
};
Default.parameters = {
  docs: {
    description: {
      story: `
This is the default usage of the \`EditableTextField\` component. Click the "Edit" button to modify the field value.
The updated value is saved on blur or when you click "Done".`,
    },
  },
};
