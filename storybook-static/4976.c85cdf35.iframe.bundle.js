/*! For license information please see 4976.c85cdf35.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4976],{"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache,react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache;__webpack_require__.d(__webpack_exports__,{Kd:()=>BrowserRouter,N_:()=>Link,k2:()=>NavLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_excluded2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}const ViewTransitionContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({isTransitioning:!1});new Map;const startTransitionImpl=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache||(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache=__webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_1__,2))).flushSync,(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useId;function BrowserRouter(_ref4){let{basename,children,future,window}=_ref4,historyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();null==historyRef.current&&(historyRef.current=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.zR)({window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react__WEBPACK_IMPORTED_MODULE_0__.useState({action:history.action,location:history.location}),{v7_startTransition}=future||{},setState=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState=>{v7_startTransition&&startTransitionImpl?startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Ix,{basename,children,location:state.location,navigationType:state.action,navigator:history,future})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function LinkWithRef(_ref7,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset,viewTransition}=_ref7,rest=_objectWithoutPropertiesLoose(_ref7,_excluded),{basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.jb),isExternal=!1;if("string"==typeof to&&ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.pb)(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.$P)(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative,viewTransition}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.Zp)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.zy)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.x$)(to,{relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.AO)(location)===(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.AO)(path);navigate(to,{replace,state,preventScrollReset,relative,viewTransition})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative,viewTransition])}(to,{replace,state,target,preventScrollReset,relative,viewTransition});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));const NavLink=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function NavLinkWithRef(_ref8,ref){let{"aria-current":ariaCurrentProp="page",caseSensitive=!1,className:classNameProp="",end=!1,style:styleProp,to,viewTransition,children}=_ref8,rest=_objectWithoutPropertiesLoose(_ref8,_excluded2),path=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.x$)(to,{relative:rest.relative}),location=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.zy)(),routerState=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.Rq),{navigator,basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.jb),isTransitioning=null!=routerState&&function useViewTransitionState(to,opts){void 0===opts&&(opts={});let vtContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);null==vtContext&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.Oi)(!1);let{basename}=useDataRouterContext(DataRouterHook.useViewTransitionState),path=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.x$)(to,{relative:opts.relative});if(!vtContext.isTransitioning)return!1;let currentPath=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.pb)(vtContext.currentLocation.pathname,basename)||vtContext.currentLocation.pathname,nextPath=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.pb)(vtContext.nextLocation.pathname,basename)||vtContext.nextLocation.pathname;return null!=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.B6)(path.pathname,nextPath)||null!=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.B6)(path.pathname,currentPath)}(path)&&!0===viewTransition,toPathname=navigator.encodeLocation?navigator.encodeLocation(path).pathname:path.pathname,locationPathname=location.pathname,nextLocationPathname=routerState&&routerState.navigation&&routerState.navigation.location?routerState.navigation.location.pathname:null;caseSensitive||(locationPathname=locationPathname.toLowerCase(),nextLocationPathname=nextLocationPathname?nextLocationPathname.toLowerCase():null,toPathname=toPathname.toLowerCase()),nextLocationPathname&&basename&&(nextLocationPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.pb)(nextLocationPathname,basename)||nextLocationPathname);const endSlashPosition="/"!==toPathname&&toPathname.endsWith("/")?toPathname.length-1:toPathname.length;let className,isActive=locationPathname===toPathname||!end&&locationPathname.startsWith(toPathname)&&"/"===locationPathname.charAt(endSlashPosition),isPending=null!=nextLocationPathname&&(nextLocationPathname===toPathname||!end&&nextLocationPathname.startsWith(toPathname)&&"/"===nextLocationPathname.charAt(toPathname.length)),renderProps={isActive,isPending,isTransitioning},ariaCurrent=isActive?ariaCurrentProp:void 0;className="function"==typeof classNameProp?classNameProp(renderProps):[classNameProp,isActive?"active":null,isPending?"pending":null,isTransitioning?"transitioning":null].filter(Boolean).join(" ");let style="function"==typeof styleProp?styleProp(renderProps):styleProp;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link,_extends({},rest,{"aria-current":ariaCurrent,className,ref,style,to,viewTransition}),"function"==typeof children?children(renderProps):children)}));var DataRouterHook,DataRouterStateHook;function useDataRouterContext(hookName){let ctx=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.sp);return ctx||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.Oi)(!1),ctx}(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher",DataRouterHook.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetcher="useFetcher",DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}))}}]);