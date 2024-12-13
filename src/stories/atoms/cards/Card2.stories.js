// src/stories/Card2.stories.jsx

import React from 'react';
import Card2 from '../../../components/atoms/cards/Card2';

export default {
  title: 'Atoms/Cards/Card2',
  component: Card2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Card2 Component

The \`Card2\` component is a simple and flexible card component that can be used to display various types of content. It is designed to be used as a building block for displaying information in a structured format, such as showcasing projects, products, or user details.

### Features
- **Simple Layout**: A basic card structure that can be customized.
- **Reusable**: Can be used in different parts of your application as needed.

### Usage

\`\`\`jsx
import React from 'react';
import Card2 from './components/cards/Card2';

const ExampleComponent = () => (
  <div>
    <Card2 />
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

export const Default = () => <Card2 />;
