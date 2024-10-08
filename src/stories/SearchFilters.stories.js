import React, { useState } from 'react';
import SearchFilters from '../components/search/SearchFilters';

// Define a default export with the component's metadata
export default {
  title: 'Atoms/SearchComponents/SearchFilters',
  component: SearchFilters,
  tags: ['autodocs'],
};

// Template for creating stories
const Template = (args) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
    alert(`Filter applied: ${filterName} = ${filterValue}`);
  };

  return <SearchFilters {...args} onFilterChange={handleFilterChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  attributes: [
    {
      name: 'color',
      label: 'Color',
      options: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
  ],
};

// Story with preselected filters
export const PreselectedFilters = Template.bind({});
PreselectedFilters.args = {
  attributes: [
    {
      name: 'color',
      label: 'Color',
      options: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
  ],
};
