// src/stories/Hero.stories.jsx

import React from 'react';
import Hero from '../../../components/molecules/other/Hero';

export default {
  title: 'Molecules/Other/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`Hero\` component is designed to provide a prominent, visually appealing introduction to a page or section. It often features a large background image, a main title, and a subtitle, making it perfect for landing pages or key sections that require strong visual impact.

### Features
- **Customizable Title and Subtitle**: Allows setting the main message and supporting text.
- **Background Image Support**: Can display a background image for visual emphasis.
- **Flexible Layout**: Adaptable to various screen sizes and design requirements.

### Usage

\`\`\`jsx
import React from 'react';
import Hero from './components/Hero';

const ExampleComponent = () => (
  <Hero
    title="Welcome to Our Website"
    subtitle="We are glad to have you here."
    backgroundImage="https://via.placeholder.com/1200x600"
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'The main heading of the Hero component.' },
    subtitle: { control: 'text', description: 'The subtitle or supporting text.' },
    backgroundImage: { control: 'text', description: 'URL for the background image of the Hero section.' },
  },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Website',
  subtitle: 'We are glad to have you here.',
  backgroundImage: 'https://via.placeholder.com/1200x600',
};
