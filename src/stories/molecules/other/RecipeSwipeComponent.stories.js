// src/stories/RecipeSwipeComponent.stories.jsx

import React from 'react';
import RecipeSwipeComponent from '../../../components/RecipeSwipeComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import 'swiper/css';

export default {
  title: 'Molecules/Other/RecipeSwipeComponent',
  component: RecipeSwipeComponent,
  parameters: {
    docs: {
      description: {
        component: `
The \`RecipeSwipeComponent\` is designed to display recipes in an interactive and visually engaging format. Users can swipe through different steps of a recipe, view an overview video, and read detailed descriptions of the cooking process. This component is perfect for cooking or food-related apps that need a user-friendly way to guide users through a recipe.

### Features
- **Interactive Step Navigation**: Allows users to swipe through recipe steps with associated video content.
- **Overview Video and Description**: Provides a general introduction to the recipe.
- **Detailed Recipe Steps**: Each step includes a description and an optional video for guidance.

### Usage

\`\`\`jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecipeSwipeComponent from './components/RecipeSwipeComponent';
import 'swiper/css';

const ExampleComponent = () => (
  <Router>
    <RecipeSwipeComponent
      recipe={{
        name: 'Spaghetti Carbonara',
        cuisine: 'Italian',
        time: '30 mins',
        servings: 4,
        calories: 500,
        overviewVideoUrl: 'https://example.com/overview.mp4',
        overviewDescription: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        steps: [
          {
            description: 'Boil the pasta in salted water according to package instructions.',
            videoUrl: 'https://example.com/step1.mp4',
          },
          {
            description: 'Cook pancetta in a skillet until crispy.',
            videoUrl: 'https://example.com/step2.mp4',
          },
          {
            description: 'Whisk together eggs and cheese in a bowl.',
            videoUrl: 'https://example.com/step3.mp4',
          },
          {
            description: 'Combine pasta, pancetta, and egg mixture over low heat.',
            videoUrl: 'https://example.com/step4.mp4',
          },
        ],
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
      description: 'Object containing details about the recipe, including steps, overview, and metadata.',
    },
  },
};

const Template = (args) => (
  <Router>
    <RecipeSwipeComponent {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  recipe: {
    name: 'Classic Lasagna',
    cuisine: 'Italian',
    time: '45 min',
    servings: 6,
    calories: 600,
    overviewVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/cookbook-3f0ee.appspot.com/o/2620043-uhd_3840_2160_25fps.mp4?alt=media&token=c204d2ba-7415-4930-b324-7cc37180527b',
    overviewDescription: 'A classic Italian dish with layers of pasta, meat, and cheese.',
    steps: [
      {
        description: 'Prepare the meat sauce by cooking ground beef with onions and garlic.',
        videoUrl: 'https://example.com/step1.mp4',
      },
      {
        description: 'Layer lasagna noodles with meat sauce, ricotta, and mozzarella cheese.',
        videoUrl: 'https://example.com/step2.mp4',
      },
      {
        description: 'Bake the lasagna in the oven at 375°F for 45 minutes.',
        videoUrl: 'https://example.com/step3.mp4',
      },
    ],
  },
};
