import React from 'react';
import FAQ from '../../../components/pages/account/FAQ';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/FAQ',
  component: FAQ,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><FAQ /></MemoryRouter>;
