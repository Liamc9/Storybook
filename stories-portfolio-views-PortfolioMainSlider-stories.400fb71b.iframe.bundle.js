"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1427],{"./src/stories/portfolio/views/PortfolioMainSlider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PortfolioMainSlider_stories});var react=__webpack_require__("./node_modules/react/index.js"),TopNavBar2=__webpack_require__("./src/components/navigation/TopNavBar2.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const other_HeroContent=_ref=>{let{header,title,subtitle,contentTitle,contentSubtitle,shopNowLink,bottleBgImage,bottleImage}=_ref;return react.createElement("div",{className:"flex md:flex-row flex-col md:space-x-20 items-center py-12 px-4 transition-all duration-500 ease-in-out"},react.createElement("div",{className:"flex flex-col justify-between max-w-[320px] md:text-left text-center space-y-6 md:space-y-8"},react.createElement("div",null,react.createElement("h3",{className:"uppercase text-sm tracking-widest font-semibold"},header),react.createElement("h1",{className:"font-garamond text-7xl font-light mt-2"},title),react.createElement("h2",{className:"font-garamond text-3xl font-light mt-4 mb-10"},subtitle)),react.createElement("div",null,react.createElement("div",{className:"font-garamond text-xl italic mb-4"},contentTitle),react.createElement("div",{className:"text-base leading-relaxed mb-6 tracking-tight"},contentSubtitle),react.createElement("div",{className:"flex items-center space-x-3 font-medium text-sm hover:text-blue-500 cursor-pointer"},react.createElement("a",{href:shopNowLink,className:"hover:underline"},"Shop Now"),react.createElement(Icons.ButtonArrowIcon,{className:"w-5 h-5"})))),react.createElement("div",{className:"flex justify-center items-center relative md:mt-0 mt-10"},react.createElement("div",{className:"relative"},react.createElement("img",{className:"rounded-full object-cover transition-transform duration-500 ease-in-out",src:bottleBgImage,alt:`${title} background`,style:{width:"320px",height:"450px"}}),react.createElement("img",{className:"absolute top-[25%] left-0 transform scale-150 transition-transform duration-500 ease-in-out",src:bottleImage,alt:`${title} bottle`}))))};var TransitionGroup=__webpack_require__("./node_modules/react-transition-group/esm/TransitionGroup.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),Card3=__webpack_require__("./src/components/atoms/cards/Card3.jsx");const slidesData=[{id:"beach",header:"Closca Bottle",title:"Beach",subtitle:"€39.90",contentTitle:"In 20 years, there could be more plastic in our oceans than fish.",contentSubtitle:"Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop",bottleImage:"https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png",backgroundColor:"#e7dfcf",additionalContentComponent:()=>react.createElement("div",null,react.createElement("h2",null,"Additional Content for Slide 1"),react.createElement(Card3.A,null))},{id:"savanna",header:"Closca Bottle",title:"Savanna",subtitle:"€39.90",contentTitle:"The Earth's area affected by desertification is approximately 11 times India's size.",contentSubtitle:"The Savannas act as a carbon sink, absorbing CO₂ from the atmosphere and helping to maintain the balance of global temperatures.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&auto=format&fit=crop",bottleImage:"https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png",backgroundColor:"#e9bf8b",additionalContentComponent:()=>react.createElement("div",null,react.createElement("h2",null,"Additional Content for Slide 2"),react.createElement(Card3.A,null))}],views_PortfolioMainSlider=_ref=>{let{slides=slidesData}=_ref;const[currentSlideIndex,setCurrentSlideIndex]=(0,react.useState)(0),[isPlaying,setIsPlaying]=(0,react.useState)(!0),[progress,setProgress]=(0,react.useState)(0),[shadowOpacity,setShadowOpacity]=(0,react.useState)(.7),totalSlides=slides.length,sliderRef=(0,react.useRef)(null),progressBarRef=(0,react.useRef)(null),additionalContentRef=(0,react.useRef)(null),isPlayingRef=(0,react.useRef)(isPlaying);(0,react.useEffect)((()=>{isPlayingRef.current=isPlaying}),[isPlaying]),(0,react.useEffect)((()=>{let autoSlideInterval,progressInterval;return isPlaying&&(setProgress(0),progressInterval=setInterval((()=>{setProgress((prevProgress=>prevProgress>=100?(handleNextSlide(),0):prevProgress+2))}),100),autoSlideInterval=setInterval((()=>{handleNextSlide()}),5e3)),()=>{autoSlideInterval&&clearInterval(autoSlideInterval),progressInterval&&clearInterval(progressInterval)}}),[isPlaying,currentSlideIndex]),(0,react.useEffect)((()=>{const handleScroll=()=>{if(additionalContentRef.current){let opacity=1-additionalContentRef.current.getBoundingClientRect().top/(window.innerHeight/2);opacity<0&&(opacity=0),opacity>.7&&(opacity=.7),setShadowOpacity(.7-opacity)}0!==window.scrollY||isPlayingRef.current||setIsPlaying(!0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}}),[]);const handleNextSlide=()=>{setCurrentSlideIndex((prevIndex=>prevIndex===totalSlides-1?0:prevIndex+1))},currentSlide=slides[currentSlideIndex],AdditionalContentComponent=currentSlide.additionalContentComponent||Card3.A;return react.createElement(react.Fragment,null,react.createElement("style",null,"\n        .fade-enter {\n          opacity: 0;\n          transform: translateX(100%);\n        }\n        .fade-enter-active {\n          opacity: 1;\n          transform: translateX(0%);\n          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;\n        }\n        .fade-exit {\n          opacity: 1;\n          transform: translateX(0%);\n        }\n        .fade-exit-active {\n          opacity: 0;\n          transform: translateX(-100%);\n          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;\n        }\n        .progress-bar {\n          height: 4px;\n          background-color: black;\n          transition: width 100ms linear;\n        }\n      "),react.createElement("div",{className:"h-screen"},react.createElement("div",{ref:sliderRef,className:"container overflow-hidden relative h-[650px] w-full flex flex-col p-8",style:{backgroundColor:currentSlide.backgroundColor}},react.createElement(TopNavBar2.A,{menuItems:slides.map((slide=>slide.title)),activeTab:currentSlide.title,onTabClick:tabTitle=>{const tabIndex=slides.findIndex((slide=>slide.title===tabTitle));-1!==tabIndex&&(setCurrentSlideIndex(tabIndex),setProgress(0))}}),react.createElement("div",{className:"relative flex-grow mt-16"},react.createElement(TransitionGroup.A,{className:"h-full"},react.createElement(CSSTransition.A,{key:currentSlide.id,timeout:500,classNames:"fade"},react.createElement(other_HeroContent,{header:currentSlide.header,title:currentSlide.title,subtitle:currentSlide.subtitle,contentTitle:currentSlide.contentTitle,contentSubtitle:currentSlide.contentSubtitle,shopNowLink:currentSlide.shopNowLink,bottleBgImage:currentSlide.bottleBgImage,bottleImage:currentSlide.bottleImage}))),react.createElement("div",{className:"absolute bottom-5 right-5 z-10 flex space-x-4"},react.createElement("button",{onClick:()=>{setCurrentSlideIndex((prevIndex=>0===prevIndex?totalSlides-1:prevIndex-1))},className:"flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"},react.createElement(Icons.ButtonArrowIcon,{className:"transform rotate-180"})),react.createElement("button",{onClick:handleNextSlide,className:"flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"},react.createElement(Icons.ButtonArrowIcon,null))),react.createElement("div",{className:"absolute right-5 top-10 text-base font-medium"},currentSlideIndex+1," / ",totalSlides),react.createElement("div",{className:"absolute bottom-0 left-0 w-full"},react.createElement("div",{ref:progressBarRef,className:"progress-bar",style:{width:`${progress}%`}})))),react.createElement("div",{className:"relative"},react.createElement("div",{className:"absolute inset-x-0 top-0 h-40 z-10 pointer-events-none",style:{background:`linear-gradient(to bottom, rgba(0, 0, 0, ${shadowOpacity}), transparent)`}}),react.createElement("div",{className:"absolute text-white inset-x-0 top-0 flex justify-center py-5 z-20"},react.createElement("button",{onClick:()=>{setIsPlaying(!1),additionalContentRef.current.scrollIntoView({behavior:"smooth"})},className:"flex flex-col items-center cursor-pointer"},react.createElement("span",{className:"animate-bounce"},react.createElement(Icons.ButtonArrowIcon,{className:"h-6 w-6 transform rotate-90","aria-hidden":"true"})),react.createElement("span",{className:"mt-2 text-lg font-medium"},"View ",currentSlide.title))),react.createElement("div",{ref:additionalContentRef,className:"w-full bg-gray-100 p-8",style:{minHeight:"400px"}},react.createElement(AdditionalContentComponent,null)))))};var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const PortfolioMainSlider_stories={title:"Projects/Portfolio/Views/PortfolioMainSlider",component:views_PortfolioMainSlider,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"\nThe `PortfolioMainSlider` component is designed to showcase portfolio items or product highlights in an engaging, full-screen slider format. Each slide can display detailed information, including images, titles, subtitles, and additional descriptive content.\n\n### Features\n- **Customizable Slides**: Accepts an array of slides, each with unique content, background images, and colors.\n- **Full-Screen Layout**: Optimized for a fullscreen experience for better visual impact.\n- **Interactive Content**: Each slide supports titles, subtitles, images, and call-to-action links.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport PortfolioMainSlider from './components/PortfolioMainSlider';\n\nconst sampleSlides = [\n  {\n    id: 'beach',\n    header: 'Closca Bottle',\n    title: 'Beach',\n    subtitle: '€39.90',\n    contentTitle: 'In 20 years, there could be more plastic in our oceans than fish.',\n    contentSubtitle: 'Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.',\n    shopNowLink: '#',\n    bottleBgImage: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop',\n    bottleImage: 'https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684',\n    backgroundColor: '#e7dfcf',\n  },\n  // Additional slides...\n];\n\nconst ExampleComponent = () => (\n  <PortfolioMainSlider\n    logoSrc=\"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK.png\"\n    menuItems={[\n      { text: 'Mask', href: '#' },\n      { text: 'Helmet', href: '#' },\n      { text: 'Bottle', href: '#' },\n      { text: 'Accessories', href: '#' },\n    ]}\n    slides={sampleSlides}\n  />\n);\n\nexport default ExampleComponent;\n```\n        "}}}},Default=args=>react.createElement(dist.BrowserRouter,null,react.createElement(views_PortfolioMainSlider,args));Default.args={logoSrc:"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK.png",menuItems:[{text:"Mask",href:"#"},{text:"Helmet",href:"#"},{text:"Bottle",href:"#"},{text:"Accessories",href:"#"}],slides:[{id:"beach",header:"Closca Bottle",title:"Beach",subtitle:"€39.90",contentTitle:"In 20 years, there could be more plastic in our oceans than fish.",contentSubtitle:"Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop",bottleImage:"https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684",backgroundColor:"#e7dfcf"},{id:"savanna",header:"Closca Bottle",title:"Savanna",subtitle:"€39.90",contentTitle:"The Earth's area affected by desertification is approximately 11 times the size of India.",contentSubtitle:"The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",bottleImage:"https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png?v=1703675684",backgroundColor:"#e9bf8b"},{id:"glacier",header:"Closca Bottle",title:"Glacier",subtitle:"€39.90",contentTitle:"Glaciers contain 75% of the world’s freshwater.",contentSubtitle:"The effects of melting glaciers are biodiversity loss, the rising of sea levels, and freshwater shortages.",shopNowLink:"#",bottleBgImage:"https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg",bottleImage:"https://gomagcdn.ro/domains/alty.ro/files/product/original/sticla-reutilizabila-apa-closca-glacier-copie-848-7049.png",backgroundColor:"#b6d6c8"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter><PortfolioMainSlider {...args} /></BrowserRouter>",...Default.parameters?.docs?.source}}}},"./src/components/atoms/cards/Card3.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const Card3=_ref=>{let{description,linkText}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative z-10 mx-auto max-w-md"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"h-12 w-12 text-white transition-all",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",strokeLinejoin:"round",strokeLinecap:"round"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"font-medium"},description)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pt-6 text-lg font-semibold leading-7"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-purple-500 transition-all duration-500 group-hover:text-white"},linkText," →")))))};Card3.defaultProps={description:"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.",linkText:"Explore Documentation"};const __WEBPACK_DEFAULT_EXPORT__=Card3},"./src/components/navigation/SideBar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SideBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function SideBar(_ref){let{navLinks=[],username,profilePic,onLogout,isSideNavOpen,closeSideNav,hideProfile=!1}=_ref;const mainLinks=navLinks.filter((link=>!link.isFooter)),footerLinks=navLinks.filter((link=>link.isFooter));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isSideNavOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:closeSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},!hideProfile&&username&&profilePic&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,{to:"/profile",onClick:closeSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileInfo,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Username,null,username),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewProfile,null,"View Profile"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,mainLinks.map(((_ref2,index)=>{let{name,path,Icon}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,footerLinks.map(((_ref3,index)=>{let{name,path,Icon}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))})),onLogout&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Log out")))))}styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;const Overlay=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`,SideNavContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${_ref4=>{let{isOpen}=_ref4;return isOpen?"translateX(0)":"translateX(-100%)"}};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${_ref5=>{let{isOpen}=_ref5;return isOpen?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"}};
  z-index: 50;
`,SideNavHeader=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`,ProfileImage=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`,ProfileInfo=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
`,Username=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`,ViewProfile=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  font-size: 0.875rem;
  color: #718096;
