// src/stories/DeleteModal.stories.jsx

import React from 'react';
import DeleteModal from '../components/DeleteModal';

export default {
  title: 'Components/DeleteModal',
  component: DeleteModal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    onCancel: { action: 'onCancel' },
    onConfirm: { action: 'onConfirm' },
  },
};

const Template = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Delete Item',
  message: 'Are you sure you want to delete this item?',
};
