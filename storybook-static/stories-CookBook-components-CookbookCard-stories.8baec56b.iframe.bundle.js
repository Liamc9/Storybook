"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[263],{"./src/stories/CookBook/components/CookbookCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Other:()=>Other,Other2:()=>Other2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CookbookCard_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const CardContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 800px;
  align-items: stretch;
  aspect-ratio: 3 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ImageContainer=styled_components_browser_esm.default.div`
  flex: 0 0 40%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 4 / 3;

  &::before {
    content: "";
    display: block;
    padding-top: 75%; /* Maintain 4:3 aspect ratio */
    background-color: #e2e8f0; /* Placeholder background color */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`,RecipeImage=styled_components_browser_esm.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`,CardContent=styled_components_browser_esm.default.div`
  flex: 1;
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,CardTitle=styled_components_browser_esm.default.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #2d3748;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,CardSubtitle=styled_components_browser_esm.default.p`
  font-weight: 500;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
`,CardDetails=styled_components_browser_esm.default.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  flex-wrap: wrap;
`,CardDetail=styled_components_browser_esm.default.span`
  background-color: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`,components_CookbookCard=_ref=>{let{cookbook,onCardClick}=_ref;const{chef,cuisine,title,imageUrl,numberOfRecipes}=cookbook;return react.createElement(CardContainer,{onClick:onCardClick},react.createElement(ImageContainer,null,react.createElement(RecipeImage,{src:imageUrl,alt:title})),react.createElement(CardContent,null,react.createElement(CardTitle,null,title),react.createElement(CardSubtitle,null,"By ",chef),react.createElement(CardDetails,null,react.createElement(CardDetail,null,"Cuisine: ",cuisine),react.createElement(CardDetail,null,"Recipes: ",numberOfRecipes))))},CookbookCard_stories={title:"CookBook/Components/CookbookCard",component:components_CookbookCard,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `CookbookCard` component is designed to display information about a cookbook, including the chef's name, cuisine type, title, image, and the number of recipes. This component is ideal for applications related to recipes, cooking, or culinary showcases.\n\n### Features\n- **Chef and Cuisine Information**: Displays details about the chef and type of cuisine.\n- **Cookbook Title**: Prominently shows the name of the cookbook.\n- **Image Display**: Includes an image representing the cookbook.\n- **Recipe Count**: Shows the number of recipes included in the cookbook.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport { BrowserRouter as Router } from 'react-router-dom';\nimport CookbookCard from './components/cards/CookbookCard/CookbookCard';\n\nconst ExampleComponent = () => (\n  <Router>\n    <CookbookCard\n      cookbook={{\n        chef: 'Gordon Ramsay',\n        cuisine: 'Italian',\n        title: 'Delicious Pasta Dishes',\n        imageUrl: 'https://www.indothainews.com/wp-content/uploads/2023/09/yrtyr_1024x1024.jpg',\n        numberOfRecipes: 10,\n      }}\n    />\n  </Router>\n);\n\nexport default ExampleComponent;\n```\n        "}}}},Template=args=>react.createElement(dist.BrowserRouter,null,react.createElement(components_CookbookCard,args)),Default=Template.bind({});Default.args={cookbook:{chef:"Gordon Ramsay",cuisine:"Italian",title:"Delicious Pasta Dishes",imageUrl:"https://www.indothainews.com/wp-content/uploads/2023/09/yrtyr_1024x1024.jpg",numberOfRecipes:10}};const Other=Template.bind({});Other.args={cookbook:{chef:"Jamie Oliver",cuisine:"Mexican",title:"Taco Fiesta",imageUrl:"https://img.jamieoliver.com/home/wp-content/uploads/2020/08/jamieskeepcookingfamilyfavourites.jpg?tr=w-665",numberOfRecipes:25}};const Other2=Template.bind({});Other2.args={cookbook:{chef:"Nigella Lawson",cuisine:"French",title:"Elegant Desserts",imageUrl:"https://pagesix.com/wp-content/uploads/sites/3/2013/09/lawson.jpg?quality=75&strip=all&w=744",numberOfRecipes:3}};const __namedExportsOrder=["Default","Other","Other2"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <CookbookCard {...args} />\r\n  </Router>",...Default.parameters?.docs?.source}}},Other.parameters={...Other.parameters,docs:{...Other.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <CookbookCard {...args} />\r\n  </Router>",...Other.parameters?.docs?.source}}},Other2.parameters={...Other2.parameters,docs:{...Other2.parameters?.docs,source:{originalSource:"args => <Router>\r\n    <CookbookCard {...args} />\r\n  </Router>",...Other2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-CookBook-components-CookbookCard-stories.8baec56b.iframe.bundle.js.map