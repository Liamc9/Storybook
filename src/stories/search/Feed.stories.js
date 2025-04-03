// Feed.stories.jsx
import React, { useRef } from 'react';
import Feed from '../../components/search/feed/Feed';
import FeedItem from '../../components/search/feedItem/FeedItem';

export default {
  title: 'Search/Feed/Feed',
  component: Feed,
};

// Create 50+ items for demonstration
const mockItems = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  status: i % 2 === 0 ? 'completed' : 'pending',
  priority: ['low', 'medium', 'high'][i % 3],
  title: `Task ${i + 1}`,
}));

const mockSortBy = (a, b) => a.priority.localeCompare(b.priority);

const mockSelectedFilters = {
  status: ['completed', 'pending'],
};

// Default: shows all items
export const Default = () => (
  <Feed
    items={mockItems}
    sortBy={mockSortBy}
    selectedFilters={mockSelectedFilters}
  />
);

// Pagination example
export const PaginatedFeed = () => (
  <Feed
    items={mockItems}
    sortBy={mockSortBy}
    selectedFilters={mockSelectedFilters}
    pagination={5} 
    ItemComponent={FeedItem}
  />
);

// Load More example
export const LoadMoreFeed = () => (
  <Feed
    items={mockItems}
    sortBy={mockSortBy}
    selectedFilters={mockSelectedFilters}
    loadMore={5}
    ItemComponent={FeedItem}
  />
);

export const InfiniteScrollingFeed = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        height: '400px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '1rem',
      }}
    >
      <Feed
        items={mockItems}
        sortBy={mockSortBy}
        selectedFilters={mockSelectedFilters}
        infiniteScroll={10} // loads 10 items at a time
        ItemComponent={FeedItem}
        scrollContainerRef={containerRef} // specify container for infinite scroll
      />
    </div>
  );
};
