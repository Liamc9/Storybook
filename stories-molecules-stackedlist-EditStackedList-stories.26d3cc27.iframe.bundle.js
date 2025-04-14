"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3146],{"./src/stories/molecules/stackedlist/EditStackedList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/stackedlist/EditStackedList.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/StackedList/EditStackedList",component:_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__.A,tags:["molecules","autodocs"]},Default=(args=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.items);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_stackedlist_EditStackedList__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{items,updateState:(fieldName,newValue)=>{setItems((prevItems=>prevItems.map((item=>(item.props.fieldName||item.props.name)===fieldName?{...item,props:{...item.props,value:newValue}}:item))))}}))}).bind({});Default.args={items:[{type:"EditableTextField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Username",fieldName:"Username",value:"John Doe",onUpdate:newValue=>console.log("Updated Username:",newValue)}},{type:"SelectField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Language",fieldName:"Language",value:"English",options:["English","Spanish","French"],onChange:newValue=>console.log("Updated Language:",newValue)}},{type:"ToggleField",props:{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon2,name:"Enable Notifications",fieldName:"Enable Notifications",value:!0,onChange:newValue=>console.log("Toggled Notifications:",newValue)}}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Initialize state using args.items\n  const [items, setItems] = useState(args.items);\n\n  // When a field updates, we update the corresponding item in state.\n  // We rely on each item having a unique identifier,\n  // which can be provided via the `fieldName` prop (or fall back to name).\n  const updateState = (fieldName, newValue) => {\n    setItems(prevItems => prevItems.map(item => {\n      const identifier = item.props.fieldName || item.props.name;\n      if (identifier === fieldName) {\n        return {\n          ...item,\n          props: {\n            ...item.props,\n            value: newValue\n          }\n        };\n      }\n      return item;\n    }));\n  };\n  return <EditStackedList {...args} items={items} updateState={updateState} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/EditableTextField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  font-size: 14px; /* Slightly larger for better readability */
  font-weight: 600; /* Makes it bold for emphasis */
  color: #6b7280; /* Tailwind's gray-500 equivalent */
`,EditableInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange}=_ref;const[currentValue,setCurrentValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(EditableInput,{value:currentValue,onChange:e=>{const newValue=e.target.value;setCurrentValue(newValue)},onBlur:()=>{onChange(currentValue)}}))}},"./src/components/atoms/menuitem/SelectField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
  position: relative;
`,FieldName=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,FieldValue=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  margin-right: 12px;
`,Dropdown=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.select`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  border: 1px solid #d1d5db; /* Equivalent to border-gray-300 */
  border-radius: 4px;
  padding: 4px 8px;
  width: auto;
  background: white;
  cursor: pointer;
`,ChevronWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s;

  &:hover {
    color: #4b5563;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,options,onChange,placeholder="Select value..."}=_ref;const[isDropdownOpen,setIsDropdownOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),toggleDropdown=()=>{setIsDropdownOpen(!0)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,{ref:dropdownRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),isDropdownOpen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dropdown,{value,onChange:e=>{const newValue=e.target.value;setIsDropdownOpen(!1),onChange(newValue)},autoFocus:!0,onBlur:()=>setIsDropdownOpen(!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0},placeholder),options.map((option=>"object"==typeof option?react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label):react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option,value:option},option)))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldValue,{onClick:toggleDropdown},value?(val=>{const option=options.find((opt=>"object"==typeof opt?opt.value===val:opt===val));return"object"==typeof option?option.label:option})(value):placeholder),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChevronWrapper,{onClick:toggleDropdown},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronUpDownIcon,{className:"w-6 h-6"})))}},"./src/components/atoms/menuitem/ToggleField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_form_inputs_toggleSwitches_ToggleSwitch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/inputs/toggleSwitches/ToggleSwitch.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleInput,props),props.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleLabel,{htmlFor:props.id},props.label))}},"./src/components/molecules/stackedlist/EditStackedList.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_menuitem_EditableTextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/EditableTextField.jsx"),_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/menuitem/SelectField.jsx"),_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/menuitem/ToggleField.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const CategoryWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  margin-bottom: 1.5rem;
`,CategoryTitle=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,ItemsContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,items,updateState,toggleColor}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryWrapper,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryTitle,null,title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemsContainer,null,items.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItem,{key:index},((item,index)=>{const{type,props}=item,childProps={...props,onChange:newValue=>{props.onChange&&props.onChange(newValue),updateState(props.fieldName,newValue)}};switch(type){case"EditableTextField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_EditableTextField__WEBPACK_IMPORTED_MODULE_1__.A,_extends({key:index},childProps));case"SelectField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_SelectField__WEBPACK_IMPORTED_MODULE_2__.A,_extends({key:index},childProps));case"ToggleField":return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_ToggleField__WEBPACK_IMPORTED_MODULE_3__.A,_extends({key:index},childProps,{activeColor:toggleColor}));default:return null}})(item,index))))))}}}]);
//# sourceMappingURL=stories-molecules-stackedlist-EditStackedList-stories.26d3cc27.iframe.bundle.js.map