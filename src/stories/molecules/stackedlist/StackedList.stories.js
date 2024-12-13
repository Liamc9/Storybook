import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import StackedList from '../../../components/molecules/stackedlist/StackedList';
import { UsersIcon, NotificationsIcon } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Molecules/StackedList/StackedList',
  component: StackedList,
  tags: ['molecules', 'autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
# StackedList Component

The \`StackedList\` component is used to group a category of settings items. It displays a category title followed by a list of \`MenuItem\` components.

## Usage

\`\`\`jsx
import { UsersIcon, NotificationsIcon } from './icons/Icons';

<StackedList 
  category="Profile Settings" 
  items={[
    { icon: UsersIcon, text: 'Account Info', link: '/account-info' },
    { icon: NotificationsIcon, text: 'Privacy Settings', link: '/privacy-settings' },
  ]}
/>
\`\`\`
`,
      },
    },
  },
};

const Template = (args) => <StackedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Profile Settings',
  items: [
    { icon: UsersIcon, text: 'Account Info', link: '/account-info' },
    { icon: NotificationsIcon, text: 'Privacy Settings', link: '/privacy-settings' },
  ],
};
