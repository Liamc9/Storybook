// src/components/PollItem.stories.jsx

import React from 'react';
import { PollItem } from 'liamc9npm';

export default {
  title: 'Projects/DisDat/Components/PollItem',
  component: PollItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**PollItem** is a versatile React component designed to display a question with two selectable options. Upon selection, it showcases the distribution of choices using a smoothly transitioning percentage bar.

### Features
- **Title and Category Badge**: Displays the question as a title with the category as a badge.
- **Option Buttons**: Two buttons for user selection.
- **Percentage Bar**: Replaces buttons upon selection, showing the distribution with smooth transitions.
- **Customization**: Easily configurable via props.

### Props

- \`question\` (string, required): The question text.
- \`category\` (string, required): The category label.
- \`opt1\` (string, required): Text for the first option button.
- \`opt2\` (string, required): Text for the second option button.
- \`percOpt1\` (number, required): Percentage for the first option.
- \`percOpt2\` (number, required): Percentage for the second option.
- \`chosenOpt\` (string, optional): The initially chosen option.

### Usage

\`\`\`jsx
import React from 'react';
import PollItem from './PollItem';

const App = () => (
  <PollItem
    question="What is your favorite programming language?"
    category="Survey"
    opt1="JavaScript"
    opt2="Python"
    percOpt1={60}
    percOpt2={40}
  />
);

export default App;
\`\`\`
        `,
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <PollItem {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  question: 'What is your favorite programming language?',
  category: 'Survey',
  opt1: 'JavaScript',
  opt2: 'Python',
  percOpt1: 60,
  percOpt2: 40,
};

// With Pre-selected Option
export const WithPreSelectedOption = Template.bind({});
WithPreSelectedOption.args = {
  question: 'What is your preferred IDE?',
  category: 'Preference',
  opt1: 'VS Code',
  opt2: 'IntelliJ',
  percOpt1: 70,
  percOpt2: 30,
  chosenOpt: 'VS Code',
};

// Multiple Instances
export const MultipleInstances = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <PollItem
      question="What is your favorite color?"
      category="Preference"
      opt1="Blue"
      opt2="Red"
      percOpt1={70}
      percOpt2={30}
    />
    <PollItem
      question="Which frontend framework do you prefer?"
      category="Survey"
      opt1="React"
      opt2="Vue"
      percOpt1={55}
      percOpt2={45}
    />
    <PollItem
      question="Do you like TypeScript?"
      category="Feedback"
      opt1="Yes"
      opt2="No"
      percOpt1={80}
      percOpt2={20}
    />
  </div>
);

// Edge Case: Percentages do not add up to 100%
export const PercentagesNotAddingUp = Template.bind({});
PercentagesNotAddingUp.args = {
  question: 'Which mobile OS do you prefer?',
  category: 'Survey',
  opt1: 'iOS',
  opt2: 'Android',
  percOpt1: 60,
  percOpt2: 50, // Total is 110%
};

// Long Texts
export const LongTexts = Template.bind({});
LongTexts.args = {
  question: 'Considering all factors such as performance, community support, and ecosystem, which programming language do you prefer for large-scale enterprise applications?',
  category: 'In-depth Survey',
  opt1: 'JavaScript',
  opt2: 'Python',
  percOpt1: 55,
  percOpt2: 45,
};
