// src/components/__stories__/RangeInput.stories.jsx

import React from 'react';
import RangeInput from '../../../components/form/inputs/rangeInputs/RangeInput';
import RangeInput2 from '../../../components/form/inputs/rangeInputs/RangeInput2';
import RangeSlider from '../../../components/form/inputs/rangeInputs/RangeSlider';

export default {
  title: 'Form/Inputs/RangeInput',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the range input',
      defaultValue: 'Default Range',
    },
    id: {
      control: 'text',
      description: 'Unique ID for the range input',
      defaultValue: 'range-default',
    },
    min: {
      control: 'number',
      description: 'Minimum value of the range',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: 'Maximum value of the range',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: 'Step value for the range input',
      defaultValue: 1,
    },
    defaultValue: {
      control: 'number',
      description: 'Default value of the range input',
      defaultValue: 50,
    },
  },
};

export const DefaultRangeInput = (args) => <RangeInput {...args} />;
DefaultRangeInput.args = {
  label: 'Default Range',
  id: 'range-default',
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
};

export const StyledRangeInput = (args) => <RangeInput2 {...args} />;
StyledRangeInput.args = {
  id: 'range-styled',
  min: 0,
  max: 24,
  step: 1,
  defaultValue: 12,
};

export const RangeSliderStory = (args) => <RangeSlider {...args} />;
RangeSliderStory.args = {
  id: 'range-slider',
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
  minimumGap: 10,
  valuePrefix: '$',
  valueSuffix: ' USD',
  label: 'Range Slider',
};
