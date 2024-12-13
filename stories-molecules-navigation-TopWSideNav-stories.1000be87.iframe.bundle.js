"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6694],{"./src/stories/molecules/navigation/TopWSideNav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSignInColor:()=>CustomSignInColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopWSideNav_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function TopWSideNav(_ref){let{appName="AppName",signInColor="#000000",navLinks=[],username="John Doe",profilePic="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout}=_ref;const[isSideNavOpen,setIsSideNavOpen]=(0,react.useState)(!1),closeSideNav=()=>setIsSideNavOpen(!1);return react.createElement(react.Fragment,null,react.createElement(NavBar,null,react.createElement(NavContent,null,react.createElement(DrawerButton,{onClick:()=>setIsSideNavOpen(!isSideNavOpen)},react.createElement(Icons.MenuIcon,{className:"icon"})),react.createElement(BrandLink,{to:"/home"},appName),react.createElement(SignInLink,{to:"/login",signInColor},"Sign In"))),isSideNavOpen&&react.createElement(Overlay,{onClick:closeSideNav}),react.createElement(SideNavContainer,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},react.createElement(SideNavHeader,{to:"/profile",onClick:closeSideNav},react.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react.createElement(ProfileInfo,null,react.createElement(Username,null,username),react.createElement(ViewProfile,null,"View Profile"))),react.createElement(NavLinks,null,navLinks.map(((_ref2,index)=>{let{name,path,Icon}=_ref2;return react.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react.createElement(IconWrapper,null,react.createElement(Icon,{className:"icon"})),react.createElement("span",null,name))}))),react.createElement(FooterLinks,null,react.createElement(StyledLink,{to:"/settings",onClick:closeSideNav},react.createElement(IconWrapper,null,react.createElement(Icons.CogIcon,{className:"icon"})),react.createElement("span",null,"Settings")),react.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react.createElement(IconWrapper,null,react.createElement(Icons.LoginIcon,{className:"icon"})),react.createElement("span",null,"Log out")))))}const NavBar=styled_components_browser_esm.default.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,NavContent=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem; /* Reduced height */
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem; /* Reduced height */
  }
`,DrawerButton=styled_components_browser_esm.default.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,BrandLink=(0,styled_components_browser_esm.default)(dist.Link)`
  font-size: 1.5rem; /* Adjusted for reduced height */
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,SignInLink=(0,styled_components_browser_esm.default)(dist.Link)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`,Overlay=styled_components_browser_esm.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`,SideNavContainer=styled_components_browser_esm.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${_ref3=>{let{isOpen}=_ref3;return isOpen?"translateX(0)":"translateX(-100%)"}};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${_ref4=>{let{isOpen}=_ref4;return isOpen?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"}};
  z-index: 50;
`,SideNavHeader=(0,styled_components_browser_esm.default)(dist.Link)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`,ProfileImage=styled_components_browser_esm.default.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`,ProfileInfo=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,Username=styled_components_browser_esm.default.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`,ViewProfile=styled_components_browser_esm.default.div`
  font-size: 0.875rem;
  color: #718096;
`,NavLinks=styled_components_browser_esm.default.nav`
  flex-grow: 1;
  overflow-y: auto;
`,StyledLink=(0,styled_components_browser_esm.default)(dist.Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #2d3748;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`,FooterLinks=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`,IconWrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`,LogoutButton=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #2d3748;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  text-align: left;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`,TopWSideNav_stories={title:"Molecules/Navigation/Mobile/NavBar/TopWSideNav",component:TopWSideNav,tags:["autodocs"],decorators:[Story=>react.createElement(dist.BrowserRouter,null,react.createElement("div",{style:{height:"100vh"}},react.createElement(Story,null)))],parameters:{docs:{description:{component:'\n### TopWSideNav Component\n\nThe `TopWSideNav` component combines both a top navigation bar and a side navigation drawer. It allows dynamic configuration of the app name, sign-in button color, navigation links, username, profile picture, and logout functionality.\n\n#### Props\n- `appName` (string): The name of the application displayed in the top navigation.\n- `signInColor` (string): The color of the sign-in button.\n- `navLinks` (array): An array of objects representing the navigation links.\n- `username` (string): The username displayed in the side navigation header.\n- `profilePic` (string): The URL of the profile picture displayed in the side navigation header.\n- `onLogout` (function): A callback function triggered when the "Log out" button is clicked.\n\n#### Example Usage\n\n```jsx\n<TopWSideNav\n  appName="MyApp"\n  signInColor="#4caf50"\n  navLinks={[\n    { name: "Home", path: "/home", Icon: MenuIcon },\n    { name: "Web Development", path: "/webdev", Icon: CogIcon },\n    { name: "Analytics", path: "/analytics", Icon: LoginIcon },\n  ]}\n  username="Jane Smith"\n  profilePic="https://example.com/jane-smith.jpg"\n  onLogout={() => console.log("Logged out")}\n/>\n```\n'}}}},Template=args=>react.createElement(TopWSideNav,args),Default=Template.bind({});Default.args={appName:"MyApp",signInColor:"#000000",navLinks:[{name:"Home",path:"/home",Icon:Icons.MenuIcon},{name:"Web Development",path:"/webdev",Icon:Icons.CogIcon},{name:"Analytics",path:"/analytics",Icon:Icons.LoginIcon}],username:"John Doe",profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout:()=>console.log("Logged out")};const CustomSignInColor=Template.bind({});CustomSignInColor.args={appName:"CustomApp",signInColor:"#4caf50",navLinks:[{name:"Dashboard",path:"/dashboard",Icon:Icons.MenuIcon},{name:"Settings",path:"/settings",Icon:Icons.CogIcon},{name:"Profile",path:"/profile",Icon:Icons.LoginIcon}],username:"Jane Smith",profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout:()=>console.log("Logged out")};const __namedExportsOrder=["Default","CustomSignInColor"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopWSideNav {...args} />",...Default.parameters?.docs?.source}}},CustomSignInColor.parameters={...CustomSignInColor.parameters,docs:{...CustomSignInColor.parameters?.docs,source:{originalSource:"args => <TopWSideNav {...args} />",...CustomSignInColor.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-molecules-navigation-TopWSideNav-stories.1000be87.iframe.bundle.js.map