"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[642],{"./src/stories/molecules/navigation/SideNav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js"),_components_molecules_navigation_SideNav__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/navigation/SideNav.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Navigation/Computer/Sidebar/SideNav",component:_components_molecules_navigation_SideNav__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `SideNav` component is a vertical navigation bar typically used on the left or right side of web pages or applications. It allows users to navigate between different sections or pages, offering an organized structure for applications with multiple sections.\n\n### Features\n- **Responsive Layout**: Adjusts to various screen sizes, providing an optimal user experience on both desktop and mobile devices.\n- **Router Integration**: Works seamlessly with `react-router-dom` for client-side routing.\n- **Expandable Sections**: Can include nested links or collapsible sections for a comprehensive navigation experience.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport SideNav from './components/navigation/SideNav';\n\nconst ExampleComponent = () => (\n  <MemoryRouter>\n    <SideNav />\n  </MemoryRouter>\n);\n\nexport default ExampleComponent;\n```\n        "}}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Default=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_navigation_SideNav__WEBPACK_IMPORTED_MODULE_1__.A,null),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <SideNav />",...Default.parameters?.docs?.source}}}},"./src/components/molecules/navigation/SideNav.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleSideNav=()=>{setIsOpen(!isOpen)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(TopBar,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.MenuIcon,{className:"icon"}))),isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:toggleSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title,null,"My Portfolio"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.XIcon,{className:"icon"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/home"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.HomeIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Home")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/webdev"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.CodeIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Web Development")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/scriptlist"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ScriptIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Scripts and Algorithms")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/dataAnalytics"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.DataIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Data Analytics"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/settings"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.CogIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Settings")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:"/login"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.LoginIcon,{className:"icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Signup/Login")))))},Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`}}]);
//# sourceMappingURL=stories-molecules-navigation-SideNav-stories.124e807e.iframe.bundle.js.map