"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6451],{"./src/stories/search/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Modal=__webpack_require__("./src/components/atoms/modals/Modal.jsx"),FilterLogic=__webpack_require__("./src/components/search/FilterLogic.js"),RangeSlider=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),SelectInput=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx");const Button=styled_components_browser_esm.default.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 1rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5);
  }
`,FilterContainer=styled_components_browser_esm.default.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  width: 500px;
`,GroupContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components_browser_esm.default.h5`
  margin-bottom: 0.5rem;
`,filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},search_FilterModal=_ref=>{let{onChange}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1);return react.createElement(react.Fragment,null,react.createElement(Button,{onClick:()=>setIsOpen(!0)},"Open Filters"),react.createElement(Modal.A,{isModalOpen:isOpen,closeModal:()=>setIsOpen(!1),title:"Filters",animate:!0},react.createElement(FilterLogic.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=filtersConfig.status,priorityFilter=filtersConfig.priority;return react.createElement(FilterContainer,null,react.createElement(GroupContainer,null,react.createElement(GroupLabel,null,statusFilter.label),react.createElement(SelectInput.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react.createElement(GroupContainer,null,react.createElement(GroupLabel,null,priorityFilter.label),react.createElement(RangeSlider.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))))},Modal_stories={title:"Search/Filters/FilterModal",component:search_FilterModal,parameters:{docs:{description:{component:"\n### FilterModal Component\n\nThis component renders a button that opens a bottom drawer containing filter options when clicked.\n\n#### Features\n- **Trigger Button:** A button labeled \"Open Filters\" that opens a bottom drawer.\n- **Bottom Drawer:** The drawer slides up from the bottom of the screen and displays filter options.\n- **Filter Interface:** Includes a status dropdown and a priority range slider for selecting filter values.\n- **Filter Handling:** Invokes the provided `onChange` callback whenever filter selections change.\n\n#### How to Use\n\nTo integrate the `FilterModal` component:\n\n1. **Import the Component:**\n   ```jsx\n   import FilterModal from './path/to/FilterModal';\n   ```\n\n2. **Use the Component in Your JSX:**\n   ```jsx\n   <FilterModal onChange={(selectedFilters) => {\n     console.log('Selected Filters:', selectedFilters);\n     // Handle filter changes accordingly\n   }} />\n   ```\n\n3. **Customize If Needed:**\n   - Modify the filter configuration inside `FilterModal.jsx` to change available filters.\n   - Adjust styling by editing the styled-components within the file.\n\nThe component is self-contained, handling both the display of the filter UI in a bottom drawer and the button that opens it.\n        "}}}},Default=()=>react.createElement(search_FilterModal,{onChange:filters=>console.log("Selected Filters:",filters)}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <FilterModal onChange={filters => console.log('Selected Filters:', filters)} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/inputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}},"./src/components/atoms/modals/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Overlay=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `}
`,ModalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      animation: ${slideIn} 0.3s ease-out forwards;
    `}
`,CloseButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #333;

  &:hover {
    color: #555;
  }
`,ModalContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  padding: 16px;
`,ModalTitle=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`,ModalBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  font-size: 1rem;
  color: #555;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{isModalOpen,closeModal,title,children,animate=!0}=_ref;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{animate,onClick:closeModal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContainer,{animate,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:closeModal,"aria-label":"Close Modal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.XIcon,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalTitle,{id:"modal-title"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null}},"./src/components/search/FilterLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{filters,onChange,children}=_ref;const initialSelections=filters.reduce(((acc,group)=>(acc[group.category]=[],acc)),{}),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelections);return"function"==typeof children?children({filters,selectedFilters,setSelection:(category,value)=>{setSelectedFilters((prev=>{const newSelections={...prev,[category]:[value]};return onChange&&onChange(newSelections),newSelections}))}}):null}}}]);
//# sourceMappingURL=stories-search-Modal-stories.828f836f.iframe.bundle.js.map