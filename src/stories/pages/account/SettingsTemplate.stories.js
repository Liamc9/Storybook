import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SettingsTemplate from '../../../components/pages/account/SettingsTemplate';
import { UserIcon2, NotificationsIcon, MoneyIcon } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Pages/Account/SettingsTemplate',
  component: SettingsTemplate,
  tags: ['pages', 'autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],

};

const Template = (args) => <SettingsTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Settings', // Now customizable
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
      link: '/billing',
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
      link: '/notifications',
    },
    {
      category: 'Preferences',
      icon: NotificationsIcon,
      text: 'Communication',
      link: '/communication',
    },
    {
      category: 'Help',
      icon: NotificationsIcon,
      text: 'Help & FAQs',
      link: '/help',
    },
    {
      category: 'Help',
      icon: NotificationsIcon,
      text: 'About Us',
      link: '/about-us',
    },
  ],
};
