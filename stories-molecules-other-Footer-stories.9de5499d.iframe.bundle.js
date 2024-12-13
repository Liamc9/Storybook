"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2557],{"./src/stories/molecules/other/Footer.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var react=__webpack_require__("./node_modules/react/index.js");const other_Footer=_ref=>{let{email,phone,address,copyright,socialLinks}=_ref;return react.createElement("footer",{className:"w-full bg-gray-900 py-10 text-gray-300"},react.createElement("div",{className:"container mx-auto px-4"},react.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"},react.createElement("div",{className:"text-center md:text-left"},react.createElement("h2",{className:"text-lg font-semibold text-white"},"Contact Information"),react.createElement("p",null,"Email: ",react.createElement("a",{href:`mailto:${email}`,className:"text-blue-400 hover:underline"},email)),react.createElement("p",null,"Phone: ",react.createElement("a",{href:`tel:${phone}`,className:"text-blue-400 hover:underline"},phone)),react.createElement("p",null,"Address: ",address)),react.createElement("div",{className:"flex space-x-4"},socialLinks.map((_ref2=>{let{href,label,icon}=_ref2;return react.createElement("a",{href,key:label,className:"text-gray-400 hover:text-white"},react.createElement("i",{className:icon},label))})))),react.createElement("div",{className:"flex justify-between mt-8 border-t border-gray-700 pt-6"},react.createElement("div",{className:"text-center md:text-left"},react.createElement("p",null,"© ",copyright,". All rights reserved.")),react.createElement("div",null,react.createElement("p",null,react.createElement("a",{href:"/privacy-policy",className:"hover:underline"},"Privacy Policy")," |",react.createElement("a",{href:"/terms",className:"hover:underline"},"Terms of Service"))))))},Footer_stories={title:"Molecules/Other/Footer",component:other_Footer,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `Footer` component is a structured section typically placed at the bottom of web pages or applications. It provides useful information such as contact details, social media links, and copyright information, enhancing the user experience with accessible, organized content.\n\n### Features\n- **Contact Information**: Displays an email, phone number, and address.\n- **Social Media Integration**: Supports links to various social media platforms.\n- **Customizable Content**: Allows modification of text and links to suit different projects.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport Footer from './components/Footer';\n\nconst ExampleComponent = () => (\n  <Footer\n    email=\"contact@example.com\"\n    phone=\"+1 (555) 123-4567\"\n    address=\"123 Main Street, City, Country\"\n    copyright=\"2023 Your Company\"\n    socialLinks={[\n      { href: 'https://facebook.com', label: 'Facebook', icon: 'fab fa-facebook' },\n      { href: 'https://twitter.com', label: 'Twitter', icon: 'fab fa-twitter' },\n    ]}\n  />\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{email:{control:"text",description:"The contact email address to display."},phone:{control:"text",description:"The contact phone number to display."},address:{control:"text",description:"The physical address to display."},copyright:{control:"text",description:"The copyright text to display at the bottom of the footer."},socialLinks:{control:"object",description:"An array of social media links, each with href, label, and icon properties."}}},Default=(args=>react.createElement(other_Footer,args)).bind({});Default.args={email:"contact@example.com",phone:"+1 (555) 123-4567",address:"123 Main Street, City, Country",copyright:"2023 Your Company",socialLinks:[{href:"https://facebook.com",label:"Facebook",icon:"fab fa-facebook"},{href:"https://twitter.com",label:"Twitter",icon:"fab fa-twitter"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Footer {...args} />",...Default.parameters?.docs?.source}}}}}]);