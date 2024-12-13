// src/stories/SearchSort.stories.jsx

import React, { useState } from 'react';
import SearchSort from '../../../components/molecules/search/SearchSort';

// Define a default export with the component's metadata
export default {
  title: 'Molecules/Search/SearchSort',
  component: SearchSort,
  parameters: {
    docs: {
      description: {
        component: `
The \`SearchSort\` component provides a user interface for sorting search results based on various attributes. Users can select from multiple sorting options, which can be configured as needed for different applications.

### Features
- **Dynamic Sort Options**: Accepts an array of attributes to provide flexible sorting options.
- **Initial Sort Option**: Supports setting an initial sort order.
- **Callback on Sort Change**: Invokes a callback when the selected sort option changes, allowing for dynamic sorting behavior.

### Usage

\`\`\`jsx
import React, { useState } from 'react';
import SearchSort from './components/search/SearchSort';

const ExampleComponent = () => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (sortValue) => {
    setSortOption(sortValue);
    console.log(\`Selected sort option: \${sortValue}\`);
  };

  return (
    <SearchSort
      attributes={['price', 'date', 'rating']}
      onSortChange={handleSortChange}
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
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (sortValue) => {
    setSortOption(sortValue);
  };

  return <SearchSort {...args} onSortChange={handleSortChange} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  attributes: ['price', 'date', 'rating'], // You can change the attributes here
};

// Story with initial sort applied
export const WithInitialSort = Template.bind({});
WithInitialSort.args = {
  attributes: ['price', 'date', 'rating'],
  initialSort: 'price:asc',
};
