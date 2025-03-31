import React from 'react';
import HelpAndFAQs from '../../../components/pages/account/HelpAndFAQs';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/HelpAndFAQs',
  component: HelpAndFAQs,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><HelpAndFAQs /></MemoryRouter>;
