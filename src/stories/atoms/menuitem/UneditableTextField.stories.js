import React from 'react';
import { UserIcon2, MailIcon, PhoneIcon } from '../../../components/icons/Icons';
import UneditableTextField from '../../../components/atoms/menuitem/UneditableTextField';

export default {
  title: 'Atoms/MenuItem/UneditableTextField',
  component: UneditableTextField,
    tags: ['atoms', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# UneditableTextField Component

The \`UneditableTextField\` component is used to display static information with an icon, a field name, and its corresponding value. 

### Props
- \`icon\`: A React component for the icon, such as from \`react-icons\`.
- \`name\`: A string representing the field name (e.g., "Email").
- \`value\`: A string representing the field value (e.g., "example@example.com").

### Example Usage

\`\`\`jsx
import { UserIcon2 } from 'react-icons/fa';
import UneditableTextField from './UneditableTextField';

<UneditableTextField 
  icon={UserIcon2} 
  name="Username" 
  value="John Doe" 
/>;
\`\`\`

This component is suitable for profile pages, read-only forms, or any static display of user data.
        `,
      },
    },
  },
};

const Template = (args) => <UneditableTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: UserIcon2,
  name: 'Username',
  value: 'John Doe',
};

export const Email = Template.bind({});
Email.args = {
  icon: MailIcon,
  name: 'Email',
  value: 'example@example.com',
};

export const Phone = Template.bind({});
Phone.args = {
  icon: PhoneIcon,
  name: 'Phone Number',
  value: '+1234567890',
};
