"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5481],{"./src/stories/pages/account/ManagePaymentMethods.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ManagePaymentMethods_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs");const Button=styled_components_browser_esm.Ay.button`
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
`,ListItem=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`,PaymentMethodsList=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ListHeader=styled_components_browser_esm.Ay.h2`
  font-size: 20px;
  margin-bottom: 16px;
`,PaymentMethodsWrapper=styled_components_browser_esm.Ay.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,account_ManagePaymentMethods=_ref=>{let{paymentMethods,onAddPaymentMethod}=_ref;return react.createElement(PaymentMethodsWrapper,null,react.createElement(ListHeader,null,"Manage Payment Methods"),react.createElement(PaymentMethodsList,null,paymentMethods.map(((method,index)=>react.createElement(ListItem,{key:index},react.createElement("span",null,method.name),react.createElement(fi.fOo,{className:"w-6 h-6"}))))),react.createElement(Button,{onClick:onAddPaymentMethod},"Add Payment Method"))},ManagePaymentMethods_stories={title:"Pages/Account/ManagePaymentMethods",component:account_ManagePaymentMethods,tags:["autodocs","pages"],argTypes:{onAddPaymentMethod:{action:"Add Payment Method Clicked"}}},Default=(args=>react.createElement(account_ManagePaymentMethods,args)).bind({});Default.args={paymentMethods:[{name:"Visa **** 1234"},{name:"MasterCard **** 5678"},{name:"PayPal"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ManagePaymentMethods {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-account-ManagePaymentMethods-stories.e3ddacec.iframe.bundle.js.map