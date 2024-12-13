import React from 'react';
import ColorPalette from '../../components/Branding/ColorPalette';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.palette.neutrals.white};
`;

export default {
  title: 'Branding/Color Palette',
  component: ColorPalette,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Color Palette

**ColorPalette** component displays the primary color and its shades, along with neutral colors used in our brand.

## Usage

Use this component to ensure consistency in your application's color scheme.

### Example

\`\`\`jsx
<ColorPalette palette={palette} />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    palette: {
      control: 'object',
      description:
        'Defines the color palette including primary color, its shades, and neutral colors.',
    },
  },
};

const Template = (args) => (
  <Container palette={args.palette}>
    <ColorPalette palette={args.palette} />
  </Container>
);

export const DefaultPalette = Template.bind({});
DefaultPalette.args = {
  palette: {
    primary: '#B08B5B', // Warm Taupe
    lightPrimary: '#C19B6D', // Light Warm Taupe
    veryLightPrimary: '#D2AD80', // Very Light Warm Taupe
    darkPrimary: '#9A7D4E', // Dark Warm Taupe
    veryDarkPrimary: '#846E41', // Very Dark Warm Taupe
    neutrals: {
      white: '#FFFFFF', // White
      lightGray: '#F0F0F0', // Light Gray
      mediumGray: '#C0C0C0', // Medium Gray
      darkGray: '#4F4F4F', // Dark Gray
      black: '#000000', // Black
    },
  },
};
