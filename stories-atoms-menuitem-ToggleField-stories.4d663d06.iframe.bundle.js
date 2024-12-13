"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5815],{"./src/stories/atoms/menuitem/ToggleField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/ToggleField.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/MenuItem/ToggleField",component:_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__.A,tags:["atoms","autodocs"],parameters:{docs:{description:{component:"\nThe `ToggleField` component is a reusable field with a toggle button on the right side. It allows toggling between `true` and `false` values.\n\n### Features:\n- **Icon:** Optional icon displayed on the left.\n- **Field Name:** Label for the field displayed prominently.\n- **Toggle Button:** Positioned on the right, toggles the value when clicked.\n- **Boolean Value:** `true` when the toggle is active, `false` otherwise.\n- **Callback:** Triggers the `onChange` function with the updated value.\n\n### Props:\n- `icon` (optional): A React component for displaying an icon.\n- `name`: The label for the field.\n- `value`: The current state of the toggle button (`true` or `false`).\n- `onChange`: Callback function triggered when the state changes.\n\n### Example Usage:\n```jsx\nimport React, { useState } from 'react';\nimport ToggleField from './ToggleField';\nimport { UserIcon2 } from '../../../components/icons/Icons';\n\nconst Example = () => {\n  const [isToggled, setIsToggled] = useState(false);\n\n  const handleChange = (newValue) => {\n    console.log('Toggle Value:', newValue);\n    setIsToggled(newValue);\n  };\n\n  return (\n    <ToggleField\n      icon={UserIcon2}\n      name=\"Enable Feature\"\n      value={isToggled}\n      onChange={handleChange}\n    />\n  );\n};\n\nexport default Example;\n```\n"}}}},Default=(args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.value);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{value,onChange:newValue=>{setValue(newValue)}}))}).bind({});Default.args={icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Enable Feature",value:!1},Default.parameters={docs:{description:{story:"\nThis is the default usage of the `ToggleField` component. The toggle button reflects the `true/false` value and switches its state when clicked."}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = newValue => {\n    setValue(newValue);\n  };\n  return <ToggleField {...args} value={value} onChange={handleChange} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/ToggleField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;

`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,ToggleWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
`,ToggleButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  width: 40px;
  height: 20px;
  border-radius: 12px;
  background-color: ${props=>props.checked?"#3b82f6":"#d1d5db"};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: ${props=>props.checked?"20px":"2px"};
    transition: left 0.3s;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleButton,{checked:value,onClick:()=>{onChange(!value)}})))}}}]);
//# sourceMappingURL=stories-atoms-menuitem-ToggleField-stories.4d663d06.iframe.bundle.js.map