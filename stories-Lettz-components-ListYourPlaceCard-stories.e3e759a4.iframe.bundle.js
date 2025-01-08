"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4602],{"./src/stories/Lettz/components/ListYourPlaceCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Unauthenticated:()=>Unauthenticated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListYourPlaceCard_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const Card=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`,Header=styled_components_browser_esm.default.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`,LogoText=styled_components_browser_esm.default.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`,StyledLettzIcon=(0,styled_components_browser_esm.default)(Icons.LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
`,IconWrapper=styled_components_browser_esm.default.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`,Text=styled_components_browser_esm.default.p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`,Button=styled_components_browser_esm.default.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`,components_ListYourPlaceCard=_ref=>{let{onButtonClick,currentUser}=_ref;const navigate=(0,dist.Zp)();return react.createElement(Card,null,react.createElement(Header,null,react.createElement(StyledLettzIcon,null)," ",react.createElement(LogoText,null,"Lettz")),react.createElement(IconWrapper,null,react.createElement("span",{role:"img","aria-label":"icon"},"🏡")),react.createElement(Text,null,"Get started by listing your place today!"),react.createElement(Button,{onClick:()=>{currentUser?onButtonClick():navigate("/login",{state:{from:"/listing"}})}},"List Your Place"))};var react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const ListYourPlaceCard_stories={title:"Projects/Lettz/Components/ListYourPlace",tags:["autodocs"],component:components_ListYourPlaceCard,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `ListYourPlace` component is a reusable card that encourages users to list their property. It includes a header with a logo, an icon, a descriptive text, and a call-to-action button. The component adapts its behavior based on whether the user is authenticated.\n\n### Features\n- **Dynamic Navigation**: Redirects unauthenticated users to the login page.\n- **Interactive Button**: Triggers a callback function when clicked.\n- **Responsive Design**: Adapts to different screen sizes.\n\n### Usage\n\n```jsx\nimport React from "react";\nimport ListYourPlace from "../components/ListYourPlace";\n\nconst ExampleComponent = () => {\n  const currentUser = { uid: "user1", name: "Alice" };\n\n  const handleButtonClick = () => {\n    console.log("Button clicked! Redirecting to the listing page...");\n  };\n\n  return (\n    <ListYourPlace\n      onButtonClick={handleButtonClick}\n      currentUser={currentUser}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **onButtonClick**: Callback function triggered when the button is clicked.\n- **currentUser**: Object representing the authenticated user. If not provided, the component redirects to the login page.\n        '}}},argTypes:{onButtonClick:{action:"button clicked"},currentUser:{control:"object"}}},Template=args=>react.createElement(react_router_dom_dist.BrowserRouter,null,react.createElement(components_ListYourPlaceCard,args)),Default=Template.bind({});Default.args={onButtonClick:()=>{console.log("Listing your place!")},currentUser:{uid:"user1",name:"Alice"}};const Unauthenticated=Template.bind({});Unauthenticated.args={onButtonClick:()=>{console.log("Redirecting to login...")},currentUser:null};const __namedExportsOrder=["Default","Unauthenticated"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter><ListYourPlaceCard {...args} /></BrowserRouter>",...Default.parameters?.docs?.source}}},Unauthenticated.parameters={...Unauthenticated.parameters,docs:{...Unauthenticated.parameters?.docs,source:{originalSource:"args => <BrowserRouter><ListYourPlaceCard {...args} /></BrowserRouter>",...Unauthenticated.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Lettz-components-ListYourPlaceCard-stories.e3e759a4.iframe.bundle.js.map