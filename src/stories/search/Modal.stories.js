// FilterModal.stories.jsx
import React from 'react';
import FilterModal from '../../components/search/FilterModal'; // Adjust the import path as necessary

export default {
  title: 'Search/Filters/FilterModal',
  component: FilterModal,
  parameters: {
    docs: {
      description: {
        component: `
### FilterModal Component

This component renders a button that opens a bottom drawer containing filter options when clicked.

#### Features
- **Trigger Button:** A button labeled "Open Filters" that opens a bottom drawer.
- **Bottom Drawer:** The drawer slides up from the bottom of the screen and displays filter options.
- **Filter Interface:** Includes a status dropdown and a priority range slider for selecting filter values.
- **Filter Handling:** Invokes the provided \`onChange\` callback whenever filter selections change.

#### How to Use

To integrate the \`FilterModal\` component:

1. **Import the Component:**
   \`\`\`jsx
   import FilterModal from './path/to/FilterModal';
   \`\`\`

2. **Use the Component in Your JSX:**
   \`\`\`jsx
   <FilterModal onChange={(selectedFilters) => {
     console.log('Selected Filters:', selectedFilters);
     // Handle filter changes accordingly
   }} />
   \`\`\`

3. **Customize If Needed:**
   - Modify the filter configuration inside \`FilterModal.jsx\` to change available filters.
   - Adjust styling by editing the styled-components within the file.

The component is self-contained, handling both the display of the filter UI in a bottom drawer and the button that opens it.
        `,
      },
    },
  },
};

export const Default = () => (
  <FilterModal onChange={(filters) => console.log('Selected Filters:', filters)} />
);
