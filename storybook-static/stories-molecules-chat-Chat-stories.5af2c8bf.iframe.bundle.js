"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2276],{"./src/stories/molecules/chat/Chat.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultChat:()=>DefaultChat,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chat_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ChatContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* Full viewport height */
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
`,LoadingMessage=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  color: #555;
`,ChatMessages=styled_components_browser_esm.Ay.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,MessageContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  justify-content: ${props=>props.sent?"flex-end":"flex-start"};
`,MessageContent=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=>props.sent?"flex-end":"flex-start"};
`,MessageBubble=styled_components_browser_esm.Ay.div`
  background-color: ${props=>props.sent?props.sentBubbleColor||"#A855F7":"#f0f0f0"};
  color: ${props=>props.sent?"#ffffff":"#000000"};
  padding: 10px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: ${props=>props.sent?"0 0 5px 40px":"0 40px 5px 0"};
  max-width: 70%;
  overflow-wrap: break-word;
`,MessageText=styled_components_browser_esm.Ay.span`
  font-size: 1em;
`,Avatar=styled_components_browser_esm.Ay.div`
  margin: ${props=>props.sent?"0 0 25px 5px":"0 5px 25px 0"};
  flex-shrink: 0;
`,MessageTimestamp=styled_components_browser_esm.Ay.span`
  font-size: 0.7em;
  color: #757575;
  display: block;
  text-align: ${props=>props.sent?"right":"left"};
`,ChatInputContainer=styled_components_browser_esm.Ay.div`
  border-top: 1px solid #e0e0e0;
  background-color: #ffffff;
  padding: 15px 20px;
  display: flex;
  align-items: center;
`,ChatInput=styled_components_browser_esm.Ay.input`
  flex: 1;
  padding: 12px 18px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  outline: none;
  font-size: 1em;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #000;
  }
`,SendButton=styled_components_browser_esm.Ay.button`
  margin-left: 15px;
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
  
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`,defaultAvatarURL="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",ProfilePic=styled_components_browser_esm.Ay.img`
  width: ${props=>props.size||"30px"};
  height: ${props=>props.size||"30px"};
  border-radius: 50%;
  object-fit: cover;
`,chat_Chat=_ref=>{var _conversation$message;let{initialConversation,currentUser,participantsData,onSendMessage,newMessage,setNewMessage,messagesEndRef,sentBubbleColor}=_ref;const[conversation,setConversation]=(0,react.useState)(initialConversation||{participants:[],messages:[]});(0,react.useEffect)((()=>{initialConversation&&setConversation(initialConversation)}),[initialConversation]);const participantMap=(0,react.useMemo)((()=>participantsData||{}),[participantsData]);(0,react.useEffect)((()=>{var _messagesEndRef$curre;null==messagesEndRef||null===(_messagesEndRef$curre=messagesEndRef.current)||void 0===_messagesEndRef$curre||_messagesEndRef$curre.scrollIntoView({behavior:"smooth"})}),[null===(_conversation$message=conversation.messages)||void 0===_conversation$message?void 0:_conversation$message.length,messagesEndRef]);if(!conversation)return react.createElement(LoadingMessage,null,"Loading conversation...");return react.createElement(ChatContainer,null,react.createElement(ChatMessages,null,(conversation.messages||[]).map((message=>{const isSent=message.sender===currentUser.uid,sender=participantMap[message.sender],formattedTime=new Date(parseInt(message.localTimestamp,10)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return react.createElement(MessageContainer,{key:message.localTimestamp+message.sender,sent:isSent},!isSent&&sender&&react.createElement(Avatar,{sent:isSent},react.createElement(ProfilePic,{src:sender.photoURL||defaultAvatarURL,alt:sender.displayName||"Sender",size:"30px"})),react.createElement(MessageContent,{sent:isSent},react.createElement(MessageBubble,{sent:isSent,sentBubbleColor},react.createElement(MessageText,null,message.text)),react.createElement(MessageTimestamp,{sent:isSent},formattedTime)),isSent&&react.createElement(Avatar,{sent:isSent},react.createElement(ProfilePic,{src:participantMap[currentUser.uid]&&participantMap[currentUser.uid].photoURL||defaultAvatarURL,alt:participantMap[currentUser.uid]&&participantMap[currentUser.uid].displayName||"You",size:"30px"})))})),react.createElement("div",{ref:messagesEndRef})),react.createElement(ChatInputContainer,null,react.createElement(ChatInput,{type:"text",placeholder:"Type a message...",value:newMessage,onChange:e=>setNewMessage(e.target.value)}),react.createElement(SendButton,{onClick:()=>{if(!newMessage.trim())return;const message={localTimestamp:Date.now().toString(),sender:currentUser.uid,text:newMessage};"function"==typeof onSendMessage?onSendMessage(message):setConversation((prev=>({...prev,messages:[...prev.messages||[],message]}))),setNewMessage("")},disabled:!newMessage.trim()},"Send")))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Chat_stories={title:"Molecules/Chat",component:chat_Chat},DefaultChat=(args=>{const[conversation,setConversation]=react.useState(args.initialConversation),[newMessage,setNewMessage]=react.useState(""),messagesEndRef=react.useRef(null);return react.createElement(chat_Chat,_extends({},args,{initialConversation:conversation,onSendMessage:()=>{if(!newMessage.trim())return;const message={localTimestamp:Date.now().toString(),sender:args.currentUser.uid,text:newMessage};setConversation((prevConversation=>({...prevConversation,messages:[...prevConversation.messages||[],message]}))),setNewMessage("")},newMessage,setNewMessage,messagesEndRef}))}).bind({});DefaultChat.args={currentUser:{uid:"user1"},participantsData:{user1:{uid:"user1",displayName:"You",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"},user2:{uid:"user2",displayName:"Alice",photoURL:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"}},initialConversation:{participants:["user1","user2"],messages:[{id:1,sender:"user2",text:"Hello, how are you doing today?",localTimestamp:new Date("2023-10-20T10:00:00").toISOString()},{id:2,sender:"user1",text:"I am doing great, thank you! How about you?",localTimestamp:new Date("2023-10-20T10:01:00").toISOString()},{id:3,sender:"user2",text:"I am well. Just working on some really interesting projects. This is a longer message to test the wrapping behavior of the message bubble. It should not break the layout or distort the avatar.",localTimestamp:new Date("2023-10-20T10:02:00").toISOString()}]}};const __namedExportsOrder=["DefaultChat"];DefaultChat.parameters={...DefaultChat.parameters,docs:{...DefaultChat.parameters?.docs,source:{originalSource:"args => {\n  // Create a local state for conversation data using the initialConversation prop.\n  const [conversation, setConversation] = React.useState(args.initialConversation);\n  // Also manage the new message text state.\n  const [newMessage, setNewMessage] = React.useState('');\n  // Create a ref to scroll to the bottom of the messages.\n  const messagesEndRef = React.useRef(null);\n\n  // onSendMessage callback: adds a new message to the conversation state.\n  const handleSendMessage = () => {\n    if (!newMessage.trim()) return;\n    const message = {\n      localTimestamp: Date.now().toString(),\n      sender: args.currentUser.uid,\n      text: newMessage\n    };\n    setConversation(prevConversation => ({\n      ...prevConversation,\n      messages: [...(prevConversation.messages || []), message]\n    }));\n    setNewMessage('');\n  };\n  return <Chat {...args} initialConversation={conversation} onSendMessage={handleSendMessage} newMessage={newMessage} setNewMessage={setNewMessage} messagesEndRef={messagesEndRef} />;\n}",...DefaultChat.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-molecules-chat-Chat-stories.5af2c8bf.iframe.bundle.js.map