// ImageUploading.stories.jsx

import React, { useState } from "react";
import ImageUploading from "../../../components/atoms/forms/ImageUploading";

export default {
  title: "Atoms/Forms/ImageUploading",
  component: ImageUploading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `

The \`ImageUploading\` component allows users to upload, rearrange, and delete images
with an intuitive drag-and-drop interface. It supports multiple formats and provides
customizable messages for various actions and limits.

### Features
- **Drag-and-Drop Support**: Reorder images easily by dragging them.
- **File Validation**: Validates file formats and limits the number of uploads.
- **Toast Notifications**: Displays notifications for user actions.

### Usage

\`\`\`jsx
import React, { useState } from "react";
import ImageUploading from "./components/molecules/ImageUploading";

const App = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  return (
    <ImageUploading
      uploadedImages={uploadedImages}
      setUploadedImages={setUploadedImages}
      maxImages={6}
      acceptedFormats={["image/jpeg", "image/png", "image/gif"]}
      customMessages={{
        maxLimit: "You can only upload up to {maxImages} images.",
        invalidFormat: "Only JPG, PNG, and GIF formats are allowed.",
        success: "You have successfully uploaded {count} images.",
        rearrange: "You can rearrange the order of images by dragging them.",
      }}
    />
  );
};

export default App;
\`\`\`

### Props
- **uploadedImages**: Array of image objects with id, file, preview properties.
- **setUploadedImages**: Callback function triggered when the image list is updated.
- **maxImages**: Number specifying the maximum allowed images.
- **acceptedFormats**: Array of acceptable MIME types for uploads.
- **customMessages**: Object containing custom messages for various states.
        `,
      },
    },
  },
  argTypes: {
    uploadedImages: { control: "array" },
    setUploadedImages: { action: "set uploaded images" },
    maxImages: { control: "number" },
    acceptedFormats: { control: "array" },
    customMessages: { control: "object" },
  },
};

const Template = (args) => {
  const [images, setImages] = useState([]);
  return <ImageUploading {...args} uploadedImages={images} setUploadedImages={setImages} />;
};

export const Default = Template.bind({});
Default.args = {
  maxImages: 6,
  acceptedFormats: ["image/jpeg", "image/png", "image/gif"],
  customMessages: {
    maxLimit: "You can only upload up to {maxImages} images.",
    invalidFormat: "Only JPG, PNG, and GIF formats are allowed.",
    success: "You have successfully uploaded {count} images.",
    rearrange: "You can rearrange the order of images by dragging them.",
  },
};
