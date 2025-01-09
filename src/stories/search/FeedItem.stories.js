import React from 'react';
import FeedItem from '../../components/search/FeedItem';

export default {
  title: 'Search/FeedItem/FeedItem',
  component: FeedItem,
  parameters: {
    docs: {
      description: {
        component: `
### FeedItem Component

The \`FeedItem\` component is a reusable list item component. It expects a single prop:

- \`data\`: An object containing \`title\` and \`description\` fields to display.

#### Example Usage

\`\`\`jsx
import React from 'react';
import FeedItem from './components/Feed/FeedItem';

const sampleData = {
  title: 'Sample Item',
  description: 'This is a description for the sample item.'
};

const Example = () => <FeedItem data={sampleData} />;

export default Example;
\`\`\`
        `,
      },
    },
  },
};

const sampleData = {
  title: 'Sample Feed Item',
  description: 'This is a description for the sample feed item.',
};

export const Default = () => <FeedItem data={sampleData} />;
