import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Settings from '../../components/pages/Settings';
import { UserIcon2, NotificationsIcon, MoneyIcon } from '../../components/icons/Icons';

export default {
  title: 'Pages/Settings',
  component: Settings,
  tags: ['pages', 'autodocs'],
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
# Settings Component

The \`Settings\` component renders a settings page where items are grouped by category using the \`StackedList\` component.

## Props

### \`settings\` (array of objects)
An array of setting items where each item has the following shape:
- \`category\` (string): The category of the setting.
- \`icon\` (React component): The icon component for the setting (imported from the \`icons\` file).
- \`text\` (string): The text label for the setting.
- \`link\` (string): The URL to navigate to when the setting is clicked.

## Example Usage

\`\`\`jsx
import { UsersIcon, NotificationsIcon } from './icons/Icons';

<Settings
  settings={[
    { category: 'Profile Settings', icon: UsersIcon, text: 'Account Info', link: '/account-info' },
    { category: 'Profile Settings', icon: NotificationsIcon, text: 'Privacy Settings', link: '/privacy-settings' },
    { category: 'Notifications', icon: NotificationsIcon, text: 'Email Notifications', link: '/email-notifications' },
  ]}
/>
\`\`\`
        `,
      },
    },
  },
};

const Template = (args) => <Settings {...args} />;

export const Default = Template.bind({});
Default.args = {
  settings: [
    {
      category: 'Account',
      icon: UserIcon2,
      text: 'Manage Account',
      link: '/account-info',
    },
    {
        category: 'Account',
        icon: MoneyIcon,
        text: 'Manage Billing',
        link: '/account-info',
      },
    {
      category: 'Preferences',
      icon: NotificationsIcon,
      text: 'Privacy and Security',
      link: '/privacy-settings',
    },
    {
      category: 'Preferences',
      icon: NotificationsIcon,
      text: 'Notifications',
      link: '/email-notifications',
    },
    {
        category: 'Preferences',
        icon: NotificationsIcon,
        text: 'Communication',
        link: '/email-notifications',
      },
    {
        category: 'Help',
        icon: NotificationsIcon,
        text: 'Help & FAQs',
        link: '/email-notifications',
      },
      {
        category: 'Help',
        icon: NotificationsIcon,
        text: 'About Us',
        link: '/email-notifications',
      },
  ],
};
