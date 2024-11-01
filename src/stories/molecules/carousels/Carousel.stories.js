// src/stories/Carousel.stories.jsx

import React from 'react';
import ImageCarousel from '../../../components/ImageCarousel';

export default {
  title: 'Molecules/Carousels/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`ImageCarousel\` component is used to display a set of images in a carousel format. It allows users to navigate through multiple images with ease and provides a visually appealing way to showcase content such as product images, portfolios, or photo galleries.

### Features
- **Multiple Slides**: Supports an array of images that users can navigate through.
- **Responsive Design**: Adapts to different screen sizes for a consistent user experience.
- **Easy Customization**: Accepts various image sources for flexible use cases.

### Usage

\`\`\`jsx
import React from 'react';
import ImageCarousel from './components/ImageCarousel';

const ExampleComponent = () => (
  <ImageCarousel
    images={[
      'https://via.placeholder.com/800x400?text=Slide+1',
      'https://via.placeholder.com/800x400?text=Slide+2',
      'https://via.placeholder.com/800x400?text=Slide+3',
    ]}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    images: {
      control: 'object',
      description: 'An array of image URLs to display in the carousel.',
    },
  },
};

const Template = (args) => <ImageCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ],
};
