import React from "react";
import SelectInput from "../../../components/atoms/inputs/SelectInput";

export default {
  title: "Atoms/Inputs/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`SelectInput\` component is a customizable dropdown input with a floating label and a styled arrow.

### Features
- **Floating Label**: The label moves above the field when a value is selected or the field is focused.
- **Customizable Colors**: Adjust the highlight color for focused states.
- **Responsive Design**: Works well across different screen sizes.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import SelectInput from "../components/SelectInput";

const ExampleComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <SelectInput
      name="example"
      value={selectedValue}
      label="Select an Option"
      color="#000"
      options={[
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ]}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **name**: The name of the select input (default: "").
- **value**: The current value of the select input (default: "").
- **label**: Label text for the select input (default: "Select an Option").
- **color**: Highlight color for focused states (default: "#000").
- **options**: Array of options, each with value and label properties (default: []).
- **onChange**: Callback function triggered on value change.
        `,
      },
    },
  },
  argTypes: {
    name: { control: { type: "text" }, defaultValue: "example-select" },
    value: { control: { type: "text" }, defaultValue: "" },
    label: { control: { type: "text" }, defaultValue: "Select an Option" },
    color: { control: { type: "color" }, defaultValue: "#000" },
    options: { control: { type: "object" }, defaultValue: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ] },
    onChange: { action: "changed" },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <SelectInput
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "default-select",
  value: "",
  label: "Select an Option",
  color: "#000",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  name: "custom-select",
  value: "",
  label: "Choose a Color",
  color: "#FF5733",
  options: [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ],
};
