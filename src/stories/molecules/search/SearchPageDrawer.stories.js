import React from "react";
import SearchPageDrawer from "../../../components/molecules/search/SearchPageDrawer";

// Mock data for the Storybook
const mockTrendingItems = ["React", "Storybook", "JavaScript"];

const mockSearchResults = [
  {
    title: "React Native",
    description: "A framework for building native apps with React.",
    thumbnail: "https://example.com/react-native.png",
    category: "Framework",
    level: "Intermediate",
    isFree: true,
    date: "2021-06-15",
  },
  {
    title: "Redux",
    description: "A predictable state container for JavaScript apps.",
    thumbnail: "https://example.com/redux.png",
    category: "State Management",
    level: "Advanced",
    isFree: false,
    date: "2020-11-20",
  },
  {
    title: "GraphQL",
    description: "A query language for APIs and a runtime for executing those queries.",
    thumbnail: null,
    category: "API",
    level: "Intermediate",
    isFree: true,
    date: "2022-01-10",
  },
];

// Define filters with their types and options
const filters = [
  {
    key: "category",
    name: "Category",
    type: "select",
    options: ["Framework", "State Management", "API"],
  },
  {
    key: "level",
    name: "Difficulty Level",
    type: "select",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "isFree",
    name: "Free Resources Only",
    type: "toggle",
  },
];

// Define sort options
const sortOptions = [
  { value: "title_asc", label: "Title (A-Z)" },
  { value: "title_desc", label: "Title (Z-A)" },
  { value: "date_newest", label: "Date (Newest First)" },
  { value: "date_oldest", label: "Date (Oldest First)" },
];

// Mock data for available filters
const mockAvailableFilters = [
  "Framework",
  "State Management",
  "API",
  "Database",
  "Testing",
  "Deployment",
  "Design",
  "Other",
];

export default {
  title: "Pages/SearchPageDrawer",
  component: SearchPageDrawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# SearchPageDrawer

The \`SearchPageDrawer\` component is a page-level UI that combines search and filter functionalities. It allows users to:
- Search through a list of items.
- Apply filters to refine the results.
- Sort results based on specified criteria.

### Usage

\`\`\`jsx
import SearchPageDrawer from "path-to-your-component";

const mockTrendingItems = ["React", "Storybook", "JavaScript"];

const mockSearchResults = [
  {
    title: "React Native",
    description: "A framework for building native apps with React.",
    thumbnail: "https://example.com/react-native.png",
    category: "Framework",
    level: "Intermediate",
    isFree: true,
    date: "2021-06-15",
  },
  // Add more search results...
];

const filters = [
  {
    key: "category",
    name: "Category",
    type: "select",
    options: ["Framework", "State Management", "API"],
  },
  {
    key: "level",
    name: "Difficulty Level",
    type: "select",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "isFree",
    name: "Free Resources Only",
    type: "toggle",
  },
];

const sortOptions = [
  { value: "title_asc", label: "Title (A-Z)" },
  { value: "title_desc", label: "Title (Z-A)" },
  { value: "date_newest", label: "Date (Newest First)" },
  { value: "date_oldest", label: "Date (Oldest First)" },
];

<SearchPageDrawer
  trendingItems={mockTrendingItems}
  searchResults={mockSearchResults}
  filters={filters}
  sortOptions={sortOptions}
/>
\`\`\`

### Props

| Prop             | Type        | Description                                                                 |
|------------------|-------------|-----------------------------------------------------------------------------|
| \`trendingItems\` | \`array\`   | An array of trending search items to display when no query is provided.     |
| \`searchResults\` | \`array\`   | An array of search result objects.                                          |
| \`filters\`       | \`array\`   | An array of filter definitions.                                             |
| \`sortOptions\`   | \`array\`   | An array of sorting options.                                                |

### Notes
- The component uses \`BottomDrawer\` for rendering the search and filter drawers.
- Ensure to provide meaningful filters and sorting options to enhance usability.
        `,
      },
    },
  },
};

// Template for the story
const Template = (args) => {
  return <SearchPageDrawer {...args} />;
};

// Default story
export const Default = Template.bind({});
Default.args = {
  trendingItems: mockTrendingItems,
  searchResults: mockSearchResults,
  availableFilters: mockAvailableFilters,
  filters: filters,
  sortOptions: sortOptions,
};
