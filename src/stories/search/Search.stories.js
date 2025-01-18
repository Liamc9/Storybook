// src/components/search/Search.stories.js
import React, { useState } from 'react';
import Search from '../../components/search/Search';

export default {
  title: 'Search/Search/Search',
  component: Search,
};

const sampleItems = [
  { title: 'Task 1', description: 'Do this' },
  { title: 'Task 2', description: 'Do that' },
  { title: 'Task 3', description: 'Another task' },
  // ...more sample items as needed
];

// A wrapper component to manage the search state in the Story
const SearchWrapper = (args) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Search {...args} onSearch={setSearchTerm} items={sampleItems} />
      <p>Search Term: {searchTerm}</p>
      {/* Optionally display filtered results */}
      <ul>
        {sampleItems
          .filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <li key={index}>{item.title}: {item.description}</li>
          ))
        }
      </ul>
    </div>
  );
};

const Template = (args) => <SearchWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search tasks...',
};
