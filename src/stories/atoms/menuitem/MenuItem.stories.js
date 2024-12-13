import React from 'react';
import MenuItem from '../../../components/atoms/menuitem/MenuItem';
import { BrowserRouter } from 'react-router-dom';
import { UsersIcon, NotificationsIcon } from '../../../components/Branding/icons/Icons';

export default {
  title: 'Atoms/MenuItem/MenuItem',
  component: MenuItem,
  tags: ['atoms', 'autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# MenuItem

The \`MenuItem\` component is used to render a menu item with an optional icon (from the icons file) and a navigation link.

## Usage

\`\`\`jsx
import MenuItem from './MenuItem';
import { UsersIcon } from './icons/Icons';

<MenuItem text="Profile" link="/profile" />;
<MenuItem
  text="Notifications"
  icon={UsersIcon}
  link="/notifications"
/>;
\`\`\`

## Props

- \`icon\` (optional): A React component from the icons file.
- \`text\` (required): A string that represents the menu item's text.
- \`link\` (required): A string that specifies the navigation link.

## Stories

### Default

A basic menu item with text and a link.

### With Icon

A menu item that includes an optional icon along with text and a link.
        `,
      },
    },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <MenuItem {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Profile',
  icon: UsersIcon,
  link: '/profile',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Notifications',
  icon: NotificationsIcon,
  link: '/notifications',
};
