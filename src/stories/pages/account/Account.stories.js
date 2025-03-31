import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Account from '../../../components/pages/account/Account'; // Adjust the path as needed
import {
  FiHelpCircle,
  FiBell,
  FiLock
} from 'react-icons/fi';
import {
  FaRegCreditCard,
  FaRegUser
} from 'react-icons/fa';

export default {
  title: 'Pages/Account/Account',
  component: Account,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Account {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentUser: { uid: 'user123' },
  userData: {
    id: 'user123',
    displayName: 'Jane Doe',
    photoURL: 'https://via.placeholder.com/80',
  },
  logout: () => {
    console.log('Mock logout triggered');
    return Promise.resolve();
  },
  settings: [
    {
      category: 'Account',
      icon: FaRegUser,
      text: 'Manage Account',
      link: '/account/manageaccount/user123',
    },
    {
      category: 'Account',
      icon: FaRegCreditCard,
      text: 'Plans & Billing',
      link: '/account/plansandbilling/user123',
    },
    {
      category: 'Preferences',
      icon: FiBell,
      text: 'Manage Notifications',
      link: '/account/managenotifications/user123',
    },
    {
      category: 'Preferences',
      icon: FiLock,
      text: 'Privacy & Security',
      link: '/account/privacyandsecurity/user123',
    },
    {
      category: 'Help',
      icon: FiHelpCircle,
      text: 'Help & FAQs',
      link: '/account/helpandfaqs',
    },
  ],
};
