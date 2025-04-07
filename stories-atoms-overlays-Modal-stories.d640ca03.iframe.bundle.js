"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3527],{"./src/stories/atoms/overlays/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DeleteModalCard:()=>DeleteModalCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_components_atoms_overlays_modals_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/overlays/modals/Modal.jsx"),_components_atoms_cards_DeleteCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/cards/DeleteCard.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Overlays/Modals",component:_components_atoms_overlays_modals_Modal__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div`
  padding: 100px;
  text-align: center;
`,StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button`
  padding: 0.5rem 1rem;
  background-color: ${props=>"danger"===props.variant?"#dc2626":"#2563eb"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;
`,ModalContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div`
  padding: 20px;
  `,Default=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton,{onClick:()=>setIsOpen(!0)},"Open Modal"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_overlays_modals_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isModalOpen:isOpen,closeModal:()=>setIsOpen(!1),animate:!0,rounded:!1,fullScreen:!0,maxWidth:"600px",maxHeight:"1000px",showCloseButton:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This modal can now be fully customized!"))))},DeleteModalCard=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleCancel=()=>setIsOpen(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton,{variant:"danger",onClick:()=>setIsOpen(!0)},"Open Delete Modal"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_overlays_modals_Modal__WEBPACK_IMPORTED_MODULE_1__.A,{isModalOpen:isOpen,closeModal:handleCancel,animate:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_cards_DeleteCard__WEBPACK_IMPORTED_MODULE_2__.A,{onCancel:handleCancel,onConfirm:()=>{setIsOpen(!1)}})))},__namedExportsOrder=["Default","DeleteModalCard"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  const handleClose = () => setIsOpen(false);\n  return <Container>\r\n      <StyledButton onClick={() => setIsOpen(true)}>Open Modal</StyledButton>\r\n      <Modal isModalOpen={isOpen} closeModal={handleClose} animate={true} rounded={false} // Set to false for square corners\n    fullScreen={true} // Set to true for a full-screen modal\n    //width="500px"           // Custom width\n    //height="300px"          // Custom height\n    maxWidth="600px" // Custom max-width\n    maxHeight="1000px" // Custom max-height\n    showCloseButton={true} // Toggle X button visibility\n    >\r\n  <ModalContent>\r\n  <p>This modal can now be fully customized!</p>\r\n  </ModalContent>\r\n    </Modal>\r\n    </Container>;\n}',...Default.parameters?.docs?.source}}},DeleteModalCard.parameters={...DeleteModalCard.parameters,docs:{...DeleteModalCard.parameters?.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  const handleCancel = () => setIsOpen(false);\n  const handleConfirm = () => {\n    // perform delete action here\n    setIsOpen(false);\n  };\n  return <Container>\r\n      <StyledButton variant="danger" onClick={() => setIsOpen(true)}>\r\n        Open Delete Modal\r\n      </StyledButton>\r\n      <Modal isModalOpen={isOpen} closeModal={handleCancel} animate={true}>\r\n        <DeleteCard onCancel={handleCancel} onConfirm={handleConfirm} />\r\n      </Modal>\r\n    </Container>;\n}',...DeleteModalCard.parameters?.docs?.source}}}},"./src/components/atoms/cards/DeleteCard.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideDown=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,CardContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`,CardContent=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out forwards;
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444;
  margin-bottom: 1rem;
`,CardTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,CardMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`,ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease-in;
  border: 2px solid;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,CancelButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(Button)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;
  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`,ConfirmButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(Button)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;
  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,message,onCancel,onConfirm}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardContent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{clipRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",fillRule:"evenodd"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardTitle,null,title||"Are you sure?"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardMessage,null,message||"Do you really want to continue? This process cannot be undone.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CancelButton,{onClick:onCancel},"Cancel"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfirmButton,{onClick:onConfirm},"Confirm")))}},"./src/components/atoms/overlays/modals/Modal.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_icons_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/md/index.mjs");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_2__.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideIn=styled_components__WEBPACK_IMPORTED_MODULE_2__.i7`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Overlay=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
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
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `}
`,ModalContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  background-color: white;
  border-radius: ${props=>props.rounded?"12px":"0"};
  position: relative;
  width: ${props=>props.fullScreen?"100vw":props.width?props.width:"auto"};
  height: ${props=>props.fullScreen?"100vh":props.height?props.height:"auto"};
  max-width: ${props=>props.maxWidth?props.maxWidth:props.fullScreen?"100%":"90%"};
  max-height: ${props=>props.maxHeight?props.maxHeight:props.fullScreen?"100%":"90%"};
  overflow-y: auto;
  ${props=>props.animate&&styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
      animation: ${slideIn} 0.3s ease-out forwards;
    `}
`,CloseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button`
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
`,ModalContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div``,ModalTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`,ModalBody=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  font-size: 1rem;
  color: #555;
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{isModalOpen,closeModal,title,children,animate=!0,rounded=!0,fullScreen=!1,width,height,maxWidth,maxHeight,showCloseButton=!0}=_ref;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{animate,onClick:closeModal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContainer,{animate,rounded,fullScreen,width,height,maxWidth,maxHeight,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},showCloseButton&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton,{onClick:closeModal,"aria-label":"Close Modal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.m6K,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalTitle,{id:"modal-title"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null}}}]);
//# sourceMappingURL=stories-atoms-overlays-Modal-stories.d640ca03.iframe.bundle.js.map