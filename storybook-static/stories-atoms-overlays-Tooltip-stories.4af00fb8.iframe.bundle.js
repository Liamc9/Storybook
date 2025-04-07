"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9573],{"./src/stories/atoms/overlays/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultIcon:()=>Tooltip_stories_DefaultIcon,WithCustomChild:()=>WithCustomChild,WithCustomStyle:()=>WithCustomStyle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const TooltipContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`,BaseTooltip=styled_components_browser_esm.Ay.div`
  position: absolute;
  padding: 5px;
  background-color: black;
  color: white;
  border-radius: 4px;
  text-align: center;
  opacity: 0.9;
  z-index: 10;
  width: 200px;
  white-space: nowrap;

  ${_ref=>{let{position}=_ref;switch(position){case"bottom":return styled_components_browser_esm.AH`
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
        `;case"left":return styled_components_browser_esm.AH`
          right: 100%;
          top: 50%;
          transform: translateX(-10px) translateY(-50%);
        `;case"right":return styled_components_browser_esm.AH`
          left: 100%;
          top: 50%;
          transform: translateX(10px) translateY(-50%);
        `;default:return styled_components_browser_esm.AH`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
        `}}}
`,DefaultIcon=styled_components_browser_esm.Ay.span`
  display: flex;
  height: 1rem;
  width: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #cbd5e0; /* Equivalent to Tailwind's bg-gray-400 */
  font-size: 0.75rem;
  color: white;
`,tooltips_Tooltip=_ref2=>{let{tooltipText,position="top",children,tooltipStyle:customStyle={}}=_ref2;const[isVisible,setIsVisible]=(0,react.useState)(!1);return react.createElement(TooltipContainer,{onMouseEnter:()=>setIsVisible(!0),onMouseLeave:()=>setIsVisible(!1)},children||react.createElement(DefaultIcon,null,"i"),isVisible&&react.createElement(BaseTooltip,{position,style:customStyle},tooltipText))},Tooltip_stories={title:"Atoms/Overlays/Tooltips",component:tooltips_Tooltip,tags:["autodocs"]},Container=_ref=>{let{children}=_ref;return react.createElement("div",{style:{padding:"100px",textAlign:"center"}},children)},Template=args=>react.createElement(Container,null,react.createElement(tooltips_Tooltip,args,args.children||react.createElement("button",{className:"px-4 py-2 bg-blue-500 text-white rounded"},"Hover over me"))),Default=Template.bind({});Default.args={tooltipText:"This is a tooltip message.",position:"top"};const WithCustomChild=Template.bind({});WithCustomChild.args={tooltipText:"Tooltip on a custom element!",position:"right",children:react.createElement("div",{style:{padding:"10px",backgroundColor:"lightcoral",color:"white",borderRadius:"4px"}},"Custom Child")};const WithCustomStyle=Template.bind({});WithCustomStyle.args={tooltipText:"Custom styled tooltip message",position:"bottom",tooltipStyle:{backgroundColor:"purple",fontSize:"1.2rem"}};const Tooltip_stories_DefaultIcon=Template.bind({});Tooltip_stories_DefaultIcon.args={tooltipText:"Tooltip with default icon",position:"left",children:null};const __namedExportsOrder=["Default","WithCustomChild","WithCustomStyle","DefaultIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Container>\r\n    <Tooltip {...args}>\r\n      {args.children || <button className="px-4 py-2 bg-blue-500 text-white rounded">\r\n          Hover over me\r\n        </button>}\r\n    </Tooltip>\r\n  </Container>',...Default.parameters?.docs?.source}}},WithCustomChild.parameters={...WithCustomChild.parameters,docs:{...WithCustomChild.parameters?.docs,source:{originalSource:'args => <Container>\r\n    <Tooltip {...args}>\r\n      {args.children || <button className="px-4 py-2 bg-blue-500 text-white rounded">\r\n          Hover over me\r\n        </button>}\r\n    </Tooltip>\r\n  </Container>',...WithCustomChild.parameters?.docs?.source}}},WithCustomStyle.parameters={...WithCustomStyle.parameters,docs:{...WithCustomStyle.parameters?.docs,source:{originalSource:'args => <Container>\r\n    <Tooltip {...args}>\r\n      {args.children || <button className="px-4 py-2 bg-blue-500 text-white rounded">\r\n          Hover over me\r\n        </button>}\r\n    </Tooltip>\r\n  </Container>',...WithCustomStyle.parameters?.docs?.source}}},Tooltip_stories_DefaultIcon.parameters={...Tooltip_stories_DefaultIcon.parameters,docs:{...Tooltip_stories_DefaultIcon.parameters?.docs,source:{originalSource:'args => <Container>\r\n    <Tooltip {...args}>\r\n      {args.children || <button className="px-4 py-2 bg-blue-500 text-white rounded">\r\n          Hover over me\r\n        </button>}\r\n    </Tooltip>\r\n  </Container>',...Tooltip_stories_DefaultIcon.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-overlays-Tooltip-stories.4af00fb8.iframe.bundle.js.map