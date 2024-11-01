// src/stories/BottomNavBar.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomNavBar from '../../../components/navigation/BottomNavBar';

export default {
  title: 'Molecules/Navigation/NavBar/BottomNavBar',
  component: BottomNavBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`BottomNavBar\` component is a navigation bar typically placed at the bottom of a mobile or web application. It provides easy access to main sections or features of the app and is designed to be responsive and user-friendly.

### Features
- **Navigation Links**: Provides quick access to different parts of an app.
- **Responsive Design**: Adjusts to various screen sizes, ensuring usability on both desktop and mobile devices.
- **Router Integration**: Works seamlessly with \`react-router-dom\` for client-side navigation.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomNavBar from './components/navigation/BottomNavBar';

const ExampleComponent = () => (
  <MemoryRouter>
    <BottomNavBar />
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

// Default story for the BottomNavBar component
export const Default = () => <BottomNavBar />;
