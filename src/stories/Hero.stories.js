// src/stories/Hero.stories.jsx

import React from 'react';
import Hero from '../components/Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  subtitle: 'We are glad to have you here.',
  backgroundImage: 'https://via.placeholder.com/1200x600',
};
