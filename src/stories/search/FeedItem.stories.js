import React from 'react';
import FeedItem from '../../components/search/feedItem/FeedItem';

export default {
  title: 'Search/FeedItem/FeedItem',
  tags: ['autodocs'],
 
};

const itemData = {
  title: 'Task Example',
  description: 'This is an example task',
  status: 'completed',
  priority: 'high',
  date: '2023-08-20',
};

export const DefaultFeedItem = () => <FeedItem data={itemData} />;
DefaultFeedItem.story = {
  name: 'FeedItem Default',
 
};
