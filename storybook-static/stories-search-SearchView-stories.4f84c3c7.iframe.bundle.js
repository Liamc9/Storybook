"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6799],{"./src/stories/search/SearchView.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterableAndSortableFeed:()=>FilterableAndSortableFeed,FilterableFeed:()=>FilterableFeed,FullFeed:()=>FullFeed,PlainFeed:()=>PlainFeed,PredefinedFilteringFeed:()=>PredefinedFilteringFeed,PredefinedSortingFeed:()=>PredefinedSortingFeed,SearchableFeed:()=>SearchableFeed,SortableFeed:()=>SortableFeed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/Feed.jsx"),_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/search/FeedItem2.jsx"),_components_search_Filter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/search/Filter.jsx"),_components_search_Sort__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/search/Sort.jsx"),_components_search_Search2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/search/Search2.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Search/SearchView/SearchView",component:_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{docs:{description:{component:"\n### SearchView Examples\n\nThe `Feed` component is designed to render a collection of items, automatically handling mapping and rendering for each item. You can customize its behavior by providing:\n- An array of `items`.\n- A custom `ItemComponent` to specify how each item is rendered.\n- Optional `selectedFilters` for filtering and `sortBy` logic for sorting.\n\nThis story demonstrates several scenarios for the `Feed` component and how it combines with `Filter`, `Sort`, and `Search2`:\n1. **Plain Unsorted Feed**\n2. **Filterable Feed**\n3. **Sortable Feed**\n4. **Feed with Both Filtering and Sorting**\n5. **Predefined Sorting Feed**\n6. **Predefined Filtering Feed**\n7. **Searchable Feed**\n8. **Full Feed** (with integrated search, filter, and sort)\n\n---\n        "}}}},sampleItems=[{title:"Task 1",description:"Do this",status:"completed",priority:"high",date:"2023-08-20"},{title:"Task 2",description:"Do that",status:"pending",priority:"medium",date:"2023-08-22"},{title:"Task 3",description:"Another task",status:"completed",priority:"low",date:"2023-08-21"},{title:"Task 4",description:"Yet another task",status:"inProgress",priority:"medium",date:"2023-08-23"}],PlainFeed=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sampleItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}),FilterableFeed=()=>{const[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Filter__WEBPACK_IMPORTED_MODULE_3__.Ay,{onChange:setSelectedFilters}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sampleItems,selectedFilters,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}))},SortableFeed=()=>{const[sortedItems,setSortedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Sort__WEBPACK_IMPORTED_MODULE_4__.A,{items:sampleItems,onSortedChange:setSortedItems}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sortedItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}))},FilterableAndSortableFeed=()=>{const[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),[sortedItems,setSortedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Filter__WEBPACK_IMPORTED_MODULE_3__.Ay,{onChange:setSelectedFilters}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Sort__WEBPACK_IMPORTED_MODULE_4__.A,{items:sampleItems,onSortedChange:setSortedItems}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sortedItems,selectedFilters,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}))},PredefinedSortingFeed=()=>{const[sortedItems,setSortedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const sorted=[...sampleItems].sort(((a,b)=>new Date(b.date)-new Date(a.date)));setSortedItems(sorted)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sortedItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A})},PredefinedFilteringFeed=()=>{const[filteredItems,setFilteredItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const filtered=sampleItems.filter((item=>"completed"===item.status));setFilteredItems(filtered)}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:filteredItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A})},SearchableFeed=()=>{const[filteredItems,setFilteredItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Search2__WEBPACK_IMPORTED_MODULE_5__.A,{items:sampleItems,onSearch:setFilteredItems}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:filteredItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}))},FullFeed=()=>{const[searchedItems,setSearchedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),[sortedItems,setSortedItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Search2__WEBPACK_IMPORTED_MODULE_5__.A,{items:sampleItems,onSearch:newSearchResults=>{setSearchedItems(newSearchResults),setSelectedFilters({}),setSortedItems(newSearchResults)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Sort__WEBPACK_IMPORTED_MODULE_4__.A,{items:searchedItems,onSortedChange:setSortedItems}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Filter__WEBPACK_IMPORTED_MODULE_3__.Ay,{onChange:setSelectedFilters}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:sortedItems,selectedFilters,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_2__.A}))},__namedExportsOrder=["PlainFeed","FilterableFeed","SortableFeed","FilterableAndSortableFeed","PredefinedSortingFeed","PredefinedFilteringFeed","SearchableFeed","FullFeed"];PlainFeed.parameters={...PlainFeed.parameters,docs:{...PlainFeed.parameters?.docs,source:{originalSource:"() => {\n  return <Feed items={sampleItems} ItemComponent={FeedItem2} />;\n}",...PlainFeed.parameters?.docs?.source},description:{story:"1) Plain Unsorted Feed\r\nShows a basic feed with a custom item component (FeedItem2).",...PlainFeed.parameters?.docs?.description}}},FilterableFeed.parameters={...FilterableFeed.parameters,docs:{...FilterableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [selectedFilters, setSelectedFilters] = useState({});\n  return <div>\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Feed items={sampleItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2} />\r\n    </div>;\n}",...FilterableFeed.parameters?.docs?.source},description:{story:"2) Filterable Feed\r\nDemonstrates dynamic filtering with the 'Filter' component.\r\nThe feed automatically applies filters via 'selectedFilters'.",...FilterableFeed.parameters?.docs?.description}}},SortableFeed.parameters={...SortableFeed.parameters,docs:{...SortableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n  return <div>\r\n      <Sort items={sampleItems} onSortedChange={setSortedItems} />\r\n      <Feed items={sortedItems} ItemComponent={FeedItem2} />\r\n    </div>;\n}",...SortableFeed.parameters?.docs?.source},description:{story:"3) Sortable Feed\r\nDemonstrates dynamic sorting with the 'Sort' component.\r\nThe feed uses 'sortedItems' which are updated by the 'Sort' component.",...SortableFeed.parameters?.docs?.description}}},FilterableAndSortableFeed.parameters={...FilterableAndSortableFeed.parameters,docs:{...FilterableAndSortableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [selectedFilters, setSelectedFilters] = useState({});\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n  return <div>\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Sort items={sampleItems} onSortedChange={setSortedItems} />\r\n      <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2} />\r\n    </div>;\n}",...FilterableAndSortableFeed.parameters?.docs?.source},description:{story:"4) Feed with Both Filtering and Sorting\r\nCombines 'Filter' and 'Sort' so you can do both at once.",...FilterableAndSortableFeed.parameters?.docs?.description}}},PredefinedSortingFeed.parameters={...PredefinedSortingFeed.parameters,docs:{...PredefinedSortingFeed.parameters?.docs,source:{originalSource:"() => {\n  const [sortedItems, setSortedItems] = useState([]);\n  useEffect(() => {\n    // Sort by date descending\n    const sorted = [...sampleItems].sort((a, b) => new Date(b.date) - new Date(a.date));\n    setSortedItems(sorted);\n  }, []);\n  return <Feed items={sortedItems} ItemComponent={FeedItem2} />;\n}",...PredefinedSortingFeed.parameters?.docs?.source},description:{story:"5) Predefined Sorting Feed\r\nAutomatically sorts items by date descending on mount.",...PredefinedSortingFeed.parameters?.docs?.description}}},PredefinedFilteringFeed.parameters={...PredefinedFilteringFeed.parameters,docs:{...PredefinedFilteringFeed.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState([]);\n  useEffect(() => {\n    // Filter by status === 'completed'\n    const filtered = sampleItems.filter(item => item.status === 'completed');\n    setFilteredItems(filtered);\n  }, []);\n  return <Feed items={filteredItems} ItemComponent={FeedItem2} />;\n}",...PredefinedFilteringFeed.parameters?.docs?.source},description:{story:"6) Predefined Filtering Feed\r\nAutomatically filters items to only 'completed' status on mount.",...PredefinedFilteringFeed.parameters?.docs?.description}}},SearchableFeed.parameters={...SearchableFeed.parameters,docs:{...SearchableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState(sampleItems);\n  return <div>\r\n      {/* Use Search2 with items for fuzzy search */}\r\n      <Search2 items={sampleItems} onSearch={setFilteredItems} />\r\n      <Feed items={filteredItems} ItemComponent={FeedItem2} />\r\n    </div>;\n}",...SearchableFeed.parameters?.docs?.source},description:{story:"7) Searchable Feed\r\nAdds a fuzzy search via 'Search2' that updates the list of displayed items.",...SearchableFeed.parameters?.docs?.description}}},FullFeed.parameters={...FullFeed.parameters,docs:{...FullFeed.parameters?.docs,source:{originalSource:"() => {\n  const [searchedItems, setSearchedItems] = useState(sampleItems);\n  const [selectedFilters, setSelectedFilters] = useState({});\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n\n  // Wrap the onSearch callback to reset filters and sorting when a new search happens\n  const handleSearch = newSearchResults => {\n    setSearchedItems(newSearchResults);\n    setSelectedFilters({}); // Reset filters\n    setSortedItems(newSearchResults); // Reset sorting base to the new search results\n  };\n  return <div>\r\n      <Search2 items={sampleItems} onSearch={handleSearch} />\r\n      <Sort items={searchedItems} onSortedChange={setSortedItems} />\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem2} />\r\n    </div>;\n}",...FullFeed.parameters?.docs?.source},description:{story:"8) FullFeed\r\nCombines Search2, Filter, and Sort for a complete searching, filtering, and sorting experience.",...FullFeed.parameters?.docs?.description}}}},"./src/components/atoms/Drawers/BottomDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomDrawer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color,required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}},"./src/components/search/Feed.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>search_Feed});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FeedItem=__webpack_require__("./src/components/search/FeedItem.jsx");const FeedContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,PaginationContainer=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`,PageButton=styled_components_browser_esm.default.button`
  padding: 8px 12px;
  border: none;
  background-color: ${_ref=>{let{active}=_ref;return active?"#007bff":"#e0e0e0"}};
  color: ${_ref2=>{let{active}=_ref2;return active?"#fff":"#000"}};
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: ${_ref3=>{let{active}=_ref3;return active?"#0056b3":"#ccc"}};
  }
