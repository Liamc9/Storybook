// Filter2.stories.jsx
import React, { useState } from 'react';
import Filter2 from '../../components/search/Filter2';

export default {
  title: 'Search/Filters/Filter2',
  component: Filter2,
  parameters: {
    docs: {
      description: {
        component: `
### Filter2 Component (Multi-Group)

The \`Filter2\` component supports multiple filter groups for complex data filtering. Each group can represent a different property and contain its own set of options.

#### Props

- \`filters\`: An array of filter group objects:
  - \`category\`: Unique identifier for the group.
  - \`label\`: (Optional) Display label for the group.
  - \`options\`: Array of options with:
    - \`value\`: Unique identifier for the option.
    - \`label\`: Display text for the option.
    - \`initial\`: (Optional) Whether the option is selected by default.
- \`onChange\`: Callback invoked on any change in selections. Receives an object mapping categories to arrays of selected values.

#### Example Usage

\`\`\`jsx
import React, { useState } from 'react';
import Filter2 from './components/Filter2';

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

const Example = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    console.log('Selected filters:', filters);
  };

  return <Filter2 filters={filters} onChange={handleFilterChange} />;
};

export default Example;
\`\`\`
        `,
      },
    },
  },
};

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

export const Default = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    console.log('Selected filters:', filters);
  };

  return <Filter2 filters={filters} onChange={handleFilterChange} />;
};
