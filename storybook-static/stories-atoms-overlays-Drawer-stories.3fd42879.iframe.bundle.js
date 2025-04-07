"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8315],{"./src/stories/atoms/overlays/Drawer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,RightDrawer:()=>RightDrawer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Drawer_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const DrawerContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: ${_ref=>{let{side}=_ref;return"left"===side?"flex-start":"flex-end"}};
  align-items: stretch;
  transition: opacity ${_ref2=>{let{transitionDuration}=_ref2;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref3=>{let{isOpen}=_ref3;return isOpen?"1":"0"}};
  pointer-events: ${_ref4=>{let{isOpen}=_ref4;return isOpen?"auto":"none"}};
`,BackgroundOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${_ref5=>{let{transitionDuration}=_ref5;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref6=>{let{isOpen}=_ref6;return isOpen?"1":"0"}};
`,DrawerStyle=styled_components_browser_esm.Ay.div`
  width: ${_ref7=>{let{width}=_ref7;return width||"80%"}};
  max-width: ${_ref8=>{let{maxWidth}=_ref8;return maxWidth||"400px"}};
  height: ${_ref9=>{let{height}=_ref9;return height||"100%"}};
  max-height: ${_ref10=>{let{maxHeight}=_ref10;return maxHeight||"100%"}};
  background-color: white;
  ${_ref11=>{let{noRoundedCorners,side}=_ref11;return noRoundedCorners?styled_components_browser_esm.AH`
          border-radius: 0;
        `:"left"===side?styled_components_browser_esm.AH`
          border-radius: 0 16px 16px 0;
        `:styled_components_browser_esm.AH`
          border-radius: 16px 0 0 16px;
        `}}
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${_ref12=>{let{isOpen,side}=_ref12;return isOpen?"translateX(0)":"left"===side?"translateX(-100%)":"translateX(100%)"}};
  transition: transform ${_ref13=>{let{transitionDuration}=_ref13;return transitionDuration}}ms ease-in-out,
    opacity ${_ref14=>{let{transitionDuration}=_ref14;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref15=>{let{isOpen}=_ref15;return isOpen?"1":"0"}};
  display: flex;
  flex-direction: column;
`,DrawerContent=styled_components_browser_esm.Ay.div`
  flex: 1;
  overflow-y: auto;
`,drawers_Drawer=_ref16=>{let{isOpen,onClose,children,side="left",transitionDuration=300,width,height,maxWidth,maxHeight,noRoundedCorners=!1}=_ref16;const drawerRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom.createPortal)(react.createElement(DrawerContainer,{isOpen,transitionDuration,side},react.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react.createElement(DrawerStyle,{ref:drawerRef,isOpen,transitionDuration,width,height,maxWidth,maxHeight,noRoundedCorners,side},react.createElement(DrawerContent,null,children))),document.body)};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Drawer_stories={title:"Atoms/Overlays/Drawer",component:drawers_Drawer,argTypes:{side:{control:{type:"select"},options:["left","right"]},transitionDuration:{control:"number"},width:{control:"text"},maxWidth:{control:"text"},height:{control:"text"},maxHeight:{control:"text"},noRoundedCorners:{control:"boolean"},hideHandle:{control:"boolean"}}},Container=styled_components_browser_esm.Ay.div`
  padding: 50px;
  text-align: center;
`,Template=args=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return react.createElement(Container,null,react.createElement("button",{onClick:()=>setIsOpen(!0)},"Open Drawer"),react.createElement(drawers_Drawer,_extends({},args,{isOpen,onClose:()=>setIsOpen(!1)}),react.createElement("p",null,"This is the content inside the side drawer.")))},Default=Template.bind({});Default.args={side:"left",transitionDuration:300,width:"70%",maxWidth:"500px",height:"100%",maxHeight:"100%",noRoundedCorners:!1};const RightDrawer=Template.bind({});RightDrawer.args={side:"right",transitionDuration:300,width:"70%",maxWidth:"500px",height:"100%",maxHeight:"100%",noRoundedCorners:!1};const __namedExportsOrder=["Default","RightDrawer"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <Container>\r\n      <button onClick={() => setIsOpen(true)}>Open Drawer</button>\r\n      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r\n        <p>This is the content inside the side drawer.</p>\r\n      </Drawer>\r\n    </Container>;\n}",...Default.parameters?.docs?.source}}},RightDrawer.parameters={...RightDrawer.parameters,docs:{...RightDrawer.parameters?.docs,source:{originalSource:"args => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <Container>\r\n      <button onClick={() => setIsOpen(true)}>Open Drawer</button>\r\n      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r\n        <p>This is the content inside the side drawer.</p>\r\n      </Drawer>\r\n    </Container>;\n}",...RightDrawer.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-overlays-Drawer-stories.3fd42879.iframe.bundle.js.map