"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7085],{"./src/stories/molecules/navigation/TopNavBar2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottleActive:()=>BottleActive,Default:()=>Default,NoActiveTab:()=>NoActiveTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_molecules_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/navigation/TopNavBar2.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Navigation/Computer/NavBar/TopNavBar2",component:_components_molecules_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `TopNavBar2` component is a navigation bar that typically appears at the top of a web page or application. It provides users with an organized way to navigate between different sections of a site or app, supporting active tab highlighting and customizable menu items.\n\n### Features\n- **Customizable Menu Items**: Accepts an array of items to display as navigation options.\n- **Active Tab Highlighting**: Supports specifying an active tab for visual feedback.\n- **Router Compatibility**: Integrates with `react-router-dom` for seamless navigation.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport TopNavBar2 from './components/TopNavBar2';\n\nconst ExampleComponent = () => (\n  <MemoryRouter>\n    <TopNavBar2 menuItems={['Home', 'About', 'Services', 'Contact']} activeTab=\"Services\" />\n  </MemoryRouter>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{menuItems:{control:"array",description:"Array of strings representing menu items."},activeTab:{control:"text",description:"Specifies which tab is currently active."}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_navigation_TopNavBar2__WEBPACK_IMPORTED_MODULE_1__.A,args),Default=Template.bind({});Default.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:"Helmet"};const NoActiveTab=Template.bind({});NoActiveTab.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:""};const BottleActive=Template.bind({});BottleActive.args={menuItems:["Mask","Helmet","Bottle","Accessories"],activeTab:"Bottle"};const __namedExportsOrder=["Default","NoActiveTab","BottleActive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...Default.parameters?.docs?.source}}},NoActiveTab.parameters={...NoActiveTab.parameters,docs:{...NoActiveTab.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...NoActiveTab.parameters?.docs?.source}}},BottleActive.parameters={...BottleActive.parameters,docs:{...BottleActive.parameters?.docs,source:{originalSource:"args => <TopNavBar2 {...args} />",...BottleActive.parameters?.docs?.source}}}},"./src/components/molecules/navigation/SideNav.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleSideNav=()=>{setIsOpen(!isOpen)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(TopBar,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.MenuIcon,{className:"icon"}))),isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:toggleSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title,null,"My Portfolio"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.XIcon,{className:"icon"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/home"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.HomeIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Home")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/webdev"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.CodeIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Web Development")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/scriptlist"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ScriptIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Scripts and Algorithms")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/dataAnalytics"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.DataIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Data Analytics"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/settings"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.CogIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Settings")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/login"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.LoginIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Signup/Login")))))},Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
`,TopBar=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 50;
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.button`
  background: none;
  border: none;
  cursor: pointer;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`,Overlay=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  transition: opacity 0.3s ease-in-out;
`,SideNavContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #2d3748;
  color: #edf2f7;
  transform: ${_ref=>{let{isOpen}=_ref;return isOpen?"translateX(0)":"translateX(-100%)"}};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${_ref2=>{let{isOpen}=_ref2;return isOpen?"0 2px 8px rgba(0, 0, 0, 0.5)":"none"}};
  z-index: 50;
`,SideNavHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid #4a5568;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h1`
  font-size: 1.875rem;
  font-weight: 600;
`,NavLinks=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.nav`
  flex-grow: 1;
  overflow-y: auto;
`,FooterLinks=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-top: 1px solid #4a5568;
`,StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  color: #e2e8f0;
  text-decoration: none;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: rgba(74, 85, 104, 0.25);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
  }
`},"./src/components/molecules/navigation/TopNavBar2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),_SideNav__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/navigation/SideNav.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const NavBarContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  margin-left: -16px;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
`,Logo=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.img`
  width: 116px;
  margin-left: 60px;
`,MenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`,MenuButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.button`
  color: ${props=>props.active?"blue":"black"};
  border-bottom: ${props=>props.active?"2px solid blue":"none"};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`,HeaderIcons=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  margin-left: auto;
  margin-right: 8px;
  display: flex;
  align-items: center;
`,SignInButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.button`
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
`,TopNavBar2=_ref=>{let{menuItems,activeTab:propActiveTab,onTabClick}=_ref;const[activeTab,setActiveTab]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propActiveTab),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Zp)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setActiveTab(propActiveTab)}),[propActiveTab]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBarContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNav__WEBPACK_IMPORTED_MODULE_1__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Logo,{src:"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993",alt:"Closca Logo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuContainer,null,menuItems.map((item=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuButton,{key:item,onClick:()=>(item=>{setActiveTab(item),onTabClick&&onTabClick(item)})(item),active:item===activeTab},item)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderIcons,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton,{onClick:()=>{navigate("/login")}},"Sign In")))};TopNavBar2.defaultProps={activeTab:"",onTabClick:null};const __WEBPACK_DEFAULT_EXPORT__=TopNavBar2}}]);
//# sourceMappingURL=stories-molecules-navigation-TopNavBar2-stories.bee32a06.iframe.bundle.js.map