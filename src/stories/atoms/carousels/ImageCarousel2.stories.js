import React from "react";
import ImageCarousel2 from "../../../components/atoms/carousels/ImageCarousel2"

export default {
  title: "Atoms/Carousels/ImageCarousel2",
  tags: ["autodocs"],
  component: ImageCarousel2,
  parameters: {
    docs: {
      description: {
        component: `
# ImageCarousel2 Component

The \`ImageCarousel2\` component is a reusable Swiper-based carousel for displaying images. It supports looping and pagination, making it suitable for galleries or card components.

## Usage

To use the \`ImageCarousel2\` component, import it and pass an array of image URLs as the \`images\` prop.

### Example

\`\`\`jsx
import ImageCarousel2 from "./ImageCarousel2";

const imageList = [
  "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3"
];

<ImageCarousel2 images={imageList} />
\`\`\`

## Props

| Prop   | Type     | Required | Description                        |
|--------|----------|----------|------------------------------------|
| images | \`array\` | Yes      | Array of image URLs to display.   |
        `,
      },
    },
  },
};

const Template = (args) => <ImageCarousel2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
    "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
    "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
  ],
};
