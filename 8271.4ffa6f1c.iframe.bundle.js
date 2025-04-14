/*! For license information please see 8271.4ffa6f1c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8271],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/liamc9npm/dist/index.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JPs:()=>BottomDrawer,vKP:()=>ChevronRightIcon,OLc:()=>CookbookCard,$rc:()=>CookbookProfile,e9s:()=>EditSettingsTemplate,Yy0:()=>EditStackedList,JYf:()=>Feed,GJI:()=>FeedItem,fff:()=>FeedLogic,pde:()=>Input$1,tDO:()=>LettzFilterDrawer,m6K:()=>LettzSearchButton,RXu:()=>ListYourPlaceCard,laS:()=>ListingCard,szj:()=>LoadMoreButton,w74:()=>MessagesView,$op:()=>PaginationControls,D0$:()=>PollItem,t3V:()=>PortfolioMainSlider,jlq:()=>RecipeCard$1,Awx:()=>RecipeSwipeComponent,Ecy:()=>RoomsView,ZyJ:()=>Search2,RUP:()=>SearchLogic,WbZ:()=>SettingsTemplate,FUI:()=>Sort,xEI:()=>Sort2,QnQ:()=>SortRadio,G1x:()=>StackedList});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),swiper_react=(__webpack_require__("./node_modules/classnames/index.js"),__webpack_require__("./node_modules/swiper/swiper-react.mjs")),modules=(__webpack_require__("./node_modules/swiper/swiper.css"),__webpack_require__("./node_modules/swiper/modules/navigation.css"),__webpack_require__("./node_modules/swiper/modules/pagination.css"),__webpack_require__("./node_modules/swiper/modules/autoplay.css"),__webpack_require__("./node_modules/swiper/modules/index.mjs"));function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o)}const TransitionGroupContext=react.createContext(null);function getChildMapping(children,mapFn){var result=Object.create(null);return children&&react.Children.map(children,(function(c){return c})).forEach((function(child){result[child.key]=function mapper(child){return mapFn&&(0,react.isValidElement)(child)?mapFn(child):child}(child)})),result}function getProp(child,prop,props){return null!=props[prop]?props[prop]:child.props[prop]}function getNextChildMapping(nextProps,prevChildMapping,onExited){var nextChildMapping=getChildMapping(nextProps.children),children=function mergeChildMappings(prev,next){function getValueForKey(key){return key in next?next[key]:prev[key]}prev=prev||{},next=next||{};var i,nextKeysPending=Object.create(null),pendingKeys=[];for(var prevKey in prev)prevKey in next?pendingKeys.length&&(nextKeysPending[prevKey]=pendingKeys,pendingKeys=[]):pendingKeys.push(prevKey);var childMapping={};for(var nextKey in next){if(nextKeysPending[nextKey])for(i=0;i<nextKeysPending[nextKey].length;i++){var pendingNextKey=nextKeysPending[nextKey][i];childMapping[nextKeysPending[nextKey][i]]=getValueForKey(pendingNextKey)}childMapping[nextKey]=getValueForKey(nextKey)}for(i=0;i<pendingKeys.length;i++)childMapping[pendingKeys[i]]=getValueForKey(pendingKeys[i]);return childMapping}(prevChildMapping,nextChildMapping);return Object.keys(children).forEach((function(key){var child=children[key];if((0,react.isValidElement)(child)){var hasPrev=key in prevChildMapping,hasNext=key in nextChildMapping,prevChild=prevChildMapping[key],isLeaving=(0,react.isValidElement)(prevChild)&&!prevChild.props.in;!hasNext||hasPrev&&!isLeaving?hasNext||!hasPrev||isLeaving?hasNext&&hasPrev&&(0,react.isValidElement)(prevChild)&&(children[key]=(0,react.cloneElement)(child,{onExited:onExited.bind(null,child),in:prevChild.props.in,exit:getProp(child,"exit",nextProps),enter:getProp(child,"enter",nextProps)})):children[key]=(0,react.cloneElement)(child,{in:!1}):children[key]=(0,react.cloneElement)(child,{onExited:onExited.bind(null,child),in:!0,exit:getProp(child,"exit",nextProps),enter:getProp(child,"enter",nextProps)})}})),children}var values=Object.values||function(obj){return Object.keys(obj).map((function(k){return obj[k]}))},TransitionGroup=function(_React$Component){function TransitionGroup(props,context){var _this,handleExited=(_this=_React$Component.call(this,props,context)||this).handleExited.bind(function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(_this));return _this.state={contextValue:{isMounting:!0},handleExited,firstRender:!0},_this}_inheritsLoose(TransitionGroup,_React$Component);var _proto=TransitionGroup.prototype;return _proto.componentDidMount=function componentDidMount(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},_proto.componentWillUnmount=function componentWillUnmount(){this.mounted=!1},TransitionGroup.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,_ref){var props,onExited,prevChildMapping=_ref.children,handleExited=_ref.handleExited;return{children:_ref.firstRender?(props=nextProps,onExited=handleExited,getChildMapping(props.children,(function(child){return(0,react.cloneElement)(child,{onExited:onExited.bind(null,child),in:!0,appear:getProp(child,"appear",props),enter:getProp(child,"enter",props),exit:getProp(child,"exit",props)})}))):getNextChildMapping(nextProps,prevChildMapping,handleExited),firstRender:!1}},_proto.handleExited=function handleExited(child,node){var currentChildMapping=getChildMapping(this.props.children);child.key in currentChildMapping||(child.props.onExited&&child.props.onExited(node),this.mounted&&this.setState((function(state){var children=_extends({},state.children);return delete children[child.key],{children}})))},_proto.render=function render(){var _this$props=this.props,Component=_this$props.component,childFactory=_this$props.childFactory,props=_objectWithoutPropertiesLoose(_this$props,["component","childFactory"]),contextValue=this.state.contextValue,children=values(this.state.children).map(childFactory);return delete props.appear,delete props.enter,delete props.exit,null===Component?react.createElement(TransitionGroupContext.Provider,{value:contextValue},children):react.createElement(TransitionGroupContext.Provider,{value:contextValue},react.createElement(Component,props,children))},TransitionGroup}(react.Component);TransitionGroup.propTypes={},TransitionGroup.defaultProps={component:"div",childFactory:function childFactory(child){return child}};const esm_TransitionGroup=TransitionGroup;function replaceClassName(origClass,classToRemove){return origClass.replace(new RegExp("(^|\\s)"+classToRemove+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const config_disabled=!1;var forceReflow=function forceReflow(node){return node.scrollTop},Transition=function(_React$Component){function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var initialStatus,appear=context&&!context.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus="exited",_this.appearStatus="entering"):initialStatus="entered":initialStatus=props.unmountOnExit||props.mountOnEnter?"unmounted":"exited",_this.state={status:initialStatus},_this.nextCallback=null,_this}_inheritsLoose(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&"unmounted"===prevState.status?{status:"exited"}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?"entering"!==status&&"entered"!==status&&(nextStatus="entering"):"entering"!==status&&"entered"!==status||(nextStatus="exiting")}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit,enter,appear}},_proto.updateStatus=function updateStatus(mounting,nextStatus){if(void 0===mounting&&(mounting=!1),null!==nextStatus)if(this.cancelNextCallback(),"entering"===nextStatus){if(this.props.unmountOnExit||this.props.mountOnEnter){var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this);node&&forceReflow(node)}this.performEnter(mounting)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,appearing=this.context?this.context.isMounting:mounting,_ref2=this.props.nodeRef?[appearing]:[react_dom.findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1],timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;!mounting&&!enter||config_disabled?this.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode)})):(this.props.onEnter(maybeNode,maybeAppearing),this.safeSetState({status:"entering"},(function(){_this2.props.onEntering(maybeNode,maybeAppearing),_this2.onTransitionEnd(enterTimeout,(function(){_this2.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode,maybeAppearing)}))}))})))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts(),maybeNode=this.props.nodeRef?void 0:react_dom.findDOMNode(this);exit&&!config_disabled?(this.props.onExit(maybeNode),this.safeSetState({status:"exiting"},(function(){_this3.props.onExiting(maybeNode),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))}))}))):this.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this),doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(node&&!doesNotHaveTimeoutOrListener){if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback)}null!=timeout&&setTimeout(this.nextCallback,timeout)}else setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if("unmounted"===status)return null;var _this$props=this.props,children=_this$props.children,childProps=(_this$props.in,_this$props.mountOnEnter,_this$props.unmountOnExit,_this$props.appear,_this$props.enter,_this$props.exit,_this$props.timeout,_this$props.addEndListener,_this$props.onEnter,_this$props.onEntering,_this$props.onEntered,_this$props.onExit,_this$props.onExiting,_this$props.onExited,_this$props.nodeRef,_objectWithoutPropertiesLoose(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return react.createElement(TransitionGroupContext.Provider,{value:null},"function"==typeof children?children(status,childProps):react.cloneElement(react.Children.only(children),childProps))},Transition}(react.Component);function noop(){}Transition.contextType=TransitionGroupContext,Transition.propTypes={},Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition.UNMOUNTED="unmounted",Transition.EXITED="exited",Transition.ENTERING="entering",Transition.ENTERED="entered",Transition.EXITING="exiting";const esm_Transition=Transition;var removeClass=function removeClass(node,classes){return node&&classes&&classes.split(" ").forEach((function(c){return function removeClass_removeClass(element,className){element.classList?element.classList.remove(className):"string"==typeof element.className?element.className=replaceClassName(element.className,className):element.setAttribute("class",replaceClassName(element.className&&element.className.baseVal||"",className))}(node,c)}))},CSSTransition=function(_React$Component){function CSSTransition(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).appliedClasses={appear:{},enter:{},exit:{}},_this.onEnter=function(maybeNode,maybeAppearing){var _this$resolveArgument=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument[0],appearing=_this$resolveArgument[1];_this.removeClasses(node,"exit"),_this.addClass(node,appearing?"appear":"enter","base"),_this.props.onEnter&&_this.props.onEnter(maybeNode,maybeAppearing)},_this.onEntering=function(maybeNode,maybeAppearing){var _this$resolveArgument2=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument2[0],type=_this$resolveArgument2[1]?"appear":"enter";_this.addClass(node,type,"active"),_this.props.onEntering&&_this.props.onEntering(maybeNode,maybeAppearing)},_this.onEntered=function(maybeNode,maybeAppearing){var _this$resolveArgument3=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument3[0],type=_this$resolveArgument3[1]?"appear":"enter";_this.removeClasses(node,type),_this.addClass(node,type,"done"),_this.props.onEntered&&_this.props.onEntered(maybeNode,maybeAppearing)},_this.onExit=function(maybeNode){var node=_this.resolveArguments(maybeNode)[0];_this.removeClasses(node,"appear"),_this.removeClasses(node,"enter"),_this.addClass(node,"exit","base"),_this.props.onExit&&_this.props.onExit(maybeNode)},_this.onExiting=function(maybeNode){var node=_this.resolveArguments(maybeNode)[0];_this.addClass(node,"exit","active"),_this.props.onExiting&&_this.props.onExiting(maybeNode)},_this.onExited=function(maybeNode){var node=_this.resolveArguments(maybeNode)[0];_this.removeClasses(node,"exit"),_this.addClass(node,"exit","done"),_this.props.onExited&&_this.props.onExited(maybeNode)},_this.resolveArguments=function(maybeNode,maybeAppearing){return _this.props.nodeRef?[_this.props.nodeRef.current,maybeNode]:[maybeNode,maybeAppearing]},_this.getClassNames=function(type){var classNames=_this.props.classNames,isStringClassNames="string"==typeof classNames,baseClassName=isStringClassNames?""+(isStringClassNames&&classNames?classNames+"-":"")+type:classNames[type];return{baseClassName,activeClassName:isStringClassNames?baseClassName+"-active":classNames[type+"Active"],doneClassName:isStringClassNames?baseClassName+"-done":classNames[type+"Done"]}},_this}_inheritsLoose(CSSTransition,_React$Component);var _proto=CSSTransition.prototype;return _proto.addClass=function addClass(node,type,phase){var className=this.getClassNames(type)[phase+"ClassName"],doneClassName=this.getClassNames("enter").doneClassName;"appear"===type&&"done"===phase&&doneClassName&&(className+=" "+doneClassName),"active"===phase&&node&&forceReflow(node),className&&(this.appliedClasses[type][phase]=className,function addClass(node,classes){node&&classes&&classes.split(" ").forEach((function(c){return function addClass_addClass(element,className){element.classList?element.classList.add(className):function hasClass(element,className){return element.classList?!!className&&element.classList.contains(className):-1!==(" "+(element.className.baseVal||element.className)+" ").indexOf(" "+className+" ")}(element,className)||("string"==typeof element.className?element.className=element.className+" "+className:element.setAttribute("class",(element.className&&element.className.baseVal||"")+" "+className))}(node,c)}))}(node,className))},_proto.removeClasses=function removeClasses(node,type){var _this$appliedClasses$=this.appliedClasses[type],baseClassName=_this$appliedClasses$.base,activeClassName=_this$appliedClasses$.active,doneClassName=_this$appliedClasses$.done;this.appliedClasses[type]={},baseClassName&&removeClass(node,baseClassName),activeClassName&&removeClass(node,activeClassName),doneClassName&&removeClass(node,doneClassName)},_proto.render=function render(){var _this$props=this.props,props=(_this$props.classNames,_objectWithoutPropertiesLoose(_this$props,["classNames"]));return react.createElement(esm_Transition,_extends({},props,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},CSSTransition}(react.Component);CSSTransition.defaultProps={classNames:""},CSSTransition.propTypes={};const esm_CSSTransition=CSSTransition;var lib=__webpack_require__("./node_modules/react-player/lib/index.js"),lib_default=__webpack_require__.n(lib),process=__webpack_require__("./node_modules/process/browser.js");const HomeIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"})),MenuIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 6h15M4.5 12h15M4.5 18h15"})),XIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor"},react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})),MoneyIcon2=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},react.createElement("g",{clipPath:"url(#clip0_443_3628)"},react.createElement("rect",{x:"2",y:"6",width:"20",height:"12",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M22 10C21.4747 10 20.9546 9.89654 20.4693 9.69552C19.984 9.4945 19.543 9.19986 19.1716 8.82843C18.8001 8.45699 18.5055 8.01604 18.3045 7.53073C18.1035 7.04543 18 6.52529 18 6L22 6L22 10Z",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M18 18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14L22 18L18 18Z",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M2 14C3.06087 14 4.07828 14.4214 4.82843 15.1716C5.57857 15.9217 6 16.9391 6 18L2 18L2 14Z",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M6 6C6 7.06087 5.57857 8.07828 4.82843 8.82843C4.07828 9.57857 3.06087 10 2 10L2 6H6Z",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M14.0741 9.5H11.3333C10.597 9.5 10 10.0596 10 10.75C10 11.4404 10.597 12 11.3333 12H13.1111C13.8475 12 14.4444 12.5596 14.4444 13.25C14.4444 13.9404 13.8475 14.5 13.1111 14.5H10",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M12 9.51733V8.5",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M12 15.5173V14.5",stroke:"currentColor",strokeWidth:"1.416",strokeLinecap:"round",strokeLinejoin:"round"})),react.createElement("defs",null,react.createElement("clipPath",{id:"clip0_443_3628"},react.createElement("rect",{width:"24",height:"24",fill:"white"})))),SortIcon=({className})=>react.createElement("svg",{className,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M22 7L2 7",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"}),react.createElement("path",{d:"M19 12L5 12",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"}),react.createElement("path",{d:"M16 17H8",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})),ArrowRightIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"1.7",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},react.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),react.createElement("line",{x1:"-5",y1:"12",x2:"19",y2:"12"}),react.createElement("line",{x1:"15",y1:"16",x2:"19",y2:"12"}),react.createElement("line",{x1:"15",y1:"8",x2:"19",y2:"12"})),ButtonArrowIcon=({className})=>react.createElement("svg",{className,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})),ChevronDownIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.011 512.011",fill:"currentColor"},react.createElement("path",{d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0\r s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667\r C514.096,145.416,514.096,131.933,505.755,123.592z"})),ForkAndKnifeIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},react.createElement("path",{d:"M207.103,23.875v109.219c0,7-5.656,12.641-12.625,12.641h-3.375c-6.969,0-12.641-5.641-12.641-12.641V23.375\r c0-18-12.109-23.375-23.719-23.375s-23.719,5.375-23.719,23.375v109.719c0,7-5.672,12.641-12.641,12.641h-3.375\r c-6.969,0-12.625-5.641-12.625-12.641V23.875c0-32.219-45.938-31.125-45.938,0.359c0,37.703,0,104.297,0,104.297\r c-0.219,57.906,13.625,72.953,36.469,91c18.422,14.531,34.156,22.859,34.156,58.953v232.188h55.344V278.484\r c0-36.094,15.734-44.422,34.156-58.953c22.859-18.047,36.688-33.094,36.469-91c0,0,0-66.594,0-104.297\r C253.04-7.25,207.103-8.344,207.103,23.875z"}),react.createElement("path",{d:"M385.228,34.75c-11.75,32.953-45.578,110.156-47.719,178.344c-3.313,105.844,61.547,90.188,62.703,159.531\r v138.688h55.078l0.266,0.688c0,0,0-0.281,0-0.688c0-9.266,0-119.625,0-232.203c0-111.359,0-224.797,0-244.359\r C455.556-5.438,403.524-16.531,385.228,34.75z"})),ClockIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"})),ChevronLeftIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},react.createElement("path",{d:"M15 19L8 12L15 5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),BookmarkIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"})),ChevronRightIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("polyline",{fill:"none",points:"8.5 5 15.5 12 8.5 19",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})),ChevronUpDownIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M5.70711 16.1359C5.31659 16.5264 5.31659 17.1596 5.70711 17.5501L10.5993 22.4375C11.3805 23.2179 12.6463 23.2176 13.4271 22.4369L18.3174 17.5465C18.708 17.156 18.708 16.5228 18.3174 16.1323C17.9269 15.7418 17.2937 15.7418 16.9032 16.1323L12.7176 20.3179C12.3271 20.7085 11.6939 20.7085 11.3034 20.3179L7.12132 16.1359C6.7308 15.7454 6.09763 15.7454 5.70711 16.1359Z"}),react.createElement("path",{d:"M18.3174 7.88675C18.708 7.49623 18.708 6.86307 18.3174 6.47254L13.4252 1.58509C12.644 0.804698 11.3783 0.805008 10.5975 1.58579L5.70711 6.47615C5.31658 6.86667 5.31658 7.49984 5.70711 7.89036C6.09763 8.28089 6.7308 8.28089 7.12132 7.89036L11.307 3.70472C11.6975 3.31419 12.3307 3.31419 12.7212 3.70472L16.9032 7.88675C17.2937 8.27728 17.9269 8.27728 18.3174 7.88675Z"})),TrashIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},react.createElement("path",{d:"M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),CalendarIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},react.createElement("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2",ry:"2",stroke:"currentColor",strokeWidth:"2"}),react.createElement("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"2"}),react.createElement("line",{x1:"8",y1:"4",x2:"8",y2:"2",stroke:"currentColor",strokeWidth:"2"}),react.createElement("line",{x1:"16",y1:"4",x2:"16",y2:"2",stroke:"currentColor",strokeWidth:"2"})),LettzIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"42.135 129.213 281.601 273.175",fill:"currentColor"},react.createElement("g",null,react.createElement("rect",{x:"57.584",y:"141.502",width:"53.371",height:"243.68",rx:"3.511",ry:"3.511",fill:"currentColor"})),react.createElement("g",null,react.createElement("g",null,react.createElement("rect",{x:"58.288",y:"331.812",width:"251.404",height:"54.775",rx:"2.809",ry:"2.809",fill:"currentColor"}))),react.createElement("rect",{x:"124.298",y:"143.61",width:"182.584",height:"54.073",rx:"2.809",ry:"2.809",fill:"currentColor"}),react.createElement("rect",{x:"126.404",y:"267.205",width:"182.584",height:"49.86",rx:"3.511",ry:"3.511",fill:"currentColor"}),react.createElement("path",{d:"M306.18 143.609L304.775 198.385C304.775 202.986 125 315.66 125 315.66L125.702 265.098L306.18 143.609Z",fill:"currentColor",fillRule:"nonzero"})),EditIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}),react.createElement("polygon",{fill:"none",points:"12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})),LocationIcon=({className})=>react.createElement("svg",{className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},react.createElement("path",{d:"M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),react.createElement("path",{d:"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}));styled_components_browser_esm.Ay.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  border-left: 8px solid green;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`,styled_components_browser_esm.Ay.div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`,styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  padding: 16px;
  
`,styled_components_browser_esm.Ay.p`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`,styled_components_browser_esm.Ay.p`
  font-size: 18px;
  font-weight: medium;
  color: #4a5568;
`,styled_components_browser_esm.Ay.p`
  font-size: 16px;
  font-weight: medium;
  color: #2d3748;
`,styled_components_browser_esm.Ay.div`
  width: 25%;
  text-align: center;
  padding-right: 16px;
`,styled_components_browser_esm.Ay.div`
  max-height: ${props=>props.isOpen?"240px":"0"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`,styled_components_browser_esm.Ay.p`
  padding: 24px;
  background-color: #f7fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #4a5568;
`;styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height to position footer at the bottom */
  padding: 2rem; /* Increased padding for larger layout */
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  display: flex;
  align-items: center;
  padding: 24px; /* Increased padding */
  background-color: #ffffff; /* White background */
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-decoration: none;
  color: inherit;
  margin-bottom: 2rem; /* Space below the profile section */
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`,styled_components_browser_esm.Ay.div`
  width: 80px; /* Increased size */
  height: 80px; /* Increased size */
  border-radius: 50%;
  background-image: url(${props=>props.image||"https://via.placeholder.com/80"});
  background-size: cover;
  background-position: center;
  margin-right: 24px; /* Increased margin */
`,styled_components_browser_esm.Ay.div`
  flex-grow: 1;
`,styled_components_browser_esm.Ay.div`
  font-size: 1.5rem; /* Larger font size */
  font-weight: bold;
  color: #333;
`,styled_components_browser_esm.Ay.div`
  font-size: 1rem; /* Increased font size */
  color: #666;
