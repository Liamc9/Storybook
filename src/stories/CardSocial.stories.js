// src/stories/CardSocial.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardSocial from '../components/cards/CardSocial';

export default {
  title: 'Atoms/DisplayComponents/Cards/CardSocial',
  component: CardSocial,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    id: { control: 'text' },
    coverPhoto: { control: 'text' },
    profilePic: { control: 'text' },
    username: { control: 'text' },
    categories: { control: 'text' },
    link: { control: 'text' },
    status: { control: 'text' },
  },
};

const Template = (args) => <CardSocial {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '789',
  coverPhoto: 'https://via.placeholder.com/600x200',
  profilePic: 'https://via.placeholder.com/100',
  username: 'Jane Smith',
  categories: 'Lifestyle, Travel',
  link: '/user/janesmith',
  status: 'Active',
};
