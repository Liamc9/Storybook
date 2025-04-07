"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5384,8809],{"./src/stories/pages/account/SettingsTemplate.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SettingsTemplate_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js");const Page=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
`,Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb; /* light tailwind-gray */
`,BackButton=styled_components_browser_esm.Ay.button`
  position: absolute;
  left: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`,Title=styled_components_browser_esm.Ay.h1`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
`,account_SettingsTemplate=_ref=>{let{headerTitle="Page Title",settings=[]}=_ref;const navigate=(0,dist.Zp)(),groupedSettings=settings.reduce(((acc,setting)=>(acc[setting.category]||(acc[setting.category]=[]),acc[setting.category].push(setting),acc)),{});return react.createElement(Page,null,react.createElement(Header,null,react.createElement(BackButton,{onClick:()=>navigate(-1)},react.createElement(fi.irw,{size:24})),react.createElement(Title,null,headerTitle)),Object.keys(groupedSettings).map(((category,idx)=>react.createElement(index_es.G1x,{key:idx,category,items:groupedSettings[category]}))))};var Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SettingsTemplate_stories={title:"Pages/Account/SettingsTemplate",component:account_SettingsTemplate,tags:["pages","autodocs"],decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))]},Default=(args=>react.createElement(account_SettingsTemplate,args)).bind({});Default.args={headerTitle:"Settings",settings:[{category:"Account",icon:Icons.UserIcon2,text:"Manage Account",link:"/account-info"},{category:"Account",icon:Icons.MoneyIcon,text:"Manage Billing",link:"/billing"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Privacy and Security",link:"/privacy-settings"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Notifications",link:"/notifications"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Communication",link:"/communication"},{category:"Help",icon:Icons.NotificationsIcon,text:"Help & FAQs",link:"/help"},{category:"Help",icon:Icons.NotificationsIcon,text:"About Us",link:"/about-us"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SettingsTemplate {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-account-SettingsTemplate-stories.10e6767e.iframe.bundle.js.map