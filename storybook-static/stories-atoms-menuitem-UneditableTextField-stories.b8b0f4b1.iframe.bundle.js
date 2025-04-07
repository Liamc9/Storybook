"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2959],{"./src/stories/atoms/menuitem/UneditableTextField.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Email:()=>Email,Phone:()=>Phone,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UneditableTextField_stories});var react=__webpack_require__("./node_modules/react/index.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FieldContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff; /* Background for the field */
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9fafb; /* Slightly darker hover background equivalent to hover:bg-gray-50 */
  }
`,IconWrapper=styled_components_browser_esm.Ay.div`
  margin-right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280; /* Equivalent to text-gray-500 */
`,TextWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,FieldName=styled_components_browser_esm.Ay.div`
  font-size: 12px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,FieldValue=styled_components_browser_esm.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Equivalent to text-gray-900 */
`,menuitem_UneditableTextField=_ref=>{let{icon:IconComponent,name,value}=_ref;return react.createElement(FieldContainer,null,IconComponent&&react.createElement(IconWrapper,null,react.createElement(IconComponent,null)),react.createElement(TextWrapper,null,react.createElement(FieldName,null,name),react.createElement(FieldValue,null,value)))},UneditableTextField_stories={title:"Atoms/MenuItem/UneditableTextField",component:menuitem_UneditableTextField,tags:["atoms","autodocs"],parameters:{docs:{description:{component:'\n# UneditableTextField Component\n\nThe `UneditableTextField` component is used to display static information with an icon, a field name, and its corresponding value. \n\n### Props\n- `icon`: A React component for the icon, such as from `react-icons`.\n- `name`: A string representing the field name (e.g., "Email").\n- `value`: A string representing the field value (e.g., "example@example.com").\n\n### Example Usage\n\n```jsx\nimport { UserIcon2 } from \'react-icons/fa\';\nimport UneditableTextField from \'./UneditableTextField\';\n\n<UneditableTextField \n  icon={UserIcon2} \n  name="Username" \n  value="John Doe" \n/>;\n```\n\nThis component is suitable for profile pages, read-only forms, or any static display of user data.\n        '}}}},Template=args=>react.createElement(menuitem_UneditableTextField,args),Default=Template.bind({});Default.args={icon:Icons.UserIcon2,name:"Username",value:"John Doe"};const Email=Template.bind({});Email.args={icon:Icons.MailIcon,name:"Email",value:"example@example.com"};const Phone=Template.bind({});Phone.args={icon:Icons.PhoneIcon,name:"Phone Number",value:"+1234567890"};const __namedExportsOrder=["Default","Email","Phone"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <UneditableTextField {...args} />",...Default.parameters?.docs?.source}}},Email.parameters={...Email.parameters,docs:{...Email.parameters?.docs,source:{originalSource:"args => <UneditableTextField {...args} />",...Email.parameters?.docs?.source}}},Phone.parameters={...Phone.parameters,docs:{...Phone.parameters?.docs,source:{originalSource:"args => <UneditableTextField {...args} />",...Phone.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-menuitem-UneditableTextField-stories.b8b0f4b1.iframe.bundle.js.map