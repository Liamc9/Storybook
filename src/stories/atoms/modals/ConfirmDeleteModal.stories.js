// src/stories/ConfirmDeleteModal.stories.js

import React from 'react';
import ConfirmDeleteModal from '../../../components/ConfirmDeleteModal';

export default {
  title: 'Atoms/Modals/ConfirmDeleteModal',
  component: ConfirmDeleteModal,
  parameters: {
    docs: {
      description: {
        component: `
The \`ConfirmDeleteModal\` component is used to prompt users for confirmation before proceeding with a delete action. This modal ensures that users are aware of and confirm actions that could have significant consequences.

### Features
- **Confirmation Interaction**: Provides \`onConfirm\` and \`onCancel\` actions to handle user responses.
- **User-Friendly**: Helps prevent accidental deletions by requiring user confirmation.
- **Reusable**: Can be integrated into various parts of an application where deletion confirmation is necessary.

### Usage

\`\`\`jsx
import React from 'react';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';

const ExampleComponent = () => (
  <ConfirmDeleteModal
    onConfirm={() => console.log('Delete confirmed')}
    onCancel={() => console.log('Delete cancelled')}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    onCancel: { action: 'cancelled', description: 'Triggered when the cancel button is clicked.' },
    onConfirm: { action: 'confirmed', description: 'Triggered when the confirm button is clicked.' },
  },
};

const Template = (args) => <ConfirmDeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
