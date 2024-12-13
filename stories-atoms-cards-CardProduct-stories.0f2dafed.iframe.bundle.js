"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5113],{"./src/stories/atoms/cards/CardProduct.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_cards_CardProduct__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/cards/CardProduct.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Cards/CardProduct",component:_components_atoms_cards_CardProduct__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `CardProduct` component is designed to showcase product details in a card format. It includes an image, title, price, and a button for interaction, making it suitable for e-commerce or product listing pages.\n\n### Features\n- **Product Image**: Displays an image of the product.\n- **Title and Price**: Highlights the product's name and price.\n- **Action Button**: Customizable button that triggers an action when clicked.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport CardProduct from './components/cards/CardProduct';\n\nconst ExampleComponent = () => (\n  <CardProduct\n    image=\"https://via.placeholder.com/150\"\n    title=\"Sample Product\"\n    id=\"123\"\n    price={29.99}\n    onButtonClick={() => console.log('Button clicked')}\n  />\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{image:{control:"text",description:"URL of the product image."},title:{control:"text",description:"Name of the product."},id:{control:"text",description:"Unique identifier for the product."},price:{control:"number",description:"Price of the product."},onButtonClick:{action:"clicked",description:"Event triggered when the button is clicked."}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_cards_CardProduct__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Default.args={image:"https://via.placeholder.com/150",title:"Sample Product",id:"123",price:29.99};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CardProduct {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/cards/CardProduct.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=_ref=>{let{image,title,id,price,onButtonClick}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-48 bg-gray-700 rounded-xl"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:image,alt:title,className:"w-full h-full object-cover rounded-xl"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-row justify-between"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-xl font-bold"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-xs text-gray-700"},"ID: ",id)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"font-bold text-red-600"},"$",price)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:onButtonClick,className:"hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"},"Add To Cart")))}}}]);