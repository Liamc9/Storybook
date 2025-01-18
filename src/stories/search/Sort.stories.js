// Sort.stories.jsx
import React, { useState } from 'react';
import Sort from '../../components/search/Sort';
import Sort2 from '../../components/search/Sort2';
import SortRadio from '../../components/search/SortRadio';

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
  parameters: {
    docs: {
      description: {
        component: `
# Sorting Components Overview

This documentation provides an overview of three different sorting components: **Sort**, **Sort2**, and **SortRadio**. Each component offers a unique approach to sorting items with customizable options and comparators. You can adapt these examples for your own project requirements.
        `,
      },
    },
  },
};

//
// INDIVIDUAL STORIES WITH FUNCTIONALITY
//

/**
 ### Sort Component Demo

Interact with the `Sort` component to see how items are sorted based on different criteria. Select a sorting option from the dropdown to re-order the list accordingly.

#### How to Use the Sort Component
1. **Import and Setup**:  
   Import the `Sort` component and pass an array of items and a callback `onSortedChange` to handle sorted results.
   
   ```jsx
   import React, { useState } from 'react';
   import Sort from './components/search/Sort';

   const items = [ ... ]; // your data
   const [sortedItems, setSortedItems] = useState(items);
   
   <Sort items={items} onSortedChange={setSortedItems} />;
   ```

2. **Integration in a Layout**:  
   Place the `Sort` component above the list you want to sort. The component provides a dropdown with various sort criteria. When a criterion is selected, the `onSortedChange` callback updates the list based on the sorting logic defined within the component.
   
3. **Customization**:  
   - Update the `sortOptions` array in the component file to add or remove sorting options.
   - Modify the `getSortComparator` function to change how items are compared and sorted.

By following these steps, you can easily integrate and customize the `Sort` component in your application.
  
 */
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

/**
 ### Sort2 Component Demo

Interact with the `Sort2` component, which offers a customized dropdown with styling options. Choose a sort option to see how the list rearranges.

#### How to Use the Sort2 Component
1. **Import and Setup**:  
   Import the `Sort2` component, then supply it with items, a callback for sorted results, and optional props like `label` and `color`.
   
   ```jsx
   import React, { useState } from 'react';
   import Sort2 from './components/search/Sort2';

   const items = [ ... ]; // your data
   const [sortedItems, setSortedItems] = useState(items);
   
   <Sort2 
     items={items} 
     onSortedChange={setSortedItems} 
     label="Sort by"
     color="#2563EB"
   />;
   ```

2. **Understanding Props**:
   - `items`: Array of items to be sorted.
   - `onSortedChange`: Callback function to receive the sorted list.
   - `label` and `color`: Customize the label and color of the dropdown.

3. **Customization**:
   - Modify the `sortOptions` and `getSortComparator` within the component file to adjust sorting behavior.
   - Change the styling by editing the `SelectInput` component or passing different prop values.

These instructions guide you through integrating and customizing the `Sort2` component effectively.
       
 */
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


/**
 ### SortRadio Component Demo

Interact with the `SortRadio` component, designed for mobile-friendly sorting using radio buttons and a bottom drawer. Select a sorting option to see immediate reordering of the list.

#### How to Use the SortRadio Component
1. **Import and Setup**:  
   Import `SortRadio` and integrate it in your component by passing the items array and a callback to handle sorted changes.
   
   ```jsx
   import React, { useState } from 'react';
   import SortRadio from './components/search/SortRadio';

   const items = [ ... ]; // your data
   const [sortedItems, setSortedItems] = useState(items);

   <SortRadio items={items} onSortedChange={setSortedItems} />;
   ```

2. **User Interaction**:
   - A "Sort" button opens a bottom drawer containing radio options.
   - Select a radio button to apply the chosen sorting criterion. The list updates once an option is selected, and the drawer closes automatically.

3. **Customization**:
   - Update the `sortingOptions` array in the component file to modify available sorting criteria.
   - Adjust styles by modifying styled-components such as `RadioContainer` and `SortButton`.
   - Change behavior on selection by altering the `handleChange` function as needed.

These detailed instructions help you understand how to integrate, use, and customize the `SortRadio` component effectively in your projects.
    
 */
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

