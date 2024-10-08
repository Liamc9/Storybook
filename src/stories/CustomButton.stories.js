import React from 'react';
import CustomButton from '../components/CustomButton';

// Default export to define the story's metadata
export default {
  title: 'Atoms/DisplayComponents/Button/CustomButton',  // Storybook will categorize this as 'Components' -> 'Button'
  component: CustomButton,           // The component to render
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'], // The options for the variant prop
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // The options for the size prop
    },
    onClick: { action: 'clicked' }, // Action to capture onClick events
  },
};

// Template function to render the component
const Template = (args) => <CustomButton {...args} />;

// Default story (Primary Button)
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

// Secondary variant
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};

// Success variant
export const Success = Template.bind({});
Success.args = {
  children: 'Success Button',
  variant: 'success',
  size: 'md',
};

// Danger variant
export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
  size: 'md',
};

// Large Button
export const Large = Template.bind({});
Large.args = {
  children: 'Large Button',
  variant: 'primary',
  size: 'lg',
};

// Small Button
export const Small = Template.bind({});
Small.args = {
  children: 'Small Button',
  variant: 'primary',
  size: 'sm',
};

// Custom Styling Example
export const CustomStyling = Template.bind({});
CustomStyling.args = {
  children: 'Custom Styled Button',
  variant: 'secondary',
  className: 'bg-purple-500 hover:bg-purple-700 text-white',
  size: 'md',
};
