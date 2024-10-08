// src/stories/Modal.stories.jsx

import React, { useState } from 'react';
import Modal from '../components/Modal';

export default {
  title: 'Atoms/DislpayComponents/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isModalOpen: { control: 'boolean' },
    height: { control: 'text' },
    width: { control: 'text' },
    closeModal: { action: 'closeModal' },
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
