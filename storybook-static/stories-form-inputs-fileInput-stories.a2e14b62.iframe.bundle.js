"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1480],{"./src/stories/form/inputs/fileInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomFileUploadStory:()=>CustomFileUploadStory,DefaultFileInput:()=>DefaultFileInput,DefaultFileInput2:()=>DefaultFileInput2,DefaultFileUpload:()=>DefaultFileUpload,ImageFileInput:()=>ImageFileInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>fileInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FileInputWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,StyledLabel=styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledInput=styled_components_browser_esm.Ay.input`
  padding: 0.5rem 1rem;
  border: 2px dashed #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fafafa;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #6200ee;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,fileInputs_FileInput=_ref=>{let{...props}=_ref;return react.createElement(FileInputWrapper,{gridSpan:props.gridSpan},props.label&&react.createElement(StyledLabel,{htmlFor:props.id},props.label),react.createElement(StyledInput,_extends({type:"file"},props)))};function FileInput2_extends(){return FileInput2_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},FileInput2_extends.apply(null,arguments)}const StyledWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .custum-file-upload {
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
  }

  .custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .icon svg {
    height: 80px;
    fill: rgba(75, 85, 99, 1);
  }

  .custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .text span {
    font-weight: 400;
    color: rgba(75, 85, 99, 1);
  }

  .custum-file-upload input {
    display: none;
  }`,fileInputs_FileInput2=_ref=>{let{...props}=_ref;return react.createElement(StyledWrapper,{gridSpan:props.gridSpan},react.createElement("label",{className:"custum-file-upload",htmlFor:props.id},react.createElement("div",{className:"icon"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:!0,viewBox:"0 0 24 24"},react.createElement("g",{strokeWidth:0,id:"SVGRepo_bgCarrier"}),react.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),react.createElement("g",{id:"SVGRepo_iconCarrier"}," ",react.createElement("path",{fill:!0,d:"M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z",clipRule:"evenodd",fillRule:"evenodd"})," "))),react.createElement("div",{className:"text"},react.createElement("span",null,"Click to upload image")),react.createElement("input",FileInput2_extends({type:"file"},props))))},fileInputs_FileUpload=_ref=>{let{onFileUpload}=_ref;const[selectedFile,setSelectedFile]=(0,react.useState)(null);return react.createElement("div",{className:"flex flex-col items-center justify-center"},react.createElement("label",{htmlFor:"file",className:"cursor-pointer bg-gray-100 p-8 rounded-2xl border-2 border-dashed border-gray-600 shadow-xl hover:bg-gray-200 transition-all duration-300"},react.createElement("div",{className:"flex flex-col items-center justify-center gap-2"},selectedFile?react.createElement(react.Fragment,null,react.createElement("img",{src:URL.createObjectURL(selectedFile),alt:"Selected",className:"h-24 w-24 object-cover mb-4 rounded-lg"}),react.createElement("p",{className:"text-gray-600"},"File Selected: ",selectedFile.name)):react.createElement(react.Fragment,null,react.createElement("svg",{viewBox:"0 0 640 512",className:"h-12 w-12 text-gray-700 mb-5 fill-current"},react.createElement("path",{d:"M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"})),react.createElement("p",{className:"text-gray-600"},"Drag and Drop"),react.createElement("p",{className:"text-gray-600"},"or"),react.createElement("span",{className:"bg-gray-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-900"},"Browse file"))),react.createElement("input",{id:"file",type:"file",onChange:event=>{const file=event.target.files[0];file&&(setSelectedFile(file),onFileUpload&&onFileUpload(file))},className:"hidden"})))},fileInputs_CustomFileUpload=_ref=>{let{label,onUpload}=_ref;return react.createElement(FileUploadContainer,null,react.createElement("label",null,label),react.createElement("input",{type:"file",onChange:e=>{const file=e.target.files[0];if(file){const fileUrl=URL.createObjectURL(file);onUpload(fileUrl)}}}))},FileUploadContainer=styled_components_browser_esm.Ay.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`,fileInput_stories={title:"Form/Inputs/FileInput",argTypes:{label:{control:"text",description:"Label for the file input",defaultValue:"Upload File"},id:{control:"text",description:"Unique ID for the file input",defaultValue:"file-input-default"},accept:{control:"text",description:"Comma-separated list of file types the server accepts",defaultValue:"*/*"},multiple:{control:"boolean",description:"Allows multiple file selection when true",defaultValue:!1},disabled:{control:"boolean",description:"Disables the file input when true",defaultValue:!1},onChange:{action:"file-changed"}}},DefaultFileInput=args=>react.createElement(fileInputs_FileInput,args);DefaultFileInput.args={label:"Upload File",id:"file-input-default",accept:"*/*",multiple:!1,disabled:!1};const ImageFileInput=args=>react.createElement(fileInputs_FileInput,args);ImageFileInput.args={label:"Upload Image",id:"file-input-image",accept:"image/png, image/jpeg, image/jpg, image/gif",multiple:!1,disabled:!1};const DefaultFileInput2=args=>react.createElement(fileInputs_FileInput2,args);DefaultFileInput2.args={id:"file-input2-default"};const DefaultFileUpload=args=>react.createElement(fileInputs_FileUpload,args);DefaultFileUpload.args={label:"Upload File",id:"file-upload-default",accept:"*/*",multiple:!1,disabled:!1};const CustomFileUploadStory=args=>react.createElement(fileInputs_CustomFileUpload,args);CustomFileUploadStory.args={label:"Custom Upload",id:"custom-file-upload",accept:"*/*",multiple:!1,disabled:!1};const __namedExportsOrder=["DefaultFileInput","ImageFileInput","DefaultFileInput2","DefaultFileUpload","CustomFileUploadStory"];DefaultFileInput.parameters={...DefaultFileInput.parameters,docs:{...DefaultFileInput.parameters?.docs,source:{originalSource:"args => <FileInput {...args} />",...DefaultFileInput.parameters?.docs?.source}}},ImageFileInput.parameters={...ImageFileInput.parameters,docs:{...ImageFileInput.parameters?.docs,source:{originalSource:"args => <FileInput {...args} />",...ImageFileInput.parameters?.docs?.source}}},DefaultFileInput2.parameters={...DefaultFileInput2.parameters,docs:{...DefaultFileInput2.parameters?.docs,source:{originalSource:"args => <FileInput2 {...args} />",...DefaultFileInput2.parameters?.docs?.source}}},DefaultFileUpload.parameters={...DefaultFileUpload.parameters,docs:{...DefaultFileUpload.parameters?.docs,source:{originalSource:"args => <FileUpload {...args} />",...DefaultFileUpload.parameters?.docs?.source}}},CustomFileUploadStory.parameters={...CustomFileUploadStory.parameters,docs:{...CustomFileUploadStory.parameters?.docs,source:{originalSource:"args => <CustomFileUpload {...args} />",...CustomFileUploadStory.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-form-inputs-fileInput-stories.a2e14b62.iframe.bundle.js.map