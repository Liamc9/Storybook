"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3077],{"./src/stories/atoms/menuitem/MenuItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_menuitem_MenuItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/menuitem/MenuItem.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/MenuItem/MenuItem",component:_components_atoms_menuitem_MenuItem__WEBPACK_IMPORTED_MODULE_1__.A,tags:["atoms","autodocs"],parameters:{docs:{description:{component:'\n# MenuItem\n\nThe `MenuItem` component is used to render a menu item with an optional icon (from the icons file) and a navigation link.\n\n## Usage\n\n```jsx\nimport MenuItem from \'./MenuItem\';\nimport { UsersIcon } from \'./icons/Icons\';\n\n<MenuItem text="Profile" link="/profile" />;\n<MenuItem\n  text="Notifications"\n  icon={UsersIcon}\n  link="/notifications"\n/>;\n```\n\n## Props\n\n- `icon` (optional): A React component from the icons file.\n- `text` (required): A string that represents the menu item\'s text.\n- `link` (required): A string that specifies the navigation link.\n\n## Stories\n\n### Default\n\nA basic menu item with text and a link.\n\n### With Icon\n\nA menu item that includes an optional icon along with text and a link.\n        '}}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_menuitem_MenuItem__WEBPACK_IMPORTED_MODULE_1__.A,args)),Default=Template.bind({});Default.args={text:"Profile",icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UsersIcon,link:"/profile"};const WithIcon=Template.bind({});WithIcon.args={text:"Notifications",icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.NotificationsIcon,link:"/notifications"};const __namedExportsOrder=["Default","WithIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BrowserRouter>\r\n    <MenuItem {...args} />\r\n  </BrowserRouter>",...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"args => <BrowserRouter>\r\n    <MenuItem {...args} />\r\n  </BrowserRouter>",...WithIcon.parameters?.docs?.source}}}},"./src/components/atoms/menuitem/MenuItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.N_)`
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
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  .svg {
    width: 100%;
    height: 100%;
  }
`,TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
`,IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{icon:IconComponent,text,link}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:link},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextWrapper,null,IconComponent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{className:"svg"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,text)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon,null)))}}}]);
//# sourceMappingURL=stories-atoms-menuitem-MenuItem-stories.b2192661.iframe.bundle.js.map