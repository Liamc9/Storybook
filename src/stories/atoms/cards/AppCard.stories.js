// src/stories/AppCard.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppCard from '../../../components/atoms/cards/AppCard';

export default {
  title: 'Atoms/Cards/AppCard',
  component: AppCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
# AppCard Component

The \`AppCard\` component is used to display information about an app or project in a card format. It is well-suited for showcasing apps with a name, image, and links to more information, such as a GitHub repository or a live demo.

### Features
- **Image Display**: Showcases an app preview image.
- **Link Support**: Provides external links to a GitHub repository and live app demo.
- **Router Integration**: Uses \`react-router-dom\` for navigation compatibility.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppCard from './components/cards/AppCard';

const ExampleComponent = () => (
  <MemoryRouter>
    <AppCard
      image="https://via.placeholder.com/300"
      name="Sample App"
      id="1"
      githubUrl="https://github.com/username/repo"
      url="https://example.com"
    />
  </MemoryRouter>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    image: { control: 'text', description: 'URL for the app image.' },
    name: { control: 'text', description: 'Name of the app.' },
    id: { control: 'text', description: 'Unique identifier for the app.' },
    githubUrl: { control: 'text', description: 'URL of the GitHub repository.' },
    url: { control: 'text', description: 'URL of the live app demo.' },
  },
};

const Template = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/300',
  name: 'Sample App',
  id: '1',
  githubUrl: 'https://github.com/username/repo',
  url: 'https://example.com',
};
