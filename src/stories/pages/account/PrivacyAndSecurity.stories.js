import React from 'react';
import PrivacyAndSecurity from '../../../components/pages/account/PrivacyAndSecurity';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/PrivacyAndSecurity',
  component: PrivacyAndSecurity,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><PrivacyAndSecurity /></MemoryRouter>;
