import React from 'react';
import SelectToTextInput from '../../../components/atoms/inputs/SelectToTextInput';

export default {
  title: 'Atoms/Inputs/SelectToTextInput',
  component: SelectToTextInput,
  parameters: {
    docs: {
      description: {
        component: 'A component that starts as a select input and switches to a text input when an option is selected.',
      },
    },
  },
};

const Template = (args) => <SelectToTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['🥬Option 1', 'Option 2', 'Option 3'],
};
