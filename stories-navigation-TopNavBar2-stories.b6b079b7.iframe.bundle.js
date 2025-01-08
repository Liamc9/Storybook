"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7189],{"./src/stories/navigation/TopNavBar2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottleActive:()=>BottleActive,Default:()=>Default,NoActiveTab:()=>NoActiveTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation/TopNavBar2.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/TopNav/TopNavBar2",component:_components_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `TopNavBar2` component is a navigation bar that typically appears at the top of a web page or application. It provides users with an organized way to navigate between different sections of a site or app, supporting active tab highlighting and customizable menu items.\n\n### Features\n- **Customizable Menu Items**: Accepts an array of items to display as navigation options.\n- **Active Tab Highlighting**: Supports specifying an active tab for visual feedback.\n- **Router Compatibility**: Integrates with `react-router-dom` for seamless navigation.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport TopNavBar2 from './components/TopNavBar2';\n\nconst ExampleComponent = () => (\n  <MemoryRouter>\n    <TopNavBar2 menuItems={['Home', 'About', 'Services', 'Contact']} activeTab=\"Services\" />\n  </MemoryRouter>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{menuItems:{control:"array",description:"Array of strings representing menu items."},activeTab:{control:"text",description:"Specifies which tab is currently active."}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__.A,args),Default=Template.bind({});Default.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:"Helmet"};const NoActiveTab=Template.bind({});NoActiveTab.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:""};const BottleActive=Template.bind({});BottleActive.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:"Bottle"};const __namedExportsOrder=["Default","NoActiveTab","BottleActive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...Default.parameters?.docs?.source}}},NoActiveTab.parameters={...NoActiveTab.parameters,docs:{...NoActiveTab.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...NoActiveTab.parameters?.docs?.source}}},BottleActive.parameters={...BottleActive.parameters,docs:{...BottleActive.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...BottleActive.parameters?.docs?.source}}}},"./src/components/navigation/SideBar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SideBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function SideBar(_ref){let{navLinks=[],username,profilePic,onLogout,isSideNavOpen,closeSideNav,hideProfile=!1}=_ref;const mainLinks=navLinks.filter((link=>!link.isFooter)),footerLinks=navLinks.filter((link=>link.isFooter));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isSideNavOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:closeSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},!hideProfile&&username&&profilePic&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,{to:"/profile",onClick:closeSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileInfo,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Username,null,username),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewProfile,null,"View Profile"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,mainLinks.map(((_ref2,index)=>{let{name,path,Icon}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,footerLinks.map(((_ref3,index)=>{let{name,path,Icon}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))})),onLogout&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Log out")))))}styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav`
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
`},"./src/components/navigation/TopNavBar2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/index.js"),_SideBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation/SideBar.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const NavBarContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
  padding: 0 16px;
`,DrawerButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }

`,Logo=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img`
  width: 116px;
  margin-right: 16px;
`,MenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`,MenuButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  color: ${props=>props.active?"blue":"black"};
  border-bottom: ${props=>props.active?"2px solid blue":"none"};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`,HeaderIcons=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`,SignInButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding: 8px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:focus {
    transform: translateY(2px);
  }
`,TopNavBar2=_ref=>{let{menuItems,activeTab:propActiveTab,onTabClick}=_ref;const[activeTab,setActiveTab]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propActiveTab),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Zp)(),[isSideNavOpen,setIsSideNavOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleSideNav=()=>setIsSideNavOpen((prev=>!prev));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setActiveTab(propActiveTab)}),[propActiveTab]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBarContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerButton,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.MenuIcon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Logo,{src:"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993",alt:"Closca Logo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuContainer,null,menuItems.map((item=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuButton,{key:item,onClick:()=>(item=>{setActiveTab(item),onTabClick&&onTabClick(item)})(item),active:item===activeTab},item)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderIcons,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton,{onClick:()=>{navigate("/login")}},"Sign In"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_1__.A,{navLinks:[{Icon:()=>{},isFooter:!1,name:"Home",path:"/home"},{Icon:()=>{},isFooter:!1,name:"About",path:"/about"},{Icon:()=>{},isFooter:!0,name:"Settings",path:"/settings"},{Icon:()=>{},isFooter:!0,name:"Contact",path:"/contact"}],isSideNavOpen,toggleSideNav,closeSideNav:()=>setIsSideNavOpen(!1),hideProfile:!1,onLogout:()=>{},profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",signInColor:"#ff4500",username:"Jane Doe"}))};TopNavBar2.defaultProps={activeTab:"",onTabClick:null};const __WEBPACK_DEFAULT_EXPORT__=TopNavBar2}}]);
//# sourceMappingURL=stories-navigation-TopNavBar2-stories.b6b079b7.iframe.bundle.js.map