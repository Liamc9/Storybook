// src/stories/SocialButtons.stories.jsx

import React from 'react';
import SocialButtons from '../../../components/SocialButtons';

// Storybook metadata configuration
export default {
  title: 'Atoms/Other/SocialButtons',
  component: SocialButtons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SocialButtons\` component provides a set of styled buttons or icons that link to various social media platforms. This component is ideal for use in headers, footers, or sections of a webpage where social media presence is showcased.

### Features
- **Customizable Display**: Can be styled to fit light or dark themes.
- **Responsive**: Adjusts based on parent container properties, ensuring a seamless user experience.
- **Hover Effects**: Adds interactivity and visual appeal when hovering over buttons.

### Usage

\`\`\`jsx
import React from 'react';
import SocialButtons from './components/SocialButtons';

const ExampleComponent = () => (
  <div>
    <SocialButtons />
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
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
