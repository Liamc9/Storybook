// SearchView.stories.jsx
import React, { useState, useEffect } from 'react';
import Feed from '../../components/search/Feed';
import FeedItem2 from '../../components/search/FeedItem2'; // New FeedItem2 component
import Filter from '../../components/search/Filter';
import Sort from '../../components/search/Sort';

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

This story demonstrates seven scenarios for the \`Feed\` component:

1. **Plain Unsorted Feed**: A basic feed without filtering or sorting.
2. **Plain Feed with Custom Item Component (\`FeedItem2\`)**: A feed that uses a custom item component.
3. **Filterable Feed**: A feed with dynamic filtering capabilities.
4. **Sortable Feed**: A feed with dynamic sorting capabilities.
5. **Feed with Both Filtering and Sorting**: A feed that supports both filtering and sorting simultaneously.
6. **Predefined Sorting Feed**: A feed with sorting logic applied automatically.
7. **Predefined Filtering Feed**: A feed with filtering logic applied automatically.

#### Props
- \`items\`: An array of objects representing the data to be displayed.
- \`ItemComponent\`: The React component used to render each item (defaults to \`FeedItem\`).
- \`selectedFilters\`: An object representing active filters to apply.
- \`sortBy\`: A function used to sort the items.

---

#### 1. Plain Unsorted Feed

This example shows a basic feed rendering the default \`FeedItem\` component for each item without any filtering or sorting.

\`\`\`jsx
<Feed items={sampleItems} ItemComponent={FeedItem2}/>
\`\`\`

---

#### 2. Filterable Feed

This example shows a feed with dynamic filtering capabilities. The active filters are managed via the \`selectedFilters\` state.

\`\`\`jsx
<Filter onChange={setSelectedFilters} />
<Feed items={sampleItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2}/>
\`\`\`

---

#### 3. Sortable Feed

This example demonstrates dynamic sorting capabilities. The sorted items are managed via the \`sortedItems\` state.

\`\`\`jsx
<Sort items={sampleItems} onSortedChange={setSortedItems} />
<Feed items={sortedItems} ItemComponent={FeedItem2}/>
\`\`\`

---

#### 4. Feed with Both Filtering and Sorting

This example shows a feed with both filtering and sorting capabilities, combining the logic from the previous two examples.

\`\`\`jsx
<Filter onChange={setSelectedFilters} />
<Sort items={sampleItems} onSortedChange={setSortedItems} />
<Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2}/>
\`\`\`

---

#### 5. Predefined Sorting Feed

This example applies predefined sorting logic (by date descending) to the items automatically.

\`\`\`jsx
<Feed items={sortedItems} ItemComponent={FeedItem2}/>
\`\`\`

---

#### 6. Predefined Filtering Feed

This example applies predefined filtering logic (only show completed tasks) to the items automatically.

\`\`\`jsx
<Feed items={filteredItems} ItemComponent={FeedItem2}/>
\`\`\`

#### 5. SearchView component with styling

This example shows a feed with both filtering and sorting capabilities, combining the logic from the previous two examples.

\`\`\`jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Feed, FeedItem } from 'liamc9npm';
import Filter from '../components/search/Filter';
import Sort from '../components/search/Sort';

const sampleItems = [
  { title: 'Task 1', description: 'Do this', status: 'completed', priority: 'high', date: '2023-08-20' },
  { title: 'Task 2', description: 'Do that', status: 'pending', priority: 'medium', date: '2023-08-22' },
  { title: 'Task 3', description: 'Another task', status: 'completed', priority: 'low', date: '2023-08-21' },
  { title: 'Task 4', description: 'Yet another task', status: 'inProgress', priority: 'medium', date: '2023-08-23' },
];

// Styled components
const SearchViewContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
\`;

const FilterContainer = styled.div\`
  width: 100%;
  margin-bottom: 20px;
\`;

const SortContainer = styled.div\`
  width: 100%;
  margin-bottom: 20px;
\`;

const FeedContainer = styled.div\`
  width: 100%;
\`;

export const SearchView = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortedItems, setSortedItems] = useState(sampleItems);

  return (
    <SearchViewContainer>
      <FilterContainer>
        <Filter onChange={setSelectedFilters} />
      </FilterContainer>
      <SortContainer>
        <Sort items={sampleItems} onSortedChange={setSortedItems} />
      </SortContainer>
      <FeedContainer>
        <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem} />
      </FeedContainer>
    </SearchViewContainer>
  );
};

export default SearchView;
\`\`\`

---
        `,
      },
    },
  },
};

const sampleItems = [
  { title: 'Task 1', description: 'Do this', status: 'completed', priority: 'high', date: '2023-08-20' },
  { title: 'Task 2', description: 'Do that', status: 'pending', priority: 'medium', date: '2023-08-22' },
  { title: 'Task 3', description: 'Another task', status: 'completed', priority: 'low', date: '2023-08-21' },
  { title: 'Task 4', description: 'Yet another task', status: 'inProgress', priority: 'medium', date: '2023-08-23' },
];

export const PlainFeed = () => {
  return <Feed items={sampleItems} ItemComponent={FeedItem2}/>;
};


export const FilterableFeed = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  return (
    <div>
      <Filter onChange={setSelectedFilters} />
      <Feed items={sampleItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2}/>
    </div>
  );
};

export const SortableFeed = () => {
  const [sortedItems, setSortedItems] = useState(sampleItems);
  return (
    <div>
      <Sort items={sampleItems} onSortedChange={setSortedItems} />
      <Feed items={sortedItems} ItemComponent={FeedItem2}/>
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
      <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2}/>
    </div>
  );
};

export const PredefinedSortingFeed = () => {
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    // Predefine sorting logic: sort by date descending
    const sorted = [...sampleItems].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedItems(sorted);
  }, []);

  return <Feed items={sortedItems} ItemComponent={FeedItem2}/>;
};

export const PredefinedFilteringFeed = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Predefine filtering logic: filter items with status 'completed'
    const filtered = sampleItems.filter(item => item.status === 'completed');
    setFilteredItems(filtered);
  }, []);

  return <Feed items={filteredItems} ItemComponent={FeedItem2}/>;
};
