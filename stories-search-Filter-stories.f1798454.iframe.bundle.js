"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6378],{"./src/stories/search/Filter.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomDrawerFilter:()=>BottomDrawerFilter,DefaultFilter:()=>DefaultFilter,HorizontalButtonFilter:()=>HorizontalButtonFilter,ModalFilter:()=>ModalFilter,MultiGroupFilter:()=>MultiGroupFilter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Filter_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Filter=__webpack_require__("./src/components/search/Filter.jsx");const Filter2Container=styled_components_browser_esm.default.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,FilterGroup=styled_components_browser_esm.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,FilterLabel=styled_components_browser_esm.default.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,GroupTitle=styled_components_browser_esm.default.h4`
  margin: 0;
`,search_Filter2=_ref=>{let{filters,onChange}=_ref;const initialState=filters.reduce(((acc,group)=>(acc[group.category]=group.options.filter((opt=>opt.initial)).map((opt=>opt.value)),acc)),{}),[selectedFilters,setSelectedFilters]=(0,react.useState)(initialState);return react.createElement(Filter2Container,null,filters.map((group=>react.createElement("div",{key:group.category},react.createElement(GroupTitle,null,group.label||group.category),react.createElement(FilterGroup,null,group.options.map((opt=>react.createElement(FilterLabel,{key:`${group.category}-${opt.value}`},react.createElement("input",{type:"checkbox",checked:(selectedFilters[group.category]||[]).includes(opt.value),onChange:()=>((category,value)=>{const current=selectedFilters[category]||[],newSelected=current.includes(value)?current.filter((v=>v!==value)):[...current,value],newState={...selectedFilters,[category]:newSelected};setSelectedFilters(newState),onChange&&onChange(newState)})(group.category,opt.value)}),opt.label))))))))};var FilterLogic=__webpack_require__("./src/components/search/FilterLogic.js");const HorizontalFilterContainer=styled_components_browser_esm.default.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
`,FilterButton=styled_components_browser_esm.default.button`
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${props=>props.active?"#007bff":"#ccc"};
  background-color: ${props=>props.active?"#007bff":"#fff"};
  color: ${props=>props.active?"#fff":"#000"};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
`,filtersConfig={status:{category:"status",label:"Status",type:"buttons",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"buttons",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},search_FilterHorizontal=_ref=>{let{onChange}=_ref;return react.createElement(FilterLogic.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;return react.createElement("div",null,Object.values(filtersConfig).map((filterConfig=>{const currentSelection=selectedFilters[filterConfig.category]||[],sortedOptions=[...filterConfig.options].sort(((a,b)=>{const aActive=currentSelection.includes(a.value);return aActive===currentSelection.includes(b.value)?0:aActive?-1:1}));return react.createElement("div",{key:filterConfig.category},react.createElement("h5",null,filterConfig.label),react.createElement(HorizontalFilterContainer,null,sortedOptions.map((option=>{const isActive=currentSelection.includes(option.value);return react.createElement(FilterButton,{key:option.value,active:isActive,onClick:()=>{setSelection(filterConfig.category,isActive?"":option.value)}},option.label)}))))})))}))};var BottomDrawer=__webpack_require__("./src/components/atoms/Drawers/BottomDrawer.jsx"),RangeSlider=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),SelectInput=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const Button=styled_components_browser_esm.default.button`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .svg {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
    align-self: center;
  }

