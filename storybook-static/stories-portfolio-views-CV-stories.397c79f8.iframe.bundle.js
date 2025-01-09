"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[634],{"./src/stories/portfolio/views/CV.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AISpecialization:()=>AISpecialization,CustomIcon:()=>CustomIcon,Default:()=>Default,MBA:()=>MBA,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CV_stories});var react=__webpack_require__("./node_modules/react/index.js"),AccordionCard=__webpack_require__("./src/components/atoms/cards/AccordionCard.jsx");const CV_stories={title:"Projects/Portfolio/Views/CV",component:function CV(){return react.createElement(react.Fragment,null,react.createElement("head",null),react.createElement("body",null,react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement("div",{className:"space-y-4"},react.createElement(AccordionCard.A,{description:"This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.",gpa:"3.68",grade:"1:1",institution:"University College Dublin",subtitle:"Mechanical Engineering With Business",title:"ME"}),react.createElement(AccordionCard.A,{description:"This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.",gpa:"3.72",grade:"1:1",institution:"University College Dublin",subtitle:"Mechanical Engineering With Business",title:"BSc"}),react.createElement(AccordionCard.A,{description:"Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.",gpa:"4.0",grade:"Summa Cum Laude",icon:()=>{},institution:"Massachusetts Institute of Technology",subtitle:"Leaving Certificate",title:""})),react.createElement("div",null,react.createElement(AccordionCard.A,{description:"A two-year program focused on leadership, strategy, and innovation in the business world.",gpa:"3.9",grade:"Distinction",institution:"Harvard Business School",subtitle:"MBA",title:"Business Administration"})))))},tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `CV` component is designed to display detailed information about an individual\'s academic or professional background. It includes sections for the title, subtitle, institution, GPA, grade, and a detailed description. The component can also accept custom icons for a more personalized look.\n\n### Features\n- **Comprehensive Information Display**: Presents information about educational or professional achievements in an organized way.\n- **Custom Icons**: Supports custom icons for specific sections or items.\n- **Flexible Content**: Allows a variety of information, including titles, descriptions, and institution details.\n\n### Usage\n\n```jsx\nimport React from \'react\';\nimport CV from \'./components/pages/CV\';\n\nconst ExampleComponent = () => (\n  <CV\n    title="Computer Science"\n    subtitle="Specialization in Artificial Intelligence"\n    description="Focused on AI development, covering machine learning, neural networks, and advanced algorithms."\n    institution="Massachusetts Institute of Technology"\n    gpa="4.0"\n    grade="Summa Cum Laude"\n  />\n);\n\nexport default ExampleComponent;\n```\n        '}}},argTypes:{title:{control:"text",description:"The main title for the CV section."},subtitle:{control:"text",description:"The subtitle providing more context or detail."},description:{control:"text",description:"Detailed description of the program or position."},institution:{control:"text",description:"Name of the institution or organization."},gpa:{control:"text",description:"GPA or performance metric."},grade:{control:"text",description:"Grade or academic distinction received."},icon:{control:"function",description:"Custom icon for the CV section."}}},Default={args:{title:"Mechanical Engineering",subtitle:"Mechanical Engineering With Business",description:"This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.",institution:"University College Dublin",gpa:"3.72",grade:"1:1"}},AISpecialization={args:{title:"Computer Science",subtitle:"Specialization in Artificial Intelligence",description:"Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.",institution:"Massachusetts Institute of Technology",gpa:"4.0",grade:"Summa Cum Laude"}},MBA={args:{title:"Business Administration",subtitle:"MBA",description:"A two-year program focused on leadership, strategy, and innovation in the business world.",institution:"Harvard Business School",gpa:"3.9",grade:"Distinction"}},CustomIcon={args:{title:"Computer Science",subtitle:"Specialization in Artificial Intelligence",description:"Focused on AI development, covering machine learning, neural networks, and advanced algorithms.",institution:"Massachusetts Institute of Technology",gpa:"4.0",grade:"Summa Cum Laude",icon:()=>react.createElement("span",{role:"img","aria-label":"robot"},"🤖")}},__namedExportsOrder=["Default","AISpecialization","MBA","CustomIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Mechanical Engineering',\n    subtitle: 'Mechanical Engineering With Business',\n    description: 'This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains.',\n    institution: 'University College Dublin',\n    gpa: '3.72',\n    grade: '1:1'\n  }\n}",...Default.parameters?.docs?.source}}},AISpecialization.parameters={...AISpecialization.parameters,docs:{...AISpecialization.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Computer Science',\n    subtitle: 'Specialization in Artificial Intelligence',\n    description: 'Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics.',\n    institution: 'Massachusetts Institute of Technology',\n    gpa: '4.0',\n    grade: 'Summa Cum Laude'\n  }\n}",...AISpecialization.parameters?.docs?.source}}},MBA.parameters={...MBA.parameters,docs:{...MBA.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Business Administration',\n    subtitle: 'MBA',\n    description: 'A two-year program focused on leadership, strategy, and innovation in the business world.',\n    institution: 'Harvard Business School',\n    gpa: '3.9',\n    grade: 'Distinction'\n  }\n}",...MBA.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Computer Science',\n    subtitle: 'Specialization in Artificial Intelligence',\n    description: 'Focused on AI development, covering machine learning, neural networks, and advanced algorithms.',\n    institution: 'Massachusetts Institute of Technology',\n    gpa: '4.0',\n    grade: 'Summa Cum Laude',\n    icon: () => <span role=\"img\" aria-label=\"robot\">🤖</span> // Example custom icon\n  }\n}",...CustomIcon.parameters?.docs?.source}}}},"./src/components/atoms/cards/AccordionCard.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AccordionCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const AccordionWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`,AccordionHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  display: flex;
  align-items: center;
  border-left: 8px solid green;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ContentContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  flex-grow: 1;
  padding: 16px;
  
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`,Subtitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p`
  font-size: 18px;
  font-weight: medium;
  color: #4a5568;
`,Institution=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p`
  font-size: 16px;
  font-weight: medium;
  color: #2d3748;
`,GradeContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  width: 25%;
  text-align: center;
  padding-right: 16px;
`,AccordionContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  max-height: ${props=>props.isOpen?"240px":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,Description=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.p`
  padding: 24px;
  background-color: #f7fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #4a5568;
`;function AccordionCard(_ref){let{Icon=_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.CollegeIcon,title="ME",subtitle="Mechanical Engineering With Business",institution="University College Dublin",grade="1:1",gpa="3.72",description="This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains. Key modules included Thermodynamics, Fluid Mechanics, Project Management, and Business Analytics. Achievements include leading a team project on sustainable energy solutions that received commendation from faculty."}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AccordionWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(AccordionHeader,{onClick:()=>{setIsOpen(!isOpen)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{size:80,color:"#38a169"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContentContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title,null,title),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Subtitle,null,subtitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Institution,null,institution)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(GradeContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Grade: ",grade),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"GPA: ",gpa),isOpen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronUpIcon,{size:24,color:"#718096"}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__.ChevronDownIcon,{size:24,color:"#718096"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(AccordionContent,{isOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description,null,description)))}}}]);
//# sourceMappingURL=stories-portfolio-views-CV-stories.397c79f8.iframe.bundle.js.map