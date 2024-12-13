"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7835],{"./src/stories/pages/ManagePaymentMethods.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ManagePaymentMethods_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const Button=styled_components_browser_esm.default.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`,ListItem=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`,PaymentMethodsList=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ListHeader=styled_components_browser_esm.default.h2`
  font-size: 20px;
  margin-bottom: 16px;
`,PaymentMethodsWrapper=styled_components_browser_esm.default.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,pages_ManagePaymentMethods=_ref=>{let{paymentMethods,onAddPaymentMethod}=_ref;return react.createElement(PaymentMethodsWrapper,null,react.createElement(ListHeader,null,"Manage Payment Methods"),react.createElement(PaymentMethodsList,null,paymentMethods.map(((method,index)=>react.createElement(ListItem,{key:index},react.createElement("span",null,method.name),react.createElement(Icons.ChevronRightIcon,{className:"w-6 h-6"}))))),react.createElement(Button,{onClick:onAddPaymentMethod},"Add Payment Method"))},ManagePaymentMethods_stories={title:"Pages/ManagePaymentMethods",component:pages_ManagePaymentMethods,tags:["autodocs","pages"],argTypes:{onAddPaymentMethod:{action:"Add Payment Method Clicked"}},parameters:{docs:{description:{component:"\n### ManagePaymentMethods Component\n\nThe **ManagePaymentMethods** component is used to display and manage the user's payment methods. It provides a list of current payment methods and an option to add new ones.\n\n#### Props\n\n- `paymentMethods` (array): List of payment methods, where each item is an object with a `name` property.\n- `onAddPaymentMethod` (function): Callback function triggered when the \"Add Payment Method\" button is clicked.\n\n#### Usage Example\n\n```jsx\nimport ManagePaymentMethods from 'path-to-component';\n\nconst paymentMethods = [\n  { name: 'Visa **** 1234' },\n  { name: 'MasterCard **** 5678' },\n  { name: 'PayPal' },\n];\n\n<ManagePaymentMethods\n  paymentMethods={paymentMethods}\n  onAddPaymentMethod={() => console.log('Add Payment Method Clicked')}\n/>;\n```\n"}}}},Default=(args=>react.createElement(pages_ManagePaymentMethods,args)).bind({});Default.args={paymentMethods:[{name:"Visa **** 1234"},{name:"MasterCard **** 5678"},{name:"PayPal"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ManagePaymentMethods {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-ManagePaymentMethods-stories.885a7426.iframe.bundle.js.map