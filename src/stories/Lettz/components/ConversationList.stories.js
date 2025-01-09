// src/components/ConversationList.stories.js

import React from 'react';
import ConversationList from '../../../components/Lettz/components/ConversationList';
import { BrowserRouter } from 'react-router-dom';
export default {
  title: 'Projects/Lettz/Components/ConversationList',
  component: ConversationList,
  tags: ['autodocs'],   
  parameters: {
    docs: {
      description: {
        component: `
# ConversationList Component

The **ConversationList** component is used to display a list of conversations. Each conversation is rendered as a \`ConversationItem\`.

## Props

- **conversations** (Array): A list of conversation objects to render. Each object should have an \`id\` and other relevant properties for \`ConversationItem\`.
- **currentUser** (Object): The user object for the current user, used to personalize the display.

### Example Usage

~~~jsx
import ConversationList from './ConversationList';

const conversations = [
 {id: "12345",
        participants: [
          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
        ],
        lastMessage: {
          text: "Hey! How are you doing?",
          timestamp: new Date(),
        },
    },
    {id: "123456",
        participants: [
          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
        ],
        lastMessage: {
          text: "Hey! How are you doing?",
          timestamp: new Date(),
        },
    },
];

const   currentUser: { uid: 'user1'};

<ConversationList conversations={conversations} currentUser={currentUser} />;
~~~
`
      },
    },
  },
};

const Template = (args) => <BrowserRouter><ConversationList {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  conversations: [
    {id: "12345",
        participants: [
          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
        ],
        lastMessage: {
          text: "Hey! How are you doing?",
          timestamp: new Date(),
        },
    },
    {id: "123456",
        participants: [
          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
        ],
        lastMessage: {
          text: "Hey! How are you doing?",
          timestamp: new Date(),
        },
    },
  ],
  currentUser: { uid: 'user1'},
};


