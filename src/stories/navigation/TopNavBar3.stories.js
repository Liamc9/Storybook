import React from 'react';
import TopNavBar3 from '../../components/navigation/TopNavBar3';
import { BrowserRouter } from 'react-router-dom';
export default {
  title: 'Navigation/TopNav/TopNavBar3',
  component: TopNavBar3,
  tags: ['autodocs']
};

const Template = (args) => <BrowserRouter><TopNavBar3 {...args} /></BrowserRouter>;

/**
 * Primary story: demonstrates a red nav bar with the title "Cusco".
 */
export const Primary = Template.bind({});
Primary.args = {
  title: 'Cusco',
  backgroundColor: '#ffe500',
  color: '#fff',
};

/**
 * Secondary story: demonstrates a blue nav bar with a different title.
 */
export const Secondary = Template.bind({});
Secondary.args = {
  title: 'My Page',
  backgroundColor: '#2980b9',
    color: '#fff',
};
