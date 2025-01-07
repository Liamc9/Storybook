"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3899],{"./src/stories/Lettz/components/LettzSearchButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSearch:()=>CustomSearch,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LettzSearchButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledButton=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px; /* Ensure sufficient height */
  background-color: #ffffff; /* White background */
  border: 1px solid #dcdcdc;
  border-radius: 10px; /* Reduced border radius */
  font-size: 16px;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle outer shadow */

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Slightly deeper shadow on hover */
  }

  &:focus {
    outline: none;
  }
`,ContentContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,SectionLeft=styled_components_browser_esm.default.div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #000;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`,SectionRight=styled_components_browser_esm.default.div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #666;
  font-weight: 500;
    font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`,Divider=styled_components_browser_esm.default.div`
  width: 2px; /* Thin vertical divider */
  height: 30px; /* Height relative to the button */
  background-color: #888; /* Visible color */
  display: block; /* Ensures it is rendered as a visible block */
`,components_LettzSearchButton=_ref=>{let{onClick,place="Anywhere",startDate="Anytime",endDate=""}=_ref;return react.createElement(StyledButton,{onClick},react.createElement(ContentContainer,null,react.createElement(SectionLeft,null,place),react.createElement(Divider,null," ")," ",react.createElement(SectionRight,null,startDate,endDate&&` - ${endDate}`)))},LettzSearchButton_stories={title:"Lettz/Components/LettzSearchButton",component:components_LettzSearchButton,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `LettzSearchButton` component provides a clickable button for initiating searches, displaying selected place and date range details in a structured format. The component is styled for flexibility and a clean user experience.\n\n### Features\n- **Dynamic Content**: Displays selected place and date range.\n- **Interactive Design**: Highlights on hover and includes subtle shadow effects.\n- **Responsive Styling**: Adapts to different screen sizes and use cases.\n\n### Usage\n\n```jsx\nimport React from "react";\nimport LettzSearchButton from "../components/LettzSearchButton";\n\nconst ExampleComponent = () => {\n  const handleSearchClick = () => {\n    console.log("Search button clicked!");\n  };\n\n  return (\n    <LettzSearchButton\n      onClick={handleSearchClick}\n      place="Dublin"\n      startDate="2024-01-01"\n      endDate="2024-01-15"\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **onClick**: Function triggered when the button is clicked (required).\n- **place**: String representing the selected location (default: "Anywhere").\n- **startDate**: String representing the start date (default: "Anytime").\n- **endDate**: String representing the end date (default: "").\n        '}}},argTypes:{onClick:{action:"button clicked"},place:{control:"text"},startDate:{control:"text"},endDate:{control:"text"}}},Template=args=>react.createElement(components_LettzSearchButton,args),Default=Template.bind({});Default.args={onClick:()=>console.log("Search button clicked!"),place:"Anywhere",startDate:"Anytime",endDate:""};const CustomSearch=Template.bind({});CustomSearch.args={onClick:()=>console.log("Search initiated for Dublin!"),place:"Dublin",startDate:"2024-01-01",endDate:"2024-01-15"};const __namedExportsOrder=["Default","CustomSearch"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <LettzSearchButton {...args} />",...Default.parameters?.docs?.source}}},CustomSearch.parameters={...CustomSearch.parameters,docs:{...CustomSearch.parameters?.docs,source:{originalSource:"args => <LettzSearchButton {...args} />",...CustomSearch.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Lettz-components-LettzSearchButton-stories.dac27303.iframe.bundle.js.map