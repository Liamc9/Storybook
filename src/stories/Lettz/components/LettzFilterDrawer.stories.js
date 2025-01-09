import React from "react";
import LettzFilterDrawer from "../../../components/Lettz/components/LettzFilterDrawer";

export default {
  title: "Projects/Lettz/Components/LettzFilterDrawer",
  component: LettzFilterDrawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`LettzFilterDrawer\` component provides a flexible interface for filtering and sorting property listings. Users can filter properties by county, type, rent range, and availability months, as well as sort the listings using predefined options.

### Features
- **Dynamic Filters**: Supports multiple filtering options, including dropdowns, checkboxes, and range sliders.
- **Sort Options**: Allows sorting the results with a dropdown menu.
- **Persistent State**: Reflects and updates local filter state based on props.
- **Clear and Apply Buttons**: Provides buttons to reset or apply the selected filters and sorting.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import LettzFilterDrawer from "../components/LettzFilterDrawer";

const ExampleComponent = () => {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("");

  const handleFilterChange = (newFilters) => {
    console.log("Filters applied:", newFilters);
    setFilters(newFilters);
  };

  const handleSortChange = (newSortOption) => {
    console.log("Sort option selected:", newSortOption);
    setSortOption(newSortOption);
  };

  const handleCloseDrawer = () => {
    console.log("Drawer closed");
  };

  return (
    <LettzFilterDrawer
      selectedFilters={filters}
      onFilterChange={handleFilterChange}
      closeDrawer={handleCloseDrawer}
      sortOptions={[
        { value: "price", label: "Price" },
        { value: "date", label: "Date Added" },
      ]}
      selectedSortOption={sortOption}
      onSortChange={handleSortChange}
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **selectedFilters**: Object containing the current filter selections.
- **onFilterChange**: Callback function triggered when filters are applied.
- **closeDrawer**: Callback function triggered when the drawer is closed.
- **sortOptions**: Array of sorting options, each with value and label properties.
- **selectedSortOption**: String representing the current sorting option.
- **onSortChange**: Callback function triggered when the sorting option changes.
        `,
      },
    },
  },
  argTypes: {
    selectedFilters: { control: "object" },
    onFilterChange: { action: "filters applied" },
    closeDrawer: { action: "drawer closed" },
    sortOptions: { control: "array" },
    selectedSortOption: { control: "text" },
    onSortChange: { action: "sort option changed" },
  },
};

const Template = (args) => <LettzFilterDrawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedFilters: {
    county: "Dublin",
    startMonth: "jan",
    endMonth: "dec",
    rentRange: [500, 2500],
    type: ["house", "apartment"],
  },
  onFilterChange: (filters) => console.log("Filters applied:", filters),
  closeDrawer: () => console.log("Drawer closed"),
  sortOptions: [
    { value: "price", label: "Price" },
    { value: "date", label: "Date Added" },
  ],
  selectedSortOption: "price",
  onSortChange: (sortOption) => console.log("Sort option changed:", sortOption),
};
