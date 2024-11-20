import React from "react";
import ManageNotifications from "../../components/pages/ManageNotifications";

/**
 * Storybook entry for the ManageNotifications component
 */
export default {
  title: "Pages/ManageNotifications",
  component: ManageNotifications,
  tags: ["autodocs", "pages"],
  parameters: {
    docs: {
      description: {
        component: `
# ManageNotifications

The **ManageNotifications** component is a parent component that handles a form-like UI with editable fields and a toggle. 

### Features
- **Editable Fields**: Text input and toggle components for editing data.
- **State Management**: Centralized state updating function (\`updateState\`) shared with child components.
- **Firestore Integration**: Saves changes to Firestore using the \`saveChanges\` function.
- **Dynamic Fields**: Utilizes the \`EditStackedList\` component to dynamically render fields.

### Usage
\`\`\`jsx
<ManageNotifications />
\`\`\`

The component is ideal for managing user settings or preferences with a save functionality.
        `,
      },
    },
  },
};

export const Default = () => <ManageNotifications />;
Default.storyName = "Default Usage";