`,styled_components_browser_esm.Ay.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  svg {
    width: 24px; /* Increased icon size */
    height: 24px;
    color: #666;
  }
`,styled_components_browser_esm.Ay.button`
  background-color: #f3f4f6; /* Light gray */
  color: #dc2626; /* Red text */
  border: none;
  border-radius: 0.375rem; /* Rounded corners */
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%; /* Full width */
  text-align: center;

  &:hover {
    background-color: #e5e7eb; /* Slightly darker gray */
  }
`,styled_components_browser_esm.Ay.footer`
  margin-top: auto; /* Push footer to the bottom */
  text-align: center;
  padding: 1.5rem 0; /* Increased padding */
  font-size: 1rem; /* Increased font size */
  color: #6b7280; /* Equivalent to text-gray-500 */
`,styled_components_browser_esm.Ay.div`
  margin-top: 0.75rem; /* Increased margin */

  a {
    color: #2563eb; /* Equivalent to text-blue-600 */
    text-decoration: none;
    margin: 0 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`,styled_components_browser_esm.Ay.div`
  padding: 16px;
  font-size: 1.25rem; /* Increased font size */
  color: #666;
  text-align: center;
`;const DrawerContainer$1=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: opacity ${({transitionDuration})=>transitionDuration}ms ease-in-out;
  opacity: ${({isOpen})=>isOpen?"1":"0"};
  pointer-events: ${({isOpen})=>isOpen?"auto":"none"};
`,BackgroundOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity ${({transitionDuration})=>transitionDuration}ms ease-in-out;
  opacity: ${({isOpen})=>isOpen?"1":"0"};
`,Drawer$1=styled_components_browser_esm.Ay.div`
  width: 100%;
  max-width: ${({maxWidth})=>maxWidth};
  height: ${({autoHeight,height})=>autoHeight?"auto":height};
  background-color: white;
  ${({noRoundedCorners})=>noRoundedCorners?styled_components_browser_esm.AH`
          border-radius: 0;
        `:styled_components_browser_esm.AH`
          border-radius: 16px 16px 0 0;
        `}
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${({isOpen})=>isOpen?"translateY(0)":"translateY(100%)"};
  transition: transform ${({transitionDuration})=>transitionDuration}ms ease-in-out,
    opacity ${({transitionDuration})=>transitionDuration}ms ease-in-out;
  opacity: ${({isOpen})=>isOpen?"1":"0"};
  display: flex;
  flex-direction: column;
`,Handle=styled_components_browser_esm.Ay.div`
  width: 48px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 9999px;
  margin: 8px auto;
  display: ${({hideHandle})=>hideHandle?"none":"block"};
`,DrawerContent$1=styled_components_browser_esm.Ay.div`
  flex: 1;
  overflow-y: ${({autoHeight})=>autoHeight?"visible":"auto"};
`;function BottomDrawer({isOpen,onClose,children,transitionDuration=300,height="80vh",autoHeight=!1,maxWidth="600px",hideHandle=!1,noRoundedCorners=!1}){const drawerRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const handleClickOutside=event=>{drawerRef.current&&!drawerRef.current.contains(event.target)&&onClose()};return isOpen?(document.addEventListener("mousedown",handleClickOutside),document.body.style.overflow="hidden"):document.body.style.overflow="auto",()=>{document.removeEventListener("mousedown",handleClickOutside),document.body.style.overflow="auto"}}),[isOpen,onClose]),(0,react_dom.createPortal)(react.createElement(DrawerContainer$1,{isOpen,transitionDuration},react.createElement(BackgroundOverlay,{isOpen,onClick:onClose,transitionDuration}),react.createElement(Drawer$1,{ref:drawerRef,isOpen,transitionDuration,height,autoHeight,maxWidth,noRoundedCorners},react.createElement(Handle,{hideHandle})," ",react.createElement(DrawerContent$1,{autoHeight},children))),document.body)}styled_components_browser_esm.Ay.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 40;
`,(0,styled_components_browser_esm.Ay)(dist.k2)`
  position: relative;
  color: #6b7280;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;

  &.active {
    color: ${({activeColor})=>activeColor||"#000"};
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 0.25rem;
  }
`,styled_components_browser_esm.Ay.span`
  position: absolute;
  top: 4px;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
`;const Card3=({description,linkText})=>react.createElement("div",{className:"group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"},react.createElement("span",{className:"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"}),react.createElement("div",{className:"relative z-10 mx-auto max-w-md"},react.createElement("span",{className:"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500"},react.createElement("svg",{className:"h-12 w-12 text-white transition-all",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",strokeLinejoin:"round",strokeLinecap:"round"}))),react.createElement("div",{className:"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"},react.createElement("p",{className:"font-medium"},description)),react.createElement("div",{className:"pt-6 text-lg font-semibold leading-7"},react.createElement("p",null,react.createElement("span",{className:"text-purple-500 transition-all duration-500 group-hover:text-white"},linkText," →")))));Card3.propTypes={description:prop_types_default().string,linkText:prop_types_default().string},Card3.defaultProps={description:"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.",linkText:"Explore Documentation"};function index_es_extends(){return index_es_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},index_es_extends.apply(null,arguments)}styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`,styled_components_browser_esm.Ay.label`
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.div`
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
  }`,styled_components_browser_esm.Ay.div`
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
  }`;const Container$5=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 91.666667%; /* Equivalent to w-11/12 */
  margin: 0 auto;
  user-select: none;
  gap: 1rem;
  max-width: 500px;
`,Label$4=styled_components_browser_esm.Ay.label`
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
  width: ${({width})=>width};
  height: ${({height})=>height};

  /* Checked State */
  ${HiddenCheckbox}:checked + & {
    border-color: ${({color})=>color||"#3b82f6"}; /* Default to blue-500 */
    box-shadow: 0 4px 6px ${({color})=>color}33; /* 10% opacity */
    color: ${({color})=>color||"#3b82f6"};

    &::before {
      content: '✓';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid ${({color})=>color||"#3b82f6"};
      border-radius: 50%;
      background-color: ${({color})=>color||"#3b82f6"};
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
    border: 3px solid ${({color})=>color||"#3b82f6"};
    border-radius: 50%;
    background-color: ${({color})=>color||"#3b82f6"};
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
`,CheckedItem=({label,svg,onChange,checked,height="7rem",width="7rem",color="#3b82f6",required})=>react.createElement(Container$5,null,react.createElement(Label$4,null,react.createElement(HiddenCheckbox,{onChange,checked,required}),react.createElement(StyledSpan,{height,width,color},react.createElement("span",null,svg),react.createElement("span",null,label)))),ItemWrapper=(styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 8px;
  font-weight: 600;
`,styled_components_browser_esm.Ay.input`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  cursor: pointer;
`,styled_components_browser_esm.Ay.div`
  padding: 24px;
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: auto;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
`,styled_components_browser_esm.Ay.div`
  font-size: 24px;
  margin-top: 4px;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`,styled_components_browser_esm.Ay.span`
  font-weight: bold;
  margin-bottom: 4px;
`,styled_components_browser_esm.Ay.span`
  color: #555;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  display: flex;
  align-items: center;
  height: 100px; /* Equivalent to h-20 */
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  position: relative; /* To position the timestamp */
  &:hover {
    background-color: #f9fafb;
  }
`),Avatar=styled_components_browser_esm.Ay.img`
  width: 50px;
  height: 50px;
  border-radius: 9999px; /* Equivalent to rounded-full */
  margin-right: 1rem;
`,Details=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative; /* To position the timestamp */
`,Header$6=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Name=styled_components_browser_esm.Ay.span`
  font-size: 1.3rem; /* Equivalent to text-base */
  font-weight: 600; /* Equivalent to font-semibold */
`,Timestamp=styled_components_browser_esm.Ay.span`
  font-size: 0.75rem; /* Smaller font size */
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,LastMessage=styled_components_browser_esm.Ay.span`
  font-size: 0.875rem; /* Equivalent to text-sm */
  color: #6b7280; /* Equivalent to text-gray-500 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`,ConversationItem=({conversation,currentUser})=>{const otherParticipant=conversation.participants.find((p=>p.uid!==currentUser.uid));if(!otherParticipant)return null;const formattedTimestamp=conversation.lastMessage?.timestamp?(timestamp=>{if(!timestamp)return"";const messageDate=timestamp.toDate?timestamp.toDate():new Date(timestamp),now=new Date,diffTime=new Date(now.getFullYear(),now.getMonth(),now.getDate())-new Date(messageDate.getFullYear(),messageDate.getMonth(),messageDate.getDate()),diffDays=Math.floor(diffTime/864e5);return 0===diffDays?"Today":1===diffDays?"Yesterday":`${diffDays} days ago`})(conversation.lastMessage.timestamp):"";return react.createElement(ItemWrapper,{to:`/conversation/${conversation.id}`},react.createElement(Avatar,{src:otherParticipant.avatarUrl,alt:`${otherParticipant.name}'s avatar`}),react.createElement(Details,null,react.createElement(Header$6,null,react.createElement(Name,null,otherParticipant.name),react.createElement(Timestamp,null,formattedTimestamp)),react.createElement(LastMessage,null,conversation.lastMessage.text)))},ListWrapper=styled_components_browser_esm.Ay.div`
`,ConversationList=({conversations,currentUser})=>react.createElement(ListWrapper,null,conversations.map((conversation=>react.createElement(ConversationItem,{key:conversation.id,conversation,currentUser})))),CardContainer$2=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 800px;
  align-items: stretch;
  aspect-ratio: 3 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ImageContainer$3=styled_components_browser_esm.Ay.div`
  flex: 0 0 40%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 4 / 3;

  &::before {
    content: "";
    display: block;
    padding-top: 75%; /* Maintain 4:3 aspect ratio */
    background-color: #e2e8f0; /* Placeholder background color */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`,RecipeImage$1=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
`,CardContent$2=styled_components_browser_esm.Ay.div`
  flex: 1;
  padding: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,CardTitle$1=styled_components_browser_esm.Ay.h3`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #2d3748;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,CardSubtitle=styled_components_browser_esm.Ay.p`
  font-weight: 500;
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
`,CardDetails=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #718096;
  flex-wrap: wrap;
`,CardDetail=styled_components_browser_esm.Ay.span`
  background-color: #edf2f7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`,CookbookCard=({cookbook,onCardClick})=>{const{chef,cuisine,title,imageUrl,numberOfRecipes}=cookbook;return react.createElement(CardContainer$2,{onClick:onCardClick},react.createElement(ImageContainer$3,null,react.createElement(RecipeImage$1,{src:imageUrl,alt:title})),react.createElement(CardContent$2,null,react.createElement(CardTitle$1,null,title),react.createElement(CardSubtitle,null,"By ",chef),react.createElement(CardDetails,null,react.createElement(CardDetail,null,"Cuisine: ",cuisine),react.createElement(CardDetail,null,"Recipes: ",numberOfRecipes))))},CookbookProfile=({isProfileOwner,userData,setIsSubscriptionModalOpen,openDrawer})=>react.createElement("div",{className:"relative mt-12 mb-20 flex min-h-screen w-full flex-col items-center"},react.createElement("div",{className:"aspect-[10/4] w-full relative"},react.createElement("img",{src:userData.coverPhoto,className:"absolute h-full w-full object-cover",alt:"Cover"}),react.createElement("div",{className:"relative flex h-full w-full"},react.createElement("div",{className:"z-10 flex w-[30%] items-center justify-center"},react.createElement("img",{src:userData.profilePic,className:"aspect-[1/1] w-[80%] rounded-full border-2 border-white",alt:"Profile"})),react.createElement("div",{className:"flex w-[40%] flex-col"},react.createElement("div",{className:"flex h-[50%]"}),react.createElement("div",{className:"z-20 flex flex-col text-lg font-semibold text-white md:text-xl"},react.createElement("div",{className:"absolute bottom-2 right-2 flex flex-row gap-2"},react.createElement("div",{className:"px-1 bg-blue-500 rounded"},"x"),react.createElement("div",{className:"px-1 bg-blue-300 rounded"},"x"),react.createElement("div",{className:"px-1 bg-red-500 rounded"},"x"),react.createElement("div",{className:"px-1 bg-black rounded"},"x")))),react.createElement("div",{className:"z-20 flex flex-col text-lg font-semibold text-white md:text-xl"},react.createElement("p",null,userData.firstName," ",userData.lastName),react.createElement("p",{className:"text-sm font-normal md:text-lg mb-2"},userData.categories)),react.createElement("div",{className:"absolute right-0 h-[100%] w-[30%] bg-gray-500 opacity-50"})),!isProfileOwner&&react.createElement(react.Fragment,null,react.createElement("button",{onClick:()=>setIsSubscriptionModalOpen(!0),className:"absolute top-2 right-2 flex items-center justify-center rounded bg-white p-1 text-custom-brown shadow-md font-semibold"},"+ Subscribe"),react.createElement("button",{onClick:openDrawer,className:"absolute top-20 right-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"},"Open Drawer"))));prop_types_default().node.isRequired,prop_types_default().oneOf(["primary","secondary","success","danger"]),prop_types_default().oneOf(["sm","md","lg"]),prop_types_default().string;styled_components_browser_esm.Ay.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.input`
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;const DateTimeWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Label$2=styled_components_browser_esm.Ay.label`
  margin-bottom: 8px;
  font-weight: 600;
`,DateTimeInput=styled_components_browser_esm.Ay.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`,DateTimeLocalInput=({label,name,value,onChange,min,max,required,disabled,className,...props})=>react.createElement(DateTimeWrapper,{gridSpan:props.gridSpan,className},react.createElement(Label$2,{htmlFor:name},label),react.createElement(DateTimeInput,{type:"datetime-local",id:name,name,value,onChange:e=>onChange(e),min,max,required,disabled}));DateTimeLocalInput.propTypes={label:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired,onChange:prop_types_default().func.isRequired,min:prop_types_default().string,max:prop_types_default().string,required:prop_types_default().bool,disabled:prop_types_default().bool,className:prop_types_default().string},DateTimeLocalInput.defaultProps={min:void 0,max:void 0,required:!1,disabled:!1,className:""};const fadeIn$1=styled_components_browser_esm.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideDown=styled_components_browser_esm.i7`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Button$b=(styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn$1} 0.3s ease-out forwards;
  z-index: 1000; /* Ensure it sits above other elements */
`,styled_components_browser_esm.Ay.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,styled_components_browser_esm.Ay.svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444; /* Red color for the icon */
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,styled_components_browser_esm.Ay.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,styled_components_browser_esm.Ay.button`
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
`);(0,styled_components_browser_esm.Ay)(Button$b)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;

  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`,(0,styled_components_browser_esm.Ay)(Button$b)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;

  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`;var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};"function"==typeof setImmediate||void 0!==process&&process.nextTick&&process.nextTick;var NativeCustomEvent=commonjsGlobal.CustomEvent;var customEvent=function useNative(){try{var p=new NativeCustomEvent("cat",{detail:{foo:"bar"}});return"cat"===p.type&&"bar"===p.detail.foo}catch(e){}return!1}()?NativeCustomEvent:"undefined"!=typeof document&&"function"==typeof document.createEvent?function CustomEvent(type,params){var e=document.createEvent("CustomEvent");return params?e.initCustomEvent(type,params.bubbles,params.cancelable,params.detail):e.initCustomEvent(type,!1,!1,void 0),e}:function CustomEvent(type,params){var e=document.createEventObject();return e.type=type,params?(e.bubbles=Boolean(params.bubbles),e.cancelable=Boolean(params.cancelable),e.detail=params.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},eventmap=[],eventname="",ron=/^on/;for(eventname in commonjsGlobal)ron.test(eventname)&&eventmap.push(eventname.slice(2));var eventmap_1=eventmap,doc$1=commonjsGlobal.document,addEvent=function addEventEasy(el,type,fn,capturing){return el.addEventListener(type,fn,capturing)},removeEvent=function removeEventEasy(el,type,fn,capturing){return el.removeEventListener(type,fn,capturing)},hardCache=[];commonjsGlobal.addEventListener||(addEvent=function addEventHard(el,type,fn){return el.attachEvent("on"+type,function wrap(el,type,fn){var wrapper=unwrap(el,type,fn)||function wrapperFactory(el,type,fn){return function wrapper(originalEvent){var e=originalEvent||commonjsGlobal.event;e.target=e.target||e.srcElement,e.preventDefault=e.preventDefault||function preventDefault(){e.returnValue=!1},e.stopPropagation=e.stopPropagation||function stopPropagation(){e.cancelBubble=!0},e.which=e.which||e.keyCode,fn.call(el,e)}}(el,0,fn);return hardCache.push({wrapper,element:el,type,fn}),wrapper}(el,type,fn))},removeEvent=function removeEventHard(el,type,fn){var listener=unwrap(el,type,fn);if(listener)return el.detachEvent("on"+type,listener)});var crossvent={add:addEvent,remove:removeEvent,fabricate:function fabricateEvent(el,type,model){var e=-1===eventmap_1.indexOf(type)?function makeCustomEvent(){return new customEvent(type,{detail:model})}():function makeClassicEvent(){var e;doc$1.createEvent?(e=doc$1.createEvent("Event")).initEvent(type,!0,!0):doc$1.createEventObject&&(e=doc$1.createEventObject());return e}();el.dispatchEvent?el.dispatchEvent(e):el.fireEvent("on"+type,e)}};function unwrap(el,type,fn){var i=function find(el,type,fn){var i,item;for(i=0;i<hardCache.length;i++)if((item=hardCache[i]).element===el&&item.type===type&&item.fn===fn)return i}(el,type,fn);if(i){var wrapper=hardCache[i].wrapper;return hardCache.splice(i,1),wrapper}}crossvent.add,crossvent.remove,crossvent.fabricate;var doc=document;doc.documentElement;const Page$1=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
`,Header$5=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb; /* light tailwind-gray */
`,BackButton$3=styled_components_browser_esm.Ay.button`
  position: absolute;
  left: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`,Title$5=styled_components_browser_esm.Ay.h1`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
`,Footer$1=styled_components_browser_esm.Ay.footer`
  margin-top: 24px;
`,SaveButton=styled_components_browser_esm.Ay.button`
  padding: 10px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: #2563eb;
  }
`,EditSettingsTemplate=({headerTitle="Settings",sections=[],initialValues={},onSave})=>{const navigate=(0,react_router_dist.Zp)(),[formData,setFormData]=(0,react.useState)(initialValues),updateState=(fieldName,value)=>{setFormData((prev=>({...prev,[fieldName]:value})))};return react.createElement(Page$1,null,react.createElement(Header$5,null,react.createElement(BackButton$3,{onClick:()=>navigate(-1)},react.createElement(fi.irw,{size:24})),react.createElement(Title$5,null,headerTitle)),react.createElement("main",null,sections.map((({title,fields},idx)=>react.createElement(EditStackedList,{key:idx,title,items:fields.map((({name,type,fieldName,options})=>({type,props:{name,fieldName,currentState:formData[fieldName],value:formData[fieldName],options}}))),updateState})))),react.createElement(Footer$1,null,react.createElement(SaveButton,{onClick:()=>{onSave?onSave(formData):(console.log("Form Data:",formData),alert("Changes saved!"))}},"Save Changes")))},FieldContainer$3=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,FieldName$3=styled_components_browser_esm.Ay.div`
  font-size: 14px; /* Slightly larger for better readability */
  font-weight: 600; /* Makes it bold for emphasis */
  color: #6b7280; /* Tailwind's gray-500 equivalent */
`,EditableInput=styled_components_browser_esm.Ay.input`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Tailwind's gray-900 equivalent */
  background-color: transparent; /* Removes background */
  padding: 4px 0 2px; /* Adds vertical padding, no horizontal padding */
  border: none; /* Removes all borders */
  border-bottom: 2px solid #d1d5db; /* Bottom border only */
  transition: border-color 0.3s ease; /* Smooth transition for focus effect */
  outline: none; /* Removes default focus outline */

  &:focus {
    border-bottom: 2px solid #3b82f6; /* Blue bottom border on focus */
  }

  &:hover {
    border-bottom: 2px solid #6b7280; /* Slightly darker border on hover */
  }
`,EditableTextField=({name,value,onChange})=>{const[currentValue,setCurrentValue]=(0,react.useState)(value);return react.createElement(FieldContainer$3,null,react.createElement(FieldName$3,null,name),react.createElement(EditableInput,{value:currentValue,onChange:e=>{const newValue=e.target.value;setCurrentValue(newValue)},onBlur:()=>{onChange(currentValue)}}))},FieldContainer$2=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  position: relative;
`,FieldName$2=styled_components_browser_esm.Ay.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,FieldValue$1=styled_components_browser_esm.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  margin-right: 12px;
`,Dropdown=styled_components_browser_esm.Ay.select`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  border: 1px solid #d1d5db; /* Equivalent to border-gray-300 */
  border-radius: 4px;
  padding: 4px 8px;
  width: auto;
  background: white;
  cursor: pointer;
`,ChevronWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #6b7280;
  transition: color 0.3s;

  &:hover {
    color: #4b5563;
  }
`,SelectField=({name,value,options,onChange,placeholder="Select value..."})=>{const[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),dropdownRef=(0,react.useRef)(null),toggleDropdown=()=>{setIsDropdownOpen(!0)};(0,react.useEffect)((()=>{const handleClickOutside=event=>{dropdownRef.current&&!dropdownRef.current.contains(event.target)&&setIsDropdownOpen(!1)};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[]);return react.createElement(FieldContainer$2,{ref:dropdownRef},react.createElement(FieldName$2,null,name),isDropdownOpen?react.createElement(Dropdown,{value,onChange:e=>{const newValue=e.target.value;setIsDropdownOpen(!1),onChange(newValue)},autoFocus:!0,onBlur:()=>setIsDropdownOpen(!1)},react.createElement("option",{value:"",disabled:!0},placeholder),options.map((option=>"object"==typeof option?react.createElement("option",{key:option.value,value:option.value},option.label):react.createElement("option",{key:option,value:option},option)))):react.createElement(FieldValue$1,{onClick:toggleDropdown},value?(val=>{const option=options.find((opt=>"object"==typeof opt?opt.value===val:opt===val));return"object"==typeof option?option.label:option})(value):placeholder),react.createElement(ChevronWrapper,{onClick:toggleDropdown},react.createElement(ChevronUpDownIcon,{className:"w-6 h-6"})))},FieldContainer$1=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;

`,FieldName$1=styled_components_browser_esm.Ay.div`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin-right: auto;
`,ToggleWrapper$1=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,ToggleButton=styled_components_browser_esm.Ay.div`
  width: 40px;
  height: 20px;
  border-radius: 12px;
  background-color: ${props=>props.checked?"#3b82f6":"#d1d5db"};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: ${props=>props.checked?"20px":"2px"};
    transition: left 0.3s;
  }
`,ToggleField=({name,value,onChange})=>react.createElement(FieldContainer$1,null,react.createElement(FieldName$1,null,name),react.createElement(ToggleWrapper$1,null,react.createElement(ToggleButton,{checked:value,onClick:()=>{onChange(!value)}}))),CategoryWrapper$1=styled_components_browser_esm.Ay.div`
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
`,CategoryTitle$1=styled_components_browser_esm.Ay.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`,ItemsContainer$1=styled_components_browser_esm.Ay.div`
  border: 1px solid #e5e7eb; /* Equivalent to border */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
  & > *:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
  }
