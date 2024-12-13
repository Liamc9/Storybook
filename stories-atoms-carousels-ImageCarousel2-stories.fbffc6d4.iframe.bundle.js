"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[911,6337],{"./src/stories/atoms/carousels/ImageCarousel2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_carousels_ImageCarousel2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/carousels/ImageCarousel2.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Carousels/ImageCarousel2",tags:["autodocs"],component:_components_atoms_carousels_ImageCarousel2__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{docs:{description:{component:'\n# ImageCarousel2 Component\n\nThe `ImageCarousel2` component is a reusable Swiper-based carousel for displaying images. It supports looping and pagination, making it suitable for galleries or card components.\n\n## Usage\n\nTo use the `ImageCarousel2` component, import it and pass an array of image URLs as the `images` prop.\n\n### Example\n\n```jsx\nimport ImageCarousel2 from "./ImageCarousel2";\n\nconst imageList = [\n  "https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",\n  "https://via.placeholder.com/600x400?text=Image+2",\n  "https://via.placeholder.com/600x400?text=Image+3"\n];\n\n<ImageCarousel2 images={imageList} />\n```\n\n## Props\n\n| Prop   | Type     | Required | Description                        |\n|--------|----------|----------|------------------------------------|\n| images | `array` | Yes      | Array of image URLs to display.   |\n        '}}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_carousels_ImageCarousel2__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Default.args={images:["https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg","https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg","https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg"]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ImageCarousel2 {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/carousels/ImageCarousel2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),swiper_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),swiper_modules__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/swiper/modules/pagination.css"),__webpack_require__("./node_modules/swiper/modules/index.mjs"));const ImageContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{images}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwiperWrapper,{modules:[swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination,swiper_modules__WEBPACK_IMPORTED_MODULE_4__.A11y],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0},loop:images.length>1},images.map(((imgUrl,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide,{key:index},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:imgUrl,alt:`Image ${index+1}`}))))))}}}]);
//# sourceMappingURL=stories-atoms-carousels-ImageCarousel2-stories.fbffc6d4.iframe.bundle.js.map