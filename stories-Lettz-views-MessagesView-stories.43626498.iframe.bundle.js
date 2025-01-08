"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[537],{"./src/stories/Lettz/views/MessagesView.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorState:()=>ErrorState,Loading:()=>Loading,NoConversations:()=>NoConversations,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MessagesView_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const Card=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`,Header=styled_components_browser_esm.default.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`,LogoText=styled_components_browser_esm.default.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`,StyledLettzIcon=(0,styled_components_browser_esm.default)(Icons.LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
  `,IconWrapper=styled_components_browser_esm.default.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`,Text=styled_components_browser_esm.default.p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`,Button=styled_components_browser_esm.default.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`,components_MessagesPrompt=currentUser=>{const navigate=(0,dist.Zp)();return react.createElement(Card,null,react.createElement(Header,null,react.createElement(StyledLettzIcon,null)," ",react.createElement(LogoText,null,"Lettz")),react.createElement(IconWrapper,null,react.createElement("span",{role:"img","aria-label":"messages"},"💬")),react.createElement(Text,null,"Please log in to see your messages."),react.createElement(Button,{onClick:()=>{currentUser||navigate("/login",{state:{from:"/messages"}})}},"Login"))};var ConversationList=__webpack_require__("./src/components/Lettz/components/ConversationList.jsx");function MessagesView(_ref){let{currentUser,conversations,loading,error}=_ref;return react.createElement("div",null,currentUser?react.createElement("div",null,loading?react.createElement("p",null,"Loading conversations..."):error?react.createElement("p",null,error):0===conversations.length?react.createElement("p",null,"No conversations found."):react.createElement(ConversationList.A,{conversations,currentUser})):react.createElement(components_MessagesPrompt,{currentUser:!0}))}var react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const MessagesView_stories={title:"Projects/Lettz/Views/MessagesView",tags:["autodocs"],component:MessagesView,parameters:{docs:{description:{component:'\n\nThe `MessagesView` component is a page that displays a user\'s conversations. It handles different states:\n\n### Features\n- **Loading State**: Shows a loading indicator when conversations are being fetched.\n- **Error State**: Displays an error message if fetching fails.\n- **No Conversations State**: Informs the user if there are no available conversations.\n- **Conversations List**: Renders a list of conversations with avatars, names, last messages, and timestamps.\n\n### Usage\n\n```jsx\nimport React from "react";\nimport MessagesView from "./MessagesView";\n\nconst ExampleComponent = () => {\n  const conversations = [\n    {\n      id: "12345",\n      participants: [\n        { uid: "user1", name: "Alice", avatarUrl: "https://via.placeholder.com/50" },\n        { uid: "user2", name: "Bob", avatarUrl: "https://via.placeholder.com/50" },\n      ],\n      lastMessage: {\n        text: "Hey! How are you doing?",\n        timestamp: new Date(),\n      },\n    },\n  ];\n\n  const currentUser = { uid: "user1" };\n\n  return <MessagesView conversations={conversations} currentUser={currentUser} loading={false} error={null} />;\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **currentUser**: Object containing the current user\'s details.\n- **conversations**: Array of conversation objects.\n  - Each conversation includes:\n    - **id**: Unique identifier.\n    - **participants**: Array of user objects with uid, name, and avatarUrl.\n    - **lastMessage**: Object with text (string) and timestamp (Date).\n- **loading**: Boolean for loading state.\n- **error**: String message for errors.\n        '}}},argTypes:{currentUser:{control:"object"},conversations:{control:"object"},loading:{control:"boolean"},error:{control:"text"}}},Template=args=>react.createElement(react_router_dom_dist.BrowserRouter,null,react.createElement(MessagesView,args)),Default=Template.bind({});Default.args={currentUser:{uid:"user1"},conversations:[{id:"12345",participants:[{uid:"user1",name:"Alice",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Bob",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"Hey! How are you doing?",timestamp:new Date}},{id:"67890",participants:[{uid:"user1",name:"Charlie",avatarUrl:"https://via.placeholder.com/50"},{uid:"user2",name:"Daisy",avatarUrl:"https://via.placeholder.com/50"}],lastMessage:{text:"Are we still on for tomorrow?",timestamp:new Date}}],loading:!1,error:null};const Loading=Template.bind({});Loading.args={currentUser:{uid:"user1"},conversations:[],loading:!0,error:null};const ErrorState=Template.bind({});ErrorState.args={currentUser:{uid:"user1"},conversations:[],loading:!1,error:"Failed to load conversations. Please try again later."};const NoConversations=Template.bind({});NoConversations.args={currentUser:{uid:"user1"},conversations:[],loading:!1,error:null};const __namedExportsOrder=["Default","Loading","ErrorState","NoConversations"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <MessagesView {...args} />\r\n  </Router>",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <MessagesView {...args} />\r\n  </Router>",...Loading.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <MessagesView {...args} />\r\n  </Router>",...ErrorState.parameters?.docs?.source}}},NoConversations.parameters={...NoConversations.parameters,docs:{...NoConversations.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <MessagesView {...args} />\r\n  </Router>",...NoConversations.parameters?.docs?.source}}}},"./src/components/Lettz/components/ConversationItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const ItemWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
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
//# sourceMappingURL=stories-Lettz-views-MessagesView-stories.43626498.iframe.bundle.js.map