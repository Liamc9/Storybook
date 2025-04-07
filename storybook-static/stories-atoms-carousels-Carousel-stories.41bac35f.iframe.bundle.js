"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5384,8408],{"./src/stories/atoms/carousels/Carousel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{XImageCarousel:()=>XImageCarousel,XImageCarousel2:()=>XImageCarousel2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Carousel_stories});var react=__webpack_require__("./node_modules/react/index.js"),swiper_react=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),modules=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/swiper/modules/navigation.css"),__webpack_require__("./node_modules/swiper/modules/pagination.css"),__webpack_require__("./node_modules/swiper/modules/autoplay.css"),__webpack_require__("./node_modules/swiper/modules/index.mjs"));const carousels_ImageCarousel=_ref=>{let{images}=_ref;const imageList=images&&images.length>0?images:["https://via.placeholder.com/800x400?text=No+Image+Available"];return react.createElement("div",{className:"relative w-full max-w-lg mx-auto"},react.createElement(swiper_react.RC,{navigation:!0,pagination:{clickable:!0},autoplay:{delay:3e3},loop:!0,modules:[modules.Vx,modules.dK,modules.Ij],className:"mySwiper"},imageList.map(((image,index)=>react.createElement(swiper_react.qr,{key:index},react.createElement("img",{src:image,alt:`Slide ${index}`,className:"w-full"}))))))};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const ImageContainer=styled_components_browser_esm.Ay.div`
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
`,SwiperWrapper=(0,styled_components_browser_esm.Ay)(swiper_react.RC)`
  width: 100%;
  height: 100%; /* Ensure Swiper takes full height */
`,carousels_ImageCarousel2=_ref=>{let{images}=_ref;return react.createElement(ImageContainer,null,react.createElement(SwiperWrapper,{modules:[modules.dK,modules.Jq],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0},loop:images.length>1},images.map(((imgUrl,index)=>react.createElement(swiper_react.qr,{key:index},react.createElement("img",{src:imgUrl,alt:`Image ${index+1}`}))))))},Carousel_stories={title:"Atoms/Carousels",component:carousels_ImageCarousel,tags:["autodocs"]},imageList=["https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg","https://via.placeholder.com/600x400?text=Image+2","https://via.placeholder.com/600x400?text=Image+3"],XImageCarousel=()=>react.createElement(carousels_ImageCarousel,{images:imageList}),XImageCarousel2=()=>react.createElement(carousels_ImageCarousel2,{images:imageList}),__namedExportsOrder=["XImageCarousel","XImageCarousel2"];XImageCarousel.parameters={...XImageCarousel.parameters,docs:{...XImageCarousel.parameters?.docs,source:{originalSource:"() => <ImageCarousel images={imageList} />",...XImageCarousel.parameters?.docs?.source}}},XImageCarousel2.parameters={...XImageCarousel2.parameters,docs:{...XImageCarousel2.parameters?.docs,source:{originalSource:"() => <ImageCarousel2 images={imageList} />",...XImageCarousel2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-carousels-Carousel-stories.41bac35f.iframe.bundle.js.map