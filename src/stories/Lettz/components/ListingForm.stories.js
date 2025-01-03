// ListingForm.stories.jsx

import React from "react";
import ListingForm from "../../../components/Lettz/components/ListingForm";

export default {
  title: "Lettz/Components/ListingForm",
  component: ListingForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`ListingForm\` component provides an interactive multi-step form for creating or editing property listings. It includes fields for location, property details, and image uploads with validation and error handling.

### Features
- **Multi-Step Navigation**: Progress through the form with a clear progress bar.
- **Image Uploading**: Add, rearrange, and validate images.
- **Form Validation**: Ensures all required fields are completed.
- **Customizable**: Supports initial data and submission handling.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import ListingForm from "./components/molecules/ListingForm";

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    setFormData(data);
  };

  const handleClose = () => {
    console.log("Form closed");
  };

  return (
    <ListingForm
      initialData={null}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  );
};

export default App;
\`\`\`

### Props
- **initialData**: Object containing the pre-filled form data (optional).
- **onSubmit**: Callback function triggered upon form submission.
- **onClose**: Callback function triggered when the form is closed.
        `,
      },
    },
  },
  argTypes: {
    initialData: { control: "object" },
    onSubmit: { action: "form submitted" },
    onClose: { action: "form closed" },
  },
};

const Template = (args) => <ListingForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialData: {
    streetAddress: "123 Main St",
    city: "Dublin",
    county: "Dublin",
    eircode: "D01XYZ",
    rent: "1200",
    startDate: "Jan",
    endDate: "Dec",
    type: "Apartment",
    description: "A lovely apartment in the city center.",
    images: ["https://via.placeholder.com/150"],
  },
  onSubmit: (data) => console.log("Form submitted:", data),
  onClose: () => console.log("Form closed"),
};
