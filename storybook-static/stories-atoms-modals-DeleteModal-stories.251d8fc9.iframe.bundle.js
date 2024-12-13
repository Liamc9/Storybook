"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3733],{"./src/stories/atoms/modals/DeleteModal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DeleteModal_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fadeIn=styled_components_browser_esm.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideDown=styled_components_browser_esm.keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Overlay=styled_components_browser_esm.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out forwards;
  z-index: 1000; /* Ensure it sits above other elements */
`,ModalContainer=styled_components_browser_esm.default.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`,ModalContent=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Icon=styled_components_browser_esm.default.svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444; /* Red color for the icon */
  margin-bottom: 1rem;
`,Title=styled_components_browser_esm.default.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,Message=styled_components_browser_esm.default.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`,ButtonContainer=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Button=styled_components_browser_esm.default.button`
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: medium;
  transition: all 0.3s ease-in;
  border: 2px solid;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,CancelButton=(0,styled_components_browser_esm.default)(Button)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;

  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`,ConfirmButton=(0,styled_components_browser_esm.default)(Button)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`,modals_DeleteModal=_ref=>{let{onCancel,onConfirm,title,message}=_ref;return react.useEffect((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),react_dom.createPortal(react.createElement(Overlay,null,react.createElement(ModalContainer,null,react.createElement(ModalContent,null,react.createElement(Icon,{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{clipRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",fillRule:"evenodd"})),react.createElement(Title,null,title||"Are you sure?"),react.createElement(Message,null,message||"Do you really want to continue? This process cannot be undone.")),react.createElement(ButtonContainer,null,react.createElement(CancelButton,{onClick:onCancel},"Cancel"),react.createElement(ConfirmButton,{onClick:onConfirm},"Confirm")))),document.getElementById("modal-root"))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DeleteModal_stories={title:"Atoms/Modals/Variations/DeleteModal",component:modals_DeleteModal,tags:["autodocs"],parameters:{docs:{description:{component:"\nThe `DeleteModal` component is a reusable modal dialog that prompts users for confirmation before performing potentially irreversible actions, such as deleting an item or account.\n\n### Features\n- **Customizable Content**: Title and message properties allow you to inform users about the specific action being confirmed.\n- **Action Handlers**: `onConfirm` and `onCancel` handlers for processing user actions.\n- **Accessible and User-Friendly**: Helps prevent accidental actions with a clear and concise UI.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport DeleteModal from './components/DeleteModal';\n\nconst ExampleComponent = () => {\n  const [isModalOpen, setIsModalOpen] = useState(false);\n\n  const handleCancel = () => {\n    console.log('Deletion cancelled');\n    setIsModalOpen(false);\n  };\n\n  const handleConfirm = () => {\n    console.log('Deletion confirmed');\n    setIsModalOpen(false);\n  };\n\n  return (\n    <>\n      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>\n      {isModalOpen && (\n        <DeleteModal\n          title=\"Delete Item\"\n          message=\"Are you sure you want to delete this item?\"\n          onCancel={handleCancel}\n          onConfirm={handleConfirm}\n        />\n      )}\n    </>\n  );\n};\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{title:{control:"text",description:"Title of the modal, informing the user about the action."},message:{control:"text",description:"Message providing additional context about the action."},onCancel:{action:"onCancel",description:"Triggered when the user clicks the Cancel button."},onConfirm:{action:"onConfirm",description:"Triggered when the user clicks the Confirm button."}}},Default=(args=>{const[isModalOpen,setIsModalOpen]=(0,react.useState)(!0);return react.createElement(react.Fragment,null,react.createElement("button",{onClick:()=>setIsModalOpen(!0)},"Open Modal"),isModalOpen&&react.createElement(modals_DeleteModal,_extends({},args,{onCancel:()=>{console.log("Deletion cancelled"),setIsModalOpen(!1)},onConfirm:()=>{console.log("Deletion confirmed"),setIsModalOpen(!1)}})))}).bind({});Default.args={title:"Delete Item",message:"Are you sure you want to delete this item?"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isModalOpen, setIsModalOpen] = useState(true);\n  const handleCancel = () => {\n    console.log("Deletion cancelled");\n    setIsModalOpen(false);\n  };\n  const handleConfirm = () => {\n    console.log("Deletion confirmed");\n    setIsModalOpen(false);\n  };\n  return <>\r\n      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>\r\n      {isModalOpen && <DeleteModal {...args} onCancel={handleCancel} onConfirm={handleConfirm} />}\r\n    </>;\n}',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-modals-DeleteModal-stories.251d8fc9.iframe.bundle.js.map