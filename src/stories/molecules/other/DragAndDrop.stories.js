// src/stories/DragAndDrop.stories.jsx

import React from 'react';
import DragAndDrop from '../../../components/molecules/other/DragAndDrop';

// Default export for Storybook autodocs
export default {
  title: 'Molecules/Other/DragAndDrop',
  component: DragAndDrop,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`DragAndDrop\` component is a functional interface element that allows users to manage tasks across different columns using drag-and-drop functionality. It is designed for organizing items into categories such as "To Do", "Doing", "Done", and "Trash".

### Features
- **Drag-and-Drop Functionality**: Users can move tasks between columns with intuitive drag-and-drop interaction.
- **Customizable Task Lists**: Accepts initial tasks as input to set up the component with predefined data.
- **Input Control**: Options for customizing the maximum length of task input.

### Usage

\`\`\`jsx
import React from 'react';
import DragAndDrop from './components/DragAndDrop';

const ExampleComponent = () => (
  <DragAndDrop
    initialTasks={{
      toDo: ['Task 1', 'Task 2'],
      doing: ['Task 3'],
      done: ['Task 4'],
      trash: [],
    }}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Default view with initial task lists
export const Default = () => <DragAndDrop />;
Default.storyName = 'Default Setup';
Default.parameters = {
  docs: {
    storyDescription: 'Displays the default task lists for To Do, Doing, Done, and Trash.',
  },
};

// Empty task columns
export const EmptyColumns = () => {
  const emptyTasks = {
    toDo: [],
    doing: [],
    done: [],
    trash: [],
  };

  return <DragAndDrop initialTasks={emptyTasks} />;
};
EmptyColumns.storyName = 'Empty Task Lists';
EmptyColumns.parameters = {
  docs: {
    storyDescription: 'All columns (To Do, Doing, Done, and Trash) start empty.',
  },
};

// Pre-filled tasks with more complex data
export const PreFilledColumns = () => {
  const preFilledTasks = {
    toDo: ['Research', 'Planning'],
    doing: ['Development', 'Testing'],
    done: ['Deployment'],
    trash: ['Old Ideas'],
  };

  return <DragAndDrop initialTasks={preFilledTasks} />;
};
PreFilledColumns.storyName = 'Pre-filled Task Lists';
PreFilledColumns.parameters = {
  docs: {
    storyDescription: 'Showcases task columns that start with predefined tasks.',
  },
};

// Custom max length of task input (shorter than default)
export const CustomMaxLength = () => (
  <DragAndDrop maxTaskLength={6} />
);
CustomMaxLength.storyName = 'Custom Max Task Length';
CustomMaxLength.parameters = {
  docs: {
    storyDescription: 'Sets a custom max length of 6 characters for new tasks.',
  },
};
