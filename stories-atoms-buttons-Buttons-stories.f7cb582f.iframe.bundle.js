"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2575],{"./src/stories/atoms/buttons/Buttons.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{XButton2:()=>XButton2,XButton3:()=>XButton3,XCopyButton:()=>XCopyButton,XLogoutButton:()=>XLogoutButton,XSendButton:()=>XSendButton,XSocialButtons:()=>XSocialButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Buttons_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledWrapper=styled_components_browser_esm.Ay.div`
  button {
   position: relative;
   display: inline-block;
   cursor: pointer;
   outline: none;
   border: 0;
   vertical-align: middle;
   text-decoration: none;
   background: transparent;
   padding: 0;
   font-size: inherit;
   font-family: inherit;
  }

  button.learn-more {
   width: 12rem;
   height: auto;
  }

  button.learn-more .circle {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: relative;
   display: block;
   margin: 0;
   width: 3rem;
   height: 3rem;
   background: #282936;
   border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   background: #fff;
  }

  button.learn-more .circle .icon.arrow {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   left: 0.625rem;
   width: 1.125rem;
   height: 0.125rem;
   background: none;
  }

  button.learn-more .circle .icon.arrow::before {
   position: absolute;
   content: "";
   top: -0.29rem;
   right: 0.0625rem;
   width: 0.625rem;
   height: 0.625rem;
   border-top: 0.125rem solid #fff;
   border-right: 0.125rem solid #fff;
   transform: rotate(45deg);
  }

  button.learn-more .button-text {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   padding: 0.75rem 0;
   margin: 0 0 0 1.85rem;
   color: #282936;
   font-weight: 700;
   line-height: 1.6;
   text-align: center;
   text-transform: uppercase;
  }

  button:hover .circle {
   width: 100%;
  }

  button:hover .circle .icon.arrow {
   background: #fff;
   transform: translate(1rem, 0);
  }

  button:hover .button-text {
   color: #fff;
  }`,buttons_Button2=()=>react.createElement(StyledWrapper,null,react.createElement("button",{className:"learn-more"},react.createElement("span",{className:"circle","aria-hidden":"true"},react.createElement("span",{className:"icon arrow"})),react.createElement("span",{className:"button-text"},"Learn More"))),LogoutButton_StyledWrapper=styled_components_browser_esm.Ay.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(255, 65, 65);
  }

  /* plus sign */
  .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 17px;
  }

  .sign svg path {
    fill: white;
  }
  /* text */
  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
  }
  /* hover effect on button width */
  .Btn:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
  }
  /* hover effect button's text */
  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
  }
  /* button click effect*/
  .Btn:active {
    transform: translate(2px ,2px);
  }`,buttons_LogoutButton=()=>react.createElement(LogoutButton_StyledWrapper,null,react.createElement("button",{className:"Btn"},react.createElement("div",{className:"sign"},react.createElement("svg",{viewBox:"0 0 512 512"},react.createElement("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"}))),react.createElement("div",{className:"text"},"Logout"))),SendButton_StyledWrapper=styled_components_browser_esm.Ay.div`
  button {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }`,buttons_SendButton=()=>react.createElement(SendButton_StyledWrapper,null,react.createElement("button",null,react.createElement("div",{className:"svg-wrapper-1"},react.createElement("div",{className:"svg-wrapper"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{fill:"currentColor",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})))),react.createElement("span",null,"Send"))),Button3_StyledWrapper=styled_components_browser_esm.Ay.div`
  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #333;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
  }

  .button:hover {
    box-shadow: 1px 1px 200px #252525;
    color: #fff;
    border: none;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }`,buttons_Button3=()=>react.createElement(Button3_StyledWrapper,null,react.createElement("button",{className:"button type1"},react.createElement("span",{className:"btn-txt"},"Hello"))),CopyButton_StyledWrapper=styled_components_browser_esm.Ay.div`
  /* tooltip settings 👇 */

  .copy {
    /* button */
    --button-bg: #353434;
    --button-hover-bg: #464646;
    --button-text-color: #CCCCCC;
    --button-hover-text-color: #8bb9fe;
    --button-border-radius: 10px;
    --button-diameter: 36px;
    --button-outline-width: 1px;
    --button-outline-color: rgb(141, 141, 141);
    /* tooltip */
    --tooltip-bg: #f4f3f3;
    --toolptip-border-radius: 4px;
    --tooltip-font-family: Menlo, Roboto Mono, monospace;
    /* 👆 this field should not be empty */
    --tooltip-font-size: 12px;
    /* 👆 this field should not be empty */
    --tootip-text-color: rgb(50, 50, 50);
    --tooltip-padding-x: 7px;
    --tooltip-padding-y: 7px;
    --tooltip-offset: 8px;
    /* --tooltip-transition-duration: 0.3s; */
    /* 👆 if you need a transition, 
    just remove the comment,
    but I didn't like the transition :| */
  }

  .copy {
    box-sizing: border-box;
    width: var(--button-diameter);
    height: var(--button-diameter);
    border-radius: var(--button-border-radius);
    background-color: var(--button-bg);
    color: var(--button-text-color);
    border: none;
    cursor: pointer;
    position: relative;
    outline: none;
  }

  .tooltip {
    position: absolute;
    opacity: 0;
    visibility: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font: var(--tooltip-font-size) var(--tooltip-font-family);
    color: var(--tootip-text-color);
    background: var(--tooltip-bg);
    padding: var(--tooltip-padding-y) var(--tooltip-padding-x);
    border-radius: var(--toolptip-border-radius);
    pointer-events: none;
    transition: all var(--tooltip-transition-duration) cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    content: attr(data-text-initial);
  }

  .tooltip::after {
    content: "";
    position: absolute;
    bottom: calc(var(--tooltip-padding-y) / 2 * -1);
    width: var(--tooltip-padding-y);
    height: var(--tooltip-padding-y);
    background: inherit;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    z-index: -999;
    pointer-events: none;
  }

  .copy svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .checkmark {
    display: none;
  }

  /* actions */

  .copy:hover .tooltip,
  .copy:focus:not(:focus-visible) .tooltip {
    opacity: 1;
    visibility: visible;
    top: calc((100% + var(--tooltip-offset)) * -1);
  }

  .copy:focus:not(:focus-visible) .tooltip::before {
    content: attr(data-text-end);
  }

  .copy:focus:not(:focus-visible) .clipboard {
    display: none;
  }

  .copy:focus:not(:focus-visible) .checkmark {
    display: block;
  }

  .copy:hover,
  .copy:focus {
    background-color: var(--button-hover-bg);
  }

  .copy:active {
    outline: var(--button-outline-width) solid var(--button-outline-color);
  }

  .copy:hover svg {
    color: var(--button-hover-text-color);
  }`,buttons_CopyButton=()=>react.createElement(CopyButton_StyledWrapper,null,react.createElement("button",{className:"copy"},react.createElement("span",{"data-text-end":"Copied!","data-text-initial":"Copy to clipboard",className:"tooltip"}),react.createElement("span",null,react.createElement("svg",{xmlSpace:"preserve",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 6.35 6.35",y:0,x:0,height:20,width:20,xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"clipboard"},react.createElement("g",null,react.createElement("path",{fill:"currentColor",d:"M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"}))),react.createElement("svg",{xmlSpace:"preserve",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 24 24",y:0,x:0,height:18,width:18,xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"checkmark"},react.createElement("g",null,react.createElement("path",{"data-original":"#000000",fill:"currentColor",d:"M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"}))))));function SocialButtons(){return react.createElement(react.Fragment,null,react.createElement("style",null,"\n            .card {\n  width: fit-content;\n  height: fit-content;\n  background-color: rgb(238, 238, 238);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 25px 25px;\n  gap: 20px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);\n  border-radius: 8px; /* Optional: rounded corners */\n}\n\n/* Styles for all social containers */\n.socialContainer {\n  width: 52px;\n  height: 52px;\n  background-color: rgb(44, 44, 44);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition: background-color 0.3s, transform 0.3s;\n  position: relative;\n  border-radius: 50%; /* Make it circular */\n}\n\n/* Specific hover background colors */\n.containerOne:hover {\n  background-color: #d62976;\n}\n\n.containerTwo:hover {\n  background-color: #00acee;\n}\n\n.containerThree:hover {\n  background-color: #0072b1;\n}\n\n.containerFour:hover {\n  background-color: #128C7E;\n}\n\n.socialContainer:active {\n  transform: scale(0.9);\n}\n\n/* Styles for the SVG icons */\n.socialSvg {\n  width: 17px;\n  transition: transform 0.3s, opacity 0.3s;\n}\n\n.socialSvg path {\n  fill: rgb(255, 255, 255);\n}\n\n/* Animation on hover */\n.socialContainer:hover .socialSvg {\n  animation: slide-in-top 0.3s both;\n}\n\n/* Keyframes for slide-in-top animation */\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n  "),react.createElement("body",null,react.createElement("div",{class:"card"},react.createElement("a",{href:"#",class:"socialContainer containerOne"},react.createElement("svg",{class:"socialSvg instagramSvg",viewBox:"0 0 16 16"}," ",react.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})," ")),react.createElement("a",{href:"#",class:"socialContainer containerTwo"},react.createElement("svg",{class:"socialSvg twitterSvg",viewBox:"0 0 16 16"}," ",react.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})," "),"              "),react.createElement("a",{href:"#",class:"socialContainer containerThree"},react.createElement("svg",{class:"socialSvg linkdinSvg",viewBox:"0 0 448 512"},react.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),react.createElement("a",{href:"#",class:"socialContainer containerFour"},react.createElement("svg",{class:"socialSvg whatsappSvg",viewBox:"0 0 16 16"}," ",react.createElement("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})," ")))))}const Buttons_stories={title:"Atoms/Buttons",tags:["autodocs"]},XButton2=()=>react.createElement(buttons_Button2,null),XLogoutButton=()=>react.createElement(buttons_LogoutButton,null),XSendButton=()=>react.createElement(buttons_SendButton,null),XButton3=()=>react.createElement(buttons_Button3,null),XCopyButton=()=>react.createElement(buttons_CopyButton,null),XSocialButtons=()=>react.createElement(SocialButtons,null),__namedExportsOrder=["XButton2","XLogoutButton","XSendButton","XButton3","XCopyButton","XSocialButtons"];XButton2.parameters={...XButton2.parameters,docs:{...XButton2.parameters?.docs,source:{originalSource:"() => <Button2 />",...XButton2.parameters?.docs?.source}}},XLogoutButton.parameters={...XLogoutButton.parameters,docs:{...XLogoutButton.parameters?.docs,source:{originalSource:"() => <LogoutButton />",...XLogoutButton.parameters?.docs?.source}}},XSendButton.parameters={...XSendButton.parameters,docs:{...XSendButton.parameters?.docs,source:{originalSource:"() => <SendButton />",...XSendButton.parameters?.docs?.source}}},XButton3.parameters={...XButton3.parameters,docs:{...XButton3.parameters?.docs,source:{originalSource:"() => <Button3 />",...XButton3.parameters?.docs?.source}}},XCopyButton.parameters={...XCopyButton.parameters,docs:{...XCopyButton.parameters?.docs,source:{originalSource:"() => <CopyButton />",...XCopyButton.parameters?.docs?.source}}},XSocialButtons.parameters={...XSocialButtons.parameters,docs:{...XSocialButtons.parameters?.docs,source:{originalSource:"() => <SocialButtons />",...XSocialButtons.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-buttons-Buttons-stories.f7cb582f.iframe.bundle.js.map