import React from 'react';
import CookbookCard from '../components/cards/CookbookCard';

// Default export for the Storybook
export default {
  title: 'Atoms/DisplayComponents/Cards/CookbookCard',  // The title for Storybook's sidebar
  component: CookbookCard,
  tags: ['autodocs'],
};

// Template for rendering the component with props
const Template = (args) => <CookbookCard {...args} />;

// Default example story
export const Default = Template.bind({});
Default.args = {
  title: 'Classic Lasagna',
  imageUrl: 'https://www.mygfguide.com/wp-content/uploads/2020/11/lasagne-cover-image-scaled.jpg', // Placeholder image URL
  videoUrl: 'https://youtu.be/8pOXD0qf7Uk', // Placeholder video URL
  chef: 'Chef Mario',
  time: '45 min',
  cuisine: 'Italian',
  likes: 120,
};

// Additional example story (you can create more like this)
export const VeganRecipe = Template.bind({});
VeganRecipe.args = {
  title: 'Vegan Tacos',
  imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  videoUrl: 'https://example.com/video', // Placeholder video URL
  chef: 'Chef Lisa',
  time: '30 min',
  cuisine: 'Mexican',
  likes: 200,
};
