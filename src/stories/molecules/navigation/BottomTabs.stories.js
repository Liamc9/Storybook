// src/stories/BottomTabs.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomTabs from '../../../components/navigation/BottomTabs';

export default {
  title: 'Molecules/Navigation/Tabs/BottomTabs',
  component: BottomTabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`BottomTabs\` component is a navigation element typically used at the bottom of mobile and web applications to provide easy access to main sections or pages. It enhances user experience by allowing seamless navigation between different parts of an application.

### Features
- **Navigation Support**: Works with \`react-router-dom\` for navigation between routes.
- **Responsive Design**: Adapts to different screen sizes and maintains usability on mobile devices.
- **Customizable Tabs**: Can be configured with various tab options as needed.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomTabs from './components/navigation/BottomTabs';

const ExampleComponent = () => (
  <MemoryRouter>
    <BottomTabs />
  </MemoryRouter>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ paddingBottom: '50px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

// Default story for the BottomTabs component
export const Default = () => <BottomTabs />;
