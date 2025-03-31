import React from "react";
import ManageNotifications from "../../../components/pages/account/ManageNotifications";
import { MemoryRouter } from 'react-router-dom';

/**
 * Storybook entry for the ManageNotifications component
 */
export default {
  title: "Pages/Account/ManageNotifications",
  component: ManageNotifications,
  tags: ["autodocs", "pages"],
};

export const Default = () => <MemoryRouter><ManageNotifications /></MemoryRouter>;
Default.storyName = "Default Usage";
