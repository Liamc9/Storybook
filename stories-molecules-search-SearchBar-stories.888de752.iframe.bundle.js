"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3203],{"./src/stories/molecules/search/SearchBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,PrefilledInput:()=>PrefilledInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const search_SearchBar=_ref=>{let{onSearch}=_ref;const[input,setInput]=(0,react.useState)("");return react.createElement("div",{className:"flex items-center mx-auto max-w-md overflow-hidden rounded-lg border border-gray-300 shadow-lg"},react.createElement("input",{type:"text",value:input,onChange:e=>setInput(e.target.value),placeholder:"Search...",className:"w-full px-4 py-2 text-gray-700 focus:outline-none"}),react.createElement("button",{onClick:()=>{onSearch(input)},className:"flex items-center justify-center px-4 py-2 bg-blue-500 text-white  hover:bg-blue-600 transition-colors"},react.createElement("span",{className:"mr-2"},"Search"),react.createElement(Icons.SearchIcon,{className:"w-5 h-5 text-white"})))},SearchBar_stories={title:"Molecules/Search/SearchBar",component:search_SearchBar,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `SearchBar` component is designed for searching content within an application. It accepts user input and triggers a search function when a search is performed. This component is ideal for filtering lists, searching databases, or navigating content.\n\n### Features\n- **Real-time Search**: The `onSearch` callback is triggered when a search is performed, allowing for dynamic interaction.\n- **Customizable Placeholder**: The input field can include a custom placeholder text for guidance.\n- **Pre-filled Input**: Supports pre-filled input values for more interactive experiences.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport SearchBar from './components/search/SearchBar';\n\nconst ExampleComponent = () => (\n  <SearchBar\n    onSearch={(input) => console.log(`Search query: ${input}`)}\n  />\n);\n\nexport default ExampleComponent;\n```\n        "}}}},Template=args=>react.createElement(search_SearchBar,args),Default=Template.bind({});Default.args={onSearch:input=>alert(`Search query: ${input}`)};const PrefilledInput=Template.bind({});PrefilledInput.args={onSearch:input=>alert(`Search query: ${input}`)};const __namedExportsOrder=["Default","PrefilledInput"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...Default.parameters?.docs?.source}}},PrefilledInput.parameters={...PrefilledInput.parameters,docs:{...PrefilledInput.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...PrefilledInput.parameters?.docs?.source}}}}}]);