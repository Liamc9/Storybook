"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5384,5437],{"./src/stories/pages/account/Account.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Account_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const AccountContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to position footer at the bottom */
  padding: 2rem; /* Increased padding for larger layout */
`,ProfileSection=(0,styled_components_browser_esm.Ay)(react_router_dom_dist.N_)`
  display: flex;
  align-items: center;
  padding: 24px; /* Increased padding */
  background-color: #ffffff; /* White background */
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-decoration: none;
  color: inherit;
  margin-bottom: 2rem; /* Space below the profile section */
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`,ProfileImage=styled_components_browser_esm.Ay.div`
  width: 80px; /* Increased size */
  height: 80px; /* Increased size */
  border-radius: 50%;
  background-image: url(${props=>props.image||"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"});
  background-size: cover;
  background-position: center;
  margin-right: 24px; /* Increased margin */
`,ProfileInfo=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
`,ProfileName=styled_components_browser_esm.Ay.div`
  font-size: 1.5rem; /* Larger font size */
  font-weight: bold;
  color: #333;
`,ViewProfile=styled_components_browser_esm.Ay.div`
  font-size: 1rem; /* Increased font size */
  color: #666;
`,IconWrapper=styled_components_browser_esm.Ay.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  svg {
    width: 24px; /* Increased icon size */
    height: 24px;
    color: #666;
  }
`,LogoutButton=styled_components_browser_esm.Ay.button`
  background-color: #f3f4f6; /* Light gray */
  color: #dc2626; /* Red text */
  border: none;
  border-radius: 0.375rem; /* Rounded corners */
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%; /* Full width */
  text-align: center;

  &:hover {
    background-color: #e5e7eb; /* Slightly darker gray */
  }
`,Footer=styled_components_browser_esm.Ay.footer`
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 1.5rem 0; /* Increased padding */
  font-size: 1rem; /* Increased font size */
  color: #6b7280; /* Equivalent to text-gray-500 */
`,FooterLinks=styled_components_browser_esm.Ay.div`
  margin-top: 0.75rem; /* Increased margin */

  a {
    color: #2563eb; /* Equivalent to text-blue-600 */
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`,LoadingMessage=styled_components_browser_esm.Ay.div`
  padding: 16px;
  font-size: 1.25rem; /* Increased font size */
  color: #666;
  text-align: center;
`,account_Account=_ref=>{let{settings,logout,currentUser,userData}=_ref;const navigate=(0,dist.Zp)(),categories=settings.reduce(((acc,setting)=>(acc[setting.category]||(acc[setting.category]=[]),acc[setting.category].push(setting),acc)),{});return null===currentUser?(navigate("/login"),null):userData?react.createElement(AccountContainer,null,userData&&react.createElement(ProfileSection,{to:`/profile/${userData.id}`},react.createElement(ProfileImage,{image:userData.photoURL}),react.createElement(ProfileInfo,null,react.createElement(ProfileName,null,userData.displayName||"User Name"),react.createElement(ViewProfile,null,"View Profile")),react.createElement(IconWrapper,null,react.createElement(index_es.vKP,null))),Object.keys(categories).map(((category,index)=>react.createElement(index_es.G1x,{key:index,category,items:categories[category]}))),react.createElement(LogoutButton,{onClick:async()=>{try{await logout(),navigate("/login")}catch(error){console.error("Logout failed:",error)}}},"Log Out"),react.createElement(Footer,null,react.createElement("div",null,"Company Name"),react.createElement("div",null,"Version 1.0.0"),react.createElement(FooterLinks,null,react.createElement("a",{href:"/terms"},"Terms"),react.createElement("a",{href:"/policy"},"Policy")))):react.createElement(LoadingMessage,null,"Loading user data...")};var fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs");const Account_stories={title:"Pages/Account/Account",component:account_Account,decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))]},Default=(args=>react.createElement(account_Account,args)).bind({});Default.args={currentUser:{uid:"user123"},userData:{id:"user123",displayName:"Jane Doe",photoURL:"https://via.placeholder.com/80"},logout:()=>(console.log("Mock logout triggered"),Promise.resolve()),settings:[{category:"Account",icon:fa.VGZ,text:"Manage Account",link:"/account/manageaccount/user123"},{category:"Account",icon:fa.xM0,text:"Plans & Billing",link:"/account/plansandbilling/user123"},{category:"Preferences",icon:fi.zd,text:"Manage Notifications",link:"/account/managenotifications/user123"},{category:"Preferences",icon:fi.F5$,text:"Privacy & Security",link:"/account/privacyandsecurity/user123"},{category:"Help",icon:fi.lrG,text:"Help & FAQs",link:"/account/helpandfaqs"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Account {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-account-Account-stories.16bdcaaa.iframe.bundle.js.map