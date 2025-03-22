"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7826],{"./src/stories/search/Search2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_search_Search2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/Search2.jsx"),_components_search_Feed__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/search/Feed.jsx"),_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/search/FeedItem2.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Search/Search/Search2",component:_components_search_Search2__WEBPACK_IMPORTED_MODULE_1__.A},sampleItems=[{title:"Task 1",description:"Do this"},{title:"Task 2",description:"Do that"},{title:"Task 3",description:"Another task"}],historyItems=[{title:"Task 7",description:"Do this"},{title:"Task 8",description:"Do that"},{title:"Task 9",description:"Another task"}],Default=()=>{const[filteredItems,setFilteredItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sampleItems);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Search2__WEBPACK_IMPORTED_MODULE_1__.A,{items:sampleItems,onSearch:setFilteredItems,historyItems}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_Feed__WEBPACK_IMPORTED_MODULE_2__.A,{items:filteredItems,ItemComponent:_components_search_FeedItem2__WEBPACK_IMPORTED_MODULE_3__.A}))},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => {\n  const [filteredItems, setFilteredItems] = useState(sampleItems);\n  return <div>\r\n        {/* Use Search2 with items for fuzzy search and onSearch callback */}\r\n        <Search2 items={sampleItems} onSearch={setFilteredItems} historyItems={historyItems} />\r\n        <Feed items={filteredItems} ItemComponent={FeedItem2} />\r\n      </div>;\n}",...Default.parameters?.docs?.source}}}},"./src/components/atoms/Drawers/BottomDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomDrawer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`;function BottomDrawer(_ref15){let{isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}=_ref15;const drawerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContainer,{isOpen,transitionDuration},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Handle,{hideHandle})," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContent,{autoHeight},children))),document.body)}},"./src/components/search/Feed.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>search_Feed});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FeedItem=__webpack_require__("./src/components/search/FeedItem.jsx");const FeedContainer=styled_components_browser_esm.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{data}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,data.title," (FeedItem2)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,data.description),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Status: ",data.status),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Priority: ",data.priority),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Date: ",data.date))}},"./src/components/search/Search2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_Drawers_BottomDrawer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Drawers/BottomDrawer.jsx"),_SearchLogic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/search/SearchLogic.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items,onSearch,historyItems=[]}=_ref;const{isOpen,open,close,query,suggestions,lastQuery,handleInputChange,handleSuggestionClick,handleSearchForClick}=(0,_SearchLogic__WEBPACK_IMPORTED_MODULE_2__.RU)({items,onSearch,historyItems},{keys:["title"]});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(OpenButton,{onClick:open},react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchText,{hasQuery:lastQuery},lastQuery||"Search...")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_Drawers_BottomDrawer__WEBPACK_IMPORTED_MODULE_1__.A,{isOpen,onClose:close},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchInput,{type:"text",value:query,onChange:handleInputChange,placeholder:"Search tasks..."}),query&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:close,"aria-label":"Close Search"},"×")),!query&&historyItems.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SectionTitle,null,"Recent Searches"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionsList,null,historyItems.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title))))),query&&suggestions.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionsList,null,query&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{onClick:handleSearchForClick},'Search For "',query,'"'),suggestions.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title)))))))}},"./src/components/search/SearchLogic.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RU:()=>SearchLogic,i6:()=>useFuzzySearch});var fuse_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fuse.js/dist/fuse.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const defaultFuseOptions={keys:["title"],threshold:.4};function useFuzzySearch(items){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[suggestions,setSuggestions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),fuseInstance=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function createFuseInstance(items){const fuseOptions={...defaultFuseOptions,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};return new fuse_js__WEBPACK_IMPORTED_MODULE_1__.A(items,fuseOptions)}(items,options)),[items,options]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const results=function performFuzzySearch(fuseInstance,query){return query.trim()?fuseInstance.search(query).map((result=>result.item)):[]}(fuseInstance,query);setSuggestions(results)}),[query,fuseInstance]),{query,setQuery,suggestions}}function SearchLogic(_ref){let{items,onSearch,historyItems=[]}=_ref,fuseOptions=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{query,setQuery,suggestions}=useFuzzySearch(items,fuseOptions),[lastQuery,setLastQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),close=()=>{setIsOpen(!1),setQuery("")};return{isOpen,open:()=>setIsOpen(!0),close,query,setQuery,suggestions,lastQuery,handleInputChange:e=>{const newQuery=e.target.value;setQuery(newQuery),onSearch&&onSearch(suggestions)},handleSuggestionClick:suggestion=>{const newQuery=suggestion.title;if(setQuery(newQuery),setLastQuery(newQuery),onSearch){const updatedSuggestions=items.filter((item=>item.title.toLowerCase().includes(newQuery.toLowerCase())));onSearch(updatedSuggestions)}close()},handleSearchForClick:()=>{onSearch&&onSearch(suggestions),setLastQuery(query),close()}}}}}]);
//# sourceMappingURL=stories-search-Search2-stories.53786e97.iframe.bundle.js.map