`,ListItem$1=styled_components_browser_esm.Ay.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`,EditStackedList=({title,items,updateState})=>react.createElement(CategoryWrapper$1,null,title&&react.createElement(CategoryTitle$1,null,title),react.createElement(ItemsContainer$1,null,items.map(((item,index)=>react.createElement(ListItem$1,{key:index},((item,index)=>{const{type,props}=item,childProps={...props,onChange:props.onChange?props.onChange:newValue=>updateState(props.fieldName,newValue)};switch(type){case"EditableTextField":return react.createElement(EditableTextField,index_es_extends({key:index},childProps));case"SelectField":return react.createElement(SelectField,index_es_extends({key:index},childProps));case"ToggleField":return react.createElement(ToggleField,index_es_extends({key:index},childProps));default:return null}})(item,index)))))),FeedContainer=(styled_components_browser_esm.Ay.div`
  max-width: 600px;
  margin: auto;
  padding: 24px;
  font-family: Arial, sans-serif;
`,styled_components_browser_esm.Ay.div`
  margin-bottom: 24px;
`,styled_components_browser_esm.Ay.h2`
  font-size: 24px;
  margin-bottom: 8px;
`,styled_components_browser_esm.Ay.p`
  color: #555;
`,styled_components_browser_esm.Ay.div`
  border-bottom: 1px solid #eaeaea;
  padding: 16px 0;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`,styled_components_browser_esm.Ay.div`
  margin-top: 12px;
  padding-left: 8px;
  color: #555;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`),Feed=({items=[],sortBy,selectedFilters={},ItemComponent=FeedItem,pagination,loadMore,infiniteScroll,scrollContainerRef})=>{const{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore}=FeedLogic({items,sortBy,selectedFilters,pagination,loadMore,infiniteScroll,scrollContainerRef});return react.createElement(FeedContainer,null,itemsToRender.map(((item,index)=>react.createElement(ItemComponent,{key:index,data:item}))),react.createElement(PaginationControls,{pages,currentPage,onPageChange:setCurrentPage}),react.createElement(LoadMoreButton,{loadMore,hasMoreItems,onLoadMore:handleLoadMore}))},ItemContainer=styled_components_browser_esm.Ay.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,FeedItem=({data})=>react.createElement(ItemContainer,null,react.createElement("h3",null,data.title," (FeedItem2)"),react.createElement("p",null,data.description),react.createElement("p",null,"Status: ",data.status),react.createElement("p",null,"Priority: ",data.priority),react.createElement("p",null,"Date: ",data.date));function FeedLogic({items=[],sortBy,selectedFilters={},pagination,loadMore,infiniteScroll,scrollContainerRef}){Array.isArray(items)||(items&&"object"==typeof items?(items=Object.values(items),console.warn("Converted non-array items object to array:",items)):(console.warn("Expected items to be an array but got a different type. Defaulting to empty array."),items=[]));const filteredItems=items.filter((item=>Object.entries(selectedFilters).every((([category,values])=>!values||0===values.length||values.includes(item[category]))))),sortedItems=sortBy?[...filteredItems].sort(sortBy):filteredItems,[currentPage,setCurrentPage]=(0,react.useState)(1),[visibleCount,setVisibleCount]=(0,react.useState)((()=>infiniteScroll||(loadMore||sortedItems.length))),itemsPerPage=pagination||sortedItems.length,totalPages=Math.ceil(sortedItems.length/itemsPerPage);(0,react.useEffect)((()=>{pagination&&currentPage>totalPages&&setCurrentPage(1)}),[pagination,totalPages,currentPage]),(0,react.useEffect)((()=>{if(!infiniteScroll)return;const handleScroll=()=>{let distanceFromBottom=0;if(scrollContainerRef?.current){const{scrollTop,scrollHeight,clientHeight}=scrollContainerRef.current;distanceFromBottom=scrollHeight-(scrollTop+clientHeight)}else{const{scrollY,innerHeight}=window,{offsetHeight}=document.body;distanceFromBottom=offsetHeight-(scrollY+innerHeight)}distanceFromBottom<50&&setVisibleCount((prev=>Math.min(prev+infiniteScroll,sortedItems.length)))},scrollTarget=scrollContainerRef?.current||window;return scrollTarget.addEventListener("scroll",handleScroll),()=>{scrollTarget.removeEventListener("scroll",handleScroll)}}),[infiniteScroll,sortedItems.length,scrollContainerRef]);let itemsToRender=sortedItems,pages=null,hasMoreItems=!1;if(pagination){const startIndex=(currentPage-1)*itemsPerPage,endIndex=startIndex+itemsPerPage;itemsToRender=sortedItems.slice(startIndex,endIndex),totalPages>1&&(pages=Array.from({length:totalPages},((_,i)=>i+1)))}else infiniteScroll?itemsToRender=sortedItems.slice(0,visibleCount):loadMore&&(itemsToRender=sortedItems.slice(0,visibleCount),hasMoreItems=visibleCount<sortedItems.length);return{itemsToRender,pages,currentPage,setCurrentPage,hasMoreItems,handleLoadMore:()=>{setVisibleCount((prev=>Math.min(prev+loadMore,sortedItems.length)))}}}styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.input`
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
`,styled_components_browser_esm.Ay.div`
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
  }`;const SliderContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Label$1=styled_components_browser_esm.Ay.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`,RangeInputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: 50px;
`,Track=styled_components_browser_esm.Ay.div`
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
`,ThumbValue=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: -10px;
  font-size: 16px;
  font-weight: bold;
  color: #A855F7;
  white-space: nowrap;
`,Slider=styled_components_browser_esm.Ay.input`
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
`,RangeSlider=({min=0,max=100,step=1,minimumGap=1,label="Range",valuePrefix="",valueSuffix="",value,onChange})=>{const[range,setRange]=(0,react.useState)(value||[min,max]);(0,react.useEffect)((()=>{value&&Array.isArray(value)&&2===value.length&&setRange(value)}),[value]);const calculatePercentage=value=>(value-min)/(max-min)*100;return react.createElement(SliderContainer,null,react.createElement(Label$1,null,label),react.createElement(RangeInputContainer,null,react.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[0])}% - 14px)`}},valuePrefix,range[0],valueSuffix),react.createElement(ThumbValue,{style:{left:`calc(${calculatePercentage(range[1])}% - 14px)`}},valuePrefix,range[1],valueSuffix),react.createElement(Track,{left:calculatePercentage(range[0]),right:calculatePercentage(range[1])}),react.createElement(Slider,{type:"range",min,max,step,value:range[0],onChange:e=>{const newRange=[Math.min(Number(e.target.value),range[1]-minimumGap),range[1]];setRange(newRange),onChange&&onChange(newRange)}}),react.createElement(Slider,{type:"range",min,max,step,value:range[1],onChange:e=>{const newMax=Math.max(Number(e.target.value),range[0]+minimumGap),newRange=[range[0],newMax];setRange(newRange),onChange&&onChange(newRange)}})))},SelectContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  font-family: sans-serif;
`,sharedSelectStyles=styled_components_browser_esm.AH`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  appearance: none;
  transition: border-color 0.3s ease-in-out;
`,StyledSelect$2=styled_components_browser_esm.Ay.select`
  ${sharedSelectStyles}
  border-color: ${({isFocused,color})=>isFocused?color:"#D1D5DB"};
  color: ${({value})=>value?"#000":"#6B7280"}; /* Default placeholder style */
`,StyledLabel$6=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${({isFocused,color})=>isFocused?color:"#6B7280"};
  font-size: 1rem;
  pointer-events: none;
  transform: ${({hasValue,isFocused})=>hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,StyledArrow=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1rem;
  color: ${({isFocused,color})=>isFocused?color:"#6B7280"};
`,SelectInput=({name,value,onChange,color="#000",label,options=[]})=>{const[isFocused,setIsFocused]=(0,react.useState)(!1);return react.createElement(SelectContainer,null,react.createElement(StyledSelect$2,{name,id:name,value,onChange,onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!1),isFocused,color,required:!0},react.createElement("option",{value:"",disabled:!0}),options.map((option=>react.createElement("option",{key:option.value,value:option.value},option.label)))),react.createElement(StyledLabel$6,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label),react.createElement(StyledArrow,{isFocused,color},react.createElement(ChevronDownIcon,{className:"w-4 h-4"})))},fadeIn=(styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 2rem;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.Ay.h5`
  margin-bottom: 0.5rem;
`,styled_components_browser_esm.Ay.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,styled_components_browser_esm.Ay.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,styled_components_browser_esm.Ay.h4`
  margin: 0;
`,styled_components_browser_esm.Ay.button`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .svg {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
    align-self: center;
  }

`,styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.Ay.h5`
  margin-bottom: 0.5rem;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
`,styled_components_browser_esm.Ay.button`
  flex: 0 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${props=>props.active?"#007bff":"#ccc"};
  background-color: ${props=>props.active?"#007bff":"#fff"};
  color: ${props=>props.active?"#fff":"#000"};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
`,styled_components_browser_esm.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`),slideIn=styled_components_browser_esm.i7`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,Overlay$2=styled_components_browser_esm.Ay.div`
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
  ${props=>props.animate&&styled_components_browser_esm.AH`
      animation: ${fadeIn} 0.3s ease-out forwards;
    `}
`,ModalContainer=styled_components_browser_esm.Ay.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  ${props=>props.animate&&styled_components_browser_esm.AH`
      animation: ${slideIn} 0.3s ease-out forwards;
    `}
`,CloseButton$1=styled_components_browser_esm.Ay.button`
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
`,ModalContent=styled_components_browser_esm.Ay.div`
  padding: 16px;
`,ModalTitle=styled_components_browser_esm.Ay.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333;
`,ModalBody=styled_components_browser_esm.Ay.div`
  font-size: 1rem;
  color: #555;
`,Modal=({isModalOpen,closeModal,title,children,animate=!0})=>((0,react.useEffect)((()=>(document.body.style.overflow=isModalOpen?"hidden":"",()=>{document.body.style.overflow=""})),[isModalOpen]),(0,react.useEffect)((()=>{const handleEsc=event=>{"Escape"===event.key&&isModalOpen&&closeModal()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}}),[isModalOpen,closeModal]),isModalOpen?react_dom.createPortal(react.createElement(Overlay$2,{animate,onClick:closeModal},react.createElement(ModalContainer,{animate,onClick:e=>e.stopPropagation(),"aria-modal":"true",role:"dialog","aria-labelledby":"modal-title"},react.createElement(CloseButton$1,{onClick:closeModal,"aria-label":"Close Modal"},react.createElement(XIcon,null)),react.createElement(ModalContent,null,title&&react.createElement(ModalTitle,{id:"modal-title"},title),react.createElement(ModalBody,null,children)))),document.getElementById("modal-root")):null);Modal.propTypes={isModalOpen:prop_types_default().bool.isRequired,closeModal:prop_types_default().func.isRequired,title:prop_types_default().string,children:prop_types_default().node.isRequired,animate:prop_types_default().bool};styled_components_browser_esm.Ay.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin: 1rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5);
  }
`,styled_components_browser_esm.Ay.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  width: 500px;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.Ay.h5`
  margin-bottom: 0.5rem;
`;const HeroContent=({header,title,subtitle,contentTitle,contentSubtitle,shopNowLink,bottleBgImage,bottleImage})=>react.createElement("div",{className:"flex md:flex-row flex-col md:space-x-20 items-center py-12 px-4 transition-all duration-500 ease-in-out"},react.createElement("div",{className:"flex flex-col justify-between max-w-[320px] md:text-left text-center space-y-6 md:space-y-8"},react.createElement("div",null,react.createElement("h3",{className:"uppercase text-sm tracking-widest font-semibold"},header),react.createElement("h1",{className:"font-garamond text-7xl font-light mt-2"},title),react.createElement("h2",{className:"font-garamond text-3xl font-light mt-4 mb-10"},subtitle)),react.createElement("div",null,react.createElement("div",{className:"font-garamond text-xl italic mb-4"},contentTitle),react.createElement("div",{className:"text-base leading-relaxed mb-6 tracking-tight"},contentSubtitle),react.createElement("div",{className:"flex items-center space-x-3 font-medium text-sm hover:text-blue-500 cursor-pointer"},react.createElement("a",{href:shopNowLink,className:"hover:underline"},"Shop Now"),react.createElement(ButtonArrowIcon,{className:"w-5 h-5"})))),react.createElement("div",{className:"flex justify-center items-center relative md:mt-0 mt-10"},react.createElement("div",{className:"relative"},react.createElement("img",{className:"rounded-full object-cover transition-transform duration-500 ease-in-out",src:bottleBgImage,alt:`${title} background`,style:{width:"320px",height:"450px"}}),react.createElement("img",{className:"absolute top-[25%] left-0 transform scale-150 transition-transform duration-500 ease-in-out",src:bottleImage,alt:`${title} bottle`}))));HeroContent.propTypes={header:prop_types_default().string.isRequired,title:prop_types_default().string.isRequired,subtitle:prop_types_default().string.isRequired,contentTitle:prop_types_default().string.isRequired,contentSubtitle:prop_types_default().string.isRequired,shopNowLink:prop_types_default().string.isRequired,bottleBgImage:prop_types_default().string.isRequired,bottleImage:prop_types_default().string.isRequired};const ImageContainer$2=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 100%; /* Ensure the container takes full height of its parent */
  position: relative;
  overflow: hidden;
  margin: 0;

  /* Swiper Pagination customization */
  .swiper-pagination {
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    /* Remove transform since flex handles centering */
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    width: 10px;
    height: 10px;
    opacity: 1;
    margin: 0 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,SwiperWrapper=(0,styled_components_browser_esm.Ay)(swiper_react.RC)`
  width: 100%;
  height: 100%; /* Ensure Swiper takes full height */
`,ImageCarousel2=({images})=>react.createElement(ImageContainer$2,null,react.createElement(SwiperWrapper,{modules:[modules.dK,modules.Jq],spaceBetween:0,slidesPerView:1,pagination:{clickable:!0},loop:images.length>1},images.map(((imgUrl,index)=>react.createElement(swiper_react.qr,{key:index},react.createElement("img",{src:imgUrl,alt:`Image ${index+1}`}))))));ImageCarousel2.propTypes={images:prop_types_default().arrayOf(prop_types_default().string).isRequired};const InputContainer$1=styled_components_browser_esm.Ay.div`
  position: relative;
  font-family: sans-serif;
`,sharedInputStyles=styled_components_browser_esm.AH`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 2px solid;
  background: transparent;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;
`,StyledInput$4=styled_components_browser_esm.Ay.input`
  ${sharedInputStyles}
  border-color: ${({isFocused,color})=>isFocused?color:"#D1D5DB"};
`,StyledTextarea=styled_components_browser_esm.Ay.textarea`
  ${sharedInputStyles}
  border-color: ${({isFocused,color})=>isFocused?color:"#D1D5DB"};
  min-height: ${({minHeight})=>minHeight||"auto"};  /* Use provided minHeight or default */
`,StyledLabel$5=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 0;
  margin: 0.25rem;
  padding: 0.25rem;
  background: white;
  color: ${({isFocused,color})=>isFocused?color:"#6B7280"};
  font-size: 1rem;
  pointer-events: none;
  transform: ${({hasValue,isFocused})=>hasValue||isFocused?"translate(1.25rem, -70%) scale(0.9)":"translate(0.625rem, 0)"};
  transform-origin: left top;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`,Input$1=({name,type,value,onChange,color="#000",minHeight,label})=>{const[isFocused,setIsFocused]=(0,react.useState)(!1),handleFocus=()=>setIsFocused(!0),handleBlur=()=>setIsFocused(!1),inputElement="textarea"===type?react.createElement(StyledTextarea,{name,id:name,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color,minHeight}):react.createElement(StyledInput$4,{name,id:name,type,required:!0,value,onChange,onFocus:handleFocus,onBlur:handleBlur,isFocused,color});return react.createElement(InputContainer$1,null,inputElement,react.createElement(StyledLabel$5,{htmlFor:name,isFocused,color,hasValue:Boolean(value)},label))},DrawerContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`,InputContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 28px; /* Add consistent spacing between inputs */
  margin-bottom: 64px; /* To ensure content doesn't overlap with the button bar */
`,CheckboxGroup=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`,FixedButtonBar=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`,Button$8=styled_components_browser_esm.Ay.button`
  padding: 8px 16px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props=>props.primary?"#A855F7":"#e0e0e0"};
  color: ${props=>props.primary?"#fff":"#333"};
`,MONTHS=[{value:"jan",label:"Jan"},{value:"feb",label:"Feb"},{value:"mar",label:"Mar"},{value:"apr",label:"Apr"},{value:"may",label:"May"},{value:"jun",label:"Jun"},{value:"jul",label:"Jul"},{value:"aug",label:"Aug"},{value:"sep",label:"Sep"},{value:"oct",label:"Oct"},{value:"nov",label:"Nov"},{value:"dec",label:"Dec"}],COUNTIES=["Carlow","Cavan","Clare","Cork","Derry","Donegal","Down","Dublin","Fermanagh","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Tyrone","Waterford","Westmeath","Wexford","Wicklow"],TYPE_OPTIONS=[{value:"house",label:"House"},{value:"apartment",label:"Apartment"},{value:"room",label:"Room"}],LettzFilterDrawer=({selectedFilters,onFilterChange,closeDrawer,sortOptions=[],selectedSortOption,onSortChange})=>{const[localFilters,setLocalFilters]=(0,react.useState)(selectedFilters||{}),[localSortOption,setLocalSortOption]=(0,react.useState)(selectedSortOption||"");(0,react.useEffect)((()=>{setLocalFilters(selectedFilters||{})}),[selectedFilters]),(0,react.useEffect)((()=>{setLocalSortOption(selectedSortOption||"")}),[selectedSortOption]);const handleFilterChange=(key,value)=>{setLocalFilters((prevFilters=>({...prevFilters,[key]:value})))};return react.createElement(DrawerContainer,null,react.createElement(InputContainer,null,react.createElement(SelectInput,{name:"county",label:"County",color:"#A855F7",value:localFilters.county||"",onChange:e=>handleFilterChange("county",e.target.value),options:[{value:"",label:"Any County"},...COUNTIES.map((county=>({value:county,label:county})))]}),react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement(SelectInput,{name:"startMonth",label:"From",color:"#A855F7",value:localFilters.startMonth||"",onChange:e=>handleFilterChange("startMonth",e.target.value),options:[{value:"",label:"Any"},...MONTHS.map((month=>({value:month.value,label:month.label})))]}),react.createElement(SelectInput,{name:"endMonth",label:"To",color:"#A855F7",value:localFilters.endMonth||"",onChange:e=>handleFilterChange("endMonth",e.target.value),options:[{value:"",label:"Any"},...MONTHS.map((month=>({value:month.value,label:month.label})))]})),react.createElement("div",{className:"mx-8"},react.createElement(RangeSlider,{min:0,max:5e3,step:50,minimumGap:100,label:"Rent",valuePrefix:"€",value:localFilters.rentRange||[0,5e3],onChange:range=>handleFilterChange("rentRange",range)})),react.createElement(CheckboxGroup,null,TYPE_OPTIONS.map((typeOption=>react.createElement(CheckedItem,{height:"5rem",width:"5rem",color:"#A855F7",key:typeOption.value,label:typeOption.label,onChange:e=>{return type=typeOption.value,isChecked=e.target.checked,void setLocalFilters((prevFilters=>{const currentTypes=prevFilters.type||[];return isChecked?currentTypes.includes(type)?prevFilters:{...prevFilters,type:[...currentTypes,type]}:{...prevFilters,type:currentTypes.filter((t=>t!==type))}}));var type,isChecked},checked:localFilters.type&&localFilters.type.includes(typeOption.value),svg:react.createElement(HomeIcon,{className:"w-6 h-6"})})))),react.createElement(SelectInput,{name:"sort",label:"Sort By",color:"#A855F7",value:localSortOption,onChange:event=>{setLocalSortOption(event.target.value)},options:sortOptions})),react.createElement(FixedButtonBar,null,react.createElement(Button$8,{onClick:()=>{setLocalFilters({}),setLocalSortOption(""),onFilterChange({}),onSortChange(""),closeDrawer()}},"Clear"),react.createElement(Button$8,{primary:!0,onClick:()=>{onFilterChange(localFilters),onSortChange(localSortOption),closeDrawer()}},"Apply")))},StyledButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px; /* Ensure sufficient height */
  background-color: #ffffff; /* White background */
  border: 1px solid #dcdcdc;
  border-radius: 10px; /* Reduced border radius */
  font-size: 16px;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle outer shadow */

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* Slightly deeper shadow on hover */
  }

  &:focus {
    outline: none;
  }
`,ContentContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,SectionLeft=styled_components_browser_esm.Ay.div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #000;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`,SectionRight=styled_components_browser_esm.Ay.div`
  flex: 1;
  text-align: left; /* Left-aligned text */
  color: #666;
  font-weight: 500;
    font-size: 1.3rem;
  padding: 0 16px; /* Increased padding for spacing */
`,Divider$1=styled_components_browser_esm.Ay.div`
  width: 2px; /* Thin vertical divider */
  height: 30px; /* Height relative to the button */
  background-color: #888; /* Visible color */
  display: block; /* Ensures it is rendered as a visible block */
`,LettzSearchButton=({onClick,place="Anywhere",startDate="Anytime",endDate=""})=>react.createElement(StyledButton,{onClick},react.createElement(ContentContainer,null,react.createElement(SectionLeft,null,place),react.createElement(Divider$1,null," ")," ",react.createElement(SectionRight,null,startDate,endDate&&` - ${endDate}`)));LettzSearchButton.propTypes={onClick:prop_types_default().func.isRequired,place:prop_types_default().string,startDate:prop_types_default().string,endDate:prop_types_default().string};const Card$1=styled_components_browser_esm.Ay.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`,Header$3=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`,LogoText$1=styled_components_browser_esm.Ay.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`,StyledLettzIcon$1=(0,styled_components_browser_esm.Ay)(LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
`,IconWrapper$5=styled_components_browser_esm.Ay.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`,Text$2=styled_components_browser_esm.Ay.p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`,Button$7=styled_components_browser_esm.Ay.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`,ListYourPlaceCard=({onButtonClick,currentUser})=>{const navigate=(0,react_router_dist.Zp)();return react.createElement(Card$1,null,react.createElement(Header$3,null,react.createElement(StyledLettzIcon$1,null)," ",react.createElement(LogoText$1,null,"Lettz")),react.createElement(IconWrapper$5,null,react.createElement("span",{role:"img","aria-label":"icon"},"🏡")),react.createElement(Text$2,null,"Get started by listing your place today!"),react.createElement(Button$7,{onClick:()=>{currentUser?onButtonClick():navigate("/login",{state:{from:"/listing"}})}},"List Your Place"))},CardContainer$1=styled_components_browser_esm.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`,StyledLink$3=(0,styled_components_browser_esm.Ay)(dist.N_)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`,CardContent$1=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,ImageWrapper=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4; /* Set desired aspect ratio here */
  overflow: hidden;

  /* Ensure that ImageCarousel2 fills the wrapper */
  .swiper-wrapper {
    height: 100%;
  }
`,RentBadge=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,DateRangeBadge=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  color: #333;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 10;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,TextContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  padding: 0.75rem;
  background-color: #ffffff;
  align-items: center;
  flex-grow: 1;
