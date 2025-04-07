"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5506],{"./src/stories/atoms/overlays/BottomSheet.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BottomSheet_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DrawerContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: opacity ${_ref=>{let{transitionDuration}=_ref;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref2=>{let{isOpen}=_ref2;return isOpen?"1":"0"}};
  pointer-events: ${_ref3=>{let{isOpen}=_ref3;return isOpen?"auto":"none"}};
`,BackgroundOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${_ref4=>{let{transitionDuration}=_ref4;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref5=>{let{isOpen}=_ref5;return isOpen?"1":"0"}};
`,Drawer=styled_components_browser_esm.Ay.div`
  width: 100%;
  max-width: ${_ref6=>{let{maxWidth}=_ref6;return maxWidth}};
  height: ${_ref7=>{let{autoHeight,height}=_ref7;return autoHeight?"auto":height}};
  background-color: white;
  ${_ref8=>{let{noRoundedCorners}=_ref8;return noRoundedCorners?styled_components_browser_esm.AH`
          border-radius: 0;
        `:styled_components_browser_esm.AH`
          border-radius: 16px 16px 0 0;
        `}}
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${_ref9=>{let{isOpen}=_ref9;return isOpen?"translateY(0)":"translateY(100%)"}};
  transition: transform ${_ref10=>{let{transitionDuration}=_ref10;return transitionDuration}}ms ease-in-out,
    opacity ${_ref11=>{let{transitionDuration}=_ref11;return transitionDuration}}ms ease-in-out;
  opacity: ${_ref12=>{let{isOpen}=_ref12;return isOpen?"1":"0"}};
  display: flex;
  flex-direction: column;
`,Handle=styled_components_browser_esm.Ay.div`
  width: 48px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 8px auto;
  display: ${_ref13=>{let{hideHandle}=_ref13;return hideHandle?"none":"block"}};
`,DrawerContent=styled_components_browser_esm.Ay.div`
  flex: 1;
  overflow-y: ${_ref14=>{let{autoHeight}=_ref14;return autoHeight?"visible":"auto"}};
`;function BottomSheet(_ref15){let{isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}=_ref15;const drawerRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom.createPortal)(react.createElement(DrawerContainer,{isOpen,transitionDuration},react.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react.createElement(Drawer,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react.createElement(Handle,{hideHandle})," ",react.createElement(DrawerContent,{autoHeight},children))),document.body)}const BottomSheet_stories={title:"Atoms/Overlays/BottomSheets",component:BottomSheet,tags:["autodocs"]},Default=(args=>{const[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(args.isOpen),closeDrawer=()=>{args.onClose(),setIsDrawerOpen(!1)};return react.createElement("div",{className:"flex flex-col items-center justify-center min-h-screen space-y-4"},react.createElement("button",{onClick:()=>setIsDrawerOpen(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"},"Open Drawer"),react.createElement(BottomSheet,{isOpen:isDrawerOpen,onClose:closeDrawer,transitionDuration:args.transitionDuration,height:args.height,autoHeight:args.autoHeight,maxWidth:args.maxWidth},react.createElement("h2",{className:"text-xl font-bold mb-4"},"Drawer Content"),react.createElement("p",{className:"text-gray-700"},"This is the content inside the drawer. You can place any elements here, such as forms, navigation links, or information."),react.createElement("button",{onClick:closeDrawer,className:"mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"},"Close Drawer")))}).bind({});Default.args={isOpen:!1,transitionDuration:300,height:"80vh",autoHeight:!1,maxWidth:"600px"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  // Internal state for controlling drawer in Storybook\n  const [isDrawerOpen, setIsDrawerOpen] = useState(args.isOpen);\n\n  // Drawer open handler\n  const openDrawer = () => setIsDrawerOpen(true);\n\n  // Drawer close handler (linked to the `onClose` argType)\n  const closeDrawer = () => {\n    args.onClose();\n    setIsDrawerOpen(false);\n  };\n  return <div className="flex flex-col items-center justify-center min-h-screen space-y-4">\r\n      <button onClick={openDrawer} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">\r\n        Open Drawer\r\n      </button>\r\n\r\n      {/* Bottom Drawer Component */}\r\n      <BottomSheet isOpen={isDrawerOpen} onClose={closeDrawer} transitionDuration={args.transitionDuration} height={args.height} autoHeight={args.autoHeight} maxWidth={args.maxWidth}>\r\n        <h2 className="text-xl font-bold mb-4">Drawer Content</h2>\r\n        <p className="text-gray-700">\r\n          This is the content inside the drawer. You can place any elements here, such as forms, navigation links, or information.\r\n        </p>\r\n        <button onClick={closeDrawer} className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">\r\n          Close Drawer\r\n        </button>\r\n      </BottomSheet>\r\n    </div>;\n}',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-overlays-BottomSheet-stories.1ad64672.iframe.bundle.js.map