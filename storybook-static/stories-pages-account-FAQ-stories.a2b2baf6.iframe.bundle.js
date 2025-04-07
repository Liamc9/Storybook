"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7764],{"./src/stories/pages/account/FAQ.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FAQ_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs");const FAQContainer=styled_components_browser_esm.Ay.div`
  max-width: 600px;
  margin: auto;
  padding: 24px;
  font-family: Arial, sans-serif;
`,Header=styled_components_browser_esm.Ay.div`
  margin-bottom: 24px;
`,Title=styled_components_browser_esm.Ay.h2`
  font-size: 24px;
  margin-bottom: 8px;
`,Subtitle=styled_components_browser_esm.Ay.p`
  color: #555;
`,FAQItem=styled_components_browser_esm.Ay.div`
  border-bottom: 1px solid #eaeaea;
  padding: 16px 0;
`,FAQTitle=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`,FAQContent=styled_components_browser_esm.Ay.div`
  margin-top: 12px;
  padding-left: 8px;
  color: #555;
`,FAQs=[{category:"Returns",questions:["What is Nike's return policy?","How do I return my Nike order?","Where is my refund?"]},{category:"Dispatch & Delivery",questions:[]},{category:"Orders & Payment",questions:[]},{category:"Shopping",questions:[]},{category:"Nike Membership & Apps",questions:[]},{category:"Company Info",questions:[]}],account_FAQ=()=>{const[openIndex,setOpenIndex]=(0,react.useState)(null);return react.createElement(FAQContainer,null,react.createElement(Header,null,react.createElement(Title,null,"Frequently Asked Questions"),react.createElement(Subtitle,null,"Answers to our most frequently asked questions are just one click away.")),FAQs.map(((faq,index)=>react.createElement(FAQItem,{key:index},react.createElement(FAQTitle,{onClick:()=>(index=>{setOpenIndex(openIndex===index?null:index)})(index)},faq.category,openIndex===index?react.createElement(fi.wAb,null):react.createElement(fi.fK4,null)),openIndex===index&&faq.questions.length>0&&react.createElement(FAQContent,null,faq.questions.map(((question,qIndex)=>react.createElement("div",{key:qIndex},question))),react.createElement("div",{style:{marginTop:"8px",fontWeight:"bold",cursor:"pointer"}},"View all"))))))};var dist=__webpack_require__("./node_modules/react-router/dist/index.js");const FAQ_stories={title:"Pages/Account/FAQ",component:account_FAQ,tags:["pages","autodocs"]},Default=()=>react.createElement(dist.fS,null,react.createElement(account_FAQ,null)),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <MemoryRouter><FAQ /></MemoryRouter>",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-account-FAQ-stories.a2b2baf6.iframe.bundle.js.map