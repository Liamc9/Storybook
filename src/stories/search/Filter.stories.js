// Filter.stories.jsx
import React from 'react';
import Filter from '../../components/search/Filter';

export default {
  title: 'Search/Filters/Filter',
  component: Filter,
  parameters: {
    docs: {
      description: {
        component: `
### Filter Component

This component demonstrates a customizable filter layout using \`FilterLogic\`. It features:
- A dropdown for selecting a status.
- A range slider for selecting a priority level.

It accepts an \`onChange\` prop to receive updates on filter selections.

### Customizing the Component

To customize the filters:
1. **Modify the filters configuration:**  
   Update the \`filters\` array in \`Filter.jsx\` to add, remove, or alter filter groups. For example:

   \`\`\`jsx
   const filters = [
     {
       category: 'status',
       label: 'Status',
       type: 'dropdown',  // specify type (dropdown or range)
       options: [
         { value: 'completed', label: 'Completed', initial: true },
         { value: 'pending', label: 'Pending' },
         { value: 'inProgress', label: 'In Progress' },
       ],
     },
     // Add new filter groups or modify existing ones here
   ];
   \`\`\`

2. **Adjust display logic:**  
   Depending on the filter type (\`dropdown\` or \`range\`), adjust how the filter is rendered in the \`Filter.jsx\` component. The component uses conditional rendering based on the \`type\` property to decide between a select dropdown and a range slider.

3. **Customize styles:**  
   The component uses styled-components for styling. To change styling, update the styled-components in \`FilterStyles.js\` or create new ones as needed.

By changing the \`filters\` configuration and relevant styled components, you can customize the \`Filter\` component for your needs.
        `,
      },
    },
  },
};

const mockOnChange = (selected) => {
  console.log('Selected filters:', selected);
};

export const Default = () => <Filter onChange={mockOnChange} />;
