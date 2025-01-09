"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2886],{"./src/stories/CookBook/components/RecipeCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RecipeCard_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/react-player/lib/index.js"),lib_default=__webpack_require__.n(lib),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");function RecipeCard(_ref){let{recipe,onCardClick,chefLink}=_ref;const[isVideoPlaying,setIsVideoPlaying]=(0,react.useState)(!1),{title,imageUrl,videoUrl,chef,time,cuisine,profilePic}=recipe;return react.createElement(CardContainer,{onClick:onCardClick},react.createElement(ImageContainer,{onClick:isVideoPlaying?e=>{e.stopPropagation(),setIsVideoPlaying(!1)}:e=>{e.stopPropagation(),setIsVideoPlaying(!0);const videoElement=document.querySelector(".video-player video");videoElement&&videoElement.play()}},react.createElement(MediaWrapper,{isVideoPlaying},isVideoPlaying?react.createElement(lib_default(),{url:videoUrl,playing:isVideoPlaying,muted:!0,width:"100%",height:"100%",className:"video-player",config:{file:{attributes:{playsInline:!0}}}}):react.createElement(RecipeImage,{src:imageUrl,alt:title})),react.createElement(ChefInfo,null,react.createElement(ProfilePic,{src:profilePic,alt:chef}),react.createElement(ChefNameLink,{href:chefLink},chef)),react.createElement(Likes,null,react.createElement(Icons.BookmarkIcon,{className:"icon-large"})),react.createElement(BottomDetails,null,react.createElement(CardContent,null,react.createElement(CardTitle,null,title),react.createElement(InfoContainer,null,react.createElement(LeftInfo,null,react.createElement(CardInfo,null,react.createElement(Icons.ClockIcon,{className:"icon-large"}),react.createElement(Text,null,time)),react.createElement(CardInfo,null,react.createElement(Icons.ForkAndKnifeIcon,{className:"icon-large"}),react.createElement(Text,null,cuisine))),react.createElement(ViewRecipeContainer,{onClick:onCardClick},"View Recipe",react.createElement(ArrowRightIcon1,{className:"icon-arrow"})))))))}const CardContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`,ImageContainer=styled_components_browser_esm.default.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`,MediaWrapper=styled_components_browser_esm.default.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${_ref2=>{let{isVideoPlaying}=_ref2;return isVideoPlaying?"black":"transparent"}};
`,RecipeImage=styled_components_browser_esm.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ChefInfo=styled_components_browser_esm.default.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`,ProfilePic=styled_components_browser_esm.default.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 2px solid #ffffff;
`,ChefNameLink=styled_components_browser_esm.default.a`
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`,Likes=styled_components_browser_esm.default.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3rem;
  border-radius: 0.7rem;

  .icon-large {
    width: 30px;
    height: 30px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`,BottomDetails=styled_components_browser_esm.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 1rem 1rem 1rem;
`,CardContent=styled_components_browser_esm.default.div`
  text-align: left;
  width: 100%;
`,CardTitle=styled_components_browser_esm.default.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,InfoContainer=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,LeftInfo=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
`,CardInfo=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2px 5px;
  .icon-large {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`,Text=styled_components_browser_esm.default.p`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`,ViewRecipeContainer=styled_components_browser_esm.default.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: auto 0;
  background-color: #B08B5B;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    background-color: #9a7748;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`,ArrowRightIcon1=(0,styled_components_browser_esm.default)(Icons.ArrowRightIcon)`
  width: 35px;
  height: 35px;
  color: #ffffff;
`;var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const RecipeCard_stories={title:"Projects/CookBook/Components/RecipeCard",component:RecipeCard,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `RecipeCard` component is designed to showcase recipes in an appealing card format. It includes visual elements such as an image, video link, and chef's profile picture, along with recipe details like the title, cuisine, preparation time, and number of likes.\n\n### Features\n- **Visual Representation**: Displays an image and a video link for more interactive content.\n- **Chef and Cuisine Details**: Includes the chef's name and cuisine type.\n- **Interaction Details**: Shows the number of likes and time required for preparation.\n- **Router Compatibility**: Can be used with `react-router-dom` for seamless navigation.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { BrowserRouter as Router } from 'react-router-dom';\nimport RecipeCard from './components/cards/RecipeCard/RecipeCard';\n\nconst ExampleComponent = () => (\n  <Router>\n    <RecipeCard\n      recipe={{\n        title: 'Pasta Carbonara',\n        imageUrl: 'https://via.placeholder.com/300x200',\n        videoUrl: 'https://www.youtube.com/watch?v=sample', // Replace with a valid video URL\n        chef: 'Jamie Oliver',\n        time: '30 minutes',\n        cuisine: 'Italian',\n        likes: 120,\n        profilePic: 'https://via.placeholder.com/50',\n      }}\n    />\n  </Router>\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{recipe:{control:"object",description:"Object containing all the details about the recipe.",defaultValue:{title:"Pasta Carbonara",imageUrl:"https://via.placeholder.com/300x200",videoUrl:"https://www.youtube.com/watch?v=sample",chef:"Jamie Oliver",time:"30 minutes",cuisine:"Italian",likes:120,profilePic:"https://via.placeholder.com/50"}}}},Default=(args=>react.createElement(dist.BrowserRouter,null,react.createElement(RecipeCard,args))).bind({});Default.args={recipe:{title:"Classic Lasagna with Chips and more",imageUrl:"https://www.mygfguide.com/wp-content/uploads/2020/11/lasagne-cover-image-scaled.jpg",videoUrl:"https://firebasestorage.googleapis.com/v0/b/cookbook-3f0ee.appspot.com/o/2620043-uhd_3840_2160_25fps.mp4?alt=media&token=c204d2ba-7415-4930-b324-7cc37180527b",chef:"Chef Mario",time:"45 min",cuisine:"Italian",likes:120,profilePic:"https://via.placeholder.com/50"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <RecipeCard {...args} />\r\n  </Router>",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-CookBook-components-RecipeCard-stories.5a73ec3d.iframe.bundle.js.map