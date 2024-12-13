"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4796],{"./src/stories/molecules/navigation/BottomNav2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BottomNav2_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const MenuContainer=styled_components_browser_esm.default.div`
  --duration: 0.45s;
  --cubic: cubic-bezier(0.4, 0, 0.2, 1);
  --color-1: #d5dadd;
  --color-2: #b99976;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff; /* Optional: Change background color to fit the design */
  z-index: 1000; /* Ensures it's above other content */
`,Menu=styled_components_browser_esm.default.menu`
  margin: 0;
  width: 100%;
  display: flex;
  height: 7rem;
  user-select: none;
  position: relative;
  align-items: center;
  padding: 0 1.9em 2em;
  justify-content: center;
  max-width: 100%; /* Ensures it doesn't overflow */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds a shadow at the top */
`,MenuItem=styled_components_browser_esm.default.button`
  all: unset;
  flex-grow: 1;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  padding-top: 0.5em;
  position: relative;
  align-items: center;
  color: var(--color-1);
  justify-content: center;
  transition: flex-grow var(--duration) var(--cubic);

  &.active {
    flex-grow: 2.7;
    color: var(--color-2);
  }

  &::after {
    left: 0;
    bottom: 0;
    content: " ";
    height: 0.25em;
    position: absolute;
    border-radius: 2em;
    transform-origin: left center;
    background-color: currentColor;
    width: calc(var(--lineWidth) + 5px);
    transform: translate3d(3em, 0, 0) scaleX(0);
    transition: transform calc(var(--duration) + 0.2s) var(--cubic);
  }

  &.active::after {
    transform: translate3d(6.3em, 0, 0) scaleX(1);
    transition: transform var(--duration) var(--cubic);
  }
  &.active::before {
  transform: scale(1);
}

  &.active .menu__icon {
    transform: translate3d(-95%, 0, 0);
  }
`,MenuText=styled_components_browser_esm.default.strong`
  left: 4.15em;
  font-size: 1.5em;
  position: absolute;
  text-transform: capitalize;
  letter-spacing: 0.01em;
  transform: translate3d(0, 109%, 0);
  transition: transform calc(var(--duration) / 3.7);

&.active {
  transform: translate3d(0, 0, 0);
  transition: transform calc(var(--duration) / 1.5);
}
`,Icon=styled_components_browser_esm.default.div`
  font-size: 1.05em;
  stroke: currentColor;
  transition: transform var(--duration) var(--cubic);
  fill: none;
  width: 2.5em;
  height: 2.5em;
  display: block;
  stroke-width: 15;
  stroke-miterlimit: 10;
`,navigation_BottomNav2=_ref=>{let{items}=_ref;const[activeIndex,setActiveIndex]=(0,react.useState)(0),textRefs=(0,react.useRef)([]),[lineWidths,setLineWidths]=(0,react.useState)([]),navigate=(0,dist.Zp)();(0,react.useEffect)((()=>{const updateLineWidths=()=>{const widths=textRefs.current.map((text=>text?text.offsetWidth:0));setLineWidths(widths)};return updateLineWidths(),window.addEventListener("resize",updateLineWidths),()=>{window.removeEventListener("resize",updateLineWidths)}}),[items]);return react.createElement(react.Fragment,null,react.createElement(MenuContainer,null,react.createElement(Menu,null,items.map(((item,index)=>react.createElement(MenuItem,{key:index,className:activeIndex===index?"active":"",onClick:()=>(index=>{index!==activeIndex&&(setActiveIndex(index),items[index].path&&navigate(items[index].path))})(index),style:{"--lineWidth":`${lineWidths[index]||0}px`}},react.createElement(Icon,{className:"menu__icon"},react.cloneElement(item.icon,{className:`${item.icon.props.className||""} ${activeIndex===index?"active":""}`})),react.createElement(MenuText,{className:activeIndex===index?"active":"",ref:el=>textRefs.current[index]=el},item.text)))))),react.createElement("style",null,"\n        .icon {\n          width: 2.5em;\n          height: 2.5em;\n        }\n      "))};var Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const BottomNav2_stories={title:"Molecules/Navigation/Mobile/NavBar/BottomNav2",component:navigation_BottomNav2,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `BottomNav2` component is a flexible and customizable navigation element designed to provide quick access to different sections of an application. It supports navigation with icons and text labels, making it suitable for mobile and web applications.\n\n### Features\n- **Icon and Text Integration**: Displays both icons and text for enhanced navigation cues.\n- **Router Integration**: Works seamlessly with `react-router-dom` for client-side navigation.\n- **Customizable Tabs**: Allows the addition of various items with unique icons and paths.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { BrowserRouter } from 'react-router-dom';\nimport BottomNav2 from './components/navigation/BottomNav2';\nimport { HomeIcon2, StrategyIcon, PeriodIcon, SecurityIcon, SettingsIcon } from './assets/Icons';\n\nconst ExampleComponent = () => (\n  <BrowserRouter>\n    <BottomNav2\n      items={[\n        { text: 'home', icon: <HomeIcon2 />, path: '/home' },\n        { text: 'strategy', icon: <StrategyIcon />, path: '/strategy' },\n        { text: 'period', icon: <PeriodIcon />, path: '/period' },\n        { text: 'security', icon: <SecurityIcon />, path: '/security' },\n        { text: 'settings', icon: <SettingsIcon />, path: '/settings' },\n      ]}\n    />\n  </BrowserRouter>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{items:{control:"object",description:"Array of tab items, each with text, icon, and path properties."}}},Default=(args=>react.createElement(react_router_dom_dist.BrowserRouter,null,react.createElement(navigation_BottomNav2,args))).bind({});Default.args={items:[{text:"home",icon:react.createElement(Icons.HomeIcon2,null),path:"/home"},{text:"strategy",icon:react.createElement(Icons.StrategyIcon,null),path:"/strategy"},{text:"period",icon:react.createElement(Icons.PeriodIcon,null),path:"/period"},{text:"security",icon:react.createElement(Icons.SecurityIcon,null),path:"/security"},{text:"settings",icon:react.createElement(Icons.SettingsIcon,null),path:"/settings"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter>\r\n    <BottomNav2 {...args} />\r\n  </BrowserRouter>",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-molecules-navigation-BottomNav2-stories.85574189.iframe.bundle.js.map