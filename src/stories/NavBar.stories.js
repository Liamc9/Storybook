// src/stories/NavBar.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from '../components/navigation/TopNavBar';

export default {
  title: 'Components/Navigation/TopNavBar',
  component: TopNavBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ paddingBottom: '50px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <TopNavBar />;
