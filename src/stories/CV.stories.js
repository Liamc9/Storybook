// AccordionCard.stories.jsx
import React from 'react';
import CV from '../components/pages/CV';

export default {
  title: 'Pages/CV',
  component: CV,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    institution: { control: 'text' },
    gpa: { control: 'text' },
    grade: { control: 'text' },
    icon: { control: 'function' },
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
