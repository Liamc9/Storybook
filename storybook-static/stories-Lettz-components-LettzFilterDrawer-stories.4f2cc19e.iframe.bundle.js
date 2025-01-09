"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7770],{"./src/stories/Lettz/components/LettzFilterDrawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LettzFilterDrawer_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SelectInput=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx"),CheckedItem=__webpack_require__("./src/components/atoms/inputs/CheckedItem.jsx"),RangeSlider=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const DrawerContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`,InputContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  gap: 28px; /* Add consistent spacing between inputs */
  margin-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`,CheckboxGroup=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,FixedButtonBar=styled_components_browser_esm.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`,Button=styled_components_browser_esm.default.button`
  padding: 8px 16px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props=>props.primary?"#A855F7":"#e0e0e0"};
  color: ${props=>props.primary?"#fff":"#333"};
`,MONTHS=[{value:"jan",label:"Jan"},{value:"feb",label:"Feb"},{value:"mar",label:"Mar"},{value:"apr",label:"Apr"},{value:"may",label:"May"},{value:"jun",label:"Jun"},{value:"jul",label:"Jul"},{value:"aug",label:"Aug"},{value:"sep",label:"Sep"},{value:"oct",label:"Oct"},{value:"nov",label:"Nov"},{value:"dec",label:"Dec"}],COUNTIES=["Carlow","Cavan","Clare","Cork","Derry","Donegal","Down","Dublin","Fermanagh","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Tyrone","Waterford","Westmeath","Wexford","Wicklow"],TYPE_OPTIONS=[{value:"house",label:"House"},{value:"apartment",label:"Apartment"},{value:"room",label:"Room"}],components_LettzFilterDrawer=_ref=>{let{selectedFilters,onFilterChange,closeDrawer,sortOptions=[],selectedSortOption,onSortChange}=_ref;const[localFilters,setLocalFilters]=(0,react.useState)(selectedFilters||{}),[localSortOption,setLocalSortOption]=(0,react.useState)(selectedSortOption||"");(0,react.useEffect)((()=>{setLocalFilters(selectedFilters||{})}),[selectedFilters]),(0,react.useEffect)((()=>{setLocalSortOption(selectedSortOption||"")}),[selectedSortOption]);const handleFilterChange=(key,value)=>{setLocalFilters((prevFilters=>({...prevFilters,[key]:value})))};return react.createElement(DrawerContainer,null,react.createElement(InputContainer,null,react.createElement(SelectInput.A,{name:"county",label:"County",color:"#A855F7",value:localFilters.county||"",onChange:e=>handleFilterChange("county",e.target.value),options:[{value:"",label:"Any County"},...COUNTIES.map((county=>({value:county,label:county})))]}),react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(SelectInput.A,{name:"startMonth",label:"From",color:"#A855F7",value:localFilters.startMonth||"",onChange:e=>handleFilterChange("startMonth",e.target.value),options:[{value:"",label:"Any"},...MONTHS.map((month=>({value:month.value,label:month.label})))]}),react.createElement(SelectInput.A,{name:"endMonth",label:"To",color:"#A855F7",value:localFilters.endMonth||"",onChange:e=>handleFilterChange("endMonth",e.target.value),options:[{value:"",label:"Any"},...MONTHS.map((month=>({value:month.value,label:month.label})))]})),react.createElement("div",{className:"mx-8"},react.createElement(RangeSlider.A,{min:0,max:5e3,step:50,minimumGap:100,label:"Rent",valuePrefix:"€",value:localFilters.rentRange||[0,5e3],onChange:range=>handleFilterChange("rentRange",range)})),react.createElement(CheckboxGroup,null,TYPE_OPTIONS.map((typeOption=>react.createElement(CheckedItem.A,{height:"5rem",width:"5rem",color:"#A855F7",key:typeOption.value,label:typeOption.label,onChange:e=>{return type=typeOption.value,isChecked=e.target.checked,void setLocalFilters((prevFilters=>{const currentTypes=prevFilters.type||[];return isChecked?currentTypes.includes(type)?prevFilters:{...prevFilters,type:[...currentTypes,type]}:{...prevFilters,type:currentTypes.filter((t=>t!==type))}}));var type,isChecked},checked:localFilters.type&&localFilters.type.includes(typeOption.value),svg:react.createElement(Icons.HomeIcon,{className:"w-6 h-6"})})))),react.createElement(SelectInput.A,{name:"sort",label:"Sort By",color:"#A855F7",value:localSortOption,onChange:event=>{setLocalSortOption(event.target.value)},options:sortOptions})),react.createElement(FixedButtonBar,null,react.createElement(Button,{onClick:()=>{setLocalFilters({}),setLocalSortOption(""),onFilterChange({}),onSortChange(""),closeDrawer()}},"Clear"),react.createElement(Button,{primary:!0,onClick:()=>{onFilterChange(localFilters),onSortChange(localSortOption),closeDrawer()}},"Apply")))},LettzFilterDrawer_stories={title:"Projects/Lettz/Components/LettzFilterDrawer",component:components_LettzFilterDrawer,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `LettzFilterDrawer` component provides a flexible interface for filtering and sorting property listings. Users can filter properties by county, type, rent range, and availability months, as well as sort the listings using predefined options.\n\n### Features\n- **Dynamic Filters**: Supports multiple filtering options, including dropdowns, checkboxes, and range sliders.\n- **Sort Options**: Allows sorting the results with a dropdown menu.\n- **Persistent State**: Reflects and updates local filter state based on props.\n- **Clear and Apply Buttons**: Provides buttons to reset or apply the selected filters and sorting.\n\n### Usage\n\n```jsx\nimport React, { useState } from "react";\nimport LettzFilterDrawer from "../components/LettzFilterDrawer";\n\nconst ExampleComponent = () => {\n  const [filters, setFilters] = useState({});\n  const [sortOption, setSortOption] = useState("");\n\n  const handleFilterChange = (newFilters) => {\n    console.log("Filters applied:", newFilters);\n    setFilters(newFilters);\n  };\n\n  const handleSortChange = (newSortOption) => {\n    console.log("Sort option selected:", newSortOption);\n    setSortOption(newSortOption);\n  };\n\n  const handleCloseDrawer = () => {\n    console.log("Drawer closed");\n  };\n\n  return (\n    <LettzFilterDrawer\n      selectedFilters={filters}\n      onFilterChange={handleFilterChange}\n      closeDrawer={handleCloseDrawer}\n      sortOptions={[\n        { value: "price", label: "Price" },\n        { value: "date", label: "Date Added" },\n      ]}\n      selectedSortOption={sortOption}\n      onSortChange={handleSortChange}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **selectedFilters**: Object containing the current filter selections.\n- **onFilterChange**: Callback function triggered when filters are applied.\n- **closeDrawer**: Callback function triggered when the drawer is closed.\n- **sortOptions**: Array of sorting options, each with value and label properties.\n- **selectedSortOption**: String representing the current sorting option.\n- **onSortChange**: Callback function triggered when the sorting option changes.\n        '}}},argTypes:{selectedFilters:{control:"object"},onFilterChange:{action:"filters applied"},closeDrawer:{action:"drawer closed"},sortOptions:{control:"array"},selectedSortOption:{control:"text"},onSortChange:{action:"sort option changed"}}},Default=(args=>react.createElement(components_LettzFilterDrawer,args)).bind({});Default.args={selectedFilters:{county:"Dublin",startMonth:"jan",endMonth:"dec",rentRange:[500,2500],type:["house","apartment"]},onFilterChange:filters=>console.log("Filters applied:",filters),closeDrawer:()=>console.log("Drawer closed"),sortOptions:[{value:"price",label:"Price"},{value:"date",label:"Date Added"}],selectedSortOption:"price",onSortChange:sortOption=>console.log("Sort option changed:",sortOption)};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <LettzFilterDrawer {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/inputs/CheckedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  color: #94a3b8; /* Equivalent to text-slate-400 */
  position: relative;
  cursor: pointer;
`,HiddenCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input.attrs({type:"checkbox"})`
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 3px solid #cbd5e1; /* Equivalent to border-slate-300 */
  background-color: #ffffff; /* bg-white */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.2s ease-in-out;
  width: ${_ref=>{let{width}=_ref;return width}};
  height: ${_ref2=>{let{height}=_ref2;return height}};

  /* Checked State */
  ${HiddenCheckbox}:checked + & {
    border-color: ${_ref3=>{let{color}=_ref3;return color||"#3b82f6"}}; /* Default to blue-500 */
    box-shadow: 0 4px 6px ${_ref4=>{let{color}=_ref4;return color}}33; /* 10% opacity */
    color: ${_ref5=>{let{color}=_ref5;return color||"#3b82f6"}};

    &::before {
      content: '✓';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid ${_ref6=>{let{color}=_ref6;return color||"#3b82f6"}};
      border-radius: 50%;
      background-color: ${_ref7=>{let{color}=_ref7;return color||"#3b82f6"}};
      opacity: 1;
      transform: scale(1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 0.75rem;
      transition: all 0.2s ease-in-out;
    }
  }

  /* Hover State */
  &:hover {
    border-color: ${_ref8=>{let{color}=_ref8;return color||"#3b82f6"}};

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Pseudo-element before */
  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 3px solid ${_ref9=>{let{color}=_ref9;return color||"#3b82f6"}};
    border-radius: 50%;
    background-color: ${_ref10=>{let{color}=_ref10;return color||"#3b82f6"}};
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  /* SVG and Label Text */
  > span {
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-size: 0.875rem; /* Equivalent to text-sm */
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref11=>{let{label,svg,onChange,checked,height="7rem",width="7rem",color="#3b82f6"}=_ref11;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(HiddenCheckbox,{onChange,checked}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSpan,{height,width,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,svg),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label))))}},"./src/components/atoms/inputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}}}]);
//# sourceMappingURL=stories-Lettz-components-LettzFilterDrawer-stories.4f2cc19e.iframe.bundle.js.map