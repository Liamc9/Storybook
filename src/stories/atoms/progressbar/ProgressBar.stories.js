// src/stories/ProgressBar.stories.js

import React from 'react';
import ProgressBar from '../../../components/atoms/other/ProgressBar';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: `
The \`ProgressBar\` component visually represents the progress of a task or process. It is useful for showing users how much of a process is completed and how much is remaining, providing better user experience and guidance.

### Features
- **Dynamic Progress**: Adjusts based on the current and total number of pages or steps.
- **Customizable**: Can be used in various contexts such as wizards, forms, or any multi-step processes.
- **Responsive**: Designed to fit seamlessly into different parts of an application.

### Usage

\`\`\`jsx
import React from 'react';
import ProgressBar from './components/ProgressBar';

const ExampleComponent = () => (
  <ProgressBar currentPage={3} totalPages={6} />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    currentPage: { control: { type: 'number', min: 0 }, description: 'The current step or page number in the progress.' },
    totalPages: { control: { type: 'number', min: 1 }, description: 'The total number of steps or pages.' },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

export const Halfway = Template.bind({});
Halfway.args = {
  currentPage: 3,
  totalPages: 6,
};

export const Complete = Template.bind({});
Complete.args = {
  currentPage: 5,
  totalPages: 5,
};