`,LoadMoreButton=styled_components_browser_esm.default.button`
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`,search_Feed=_ref4=>{let{items=[],sortBy,selectedFilters={},ItemComponent=FeedItem.A,pagination,loadMore,infiniteScroll,scrollContainerRef}=_ref4;const{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore}=function FeedLogic(_ref){let{items=[],sortBy,selectedFilters={},pagination,loadMore,infiniteScroll,scrollContainerRef}=_ref;Array.isArray(items)||(items&&"object"==typeof items?(items=Object.values(items),console.warn("Converted non-array items object to array:",items)):(console.warn("Expected items to be an array but got a different type. Defaulting to empty array."),items=[]));const filteredItems=items.filter((item=>Object.entries(selectedFilters).every((_ref2=>{let[category,values]=_ref2;return!values||0===values.length||values.includes(item[category])})))),sortedItems=sortBy?[...filteredItems].sort(sortBy):filteredItems,[currentPage,setCurrentPage]=(0,react.useState)(1),[visibleCount,setVisibleCount]=(0,react.useState)((()=>infiniteScroll||loadMore||sortedItems.length)),itemsPerPage=pagination||sortedItems.length,totalPages=Math.ceil(sortedItems.length/itemsPerPage);(0,react.useEffect)((()=>{pagination&&currentPage>totalPages&&setCurrentPage(1)}),[pagination,totalPages,currentPage]),(0,react.useEffect)((()=>{if(!infiniteScroll)return;const handleScroll=()=>{let distanceFromBottom=0;if(null!=scrollContainerRef&&scrollContainerRef.current){const{scrollTop,scrollHeight,clientHeight}=scrollContainerRef.current;distanceFromBottom=scrollHeight-(scrollTop+clientHeight)}else{const{scrollY,innerHeight}=window,{offsetHeight}=document.body;distanceFromBottom=offsetHeight-(scrollY+innerHeight)}distanceFromBottom<50&&setVisibleCount((prev=>Math.min(prev+infiniteScroll,sortedItems.length)))},scrollTarget=(null==scrollContainerRef?void 0:scrollContainerRef.current)||window;return scrollTarget.addEventListener("scroll",handleScroll),()=>{scrollTarget.removeEventListener("scroll",handleScroll)}}),[infiniteScroll,sortedItems.length,scrollContainerRef]);let itemsToRender=sortedItems,pages=null,hasMoreItems=!1;if(pagination){const startIndex=(currentPage-1)*itemsPerPage,endIndex=startIndex+itemsPerPage;itemsToRender=sortedItems.slice(startIndex,endIndex),totalPages>1&&(pages=Array.from({length:totalPages},((_,i)=>i+1)))}else infiniteScroll?itemsToRender=sortedItems.slice(0,visibleCount):loadMore&&(itemsToRender=sortedItems.slice(0,visibleCount),hasMoreItems=visibleCount<sortedItems.length);return{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore:()=>{setVisibleCount((prev=>Math.min(prev+loadMore,sortedItems.length)))}}}({items,sortBy,selectedFilters,pagination,loadMore,infiniteScroll,scrollContainerRef});return react.createElement(FeedContainer,null,itemsToRender.map(((item,index)=>react.createElement(ItemComponent,{key:index,data:item}))),(null==pages?void 0:pages.length)>1&&react.createElement(PaginationContainer,null,pages.map((page=>react.createElement(PageButton,{key:page,active:page===currentPage,onClick:()=>setCurrentPage(page)},page)))),loadMore&&hasMoreItems&&react.createElement(LoadMoreButton,{onClick:handleLoadMore},"Load More"))}},"./src/components/search/FeedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FeedItemContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  background: #fff;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h3`
  margin: 0 0 0.5rem 0;
