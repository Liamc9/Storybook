// src/stories/Tooltip.stories.jsx

import React from 'react';
import Tooltip from '../components/Tooltip';

export default {
  title: 'Atoms/DisplayComponents/Tooltip/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    tooltipText: { control: 'text' },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
    },
  },
};

const Template = (args) => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'This is a tooltip message.',
  position: 'top',
};
