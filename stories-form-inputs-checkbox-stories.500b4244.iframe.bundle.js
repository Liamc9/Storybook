"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8201],{"./src/stories/form/inputs/checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnimatedCheckbox:()=>AnimatedCheckbox,CheckedItemStory:()=>CheckedItemStory,DefaultCheckbox:()=>DefaultCheckbox,SVGCheckbox:()=>SVGCheckbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const CheckboxWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,StyledInput=styled_components_browser_esm.Ay.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`,StyledLabel=styled_components_browser_esm.Ay.label`
  font-size: 1rem;
  color: #333;
`,checkboxInputs_Checkbox=_ref=>{let{...props}=_ref;return react.createElement(CheckboxWrapper,{gridSpan:props.gridSpan},react.createElement(StyledInput,_extends({type:"checkbox"},props)),props.label&&react.createElement(StyledLabel,{htmlFor:props.id},props.label))};function Checkbox2_extends(){return Checkbox2_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Checkbox2_extends.apply(null,arguments)}const StyledWrapper=styled_components_browser_esm.Ay.div`
       grid-column: ${props=>props.gridSpan||"auto"};

  .checkbox-wrapper * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }

  .checkbox-wrapper input[type="checkbox"] {
    display: none;
  }

  .checkbox-wrapper label {
    --size: 50px;
    --shadow: calc(var(--size) * .07) calc(var(--size) * .1);
    position: relative;
    display: block;
    width: var(--size);
    height: var(--size);
    margin: 0 auto;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: 50%;
    box-shadow: 0 var(--shadow) #ffbeb8;
    cursor: pointer;
    transition: 0.2s ease transform, 0.2s ease background-color,
        0.2s ease box-shadow;
    overflow: hidden;
    z-index: 1;
  }

  .checkbox-wrapper label:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: calc(var(--size) * .7);
    height: calc(var(--size) * .7);
    margin: 0 auto;
    background-color: #fff;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: inset 0 var(--shadow) #ffbeb8;
    transition: 0.2s ease width, 0.2s ease height;
  }

  .checkbox-wrapper label:hover:before {
    width: calc(var(--size) * .55);
    height: calc(var(--size) * .55);
    box-shadow: inset 0 var(--shadow) #ff9d96;
  }

  .checkbox-wrapper label:active {
    transform: scale(0.9);
  }

  .checkbox-wrapper .tick_mark {
    position: absolute;
    top: -1px;
    right: 0;
    left: calc(var(--size) * -.05);
    width: calc(var(--size) * .6);
    height: calc(var(--size) * .6);
    margin: 0 auto;
    margin-left: calc(var(--size) * .14);
    transform: rotateZ(-40deg);
  }

  .checkbox-wrapper .tick_mark:before,
    .checkbox-wrapper .tick_mark:after {
    content: "";
    position: absolute;
    background-color: #fff;
    border-radius: 2px;
    opacity: 0;
    transition: 0.2s ease transform, 0.2s ease opacity;
  }

  .checkbox-wrapper .tick_mark:before {
    left: 0;
    bottom: 0;
    width: calc(var(--size) * .1);
    height: calc(var(--size) * .3);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
    transform: translateY(calc(var(--size) * -.68));
  }

  .checkbox-wrapper .tick_mark:after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(var(--size) * .1);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
    transform: translateX(calc(var(--size) * .78));
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label:before {
    width: 0;
    height: 0;
  }

  .checkbox-wrapper input[type="checkbox"]:checked + label .tick_mark:before,
    .checkbox-wrapper input[type="checkbox"]:checked + label .tick_mark:after {
    transform: translate(0);
    opacity: 1;
  }`,checkboxInputs_Checkbox2=_ref=>{let{...props}=_ref;return react.createElement(StyledWrapper,{gridSpan:props.gridSpan},react.createElement("div",{className:"checkbox-wrapper"},react.createElement("input",Checkbox2_extends({id:props.id,type:"checkbox"},props)),react.createElement("label",{htmlFor:props.id}," ",react.createElement("div",{className:"tick_mark"}))))};var Checkbox3=__webpack_require__("./src/components/form/inputs/checkboxInputs/Checkbox3.jsx");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`,Label=styled_components_browser_esm.Ay.label`
  color: #94a3b8; /* Equivalent to text-slate-400 */
  position: relative;
  cursor: pointer;
`,HiddenCheckbox=styled_components_browser_esm.Ay.input.attrs({type:"checkbox"})`
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`,StyledSpan=styled_components_browser_esm.Ay.span`
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

  /* Pseudo-element before */
  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border: 3px solid ${_ref8=>{let{color}=_ref8;return color||"#3b82f6"}};
    border-radius: 50%;
    background-color: ${_ref9=>{let{color}=_ref9;return color||"#3b82f6"}};
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  /* SVG and Label Text */
  > span {
    transition: all 0.2s ease-in-out;
    text-align: center;
    font-size: 0.875rem;
  }
`,checkboxInputs_CheckedItem=_ref10=>{let{label,svg,height="7rem",width="7rem",color="#3b82f6",...props}=_ref10;return react.createElement(Container,null,react.createElement(Label,null,react.createElement(HiddenCheckbox,props),react.createElement(StyledSpan,{height,width,color},react.createElement("span",null,svg),react.createElement("span",null,label))))};var fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs");const checkbox_stories={title:"Form/Inputs/Checkbox",argTypes:{label:{control:"text",description:"Label for the checkbox",defaultValue:"Default Checkbox"},id:{control:"text",description:"Unique ID for the checkbox",defaultValue:"checkbox-default"},checked:{control:"boolean",description:"Checkbox checked state",defaultValue:!1}}},DefaultCheckbox=args=>react.createElement(checkboxInputs_Checkbox,args);DefaultCheckbox.args={label:"Default Checkbox",id:"checkbox-default"};const AnimatedCheckbox=args=>react.createElement(checkboxInputs_Checkbox2,args);AnimatedCheckbox.args={label:"Animated Checkbox",id:"checkbox-animated"};const SVGCheckbox=args=>react.createElement(Checkbox3.A,args);SVGCheckbox.args={label:"SVG Checkbox",id:"checkbox-svg"};const CheckedItemStory=args=>react.createElement(checkboxInputs_CheckedItem,args);CheckedItemStory.args={label:"Checked Item",id:"checked-item",height:"7rem",width:"7rem",svg:react.createElement(fa.tmC,{size:"3rem"}),color:"#3b82f6"};const __namedExportsOrder=["DefaultCheckbox","AnimatedCheckbox","SVGCheckbox","CheckedItemStory"];DefaultCheckbox.parameters={...DefaultCheckbox.parameters,docs:{...DefaultCheckbox.parameters?.docs,source:{originalSource:"args => <Checkbox {...args} />",...DefaultCheckbox.parameters?.docs?.source}}},AnimatedCheckbox.parameters={...AnimatedCheckbox.parameters,docs:{...AnimatedCheckbox.parameters?.docs,source:{originalSource:"args => <Checkbox2 {...args} />",...AnimatedCheckbox.parameters?.docs?.source}}},SVGCheckbox.parameters={...SVGCheckbox.parameters,docs:{...SVGCheckbox.parameters?.docs,source:{originalSource:"args => <Checkbox3 {...args} />",...SVGCheckbox.parameters?.docs?.source}}},CheckedItemStory.parameters={...CheckedItemStory.parameters,docs:{...CheckedItemStory.parameters?.docs,source:{originalSource:"args => <CheckedItem {...args} />",...CheckedItemStory.parameters?.docs?.source}}}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k5:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}},"./src/components/form/inputs/checkboxInputs/Checkbox3.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const StyledWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .container {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  .container svg {
    overflow: visible;
  }

  .path {
    fill: none;
    stroke: black;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
    stroke-dasharray: 241 9999999;
    stroke-dashoffset: 0;
  }

  .container input:checked ~ svg .path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledWrapper,{gridSpan:props.gridSpan},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",_extends({id:props.id,type:"checkbox"},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 64 64",height:"2em",width:"2em"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",pathLength:"575.0541381835938",className:"path"}))))}}}]);
//# sourceMappingURL=stories-form-inputs-checkbox-stories.500b4244.iframe.bundle.js.map