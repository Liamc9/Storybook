// src/stories/CustomCheckbox.stories.jsx

import React, { useState } from 'react';
import CheckedItem from '../components/CheckedItem';
import * as Icons from '../assets/Icons';

export default {
  title: 'Components/CheckedItem',
  component: CheckedItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    iconName: {
      control: 'select',
      options: Object.keys(Icons),
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const IconComponent = Icons[args.iconName];

  return (
    <CheckedItem
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
      svg={<IconComponent className="w-6 h-6" />}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Custom Checkbox',
  checked: false,
  iconName: 'HomeIcon',
};
