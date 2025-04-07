"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3893,5384],{"./src/stories/pages/account/EditSettingsTemplate.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditSettingsTemplate_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs");const Page=styled_components_browser_esm.Ay.div`
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
`,Footer=styled_components_browser_esm.Ay.footer`
  margin-top: 24px;
`,SaveButton=styled_components_browser_esm.Ay.button`
  padding: 10px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: #2563eb;
  }
`,account_EditSettingsTemplate=_ref=>{let{headerTitle="Settings",sections=[],initialValues={},onSave}=_ref;const navigate=(0,dist.Zp)(),[formData,setFormData]=(0,react.useState)(initialValues),updateState=(fieldName,value)=>{setFormData((prev=>({...prev,[fieldName]:value})))};return react.createElement(Page,null,react.createElement(Header,null,react.createElement(BackButton,{onClick:()=>navigate(-1)},react.createElement(fi.irw,{size:24})),react.createElement(Title,null,headerTitle)),react.createElement("main",null,sections.map(((_ref2,idx)=>{let{title,fields}=_ref2;return react.createElement(index_es.Yy0,{key:idx,title,items:fields.map((_ref3=>{let{name,type,fieldName,options}=_ref3;return{type,props:{name,fieldName,currentState:formData[fieldName],value:formData[fieldName],options}}})),updateState})}))),react.createElement(Footer,null,react.createElement(SaveButton,{onClick:()=>{onSave?onSave(formData):(console.log("Form Data:",formData),alert("Changes saved!"))}},"Save Changes")))},EditSettingsTemplate_stories={title:"Pages/Account/EditSettingsTemplate",component:account_EditSettingsTemplate,decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))]},Default=(args=>react.createElement(account_EditSettingsTemplate,args)).bind({});Default.args={headerTitle:"Manage Notifications",initialValues:{field1:"Initial Value 1",field2:"Initial Value 2",name:"John Doe",gender:"Male",notifications:!0,toggleField:!1},sections:[{title:"Manage Notifications",fields:[{name:"Name",type:"EditableTextField",fieldName:"field1"},{name:"Category",type:"SelectField",fieldName:"field2",options:["Option 1","Option 2","Option 3"]},{name:"Enable Feature",type:"ToggleField",fieldName:"toggleField"}]},{title:"Settings",fields:[{name:"Full Name",type:"EditableTextField",fieldName:"name"},{name:"Gender",type:"SelectField",fieldName:"gender",options:["Male","Female"]},{name:"Notifications",type:"ToggleField",fieldName:"notifications"}]}],onSave:data=>{console.log("Saved data:",data),alert("Changes saved!")}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <EditSettingsTemplate {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-pages-account-EditSettingsTemplate-stories.061a5624.iframe.bundle.js.map