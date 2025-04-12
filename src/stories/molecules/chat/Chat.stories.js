// src/stories/Chat.stories.jsx
import React from 'react';
import Chat from '../../../components/molecules/chat/Chat';

export default {
  title: 'Molecules/Chat',
  component: Chat,
};

const Template = (args) => {
  // Create a local state for conversation data using the initialConversation prop.
  const [conversation, setConversation] = React.useState(args.initialConversation);
  // Also manage the new message text state.
  const [newMessage, setNewMessage] = React.useState('');
  // Create a ref to scroll to the bottom of the messages.
  const messagesEndRef = React.useRef(null);

  // onSendMessage callback: adds a new message to the conversation state.
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const message = {
      localTimestamp: Date.now().toString(),
      sender: args.currentUser.uid,
      text: newMessage,
    };
    setConversation((prevConversation) => ({
      ...prevConversation,
      messages: [...(prevConversation.messages || []), message],
    }));
    setNewMessage('');
  };

  return (
    <Chat
      {...args}
      initialConversation={conversation}
      onSendMessage={handleSendMessage}
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      messagesEndRef={messagesEndRef}
    />
  );
};

export const DefaultChat = Template.bind({});
DefaultChat.args = {
  currentUser: { uid: 'user1' },
  // Use participantsData exclusively for user details.
  participantsData: {
    user1: {
      uid: 'user1',
      displayName: 'You',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
    user2: {
      uid: 'user2',
      displayName: 'Alice',
      photoURL: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
  },
  // The initialConversation can still provide a participants array if needed,
  // but message rendering now relies solely on participantsData.
  initialConversation: {
    participants: ['user1', 'user2'],
    messages: [
      {
        id: 1,
        sender: 'user2',
        text: 'Hello, how are you doing today?',
        localTimestamp: new Date('2023-10-20T10:00:00').toISOString(),
      },
      {
        id: 2,
        sender: 'user1',
        text: 'I am doing great, thank you! How about you?',
        localTimestamp: new Date('2023-10-20T10:01:00').toISOString(),
      },
      {
        id: 3,
        sender: 'user2',
        text: 'I am well. Just working on some really interesting projects. This is a longer message to test the wrapping behavior of the message bubble. It should not break the layout or distort the avatar.',
        localTimestamp: new Date('2023-10-20T10:02:00').toISOString(),
      },
    ],
  },
};