`,Description=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p`
  margin: 0;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{data}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeedItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title,null,data.title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description,null,data.description))}},"./src/components/search/FeedItem2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{data}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,data.title," (FeedItem2)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,data.description),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Status: ",data.status),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Priority: ",data.priority),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Date: ",data.date))}},"./src/components/search/Filter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FilterLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/FilterLogic.js"),_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx");const FilterContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: grid;
  gap: 2rem;
`,GroupContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h5`
  margin-bottom: 0.5rem;
`,filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FilterLogic__WEBPACK_IMPORTED_MODULE_1__.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=filtersConfig.status,priorityFilter=filtersConfig.priority;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,statusFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,priorityFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))}},"./src/components/search/FilterLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{filters,onChange,children}=_ref;const initialSelections=filters.reduce(((acc,group)=>(acc[group.category]=[],acc)),{}),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelections);return"function"==typeof children?children({filters,selectedFilters,setSelection:(category,value)=>{setSelectedFilters((prev=>{const newSelections={...prev,[category]:[value]};return onChange&&onChange(newSelections),newSelections}))},clearAll:()=>{setSelectedFilters(initialSelections),onChange&&onChange(initialSelections)}}):null}},"./src/components/search/Search2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_Drawers_BottomDrawer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Drawers/BottomDrawer.jsx"),_SearchLogic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/search/SearchLogic.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  padding: 16px;
`,SearchInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: relative;
  width: 100%;
