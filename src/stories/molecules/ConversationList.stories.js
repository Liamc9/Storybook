// src/stories/ConversationList.stories.jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ConversationList from '../../components/molecules/ConversationList';

export default {
  title: 'Molecules/ConversationList',
  component: ConversationList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <ConversationList {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentUser: { uid: 'user1' },
  participantsData: {
    user1: {
      displayName: 'You',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
    user2: {
      displayName: 'Alice',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
    user3: {
      displayName: 'Bob',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
    user4: {
      displayName: 'Charlie',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
  },
  conversations: [
    {
      id: 'conv1',
      participantUIDs: ['user1', 'user2'],
      lastMessage: {
        text: "Hey, are you free tomorrow?",
        localTimestamp: new Date("2024-10-25T08:00:00"),
      },
      hasNewMessage: true,
    },
    {
      id: 'conv2',
      participantUIDs: ['user1', 'user3'],
      lastMessage: {
        text: "Let's catch up soon!",
        localTimestamp: new Date("2025-03-25T08:00:00"),
      },
      hasNewMessage: false,
    },
    {
      id: 'conv3',
      participantUIDs: ['user1', 'user4'],
      lastMessage: {
        text: "Are we still on for the meeting next week?",
        localTimestamp: new Date("2023-10-25T08:00:00"),
      },
      hasNewMessage: true,
    },
  ],
};
