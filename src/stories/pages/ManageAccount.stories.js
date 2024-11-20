import React from 'react';
import ManageAccount from '../../components/pages/ManageAccount';

export default {
  title: 'Pages/ManageAccount',
  component: ManageAccount,
  tags: ['pages', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### ManageAccount Component

The \`ManageAccount\` component provides a complete account management page with dynamically rendered editable fields.

#### Features:
1. **Editable Account Details:**
   - Uses the \`EditStackedList\` component to render dynamic fields like:
     - Editable text for email.
     - Dropdown for language preference.
     - Toggle for enabling/disabling notifications.

2. **Delete Account Button:**
   - A prominently styled "Delete Account" button is included (currently disabled).

3. **Header with Back Button:**
   - Includes a back button for navigation (placeholder logic for demonstration).

#### Usage:
\`\`\`jsx
<ManageAccount />
\`\`\`

#### Example Components in the List:
- **Email Address:** Editable text field.
- **Language:** Select dropdown.
- **Enable Notifications:** Toggle button.

This component is ideal for account settings pages, combining a clean layout with dynamic, reusable components.
        `,
      },
    },
  },
};

export const Default = () => <ManageAccount />;
