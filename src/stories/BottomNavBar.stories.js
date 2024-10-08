// src/stories/BottomNavBar.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomNavBar from '../components/navigation/BottomNavBar';

export default {
  title: 'Molecules/NavigationComponents/NavBar/BottomNavBar',
  component: BottomNavBar,
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

export const Default = () => <BottomNavBar />;
