"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3910],{"./src/stories/molecules/stackedlist/StackedList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StackedList_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MenuItem=__webpack_require__("./src/components/atoms/menuitem/MenuItem.jsx");const CategoryWrapper=styled_components_browser_esm.Ay.div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`,CategoryTitle=styled_components_browser_esm.Ay.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`,ItemsContainer=styled_components_browser_esm.Ay.div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`,stackedlist_StackedList=_ref=>{let{category,items}=_ref;return react.createElement(CategoryWrapper,null,react.createElement(CategoryTitle,null,category),react.createElement(ItemsContainer,null,items.map(((item,index)=>react.createElement(MenuItem.A,{key:index,icon:item.icon,text:item.text,link:item.link})))))};var Icons=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const StackedList_stories={title:"Molecules/StackedList/StackedList",component:stackedlist_StackedList,tags:["molecules","autodocs"],decorators:[Story=>react.createElement(dist.fS,null,react.createElement(Story,null))]},Default=(args=>react.createElement(stackedlist_StackedList,args)).bind({});Default.args={category:"Profile Settings",items:[{icon:Icons.UsersIcon,text:"Account Info",link:"/account-info"},{icon:Icons.NotificationsIcon,text:"Privacy Settings",link:"/privacy-settings"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <StackedList {...args} />",...Default.parameters?.docs?.source}}}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k5:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}},"./src/components/atoms/menuitem/MenuItem.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f3f3f3; /* Equivalent to hover:bg-gray-100 */
  }
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  .svg {
    width: 100%;
    height: 100%;
  }
`,TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  align-items: center;
`,IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{icon:IconComponent,text,link}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:link},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextWrapper,null,IconComponent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{className:"svg"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,text)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.X6T,null)))}}}]);
//# sourceMappingURL=stories-molecules-stackedlist-StackedList-stories.8388b479.iframe.bundle.js.map