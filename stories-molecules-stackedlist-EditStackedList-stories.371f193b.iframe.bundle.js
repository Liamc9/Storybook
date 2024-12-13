"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3146],{"./src/stories/molecules/stackedlist/EditStackedList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/stackedlist/EditStackedList.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/StackedList/EditStackedList",component:_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__.A,tags:["molecules","autodocs"],parameters:{docs:{description:{component:"\n### EditStackedList Component\n\nThe `EditStackedList` component displays a vertically stacked list of dynamic components. It supports components such as `EditableTextField`, `SelectField`, and `ToggleField`.\n\n#### Features:\n- Dynamically renders different types of components (e.g., editable text fields, dropdowns, toggle switches).\n- Accepts configuration through an `items` array, where each item specifies the type of component and its props.\n\n#### Props:\n- **`items`** (Array of Objects): Defines the list of components to render. Each object should have:\n  - **`type`** (String): The type of component to render (e.g., `EditableTextField`, `SelectField`, `ToggleField`).\n  - **`props`** (Object): The props to pass to the respective component.\n\n#### Usage Example:\n```jsx\nimport React, { useState } from 'react';\nimport EditStackedList from './EditStackedList';\nimport { UserIcon2 } from '../../icons/Icons';\n\nconst Example = () => {\n  const [textValue, setTextValue] = useState('Edit me');\n  const [selectValue, setSelectValue] = useState('Option 1');\n  const [toggleValue, setToggleValue] = useState(false);\n\n  const items = [\n    {\n      type: 'EditableTextField',\n      props: {\n        icon: UserIcon2,\n        name: 'Text Field',\n        value: textValue,\n        onUpdate: setTextValue,\n      },\n    },\n    {\n      type: 'SelectField',\n      props: {\n        icon: UserIcon2,\n        name: 'Select Field',\n        value: selectValue,\n        options: ['Option 1', 'Option 2', 'Option 3'],\n        onChange: setSelectValue,\n      },\n    },\n    {\n      type: 'ToggleField',\n      props: {\n        icon: UserIcon2,\n        name: 'Toggle Field',\n        value: toggleValue,\n        onChange: setToggleValue,\n      },\n    },\n  ];\n\n  return <EditStackedList items={items} />;\n};\n\nexport default Example;\n```\n"}}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Default.args={items:[{type:"EditableTextField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Username",value:"John Doe",onUpdate:newValue=>console.log("Updated Username:",newValue)}},{type:"SelectField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Language",value:"English",options:["English","Spanish","French"],onChange:newValue=>console.log("Updated Language:",newValue)}},{type:"ToggleField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Enable Notifications",value:!0,onChange:newValue=>console.log("Toggled Notifications:",newValue)}}]},Default.parameters={docs:{description:{story:"\nThis is the default usage of the `EditStackedList` component. It dynamically renders a stacked list of components (`EditableTextField`, `SelectField`, `ToggleField`), each configured with its specific props."}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <EditStackedList {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/EditableTextField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 14px; /* Slightly larger for better readability */
  font-weight: 600; /* Makes it bold for emphasis */
  color: #6b7280; /* Tailwind's gray-500 equivalent */
`,EditableInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Tailwind's gray-900 equivalent */
  background-color: transparent; /* Removes background */
  padding: 4px 0 2px; /* Adds vertical padding, no horizontal padding */
  border: none; /* Removes all borders */
  border-bottom: 2px solid #d1d5db; /* Bottom border only */
  transition: border-color 0.3s ease; /* Smooth transition for focus effect */
  outline: none; /* Removes default focus outline */

  &:focus {
    border-bottom: 2px solid #3b82f6; /* Blue bottom border on focus */
  }

  &:hover {
    border-bottom: 2px solid #6b7280; /* Slightly darker border on hover */
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange}=_ref;const[currentValue,setCurrentValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditableInput,{value:currentValue,onChange:e=>{const newValue=e.target.value;setCurrentValue(newValue)},onBlur:()=>{onChange(currentValue)}}))}},"./src/components/atoms/menuitem/SelectField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,options,onChange,placeholder="Select value..."}=_ref;const[isDropdownOpen,setIsDropdownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),toggleDropdown=()=>{setIsDropdownOpen(!0)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,{ref:dropdownRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),isDropdownOpen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dropdown,{value,onChange:e=>{const newValue=e.target.value;setIsDropdownOpen(!1),onChange(newValue)},autoFocus:!0,onBlur:()=>setIsDropdownOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0},placeholder),options.map((option=>"object"==typeof option?react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label):react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option,value:option},option)))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldValue,{onClick:toggleDropdown},value?(val=>{const option=options.find((opt=>"object"==typeof opt?opt.value===val:opt===val));return"object"==typeof option?option.label:option})(value):placeholder),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChevronWrapper,{onClick:toggleDropdown},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronUpDownIcon,{className:"w-6 h-6"})))}},"./src/components/atoms/menuitem/ToggleField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleButton,{checked:value,onClick:()=>{onChange(!value)}})))}},"./src/components/molecules/stackedlist/EditStackedList.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_menuitem_EditableTextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/EditableTextField.jsx"),_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/menuitem/SelectField.jsx"),_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/menuitem/ToggleField.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const CategoryWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`,CategoryTitle=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`,ItemsContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,items,updateState}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryTitle,null,title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemsContainer,null,items.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItem,{key:index},((item,index)=>{const{type,props}=item,childProps={...props,onChange:newValue=>updateState(props.fieldName,newValue)};switch(type){case"EditableTextField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_EditableTextField__WEBPACK_IMPORTED_MODULE_1__.A,_extends({key:index},childProps));case"SelectField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_2__.A,_extends({key:index},childProps));case"ToggleField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_3__.A,_extends({key:index},childProps));default:return null}})(item,index))))))}}}]);
//# sourceMappingURL=stories-molecules-stackedlist-EditStackedList-stories.371f193b.iframe.bundle.js.map