import React from "react";
import SearchDrawer from "../../../components/molecules/search/SearchDrawer";

export default {
  title: "Molecules/Search/SearchDrawer",
  component: SearchDrawer,
};

const trendingItems = ["React Hooks", "Storybook", "JavaScript ES6", "Tailwind CSS"];
const searchResults = [
    {
      title: "React Native",
      description: "A framework for building native apps with React.",
      thumbnail: "https://example.com/react-native.png",
    },
    {
      title: "Redux",
      description: "A predictable state container for JavaScript apps.",
      thumbnail: "https://example.com/redux.png",
    },
    {
      title: "GraphQL",
      description: "A query language for APIs and a runtime for executing those queries.",
      thumbnail: null, // No thumbnail
    },
  ];

export const Default = () => (
  <SearchDrawer trendingItems={trendingItems} searchResults={searchResults} />
);
