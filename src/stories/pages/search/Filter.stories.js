// AllFilters.stories.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '../../../components/search/filter/Filter';
import Filter2 from '../../../components/search/filter/Filter2';
import FilterHorizontal from '../../../components/search/filter/FilterHorizontal';
import FilterDrawer from '../../../components/search/filter/FilterDrawer';
import FilterModal from '../../../components/search/filter/FilterModal';

// Default export for Storybook categorization and documentation
export default {
  title: 'Pages/Search/Filters',

};

// Styled container for consistent layout in stories
const StoryContainer = styled.div`
  padding: 2rem;
`;

// Mock onChange handler
const mockOnChange = (selected) => {
  console.log('Selected filters:', selected);
};

export const DefaultFilter = () => (
  <StoryContainer>
    <h3>Filter Component (Dropdown & Range Slider)</h3>
    <Filter onChange={mockOnChange} />
  </StoryContainer>
);

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

export const HorizontalButtonFilter = () => (
  <StoryContainer>
    <h3>FilterHorizontal Component (Scrollable Buttons)</h3>
    <FilterHorizontal onChange={mockOnChange} />
  </StoryContainer>
);

export const BottomDrawerFilter = () => (
  <StoryContainer>
    <h3>FilterDrawer Component</h3>
    <FilterDrawer onChange={mockOnChange} />
  </StoryContainer>
);


export const ModalFilter = () => (
  <StoryContainer>
    <h3>FilterModal Component</h3>
    <FilterModal onChange={mockOnChange} />
  </StoryContainer>
);
