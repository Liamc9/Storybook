import React from "react";
import { ListingCard } from "liamc9npm";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Projects/Lettz/Components/ListingCard",
  tags: ["autodocs"],
  component: ListingCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`ListingCard\` component is a versatile card component for showcasing property listings. It includes features like a title, location, price, date range, image carousel, and management options.

### Features
- **Image Carousel**: Displays property images in a carousel format.
- **Dynamic Badges**: Shows rent price and availability dates.
- **Management Mode**: Allows updating or removing listings when in management mode.
- **Responsive Design**: Optimized for both desktop and mobile devices.

### Usage

\`\`\`jsx
import React from "react";
import ListingCard from "../components/cards/ListingCard";

const ExampleComponent = () => {
  const listingData = {
    id: "12345",
    images: [
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
    ],
    city: "Dublin",
    county: "Ireland",
    title: "Cozy Apartment in the City",
    rent: 1200,
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    photoURL: "https://via.placeholder.com/150?text=Profile",
  };

  const handleUpdate = (data) => {
    console.log("Update listing:", data);
  };

  const handleRemove = (id) => {
    console.log("Remove listing with ID:", id);
  };

  return (
    <ListingCard
      data={listingData}
      isManaging={true}
      onUpdate={handleUpdate}
      onRemove={handleRemove}
    />
  );
};

export default ExampleComponent;
\`\`\`

### Props
- **data**: Object containing listing details:
  - **id**: Unique identifier for the listing.
  - **images**: Array of image URLs for the property.
  - **city**: City where the property is located.
  - **county**: County or region of the property.
  - **title**: Title or description of the listing.
  - **rent**: Monthly rent price (number).
  - **startDate**: Start date of availability (string).
  - **endDate**: End date of availability (string).
  - **photoURL**: URL for the profile image of the property owner.
- **isManaging**: Boolean to toggle management mode (default: false).
- **onUpdate**: Callback function triggered when the update button is clicked.
- **onRemove**: Callback function triggered when the remove button is clicked.
        `,
      },
    },
  },
  argTypes: {
    data: { control: "object" },
    isManaging: { control: "boolean" },
    onUpdate: { action: "update clicked" },
    onRemove: { action: "remove clicked" },
  },
};

const Template = (args) => <BrowserRouter><ListingCard {...args} /></BrowserRouter> ;

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "12345",
    images: [
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
    ],
    city: "Dublin",
    county: "Ireland",
    title: "Cozy Apartment in the City",
    rent: 1200,
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    photoURL: "https://via.placeholder.com/150?text=Profile",
  },
  isManaging: false,
};

export const ManagingMode = Template.bind({});
ManagingMode.args = {
  data: {
    id: "67890",
    images: [
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
    ],
    city: "Cork",
    county: "Ireland",
    title: "Spacious Home near the Beach",
    rent: 1500,
    startDate: "2024-02-01",
    endDate: "2024-08-31",
    photoURL: "https://via.placeholder.com/150?text=Profile",
  },
  isManaging: true,
};
