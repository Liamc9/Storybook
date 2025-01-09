import React from "react";
import RoomsView from "../../../components/Lettz/views/RoomsView";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Projects/Lettz/Views/RoomsView",
  component: RoomsView,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`RoomsView\` component displays a detailed view of a room listing, including images, availability dates, location, description, and rent details. It also includes functionality for sending messages to the room owner and redirects unauthenticated users to the login page.

### Features
- **Image Carousel**: Displays room images.
- **Date Range Display**: Shows availability dates.
- **Location Information**: Displays the room's location and map.
- **Rent Details**: Shows the monthly rent.
- **Message Functionality**: Allows authenticated users to send messages.
- **Drawer Integration**: Opens a message form in a drawer.
- **Error Handling**: Displays an error message if room data is unavailable.

### Usage

\`\`\`jsx
import React from "react";
import RoomsView from "../components/RoomsView";

const ExampleComponent = () => {
  const roomData = {
    images: [
      "https://via.placeholder.com/800x600?text=Room+1",
      "https://via.placeholder.com/800x600?text=Room+2",
    ],
    title: "Modern Apartment in Dublin",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    streetAddress: "123 Main Street",
    city: "Dublin",
    county: "Dublin",
    eircode: "D01XYZ",
    description: "A modern apartment in the heart of the city with great amenities.",
    rent: 1500,
    userId: "owner123",
  };

  const currentUser = { uid: "user456" };

  const handleSend = (message) => {
    console.log("Message sent:", message);
  };

  return (
    <RoomsView
      roomData={roomData}
      handleSend={handleSend}
      currentUser={currentUser}
      id="room123"
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **roomData**: Object containing room details:
  - **images**: Array of image URLs for the room.
  - **title**: Title of the room listing.
  - **startDate**: Start date of availability (string).
  - **endDate**: End date of availability (string).
  - **streetAddress**: Street address of the room.
  - **city**: City where the room is located.
  - **county**: County or region of the room.
  - **eircode**: Eircode (or postal code) of the room.
  - **description**: Description of the room.
  - **rent**: Monthly rent price (number).
  - **userId**: The owner's user ID.
- **handleSend**: Callback function triggered when a message is sent from the drawer.
- **currentUser**: Object representing the authenticated user.
- **id**: Room ID used for redirection when unauthenticated users attempt to send a message.

        `,
      },
    },
  },
  argTypes: {
    roomData: { control: "object" },
    handleSend: { action: "message sent" },
    currentUser: { control: "object" },
    id: { control: "text" },
  },
};

const Template = (args) => <BrowserRouter><RoomsView {...args} /></BrowserRouter>;

export const Default = Template.bind({});
Default.args = {
  roomData: {
    images: [
      "https://via.placeholder.com/800x600?text=Room+1",
      "https://via.placeholder.com/800x600?text=Room+2",
    ],
    title: "Modern Apartment in Dublin",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    streetAddress: "123 Main Street",
    city: "Dublin",
    county: "Dublin",
    eircode: "D01XYZ",
    description: "A modern apartment in the heart of the city with great amenities.",
    rent: 1500,
    userId: "owner123",
  },
  currentUser: { uid: "user456" },
  id: "room123",
};

export const UnauthenticatedUser = Template.bind({});
UnauthenticatedUser.args = {
  roomData: {
    images: [
      "https://via.placeholder.com/800x600?text=Room+1",
      "https://via.placeholder.com/800x600?text=Room+2",
    ],
    title: "Modern Apartment in Dublin",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    streetAddress: "123 Main Street",
    city: "Dublin",
    county: "Dublin",
    eircode: "D01XYZ",
    description: "A modern apartment in the heart of the city with great amenities.",
    rent: 1500,
    userId: "owner123",
  },
  currentUser: null,
  id: "room123",
};
