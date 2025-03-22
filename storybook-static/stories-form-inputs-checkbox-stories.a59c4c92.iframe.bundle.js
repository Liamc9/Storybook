"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8201],{"./src/stories/form/inputs/checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnimatedCheckbox:()=>AnimatedCheckbox,Default:()=>Default,SVGCheckbox:()=>SVGCheckbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const CheckboxWrapper=styled_components_browser_esm.default.div`
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
`,checkboxInputs_Checkbox=_ref=>{let{label,...props}=_ref;return react.createElement(CheckboxWrapper,{gridSpan:props.gridSpan},react.createElement(StyledInput,_extends({type:"checkbox"},props)),label&&react.createElement(StyledLabel,{htmlFor:props.id},label))};function Checkbox2_extends(){return Checkbox2_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Checkbox2_extends.apply(null,arguments)}const StyledWrapper=styled_components_browser_esm.default.div`
       grid-column: ${props=>props.gridSpan||"auto"};

  .checkbox-wrapper * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  .checkbox-wrapper input[type="checkbox"] {
    display: none;
  }

  .checkbox-wrapper label {
    --size: 50px;
    --shadow: calc(var(--size) * .07) calc(var(--size) * .1);
    position: relative;
    display: block;
    width: var(--size);
    height: var(--size);
    margin: 0 auto;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: 50%;
    box-shadow: 0 var(--shadow) #ffbeb8;
    cursor: pointer;
    transition: 0.2s ease transform, 0.2s ease background-color,
        0.2s ease box-shadow;
    overflow: hidden;
    z-index: 1;
  }

  .checkbox-wrapper label:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: calc(var(--size) * .7);
    height: calc(var(--size) * .7);
    margin: 0 auto;
    background-color: #fff;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: inset 0 var(--shadow) #ffbeb8;
    transition: 0.2s ease width, 0.2s ease height;
  }

  .checkbox-wrapper label:hover:before {
    width: calc(var(--size) * .55);
    height: calc(var(--size) * .55);
    box-shadow: inset 0 var(--shadow) #ff9d96;
  }

  .checkbox-wrapper label:active {
    transform: scale(0.9);
  }

  .checkbox-wrapper .tick_mark {
    position: absolute;
    top: -1px;
    right: 0;
    left: calc(var(--size) * -.05);
    width: calc(var(--size) * .6);
    height: calc(var(--size) * .6);
    margin: 0 auto;
    margin-left: calc(var(--size) * .14);
    transform: rotateZ(-40deg);
  }

  .checkbox-wrapper .tick_mark:before,
    .checkbox-wrapper .tick_mark:after {
    content: "";
    position: absolute;
    background-color: #fff;
    border-radius: 2px;
    opacity: 0;
    transition: 0.2s ease transform, 0.2s ease opacity;
  }

  .checkbox-wrapper .tick_mark:before {
    left: 0;
    bottom: 0;
    width: calc(var(--size) * .1);
    height: calc(var(--size) * .3);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
    transform: translateY(calc(var(--size) * -.68));
  }

  .checkbox-wrapper .tick_mark:after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(var(--size) * .1);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
    transform: translateX(calc(var(--size) * .78));
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label:before {
    width: 0;
    height: 0;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label .tick_mark:before,
    .checkbox-wrapper input[type="checkbox"]:checked + label .tick_mark:after {
    transform: translate(0);
    opacity: 1;
  }`,checkboxInputs_Checkbox2=_ref=>{let{label,...props}=_ref;return react.createElement(StyledWrapper,{gridSpan:props.gridSpan},react.createElement("div",{className:"checkbox-wrapper"},react.createElement("input",Checkbox2_extends({id:props.id,type:"checkbox"},props)),react.createElement("label",{htmlFor:props.id}," ",react.createElement("div",{className:"tick_mark"}))))};var Checkbox3=__webpack_require__("./src/components/form/inputs/checkboxInputs/Checkbox3.jsx");const checkbox_stories={title:"Form/Inputs/Checkbox",component:checkboxInputs_Checkbox,subcomponents:{Checkbox2:checkboxInputs_Checkbox2,Checkbox3:Checkbox3.A},argTypes:{label:{control:"text",description:"Label for the checkbox",defaultValue:"Default Checkbox"},id:{control:"text",description:"Unique ID for the checkbox",defaultValue:"checkbox-default"},checked:{control:"boolean",description:"Checkbox checked state",defaultValue:!1}}},Default=(args=>react.createElement(checkboxInputs_Checkbox,args)).bind({});Default.args={label:"Default Checkbox",id:"checkbox-default"};const AnimatedCheckbox=(args=>react.createElement(checkboxInputs_Checkbox2,args)).bind({});AnimatedCheckbox.args={label:"Animated Checkbox",id:"checkbox-animated"};const SVGCheckbox=(args=>react.createElement(Checkbox3.A,args)).bind({});SVGCheckbox.args={label:"SVG Checkbox",id:"checkbox-svg"};const __namedExportsOrder=["Default","AnimatedCheckbox","SVGCheckbox"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <Checkbox {...args} />;\n}",...Default.parameters?.docs?.source}}},AnimatedCheckbox.parameters={...AnimatedCheckbox.parameters,docs:{...AnimatedCheckbox.parameters?.docs,source:{originalSource:"args => {\n  return <Checkbox2 {...args} />;\n}",...AnimatedCheckbox.parameters?.docs?.source}}},SVGCheckbox.parameters={...SVGCheckbox.parameters,docs:{...SVGCheckbox.parameters?.docs,source:{originalSource:"args => {\n  return <Checkbox3 {...args} />;\n}",...SVGCheckbox.parameters?.docs?.source}}}},"./src/components/form/inputs/checkboxInputs/Checkbox3.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
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
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{label,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({id:props.id,type:"checkbox"},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 64 64",height:"2em",width:"2em"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",pathLength:"575.0541381835938",className:"path"}))))}}}]);
//# sourceMappingURL=stories-form-inputs-checkbox-stories.a59c4c92.iframe.bundle.js.map