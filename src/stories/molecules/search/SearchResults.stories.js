// src/stories/SearchResults.stories.jsx

import React from 'react';
import SearchResults from '../../../components/search/SearchResults'; // Adjust path as needed
import CardProduct from '../../../components/cards/CardProduct'; // Adjust path as needed

export default {
  title: 'Molecules/Search/SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`SearchResults\` component is designed to display search results in a structured format. It handles various states such as loading, errors, and empty results, providing a comprehensive user experience. Each result can be rendered using a custom component.

### Features
- **Customizable Result Renderer**: Accepts a \`renderResult\` prop to customize how each search result is displayed.
- **Pagination Support**: Handles page changes with a callback function.
- **Error and Loading States**: Displays appropriate UI elements during loading or when errors occur.

### Usage

\`\`\`jsx
import React from 'react';
import SearchResults from './components/search/SearchResults';
import CardProduct from './components/cards/CardProduct';

const ExampleComponent = () => (
  <SearchResults
    results={[
      {
        id: '1',
        name: 'Product 1',
        image1: 'https://via.placeholder.com/150',
        price: '20.00',
      },
    ]}
    loading={false}
    error={null}
    page={0}
    onPageChange={(newPage) => console.log(\`Page changed to: \${newPage + 1}\`)}
    hasNextPage={true}
    renderResult={(result) => (
      <CardProduct
        title={result.name}
        image={result.image1}
        price={result.price}
      />
    )}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

const Template = (args) => <SearchResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: [
    {
      id: '1',
      name: 'Product 1',
      image1: 'https://via.placeholder.com/150',
      price: '20.00',
    },
    {
      id: '2',
      name: 'Product 2',
      image1: 'https://via.placeholder.com/150',
      price: '30.00',
    },
  ],
  loading: false,
  error: null,
  page: 0,
  onPageChange: (newPage) => alert(`Page changed to: ${newPage + 1}`),
  hasNextPage: true,
  renderResult: (result) => (
    <CardProduct
      title={result.name}
      image={result.image1}
      price={result.price}
    />
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  results: [],
  loading: true,
  error: null,
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  results: [],
  loading: false,
  error: { message: 'Something went wrong.' },
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};

export const NoResults = Template.bind({});
NoResults.args = {
  results: [],
  loading: false,
  error: null,
  page: 0,
  onPageChange: () => {},
  hasNextPage: false,
  renderResult: () => {},
};
