// src/stories/RecipeCard.stories.jsx

import React from 'react';
import RecipeCard from '../../components/CookBook/CookbookCard/CookbookCard'; // Adjust the path to your component
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'CookBook/Atoms/Cards/RecipeCard',
  component: RecipeCard,
  parameters: {
    docs: {
      description: {
        component: `
The \`RecipeCard\` component is designed to showcase recipes in an appealing card format. It includes visual elements such as an image, video link, and chef's profile picture, along with recipe details like the title, cuisine, preparation time, and number of likes.

### Features
- **Visual Representation**: Displays an image and a video link for more interactive content.
- **Chef and Cuisine Details**: Includes the chef's name and cuisine type.
- **Interaction Details**: Shows the number of likes and time required for preparation.
- **Router Compatibility**: Can be used with \`react-router-dom\` for seamless navigation.

### Usage

\`\`\`jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeCard from './components/cards/RecipeCard/RecipeCard';

const ExampleComponent = () => (
  <Router>
    <RecipeCard
      recipe={{
        title: 'Pasta Carbonara',
        imageUrl: 'https://via.placeholder.com/300x200',
        videoUrl: 'https://www.youtube.com/watch?v=sample', // Replace with a valid video URL
        chef: 'Jamie Oliver',
        time: '30 minutes',
        cuisine: 'Italian',
        likes: 120,
        profilePic: 'https://via.placeholder.com/50',
      }}
    />
  </Router>
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    recipe: {
      control: 'object',
      description: 'Object containing all the details about the recipe.',
      defaultValue: {
        title: 'Pasta Carbonara',
        imageUrl: 'https://via.placeholder.com/300x200',
        videoUrl: 'https://www.youtube.com/watch?v=sample', // Replace with a valid video URL
        chef: 'Jamie Oliver',
        time: '30 minutes',
        cuisine: 'Italian',
        likes: 120,
        profilePic: 'https://via.placeholder.com/50',
      },
    },
  },
};

// Template for the RecipeCard component
const Template = (args) => (
  <Router>
    <RecipeCard {...args} />
  </Router>
);

// Default Story
export const Default = Template.bind({});
Default.args = {
  recipe: {
    title: 'Classic Lasagna with Chips and more',
    imageUrl: 'https://www.mygfguide.com/wp-content/uploads/2020/11/lasagne-cover-image-scaled.jpg', // Placeholder image URL
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/cookbook-3f0ee.appspot.com/o/2620043-uhd_3840_2160_25fps.mp4?alt=media&token=c204d2ba-7415-4930-b324-7cc37180527b', // Placeholder video URL
    chef: 'Chef Mario',
    time: '45 min',
    cuisine: 'Italian',
    likes: 120,
    profilePic: 'https://via.placeholder.com/50',
  },
};
