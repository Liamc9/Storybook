import React from 'react';
import Card3 from '../components/cards/Card3';

export default {
  title: 'Atoms/DisplayComponents/Cards/Card3',
  component: Card3,
  tags: ['autodocs'],
  argTypes: {
    description: { control: 'text' },
    linkText: { control: 'text' },
  },
};

const Template = (args) => <Card3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  description:
    'Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.',
  linkText: 'Explore Documentation',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  description:
    'Discover advanced features and seamless performance in our latest release.',
  linkText: 'Learn More',
};

export const ShortText = Template.bind({});
ShortText.args = {
  description: 'Experience innovation.',
  linkText: 'Get Started',
};