`,NavLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.nav`
  flex-grow: 1;
  overflow-y: auto;
`,StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #2d3748;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`,FooterLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`,LogoutButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #2d3748;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  text-align: left;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`},"./src/components/navigation/TopNavBar2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router/dist/index.js"),_SideBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation/SideBar.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const NavBarContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
  padding: 0 16px;
`,DrawerButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }

`,Logo=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img`
  width: 116px;
  margin-right: 16px;
`,MenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`,MenuButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  color: ${props=>props.active?"blue":"black"};
  border-bottom: ${props=>props.active?"2px solid blue":"none"};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`,HeaderIcons=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`,SignInButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding: 8px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:focus {
    transform: translateY(2px);
  }
`,TopNavBar2=_ref=>{let{menuItems,activeTab:propActiveTab,onTabClick}=_ref;const[activeTab,setActiveTab]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propActiveTab),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Zp)(),[isSideNavOpen,setIsSideNavOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleSideNav=()=>setIsSideNavOpen((prev=>!prev));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setActiveTab(propActiveTab)}),[propActiveTab]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBarContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerButton,{onClick:toggleSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.MenuIcon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Logo,{src:"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993",alt:"Closca Logo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuContainer,null,menuItems.map((item=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuButton,{key:item,onClick:()=>(item=>{setActiveTab(item),onTabClick&&onTabClick(item)})(item),active:item===activeTab},item)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderIcons,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton,{onClick:()=>{navigate("/login")}},"Sign In"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_1__.A,{navLinks:[{Icon:()=>{},isFooter:!1,name:"Home",path:"/home"},{Icon:()=>{},isFooter:!1,name:"About",path:"/about"},{Icon:()=>{},isFooter:!0,name:"Settings",path:"/settings"},{Icon:()=>{},isFooter:!0,name:"Contact",path:"/contact"}],isSideNavOpen,toggleSideNav,closeSideNav:()=>setIsSideNavOpen(!1),hideProfile:!1,onLogout:()=>{},profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",signInColor:"#ff4500",username:"Jane Doe"}))};TopNavBar2.defaultProps={activeTab:"",onTabClick:null};const __WEBPACK_DEFAULT_EXPORT__=TopNavBar2}}]);
//# sourceMappingURL=stories-portfolio-views-PortfolioMainSlider-stories.400fb71b.iframe.bundle.js.map