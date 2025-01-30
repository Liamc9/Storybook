
import React from 'react';
import SinglePageForm from '../../../components/form/forms/SinglePageForm'; // Adjust the path based on your project structure

export default {
  title: 'Form/Forms/SinglePageForm',
  component: SinglePageForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

# SinglePageForm Component

The \`SinglePageForm\` component is a versatile and customizable form built with React. It includes various input types such as text inputs, text areas, range inputs, and submit buttons. The component uses \`FormLogic\` for handling form state and submission, and \`styled-components\` for styling.

### Features
- **Multiple Input Types**: Supports text, email, textarea, range, and more.
- **Pre-filled Data**: Ability to initialize form fields with default values.
- **Customizable Styling**: Easily adjust styles using \`styled-components\`.
- **SinglePageForm Validation**: Ensures required fields are filled and valid.

### Usage in Parent

\`\`\`jsx
import React from 'react';
import SinglePageForm from './components/SinglePageForm';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config'; // Ensure the correct path

const App = () => {
  const handleFormSubmit = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "forms"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

  return (
    <div>
      <h1>Feedback</h1>
      <SinglePageForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
\`\`\`

### Customization

#### 1. **Initial SinglePageForm Data**

Pre-fill the form with initial data by passing the \`initialData\` prop.

\`\`\`jsx
const initialFormData = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  message: 'I love your service!',
  rating: 4,
};

<SinglePageForm handleFormSubmit={handleFormSubmit} initialData={initialFormData} />
\`\`\`

#### 2. **Adding or Removing Fields**

Modify the JSX within the \`FormLogic\` component to add or remove form fields.

\`\`\`jsx
<FormContainer>
  <TextInput label="Name" type="text" name="name" id="name" required />
  <TextInput label="Email" type="email" name="email" id="email" required />
  <TextAreaInput label="Message" name="message" id="message" rows={5} required />
  <RangeInput label="Rating" name="rating" id="rating" min={1} max={5} required />
  {/* Add more inputs as needed */}
  <ButtonContainer>
      <ResetButton>Clear</ResetButton>
    <SubmitButton>Submit</SubmitButton>
  </ButtonContainer>
</FormContainer>
\`\`\`


### Live Example

Interact with the \`SinglePageForm\` component directly within Storybook to see how it behaves with different initial data and customization options.

`,
      },
    },
  },
  argTypes: {
    handleFormSubmit: { 
      description: 'Function to handle form submission.',
      action: 'submitted',
    },
    initialFormData: {
      control: 'object',
      description: 'Initial data to populate the form fields.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

// Template for creating stories
const Template = (args) => <SinglePageForm {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  handleFormSubmit: (data) => console.log('SinglePageForm Submitted:', data),
  initialFormData: {
 
  },
};

// Pre-filled Data Story
export const PreFilled = Template.bind({});
PreFilled.args = {
  handleFormSubmit: (data) => console.log('PreFilled SinglePageForm Submitted:', data),
  initialFormData: {
    name: 'Bob Williams',
    email: 'bob.williams@example.com',
    message: 'Great service!',
    rating: 5,
  },
};
