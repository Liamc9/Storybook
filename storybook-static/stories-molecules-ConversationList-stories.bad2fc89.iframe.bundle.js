"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[638],{"./src/stories/molecules/ConversationList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ConversationList_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ConversationItem=__webpack_require__("./src/components/atoms/menuitem/ConversationItem.jsx");const ListWrapper=styled_components_browser_esm.Ay.div`
  width: 100%;
`,molecules_ConversationList=_ref=>{let{conversations,currentUser,participantsData}=_ref;const getTime=timestamp=>timestamp?timestamp.toMillis?timestamp.toMillis():timestamp.getTime?timestamp.getTime():new Date(timestamp).getTime():0,sortedConversations=(0,react.useMemo)((()=>conversations?[...conversations].sort(((a,b)=>{var _a$lastMessage,_b$lastMessage;const aTime=getTime(null===(_a$lastMessage=a.lastMessage)||void 0===_a$lastMessage?void 0:_a$lastMessage.timestamp);return getTime(null===(_b$lastMessage=b.lastMessage)||void 0===_b$lastMessage?void 0:_b$lastMessage.timestamp)-aTime})):[]),[conversations]);return react.createElement(ListWrapper,null,sortedConversations.map((conversation=>react.createElement(ConversationItem.A,{key:conversation.id,conversation,currentUser,participantsData}))))},ConversationList_stories={title:"Molecules/ConversationList",component:molecules_ConversationList,decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))]},Default=(args=>react.createElement(molecules_ConversationList,args)).bind({});Default.args={currentUser:{uid:"user1"},participantsData:{user1:{displayName:"You",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"},user2:{displayName:"Alice",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"},user3:{displayName:"Bob",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"},user4:{displayName:"Charlie",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}},conversations:[{id:"conv1",participantUIDs:["user1","user2"],lastMessage:{text:"Hey, are you free tomorrow?",localTimestamp:new Date("2024-10-25T08:00:00")},hasNewMessage:!0},{id:"conv2",participantUIDs:["user1","user3"],lastMessage:{text:"Let's catch up soon!",localTimestamp:new Date("2025-03-25T08:00:00")},hasNewMessage:!1},{id:"conv3",participantUIDs:["user1","user4"],lastMessage:{text:"Are we still on for the meeting next week?",localTimestamp:new Date("2023-10-25T08:00:00")},hasNewMessage:!0}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ConversationList {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/ConversationItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const ItemWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 1rem;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e0;
  color: inherit;
  position: relative;
`,ProfilePic=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`,Column=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,Header=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Name=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span`
  font-size: 1.3rem;
  color: #333;
  font-weight: ${_ref=>{let{hasNewMessage}=_ref;return hasNewMessage?700:600}};
`,Timestamp=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span`
  font-size: 0.75rem;
  color: #9ca3af;
`,LastMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: ${_ref2=>{let{hasNewMessage}=_ref2;return hasNewMessage?700:400}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`,__WEBPACK_DEFAULT_EXPORT__=_ref3=>{var _conversation$lastMes,_conversation$lastMes2;let{conversation,currentUser,participantsData}=_ref3;const otherUID=conversation.participantUIDs.find((uid=>uid!==currentUser.uid)),other=participantsData&&participantsData[otherUID]?participantsData[otherUID]:{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemWrapper,{to:`/conversation/${conversation.id}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfilePic,{src:other.photoURL||"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",alt:"Profile"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Column,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Name,{hasNewMessage:conversation.hasNewMessage},other.displayName||otherUID),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Timestamp,null,(timestamp=>{if(!timestamp)return"";const date=timestamp.toDate?timestamp.toDate():new Date(timestamp),now=new Date,today=new Date(now),messageDay=new Date(date);today.setHours(0,0,0,0),messageDay.setHours(0,0,0,0);const msDiff=today-messageDay,daysDiff=Math.floor(msDiff/864e5);return 0===daysDiff?"Today":1===daysDiff?"Yesterday":`${daysDiff} days ago`})(null===(_conversation$lastMes=conversation.lastMessage)||void 0===_conversation$lastMes?void 0:_conversation$lastMes.localTimestamp))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(LastMessage,{hasNewMessage:conversation.hasNewMessage},null===(_conversation$lastMes2=conversation.lastMessage)||void 0===_conversation$lastMes2?void 0:_conversation$lastMes2.text)))}}}]);
//# sourceMappingURL=stories-molecules-ConversationList-stories.bad2fc89.iframe.bundle.js.map