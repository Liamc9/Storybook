import React from "react";
import MessagesView from "../../../components/Lettz/views/MessagesView";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Lettz/Views/MessagesView",
  tags: ["autodocs"],
  component: MessagesView,
  parameters: {
    docs: {
      description: {
        component: `

The \`MessagesView\` component is a page that displays a user's conversations. It handles different states:

### Features
- **Loading State**: Shows a loading indicator when conversations are being fetched.
- **Error State**: Displays an error message if fetching fails.
- **No Conversations State**: Informs the user if there are no available conversations.
- **Conversations List**: Renders a list of conversations with avatars, names, last messages, and timestamps.

### Usage

\`\`\`jsx
import React from "react";
import MessagesView from "./MessagesView";

const ExampleComponent = () => {
  const conversations = [
    {
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
  ];

  const currentUser = { uid: "user1" };

  return <MessagesView conversations={conversations} currentUser={currentUser} loading={false} error={null} />;
};

export default ExampleComponent;
\`\`\`

### Props
- **currentUser**: Object containing the current user's details.
- **conversations**: Array of conversation objects.
  - Each conversation includes:
    - **id**: Unique identifier.
    - **participants**: Array of user objects with uid, name, and avatarUrl.
    - **lastMessage**: Object with text (string) and timestamp (Date).
- **loading**: Boolean for loading state.
- **error**: String message for errors.
        `,
      },
    },
  },
  argTypes: {
    currentUser: { control: "object" },
    conversations: { control: "object" },
    loading: { control: "boolean" },
    error: { control: "text" },
  },
};

const Template = (args) => (
  <Router>
    <MessagesView {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  currentUser: { uid: "user1" },
  conversations: [
    {
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
    {
      id: "67890",
      participants: [
        { uid: "user1", name: "Charlie", avatarUrl: "https://via.placeholder.com/50" },
        { uid: "user2", name: "Daisy", avatarUrl: "https://via.placeholder.com/50" },
      ],
      lastMessage: {
        text: "Are we still on for tomorrow?",
        timestamp: new Date(),
      },
    },
  ],
  loading: false,
  error: null,
};

export const Loading = Template.bind({});
Loading.args = {
  currentUser: { uid: "user1" },
  conversations: [],
  loading: true,
  error: null,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  currentUser: { uid: "user1" },
  conversations: [],
  loading: false,
  error: "Failed to load conversations. Please try again later.",
};

export const NoConversations = Template.bind({});
NoConversations.args = {
  currentUser: { uid: "user1" },
  conversations: [],
  loading: false,
  error: null,
};
