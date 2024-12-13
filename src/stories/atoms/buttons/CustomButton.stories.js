import React from 'react';
import CustomButton from '../../../components/atoms/buttons/CustomButton';

// Default export to define the story's metadata
export default {
  title: 'Atoms/Buttons/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

The \`CustomButton\` component is a versatile button that supports different styles, sizes, and actions. It can be used for various UI interactions, allowing for primary, secondary, success, and danger button variants.

### Features
- **Variants**: Choose from \`primary\`, \`secondary\`, \`success\`, and \`danger\` styles.
- **Sizes**: Available in \`sm\`, \`md\`, and \`lg\` for different use cases.
- **Custom Styling**: Can be styled using custom class names.

### Usage

\`\`\`jsx
import React from 'react';
import CustomButton from './components/CustomButton';

const ExampleComponent = () => {
  return (
    <div className="space-x-4">
      <CustomButton variant="primary" size="md">
        Primary Button
      </CustomButton>
      <CustomButton variant="secondary" size="lg">
        Large Secondary Button
      </CustomButton>
      <CustomButton variant="danger" size="sm">
        Small Danger Button
      </CustomButton>
    </div>
  );
};

export default ExampleComponent;
\`\`\`
        `,
      },
    },
  },
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
