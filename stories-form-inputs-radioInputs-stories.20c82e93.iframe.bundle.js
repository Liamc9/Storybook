"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1204],{"./src/stories/form/inputs/radioInputs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckedRadioButton:()=>CheckedRadioButton,DefaultRadioButton:()=>DefaultRadioButton,DefaultRadioButtonsGroup:()=>DefaultRadioButtonsGroup,PreselectedRadioButtonsGroup:()=>PreselectedRadioButtonsGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>radioInputs_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const RadioWrapper=styled_components_browser_esm.default.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,StyledInput=styled_components_browser_esm.default.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`,StyledLabel=styled_components_browser_esm.default.label`
  font-size: 1rem;
  color: #333;
`,radioInputs_RadioButtons=_ref=>{let{label,name,...props}=_ref;return react.createElement(RadioWrapper,{gridSpan:props.gridSpan},react.createElement(StyledInput,_extends({type:"radio",name},props)),label&&react.createElement(StyledLabel,{htmlFor:props.id},label))};var RadioButtons2=__webpack_require__("./src/components/form/inputs/radioInputs/RadioButtons2.jsx");function radioInputs_stories_extends(){return radioInputs_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},radioInputs_stories_extends.apply(null,arguments)}const radioInputs_stories={title:"Form/Inputs/RadioInputs",component:radioInputs_RadioButtons,subcomponents:{RadioButtons2:RadioButtons2.A},argTypes:{label:{control:"text",description:"Label for the radio button",defaultValue:"Option 1"},id:{control:"text",description:"Unique ID for the radio button",defaultValue:"radio-button-default"},name:{control:"text",description:"Name attribute to group radio buttons",defaultValue:"radio-group"},value:{control:"text",description:"Value of the radio button",defaultValue:"option1"},checked:{control:"boolean",description:"Checked state of the radio button",defaultValue:!1},disabled:{control:"boolean",description:"Disables the radio button when true",defaultValue:!1},onChange:{action:"radio-changed"},options:{control:"object",description:"Options for the radio button group as an array of objects with `id`, `value`, and `label`",defaultValue:[{id:"radio1",value:"option1",label:"Option 1"},{id:"radio2",value:"option2",label:"Option 2"},{id:"radio3",value:"option3",label:"Option 3"}]}}},TemplateRadioButtons=args=>{const[isChecked,setIsChecked]=(0,react.useState)(args.checked);return react.createElement("div",null,react.createElement(radioInputs_RadioButtons,radioInputs_stories_extends({},args,{checked:isChecked,onChange:e=>{setIsChecked(e.target.checked),args.onChange(e)}})),react.createElement("p",null,"Current State: ",react.createElement("strong",null,isChecked?"Checked":"Unchecked")))},TemplateRadioButtons2=args=>{const[selectedValue,setSelectedValue]=(0,react.useState)(args.value);return react.createElement("div",null,react.createElement(RadioButtons2.A,radioInputs_stories_extends({},args,{value:selectedValue,onChange:e=>{setSelectedValue(e.target.value),args.onChange(e)}})),react.createElement("p",null,"Selected Option: ",react.createElement("strong",null,selectedValue||"None")))},DefaultRadioButton=TemplateRadioButtons.bind({});DefaultRadioButton.args={label:"Option 1",id:"radio-button-default",name:"radio-group",value:"option1",checked:!1,disabled:!1};const CheckedRadioButton=TemplateRadioButtons.bind({});CheckedRadioButton.args={label:"Option 1 (Checked)",id:"radio-button-checked",name:"radio-group",value:"option1",checked:!0,disabled:!1};const DefaultRadioButtonsGroup=TemplateRadioButtons2.bind({});DefaultRadioButtonsGroup.args={name:"radio-group2",options:[{id:"radio1",value:"option1",label:"Option 1"},{id:"radio2",value:"option2",label:"Option 2"},{id:"radio3",value:"option3",label:"Option 3"}],value:"",disabled:!1};const PreselectedRadioButtonsGroup=TemplateRadioButtons2.bind({});PreselectedRadioButtonsGroup.args={name:"radio-group2-preselected",options:[{id:"radio1",value:"option1",label:"Option 1"},{id:"radio2",value:"option2",label:"Option 2"},{id:"radio3",value:"option3",label:"Option 3"}],value:"option2",disabled:!1};const __namedExportsOrder=["DefaultRadioButton","CheckedRadioButton","DefaultRadioButtonsGroup","PreselectedRadioButtonsGroup"];DefaultRadioButton.parameters={...DefaultRadioButton.parameters,docs:{...DefaultRadioButton.parameters?.docs,source:{originalSource:"args => {\n  const [isChecked, setIsChecked] = useState(args.checked);\n  const handleChange = e => {\n    setIsChecked(e.target.checked);\n    args.onChange(e);\n  };\n  return <div>\r\n      <RadioButtons {...args} checked={isChecked} onChange={handleChange} />\r\n      <p>\r\n        Current State: <strong>{isChecked ? 'Checked' : 'Unchecked'}</strong>\r\n      </p>\r\n    </div>;\n}",...DefaultRadioButton.parameters?.docs?.source}}},CheckedRadioButton.parameters={...CheckedRadioButton.parameters,docs:{...CheckedRadioButton.parameters?.docs,source:{originalSource:"args => {\n  const [isChecked, setIsChecked] = useState(args.checked);\n  const handleChange = e => {\n    setIsChecked(e.target.checked);\n    args.onChange(e);\n  };\n  return <div>\r\n      <RadioButtons {...args} checked={isChecked} onChange={handleChange} />\r\n      <p>\r\n        Current State: <strong>{isChecked ? 'Checked' : 'Unchecked'}</strong>\r\n      </p>\r\n    </div>;\n}",...CheckedRadioButton.parameters?.docs?.source}}},DefaultRadioButtonsGroup.parameters={...DefaultRadioButtonsGroup.parameters,docs:{...DefaultRadioButtonsGroup.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n    args.onChange(e);\n  };\n  return <div>\r\n      <RadioButtons2 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Option: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...DefaultRadioButtonsGroup.parameters?.docs?.source}}},PreselectedRadioButtonsGroup.parameters={...PreselectedRadioButtonsGroup.parameters,docs:{...PreselectedRadioButtonsGroup.parameters?.docs,source:{originalSource:"args => {\n  const [selectedValue, setSelectedValue] = useState(args.value);\n  const handleChange = e => {\n    setSelectedValue(e.target.value);\n    args.onChange(e);\n  };\n  return <div>\r\n      <RadioButtons2 {...args} value={selectedValue} onChange={handleChange} />\r\n      <p>\r\n        Selected Option: <strong>{selectedValue || 'None'}</strong>\r\n      </p>\r\n    </div>;\n}",...PreselectedRadioButtonsGroup.parameters?.docs?.source}}}},"./src/components/form/inputs/radioInputs/RadioButtons2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .radio-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radio-input * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .radio-input label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
  }

  .radio-input label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
  }

  .radio-input label:hover::before {
    transition: all 0.2s ease;
    background-color: #2a2e3c;
  }

  /* Using :has pseudo-class is not widely supported. Use a different approach */
  .radio-input label input:checked + .text::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
  }

  .radio-input label .text {
    color: #fff;
  }

  .radio-input label input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .radio-input label input[type="radio"]:checked {
    background-color: #435dd8;
    -webkit-animation: puls 0.7s forwards;
    animation: pulse 0.7s forwards;
  }

  .radio-input label input[type="radio"]:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
  }

  .radio-input label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,options=[],...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"radio-input"},options.map((_ref2=>{let{id,value,label}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{key:id,htmlFor:id},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({type:"radio",id,name,value},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text"},label))}))))}}}]);
//# sourceMappingURL=stories-form-inputs-radioInputs-stories.20c82e93.iframe.bundle.js.map