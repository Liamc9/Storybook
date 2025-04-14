"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9499],{"./src/stories/form/inputs/rangeInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultRangeInput:()=>DefaultRangeInput,RangeSliderStory:()=>RangeSliderStory,StyledRangeInput:()=>StyledRangeInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_form_inputs_rangeInputs_RangeInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput.jsx"),_components_form_inputs_rangeInputs_RangeInput2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeInput2.jsx"),_components_form_inputs_rangeInputs_RangeSlider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/inputs/rangeInputs/RangeSlider.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Inputs/RangeInput",argTypes:{label:{control:"text",description:"Label for the range input",defaultValue:"Default Range"},id:{control:"text",description:"Unique ID for the range input",defaultValue:"range-default"},min:{control:"number",description:"Minimum value of the range",defaultValue:0},max:{control:"number",description:"Maximum value of the range",defaultValue:100},step:{control:"number",description:"Step value for the range input",defaultValue:1},defaultValue:{control:"number",description:"Default value of the range input",defaultValue:50}}},DefaultRangeInput=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_inputs_rangeInputs_RangeInput__WEBPACK_IMPORTED_MODULE_1__.A,args);DefaultRangeInput.args={label:"Default Range",id:"range-default",min:0,max:100,step:1,defaultValue:50};const StyledRangeInput=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_inputs_rangeInputs_RangeInput2__WEBPACK_IMPORTED_MODULE_2__.A,args);StyledRangeInput.args={id:"range-styled",min:0,max:24,step:1,defaultValue:12};const RangeSliderStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_form_inputs_rangeInputs_RangeSlider__WEBPACK_IMPORTED_MODULE_3__.A,args);RangeSliderStory.args={id:"range-slider",min:0,max:100,step:1,defaultValue:50,minimumGap:10,valuePrefix:"$",valueSuffix:" USD",label:"Range Slider"};const __namedExportsOrder=["DefaultRangeInput","StyledRangeInput","RangeSliderStory"];DefaultRangeInput.parameters={...DefaultRangeInput.parameters,docs:{...DefaultRangeInput.parameters?.docs,source:{originalSource:"args => <RangeInput {...args} />",...DefaultRangeInput.parameters?.docs?.source}}},StyledRangeInput.parameters={...StyledRangeInput.parameters,docs:{...StyledRangeInput.parameters?.docs,source:{originalSource:"args => <RangeInput2 {...args} />",...StyledRangeInput.parameters?.docs?.source}}},RangeSliderStory.parameters={...RangeSliderStory.parameters,docs:{...RangeSliderStory.parameters?.docs,source:{originalSource:"args => <RangeSlider {...args} />",...RangeSliderStory.parameters?.docs?.source}}}},"./src/components/form/inputs/rangeInputs/RangeInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const RangeInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  transition: background 0.3s ease;

  &:hover {
    background: #ccc;
  }

  &:focus {
    background: #bbb;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6200ee;
    cursor: pointer;
    transition: background 0.3s ease;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputWrapper,{gridSpan:props.gridSpan},props.label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLabel,{htmlFor:props.id},props.label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInput,_extends({type:"range"},props)))}},"./src/components/form/inputs/rangeInputs/RangeInput2.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  /* level settings 👇 */

  .slider {
    /* slider */
    --slider-width: 100%;
    --slider-height: 6px;
    --slider-bg: rgb(82, 82, 82);
    --slider-border-radius: 999px;
    /* level */
    --level-color: #fff;
    --level-transition-duration: .1s;
    /* icon */
    --icon-margin: 15px;
    --icon-color: var(--slider-bg);
    --icon-size: 25px;
  }

  .slider {
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .slider .volume {
    display: inline-block;
    vertical-align: top;
    margin-right: var(--icon-margin);
    color: var(--icon-color);
    width: var(--icon-size);
    height: auto;
  }

  .slider .level {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--slider-width);
    height: var(--slider-height);
    background: var(--slider-bg);
    overflow: hidden;
    border-radius: var(--slider-border-radius);
    -webkit-transition: height var(--level-transition-duration);
    -o-transition: height var(--level-transition-duration);
    transition: height var(--level-transition-duration);
    cursor: inherit;
  }

  .slider .level::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    -webkit-box-shadow: -200px 0 0 200px var(--level-color);
    box-shadow: -200px 0 0 200px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 2);
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"slider"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({type:"range",className:"level"},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:"volume",xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:512,height:512,x:0,y:0,viewBox:"0 0 24 24",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z",fill:"currentColor","data-original":"#000000"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z",fill:"currentColor","data-original":"#000000"})))))}},"./src/components/form/inputs/rangeInputs/RangeSlider.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SliderContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Label=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`,RangeInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
`,Track=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
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
`,ThumbValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`,Slider=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input`
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
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",value,onChange}=_ref;const[range,setRange]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||[min,max]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{value&&Array.isArray(value)&&2===value.length&&setRange(value)}),[value]);const calculatePercentage=value=>(value-min)/(max-min)*100;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Label,null,label),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RangeInputContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))}}}]);
//# sourceMappingURL=stories-form-inputs-rangeInput-stories.827a9103.iframe.bundle.js.map