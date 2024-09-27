// src/stories/CardProduct.stories.jsx

import React from 'react';
import CardProduct from '../components/cards/CardProduct';

export default {
  title: 'Components/Cards/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    id: { control: 'text' },
    price: { control: 'number' },
    onButtonClick: { action: 'clicked' },
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
