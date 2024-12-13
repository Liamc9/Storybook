"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7918],{"./src/stories/atoms/tooltips/Tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var react=__webpack_require__("./node_modules/react/index.js");const tooltips_Tooltip=_ref=>{let{tooltipText,position}=_ref;const[showTooltip,setShowTooltip]=(0,react.useState)(!1),tooltipStyle={position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%) translateY(-5px)",opacity:.9,padding:"5px",backgroundColor:"black",color:"white",borderRadius:"4px",textAlign:"center",width:"200px",zIndex:10};return"right"===position?(tooltipStyle.left="100%",tooltipStyle.transform="translateX(10px)"):"left"===position?(tooltipStyle.right="100%",tooltipStyle.left="auto",tooltipStyle.transform="translateX(-10px)"):"top"===position?(tooltipStyle.bottom="100%",tooltipStyle.transform="translateX(-50%) translateY(-10px)"):"bottom"===position&&(tooltipStyle.top="100%",tooltipStyle.bottom="auto",tooltipStyle.transform="translateX(-50%) translateY(10px)"),react.createElement("div",{style:{display:"inline-block",position:"relative"},className:"cursor-pointer",onMouseEnter:()=>setShowTooltip(!0),onMouseLeave:()=>setShowTooltip(!1)},react.createElement("p",{className:"flex h-4 w-4 items-center justify-center rounded-full bg-gray-400 text-xs text-white"},"i"),showTooltip&&react.createElement("div",{style:tooltipStyle},tooltipText))},Tooltip_stories={title:"Atoms/Tooltips/Tooltip",component:tooltips_Tooltip,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `Tooltip` component is used to display a brief message when users hover over or focus on an element. Tooltips provide contextual information about an element's function or details without cluttering the UI.\n\n### Features\n- **Customizable Positioning**: Tooltips can be positioned at the top, right, bottom, or left relative to the target element.\n- **Flexible Content**: Display any text or small content within the tooltip.\n- **Interactive**: Enhances user experience by providing helpful hints and information.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport Tooltip from './components/Tooltip';\n\nconst ExampleComponent = () => (\n  <div style={{ padding: '100px', textAlign: 'center' }}>\n    <Tooltip tooltipText=\"This is a tooltip message.\" position=\"top\">\n      <button className=\"px-4 py-2 bg-blue-500 text-white rounded\">Hover over me</button>\n    </Tooltip>\n  </div>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{tooltipText:{control:"text",description:"The message displayed inside the tooltip."},position:{control:{type:"select",options:["top","right","bottom","left"]},description:"The position of the tooltip relative to the target element."}}},Default=(args=>react.createElement("div",{style:{padding:"100px",textAlign:"center"}},react.createElement(tooltips_Tooltip,args,react.createElement("button",{className:"px-4 py-2 bg-blue-500 text-white rounded"},"Hover over me")))).bind({});Default.args={tooltipText:"This is a tooltip message.",position:"top"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <div style={{\n  padding: '100px',\n  textAlign: 'center'\n}}>\r\n    <Tooltip {...args}>\r\n      <button className=\"px-4 py-2 bg-blue-500 text-white rounded\">Hover over me</button>\r\n    </Tooltip>\r\n  </div>",...Default.parameters?.docs?.source}}}}}]);