`,ProfilePicture=styled_components_browser_esm.Ay.div`
  flex: 0 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  transition: transform 0.3s ease;

`,ProfileImage$1=styled_components_browser_esm.Ay.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`,InfoContainer$1=styled_components_browser_esm.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,TitleText=styled_components_browser_esm.Ay.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.2rem;
`,LocationText=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #666;
  gap: 0.1rem; /* Space between icon and text */
`,LocationIconStyled=(0,styled_components_browser_esm.Ay)(LocationIcon)`
  width: 25px;
  height: 25px;
`,ManagingOverlay=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  z-index: 20;
  padding: 1rem;
`,OverlayButtonsContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between buttons */
  width: 100%;
  max-width: 90%;
`,UpdateButton=styled_components_browser_esm.Ay.button.attrs({"aria-label":"Update Listing"})`
  display: flex;
  align-items: center;
  background-color: #ffffff; /* White background */
  color: #3b82f6; /* Blue text */
  padding: 0.75rem 1rem;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #3b82f6;

  &:hover {
    background-color: #3b82f6; /* Blue background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Blue focus ring */
  }
`,RemoveButton=styled_components_browser_esm.Ay.button.attrs({"aria-label":"Remove Listing"})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* White background */
  color: #ef4444; /* Red text */
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #ef4444;

  &:hover {
    background-color: #ef4444; /* Red background on hover */
    color: #ffffff; /* White text on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.5); /* Red focus ring */
  }
`,ListingCard=({data,isManaging,onUpdate,onRemove})=>{const{id,images,city,county,title,rent,startDate,endDate,photoURL}=data,dateRange=startDate&&endDate?`${startDate} - ${endDate}`:"Available Anytime",imageList=images&&images.length>0?images:["https://via.placeholder.com/600x600?text=No+Image+Available"],profileImage=photoURL||"https://via.placeholder.com/150?text=Profile",content=react.createElement(CardContent$1,null,react.createElement(ImageWrapper,null,react.createElement(ImageCarousel2,{images:imageList}),void 0!==rent&&react.createElement(RentBadge,null,react.createElement(MoneyIcon2,{className:"w-6 h-6 mr-2"}),"€",rent),(startDate||endDate)&&react.createElement(DateRangeBadge,null,react.createElement(CalendarIcon,{className:"w-6 h-6 mr-2"}),dateRange)),react.createElement(TextContainer,null,react.createElement(ProfilePicture,null,react.createElement(ProfileImage$1,{src:profileImage,alt:"Profile"})),react.createElement(InfoContainer$1,null,react.createElement(TitleText,null,title||"Title Unavailable"),react.createElement(LocationText,null,react.createElement(LocationIconStyled,{className:"w-5 h-5"}),city,", ",county))),isManaging&&react.createElement(ManagingOverlay,null,react.createElement(OverlayButtonsContainer,null,react.createElement(UpdateButton,{onClick:()=>onUpdate(data)},react.createElement(EditIcon,{className:"w-5 h-5 mr-2"}),"Update"),react.createElement(RemoveButton,{onClick:()=>onRemove(id)},react.createElement(TrashIcon,{className:"w-5 h-5 mr-2"}),"Remove"))));return react.createElement(CardContainer$1,null,isManaging?content:react.createElement(StyledLink$3,{to:`/rooms/${id}`},content))};ListingCard.defaultProps={isManaging:!1,onUpdate:()=>{},onRemove:()=>{}};const LoadMoreButtonStyled=styled_components_browser_esm.Ay.button`
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`,LoadMoreButton=({loadMore,hasMoreItems,onLoadMore})=>loadMore&&hasMoreItems?react.createElement(LoadMoreButtonStyled,{onClick:onLoadMore},"Load More"):null,bounce=styled_components_browser_esm.i7`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,StyledLink$2=(styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: semi-transparent background */
  z-index: 9999; /* Ensure it stays on top of other elements */
`,styled_components_browser_esm.Ay.div`
  width: 16px; /* Equivalent to Tailwind's w-4 */
  height: 16px; /* Equivalent to Tailwind's h-4 */
  margin: 0 4px; /* Equivalent to Tailwind's gap-2 */
  background-color: #1d4ed8; /* Equivalent to Tailwind's bg-blue-700 */
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${props=>props.delay};
`,styled_components_browser_esm.Ay.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 20px 10px;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
`,(0,styled_components_browser_esm.Ay)(LettzIcon)`
  width: 50px;
  height: 50px;
  color: ${props=>props.themeColor}; /* Apply themeColor to currentColor */
`,styled_components_browser_esm.Ay.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 20px;
`,styled_components_browser_esm.Ay.p`
  margin: 10px 0;
  font-size: 0.875rem;
  color: ${props=>props.error?"#e74c3c":"#2ecc71"};
  text-align: center;
`,styled_components_browser_esm.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`,styled_components_browser_esm.Ay.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,styled_components_browser_esm.Ay.input`
  cursor: pointer;
`,styled_components_browser_esm.Ay.a`
  color: ${props=>props.themeColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,styled_components_browser_esm.Ay.div`
  margin-top: 24px;
`,styled_components_browser_esm.Ay.button`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props=>props.themeColor};
  color: white;
  padding: 12px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 10px;
`,styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  color: ${props=>props.themeColor};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 16px;
  p {
    margin: 0;
    font-size: 1rem;
    color: #6b7280;
  }
`,styled_components_browser_esm.Ay.hr`
  flex: 1;
  border: none;
  border-top: 1px solid #d1d5db;
`,styled_components_browser_esm.Ay.div`
  margin-top: 16px;
  text-align: center;
`,styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  color: ${props=>props.themeColor};
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,styled_components_browser_esm.Ay.button`
  padding: 12px;
  border: none;
  width: 100%;
  border-radius: 30px;
  border:  2px solid #ccc;
  background-color:  #fff;
  color:  #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ccc;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,styled_components_browser_esm.Ay.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`,styled_components_browser_esm.Ay.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,styled_components_browser_esm.Ay.h2`
  font-size: 20px;
  margin-bottom: 16px;
`,styled_components_browser_esm.Ay.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
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
`),IconWrapper$3=styled_components_browser_esm.Ay.div`
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
`,TextWrapper$1=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,IconContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,MenuItem=({icon:IconComponent,text,link})=>react.createElement(StyledLink$2,{to:link},react.createElement(TextWrapper$1,null,IconComponent&&react.createElement(IconWrapper$3,null,react.createElement(IconComponent,{className:"svg"})),react.createElement("div",null,text)),react.createElement(IconContainer,null,react.createElement(ChevronRightIcon,null)));!function Mt(t){if(!t||"undefined"==typeof document)return;let o=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var L=t=>"number"==typeof t&&!isNaN(t),N=t=>"string"==typeof t,P=t=>"function"==typeof t,z=t=>(0,react.isValidElement)(t)||N(t)||P(t)||L(t);var Xt=1,at=()=>""+Xt++;var I=new Map,F=[],st=new Set,bt=()=>I.size>0;function X(t,o){var r;if(o)return!(null==(r=I.get(o))||!r.isToastActive(t));let e=!1;return I.forEach((s=>{s.isToastActive(t)&&(e=!0)})),e}function ht(t){if(bt()){if(null==t||(t=>N(t)||L(t))(t))I.forEach((o=>{o.removeToast(t)}));else if(t&&("containerId"in t||"id"in t)){let o=I.get(t.containerId);o?o.removeToast(t.id):I.forEach((e=>{e.removeToast(t.id)}))}}else F=F.filter((o=>null!=t&&o.options.toastId!==t))}function nt(t,o){z(t)&&(bt()||F.push({content:t,options:o}),I.forEach((e=>{e.buildToast(t,o)})))}function rt(t,o){I.forEach((e=>{(null==o||null==o||!o.containerId||(null==o?void 0:o.containerId)===e.id)&&e.toggle(t,null==o?void 0:o.id)}))}function Wt(t){return t&&(N(t.toastId)||L(t.toastId))?t.toastId:at()}function U(t,o){return nt(t,o),o.toastId}function V(t,o){return{...o,type:o&&o.type||t,toastId:Wt(o)}}function Q(t){return(o,e)=>U(o,V(t,e))}function y(t,o){return U(t,V("default",o))}y.loading=(t,o)=>U(t,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),y.promise=function Gt(t,{pending:o,error:e,success:r},s){let l;o&&(l=N(o)?y.loading(o,s):y.loading(o.render,{...s,...o}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(T,g,v)=>{if(null==g)return void y.dismiss(l);let x={type:T,...a,...s,data:v},C=N(g)?{render:g}:g;return l?y.update(l,{...x,...C}):y(C.render,{...x,...C}),v},c=P(t)?t():t;return c.then((T=>d("success",r,T))).catch((T=>d("error",e,T))),c},y.success=Q("success"),y.info=Q("info"),y.error=Q("error"),y.warning=Q("warning"),y.warn=y.warning,y.dark=(t,o)=>U(t,V("default",{theme:"dark",...o})),y.dismiss=function qt(t){ht(t)},y.clearWaitingQueue=(t={})=>{I.forEach((o=>{o.props.limit&&(!t.containerId||o.id===t.containerId)&&o.clearQueue()}))},y.isActive=X,y.update=(t,o={})=>{let e=((t,{containerId:o})=>{var e;return null==(e=I.get(o||1))?void 0:e.toasts.get(t)})(t,o);if(e){let{props:r,content:s}=e,l={delay:100,...r,...o,toastId:o.toastId||t,updateId:at()};l.toastId!==t&&(l.staleId=t);let a=l.render||s;delete l.render,U(a,l)}},y.done=t=>{y.update(t,{progress:1})},y.onChange=function Pt(t){return st.add(t),()=>{st.delete(t)}},y.play=t=>rt(!0,t),y.pause=t=>rt(!1,t);"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;(function $({enter:t,exit:o,appendPosition:e=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:a,position:d,preventExitTransition:c,done:T,nodeRef:g,isIn:v,playToast:x}){let C=e?`${t}--${d}`:t,S=e?`${o}--${d}`:o,E=(0,react.useRef)(0);return(0,react.useLayoutEffect)((()=>{let f=g.current,p=C.split(" "),b=n=>{n.target===g.current&&(x(),f.removeEventListener("animationend",b),f.removeEventListener("animationcancel",b),0===E.current&&"animationcancel"!==n.type&&f.classList.remove(...p))};f.classList.add(...p),f.addEventListener("animationend",b),f.addEventListener("animationcancel",b)}),[]),(0,react.useEffect)((()=>{let f=g.current,p=()=>{f.removeEventListener("animationend",p),r?function Z(t,o,e=300){let{scrollHeight:r,style:s}=t;requestAnimationFrame((()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${e}ms`,requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(o,e)}))}))}(f,T,s):T()};v||(c?p():(E.current=1,f.className+=` ${S}`,f.addEventListener("animationend",p)))}),[v]),react.createElement(react.Fragment,null,a)}})(((t,o=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}))("bounce",!0));const FormContainer$2=styled_components_browser_esm.Ay.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`,TextArea=styled_components_browser_esm.Ay.textarea`
  flex: 1;
  resize: none;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`,SendButton=styled_components_browser_esm.Ay.button`
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,MessageForm=({onSend,onClose})=>{const[message,setMessage]=(0,react.useState)(""),[sending,setSending]=(0,react.useState)(!1);return react.createElement(FormContainer$2,null,react.createElement("form",{onSubmit:async e=>{if(e.preventDefault(),message.trim()){setSending(!0);try{await onSend(message),onClose(),setMessage(""),y.success("Message sent successfully!")}catch(error){console.error("Error sending message:",error),y.error("Failed to send the message. Please try again.")}finally{setSending(!1)}}else y.error("Please enter a message.")},style:{display:"flex",flexDirection:"column",height:"100%"}},react.createElement(TextArea,{placeholder:"Type your message here...",value:message,onChange:e=>setMessage(e.target.value),rows:5}),react.createElement(SendButton,{type:"submit",disabled:sending},sending?"Sending...":"Send Message")))},Card=styled_components_browser_esm.Ay.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically within the card */
  width: 100%;
  max-width: 500px; /* Increased max-width for better layout */
  min-height: 400px; /* Set a minimum height to make the card taller */
  padding: 40px 30px; /* Increased padding for more spacious content */
  border: 1px solid #ddd;
  border-radius: 12px; /* Slightly larger border radius for a smoother look */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 10vh; /* Adjusted margin for better centering */

  /* Responsive adjustments */
  @media (max-width: 600px) {
    min-height: 350px;
    padding: 30px 20px;
  }
`,Header$2=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
`,LogoText=styled_components_browser_esm.Ay.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 8px;
`,StyledLettzIcon=(0,styled_components_browser_esm.Ay)(LettzIcon)`
  width: 32px;
  height: 32px;
color: #A855F7;
  `,IconWrapper$2=styled_components_browser_esm.Ay.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #6a11cb, #A855F7);
  border-radius: 50%;
  margin: 24px 0;

  span {
    font-size: 40px;
    color: #fff;
  }
`,Text$1=styled_components_browser_esm.Ay.p`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1; /* Allow text to take up available space */
`,Button$4=styled_components_browser_esm.Ay.button`
  width: 100%;
  padding: 14px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #A855F7;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #9333EA;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #7E22CE;
    transform: translateY(0);
  }
`,MessagesPrompt=currentUser=>{const navigate=(0,react_router_dist.Zp)();return react.createElement(Card,null,react.createElement(Header$2,null,react.createElement(StyledLettzIcon,null)," ",react.createElement(LogoText,null,"Lettz")),react.createElement(IconWrapper$2,null,react.createElement("span",{role:"img","aria-label":"messages"},"💬")),react.createElement(Text$1,null,"Please log in to see your messages."),react.createElement(Button$4,{onClick:()=>{currentUser||navigate("/login",{state:{from:"/messages"}})}},"Login"))};function MessagesView({currentUser,conversations,loading,error}){return react.createElement("div",null,currentUser?react.createElement("div",null,loading?react.createElement("p",null,"Loading conversations..."):error?react.createElement("p",null,error):0===conversations.length?react.createElement("p",null,"No conversations found."):react.createElement(ConversationList,{conversations,currentUser})):react.createElement(MessagesPrompt,{currentUser:!0}))}styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
    grid-column: ${props=>props.gridSpan||"auto"};
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.input`
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.input`
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
`,styled_components_browser_esm.Ay.div`
        grid-column: ${props=>props.gridSpan||"auto"};

  .theme-switch {
    --toggle-size: 30px;
    /* the size is adjusted using font-size,
       this is not transform scale,
       so you can choose any size */
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 6.25em;
    /* radius 0 - minecraft mode :) */
    --container-light-bg: #3D7EAE;
    --container-night-bg: #1D1F2C;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ECCA2F;
    --moon-bg: #C4C9D1;
    --spot-color: #959DB1;
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    --stars-color: #fff;
    --clouds-color: #F3FDFF;
    --back-clouds-color: #AACADF;
    --transition: .5s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: .3s cubic-bezier(0, -0.02, 0.35, 1.17);
  }

  .theme-switch, .theme-switch *, .theme-switch *::before, .theme-switch *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }

  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    -webkit-box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    box-shadow: 0em -0.062em 0.062em rgba(0, 0, 0, 0.25), 0em 0.062em 0.125em rgba(255, 255, 255, 0.94);
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__container::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    -webkit-box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset, 0em 0.05em 0.187em rgba(0, 0, 0, 0.25) inset;
    border-radius: var(--container-radius)
  }

  .theme-switch__checkbox {
    display: none;
  }

  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: var(--circle-container-offset);
    border-radius: var(--container-radius);
    -webkit-box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), inset 0 0 0 3.375em rgba(255, 255, 255, 0.1), 0 0 0 0.625em rgba(255, 255, 255, 0.1), 0 0 0 1.25em rgba(255, 255, 255, 0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: var(--circle-transition);
    -o-transition: var(--circle-transition);
    transition: var(--circle-transition);
    pointer-events: none;
  }

  .theme-switch__sun-moon-container {
    pointer-events: auto;
    position: relative;
    z-index: 2;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: var(--container-radius);
    background-color: var(--sun-bg);
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #a1872a inset;
    -webkit-filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0.062em 0.125em 0.125em rgba(0, 0, 0, 0.25)) drop-shadow(0em 0.062em 0.125em rgba(0, 0, 0, 0.25));
    overflow: hidden;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  .theme-switch__moon {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: var(--moon-bg);
    border-radius: inherit;
    -webkit-box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    box-shadow: 0.062em 0.062em 0.062em 0em rgba(254, 255, 239, 0.61) inset, 0em -0.062em 0.062em 0em #969696 inset;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    position: relative;
  }

  .theme-switch__spot {
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
    -webkit-box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
    box-shadow: 0em 0.0312em 0.062em rgba(0, 0, 0, 0.25) inset;
  }

  .theme-switch__spot:nth-of-type(2) {
    width: 0.375em;
    height: 0.375em;
    top: 0.937em;
    left: 1.375em;
  }

  .theme-switch__spot:nth-last-of-type(3) {
    width: 0.25em;
    height: 0.25em;
    top: 0.312em;
    left: 0.812em;
  }

  .theme-switch__clouds {
    width: 1.25em;
    height: 1.25em;
    background-color: var(--clouds-color);
    border-radius: var(--container-radius);
    position: absolute;
    bottom: -0.625em;
    left: 0.312em;
    -webkit-box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    box-shadow: 0.937em 0.312em var(--clouds-color), -0.312em -0.312em var(--back-clouds-color), 1.437em 0.375em var(--clouds-color), 0.5em -0.125em var(--back-clouds-color), 2.187em 0 var(--clouds-color), 1.25em -0.062em var(--back-clouds-color), 2.937em 0.312em var(--clouds-color), 2em -0.312em var(--back-clouds-color), 3.625em -0.062em var(--clouds-color), 2.625em 0em var(--back-clouds-color), 4.5em -0.312em var(--clouds-color), 3.375em -0.437em var(--back-clouds-color), 4.625em -1.75em 0 0.437em var(--clouds-color), 4em -0.625em var(--back-clouds-color), 4.125em -2.125em 0 0.437em var(--back-clouds-color);
    -webkit-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    -o-transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
  }

  .theme-switch__stars-container {
    position: absolute;
    color: var(--stars-color);
    top: -100%;
    left: 0.312em;
    width: 2.75em;
    height: auto;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }

  /* actions */

  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container:hover {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter) - 0.187em)
  }

  .theme-switch__circle-container:hover {
    left: calc(var(--circle-container-offset) + 0.187em);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__moon {
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__clouds {
    bottom: -4.062em;
  }

  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__stars-container {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }`,styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .radio-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radio-input * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .radio-input label {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    cursor: pointer;
    height: 50px;
    position: relative;
  }

  .radio-input label::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 45px;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: 10px;
    border: 2px solid transparent;
  }

  .radio-input label:hover::before {
    transition: all 0.2s ease;
    background-color: #2a2e3c;
  }

  /* Using :has pseudo-class is not widely supported. Use a different approach */
  .radio-input label input:checked + .text::before {
    background-color: #2d3750;
    border-color: #435dd8;
    height: 50px;
  }

  .radio-input label .text {
    color: #fff;
  }

  .radio-input label input[type="radio"] {
    background-color: #202030;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .radio-input label input[type="radio"]:checked {
    background-color: #435dd8;
    -webkit-animation: puls 0.7s forwards;
    animation: pulse 0.7s forwards;
  }

  .radio-input label input[type="radio"]:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    transform: scale(0);
  }

  .radio-input label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`,styled_components_browser_esm.Ay.button`
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #c6c8ca;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.button`
  padding: 12px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-start;
  margin-left: 10px;

  &:hover {
    background-color: #5a6268;
  }

  &:disabled {
    background-color: #c6c8ca;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two-column layout */
  gap: 16px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px; /* Increased width for better layout */
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single-column layout on small screens */
  }
`,styled_components_browser_esm.Ay.div`
  grid-column: 1 / -1; /* Span all columns */
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack buttons vertically on small screens */
  }
`;const PaginationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`,PageButton=styled_components_browser_esm.Ay.button`
  padding: 8px 12px;
  border: none;
  background-color: ${({active})=>active?"#007bff":"#e0e0e0"};
  color: ${({active})=>active?"#fff":"#000"};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({active})=>active?"#0056b3":"#ccc"};
  }
`,PaginationControls=({pages,currentPage,onPageChange})=>!pages||pages.length<=1?null:react.createElement(PaginationContainer,null,pages.map((page=>react.createElement(PageButton,{key:page,active:page===currentPage,onClick:()=>onPageChange(page)},page)))),Container$3=styled_components_browser_esm.Ay.div`
position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
`,Header$1=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`,Badge=styled_components_browser_esm.Ay.span`
position: absolute;
    top: 4px;
    right: 4px;
  background-color: #fff;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
`,ButtonsContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
`,OptionButton=styled_components_browser_esm.Ay.button`
  width: 48%;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`,BarContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px; /* Increased height to accommodate percentage labels */
  border-radius: 5px;
  overflow: hidden;
  background-color: #f0f0f0;
`,BarSegment=styled_components_browser_esm.Ay.div`
  position: relative;
  width: ${props=>props.percentage}%;
  background-color: ${props=>props.color};
  transition: width 2s ease, background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`,PercentageLabel=styled_components_browser_esm.Ay.span`
  position: absolute;
  top: 5px;
  ${props=>"left"===props.align?"left: 10px;":"right: 10px;"}
  font-size: 0.8rem;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
`,OptionName=styled_components_browser_esm.Ay.span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: visible; /* Allow overflow */
  text-overflow: unset;
  z-index: 1;
`,PollItem=({question,category,opt1,opt2,percOpt1,percOpt2,chosenOpt:initialChosenOpt=null})=>{const[chosenOpt,setChosenOpt]=(0,react.useState)(initialChosenOpt),[showBar,setShowBar]=(0,react.useState)(!!initialChosenOpt),[displayedPercOpt1,setDisplayedPercOpt1]=(0,react.useState)(50),[displayedPercOpt2,setDisplayedPercOpt2]=(0,react.useState)(50);(0,react.useEffect)((()=>{if(showBar){setDisplayedPercOpt1(50),setDisplayedPercOpt2(50);const timer=setTimeout((()=>{setDisplayedPercOpt1(percOpt1),setDisplayedPercOpt2(percOpt2)}),100);return()=>clearTimeout(timer)}}),[showBar,percOpt1,percOpt2]);const handleOptionClick=option=>{setChosenOpt(option),setShowBar(!0)};return react.createElement(Container$3,null,react.createElement(Header$1,null,react.createElement("h2",{style:{margin:0}},question),react.createElement(Badge,null,category)),showBar?react.createElement(BarContainer,null,react.createElement(BarSegment,{percentage:displayedPercOpt1,color:chosenOpt===opt1?"#007bff":"#000"},react.createElement(PercentageLabel,{align:"left"},`${displayedPercOpt1}%`),react.createElement(OptionName,{title:opt1},opt1)),react.createElement(BarSegment,{percentage:displayedPercOpt2,color:chosenOpt===opt2?"#007bff":"#000"},react.createElement(PercentageLabel,{align:"right"},`${displayedPercOpt2}%`),react.createElement(OptionName,{title:opt2},opt2))):react.createElement(ButtonsContainer,null,react.createElement(OptionButton,{"aria-label":`Select ${opt1}`,onClick:()=>handleOptionClick(opt1)},opt1),react.createElement(OptionButton,{"aria-label":`Select ${opt2}`,onClick:()=>handleOptionClick(opt2)},opt2)))};PollItem.propTypes={question:prop_types_default().string.isRequired,category:prop_types_default().string.isRequired,opt1:prop_types_default().string.isRequired,opt2:prop_types_default().string.isRequired,percOpt1:prop_types_default().number.isRequired,percOpt2:prop_types_default().number.isRequired,chosenOpt:prop_types_default().string};function SideBar({navLinks=[],username,profilePic,onLogout,isSideNavOpen,closeSideNav,hideProfile=!1}){const mainLinks=navLinks.filter((link=>!link.isFooter)),footerLinks=navLinks.filter((link=>link.isFooter));return react.createElement(react.Fragment,null,isSideNavOpen&&react.createElement(Overlay$1,{onClick:closeSideNav}),react.createElement(SideNavContainer$1,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},!hideProfile&&username&&profilePic&&react.createElement(SideNavHeader$1,{to:"/profile",onClick:closeSideNav},react.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react.createElement(ProfileInfo,null,react.createElement(Username,null,username),react.createElement(ViewProfile,null,"View Profile"))),react.createElement(NavLinks$1,null,mainLinks.map((({name,path,Icon},index)=>react.createElement(StyledLink$1,{to:path,key:index,onClick:closeSideNav},Icon&&react.createElement(IconWrapper$1,null,react.createElement(Icon,{className:"icon"})),react.createElement("span",null,name))))),react.createElement(FooterLinks$1,null,footerLinks.map((({name,path,Icon},index)=>react.createElement(StyledLink$1,{to:path,key:index,onClick:closeSideNav},Icon&&react.createElement(IconWrapper$1,null,react.createElement(Icon,{className:"icon"})),react.createElement("span",null,name)))),onLogout&&react.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react.createElement("span",null,"Log out")))))}styled_components_browser_esm.Ay.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`,styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;const Overlay$1=styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`,SideNavContainer$1=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${({isOpen})=>isOpen?"translateX(0)":"translateX(-100%)"};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({isOpen})=>isOpen?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"};
  z-index: 50;
