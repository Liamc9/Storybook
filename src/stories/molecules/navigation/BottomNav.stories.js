import React from "react";
import BottomNav from "../../../components/navigation/BottomNav"; // Adjust the path to your BottomNav component
import { HomeIcon, SearchIcon2, UserIcon2 } from "../../../components/icons/Icons";
import { BrowserRouter as Router } from "react-router-dom";

const navItems = [
  { text: "Home", icon: HomeIcon, path: "/home", hasNotification: true },
  { text: "Search", icon: SearchIcon2, path: "/search", hasNotification: false },
  { text: "Profile", icon: UserIcon2, path: "/profile", hasNotification: true },
];

export default {
  title: "Molecules/Navigation/Mobile/NavBar/BottomNav",
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
  return <BottomNav items={navItems} />;
}
\`\`\`

#### Integrating with \`NotificationContext\`

If you want to manage notifications dynamically across the app, you can use a context:

\`\`\`jsx
import React, { createContext, useContext, useState } from "react";

// Create NotificationContext
const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

// Notification Provider
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState({
    home: true,
    search: false,
    profile: true,
  });

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Integrate into App
import BottomNav from "./components/navigation/BottomNav";
import { HomeIcon, SearchIcon2, UserIcon2 } from "./components/icons/Icons";

const App = () => {
  const { notifications } = useNotifications();

  const navItems = [
    { text: "Home", icon: HomeIcon, path: "/home", hasNotification: notifications.home },
    { text: "Search", icon: SearchIcon2, path: "/search", hasNotification: notifications.search },
    { text: "Profile", icon: UserIcon2, path: "/profile", hasNotification: notifications.profile },
  ];

  return <BottomNav items={navItems} />;
};
\`\`\`

`,
      },
    },
  },
  argTypes: {
    items: {
      control: false, // No need to control items dynamically for this story
    },
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
};
