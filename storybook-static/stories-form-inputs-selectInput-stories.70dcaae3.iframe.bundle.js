"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8146],{"./src/stories/form/inputs/selectInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomOptionsSelectInput2:()=>CustomOptionsSelectInput2,CustomOptionsSelectInput3:()=>CustomOptionsSelectInput3,DefaultSelectInput2:()=>DefaultSelectInput2,DefaultSelectInput3:()=>DefaultSelectInput3,__namedExportsOrder:()=>__namedExportsOrder,default:()=>selectInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SelectWrapper=styled_components_browser_esm.default.div`
      grid-column: ${props=>props.gridSpan||"auto"};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,StyledLabel=styled_components_browser_esm.default.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledSelect=styled_components_browser_esm.default.select`
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,selectInputs_SelectInput2=_ref=>{let{label,options,...props}=_ref;return react.createElement(SelectWrapper,{gridSpan:props.gridSpan},label&&react.createElement(StyledLabel,{htmlFor:props.id},label),react.createElement(StyledSelect,props,options&&options.map((option=>react.createElement("option",{key:option.value,value:option.value},option.label)))))},SelectInput3_SelectWrapper=styled_components_browser_esm.default.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`,SelectInput3_StyledLabel=styled_components_browser_esm.default.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4a4a4a;
`,SelectInput3_StyledSelect=styled_components_browser_esm.default.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6200ee;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-color: #6200ee;
    outline: none;
    box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.2);
  }

  &:disabled {
    background-color: #f9f9f9;
    color: #bdbdbd;
    border-color: #e0e0e0;
    cursor: not-allowed;
  }
`,selectInputs_SelectInput3=_ref=>{let{label,options,...props}=_ref;return react.createElement(SelectInput3_SelectWrapper,{gridSpan:props.gridSpan},label&&react.createElement(SelectInput3_StyledLabel,{htmlFor:props.id},label),react.createElement(SelectInput3_StyledSelect,props,options&&options.map((option=>react.createElement("option",{key:option.value,value:option.value},option.label)))))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const selectInput_stories={title:"Form/Inputs/SelectInput",component:selectInputs_SelectInput2,subcomponents:{SelectInput3:selectInputs_SelectInput3},argTypes:{label:{control:"text",description:"Label for the select input",defaultValue:"Choose an option"},id:{control:"text",description:"Unique ID for the select input",defaultValue:"select-input-default"},options:{control:"object",description:"Options for the select input as an array of objects with `value` and `label`",defaultValue:[{value:"",label:"Please select"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]},value:{control:"text",description:"Current selected value",defaultValue:""},onChange:{action:"value-changed"},disabled:{control:"boolean",description:"Disables the select input when true",defaultValue:!1}}},sampleOptions=[{value:"",label:"Please select"},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],TemplateSelectInput2=args=>{const[selectedValue,setSelectedValue]=(0,react.useState)(args.value);return react.createElement("div",null,react.createElement(selectInputs_SelectInput2,_extends({},args,{value:selectedValue,onChange:e=>{setSelectedValue(e.target.value)}})),react.createElement("p",null,"Selected Value: ",react.createElement("strong",null,selectedValue||"None")))},TemplateSelectInput3=args=>{const[selectedValue,setSelectedValue]=(0,react.useState)(args.value);return react.createElement("div",null,react.createElement(selectInputs_SelectInput3,_extends({},args,{value:selectedValue,onChange:e=>{setSelectedValue(e.target.value)}})),react.createElement("p",null,"Selected Value: ",react.createElement("strong",null,selectedValue||"None")))},DefaultSelectInput2=TemplateSelectInput2.bind({});DefaultSelectInput2.args={label:"Choose an option",id:"select-input-default",options:sampleOptions,value:"",disabled:!1};const CustomOptionsSelectInput2=TemplateSelectInput2.bind({});CustomOptionsSelectInput2.args={label:"Select Your Favorite Fruit",id:"select-input-fruit",options:[{value:"",label:"Please select"},{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],value:"",disabled:!1};const DefaultSelectInput3=TemplateSelectInput3.bind({});DefaultSelectInput3.args={label:"Choose an option",id:"select-input3-default",options:sampleOptions,value:"",disabled:!1};const CustomOptionsSelectInput3=TemplateSelectInput3.bind({});CustomOptionsSelectInput3.args={label:"Select Your Favorite Color",id:"select-input3-color",options:[{value:"",label:"Please select"},{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"blue",label:"Blue"}],value:"",disabled:!1};const __namedExportsOrder=["DefaultSelectInput2","CustomOptionsSelectInput2","DefaultSelectInput3","CustomOptionsSelectInput3"];DefaultSelectInput2.parameters={...DefaultSelectInput2.parameters,docs:{...DefaultSelectInput2.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n  };\n  return <div>\r\n      <SelectInput2 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Value: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...DefaultSelectInput2.parameters?.docs?.source}}},CustomOptionsSelectInput2.parameters={...CustomOptionsSelectInput2.parameters,docs:{...CustomOptionsSelectInput2.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n  };\n  return <div>\r\n      <SelectInput2 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Value: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...CustomOptionsSelectInput2.parameters?.docs?.source}}},DefaultSelectInput3.parameters={...DefaultSelectInput3.parameters,docs:{...DefaultSelectInput3.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n  };\n  return <div>\r\n      <SelectInput3 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Value: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...DefaultSelectInput3.parameters?.docs?.source}}},CustomOptionsSelectInput3.parameters={...CustomOptionsSelectInput3.parameters,docs:{...CustomOptionsSelectInput3.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n  };\n  return <div>\r\n      <SelectInput3 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Value: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...CustomOptionsSelectInput3.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-form-inputs-selectInput-stories.70dcaae3.iframe.bundle.js.map