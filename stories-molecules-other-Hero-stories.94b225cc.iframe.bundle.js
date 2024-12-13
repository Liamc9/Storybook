"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6584],{"./src/stories/molecules/other/Hero.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hero_stories});var react=__webpack_require__("./node_modules/react/index.js");const other_Hero=_ref=>{let{title,subtitle,backgroundImage}=_ref;return react.createElement("div",{className:"relative w-full shadow-lg"},react.createElement("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${backgroundImage})`}}),react.createElement("div",{className:"relative z-10 flex flex-col items-center justify-center py-10 text-center"},react.createElement("h1",{className:"text-5xl font-extrabold text-gray-200 drop-shadow-md"},title),react.createElement("p",{className:"mt-4 text-xl text-gray-800 drop-shadow-md"},subtitle)))},Hero_stories={title:"Molecules/Other/Hero",component:other_Hero,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Hero` component is designed to provide a prominent, visually appealing introduction to a page or section. It often features a large background image, a main title, and a subtitle, making it perfect for landing pages or key sections that require strong visual impact.\n\n### Features\n- **Customizable Title and Subtitle**: Allows setting the main message and supporting text.\n- **Background Image Support**: Can display a background image for visual emphasis.\n- **Flexible Layout**: Adaptable to various screen sizes and design requirements.\n\n### Usage\n\n```jsx\nimport React from \'react\';\nimport Hero from \'./components/Hero\';\n\nconst ExampleComponent = () => (\n  <Hero\n    title="Welcome to Our Website"\n    subtitle="We are glad to have you here."\n    backgroundImage="https://via.placeholder.com/1200x600"\n  />\n);\n\nexport default ExampleComponent;\n```\n        '}}},argTypes:{title:{control:"text",description:"The main heading of the Hero component."},subtitle:{control:"text",description:"The subtitle or supporting text."},backgroundImage:{control:"text",description:"URL for the background image of the Hero section."}}},Default=(args=>react.createElement(other_Hero,args)).bind({});Default.args={title:"Welcome to Our Website",subtitle:"We are glad to have you here.",backgroundImage:"https://via.placeholder.com/1200x600"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Hero {...args} />",...Default.parameters?.docs?.source}}}}}]);