// src/stories/PortfolioMainSlider.stories.jsx

import React from 'react';
import { PortfolioMainSlider } from 'liamc9npm';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Projects/Portfolio/Views/PortfolioMainSlider',
  component: PortfolioMainSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // This will make the component take up the entire screen in the preview.
    docs: {
      description: {
        component: `
The \`PortfolioMainSlider\` component is designed to showcase portfolio items or product highlights in an engaging, full-screen slider format. Each slide can display detailed information, including images, titles, subtitles, and additional descriptive content.

### Features
- **Customizable Slides**: Accepts an array of slides, each with unique content, background images, and colors.
- **Full-Screen Layout**: Optimized for a fullscreen experience for better visual impact.
- **Interactive Content**: Each slide supports titles, subtitles, images, and call-to-action links.

### Usage

\`\`\`jsx
import React from 'react';
import PortfolioMainSlider from './components/PortfolioMainSlider';

const sampleSlides = [
  {
    id: 'beach',
    header: 'Closca Bottle',
    title: 'Beach',
    subtitle: '€39.90',
    contentTitle: 'In 20 years, there could be more plastic in our oceans than fish.',
    contentSubtitle: 'Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
    shopNowLink: '#',
    bottleBgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop',
    bottleImage: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',
    backgroundColor: '#e7dfcf',
  },
  // Additional slides...
];

const ExampleComponent = () => (
  <PortfolioMainSlider
    logoSrc="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK.png"
    menuItems={[
      { text: 'Mask', href: '#' },
      { text: 'Helmet', href: '#' },
      { text: 'Bottle', href: '#' },
      { text: 'Accessories', href: '#' },
    ]}
    slides={sampleSlides}
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
};

// Sample data for the component
const sampleSlides = [
  {
    id: 'beach',
    header: 'Closca Bottle',
    title: 'Beach',
    subtitle: '€39.90',
    contentTitle: 'In 20 years, there could be more plastic in our oceans than fish.',
    contentSubtitle: 'Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',
    shopNowLink: '#',
    bottleBgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop',
    bottleImage: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',
    backgroundColor: '#e7dfcf',
  },
  {
    id: 'savanna',
    header: 'Closca Bottle',
    title: 'Savanna',
    subtitle: '€39.90',
    contentTitle: "The Earth's area affected by desertification is approximately 11 times the size of India.",
    contentSubtitle: 'The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.',
    shopNowLink: '#',
    bottleBgImage: 'https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    bottleImage: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',
    backgroundColor: '#e9bf8b',
  },
  {
    id: 'glacier',
    header: 'Closca Bottle',
    title: 'Glacier',
    subtitle: '€39.90',
    contentTitle: 'Glaciers contain 75% of the world’s freshwater.',
    contentSubtitle: 'The effects of melting glaciers are biodiversity loss, the rising of sea levels, and freshwater shortages.',
    shopNowLink: '#',
    bottleBgImage: 'https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg',
    bottleImage: 'https://gomagcdn.ro/domains/alty.ro/files/product/original/sticla-reutilizabila-apa-closca-glacier-copie-848-7049.png',
    backgroundColor: '#b6d6c8',
  },
];

export const Default = (args) => <BrowserRouter><PortfolioMainSlider {...args} /></BrowserRouter>;

Default.args = {
  logoSrc: 'https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK.png',
  menuItems: [
    { text: 'Mask', href: '#' },
    { text: 'Helmet', href: '#' },
    { text: 'Bottle', href: '#' },
    { text: 'Accessories', href: '#' },
  ],
  slides: sampleSlides,
};
