// src/stories/ConversationItem.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ConversationItem from '../../../components/atoms/menuitem/ConversationItem';

export default {
  title: 'Components/ConversationItem',
  component: ConversationItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <ConversationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentUser: { uid: 'user1' },
  conversation: {
    id: 'conv1',
    participantUIDs: ['user1', 'user2'],
    lastRead: {
      user1: new Date('2023-10-01T12:00:00Z'),
      user2: new Date('2023-10-01T12:00:00Z'),
    },
    lastMessage: {
      text: 'Hello! This is a test conversation item to show how the message looks.',
      localTimestamp: new Date(), // This will display as "Today" if run on the same day
    },
    hasNewMessage: true,
  },
};
