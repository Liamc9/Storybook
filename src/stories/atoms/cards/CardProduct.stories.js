// src/stories/CardProduct.stories.jsx

import React from 'react';
import CardProduct from '../../../components/cards/CardProduct';

export default {
  title: 'Atoms/Cards/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`CardProduct\` component is designed to showcase product details in a card format. It includes an image, title, price, and a button for interaction, making it suitable for e-commerce or product listing pages.

### Features
- **Product Image**: Displays an image of the product.
- **Title and Price**: Highlights the product's name and price.
- **Action Button**: Customizable button that triggers an action when clicked.

### Usage

\`\`\`jsx
import React from 'react';
import CardProduct from './components/cards/CardProduct';

const ExampleComponent = () => (
  <CardProduct
    image="https://via.placeholder.com/150"
    title="Sample Product"
    id="123"
    price={29.99}
    onButtonClick={() => console.log('Button clicked')}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    image: { control: 'text', description: 'URL of the product image.' },
    title: { control: 'text', description: 'Name of the product.' },
    id: { control: 'text', description: 'Unique identifier for the product.' },
    price: { control: 'number', description: 'Price of the product.' },
    onButtonClick: { action: 'clicked', description: 'Event triggered when the button is clicked.' },
  },
};

const Template = (args) => <CardProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Sample Product',
  id: '123',
  price: 29.99,
};
