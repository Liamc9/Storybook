import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopWSideNav from '../../../components/navigation/TopWSideNav';
import { MenuIcon, CogIcon, LoginIcon } from '../../../components/icons/Icons';

export default {
  title: 'Molecules/Navigation/Mobile/NavBar/TopWSideNav',
  component: TopWSideNav,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </Router>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
### TopWSideNav Component

The \`TopWSideNav\` component combines both a top navigation bar and a side navigation drawer. It allows dynamic configuration of the app name, sign-in button color, navigation links, username, profile picture, and logout functionality.

#### Props
- \`appName\` (string): The name of the application displayed in the top navigation.
- \`signInColor\` (string): The color of the sign-in button.
- \`navLinks\` (array): An array of objects representing the navigation links.
- \`username\` (string): The username displayed in the side navigation header.
- \`profilePic\` (string): The URL of the profile picture displayed in the side navigation header.
- \`onLogout\` (function): A callback function triggered when the "Log out" button is clicked.

#### Example Usage

\`\`\`jsx
<TopWSideNav
  appName="MyApp"
  signInColor="#4caf50"
  navLinks={[
    { name: "Home", path: "/home", Icon: MenuIcon },
    { name: "Web Development", path: "/webdev", Icon: CogIcon },
    { name: "Analytics", path: "/analytics", Icon: LoginIcon },
  ]}
  username="Jane Smith"
  profilePic="https://example.com/jane-smith.jpg"
  onLogout={() => console.log("Logged out")}
/>
\`\`\`
`,
      },
    },
  },
};

const Template = (args) => <TopWSideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  appName: 'MyApp',
  signInColor: '#000000',
  navLinks: [
    { name: 'Home', path: '/home', Icon: MenuIcon },
    { name: 'Web Development', path: '/webdev', Icon: CogIcon },
    { name: 'Analytics', path: '/analytics', Icon: LoginIcon },
  ],
  username: 'John Doe',
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
  onLogout: () => console.log('Logged out'),
};

export const CustomSignInColor = Template.bind({});
CustomSignInColor.args = {
  appName: 'CustomApp',
  signInColor: '#4caf50', // Custom green sign-in button
  navLinks: [
    { name: 'Dashboard', path: '/dashboard', Icon: MenuIcon },
    { name: 'Settings', path: '/settings', Icon: CogIcon },
    { name: 'Profile', path: '/profile', Icon: LoginIcon },
  ],
  username: 'Jane Smith',
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
  onLogout: () => console.log('Logged out'),
};
