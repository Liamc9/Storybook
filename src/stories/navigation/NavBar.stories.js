// src/stories/NavBar.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from '../../components/navigation/TopNavBar';

export default {
  title: 'Navigation/TopNav/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`TopNavBar\` component is a navigation bar typically used at the top of web pages or applications. It provides quick access to key sections or functions and supports various navigation links or elements for a comprehensive user experience.

### Features
- **Responsive Design**: Adapts to different screen sizes, ensuring usability on both desktop and mobile devices.
- **Router Integration**: Works with \`react-router-dom\` for seamless client-side navigation.
- **Customizable Structure**: Can include links, buttons, or other interactive elements as needed.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from './components/navigation/TopNavBar';

const ExampleComponent = () => (
  <MemoryRouter>
    <TopNavBar />
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

// Default story for the TopNavBar component
export const Default = () => <TopNavBar />;
