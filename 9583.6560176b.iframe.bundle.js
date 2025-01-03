"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9583],{"./src/stories/Lettz/components/ListingForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListingForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Input=__webpack_require__("./src/components/atoms/inputs/Input.jsx"),CheckedItem=__webpack_require__("./src/components/atoms/inputs/CheckedItem.jsx"),Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),SelectInput=__webpack_require__("./src/components/atoms/inputs/SelectInput.jsx"),ImageUploading=__webpack_require__("./src/components/atoms/forms/ImageUploading.jsx"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");const PageOne=_ref2=>{let{formData,handleChange}=_ref2;return react.createElement(FormSection,null,react.createElement(SectionHeader,null,"Address"),react.createElement(Input.A,{name:"streetAddress",type:"text",label:"Street Address",color:"#A855F7",value:formData.streetAddress,onChange:e=>handleChange("streetAddress",e.target.value),required:!0}),react.createElement(Input.A,{name:"city",type:"text",label:"Town/City",color:"#A855F7",value:formData.city,onChange:e=>handleChange("city",e.target.value),required:!0}),react.createElement(SelectInput.A,{name:"county",label:"County",value:formData.county,onChange:e=>handleChange("county",e.target.value),color:"#A855F7",options:countiesOptions,required:!0}),react.createElement(Input.A,{name:"eircode",type:"text",label:"Eircode",color:"#A855F7",value:formData.eircode,onChange:e=>handleChange("eircode",e.target.value),required:!0}),react.createElement(SectionHeader,null,"Property Type"),react.createElement(CheckboxGroup,null,["House","Apartment","Room"].map((type=>react.createElement(CheckedItem.A,{key:type,label:type,height:"5rem",width:"5rem",color:"#A855F7",checked:formData.type===type,onChange:()=>handleChange("type",type),svg:react.createElement(Icons.HomeIcon,{className:"w-6 h-6"}),required:!0})))))},PageTwo=_ref3=>{let{formData,handleChange,uploadedImages,setUploadedImages}=_ref3;return react.createElement(FormSection,null,react.createElement(SectionHeader,null,"Sublet Details"),react.createElement(Input.A,{name:"rent",type:"number",label:"Monthly Rent (€)",color:"#A855F7",value:formData.rent,onChange:e=>handleChange("rent",e.target.value),required:!0}),react.createElement(DateSelectors,null,["startDate","endDate"].map((dateField=>react.createElement(SelectInput.A,{key:dateField,name:dateField,label:"startDate"===dateField?"Start Date":"End Date",color:"#A855F7",value:formData[dateField],onChange:e=>handleChange(dateField,e.target.value),options:monthsOptions,required:!0})))),react.createElement(Input.A,{name:"description",type:"textarea",label:"Description",color:"#A855F7",value:formData.description,onChange:e=>handleChange("description",e.target.value),required:!0}),react.createElement(SectionHeader,null,"Images"),react.createElement(ImageUploading.A,{uploadedImages,setUploadedImages,maxImages:6,acceptedFormats:["image/jpeg","image/png","image/gif"],customMessages:{maxLimit:"You can only upload up to {maxImages} images.",invalidFormat:"Only JPG, PNG, and GIF formats are allowed.",success:"You have successfully uploaded {count} images.",rearrange:"You can rearrange the order of images by dragging them."}}))},countiesOptions=["Antrim","Armagh","Carlow","Cavan","Clare","Cork","Derry","Donegal","Down","Dublin","Fermanagh","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Tyrone","Waterford","Westmeath","Wexford","Wicklow"].map((county=>({value:county,label:county}))),monthsOptions=[{value:"",label:"Select Month..."},{value:"Jan",label:"Jan"},{value:"Feb",label:"Feb"},{value:"Mar",label:"Mar"},{value:"Apr",label:"Apr"},{value:"May",label:"May"},{value:"Jun",label:"Jun"},{value:"Jul",label:"Jul"},{value:"Aug",label:"Aug"},{value:"Sept",label:"Sept"},{value:"Oct",label:"Oct"},{value:"Nov",label:"Nov"},{value:"Dec",label:"Dec"}],FormContainer=styled_components_browser_esm.default.div`
  position: relative;
  max-width: 600px;
  margin: 0px auto 40px; /* Added top margin for spacing */
  padding: 20px 30px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 80vh; /* Adjusted height for better spacing */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 640px) {
    padding: 15px 20px;
    min-height: auto;
  }
