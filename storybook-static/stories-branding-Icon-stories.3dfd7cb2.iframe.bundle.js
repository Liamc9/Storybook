"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8856],{"./src/stories/branding/Icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconGallery:()=>IconGallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Branding/icons/Icons.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Branding/Icons"},IconGallery=()=>{const iconNames=Object.keys(_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-wrap"},iconNames.map((iconName=>{const IconComponent=_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_1__[iconName];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:iconName,className:"m-4 text-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{className:"w-10 h-10 mx-auto"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"mt-2"},iconName))})))},__namedExportsOrder=["IconGallery"];IconGallery.parameters={...IconGallery.parameters,docs:{...IconGallery.parameters?.docs,source:{originalSource:'() => {\n  const iconNames = Object.keys(Icons);\n  return <div className="flex flex-wrap">\r\n      {iconNames.map(iconName => {\n      const IconComponent = Icons[iconName];\n      return <div key={iconName} className="m-4 text-center">\r\n            <IconComponent className="w-10 h-10 mx-auto" />\r\n            <p className="mt-2">{iconName}</p>\r\n          </div>;\n    })}\r\n    </div>;\n}',...IconGallery.parameters?.docs?.source}}}}}]);