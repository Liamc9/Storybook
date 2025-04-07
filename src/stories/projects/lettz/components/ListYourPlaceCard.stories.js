import React from "react";
import { ListYourPlaceCard } from "liamc9npm";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Projects/Lettz/Components/ListYourPlace",
  tags: ["autodocs"],
  component: ListYourPlaceCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`ListYourPlace\` component is a reusable card that encourages users to list their property. It includes a header with a logo, an icon, a descriptive text, and a call-to-action button. The component adapts its behavior based on whether the user is authenticated.

### Features
- **Dynamic Navigation**: Redirects unauthenticated users to the login page.
- **Interactive Button**: Triggers a callback function when clicked.
- **Responsive Design**: Adapts to different screen sizes.

### Usage

\`\`\`jsx
import React from "react";
import ListYourPlace from "../components/ListYourPlace";

const ExampleComponent = () => {
  const currentUser = { uid: "user1", name: "Alice" };

  const handleButtonClick = () => {
    console.log("Button clicked! Redirecting to the listing page...");
  };

  return (
    <ListYourPlace
      onButtonClick={handleButtonClick}
      currentUser={currentUser}
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **onButtonClick**: Callback function triggered when the button is clicked.
- **currentUser**: Object representing the authenticated user. If not provided, the component redirects to the login page.
        `,
      },
    },
  },
  argTypes: {
    onButtonClick: { action: "button clicked" },
    currentUser: { control: "object" },
  },
};

const Template = (args) => <BrowserRouter><ListYourPlaceCard {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  onButtonClick: () => {
    console.log("Listing your place!");
  },
  currentUser: { uid: "user1", name: "Alice" },
};

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {
  onButtonClick: () => {
    console.log("Redirecting to login...");
  },
  currentUser: null,
};
