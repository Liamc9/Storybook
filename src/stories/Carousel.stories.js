// src/stories/Carousel.stories.jsx

import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

export default {
  title: 'Atoms/DisplayComponents/Carousel/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
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
