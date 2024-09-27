// src/stories/Footer.stories.jsx

import React from 'react';
import Footer from '../components/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text' },
    phone: { control: 'text' },
    address: { control: 'text' },
    copyright: { control: 'text' },
    socialLinks: { control: 'object' },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: 'contact@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main Street, City, Country',
  copyright: '2023 Your Company',
  socialLinks: [
    { href: 'https://facebook.com', label: 'Facebook', icon: 'fab fa-facebook' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'fab fa-twitter' },
  ],
};
