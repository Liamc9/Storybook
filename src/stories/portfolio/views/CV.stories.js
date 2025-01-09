// src/stories/AccordionCard.stories.jsx

import React from 'react';
import CV from '../../../components/portfolio/views/CV';

export default {
  title: 'Projects/Portfolio/Views/CV',
  component: CV,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The \`CV\` component is designed to display detailed information about an individual's academic or professional background. It includes sections for the title, subtitle, institution, GPA, grade, and a detailed description. The component can also accept custom icons for a more personalized look.

### Features
- **Comprehensive Information Display**: Presents information about educational or professional achievements in an organized way.
- **Custom Icons**: Supports custom icons for specific sections or items.
- **Flexible Content**: Allows a variety of information, including titles, descriptions, and institution details.

### Usage

\`\`\`jsx
import React from 'react';
import CV from './components/pages/CV';

const ExampleComponent = () => (
  <CV
    title="Computer Science"
    subtitle="Specialization in Artificial Intelligence"
    description="Focused on AI development, covering machine learning, neural networks, and advanced algorithms."
    institution="Massachusetts Institute of Technology"
    gpa="4.0"
    grade="Summa Cum Laude"
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'The main title for the CV section.' },
    subtitle: { control: 'text', description: 'The subtitle providing more context or detail.' },
    description: { control: 'text', description: 'Detailed description of the program or position.' },
    institution: { control: 'text', description: 'Name of the institution or organization.' },
    gpa: { control: 'text', description: 'GPA or performance metric.' },
    grade: { control: 'text', description: 'Grade or academic distinction received.' },
    icon: { control: 'function', description: 'Custom icon for the CV section.' },
  },
};

// Default Example
export const Default = {
  args: {
    title: 'Mechanical Engineering',
    subtitle: 'Mechanical Engineering With Business',
    description: 'This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.',
    institution: 'University College Dublin',
    gpa: '3.72',
    grade: '1:1',
  },
};

// AI Specialization Example
export const AISpecialization = {
  args: {
    title: 'Computer Science',
    subtitle: 'Specialization in Artificial Intelligence',
    description: 'Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.',
    institution: 'Massachusetts Institute of Technology',
    gpa: '4.0',
    grade: 'Summa Cum Laude',
  },
};

// MBA Example
export const MBA = {
  args: {
    title: 'Business Administration',
    subtitle: 'MBA',
    description: 'A two-year program focused on leadership, strategy, and innovation in the business world.',
    institution: 'Harvard Business School',
    gpa: '3.9',
    grade: 'Distinction',
  },
};

// Custom Icon Example
export const CustomIcon = {
  args: {
    title: 'Computer Science',
    subtitle: 'Specialization in Artificial Intelligence',
    description: 'Focused on AI development, covering machine learning, neural networks, and advanced algorithms.',
    institution: 'Massachusetts Institute of Technology',
    gpa: '4.0',
    grade: 'Summa Cum Laude',
    icon: () => <span role="img" aria-label="robot">🤖</span>, // Example custom icon
  },
};
