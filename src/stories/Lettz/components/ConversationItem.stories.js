import React from "react";
import ConversationItem from "../../../components/Lettz/components/ConversationItem";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "Lettz/Components/ConversationItem",
  tags: ["autodocs"],
  component: ConversationItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`ConversationItem\` component is a reusable component for displaying a single conversation in a chat application. It includes the avatar, name, last message, and timestamp of the conversation.

### Features
- **Participant Avatar and Name**: Shows the other participant's name and profile picture.
- **Last Message Preview**: Displays the last message with an ellipsis if too long.
- **Timestamp Formatting**: Converts Firestore timestamps to a readable format like "Today" or "3 days ago".

### Usage

\`\`\`jsx
import React from "react";
import ConversationItem from "../components/ConversationItem";

const ExampleComponent = () => {
  const conversation = {
    id: "12345",
    participants: [
      { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
      { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
    ],
    lastMessage: {
      text: "Hey! How are you doing?",
      timestamp: new Date(),
    },
  };

  const currentUser = { uid: "user1" };

  return <ConversationItem conversation={conversation} currentUser={currentUser} />;
};

export default ExampleComponent;
\`\`\`

### Props
- **conversation**: Object containing the conversation data:
  - **id**: Unique ID of the conversation.
  - **participants**: Array of participants in the conversation (each with uid, name, and avatarUrl).
  - **lastMessage**: Object with text (last message content) and timestamp (Date or Firestore Timestamp).
- **currentUser**: The currently authenticated user object to determine which participant to display.
        `,
      },
    },
  },
  argTypes: {
    conversation: { control: "object" },
    currentUser: { control: "object" },
  },
};

const Template = (args) => <Router>
<ConversationItem {...args} />   </Router>;

export const Default = Template.bind({});
Default.args = {
  conversation: {
    id: "12345",
    participants: [
      { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },
      { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },
    ],
    lastMessage: {
      text: "Hey! How are you doing?",
      timestamp: new Date(),
    },
  },
  currentUser: { uid: "user1" },
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  conversation: {
    id: "67890",
    participants: [
      { uid: "user1", name: "Charlie", avatarUrl: "https://via.placeholder.com/50" },
      { uid: "user2", name: "Daisy", avatarUrl: "https://via.placeholder.com/50" },
    ],
    lastMessage: {
      text: "This is a really long message that will get truncated to fit within the component's view.",
      timestamp: new Date(),
    },
  },
  currentUser: { uid: "user1" },
};
  