import React from 'react';
import FeedItem from '../../components/search/FeedItem';
import FeedItem2 from '../../components/search/FeedItem2';

export default {
  title: 'Search/FeedItem/FeedItem',
  tags: ['autodocs'],
  // Optionally add global parameters if needed
  parameters: {
    docs: {
      // You can set general docs parameters for the entire collection here
    },
  },
};

const sampleData = {
  title: 'Sample Feed Item',
  description: 'This is a description for the sample feed item.',
};

const itemData = {
  title: 'Task Example',
  description: 'This is an example task',
  status: 'completed',
  priority: 'high',
  date: '2023-08-20',
};

/**
 * ### FeedItem Component
 *
 * The `FeedItem` component is a reusable list item component. It expects a single prop:
 *
 * - `data`: An object containing `title` and `description` fields to display.
 *
 * #### Example Usage
 *
 * ```jsx
 * import React from 'react';
 * import FeedItem from './components/Feed/FeedItem';
 *
 * const sampleData = {
 *   title: 'Sample Item',
 *   description: 'This is a description for the sample item.'
 * };
 *
 * const Example = () => <FeedItem data={sampleData} />;
 *
 * export default Example;
 * ```
 */
export const DefaultFeedItem = () => <FeedItem data={sampleData} />;
DefaultFeedItem.story = {
  name: 'FeedItem Default',
 
};

/**
 * ### FeedItem2 Component
 *
 * The `FeedItem2` component is a customizable item component designed to display detailed information about a single feed item. It accepts a `data` prop that contains the item's attributes, such as title, description, status, priority, and date.
 *
 * #### Usage
 *
 * ```jsx
 * import React from 'react';
 * import FeedItem2 from '../../components/search/FeedItem2';
 *
 * const itemData = {
 *   title: 'Task Example',
 *   description: 'This is an example task',
 *   status: 'completed',
 *   priority: 'high',
 *   date: '2023-08-20',
 * };
 *
 * export const DefaultFeedItem2 = () => {
 *   return <FeedItem2 data={itemData} />;
 * };
 * ```
 *
 * ---
 *
 * #### Integration with Feed Component
 *
 * The `FeedItem2` component can also be used as the `ItemComponent` in the `Feed` component to render a list of feed items:
 *
 * ```jsx
 * import React from 'react';
 * import Feed from '../../components/search/Feed';
 * import FeedItem2 from '../../components/search/FeedItem2';
 *
 * const sampleItems = [
 *   { title: 'Task 1', description: 'Do this', status: 'completed', priority: 'high', date: '2023-08-20' },
 *   { title: 'Task 2', description: 'Do that', status: 'pending', priority: 'medium', date: '2023-08-22' },
 * ];
 *
 * export const FeedWithFeedItem2 = () => {
 *   return <Feed items={sampleItems} ItemComponent={FeedItem2} />;
 * };
 * ```
 *
 * By providing `FeedItem2` as the `ItemComponent` prop, the `Feed` component will use it to render each feed item.
 */
export const DefaultFeedItem2 = () => <FeedItem2 data={itemData} />;
DefaultFeedItem2.story = {
  name: 'FeedItem2 Default',
 
};
