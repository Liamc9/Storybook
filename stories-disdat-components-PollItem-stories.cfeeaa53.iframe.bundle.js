"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6264],{"./src/stories/disdat/components/PollItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LongTexts:()=>LongTexts,MultipleInstances:()=>MultipleInstances,PercentagesNotAddingUp:()=>PercentagesNotAddingUp,WithPreSelectedOption:()=>WithPreSelectedOption,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PollItem_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.default.div`
position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
`,Header=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`,Badge=styled_components_browser_esm.default.span`
position: absolute;
    top: 4px;
    right: 4px;
  background-color: #fff;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
`,ButtonsContainer=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
`,OptionButton=styled_components_browser_esm.default.button`
  width: 48%;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`,BarContainer=styled_components_browser_esm.default.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px; /* Increased height to accommodate percentage labels */
  border-radius: 5px;
  overflow: hidden;
  background-color: #f0f0f0;
`,BarSegment=styled_components_browser_esm.default.div`
  position: relative;
  width: ${props=>props.percentage}%;
  background-color: ${props=>props.color};
  transition: width 2s ease, background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`,PercentageLabel=styled_components_browser_esm.default.span`
  position: absolute;
  top: 5px;
  ${props=>"left"===props.align?"left: 10px;":"right: 10px;"}
  font-size: 0.8rem;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