`,Heading=styled_components_browser_esm.default.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.75rem;
  color: #333333;
`,Content=styled_components_browser_esm.default.div`
  flex: 1;
  margin-bottom: 80px; /* Increased bottom margin for better spacing */
`,ProgressBar=styled_components_browser_esm.default.div`
  width: 100%;
  background-color: #e5e7eb;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 24px;
`,ProgressFill=styled_components_browser_esm.default.div`
  background-color: #a855f7;
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`,NavButtons=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: ${_ref4=>{let{hasPrev}=_ref4;return hasPrev?"space-between":"flex-end"}};
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;

  @media (max-width: 640px) {
    padding: 8px 10px;
  }
`,PrevButton=styled_components_browser_esm.default.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #d1d5db; /* Gray background */
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a1a1aa; /* Darker gray on hover */
  }

  @media (max-width: 640px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,NextButton=styled_components_browser_esm.default.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #000000; /* Black background */
  color: #fff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333; /* Darker black on hover */
  }

  @media (max-width: 640px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,SubmitButton=styled_components_browser_esm.default.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #a855f7; /* Tailwind's purple-500 */
  color: #fff;
  transition: background-color 0.2s;
  /* Removed opacity and pointer-events to keep the button always enabled */

  &:hover {
    background-color: #9333ea; /* Tailwind's purple-600 */
  }

  @media (max-width: 640px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,BackButton=styled_components_browser_esm.default.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #9333ea;
  }

  @media (max-width: 640px) {
    top: 15px;
    left: 15px;
  }
`,FormSection=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,CheckboxGroup=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`,DateSelectors=styled_components_browser_esm.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,SectionHeader=styled_components_browser_esm.default.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`,components_ListingForm=_ref=>{let{onClose,onSubmit,initialData}=_ref;const[currentPage,setCurrentPage]=(0,react.useState)(0),[formData,setFormData]=(0,react.useState)({streetAddress:"",city:"",county:"",eircode:"",rent:"",startDate:"",endDate:"",type:"",description:""}),[uploadedImages,setUploadedImages]=(0,react.useState)([]);(0,react.useEffect)((()=>{var _initialData$images;initialData&&(setFormData({streetAddress:initialData.streetAddress||"",city:initialData.city||"",county:initialData.county||"",eircode:initialData.eircode||"",rent:initialData.rent||"",startDate:initialData.startDate||"",endDate:initialData.endDate||"",type:initialData.type||"",description:initialData.description||""}),null!==(_initialData$images=initialData.images)&&void 0!==_initialData$images&&_initialData$images.length&&setUploadedImages(initialData.images.map((url=>({id:(0,v4.A)(),file:null,preview:url,url})))))}),[initialData]);const handleChange=(0,react.useCallback)(((key,value)=>{setFormData((prev=>({...prev,[key]:value})))}),[]),resetForm=(0,react.useCallback)((()=>{setCurrentPage(0),setFormData({streetAddress:"",city:"",county:"",eircode:"",rent:"",startDate:"",endDate:"",type:"",description:""}),uploadedImages.forEach((image=>{image.preview&&image.file&&URL.revokeObjectURL(image.preview)})),setUploadedImages([]),onClose()}),[uploadedImages,onClose]),handleSubmit=(0,react.useCallback)((()=>{const missingFields=["streetAddress","city","county","eircode","rent","startDate","endDate","type","description"].filter((field=>{var _formData$field;return!(null!==(_formData$field=formData[field])&&void 0!==_formData$field&&_formData$field.toString().trim())}));if(missingFields.length)return void react_toastify_esm.oR.error(`Please fill in all required fields: ${missingFields.join(", ")}`,{position:"top-center",autoClose:5e3});if(0===uploadedImages.length)return void react_toastify_esm.oR.error("Please upload at least one image.",{position:"top-center",autoClose:5e3});const imageFiles=uploadedImages.filter((image=>image.file)).map((image=>image.file)),combinedImages=[...uploadedImages.filter((image=>image.url)).map((image=>image.url)),...imageFiles];imageFiles.filter((file=>file instanceof File)).length!==imageFiles.length&&react_toastify_esm.oR.warn("Some images are invalid and will not be submitted.",{position:"top-center",autoClose:5e3}),onSubmit({...formData,images:combinedImages}),resetForm()}),[formData,uploadedImages,onSubmit,resetForm]),pages=[react.createElement(PageOne,{key:"page1",formData,handleChange}),react.createElement(PageTwo,{key:"page2",formData,handleChange,uploadedImages,setUploadedImages})],progressPercentage=(currentPage+1)/pages.length*100;return react.createElement(FormContainer,null,0===currentPage&&react.createElement(BackButton,{onClick:resetForm,"aria-label":"Close form"},react.createElement(Icons.ChevronLeftIcon,{className:"w-8 h-8"})),react.createElement(Heading,null,["Location","Sublet Details & Images"][currentPage]),react.createElement(ProgressBar,{role:"progressbar","aria-valuenow":progressPercentage,"aria-valuemin":"0","aria-valuemax":"100"},react.createElement(ProgressFill,{style:{width:`${progressPercentage}%`}})),react.createElement(Content,null,pages[currentPage]),react.createElement(NavButtons,{hasPrev:currentPage>0},currentPage>0&&react.createElement(PrevButton,{onClick:()=>setCurrentPage((prev=>prev-1))},"Previous"),currentPage<pages.length-1?react.createElement(NextButton,{onClick:()=>setCurrentPage((prev=>prev+1))},"Next"):react.createElement(SubmitButton,{onClick:handleSubmit},initialData?"Update":"Submit")))},ListingForm_stories={title:"Lettz/Components/ListingForm",component:components_ListingForm,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `ListingForm` component provides an interactive multi-step form for creating or editing property listings. It includes fields for location, property details, and image uploads with validation and error handling.\n\n### Features\n- **Multi-Step Navigation**: Progress through the form with a clear progress bar.\n- **Image Uploading**: Add, rearrange, and validate images.\n- **Form Validation**: Ensures all required fields are completed.\n- **Customizable**: Supports initial data and submission handling.\n\n### Usage\n\n```jsx\nimport React, { useState } from "react";\nimport ListingForm from "./components/molecules/ListingForm";\n\nconst App = () => {\n  const [formData, setFormData] = useState(null);\n\n  const handleSubmit = (data) => {\n    console.log("Form submitted:", data);\n    setFormData(data);\n  };\n\n  const handleClose = () => {\n    console.log("Form closed");\n  };\n\n  return (\n    <ListingForm\n      initialData={null}\n      onSubmit={handleSubmit}\n      onClose={handleClose}\n    />\n  );\n};\n\nexport default App;\n```\n\n### Props\n- **initialData**: Object containing the pre-filled form data (optional).\n- **onSubmit**: Callback function triggered upon form submission.\n- **onClose**: Callback function triggered when the form is closed.\n        '}}},argTypes:{initialData:{control:"object"},onSubmit:{action:"form submitted"},onClose:{action:"form closed"}}},Default=(args=>react.createElement(components_ListingForm,args)).bind({});Default.args={initialData:{streetAddress:"123 Main St",city:"Dublin",county:"Dublin",eircode:"D01XYZ",rent:"1200",startDate:"Jan",endDate:"Dec",type:"Apartment",description:"A lovely apartment in the city center.",images:["https://via.placeholder.com/150"]},onSubmit:data=>console.log("Form submitted:",data),onClose:()=>console.log("Form closed")};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ListingForm {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/atoms/inputs/CheckedItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  color: #94a3b8; /* Equivalent to text-slate-400 */
  position: relative;
  cursor: pointer;
`,HiddenCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input.attrs({type:"checkbox"})`
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 3px solid #cbd5e1; /* Equivalent to border-slate-300 */
  background-color: #ffffff; /* bg-white */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
  transition: all 0.2s ease-in-out;
  width: ${_ref=>{let{width}=_ref;return width}};
  height: ${_ref2=>{let{height}=_ref2;return height}};

  /* Checked State */
  ${HiddenCheckbox}:checked + & {
    border-color: ${_ref3=>{let{color}=_ref3;return color||"#3b82f6"}}; /* Default to blue-500 */
    box-shadow: 0 4px 6px ${_ref4=>{let{color}=_ref4;return color}}33; /* 10% opacity */
    color: ${_ref5=>{let{color}=_ref5;return color||"#3b82f6"}};

    &::before {
      content: '✓';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid ${_ref6=>{let{color}=_ref6;return color||"#3b82f6"}};
      border-radius: 50%;
      background-color: ${_ref7=>{let{color}=_ref7;return color||"#3b82f6"}};
      opacity: 1;
      transform: scale(1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 0.75rem;
      transition: all 0.2s ease-in-out;
    }
  }

  /* Hover State */
  &:hover {
    border-color: ${_ref8=>{let{color}=_ref8;return color||"#3b82f6"}};

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Pseudo-element before */
  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 3px solid ${_ref9=>{let{color}=_ref9;return color||"#3b82f6"}};
    border-radius: 50%;
    background-color: ${_ref10=>{let{color}=_ref10;return color||"#3b82f6"}};
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  /* SVG and Label Text */
  > span {
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-size: 0.875rem; /* Equivalent to text-sm */
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref11=>{let{label,svg,onChange,checked,height="7rem",width="7rem",color="#3b82f6"}=_ref11;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(HiddenCheckbox,{onChange,checked}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSpan,{height,width,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,svg),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label))))}},"./src/components/atoms/inputs/Input.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: relative;
  font-family: sans-serif;
