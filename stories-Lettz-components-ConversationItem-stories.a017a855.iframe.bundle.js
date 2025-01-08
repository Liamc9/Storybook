"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3094],{"./src/stories/Lettz/components/ConversationItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LongMessage:()=>LongMessage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Lettz_components_ConversationItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Lettz/components/ConversationItem.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Projects/Lettz/Components/ConversationItem",tags:["autodocs"],component:_components_Lettz_components_ConversationItem__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `ConversationItem` component is a reusable component for displaying a single conversation in a chat application. It includes the avatar, name, last message, and timestamp of the conversation.\n\n### Features\n- **Participant Avatar and Name**: Shows the other participant\'s name and profile picture.\n- **Last Message Preview**: Displays the last message with an ellipsis if too long.\n- **Timestamp Formatting**: Converts Firestore timestamps to a readable format like "Today" or "3 days ago".\n\n### Usage\n\n```jsx\nimport React from "react";\nimport ConversationItem from "../components/ConversationItem";\n\nconst ExampleComponent = () => {\n  const conversation = {\n    id: "12345",\n    participants: [\n      { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },\n      { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },\n    ],\n    lastMessage: {\n      text: "Hey! How are you doing?",\n      timestamp: new Date(),\n    },\n  };\n\n  const currentUser = { uid: "user1" };\n\n  return <ConversationItem conversation={conversation} currentUser={currentUser} />;\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **conversation**: Object containing the conversation data:\n  - **id**: Unique ID of the conversation.\n  - **participants**: Array of participants in the conversation (each with uid, name, and avatarUrl).\n  - **lastMessage**: Object with text (last message content) and timestamp (Date or Firestore Timestamp).\n- **currentUser**: The currently authenticated user object to determine which participant to display.\n        '}}},argTypes:{conversation:{control:"object"},currentUser:{control:"object"}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Lettz_components_ConversationItem__WEBPACK_IMPORTED_MODULE_1__.A,args),"   "),Default=Template.bind({});Default.args={conversation:{id:"12345",participants:[{uid:"user1",name:"Alice",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Bob",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"Hey! How are you doing?",timestamp:new Date}},currentUser:{uid:"user1"}};const LongMessage=Template.bind({});LongMessage.args={conversation:{id:"67890",participants:[{uid:"user1",name:"Charlie",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Daisy",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"This is a really long message that will get truncated to fit within the component's view.",timestamp:new Date}},currentUser:{uid:"user1"}};const __namedExportsOrder=["Default","LongMessage"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\r\n  <ConversationItem {...args} />   </Router>",...Default.parameters?.docs?.source}}},LongMessage.parameters={...LongMessage.parameters,docs:{...LongMessage.parameters?.docs,source:{originalSource:"args => <Router>\r\n  <ConversationItem {...args} />   </Router>",...LongMessage.parameters?.docs?.source}}}},"./src/components/Lettz/components/ConversationItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const ItemWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{var _conversation$lastMes;let{conversation,currentUser}=_ref;const otherParticipant=conversation.participants.find((p=>p.uid!==currentUser.uid));if(!otherParticipant)return null;const formattedTimestamp=null!==(_conversation$lastMes=conversation.lastMessage)&&void 0!==_conversation$lastMes&&_conversation$lastMes.timestamp?(timestamp=>{if(!timestamp)return"";const messageDate=timestamp.toDate?timestamp.toDate():new Date(timestamp),now=new Date,diffTime=new Date(now.getFullYear(),now.getMonth(),now.getDate())-new Date(messageDate.getFullYear(),messageDate.getMonth(),messageDate.getDate()),diffDays=Math.floor(diffTime/864e5);return 0===diffDays?"Today":1===diffDays?"Yesterday":`${diffDays} days ago`})(conversation.lastMessage.timestamp):"";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemWrapper,{to:`/conversation/${conversation.id}`},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Avatar,{src:otherParticipant.avatarUrl,alt:`${otherParticipant.name}'s avatar`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Details,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Name,null,otherParticipant.name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Timestamp,null,formattedTimestamp)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(LastMessage,null,conversation.lastMessage.text)))}}}]);
//# sourceMappingURL=stories-Lettz-components-ConversationItem-stories.a017a855.iframe.bundle.js.map