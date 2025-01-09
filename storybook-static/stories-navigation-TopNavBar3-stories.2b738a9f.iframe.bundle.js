"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8416],{"./src/stories/navigation/TopNavBar3.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopNavBar3_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const Container=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${props=>props.backgroundColor||"#000"};
color: ${props=>props.color||"#fff"};
  height: 50px;
`,LeftSection=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .svg {
  height: 24px;
  width: 24px;
  }
`,CenterSection=styled_components_browser_esm.default.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`,RightSection=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,TopNavBar3=_ref=>{let{title,backgroundColor,color}=_ref;const navigate=(0,dist.Zp)();return react.createElement(Container,{backgroundColor,color},react.createElement(LeftSection,{onClick:()=>{navigate(-1)}},react.createElement(Icons.ChevronLeftIcon,{className:"svg"})),react.createElement(CenterSection,null,title),react.createElement(RightSection,null))};TopNavBar3.defaultProps={backgroundColor:"#000"};const navigation_TopNavBar3=TopNavBar3;var react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const TopNavBar3_stories={title:"Navigation/TopNav/TopNavBar3",component:navigation_TopNavBar3,tags:["autodocs"]},Template=args=>react.createElement(react_router_dom_dist.BrowserRouter,null,react.createElement(navigation_TopNavBar3,args)),Primary=Template.bind({});Primary.args={title:"Cusco",backgroundColor:"#ffe500",color:"#fff"};const Secondary=Template.bind({});Secondary.args={title:"My Page",backgroundColor:"#2980b9",color:"#fff"};const __namedExportsOrder=["Primary","Secondary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <BrowserRouter><TopNavBar3 {...args} /></BrowserRouter>",...Primary.parameters?.docs?.source},description:{story:'Primary story: demonstrates a red nav bar with the title "Cusco".',...Primary.parameters?.docs?.description}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <BrowserRouter><TopNavBar3 {...args} /></BrowserRouter>",...Secondary.parameters?.docs?.source},description:{story:"Secondary story: demonstrates a blue nav bar with a different title.",...Secondary.parameters?.docs?.description}}}}}]);
//# sourceMappingURL=stories-navigation-TopNavBar3-stories.2b738a9f.iframe.bundle.js.map