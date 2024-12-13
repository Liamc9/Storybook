"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8933],{"./src/stories/molecules/search/SearchFilters.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PreselectedFilters:()=>PreselectedFilters,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchFilters_stories});var react=__webpack_require__("./node_modules/react/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),Modal=__webpack_require__("./src/components/atoms/modals/Modal.jsx");const search_SearchFilters=_ref=>{let{attributes,onFilterChange}=_ref;const[isModalOpen,setModalOpen]=(0,react.useState)(!1),[selectedFilters,setSelectedFilters]=(0,react.useState)({}),handleFilterChange=e=>{const{name,value}=e.target;setSelectedFilters((prevFilters=>({...prevFilters,[name]:value})))};return react.createElement("div",{className:"flex items-center space-x-4 p-4"},react.createElement("button",{onClick:()=>setModalOpen(!0),className:"flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md bg-gray-200 font-semibold hover:bg-blue-600 transition"},react.createElement(Icons.FilterIcon,{className:"w-5 h-5 "}),react.createElement("span",null,"Filters")),react.createElement(Modal.A,{isModalOpen,closeModal:()=>setModalOpen(!1)},react.createElement("h2",{className:"text-xl font-semibold mb-4"},"Apply Filters"),attributes.map((attr=>react.createElement("div",{key:attr.name,className:"mb-4"},react.createElement("label",{className:"block text-gray-700 font-semibold mb-2"},`Filter by ${attr.label}:`),react.createElement("select",{name:attr.name,onChange:handleFilterChange,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none",value:selectedFilters[attr.name]||""},react.createElement("option",{value:""},`All ${attr.label}`),attr.options.map((option=>react.createElement("option",{key:option.value,value:option.value},option.label))))))),react.createElement("div",{className:"flex justify-end"},react.createElement("button",{onClick:()=>setModalOpen(!1),className:"mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"},"Cancel"),react.createElement("button",{onClick:()=>{Object.keys(selectedFilters).forEach((filterName=>{onFilterChange(filterName,selectedFilters[filterName])})),setModalOpen(!1)},className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"},"Apply"))))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SearchFilters_stories={title:"Molecules/Search/SearchFilters",component:search_SearchFilters,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `SearchFilters` component provides an interactive way for users to filter search results based on various attributes. It can be configured with different filter options to meet the needs of a range of applications.\n\n### Features\n- **Dynamic Filters**: Allows users to apply various filters dynamically.\n- **Customizable Attributes**: Accepts a range of attributes to customize filter options.\n- **Real-time Filter Change Handling**: Invokes a callback when filters are applied or changed.\n\n### Usage\n\n```jsx\nimport React, { useState } from 'react';\nimport SearchFilters from './components/search/SearchFilters';\n\nconst ExampleComponent = () => {\n  const [filters, setFilters] = useState({});\n\n  const handleFilterChange = (filterName, filterValue) => {\n    setFilters((prevFilters) => ({\n      ...prevFilters,\n      [filterName]: filterValue,\n    }));\n    console.log(`Filter applied: ${filterName} = ${filterValue}`);\n  };\n\n  return (\n    <SearchFilters\n      attributes={[\n        {\n          name: 'color',\n          label: 'Color',\n          options: [\n            { value: 'red', label: 'Red' },\n            { value: 'blue', label: 'Blue' },\n            { value: 'green', label: 'Green' },\n          ],\n        },\n        {\n          name: 'size',\n          label: 'Size',\n          options: [\n            { value: 'small', label: 'Small' },\n            { value: 'medium', label: 'Medium' },\n            { value: 'large', label: 'Large' },\n          ],\n        },\n      ]}\n      onFilterChange={handleFilterChange}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n        "}}}},Template=args=>{const[filters,setFilters]=(0,react.useState)({});return react.createElement(search_SearchFilters,_extends({},args,{onFilterChange:(filterName,filterValue)=>{setFilters((prevFilters=>({...prevFilters,[filterName]:filterValue}))),alert(`Filter applied: ${filterName} = ${filterValue}`)}}))},Default=Template.bind({});Default.args={attributes:[{name:"color",label:"Color",options:[{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"green",label:"Green"}]},{name:"size",label:"Size",options:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}]};const PreselectedFilters=Template.bind({});PreselectedFilters.args={attributes:[{name:"color",label:"Color",options:[{value:"red",label:"Red"},{value:"blue",label:"Blue"},{value:"green",label:"Green"}]},{name:"size",label:"Size",options:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]}]};const __namedExportsOrder=["Default","PreselectedFilters"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [filters, setFilters] = useState({});\n  const handleFilterChange = (filterName, filterValue) => {\n    setFilters(prevFilters => ({\n      ...prevFilters,\n      [filterName]: filterValue\n    }));\n    alert(`Filter applied: ${filterName} = ${filterValue}`);\n  };\n  return <SearchFilters {...args} onFilterChange={handleFilterChange} />;\n}",...Default.parameters?.docs?.source}}},PreselectedFilters.parameters={...PreselectedFilters.parameters,docs:{...PreselectedFilters.parameters?.docs,source:{originalSource:"args => {\n  const [filters, setFilters] = useState({});\n  const handleFilterChange = (filterName, filterValue) => {\n    setFilters(prevFilters => ({\n      ...prevFilters,\n      [filterName]: filterValue\n    }));\n    alert(`Filter applied: ${filterName} = ${filterValue}`);\n  };\n  return <SearchFilters {...args} onFilterChange={handleFilterChange} />;\n}",...PreselectedFilters.parameters?.docs?.source}}}},"./src/components/atoms/modals/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{isModalOpen,closeModal,title,children,animate=!0}=_ref;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{animate,onClick:closeModal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContainer,{animate,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:closeModal,"aria-label":"Close Modal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.XIcon,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalTitle,{id:"modal-title"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null}}}]);
//# sourceMappingURL=stories-molecules-search-SearchFilters-stories.1ee4ead1.iframe.bundle.js.map