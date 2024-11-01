// src/stories/TopNavBar2.stories.jsx

import React from 'react';
import TopNavBar2 from '../../../components/TopNavBar2'; // Import your TopNavBar2 component
import { MemoryRouter } from 'react-router-dom';

// Default export to provide metadata
export default {
  title: 'Molecules/Navigation/NavBar/TopNavBar2',
  component: TopNavBar2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`TopNavBar2\` component is a navigation bar that typically appears at the top of a web page or application. It provides users with an organized way to navigate between different sections of a site or app, supporting active tab highlighting and customizable menu items.

### Features
- **Customizable Menu Items**: Accepts an array of items to display as navigation options.
- **Active Tab Highlighting**: Supports specifying an active tab for visual feedback.
- **Router Compatibility**: Integrates with \`react-router-dom\` for seamless navigation.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar2 from './components/TopNavBar2';

const ExampleComponent = () => (
  <MemoryRouter>
    <TopNavBar2 menuItems={['Home', 'About', 'Services', 'Contact']} activeTab="Services" />
  </MemoryRouter>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    menuItems: { control: 'array', description: 'Array of strings representing menu items.' },
    activeTab: { control: 'text', description: 'Specifies which tab is currently active.' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Template to create different versions of TopNavBar2
const Template = (args) => <TopNavBar2 {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  menuItems: ['Mask', 'Helmet', 'Bottle', 'Accessories'],
  activeTab: 'Helmet',
};

// Example where no active tab is set
export const NoActiveTab = Template.bind({});
NoActiveTab.args = {
  menuItems: ['Mask', 'Helmet', 'Bottle', 'Accessories'],
  activeTab: '',
};

// Example where "Bottle" is the active tab
export const BottleActive = Template.bind({});
BottleActive.args = {
  menuItems: ['Mask', 'Helmet', 'Bottle', 'Accessories'],
  activeTab: 'Bottle',
};
