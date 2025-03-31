import React from 'react';
import ManagePaymentMethods from '../../../components/pages/account/ManagePaymentMethods';

export default {
  title: 'Pages/Account/ManagePaymentMethods',
  component: ManagePaymentMethods,
  tags: ['autodocs', 'pages'],
  argTypes: {
    onAddPaymentMethod: { action: 'Add Payment Method Clicked' },
  },
};

const Template = (args) => <ManagePaymentMethods {...args} />;

export const Default = Template.bind({});
Default.args = {
  paymentMethods: [
    { name: 'Visa **** 1234' },
    { name: 'MasterCard **** 5678' },
    { name: 'PayPal' },
  ],
};
