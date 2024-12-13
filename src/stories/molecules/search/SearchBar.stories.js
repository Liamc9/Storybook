// src/stories/SearchBar.stories.jsx

import React from 'react';
import SearchBar from '../../../components/molecules/search/SearchBar';

// Define a default export with the component's metadata
export default {
  title: 'Molecules/Search/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SearchBar\` component is designed for searching content within an application. It accepts user input and triggers a search function when a search is performed. This component is ideal for filtering lists, searching databases, or navigating content.

### Features
- **Real-time Search**: The \`onSearch\` callback is triggered when a search is performed, allowing for dynamic interaction.
- **Customizable Placeholder**: The input field can include a custom placeholder text for guidance.
- **Pre-filled Input**: Supports pre-filled input values for more interactive experiences.

### Usage

\`\`\`jsx
import React from 'react';
import SearchBar from './components/search/SearchBar';

const ExampleComponent = () => (
  <SearchBar
    onSearch={(input) => console.log(\`Search query: \${input}\`)}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <SearchBar {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  onSearch: (input) => alert(`Search query: ${input}`),
};

// Story with pre-filled input value
export const PrefilledInput = Template.bind({});
PrefilledInput.args = {
  onSearch: (input) => alert(`Search query: ${input}`),
};
