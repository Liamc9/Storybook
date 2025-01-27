// src/components/Form/Form.stories.jsx
import React, { useState } from 'react';
import Form from '../../../components/form/forms/Form';
import Input2 from '../../../components/form/inputs/Input2';
import RadioButtons from '../../../components/form/inputs/RadioButtons';
import Checkbox from '../../../components/form/inputs/Checkbox';
import HiddenInput from '../../../components/form/inputs/HiddenInput';
import FileInput from '../../../components/form/inputs/FileInput';
import SubmitButton from '../../../components/form/inputs/SubmitButton';
import ResetButton from '../../../components/form/inputs/ResetButton';
import ColorPicker from '../../../components/form/inputs/ColorPicker';
import ColorPickerWithPreview from '../../../components/form/inputs/ColorPickerWithPreview';
import DateInput from '../../../components/form/inputs/DateInput';
import DateTimeLocalInput from '../../../components/form/inputs/DateTimeLocalInput';
import EmailInput from '../../../components/form/inputs/EmailInput';
import FileUpload2 from '../../../components/form/inputs/FileUpload2';
import NumberInput from '../../../components/form/inputs/NumberInput';
import PasswordInput from '../../../components/form/inputs/PasswordInput';
import RangeInput from '../../../components/form/inputs/RangeInput';
import SelectInput2 from '../../../components/form/inputs/SelectInput2';
import TelInput from '../../../components/form/inputs/TelInput';
import TextareaInput from '../../../components/form/inputs/TextAreaInput';
import TextInput from '../../../components/form/inputs/textinputs/TextInput';
import TimeInput from '../../../components/form/inputs/TimeInput';
import UrlInput from '../../../components/form/inputs/UrlInput';
import ToggleSwitch from '../../../components/form/inputs/ToggleSwitch';


export default {
  title: 'Components/Form',
  component: Form,
};

export const Template = (args) => {
  const [formData, setFormData] = useState({
    firstName: '',
    radiooption: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Form onSubmit={handleSubmit} {...args}>
      <Input2
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      <RadioButtons
        label="Options"
        name="radiooption"
        value={formData.radiooption}
        onChange={handleChange}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
      />
      <HiddenInput name="hidden" value="hidden value" />
      <FileInput label="File Input" name="file" onChange={handleChange}/>
      <SubmitButton />
      <ResetButton label='Reset' type='reset' />
      <ColorPicker label="Color Picker" name="color" onChange={handleChange}/>
      <ColorPickerWithPreview label="Color Picker With Preview" name="color" onChange={handleChange}/>
      <DateInput label="Date Input" name="date" onChange={handleChange}/>
      <DateTimeLocalInput label="Date Time Local Input" name="datetime" onChange={handleChange}/>
      <EmailInput label="Email Input" name="email" onChange={handleChange}/>
      <FileUpload2 label="File Upload" name="file" onChange={handleChange}/>
      <NumberInput label="Number Input" name="number" onChange={handleChange}/>
      <PasswordInput label="Password Input" name="password" onChange={handleChange}/>
      <RangeInput label="Range Input" name="range" min={0} max={100} step={1} onChange={handleChange}/>
      <SelectInput2
        label="Select Input"
        name="select"
        value={formData.select}
        onChange={handleChange}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
      <TelInput label="Tel Input" name="tel" onChange={handleChange}/>
      <TextareaInput label="Textarea Input" name="textarea" onChange={handleChange}/>
      <TextInput label="Text Input" name="text" onChange={handleChange}/>
      <TimeInput label="Time Input" name="time" onChange={handleChange}/>
      <UrlInput label="Url Input" name="url" onChange={handleChange}/>
      <ToggleSwitch label="Toggle Switch" name="toggle" onChange={handleChange}/>
    </Form>
  );
};
