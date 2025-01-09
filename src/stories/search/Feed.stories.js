// Feed.stories.jsx
import React, { useRef } from 'react';
import Feed from '../../components/search/Feed';
import FeedItem from '../../components/search/FeedItem';

export default {
  title: 'Search/Feed/Feed',
  component: Feed,
  parameters: {
    docs: {
      description: {
        component: `
# Feed Component: Detailed Explanation

The **Feed** component is designed to handle:
1. **Filtering & Sorting** of items (via \`sortBy\` and \`selectedFilters\`).
2. **Pagination** (through the \`pagination\` prop).
3. **Load More** items on a button click (through the \`loadMore\` prop).
4. **Infinite Scrolling** (through the \`infiniteScroll\` prop).

Additionally, you can provide:
- A **custom item component** via \`ItemComponent\`.
- A **scroll container reference** via \`scrollContainerRef\` if you prefer container-based scrolling instead of the default page-level scrolling.

---

## 1) Basic Setup

\`\`\`jsx
<Feed 
  items={mockItems}
  sortBy={mockSortBy}
  selectedFilters={mockSelectedFilters}
  /* ...other props... */
/>
\`\`\`

- **\`items\`**: An array of data objects to be rendered.
- **\`sortBy\`**: A comparator function for sorting. For example: 
  \`\`\`js
  const mockSortBy = (a, b) => a.priority.localeCompare(b.priority);
  \`\`\`
- **\`selectedFilters\`**: An object describing which items to include based on certain categories. For example:
  \`\`\`js
  const mockSelectedFilters = {
    status: ['completed', 'pending']
  };
  \`\`\`
  Every item is checked against these filters to determine if it should be visible.

---

## 2) Pagination

Use the **\`pagination\`** prop to enable pagination. \`pagination\` indicates how many items per page you want. The component will automatically display page buttons and manage the current page state.

\`\`\`jsx
<Feed
  items={mockItems} 
  sortBy={mockSortBy}
  selectedFilters={mockSelectedFilters}
  pagination={5}  // 5 items per page
  ItemComponent={FeedItem}
/>
\`\`\`

**Key Points**:
- When paginated, the component generates an array of page numbers and shows them. Clicking a page button changes \`currentPage\` inside the feed logic.
- The total number of pages = \`Math.ceil(totalItems / pagination)\`.

---

## 3) Load More

Use the **\`loadMore\`** prop if you prefer a "Load More" button to gradually reveal items. For example, setting \`loadMore={5}\` will show an initial 5 items, then each press of the **Load More** button reveals 5 more.

\`\`\`jsx
<Feed
  items={mockItems}
  sortBy={mockSortBy}
  selectedFilters={mockSelectedFilters}
  loadMore={5}  // loads 5 more items each click
  ItemComponent={FeedItem}
/>
\`\`\`

**Key Points**:
- The initial state will show 5 items (if \`loadMore={5}\`).
- Each button click calls an internal function to increase the \`visibleCount\` by 5, up to the total length of \`items\`.
- If all items are displayed, the **Load More** button disappears.

---

## 4) Infinite Scrolling

Use the **\`infiniteScroll\`** prop to load items automatically as the user reaches the bottom of the feed. For example, \`infiniteScroll={10}\` means:
1. Start by showing 10 items.
2. Whenever the user scrolls to the bottom, load 10 more, until all items are visible.

By default, **infinite scrolling** attaches a scroll listener to the **window** object. You can enable container-based scrolling by providing a **\`scrollContainerRef\`** that references a scrollable div.

### Container-Based Scrolling

1. Create a scrollable container (e.g., a \`<div>\`) with a fixed height and \`overflow-y: auto\`.
2. Use a React ref for that container.
3. Pass that ref as \`scrollContainerRef\` to the **Feed**.

\`\`\`jsx
const containerRef = useRef(null);

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
    infiniteScroll={10}               // 10 items at a time
    ItemComponent={FeedItem}
    scrollContainerRef={containerRef} // container-based scrolling
  />
</div>
\`\`\`

**How It Works**:
- If \`scrollContainerRef\` is provided, the feed logic calculates the distance from the bottom **of the container**, rather than the whole page.
- Once the distance to bottom is less than a threshold (e.g., 50px), it appends more items (by increasing the internal \`visibleCount\`).
- This continues until all items are displayed.

**Without** \`scrollContainerRef\`, the same logic attaches to the **window** scroll event, allowing you to do "infinite page scroll."

---

## 5) Putting It All Together

Below are example stories demonstrating each mode:
- **\`Default\`**: All items are shown at once (no pagination, no load more, no infinite scroll).
- **\`PaginatedFeed\`**: Pagination with 5 items per page.
- **\`LoadMoreFeed\`**: A "Load More" button revealing items in increments of 5.
- **\`InfiniteScrollingFeed\`**: Automatically loads more items as you scroll, using a container of fixed height.

Enjoy experimenting with the \`Feed\` component in various scenarios!
        `,
      },
    },
  },
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

/**
 * Infinite Scrolling in a container:
 * We provide a fixed-height container with scroll for demonstration
 * in Storybook. In a real application, you can omit the ref for page-level
 * scrolling or keep it for container-based scrolling.
 */
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
