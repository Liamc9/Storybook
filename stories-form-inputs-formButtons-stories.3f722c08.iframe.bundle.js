"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[943],{"./src/stories/form/inputs/formButtons.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Reset:()=>Reset,Submit:()=>Submit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_form_inputs_formButtons_SubmitButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/inputs/formButtons/SubmitButton.jsx"),_components_form_inputs_formButtons_ResetButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/inputs/formButtons/ResetButton.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Inputs/FormButtons",component:_components_form_inputs_formButtons_SubmitButton__WEBPACK_IMPORTED_MODULE_1__.A,subcomponents:{ResetButton:_components_form_inputs_formButtons_ResetButton__WEBPACK_IMPORTED_MODULE_2__.A},argTypes:{label:{control:"text",description:"Label for the button",defaultValue:"Click Me"},disabled:{control:"boolean",description:"Disable the button",defaultValue:!1},onClick:{action:"clicked"}}},Submit=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_inputs_formButtons_SubmitButton__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Submit.args={label:"Submit"};const Reset=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_inputs_formButtons_ResetButton__WEBPACK_IMPORTED_MODULE_2__.A,args)).bind({});Reset.args={label:"Reset"};const __namedExportsOrder=["Submit","Reset"];Submit.parameters={...Submit.parameters,docs:{...Submit.parameters?.docs,source:{originalSource:"args => {\n  return <SubmitButton {...args} />;\n}",...Submit.parameters?.docs?.source}}},Reset.parameters={...Reset.parameters,docs:{...Reset.parameters?.docs,source:{originalSource:"args => {\n  return <ResetButton {...args} />;\n}",...Reset.parameters?.docs?.source}}}},"./src/components/form/inputs/formButtons/ResetButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.button`
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #c6c8ca;
    cursor: not-allowed;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,_extends({type:"reset"},props),children)}},"./src/components/form/inputs/formButtons/SubmitButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.button`
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #c6c8ca;
    cursor: not-allowed;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,_extends({type:"submit"},props),children)}}}]);
//# sourceMappingURL=stories-form-inputs-formButtons-stories.3f722c08.iframe.bundle.js.map