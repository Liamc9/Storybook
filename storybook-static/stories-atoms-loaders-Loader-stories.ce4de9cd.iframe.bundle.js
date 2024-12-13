"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3680],{"./src/stories/atoms/loaders/Loader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const bounce=styled_components_browser_esm.keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,LoaderWrapper=styled_components_browser_esm.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: semi-transparent background */
  z-index: 9999; /* Ensure it stays on top of other elements */
`,Dot=styled_components_browser_esm.default.div`
  width: 16px; /* Equivalent to Tailwind's w-4 */
  height: 16px; /* Equivalent to Tailwind's h-4 */
  margin: 0 4px; /* Equivalent to Tailwind's gap-2 */
  background-color: #1d4ed8; /* Equivalent to Tailwind's bg-blue-700 */
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${props=>props.delay};
`,loaders_Loader=()=>react.createElement(LoaderWrapper,null,react.createElement("div",{style:{display:"flex",flexDirection:"row"}},react.createElement(Dot,{delay:"0s"}),react.createElement(Dot,{delay:"0.2s"}),react.createElement(Dot,{delay:"0.4s"}))),Loader_stories={title:"Atoms/Loaders/Loader",component:loaders_Loader,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `Loader` component is a simple and versatile loading indicator that can be used in various parts of an application to show that content or data is being loaded. It helps provide feedback to users, enhancing the user experience during loading states.\n\n### Features\n- **Minimal Design**: A clean and simple animation that fits into different UI designs.\n- **Reusable**: Can be used across multiple components and pages for consistency.\n- **Customizable**: Adaptable to various contexts where loading feedback is needed.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport Loader from './components/Loader';\n\nconst ExampleComponent = () => (\n  <div>\n    <Loader />\n  </div>\n);\n\nexport default ExampleComponent;\n```\n        "}}}},Default=()=>react.createElement(loaders_Loader,null),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Loader />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-loaders-Loader-stories.ce4de9cd.iframe.bundle.js.map