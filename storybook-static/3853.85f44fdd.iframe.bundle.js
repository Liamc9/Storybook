"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3853],{"./src/stories/pages/search/SearchView.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilterableAndSortableFeed:()=>FilterableAndSortableFeed,FilterableFeed:()=>FilterableFeed,FullFeed:()=>FullFeed,PlainFeed:()=>PlainFeed,PredefinedFilteringFeed:()=>PredefinedFilteringFeed,PredefinedSortingFeed:()=>PredefinedSortingFeed,SearchableFeed:()=>SearchableFeed,SortableFeed:()=>SortableFeed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchView_stories});var react=__webpack_require__("./node_modules/react/index.js"),Feed=__webpack_require__("./src/components/search/feed/Feed.jsx"),Filter=__webpack_require__("./src/components/search/filter/Filter.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const sort_SortLogic=_ref=>{let{items,onSortedChange}=_ref;const[sortBy,setSortBy]=(0,react.useState)(null),updateSort=(0,react.useCallback)((comparator=>{setSortBy((()=>comparator))}),[]),sortedItems=(0,react.useMemo)((()=>sortBy&&items?[...items].sort(sortBy):items),[items,sortBy]);return(0,react.useEffect)((()=>{onSortedChange&&onSortedChange(sortedItems)}),[sortedItems,onSortedChange]),{sortBy,updateSort,sortedItems}},SortContainer=styled_components_browser_esm.Ay.div`
`,Select=styled_components_browser_esm.Ay.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`,sortingOptions=[{label:"Sort By",comparator:null},{label:"Title: A-Z",comparator:(a,b)=>a.title.localeCompare(b.title)},{label:"Title: Z-A",comparator:(a,b)=>b.title.localeCompare(a.title)},{label:"Date: Newest",comparator:(a,b)=>new Date(b.date)-new Date(a.date)},{label:"Date: Oldest",comparator:(a,b)=>new Date(a.date)-new Date(b.date)}],sort_Sort=_ref=>{let{items,onSortedChange}=_ref;const{updateSort}=sort_SortLogic({items,onSortedChange});return react.createElement(SortContainer,null,react.createElement(Select,{onChange:e=>{const selectedOption=sortingOptions.find((option=>option.label===e.target.value));updateSort((null==selectedOption?void 0:selectedOption.comparator)||null)}},sortingOptions.map((option=>react.createElement("option",{value:option.label,key:option.label},option.label)))))};var index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");const Container=styled_components_browser_esm.Ay.div`
  padding: 16px;
`,SearchInputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
`,SearchInput=styled_components_browser_esm.Ay.input`
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
`,CloseButton=styled_components_browser_esm.Ay.button`
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
`,SuggestionsList=styled_components_browser_esm.Ay.ul`
  list-style: none;
  margin: 12px 0 0 0;
  padding: 0;
`,SuggestionItem=styled_components_browser_esm.Ay.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`,SectionTitle=styled_components_browser_esm.Ay.h4`
  margin: 16px 0 8px;
  font-size: 14px;
  color: #555;
`,SearchButton=styled_components_browser_esm.Ay.button`
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
`,SearchText=styled_components_browser_esm.Ay.span`
  color: ${props=>props.hasQuery?"#000":"#888"};
`,OpenButton=(0,styled_components_browser_esm.Ay)(SearchButton)`
  margin: 20px;
`,search_Search2=_ref=>{let{items,onSearch,historyItems=[]}=_ref;const fuseOptions=(0,react.useMemo)((()=>({keys:["title"]})),[]),{isOpen,open,close,query,suggestions,lastQuery,handleInputChange,handleSuggestionClick,handleSearchForClick}=(0,index_es.RUP)({items,onSearch,historyItems},fuseOptions);return react.createElement(react.Fragment,null,react.createElement(OpenButton,{onClick:open},react.createElement(SearchText,{hasQuery:lastQuery},lastQuery||"Search...")),react.createElement(index_es.JPs,{isOpen,onClose:close},react.createElement(Container,null,react.createElement(SearchInputContainer,null,react.createElement(SearchInput,{type:"text",value:query,onChange:handleInputChange,placeholder:"Search tasks..."}),query&&react.createElement(CloseButton,{onClick:close,"aria-label":"Close Search"},"×")),!query&&historyItems.length>0&&react.createElement(react.Fragment,null,react.createElement(SectionTitle,null,"Recent Searches"),react.createElement(SuggestionsList,null,historyItems.map(((item,index)=>react.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title))))),query&&suggestions.length>0&&react.createElement(SuggestionsList,null,query&&react.createElement(SuggestionItem,{onClick:handleSearchForClick},'Search For "',query,'"'),suggestions.map(((item,index)=>react.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title)))))))};var FeedItem=__webpack_require__("./src/components/search/feedItem/FeedItem.jsx");const SearchView_stories={title:"Pages/Search/SearchView",component:Feed.A},sampleItems=[{title:"Task 1",description:"Do this",status:"completed",priority:"high",date:"2023-08-20"},{title:"Task 2",description:"Do that",status:"pending",priority:"medium",date:"2023-08-22"},{title:"Task 3",description:"Another task",status:"completed",priority:"low",date:"2023-08-21"},{title:"Task 4",description:"Yet another task",status:"inProgress",priority:"medium",date:"2023-08-23"}],PlainFeed=()=>react.createElement(Feed.A,{items:sampleItems,ItemComponent:FeedItem.A}),FilterableFeed=()=>{const[selectedFilters,setSelectedFilters]=(0,react.useState)({});return react.createElement("div",null,react.createElement(Filter.Ay,{onChange:setSelectedFilters}),react.createElement(Feed.A,{items:sampleItems,selectedFilters,ItemComponent:FeedItem.A}))},SortableFeed=()=>{const[sortedItems,setSortedItems]=(0,react.useState)(sampleItems);return react.createElement("div",null,react.createElement(sort_Sort,{items:sampleItems,onSortedChange:setSortedItems}),react.createElement(Feed.A,{items:sortedItems,ItemComponent:FeedItem.A}))},FilterableAndSortableFeed=()=>{const[selectedFilters,setSelectedFilters]=(0,react.useState)({}),[sortedItems,setSortedItems]=(0,react.useState)(sampleItems);return react.createElement("div",null,react.createElement(Filter.Ay,{onChange:setSelectedFilters}),react.createElement(sort_Sort,{items:sampleItems,onSortedChange:setSortedItems}),react.createElement(Feed.A,{items:sortedItems,selectedFilters,ItemComponent:FeedItem.A}))},PredefinedSortingFeed=()=>{const[sortedItems,setSortedItems]=(0,react.useState)([]);return(0,react.useEffect)((()=>{const sorted=[...sampleItems].sort(((a,b)=>new Date(b.date)-new Date(a.date)));setSortedItems(sorted)}),[]),react.createElement(Feed.A,{items:sortedItems,ItemComponent:FeedItem.A})},PredefinedFilteringFeed=()=>{const[filteredItems,setFilteredItems]=(0,react.useState)([]);return(0,react.useEffect)((()=>{const filtered=sampleItems.filter((item=>"completed"===item.status));setFilteredItems(filtered)}),[]),react.createElement(Feed.A,{items:filteredItems,ItemComponent:FeedItem.A})},SearchableFeed=()=>{const[filteredItems,setFilteredItems]=(0,react.useState)(sampleItems);return react.createElement("div",null,react.createElement(search_Search2,{items:sampleItems,onSearch:setFilteredItems}),react.createElement(Feed.A,{items:filteredItems,ItemComponent:FeedItem.A}))},FullFeed=()=>{const[searchedItems,setSearchedItems]=(0,react.useState)(sampleItems),[selectedFilters,setSelectedFilters]=(0,react.useState)({}),[sortedItems,setSortedItems]=(0,react.useState)(sampleItems);return react.createElement("div",null,react.createElement(search_Search2,{items:sampleItems,onSearch:newSearchResults=>{setSearchedItems(newSearchResults),setSelectedFilters({}),setSortedItems(newSearchResults)}}),react.createElement(sort_Sort,{items:searchedItems,onSortedChange:setSortedItems}),react.createElement(Filter.Ay,{onChange:setSelectedFilters}),react.createElement(Feed.A,{items:sortedItems,selectedFilters,ItemComponent:FeedItem.A}))},__namedExportsOrder=["PlainFeed","FilterableFeed","SortableFeed","FilterableAndSortableFeed","PredefinedSortingFeed","PredefinedFilteringFeed","SearchableFeed","FullFeed"];PlainFeed.parameters={...PlainFeed.parameters,docs:{...PlainFeed.parameters?.docs,source:{originalSource:"() => {\n  return <Feed items={sampleItems} ItemComponent={FeedItem} />;\n}",...PlainFeed.parameters?.docs?.source}}},FilterableFeed.parameters={...FilterableFeed.parameters,docs:{...FilterableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [selectedFilters, setSelectedFilters] = useState({});\n  return <div>\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Feed items={sampleItems} selectedFilters={selectedFilters} ItemComponent={FeedItem} />\r\n    </div>;\n}",...FilterableFeed.parameters?.docs?.source}}},SortableFeed.parameters={...SortableFeed.parameters,docs:{...SortableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n  return <div>\r\n      <Sort items={sampleItems} onSortedChange={setSortedItems} />\r\n      <Feed items={sortedItems} ItemComponent={FeedItem} />\r\n    </div>;\n}",...SortableFeed.parameters?.docs?.source}}},FilterableAndSortableFeed.parameters={...FilterableAndSortableFeed.parameters,docs:{...FilterableAndSortableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [selectedFilters, setSelectedFilters] = useState({});\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n  return <div>\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Sort items={sampleItems} onSortedChange={setSortedItems} />\r\n      <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem} />\r\n    </div>;\n}",...FilterableAndSortableFeed.parameters?.docs?.source}}},PredefinedSortingFeed.parameters={...PredefinedSortingFeed.parameters,docs:{...PredefinedSortingFeed.parameters?.docs,source:{originalSource:"() => {\n  const [sortedItems, setSortedItems] = useState([]);\n  useEffect(() => {\n    // Sort by date descending\n    const sorted = [...sampleItems].sort((a, b) => new Date(b.date) - new Date(a.date));\n    setSortedItems(sorted);\n  }, []);\n  return <Feed items={sortedItems} ItemComponent={FeedItem} />;\n}",...PredefinedSortingFeed.parameters?.docs?.source}}},PredefinedFilteringFeed.parameters={...PredefinedFilteringFeed.parameters,docs:{...PredefinedFilteringFeed.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState([]);\n  useEffect(() => {\n    // Filter by status === 'completed'\n    const filtered = sampleItems.filter(item => item.status === 'completed');\n    setFilteredItems(filtered);\n  }, []);\n  return <Feed items={filteredItems} ItemComponent={FeedItem} />;\n}",...PredefinedFilteringFeed.parameters?.docs?.source}}},SearchableFeed.parameters={...SearchableFeed.parameters,docs:{...SearchableFeed.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState(sampleItems);\n  return <div>\r\n      {/* Use Search2 with items for fuzzy search */}\r\n      <Search2 items={sampleItems} onSearch={setFilteredItems} />\r\n      <Feed items={filteredItems} ItemComponent={FeedItem} />\r\n    </div>;\n}",...SearchableFeed.parameters?.docs?.source}}},FullFeed.parameters={...FullFeed.parameters,docs:{...FullFeed.parameters?.docs,source:{originalSource:"() => {\n  const [searchedItems, setSearchedItems] = useState(sampleItems);\n  const [selectedFilters, setSelectedFilters] = useState({});\n  const [sortedItems, setSortedItems] = useState(sampleItems);\n\n  // Wrap the onSearch callback to reset filters and sorting when a new search happens\n  const handleSearch = newSearchResults => {\n    setSearchedItems(newSearchResults);\n    setSelectedFilters({}); // Reset filters\n    setSortedItems(newSearchResults); // Reset sorting base to the new search results\n  };\n  return <div>\r\n      <Search2 items={sampleItems} onSearch={handleSearch} />\r\n      <Sort items={searchedItems} onSortedChange={setSortedItems} />\r\n      <Filter onChange={setSelectedFilters} />\r\n      <Feed items={sortedItems} selectedFilters={selectedFilters} ItemComponent={FeedItem} />\r\n    </div>;\n}",...FullFeed.parameters?.docs?.source}}}},"./src/components/form/inputs/rangeInputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`,RangeInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
`,Track=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
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
`,ThumbValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`,Slider=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",value,onChange}=_ref;const[range,setRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||[min,max]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{value&&Array.isArray(value)&&2===value.length&&setRange(value)}),[value]);const calculatePercentage=value=>(value-min)/(max-min)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))}},"./src/components/form/inputs/selectInputs/SelectInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SelectContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  position: relative;
  font-family: sans-serif;
`,sharedSelectStyles=styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  appearance: none;
  transition: border-color 0.3s ease-in-out;
`,StyledSelect=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.select`
  ${sharedSelectStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
  color: ${_ref2=>{let{value}=_ref2;return value?"#000":"#6B7280"}}; /* Default placeholder style */
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.label`
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
`,StyledArrow=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: ${_ref5=>{let{isFocused,color}=_ref5;return isFocused?color:"#6B7280"}};
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color,required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}},"./src/components/search/feedItem/FeedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{data}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,data.title," (FeedItem2)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,data.description),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Status: ",data.status),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Priority: ",data.priority),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Date: ",data.date))}},"./src/components/search/feed/Feed.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),liamc9npm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");const FeedContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  flex-direction: column;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items=[],sortBy,selectedFilters={},ItemComponent=liamc9npm__WEBPACK_IMPORTED_MODULE_1__.GJI,pagination,loadMore,infiniteScroll,scrollContainerRef}=_ref;const{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore}=(0,liamc9npm__WEBPACK_IMPORTED_MODULE_1__.fff)({items,sortBy,selectedFilters,pagination,loadMore,infiniteScroll,scrollContainerRef});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeedContainer,null,itemsToRender.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemComponent,{key:index,data:item}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(liamc9npm__WEBPACK_IMPORTED_MODULE_1__.$op,{pages,currentPage,onPageChange:setCurrentPage}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(liamc9npm__WEBPACK_IMPORTED_MODULE_1__.szj,{loadMore,hasMoreItems,onLoadMore:handleLoadMore}))}},"./src/components/search/filter/Filter.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_FilterLogic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/filter/FilterLogic.js"),_form_inputs_rangeInputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeSlider.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_form_inputs_selectInputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/inputs/selectInputs/SelectInput.jsx");const FilterContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  display: grid;
  gap: 2rem;
