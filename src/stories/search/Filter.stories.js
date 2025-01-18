// AllFilters.stories.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '../../components/search/Filter';
import Filter2 from '../../components/search/Filter2';
import FilterHorizontal from '../../components/search/FilterHorizontal';
import FilterDrawer from '../../components/search/FilterDrawer';
import FilterModal from '../../components/search/FilterModal';

// Default export for Storybook categorization and documentation
export default {
  title: 'Search/Filters/AllFilters',
  parameters: {
    docs: {
      description: {
        component: `
### Filter Components Showcase

This story demonstrates multiple filter components available in the library:
- **Filter:** Traditional dropdown and range slider filters.
- **Filter2:** Multi-group filter interface.
- **FilterHorizontal:** A horizontal, scrollable row of clickable filter buttons.
- **FilterDrawer:** A bottom drawer containing filter options.
- **FilterModal:** A modal-based filter interface.

Explore each filter type to understand its layout, behavior, and integration guidelines.
        `,
      },
    },
  },
};

// Styled container for consistent layout in stories
const StoryContainer = styled.div`
  padding: 2rem;
`;

// Mock onChange handler
const mockOnChange = (selected) => {
  console.log('Selected filters:', selected);
};

/**
### DefaultFilter Component Demo

Interact with the `Filter` component to see traditional dropdown and range slider filters in action.

#### How to Use the Filter Component
1. **Import and Setup**:  
   Import the `Filter` component and provide an `onChange` callback to handle filter selection changes.
   
   ```jsx
   import Filter from 'path-to-your/Filter';

   const handleFilterChange = (selected) => {
     // handle filter changes
   };

   <Filter onChange={handleFilterChange} />;
   ```
   
2. **Integration in a Layout**:  
   Place the `Filter` component where filtering functionality is needed. It renders dropdowns and sliders for various filtering criteria.
   
3. **Customization**:
   - Modify filter options directly in the `Filter` component or pass additional props to customize its behavior.
   - Update styling as needed using styled-components or CSS overrides.

By following these steps, you can integrate the `Filter` component to filter lists or datasets based on user input.
*/
export const DefaultFilter = () => (
  <StoryContainer>
    <h3>Filter Component (Dropdown & Range Slider)</h3>
    <Filter onChange={mockOnChange} />
  </StoryContainer>
);

/**
### MultiGroupFilter Component Demo

The `Filter2` component offers a multi-group filtering interface, allowing users to select options across different categories.

#### How to Use the Filter2 Component
1. **Import and Setup**:  
   Import `Filter2`, define filter groups, and implement an `onChange` callback to receive selected filters.
   
   ```jsx
   import React, { useState } from 'react';
   import Filter2 from 'path-to-your/Filter2';

   const filters = [
     {
       category: 'status',
       label: 'Status',
       options: [ ... ],
     },
     // additional groups
   ];

   const [selectedFilters, setSelectedFilters] = useState({});
   const handleFilterChange = (filters) => setSelectedFilters(filters);

   <Filter2 filters={filters} onChange={handleFilterChange} />;
   ```
   
2. **Understanding Props**:
   - `filters`: Array of filter groups each with a category, label, and options.
   - `onChange`: Callback function that receives the selected filter data.
   
3. **Customization**:
   - Adjust the `filters` array to define different groups and options.
   - Customize styles and behavior by modifying the `Filter2` component or passing additional props.

Using these instructions, you can integrate and customize `Filter2` for complex filtering needs.
*/
export const MultiGroupFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const filters = [
    {
      category: 'status',
      label: 'Status',
      options: [
        { value: 'completed', label: 'Completed', initial: true },
        { value: 'pending', label: 'Pending' },
        { value: 'inProgress', label: 'In Progress' },
      ],
    },
    {
      category: 'priority',
      label: 'Priority',
      options: [
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium', initial: true },
        { value: 'low', label: 'Low' },
      ],
    },
  ];

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    console.log('Selected filters:', filters);
  };

  return (
    <StoryContainer>
      <h3>Filter2 Component (Multi-Group)</h3>
      <Filter2 filters={filters} onChange={handleFilterChange} />
    </StoryContainer>
  );
};

/**
### HorizontalButtonFilter Component Demo

Use `FilterHorizontal` to display a horizontal, scrollable row of clickable filter buttons.

#### How to Use the FilterHorizontal Component
1. **Import and Setup**:  
   Import `FilterHorizontal` and provide an `onChange` callback to handle filter selections.
   
   ```jsx
   import FilterHorizontal from 'path-to-your/FilterHorizontal';

   <FilterHorizontal onChange={handleFilterChange} />;
   ```
   
2. **Integration in a Layout**:  
   Place `FilterHorizontal` where horizontal scrolling of filter options is desired. It renders buttons in a scrollable row.
   
3. **Customization**:
   - Customize button styles and behavior by modifying the component or using additional props.
   - Extend functionality by handling complex filter logic within the `onChange` callback.

Follow these steps to integrate `FilterHorizontal` for a sleek, mobile-friendly filter interface.
*/
export const HorizontalButtonFilter = () => (
  <StoryContainer>
    <h3>FilterHorizontal Component (Scrollable Buttons)</h3>
    <FilterHorizontal onChange={mockOnChange} />
  </StoryContainer>
);

/**
### BottomDrawerFilter Component Demo

The `FilterDrawer` component displays filter options in a bottom drawer, ideal for mobile interfaces.

#### How to Use the FilterDrawer Component
1. **Import and Setup**:  
   Import `FilterDrawer` and provide an `onChange` callback to handle filter changes.
   
   ```jsx
   import FilterDrawer from 'path-to-your/FilterDrawer';

   <FilterDrawer onChange={handleFilterChange} />;
   ```
   
2. **User Interaction**:
   - Tapping a button opens a bottom drawer with various filter options.
   - Users select filters, and changes trigger the `onChange` callback.
   
3. **Customization**:
   - Modify layout and styling by editing the `FilterDrawer` component or overriding styles.
   - Customize filter options by altering internal logic or passing additional props.

By integrating `FilterDrawer`, you can offer a modern drawer-based filtering experience.
*/

export const BottomDrawerFilter = () => (
  <StoryContainer>
    <h3>FilterDrawer Component</h3>
    <FilterDrawer onChange={mockOnChange} />
  </StoryContainer>
);

/**
### ModalFilter Component Demo

The `FilterModal` component provides a modal-based filter interface, encapsulating filter options in a pop-up dialog.

#### How to Use the FilterModal Component
1. **Import and Setup**:  
   Import `FilterModal` and set up an `onChange` callback to handle selected filters.
   
   ```jsx
   import FilterModal from 'path-to-your/FilterModal';

   <FilterModal onChange={handleFilterChange} />;
   ```
   
2. **User Interaction**:
   - Opening the modal displays filter options in a pop-up.
   - Users can select filters inside the modal; upon confirmation, the `onChange` callback triggers.
   
3. **Customization**:
   - Modify modal appearance and animations by updating the `FilterModal` component.
   - Adjust available filter options by changing internal configuration or passing new props.

These instructions help you integrate and tailor the `FilterModal` for a seamless modal-based filtering experience.
*/

export const ModalFilter = () => (
  <StoryContainer>
    <h3>FilterModal Component</h3>
    <FilterModal onChange={mockOnChange} />
  </StoryContainer>
);
