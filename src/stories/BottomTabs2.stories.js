import React from 'react';
import BottomTabs2 from '../components/navigation/BottomTabs2';
import { HomeIcon2, StrategyIcon, PeriodIcon, SecurityIcon, SettingsIcon } from '../assets/Icons';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Molecules/NavigationComponents/Tabs/BottomTabs2',
  component: BottomTabs2,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
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
