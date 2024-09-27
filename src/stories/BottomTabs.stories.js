// src/stories/BottomTabs.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BottomTabs from '../components/navigation/BottomTabs';

export default {
  title: 'Components/Navigation/BottomTabs',
  component: BottomTabs,
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

export const Default = () => <BottomTabs />;
