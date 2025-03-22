"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1480],{"./src/stories/form/inputs/fileInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultFileInput:()=>DefaultFileInput,DefaultFileInput2:()=>DefaultFileInput2,ImageFileInput:()=>ImageFileInput,ImageFileInput2:()=>ImageFileInput2,MultipleFilesFileInput:()=>MultipleFilesFileInput,MultipleFilesFileInput2:()=>MultipleFilesFileInput2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>fileInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const FileInputWrapper=styled_components_browser_esm.default.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,StyledLabel=styled_components_browser_esm.default.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledInput=styled_components_browser_esm.default.input`
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
`,fileInputs_FileInput=_ref=>{let{label,...props}=_ref;return react.createElement(FileInputWrapper,{gridSpan:props.gridSpan},label&&react.createElement(StyledLabel,{htmlFor:props.id},label),react.createElement(StyledInput,_extends({type:"file"},props)))};function FileInput2_extends(){return FileInput2_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},FileInput2_extends.apply(null,arguments)}const StyledWrapper=styled_components_browser_esm.default.div`
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
  }`,fileInputs_FileInput2=_ref=>{let{...props}=_ref;return react.createElement(StyledWrapper,{gridSpan:props.gridSpan},react.createElement("label",{className:"custum-file-upload",htmlFor:props.id},react.createElement("div",{className:"icon"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:!0,viewBox:"0 0 24 24"},react.createElement("g",{strokeWidth:0,id:"SVGRepo_bgCarrier"}),react.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),react.createElement("g",{id:"SVGRepo_iconCarrier"}," ",react.createElement("path",{fill:!0,d:"M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z",clipRule:"evenodd",fillRule:"evenodd"})," "))),react.createElement("div",{className:"text"},react.createElement("span",null,"Click to upload image")),react.createElement("input",FileInput2_extends({type:"file"},props))))};function fileInput_stories_extends(){return fileInput_stories_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},fileInput_stories_extends.apply(null,arguments)}const fileInput_stories={title:"Form/Inputs/FileInput",component:fileInputs_FileInput,subcomponents:{FileInput2:fileInputs_FileInput2},argTypes:{label:{control:"text",description:"Label for the file input",defaultValue:"Upload File"},id:{control:"text",description:"Unique ID for the file input",defaultValue:"file-input-default"},accept:{control:"text",description:"Comma-separated list of file types the server accepts",defaultValue:"*/*"},multiple:{control:"boolean",description:"Allows multiple file selection when true",defaultValue:!1},disabled:{control:"boolean",description:"Disables the file input when true",defaultValue:!1},onChange:{action:"file-changed"}}},imageFileTypes="image/png, image/jpeg, image/jpg, image/gif",TemplateFileInput=args=>{const[files,setFiles]=(0,react.useState)([]);return react.createElement("div",null,react.createElement(fileInputs_FileInput,fileInput_stories_extends({},args,{onChange:e=>{setFiles(Array.from(e.target.files))}})),react.createElement("div",null,react.createElement("h4",null,"Selected File(s):"),files.length>0?react.createElement("ul",null,files.map(((file,index)=>react.createElement("li",{key:index},file.name," - ",(file.size/1024).toFixed(2)," KB")))):react.createElement("p",null,"No files selected.")))},TemplateFileInput2=args=>{const[files,setFiles]=(0,react.useState)([]);return react.createElement("div",null,react.createElement(fileInputs_FileInput2,fileInput_stories_extends({},args,{onChange:e=>{setFiles(Array.from(e.target.files))}})),react.createElement("div",null,react.createElement("h4",null,"Selected File(s):"),files.length>0?react.createElement("ul",null,files.map(((file,index)=>react.createElement("li",{key:index},file.name," - ",(file.size/1024).toFixed(2)," KB")))):react.createElement("p",null,"No files selected.")))},DefaultFileInput=TemplateFileInput.bind({});DefaultFileInput.args={label:"Upload File",id:"file-input-default",accept:"*/*",multiple:!1,disabled:!1};const ImageFileInput=TemplateFileInput.bind({});ImageFileInput.args={label:"Upload Image",id:"file-input-image",accept:imageFileTypes,multiple:!1,disabled:!1};const MultipleFilesFileInput=TemplateFileInput.bind({});MultipleFilesFileInput.args={label:"Upload Multiple Files",id:"file-input-multiple",accept:"*/*",multiple:!0,disabled:!1};const DefaultFileInput2=TemplateFileInput2.bind({});DefaultFileInput2.args={id:"file-input2-default"};const ImageFileInput2=TemplateFileInput2.bind({});ImageFileInput2.args={id:"file-input2-image",accept:imageFileTypes};const MultipleFilesFileInput2=TemplateFileInput2.bind({});MultipleFilesFileInput2.args={id:"file-input2-multiple",accept:"*/*",multiple:!0};const __namedExportsOrder=["DefaultFileInput","ImageFileInput","MultipleFilesFileInput","DefaultFileInput2","ImageFileInput2","MultipleFilesFileInput2"];DefaultFileInput.parameters={...DefaultFileInput.parameters,docs:{...DefaultFileInput.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...DefaultFileInput.parameters?.docs?.source}}},ImageFileInput.parameters={...ImageFileInput.parameters,docs:{...ImageFileInput.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...ImageFileInput.parameters?.docs?.source}}},MultipleFilesFileInput.parameters={...MultipleFilesFileInput.parameters,docs:{...MultipleFilesFileInput.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...MultipleFilesFileInput.parameters?.docs?.source}}},DefaultFileInput2.parameters={...DefaultFileInput2.parameters,docs:{...DefaultFileInput2.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput2 {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...DefaultFileInput2.parameters?.docs?.source}}},ImageFileInput2.parameters={...ImageFileInput2.parameters,docs:{...ImageFileInput2.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput2 {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...ImageFileInput2.parameters?.docs?.source}}},MultipleFilesFileInput2.parameters={...MultipleFilesFileInput2.parameters,docs:{...MultipleFilesFileInput2.parameters?.docs,source:{originalSource:"args => {\n  const [files, setFiles] = useState([]);\n  const handleChange = e => {\n    setFiles(Array.from(e.target.files));\n  };\n  return <div>\r\n      <FileInput2 {...args} onChange={handleChange} />\r\n      <div>\r\n        <h4>Selected File(s):</h4>\r\n        {files.length > 0 ? <ul>\r\n            {files.map((file, index) => <li key={index}>\r\n                {file.name} - {(file.size / 1024).toFixed(2)} KB\r\n              </li>)}\r\n          </ul> : <p>No files selected.</p>}\r\n      </div>\r\n    </div>;\n}",...MultipleFilesFileInput2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-form-inputs-fileInput-stories.a75e113f.iframe.bundle.js.map