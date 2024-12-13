"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1633],{"./src/stories/pages/ManageNotifications.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ManageNotifications_stories});var react=__webpack_require__("./node_modules/react/index.js"),EditStackedList=__webpack_require__("./src/components/molecules/stackedlist/EditStackedList.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const pages_ManageNotifications=()=>{const[field1,setField1]=(0,react.useState)("Initial Value 1"),[field2,setField2]=(0,react.useState)("Initial Value 2"),[name,setName]=(0,react.useState)("John Doe"),[gender,setGender]=(0,react.useState)("male"),[notifications,setNotifications]=(0,react.useState)(!0),[toggleField,setToggleField]=(0,react.useState)(!1);console.log(field1,field2,name,gender,toggleField);const updateState=(fieldName,value)=>{"field1"===fieldName&&setField1(value),"field2"===fieldName&&setField2(value),"name"===fieldName&&setName(value),"gender"===fieldName&&setGender(value),"notifications"===fieldName&&setNotifications(value),"toggleField"===fieldName&&setToggleField(value)};return react.createElement("div",{style:{padding:"20px"}},react.createElement("header",{style:{display:"flex",alignItems:"center",marginBottom:"20px"}},react.createElement("div",null,react.createElement(Icons.ChevronLeftIcon,{className:"w-6 h-6"})),react.createElement("h1",{className:"ml-10 text-2xl"},"Manage Notifications")),react.createElement("main",null,react.createElement(EditStackedList.A,{updateState,items:[{type:"EditableTextField",props:{name:"Name",fieldName:"field1",currentState:field1}},{type:"SelectField",props:{name:"Category",fieldName:"field2",currentState:field2,options:["Option 1","Option 2","Option 3"]}},{type:"ToggleField",props:{name:"Enable Feature",fieldName:"toggleField",value:toggleField}}]}),react.createElement(EditStackedList.A,{title:"Settings",items:[{type:"EditableTextField",props:{fieldName:"name",value:"John Doe"}},{type:"SelectField",props:{fieldName:"gender",options:["Male","Female"],value:"Male"}},{type:"ToggleField",props:{name:"Notifications",fieldName:"notifications",value:notifications}}],updateState})),react.createElement("footer",{style:{marginTop:"20px"}},react.createElement("button",{onClick:async()=>{console.log("Saving changes:",{field1,field2,toggleField}),alert("Changes saved! (Simulated for Storybook)")},style:{padding:"10px 20px",fontSize:"16px",backgroundColor:"blue",color:"white"}},"Save Changes")))},ManageNotifications_stories={title:"Pages/ManageNotifications",component:pages_ManageNotifications,tags:["autodocs","pages"],parameters:{docs:{description:{component:"\n# ManageNotifications\n\nThe **ManageNotifications** component is a parent component that handles a form-like UI with editable fields and a toggle. \n\n### Features\n- **Editable Fields**: Text input and toggle components for editing data.\n- **State Management**: Centralized state updating function (`updateState`) shared with child components.\n- **Firestore Integration**: Saves changes to Firestore using the `saveChanges` function.\n- **Dynamic Fields**: Utilizes the `EditStackedList` component to dynamically render fields.\n\n### Usage\n```jsx\n<ManageNotifications />\n```\n\nThe component is ideal for managing user settings or preferences with a save functionality.\n        "}}}},Default=()=>react.createElement(pages_ManageNotifications,null);Default.storyName="Default Usage";const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <ManageNotifications />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/EditableTextField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
//# sourceMappingURL=stories-pages-ManageNotifications-stories.225db5f8.iframe.bundle.js.map