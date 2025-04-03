// Sort.stories.jsx
import React, { useState } from 'react';
import Sort from '../../components/search/sort/Sort';
import Sort2 from '../../components/search/sort/Sort2';
import SortRadio from '../../components/search/sort/SortRadio';

//
// SAMPLE DATA
//
const sortItems1 = [
  { title: 'Item A', date: '2023-01-01' },
  { title: 'Item B', date: '2023-02-15' },
  { title: 'Item C', date: '2022-12-31' },
];

const sortItems2 = [
  { title: 'Banana', date: '2023-08-20' },
  { title: 'Apple', date: '2023-08-22' },
  { title: 'Cherry', date: '2023-08-21' },
];

const sortItems3 = [
  { title: 'Item X', date: '2023-03-10' },
  { title: 'Item Y', date: '2022-11-05' },
  { title: 'Item Z', date: '2023-05-25' },
];

export default {
  title: 'Search/Sort/Sort',
};
export const SortDemo = () => {
  const [sortedItems, setSortedItems] = useState(sortItems1);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h3>Sort Component Demo</h3>
      <Sort items={sortItems1} onSortedChange={setSortedItems} />
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.title}: {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Sort2Demo = () => {
  const [sortedItems, setSortedItems] = useState(sortItems2);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h3>Sort2 Component Demo</h3>
      <Sort2
        items={sortItems2}
        onSortedChange={setSortedItems}
        label="Sort by"
        color="#2563EB"
      />
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.title}: {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};


export const SortRadioDemo = () => {
  const [sortedItems, setSortedItems] = useState(sortItems3);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h3>SortRadio Component Demo</h3>
      <SortRadio items={sortItems3} onSortedChange={setSortedItems} />
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item.title}: {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

