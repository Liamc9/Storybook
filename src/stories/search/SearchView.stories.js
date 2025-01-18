// SearchView.stories.jsx
import React, { useState, useEffect } from 'react';
import Feed from '../../components/search/Feed';
import FeedItem2 from '../../components/search/FeedItem2'; // New FeedItem2 component
import Filter from '../../components/search/Filter';
import Sort from '../../components/search/Sort';
import Search2 from '../../components/search/Search2'; // Updated import

export default {
  title: 'Search/SearchView/SearchView',
  component: Feed,
  parameters: {
    docs: {
      description: {
        component: `
### SearchView Examples

The \`Feed\` component is designed to render a collection of items, automatically handling mapping and rendering for each item. You can customize its behavior by providing:
- An array of \`items\`.
- A custom \`ItemComponent\` to specify how each item is rendered.
- Optional \`selectedFilters\` for filtering and \`sortBy\` logic for sorting.

This story demonstrates several scenarios for the \`Feed\` component and how it combines with \`Filter\`, \`Sort\`, and \`Search2\`:
1. **Plain Unsorted Feed**
2. **Filterable Feed**
3. **Sortable Feed**
4. **Feed with Both Filtering and Sorting**
5. **Predefined Sorting Feed**
6. **Predefined Filtering Feed**
7. **Searchable Feed**
8. **Full Feed** (with integrated search, filter, and sort)

---
        `,
      },
    },
  },
};

// Sample data used in our examples
const sampleItems = [
  { title: 'Task 1', description: 'Do this', status: 'completed', priority: 'high', date: '2023-08-20' },
  { title: 'Task 2', description: 'Do that', status: 'pending', priority: 'medium', date: '2023-08-22' },
  { title: 'Task 3', description: 'Another task', status: 'completed', priority: 'low', date: '2023-08-21' },
  { title: 'Task 4', description: 'Yet another task', status: 'inProgress', priority: 'medium', date: '2023-08-23' },
];

/**
 * 1) Plain Unsorted Feed
 * Shows a basic feed with a custom item component (FeedItem2).
 */
export const PlainFeed = () => {
  return <Feed items={sampleItems} ItemComponent={FeedItem2} />;
};

/**
 * 2) Filterable Feed
 * Demonstrates dynamic filtering with the 'Filter' component.
 * The feed automatically applies filters via 'selectedFilters'.
 */
export const FilterableFeed = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  return (
    <div>
      <Filter onChange={setSelectedFilters} />
      <Feed 
        items={sampleItems} 
        selectedFilters={selectedFilters} 
        ItemComponent={FeedItem2}
      />
    </div>
  );
};

/**
 * 3) Sortable Feed
 * Demonstrates dynamic sorting with the 'Sort' component.
 * The feed uses 'sortedItems' which are updated by the 'Sort' component.
 */
export const SortableFeed = () => {
  const [sortedItems, setSortedItems] = useState(sampleItems);
  return (
    <div>
      <Sort items={sampleItems} onSortedChange={setSortedItems} />
      <Feed items={sortedItems} ItemComponent={FeedItem2} />
    </div>
  );
};

/**
 * 4) Feed with Both Filtering and Sorting
 * Combines 'Filter' and 'Sort' so you can do both at once.
 */
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
        ItemComponent={FeedItem2} 
      />
    </div>
  );
};

/**
 * 5) Predefined Sorting Feed
 * Automatically sorts items by date descending on mount.
 */
export const PredefinedSortingFeed = () => {
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    // Sort by date descending
    const sorted = [...sampleItems].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedItems(sorted);
  }, []);

  return <Feed items={sortedItems} ItemComponent={FeedItem2} />;
};

/**
 * 6) Predefined Filtering Feed
 * Automatically filters items to only 'completed' status on mount.
 */
export const PredefinedFilteringFeed = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter by status === 'completed'
    const filtered = sampleItems.filter(item => item.status === 'completed');
    setFilteredItems(filtered);
  }, []);

  return <Feed items={filteredItems} ItemComponent={FeedItem2} />;
};

/**
 * 7) Searchable Feed
 * Adds a fuzzy search via 'Search2' that updates the list of displayed items.
 */
export const SearchableFeed = () => {
  const [filteredItems, setFilteredItems] = useState(sampleItems);

  return (
    <div>
      {/* Use Search2 with items for fuzzy search */}
      <Search2 
        items={sampleItems} 
        onSearch={setFilteredItems} 
      />
      <Feed items={filteredItems} ItemComponent={FeedItem2} />
    </div>
  );
};

/**
 * 8) FullFeed
 * Combines Search2, Filter, and Sort for a complete searching, filtering, and sorting experience.
 */
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
        ItemComponent={FeedItem2} 
      />
    </div>
  );
};
