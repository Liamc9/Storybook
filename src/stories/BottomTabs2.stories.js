import React from 'react';
import BottomTabs2 from '../components/navigation/BottomTabs2';
import { HomeIcon2 } from '../assets/Icons';
import { StrategyIcon } from '../assets/Icons';
import { PeriodIcon } from '../assets/Icons';
import { SecurityIcon } from '../assets/Icons';
import { SettingsIcon } from '../assets/Icons';

export default {
  title: 'Molecules/NavigationComponents/Tabs/BottomTabs2',
  component: BottomTabs2,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args) => <BottomTabs2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'home', icon: <HomeIcon2 /> },
    { text: 'strategy', icon: <StrategyIcon /> },
    { text: 'period', icon: <PeriodIcon /> },
    { text: 'security', icon: <SecurityIcon /> },
    { text: 'settings', icon: <SettingsIcon /> },
  ],
};
