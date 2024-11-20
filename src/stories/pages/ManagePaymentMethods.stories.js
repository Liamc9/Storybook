import React from 'react';
import ManagePaymentMethods from '../../components/pages/ManagePaymentMethods';

export default {
  title: 'Pages/ManagePaymentMethods',
  component: ManagePaymentMethods,
  tags: ['autodocs', 'pages'],
  argTypes: {
    onAddPaymentMethod: { action: 'Add Payment Method Clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### ManagePaymentMethods Component

The **ManagePaymentMethods** component is used to display and manage the user's payment methods. It provides a list of current payment methods and an option to add new ones.

#### Props

- \`paymentMethods\` (array): List of payment methods, where each item is an object with a \`name\` property.
- \`onAddPaymentMethod\` (function): Callback function triggered when the "Add Payment Method" button is clicked.

#### Usage Example

\`\`\`jsx
import ManagePaymentMethods from 'path-to-component';

const paymentMethods = [
  { name: 'Visa **** 1234' },
  { name: 'MasterCard **** 5678' },
  { name: 'PayPal' },
];

<ManagePaymentMethods
  paymentMethods={paymentMethods}
  onAddPaymentMethod={() => console.log('Add Payment Method Clicked')}
/>;
\`\`\`
`,
      },
    },
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
