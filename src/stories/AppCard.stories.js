// src/stories/AppCard.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppCard from '../components/cards/AppCard';

export default {
  title: 'Components/Cards/AppCard',
  component: AppCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    image: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    githubUrl: { control: 'text' },
    url: { control: 'text' },
  },
};

const Template = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/300',
  name: 'Sample App',
  id: '1',
  githubUrl: 'https://github.com/username/repo',
  url: 'https://example.com',
};