`,SideNavHeader$1=(0,styled_components_browser_esm.Ay)(dist.N_)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`,ProfileImage=styled_components_browser_esm.Ay.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`,ProfileInfo=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,Username=styled_components_browser_esm.Ay.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`,ViewProfile=styled_components_browser_esm.Ay.div`
  font-size: 0.875rem;
  color: #718096;
`,NavLinks$1=styled_components_browser_esm.Ay.nav`
  flex-grow: 1;
  overflow-y: auto;
`,StyledLink$1=(0,styled_components_browser_esm.Ay)(dist.N_)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #2d3748;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  width: 100%;
  border-radius: 4px;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`,FooterLinks$1=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`,IconWrapper$1=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`,LogoutButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: #2d3748;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  text-align: left;

  &:hover {
    background: #f7fafc;
    color: #1a202c;
  }
`,NavBarContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  height: 62px;
  white-space: nowrap;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  background-color: var(--beach-bg);
  padding: 0 16px;
`,DrawerButton$1=styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }

`,Logo=styled_components_browser_esm.Ay.img`
  width: 116px;
  margin-right: 16px;
`,MenuContainer=styled_components_browser_esm.Ay.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 32px;
  }
`,MenuButton=styled_components_browser_esm.Ay.button`
  color: ${props=>props.active?"blue":"black"};
  border-bottom: ${props=>props.active?"2px solid blue":"none"};
  transition: all 0.3s;

  &:hover {
    color: blue;
  }
