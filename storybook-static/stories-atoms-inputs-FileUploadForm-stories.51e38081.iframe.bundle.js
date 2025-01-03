"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2211],{"./src/stories/atoms/inputs/FileUploadForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileUploadForm_stories});var react=__webpack_require__("./node_modules/react/index.js");const inputs_FileUpload=_ref=>{let{onFileUpload}=_ref;const[selectedFile,setSelectedFile]=(0,react.useState)(null);return react.createElement("div",{className:"flex flex-col items-center justify-center"},react.createElement("label",{htmlFor:"file",className:"cursor-pointer bg-gray-100 p-8 rounded-2xl border-2 border-dashed border-gray-600 shadow-xl hover:bg-gray-200 transition-all duration-300"},react.createElement("div",{className:"flex flex-col items-center justify-center gap-2"},selectedFile?react.createElement(react.Fragment,null,react.createElement("img",{src:URL.createObjectURL(selectedFile),alt:"Selected",className:"h-24 w-24 object-cover mb-4 rounded-lg"}),react.createElement("p",{className:"text-gray-600"},"File Selected: ",selectedFile.name)):react.createElement(react.Fragment,null,react.createElement("svg",{viewBox:"0 0 640 512",className:"h-12 w-12 text-gray-700 mb-5 fill-current"},react.createElement("path",{d:"M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"})),react.createElement("p",{className:"text-gray-600"},"Drag and Drop"),react.createElement("p",{className:"text-gray-600"},"or"),react.createElement("span",{className:"bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-900"},"Browse file"))),react.createElement("input",{id:"file",type:"file",onChange:event=>{const file=event.target.files[0];file&&(setSelectedFile(file),onFileUpload&&onFileUpload(file))},className:"hidden"})))},FileUploadForm_stories={title:"Atoms/Inputs/FileUpload",component:inputs_FileUpload,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `FileUpload` component provides a simple and user-friendly way for users to upload files. It is suitable for use in forms and file management interfaces where file input is required.\n\n### Features\n- **File Upload Handling**: Supports an event for handling file uploads, enabling integration with custom logic.\n- **Simple Design**: A straightforward file input component that can be easily customized.\n- **Reusable**: Adaptable for use in various forms or pages needing file input functionality.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport FileUpload from './components/FileUpload';\n\nconst ExampleComponent = () => (\n  <FileUpload onFileUpload={(file) => console.log('File uploaded:', file)} />\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{onFileUpload:{action:"file-uploaded",description:"Event triggered when a file is uploaded."}}},Default=(args=>react.createElement(inputs_FileUpload,args)).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <FileUpload {...args} />",...Default.parameters?.docs?.source}}}}}]);