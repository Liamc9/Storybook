"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[750],{"./src/stories/molecules/search/SearchPageDrawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchPageDrawer_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),BottomDrawer=__webpack_require__("./src/components/atoms/Drawers/BottomDrawer.jsx"),SearchDrawer=__webpack_require__("./src/components/molecules/search/SearchDrawer.jsx"),SelectField=__webpack_require__("./src/components/atoms/menuitem/SelectField.jsx"),ToggleField=__webpack_require__("./src/components/atoms/menuitem/ToggleField.jsx");const Wrapper=styled_components_browser_esm.default.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height for proper scrolling */
`,FiltersContainer=styled_components_browser_esm.default.div`
  flex: 1; /* Allow this to take up the remaining space */
  overflow-y: auto; /* Enable scrolling if the content overflows */
  padding-bottom: 80px; /* Space to avoid overlapping with the floating button */
`,FloatingButtonContainer=styled_components_browser_esm.default.div`
  position: sticky; /* Stick to the bottom of the drawer */
  bottom: 0;
  background-color: white; /* Ensure it stands out over content */
  padding: 16px 0 0;
  border-top: 1px solid #e0e0e0; /* Add a separator line */
  z-index: 10; /* Ensure it stays above scrolling content */
`,ApplyButton=styled_components_browser_esm.default.button`
  width: 100%; /* Full width for better visibility */
  padding: 12px 16px;
  background-color: #000000; /* Bootstrap primary color */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

`,FilterDrawer=_ref=>{let{filters,selectedFilters,onFilterChange,closeDrawer,sortOptions,selectedSortOption,onSortChange}=_ref;const[localSelectedFilters,setLocalSelectedFilters]=(0,react.useState)(selectedFilters),[localSelectedSortOption,setLocalSelectedSortOption]=(0,react.useState)(selectedSortOption);(0,react.useEffect)((()=>{setLocalSelectedFilters(selectedFilters)}),[selectedFilters]),(0,react.useEffect)((()=>{setLocalSelectedSortOption(selectedSortOption)}),[selectedSortOption]);const handleFilterChange=(key,value)=>{setLocalSelectedFilters((prevFilters=>({...prevFilters,[key]:value})))};return react.createElement(Wrapper,null,react.createElement(FiltersContainer,null,sortOptions&&sortOptions.length>0&&react.createElement(SelectField.A,{name:"Sort By",value:localSelectedSortOption,options:sortOptions,onChange:value=>{setLocalSelectedSortOption(value)},placeholder:"Select sort order"}),filters.map((filter=>{switch(filter.type){case"select":return react.createElement(SelectField.A,{key:filter.key,name:filter.name,value:localSelectedFilters[filter.key]||"",options:filter.options,onChange:value=>handleFilterChange(filter.key,value),placeholder:`Select ${filter.name}`});case"toggle":return react.createElement(ToggleField.A,{key:filter.key,name:filter.name,value:localSelectedFilters[filter.key]||!1,onChange:value=>handleFilterChange(filter.key,value)});default:return null}}))),react.createElement(FloatingButtonContainer,null,react.createElement(ApplyButton,{onClick:()=>{onFilterChange(localSelectedFilters),onSortChange(localSelectedSortOption),closeDrawer()}},"Apply Filters")))};FilterDrawer.defaultProps={sortOptions:[],selectedSortOption:""};const search_FilterDrawer=FilterDrawer;var Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const StyledButton=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 25px;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #eaeaea;
  }

  &:focus {
    outline: none;
  }

  span {
    flex: 1;
    text-align: left;
    color: #aaa;
  }
`,SearchIconContainer=styled_components_browser_esm.default.div`
  margin-right: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #333;
  }
`,search_SearchButton=_ref=>{let{onClick}=_ref;return react.createElement(StyledButton,{onClick},react.createElement(SearchIconContainer,null,react.createElement(Icons.SearchIcon2,null)),react.createElement("span",null,"Search..."))},Button=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 12px;
  padding: 0 12px;

  &:hover {
    background-color: #f5f5f5;
    border-color: #dcdcdc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: #007bff; /* Highlight color */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); /* Accessibility focus ring */
  }
