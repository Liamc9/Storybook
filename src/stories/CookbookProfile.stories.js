import React from 'react';
import CookbookProfile from '../components/CookbookProfile';
import { action } from '@storybook/addon-actions';

// Example data for the chef's profile
const sampleUserData = {
  firstName: 'Gordon',
  lastName: 'Ramsay',
  profilePic: 'https://cdn.britannica.com/20/200220-050-394A5A7C/Jamie-Oliver-2016.jpg',
   coverPhoto: 'https://www.ocregister.com/wp-content/uploads/2021/10/Food_-_Gordon_Ramsay_50962.jpg?w=1024',
  categories: 'Michelin Star Chef, TV Personality',
};

export default {
  title: 'Components/CookbookProfile',
  component: CookbookProfile,
  argTypes: {
    isProfileOwner: { control: 'boolean' },
    setIsSubscriptionModalOpen: { action: 'clicked' },
    openDrawer: { action: 'clicked' },
  },
};

// Default Story: Profile Owner View
const Template = (args) => <CookbookProfile {...args} />;

export const ProfileOwner = Template.bind({});
ProfileOwner.args = {
  isProfileOwner: true,
  userData: sampleUserData,
  setIsSubscriptionModalOpen: action('Subscription Modal Opened'),
  openDrawer: action('Drawer Opened'),
};

// Non-Owner View with Subscription and Drawer Actions
export const NonProfileOwner = Template.bind({});
NonProfileOwner.args = {
  isProfileOwner: false,
  userData: sampleUserData,
  setIsSubscriptionModalOpen: action('Subscription Modal Opened'),
  openDrawer: action('Drawer Opened'),
};
