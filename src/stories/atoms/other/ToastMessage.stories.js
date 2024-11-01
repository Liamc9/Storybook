// src/stories/ToastMessage.stories.jsx

import React from 'react';
import ToastMessage from '../../../components/ToastMessage';

export default {
  title: 'Atoms/Other/ToastMessage',
  component: ToastMessage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`ToastMessage\` component is used to display brief, temporary notifications to inform users of actions, updates, or alerts. Toast messages are commonly used for feedback such as "Item added to cart" or "Settings saved successfully."

### Features
- **Quick Feedback**: Provides immediate, temporary notifications.
- **Customizable Appearance**: Can be styled to fit different themes or UI requirements.
- **Ease of Use**: Simple to integrate and trigger within an application.

### Usage

\`\`\`jsx
import React from 'react';
import ToastMessage from './components/ToastMessage';

const ExampleComponent = () => (
  <div>
    <ToastMessage message="This is a toast notification!" />
  </div>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Default story for the ToastMessage component
export const Default = () => <ToastMessage />;
