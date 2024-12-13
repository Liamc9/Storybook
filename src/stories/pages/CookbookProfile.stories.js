// src/stories/CookbookProfile.stories.jsx

import React from 'react';
import CookbookProfile from '../../components/pages/CookbookProfile';
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
  title: 'Pages/CookbookProfile',
  tags: ['autodocs'],
  component: CookbookProfile,
  parameters: {
    docs: {
      description: {
        component: `
The \`CookbookProfile\` component is designed for displaying user profiles in a cookbook application. It provides information such as the user's name, profile picture, cover photo, and categories. This component can be customized for both profile owners and other users viewing the profile.

### Features
- **Profile Owner View**: Allows the profile owner to edit or manage their profile.
- **Non-Owner View**: Provides options for subscribing and interacting with the profile.
- **Custom Actions**: Supports actions for opening modals and drawers for profile interactions.

### Usage

\`\`\`jsx
import React from 'react';
import CookbookProfile from './components/CookbookProfile';
import { action } from '@storybook/addon-actions';

const sampleUserData = {
  firstName: 'Gordon',
  lastName: 'Ramsay',
  profilePic: 'https://cdn.britannica.com/20/200220-050-394A5A7C/Jamie-Oliver-2016.jpg',
  coverPhoto: 'https://www.ocregister.com/wp-content/uploads/2021/10/Food_-_Gordon_Ramsay_50962.jpg?w=1024',
  categories: 'Michelin Star Chef, TV Personality',
};

const ExampleComponent = () => (
  <CookbookProfile
    isProfileOwner={true}
    userData={sampleUserData}
    setIsSubscriptionModalOpen={action('Subscription Modal Opened')}
    openDrawer={action('Drawer Opened')}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    isProfileOwner: { control: 'boolean', description: 'Indicates if the profile is viewed by the owner.' },
    setIsSubscriptionModalOpen: { action: 'clicked', description: 'Function triggered to open the subscription modal.' },
    openDrawer: { action: 'clicked', description: 'Function triggered to open a drawer for additional profile actions.' },
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
