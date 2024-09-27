// src/stories/SideNav.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '../components/navigation/SideNav';

export default {
  title: 'Components/Navigation/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <SideNav />;
