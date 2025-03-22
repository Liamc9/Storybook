"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8304],{"./src/stories/atoms/inputs/Input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Email:()=>Email,Password:()=>Password,TextArea:()=>TextArea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputContainer=styled_components_browser_esm.default.div`
  position: relative;
  font-family: sans-serif;
`,sharedInputStyles=styled_components_browser_esm.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
`,StyledInput=styled_components_browser_esm.default.input`
  ${sharedInputStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
`,StyledTextarea=styled_components_browser_esm.default.textarea`
  ${sharedInputStyles}
  border-color: ${_ref2=>{let{isFocused,color}=_ref2;return isFocused?color:"#D1D5DB"}};
  min-height: ${_ref3=>{let{minHeight}=_ref3;return minHeight||"auto"}};  /* Use provided minHeight or default */
`,StyledLabel=styled_components_browser_esm.default.label`
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
`,inputs_Input=_ref6=>{let{name,type,value,onChange,color="#000",minHeight,label}=_ref6;const[isFocused,setIsFocused]=(0,react.useState)(!1),handleFocus=()=>setIsFocused(!0),handleBlur=()=>setIsFocused(!1),inputElement="textarea"===type?react.createElement(StyledTextarea,{name,id:name,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color,minHeight}):react.createElement(StyledInput,{name,id:name,type,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color});return react.createElement(InputContainer,null,inputElement,react.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Input_stories={title:"Atoms/Inputs/Input",component:inputs_Input,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `Input` component is a reusable form element that supports various input types such as text, password, email, and textarea. It is highly customizable with label support and color options.\n\n### Features\n- **Multiple Input Types**: Supports `text`, `password`, `email`, `number`, and `textarea`.\n- **Customizable Appearance**: Change label and color to fit your design.\n\n### Usage\n\n```jsx\nimport React, { useState } from \'react\';\nimport Input from \'./components/Input\';\n\nconst ExampleComponent = () => {\n  const [inputValue, setInputValue] = useState(\'\');\n\n  return (\n    <div className="p-4">\n      <Input\n        name="exampleInput"\n        type="text"\n        label="Example Label"\n        colour="#3B82F6" // Tailwind blue-500\n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n      />\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n```\n        '}}},argTypes:{name:{control:"text"},type:{control:{type:"select"},options:["text","password","email","number","textarea"]},label:{control:"text"},colour:{control:"color"},minHeight:{control:"text"}}},Template=args=>{const[value,setValue]=(0,react.useState)("");return react.createElement(inputs_Input,_extends({},args,{value,onChange:e=>setValue(e.target.value)}))},Default=Template.bind({});Default.args={name:"defaultInput",type:"text",label:"Default Input",colour:"#3B82F6"};const Password=Template.bind({});Password.args={name:"passwordInput",type:"password",label:"Password",colour:"#EF4444"};const Email=Template.bind({});Email.args={name:"emailInput",type:"email",label:"Email Address",colour:"#10B981"};const TextArea=Template.bind({});TextArea.args={name:"textArea",type:"textarea",label:"Your Message",colour:"#8B5CF6"};const __namedExportsOrder=["Default","Password","Email","TextArea"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;\n}",...Default.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;\n}",...Password.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;\n}",...Email.parameters?.docs?.source}}},TextArea.parameters={...TextArea.parameters,docs:{...TextArea.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;\n}",...TextArea.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-inputs-Input-stories.816af254.iframe.bundle.js.map