"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6562],{"./src/stories/navigation/SideBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_navigation_SideBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/navigation/SideBar.jsx"),_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Branding/icons/Icons.jsx"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router-dom/dist/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/SideNav/SideBar",component:_components_navigation_SideBar__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{hideProfile:{control:"boolean"}},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Kd,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingBottom:"50px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)))]},Default=(args=>{const[isSideNavOpen,setIsSideNavOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),toggleSideNav=()=>setIsSideNavOpen((prev=>!prev));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:toggleSideNav},"Toggle Sidebar"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_navigation_SideBar__WEBPACK_IMPORTED_MODULE_1__.A,_extends({},args,{isSideNavOpen,toggleSideNav,closeSideNav:()=>setIsSideNavOpen(!1)})))}).bind({});Default.args={signInColor:"#ff4500",username:"Jane Doe",profilePic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",onLogout:()=>alert("Logged out"),hideProfile:!1,navLinks:[{name:"Home",path:"/home",Icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.HomeIcon3,isFooter:!1},{name:"About",path:"/about",Icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.SearchIcon2,isFooter:!1},{name:"Settings",path:"/settings",Icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.CogIcon,isFooter:!0},{name:"Contact",path:"/contact",Icon:_components_Branding_icons_Icons__WEBPACK_IMPORTED_MODULE_2__.UserIcon3,isFooter:!0}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Manage state and handlers within the story\n  const [isSideNavOpen, setIsSideNavOpen] = useState(false);\n  const toggleSideNav = () => setIsSideNavOpen(prev => !prev);\n  const closeSideNav = () => setIsSideNavOpen(false);\n  return <>\r\n      {/* External button or control to toggle the sidebar */}\r\n      <button onClick={toggleSideNav}>Toggle Sidebar</button>\r\n      <SideBar {...args} isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} closeSideNav={closeSideNav} />\r\n    </>;\n}",...Default.parameters?.docs?.source}}}},"./src/components/navigation/SideBar.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SideBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function SideBar(_ref){let{navLinks=[],username,profilePic,onLogout,isSideNavOpen,closeSideNav,hideProfile=!1}=_ref;const mainLinks=navLinks.filter((link=>!link.isFooter)),footerLinks=navLinks.filter((link=>link.isFooter));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isSideNavOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{onClick:closeSideNav}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavContainer,{isOpen:isSideNavOpen,onClick:e=>e.stopPropagation()},!hideProfile&&username&&profilePic&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideNavHeader,{to:"/profile",onClick:closeSideNav},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileImage,{src:profilePic,alt:"Profile"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileInfo,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Username,null,username),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewProfile,null,"View Profile"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLinks,null,mainLinks.map(((_ref2,index)=>{let{name,path,Icon}=_ref2;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLinks,null,footerLinks.map(((_ref3,index)=>{let{name,path,Icon}=_ref3;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledLink,{to:path,key:index,onClick:closeSideNav},Icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{className:"icon"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,name))})),onLogout&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoutButton,{onClick:()=>{onLogout(),closeSideNav()}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Log out")))))}styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.nav`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  text-decoration: none;
  flex-grow: 1;
`,(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
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
`;const Overlay=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
  transition: opacity 0.3s ease-in-out;
  pointer-events: auto;
`,SideNavContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16rem;
  background: #ffffff;
  color: #1a202c;
  transform: ${_ref4=>{let{isOpen}=_ref4;return isOpen?"translateX(0)":"translateX(-100%)"}};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${_ref5=>{let{isOpen}=_ref5;return isOpen?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"}};
  z-index: 50;
`,SideNavHeader=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7fafc;
  }
`,ProfileImage=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`,ProfileInfo=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
`,Username=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
`,ViewProfile=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  font-size: 0.875rem;
  color: #718096;
`,NavLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.nav`
  flex-grow: 1;
  overflow-y: auto;
`,StyledLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.N_)`
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
`,FooterLinks=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #e2e8f0;
`,IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`,LogoutButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
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
`}}]);
//# sourceMappingURL=stories-navigation-SideBar-stories.52b8e213.iframe.bundle.js.map