`,GroupContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div`
  display: flex;
  flex-direction: column;
`,GroupLabel=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.h5`
  margin-bottom: 0.5rem;
`,filtersConfig={status:{category:"status",label:"Status",type:"dropdown",options:[{value:"completed",label:"Completed",initial:!1},{value:"pending",label:"Pending",initial:!1},{value:"inProgress",label:"In Progress",initial:!1}]},priority:{category:"priority",label:"Priority",type:"range",options:[{value:"high",label:"High",initial:!1},{value:"medium",label:"Medium",initial:!1},{value:"low",label:"Low",initial:!1}]}},__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FilterLogic__WEBPACK_IMPORTED_MODULE_1__.A,{filters:Object.values(filtersConfig),onChange:selectedFilters=>{onChange&&onChange(selectedFilters)}},(_ref2=>{let{selectedFilters,setSelection}=_ref2;const statusFilter=filtersConfig.status,priorityFilter=filtersConfig.priority;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FilterContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,statusFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_inputs_selectInputs_SelectInput__WEBPACK_IMPORTED_MODULE_3__.A,{name:statusFilter.category,label:`Select ${statusFilter.label}`,value:selectedFilters[statusFilter.category]&&selectedFilters[statusFilter.category][0]?selectedFilters[statusFilter.category][0]:"",onChange:e=>setSelection(statusFilter.category,e.target.value),options:statusFilter.options,color:"#000"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(GroupLabel,null,priorityFilter.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_inputs_rangeInputs_RangeSlider__WEBPACK_IMPORTED_MODULE_2__.A,{min:0,max:priorityFilter.options.length-1,label:priorityFilter.label,onChange:index=>{var _priorityFilter$optio;const value=null===(_priorityFilter$optio=priorityFilter.options[index])||void 0===_priorityFilter$optio?void 0:_priorityFilter$optio.value;value&&setSelection(priorityFilter.category,value)}})))}))}},"./src/components/search/filter/FilterLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{filters,onChange,children}=_ref;const initialSelections=filters.reduce(((acc,group)=>(acc[group.category]=[],acc)),{}),[selectedFilters,setSelectedFilters]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelections);return"function"==typeof children?children({filters,selectedFilters,setSelection:(category,value)=>{setSelectedFilters((prev=>{const newSelections={...prev,[category]:[value]};return onChange&&onChange(newSelections),newSelections}))},clearAll:()=>{setSelectedFilters(initialSelections),onChange&&onChange(initialSelections)}}):null}}}]);
//# sourceMappingURL=3853.85f44fdd.iframe.bundle.js.map