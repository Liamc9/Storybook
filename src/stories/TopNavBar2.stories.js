import React from 'react';
import TopNavBar2 from '../components/TopNavBar2'; // Import your TopNavBar component
import { MemoryRouter } from 'react-router-dom';

// Default export to provide metadata
export default {
  title: 'Molecules/NavigationComponents/NavBar/TopNavBar2', // Title that defines where the story is shown in the Storybook sidebar
  component: TopNavBar2, // The component being documented
  tags: ['autodocs'],
  argTypes: {
    menuItems: { control: 'array' }, // Control for providing an array of menu items in Storybook
    activeTab: { control: 'text' },   // Control for specifying the active tab in Storybook
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
