"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3680],{"./src/stories/atoms/loaders/Loader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{XLoader:()=>XLoader,XLoader2:()=>XLoader2,XSkeletonLoader:()=>XSkeletonLoader,XSkeletonLoader2:()=>XSkeletonLoader2,XTruckLoader:()=>XTruckLoader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const bounce=styled_components_browser_esm.i7`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`,LoaderWrapper=styled_components_browser_esm.Ay.div`
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
`,Dot=styled_components_browser_esm.Ay.div`
  width: 16px; /* Equivalent to Tailwind's w-4 */
  height: 16px; /* Equivalent to Tailwind's h-4 */
  margin: 0 4px; /* Equivalent to Tailwind's gap-2 */
  background-color: #1d4ed8; /* Equivalent to Tailwind's bg-blue-700 */
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${props=>props.delay};
`,loaders_Loader=()=>react.createElement(LoaderWrapper,null,react.createElement("div",{style:{display:"flex",flexDirection:"row"}},react.createElement(Dot,{delay:"0s"}),react.createElement(Dot,{delay:"0.2s"}),react.createElement(Dot,{delay:"0.4s"}))),StyledWrapper=styled_components_browser_esm.Ay.div`
  .wrapper {
    width: 200px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #000;
    left: 15%;
    transform-origin: 50%;
    animation: circle7124 .5s alternate infinite ease;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .circle:nth-child(2) {
    left: 45%;
    animation-delay: .2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.9);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow046 .5s alternate infinite ease;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: .7;
    }

    100% {
      transform: scaleX(.2);
      opacity: .4;
    }
  }

  .shadow:nth-child(4) {
    left: 45%;
    animation-delay: .2s
  }

  .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }`,loaders_Loader2=()=>react.createElement(StyledWrapper,null,react.createElement("div",{className:"wrapper"},react.createElement("div",{className:"circle"}),react.createElement("div",{className:"circle"}),react.createElement("div",{className:"circle"}),react.createElement("div",{className:"shadow"}),react.createElement("div",{className:"shadow"}),react.createElement("div",{className:"shadow"}))),TruckLoader_StyledWrapper=styled_components_browser_esm.Ay.div`
  .loader {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .truckWrapper {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    overflow-x: hidden;
  }
  /* truck upper body */
  .truckBody {
    width: 130px;
    height: fit-content;
    margin-bottom: 6px;
    animation: motion 1s linear infinite;
  }
  /* truck suspension animation*/
  @keyframes motion {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  /* truck's tires */
  .truckTires {
    width: 130px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 0px 15px;
    position: absolute;
    bottom: 0;
  }
  .truckTires svg {
    width: 24px;
  }

  .road {
    width: 100%;
    height: 1.5px;
    background-color: #282828;
    position: relative;
    bottom: 0;
    align-self: flex-end;
    border-radius: 3px;
  }
  .road::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: #282828;
    right: -50%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 10px solid white;
  }
  .road::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #282828;
    right: -65%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 4px solid white;
  }

  .lampPost {
    position: absolute;
    bottom: 0;
    right: -90%;
    height: 90px;
    animation: roadAnimation 1.4s linear infinite;
  }

  @keyframes roadAnimation {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-350px);
    }
  }`,loaders_TruckLoader=()=>react.createElement(TruckLoader_StyledWrapper,null,react.createElement("div",{className:"loader"},react.createElement("div",{className:"truckWrapper"},react.createElement("div",{className:"truckBody"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 198 93",className:"trucksvg"},react.createElement("path",{strokeWidth:3,stroke:"#282828",fill:"#F83D3D",d:"M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"}),react.createElement("path",{strokeWidth:3,stroke:"#282828",fill:"#7D7C7C",d:"M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"}),react.createElement("path",{strokeWidth:2,stroke:"#282828",fill:"#282828",d:"M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"}),react.createElement("rect",{strokeWidth:2,stroke:"#282828",fill:"#FFFCAB",rx:1,height:7,width:5,y:63,x:187}),react.createElement("rect",{strokeWidth:2,stroke:"#282828",fill:"#282828",rx:1,height:11,width:4,y:81,x:193}),react.createElement("rect",{strokeWidth:3,stroke:"#282828",fill:"#DFDFDF",rx:"2.5",height:90,width:121,y:"1.5",x:"6.5"}),react.createElement("rect",{strokeWidth:2,stroke:"#282828",fill:"#DFDFDF",rx:2,height:4,width:6,y:84,x:1}))),react.createElement("div",{className:"truckTires"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",className:"tiresvg"},react.createElement("circle",{strokeWidth:3,stroke:"#282828",fill:"#282828",r:"13.5",cy:15,cx:15}),react.createElement("circle",{fill:"#DFDFDF",r:7,cy:15,cx:15})),react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",className:"tiresvg"},react.createElement("circle",{strokeWidth:3,stroke:"#282828",fill:"#282828",r:"13.5",cy:15,cx:15}),react.createElement("circle",{fill:"#DFDFDF",r:7,cy:15,cx:15}))),react.createElement("div",{className:"road"}),react.createElement("svg",{xmlSpace:"preserve",viewBox:"0 0 453.459 453.459",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",id:"Capa_1",version:"1.1",fill:"#000000",className:"lampPost"},react.createElement("path",{d:"M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993\r c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514\r c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16\r c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914\r h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75\r v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795\r V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z\r M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017\r h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"}))))),loaders_SkeletonLoader=()=>react.createElement("div",{className:"relative flex w-64 animate-pulse gap-2 p-4"},react.createElement("div",{className:"h-12 w-12 rounded-full bg-slate-400"}),react.createElement("div",{className:"flex-1"},react.createElement("div",{className:"mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"}),react.createElement("div",{className:"h-5 w-[90%] rounded-lg bg-slate-400 text-sm"})),react.createElement("div",{className:"absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"})),SkeletonLoader2_StyledWrapper=styled_components_browser_esm.Ay.div`
  .card {
    width: 18rem;
    padding: 1rem;
    text-align: center;
    border-radius: .8rem;
    background-color: white;
  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#ccc 0px,
  		rgb(229 229 229 / 90%) 40px,
  		#ccc 80px
  	);
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }

  .card__title {
    height: 15px;
    margin-bottom: 15px;
  }

  .card__description {
    height: 100px;
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }`,loaders_SkeletonLoader2=()=>react.createElement(SkeletonLoader2_StyledWrapper,null,react.createElement("div",{className:"card"},react.createElement("div",{className:"card__skeleton card__title"}),react.createElement("div",{className:"card__skeleton card__description"},"       "))),Loader_stories={title:"Atoms/Loaders",tags:["autodocs"]},XLoader=()=>react.createElement(loaders_Loader,null),XLoader2=()=>react.createElement(loaders_Loader2,null),XTruckLoader=()=>react.createElement(loaders_TruckLoader,null),XSkeletonLoader=()=>react.createElement(loaders_SkeletonLoader,null),XSkeletonLoader2=()=>react.createElement(loaders_SkeletonLoader2,null),__namedExportsOrder=["XLoader","XLoader2","XTruckLoader","XSkeletonLoader","XSkeletonLoader2"];XLoader.parameters={...XLoader.parameters,docs:{...XLoader.parameters?.docs,source:{originalSource:"() => <Loader />",...XLoader.parameters?.docs?.source}}},XLoader2.parameters={...XLoader2.parameters,docs:{...XLoader2.parameters?.docs,source:{originalSource:"() => <Loader2 />",...XLoader2.parameters?.docs?.source}}},XTruckLoader.parameters={...XTruckLoader.parameters,docs:{...XTruckLoader.parameters?.docs,source:{originalSource:"() => <TruckLoader />",...XTruckLoader.parameters?.docs?.source}}},XSkeletonLoader.parameters={...XSkeletonLoader.parameters,docs:{...XSkeletonLoader.parameters?.docs,source:{originalSource:"() => <SkeletonLoader />",...XSkeletonLoader.parameters?.docs?.source}}},XSkeletonLoader2.parameters={...XSkeletonLoader2.parameters,docs:{...XSkeletonLoader2.parameters?.docs,source:{originalSource:"() => <SkeletonLoader2 />",...XSkeletonLoader2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-atoms-loaders-Loader-stories.82c464c7.iframe.bundle.js.map