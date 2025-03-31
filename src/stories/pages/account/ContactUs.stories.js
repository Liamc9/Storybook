import React from 'react';
import ContactUs from '../../../components/pages/account/ContactUs';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/ContactUs',
  component: ContactUs,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><ContactUs /></MemoryRouter>;
