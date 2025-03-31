import React from 'react';
import ManageAccount from '../../../components/pages/account/ManageAccount';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/ManageAccount',
  component: ManageAccount,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><ManageAccount /></MemoryRouter>;
