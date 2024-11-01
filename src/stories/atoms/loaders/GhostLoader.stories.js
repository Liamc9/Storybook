// src/stories/GhostLoader.stories.jsx

import React from 'react';
import GhostLoader from '../../../components/GhostLoader';

export default {
  title: 'Atoms/Loaders/GhostLoader',
  component: GhostLoader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`GhostLoader\` component is a simple, animated placeholder that can be used to indicate loading states in an application. It is often used when content is being fetched or processed, providing visual feedback to the user.

### Features
- **Subtle Animation**: The loader has a smooth, subtle animation that can blend well with most UIs.
- **Lightweight**: Minimal design, ensuring it does not distract from the rest of the interface.
- **Reusable**: Can be used in various contexts where a loading state is needed.

### Usage

\`\`\`jsx
import React from 'react';
import GhostLoader from './components/GhostLoader';

const ExampleComponent = () => (
  <div>
    <GhostLoader />
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <GhostLoader />;