`,HeaderIcons=styled_components_browser_esm.Ay.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
`,SignInButton=styled_components_browser_esm.Ay.button`
  border-radius: 9999px;
  background-color: black;
  color: white;
  padding: 8px 24px;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:focus {
    transform: translateY(2px);
  }
`,TopNavBar2=({menuItems,activeTab:propActiveTab,onTabClick})=>{const[activeTab,setActiveTab]=(0,react.useState)(propActiveTab),navigate=(0,react_router_dist.Zp)(),[isSideNavOpen,setIsSideNavOpen]=(0,react.useState)(!1),toggleSideNav=()=>setIsSideNavOpen((prev=>!prev));(0,react.useEffect)((()=>{setActiveTab(propActiveTab)}),[propActiveTab]);return react.createElement(react.Fragment,null,react.createElement(NavBarContainer,null,react.createElement(DrawerButton$1,{onClick:toggleSideNav},react.createElement(MenuIcon,{className:"icon"})),react.createElement(Logo,{src:"https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993",alt:"Closca Logo"}),react.createElement(MenuContainer,null,menuItems.map((item=>react.createElement(MenuButton,{key:item,onClick:()=>(item=>{setActiveTab(item),onTabClick&&onTabClick(item)})(item),active:item===activeTab},item)))),react.createElement(HeaderIcons,null,react.createElement(SignInButton,{onClick:()=>{navigate("/login")}},"Sign In"))),react.createElement(SideBar,{navLinks:[{Icon:()=>{},isFooter:!1,name:"Home",path:"/home"},{Icon:()=>{},isFooter:!1,name:"About",path:"/about"},{Icon:()=>{},isFooter:!0,name:"Settings",path:"/settings"},{Icon:()=>{},isFooter:!0,name:"Contact",path:"/contact"}],isSideNavOpen,toggleSideNav,closeSideNav:()=>setIsSideNavOpen(!1),hideProfile:!1,onLogout:()=>{},profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",signInColor:"#ff4500",username:"Jane Doe"}))};TopNavBar2.propTypes={menuItems:prop_types_default().arrayOf(prop_types_default().string).isRequired,activeTab:prop_types_default().string,onTabClick:prop_types_default().func},TopNavBar2.defaultProps={activeTab:"",onTabClick:null};const slidesData=[{id:"beach",header:"Closca Bottle",title:"Beach",subtitle:"€39.90",contentTitle:"In 20 years, there could be more plastic in our oceans than fish.",contentSubtitle:"Plastic pollution injures more than 100,000 marine animals every year. It takes around 450 years for one plastic bottle to decompose.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop",bottleImage:"https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png",backgroundColor:"#e7dfcf",additionalContentComponent:()=>react.createElement("div",null,react.createElement("h2",null,"Additional Content for Slide 1"),react.createElement(Card3,null))},{id:"savanna",header:"Closca Bottle",title:"Savanna",subtitle:"€39.90",contentTitle:"The Earth's area affected by desertification is approximately 11 times India's size.",contentSubtitle:"The Savannas act as a carbon sink, absorbing CO₂ from the atmosphere and helping to maintain the balance of global temperatures.",shopNowLink:"#",bottleBgImage:"https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&auto=format&fit=crop",bottleImage:"https://fnac.sa/cdn/shop/files/Closca_Bottle_Wave_Sahara_600ml_Close.png",backgroundColor:"#e9bf8b",additionalContentComponent:()=>react.createElement("div",null,react.createElement("h2",null,"Additional Content for Slide 2"),react.createElement(Card3,null))}],PortfolioMainSlider=({slides=slidesData})=>{const[currentSlideIndex,setCurrentSlideIndex]=(0,react.useState)(0),[isPlaying,setIsPlaying]=(0,react.useState)(!0),[progress,setProgress]=(0,react.useState)(0),[shadowOpacity,setShadowOpacity]=(0,react.useState)(.7),totalSlides=slides.length,sliderRef=(0,react.useRef)(null),progressBarRef=(0,react.useRef)(null),additionalContentRef=(0,react.useRef)(null),isPlayingRef=(0,react.useRef)(isPlaying);(0,react.useEffect)((()=>{isPlayingRef.current=isPlaying}),[isPlaying]),(0,react.useEffect)((()=>{let autoSlideInterval,progressInterval;return isPlaying&&(setProgress(0),progressInterval=setInterval((()=>{setProgress((prevProgress=>prevProgress>=100?(handleNextSlide(),0):prevProgress+2))}),100),autoSlideInterval=setInterval((()=>{handleNextSlide()}),5e3)),()=>{autoSlideInterval&&clearInterval(autoSlideInterval),progressInterval&&clearInterval(progressInterval)}}),[isPlaying,currentSlideIndex]),(0,react.useEffect)((()=>{const handleScroll=()=>{if(additionalContentRef.current){let opacity=1-additionalContentRef.current.getBoundingClientRect().top/(window.innerHeight/2);opacity<0&&(opacity=0),opacity>.7&&(opacity=.7),setShadowOpacity(.7-opacity)}0!==window.scrollY||isPlayingRef.current||setIsPlaying(!0)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}}),[]);const handleNextSlide=()=>{setCurrentSlideIndex((prevIndex=>prevIndex===totalSlides-1?0:prevIndex+1))},currentSlide=slides[currentSlideIndex],AdditionalContentComponent=currentSlide.additionalContentComponent||Card3;return react.createElement(react.Fragment,null,react.createElement("style",null,"\n        .fade-enter {\n          opacity: 0;\n          transform: translateX(100%);\n        }\n        .fade-enter-active {\n          opacity: 1;\n          transform: translateX(0%);\n          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;\n        }\n        .fade-exit {\n          opacity: 1;\n          transform: translateX(0%);\n        }\n        .fade-exit-active {\n          opacity: 0;\n          transform: translateX(-100%);\n          transition: opacity 700ms ease-in-out, transform 500ms ease-in-out;\n        }\n        .progress-bar {\n          height: 4px;\n          background-color: black;\n          transition: width 100ms linear;\n        }\n      "),react.createElement("div",{className:"h-screen"},react.createElement("div",{ref:sliderRef,className:"container overflow-hidden relative h-[650px] w-full flex flex-col p-8",style:{backgroundColor:currentSlide.backgroundColor}},react.createElement(TopNavBar2,{menuItems:slides.map((slide=>slide.title)),activeTab:currentSlide.title,onTabClick:tabTitle=>{const tabIndex=slides.findIndex((slide=>slide.title===tabTitle));-1!==tabIndex&&(setCurrentSlideIndex(tabIndex),setProgress(0))}}),react.createElement("div",{className:"relative flex-grow mt-16"},react.createElement(esm_TransitionGroup,{className:"h-full"},react.createElement(esm_CSSTransition,{key:currentSlide.id,timeout:500,classNames:"fade"},react.createElement(HeroContent,{header:currentSlide.header,title:currentSlide.title,subtitle:currentSlide.subtitle,contentTitle:currentSlide.contentTitle,contentSubtitle:currentSlide.contentSubtitle,shopNowLink:currentSlide.shopNowLink,bottleBgImage:currentSlide.bottleBgImage,bottleImage:currentSlide.bottleImage}))),react.createElement("div",{className:"absolute bottom-5 right-5 z-10 flex space-x-4"},react.createElement("button",{onClick:()=>{setCurrentSlideIndex((prevIndex=>0===prevIndex?totalSlides-1:prevIndex-1))},className:"flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"},react.createElement(ButtonArrowIcon,{className:"transform rotate-180"})),react.createElement("button",{onClick:handleNextSlide,className:"flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 bg-white shadow-md hover:bg-gray-100"},react.createElement(ButtonArrowIcon,null))),react.createElement("div",{className:"absolute right-5 top-10 text-base font-medium"},currentSlideIndex+1," / ",totalSlides),react.createElement("div",{className:"absolute bottom-0 left-0 w-full"},react.createElement("div",{ref:progressBarRef,className:"progress-bar",style:{width:`${progress}%`}})))),react.createElement("div",{className:"relative"},react.createElement("div",{className:"absolute inset-x-0 top-0 h-40 z-10 pointer-events-none",style:{background:`linear-gradient(to bottom, rgba(0, 0, 0, ${shadowOpacity}), transparent)`}}),react.createElement("div",{className:"absolute text-white inset-x-0 top-0 flex justify-center py-5 z-20"},react.createElement("button",{onClick:()=>{setIsPlaying(!1),additionalContentRef.current.scrollIntoView({behavior:"smooth"})},className:"flex flex-col items-center cursor-pointer"},react.createElement("span",{className:"animate-bounce"},react.createElement(ButtonArrowIcon,{className:"h-6 w-6 transform rotate-90","aria-hidden":"true"})),react.createElement("span",{className:"mt-2 text-lg font-medium"},"View ",currentSlide.title))),react.createElement("div",{ref:additionalContentRef,className:"w-full bg-gray-100 p-8",style:{minHeight:"400px"}},react.createElement(AdditionalContentComponent,null)))))};styled_components_browser_esm.Ay.div`
  width: 100%;
  background-color: #e0e0e0;
  height: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
`,styled_components_browser_esm.Ay.div`
  height: 100%;
  background-color: #b08b5b;
  border-radius: 5px;
  transition: width 0.3s;
`;styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.input`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`,styled_components_browser_esm.Ay.label`
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.div`
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
  }`;function RecipeCard$1({recipe,onCardClick,chefLink}){const[isVideoPlaying,setIsVideoPlaying]=(0,react.useState)(!1),{title,imageUrl,videoUrl,chef,time,cuisine,profilePic}=recipe;return react.createElement(CardContainer,{onClick:onCardClick},react.createElement(ImageContainer$1,{onClick:isVideoPlaying?e=>{e.stopPropagation(),setIsVideoPlaying(!1)}:e=>{e.stopPropagation(),setIsVideoPlaying(!0);const videoElement=document.querySelector(".video-player video");videoElement&&videoElement.play()}},react.createElement(MediaWrapper,{isVideoPlaying},isVideoPlaying?react.createElement(lib_default(),{url:videoUrl,playing:isVideoPlaying,muted:!0,width:"100%",height:"100%",className:"video-player",config:{file:{attributes:{playsInline:!0}}}}):react.createElement(RecipeImage,{src:imageUrl,alt:title})),react.createElement(ChefInfo,null,react.createElement(ProfilePic,{src:profilePic,alt:chef}),react.createElement(ChefNameLink,{href:chefLink},chef)),react.createElement(Likes,null,react.createElement(BookmarkIcon,{className:"icon-large"})),react.createElement(BottomDetails,null,react.createElement(CardContent,null,react.createElement(CardTitle,null,title),react.createElement(InfoContainer,null,react.createElement(LeftInfo,null,react.createElement(CardInfo,null,react.createElement(ClockIcon,{className:"icon-large"}),react.createElement(Text,null,time)),react.createElement(CardInfo,null,react.createElement(ForkAndKnifeIcon,{className:"icon-large"}),react.createElement(Text,null,cuisine))),react.createElement(ViewRecipeContainer,{onClick:onCardClick},"View Recipe",react.createElement(ArrowRightIcon1,{className:"icon-arrow"})))))))}const CardContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 600px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`,ImageContainer$1=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`,MediaWrapper=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({isVideoPlaying})=>isVideoPlaying?"black":"transparent"};
`,RecipeImage=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ChefInfo=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
`,ProfilePic=styled_components_browser_esm.Ay.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 2px solid #ffffff;
`,ChefNameLink=styled_components_browser_esm.Ay.a`
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
`,Likes=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3rem;
  border-radius: 0.7rem;

  .icon-large {
    width: 30px;
    height: 30px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`,BottomDetails=styled_components_browser_esm.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 1rem 1rem 1rem;
`,CardContent=styled_components_browser_esm.Ay.div`
  text-align: left;
  width: 100%;
`,CardTitle=styled_components_browser_esm.Ay.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,InfoContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,LeftInfo=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,CardInfo=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2px 5px;
  .icon-large {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    margin-right: 0.25rem;
  }
`,Text=styled_components_browser_esm.Ay.p`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
`,ViewRecipeContainer=styled_components_browser_esm.Ay.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: auto 0;
  background-color: #B08B5B;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    background-color: #9a7748;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`,ArrowRightIcon1=(0,styled_components_browser_esm.Ay)(ArrowRightIcon)`
  width: 35px;
  height: 35px;
  color: #ffffff;
`,RecipeSwipeContainer=styled_components_browser_esm.Ay.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  height: 100svh;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`,DrawerOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`,SlideContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Video=styled_components_browser_esm.Ay.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Title$2=styled_components_browser_esm.Ay.div`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
`,RecipeInfoCards=styled_components_browser_esm.Ay.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,RecipeCard=styled_components_browser_esm.Ay.div`
  margin: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`,RecipeCardHeader=styled_components_browser_esm.Ay.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`,RecipeCardContent=styled_components_browser_esm.Ay.div`
  font-size: 1em;
  color: #555;
`,Drawer=styled_components_browser_esm.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
  z-index: 10;
  overflow-y: auto;

  transform: translateY(80%);

  ${props=>props.open&&styled_components_browser_esm.AH`
      transform: translateY(0);
    `}
`,DrawerHandle=styled_components_browser_esm.Ay.div`
  text-align: center;
  color: #000000;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`,DrawerContent=styled_components_browser_esm.Ay.div`
  padding: 20px;
`,BackButton$2=styled_components_browser_esm.Ay.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`,StepIndicator=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1em;
  z-index: 15;
`,MuteButton=styled_components_browser_esm.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  z-index: 15;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`,RecipeSwipeComponent=({recipe})=>{const{name,cuisine,time,servings,calories,steps,overviewVideoUrl,overviewDescription}=recipe,[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(!1),[currentStepDescription,setCurrentStepDescription]=(0,react.useState)(overviewDescription),[isMuted,setIsMuted]=(0,react.useState)(!1),goToOverview=()=>{const swiperInstance=document.querySelector(".swiper").swiper;swiperInstance&&swiperInstance.slideTo(0),setCurrentStepDescription(overviewDescription)},toggleMute=()=>{setIsMuted((prev=>!prev)),document.querySelectorAll("video").forEach((video=>video.muted=!isMuted))};return react.createElement(RecipeSwipeContainer,null,isDrawerOpen&&react.createElement(DrawerOverlay,{onClick:e=>{setIsDrawerOpen(!1)}}),react.createElement(swiper_react.RC,{spaceBetween:0,slidesPerView:1,allowTouchMove:!isDrawerOpen,onSlideChange:swiper=>{document.querySelectorAll("video").forEach((video=>video.pause()));const video=swiper.slides[swiper.activeIndex].querySelector("video");video&&video.play(),setCurrentStepDescription(0===swiper.activeIndex?overviewDescription:steps[swiper.activeIndex-1].description)}},react.createElement(swiper_react.qr,null,react.createElement(SlideContainer,{className:"recipe-overview"},react.createElement(Video,{src:overviewVideoUrl,className:"overview-video",playsInline:!0,muted:isMuted,onClick:e=>e.target.paused?e.target.play():e.target.pause()}),react.createElement(Title$2,null,name),react.createElement(RecipeInfoCards,null,react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Cuisine"),react.createElement(RecipeCardContent,null,cuisine)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Time"),react.createElement(RecipeCardContent,null,time)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Servings"),react.createElement(RecipeCardContent,null,servings)),react.createElement(RecipeCard,null,react.createElement(RecipeCardHeader,null,"Calories"),react.createElement(RecipeCardContent,null,calories," kcal"))))),steps.map(((step,index)=>react.createElement(swiper_react.qr,{key:index},react.createElement(SlideContainer,{className:"recipe-step"},react.createElement(BackButton$2,{onClick:goToOverview},"Back"),react.createElement(StepIndicator,null,"Step ",index+1),react.createElement(MuteButton,{onClick:toggleMute},isMuted?"Unmute":"Mute"),react.createElement(Video,{src:step.videoUrl,className:"step-video",playsInline:!0,muted:isMuted,onClick:e=>e.target.paused?e.target.play():e.target.pause()})))))),react.createElement(Drawer,{open:isDrawerOpen,onClick:e=>{e.target.closest(".drawer-handle")&&(setCurrentStepDescription(currentStepDescription),setIsDrawerOpen((prev=>!prev)))}},react.createElement(DrawerHandle,{className:"drawer-handle"},"Swipe up for step details"),isDrawerOpen&&react.createElement(DrawerContent,null,react.createElement("p",null,currentStepDescription))))},RoomContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 100px; /* Space for the fixed bottom bar */
  position: relative; /* Make it a positioned parent for the absolute BackButton */
`,BackButton$1=styled_components_browser_esm.Ay.button`
  position: absolute;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  padding: 5px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 50; /* Ensure it's above the conversation content */
  }
`,ImageContainer=styled_components_browser_esm.Ay.div`
  aspect-ratio: 5 / 4;
  overflow: hidden;
`,RoomTitle=styled_components_browser_esm.Ay.h1`
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 60px; /* Space for the BackButton */
`,DatesContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 1rem auto 0;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  .icon-container {
    flex: 0 0 20%; /* 20% of the container */
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .dates {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .date-item {
      flex: 0 0 40%; /* Each section takes 40% of the container */
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Changed from 'left' to 'flex-start' */
      margin-left: 2rem;

      .date-label {
        font-size: 1rem;
        font-weight: 600; /* semi-bold */
        color: #555;
      }

      .date-value {
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
`,SectionHeader=styled_components_browser_esm.Ay.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  margin-left: 1rem;
`,SectionContent=styled_components_browser_esm.Ay.div`
  font-size: 1rem;
  color: #666;
  text-align: left;
  width: 100%;
  line-height: 1.5;
  margin-left: 1rem;
`,LocationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Space between address and map */
  width: 90%;
`,AddressText=styled_components_browser_esm.Ay.span`
  font-size: 1.1rem;
  color: #666;
`,FixedBottomBar=styled_components_browser_esm.Ay.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  1rem;
  z-index: 20;
`,RentContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,RentLabel=styled_components_browser_esm.Ay.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: #999;
`,RentText=styled_components_browser_esm.Ay.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`,SendMessageButton=styled_components_browser_esm.Ay.button`
  background-color: #A855F7;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;


  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`,ErrorContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5rem;
  color: red;
`,RoomsView=({roomData,handleSend,currentUser,id})=>{const[isDrawerOpen,setIsDrawerOpen]=(0,react.useState)(!1),navigate=(0,react_router_dist.Zp)();if(!roomData)return react.createElement(ErrorContainer,null,"Room not found.");const closeDrawer=()=>{setIsDrawerOpen(!1)},images=roomData.images&&Array.isArray(roomData.images)?roomData.images:[];return react.createElement(react.Fragment,null,react.createElement(RoomContainer,null,react.createElement(BackButton$1,{onClick:()=>{window.history.back()},"aria-label":"Go Back"},react.createElement(ChevronLeftIcon,null)),react.createElement(ImageContainer,null,images.length>0?react.createElement(ImageCarousel2,{images}):react.createElement("p",null,"No images available")),react.createElement(RoomTitle,null,roomData.title||"Room Title"),react.createElement(DatesContainer,null,react.createElement("div",{className:"icon-container"},react.createElement(CalendarIcon,null)),react.createElement("div",{className:"dates"},react.createElement("div",{className:"date-item"},react.createElement("span",{className:"date-label"},"From"),react.createElement("span",{className:"date-value"},roomData.startDate||"Anytime")),react.createElement("div",{className:"date-item"},react.createElement("span",{className:"date-label"},"To"),react.createElement("span",{className:"date-value"},roomData.endDate||"Anytime")))),react.createElement(SectionHeader,null,"Location"),react.createElement(SectionContent,null,react.createElement(LocationContainer,null,react.createElement(LocationIcon,{className:"w-6 h-6"}),react.createElement(AddressText,null,roomData.streetAddress?roomData.streetAddress:"No address provided",", ",roomData.city?roomData.city:"City",", ",roomData.county?roomData.county:"County",", ",roomData.eircode?roomData.eircode:"eirCode"))),react.createElement(SectionHeader,null,"Description"),react.createElement(SectionContent,null,roomData.description?roomData.description:"No description provided")),react.createElement(FixedBottomBar,null,react.createElement(RentContainer,null,react.createElement(RentLabel,null,"Monthly Rent"),react.createElement(RentText,null,"€",void 0!==roomData.rent?roomData.rent:"N/A")),react.createElement(SendMessageButton,{onClick:()=>{currentUser?setIsDrawerOpen(!0):navigate("/login",{state:{from:`/rooms/${id}`}})},disabled:roomData.userId===currentUser?.uid},"Send Message")),react.createElement(BottomDrawer,{isOpen:isDrawerOpen,onClose:closeDrawer,transitionDuration:300,height:"50%",maxWidth:"600px"},react.createElement(MessageForm,{onSend:handleSend,onClose:closeDrawer})))};function isArray(value){return Array.isArray?Array.isArray(value):"[object Array]"===getTag(value)}RoomsView.propTypes={roomData:prop_types_default().object.isRequired,handleSend:prop_types_default().func.isRequired,currentUser:prop_types_default().object,id:prop_types_default().string.isRequired};function isString(value){return"string"==typeof value}function isNumber(value){return"number"==typeof value}function isBoolean(value){return!0===value||!1===value||function isObjectLike(value){return isObject(value)&&null!==value}(value)&&"[object Boolean]"==getTag(value)}function isObject(value){return"object"==typeof value}function isDefined(value){return null!=value}function isBlank(value){return!value.trim().length}function getTag(value){return null==value?void 0===value?"[object Undefined]":"[object Null]":Object.prototype.toString.call(value)}const hasOwn=Object.prototype.hasOwnProperty;class KeyStore{constructor(keys){this._keys=[],this._keyMap={};let totalWeight=0;keys.forEach((key=>{let obj=createKey(key);this._keys.push(obj),this._keyMap[obj.id]=obj,totalWeight+=obj.weight})),this._keys.forEach((key=>{key.weight/=totalWeight}))}get(keyId){return this._keyMap[keyId]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function createKey(key){let path=null,id=null,src=null,weight=1,getFn=null;if(isString(key)||isArray(key))src=key,path=createKeyPath(key),id=createKeyId(key);else{if(!hasOwn.call(key,"name"))throw new Error((name=>`Missing ${name} property in key`)("name"));const name=key.name;if(src=name,hasOwn.call(key,"weight")&&(weight=key.weight,weight<=0))throw new Error((key=>`Property 'weight' in key '${key}' must be a positive integer`)(name));path=createKeyPath(name),id=createKeyId(name),getFn=key.getFn}return{path,id,weight,src,getFn}}function createKeyPath(key){return isArray(key)?key:key.split(".")}function createKeyId(key){return isArray(key)?key.join("."):key}var Config={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,b)=>a.score===b.score?a.idx<b.idx?-1:1:a.score<b.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function get(obj,path){let list=[],arr=!1;const deepGet=(obj,path,index)=>{if(isDefined(obj))if(path[index]){const value=obj[path[index]];if(!isDefined(value))return;if(index===path.length-1&&(isString(value)||isNumber(value)||isBoolean(value)))list.push(function index_es_toString(value){return null==value?"":function baseToString(value){if("string"==typeof value)return value;let result=value+"";return"0"==result&&1/value==-1/0?"-0":result}(value)}(value));else if(isArray(value)){arr=!0;for(let i=0,len=value.length;i<len;i+=1)deepGet(value[i],path,index+1)}else path.length&&deepGet(value,path,index+1)}else list.push(obj)};return deepGet(obj,isString(path)?path.split("."):path,0),arr?list:list[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const SPACE=/[^ ]+/g;class FuseIndex{constructor({getFn=Config.getFn,fieldNormWeight=Config.fieldNormWeight}={}){this.norm=function norm(weight=1,mantissa=3){const cache=new Map,m=Math.pow(10,mantissa);return{get(value){const numTokens=value.match(SPACE).length;if(cache.has(numTokens))return cache.get(numTokens);const norm=1/Math.pow(numTokens,.5*weight),n=parseFloat(Math.round(norm*m)/m);return cache.set(numTokens,n),n},clear(){cache.clear()}}}(fieldNormWeight,3),this.getFn=getFn,this.isCreated=!1,this.setIndexRecords()}setSources(docs=[]){this.docs=docs}setIndexRecords(records=[]){this.records=records}setKeys(keys=[]){this.keys=keys,this._keysMap={},keys.forEach(((key,idx)=>{this._keysMap[key.id]=idx}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach(((doc,docIndex)=>{this._addString(doc,docIndex)})):this.docs.forEach(((doc,docIndex)=>{this._addObject(doc,docIndex)})),this.norm.clear())}add(doc){const idx=this.size();isString(doc)?this._addString(doc,idx):this._addObject(doc,idx)}removeAt(idx){this.records.splice(idx,1);for(let i=idx,len=this.size();i<len;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(item,keyId){return item[this._keysMap[keyId]]}size(){return this.records.length}_addString(doc,docIndex){if(!isDefined(doc)||isBlank(doc))return;let record={v:doc,i:docIndex,n:this.norm.get(doc)};this.records.push(record)}_addObject(doc,docIndex){let record={i:docIndex,$:{}};this.keys.forEach(((key,keyIndex)=>{let value=key.getFn?key.getFn(doc):this.getFn(doc,key.path);if(isDefined(value))if(isArray(value)){let subRecords=[];const stack=[{nestedArrIndex:-1,value}];for(;stack.length;){const{nestedArrIndex,value}=stack.pop();if(isDefined(value))if(isString(value)&&!isBlank(value)){let subRecord={v:value,i:nestedArrIndex,n:this.norm.get(value)};subRecords.push(subRecord)}else isArray(value)&&value.forEach(((item,k)=>{stack.push({nestedArrIndex:k,value:item})}))}record.$[keyIndex]=subRecords}else if(isString(value)&&!isBlank(value)){let subRecord={v:value,n:this.norm.get(value)};record.$[keyIndex]=subRecord}})),this.records.push(record)}toJSON(){return{keys:this.keys,records:this.records}}}function createIndex(keys,docs,{getFn=Config.getFn,fieldNormWeight=Config.fieldNormWeight}={}){const myIndex=new FuseIndex({getFn,fieldNormWeight});return myIndex.setKeys(keys.map(createKey)),myIndex.setSources(docs),myIndex.create(),myIndex}function computeScore$1(pattern,{errors=0,currentLocation=0,expectedLocation=0,distance=Config.distance,ignoreLocation=Config.ignoreLocation}={}){const accuracy=errors/pattern.length;if(ignoreLocation)return accuracy;const proximity=Math.abs(expectedLocation-currentLocation);return distance?accuracy+proximity/distance:proximity?1:accuracy}function search(text,pattern,patternAlphabet,{location=Config.location,distance=Config.distance,threshold=Config.threshold,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,includeMatches=Config.includeMatches,ignoreLocation=Config.ignoreLocation}={}){if(pattern.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const patternLen=pattern.length,textLen=text.length,expectedLocation=Math.max(0,Math.min(location,textLen));let currentThreshold=threshold,bestLocation=expectedLocation;const computeMatches=minMatchCharLength>1||includeMatches,matchMask=computeMatches?Array(textLen):[];let index;for(;(index=text.indexOf(pattern,bestLocation))>-1;){let score=computeScore$1(pattern,{currentLocation:index,expectedLocation,distance,ignoreLocation});if(currentThreshold=Math.min(score,currentThreshold),bestLocation=index+patternLen,computeMatches){let i=0;for(;i<patternLen;)matchMask[index+i]=1,i+=1}}bestLocation=-1;let lastBitArr=[],finalScore=1,binMax=patternLen+textLen;const mask=1<<patternLen-1;for(let i=0;i<patternLen;i+=1){let binMin=0,binMid=binMax;for(;binMin<binMid;){computeScore$1(pattern,{errors:i,currentLocation:expectedLocation+binMid,expectedLocation,distance,ignoreLocation})<=currentThreshold?binMin=binMid:binMax=binMid,binMid=Math.floor((binMax-binMin)/2+binMin)}binMax=binMid;let start=Math.max(1,expectedLocation-binMid+1),finish=findAllMatches?textLen:Math.min(expectedLocation+binMid,textLen)+patternLen,bitArr=Array(finish+2);bitArr[finish+1]=(1<<i)-1;for(let j=finish;j>=start;j-=1){let currentLocation=j-1,charMatch=patternAlphabet[text.charAt(currentLocation)];if(computeMatches&&(matchMask[currentLocation]=+!!charMatch),bitArr[j]=(bitArr[j+1]<<1|1)&charMatch,i&&(bitArr[j]|=(lastBitArr[j+1]|lastBitArr[j])<<1|1|lastBitArr[j+1]),bitArr[j]&mask&&(finalScore=computeScore$1(pattern,{errors:i,currentLocation,expectedLocation,distance,ignoreLocation}),finalScore<=currentThreshold)){if(currentThreshold=finalScore,bestLocation=currentLocation,bestLocation<=expectedLocation)break;start=Math.max(1,2*expectedLocation-bestLocation)}}if(computeScore$1(pattern,{errors:i+1,currentLocation:expectedLocation,expectedLocation,distance,ignoreLocation})>currentThreshold)break;lastBitArr=bitArr}const result={isMatch:bestLocation>=0,score:Math.max(.001,finalScore)};if(computeMatches){const indices=function convertMaskToIndices(matchmask=[],minMatchCharLength=Config.minMatchCharLength){let indices=[],start=-1,end=-1,i=0;for(let len=matchmask.length;i<len;i+=1){let match=matchmask[i];match&&-1===start?start=i:match||-1===start||(end=i-1,end-start+1>=minMatchCharLength&&indices.push([start,end]),start=-1)}return matchmask[i-1]&&i-start>=minMatchCharLength&&indices.push([start,i-1]),indices}(matchMask,minMatchCharLength);indices.length?includeMatches&&(result.indices=indices):result.isMatch=!1}return result}function createPatternAlphabet(pattern){let mask={};for(let i=0,len=pattern.length;i<len;i+=1){const char=pattern.charAt(i);mask[char]=(mask[char]||0)|1<<len-i-1}return mask}class BitapSearch{constructor(pattern,{location=Config.location,threshold=Config.threshold,distance=Config.distance,includeMatches=Config.includeMatches,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,isCaseSensitive=Config.isCaseSensitive,ignoreLocation=Config.ignoreLocation}={}){if(this.options={location,threshold,distance,includeMatches,findAllMatches,minMatchCharLength,isCaseSensitive,ignoreLocation},this.pattern=isCaseSensitive?pattern:pattern.toLowerCase(),this.chunks=[],!this.pattern.length)return;const addChunk=(pattern,startIndex)=>{this.chunks.push({pattern,alphabet:createPatternAlphabet(pattern),startIndex})},len=this.pattern.length;if(len>32){let i=0;const remainder=len%32,end=len-remainder;for(;i<end;)addChunk(this.pattern.substr(i,32),i),i+=32;if(remainder){const startIndex=len-32;addChunk(this.pattern.substr(startIndex),startIndex)}}else addChunk(this.pattern,0)}searchIn(text){const{isCaseSensitive,includeMatches}=this.options;if(isCaseSensitive||(text=text.toLowerCase()),this.pattern===text){let result={isMatch:!0,score:0};return includeMatches&&(result.indices=[[0,text.length-1]]),result}const{location,distance,threshold,findAllMatches,minMatchCharLength,ignoreLocation}=this.options;let allIndices=[],totalScore=0,hasMatches=!1;this.chunks.forEach((({pattern,alphabet,startIndex})=>{const{isMatch,score,indices}=search(text,pattern,alphabet,{location:location+startIndex,distance,threshold,findAllMatches,minMatchCharLength,includeMatches,ignoreLocation});isMatch&&(hasMatches=!0),totalScore+=score,isMatch&&indices&&(allIndices=[...allIndices,...indices])}));let result={isMatch:hasMatches,score:hasMatches?totalScore/this.chunks.length:1};return hasMatches&&includeMatches&&(result.indices=allIndices),result}}class BaseMatch{constructor(pattern){this.pattern=pattern}static isMultiMatch(pattern){return getMatch(pattern,this.multiRegex)}static isSingleMatch(pattern){return getMatch(pattern,this.singleRegex)}search(){}}function getMatch(pattern,exp){const matches=pattern.match(exp);return matches?matches[1]:null}class FuzzyMatch extends BaseMatch{constructor(pattern,{location=Config.location,threshold=Config.threshold,distance=Config.distance,includeMatches=Config.includeMatches,findAllMatches=Config.findAllMatches,minMatchCharLength=Config.minMatchCharLength,isCaseSensitive=Config.isCaseSensitive,ignoreLocation=Config.ignoreLocation}={}){super(pattern),this._bitapSearch=new BitapSearch(pattern,{location,threshold,distance,includeMatches,findAllMatches,minMatchCharLength,isCaseSensitive,ignoreLocation})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(text){return this._bitapSearch.searchIn(text)}}class IncludeMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(text){let index,location=0;const indices=[],patternLen=this.pattern.length;for(;(index=text.indexOf(this.pattern,location))>-1;)location=index+patternLen,indices.push([index,location-1]);const isMatch=!!indices.length;return{isMatch,score:isMatch?0:1,indices}}}const searchers=[class ExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(text){const isMatch=text===this.pattern;return{isMatch,score:isMatch?0:1,indices:[0,this.pattern.length-1]}}},IncludeMatch,class PrefixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(text){const isMatch=text.startsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,this.pattern.length-1]}}},class InversePrefixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(text){const isMatch=!text.startsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},class InverseSuffixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(text){const isMatch=!text.endsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},class SuffixExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(text){const isMatch=text.endsWith(this.pattern);return{isMatch,score:isMatch?0:1,indices:[text.length-this.pattern.length,text.length-1]}}},class InverseExactMatch extends BaseMatch{constructor(pattern){super(pattern)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(text){const isMatch=-1===text.indexOf(this.pattern);return{isMatch,score:isMatch?0:1,indices:[0,text.length-1]}}},FuzzyMatch],searchersLen=searchers.length,SPACE_RE=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const MultiMatchSet=new Set([FuzzyMatch.type,IncludeMatch.type]);class ExtendedSearch{constructor(pattern,{isCaseSensitive=Config.isCaseSensitive,includeMatches=Config.includeMatches,minMatchCharLength=Config.minMatchCharLength,ignoreLocation=Config.ignoreLocation,findAllMatches=Config.findAllMatches,location=Config.location,threshold=Config.threshold,distance=Config.distance}={}){this.query=null,this.options={isCaseSensitive,includeMatches,minMatchCharLength,findAllMatches,ignoreLocation,location,threshold,distance},this.pattern=isCaseSensitive?pattern:pattern.toLowerCase(),this.query=function parseQuery(pattern,options={}){return pattern.split("|").map((item=>{let query=item.trim().split(SPACE_RE).filter((item=>item&&!!item.trim())),results=[];for(let i=0,len=query.length;i<len;i+=1){const queryItem=query[i];let found=!1,idx=-1;for(;!found&&++idx<searchersLen;){const searcher=searchers[idx];let token=searcher.isMultiMatch(queryItem);token&&(results.push(new searcher(token,options)),found=!0)}if(!found)for(idx=-1;++idx<searchersLen;){const searcher=searchers[idx];let token=searcher.isSingleMatch(queryItem);if(token){results.push(new searcher(token,options));break}}}return results}))}(this.pattern,this.options)}static condition(_,options){return options.useExtendedSearch}searchIn(text){const query=this.query;if(!query)return{isMatch:!1,score:1};const{includeMatches,isCaseSensitive}=this.options;text=isCaseSensitive?text:text.toLowerCase();let numMatches=0,allIndices=[],totalScore=0;for(let i=0,qLen=query.length;i<qLen;i+=1){const searchers=query[i];allIndices.length=0,numMatches=0;for(let j=0,pLen=searchers.length;j<pLen;j+=1){const searcher=searchers[j],{isMatch,indices,score}=searcher.search(text);if(!isMatch){totalScore=0,numMatches=0,allIndices.length=0;break}if(numMatches+=1,totalScore+=score,includeMatches){const type=searcher.constructor.type;MultiMatchSet.has(type)?allIndices=[...allIndices,...indices]:allIndices.push(indices)}}if(numMatches){let result={isMatch:!0,score:totalScore/numMatches};return includeMatches&&(result.indices=allIndices),result}}return{isMatch:!1,score:1}}}const registeredSearchers=[];function createSearcher(pattern,options){for(let i=0,len=registeredSearchers.length;i<len;i+=1){let searcherClass=registeredSearchers[i];if(searcherClass.condition(pattern,options))return new searcherClass(pattern,options)}return new BitapSearch(pattern,options)}const LogicalOperator_AND="$and",LogicalOperator_OR="$or",KeyType_PATH="$path",KeyType_PATTERN="$val",isExpression=query=>!(!query[LogicalOperator_AND]&&!query[LogicalOperator_OR]),convertToExplicit=query=>({[LogicalOperator_AND]:Object.keys(query).map((key=>({[key]:query[key]})))});function parse(query,options,{auto=!0}={}){const next=query=>{let keys=Object.keys(query);const isQueryPath=(query=>!!query[KeyType_PATH])(query);if(!isQueryPath&&keys.length>1&&!isExpression(query))return next(convertToExplicit(query));if((query=>!isArray(query)&&isObject(query)&&!isExpression(query))(query)){const key=isQueryPath?query[KeyType_PATH]:keys[0],pattern=isQueryPath?query[KeyType_PATTERN]:query[key];if(!isString(pattern))throw new Error((key=>`Invalid value for key ${key}`)(key));const obj={keyId:createKeyId(key),pattern};return auto&&(obj.searcher=createSearcher(pattern,options)),obj}let node={children:[],operator:keys[0]};return keys.forEach((key=>{const value=query[key];isArray(value)&&value.forEach((item=>{node.children.push(next(item))}))})),node};return isExpression(query)||(query=convertToExplicit(query)),next(query)}function transformMatches(result,data){const matches=result.matches;data.matches=[],isDefined(matches)&&matches.forEach((match=>{if(!isDefined(match.indices)||!match.indices.length)return;const{indices,value}=match;let obj={indices,value};match.key&&(obj.key=match.key.src),match.idx>-1&&(obj.refIndex=match.idx),data.matches.push(obj)}))}function transformScore(result,data){data.score=result.score}class Fuse{constructor(docs,options={},index){this.options={...Config,...options},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(docs,index)}setCollection(docs,index){if(this._docs=docs,index&&!(index instanceof FuseIndex))throw new Error("Incorrect 'index' type");this._myIndex=index||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(doc){isDefined(doc)&&(this._docs.push(doc),this._myIndex.add(doc))}remove(predicate=()=>!1){const results=[];for(let i=0,len=this._docs.length;i<len;i+=1){const doc=this._docs[i];predicate(doc,i)&&(this.removeAt(i),i-=1,len-=1,results.push(doc))}return results}removeAt(idx){this._docs.splice(idx,1),this._myIndex.removeAt(idx)}getIndex(){return this._myIndex}search(query,{limit=-1}={}){const{includeMatches,includeScore,shouldSort,sortFn,ignoreFieldNorm}=this.options;let results=isString(query)?isString(this._docs[0])?this._searchStringList(query):this._searchObjectList(query):this._searchLogical(query);return function computeScore(results,{ignoreFieldNorm=Config.ignoreFieldNorm}){results.forEach((result=>{let totalScore=1;result.matches.forEach((({key,norm,score})=>{const weight=key?key.weight:null;totalScore*=Math.pow(0===score&&weight?Number.EPSILON:score,(weight||1)*(ignoreFieldNorm?1:norm))})),result.score=totalScore}))}(results,{ignoreFieldNorm}),shouldSort&&results.sort(sortFn),isNumber(limit)&&limit>-1&&(results=results.slice(0,limit)),function format(results,docs,{includeMatches=Config.includeMatches,includeScore=Config.includeScore}={}){const transformers=[];return includeMatches&&transformers.push(transformMatches),includeScore&&transformers.push(transformScore),results.map((result=>{const{idx}=result,data={item:docs[idx],refIndex:idx};return transformers.length&&transformers.forEach((transformer=>{transformer(result,data)})),data}))}(results,this._docs,{includeMatches,includeScore})}_searchStringList(query){const searcher=createSearcher(query,this.options),{records}=this._myIndex,results=[];return records.forEach((({v:text,i:idx,n:norm})=>{if(!isDefined(text))return;const{isMatch,score,indices}=searcher.searchIn(text);isMatch&&results.push({item:text,idx,matches:[{score,value:text,norm,indices}]})})),results}_searchLogical(query){const expression=parse(query,this.options),evaluate=(node,item,idx)=>{if(!node.children){const{keyId,searcher}=node,matches=this._findMatches({key:this._keyStore.get(keyId),value:this._myIndex.getValueForItemAtKeyId(item,keyId),searcher});return matches&&matches.length?[{idx,item,matches}]:[]}const res=[];for(let i=0,len=node.children.length;i<len;i+=1){const child=node.children[i],result=evaluate(child,item,idx);if(result.length)res.push(...result);else if(node.operator===LogicalOperator_AND)return[]}return res},records=this._myIndex.records,resultMap={},results=[];return records.forEach((({$:item,i:idx})=>{if(isDefined(item)){let expResults=evaluate(expression,item,idx);expResults.length&&(resultMap[idx]||(resultMap[idx]={idx,item,matches:[]},results.push(resultMap[idx])),expResults.forEach((({matches})=>{resultMap[idx].matches.push(...matches)})))}})),results}_searchObjectList(query){const searcher=createSearcher(query,this.options),{keys,records}=this._myIndex,results=[];return records.forEach((({$:item,i:idx})=>{if(!isDefined(item))return;let matches=[];keys.forEach(((key,keyIndex)=>{matches.push(...this._findMatches({key,value:item[keyIndex],searcher}))})),matches.length&&results.push({idx,item,matches})})),results}_findMatches({key,value,searcher}){if(!isDefined(value))return[];let matches=[];if(isArray(value))value.forEach((({v:text,i:idx,n:norm})=>{if(!isDefined(text))return;const{isMatch,score,indices}=searcher.searchIn(text);isMatch&&matches.push({score,key,value:text,idx,norm,indices})}));else{const{v:text,n:norm}=value,{isMatch,score,indices}=searcher.searchIn(text);isMatch&&matches.push({score,key,value:text,norm,indices})}return matches}}Fuse.version="7.0.0",Fuse.createIndex=createIndex,Fuse.parseIndex=function parseIndex(data,{getFn=Config.getFn,fieldNormWeight=Config.fieldNormWeight}={}){const{keys,records}=data,myIndex=new FuseIndex({getFn,fieldNormWeight});return myIndex.setKeys(keys),myIndex.setIndexRecords(records),myIndex},Fuse.config=Config,Fuse.parseQuery=parse,function register(...args){registeredSearchers.push(...args)}(ExtendedSearch);const defaultFuseOptions={keys:["title"],threshold:.4};function useFuzzySearch(items,options={}){const[query,setQuery]=(0,react.useState)(""),[suggestions,setSuggestions]=(0,react.useState)([]),fuseInstance=(0,react.useMemo)((()=>function createFuseInstance(items,options={}){const fuseOptions={...defaultFuseOptions,...options};return new Fuse(items,fuseOptions)}(items,options)),[items,options]);return(0,react.useEffect)((()=>{const results=function performFuzzySearch(fuseInstance,query){return query.trim()?fuseInstance.search(query).map((result=>result.item)):[]}(fuseInstance,query);setSuggestions(results)}),[query,fuseInstance]),{query,setQuery,suggestions}}function SearchLogic({items,onSearch,historyItems=[]},fuseOptions={}){const[isOpen,setIsOpen]=(0,react.useState)(!1),{query,setQuery,suggestions}=useFuzzySearch(items,fuseOptions),[lastQuery,setLastQuery]=(0,react.useState)(""),close=()=>{setIsOpen(!1),setQuery("")};return{isOpen,open:()=>setIsOpen(!0),close,query,setQuery,suggestions,lastQuery,handleInputChange:e=>{const newQuery=e.target.value;setQuery(newQuery),onSearch&&onSearch(suggestions)},handleSuggestionClick:suggestion=>{const newQuery=suggestion.title;if(setQuery(newQuery),setLastQuery(newQuery),onSearch){const updatedSuggestions=items.filter((item=>item.title.toLowerCase().includes(newQuery.toLowerCase())));onSearch(updatedSuggestions)}close()},handleSearchForClick:()=>{onSearch&&onSearch(suggestions),setLastQuery(query),close()}}}styled_components_browser_esm.Ay.div`
  position: relative;
  width: 300px;
  font-family: Arial, sans-serif;
`,styled_components_browser_esm.Ay.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`,styled_components_browser_esm.Ay.button`
  margin-left: 8px;
  padding: 10px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`,styled_components_browser_esm.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  top: 44px;
  width: 100%;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,styled_components_browser_esm.Ay.li`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;const Container$2=styled_components_browser_esm.Ay.div`
  padding: 16px;
`,SearchInputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
`,SearchInput=styled_components_browser_esm.Ay.input`
  width: 100%;
  padding: 12px 40px 12px 12px; /* Add padding-right for the 'X' button */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0,123,255,0.3);
    outline: none;
  }
`,CloseButton=styled_components_browser_esm.Ay.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`,SuggestionsList=styled_components_browser_esm.Ay.ul`
  list-style: none;
  margin: 12px 0 0 0;
  padding: 0;
`,SuggestionItem=styled_components_browser_esm.Ay.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`,SectionTitle=styled_components_browser_esm.Ay.h4`
  margin: 16px 0 8px;
  font-size: 14px;
  color: #555;
`,SearchButton=styled_components_browser_esm.Ay.button`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  background-color: white;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  text-align: left;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #007bff;
  }
`,SearchText=styled_components_browser_esm.Ay.span`
  color: ${props=>props.hasQuery?"#000":"#888"};
`,OpenButton=(0,styled_components_browser_esm.Ay)(SearchButton)`
  margin: 20px;
`,Search2=({items,onSearch,historyItems=[]})=>{const fuseOptions=(0,react.useMemo)((()=>({keys:["title"]})),[]),{isOpen,open,close,query,suggestions,lastQuery,handleInputChange,handleSuggestionClick,handleSearchForClick}=SearchLogic({items,onSearch,historyItems},fuseOptions);return react.createElement(react.Fragment,null,react.createElement(OpenButton,{onClick:open},react.createElement(SearchText,{hasQuery:lastQuery},lastQuery||"Search...")),react.createElement(BottomDrawer,{isOpen,onClose:close},react.createElement(Container$2,null,react.createElement(SearchInputContainer,null,react.createElement(SearchInput,{type:"text",value:query,onChange:handleInputChange,placeholder:"Search tasks..."}),query&&react.createElement(CloseButton,{onClick:close,"aria-label":"Close Search"},"×")),!query&&historyItems.length>0&&react.createElement(react.Fragment,null,react.createElement(SectionTitle,null,"Recent Searches"),react.createElement(SuggestionsList,null,historyItems.map(((item,index)=>react.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title))))),query&&suggestions.length>0&&react.createElement(SuggestionsList,null,query&&react.createElement(SuggestionItem,{onClick:handleSearchForClick},'Search For "',query,'"'),suggestions.map(((item,index)=>react.createElement(SuggestionItem,{key:index,onClick:()=>handleSuggestionClick(item)},item.title)))))))},Page=(styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`,styled_components_browser_esm.Ay.select`
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ee;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`,styled_components_browser_esm.Ay.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #4a4a4a;
`,styled_components_browser_esm.Ay.select`
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6200ee;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-color: #6200ee;
    outline: none;
    box-shadow: 0 0 0 3px rgba(98, 0, 238, 0.2);
  }

  &:disabled {
    background-color: #f9f9f9;
    color: #bdbdbd;
    border-color: #e0e0e0;
    cursor: not-allowed;
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem;
`),Header=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb; /* light tailwind-gray */
`,BackButton=styled_components_browser_esm.Ay.button`
  position: absolute;
  left: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`,Title$1=styled_components_browser_esm.Ay.h1`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
`,SettingsTemplate=({headerTitle="Page Title",settings=[]})=>{const navigate=(0,react_router_dist.Zp)(),groupedSettings=settings.reduce(((acc,setting)=>(acc[setting.category]||(acc[setting.category]=[]),acc[setting.category].push(setting),acc)),{});return react.createElement(Page,null,react.createElement(Header,null,react.createElement(BackButton,{onClick:()=>navigate(-1)},react.createElement(fi.irw,{size:24})),react.createElement(Title$1,null,headerTitle)),Object.keys(groupedSettings).map(((category,idx)=>react.createElement(StackedList,{key:idx,category,items:groupedSettings[category]}))))};styled_components_browser_esm.Ay.div`
`,styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 50;
`,styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`,styled_components_browser_esm.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  transition: opacity 0.3s ease-in-out;
`,styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #2d3748;
  color: #edf2f7;
  transform: ${({isOpen})=>isOpen?"translateX(0)":"translateX(-100%)"};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({isOpen})=>isOpen?"0 2px 8px rgba(0, 0, 0, 0.5)":"none"};
  z-index: 50;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid #4a5568;
`,styled_components_browser_esm.Ay.h1`
  font-size: 1.875rem;
  font-weight: 600;
`,styled_components_browser_esm.Ay.nav`
  flex-grow: 1;
  overflow-y: auto;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-top: 1px solid #4a5568;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  color: #e2e8f0;
  text-decoration: none;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: rgba(74, 85, 104, 0.25);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
  }
`,styled_components_browser_esm.Ay.div`
    grid-column: ${props=>props.gridSpan||"auto"};
  display: flex;
  align-items: center;
  background-color: #f7f7f8;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,styled_components_browser_esm.Ay.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 1rem;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`,styled_components_browser_esm.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #222;
  }
`,(0,styled_components_browser_esm.Ay)(ArrowRightIcon)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`,styled_components_browser_esm.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always two columns */
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
`,styled_components_browser_esm.Ay.div`
  grid-column: span 2; /* Ensure buttons span both columns */
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 600px) {
    grid-column: span 1; /* Single column on smaller screens */
  }
`;const SortLogic=({items,onSortedChange})=>{const[sortBy,setSortBy]=(0,react.useState)(null),updateSort=(0,react.useCallback)((comparator=>{setSortBy((()=>comparator))}),[]),sortedItems=(0,react.useMemo)((()=>sortBy&&items?[...items].sort(sortBy):items),[items,sortBy]);return(0,react.useEffect)((()=>{onSortedChange&&onSortedChange(sortedItems)}),[sortedItems,onSortedChange]),{sortBy,updateSort,sortedItems}},SortContainer=styled_components_browser_esm.Ay.div`
`,Select=styled_components_browser_esm.Ay.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`,sortingOptions$2=[{label:"Sort By",comparator:null},{label:"Title: A-Z",comparator:(a,b)=>a.title.localeCompare(b.title)},{label:"Title: Z-A",comparator:(a,b)=>b.title.localeCompare(a.title)},{label:"Date: Newest",comparator:(a,b)=>new Date(b.date)-new Date(a.date)},{label:"Date: Oldest",comparator:(a,b)=>new Date(a.date)-new Date(b.date)}],Sort=({items,onSortedChange})=>{const{updateSort}=SortLogic({items,onSortedChange});return react.createElement(SortContainer,null,react.createElement(Select,{onChange:e=>{const selectedOption=sortingOptions$2.find((option=>option.label===e.target.value));updateSort(selectedOption?.comparator||null)}},sortingOptions$2.map((option=>react.createElement("option",{value:option.label,key:option.label},option.label)))))},sortingOptions$1=[{label:"Title: A-Z",comparator:(a,b)=>a.title.localeCompare(b.title)},{label:"Title: Z-A",comparator:(a,b)=>b.title.localeCompare(a.title)},{label:"Date: Newest",comparator:(a,b)=>new Date(b.date)-new Date(a.date)},{label:"Date: Oldest",comparator:(a,b)=>new Date(a.date)-new Date(b.date)}],Sort2=({items,onSortedChange,label="Sort by",color})=>{const{updateSort}=SortLogic({items,onSortedChange});return react.createElement(SelectInput,{name:"sort2",label,color,options:sortingOptions$1.map((({label})=>({value:label,label}))),onChange:e=>{const selectedOption=sortingOptions$1.find((option=>option.label===e.target.value));updateSort(selectedOption?.comparator||null)}})},sortingOptions=[{label:"Title: A-Z",comparator:(a,b)=>a.title.localeCompare(b.title)},{label:"Title: Z-A",comparator:(a,b)=>b.title.localeCompare(a.title)},{label:"Date: Newest",comparator:(a,b)=>new Date(b.date)-new Date(a.date)},{label:"Date: Oldest",comparator:(a,b)=>new Date(a.date)-new Date(b.date)}],RadioContainer=styled_components_browser_esm.Ay.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,SortButton=styled_components_browser_esm.Ay.button`
display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .icon {
    margin-right: 0.5rem;
    height: 24px;
    width: 24px;
  }
`,DrawerHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
font-weight: bold;
font-size: 1.5rem;
`,RadioLabel=styled_components_browser_esm.Ay.label`
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
`,RadioOption=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,SortRadio=({items,onSortedChange})=>{const[isDrawerOpen,setDrawerOpen]=(0,react.useState)(!1),{updateSort}=SortLogic({items,onSortedChange}),handleChange=e=>{const selectedOption=sortingOptions.find((option=>option.label===e.target.value));updateSort(selectedOption?.comparator||null)};return react.createElement(react.Fragment,null,react.createElement(SortButton,{onClick:()=>setDrawerOpen(!0)},react.createElement(SortIcon,{className:"icon"}),"Sort by"),react.createElement(BottomDrawer,{isOpen:isDrawerOpen,onClose:()=>setDrawerOpen(!1)},react.createElement(DrawerHeader,null,react.createElement("h4",null,"Sort By")),react.createElement(RadioContainer,null,sortingOptions.map((option=>react.createElement(RadioOption,{key:option.label},react.createElement("input",{type:"radio",id:option.label,name:"sort",value:option.label,onChange:handleChange}),react.createElement(RadioLabel,{htmlFor:option.label},option.label)))))))},CategoryWrapper=styled_components_browser_esm.Ay.div`
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
`,StackedList=({category,items})=>react.createElement(CategoryWrapper,null,react.createElement(CategoryTitle,null,category),react.createElement(ItemsContainer,null,items.map(((item,index)=>react.createElement(MenuItem,{key:index,icon:item.icon,text:item.text,link:item.link}))))),Container$1=styled_components_browser_esm.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
`,Button=styled_components_browser_esm.Ay.button`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1rem;
  color: ${({isActive,activeColor})=>isActive?activeColor:"inherit"};

`,Underline=styled_components_browser_esm.Ay.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  transition: transform 0.3s ease, width 0.3s ease;
`,TabGroup=({tabs,activeColor,activeIndex:controlledIndex,onTabChange})=>{const isControlled=void 0!==controlledIndex&&"function"==typeof onTabChange,[internalIndex,setInternalIndex]=(0,react.useState)(0),activeIndex=isControlled?controlledIndex:internalIndex,tabContainerRef=(0,react.useRef)(null),[underlineStyle,setUnderlineStyle]=(0,react.useState)({});(0,react.useEffect)((()=>{if(tabContainerRef.current){const tabWidth=tabContainerRef.current.offsetWidth/tabs.length;setUnderlineStyle({width:`${tabWidth}px`,transform:`translateX(${activeIndex*tabWidth}px)`})}}),[activeIndex,tabs.length]);return react.createElement(Container$1,{ref:tabContainerRef},tabs.map(((tabName,index)=>react.createElement(Button,{key:tabName,isActive:activeIndex===index,activeColor,onClick:()=>(index=>{isControlled?onTabChange(index):(setInternalIndex(index),onTabChange&&onTabChange(index))})(index)},tabName))),react.createElement(Underline,{style:{...underlineStyle,backgroundColor:activeColor}}))};TabGroup.propTypes={tabs:prop_types_default().arrayOf(prop_types_default().string).isRequired,activeColor:prop_types_default().string,activeIndex:prop_types_default().number,onTabChange:prop_types_default().func},TabGroup.defaultProps={activeColor:"#007bff",activeIndex:void 0,onTabChange:void 0};styled_components_browser_esm.Ay.div`
        grid-column: ${props=>props.gridSpan||"auto"};

  .input-container {
    position: relative;
    margin: 50px auto;
    width: 200px;
  }

  .input-container input[type="text"] {
    font-size: 20px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 5px 0;
    background-color: transparent;
    outline: none;
  }

  .input-container .label {
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .input-container input[type="text"]:focus ~ .label,
  .input-container input[type="text"]:valid ~ .label {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  .input-container .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #333;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .input-container input[type="text"]:focus ~ .underline,
  .input-container input[type="text"]:valid ~ .underline {
    transform: scaleX(1);
  }`,styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  .input-group {
   position: relative;
  }

  .input {
   border: solid 1.5px #9e9e9e;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #000;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #e8e8e8;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid #1a73e8;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #fff;
   padding: 0 .2em;
   color: #2196f3;
  }`;const InputWrapper=styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Label=styled_components_browser_esm.Ay.label`
  margin-bottom: 8px;
  font-weight: 600;
`,Input=styled_components_browser_esm.Ay.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,TimeInput=({label,name,value,onChange,placeholder,required,disabled,min,max,step,autoFocus,readOnly,className,...props})=>react.createElement(InputWrapper,{className,gridSpan:props.gridSpan},react.createElement(Label,{htmlFor:name},label),react.createElement(Input,{type:"time",id:name,name,value,onChange:e=>onChange(e),placeholder,required,disabled,min,max,step,autoFocus,readOnly}));TimeInput.propTypes={label:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired,onChange:prop_types_default().func.isRequired,placeholder:prop_types_default().string,required:prop_types_default().bool,disabled:prop_types_default().bool,min:prop_types_default().string,max:prop_types_default().string,step:prop_types_default().number,autoFocus:prop_types_default().bool,readOnly:prop_types_default().bool,className:prop_types_default().string},TimeInput.defaultProps={placeholder:"",required:!1,disabled:!1,min:void 0,max:void 0,step:void 0,autoFocus:!1,readOnly:!1,className:""};styled_components_browser_esm.Ay.div`
      grid-column: ${props=>props.gridSpan||"auto"};

  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,styled_components_browser_esm.Ay.label`
  margin-left: 8px;
  font-weight: 500;
`,styled_components_browser_esm.Ay.input`
  width: 50px;
  height: 25px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: #007bff;
  }

  &:before {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background: white;
    transition: transform 0.3s;
  }

  &:checked:before {
    transform: translateX(25px);
  }

  &:disabled {
    background: #e9ecef;
    cursor: not-allowed;

    &:before {
      background: #ced4da;
    }
  }
`,styled_components_browser_esm.Ay.nav`
  position: relative; /* Ensures the navbar is part of the document flow */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  font-size: 1.875rem; /* Text size: 30px */
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor||"#000000"};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9; /* Default hover color */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`;const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${props=>props.backgroundColor||"#000"};
color: ${props=>props.color||"#fff"};
  height: 50px;
`,LeftSection=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .svg {
  height: 24px;
  width: 24px;
  }
`,CenterSection=styled_components_browser_esm.Ay.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`,RightSection=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,TopNavBar3=({title,backgroundColor,color})=>{const navigate=(0,react_router_dist.Zp)();return react.createElement(Container,{backgroundColor,color},react.createElement(LeftSection,{onClick:()=>{navigate(-1)}},react.createElement(ChevronLeftIcon,{className:"svg"})),react.createElement(CenterSection,null,title),react.createElement(RightSection,null))};TopNavBar3.propTypes={title:prop_types_default().string.isRequired,backgroundColor:prop_types_default().string},TopNavBar3.defaultProps={backgroundColor:"#000"};styled_components_browser_esm.Ay.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`,styled_components_browser_esm.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,(0,styled_components_browser_esm.Ay)(dist.N_)`
  border-radius: 0.375rem;
  background-color: ${props=>props.signInColor};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.5);
  }
`,styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff; /* Background for the field */
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9fafb; /* Slightly darker hover background equivalent to hover:bg-gray-50 */
  }
`,styled_components_browser_esm.Ay.div`
  margin-right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280; /* Equivalent to text-gray-500 */
`,styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.Ay.div`
  font-size: 12px;
  color: #9ca3af; /* Equivalent to text-gray-400 */
`,styled_components_browser_esm.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #111827; /* Equivalent to text-gray-900 */
`},"./node_modules/load-script/index.js":module=>{function stdOnEnd(script,cb){script.onload=function(){this.onerror=this.onload=null,cb(null,script)},script.onerror=function(){this.onerror=this.onload=null,cb(new Error("Failed to load "+this.src),script)}}function ieOnEnd(script,cb){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,cb(null,script))}}module.exports=function load(src,opts,cb){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof opts&&(cb=opts,opts={}),opts=opts||{},cb=cb||function(){},script.type=opts.type||"text/javascript",script.charset=opts.charset||"utf8",script.async=!("async"in opts)||!!opts.async,script.src=src,opts.attrs&&function setAttributes(script,attrs){for(var attr in attrs)script.setAttribute(attr,attrs[attr])}(script,opts.attrs),opts.text&&(script.text=""+opts.text),("onload"in script?stdOnEnd:ieOnEnd)(script,cb),script.onload||stdOnEnd(script,cb),head.appendChild(script)}},"./node_modules/memoize-one/dist/memoize-one.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var safeIsNaN=Number.isNaN||function ponyfill(value){return"number"==typeof value&&value!=value};function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(first=newInputs[i],second=lastInputs[i],!(first===second||safeIsNaN(first)&&safeIsNaN(second)))return!1;var first,second;return!0}const __WEBPACK_DEFAULT_EXPORT__=function memoizeOne(resultFn,isEqual){var lastThis;void 0===isEqual&&(isEqual=areInputsEqual);var lastResult,lastArgs=[],calledOnce=!1;return function memoized(){for(var newArgs=[],_i=0;_i<arguments.length;_i++)newArgs[_i]=arguments[_i];return calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)||(lastResult=resultFn.apply(this,newArgs),calledOnce=!0,lastThis=this,lastArgs=newArgs),lastResult}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/react-fast-compare/index.js":module=>{var hasElementType="undefined"!=typeof Element,hasMap="function"==typeof Map,hasSet="function"==typeof Set,hasArrayBuffer="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys,it;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;for(it=a.entries();!(i=it.next()).done;)if(!equal(i.value[1],b.get(i.value[0])))return!1;return!0}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(it=a.entries();!(i=it.next()).done;)if(!b.has(i.value[0]))return!1;return!0}if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf&&"function"==typeof a.valueOf&&"function"==typeof b.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString&&"function"==typeof a.toString&&"function"==typeof b.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;if(hasElementType&&a instanceof Element)return!1;for(i=length;0!=i--;)if(("_owner"!==keys[i]&&"__v"!==keys[i]&&"__o"!==keys[i]||!a.$$typeof)&&!equal(a[keys[i]],b[keys[i]]))return!1;return!0}return a!=a&&b!=b}module.exports=function isEqual(a,b){try{return equal(a,b)}catch(error){if((error.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw error}}},"./node_modules/react-player/lib/Player.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Player_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Player_exports,{default:()=>Player}),module.exports=(mod=Player_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/react/index.js")),import_react_fast_compare=__toESM(__webpack_require__("./node_modules/react-fast-compare/index.js")),import_props=__webpack_require__("./node_modules/react-player/lib/props.js"),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js");class Player extends import_react.Component{constructor(){super(...arguments),__publicField(this,"mounted",!1),__publicField(this,"isReady",!1),__publicField(this,"isPlaying",!1),__publicField(this,"isLoading",!0),__publicField(this,"loadOnReady",null),__publicField(this,"startOnPlay",!0),__publicField(this,"seekOnPlay",null),__publicField(this,"onDurationCalled",!1),__publicField(this,"handlePlayerMount",(player=>{this.player||(this.player=player,this.player.load(this.props.url)),this.progress()})),__publicField(this,"getInternalPlayer",(key=>this.player?this.player[key]:null)),__publicField(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const playedSeconds=this.getCurrentTime()||0,loadedSeconds=this.getSecondsLoaded(),duration=this.getDuration();if(duration){const progress={playedSeconds,played:playedSeconds/duration};null!==loadedSeconds&&(progress.loadedSeconds=loadedSeconds,progress.loaded=loadedSeconds/duration),progress.playedSeconds===this.prevPlayed&&progress.loadedSeconds===this.prevLoaded||this.props.onProgress(progress),this.prevPlayed=progress.playedSeconds,this.prevLoaded=progress.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),__publicField(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady,playing,volume,muted}=this.props;onReady(),muted||null===volume||this.player.setVolume(volume),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):playing&&this.player.play(),this.handleDurationCheck()})),__publicField(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart,onPlay,playbackRate}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==playbackRate&&this.player.setPlaybackRate(playbackRate),onStart(),this.startOnPlay=!1),onPlay(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),__publicField(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),__publicField(this,"handleEnded",(()=>{const{activePlayer,loop,onEnded}=this.props;activePlayer.loopOnEnded&&loop&&this.seekTo(0),loop||(this.isPlaying=!1,onEnded())})),__publicField(this,"handleError",((...args)=>{this.isLoading=!1,this.props.onError(...args)})),__publicField(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const duration=this.getDuration();duration?this.onDurationCalled||(this.props.onDuration(duration),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),__publicField(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(prevProps){if(!this.player)return;const{url,playing,volume,muted,playbackRate,pip,loop,activePlayer,disableDeferredLoading}=this.props;if(!(0,import_react_fast_compare.default)(prevProps.url,url)){if(this.isLoading&&!activePlayer.forceLoad&&!disableDeferredLoading&&!(0,import_utils.isMediaStream)(url))return console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`),void(this.loadOnReady=url);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(url,this.isReady)}prevProps.playing||!playing||this.isPlaying||this.player.play(),prevProps.playing&&!playing&&this.isPlaying&&this.player.pause(),!prevProps.pip&&pip&&this.player.enablePIP&&this.player.enablePIP(),prevProps.pip&&!pip&&this.player.disablePIP&&this.player.disablePIP(),prevProps.volume!==volume&&null!==volume&&this.player.setVolume(volume),prevProps.muted!==muted&&(muted?this.player.mute():(this.player.unmute(),null!==volume&&setTimeout((()=>this.player.setVolume(volume))))),prevProps.playbackRate!==playbackRate&&this.player.setPlaybackRate&&this.player.setPlaybackRate(playbackRate),prevProps.loop!==loop&&this.player.setLoop&&this.player.setLoop(loop)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(amount,type,keepPlaying){if(!this.isReady)return void(0!==amount&&(this.seekOnPlay=amount,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(type?"fraction"===type:amount>0&&amount<1){const duration=this.player.getDuration();return duration?void this.player.seekTo(duration*amount,keepPlaying):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(amount,keepPlaying)}render(){const Player2=this.props.activePlayer;return Player2?import_react.default.createElement(Player2,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}__publicField(Player,"displayName","Player"),__publicField(Player,"propTypes",import_props.propTypes),__publicField(Player,"defaultProps",import_props.defaultProps)},"./node_modules/react-player/lib/ReactPlayer.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),ReactPlayer_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(ReactPlayer_exports,{createReactPlayer:()=>createReactPlayer}),module.exports=(mod=ReactPlayer_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/react/index.js")),import_deepmerge=__toESM(__webpack_require__("./node_modules/deepmerge/dist/cjs.js")),import_memoize_one=__toESM(__webpack_require__("./node_modules/memoize-one/dist/memoize-one.esm.js")),import_react_fast_compare=__toESM(__webpack_require__("./node_modules/react-fast-compare/index.js")),import_props=__webpack_require__("./node_modules/react-player/lib/props.js"),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_Player=__toESM(__webpack_require__("./node_modules/react-player/lib/Player.js"));const Preview=(0,import_utils.lazy)((()=>__webpack_require__.e(6353).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/Preview.js",23)))),IS_BROWSER="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,IS_GLOBAL=void 0!==__webpack_require__.g&&__webpack_require__.g.window&&__webpack_require__.g.window.document,SUPPORTED_PROPS=Object.keys(import_props.propTypes),UniversalSuspense=IS_BROWSER||IS_GLOBAL?import_react.Suspense:()=>null,customPlayers=[],createReactPlayer=(players,fallback)=>{var _a;return _a=class extends import_react.Component{constructor(){super(...arguments),__publicField(this,"state",{showPreview:!!this.props.light}),__publicField(this,"references",{wrapper:wrapper=>{this.wrapper=wrapper},player:player=>{this.player=player}}),__publicField(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),__publicField(this,"showPreview",(()=>{this.setState({showPreview:!0})})),__publicField(this,"getDuration",(()=>this.player?this.player.getDuration():null)),__publicField(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),__publicField(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),__publicField(this,"getInternalPlayer",((key="player")=>this.player?this.player.getInternalPlayer(key):null)),__publicField(this,"seekTo",((fraction,type,keepPlaying)=>{if(!this.player)return null;this.player.seekTo(fraction,type,keepPlaying)})),__publicField(this,"handleReady",(()=>{this.props.onReady(this)})),__publicField(this,"getActivePlayer",(0,import_memoize_one.default)((url=>{for(const player of[...customPlayers,...players])if(player.canPlay(url))return player;return fallback||null}))),__publicField(this,"getConfig",(0,import_memoize_one.default)(((url,key)=>{const{config}=this.props;return import_deepmerge.default.all([import_props.defaultProps.config,import_props.defaultProps.config[key]||{},config,config[key]||{}])}))),__publicField(this,"getAttributes",(0,import_memoize_one.default)((url=>(0,import_utils.omit)(this.props,SUPPORTED_PROPS)))),__publicField(this,"renderActivePlayer",(url=>{if(!url)return null;const player=this.getActivePlayer(url);if(!player)return null;const config=this.getConfig(url,player.key);return import_react.default.createElement(import_Player.default,{...this.props,key:player.key,ref:this.references.player,config,activePlayer:player.lazyPlayer||player,onReady:this.handleReady})}))}shouldComponentUpdate(nextProps,nextState){return!(0,import_react_fast_compare.default)(this.props,nextProps)||!(0,import_react_fast_compare.default)(this.state,nextState)}componentDidUpdate(prevProps){const{light}=this.props;!prevProps.light&&light&&this.setState({showPreview:!0}),prevProps.light&&!light&&this.setState({showPreview:!1})}renderPreview(url){if(!url)return null;const{light,playIcon,previewTabIndex,oEmbedUrl,previewAriaLabel}=this.props;return import_react.default.createElement(Preview,{url,light,playIcon,previewTabIndex,previewAriaLabel,oEmbedUrl,onClick:this.handleClickPreview})}render(){const{url,style,width,height,fallback:fallback2,wrapper:Wrapper}=this.props,{showPreview}=this.state,attributes=this.getAttributes(url),wrapperRef="string"==typeof Wrapper?this.references.wrapper:void 0;return import_react.default.createElement(Wrapper,{ref:wrapperRef,style:{...style,width,height},...attributes},import_react.default.createElement(UniversalSuspense,{fallback:fallback2},showPreview?this.renderPreview(url):this.renderActivePlayer(url)))}},__publicField(_a,"displayName","ReactPlayer"),__publicField(_a,"propTypes",import_props.propTypes),__publicField(_a,"defaultProps",import_props.defaultProps),__publicField(_a,"addCustomPlayer",(player=>{customPlayers.push(player)})),__publicField(_a,"removeCustomPlayers",(()=>{customPlayers.length=0})),__publicField(_a,"canPlay",(url=>{for(const Player2 of[...customPlayers,...players])if(Player2.canPlay(url))return!0;return!1})),__publicField(_a,"canEnablePIP",(url=>{for(const Player2 of[...customPlayers,...players])if(Player2.canEnablePIP&&Player2.canEnablePIP(url))return!0;return!1})),_a}},"./node_modules/react-player/lib/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},src_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(src_exports,{default:()=>src_default}),module.exports=(mod=src_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_players=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react-player/lib/players/index.js")),import_ReactPlayer=__webpack_require__("./node_modules/react-player/lib/ReactPlayer.js");const fallback=import_players.default[import_players.default.length-1];var src_default=(0,import_ReactPlayer.createReactPlayer)(import_players.default,fallback)},"./node_modules/react-player/lib/patterns.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,patterns_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(patterns_exports,{AUDIO_EXTENSIONS:()=>AUDIO_EXTENSIONS,DASH_EXTENSIONS:()=>DASH_EXTENSIONS,FLV_EXTENSIONS:()=>FLV_EXTENSIONS,HLS_EXTENSIONS:()=>HLS_EXTENSIONS,MATCH_URL_DAILYMOTION:()=>MATCH_URL_DAILYMOTION,MATCH_URL_FACEBOOK:()=>MATCH_URL_FACEBOOK,MATCH_URL_FACEBOOK_WATCH:()=>MATCH_URL_FACEBOOK_WATCH,MATCH_URL_KALTURA:()=>MATCH_URL_KALTURA,MATCH_URL_MIXCLOUD:()=>MATCH_URL_MIXCLOUD,MATCH_URL_MUX:()=>MATCH_URL_MUX,MATCH_URL_SOUNDCLOUD:()=>MATCH_URL_SOUNDCLOUD,MATCH_URL_STREAMABLE:()=>MATCH_URL_STREAMABLE,MATCH_URL_TWITCH_CHANNEL:()=>MATCH_URL_TWITCH_CHANNEL,MATCH_URL_TWITCH_VIDEO:()=>MATCH_URL_TWITCH_VIDEO,MATCH_URL_VIDYARD:()=>MATCH_URL_VIDYARD,MATCH_URL_VIMEO:()=>MATCH_URL_VIMEO,MATCH_URL_WISTIA:()=>MATCH_URL_WISTIA,MATCH_URL_YOUTUBE:()=>MATCH_URL_YOUTUBE,VIDEO_EXTENSIONS:()=>VIDEO_EXTENSIONS,canPlay:()=>canPlay}),module.exports=(mod=patterns_exports,((to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to})(__defProp({},"__esModule",{value:!0}),mod));var import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js");const MATCH_URL_YOUTUBE=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,MATCH_URL_SOUNDCLOUD=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,MATCH_URL_VIMEO=/vimeo\.com\/(?!progressive_redirect).+/,MATCH_URL_MUX=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,MATCH_URL_FACEBOOK=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,MATCH_URL_FACEBOOK_WATCH=/^https?:\/\/fb\.watch\/.+$/,MATCH_URL_STREAMABLE=/streamable\.com\/([a-z0-9]+)$/,MATCH_URL_WISTIA=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,MATCH_URL_TWITCH_VIDEO=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,MATCH_URL_TWITCH_CHANNEL=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,MATCH_URL_DAILYMOTION=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,MATCH_URL_MIXCLOUD=/mixcloud\.com\/([^/]+\/[^/]+)/,MATCH_URL_VIDYARD=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,MATCH_URL_KALTURA=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,AUDIO_EXTENSIONS=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,VIDEO_EXTENSIONS=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,HLS_EXTENSIONS=/\.(m3u8)($|\?)/i,DASH_EXTENSIONS=/\.(mpd)($|\?)/i,FLV_EXTENSIONS=/\.(flv)($|\?)/i,canPlayFile=url=>{if(url instanceof Array){for(const item of url){if("string"==typeof item&&canPlayFile(item))return!0;if(canPlayFile(item.src))return!0}return!1}return!(!(0,import_utils.isMediaStream)(url)&&!(0,import_utils.isBlobUrl)(url))||(AUDIO_EXTENSIONS.test(url)||VIDEO_EXTENSIONS.test(url)||HLS_EXTENSIONS.test(url)||DASH_EXTENSIONS.test(url)||FLV_EXTENSIONS.test(url))},canPlay={youtube:url=>url instanceof Array?url.every((item=>MATCH_URL_YOUTUBE.test(item))):MATCH_URL_YOUTUBE.test(url),soundcloud:url=>MATCH_URL_SOUNDCLOUD.test(url)&&!AUDIO_EXTENSIONS.test(url),vimeo:url=>MATCH_URL_VIMEO.test(url)&&!VIDEO_EXTENSIONS.test(url)&&!HLS_EXTENSIONS.test(url),mux:url=>MATCH_URL_MUX.test(url),facebook:url=>MATCH_URL_FACEBOOK.test(url)||MATCH_URL_FACEBOOK_WATCH.test(url),streamable:url=>MATCH_URL_STREAMABLE.test(url),wistia:url=>MATCH_URL_WISTIA.test(url),twitch:url=>MATCH_URL_TWITCH_VIDEO.test(url)||MATCH_URL_TWITCH_CHANNEL.test(url),dailymotion:url=>MATCH_URL_DAILYMOTION.test(url),mixcloud:url=>MATCH_URL_MIXCLOUD.test(url),vidyard:url=>MATCH_URL_VIDYARD.test(url),kaltura:url=>MATCH_URL_KALTURA.test(url),file:canPlayFile}},"./node_modules/react-player/lib/players/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{Object.create;var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},players_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(players_exports,{default:()=>players_default}),module.exports=(mod=players_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js"),players_default=[{key:"youtube",name:"YouTube",canPlay:import_patterns.canPlay.youtube,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(8446).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/YouTube.js",23))))},{key:"soundcloud",name:"SoundCloud",canPlay:import_patterns.canPlay.soundcloud,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(9979).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/SoundCloud.js",23))))},{key:"vimeo",name:"Vimeo",canPlay:import_patterns.canPlay.vimeo,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(6173).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Vimeo.js",23))))},{key:"mux",name:"Mux",canPlay:import_patterns.canPlay.mux,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(2723).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Mux.js",23))))},{key:"facebook",name:"Facebook",canPlay:import_patterns.canPlay.facebook,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(6887).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Facebook.js",23))))},{key:"streamable",name:"Streamable",canPlay:import_patterns.canPlay.streamable,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(7627).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Streamable.js",23))))},{key:"wistia",name:"Wistia",canPlay:import_patterns.canPlay.wistia,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(9340).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Wistia.js",23))))},{key:"twitch",name:"Twitch",canPlay:import_patterns.canPlay.twitch,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(2042).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Twitch.js",23))))},{key:"dailymotion",name:"DailyMotion",canPlay:import_patterns.canPlay.dailymotion,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(6328).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/DailyMotion.js",23))))},{key:"mixcloud",name:"Mixcloud",canPlay:import_patterns.canPlay.mixcloud,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(7570).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Mixcloud.js",23))))},{key:"vidyard",name:"Vidyard",canPlay:import_patterns.canPlay.vidyard,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(3392).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Vidyard.js",23))))},{key:"kaltura",name:"Kaltura",canPlay:import_patterns.canPlay.kaltura,lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(6463).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/Kaltura.js",23))))},{key:"file",name:"FilePlayer",canPlay:import_patterns.canPlay.file,canEnablePIP:url=>import_patterns.canPlay.file(url)&&(document.pictureInPictureEnabled||(0,import_utils.supportsWebKitPresentationMode)())&&!import_patterns.AUDIO_EXTENSIONS.test(url),lazyPlayer:(0,import_utils.lazy)((()=>__webpack_require__.e(7458).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/react-player/lib/players/FilePlayer.js",23))))}]},"./node_modules/react-player/lib/props.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},props_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(props_exports,{defaultProps:()=>defaultProps,propTypes:()=>propTypes}),module.exports=(mod=props_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_prop_types=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/prop-types/index.js"));const{string,bool,number,array,oneOfType,shape,object,func,node}=import_prop_types.default,propTypes={url:oneOfType([string,array,object]),playing:bool,loop:bool,controls:bool,volume:number,muted:bool,playbackRate:number,width:oneOfType([string,number]),height:oneOfType([string,number]),style:object,progressInterval:number,playsinline:bool,pip:bool,stopOnUnmount:bool,light:oneOfType([bool,string,object]),playIcon:node,previewTabIndex:number,previewAriaLabel:string,fallback:node,oEmbedUrl:string,wrapper:oneOfType([string,func,shape({render:func.isRequired})]),config:shape({soundcloud:shape({options:object}),youtube:shape({playerVars:object,embedOptions:object,onUnstarted:func}),facebook:shape({appId:string,version:string,playerId:string,attributes:object}),dailymotion:shape({params:object}),vimeo:shape({playerOptions:object,title:string}),mux:shape({attributes:object,version:string}),file:shape({attributes:object,tracks:array,forceVideo:bool,forceAudio:bool,forceHLS:bool,forceSafariHLS:bool,forceDisableHls:bool,forceDASH:bool,forceFLV:bool,hlsOptions:object,hlsVersion:string,dashVersion:string,flvVersion:string}),wistia:shape({options:object,playerId:string,customControls:array}),mixcloud:shape({options:object}),twitch:shape({options:object,playerId:string}),vidyard:shape({options:object})}),onReady:func,onStart:func,onPlay:func,onPause:func,onBuffer:func,onBufferEnd:func,onEnded:func,onError:func,onDuration:func,onSeek:func,onPlaybackRateChange:func,onPlaybackQualityChange:func,onProgress:func,onClickPreview:func,onEnablePIP:func,onDisablePIP:func},noop=()=>{},defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:noop},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:noop,onStart:noop,onPlay:noop,onPause:noop,onBuffer:noop,onBufferEnd:noop,onEnded:noop,onError:noop,onDuration:noop,onSeek:noop,onPlaybackRateChange:noop,onPlaybackQualityChange:noop,onProgress:noop,onClickPreview:noop,onEnablePIP:noop,onDisablePIP:noop}},"./node_modules/react-player/lib/utils.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),utils_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(utils_exports,{callPlayer:()=>callPlayer,getConfig:()=>getConfig,getSDK:()=>getSDK,isBlobUrl:()=>isBlobUrl,isMediaStream:()=>isMediaStream,lazy:()=>lazy,omit:()=>omit,parseEndTime:()=>parseEndTime,parseStartTime:()=>parseStartTime,queryString:()=>queryString,randomString:()=>randomString,supportsWebKitPresentationMode:()=>supportsWebKitPresentationMode}),module.exports=(mod=utils_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=__toESM(__webpack_require__("./node_modules/react/index.js")),import_load_script=__toESM(__webpack_require__("./node_modules/load-script/index.js")),import_deepmerge=__toESM(__webpack_require__("./node_modules/deepmerge/dist/cjs.js"));const lazy=componentImportFn=>import_react.default.lazy((async()=>{const obj=await componentImportFn();return"function"==typeof obj.default?obj:obj.default})),MATCH_START_QUERY=/[?&#](?:start|t)=([0-9hms]+)/,MATCH_END_QUERY=/[?&#]end=([0-9hms]+)/,MATCH_START_STAMP=/(\d+)(h|m|s)/g,MATCH_NUMERIC=/^\d+$/;function parseTimeParam(url,pattern){if(url instanceof Array)return;const match=url.match(pattern);if(match){const stamp=match[1];if(stamp.match(MATCH_START_STAMP))return function parseTimeString(stamp){let seconds=0,array=MATCH_START_STAMP.exec(stamp);for(;null!==array;){const[,count,period]=array;"h"===period&&(seconds+=60*parseInt(count,10)*60),"m"===period&&(seconds+=60*parseInt(count,10)),"s"===period&&(seconds+=parseInt(count,10)),array=MATCH_START_STAMP.exec(stamp)}return seconds}(stamp);if(MATCH_NUMERIC.test(stamp))return parseInt(stamp)}}function parseStartTime(url){return parseTimeParam(url,MATCH_START_QUERY)}function parseEndTime(url){return parseTimeParam(url,MATCH_END_QUERY)}function randomString(){return Math.random().toString(36).substr(2,5)}function queryString(object){return Object.keys(object).map((key=>`${key}=${object[key]}`)).join("&")}function getGlobal(key){return window[key]?window[key]:window.exports&&window.exports[key]?window.exports[key]:window.module&&window.module.exports&&window.module.exports[key]?window.module.exports[key]:null}const requests={},getSDK=function enableStubOn(fn){0;return fn}((function getSDK2(url,sdkGlobal,sdkReady=null,isLoaded=()=>!0,fetchScript=import_load_script.default){const existingGlobal=getGlobal(sdkGlobal);return existingGlobal&&isLoaded(existingGlobal)?Promise.resolve(existingGlobal):new Promise(((resolve,reject)=>{if(requests[url])return void requests[url].push({resolve,reject});requests[url]=[{resolve,reject}];const onLoaded=sdk=>{requests[url].forEach((request=>request.resolve(sdk)))};if(sdkReady){const previousOnReady=window[sdkReady];window[sdkReady]=function(){previousOnReady&&previousOnReady(),onLoaded(getGlobal(sdkGlobal))}}fetchScript(url,(err=>{err?(requests[url].forEach((request=>request.reject(err))),requests[url]=null):sdkReady||onLoaded(getGlobal(sdkGlobal))}))}))}));function getConfig(props,defaultProps){return(0,import_deepmerge.default)(defaultProps.config,props.config)}function omit(object,...arrays){const omitKeys=[].concat(...arrays),output={},keys=Object.keys(object);for(const key of keys)-1===omitKeys.indexOf(key)&&(output[key]=object[key]);return output}function callPlayer(method,...args){if(!this.player||!this.player[method]){let message=`ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `;return this.player?this.player[method]||(message+="The method was not available"):message+="The player was not available",console.warn(message,"font-weight: bold",""),null}return this.player[method](...args)}function isMediaStream(url){return"undefined"!=typeof window&&void 0!==window.MediaStream&&url instanceof window.MediaStream}function isBlobUrl(url){return/^blob:/.test(url)}function supportsWebKitPresentationMode(video=document.createElement("video")){const notMobile=!1===/iPhone|iPod/.test(navigator.userAgent);return video.webkitSupportsPresentationMode&&"function"==typeof video.webkitSetPresentationMode&&notMobile}}}]);
//# sourceMappingURL=8271.4ffa6f1c.iframe.bundle.js.map