"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[706],{"./src/stories/atoms/modals/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_modals_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/modals/Modal.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Modals/Modal",component:_components_atoms_modals_Modal__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Modal` component is a reusable and customizable dialog box for displaying content overlaying the main page. It includes built-in features like animations, accessibility, and a close button.\n\n### Features\n\n- **Customizable Dimensions**: Set the height and width of the modal as needed.\n- **Animations**: Includes a fade-in and slide-in animation for smooth transitions.\n- **Accessibility**: Fully ARIA-compliant for screen readers.\n- **Click Outside to Close**: Clicking outside the modal closes it.\n- **Keyboard Navigation**: Supports closing via the `Escape` key.\n\n### Usage\n\n```jsx\nimport React, { useState } from "react";\nimport Modal from "./components/Modal";\n\nconst ExampleComponent = () => {\n  const [isModalOpen, setIsModalOpen] = useState(false);\n\n  const handleClose = () => {\n    setIsModalOpen(false);\n    console.log("Modal closed");\n  };\n\n  return (\n    <>\n      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>\n      <Modal\n        isModalOpen={isModalOpen}\n        closeModal={handleClose}\n        title="Example Modal"\n        animate\n      >\n        <p>This is the content of the modal. It can be anything you want!</p>\n      </Modal>\n    </>\n  );\n};\n\nexport default ExampleComponent;\n```\n        '}}},argTypes:{isModalOpen:{control:"boolean",description:"Controls whether the modal is open."},title:{control:"text",description:"Title of the modal."},animate:{control:"boolean",description:"Enable or disable animations."},closeModal:{action:"closeModal",description:"Function triggered when the modal is closed."},children:{control:"text",description:"Content to display inside the modal."}}},Default=(args=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.isModalOpen);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>setIsOpen(!0),className:"px-4 py-2 bg-blue-600 text-white rounded"},"Open Modal"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_modals_Modal__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{isModalOpen:isOpen,closeModal:()=>{setIsOpen(!1),args.closeModal()}}),args.children||react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This is a modal content.")))}).bind({});Default.args={isModalOpen:!1,title:"Example Modal",animate:!0,children:"This is a modal content."};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = useState(args.isModalOpen);\n  const handleClose = () => {\n    setIsOpen(false);\n    args.closeModal();\n  };\n  return <>\r\n      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">\r\n        Open Modal\r\n      </button>\r\n      <Modal {...args} isModalOpen={isOpen} closeModal={handleClose}>\r\n        {args.children || <p>This is a modal content.</p>}\r\n      </Modal>\r\n    </>;\n}',...Default.parameters?.docs?.source}}}},"./src/components/atoms/modals/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideIn=styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Overlay=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `}
`,ModalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      animation: ${slideIn} 0.3s ease-out forwards;
    `}
`,CloseButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #333;

  &:hover {
    color: #555;
  }
`,ModalContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  padding: 16px;
`,ModalTitle=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`,ModalBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  font-size: 1rem;
  color: #555;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{isModalOpen,closeModal,title,children,animate=!0}=_ref;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{animate,onClick:closeModal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContainer,{animate,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:closeModal,"aria-label":"Close Modal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.XIcon,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalTitle,{id:"modal-title"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null}}}]);
//# sourceMappingURL=stories-atoms-modals-Modal-stories.dbe6fc0d.iframe.bundle.js.map