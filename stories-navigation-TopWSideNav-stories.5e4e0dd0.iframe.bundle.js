"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7502],{"./src/stories/navigation/TopWSideNav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSignInColor:()=>CustomSignInColor,Default:()=>Default,WithoutProfile:()=>WithoutProfile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopWSideNav_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),SideBar=__webpack_require__("./src/components/navigation/SideBar.jsx");function TopWSideNav(_ref){let{appName="AppName",signInColor="#000000",navLinks=[],username="John Doe",profilePic="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout,hideProfile=!1}=_ref;const[isSideNavOpen,setIsSideNavOpen]=(0,react.useState)(!1),toggleSideNav=()=>setIsSideNavOpen((prev=>!prev));return react.createElement(react.Fragment,null,react.createElement(NavBar,null,react.createElement(NavContent,null,react.createElement(DrawerButton,{onClick:toggleSideNav},react.createElement(Icons.MenuIcon,{className:"icon"})),react.createElement(BrandLink,{to:"/home"},appName),react.createElement(SignInLink,{to:"/login",signInColor},"Sign In"))),react.createElement(SideBar.A,{signInColor,navLinks,username,profilePic,onLogout,isSideNavOpen,toggleSideNav,closeSideNav:()=>setIsSideNavOpen(!1),hideProfile}))}const NavBar=styled_components_browser_esm.default.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,NavContent=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
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
  font-size: 1.5rem;
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
`,TopWSideNav_stories={title:"Navigation/TopNav/TopWSideNav",component:TopWSideNav,tags:["autodocs"],argTypes:{hideProfile:{control:"boolean"}},decorators:[Story=>react.createElement(dist.BrowserRouter,null,react.createElement("div",{style:{height:"100vh"}},react.createElement(Story,null)))],parameters:{docs:{description:{component:'\n### TopWSideNav Component\n\nThe `TopWSideNav` component combines both a top navigation bar and a side navigation drawer. It allows dynamic configuration of the app name, sign-in button color, navigation links, username, profile picture, and logout functionality.\n\n#### Props\n- `appName` (string): The name of the application displayed in the top navigation.\n- `signInColor` (string): The color of the sign-in button.\n- `navLinks` (array): An array of objects representing the navigation links.\n- `username` (string): The username displayed in the side navigation header.\n- `profilePic` (string): The URL of the profile picture displayed in the side navigation header.\n- `onLogout` (function): A callback function triggered when the "Log out" button is clicked.\n- `hideProfile` (boolean): If true, hides the profile section in the sidebar.\n\n#### Example Usage\n\n```jsx\n<TopWSideNav\n  appName="MyApp"\n  signInColor="#4caf50"\n  navLinks={[\n       { name: "Home", path: "/home", Icon: HomeIcon3, isFooter: false },\n        { name: "About", path: "/about", Icon: SearchIcon2, isFooter: false },\n        { name: "Settings", path: "/settings", Icon: CogIcon, isFooter: true },\n        { name: "Contact", path: "/contact", Icon: UserIcon3, isFooter: true },\n  ]}\n  username="Jane Smith"\n  profilePic="https://example.com/jane-smith.jpg"\n  onLogout={() => console.log("Logged out")}\n  hideProfile={false}\n/>\n```\n        '}}}},Template=args=>react.createElement(TopWSideNav,args),Default=Template.bind({});Default.args={appName:"MyApp",signInColor:"#000000",navLinks:[{name:"Home",path:"/home",Icon:Icons.HomeIcon3,isFooter:!1},{name:"About",path:"/about",Icon:Icons.SearchIcon2,isFooter:!1},{name:"Settings",path:"/settings",Icon:Icons.CogIcon,isFooter:!0},{name:"Contact",path:"/contact",Icon:Icons.UserIcon3,isFooter:!0}],username:"John Doe",profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout:()=>console.log("Logged out"),hideProfile:!1};const CustomSignInColor=Template.bind({});CustomSignInColor.args={appName:"CustomApp",signInColor:"#4caf50",navLinks:[{name:"Home",path:"/home",Icon:Icons.HomeIcon3,isFooter:!1},{name:"About",path:"/about",Icon:Icons.SearchIcon2,isFooter:!1},{name:"Settings",path:"/settings",Icon:Icons.CogIcon,isFooter:!0},{name:"Contact",path:"/contact",Icon:Icons.UserIcon3,isFooter:!0}],username:"Jane Smith",profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout:()=>console.log("Logged out"),hideProfile:!1};const WithoutProfile=Template.bind({});WithoutProfile.args={...Default.args,hideProfile:!0};const __namedExportsOrder=["Default","CustomSignInColor","WithoutProfile"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopWSideNav {...args} />",...Default.parameters?.docs?.source}}},CustomSignInColor.parameters={...CustomSignInColor.parameters,docs:{...CustomSignInColor.parameters?.docs,source:{originalSource:"args => <TopWSideNav {...args} />",...CustomSignInColor.parameters?.docs?.source}}},WithoutProfile.parameters={...WithoutProfile.parameters,docs:{...WithoutProfile.parameters?.docs,source:{originalSource:"args => <TopWSideNav {...args} />",...WithoutProfile.parameters?.docs?.source}}}},"./src/components/navigation/SideBar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SideBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function SideBar(_ref){let{navLinks=[],username,profilePic,onLogout,isSideNavOpen,closeSideNav,hideProfile=!1}=_ref;const mainLinks=navLinks.filter((link=>!link.isFooter)),footerLinks=navLinks.filter((link=>link.isFooter));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isSideNavOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:closeSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},!hideProfile&&username&&profilePic&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,{to:"/profile",onClick:closeSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileInfo,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Username,null,username),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewProfile,null,"View Profile"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,mainLinks.map(((_ref2,index)=>{let{name,path,Icon}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,footerLinks.map(((_ref3,index)=>{let{name,path,Icon}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))})),onLogout&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Log out")))))}styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
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
`;const Overlay=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`,SideNavContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${_ref4=>{let{isOpen}=_ref4;return isOpen?"translateX(0)":"translateX(-100%)"}};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${_ref5=>{let{isOpen}=_ref5;return isOpen?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"}};
  z-index: 50;
`,SideNavHeader=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`,ProfileImage=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`,ProfileInfo=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
`,Username=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`,ViewProfile=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 0.875rem;
  color: #718096;
`,NavLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav`
  flex-grow: 1;
  overflow-y: auto;
`,StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
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
`,FooterLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`,LogoutButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
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
`}}]);
//# sourceMappingURL=stories-navigation-TopWSideNav-stories.5e4e0dd0.iframe.bundle.js.map