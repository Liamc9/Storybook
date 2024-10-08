import React from 'react';
import SearchBar from '../components/search/SearchBar';

// Define a default export with the component's metadata
export default {
  title: 'Atoms/SearchComponents/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

// Template for creating stories
const Template = (args) => <SearchBar {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  onSearch: (input) => alert(`Search query: ${input}`),
};

// Story with pre-filled input value
export const PrefilledInput = Template.bind({});
PrefilledInput.args = {
  onSearch: (input) => alert(`Search query: ${input}`),
};
