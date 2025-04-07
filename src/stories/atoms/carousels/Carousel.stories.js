// src/stories/Carousel.stories.jsx

import React from 'react';
import ImageCarousel from '../../../components/atoms/carousels/ImageCarousel';
import ImageCarousel2 from '../../../components/atoms/carousels/ImageCarousel2';

export default {
  title: 'Atoms/Carousels',
  component: ImageCarousel,
  tags: ['autodocs'],
};

const imageList = [
  "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3"
];

export const XImageCarousel = () => <ImageCarousel images={imageList} />;
export const XImageCarousel2 = () => <ImageCarousel2 images={imageList} />;
