"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3910],{"./src/stories/molecules/stackedlist/StackedList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),_components_molecules_stackedlist_StackedList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/stackedlist/StackedList.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/StackedList/StackedList",component:_components_molecules_stackedlist_StackedList__WEBPACK_IMPORTED_MODULE_1__.A,tags:["molecules","autodocs"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.fS,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))],parameters:{docs:{description:{component:"\n# StackedList Component\n\nThe `StackedList` component is used to group a category of settings items. It displays a category title followed by a list of `MenuItem` components.\n\n## Usage\n\n```jsx\nimport { UsersIcon, NotificationsIcon } from './icons/Icons';\n\n<StackedList \n  category=\"Profile Settings\" \n  items={[\n    { icon: UsersIcon, text: 'Account Info', link: '/account-info' },\n    { icon: NotificationsIcon, text: 'Privacy Settings', link: '/privacy-settings' },\n  ]}\n/>\n```\n"}}}},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_molecules_stackedlist_StackedList__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Default.args={category:"Profile Settings",items:[{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UsersIcon,text:"Account Info",link:"/account-info"},{icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.NotificationsIcon,text:"Privacy Settings",link:"/privacy-settings"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <StackedList {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/MenuItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)`
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
//# sourceMappingURL=stories-molecules-stackedlist-StackedList-stories.dc190b72.iframe.bundle.js.map