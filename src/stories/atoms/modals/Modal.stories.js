// src/stories/Modal.stories.jsx

import React, { useState } from 'react';
import Modal from '../../../components/Modal';

export default {
  title: 'Atoms/Modals/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Modal\` component is a flexible, reusable dialog box used to display content overlaying the main page content. It can be customized with various height and width properties and supports user-triggered opening and closing.

### Features
- **Customizable Dimensions**: Allows control over the modal's height and width.
- **User Interaction**: Includes built-in functions to open and close the modal.
- **Versatile Content**: Can hold any JSX elements, making it adaptable for various use cases.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import Modal from './components/Modal';

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    console.log('Modal closed');
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isModalOpen={isModalOpen} closeModal={handleClose} height="h-96" width="w-96">
        <p>This is a modal content.</p>
      </Modal>
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
    isModalOpen: { control: 'boolean', description: 'Controls whether the modal is open.' },
    height: { control: 'text', description: 'Sets the height of the modal.' },
    width: { control: 'text', description: 'Sets the width of the modal.' },
    closeModal: { action: 'closeModal', description: 'Function triggered when the modal is closed.' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isModalOpen);

  const handleClose = () => {
    setIsOpen(false);
    args.closeModal();
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal {...args} isModalOpen={isOpen} closeModal={handleClose}>
        <p>This is a modal content.</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isModalOpen: false,
  height: 'h-96',
  width: 'w-96',
};
