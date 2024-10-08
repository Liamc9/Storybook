import React from 'react';
import SearchResults from '../components/search/SearchResults'; // Adjust path as needed
import CardProduct from '../components/cards/CardProduct'; // Adjust path as needed

export default {
  title: 'Atoms/SearchComponents/SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
};

const Template = (args) => <SearchResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: [
    {
      id: '1',
      name: 'Product 1',
      image1: 'https://via.placeholder.com/150',
      price: '20.00',
    },
    {
      id: '2',
      name: 'Product 2',
      image1: 'https://via.placeholder.com/150',
      price: '30.00',
    },
  ],
  loading: false,
  error: null,
  page: 0,
  onPageChange: (newPage) => alert(`Page changed to: ${newPage + 1}`),
  hasNextPage: true,
  renderResult: (result) => (
    <CardProduct
      title={result.name}
      image={result.image1}
      price={result.price}
    />
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  results: [],
  loading: true,
  error: null,
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  results: [],
  loading: false,
  error: { message: 'Something went wrong.' },
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};

export const NoResults = Template.bind({});
NoResults.args = {
  results: [],
  loading: false,
  error: null,
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};
