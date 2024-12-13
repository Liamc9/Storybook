"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4755],{"./src/stories/atoms/menuitem/SelectField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/SelectField.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/MenuItem/SelectField",component:_components_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_1__.A,tags:["atoms","autodocs"],parameters:{docs:{description:{component:"\nThe `SelectField` component is a reusable dropdown field designed to display a field name, the current value, and a dropdown icon. \n\n### Features:\n- **Icon:** Optional icon on the left side of the field.\n- **Field Name:** Displayed in bold text for emphasis.\n- **Current Value:** Displayed on the right in slightly lighter text.\n- **Dropdown:** Clicking the value or chevron icon opens a dropdown menu with options.\n- **Dynamic Options:** Pass an array of options to populate the dropdown.\n- **Callback:** Pass the selected value back to the parent component using the `onChange` callback.\n\n### Props:\n- `icon` (optional): A React component for displaying an icon.\n- `name`: The label for the field.\n- `value`: The currently selected value.\n- `options`: An array of options for the dropdown.\n- `onChange`: Callback for handling changes to the selected value.\n\n### Example Usage:\n```jsx\nimport React, { useState } from 'react';\nimport SelectField from './SelectField';\nimport { ReactComponent as SampleIcon } from './sample-icon.svg';\n\nconst Example = () => {\n  const [selectedValue, setSelectedValue] = useState('Option 1');\n\n  const handleChange = (newValue) => {\n    console.log('Selected Value:', newValue);\n    setSelectedValue(newValue);\n  };\n\n  return (\n    <SelectField\n      icon={SampleIcon}\n      name=\"Field Name\"\n      value={selectedValue}\n      options={['Option 1', 'Option 2', 'Option 3']}\n      onChange={handleChange}\n    />\n  );\n};\n\nexport default Example;\n```\n"}}}},Default=(args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.value);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{value,onChange:newValue=>{setValue(newValue)}}))}).bind({});Default.args={icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Field Name",value:"Option 1",options:["Option 1","Option 2","Option 3"]},Default.parameters={docs:{description:{story:"\nThis is the default usage of the `SelectField` component. It displays a dropdown field with an optional icon, a field name, and a current value.\n\n- **Click on the value or chevron icon** to open the dropdown menu.\n- **Select a new value** to trigger the `onChange` callback and update the displayed value."}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = newValue => {\n    setValue(newValue);\n  };\n  return <SelectField {...args} value={value} onChange={handleChange} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/SelectField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
  position: relative;
`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,FieldValue=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  margin-right: 12px;
`,Dropdown=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.select`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  border: 1px solid #d1d5db; /* Equivalent to border-gray-300 */
  border-radius: 4px;
  padding: 4px 8px;
  width: auto;
  background: white;
  cursor: pointer;
`,ChevronWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s;

  &:hover {
    color: #4b5563;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,options,onChange,placeholder="Select value..."}=_ref;const[isDropdownOpen,setIsDropdownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),toggleDropdown=()=>{setIsDropdownOpen(!0)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,{ref:dropdownRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),isDropdownOpen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dropdown,{value,onChange:e=>{const newValue=e.target.value;setIsDropdownOpen(!1),onChange(newValue)},autoFocus:!0,onBlur:()=>setIsDropdownOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0},placeholder),options.map((option=>"object"==typeof option?react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label):react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option,value:option},option)))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldValue,{onClick:toggleDropdown},value?(val=>{const option=options.find((opt=>"object"==typeof opt?opt.value===val:opt===val));return"object"==typeof option?option.label:option})(value):placeholder),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChevronWrapper,{onClick:toggleDropdown},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronUpDownIcon,{className:"w-6 h-6"})))}}}]);
//# sourceMappingURL=stories-atoms-menuitem-SelectField-stories.d3bb3b0d.iframe.bundle.js.map