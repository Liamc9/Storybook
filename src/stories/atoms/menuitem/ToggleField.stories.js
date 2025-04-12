import React, { useState } from 'react';
import ToggleField from '../../../components/atoms/menuitem/ToggleField';
import { UserIcon2 } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Atoms/MenuItem/ToggleField',
  component: ToggleField,
  tags: ['atoms', 'autodocs'],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return <ToggleField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: UserIcon2,
  name: 'Enable Feature',
  value: false,
};