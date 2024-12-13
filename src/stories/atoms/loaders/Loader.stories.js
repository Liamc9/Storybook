// src/stories/Loader.stories.jsx

import React from 'react';
import Loader from '../../../components/atoms/loaders/Loader';

export default {
  title: 'Atoms/Loaders/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Loader\` component is a simple and versatile loading indicator that can be used in various parts of an application to show that content or data is being loaded. It helps provide feedback to users, enhancing the user experience during loading states.

### Features
- **Minimal Design**: A clean and simple animation that fits into different UI designs.
- **Reusable**: Can be used across multiple components and pages for consistency.
- **Customizable**: Adaptable to various contexts where loading feedback is needed.

### Usage

\`\`\`jsx
import React from 'react';
import Loader from './components/Loader';

const ExampleComponent = () => (
  <div>
    <Loader />
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <Loader />;
