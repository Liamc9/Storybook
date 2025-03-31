import React from 'react';
import PlansAndBilling from '../../../components/pages/account/PlansAndBilling';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Pages/Account/PlansAndBilling',
  component: PlansAndBilling,
  tags: ['pages', 'autodocs'],
};

export const Default = () => <MemoryRouter><PlansAndBilling /></MemoryRouter>;
