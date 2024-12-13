"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2829],{"./src/stories/pages/Settings.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Settings_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StackedList=__webpack_require__("./src/components/molecules/stackedlist/StackedList.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SettingsPage=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to position footer at the bottom */
  padding: 1rem;
`,Header=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Space below the header */
`,BackButton=styled_components_browser_esm.default.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem; /* Space between icon and header text */
`,HeaderTitle=styled_components_browser_esm.default.h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
`,LogoutButton=styled_components_browser_esm.default.button`
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
`,Footer=styled_components_browser_esm.default.footer`
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
`,FooterLinks=styled_components_browser_esm.default.div`
  margin-top: 0.5rem;

  a {
    color: #2563eb; /* Equivalent to text-blue-600 */
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`,pages_Settings=_ref=>{let{settings,onLogout}=_ref;const categories=settings.reduce(((acc,setting)=>(acc[setting.category]||(acc[setting.category]=[]),acc[setting.category].push(setting),acc)),{});return react.createElement(SettingsPage,null,react.createElement(Header,null,react.createElement(BackButton,{onClick:()=>console.log("Go back")},react.createElement(Icons.ChevronLeftIcon,{className:"w-6 h-6"})),react.createElement(HeaderTitle,null,"Settings")),Object.keys(categories).map(((category,index)=>react.createElement(StackedList.A,{key:index,category,items:categories[category]}))),react.createElement(LogoutButton,{onClick:onLogout},"Log Out"),react.createElement(Footer,null,react.createElement("div",null,"Company Name"),react.createElement("div",null,"Version 1.0.0"),react.createElement(FooterLinks,null,react.createElement("a",{href:"/terms"},"Terms"),react.createElement("a",{href:"/policy"},"Policy"))))},Settings_stories={title:"Pages/Settings",component:pages_Settings,tags:["pages","autodocs"],decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))],parameters:{docs:{description:{component:"\n# Settings Component\n\nThe `Settings` component renders a settings page where items are grouped by category using the `StackedList` component.\n\n## Props\n\n### `settings` (array of objects)\nAn array of setting items where each item has the following shape:\n- `category` (string): The category of the setting.\n- `icon` (React component): The icon component for the setting (imported from the `icons` file).\n- `text` (string): The text label for the setting.\n- `link` (string): The URL to navigate to when the setting is clicked.\n\n## Example Usage\n\n```jsx\nimport { UsersIcon, NotificationsIcon } from './icons/Icons';\n\n<Settings\n  settings={[\n    { category: 'Profile Settings', icon: UsersIcon, text: 'Account Info', link: '/account-info' },\n    { category: 'Profile Settings', icon: NotificationsIcon, text: 'Privacy Settings', link: '/privacy-settings' },\n    { category: 'Notifications', icon: NotificationsIcon, text: 'Email Notifications', link: '/email-notifications' },\n  ]}\n/>\n```\n        "}}}},Default=(args=>react.createElement(pages_Settings,args)).bind({});Default.args={settings:[{category:"Account",icon:Icons.UserIcon2,text:"Manage Account",link:"/account-info"},{category:"Account",icon:Icons.MoneyIcon,text:"Manage Billing",link:"/account-info"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Privacy and Security",link:"/privacy-settings"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Notifications",link:"/email-notifications"},{category:"Preferences",icon:Icons.NotificationsIcon,text:"Communication",link:"/email-notifications"},{category:"Help",icon:Icons.NotificationsIcon,text:"Help & FAQs",link:"/email-notifications"},{category:"Help",icon:Icons.NotificationsIcon,text:"About Us",link:"/email-notifications"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Settings {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/MenuItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f3f3; /* Equivalent to hover:bg-gray-100 */
  }
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`,TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
`,IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{icon:IconComponent,text,link}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:link},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextWrapper,null,IconComponent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,text)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon,null)))}},"./src/components/molecules/stackedlist/StackedList.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_atoms_menuitem_MenuItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/MenuItem.jsx");const CategoryWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`,CategoryTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`,ItemsContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{category,items}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoryTitle,null,category),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemsContainer,null,items.map(((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_menuitem_MenuItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:index,icon:item.icon,text:item.text,link:item.link})))))}}}]);
//# sourceMappingURL=stories-pages-Settings-stories.20cf5d5e.iframe.bundle.js.map