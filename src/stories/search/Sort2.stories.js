// Sort2.stories.jsx
import React from 'react';
import Sort2 from '../../components/search/Sort2';

export default {
  title: 'Search/Sort/Sort2',
  component: Sort2,
  parameters: {
    docs: {
      description: {
        component: `
### Sort2 Component

The \`Sort2\` component is a customizable sorting dropdown that uses a custom-styled select input. It encapsulates sorting logic with project-specific options and comparators, utilizing the \`SelectInput\` component for its UI.

#### Sort2 Component File

\`\`\`jsx
import React from 'react';
import { SortLogic } from './sortLogic';
import SelectInput from './SelectInput';

const sortOptions = [
  { value: 'titleAsc', label: 'Title: A-Z' },
  { value: 'titleDesc', label: 'Title: Z-A' },
  { value: 'dateNewest', label: 'Date: Newest' },
  { value: 'dateOldest', label: 'Date: Oldest' },
];

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

const Sort2 = ({ items, onSortedChange, label = "Sort by", color }) => {
  const { updateSort } = SortLogic({ items, onSortedChange });

  return (
    <SelectInput
      name="sort2"
      label={label}
      color={color}
      options={sortOptions}
      onChange={(e) => {
        const comparator = getSortComparator(e.target.value);
        updateSort(comparator);
      }}
    />
  );
};

export default Sort2;
\`\`\`

#### Customizing Sort2

To customize the \`Sort2\` component for your project:

1. **Update Sort Options**: Modify the \`sortOptions\` array to match your sorting needs.
2. **Update Comparators**: Alter the \`getSortComparator\` function to implement custom sorting logic.
3. **Customize UI**: The component uses \`SelectInput\`. To change its appearance, adjust styles in the \`SelectInput\` component or pass different props like \`label\` or \`color\`.

#### Example Usage

\`\`\`jsx
import React, { useState } from 'react';
import Sort2 from './components/Sort2';
import Feed from './components/Feed';

const sampleItems = [
  { title: 'Banana', date: '2023-08-20' },
  { title: 'Apple', date: '2023-08-22' },
  { title: 'Cherry', date: '2023-08-21' },
];

const Example = () => {
  const [sortedItems, setSortedItems] = useState(sampleItems);

  return (
    <div>
      <Sort2 items={sampleItems} onSortedChange={setSortedItems} label="Sort items" color="#2563EB" />
      <Feed items={sortedItems} />
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

export const Default = (args) => <Sort2 {...args} />;
Default.args = {
  items: [
    { title: 'Banana', date: '2023-08-20' },
    { title: 'Apple', date: '2023-08-22' },
    { title: 'Cherry', date: '2023-08-21' },
  ],
  onSortedChange: (sortedItems) => console.log('Sorted Items:', sortedItems),
  label: "Sort by",
  color: "#2563EB",
};
