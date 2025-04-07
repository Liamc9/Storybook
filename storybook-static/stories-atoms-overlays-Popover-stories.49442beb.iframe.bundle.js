"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5347],{"./src/stories/atoms/overlays/Popover.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{XPopover:()=>XPopover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Popover_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const PopoverContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  display: inline-block;
`,TriggerWrapper=styled_components_browser_esm.Ay.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`,Content=styled_components_browser_esm.Ay.div`
  position: absolute;
  background-color: white;
  border-radius: 0.375rem; /* similar to Tailwind's rounded-md */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  width: 12rem; /* ~192px */
  z-index: 50;
  white-space: normal;

  ${_ref=>{let{placement}=_ref;switch(placement){case"top":return styled_components_browser_esm.AH`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          margin-bottom: 8px;
        `;case"left":return styled_components_browser_esm.AH`
          right: 100%;
          top: 50%;
          transform: translateX(-8px) translateY(-50%);
          margin-right: 8px;
        `;case"right":return styled_components_browser_esm.AH`
          left: 100%;
          top: 50%;
          transform: translateX(8px) translateY(-50%);
          margin-left: 8px;
        `;default:return styled_components_browser_esm.AH`
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          margin-top: 8px;
        `}}}
`,popovers_Popover=_ref2=>{let{trigger,children,placement="bottom",onOpen,onClose,...props}=_ref2;const[isOpen,setIsOpen]=(0,react.useState)(!1),popoverRef=(0,react.useRef)(),triggerRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const handleClickOutside=event=>{popoverRef.current&&!popoverRef.current.contains(event.target)&&triggerRef.current&&!triggerRef.current.contains(event.target)&&(setIsOpen(!1),onClose&&onClose())};return document.addEventListener("mousedown",handleClickOutside),()=>document.removeEventListener("mousedown",handleClickOutside)}),[onClose]),react.createElement(PopoverContainer,props,react.createElement(TriggerWrapper,{ref:triggerRef,onClick:()=>{setIsOpen((prev=>{const newState=!prev;return newState&&onOpen&&onOpen(),!newState&&onClose&&onClose(),newState}))}},trigger),isOpen&&react.createElement(Content,{ref:popoverRef,placement},children))},Popover_stories={title:"Atoms/Overlays/Popovers",component:popovers_Popover,tags:["autodocs"]},Container=styled_components_browser_esm.Ay.div`
  padding: 100px;
`,TriggerButton=styled_components_browser_esm.Ay.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6; /* Equivalent to Tailwind's bg-blue-500 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,ContentWrapper=styled_components_browser_esm.Ay.div`
  padding: 16px;
`,XPopover=()=>react.createElement(Container,null,react.createElement(popovers_Popover,{trigger:react.createElement(TriggerButton,null,"Click Me")},react.createElement(ContentWrapper,null,react.createElement("p",null,"This is the popover content.")))),__namedExportsOrder=["XPopover"];XPopover.parameters={...XPopover.parameters,docs:{...XPopover.parameters?.docs,source:{originalSource:"() => <Container>\r\n    <Popover trigger={<TriggerButton>Click Me</TriggerButton>}>\r\n      <ContentWrapper>\r\n        <p>This is the popover content.</p>\r\n      </ContentWrapper>\r\n    </Popover>\r\n  </Container>",...XPopover.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-overlays-Popover-stories.49442beb.iframe.bundle.js.map