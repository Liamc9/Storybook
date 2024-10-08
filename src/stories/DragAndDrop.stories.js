// DragAndDrop.stories.jsx
import React from 'react';
import DragAndDrop from '../components/DragAndDrop';

// Default export for Storybook autodocs
export default {
  title: 'Atoms/Components/DragAndDrop',
  component: DragAndDrop,
  tags: ['autodocs'],
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
