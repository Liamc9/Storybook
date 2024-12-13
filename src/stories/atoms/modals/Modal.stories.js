// src/stories/Modal.stories.jsx

import React, { useState } from "react";
import Modal from "../../../components/atoms/modals/Modal";

export default {
  title: "Atoms/Modals/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`Modal\` component is a reusable and customizable dialog box for displaying content overlaying the main page. It includes built-in features like animations, accessibility, and a close button.

### Features

- **Customizable Dimensions**: Set the height and width of the modal as needed.
- **Animations**: Includes a fade-in and slide-in animation for smooth transitions.
- **Accessibility**: Fully ARIA-compliant for screen readers.
- **Click Outside to Close**: Clicking outside the modal closes it.
- **Keyboard Navigation**: Supports closing via the \`Escape\` key.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import Modal from "./components/Modal";

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    console.log("Modal closed");
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={handleClose}
        title="Example Modal"
        animate
      >
        <p>This is the content of the modal. It can be anything you want!</p>
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
    isModalOpen: { control: "boolean", description: "Controls whether the modal is open." },
    title: { control: "text", description: "Title of the modal." },
    animate: { control: "boolean", description: "Enable or disable animations." },
    closeModal: { action: "closeModal", description: "Function triggered when the modal is closed." },
    children: { control: "text", description: "Content to display inside the modal." },
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
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>
      <Modal {...args} isModalOpen={isOpen} closeModal={handleClose}>
        {args.children || <p>This is a modal content.</p>}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isModalOpen: false,
  title: "Example Modal",
  animate: true,
  children: "This is a modal content.",
};
