"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8250],{"./src/stories/navigation/BottomNav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BottomNav_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const BottomNavContainer=styled_components_browser_esm.default.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 40;
`,NavItem=(0,styled_components_browser_esm.default)(dist.NavLink)`
  position: relative;
  color: #6b7280;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;

  &.active {
    color: ${_ref=>{let{activeColor}=_ref;return activeColor||"#000"}};
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 0.25rem;
  }
`,NotificationDot=styled_components_browser_esm.default.span`
  position: absolute;
  top: 4px;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
`,navigation_BottomNav=_ref2=>{let{items,activeColor}=_ref2;return react.createElement(BottomNavContainer,null,items.map(((_ref3,index)=>{let{text,icon:Icon,path,hasNotification}=_ref3;return react.createElement(NavItem,{key:index,to:path,activeColor},react.createElement(Icon,null),hasNotification&&react.createElement(NotificationDot,null),text)})))};var Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const navItems=[{text:"Home",icon:Icons.HomeIcon,path:"/home",hasNotification:!0},{text:"Search",icon:Icons.SearchIcon2,path:"/search",hasNotification:!1},{text:"Profile",icon:Icons.UserIcon2,path:"/profile",hasNotification:!0}],BottomNav_stories={title:"Navigation/BottomNav/BottomNav",component:navigation_BottomNav,tags:["autodocs"],parameters:{docs:{description:{component:'\n### BottomNav\n\nThe `BottomNav` component displays a bottom navigation bar with optional notification indicators.\n\n#### Props\n\n- **items**: An array of objects representing navigation items.\n  - `text` (string): The label for the navigation item.\n  - `icon` (React Component): The icon for the navigation item.\n  - `path` (string): The route path for the navigation item.\n  - `hasNotification` (boolean): Indicates whether a notification dot should be displayed.\n- **activeColor** (string, optional): Color for the active navigation item. Defaults to `#a855f7`.\n\n#### Example Usage\n\n```jsx\nimport React from "react";\nimport BottomNav from "./components/navigation/BottomNav";\nimport { HomeIcon, SearchIcon2, UserIcon2 } from "./components/icons/Icons";\n\nconst navItems = [\n  { text: "Home", icon: HomeIcon, path: "/home", hasNotification: true },\n  { text: "Search", icon: SearchIcon2, path: "/search", hasNotification: false },\n  { text: "Profile", icon: UserIcon2, path: "/profile", hasNotification: true },\n];\n\nexport default function App() {\n  return <BottomNav items={navItems} activeColor="#FF5733" />;\n}\n```\n        '}}},argTypes:{items:{control:!1},activeColor:{control:"color"}}},Default=(args=>react.createElement(dist.BrowserRouter,null,react.createElement("div",{style:{minHeight:"100vh",paddingBottom:"4rem"}},react.createElement(navigation_BottomNav,args)))).bind({});Default.args={items:navItems,activeColor:"#FF5733"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Router>\r\n    <div style={{\n    minHeight: "100vh",\n    paddingBottom: "4rem"\n  }}>\r\n      <BottomNav {...args} />\r\n    </div>\r\n  </Router>',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-navigation-BottomNav-stories.22b4f00c.iframe.bundle.js.map