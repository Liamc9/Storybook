import React, { useState } from 'react';
import EditStackedList from '../../../components/molecules/stackedlist/EditStackedList';
import { UserIcon2 } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Molecules/StackedList/EditStackedList',
  component: EditStackedList,
  tags: ['molecules', 'autodocs'],
};

const Template = (args) => {
  // Initialize state using args.items
  const [items, setItems] = useState(args.items);

  // When a field updates, we update the corresponding item in state.
  // We rely on each item having a unique identifier,
  // which can be provided via the `fieldName` prop (or fall back to name).
  const updateState = (fieldName, newValue) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const identifier = item.props.fieldName || item.props.name;
        if (identifier === fieldName) {
          return {
            ...item,
            props: {
              ...item.props,
              value: newValue,
            },
          };
        }
        return item;
      })
    );
  };

  return <EditStackedList {...args} items={items} updateState={updateState} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      type: 'EditableTextField',
      props: {
        icon: UserIcon2,
        name: 'Username',
        fieldName: 'Username', // Unique identifier
        value: 'John Doe',
        onUpdate: (newValue) => console.log('Updated Username:', newValue),
      },
    },
    {
      type: 'SelectField',
      props: {
        icon: UserIcon2,
        name: 'Language',
        fieldName: 'Language', // Unique identifier
        value: 'English',
        options: ['English', 'Spanish', 'French'],
        onChange: (newValue) => console.log('Updated Language:', newValue),
      },
    },
    {
      type: 'ToggleField',
      props: {
        icon: UserIcon2,
        name: 'Enable Notifications',
        fieldName: 'Enable Notifications', // Unique identifier
        value: true,
        onChange: (newValue) =>
          console.log('Toggled Notifications:', newValue),
      },
    },
  ],
};
