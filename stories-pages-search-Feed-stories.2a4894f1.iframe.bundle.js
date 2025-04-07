"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2143,5384],{"./src/stories/pages/search/Feed.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InfiniteScrollingFeed:()=>InfiniteScrollingFeed,LoadMoreFeed:()=>LoadMoreFeed,PaginatedFeed:()=>PaginatedFeed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/search/feed/Feed.jsx"),_components_search_feedItem_FeedItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/search/feedItem/FeedItem.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Search/Feed",component:_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__.A},mockItems=Array.from({length:50},((_,i)=>({id:i+1,status:i%2==0?"completed":"pending",priority:["low","medium","high"][i%3],title:`Task ${i+1}`}))),mockSortBy=(a,b)=>a.priority.localeCompare(b.priority),mockSelectedFilters={status:["completed","pending"]},Default=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:mockItems,sortBy:mockSortBy,selectedFilters:mockSelectedFilters}),PaginatedFeed=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:mockItems,sortBy:mockSortBy,selectedFilters:mockSelectedFilters,pagination:5,ItemComponent:_components_search_feedItem_FeedItem__WEBPACK_IMPORTED_MODULE_2__.A}),LoadMoreFeed=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:mockItems,sortBy:mockSortBy,selectedFilters:mockSelectedFilters,loadMore:5,ItemComponent:_components_search_feedItem_FeedItem__WEBPACK_IMPORTED_MODULE_2__.A}),InfiniteScrollingFeed=()=>{const containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:containerRef,style:{height:"400px",overflowY:"auto",border:"1px solid #ccc",padding:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_search_feed_Feed__WEBPACK_IMPORTED_MODULE_1__.A,{items:mockItems,sortBy:mockSortBy,selectedFilters:mockSelectedFilters,infiniteScroll:10,ItemComponent:_components_search_feedItem_FeedItem__WEBPACK_IMPORTED_MODULE_2__.A,scrollContainerRef:containerRef}))},__namedExportsOrder=["Default","PaginatedFeed","LoadMoreFeed","InfiniteScrollingFeed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Feed items={mockItems} sortBy={mockSortBy} selectedFilters={mockSelectedFilters} />",...Default.parameters?.docs?.source}}},PaginatedFeed.parameters={...PaginatedFeed.parameters,docs:{...PaginatedFeed.parameters?.docs,source:{originalSource:"() => <Feed items={mockItems} sortBy={mockSortBy} selectedFilters={mockSelectedFilters} pagination={5} ItemComponent={FeedItem} />",...PaginatedFeed.parameters?.docs?.source}}},LoadMoreFeed.parameters={...LoadMoreFeed.parameters,docs:{...LoadMoreFeed.parameters?.docs,source:{originalSource:"() => <Feed items={mockItems} sortBy={mockSortBy} selectedFilters={mockSelectedFilters} loadMore={5} ItemComponent={FeedItem} />",...LoadMoreFeed.parameters?.docs?.source}}},InfiniteScrollingFeed.parameters={...InfiniteScrollingFeed.parameters,docs:{...InfiniteScrollingFeed.parameters?.docs,source:{originalSource:"() => {\n  const containerRef = useRef(null);\n  return <div ref={containerRef} style={{\n    height: '400px',\n    overflowY: 'auto',\n    border: '1px solid #ccc',\n    padding: '1rem'\n  }}>\r\n      <Feed items={mockItems} sortBy={mockSortBy} selectedFilters={mockSelectedFilters} infiniteScroll={10} // loads 10 items at a time\n    ItemComponent={FeedItem} scrollContainerRef={containerRef} // specify container for infinite scroll\n    />\r\n    </div>;\n}",...InfiniteScrollingFeed.parameters?.docs?.source}}}},"./src/components/search/feedItem/FeedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{data}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,data.title," (FeedItem2)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,data.description),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Status: ",data.status),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Priority: ",data.priority),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Date: ",data.date))}},"./src/components/search/feed/Feed.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),liamc9npm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");const FeedContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  flex-direction: column;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{items=[],sortBy,selectedFilters={},ItemComponent=liamc9npm__WEBPACK_IMPORTED_MODULE_1__.GJI,pagination,loadMore,infiniteScroll,scrollContainerRef}=_ref;const{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore}=(0,liamc9npm__WEBPACK_IMPORTED_MODULE_1__.fff)({items,sortBy,selectedFilters,pagination,loadMore,infiniteScroll,scrollContainerRef});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeedContainer,null,itemsToRender.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemComponent,{key:index,data:item}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(liamc9npm__WEBPACK_IMPORTED_MODULE_1__.$op,{pages,currentPage,onPageChange:setCurrentPage}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(liamc9npm__WEBPACK_IMPORTED_MODULE_1__.szj,{loadMore,hasMoreItems,onLoadMore:handleLoadMore}))}}}]);
//# sourceMappingURL=stories-pages-search-Feed-stories.2a4894f1.iframe.bundle.js.map