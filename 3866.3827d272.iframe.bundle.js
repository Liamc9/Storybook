"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3866],{"./src/stories/Lettz/views/RoomsView.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,UnauthenticatedUser:()=>UnauthenticatedUser,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RoomsView_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ImageCarousel2=__webpack_require__("./src/components/atoms/carousels/ImageCarousel2.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),BottomDrawer=__webpack_require__("./src/components/atoms/Drawers/BottomDrawer.jsx"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");const FormContainer=styled_components_browser_esm.default.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`,TextArea=styled_components_browser_esm.default.textarea`
  flex: 1;
  resize: none;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`,SendButton=styled_components_browser_esm.default.button`
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,components_MessageForm=_ref=>{let{onSend,onClose}=_ref;const[message,setMessage]=(0,react.useState)(""),[sending,setSending]=(0,react.useState)(!1);return react.createElement(FormContainer,null,react.createElement("form",{onSubmit:async e=>{if(e.preventDefault(),message.trim()){setSending(!0);try{await onSend(message),onClose(),setMessage(""),react_toastify_esm.oR.success("Message sent successfully!")}catch(error){console.error("Error sending message:",error),react_toastify_esm.oR.error("Failed to send the message. Please try again.")}finally{setSending(!1)}}else react_toastify_esm.oR.error("Please enter a message.")},style:{display:"flex",flexDirection:"column",height:"100%"}},react.createElement(TextArea,{placeholder:"Type your message here...",value:message,onChange:e=>setMessage(e.target.value),rows:5}),react.createElement(SendButton,{type:"submit",disabled:sending},sending?"Sending...":"Send Message")))};var dist=__webpack_require__("./node_modules/react-router/dist/index.js");const RoomContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 100px; /* Space for the fixed bottom bar */
`,ImageContainer=styled_components_browser_esm.default.div`
  aspect-ratio: 5 / 4;
  overflow: hidden;
`,RoomTitle=styled_components_browser_esm.default.h1`
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-left: 1rem;
`,DatesContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 1rem auto 0;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  .icon-container {
    flex: 0 0 20%; /* 20% of the container */
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .dates {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .date-item {
      flex: 0 0 40%; /* Each section takes 40% of the container */
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Changed from 'left' to 'flex-start' */
      margin-left: 2rem;

      .date-label {
        font-size: 1rem;
        font-weight: 600; /* semi-bold */
        color: #555;
      }

      .date-value {
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
`,SectionHeader=styled_components_browser_esm.default.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  margin-left: 1rem;
`,SectionContent=styled_components_browser_esm.default.div`
  font-size: 1rem;
  color: #666;
  text-align: left;
  width: 100%;
  line-height: 1.5;
  margin-left: 1rem;
`,LocationContainer=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Space between address and map */
  width: 90%;
`,AddressText=styled_components_browser_esm.default.span`
  font-size: 1.1rem;
  color: #666;
`,FixedBottomBar=styled_components_browser_esm.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 20;
`,RentContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,RentLabel=styled_components_browser_esm.default.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #999;
`,RentText=styled_components_browser_esm.default.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`,SendMessageButton=styled_components_browser_esm.default.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`,ErrorContainer=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5rem;
  color: red;
