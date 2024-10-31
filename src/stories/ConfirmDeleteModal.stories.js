// ConfirmDeleteModal.stories.js
import React from 'react';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

export default {
  title: 'Components/ConfirmDeleteModal',
  component: ConfirmDeleteModal,
  argTypes: {
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
  },
};

const Template = (args) => <ConfirmDeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
