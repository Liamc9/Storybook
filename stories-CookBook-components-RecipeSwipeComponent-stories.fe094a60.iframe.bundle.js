"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6019],{"./src/stories/CookBook/components/RecipeSwipeComponent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RecipeSwipeComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),swiper_react=__webpack_require__("./node_modules/swiper/swiper-react.mjs");__webpack_require__("./node_modules/swiper/swiper.css");const RecipeSwipeContainer=styled_components_browser_esm.default.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  height: 100svh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`,DrawerOverlay=styled_components_browser_esm.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`,SlideContainer=styled_components_browser_esm.default.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Video=styled_components_browser_esm.default.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Title=styled_components_browser_esm.default.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
`,RecipeInfoCards=styled_components_browser_esm.default.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,RecipeCard=styled_components_browser_esm.default.div`
  margin: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,RecipeCardHeader=styled_components_browser_esm.default.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`,RecipeCardContent=styled_components_browser_esm.default.div`
  font-size: 1em;
  color: #555;
`,Drawer=styled_components_browser_esm.default.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
  z-index: 10;
  overflow-y: auto;

  transform: translateY(80%);

  ${props=>props.open&&styled_components_browser_esm.css`
      transform: translateY(0);
    `}
`,DrawerHandle=styled_components_browser_esm.default.div`
  text-align: center;
  color: #000000;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`,DrawerContent=styled_components_browser_esm.default.div`
  padding: 20px;
`,BackButton=styled_components_browser_esm.default.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`,StepIndicator=styled_components_browser_esm.default.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1em;
  z-index: 15;
`,MuteButton=styled_components_browser_esm.default.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`,components_RecipeSwipeComponent=_ref=>{let{recipe}=_ref;const{name,cuisine,time,servings,calories,steps,overviewVideoUrl,overviewDescription}=recipe,[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(!1),[currentStepDescription,setCurrentStepDescription]=(0,react.useState)(overviewDescription),[isMuted,setIsMuted]=(0,react.useState)(!1),goToOverview=()=>{const swiperInstance=document.querySelector(".swiper").swiper;swiperInstance&&swiperInstance.slideTo(0),setCurrentStepDescription(overviewDescription)},toggleMute=()=>{setIsMuted((prev=>!prev)),document.querySelectorAll("video").forEach((video=>video.muted=!isMuted))};return react.createElement(RecipeSwipeContainer,null,isDrawerOpen&&react.createElement(DrawerOverlay,{onClick:e=>{setIsDrawerOpen(!1)}}),react.createElement(swiper_react.Swiper,{spaceBetween:0,slidesPerView:1,allowTouchMove:!isDrawerOpen,onSlideChange:swiper=>{document.querySelectorAll("video").forEach((video=>video.pause()));const video=swiper.slides[swiper.activeIndex].querySelector("video");video&&video.play(),setCurrentStepDescription(0===swiper.activeIndex?overviewDescription:steps[swiper.activeIndex-1].description)}},react.createElement(swiper_react.SwiperSlide,null,react.createElement(SlideContainer,{className:"recipe-overview"},react.createElement(Video,{src:overviewVideoUrl,className:"overview-video",playsInline:!0,muted:isMuted,onClick:e=>e.target.paused?e.target.play():e.target.pause()}),react.createElement(Title,null,name),react.createElement(RecipeInfoCards,null,react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Cuisine"),react.createElement(RecipeCardContent,null,cuisine)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Time"),react.createElement(RecipeCardContent,null,time)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Servings"),react.createElement(RecipeCardContent,null,servings)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Calories"),react.createElement(RecipeCardContent,null,calories," kcal"))))),steps.map(((step,index)=>react.createElement(swiper_react.SwiperSlide,{key:index},react.createElement(SlideContainer,{className:"recipe-step"},react.createElement(BackButton,{onClick:goToOverview},"Back"),react.createElement(StepIndicator,null,"Step ",index+1),react.createElement(MuteButton,{onClick:toggleMute},isMuted?"Unmute":"Mute"),react.createElement(Video,{src:step.videoUrl,className:"step-video",playsInline:!0,muted:isMuted,onClick:e=>e.target.paused?e.target.play():e.target.pause()})))))),react.createElement(Drawer,{open:isDrawerOpen,onClick:e=>{e.target.closest(".drawer-handle")&&(setCurrentStepDescription(currentStepDescription),setIsDrawerOpen((prev=>!prev)))}},react.createElement(DrawerHandle,{className:"drawer-handle"},"Swipe up for step details"),isDrawerOpen&&react.createElement(DrawerContent,null,react.createElement("p",null,currentStepDescription))))};var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const RecipeSwipeComponent_stories={title:"Projects/Cookbook/Components/RecipeSwipeComponent",component:components_RecipeSwipeComponent,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `RecipeSwipeComponent` is designed to display recipes in an interactive and visually engaging format. Users can swipe through different steps of a recipe, view an overview video, and read detailed descriptions of the cooking process. This component is perfect for cooking or food-related apps that need a user-friendly way to guide users through a recipe.\n\n### Features\n- **Interactive Step Navigation**: Allows users to swipe through recipe steps with associated video content.\n- **Overview Video and Description**: Provides a general introduction to the recipe.\n- **Detailed Recipe Steps**: Each step includes a description and an optional video for guidance.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { BrowserRouter as Router } from 'react-router-dom';\nimport RecipeSwipeComponent from './components/RecipeSwipeComponent';\nimport 'swiper/css';\n\nconst ExampleComponent = () => (\n  <Router>\n    <RecipeSwipeComponent\n      recipe={{\n        name: 'Spaghetti Carbonara',\n        cuisine: 'Italian',\n        time: '30 mins',\n        servings: 4,\n        calories: 500,\n        overviewVideoUrl: 'https://example.com/overview.mp4',\n        overviewDescription: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',\n        steps: [\n          {\n            description: 'Boil the pasta in salted water according to package instructions.',\n            videoUrl: 'https://example.com/step1.mp4',\n          },\n          {\n            description: 'Cook pancetta in a skillet until crispy.',\n            videoUrl: 'https://example.com/step2.mp4',\n          },\n          {\n            description: 'Whisk together eggs and cheese in a bowl.',\n            videoUrl: 'https://example.com/step3.mp4',\n          },\n          {\n            description: 'Combine pasta, pancetta, and egg mixture over low heat.',\n            videoUrl: 'https://example.com/step4.mp4',\n          },\n        ],\n      }}\n    />\n  </Router>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{recipe:{control:"object",description:"Object containing details about the recipe, including steps, overview, and metadata."}}},Default=(args=>react.createElement(dist.BrowserRouter,null,react.createElement(components_RecipeSwipeComponent,args))).bind({});Default.args={recipe:{name:"Classic Lasagna",cuisine:"Italian",time:"45 min",servings:6,calories:600,overviewVideoUrl:"https://firebasestorage.googleapis.com/v0/b/cookbook-3f0ee.appspot.com/o/2620043-uhd_3840_2160_25fps.mp4?alt=media&token=c204d2ba-7415-4930-b324-7cc37180527b",overviewDescription:"A classic Italian dish with layers of pasta, meat, and cheese.",steps:[{description:"Prepare the meat sauce by cooking ground beef with onions and garlic.",videoUrl:"https://example.com/step1.mp4"},{description:"Layer lasagna noodles with meat sauce, ricotta, and mozzarella cheese.",videoUrl:"https://example.com/step2.mp4"},{description:"Bake the lasagna in the oven at 375°F for 45 minutes.",videoUrl:"https://example.com/step3.mp4"}]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <RecipeSwipeComponent {...args} />\r\n  </Router>",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-CookBook-components-RecipeSwipeComponent-stories.fe094a60.iframe.bundle.js.map