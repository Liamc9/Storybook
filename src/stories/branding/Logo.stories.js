// src/components/Logo/Logo.stories.js

import React from 'react';
import Logo from '../../components/Branding/Logo';
import styled from 'styled-components';

// Optionally, wrap the logo in a styled container for better presentation
const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export default {
  title: 'Branding/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The primary and secondary logos representing our brand identity.',
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'favicon'],
      },
      description: 'Select the logo variant to display.',
      defaultValue: 'primary',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the logo image.',
      defaultValue: 'Brand Logo',
    },
  },
};

const Template = (args) => (
  <Container>
    <Logo {...args} />
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  alt: 'Primary Brand Logo',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  alt: 'Secondary Brand Logo',
};

export const Favicon = Template.bind({});
Favicon.args = {
  variant: 'favicon',
  alt: 'Brand Favicon',
};
