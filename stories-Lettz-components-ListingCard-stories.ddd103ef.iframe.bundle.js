"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[680,6337],{"./src/stories/Lettz/components/ListingCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ManagingMode:()=>ManagingMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListingCard_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),ImageCarousel2=__webpack_require__("./src/components/atoms/carousels/ImageCarousel2.jsx");const CardContainer=styled_components_browser_esm.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`,StyledLink=(0,styled_components_browser_esm.default)(dist.Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`,CardContent=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,ImageWrapper=styled_components_browser_esm.default.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4; /* Set desired aspect ratio here */
  overflow: hidden;

  /* Ensure that ImageCarousel2 fills the wrapper */
  .swiper-wrapper {
    height: 100%;
  }
`,RentBadge=styled_components_browser_esm.default.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,DateRangeBadge=styled_components_browser_esm.default.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,TextContainer=styled_components_browser_esm.default.div`
  display: flex;
  padding: 0.75rem;
  background-color: #ffffff;
  align-items: center;
  flex-grow: 1;
`,ProfilePicture=styled_components_browser_esm.default.div`
  flex: 0 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  transition: transform 0.3s ease;

`,ProfileImage=styled_components_browser_esm.default.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`,InfoContainer=styled_components_browser_esm.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,TitleText=styled_components_browser_esm.default.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.2rem;
`,LocationText=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #666;
  gap: 0.1rem; /* Space between icon and text */
`,LocationIconStyled=(0,styled_components_browser_esm.default)(Icons.LocationIcon)`
  width: 25px;
  height: 25px;
`,ManagingOverlay=styled_components_browser_esm.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  z-index: 20;
  padding: 1rem;
`,OverlayButtonsContainer=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between buttons */
  width: 100%;
  max-width: 90%;
`,UpdateButton=styled_components_browser_esm.default.button.attrs({"aria-label":"Update Listing"})`
  display: flex;
  align-items: center;
  background-color: #ffffff; /* White background */
  color: #3b82f6; /* Blue text */
  padding: 0.75rem 1rem;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #3b82f6;

  &:hover {
    background-color: #3b82f6; /* Blue background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Blue focus ring */
  }
`,RemoveButton=styled_components_browser_esm.default.button.attrs({"aria-label":"Remove Listing"})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* White background */
  color: #ef4444; /* Red text */
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #ef4444;

  &:hover {
    background-color: #ef4444; /* Red background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5); /* Red focus ring */
  }
