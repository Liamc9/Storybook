"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[380],{"./src/stories/navigation/NavBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const NavBar=styled_components_browser_esm.Ay.nav`
  position: relative; /* Ensures the navbar is part of the document flow */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,NavContent=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`,BrandLink=(0,styled_components_browser_esm.Ay)(react_router_dom_dist.N_)`
  font-size: 1.875rem; /* Text size: 30px */
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`,SignInLink=(0,styled_components_browser_esm.Ay)(react_router_dom_dist.N_)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor||"#000000"};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9; /* Default hover color */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;function TopNavBar(_ref){let{appName="AppName",signInColor="#000000"}=_ref;return react.createElement(NavBar,null,react.createElement(NavContent,null,react.createElement(BrandLink,{to:"/home"},appName),react.createElement(SignInLink,{to:"/login",signInColor},"Sign In")))}const NavBar_stories={title:"Navigation/TopNav/TopNavBar",component:TopNavBar,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `TopNavBar` component is a navigation bar typically used at the top of web pages or applications. It provides quick access to key sections or functions and supports various navigation links or elements for a comprehensive user experience.\n\n### Features\n- **Responsive Design**: Adapts to different screen sizes, ensuring usability on both desktop and mobile devices.\n- **Router Integration**: Works with `react-router-dom` for seamless client-side navigation.\n- **Customizable Structure**: Can include links, buttons, or other interactive elements as needed.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { MemoryRouter } from 'react-router-dom';\nimport TopNavBar from './components/navigation/TopNavBar';\n\nconst ExampleComponent = () => (\n  <MemoryRouter>\n    <TopNavBar />\n  </MemoryRouter>\n);\n\nexport default ExampleComponent;\n```\n        "}}},decorators:[Story=>react.createElement(dist.fS,null,react.createElement("div",{style:{paddingBottom:"50px"}},react.createElement(Story,null)))]},Default=()=>react.createElement(TopNavBar,null),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <TopNavBar />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-navigation-NavBar-stories.c030a686.iframe.bundle.js.map