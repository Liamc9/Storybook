import React from "react";
import BottomNav from "../../components/navigation/BottomNav"; // Adjust the path as needed
import { HomeIcon, SearchIcon2, UserIcon2 } from "../../components/Branding/icons/Icons";
import { BrowserRouter as Router } from "react-router-dom";

const navItems = [
  { text: "Home", icon: HomeIcon, path: "/home", hasNotification: true },
  { text: "Search", icon: SearchIcon2, path: "/search", hasNotification: false },
  { text: "Profile", icon: UserIcon2, path: "/profile", hasNotification: true },
];

export default {
  title: "Navigation/BottomNav/BottomNav",
  component: BottomNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### BottomNav

The \`BottomNav\` component displays a bottom navigation bar with optional notification indicators.

#### Props

- **items**: An array of objects representing navigation items.
  - \`text\` (string): The label for the navigation item.
  - \`icon\` (React Component): The icon for the navigation item.
  - \`path\` (string): The route path for the navigation item.
  - \`hasNotification\` (boolean): Indicates whether a notification dot should be displayed.
- **activeColor** (string, optional): Color for the active navigation item. Defaults to \`#a855f7\`.

#### Example Usage

\`\`\`jsx
import React from "react";
import BottomNav from "./components/navigation/BottomNav";
import { HomeIcon, SearchIcon2, UserIcon2 } from "./components/icons/Icons";

const navItems = [
  { text: "Home", icon: HomeIcon, path: "/home", hasNotification: true },
  { text: "Search", icon: SearchIcon2, path: "/search", hasNotification: false },
  { text: "Profile", icon: UserIcon2, path: "/profile", hasNotification: true },
];

export default function App() {
  return <BottomNav items={navItems} activeColor="#FF5733" />;
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false, 
    },
    activeColor: { control: 'color' },
  },
};

const Template = (args) => (
  <Router>
    <div style={{ minHeight: "100vh", paddingBottom: "4rem" }}>
      <BottomNav {...args} />
    </div>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  items: navItems,
  activeColor: "#FF5733",
};
