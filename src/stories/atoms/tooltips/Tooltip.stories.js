// src/stories/Tooltip.stories.jsx

import React from 'react';
import Tooltip from '../../../components/Tooltip';

export default {
  title: 'Atoms/Tooltips/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Tooltip\` component is used to display a brief message when users hover over or focus on an element. Tooltips provide contextual information about an element's function or details without cluttering the UI.

### Features
- **Customizable Positioning**: Tooltips can be positioned at the top, right, bottom, or left relative to the target element.
- **Flexible Content**: Display any text or small content within the tooltip.
- **Interactive**: Enhances user experience by providing helpful hints and information.

### Usage

\`\`\`jsx
import React from 'react';
import Tooltip from './components/Tooltip';

const ExampleComponent = () => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <Tooltip tooltipText="This is a tooltip message." position="top">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover over me</button>
    </Tooltip>
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    tooltipText: { control: 'text', description: 'The message displayed inside the tooltip.' },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      description: 'The position of the tooltip relative to the target element.',
    },
  },
};

const Template = (args) => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <Tooltip {...args}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover over me</button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'This is a tooltip message.',
  position: 'top',
};
