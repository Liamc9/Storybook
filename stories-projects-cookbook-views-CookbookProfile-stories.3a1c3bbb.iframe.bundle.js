"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5384,5873],{"./src/stories/projects/cookbook/views/CookbookProfile.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NonProfileOwner:()=>NonProfileOwner,ProfileOwner:()=>ProfileOwner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CookbookProfile_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_es=__webpack_require__("./node_modules/liamc9npm/dist/index.es.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}const sampleUserData={firstName:"Gordon",lastName:"Ramsay",profilePic:"https://cdn.britannica.com/20/200220-050-394A5A7C/Jamie-Oliver-2016.jpg",coverPhoto:"https://www.ocregister.com/wp-content/uploads/2021/10/Food_-_Gordon_Ramsay_50962.jpg?w=1024",categories:"Michelin Star Chef, TV Personality"},CookbookProfile_stories={title:"Projects/Cookbook/Views/CookbookProfile",tags:["autodocs"],component:index_es.$rc,parameters:{docs:{description:{component:"\nThe `CookbookProfile` component is designed for displaying user profiles in a cookbook application. It provides information such as the user's name, profile picture, cover photo, and categories. This component can be customized for both profile owners and other users viewing the profile.\n\n### Features\n- **Profile Owner View**: Allows the profile owner to edit or manage their profile.\n- **Non-Owner View**: Provides options for subscribing and interacting with the profile.\n- **Custom Actions**: Supports actions for opening modals and drawers for profile interactions.\n\n### Usage\n\n```jsx\nimport React from 'react';\nimport CookbookProfile from './components/CookbookProfile';\nimport { action } from '@storybook/addon-actions';\n\nconst sampleUserData = {\n  firstName: 'Gordon',\n  lastName: 'Ramsay',\n  profilePic: 'https://cdn.britannica.com/20/200220-050-394A5A7C/Jamie-Oliver-2016.jpg',\n  coverPhoto: 'https://www.ocregister.com/wp-content/uploads/2021/10/Food_-_Gordon_Ramsay_50962.jpg?w=1024',\n  categories: 'Michelin Star Chef, TV Personality',\n};\n\nconst ExampleComponent = () => (\n  <CookbookProfile\n    isProfileOwner={true}\n    userData={sampleUserData}\n    setIsSubscriptionModalOpen={action('Subscription Modal Opened')}\n    openDrawer={action('Drawer Opened')}\n  />\n);\n\nexport default ExampleComponent;\n```\n        "}}},argTypes:{isProfileOwner:{control:"boolean",description:"Indicates if the profile is viewed by the owner."},setIsSubscriptionModalOpen:{action:"clicked",description:"Function triggered to open the subscription modal."},openDrawer:{action:"clicked",description:"Function triggered to open a drawer for additional profile actions."}}},Template=args=>react.createElement(index_es.$rc,args),ProfileOwner=Template.bind({});ProfileOwner.args={isProfileOwner:!0,userData:sampleUserData,setIsSubscriptionModalOpen:action("Subscription Modal Opened"),openDrawer:action("Drawer Opened")};const NonProfileOwner=Template.bind({});NonProfileOwner.args={isProfileOwner:!1,userData:sampleUserData,setIsSubscriptionModalOpen:action("Subscription Modal Opened"),openDrawer:action("Drawer Opened")};const __namedExportsOrder=["ProfileOwner","NonProfileOwner"];ProfileOwner.parameters={...ProfileOwner.parameters,docs:{...ProfileOwner.parameters?.docs,source:{originalSource:"args => <CookbookProfile {...args} />",...ProfileOwner.parameters?.docs?.source}}},NonProfileOwner.parameters={...NonProfileOwner.parameters,docs:{...NonProfileOwner.parameters?.docs,source:{originalSource:"args => <CookbookProfile {...args} />",...NonProfileOwner.parameters?.docs?.source}}}}}]);