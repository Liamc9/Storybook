// src/stories/CardSocial.stories.jsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardSocial from '../../../components/atoms/cards/CardSocial';

export default {
  title: 'Atoms/Cards/CardSocial',
  component: CardSocial,
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
The \`CardSocial\` component is used to display social profile information in a card format. It supports displaying user avatars, cover photos, and user details, making it ideal for social media or community-driven applications.

### Features
- **Profile Display**: Includes cover photo, profile picture, and username.
- **Customizable Links**: Navigates to user profiles or external pages.
- **Category Tags and Status**: Provides additional context about the user or profile.

### Usage

\`\`\`jsx
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CardSocial from './components/cards/CardSocial';

const ExampleComponent = () => (
  <MemoryRouter>
    <CardSocial
      id="789"
      coverPhoto="https://via.placeholder.com/600x200"
      profilePic="https://via.placeholder.com/100"
      username="Jane Smith"
      categories="Lifestyle, Travel"
      link="/user/janesmith"
      status="Active"
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
    id: { control: 'text', description: 'Unique identifier for the social card.' },
    coverPhoto: { control: 'text', description: 'URL for the cover photo.' },
    profilePic: { control: 'text', description: 'URL for the profile picture.' },
    username: { control: 'text', description: 'Username to display on the card.' },
    categories: { control: 'text', description: 'Categories associated with the user.' },
    link: { control: 'text', description: 'Link to the user profile or an external page.' },
    status: { control: 'text', description: 'Status of the user or card (e.g., "Active").' },
  },
};

const Template = (args) => <CardSocial {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '789',
  coverPhoto: 'https://via.placeholder.com/600x200',
  profilePic: 'https://via.placeholder.com/100',
  username: 'Jane Smith',
  categories: 'Lifestyle, Travel',
  link: '/user/janesmith',
  status: 'Active',
};
