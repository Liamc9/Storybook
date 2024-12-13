// src/stories/Footer.stories.jsx

import React from 'react';
import Footer from '../../../components/molecules/other/Footer';

export default {
  title: 'Molecules/Other/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Footer\` component is a structured section typically placed at the bottom of web pages or applications. It provides useful information such as contact details, social media links, and copyright information, enhancing the user experience with accessible, organized content.

### Features
- **Contact Information**: Displays an email, phone number, and address.
- **Social Media Integration**: Supports links to various social media platforms.
- **Customizable Content**: Allows modification of text and links to suit different projects.

### Usage

\`\`\`jsx
import React from 'react';
import Footer from './components/Footer';

const ExampleComponent = () => (
  <Footer
    email="contact@example.com"
    phone="+1 (555) 123-4567"
    address="123 Main Street, City, Country"
    copyright="2023 Your Company"
    socialLinks={[
      { href: 'https://facebook.com', label: 'Facebook', icon: 'fab fa-facebook' },
      { href: 'https://twitter.com', label: 'Twitter', icon: 'fab fa-twitter' },
    ]}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    email: { control: 'text', description: 'The contact email address to display.' },
    phone: { control: 'text', description: 'The contact phone number to display.' },
    address: { control: 'text', description: 'The physical address to display.' },
    copyright: { control: 'text', description: 'The copyright text to display at the bottom of the footer.' },
    socialLinks: { control: 'object', description: 'An array of social media links, each with href, label, and icon properties.' },
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
