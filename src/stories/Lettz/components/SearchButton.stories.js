import React from "react";
import SearchButton from "../../../components/Lettz/components/SearchButton";

export default {
  title: "Lettz/Components/SearchButton",
  component: SearchButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`SearchButton\` component provides a clickable button for initiating searches, displaying selected place and date range details in a structured format. The component is styled for flexibility and a clean user experience.

### Features
- **Dynamic Content**: Displays selected place and date range.
- **Interactive Design**: Highlights on hover and includes subtle shadow effects.
- **Responsive Styling**: Adapts to different screen sizes and use cases.

### Usage

\`\`\`jsx
import React from "react";
import SearchButton from "../components/SearchButton";

const ExampleComponent = () => {
  const handleSearchClick = () => {
    console.log("Search button clicked!");
  };

  return (
    <SearchButton
      onClick={handleSearchClick}
      place="Dublin"
      startDate="2024-01-01"
      endDate="2024-01-15"
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **onClick**: Function triggered when the button is clicked (required).
- **place**: String representing the selected location (default: "Anywhere").
- **startDate**: String representing the start date (default: "Anytime").
- **endDate**: String representing the end date (default: "").
        `,
      },
    },
  },
  argTypes: {
    onClick: { action: "button clicked" },
    place: { control: "text" },
    startDate: { control: "text" },
    endDate: { control: "text" },
  },
};

const Template = (args) => <SearchButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("Search button clicked!"),
  place: "Anywhere",
  startDate: "Anytime",
  endDate: "",
};

export const CustomSearch = Template.bind({});
CustomSearch.args = {
  onClick: () => console.log("Search initiated for Dublin!"),
  place: "Dublin",
  startDate: "2024-01-01",
  endDate: "2024-01-15",
};
