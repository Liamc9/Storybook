import React, { useState } from 'react';
import SearchSort from '../components/search/SearchSort';

// Define a default export with the component's metadata
export default {
  title: 'Atoms/SearchComponents/SearchSort',
  component: SearchSort,
};

// Template for creating stories
const Template = (args) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (sortValue) => {
    setSortOption(sortValue);
  };

  return <SearchSort {...args} onSortChange={handleSortChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  attributes: ['price', 'date', 'rating'], // You can change the attributes here
};

// Story with initial sort applied
export const WithInitialSort = Template.bind({});
WithInitialSort.args = {
  attributes: ['price', 'date', 'rating'],
  initialSort: 'price:asc',
};
