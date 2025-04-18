"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6057],{"./src/stories/form/inputs/textInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTextInput:()=>DefaultTextInput,FloatingLabel:()=>FloatingLabel,FloatingLabel2:()=>FloatingLabel2,InputStory:()=>InputStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),TextInput=__webpack_require__("./src/components/form/inputs/textInputs/TextInput.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=styled_components_browser_esm.Ay.div`
        grid-column: ${props=>props.gridSpan||"auto"};

  .input-container {
    position: relative;
    margin: 50px auto;
    width: 200px;
  }

  .input-container input[type="text"] {
    font-size: 20px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 5px 0;
    background-color: transparent;
    outline: none;
  }

  .input-container .label {
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .input-container input[type="text"]:focus ~ .label,
  .input-container input[type="text"]:valid ~ .label {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  .input-container .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #333;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .input-container input[type="text"]:focus ~ .underline,
  .input-container input[type="text"]:valid ~ .underline {
    transform: scaleX(1);
  }`,textInputs_TextInput2=_ref=>{let{label,...props}=_ref;return react.createElement(StyledWrapper,{gridSpan:props.gridSpan},react.createElement("div",{className:"input-container"},react.createElement("input",_extends({type:"text"},props)),react.createElement("label",{htmlFor:props.id,className:"label"},label),react.createElement("div",{className:"underline"})))};function TextInput3_extends(){return TextInput3_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},TextInput3_extends.apply(null,arguments)}const TextInput3_StyledWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .input-group {
   position: relative;
  }

  .input {
   border: solid 1.5px #9e9e9e;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #000;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #e8e8e8;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid #1a73e8;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #fff;
   padding: 0 .2em;
   color: #2196f3;
  }`,textInputs_TextInput3=_ref=>{let{label,...props}=_ref;return react.createElement(TextInput3_StyledWrapper,{gridSpan:props.gridSpan},react.createElement("div",{className:"input-group"},react.createElement("input",TextInput3_extends({required:!0,type:"text"},props,{className:"input"})),react.createElement("label",{className:"user-label"},label)))},InputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  font-family: sans-serif;
`,sharedInputStyles=styled_components_browser_esm.AH`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
`,StyledInput=styled_components_browser_esm.Ay.input`
  ${sharedInputStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
`,StyledTextarea=styled_components_browser_esm.Ay.textarea`
  ${sharedInputStyles}
  border-color: ${_ref2=>{let{isFocused,color}=_ref2;return isFocused?color:"#D1D5DB"}};
  min-height: ${_ref3=>{let{minHeight}=_ref3;return minHeight||"auto"}};  /* Use provided minHeight or default */
`,StyledLabel=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${_ref4=>{let{isFocused,color}=_ref4;return isFocused?color:"#6B7280"}};
  font-size: 1rem;
  pointer-events: none;
  transform: ${_ref5=>{let{hasValue,isFocused}=_ref5;return hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"}};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,textInputs_Input=_ref6=>{let{name,type,value,onChange,color="#000",minHeight,label}=_ref6;const[isFocused,setIsFocused]=(0,react.useState)(!1),handleFocus=()=>setIsFocused(!0),handleBlur=()=>setIsFocused(!1),inputElement="textarea"===type?react.createElement(StyledTextarea,{name,id:name,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color,minHeight}):react.createElement(StyledInput,{name,id:name,type,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color});return react.createElement(InputContainer,null,inputElement,react.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label))},textInput_stories={title:"Form/Inputs/TextInput",argTypes:{label:{control:"text",description:"Label for the text input",defaultValue:"Default Text Input"},id:{control:"text",description:"Unique ID for the text input",defaultValue:"text-input-default"},placeholder:{control:"text",description:"Placeholder text for the input",defaultValue:"Enter text here..."},disabled:{control:"boolean",description:"Disables the input when true",defaultValue:!1},type:{control:"select",options:["text","password","email","number","tel","url"],description:"Type of the input",defaultValue:"text"},value:{control:"text",description:"Value of the input",defaultValue:""},maxLength:{control:"number",description:"Maximum length of the input value",defaultValue:100},pattern:{control:"text",description:"Regular expression pattern for input validation",defaultValue:""},required:{control:"boolean",description:"Marks the input as required",defaultValue:!1}}},DefaultTextInput=args=>react.createElement(TextInput.A,args);DefaultTextInput.args={label:"Default Text Input",id:"text-input-default",placeholder:"Enter text here...",type:"text"};const FloatingLabel=args=>react.createElement(textInputs_TextInput2,args);FloatingLabel.args={label:"Floating Label Input",id:"text-input-floating",type:"text"};const FloatingLabel2=args=>react.createElement(textInputs_TextInput3,args);FloatingLabel2.args={label:"Floating Label Input",id:"text-input-floating",type:"text"};const InputStory=args=>react.createElement(textInputs_Input,args);InputStory.args={label:"Input",id:"input-default",placeholder:"Enter text here...",type:"text",value:""};const __namedExportsOrder=["DefaultTextInput","FloatingLabel","FloatingLabel2","InputStory"];DefaultTextInput.parameters={...DefaultTextInput.parameters,docs:{...DefaultTextInput.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...DefaultTextInput.parameters?.docs?.source}}},FloatingLabel.parameters={...FloatingLabel.parameters,docs:{...FloatingLabel.parameters?.docs,source:{originalSource:"args => <TextInput2 {...args} />",...FloatingLabel.parameters?.docs?.source}}},FloatingLabel2.parameters={...FloatingLabel2.parameters,docs:{...FloatingLabel2.parameters?.docs,source:{originalSource:"args => <TextInput3 {...args} />",...FloatingLabel2.parameters?.docs?.source}}},InputStory.parameters={...InputStory.parameters,docs:{...InputStory.parameters?.docs,source:{originalSource:"args => <Input {...args} />",...InputStory.parameters?.docs?.source}}}},"./src/components/form/inputs/textInputs/TextInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
    grid-column: ${props=>props.gridSpan||"auto"};
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputWrapper,{gridSpan:props.gridSpan},props.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:props.id},props.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInput,props))}}}]);
//# sourceMappingURL=stories-form-inputs-textInput-stories.70f19284.iframe.bundle.js.map