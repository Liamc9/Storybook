// SearchView.stories.jsx
import React, { useState, useEffect } from 'react';
import Feed from '../../components/search/feed/Feed';
import Filter from '../../components/search/filter/Filter';
import Sort from '../../components/search/sort/Sort';
import Search2 from '../../components/search/search/Search2'; // Updated import
import FeedItem from '../../components/search/feedItem/FeedItem';

export default {
  title: 'Search/SearchView/SearchView',
  component: Feed,
};

// Sample data used in our examples
const sampleItems = [
  { title: 'Task 1', description: 'Do this', status: 'completed', priority: 'high', date: '2023-08-20' },
  { title: 'Task 2', description: 'Do that', status: 'pending', priority: 'medium', date: '2023-08-22' },
  { title: 'Task 3', description: 'Another task', status: 'completed', priority: 'low', date: '2023-08-21' },
  { title: 'Task 4', description: 'Yet another task', status: 'inProgress', priority: 'medium', date: '2023-08-23' },
];

export const PlainFeed = () => {
  return <Feed items={sampleItems} ItemComponent={FeedItem} />;
};

export const FilterableFeed = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  return (
    <div>
      <Filter onChange={setSelectedFilters} />
      <Feed 
        items={sampleItems} 
        selectedFilters={selectedFilters} 
        ItemComponent={FeedItem}
      />
    </div>
  );
};

export const SortableFeed = () => {
  const [sortedItems, setSortedItems] = useState(sampleItems);
  return (
    <div>
      <Sort items={sampleItems} onSortedChange={setSortedItems} />
      <Feed items={sortedItems} ItemComponent={FeedItem} />
    </div>
  );
};

export const FilterableAndSortableFeed = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortedItems, setSortedItems] = useState(sampleItems);

  return (
    <div>
      <Filter onChange={setSelectedFilters} />
      <Sort items={sampleItems} onSortedChange={setSortedItems} />
      <Feed 
        items={sortedItems} 
        selectedFilters={selectedFilters} 
        ItemComponent={FeedItem} 
      />
    </div>
  );
};

export const PredefinedSortingFeed = () => {
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    // Sort by date descending
    const sorted = [...sampleItems].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedItems(sorted);
  }, []);

  return <Feed items={sortedItems} ItemComponent={FeedItem} />;
};

export const PredefinedFilteringFeed = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter by status === 'completed'
    const filtered = sampleItems.filter(item => item.status === 'completed');
    setFilteredItems(filtered);
  }, []);

  return <Feed items={filteredItems} ItemComponent={FeedItem} />;
};

export const SearchableFeed = () => {
  const [filteredItems, setFilteredItems] = useState(sampleItems);

  return (
    <div>
      {/* Use Search2 with items for fuzzy search */}
      <Search2 
        items={sampleItems} 
        onSearch={setFilteredItems} 
      />
      <Feed items={filteredItems} ItemComponent={FeedItem} />
    </div>
  );
};

export const FullFeed = () => {
  const [searchedItems, setSearchedItems] = useState(sampleItems);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortedItems, setSortedItems] = useState(sampleItems);

  // Wrap the onSearch callback to reset filters and sorting when a new search happens
  const handleSearch = (newSearchResults) => {
    setSearchedItems(newSearchResults);
    setSelectedFilters({});           // Reset filters
    setSortedItems(newSearchResults); // Reset sorting base to the new search results
  };

  return (
    <div>
      <Search2 
        items={sampleItems} 
        onSearch={handleSearch} 
      />
      <Sort 
        items={searchedItems} 
        onSortedChange={setSortedItems} 
      />
      <Filter 
        onChange={setSelectedFilters} 
      />
      <Feed 
        items={sortedItems} 
        selectedFilters={selectedFilters} 
        ItemComponent={FeedItem} 
      />
    </div>
  );
};
