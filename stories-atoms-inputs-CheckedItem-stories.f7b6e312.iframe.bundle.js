"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3226],{"./src/stories/atoms/inputs/CheckedItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_inputs_CheckedItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/inputs/CheckedItem.jsx"),liamc9npm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/liamc9npm/dist/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Inputs/CheckedItem",component:_components_atoms_inputs_CheckedItem__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `CheckedItem` component is a customizable checkbox input that can include an icon and a label. It provides flexibility for use cases that require enhanced user interaction or visualization with icons.\n\n### Features\n- **Customizable Icon**: Select from a range of icons to display within the checkbox.\n- **Interactive State**: Supports controlled state changes with visual feedback.\n- **Label Support**: Includes a label for context or explanation.\n\n### Usage\n\n```jsx\nimport React, { useState } from 'react';\nimport CheckedItem from './components/CheckedItem';\nimport * as Icons from './assets/Icons';\n\nconst ExampleComponent = () => {\n  const [isChecked, setIsChecked] = useState(false);\n  const IconComponent = Icons['HomeIcon'];\n\n  return (\n    <CheckedItem\n      label=\"Custom Checkbox\"\n      checked={isChecked}\n      onChange={() => setIsChecked(!isChecked)}\n      svg={<IconComponent className=\"w-6 h-6\" />}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{label:{control:"text",description:"Label text for the checkbox."},checked:{control:"boolean",description:"Indicates whether the checkbox is checked."},iconName:{control:"select",options:Object.keys(liamc9npm__WEBPACK_IMPORTED_MODULE_2__),description:"Name of the icon to display inside the checkbox."}}},Default=(args=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.checked),IconComponent=liamc9npm__WEBPACK_IMPORTED_MODULE_2__[args.iconName];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_inputs_CheckedItem__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{checked,onChange:()=>setChecked(!checked),svg:react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{className:"w-6 h-6"})}))}).bind({});Default.args={label:"Custom Checkbox",checked:!1,iconName:"HomeIcon"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [checked, setChecked] = useState(args.checked);\n  const IconComponent = Icons[args.iconName];\n  return <CheckedItem {...args} checked={checked} onChange={() => setChecked(!checked)} svg={<IconComponent className="w-6 h-6" />} />;\n}',...Default.parameters?.docs?.source}}}},"./src/components/atoms/inputs/CheckedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  color: #94a3b8; /* Equivalent to text-slate-400 */
  position: relative;
  cursor: pointer;
`,HiddenCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input.attrs({type:"checkbox"})`
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 3px solid #cbd5e1; /* Equivalent to border-slate-300 */
  background-color: #ffffff; /* bg-white */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.2s ease-in-out;
  width: ${_ref=>{let{width}=_ref;return width}};
  height: ${_ref2=>{let{height}=_ref2;return height}};

  /* Checked State */
  ${HiddenCheckbox}:checked + & {
    border-color: ${_ref3=>{let{color}=_ref3;return color||"#3b82f6"}}; /* Default to blue-500 */
    box-shadow: 0 4px 6px ${_ref4=>{let{color}=_ref4;return color}}33; /* 10% opacity */
    color: ${_ref5=>{let{color}=_ref5;return color||"#3b82f6"}};

    &::before {
      content: '✓';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid ${_ref6=>{let{color}=_ref6;return color||"#3b82f6"}};
      border-radius: 50%;
      background-color: ${_ref7=>{let{color}=_ref7;return color||"#3b82f6"}};
      opacity: 1;
      transform: scale(1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 0.75rem;
      transition: all 0.2s ease-in-out;
    }
  }

  /* Hover State */
  &:hover {
    border-color: ${_ref8=>{let{color}=_ref8;return color||"#3b82f6"}};

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Pseudo-element before */
  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 3px solid ${_ref9=>{let{color}=_ref9;return color||"#3b82f6"}};
    border-radius: 50%;
    background-color: ${_ref10=>{let{color}=_ref10;return color||"#3b82f6"}};
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  /* SVG and Label Text */
  > span {
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-size: 0.875rem; /* Equivalent to text-sm */
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref11=>{let{label,svg,onChange,checked,height="7rem",width="7rem",color="#3b82f6"}=_ref11;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(HiddenCheckbox,{onChange,checked}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSpan,{height,width,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,svg),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label))))}}}]);
//# sourceMappingURL=stories-atoms-inputs-CheckedItem-stories.f7b6e312.iframe.bundle.js.map