`,IconWrapper=styled_components_browser_esm.default.div`
  color: #333;

  svg {
    width: 20px;
    height: 20px;
  }
`,search_FilterButton=_ref=>{let{onClick}=_ref;return react.createElement(Button,{onClick,"aria-label":"Open filter drawer"},react.createElement(IconWrapper,null,react.createElement(Icons.FilterIcon,null)," "))},ItemContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,Thumbnail=styled_components_browser_esm.default.div`
  width: 40px;
  height: 40px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`,TextContainer=styled_components_browser_esm.default.div`
  flex: 1;
`,Title=styled_components_browser_esm.default.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`,Description=styled_components_browser_esm.default.div`
  font-size: 14px;
  color: #666;
`,search_SearchResultItem=_ref=>{let{data}=_ref;const{title,description,thumbnail}=data;return react.createElement(ItemContainer,null,thumbnail&&react.createElement(Thumbnail,null,react.createElement("img",{src:thumbnail,alt:`${title} thumbnail`})),react.createElement(TextContainer,null,title&&react.createElement(Title,null,title),description&&react.createElement(Description,null,description)))},ResultsWrapper=styled_components_browser_esm.default.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`,ButtonsContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
`,search_SearchPageDrawer=_ref=>{let{trendingItems,searchResults,filters,sortOptions}=_ref;const[isSearchDrawerOpen,setSearchDrawerOpen]=(0,react.useState)(!1),[isFilterDrawerOpen,setFilterDrawerOpen]=(0,react.useState)(!1),[searchInput,setSearchInput]=(0,react.useState)(""),[searchTerm,setSearchTerm]=(0,react.useState)(""),[selectedFilters,setSelectedFilters]=(0,react.useState)({}),[selectedSortOption,setSelectedSortOption]=(0,react.useState)(""),handleSearchDrawerClose=()=>setSearchDrawerOpen(!1),handleFilterDrawerClose=()=>setFilterDrawerOpen(!1),sortedResults=[...searchResults.filter((result=>{if(!(""===searchTerm||result.title.toLowerCase().includes(searchTerm.toLowerCase())))return!1;let matchesFilters=!0;for(const[filterKey,filterValue]of Object.entries(selectedFilters))if(null!=filterValue&&""!==filterValue)if("boolean"==typeof filterValue){if(result[filterKey]!==filterValue){matchesFilters=!1;break}}else if(result[filterKey]!==filterValue){matchesFilters=!1;break}return matchesFilters}))];selectedSortOption&&sortedResults.sort(((a,b)=>{switch(selectedSortOption){case"title_asc":return a.title.localeCompare(b.title);case"title_desc":return b.title.localeCompare(a.title);case"date_newest":return new Date(b.date)-new Date(a.date);case"date_oldest":return new Date(a.date)-new Date(b.date);default:return 0}}));const renderSearchResult=(result,index)=>react.createElement(search_SearchResultItem,{key:index,data:result});return react.createElement("div",null,react.createElement(ButtonsContainer,null,react.createElement(search_SearchButton,{onClick:()=>setSearchDrawerOpen(!0)}),react.createElement(search_FilterButton,{onClick:()=>setFilterDrawerOpen(!0)})),sortedResults.length>0?react.createElement(ResultsWrapper,null,react.createElement("h3",null,"Search Results"),sortedResults.map(((result,index)=>renderSearchResult(result,index)))):react.createElement(ResultsWrapper,null,react.createElement("h3",null,"No Results Found")),react.createElement(BottomDrawer.A,{isOpen:isSearchDrawerOpen,onClose:handleSearchDrawerClose,transitionDuration:100,height:"100vh"},react.createElement(SearchDrawer.A,{trendingItems,query:searchInput,onQueryChange:newQuery=>{setSearchInput(newQuery)},searchResults,closeDrawer:handleSearchDrawerClose,onSearchSubmit:()=>{setSearchTerm(searchInput),setSearchInput(""),setSelectedFilters({}),setSelectedSortOption(""),setSearchDrawerOpen(!1)},renderSearchResult,renderTrendingItem:(item,index)=>react.createElement(search_SearchResultItem,{key:index,data:{title:item,description:"Trending topic",thumbnail:null}}),isOpen:isSearchDrawerOpen})),react.createElement(BottomDrawer.A,{isOpen:isFilterDrawerOpen,onClose:handleFilterDrawerClose,transitionDuration:300,height:"60vh"},react.createElement(search_FilterDrawer,{filters,selectedFilters,onFilterChange:filters=>{setSelectedFilters(filters),setFilterDrawerOpen(!1)},closeDrawer:handleFilterDrawerClose,sortOptions,selectedSortOption,onSortChange:newSortOption=>{setSelectedSortOption(newSortOption)}})))},SearchPageDrawer_stories={title:"Pages/SearchPageDrawer",component:search_SearchPageDrawer,tags:["autodocs"],parameters:{docs:{description:{component:'\n# SearchPageDrawer\n\nThe `SearchPageDrawer` component is a page-level UI that combines search and filter functionalities. It allows users to:\n- Search through a list of items.\n- Apply filters to refine the results.\n- Sort results based on specified criteria.\n\n### Usage\n\n```jsx\nimport SearchPageDrawer from "path-to-your-component";\n\nconst mockTrendingItems = ["React", "Storybook", "JavaScript"];\n\nconst mockSearchResults = [\n  {\n    title: "React Native",\n    description: "A framework for building native apps with React.",\n    thumbnail: "https://example.com/react-native.png",\n    category: "Framework",\n    level: "Intermediate",\n    isFree: true,\n    date: "2021-06-15",\n  },\n  // Add more search results...\n];\n\nconst filters = [\n  {\n    key: "category",\n    name: "Category",\n    type: "select",\n    options: ["Framework", "State Management", "API"],\n  },\n  {\n    key: "level",\n    name: "Difficulty Level",\n    type: "select",\n    options: ["Beginner", "Intermediate", "Advanced"],\n  },\n  {\n    key: "isFree",\n    name: "Free Resources Only",\n    type: "toggle",\n  },\n];\n\nconst sortOptions = [\n  { value: "title_asc", label: "Title (A-Z)" },\n  { value: "title_desc", label: "Title (Z-A)" },\n  { value: "date_newest", label: "Date (Newest First)" },\n  { value: "date_oldest", label: "Date (Oldest First)" },\n];\n\n<SearchPageDrawer\n  trendingItems={mockTrendingItems}\n  searchResults={mockSearchResults}\n  filters={filters}\n  sortOptions={sortOptions}\n/>\n```\n\n### Props\n\n| Prop             | Type        | Description                                                                 |\n|------------------|-------------|-----------------------------------------------------------------------------|\n| `trendingItems` | `array`   | An array of trending search items to display when no query is provided.     |\n| `searchResults` | `array`   | An array of search result objects.                                          |\n| `filters`       | `array`   | An array of filter definitions.                                             |\n| `sortOptions`   | `array`   | An array of sorting options.                                                |\n\n### Notes\n- The component uses `BottomDrawer` for rendering the search and filter drawers.\n- Ensure to provide meaningful filters and sorting options to enhance usability.\n        '}}}},Default=(args=>react.createElement(search_SearchPageDrawer,args)).bind({});Default.args={trendingItems:["React","Storybook","JavaScript"],searchResults:[{title:"React Native",description:"A framework for building native apps with React.",thumbnail:"https://example.com/react-native.png",category:"Framework",level:"Intermediate",isFree:!0,date:"2021-06-15"},{title:"Redux",description:"A predictable state container for JavaScript apps.",thumbnail:"https://example.com/redux.png",category:"State Management",level:"Advanced",isFree:!1,date:"2020-11-20"},{title:"GraphQL",description:"A query language for APIs and a runtime for executing those queries.",thumbnail:null,category:"API",level:"Intermediate",isFree:!0,date:"2022-01-10"}],availableFilters:["Framework","State Management","API","Database","Testing","Deployment","Design","Other"],filters:[{key:"category",name:"Category",type:"select",options:["Framework","State Management","API"]},{key:"level",name:"Difficulty Level",type:"select",options:["Beginner","Intermediate","Advanced"]},{key:"isFree",name:"Free Resources Only",type:"toggle"}],sortOptions:[{value:"title_asc",label:"Title (A-Z)"},{value:"title_desc",label:"Title (Z-A)"},{value:"date_newest",label:"Date (Newest First)"},{value:"date_oldest",label:"Date (Oldest First)"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <SearchPageDrawer {...args} />;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/Drawers/BottomDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomDrawer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`;function BottomDrawer(_ref15){let{isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}=_ref15;const drawerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContainer,{isOpen,transitionDuration},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Handle,{hideHandle})," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContent,{autoHeight},children))),document.body)}},"./src/components/atoms/menuitem/SelectField.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const FieldContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{name,value,onChange}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FieldName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleButton,{checked:value,onClick:()=>{onChange(!value)}})))}},"./src/components/molecules/search/SearchDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>search_SearchDrawer});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SearchBarContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 25px;
  padding: 8px 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
`,StyledInput=styled_components_browser_esm.default.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`,StyledIcon=styled_components_browser_esm.default.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;

  svg {
    width: 20px;
    height: 20px;
  }
`,SearchBar2=_ref=>{let{value,onChange,placeholder,onKeyDown,inputRef}=_ref;return react.createElement(SearchBarContainer,null,react.createElement(StyledIcon,null,react.createElement(Icons.SearchIcon2,null)," "),react.createElement(StyledInput,{type:"text",value,onChange,placeholder,onKeyDown,ref:inputRef}))};SearchBar2.defaultProps={placeholder:"Search...",onKeyDown:null,inputRef:null};const search_SearchBar2=SearchBar2,SearchDrawer_SearchBarContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,CancelButton=styled_components_browser_esm.default.button`
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
    font-weight: bold;
`,Wrapper=styled_components_browser_esm.default.div`
  padding: 16px;
`,search_SearchDrawer=_ref=>{let{trendingItems,query,onQueryChange,searchResults,closeDrawer,onSearchSubmit,renderSearchResult,renderTrendingItem,isOpen}=_ref;const inputRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{isOpen&&inputRef.current&&inputRef.current.focus()}),[isOpen]);const filteredResults=searchResults.filter((result=>result.title.includes(query)));return react.createElement(Wrapper,null,react.createElement(SearchDrawer_SearchBarContainer,null,react.createElement(search_SearchBar2,{value:query,onChange:e=>{onQueryChange(e.target.value)},placeholder:"Search for...",onKeyDown:e=>{"Enter"===e.key&&""!==query.trim()&&onSearchSubmit()},inputRef}),react.createElement(CancelButton,{onClick:()=>{onQueryChange(""),closeDrawer()}},"Cancel")),react.createElement("div",null,""===query?react.createElement("div",null,react.createElement("h3",null,"Trending"),trendingItems.map(((item,index)=>renderTrendingItem(item,index)))):react.createElement("div",null,react.createElement("h3",null,"Search Results"),filteredResults.length>0?filteredResults.map(((result,index)=>renderSearchResult(result,index))):react.createElement("p",null,"No results found."))))}}}]);
//# sourceMappingURL=stories-molecules-search-SearchPageDrawer-stories.f9041e59.iframe.bundle.js.map