`,SearchInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.input`
  width: 100%;
  padding: 12px 40px 12px 12px; /* Add padding-right for the 'X' button */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0,123,255,0.3);
    outline: none;
  }
`,CloseButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`,SuggestionsList=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul`
  list-style: none;
  margin: 12px 0 0 0;
  padding: 0;
`,SuggestionItem=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`,SectionTitle=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h4`
  margin: 16px 0 8px;
  font-size: 14px;
  color: #555;
`,SearchButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  text-align: left;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #007bff;
  }
`,SearchText=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span`
  color: ${props=>props.hasQuery?"#000":"#888"};
`,OpenButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(SearchButton)`
  margin: 20px;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items,onSearch,historyItems=[]}=_ref;const{isOpen,open,close,query,suggestions,lastQuery,handleInputChange,handleSuggestionClick,handleSearchForClick}=(0,_SearchLogic__WEBPACK_IMPORTED_MODULE_2__.RU)({items,onSearch,historyItems},{keys:["title"]});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(OpenButton,{onClick:open},react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchText,{hasQuery:lastQuery},lastQuery||"Search...")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_Drawers_BottomDrawer__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen,onClose:close},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchInput,{type:"text",value:query,onChange:handleInputChange,placeholder:"Search tasks..."}),query&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:close,"aria-label":"Close Search"},"×")),!query&&historyItems.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SectionTitle,null,"Recent Searches"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionsList,null,historyItems.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title))))),query&&suggestions.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionsList,null,query&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{onClick:handleSearchForClick},'Search For "',query,'"'),suggestions.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title)))))))}},"./src/components/search/SearchLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RU:()=>SearchLogic,i6:()=>useFuzzySearch});var fuse_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fuse.js/dist/fuse.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const defaultFuseOptions={keys:["title"],threshold:.4};function useFuzzySearch(items){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[suggestions,setSuggestions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),fuseInstance=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function createFuseInstance(items){const fuseOptions={...defaultFuseOptions,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};return new fuse_js__WEBPACK_IMPORTED_MODULE_1__.A(items,fuseOptions)}(items,options)),[items,options]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const results=function performFuzzySearch(fuseInstance,query){return query.trim()?fuseInstance.search(query).map((result=>result.item)):[]}(fuseInstance,query);setSuggestions(results)}),[query,fuseInstance]),{query,setQuery,suggestions}}function SearchLogic(_ref){let{items,onSearch,historyItems=[]}=_ref,fuseOptions=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{query,setQuery,suggestions}=useFuzzySearch(items,fuseOptions),[lastQuery,setLastQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),close=()=>{setIsOpen(!1),setQuery("")};return{isOpen,open:()=>setIsOpen(!0),close,query,setQuery,suggestions,lastQuery,handleInputChange:e=>{const newQuery=e.target.value;setQuery(newQuery),onSearch&&onSearch(suggestions)},handleSuggestionClick:suggestion=>{const newQuery=suggestion.title;if(setQuery(newQuery),setLastQuery(newQuery),onSearch){const updatedSuggestions=items.filter((item=>item.title.toLowerCase().includes(newQuery.toLowerCase())));onSearch(updatedSuggestions)}close()},handleSearchForClick:()=>{onSearch&&onSearch(suggestions),setLastQuery(query),close()}}}},"./src/components/search/Sort.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SortLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/SortLogic.js");const SortContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
`,Select=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`,sortingOptions=[{label:"Sort By",comparator:null},{label:"Title: A-Z",comparator:(a,b)=>a.title.localeCompare(b.title)},{label:"Title: Z-A",comparator:(a,b)=>b.title.localeCompare(a.title)},{label:"Date: Newest",comparator:(a,b)=>new Date(b.date)-new Date(a.date)},{label:"Date: Oldest",comparator:(a,b)=>new Date(a.date)-new Date(b.date)}],__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items,onSortedChange}=_ref;const{updateSort}=(0,_SortLogic__WEBPACK_IMPORTED_MODULE_1__.A)({items,onSortedChange});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SortContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Select,{onChange:e=>{const selectedOption=sortingOptions.find((option=>option.label===e.target.value));updateSort((null==selectedOption?void 0:selectedOption.comparator)||null)}},sortingOptions.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:option.label,key:option.label},option.label)))))}},"./src/components/search/SortLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items,onSortedChange}=_ref;const[sortBy,setSortBy]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),updateSort=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((comparator=>{setSortBy((()=>comparator))}),[]),sortedItems=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>sortBy&&items?[...items].sort(sortBy):items),[items,sortBy]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onSortedChange&&onSortedChange(sortedItems)}),[sortedItems,onSortedChange]),{sortBy,updateSort,sortedItems}}}}]);
//# sourceMappingURL=stories-search-SearchView-stories.4f84c3c7.iframe.bundle.js.map