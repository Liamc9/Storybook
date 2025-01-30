import React from "react";
import FormLogic from "./FormLogic"; // Ensure the correct import path
import styled from "styled-components";
import TextInput from "../inputs/textInputs/TextInput";
import SubmitButton from "../inputs/formButtons/SubmitButton";
import RangeInput from "../inputs/rangeInputs/RangeInput";
import ColorPicker from "../inputs/colorPickers/ColorPicker";
import Checkbox3 from "../inputs/checkboxInputs/Checkbox3";
import ToggleSwitch2 from "../inputs/toggleSwitches/ToggleSwitch2";
import RadioButtons2 from "../inputs/radioInputs/RadioButtons2";
import RangeInput2 from "../inputs/rangeInputs/RangeInput2";
import ResetButton from "../inputs/formButtons/ResetButton";

// Custom styled components for form fields
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Customize as needed */
  margin-top: 16px;
`;

export default function SinglePageForm({ initialFormData = {}, handleFormSubmit }) {
    const defaultData = {
      name: '',
      email: '',
      message: '',
      color: '#000000',
      rating: 3,
      checkbox: false,
      toggle: false,
      role: 'designer',
      volume: 3,
    };
  
    // Merge defaultData with whatever was passed in
    const mergedData = { ...defaultData, ...initialFormData };

  return (
    <div>
      <FormLogic onSubmit={handleFormSubmit} initialData={mergedData}>
        <FormContainer>
          <TextInput label="Name" type="text" name="name" id="name" required />
          <TextInput label="Email" type="email" name="email" id="email" required />
          <TextInput label="Message" name="message" id="message" rows={5} required />
          <ColorPicker label="Color" name="color" id="color" required />
          <RangeInput label="Rating" name="rating" id="rating" min={1} max={5} required />
          <Checkbox3 name="checkbox" id="checkbox" />
          <ToggleSwitch2 name="toggle" id="toggle" />
          <RadioButtons2
            name="role" // Provide a single name for the radio group
            options={[
              { id: "designer", value: "designer", label: "Designer", defaultChecked: true },
              { id: "designer", value: "student", label: "Student" },
              { id: "designer", value: "teacher", label: "Teacher" },
            ]}
          />
          <RangeInput2 label="Volume" name="volume" id="volume" min={1} max={5} required />
          <ButtonContainer>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </FormLogic>
    </div>
  );
}