`,OptionName=styled_components_browser_esm.default.span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: visible; /* Allow overflow */
  text-overflow: unset;
  z-index: 1;
`,components_PollItem=_ref=>{let{question,category,opt1,opt2,percOpt1,percOpt2,chosenOpt:initialChosenOpt=null}=_ref;const[chosenOpt,setChosenOpt]=(0,react.useState)(initialChosenOpt),[showBar,setShowBar]=(0,react.useState)(!!initialChosenOpt),[displayedPercOpt1,setDisplayedPercOpt1]=(0,react.useState)(50),[displayedPercOpt2,setDisplayedPercOpt2]=(0,react.useState)(50);(0,react.useEffect)((()=>{if(showBar){setDisplayedPercOpt1(50),setDisplayedPercOpt2(50);const timer=setTimeout((()=>{setDisplayedPercOpt1(percOpt1),setDisplayedPercOpt2(percOpt2)}),100);return()=>clearTimeout(timer)}}),[showBar,percOpt1,percOpt2]);const handleOptionClick=option=>{setChosenOpt(option),setShowBar(!0)};return react.createElement(Container,null,react.createElement(Header,null,react.createElement("h2",{style:{margin:0}},question),react.createElement(Badge,null,category)),showBar?react.createElement(BarContainer,null,react.createElement(BarSegment,{percentage:displayedPercOpt1,color:chosenOpt===opt1?"#007bff":"#000"},react.createElement(PercentageLabel,{align:"left"},`${displayedPercOpt1}%`),react.createElement(OptionName,{title:opt1},opt1)),react.createElement(BarSegment,{percentage:displayedPercOpt2,color:chosenOpt===opt2?"#007bff":"#000"},react.createElement(PercentageLabel,{align:"right"},`${displayedPercOpt2}%`),react.createElement(OptionName,{title:opt2},opt2))):react.createElement(ButtonsContainer,null,react.createElement(OptionButton,{"aria-label":`Select ${opt1}`,onClick:()=>handleOptionClick(opt1)},opt1),react.createElement(OptionButton,{"aria-label":`Select ${opt2}`,onClick:()=>handleOptionClick(opt2)},opt2)))},PollItem_stories={title:"DisDat/Components/PollItem",component:components_PollItem,tags:["autodocs"],parameters:{docs:{description:{component:'\n**PollItem** is a versatile React component designed to display a question with two selectable options. Upon selection, it showcases the distribution of choices using a smoothly transitioning percentage bar.\n\n### Features\n- **Title and Category Badge**: Displays the question as a title with the category as a badge.\n- **Option Buttons**: Two buttons for user selection.\n- **Percentage Bar**: Replaces buttons upon selection, showing the distribution with smooth transitions.\n- **Customization**: Easily configurable via props.\n\n### Props\n\n- `question` (string, required): The question text.\n- `category` (string, required): The category label.\n- `opt1` (string, required): Text for the first option button.\n- `opt2` (string, required): Text for the second option button.\n- `percOpt1` (number, required): Percentage for the first option.\n- `percOpt2` (number, required): Percentage for the second option.\n- `chosenOpt` (string, optional): The initially chosen option.\n\n### Usage\n\n```jsx\nimport React from \'react\';\nimport PollItem from \'./PollItem\';\n\nconst App = () => (\n  <PollItem\n    question="What is your favorite programming language?"\n    category="Survey"\n    opt1="JavaScript"\n    opt2="Python"\n    percOpt1={60}\n    percOpt2={40}\n  />\n);\n\nexport default App;\n```\n        '}}}},Template=args=>react.createElement(components_PollItem,args),Default=Template.bind({});Default.args={question:"What is your favorite programming language?",category:"Survey",opt1:"JavaScript",opt2:"Python",percOpt1:60,percOpt2:40};const WithPreSelectedOption=Template.bind({});WithPreSelectedOption.args={question:"What is your preferred IDE?",category:"Preference",opt1:"VS Code",opt2:"IntelliJ",percOpt1:70,percOpt2:30,chosenOpt:"VS Code"};const MultipleInstances=()=>react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},react.createElement(components_PollItem,{question:"What is your favorite color?",category:"Preference",opt1:"Blue",opt2:"Red",percOpt1:70,percOpt2:30}),react.createElement(components_PollItem,{question:"Which frontend framework do you prefer?",category:"Survey",opt1:"React",opt2:"Vue",percOpt1:55,percOpt2:45}),react.createElement(components_PollItem,{question:"Do you like TypeScript?",category:"Feedback",opt1:"Yes",opt2:"No",percOpt1:80,percOpt2:20})),PercentagesNotAddingUp=Template.bind({});PercentagesNotAddingUp.args={question:"Which mobile OS do you prefer?",category:"Survey",opt1:"iOS",opt2:"Android",percOpt1:60,percOpt2:50};const LongTexts=Template.bind({});LongTexts.args={question:"Considering all factors such as performance, community support, and ecosystem, which programming language do you prefer for large-scale enterprise applications?",category:"In-depth Survey",opt1:"JavaScript",opt2:"Python",percOpt1:55,percOpt2:45};const __namedExportsOrder=["Default","WithPreSelectedOption","MultipleInstances","PercentagesNotAddingUp","LongTexts"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <PollItem {...args} />",...Default.parameters?.docs?.source}}},WithPreSelectedOption.parameters={...WithPreSelectedOption.parameters,docs:{...WithPreSelectedOption.parameters?.docs,source:{originalSource:"args => <PollItem {...args} />",...WithPreSelectedOption.parameters?.docs?.source}}},MultipleInstances.parameters={...MultipleInstances.parameters,docs:{...MultipleInstances.parameters?.docs,source:{originalSource:'() => <div style={{\n  display: \'flex\',\n  flexDirection: \'column\',\n  gap: \'20px\'\n}}>\r\n    <PollItem question="What is your favorite color?" category="Preference" opt1="Blue" opt2="Red" percOpt1={70} percOpt2={30} />\r\n    <PollItem question="Which frontend framework do you prefer?" category="Survey" opt1="React" opt2="Vue" percOpt1={55} percOpt2={45} />\r\n    <PollItem question="Do you like TypeScript?" category="Feedback" opt1="Yes" opt2="No" percOpt1={80} percOpt2={20} />\r\n  </div>',...MultipleInstances.parameters?.docs?.source}}},PercentagesNotAddingUp.parameters={...PercentagesNotAddingUp.parameters,docs:{...PercentagesNotAddingUp.parameters?.docs,source:{originalSource:"args => <PollItem {...args} />",...PercentagesNotAddingUp.parameters?.docs?.source}}},LongTexts.parameters={...LongTexts.parameters,docs:{...LongTexts.parameters?.docs,source:{originalSource:"args => <PollItem {...args} />",...LongTexts.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-disdat-components-PollItem-stories.cfeeaa53.iframe.bundle.js.map