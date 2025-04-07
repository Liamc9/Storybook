// src/components/search/Search.stories.js
import React, { useState } from 'react';
import Search from '../../../components/search/search/Search';
import { Search2, Feed, FeedItem } from 'liamc9npm';

export default {
  title: 'Pages/Search/Search',
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



const historyItems = [
    { title: 'Task 7', description: 'Do this' },
    { title: 'Task 8', description: 'Do that' },
    { title: 'Task 9', description: 'Another task' },
    // ... more items as needed
  ];

export const XSearch2 = () => {
    const [filteredItems, setFilteredItems] = useState(sampleItems);

    return (
      <div>
        {/* Use Search2 with items for fuzzy search and onSearch callback */}
        <Search2 
          items={sampleItems} 
          onSearch={setFilteredItems} 
          historyItems={historyItems}
        />
        <Feed items={filteredItems} ItemComponent={FeedItem}/>
      </div>
    );
  };

