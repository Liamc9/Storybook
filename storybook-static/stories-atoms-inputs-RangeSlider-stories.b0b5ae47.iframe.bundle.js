"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7664],{"./src/stories/atoms/inputs/RangeSlider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomRange:()=>CustomRange,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/inputs/RangeSlider.jsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Inputs/RangeSlider",component:_components_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{docs:{description:{component:'\n\nThe `RangeSlider` component is a customizable range slider that allows users to select a range of values using two slider thumbs.\n\n### Features\n- **Dual Thumbs**: Select a minimum and maximum value.\n- **Customizable Appearance**: Adjust the colors and labels to fit your design.\n- **Dynamic Updates**: Real-time updates as values are adjusted.\n\n### Usage\n\n```jsx\nimport React, { useState } from "react";\nimport RangeSlider from "../components/RangeSlider";\n\nconst ExampleComponent = () => {\n  const [range, setRange] = useState([10, 50]);\n\n  return (\n    <RangeSlider\n      min={0}\n      max={100}\n      step={1}\n      minimumGap={10}\n      label="Select Range"\n      valuePrefix="$"\n      valueSuffix=""\n      onChange={(newRange) => setRange(newRange)}\n    />\n  );\n};\n\nexport default ExampleComponent;\n```\n\n### Props\n- **min**: The minimum value of the slider (default: 0).\n- **max**: The maximum value of the slider (default: 100).\n- **step**: The increment step for the slider (default: 1).\n- **minimumGap**: Minimum gap between the two slider thumbs (default: 10).\n- **label**: A label for the slider (default: "Range").\n- **valuePrefix**: Prefix for the displayed values (default: "").\n- **valueSuffix**: Suffix for the displayed values (default: "").\n- **onChange**: Callback function called with the selected range when values change.\n        '}}},argTypes:{min:{control:{type:"number"},defaultValue:0},max:{control:{type:"number"},defaultValue:100},step:{control:{type:"number"},defaultValue:1},minimumGap:{control:{type:"number"},defaultValue:10},label:{control:{type:"text"},defaultValue:"Range"},valuePrefix:{control:{type:"text"},defaultValue:""},valueSuffix:{control:{type:"text"},defaultValue:""},onChange:{action:"changed"}}},Template=args=>{const[range,setRange]=react__WEBPACK_IMPORTED_MODULE_0__.useState([args.min,args.max]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_atoms_inputs_RangeSlider__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{onChange:newRange=>{setRange(newRange),args.onChange(newRange)}}))},Default=Template.bind({});Default.args={min:0,max:100,step:1,minimumGap:10,label:"Select Range",valuePrefix:"$",valueSuffix:""};const CustomRange=Template.bind({});CustomRange.args={min:0,max:500,step:5,minimumGap:20,label:"Price Range",valuePrefix:"$",valueSuffix:" USD"};const __namedExportsOrder=["Default","CustomRange"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [range, setRange] = React.useState([args.min, args.max]);\n  return <RangeSlider {...args} onChange={newRange => {\n    setRange(newRange);\n    args.onChange(newRange);\n  }} />;\n}",...Default.parameters?.docs?.source}}},CustomRange.parameters={...CustomRange.parameters,docs:{...CustomRange.parameters?.docs,source:{originalSource:"args => {\n  const [range, setRange] = React.useState([args.min, args.max]);\n  return <RangeSlider {...args} onChange={newRange => {\n    setRange(newRange);\n    args.onChange(newRange);\n  }} />;\n}",...CustomRange.parameters?.docs?.source}}}},"./src/components/atoms/inputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`,RangeInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: relative;
  width: 100%;
  height: 50px;
`,Track=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 8px;
  background: #e0e0e0;
  border-radius: 5px;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: ${props=>props.left}%;
    right: ${props=>100-props.right}%;
    height: 100%;
    background: #A855F7;
    border-radius: 5px;
    z-index: 1;
  }
`,ThumbValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`,Slider=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #A855F7;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",onChange}=_ref;const[range,setRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([min,max]),calculatePercentage=value=>(value-min)/(max-min)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))}}}]);
//# sourceMappingURL=stories-atoms-inputs-RangeSlider-stories.b0b5ae47.iframe.bundle.js.map