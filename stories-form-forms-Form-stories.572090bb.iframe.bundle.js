"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3382],{"./src/stories/form/forms/Form.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiPageFormStory:()=>MultiPageFormStory,SinglePageFormStory:()=>SinglePageFormStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_form_forms_SinglePageForm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/forms/SinglePageForm.jsx"),_components_form_forms_MultiPageForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/forms/MultiPageForm.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Forms/Form",parameters:{docs:{description:{component:"\n### Form Components\n\nA collection of form components designed for flexibility and ease of use. This includes:\n\n- **SinglePageForm**: A straightforward form component for simple use cases.\n- **MultiPageForm**: A multi-step form for collecting complex data over multiple pages.\n\n#### Best Practices\n\n- **Validation**: Use both basic and custom validation to ensure data integrity.\n- **Accessibility**: Ensure proper labeling for form fields.\n- **Customization**: Adjust form fields and validation logic to suit your requirements.\n        "}}}},handleFormSubmit=formData=>{alert(`Form Submitted:\n${JSON.stringify(formData,null,2)}`)},SinglePageFormStory=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_forms_SinglePageForm__WEBPACK_IMPORTED_MODULE_1__.A,{handleFormSubmit});SinglePageFormStory.storyName="Single Page Form",SinglePageFormStory.parameters={docs:{description:{story:"\n### SinglePageForm\n\nA simple form component for collecting data on a single page. Suitable for straightforward use cases like contact forms, feedback forms, or settings pages.\n\n#### How to Use\n\n```jsx\nimport React from 'react';\nimport SinglePageForm from '../components/forms/SinglePageForm';\n\nconst handleFormSubmit = (formData) => {\n  console.log('Form Submitted:', formData);\n};\n\nconst App = () => (\n  <SinglePageForm\n    initialFormData={{ name: '', email: '' }}\n    handleFormSubmit={handleFormSubmit}\n  />\n);\n\nexport default App;\n```\n\n#### Props\n\n| Name             | Type     | Description                                      |\n| ---------------- | -------- | ------------------------------------------------ |\n| `initialFormData` | `object` | Initial values for the form fields.            |\n| `handleFormSubmit` | `function` | Callback function triggered on form submission. |\n      "}}};const MultiPageFormStory=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_forms_MultiPageForm__WEBPACK_IMPORTED_MODULE_2__.A,{handleFormSubmit});MultiPageFormStory.storyName="Multi Page Form",MultiPageFormStory.parameters={docs:{description:{story:"\n### MultiPageForm\n\nA dynamic, multi-step form for collecting complex data across multiple pages.\n\n#### How to Use\n\n```jsx\nimport React from 'react';\nimport MultiPageForm from '../components/forms/MultiPageForm';\n\nconst handleFormSubmit = (formData) => {\n  console.log('Form Submitted:', formData);\n};\n\nconst App = () => (\n  <MultiPageForm\n    initialData={{ name: '', email: '' }}\n    handleFormSubmit={handleFormSubmit}\n  />\n);\n\nexport default App;\n```\n\n#### Customization\n\n- **Pages Configuration**: Define the content and structure of each form page in the `getPages` function.\n- **Custom Validation**: Add page-specific validation using the `customValidate` property for each page.\n- **Navigation Buttons**: Customize navigation buttons by modifying the `renderButtonLayout` function.\n\n#### Props\n\n| Name             | Type     | Description                                      |\n| ---------------- | -------- | ------------------------------------------------ |\n| `initialData`    | `object` | Initial values for the form fields.            |\n| `handleFormSubmit` | `function` | Callback function triggered on form submission. |\n| `pages`          | `array`  | Configuration for multi-page forms.            |\n      "}}};const __namedExportsOrder=["SinglePageFormStory","MultiPageFormStory"];SinglePageFormStory.parameters={...SinglePageFormStory.parameters,docs:{...SinglePageFormStory.parameters?.docs,source:{originalSource:"() => {\n  return <SinglePageForm handleFormSubmit={handleFormSubmit} />;\n}",...SinglePageFormStory.parameters?.docs?.source}}},MultiPageFormStory.parameters={...MultiPageFormStory.parameters,docs:{...MultiPageFormStory.parameters?.docs,source:{originalSource:"() => {\n  return <MultiPageForm handleFormSubmit={handleFormSubmit} />;\n}",...MultiPageFormStory.parameters?.docs?.source}}}},"./src/components/form/forms/MultiPageForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>MultiPageForm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_FormLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/forms/FormLogic.jsx"),_inputs_textInputs_TextInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/inputs/textInputs/TextInput.jsx"),_inputs_colorPickers_ColorPicker__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/inputs/colorPickers/ColorPicker.jsx"),_inputs_rangeInputs_RangeInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput.jsx"),_inputs_checkboxInputs_Checkbox3__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/inputs/checkboxInputs/Checkbox3.jsx"),_inputs_toggleSwitches_ToggleSwitch2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/inputs/toggleSwitches/ToggleSwitch2.jsx"),_inputs_radioInputs_RadioButtons2__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/form/inputs/radioInputs/RadioButtons2.jsx"),_inputs_formButtons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/form/inputs/formButtons/SubmitButton.jsx"),_inputs_formButtons_ResetButton__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/form/inputs/formButtons/ResetButton.jsx");const FormContainer=styled_components__WEBPACK_IMPORTED_MODULE_10__.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two-column layout */
  gap: 16px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px; /* Increased width for better layout */
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single-column layout on small screens */
  }
