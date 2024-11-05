// src/stories/BottomTabs2.stories.jsx

import React from 'react';
import BottomTabs2 from '../../../components/navigation/BottomTabs2';
import { HomeIcon2, StrategyIcon, PeriodIcon, SecurityIcon, SettingsIcon } from '../../../components/icons/Icons';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Molecules/Navigation/Tabs/BottomTabs2',
  component: BottomTabs2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`BottomTabs2\` component is a flexible and customizable navigation element designed to provide quick access to different sections of an application. It supports navigation with icons and text labels, making it suitable for mobile and web applications.

### Features
- **Icon and Text Integration**: Displays both icons and text for enhanced navigation cues.
- **Router Integration**: Works seamlessly with \`react-router-dom\` for client-side navigation.
- **Customizable Tabs**: Allows the addition of various items with unique icons and paths.

### Usage

\`\`\`jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BottomTabs2 from './components/navigation/BottomTabs2';
import { HomeIcon2, StrategyIcon, PeriodIcon, SecurityIcon, SettingsIcon } from './assets/Icons';

const ExampleComponent = () => (
  <BrowserRouter>
    <BottomTabs2
      items={[
        { text: 'home', icon: <HomeIcon2 />, path: '/home' },
        { text: 'strategy', icon: <StrategyIcon />, path: '/strategy' },
        { text: 'period', icon: <PeriodIcon />, path: '/period' },
        { text: 'security', icon: <SecurityIcon />, path: '/security' },
        { text: 'settings', icon: <SettingsIcon />, path: '/settings' },
      ]}
    />
  </BrowserRouter>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    items: { control: 'object', description: 'Array of tab items, each with text, icon, and path properties.' },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <BottomTabs2 {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'home', icon: <HomeIcon2 />, path: '/home' },
    { text: 'strategy', icon: <StrategyIcon />, path: '/strategy' },
    { text: 'period', icon: <PeriodIcon />, path: '/period' },
    { text: 'security', icon: <SecurityIcon />, path: '/security' },
    { text: 'settings', icon: <SettingsIcon />, path: '/settings' },
  ],
};