`,sharedInputStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input`
  ${sharedInputStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
`,StyledTextarea=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.textarea`
  ${sharedInputStyles}
  border-color: ${_ref2=>{let{isFocused,color}=_ref2;return isFocused?color:"#D1D5DB"}};
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${_ref3=>{let{isFocused,color}=_ref3;return isFocused?color:"#6B7280"}};
  font-size: 1rem;
  pointer-events: none;
  transform: ${_ref4=>{let{hasValue,isFocused}=_ref4;return hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"}};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,__WEBPACK_DEFAULT_EXPORT__=_ref5=>{let{name,type,value,onChange,color="#000",label}=_ref5;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),handleFocus=()=>setIsFocused(!0),handleBlur=()=>setIsFocused(!1),inputElement="textarea"===type?react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTextarea,{name,id:name,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInput,{name,id:name,type,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputContainer,null,inputElement,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label))}},"./src/components/atoms/inputs/SelectInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const SelectContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: relative;
  font-family: sans-serif;
`,sharedSelectStyles=styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  appearance: none;
  transition: border-color 0.3s ease-in-out;
`,StyledSelect=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.select`
  ${sharedSelectStyles}
  border-color: ${_ref=>{let{isFocused,color}=_ref;return isFocused?color:"#D1D5DB"}};
  color: ${_ref2=>{let{value}=_ref2;return value?"#000":"#6B7280"}}; /* Default placeholder style */
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${_ref3=>{let{isFocused,color}=_ref3;return isFocused?color:"#6B7280"}};
  font-size: 1rem;
  pointer-events: none;
  transform: ${_ref4=>{let{hasValue,isFocused}=_ref4;return hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"}};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,StyledArrow=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: ${_ref5=>{let{isFocused,color}=_ref5;return isFocused?color:"#6B7280"}};
`,__WEBPACK_DEFAULT_EXPORT__=_ref6=>{let{name,value,onChange,color="#000",label,options=[]}=_ref6;const[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledSelect,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"",disabled:!0}),options.map((option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{key:option.value,value:option.value},option.label)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledArrow,{isFocused,color},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{className:"w-4 h-4"})))}}}]);
//# sourceMappingURL=9583.6560176b.iframe.bundle.js.map