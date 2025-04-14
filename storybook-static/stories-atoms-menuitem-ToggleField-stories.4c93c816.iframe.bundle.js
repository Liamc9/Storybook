"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5815],{"./src/stories/atoms/menuitem/ToggleField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/ToggleField.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/MenuItem/ToggleField",component:_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__.A,tags:["atoms","autodocs"]},Default=(args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.value);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{value,onChange:newValue=>{setValue(newValue)}}))}).bind({});Default.args={icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Enable Feature",value:!1};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = newValue => {\n    setValue(newValue);\n  };\n  return <ToggleField {...args} value={value} onChange={handleChange} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/ToggleField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_form_inputs_toggleSwitches_ToggleSwitch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/inputs/toggleSwitches/ToggleSwitch.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange,activeColor,size,id,...rest}=_ref;const toggleId=id||`toggle-${name.replace(/\s+/g,"-").toLowerCase()}`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_inputs_toggleSwitches_ToggleSwitch__WEBPACK_IMPORTED_MODULE_1__.A,_extends({id:toggleId,checked:value,onChange:event=>{onChange(event.target.checked)},activeColor,size},rest)))}},"./src/components/form/inputs/toggleSwitches/ToggleSwitch.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ToggleWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  align-items: center;
`,ToggleLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  margin-left: 8px;
  font-weight: 500;
`,ToggleInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input.attrs({type:"checkbox"})`
  /* Use the "size" prop (default to 50px if not provided) */
  width: ${props=>props.size?`${props.size}px`:"50px"};
  height: ${props=>props.size?props.size/2+"px":"25px"};
  -webkit-appearance: none;
  background: ${props=>props.inactiveColor||"#c6c6c6"};
  outline: none;
  border-radius: ${props=>props.size?props.size/2+"px":"25px"};
  position: relative;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: ${props=>props.activeColor||"#007bff"};
  }

  &:before {
    content: '';
    position: absolute;
    /* Knob size scales in proportion to the default (21px when size=50) */
    width: ${props=>props.size?props.size/50*21+"px":"21px"};
    height: ${props=>props.size?props.size/50*21+"px":"21px"};
    border-radius: 50%;
    /* Offset scales proportionally (default 2px) */
    top: ${props=>props.size?props.size/50*2+"px":"2px"};
    left: ${props=>props.size?props.size/50*2+"px":"2px"};
    background: white;
    transition: transform 0.3s;
  }

  &:checked:before {
    /* Translation distance scales proportionally (25px when size=50) */
    transform: translateX(${props=>props.size?props.size/50*25+"px":"25px"});
  }

  &:disabled {
    background: #e9ecef;
    cursor: not-allowed;

    &:before {
      background: #ced4da;
    }
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleInput,props),props.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleLabel,{htmlFor:props.id},props.label))}}}]);
//# sourceMappingURL=stories-atoms-menuitem-ToggleField-stories.4c93c816.iframe.bundle.js.map