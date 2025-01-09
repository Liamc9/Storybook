import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopWSideNav from '../../components/navigation/TopWSideNav';
import { MenuIcon, CogIcon, LoginIcon, HomeIcon3, UserIcon3, SearchIcon2 } from '../../components/Branding/icons/Icons';

export default {
  title: 'Navigation/TopNav/TopWSideNav',
  component: TopWSideNav,
  tags: ['autodocs'],
  argTypes: {
    hideProfile: { control: 'boolean' }, // Add control for hideProfile
  },
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
- \`hideProfile\` (boolean): If true, hides the profile section in the sidebar.

#### Example Usage

\`\`\`jsx
<TopWSideNav
  appName="MyApp"
  signInColor="#4caf50"
  navLinks={[
       { name: "Home", path: "/home", Icon: HomeIcon3, isFooter: false },
        { name: "About", path: "/about", Icon: SearchIcon2, isFooter: false },
        { name: "Settings", path: "/settings", Icon: CogIcon, isFooter: true },
        { name: "Contact", path: "/contact", Icon: UserIcon3, isFooter: true },
  ]}
  username="Jane Smith"
  profilePic="https://example.com/jane-smith.jpg"
  onLogout={() => console.log("Logged out")}
  hideProfile={false}
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
    { name: "Home", path: "/home", Icon: HomeIcon3, isFooter: false },
    { name: "About", path: "/about", Icon: SearchIcon2, isFooter: false },
    { name: "Settings", path: "/settings", Icon: CogIcon, isFooter: true },
    { name: "Contact", path: "/contact", Icon: UserIcon3, isFooter: true },
  ],
  username: 'John Doe',
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
  onLogout: () => console.log('Logged out'),
  hideProfile: false,
};

export const CustomSignInColor = Template.bind({});
CustomSignInColor.args = {
  appName: 'CustomApp',
  signInColor: '#4caf50', // Custom green sign-in button
  navLinks: [
       { name: "Home", path: "/home", Icon: HomeIcon3, isFooter: false },
        { name: "About", path: "/about", Icon: SearchIcon2, isFooter: false },
        { name: "Settings", path: "/settings", Icon: CogIcon, isFooter: true },
        { name: "Contact", path: "/contact", Icon: UserIcon3, isFooter: true },
  ],
  username: 'Jane Smith',
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
  onLogout: () => console.log('Logged out'),
  hideProfile: false,
};

export const WithoutProfile = Template.bind({});
WithoutProfile.args = {
  ...Default.args,
  hideProfile: true, // This story demonstrates hiding the profile section
};
