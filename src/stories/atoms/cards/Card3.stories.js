// src/stories/Card3.stories.jsx

import React from 'react';
import Card3 from '../../../components/cards/Card3';

export default {
  title: 'Atoms/Cards/Card3',
  component: Card3,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

The \`Card3\` component is a card element designed to display a brief description and a link, making it ideal for showcasing product features, call-to-action elements, or informational content.

### Features
- **Description**: Customizable text to describe content or provide information.
- **Link Text**: A button or link with customizable text for user interaction.
- **Reusable**: Adaptable for use in various contexts where quick details and actionable links are needed.

### Usage

\`\`\`jsx
import React from 'react';
import Card3 from './components/cards/Card3';

const ExampleComponent = () => (
  <Card3
    description="Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style."
    linkText="Explore Documentation"
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    description: { control: 'text', description: 'Text to display as the main content of the card.' },
    linkText: { control: 'text', description: 'Text for the action link or button in the card.' },
  },
};

const Template = (args) => <Card3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  description:
    'Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.',
  linkText: 'Explore Documentation',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  description:
    'Discover advanced features and seamless performance in our latest release.',
  linkText: 'Learn More',
};

export const ShortText = Template.bind({});
ShortText.args = {
  description: 'Experience innovation.',
  linkText: 'Get Started',
};
