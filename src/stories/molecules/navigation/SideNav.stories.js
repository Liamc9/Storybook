// src/stories/SideNav.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '../../../components/molecules/navigation/SideNav';

export default {
  title: 'Molecules/Navigation/Computer/Sidebar/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SideNav\` component is a vertical navigation bar typically used on the left or right side of web pages or applications. It allows users to navigate between different sections or pages, offering an organized structure for applications with multiple sections.

### Features
- **Responsive Layout**: Adjusts to various screen sizes, providing an optimal user experience on both desktop and mobile devices.
- **Router Integration**: Works seamlessly with \`react-router-dom\` for client-side routing.
- **Expandable Sections**: Can include nested links or collapsible sections for a comprehensive navigation experience.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideNav from './components/navigation/SideNav';

const ExampleComponent = () => (
  <MemoryRouter>
    <SideNav />
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
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Default story for the SideNav component
export const Default = () => <SideNav />;
