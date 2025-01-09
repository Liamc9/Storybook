"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3587],{"./src/stories/molecules/search/SearchDrawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchDrawer_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SearchBarContainer=styled_components_browser_esm.default.div`
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
`,search_SearchDrawer=_ref=>{let{trendingItems,query,onQueryChange,searchResults,closeDrawer,onSearchSubmit,renderSearchResult,renderTrendingItem,isOpen}=_ref;const inputRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{isOpen&&inputRef.current&&inputRef.current.focus()}),[isOpen]);const filteredResults=searchResults.filter((result=>result.title.includes(query)));return react.createElement(Wrapper,null,react.createElement(SearchDrawer_SearchBarContainer,null,react.createElement(search_SearchBar2,{value:query,onChange:e=>{onQueryChange(e.target.value)},placeholder:"Search for...",onKeyDown:e=>{"Enter"===e.key&&""!==query.trim()&&onSearchSubmit()},inputRef}),react.createElement(CancelButton,{onClick:()=>{onQueryChange(""),closeDrawer()}},"Cancel")),react.createElement("div",null,""===query?react.createElement("div",null,react.createElement("h3",null,"Trending"),trendingItems.map(((item,index)=>renderTrendingItem(item,index)))):react.createElement("div",null,react.createElement("h3",null,"Search Results"),filteredResults.length>0?filteredResults.map(((result,index)=>renderSearchResult(result,index))):react.createElement("p",null,"No results found."))))},SearchDrawer_stories={title:"Molecules/Search/SearchDrawer",component:search_SearchDrawer},trendingItems=["React Hooks","Storybook","JavaScript ES6","Tailwind CSS"],searchResults=[{title:"React Native",description:"A framework for building native apps with React.",thumbnail:"https://example.com/react-native.png"},{title:"Redux",description:"A predictable state container for JavaScript apps.",thumbnail:"https://example.com/redux.png"},{title:"GraphQL",description:"A query language for APIs and a runtime for executing those queries.",thumbnail:null}],Default=()=>react.createElement(search_SearchDrawer,{trendingItems,searchResults}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <SearchDrawer trendingItems={trendingItems} searchResults={searchResults} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-molecules-search-SearchDrawer-stories.203d1274.iframe.bundle.js.map