// src/stories/Tooltip.stories.jsx

import React from 'react';
import Tooltip from '../../../components/atoms/overlays/tooltips/Tooltip';

export default {
  title: 'Atoms/Overlays/Tooltips',
  component: Tooltip,
  tags: ['autodocs'],
};

const Container = ({ children }) => (
  <div style={{ padding: '100px', textAlign: 'center' }}>{children}</div>
);

const Template = (args) => (
  <Container>
    <Tooltip {...args}>
      {args.children || (
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Hover over me
        </button>
      )}
    </Tooltip>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'This is a tooltip message.',
  position: 'top',
};

export const WithCustomChild = Template.bind({});
WithCustomChild.args = {
  tooltipText: 'Tooltip on a custom element!',
  position: 'right',
  children: (
    <div
      style={{
        padding: '10px',
        backgroundColor: 'lightcoral',
        color: 'white',
        borderRadius: '4px',
      }}
    >
      Custom Child
    </div>
  ),
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  tooltipText: 'Custom styled tooltip message',
  position: 'bottom',
  tooltipStyle: { backgroundColor: 'purple', fontSize: '1.2rem' },
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  tooltipText: 'Tooltip with default icon',
  position: 'left',
  // No child provided, so the default icon from Tooltip is used
  children: null,
};
