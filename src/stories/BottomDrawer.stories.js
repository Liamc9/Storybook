// IMPORTS
import React, { useState } from 'react';
import BottomDrawer from '../components/Drawers/BottomDrawer';

// Default export to define the component for Storybook
export default {
  title: 'Atoms/DisplayComponents/Drawers/BottomDrawer',
  component: BottomDrawer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
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
      <BottomDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
        <p className="text-gray-700">
          This is the content inside the drawer. You can place any elements here, such as forms,
          navigation links, or information.
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
};
