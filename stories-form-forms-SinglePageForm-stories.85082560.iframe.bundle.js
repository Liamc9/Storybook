"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1831],{"./src/stories/form/forms/SinglePageForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PreFilled:()=>PreFilled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_form_forms_SinglePageForm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/forms/SinglePageForm.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Forms/SinglePageForm",component:_components_form_forms_SinglePageForm__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:'\n\n# SinglePageForm Component\n\nThe `SinglePageForm` component is a versatile and customizable form built with React. It includes various input types such as text inputs, text areas, range inputs, and submit buttons. The component uses `FormLogic` for handling form state and submission, and `styled-components` for styling.\n\n### Features\n- **Multiple Input Types**: Supports text, email, textarea, range, and more.\n- **Pre-filled Data**: Ability to initialize form fields with default values.\n- **Customizable Styling**: Easily adjust styles using `styled-components`.\n- **SinglePageForm Validation**: Ensures required fields are filled and valid.\n\n### Usage in Parent\n\n```jsx\nimport React from \'react\';\nimport SinglePageForm from \'./components/SinglePageForm\';\nimport { getFirestore, collection, addDoc } from \'firebase/firestore\';\nimport { db } from \'../firebase-config\'; // Ensure the correct path\n\nconst App = () => {\n  const handleFormSubmit = async (data) => {\n  try {\n    const docRef = await addDoc(collection(db, "forms"), data);\n    console.log("Document written with ID: ", docRef.id);\n  } catch (e) {\n    console.error("Error adding document: ", e);\n  }\n};\n\n  return (\n    <div>\n      <h1>Feedback</h1>\n      <SinglePageForm handleFormSubmit={handleFormSubmit} />\n    </div>\n  );\n};\n\nexport default App;\n```\n\n### Customization\n\n#### 1. **Initial SinglePageForm Data**\n\nPre-fill the form with initial data by passing the `initialData` prop.\n\n```jsx\nconst initialFormData = {\n  name: \'Jane Smith\',\n  email: \'jane.smith@example.com\',\n  message: \'I love your service!\',\n  rating: 4,\n};\n\n<SinglePageForm handleFormSubmit={handleFormSubmit} initialData={initialFormData} />\n```\n\n#### 2. **Adding or Removing Fields**\n\nModify the JSX within the `FormLogic` component to add or remove form fields.\n\n```jsx\n<FormContainer>\n  <TextInput label="Name" type="text" name="name" id="name" required />\n  <TextInput label="Email" type="email" name="email" id="email" required />\n  <TextAreaInput label="Message" name="message" id="message" rows={5} required />\n  <RangeInput label="Rating" name="rating" id="rating" min={1} max={5} required />\n  {/* Add more inputs as needed */}\n  <ButtonContainer>\n      <ResetButton>Clear</ResetButton>\n    <SubmitButton>Submit</SubmitButton>\n  </ButtonContainer>\n</FormContainer>\n```\n\n\n### Live Example\n\nInteract with the `SinglePageForm` component directly within Storybook to see how it behaves with different initial data and customization options.\n\n'}}},argTypes:{handleFormSubmit:{description:"Function to handle form submission.",action:"submitted"},initialFormData:{control:"object",description:"Initial data to populate the form fields.",table:{type:{summary:"object"}}}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_forms_SinglePageForm__WEBPACK_IMPORTED_MODULE_1__.A,args),Default=Template.bind({});Default.args={handleFormSubmit:data=>console.log("SinglePageForm Submitted:",data),initialFormData:{}};const PreFilled=Template.bind({});PreFilled.args={handleFormSubmit:data=>console.log("PreFilled SinglePageForm Submitted:",data),initialFormData:{name:"Bob Williams",email:"bob.williams@example.com",message:"Great service!",rating:5}};const __namedExportsOrder=["Default","PreFilled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SinglePageForm {...args} />",...Default.parameters?.docs?.source}}},PreFilled.parameters={...PreFilled.parameters,docs:{...PreFilled.parameters?.docs,source:{originalSource:"args => <SinglePageForm {...args} />",...PreFilled.parameters?.docs?.source}}}},"./src/components/form/forms/SinglePageForm.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SinglePageForm});var react=__webpack_require__("./node_modules/react/index.js"),FormLogic=__webpack_require__("./src/components/form/forms/FormLogic.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TextInput=__webpack_require__("./src/components/form/inputs/textInputs/TextInput.jsx"),SubmitButton=__webpack_require__("./src/components/form/inputs/formButtons/SubmitButton.jsx"),RangeInput=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput.jsx"),ColorPicker=__webpack_require__("./src/components/form/inputs/colorPickers/ColorPicker.jsx"),Checkbox3=__webpack_require__("./src/components/form/inputs/checkboxInputs/Checkbox3.jsx"),ToggleSwitch2=__webpack_require__("./src/components/form/inputs/toggleSwitches/ToggleSwitch2.jsx"),RadioButtons2=__webpack_require__("./src/components/form/inputs/radioInputs/RadioButtons2.jsx"),RangeInput2=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput2.jsx"),ResetButton=__webpack_require__("./src/components/form/inputs/formButtons/ResetButton.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const InputWrapper=styled_components_browser_esm.Ay.div`
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
//# sourceMappingURL=stories-form-forms-SinglePageForm-stories.85082560.iframe.bundle.js.map