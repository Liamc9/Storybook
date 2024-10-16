import React from 'react';
import RecipeCard from '../components/cards/RecipeCard/RecipeCard'; // Adjust the path to your component
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Atoms/DisplayComponents/Cards/RecipeCard',
  component: RecipeCard,
  argTypes: {
    recipe: {
      control: 'object',
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
    title: 'Classic Lasagna',
    imageUrl: 'https://www.mygfguide.com/wp-content/uploads/2020/11/lasagne-cover-image-scaled.jpg', // Placeholder image URL
   // videoUrl: 'https://youtu.be/8pOXD0qf7Uk', // Placeholder video URL
    chef: 'Chef Mario',
    time: '45 min',
    cuisine: 'Italian',
    likes: 120,
    profilePic: 'https://via.placeholder.com/50',
  },
};
