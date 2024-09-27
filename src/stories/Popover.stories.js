// src/stories/Popover.stories.jsx

import React from 'react';
import Popover from '../components/Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ padding: '100px' }}>
    <Popover
      trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>}
    >
      <div className="p-4">
        <p>This is the popover content.</p>
      </div>
    </Popover>
  </div>
);
