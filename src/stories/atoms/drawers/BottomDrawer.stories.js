// IMPORTS
import React, { useState } from 'react';
import BottomDrawer from '../../../components/atoms/Drawers/BottomDrawer';

// Default export to define the component for Storybook
export default {
  title: 'Atoms/Drawers/BottomDrawer',
  component: BottomDrawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`BottomDrawer\` component is a versatile drawer that slides up from the bottom of the screen. It can be used for various purposes such as displaying additional options, forms, or information.

### Features
- **Controlled Component**: Takes \`isOpen\` and \`onClose\` props for full control.
- **Flexible Content**: You can place any JSX elements inside it.
- **Customizable**: Adjust transition duration, drawer height, and max width using props.
- **Dynamic Height**: Supports both fixed height and automatic height based on content.

### Props
- \`isOpen\`: Controls whether the drawer is open or closed.
- \`onClose\`: Callback triggered when the drawer is closed.
- \`transitionDuration\`: Sets the transition duration for opening/closing the drawer (in milliseconds).
- \`height\`: Specifies the height of the drawer (can be a percentage or fixed value).
- \`autoHeight\`: If true, the drawer height adjusts automatically to fit its content.
- \`maxWidth\`: Sets the maximum width of the drawer.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import BottomDrawer from './components/Drawers/BottomDrawer';

const ExampleComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <button
        onClick={openDrawer}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Open Drawer
      </button>

      {/* Bottom Drawer Component */}
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        transitionDuration={300}
        height="50%"
        maxWidth="600px"
      >
        <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
        <p className="text-gray-700">
          This is the content inside the drawer. You can place any elements here, such as forms, navigation links, or information.
        </p>
        <button
          onClick={closeDrawer}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Close Drawer
        </button>
      </BottomDrawer>
    </div>
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    transitionDuration: { control: 'number', defaultValue: 300 },
    height: { control: 'text', defaultValue: '80vh' },
    autoHeight: { control: 'boolean', defaultValue: false },
    maxWidth: { control: 'text', defaultValue: '600px' },
  },
};

// Template for rendering the component in different scenarios
const Template = (args) => {
  // Internal state for controlling drawer in Storybook
  const [isDrawerOpen, setIsDrawerOpen] = useState(args.isOpen);

  // Drawer open handler
  const openDrawer = () => setIsDrawerOpen(true);

  // Drawer close handler (linked to the `onClose` argType)
  const closeDrawer = () => {
    args.onClose();
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <button
        onClick={openDrawer}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Open Drawer
      </button>

      {/* Bottom Drawer Component */}
      <BottomDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        transitionDuration={args.transitionDuration}
        height={args.height}
        autoHeight={args.autoHeight}
        maxWidth={args.maxWidth}
      >
        <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
        <p className="text-gray-700">
          This is the content inside the drawer. You can place any elements here, such as forms, navigation links, or information.
        </p>
        <button
          onClick={closeDrawer}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Close Drawer
        </button>
      </BottomDrawer>
    </div>
  );
};

// Default story using the template
export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  transitionDuration: 300,
  height: '80vh',
  autoHeight: false,
  maxWidth: '600px',
};
