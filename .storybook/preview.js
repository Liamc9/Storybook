/** @type { import('@storybook/react').Preview } */
import React, { useEffect } from 'react';
import '../src/index.css';

const addModalRoot = (Story) => {
  useEffect(() => {
    // Check if `modal-root` already exists
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      // Create `modal-root` and append it to the document body
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
  }, []);

  return <Story />;
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [addModalRoot], // Add the decorator globally
};

export default preview;