`,ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_10__.Ay.div`
  grid-column: 1 / -1; /* Span all columns */
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack buttons vertically on small screens */
  }
`,validatePreferences=formData=>{const errors={};return formData.rating<3&&(errors.rating="Rating must be at least 3."),"#000000"===formData.color&&(errors.color="Color cannot be black."),errors},getPages=()=>[{customValidate:null,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Page 1: Personal Info"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_textInputs_TextInput__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Name",type:"text",name:"name",id:"name",required:!0,gridSpan:"span 2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_textInputs_TextInput__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Email",type:"email",name:"email",id:"email",required:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_textInputs_TextInput__WEBPACK_IMPORTED_MODULE_2__.A,{label:"Message",type:"textarea",name:"message",id:"message",required:!0,gridSpan:"span 2"}))},{customValidate:validatePreferences,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Page 2: Preferences"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_colorPickers_ColorPicker__WEBPACK_IMPORTED_MODULE_3__.A,{label:"Favorite Color",name:"color",id:"color",required:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_rangeInputs_RangeInput__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Rating",name:"rating",id:"rating",min:1,max:5,required:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_checkboxInputs_Checkbox3__WEBPACK_IMPORTED_MODULE_5__.A,{name:"checkbox",id:"checkbox",label:"Accept Terms",required:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_toggleSwitches_ToggleSwitch2__WEBPACK_IMPORTED_MODULE_6__.A,{name:"toggle",id:"toggle",label:"Enable Feature"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_radioInputs_RadioButtons2__WEBPACK_IMPORTED_MODULE_7__.A,{label:"Role",name:"role",options:[{id:"designer",value:"designer",label:"Designer",defaultChecked:!0},{id:"student",value:"student",label:"Student"},{id:"teacher",value:"teacher",label:"Teacher"}],required:!0,gridColumn:"1 / -1"}))},{customValidate:null,content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Page 3: Review & Submit"))}],renderButtonLayout=_ref=>{let{currentPageIndex,isLastPage,handlePrevious}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonContainer,null,currentPageIndex>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_formButtons_ResetButton__WEBPACK_IMPORTED_MODULE_9__.A,{type:"button",onClick:handlePrevious},"Previous"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_inputs_formButtons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__.A,{type:"submit"},isLastPage?"Submit":"Next"))};function MultiPageForm(_ref2){let{initialData={},handleFormSubmit}=_ref2;const pages=getPages();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormLogic__WEBPACK_IMPORTED_MODULE_1__.A,{pages,initialData,onSubmit:handleFormSubmit},(_ref3=>{let{currentPageIndex,isLastPage,handlePrevious,formData}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,renderButtonLayout({currentPageIndex,isLastPage,handlePrevious}))}))}},"./src/components/form/forms/SinglePageForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SinglePageForm});var react=__webpack_require__("./node_modules/react/index.js"),FormLogic=__webpack_require__("./src/components/form/forms/FormLogic.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TextInput=__webpack_require__("./src/components/form/inputs/textInputs/TextInput.jsx"),SubmitButton=__webpack_require__("./src/components/form/inputs/formButtons/SubmitButton.jsx"),RangeInput=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput.jsx"),ColorPicker=__webpack_require__("./src/components/form/inputs/colorPickers/ColorPicker.jsx"),Checkbox3=__webpack_require__("./src/components/form/inputs/checkboxInputs/Checkbox3.jsx"),ToggleSwitch2=__webpack_require__("./src/components/form/inputs/toggleSwitches/ToggleSwitch2.jsx"),RadioButtons2=__webpack_require__("./src/components/form/inputs/radioInputs/RadioButtons2.jsx"),RangeInput2=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput2.jsx"),ResetButton=__webpack_require__("./src/components/form/inputs/formButtons/ResetButton.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const InputWrapper=styled_components_browser_esm.Ay.div`
    grid-column: ${props=>props.gridSpan||"auto"};
  display: flex;
  align-items: center;
  background-color: #f7f7f8;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,StyledInput=styled_components_browser_esm.Ay.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 1rem;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`,TextInput4_SubmitButton=styled_components_browser_esm.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #222;
  }
