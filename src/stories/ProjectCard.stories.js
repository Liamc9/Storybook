import React from 'react';
import ProjectCard from '../components/cards/ProjectCard'; // Adjust the path to where your ProjectCard component is located

export default {
  title: 'Atoms/DisplayComponents/Cards/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/300x150',
  name: 'Project Name',
  description: 'This is a description of the project. It highlights key aspects of the project and what it aims to achieve.',
  tier: 'Gold',
  category: 'Technology',
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  image: 'https://via.placeholder.com/300x150',
  name: 'Another Project',
  description:
    'This project focuses on creating a sustainable solution for environmental issues. The team has been working diligently on improving various sectors, including renewable energy, waste management, and eco-friendly products. The initiative is spearheaded by industry leaders in the technology space.',
  tier: 'Silver',
  category: 'Environment',
};

export const NoCategory = Template.bind({});
NoCategory.args = {
  image: 'https://via.placeholder.com/300x150',
  name: 'Project Without Category',
  description: 'A project with no specific category but plenty of ambition.',
  tier: 'Bronze',
  category: '',
};
