import React, { useState } from "react";
import SideBar from "../../components/navigation/SideBar"; // Adjust the import path as needed
import { HomeIcon3, UserIcon3, SearchIcon2, CogIcon } from "../../components/Branding/icons/Icons"; // Replace with actual icon imports
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Navigation/SideNav/SideBar",
  component: SideBar,
  argTypes: {
    hideProfile: { control: "boolean" },
    // Other controls can be defined here if needed
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ paddingBottom: "50px" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => {
  // Manage state and handlers within the story
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => setIsSideNavOpen((prev) => !prev);
  const closeSideNav = () => setIsSideNavOpen(false);

  return (
    <>
      {/* External button or control to toggle the sidebar */}
      <button onClick={toggleSideNav}>Toggle Sidebar</button>
      <SideBar
        {...args}
        isSideNavOpen={isSideNavOpen}
        toggleSideNav={toggleSideNav}
        closeSideNav={closeSideNav}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  signInColor: "#ff4500",
  username: "Jane Doe",
  profilePic: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
  onLogout: () => alert("Logged out"),
  hideProfile: false, // Control the visibility of the profile section
  navLinks: [
    { name: "Home", path: "/home", Icon: HomeIcon3, isFooter: false },
    { name: "About", path: "/about", Icon: SearchIcon2, isFooter: false },
    { name: "Settings", path: "/settings", Icon: CogIcon, isFooter: true },
    { name: "Contact", path: "/contact", Icon: UserIcon3, isFooter: true },
  ],
};
