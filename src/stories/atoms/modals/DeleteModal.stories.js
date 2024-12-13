// src/stories/DeleteModal.stories.jsx

import React, { useState } from "react";
import DeleteModal from "../../../components/atoms/modals/DeleteModal";

export default {
  title: "Atoms/Modals/Variations/DeleteModal",
  component: DeleteModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DeleteModal\` component is a reusable modal dialog that prompts users for confirmation before performing potentially irreversible actions, such as deleting an item or account.

### Features
- **Customizable Content**: Title and message properties allow you to inform users about the specific action being confirmed.
- **Action Handlers**: \`onConfirm\` and \`onCancel\` handlers for processing user actions.
- **Accessible and User-Friendly**: Helps prevent accidental actions with a clear and concise UI.

### Usage

\`\`\`jsx
import React from 'react';
import DeleteModal from './components/DeleteModal';

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    console.log('Deletion cancelled');
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log('Deletion confirmed');
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <DeleteModal
          title="Delete Item"
          message="Are you sure you want to delete this item?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title of the modal, informing the user about the action.",
    },
    message: {
      control: "text",
      description: "Message providing additional context about the action.",
    },
    onCancel: {
      action: "onCancel",
      description: "Triggered when the user clicks the Cancel button.",
    },
    onConfirm: {
      action: "onConfirm",
      description: "Triggered when the user clicks the Confirm button.",
    },
  },
};

const Template = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    console.log("Deletion cancelled");
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("Deletion confirmed");
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <DeleteModal {...args} onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Delete Item",
  message: "Are you sure you want to delete this item?",
};
