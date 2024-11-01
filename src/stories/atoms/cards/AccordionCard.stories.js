// IMPORTS
import React from 'react';
import AccordionCard from '../../../components/cards/AccordionCard';
import { CollegeIcon, ChevronDownIcon, ChevronUpIcon } from '../../../assets/Icons';

// DEFAULT EXPORT FOR STORYBOOK
export default {
  title: 'Atoms/Cards/AccordionCard',
  component: AccordionCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# AccordionCard Component

The \`AccordionCard\` component is used to display educational or experience information in an expandable card format. It supports toggling between open and closed states to show or hide additional details. This component is perfect for showcasing resumes, academic qualifications, or project experiences.

### Features
- **Customizable Icons**: Choose from predefined icons to customize the card header.
- **Detailed Information**: Display titles, subtitles, institution names, and grades.
- **Expandable Content**: Users can click to expand or collapse the detailed description.

### Usage

\`\`\`jsx
import React from 'react';
import AccordionCard from './components/cards/AccordionCard';
import { CollegeIcon, ChevronDownIcon } from './assets/Icons';

const ExampleComponent = () => (
  <AccordionCard
    icon={CollegeIcon}
    title="Computer Science"
    subtitle="Specialization in Machine Learning"
    institution="Stanford University"
    grade="Summa Cum Laude"
    gpa="4.0"
    description="An in-depth study into machine learning, including neural networks and data analysis techniques."
  />
);

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: [CollegeIcon, ChevronDownIcon, ChevronUpIcon],
      description: 'Icon to display in the accordion card header.',
    },
    title: { control: 'text', description: 'Main title of the accordion card.' },
    subtitle: { control: 'text', description: 'Subtitle of the accordion card.' },
    institution: { control: 'text', description: 'Institution or organization related to the card.' },
    grade: { control: 'text', description: 'Grade information to display.' },
    gpa: { control: 'text', description: 'GPA information to display.' },
    description: { control: 'text', description: 'Detailed description shown when the accordion is expanded.' },
  },
};

// TEMPLATE FOR STORYBOOK VARIATIONS
const Template = (args) => <AccordionCard {...args} />;

// VARIATION: DEFAULT ACCORDION CARD
export const Default = Template.bind({});
Default.args = {
  title: 'Mechanical Engineering',
  subtitle: 'Mechanical Engineering With Business',
  institution: 'University College Dublin',
  grade: '1:1',
  gpa: '3.72',
  description:
    'This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.',
};

// VARIATION: DIFFERENT ICON AND TITLE
export const CustomIconAndTitle = Template.bind({});
CustomIconAndTitle.args = {
  icon: ChevronDownIcon,
  title: 'Computer Science',
  subtitle: 'Specialization in Artificial Intelligence',
  institution: 'Massachusetts Institute of Technology',
  grade: 'Summa Cum Laude',
  gpa: '4.0',
  description:
    'Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.',
};

// VARIATION: SHORT DESCRIPTION AND DIFFERENT INSTITUTION
export const ShortDescription = Template.bind({});
ShortDescription.args = {
  title: 'Business Administration',
  subtitle: 'MBA',
  institution: 'Harvard Business School',
  grade: 'Distinction',
  gpa: '3.9',
  description: 'A two-year program focused on leadership, strategy, and innovation in the business world.',
};

// VARIATION: NO GRADE OR GPA
export const NoGradeOrGPA = Template.bind({});
NoGradeOrGPA.args = {
  title: 'Fine Arts',
  subtitle: 'Painting and Sculpture',
  institution: 'Royal Academy of Arts',
  description:
    'An in-depth study into classical and modern techniques of painting and sculpture. Led multiple exhibitions and received notable recognition for artwork.',
  grade: '',
  gpa: '',
};

// VARIATION: CUSTOM STYLING
export const CustomStyling = Template.bind({});
CustomStyling.args = {
  title: 'Data Science',
  subtitle: 'MSc in Data Analytics',
  institution: 'Stanford University',
  grade: 'High Honors',
  gpa: '3.85',
  description:
    'Explored various data science methodologies including predictive modeling, statistical analysis, and data visualization. Key project involved building a recommendation system.',
};
CustomStyling.decorators = [
  (Story) => (
    <div style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #4CAF50', padding: '20px' }}>
      <Story />
    </div>
  ),
];
