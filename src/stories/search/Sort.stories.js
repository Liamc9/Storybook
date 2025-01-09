// Sort.stories.jsx
import React from 'react';
import Sort from '../../components/search/Sort';

export default {
  title: 'Search/Sort/Sort',
  component: Sort,
  parameters: {
    docs: {
      description: {
        component: `
### Sort Component

The \`Sort\` component provides a customizable sorting dropdown with project-specific options and comparators. Below is the structure of the \`Sort\` file and details on how to customize it for your project.

#### Sort Component File

\`\`\`jsx
import React, { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useGenericSort } from './sortLogic';  // Reusable logic for sorting state

// Styles
const SortContainer = styled.div\`
  margin-bottom: 1rem;
\`;

const Select = styled.select\`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
\`;

// Sort options specific to the project
const sortOptions = [
  { value: 'titleAsc', label: 'Title: A-Z' },
  { value: 'titleDesc', label: 'Title: Z-A' },
  { value: 'dateNewest', label: 'Date: Newest' },
  { value: 'dateOldest', label: 'Date: Oldest' },
];

// Comparator logic specific to the project
const getSortComparator = (criteria) => {
  switch (criteria) {
    case 'titleAsc':
      return (a, b) => a.title.localeCompare(b.title);
    case 'titleDesc':
      return (a, b) => b.title.localeCompare(a.title);
    case 'dateNewest':
      return (a, b) => new Date(b.date) - new Date(a.date);
    case 'dateOldest':
      return (a, b) => new Date(a.date) - new Date(b.date);
    default:
      return null;
  }
};

const Sort = ({ items, onSortedChange }) => {
  const { updateSort } = useGenericSort({ items, onSortedChange });

  return (
    <SortContainer>
      <Select
        onChange={(e) => {
          const comparator = getSortComparator(e.target.value);
          updateSort(comparator);
        }}
      >
        {sortOptions.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </SortContainer>
  );
};

export default Sort;
\`\`\`

#### Customizing the Sort Component

To customize the \`Sort\` component for your project:

1. **Update Sort Options**: Modify the \`sortOptions\` array to include the sorting options you need. Each option should have:
   - \`value\`: A unique identifier for the sorting logic.
   - \`label\`: The text displayed in the dropdown.

   Example:
   \`\`\`jsx
   const sortOptions = [
     { value: 'priceAsc', label: 'Price: Low to High' },
     { value: 'priceDesc', label: 'Price: High to Low' },
   ];
   \`\`\`

2. **Update Comparators**: Add or update cases in the \`getSortComparator\` function to define how items are sorted for each option.

   Example:
   \`\`\`jsx
   const getSortComparator = (criteria) => {
     switch (criteria) {
       case 'priceAsc':
         return (a, b) => a.price - b.price;
       case 'priceDesc':
         return (a, b) => b.price - a.price;
       default:
         return null;
     }
   };
   \`\`\`

3. **Customize Layout**: Modify the JSX or styled-components in the \`Sort\` component for a different layout or style.

#### Example Usage

\`\`\`jsx
import React, { useState } from 'react';
import Sort from './components/Sort';

const items = [
  { name: 'Item A', price: 10 },
  { name: 'Item B', price: 20 },
  { name: 'Item C', price: 15 },
];

const Example = () => {
  const [sortedItems, setSortedItems] = useState(items);

  return (
    <div>
      <Sort items={items} onSortedChange={setSortedItems} />
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.name}: **DOLLARSIGNTOGOHERE BUT COULDNT DO IN MARKDOWN{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
\`\`\`
        `,
      },
    },
  },
};

const sortOptions = [
  { value: 'titleAsc', label: 'Title: A-Z' },
  { value: 'titleDesc', label: 'Title: Z-A' },
  { value: 'dateNewest', label: 'Date: Newest' },
  { value: 'dateOldest', label: 'Date: Oldest' },
];

export const Default = () => (
  <Sort
    options={sortOptions}
    onChange={(value) => console.log('Selected sort:', value)}
  />
);
