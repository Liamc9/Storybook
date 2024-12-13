// src/stories/Popover.stories.jsx

import React from 'react';
import Popover from '../../../components/atoms/popovers/Popover';

export default {
  title: 'Atoms/Popovers/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Popover\` component displays additional content or options in a small overlay that appears when an associated element is triggered. This component is useful for showing contextual information or interactive elements without navigating away from the current page.

### Features
- **Trigger Element**: Can be activated by any component (e.g., button, icon).
- **Customizable Content**: Supports various types of content within the popover.
- **Positioning**: Automatically positions relative to the trigger element.

### Usage

\`\`\`jsx
import React from 'react';
import Popover from './components/Popover';

const ExampleComponent = () => (
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

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Default story for the Popover component
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
