"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1592],{"./src/stories/search/Search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Search_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SearchLogic=__webpack_require__("./src/components/search/SearchLogic.js");const SearchContainer=styled_components_browser_esm.default.div`
  position: relative;
  width: 300px;
  font-family: Arial, sans-serif;
`,SearchInput=styled_components_browser_esm.default.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`,SearchButton=styled_components_browser_esm.default.button`
  margin-left: 8px;
  padding: 10px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`,SuggestionsList=styled_components_browser_esm.default.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  top: 44px;
  width: 100%;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,SuggestionItem=styled_components_browser_esm.default.li`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`,search_Search=_ref=>{let{onSearch,items,placeholder}=_ref;const{query,setQuery,suggestions}=(0,SearchLogic.i6)(items,{keys:["title"]});return react.createElement(SearchContainer,null,react.createElement(SearchInput,{type:"text",value:query,onChange:e=>{setQuery(e.target.value)},placeholder}),react.createElement(SearchButton,{onClick:()=>{onSearch(query)}},"Search"),suggestions.length>0&&react.createElement(SuggestionsList,null,suggestions.map(((item,index)=>react.createElement(SuggestionItem,{key:index},item.title)))))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Search_stories={title:"Search/Search/Search",component:search_Search},sampleItems=[{title:"Task 1",description:"Do this"},{title:"Task 2",description:"Do that"},{title:"Task 3",description:"Another task"}],SearchWrapper=args=>{const[searchTerm,setSearchTerm]=(0,react.useState)("");return react.createElement("div",null,react.createElement(search_Search,_extends({},args,{onSearch:setSearchTerm,items:sampleItems})),react.createElement("p",null,"Search Term: ",searchTerm),react.createElement("ul",null,sampleItems.filter((item=>item.title.toLowerCase().includes(searchTerm.toLowerCase()))).map(((item,index)=>react.createElement("li",{key:index},item.title,": ",item.description)))))},Default=(args=>react.createElement(SearchWrapper,args)).bind({});Default.args={placeholder:"Search tasks..."};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchWrapper {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/search/SearchLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RU:()=>SearchLogic,i6:()=>useFuzzySearch});var fuse_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fuse.js/dist/fuse.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const defaultFuseOptions={keys:["title"],threshold:.4};function useFuzzySearch(items){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[suggestions,setSuggestions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),fuseInstance=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function createFuseInstance(items){const fuseOptions={...defaultFuseOptions,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};return new fuse_js__WEBPACK_IMPORTED_MODULE_1__.A(items,fuseOptions)}(items,options)),[items,options]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const results=function performFuzzySearch(fuseInstance,query){return query.trim()?fuseInstance.search(query).map((result=>result.item)):[]}(fuseInstance,query);setSuggestions(results)}),[query,fuseInstance]),{query,setQuery,suggestions}}function SearchLogic(_ref){let{items,onSearch,historyItems=[]}=_ref,fuseOptions=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{query,setQuery,suggestions}=useFuzzySearch(items,fuseOptions),[lastQuery,setLastQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),close=()=>{setIsOpen(!1),setQuery("")};return{isOpen,open:()=>setIsOpen(!0),close,query,setQuery,suggestions,lastQuery,handleInputChange:e=>{const newQuery=e.target.value;setQuery(newQuery),onSearch&&onSearch(suggestions)},handleSuggestionClick:suggestion=>{const newQuery=suggestion.title;if(setQuery(newQuery),setLastQuery(newQuery),onSearch){const updatedSuggestions=items.filter((item=>item.title.toLowerCase().includes(newQuery.toLowerCase())));onSearch(updatedSuggestions)}close()},handleSearchForClick:()=>{onSearch&&onSearch(suggestions),setLastQuery(query),close()}}}}}]);
//# sourceMappingURL=stories-search-Search-stories.89cc2355.iframe.bundle.js.map