`,ListingCard=_ref=>{let{data,isManaging,onUpdate,onRemove}=_ref;const{id,images,city,county,title,rent,startDate,endDate,photoURL}=data,dateRange=startDate&&endDate?`${startDate} - ${endDate}`:"Available Anytime",imageList=images&&images.length>0?images:["https://via.placeholder.com/600x600?text=No+Image+Available"],profileImage=photoURL||"https://via.placeholder.com/150?text=Profile",content=react.createElement(CardContent,null,react.createElement(ImageWrapper,null,react.createElement(ImageCarousel2.A,{images:imageList}),void 0!==rent&&react.createElement(RentBadge,null,react.createElement(Icons.MoneyIcon2,{className:"w-6 h-6 mr-2"}),"€",rent),(startDate||endDate)&&react.createElement(DateRangeBadge,null,react.createElement(Icons.CalendarIcon,{className:"w-6 h-6 mr-2"}),dateRange)),react.createElement(TextContainer,null,react.createElement(ProfilePicture,null,react.createElement(ProfileImage,{src:profileImage,alt:"Profile"})),react.createElement(InfoContainer,null,react.createElement(TitleText,null,title||"Title Unavailable"),react.createElement(LocationText,null,react.createElement(LocationIconStyled,{className:"w-5 h-5"}),city,", ",county))),isManaging&&react.createElement(ManagingOverlay,null,react.createElement(OverlayButtonsContainer,null,react.createElement(UpdateButton,{onClick:()=>onUpdate(data)},react.createElement(Icons.EditIcon,{className:"w-5 h-5 mr-2"}),"Update"),react.createElement(RemoveButton,{onClick:()=>onRemove(id)},react.createElement(Icons.TrashIcon,{className:"w-5 h-5 mr-2"}),"Remove"))));return react.createElement(CardContainer,null,isManaging?content:react.createElement(StyledLink,{to:`/rooms/${id}`},content))};ListingCard.defaultProps={isManaging:!1,onUpdate:()=>{},onRemove:()=>{}};const components_ListingCard=ListingCard,ListingCard_stories={title:"Projects/Lettz/Components/ListingCard",tags:["autodocs"],component:components_ListingCard,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `ListingCard` component is a versatile card component for showcasing property listings. It includes features like a title, location, price, date range, image carousel, and management options.\n\n### Features\n- **Image Carousel**: Displays property images in a carousel format.\n- **Dynamic Badges**: Shows rent price and availability dates.\n- **Management Mode**: Allows updating or removing listings when in management mode.\n- **Responsive Design**: Optimized for both desktop and mobile devices.\n\n### Usage\n\n```jsx\nimport React from "react";\nimport ListingCard from "../components/cards/ListingCard";\n\nconst ExampleComponent = () => {\n  const listingData = {\n    id: "12345",\n    images: [\n      "https://via.placeholder.com/600x400?text=Image+1",\n      "https://via.placeholder.com/600x400?text=Image+2",\n    ],\n    city: "Dublin",\n    county: "Ireland",\n    title: "Cozy Apartment in the City",\n    rent: 1200,\n    startDate: "2024-01-01",\n    endDate: "2024-06-30",\n    photoURL: "https://via.placeholder.com/150?text=Profile",\n  };\n\n  const handleUpdate = (data) => {\n    console.log("Update listing:", data);\n  };\n\n  const handleRemove = (id) => {\n    console.log("Remove listing with ID:", id);\n  };\n\n  return (\n    <ListingCard\n      data={listingData}\n      isManaging={true}\n      onUpdate={handleUpdate}\n      onRemove={handleRemove}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **data**: Object containing listing details:\n  - **id**: Unique identifier for the listing.\n  - **images**: Array of image URLs for the property.\n  - **city**: City where the property is located.\n  - **county**: County or region of the property.\n  - **title**: Title or description of the listing.\n  - **rent**: Monthly rent price (number).\n  - **startDate**: Start date of availability (string).\n  - **endDate**: End date of availability (string).\n  - **photoURL**: URL for the profile image of the property owner.\n- **isManaging**: Boolean to toggle management mode (default: false).\n- **onUpdate**: Callback function triggered when the update button is clicked.\n- **onRemove**: Callback function triggered when the remove button is clicked.\n        '}}},argTypes:{data:{control:"object"},isManaging:{control:"boolean"},onUpdate:{action:"update clicked"},onRemove:{action:"remove clicked"}}},Template=args=>react.createElement(dist.BrowserRouter,null,react.createElement(components_ListingCard,args)),Default=Template.bind({});Default.args={data:{id:"12345",images:["https://via.placeholder.com/600x400?text=Image+1","https://via.placeholder.com/600x400?text=Image+2"],city:"Dublin",county:"Ireland",title:"Cozy Apartment in the City",rent:1200,startDate:"2024-01-01",endDate:"2024-06-30",photoURL:"https://via.placeholder.com/150?text=Profile"},isManaging:!1};const ManagingMode=Template.bind({});ManagingMode.args={data:{id:"67890",images:["https://via.placeholder.com/600x400?text=Image+1","https://via.placeholder.com/600x400?text=Image+2"],city:"Cork",county:"Ireland",title:"Spacious Home near the Beach",rent:1500,startDate:"2024-02-01",endDate:"2024-08-31",photoURL:"https://via.placeholder.com/150?text=Profile"},isManaging:!0};const __namedExportsOrder=["Default","ManagingMode"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter><ListingCard {...args} /></BrowserRouter>",...Default.parameters?.docs?.source}}},ManagingMode.parameters={...ManagingMode.parameters,docs:{...ManagingMode.parameters?.docs,source:{originalSource:"args => <BrowserRouter><ListingCard {...args} /></BrowserRouter>",...ManagingMode.parameters?.docs?.source}}}},"./src/components/atoms/carousels/ImageCarousel2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),swiper_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swiper/swiper-react.mjs"),swiper_modules__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/swiper/modules/pagination.css"),__webpack_require__("./node_modules/swiper/modules/index.mjs"));const ImageContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
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
//# sourceMappingURL=stories-Lettz-components-ListingCard-stories.ddd103ef.iframe.bundle.js.map