`,FilterContainer=styled_components_browser_esm.default.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`,GroupContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components_browser_esm.default.h5`
  margin-bottom: 0.5rem;
`,FilterDrawer_filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},search_FilterDrawer=_ref=>{let{onChange}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1);return react.createElement(react.Fragment,null,react.createElement(Button,{onClick:()=>setIsOpen(!0)},react.createElement(Icons.FilterIcon,{className:"svg"})," Filters"),react.createElement(BottomDrawer.A,{isOpen,onClose:()=>setIsOpen(!1)},react.createElement(FilterLogic.A,{filters:Object.values(FilterDrawer_filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=FilterDrawer_filtersConfig.status,priorityFilter=FilterDrawer_filtersConfig.priority;return react.createElement(FilterContainer,null,react.createElement(GroupContainer,null,react.createElement(GroupLabel,null,statusFilter.label),react.createElement(SelectInput.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react.createElement(GroupContainer,null,react.createElement(GroupLabel,null,priorityFilter.label),react.createElement(RangeSlider.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))))};var Modal=__webpack_require__("./src/components/atoms/modals/Modal.jsx");const FilterModal_Button=styled_components_browser_esm.default.button`
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
`,FilterModal_FilterContainer=styled_components_browser_esm.default.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  width: 500px;
`,FilterModal_GroupContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,FilterModal_GroupLabel=styled_components_browser_esm.default.h5`
  margin-bottom: 0.5rem;
`,FilterModal_filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},search_FilterModal=_ref=>{let{onChange}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1);return react.createElement(react.Fragment,null,react.createElement(FilterModal_Button,{onClick:()=>setIsOpen(!0)},"Open Filters"),react.createElement(Modal.A,{isModalOpen:isOpen,closeModal:()=>setIsOpen(!1),title:"Filters",animate:!0},react.createElement(FilterLogic.A,{filters:Object.values(FilterModal_filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=FilterModal_filtersConfig.status,priorityFilter=FilterModal_filtersConfig.priority;return react.createElement(FilterModal_FilterContainer,null,react.createElement(FilterModal_GroupContainer,null,react.createElement(FilterModal_GroupLabel,null,statusFilter.label),react.createElement(SelectInput.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react.createElement(FilterModal_GroupContainer,null,react.createElement(FilterModal_GroupLabel,null,priorityFilter.label),react.createElement(RangeSlider.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))))},Filter_stories={title:"Search/Filters/AllFilters",parameters:{docs:{description:{component:"\n### Filter Components Showcase\n\nThis story demonstrates multiple filter components available in the library:\n- **Filter:** Traditional dropdown and range slider filters.\n- **Filter2:** Multi-group filter interface.\n- **FilterHorizontal:** A horizontal, scrollable row of clickable filter buttons.\n- **FilterDrawer:** A bottom drawer containing filter options.\n- **FilterModal:** A modal-based filter interface.\n\nExplore each filter type to understand its layout, behavior, and integration guidelines.\n        "}}}},StoryContainer=styled_components_browser_esm.default.div`
  padding: 2rem;
`,mockOnChange=selected=>{console.log("Selected filters:",selected)},DefaultFilter=()=>react.createElement(StoryContainer,null,react.createElement("h3",null,"Filter Component (Dropdown & Range Slider)"),react.createElement(Filter.Ay,{onChange:mockOnChange})),MultiGroupFilter=()=>{const[selectedFilters,setSelectedFilters]=(0,react.useState)({});return react.createElement(StoryContainer,null,react.createElement("h3",null,"Filter2 Component (Multi-Group)"),react.createElement(search_Filter2,{filters:[{category:"status",label:"Status",options:[{value:"completed",label:"Completed",initial:!0},{value:"pending",label:"Pending"},{value:"inProgress",label:"In Progress"}]},{category:"priority",label:"Priority",options:[{value:"high",label:"High"},{value:"medium",label:"Medium",initial:!0},{value:"low",label:"Low"}]}],onChange:filters=>{setSelectedFilters(filters),console.log("Selected filters:",filters)}}))},HorizontalButtonFilter=()=>react.createElement(StoryContainer,null,react.createElement("h3",null,"FilterHorizontal Component (Scrollable Buttons)"),react.createElement(search_FilterHorizontal,{onChange:mockOnChange})),BottomDrawerFilter=()=>react.createElement(StoryContainer,null,react.createElement("h3",null,"FilterDrawer Component"),react.createElement(search_FilterDrawer,{onChange:mockOnChange})),ModalFilter=()=>react.createElement(StoryContainer,null,react.createElement("h3",null,"FilterModal Component"),react.createElement(search_FilterModal,{onChange:mockOnChange})),__namedExportsOrder=["DefaultFilter","MultiGroupFilter","HorizontalButtonFilter","BottomDrawerFilter","ModalFilter"];DefaultFilter.parameters={...DefaultFilter.parameters,docs:{...DefaultFilter.parameters?.docs,source:{originalSource:"() => <StoryContainer>\r\n    <h3>Filter Component (Dropdown & Range Slider)</h3>\r\n    <Filter onChange={mockOnChange} />\r\n  </StoryContainer>",...DefaultFilter.parameters?.docs?.source},description:{story:"### DefaultFilter Component Demo\r\n\nInteract with the `Filter` component to see traditional dropdown and range slider filters in action.\r\n\n#### How to Use the Filter Component\r\n1. **Import and Setup**:  \r\nImport the `Filter` component and provide an `onChange` callback to handle filter selection changes.\r\n\n```jsx\r\nimport Filter from 'path-to-your/Filter';\r\n\nconst handleFilterChange = (selected) => {\r\n// handle filter changes\r\n};\r\n\n<Filter onChange={handleFilterChange} />;\r\n```\r\n\n2. **Integration in a Layout**:  \r\nPlace the `Filter` component where filtering functionality is needed. It renders dropdowns and sliders for various filtering criteria.\r\n\n3. **Customization**:\r\n- Modify filter options directly in the `Filter` component or pass additional props to customize its behavior.\r\n- Update styling as needed using styled-components or CSS overrides.\r\n\nBy following these steps, you can integrate the `Filter` component to filter lists or datasets based on user input.",...DefaultFilter.parameters?.docs?.description}}},MultiGroupFilter.parameters={...MultiGroupFilter.parameters,docs:{...MultiGroupFilter.parameters?.docs,source:{originalSource:"() => {\n  const [selectedFilters, setSelectedFilters] = useState({});\n  const filters = [{\n    category: 'status',\n    label: 'Status',\n    options: [{\n      value: 'completed',\n      label: 'Completed',\n      initial: true\n    }, {\n      value: 'pending',\n      label: 'Pending'\n    }, {\n      value: 'inProgress',\n      label: 'In Progress'\n    }]\n  }, {\n    category: 'priority',\n    label: 'Priority',\n    options: [{\n      value: 'high',\n      label: 'High'\n    }, {\n      value: 'medium',\n      label: 'Medium',\n      initial: true\n    }, {\n      value: 'low',\n      label: 'Low'\n    }]\n  }];\n  const handleFilterChange = filters => {\n    setSelectedFilters(filters);\n    console.log('Selected filters:', filters);\n  };\n  return <StoryContainer>\r\n      <h3>Filter2 Component (Multi-Group)</h3>\r\n      <Filter2 filters={filters} onChange={handleFilterChange} />\r\n    </StoryContainer>;\n}",...MultiGroupFilter.parameters?.docs?.source},description:{story:"### MultiGroupFilter Component Demo\r\n\nThe `Filter2` component offers a multi-group filtering interface, allowing users to select options across different categories.\r\n\n#### How to Use the Filter2 Component\r\n1. **Import and Setup**:  \r\nImport `Filter2`, define filter groups, and implement an `onChange` callback to receive selected filters.\r\n\n```jsx\r\nimport React, { useState } from 'react';\r\nimport Filter2 from 'path-to-your/Filter2';\r\n\nconst filters = [\r\n{\r\ncategory: 'status',\r\nlabel: 'Status',\r\noptions: [ ... ],\r\n},\r\n// additional groups\r\n];\r\n\nconst [selectedFilters, setSelectedFilters] = useState({});\r\nconst handleFilterChange = (filters) => setSelectedFilters(filters);\r\n\n<Filter2 filters={filters} onChange={handleFilterChange} />;\r\n```\r\n\n2. **Understanding Props**:\r\n- `filters`: Array of filter groups each with a category, label, and options.\r\n- `onChange`: Callback function that receives the selected filter data.\r\n\n3. **Customization**:\r\n- Adjust the `filters` array to define different groups and options.\r\n- Customize styles and behavior by modifying the `Filter2` component or passing additional props.\r\n\nUsing these instructions, you can integrate and customize `Filter2` for complex filtering needs.",...MultiGroupFilter.parameters?.docs?.description}}},HorizontalButtonFilter.parameters={...HorizontalButtonFilter.parameters,docs:{...HorizontalButtonFilter.parameters?.docs,source:{originalSource:"() => <StoryContainer>\r\n    <h3>FilterHorizontal Component (Scrollable Buttons)</h3>\r\n    <FilterHorizontal onChange={mockOnChange} />\r\n  </StoryContainer>",...HorizontalButtonFilter.parameters?.docs?.source},description:{story:"### HorizontalButtonFilter Component Demo\r\n\nUse `FilterHorizontal` to display a horizontal, scrollable row of clickable filter buttons.\r\n\n#### How to Use the FilterHorizontal Component\r\n1. **Import and Setup**:  \r\nImport `FilterHorizontal` and provide an `onChange` callback to handle filter selections.\r\n\n```jsx\r\nimport FilterHorizontal from 'path-to-your/FilterHorizontal';\r\n\n<FilterHorizontal onChange={handleFilterChange} />;\r\n```\r\n\n2. **Integration in a Layout**:  \r\nPlace `FilterHorizontal` where horizontal scrolling of filter options is desired. It renders buttons in a scrollable row.\r\n\n3. **Customization**:\r\n- Customize button styles and behavior by modifying the component or using additional props.\r\n- Extend functionality by handling complex filter logic within the `onChange` callback.\r\n\nFollow these steps to integrate `FilterHorizontal` for a sleek, mobile-friendly filter interface.",...HorizontalButtonFilter.parameters?.docs?.description}}},BottomDrawerFilter.parameters={...BottomDrawerFilter.parameters,docs:{...BottomDrawerFilter.parameters?.docs,source:{originalSource:"() => <StoryContainer>\r\n    <h3>FilterDrawer Component</h3>\r\n    <FilterDrawer onChange={mockOnChange} />\r\n  </StoryContainer>",...BottomDrawerFilter.parameters?.docs?.source},description:{story:"### BottomDrawerFilter Component Demo\r\n\nThe `FilterDrawer` component displays filter options in a bottom drawer, ideal for mobile interfaces.\r\n\n#### How to Use the FilterDrawer Component\r\n1. **Import and Setup**:  \r\nImport `FilterDrawer` and provide an `onChange` callback to handle filter changes.\r\n\n```jsx\r\nimport FilterDrawer from 'path-to-your/FilterDrawer';\r\n\n<FilterDrawer onChange={handleFilterChange} />;\r\n```\r\n\n2. **User Interaction**:\r\n- Tapping a button opens a bottom drawer with various filter options.\r\n- Users select filters, and changes trigger the `onChange` callback.\r\n\n3. **Customization**:\r\n- Modify layout and styling by editing the `FilterDrawer` component or overriding styles.\r\n- Customize filter options by altering internal logic or passing additional props.\r\n\nBy integrating `FilterDrawer`, you can offer a modern drawer-based filtering experience.",...BottomDrawerFilter.parameters?.docs?.description}}},ModalFilter.parameters={...ModalFilter.parameters,docs:{...ModalFilter.parameters?.docs,source:{originalSource:"() => <StoryContainer>\r\n    <h3>FilterModal Component</h3>\r\n    <FilterModal onChange={mockOnChange} />\r\n  </StoryContainer>",...ModalFilter.parameters?.docs?.source},description:{story:"### ModalFilter Component Demo\r\n\nThe `FilterModal` component provides a modal-based filter interface, encapsulating filter options in a pop-up dialog.\r\n\n#### How to Use the FilterModal Component\r\n1. **Import and Setup**:  \r\nImport `FilterModal` and set up an `onChange` callback to handle selected filters.\r\n\n```jsx\r\nimport FilterModal from 'path-to-your/FilterModal';\r\n\n<FilterModal onChange={handleFilterChange} />;\r\n```\r\n\n2. **User Interaction**:\r\n- Opening the modal displays filter options in a pop-up.\r\n- Users can select filters inside the modal; upon confirmation, the `onChange` callback triggers.\r\n\n3. **Customization**:\r\n- Modify modal appearance and animations by updating the `FilterModal` component.\r\n- Adjust available filter options by changing internal configuration or passing new props.\r\n\nThese instructions help you integrate and tailor the `FilterModal` for a seamless modal-based filtering experience.",...ModalFilter.parameters?.docs?.description}}}},"./src/components/atoms/Drawers/BottomDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomDrawer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: opacity ${_ref=>{let{transitionDuration}=_ref;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref2=>{let{isOpen}=_ref2;return isOpen?"1":"0"}};
  pointer-events: ${_ref3=>{let{isOpen}=_ref3;return isOpen?"auto":"none"}};
`,BackgroundOverlay=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${_ref4=>{let{transitionDuration}=_ref4;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref5=>{let{isOpen}=_ref5;return isOpen?"1":"0"}};
`,Drawer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 100%;
  max-width: ${_ref6=>{let{maxWidth}=_ref6;return maxWidth}};
  height: ${_ref7=>{let{autoHeight,height}=_ref7;return autoHeight?"auto":height}};
  background-color: white;
  ${_ref8=>{let{noRoundedCorners}=_ref8;return noRoundedCorners?styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          border-radius: 0;
        `:styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          border-radius: 16px 16px 0 0;
        `}}
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${_ref9=>{let{isOpen}=_ref9;return isOpen?"translateY(0)":"translateY(100%)"}};
  transition: transform ${_ref10=>{let{transitionDuration}=_ref10;return transitionDuration}}ms ease-in-out,
    opacity ${_ref11=>{let{transitionDuration}=_ref11;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref12=>{let{isOpen}=_ref12;return isOpen?"1":"0"}};
  display: flex;
  flex-direction: column;
`,Handle=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 48px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 8px auto;
  display: ${_ref13=>{let{hideHandle}=_ref13;return hideHandle?"none":"block"}};
`,DrawerContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  flex: 1;
  overflow-y: ${_ref14=>{let{autoHeight}=_ref14;return autoHeight?"visible":"auto"}};
`;function BottomDrawer(_ref15){let{isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}=_ref15;const drawerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContainer,{isOpen,transitionDuration},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Handle,{hideHandle})," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContent,{autoHeight},children))),document.body)}},"./src/components/atoms/inputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",value,onChange}=_ref;const[range,setRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||[min,max]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{value&&Array.isArray(value)&&2===value.length&&setRange(value)}),[value]);const calculatePercentage=value=>(value-min)/(max-min)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))}},"./src/components/atoms/inputs/SelectInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SelectContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color,required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}},"./src/components/atoms/modals/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{isModalOpen,closeModal,title,children,animate=!0}=_ref;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{animate,onClick:closeModal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContainer,{animate,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:closeModal,"aria-label":"Close Modal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.XIcon,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalTitle,{id:"modal-title"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null}},"./src/components/search/Filter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FilterLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/FilterLogic.js"),_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx");const FilterContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: grid;
  gap: 2rem;
`,GroupContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h5`
  margin-bottom: 0.5rem;
`,filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FilterLogic__WEBPACK_IMPORTED_MODULE_1__.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=filtersConfig.status,priorityFilter=filtersConfig.priority;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,statusFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,priorityFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))}},"./src/components/search/FilterLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{filters,onChange,children}=_ref;const initialSelections=filters.reduce(((acc,group)=>(acc[group.category]=[],acc)),{}),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelections);return"function"==typeof children?children({filters,selectedFilters,setSelection:(category,value)=>{setSelectedFilters((prev=>{const newSelections={...prev,[category]:[value]};return onChange&&onChange(newSelections),newSelections}))},clearAll:()=>{setSelectedFilters(initialSelections),onChange&&onChange(initialSelections)}}):null}}}]);
//# sourceMappingURL=stories-search-Filter-stories.f1798454.iframe.bundle.js.map