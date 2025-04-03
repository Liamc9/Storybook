// src/components/search/Search2.stories.js
import React, { useState } from 'react';
import Search2 from '../../components/search/search/Search2';
import Feed from '../../components/search/feed/Feed';
import FeedItem from '../../components/search/feedItem/FeedItem';

export default {
  title: 'Search/Search/Search2',
  component: Search2,
};

const sampleItems = [
  { title: 'Task 1', description: 'Do this' },
  { title: 'Task 2', description: 'Do that' },
  { title: 'Task 3', description: 'Another task' },
  // ... more items as needed
];

const historyItems = [
    { title: 'Task 7', description: 'Do this' },
    { title: 'Task 8', description: 'Do that' },
    { title: 'Task 9', description: 'Another task' },
    // ... more items as needed
  ];

export const Default = () => {
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
