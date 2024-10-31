// ProgressBar.stories.js
import React from 'react';
import ProgressBar from '../components/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    currentPage: { control: { type: 'number', min: 0 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

export const Halfway = Template.bind({});
Halfway.args = {
  currentPage: 3,
  totalPages: 6,
};

export const Complete = Template.bind({});
Complete.args = {
  currentPage: 5,
  totalPages: 5,
};
