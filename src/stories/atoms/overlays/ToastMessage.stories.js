// src/stories/ToastMessage.stories.jsx

import React from 'react';
import ToastMessage from '../../../components/atoms/overlays/toastMessages/ToastMessage';

export default {
  title: 'Atoms/Overlays/ToastMessages',
  component: ToastMessage,
  tags: ['autodocs'],
};

// Default story for the ToastMessage component
export const Default = () => <ToastMessage />;
