"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1392],{"./src/stories/atoms/inputs/CustomFileUpload.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLabel:()=>CustomLabel,Default:()=>Default,WithoutLabel:()=>WithoutLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CustomFileUpload_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const inputs_CustomFileUpload=_ref=>{let{label,onUpload}=_ref;return react.createElement(FileUploadContainer,null,react.createElement("label",null,label),react.createElement("input",{type:"file",onChange:e=>{const file=e.target.files[0];if(file){const fileUrl=URL.createObjectURL(file);onUpload(fileUrl)}}}))},FileUploadContainer=styled_components_browser_esm.default.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`,CustomFileUpload_stories={title:"Atoms/Inputs/CustomFileUpload",component:inputs_CustomFileUpload,parameters:{docs:{description:{component:"\nThe `CustomFileUpload` component is a styled file input component that allows users to upload files with ease. It supports custom labels and handles file upload events, making it a flexible solution for forms and file management interfaces.\n\n### Features\n- **Customizable Label**: Set a custom label to guide users during file selection.\n- **File Upload Event**: Triggers an event upon file selection, allowing for further handling in the parent component.\n- **Flexible Design**: Can be styled and adjusted to fit various UI requirements.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport CustomFileUpload from './components/CustomFileUpload';\n\nconst ExampleComponent = () => (\n  <CustomFileUpload label=\"Upload a file:\" onUpload={(file) => console.log('File uploaded:', file)} />\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{label:{control:"text",description:"Label for the file upload input."},onUpload:{action:"file uploaded",description:"Event triggered when a file is uploaded."}}},Template=args=>react.createElement(inputs_CustomFileUpload,args),Default=Template.bind({});Default.args={label:"Upload a file:"};const CustomLabel=Template.bind({});CustomLabel.args={label:"Choose your file:"};const WithoutLabel=Template.bind({});WithoutLabel.args={label:""};const __namedExportsOrder=["Default","CustomLabel","WithoutLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CustomFileUpload {...args} />",...Default.parameters?.docs?.source}}},CustomLabel.parameters={...CustomLabel.parameters,docs:{...CustomLabel.parameters?.docs,source:{originalSource:"args => <CustomFileUpload {...args} />",...CustomLabel.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"args => <CustomFileUpload {...args} />",...WithoutLabel.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-inputs-CustomFileUpload-stories.c3fae396.iframe.bundle.js.map