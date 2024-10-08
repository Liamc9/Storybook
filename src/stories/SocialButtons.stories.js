// src/stories/SocialButtons.stories.jsx

import React from 'react';
import SocialButtons from '../components/SocialButtons';

// Storybook metadata configuration
export default {
  title: 'Atoms/DisplayComponents/SocialButtons',
  component: SocialButtons,
  tags: ['autodocs'],
};

// Default story for the SocialButtons component
export const Default = () => <SocialButtons />;
Default.storyName = 'Default Social Buttons';
Default.parameters = {
  docs: {
    description: {
      story: 'This shows the default appearance of the SocialButtons component, with all available social media links.',
    },
  },
};

// Variation with a dark background
export const DarkBackground = () => (
  <div style={{ padding: '20px', backgroundColor: '#333', height: '100vh' }}>
    <SocialButtons />
  </div>
);
DarkBackground.storyName = 'Social Buttons on Dark Background';
DarkBackground.parameters = {
  docs: {
    description: {
      story: 'SocialButtons component displayed on a dark background to test visibility and hover effects.',
    },
  },
};

// Variation with larger padding
export const LargerPadding = () => (
  <div style={{ padding: '50px' }}>
    <SocialButtons />
  </div>
);
LargerPadding.storyName = 'Social Buttons with Larger Padding';
LargerPadding.parameters = {
  docs: {
    description: {
      story: 'SocialButtons component with increased padding to illustrate responsiveness and spacing.',
    },
  },
};
