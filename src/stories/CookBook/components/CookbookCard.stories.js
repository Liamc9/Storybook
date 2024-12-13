// src/stories/CookbookCard.stories.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CookbookCard from '../../../components/CookBook/components/CookbookCard'; // Adjust the path to the actual location of your component

export default {
  title: 'CookBook/Components/CookbookCard',
  component: CookbookCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`CookbookCard\` component is designed to display information about a cookbook, including the chef's name, cuisine type, title, image, and the number of recipes. This component is ideal for applications related to recipes, cooking, or culinary showcases.

### Features
- **Chef and Cuisine Information**: Displays details about the chef and type of cuisine.
- **Cookbook Title**: Prominently shows the name of the cookbook.
- **Image Display**: Includes an image representing the cookbook.
- **Recipe Count**: Shows the number of recipes included in the cookbook.

### Usage

\`\`\`jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CookbookCard from './components/cards/CookbookCard/CookbookCard';

const ExampleComponent = () => (
  <Router>
    <CookbookCard
      cookbook={{
        chef: 'Gordon Ramsay',
        cuisine: 'Italian',
        title: 'Delicious Pasta Dishes',
        imageUrl: 'https://www.indothainews.com/wp-content/uploads/2023/09/yrtyr_1024x1024.jpg',
        numberOfRecipes: 10,
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
};

// Default Story
const Template = (args) => (
  <Router>
    <CookbookCard {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  cookbook: {
    chef: 'Gordon Ramsay',
    cuisine: 'Italian',
    title: 'Delicious Pasta Dishes',
    imageUrl: 'https://www.indothainews.com/wp-content/uploads/2023/09/yrtyr_1024x1024.jpg',
    numberOfRecipes: 10,
  },
};

export const Other = Template.bind({});
Other.args = {
  cookbook: {
    chef: 'Jamie Oliver',
    cuisine: 'Mexican',
    title: 'Taco Fiesta',
    imageUrl: 'https://img.jamieoliver.com/home/wp-content/uploads/2020/08/jamieskeepcookingfamilyfavourites.jpg?tr=w-665',
    numberOfRecipes: 25,
  },
};

export const Other2 = Template.bind({});
Other2.args = {
  cookbook: {
    chef: 'Nigella Lawson',
    cuisine: 'French',
    title: 'Elegant Desserts',
    imageUrl: 'https://pagesix.com/wp-content/uploads/sites/3/2013/09/lawson.jpg?quality=75&strip=all&w=744',
    numberOfRecipes: 3,
  },
};
