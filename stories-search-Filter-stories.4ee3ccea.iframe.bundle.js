"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6378],{"./src/stories/search/Filter.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_search_Filter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/Filter.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Search/Filters/Filter",component:_components_search_Filter__WEBPACK_IMPORTED_MODULE_1__.Ay,parameters:{docs:{description:{component:"\n### Filter Component\n\nThis component demonstrates a customizable filter layout using `FilterLogic`. It features:\n- A dropdown for selecting a status.\n- A range slider for selecting a priority level.\n\nIt accepts an `onChange` prop to receive updates on filter selections.\n\n### Customizing the Component\n\nTo customize the filters:\n1. **Modify the filters configuration:**  \n   Update the `filters` array in `Filter.jsx` to add, remove, or alter filter groups. For example:\n\n   ```jsx\n   const filters = [\n     {\n       category: 'status',\n       label: 'Status',\n       type: 'dropdown',  // specify type (dropdown or range)\n       options: [\n         { value: 'completed', label: 'Completed', initial: true },\n         { value: 'pending', label: 'Pending' },\n         { value: 'inProgress', label: 'In Progress' },\n       ],\n     },\n     // Add new filter groups or modify existing ones here\n   ];\n   ```\n\n2. **Adjust display logic:**  \n   Depending on the filter type (`dropdown` or `range`), adjust how the filter is rendered in the `Filter.jsx` component. The component uses conditional rendering based on the `type` property to decide between a select dropdown and a range slider.\n\n3. **Customize styles:**  \n   The component uses styled-components for styling. To change styling, update the styled-components in `FilterStyles.js` or create new ones as needed.\n\nBy changing the `filters` configuration and relevant styled components, you can customize the `Filter` component for your needs.\n        "}}}},mockOnChange=selected=>{console.log("Selected filters:",selected)},Default=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Filter__WEBPACK_IMPORTED_MODULE_1__.Ay,{onChange:mockOnChange}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Filter onChange={mockOnChange} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/inputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`,RangeInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: relative;
  width: 100%;
  height: 50px;
`,Track=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  background: #e0e0e0;
  border-radius: 5px;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: ${props=>props.left}%;
    right: ${props=>100-props.right}%;
    height: 100%;
    background: #A855F7;
    border-radius: 5px;
    z-index: 1;
  }
`,ThumbValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`,Slider=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #A855F7;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",onChange}=_ref;const[range,setRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([min,max]),calculatePercentage=value=>(value-min)/(max-min)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))}},"./src/components/atoms/inputs/SelectInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SelectContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: relative;
  font-family: sans-serif;
`,sharedSelectStyles=styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  appearance: none;
  transition: border-color 0.3s ease-in-out;
`,StyledSelect=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.select`
  ${sharedSelectStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
  color: ${_ref2=>{let{value}=_ref2;return value?"#000":"#6B7280"}}; /* Default placeholder style */
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${_ref3=>{let{isFocused,color}=_ref3;return isFocused?color:"#6B7280"}};
  font-size: 1rem;
  pointer-events: none;
  transform: ${_ref4=>{let{hasValue,isFocused}=_ref4;return hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"}};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,StyledArrow=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: ${_ref5=>{let{isFocused,color}=_ref5;return isFocused?color:"#6B7280"}};
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}},"./src/components/search/Filter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FilterLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/FilterLogic.js"),_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx");const FilterContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: grid;
  gap: 2rem;
`,GroupContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h5`
  margin-bottom: 0.5rem;
`,filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FilterLogic__WEBPACK_IMPORTED_MODULE_1__.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=filtersConfig.status,priorityFilter=filtersConfig.priority;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,statusFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,priorityFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))}},"./src/components/search/FilterLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{filters,onChange,children}=_ref;const initialSelections=filters.reduce(((acc,group)=>(acc[group.category]=[],acc)),{}),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelections);return"function"==typeof children?children({filters,selectedFilters,setSelection:(category,value)=>{setSelectedFilters((prev=>{const newSelections={...prev,[category]:[value]};return onChange&&onChange(newSelections),newSelections}))}}):null}}}]);
//# sourceMappingURL=stories-search-Filter-stories.4ee3ccea.iframe.bundle.js.map