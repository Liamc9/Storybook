"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1171,5384],{"./src/stories/pages/search/Search.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,XSearch2:()=>XSearch2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Search_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fuse=__webpack_require__("./node_modules/fuse.js/dist/fuse.mjs");const defaultFuseOptions={keys:["title"],threshold:.4};function useFuzzySearch(items){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[query,setQuery]=(0,react.useState)(""),[suggestions,setSuggestions]=(0,react.useState)([]),fuseInstance=(0,react.useMemo)((()=>function createFuseInstance(items){const fuseOptions={...defaultFuseOptions,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};return new fuse.A(items,fuseOptions)}(items,options)),[items,options]);return(0,react.useEffect)((()=>{const results=function performFuzzySearch(fuseInstance,query){return query.trim()?fuseInstance.search(query).map((result=>result.item)):[]}(fuseInstance,query);setSuggestions(results)}),[query,fuseInstance]),{query,setQuery,suggestions}}const SearchContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 300px;
  font-family: Arial, sans-serif;
`,SearchInput=styled_components_browser_esm.Ay.input`
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
`,SearchButton=styled_components_browser_esm.Ay.button`
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
`,SuggestionsList=styled_components_browser_esm.Ay.ul`
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
`,SuggestionItem=styled_components_browser_esm.Ay.li`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`,search_Search=_ref=>{let{onSearch,items,placeholder}=_ref;const fuseOptions=(0,react.useMemo)((()=>({keys:["title"]})),[]),{query,setQuery,suggestions}=useFuzzySearch(items,fuseOptions);return react.createElement(SearchContainer,null,react.createElement(SearchInput,{type:"text",value:query,onChange:e=>{setQuery(e.target.value)},placeholder}),react.createElement(SearchButton,{onClick:()=>{onSearch(query)}},"Search"),suggestions.length>0&&react.createElement(SuggestionsList,null,suggestions.map(((item,index)=>react.createElement(SuggestionItem,{key:index},item.title)))))};var index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Search_stories={title:"Pages/Search/Search",component:search_Search},sampleItems=[{title:"Task 1",description:"Do this"},{title:"Task 2",description:"Do that"},{title:"Task 3",description:"Another task"}],SearchWrapper=args=>{const[searchTerm,setSearchTerm]=(0,react.useState)("");return react.createElement("div",null,react.createElement(search_Search,_extends({},args,{onSearch:setSearchTerm,items:sampleItems})),react.createElement("p",null,"Search Term: ",searchTerm),react.createElement("ul",null,sampleItems.filter((item=>item.title.toLowerCase().includes(searchTerm.toLowerCase()))).map(((item,index)=>react.createElement("li",{key:index},item.title,": ",item.description)))))},Default=(args=>react.createElement(SearchWrapper,args)).bind({});Default.args={placeholder:"Search tasks..."};const historyItems=[{title:"Task 7",description:"Do this"},{title:"Task 8",description:"Do that"},{title:"Task 9",description:"Another task"}],XSearch2=()=>{const[filteredItems,setFilteredItems]=(0,react.useState)(sampleItems);return react.createElement("div",null,react.createElement(index_es.ZyJ,{items:sampleItems,onSearch:setFilteredItems,historyItems}),react.createElement(index_es.JYf,{items:filteredItems,ItemComponent:index_es.GJI}))},__namedExportsOrder=["Default","XSearch2"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchWrapper {...args} />",...Default.parameters?.docs?.source}}},XSearch2.parameters={...XSearch2.parameters,docs:{...XSearch2.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState(sampleItems);\n  return <div>\r\n        {/* Use Search2 with items for fuzzy search and onSearch callback */}\r\n        <Search2 items={sampleItems} onSearch={setFilteredItems} historyItems={historyItems} />\r\n        <Feed items={filteredItems} ItemComponent={FeedItem} />\r\n      </div>;\n}",...XSearch2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-search-Search-stories.589f760e.iframe.bundle.js.map