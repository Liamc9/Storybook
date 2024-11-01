// src/stories/SearchFilters.stories.jsx

import React, { useState } from 'react';
import SearchFilters from '../../../components/search/SearchFilters';

// Define a default export with the component's metadata
export default {
  title: 'Molecules/Search/SearchFilters',
  component: SearchFilters,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SearchFilters\` component provides an interactive way for users to filter search results based on various attributes. It can be configured with different filter options to meet the needs of a range of applications.

### Features
- **Dynamic Filters**: Allows users to apply various filters dynamically.
- **Customizable Attributes**: Accepts a range of attributes to customize filter options.
- **Real-time Filter Change Handling**: Invokes a callback when filters are applied or changed.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import SearchFilters from './components/search/SearchFilters';

const ExampleComponent = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
    console.log(\`Filter applied: \${filterName} = \${filterValue}\`);
  };

  return (
    <SearchFilters
      attributes={[
        {
          name: 'color',
          label: 'Color',
          options: [
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' },
            { value: 'green', label: 'Green' },
          ],
        },
        {
          name: 'size',
          label: 'Size',
          options: [
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
          ],
        },
      ]}
      onFilterChange={handleFilterChange}
    />
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Template for creating stories
const Template = (args) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
    alert(`Filter applied: ${filterName} = ${filterValue}`);
  };

  return <SearchFilters {...args} onFilterChange={handleFilterChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  attributes: [
    {
      name: 'color',
      label: 'Color',
      options: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
  ],
};

// Story with preselected filters
export const PreselectedFilters = Template.bind({});
PreselectedFilters.args = {
  attributes: [
    {
      name: 'color',
      label: 'Color',
      options: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      name: 'size',
      label: 'Size',
      options: [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
  ],
};
