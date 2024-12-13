import React from "react";
import RangeSlider from "../../../components/atoms/inputs/RangeSlider";

export default {
  title: "Atoms/Inputs/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`RangeSlider\` component is a customizable range slider that allows users to select a range of values using two slider thumbs.

### Features
- **Dual Thumbs**: Select a minimum and maximum value.
- **Customizable Appearance**: Adjust the colors and labels to fit your design.
- **Dynamic Updates**: Real-time updates as values are adjusted.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import RangeSlider from "../components/RangeSlider";

const ExampleComponent = () => {
  const [range, setRange] = useState([10, 50]);

  return (
    <RangeSlider
      min={0}
      max={100}
      step={1}
      minimumGap={10}
      label="Select Range"
      valuePrefix="$"
      valueSuffix=""
      onChange={(newRange) => setRange(newRange)}
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **min**: The minimum value of the slider (default: 0).
- **max**: The maximum value of the slider (default: 100).
- **step**: The increment step for the slider (default: 1).
- **minimumGap**: Minimum gap between the two slider thumbs (default: 10).
- **label**: A label for the slider (default: "Range").
- **valuePrefix**: Prefix for the displayed values (default: "").
- **valueSuffix**: Suffix for the displayed values (default: "").
- **onChange**: Callback function called with the selected range when values change.
        `,
      },
    },
  },
  argTypes: {
    min: { control: { type: "number" }, defaultValue: 0 },
    max: { control: { type: "number" }, defaultValue: 100 },
    step: { control: { type: "number" }, defaultValue: 1 },
    minimumGap: { control: { type: "number" }, defaultValue: 10 },
    label: { control: { type: "text" }, defaultValue: "Range" },
    valuePrefix: { control: { type: "text" }, defaultValue: "" },
    valueSuffix: { control: { type: "text" }, defaultValue: "" },
    onChange: { action: "changed" },
  },
};

const Template = (args) => {
  const [range, setRange] = React.useState([args.min, args.max]);

  return (
    <RangeSlider
      {...args}
      onChange={(newRange) => {
        setRange(newRange);
        args.onChange(newRange);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  minimumGap: 10,
  label: "Select Range",
  valuePrefix: "$",
  valueSuffix: "",
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  min: 0,
  max: 500,
  step: 5,
  minimumGap: 20,
  label: "Price Range",
  valuePrefix: "$",
  valueSuffix: " USD",
};