`,ArrowIcon=(0,styled_components_browser_esm.Ay)(Icons.ArrowRightIcon)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`,textInputs_TextInput4=_ref=>{let{onSubmit,...props}=_ref;return react.createElement(InputWrapper,{gridSpan:props.gridSpan},react.createElement(StyledInput,_extends({},props,{onKeyDown:event=>{"Enter"===event.key&&onSubmit&&onSubmit(event)}})),react.createElement(TextInput4_SubmitButton,{onClick:onSubmit},react.createElement(ArrowIcon,null)))},FormContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always two columns */
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`,ButtonContainer=styled_components_browser_esm.Ay.div`
  grid-column: span 2; /* Ensure buttons span both columns */
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 600px) {
    grid-column: span 1; /* Single column on smaller screens */
  }
`;function SinglePageForm(_ref){let{initialFormData={},handleFormSubmit}=_ref;const mergedData={name:"",email:"",message:"",color:"#000000",rating:3,checkbox:!1,toggle:!1,role:"designer",volume:3,...initialFormData};return react.createElement("div",null,react.createElement(FormLogic.A,{onSubmit:handleFormSubmit,initialData:mergedData},react.createElement(FormContainer,null,react.createElement(TextInput.A,{label:"Name",type:"text",name:"name",id:"name",required:!0}),react.createElement(TextInput.A,{label:"Email",type:"email",name:"email",id:"email",required:!0}),react.createElement(TextInput.A,{label:"Message",name:"message",id:"message",rows:5,required:!0,gridSpan:"span 2",as:"textarea"}),react.createElement(ColorPicker.A,{label:"Color",name:"color",id:"color",required:!0}),react.createElement(RangeInput.A,{label:"Rating",name:"rating",id:"rating",min:1,max:5,required:!0}),react.createElement(Checkbox3.A,{name:"checkbox",id:"checkbox"}),react.createElement(ToggleSwitch2.A,{name:"toggle",id:"toggle",gridSpan:"span 2"}),react.createElement(RadioButtons2.A,{name:"role",options:[{id:"designer",value:"designer",label:"Designer",defaultChecked:!0},{id:"student",value:"student",label:"Student"},{id:"teacher",value:"teacher",label:"Teacher"}],gridSpan:"span 2"}),react.createElement(RangeInput2.A,{label:"Volume",name:"volume",id:"volume",min:1,max:5,required:!0}),react.createElement(textInputs_TextInput4,{gridSpan:"span 2"}),react.createElement(ButtonContainer,null,react.createElement(ResetButton.A,null,"Reset"),react.createElement(SubmitButton.A,null,"Submit")))))}},"./src/components/form/inputs/rangeInputs/RangeInput2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  /* level settings 👇 */

  .slider {
    /* slider */
    --slider-width: 100%;
    --slider-height: 6px;
    --slider-bg: rgb(82, 82, 82);
    --slider-border-radius: 999px;
    /* level */
    --level-color: #fff;
    --level-transition-duration: .1s;
    /* icon */
    --icon-margin: 15px;
    --icon-color: var(--slider-bg);
    --icon-size: 25px;
  }

  .slider {
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .slider .volume {
    display: inline-block;
    vertical-align: top;
    margin-right: var(--icon-margin);
    color: var(--icon-color);
    width: var(--icon-size);
    height: auto;
  }

  .slider .level {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--slider-width);
    height: var(--slider-height);
    background: var(--slider-bg);
    overflow: hidden;
    border-radius: var(--slider-border-radius);
    -webkit-transition: height var(--level-transition-duration);
    -o-transition: height var(--level-transition-duration);
    transition: height var(--level-transition-duration);
    cursor: inherit;
  }

  .slider .level::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    -webkit-box-shadow: -200px 0 0 200px var(--level-color);
    box-shadow: -200px 0 0 200px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 2);
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"slider"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({type:"range",className:"level"},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"volume",xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:512,height:512,x:0,y:0,viewBox:"0 0 24 24",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z",fill:"currentColor","data-original":"#000000"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z",fill:"currentColor","data-original":"#000000"})))))}}}]);
//# sourceMappingURL=stories-form-forms-Form-stories.572090bb.iframe.bundle.js.map