"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1177],{"./src/components/form/forms/FormLogic.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormLogic});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function FormLogic(_ref){let{children,pages=[],initialData={},onSubmit,validate=!1,customValidate}=_ref;const[formData,setFormData]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData),[errors,setErrors]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),[currentPageIndex,setCurrentPageIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),isMultiPage=pages.length>0,currentPage=isMultiPage?pages[currentPageIndex]:null,isLastPage=isMultiPage&&currentPageIndex===pages.length-1;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFormData(initialData)}),[initialData]);const handleChange=event=>{const{name,type,value,checked}=event.target;setFormData((prev=>({...prev,[name]:"checkbox"===type?checked:value}))),errors[name]&&setErrors((prevErr=>({...prevErr,[name]:void 0})))},validateRequiredFields=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((elements=>{const validationErrors={},traverseChildren=nodeChildren=>{react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(nodeChildren,(child=>{var _child$props;if(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child))return;const{name,required,label}=child.props||{};if(name&&required){const value=formData[name],isEmptyString="string"==typeof value&&""===value.trim();(null==value||isEmptyString||"boolean"==typeof value&&!value)&&(validationErrors[name]=`${label||name} is required.`)}null!==(_child$props=child.props)&&void 0!==_child$props&&_child$props.children&&traverseChildren(child.props.children)}))};return traverseChildren(elements),validationErrors}),[formData]),enhanceChildren=elements=>react__WEBPACK_IMPORTED_MODULE_0__.Children.map(elements,(child=>{if(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child))return child;const{name,type,value:childValue,children:childChildren}=child.props;if(name){const extraProps={onChange:handleChange,name};return"checkbox"===type?extraProps.checked=!!formData[name]:"radio"===type?extraProps.checked=formData[name]===childValue:extraProps.value=formData[name]||"",errors[name]&&(extraProps.error=errors[name]),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,extraProps)}return childChildren?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{children:enhanceChildren(childChildren)}):child}));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:e=>{e.preventDefault();let validationErrors={};isMultiPage?validationErrors=validateRequiredFields(currentPage.content.props.children):validate&&(validationErrors=validateRequiredFields(children));const customValidationFn=isMultiPage?currentPage.customValidate:customValidate;if(customValidationFn){const customErrors=customValidationFn(formData);validationErrors={...validationErrors,...customErrors}}Object.keys(validationErrors).length>0?setErrors(validationErrors):isMultiPage&&!isLastPage?setCurrentPageIndex((prev=>prev+1)):null==onSubmit||onSubmit(formData)}},enhanceChildren(isMultiPage?currentPage.content:children),isMultiPage&&"function"==typeof children&&children({currentPageIndex,isLastPage,handlePrevious:()=>{currentPageIndex>0&&(setCurrentPageIndex((prev=>prev-1)),setErrors({}))}}))}},"./src/components/form/inputs/checkboxInputs/Checkbox3.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .container {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  .container svg {
    overflow: visible;
  }

  .path {
    fill: none;
    stroke: black;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
    stroke-dasharray: 241 9999999;
    stroke-dashoffset: 0;
  }

  .container input:checked ~ svg .path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({id:props.id,type:"checkbox"},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 64 64",height:"2em",width:"2em"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",pathLength:"575.0541381835938",className:"path"}))))}},"./src/components/form/inputs/colorPickers/ColorPicker.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ColorPickerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  margin-bottom: 8px;
  font-weight: 600;
`,ColorInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  cursor: pointer;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorPickerWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,{htmlFor:props.id},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorInput,_extends({type:"color"},props)))}},"./src/components/form/inputs/formButtons/ResetButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.button`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,_extends({type:"reset"},props),children)}},"./src/components/form/inputs/formButtons/SubmitButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.button`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{children,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,_extends({type:"submit"},props),children)}},"./src/components/form/inputs/radioInputs/RadioButtons2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,options=[],...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"radio-input"},options.map((_ref2=>{let{id,value,label}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{key:id,htmlFor:id},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({type:"radio",id,name,value},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text"},label))}))))}},"./src/components/form/inputs/rangeInputs/RangeInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const RangeInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  transition: background 0.3s ease;

  &:hover {
    background: #ccc;
  }

  &:focus {
    background: #bbb;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputWrapper,{gridSpan:props.gridSpan},label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:props.id},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInput,_extends({type:"range"},props)))}},"./src/components/form/inputs/textInputs/TextInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputWrapper,{gridSpan:props.gridSpan},props.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:props.id},props.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInput,props))}},"./src/components/form/inputs/toggleSwitches/ToggleSwitch2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
        grid-column: ${props=>props.gridSpan||"auto"};

  .theme-switch {
    --toggle-size: 30px;
    /* the size is adjusted using font-size,
       this is not transform scale,
       so you can choose any size */
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 6.25em;
    /* radius 0 - minecraft mode :) */
    --container-light-bg: #3D7EAE;
    --container-night-bg: #1D1F2C;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ECCA2F;
    --moon-bg: #C4C9D1;
    --spot-color: #959DB1;
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    --stars-color: #fff;
    --clouds-color: #F3FDFF;
    --back-clouds-color: #AACADF;
    --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);
  }

  .theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    -webkit-box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__container::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    -webkit-box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    border-radius: var(--container-radius)
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: var(--circle-container-offset);
    border-radius: var(--container-radius);
    -webkit-box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: var(--circle-transition);
    -o-transition: var(--circle-transition);
    transition: var(--circle-transition);
    pointer-events: none;
  }

  .theme-switch__sun-moon-container {
    pointer-events: auto;
    position: relative;
    z-index: 2;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: var(--container-radius);
    background-color: var(--sun-bg);
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    overflow: hidden;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  .theme-switch__moon {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: var(--moon-bg);
    border-radius: inherit;
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__spot {
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
    -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  }

  .theme-switch__spot:nth-of-type(2) {
    width: 0.375em;
    height: 0.375em;
    top: 0.937em;
    left: 1.375em;
  }

  .theme-switch__spot:nth-last-of-type(3) {
    width: 0.25em;
    height: 0.25em;
    top: 0.312em;
    left: 0.812em;
  }

  .theme-switch__clouds {
    width: 1.25em;
    height: 1.25em;
    background-color: var(--clouds-color);
    border-radius: var(--container-radius);
    position: absolute;
    bottom: -0.625em;
    left: 0.312em;
    -webkit-box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  }

  .theme-switch__stars-container {
    position: absolute;
    color: var(--stars-color);
    top: -100%;
    left: 0.312em;
    width: 2.75em;
    height: auto;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  /* actions */

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em)
  }

  .theme-switch__circle-container:hover {
    left: calc(var(--circle-container-offset) + 0.187em);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
    bottom: -4.062em;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"theme-switch"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({type:"checkbox",className:"theme-switch__checkbox",name},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__clouds"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__stars-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144 55",fill:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",fill:"currentColor"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__circle-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__sun-moon-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__moon"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__spot"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__spot"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"theme-switch__spot"})))))))}}}]);
//# sourceMappingURL=1177.0b0f2c81.iframe.bundle.js.map