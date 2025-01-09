"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3003],{"./src/stories/Lettz/components/ConversationList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Lettz_components_ConversationList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Lettz/components/ConversationList.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Projects/Lettz/Components/ConversationList",component:_components_Lettz_components_ConversationList__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:'\n# ConversationList Component\n\nThe **ConversationList** component is used to display a list of conversations. Each conversation is rendered as a `ConversationItem`.\n\n## Props\n\n- **conversations** (Array): A list of conversation objects to render. Each object should have an `id` and other relevant properties for `ConversationItem`.\n- **currentUser** (Object): The user object for the current user, used to personalize the display.\n\n### Example Usage\n\n~~~jsx\nimport ConversationList from \'./ConversationList\';\n\nconst conversations = [\n {id: "12345",\n        participants: [\n          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },\n          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },\n        ],\n        lastMessage: {\n          text: "Hey! How are you doing?",\n          timestamp: new Date(),\n        },\n    },\n    {id: "123456",\n        participants: [\n          { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },\n          { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },\n        ],\n        lastMessage: {\n          text: "Hey! How are you doing?",\n          timestamp: new Date(),\n        },\n    },\n];\n\nconst   currentUser: { uid: \'user1\'};\n\n<ConversationList conversations={conversations} currentUser={currentUser} />;\n~~~\n'}}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Lettz_components_ConversationList__WEBPACK_IMPORTED_MODULE_1__.A,args))).bind({});Default.args={conversations:[{id:"12345",participants:[{uid:"user1",name:"Alice",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Bob",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"Hey! How are you doing?",timestamp:new Date}},{id:"123456",participants:[{uid:"user1",name:"Alice",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Bob",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"Hey! How are you doing?",timestamp:new Date}}],currentUser:{uid:"user1"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter><ConversationList {...args} /></BrowserRouter>",...Default.parameters?.docs?.source}}}},"./src/components/Lettz/components/ConversationItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const ItemWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  display: flex;
  align-items: center;
  height: 100px; /* Equivalent to h-20 */
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  position: relative; /* To position the timestamp */
  &:hover {
    background-color: #f9fafb;
  }
`,Avatar=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img`
  width: 50px;
  height: 50px;
  border-radius: 9999px; /* Equivalent to rounded-full */
  margin-right: 1rem;
`,Details=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative; /* To position the timestamp */
`,Header=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Name=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  font-size: 1.3rem; /* Equivalent to text-base */
  font-weight: 600; /* Equivalent to font-semibold */
`,Timestamp=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  font-size: 0.75rem; /* Smaller font size */
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,LastMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{var _conversation$lastMes;let{conversation,currentUser}=_ref;const otherParticipant=conversation.participants.find((p=>p.uid!==currentUser.uid));if(!otherParticipant)return null;const formattedTimestamp=null!==(_conversation$lastMes=conversation.lastMessage)&&void 0!==_conversation$lastMes&&_conversation$lastMes.timestamp?(timestamp=>{if(!timestamp)return"";const messageDate=timestamp.toDate?timestamp.toDate():new Date(timestamp),now=new Date,diffTime=new Date(now.getFullYear(),now.getMonth(),now.getDate())-new Date(messageDate.getFullYear(),messageDate.getMonth(),messageDate.getDate()),diffDays=Math.floor(diffTime/864e5);return 0===diffDays?"Today":1===diffDays?"Yesterday":`${diffDays} days ago`})(conversation.lastMessage.timestamp):"";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemWrapper,{to:`/conversation/${conversation.id}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Avatar,{src:otherParticipant.avatarUrl,alt:`${otherParticipant.name}'s avatar`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Details,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Name,null,otherParticipant.name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Timestamp,null,formattedTimestamp)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(LastMessage,null,conversation.lastMessage.text)))}},"./src/components/Lettz/components/ConversationList.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ConversationItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Lettz/components/ConversationItem.jsx");const ListWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{conversations,currentUser}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListWrapper,null,conversations.map((conversation=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConversationItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:conversation.id,conversation,currentUser}))))}}}]);
//# sourceMappingURL=stories-Lettz-components-ConversationList-stories.78e91936.iframe.bundle.js.map