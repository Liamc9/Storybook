// src/stories/DeleteModal.stories.jsx

import React from 'react';
import DeleteModal from '../../../components/DeleteModal';

export default {
  title: 'Atoms/Modals/DeleteModal',
  component: DeleteModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`DeleteModal\` component is a modal dialog that prompts users for confirmation before they delete an item. It includes customizable title and message properties to inform users about the specific action being confirmed.

### Features
- **Customizable Title and Message**: Display specific details about what is being deleted.
- **Confirmation and Cancellation Handlers**: \`onConfirm\` and \`onCancel\` actions are triggered based on user interaction.
- **User-Friendly**: Helps ensure users are aware of and confirm potentially irreversible actions.

### Usage

\`\`\`jsx
import React from 'react';
import DeleteModal from './components/DeleteModal';

const ExampleComponent = () => (
  <DeleteModal
    title="Delete Item"
    message="Are you sure you want to delete this item?"
    onCancel={() => console.log('Deletion cancelled')}
    onConfirm={() => console.log('Deletion confirmed')}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Title of the modal.' },
    message: { control: 'text', description: 'Message displayed in the modal to inform the user.' },
    onCancel: { action: 'onCancel', description: 'Triggered when the cancel button is clicked.' },
    onConfirm: { action: 'onConfirm', description: 'Triggered when the confirm button is clicked.' },
  },
};

const Template = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Delete Item',
  message: 'Are you sure you want to delete this item?',
};
