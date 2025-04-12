import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import EditSettingsTemplate from '../../../components/pages/account/EditSettingsTemplate';

export default {
  title: 'Pages/Account/EditSettingsTemplate',
  component: EditSettingsTemplate,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <EditSettingsTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Manage Notifications',
  toggleColor: 'blue',
  // The initialValues will be loaded into the component's state,
  // and any change in the fields will immediately trigger the onSave callback.
  initialValues: {
    field1: 'Initial Value 1',
    field2: 'Initial Value 2',
    name: 'John Doe',
    gender: 'Male',
    notifications: true,
    toggleField: false,
  },
  sections: [
    {
      title: 'Manage Notifications',
      fields: [
        { name: 'Name', type: 'EditableTextField', fieldName: 'field1' },
        {
          name: 'Category',
          type: 'SelectField',
          fieldName: 'field2',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        { name: 'Enable Feature', type: 'ToggleField', fieldName: 'toggleField' },
      ],
    },
    {
      title: 'Settings',
      fields: [
        { name: 'Full Name', type: 'EditableTextField', fieldName: 'name' },
        { name: 'Gender', type: 'SelectField', fieldName: 'gender', options: ['Male', 'Female'] },
        { name: 'Notifications', type: 'ToggleField', fieldName: 'notifications' },
      ],
    },
  ],
  onSave: (data) => {
    console.log('Saved data:', data);
  },
};