`,views_RoomsView=_ref=>{let{roomData,handleSend,currentUser,id}=_ref;const[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(!1),navigate=(0,dist.Zp)();if(!roomData)return react.createElement(ErrorContainer,null,"Room not found.");const closeDrawer=()=>{setIsDrawerOpen(!1)},images=roomData.images&&Array.isArray(roomData.images)?roomData.images:[];return react.createElement(react.Fragment,null,react.createElement(RoomContainer,null,react.createElement(ImageContainer,null,images.length>0?react.createElement(ImageCarousel2.A,{images}):react.createElement("p",null,"No images available")),react.createElement(RoomTitle,null,roomData.title||"Room Title"),react.createElement(DatesContainer,null,react.createElement("div",{className:"icon-container"},react.createElement(Icons.CalendarIcon,null)),react.createElement("div",{className:"dates"},react.createElement("div",{className:"date-item"},react.createElement("span",{className:"date-label"},"From"),react.createElement("span",{className:"date-value"},roomData.startDate||"Anytime")),react.createElement("div",{className:"date-item"},react.createElement("span",{className:"date-label"},"To"),react.createElement("span",{className:"date-value"},roomData.endDate||"Anytime")))),react.createElement(SectionHeader,null,"Location"),react.createElement(SectionContent,null,react.createElement(LocationContainer,null,react.createElement(Icons.LocationIcon,{className:"w-6 h-6"}),react.createElement(AddressText,null,roomData.streetAddress?roomData.streetAddress:"No address provided",", ",roomData.city?roomData.city:"City",", ",roomData.county?roomData.county:"County",", ",roomData.eircode?roomData.eircode:"eirCode"))),react.createElement(SectionHeader,null,"Description"),react.createElement(SectionContent,null,roomData.description?roomData.description:"No description provided")),react.createElement(FixedBottomBar,null,react.createElement(RentContainer,null,react.createElement(RentLabel,null,"Monthly Rent"),react.createElement(RentText,null,"€",void 0!==roomData.rent?roomData.rent:"N/A")),react.createElement(SendMessageButton,{onClick:()=>{currentUser?setIsDrawerOpen(!0):navigate("/login",{state:{from:`/rooms/${id}`}})},disabled:roomData.userId===(null==currentUser?void 0:currentUser.uid)},"Send Message")),react.createElement(BottomDrawer.A,{isOpen:isDrawerOpen,onClose:closeDrawer,transitionDuration:300,height:"50%",maxWidth:"600px"},react.createElement(components_MessageForm,{onSend:handleSend,onClose:closeDrawer})))};var react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const RoomsView_stories={title:"Lettz/Views/RoomsView",component:views_RoomsView,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `RoomsView` component displays a detailed view of a room listing, including images, availability dates, location, description, and rent details. It also includes functionality for sending messages to the room owner and redirects unauthenticated users to the login page.\n\n### Features\n- **Image Carousel**: Displays room images.\n- **Date Range Display**: Shows availability dates.\n- **Location Information**: Displays the room\'s location and map.\n- **Rent Details**: Shows the monthly rent.\n- **Message Functionality**: Allows authenticated users to send messages.\n- **Drawer Integration**: Opens a message form in a drawer.\n- **Error Handling**: Displays an error message if room data is unavailable.\n\n### Usage\n\n```jsx\nimport React from "react";\nimport RoomsView from "../components/RoomsView";\n\nconst ExampleComponent = () => {\n  const roomData = {\n    images: [\n      "https://via.placeholder.com/800x600?text=Room+1",\n      "https://via.placeholder.com/800x600?text=Room+2",\n    ],\n    title: "Modern Apartment in Dublin",\n    startDate: "2024-01-01",\n    endDate: "2024-06-30",\n    streetAddress: "123 Main Street",\n    city: "Dublin",\n    county: "Dublin",\n    eircode: "D01XYZ",\n    description: "A modern apartment in the heart of the city with great amenities.",\n    rent: 1500,\n    userId: "owner123",\n  };\n\n  const currentUser = { uid: "user456" };\n\n  const handleSend = (message) => {\n    console.log("Message sent:", message);\n  };\n\n  return (\n    <RoomsView\n      roomData={roomData}\n      handleSend={handleSend}\n      currentUser={currentUser}\n      id="room123"\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **roomData**: Object containing room details:\n  - **images**: Array of image URLs for the room.\n  - **title**: Title of the room listing.\n  - **startDate**: Start date of availability (string).\n  - **endDate**: End date of availability (string).\n  - **streetAddress**: Street address of the room.\n  - **city**: City where the room is located.\n  - **county**: County or region of the room.\n  - **eircode**: Eircode (or postal code) of the room.\n  - **description**: Description of the room.\n  - **rent**: Monthly rent price (number).\n  - **userId**: The owner\'s user ID.\n- **handleSend**: Callback function triggered when a message is sent from the drawer.\n- **currentUser**: Object representing the authenticated user.\n- **id**: Room ID used for redirection when unauthenticated users attempt to send a message.\n\n        '}}},argTypes:{roomData:{control:"object"},handleSend:{action:"message sent"},currentUser:{control:"object"},id:{control:"text"}}},Template=args=>react.createElement(react_router_dom_dist.BrowserRouter,null,react.createElement(views_RoomsView,args)),Default=Template.bind({});Default.args={roomData:{images:["https://via.placeholder.com/800x600?text=Room+1","https://via.placeholder.com/800x600?text=Room+2"],title:"Modern Apartment in Dublin",startDate:"2024-01-01",endDate:"2024-06-30",streetAddress:"123 Main Street",city:"Dublin",county:"Dublin",eircode:"D01XYZ",description:"A modern apartment in the heart of the city with great amenities.",rent:1500,userId:"owner123"},currentUser:{uid:"user456"},id:"room123"};const UnauthenticatedUser=Template.bind({});UnauthenticatedUser.args={roomData:{images:["https://via.placeholder.com/800x600?text=Room+1","https://via.placeholder.com/800x600?text=Room+2"],title:"Modern Apartment in Dublin",startDate:"2024-01-01",endDate:"2024-06-30",streetAddress:"123 Main Street",city:"Dublin",county:"Dublin",eircode:"D01XYZ",description:"A modern apartment in the heart of the city with great amenities.",rent:1500,userId:"owner123"},currentUser:null,id:"room123"};const __namedExportsOrder=["Default","UnauthenticatedUser"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter><RoomsView {...args} /></BrowserRouter>",...Default.parameters?.docs?.source}}},UnauthenticatedUser.parameters={...UnauthenticatedUser.parameters,docs:{...UnauthenticatedUser.parameters?.docs,source:{originalSource:"args => <BrowserRouter><RoomsView {...args} /></BrowserRouter>",...UnauthenticatedUser.parameters?.docs?.source}}}},"./src/components/atoms/Drawers/BottomDrawer.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BottomDrawer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`;function BottomDrawer(_ref15){let{isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}=_ref15;const drawerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContainer,{isOpen,transitionDuration},react__WEBPACK_IMPORTED_MODULE_0__.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Handle,{hideHandle})," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerContent,{autoHeight},children))),document.body)}},"./src/components/atoms/carousels/ImageCarousel2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),swiper_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),swiper_modules__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/swiper/modules/pagination.css"),__webpack_require__("./node_modules/swiper/modules/index.mjs"));const ImageContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
  width: 100%;
  height: 100%; /* Ensure the container takes full height of its parent */
  position: relative;
  overflow: hidden;
  margin: 0;

  /* Swiper Pagination customization */
  .swiper-pagination {
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    /* Remove transform since flex handles centering */
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 10px;
    height: 10px;
    opacity: 1;
    margin: 0 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,SwiperWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper)`
  width: 100%;
  height: 100%; /* Ensure Swiper takes full height */
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{images}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwiperWrapper,{modules:[swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination,swiper_modules__WEBPACK_IMPORTED_MODULE_4__.A11y],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0},loop:images.length>1},images.map(((imgUrl,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide,{key:index},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:imgUrl,alt:`Image ${index+1}`}))))))}},"./node_modules/react-toastify/dist/react-toastify.esm.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N9:()=>Q,oR:()=>B});var react=__webpack_require__("./node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n},c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,p=e=>d(e)||u(e)?e:null,m=e=>(0,react.isValidElement)(e)||d(e)||u(e)||c(e);function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react.useRef)(0);return(0,react.useLayoutEffect)((()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,react.useEffect)((()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))}),[y]),react.createElement(react.Fragment,null,d)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const v=new Map;let h=[];const T=new Set,E=e=>T.forEach((t=>t(e))),b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach((t=>{t.isToastActive(e)&&(o=!0)})),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach((n=>{n.buildToast(e,t)})))}function C(e,t){v.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function L(e){const{subscribe:o,getSnapshot:s,setProps:i}=(0,react.useRef)(function(e){const n=e.containerId||1;return{subscribe(o){const s=function(e,n,o){let s=1,r=0,i=[],l=[],f=[],g=n;const v=new Map,h=new Set,T=()=>{f=Array.from(v.values()),h.forEach((e=>e()))},E=e=>{l=null==e?[]:l.filter((t=>t!==e)),T()},b=e=>{const{toastId:n,onOpen:s,updateId:a,children:r}=e.props,i=null==a;e.staleId&&v.delete(e.staleId),v.set(n,e),l=[...l,e.props.toastId].filter((t=>t!==e.staleId)),T(),o(y(e,i?"added":"updated")),i&&u(s)&&s((0,react.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach((n=>{null!=t&&t!==n.props.toastId||u(n.toggle)&&n.toggle(e)}))},removeToast:E,toasts:v,clearQueue:()=>{r-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:o,updateId:s}=t;const a=n?n!==e:1!==e,r=v.has(o)&&null==s;return a||r})(l))return;const{toastId:f,updateId:h,data:I,staleId:_,delay:C}=l,L=()=>{E(f)},N=null==h;N&&r++;const $={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(l).filter((e=>{let[t,n]=e;return null!=n}))),toastId:f,updateId:h,data:I,closeToast:L,isIn:!1,className:p(l.className||g.toastClassName),bodyClassName:p(l.bodyClassName||g.bodyClassName),progressClassName:p(l.progressClassName||g.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,k=g.autoClose,!1===w||c(w)&&w>0?w:k),deleteToast(){const e=v.get(f),{onClose:n,children:s}=e.props;u(n)&&n((0,react.isValidElement)(s)&&s.props),o(y(e,"removed")),v.delete(f),r--,r<0&&(r=0),i.length>0?b(i.shift()):T()}};var w,k;$.closeButton=g.closeButton,!1===l.closeButton||m(l.closeButton)?$.closeButton=l.closeButton:!0===l.closeButton&&($.closeButton=!m(g.closeButton)||g.closeButton);let P=n;(0,react.isValidElement)(n)&&!d(n.type)?P=(0,react.cloneElement)(n,{closeToast:L,toastProps:$,data:I}):u(n)&&(P=n({closeToast:L,toastProps:$,data:I}));const M={content:P,props:$,staleId:_};g.limit&&g.limit>0&&r>g.limit&&N?i.push(M):c(C)?setTimeout((()=>{b(M)}),C):b(M)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>l.some((t=>t===e)),getSnapshot:()=>f}}(n,e,E);v.set(n,s);const r=s.observe(o);return h.forEach((e=>_(e.content,e.options))),h=[],()=>{r(),v.delete(n)}},setProps(e){var t;null==(t=v.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=v.get(n))?void 0:e.getSnapshot()}}}(e)).current;i(e);const l=(0,react.useSyncExternalStore)(o,s,s);return{getToastToRender:function(t){if(!l)return[];const n=new Map;return e.newestOnTop&&l.reverse(),l.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},isToastActive:I,count:null==l?void 0:l.length}}function N(e){const[t,o]=(0,react.useState)(!1),[a,r]=(0,react.useState)(!1),l=(0,react.useRef)(null),c=(0,react.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:p,onClick:m,closeOnClick:f}=e;var g,y;function h(){o(!0)}function T(){o(!1)}function E(n){const o=l.current;c.canDrag&&o&&(c.didMove=!0,t&&T(),c.delta="x"===e.draggableDirection?n.clientX-c.start:n.clientY-c.start,c.start!==n.clientX&&(c.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(y=v.get((g={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||y.setToggle(g.id,g.fn),(0,react.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",T)}}),[e.pauseOnFocusLoss]);const I={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:s,right:a}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=a&&t.clientY>=n&&t.clientY<=o?T():h()}};return d&&u&&(I.onMouseEnter=T,e.stacked||(I.onMouseLeave=h)),f&&(I.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:l,eventHandlers:I}}function $(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:c,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=t;const y=r||d&&0===p,v={...c,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};d&&(v.transform=`scaleX(${p})`);const h=dist_clsx("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=u(i)?i({rtl:m,type:a,defaultClassName:h}):dist_clsx(h,i),E={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}};return react.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},react.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),react.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then((e=>l("success",r,e))).catch((e=>l("error",a,e))),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=v.get(e.containerId);t?t.removeToast(e.id):v.forEach((t=>{t.removeToast(e.id)}))}}else h=h.filter((t=>null!=e&&t.options.toastId!==e))}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);const O="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,D=t=>{let{theme:n,type:o,isLoading:s,...a}=t;return react.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...a})},z={info:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react.createElement("div",{className:"Toastify__spinner"})}},R=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:c}=N(n),{closeButton:d,children:p,autoClose:m,onClick:f,type:g,hideProgressBar:y,closeToast:v,transition:h,position:T,className:E,style:b,bodyClassName:I,bodyStyle:_,progressClassName:C,progressStyle:L,updateId:w,role:k,progress:P,rtl:M,toastId:x,deleteToast:A,isIn:B,isLoading:O,closeOnClick:D,theme:R}=n,S=dist_clsx("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":D}),H=u(E)?E({rtl:M,position:T,type:g,defaultClassName:S}):dist_clsx(S,E),F=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(u(r)?i=r({...l,isLoading:s}):(0,react.isValidElement)(r)?i=(0,react.cloneElement)(r,l):s?i=z.spinner():(e=>e in z)(o)&&(i=z[o](l))),i}(n),X=!!P||!m,Y={closeToast:v,type:g,theme:R};let q=null;return!1===d||(q=u(d)?d(Y):(0,react.isValidElement)(d)?(0,react.cloneElement)(d,Y):function(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return react.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":s},react.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),react.createElement(h,{isIn:B,done:A,position:T,preventExitTransition:s,nodeRef:r,playToast:c},react.createElement("div",{id:x,onClick:f,"data-in":B,className:H,...i,style:b,ref:r},react.createElement("div",{...B&&{role:k},className:u(I)?I({type:g}):dist_clsx("Toastify__toast-body",I),style:_},null!=F&&react.createElement("div",{className:dist_clsx("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),react.createElement("div",null,p)),q,react.createElement($,{...w&&!X?{key:`pb-${w}`}:{},rtl:M,theme:R,delay:m,isRunning:o,isIn:B,closeToast:v,hide:y,type:g,style:L,className:C,controlledProgress:X,progress:P||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},H=g(S("bounce",!0)),q=(g(S("slide",!0)),g(S("zoom")),g(S("flip")),{position:"top-right",transition:H,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Q(t){let o={...q,...t};const s=t.stacked,[a,r]=(0,react.useState)(!0),c=(0,react.useRef)(null),{getToastToRender:d,isToastActive:m,count:f}=L(o),{className:g,style:y,rtl:v,containerId:h}=o;function T(e){const t=dist_clsx("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return u(g)?g({position:e,rtl:v,defaultClassName:t}):dist_clsx(t,p(g))}function E(){s&&(r(!0),B.play())}return O((()=>{if(s){var e;const t=c.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=o.position)?void 0:e.includes("top");let r=0,i=0;Array.from(t).reverse().forEach(((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed=`${a}`),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const l=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y",`${s?l:-1*l}px`),o.style.setProperty("--g",`${n}`),o.style.setProperty("--s",""+(1-(a?i:0))),r+=o.offsetHeight,i+=.025}))}}),[a,f,s]),react.createElement("div",{ref:c,className:"Toastify",id:h,onMouseEnter:()=>{s&&(r(!1),B.pause())},onMouseLeave:E},d(((t,n)=>{const o=n.length?{...y}:{...y,pointerEvents:"none"};return react.createElement("div",{className:T(t),style:o,key:`container-${t}`},n.map((t=>{let{content:n,props:o}=t;return react.createElement(R,{...o,stacked:s,collapseAll:E,isIn:m(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)})))})))}}}]);
//# sourceMappingURL=3866.3827d272.iframe.bundle.js.map