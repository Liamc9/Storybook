// FilterDrawer.stories.jsx
import React from 'react';
import FilterDrawer from '../../components/search/FilterDrawer'; // Adjust the import path as necessary

export default {
  title: 'Search/Filters/FilterDrawer',
  component: FilterDrawer,
  parameters: {
    docs: {
      description: {
        component: `
### FilterDrawer Component

This component renders a button that opens a bottom drawer containing filter options when clicked.

#### Features
- **Trigger Button:** A button labeled "Open Filters" that opens a bottom drawer.
- **Bottom Drawer:** The drawer slides up from the bottom of the screen and displays filter options.
- **Filter Interface:** Includes a status dropdown and a priority range slider for selecting filter values.
- **Filter Handling:** Invokes the provided \`onChange\` callback whenever filter selections change.

#### How to Use

To integrate the \`FilterDrawer\` component:

1. **Import the Component:**
   \`\`\`jsx
   import FilterDrawer from './path/to/FilterDrawer';
   \`\`\`

2. **Use the Component in Your JSX:**
   \`\`\`jsx
   <FilterDrawer onChange={(selectedFilters) => {
     console.log('Selected Filters:', selectedFilters);
     // Handle filter changes accordingly
   }} />
   \`\`\`

3. **Customize If Needed:**
   - Modify the filter configuration inside \`FilterDrawer.jsx\` to change available filters.
   - Adjust styling by editing the styled-components within the file.

The component is self-contained, handling both the display of the filter UI in a bottom drawer and the button that opens it.
        `,
      },
    },
  },
};

export const Default = () => (
  <FilterDrawer onChange={(filters) => console.log('Selected Filters:', filters)} />
);
