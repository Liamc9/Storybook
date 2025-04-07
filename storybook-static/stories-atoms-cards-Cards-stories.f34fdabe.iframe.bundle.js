"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8863],{"./src/stories/atoms/cards/Cards.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{XCard2:()=>XCard2,XCard3:()=>XCard3,XCard4:()=>XCard4,XCard5:()=>XCard5,XCard6:()=>XCard6,XCard7:()=>XCard7,XCardProduct:()=>XCardProduct,XCardSocial:()=>XCardSocial,XDeleteCard:()=>XDeleteCard,XProjectCard:()=>XProjectCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Cards_stories});var react=__webpack_require__("./node_modules/react/index.js");function Card2(){return react.createElement("div",{className:"relative w-80 h-48 p-6 rounded-lg shadow-lg bg-gradient-to-tr from-blue-500 to-blue-300 hover:scale-105 cursor-pointer duration-300 hover:-translate-y-2 hover:translate-x-2 group"},react.createElement("div",{className:"absolute top-3 right-3 w-24 text-white"},react.createElement("svg",{className:"w-24 h-24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},react.createElement("path",{d:"M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z"}))),react.createElement("div",{className:"absolute bottom-3 left-3"},react.createElement("h2",{className:"text-white text-4xl font-bold"},"Chatgpt")),react.createElement("div",{className:"absolute bottom-3 right-3 text-white"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-10 h-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:animate-bounce"},react.createElement("path",{d:"M13 5l7 7-7 7M5 5h14M5 5v14"}))))}const Card3=_ref=>{let{description,linkText}=_ref;return react.createElement("div",{className:"group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"},react.createElement("span",{className:"absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"}),react.createElement("div",{className:"relative z-10 mx-auto max-w-md"},react.createElement("span",{className:"grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500"},react.createElement("svg",{className:"h-12 w-12 text-white transition-all",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",strokeLinejoin:"round",strokeLinecap:"round"}))),react.createElement("div",{className:"space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white"},react.createElement("p",{className:"font-medium"},description)),react.createElement("div",{className:"pt-6 text-lg font-semibold leading-7"},react.createElement("p",null,react.createElement("span",{className:"text-purple-500 transition-all duration-500 group-hover:text-white"},linkText," →")))))};Card3.defaultProps={description:"Elevate your experience with smoother transitions and vibrant design. Perfect for prototyping and sharing ideas in style.",linkText:"Explore Documentation"};const cards_Card3=Card3,cards_CardProduct=_ref=>{let{image,title,id,price,onButtonClick}=_ref;return react.createElement("div",{className:"w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl"},react.createElement("div",{className:"h-48 bg-gray-700 rounded-xl"},react.createElement("img",{src:image,alt:title,className:"w-full h-full object-cover rounded-xl"})),react.createElement("div",{className:"flex flex-col gap-4"},react.createElement("div",{className:"flex flex-row justify-between"},react.createElement("div",{className:"flex flex-col"},react.createElement("span",{className:"text-xl font-bold"},title),react.createElement("p",{className:"text-xs text-gray-700"},"ID: ",id)),react.createElement("span",{className:"font-bold text-red-600"},"$",price)),react.createElement("button",{onClick:onButtonClick,className:"hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"},"Add To Cart")))};var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");const cards_CardSocial=_ref=>{let{id,coverPhoto,profilePic,username,categories,link,status}=_ref;return react.createElement("div",{className:"flex"},react.createElement("div",{className:"w-full aspect-[10/3]"},react.createElement("div",{key:id,className:"w-full h-full"},react.createElement(dist.N_,{to:link,className:"relative flex w-full h-full overflow-hidden rounded-xl"},react.createElement("img",{src:coverPhoto,className:"absolute h-full w-full object-cover",alt:"Cover"}),react.createElement("div",{className:"flex w-[30%] z-10 items-center justify-center"},react.createElement("img",{src:profilePic,className:"aspect-[1/1] w-[80%] rounded-full border-2 border-white",alt:"Profile"})),react.createElement("div",{className:"flex w-[60%] flex-col"},react.createElement("div",{className:"flex h-[50%]"}),react.createElement("div",{className:"flex flex-col md:text-xl text-sm font-semibold text-white z-20"},react.createElement("p",null,username),react.createElement("p",{className:"font-normal text-xs md:text-lg"},categories))),react.createElement("div",{className:"absolute bottom-0 h-[50%] w-full bg-gray-500 opacity-50"}),status&&react.createElement("div",{className:"absolute right-2 top-2 bg-white rounded p-1 text-blue-500 text-xs"},status)))))};function ProjectCard(_ref){let{image,name,description,tier,category}=_ref;return react.createElement("div",{className:"flex w-full aspect-[3/1] transition-all duration-300 rounded-xl shadow-lg border-1 border-gray-200  border-l-8 border-l-green-500 overflow-hidden transform bg-white hover:shadow-xl hover:scale-101"},react.createElement("div",{className:"w-1/3 h-full"},react.createElement("img",{src:image,alt:name,className:"w-full h-full object-cover "})),react.createElement("div",{className:"relative w-2/3 p-4 flex flex-col justify-center"},react.createElement("div",{className:"absolute top-2 right-2"},react.createElement("div",{className:"flex flex-row gap-1"},react.createElement("div",{className:"bg-green-500 px-1 text-white rounded"},category)," ",react.createElement("div",{className:"bg-yellow-500 text-white px-1 rounded"},tier)," ")),react.createElement("p",{className:"text-sm md:text-lg font-bold text-gray-800"},name),react.createElement("p",{className:"text-xs md:text-sm text-gray-600 md:mt-2"},description)))}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledWrapper=styled_components_browser_esm.Ay.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }`,cards_Card4=()=>react.createElement(StyledWrapper,null,react.createElement("div",{className:"card"},react.createElement("div",{className:"content"},react.createElement("div",{className:"back"},react.createElement("div",{className:"back-content"},react.createElement("svg",{stroke:"#ffffff",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",height:"50px",width:"50px",fill:"#ffffff"},react.createElement("g",{strokeWidth:0,id:"SVGRepo_bgCarrier"}),react.createElement("g",{strokeLinejoin:"round",strokeLinecap:"round",id:"SVGRepo_tracerCarrier"}),react.createElement("g",{id:"SVGRepo_iconCarrier"},react.createElement("path",{d:"M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z"}))),react.createElement("strong",null,"Hover Me"))),react.createElement("div",{className:"front"},react.createElement("div",{className:"img"},react.createElement("div",{className:"circle"}),react.createElement("div",{className:"circle",id:"right"}),react.createElement("div",{className:"circle",id:"bottom"})),react.createElement("div",{className:"front-content"},react.createElement("small",{className:"badge"},"Pasta"),react.createElement("div",{className:"description"},react.createElement("div",{className:"title"},react.createElement("p",{className:"title"},react.createElement("strong",null,"Spaguetti Bolognese")),react.createElement("svg",{fillRule:"nonzero",height:"15px",width:"15px",viewBox:"0,0,256,256",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg"},react.createElement("g",{style:{mixBlendMode:"normal"},textAnchor:"none",fontSize:"none",fontWeight:"none",fontFamily:"none",strokeDashoffset:0,strokeDasharray:!0,strokeMiterlimit:10,strokeLinejoin:"miter",strokeLinecap:"butt",strokeWidth:1,stroke:"none",fillRule:"nonzero",fill:"#20c997"},react.createElement("g",{transform:"scale(8,8)"},react.createElement("path",{d:"M25,27l-9,-6.75l-9,6.75v-23h18z"}))))),react.createElement("p",{className:"card-footer"},"30 Mins   |   1 Serving"))))))),Card5_StyledWrapper=styled_components_browser_esm.Ay.div`
  .card {
    margin: auto;
    width: min(300px, 100%);
    background-color: #fefefe;
    border-radius: 1rem;
    padding: 0.5rem;
    color: #141417;
  }
  .card__hero {
    background-color: #fef4e2;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1.5rem;
    font-size: 0.875rem;
  }
  .card__hero .card__job-title {
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 600;
    padding-right: 2rem;
  }
  .card__hero-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    font-weight: 700;
  }
  .card__footer {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0.75rem;
    row-gap: 1rem;
    font-weight: 700;
    font-size: 0.875rem;
  }
  @media (min-width: 340px) {
    .card__footer {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  .card__job-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0.75rem;
  }
  .card__btn {
    width: 100%;
    font-weight: 400;
    border: none;
    display: block;
    cursor: pointer;
    text-align: center;
    padding: 0.5rem 1.25rem;
    border-radius: 1rem;
    background-color: #141417;
    color: #fff;
    font-size: 1rem;
  }
  @media (min-width: 340px) {
    .card__btn {
      width: max-content;
    }
  }`,cards_Card5=()=>react.createElement(Card5_StyledWrapper,null,react.createElement("article",{className:"card"},react.createElement("section",{className:"card__hero"},react.createElement("header",{className:"card__hero-header"},react.createElement("span",null,"$150/hr"),react.createElement("div",{className:"card__icon"},react.createElement("svg",{height:20,width:20,stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z",strokeLinejoin:"round",strokeLinecap:"round"})))),react.createElement("p",{className:"card__job-title"},"Senior Backend Engineer")),react.createElement("footer",{className:"card__footer"},react.createElement("div",{className:"card__job-summary"},react.createElement("div",{className:"card__job-icon"},react.createElement("svg",{height:35,width:28,viewBox:"0 0 250 250",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{fill:"#4285F4",d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"}),react.createElement("path",{fill:"#34A853",d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"}),react.createElement("path",{fill:"#FBBC05",d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"}),react.createElement("path",{fill:"#EB4335",d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"}))),react.createElement("div",{className:"card__job"},react.createElement("p",{className:"card__job-title"},"Senior Backend ",react.createElement("br",null),"Engineer"))),react.createElement("button",{className:"card__btn"},"view")))),Card7_StyledWrapper=styled_components_browser_esm.Ay.div`
  .article-wrapper {
    width: 250px;
    -webkit-transition: 0.15s all ease-in-out;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: white;
  }

  .article-wrapper:hover {
    -webkit-box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    border-color: #0578c5;
    -webkit-transform: translate(-20px, -20px);
    -ms-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
  }

  .article-wrapper:active {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .types {
    gap: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    place-content: flex-start;
  }

  .rounded-lg {
   /* class tailwind */
    border-radius: 10px;
  }

  .article-wrapper:hover .project-hover {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: #a6c2f0;
  }

  .project-info {
    padding-top: 20px;
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 20px;
  }

  .project-title {
    font-size: 2em;
    margin: 0;
    font-weight: 600;
   /* depend de la font */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
  }

  .flex-pr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px
  }

  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .container-project {
    width: 100%;
    height: 170px;
    background: gray;
  }`,cards_Card7=()=>react.createElement(Card7_StyledWrapper,null,react.createElement("article",{className:"article-wrapper"},react.createElement("div",{className:"rounded-lg container-project"}),react.createElement("div",{className:"project-info"},react.createElement("div",{className:"flex-pr"},react.createElement("div",{className:"project-title text-nowrap"},"Project"),react.createElement("div",{className:"project-hover"},react.createElement("svg",{style:{color:"black"},xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",color:"black",strokeLinejoin:"round",strokeLinecap:"round",viewBox:"0 0 24 24",strokeWidth:2,fill:"none",stroke:"currentColor"},react.createElement("line",{y2:12,x2:19,y1:12,x1:5}),react.createElement("polyline",{points:"12 5 19 12 12 19"})))),react.createElement("div",{className:"types"},react.createElement("span",{style:{backgroundColor:"rgba(165, 96, 247, 0.43)",color:"rgb(85, 27, 177)"},className:"project-type"},"• Analytics"),react.createElement("span",{className:"project-type"},"• Dashboards")))));var react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js");const Card6_StyledWrapper=styled_components_browser_esm.Ay.div`
  .parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #00894d;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: rgba(0, 137, 78, 0.7647058824);
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: #00c37b;
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #00c37b;
    stroke-width: 3px;
    max-height: 15px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px;
    fill: #00894d;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(0, 249, 203, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }`,cards_Card6=()=>react.createElement(Card6_StyledWrapper,null,react.createElement("div",{className:"parent"},react.createElement("div",{className:"card"},react.createElement("div",{className:"logo"},react.createElement("span",{className:"circle circle1"}),react.createElement("span",{className:"circle circle2"}),react.createElement("span",{className:"circle circle3"}),react.createElement("span",{className:"circle circle4"}),react.createElement("span",{className:"circle circle5"},react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.667 31.69",className:"svg"},react.createElement("path",{id:"Path_6","data-name":"Path 6",d:"M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z",transform:"translate(0 0)"}),react.createElement("path",{id:"Path_7","data-name":"Path 7",d:"M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z",transform:"translate(-45.91 0)"}),react.createElement("path",{id:"Path_8","data-name":"Path 8",d:"M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z",transform:"translate(0 -51.963)"})))),react.createElement("div",{className:"glass"}),react.createElement("div",{className:"content"},react.createElement("span",{className:"title"},"UIVERSE (3D UI)"),react.createElement("span",{className:"text"},"Create, share, and use beautiful custom elements made with CSS")),react.createElement("div",{className:"bottom"},react.createElement("div",{className:"social-buttons-container"},react.createElement("button",{className:"social-button .social-button1"},react.createElement("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",className:"svg"},react.createElement("path",{d:"M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"}))),react.createElement("button",{className:"social-button .social-button2"},react.createElement("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:"svg"},react.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),react.createElement("button",{className:"social-button .social-button3"},react.createElement("svg",{viewBox:"0 0 640 512",xmlns:"http://www.w3.org/2000/svg",className:"svg"},react.createElement("path",{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"})))),react.createElement("div",{className:"view-more"},react.createElement("button",{className:"view-more-button"},"View more"),react.createElement("svg",{className:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round"},react.createElement("path",{d:"m6 9 6 6 6-6"})))))));var DeleteCard=__webpack_require__("./src/components/atoms/cards/DeleteCard.jsx");const Cards_stories={title:"Atoms/Cards",tags:["autodocs"]},XCard2=()=>react.createElement(Card2,null),XCard3=()=>react.createElement(cards_Card3,{description:"Experience innovation.",linkText:"Get Started"}),XCardProduct=()=>react.createElement(cards_CardProduct,{image:"https://via.placeholder.com/150",title:"Sample Product",id:"123",price:"29.99"}),XCardSocial=()=>react.createElement(react_router_dist.fS,null,react.createElement(cards_CardSocial,{id:"789",coverPhoto:"https://via.placeholder.com/600x200",profilePic:"https://via.placeholder.com/100",username:"Jane Smith",categories:"Lifestyle, Travel",link:"/user/janesmith",status:"Active"})),XProjectCard=()=>react.createElement(ProjectCard,{image:"https://via.placeholder.com/300x150",name:"Project Without Category",description:"A project with no specific category but plenty of ambition.",tier:"Bronze",category:""}),XCard4=()=>react.createElement(cards_Card4,null),XCard5=()=>react.createElement(cards_Card5,null),XCard6=()=>react.createElement(cards_Card6,null),XCard7=()=>react.createElement(cards_Card7,null),XDeleteCard=()=>react.createElement(DeleteCard.A,{onCancel:()=>console.log("cancel"),onConfirm:()=>console.log("confirm")}),__namedExportsOrder=["XCard2","XCard3","XCardProduct","XCardSocial","XProjectCard","XCard4","XCard5","XCard6","XCard7","XDeleteCard"];XCard2.parameters={...XCard2.parameters,docs:{...XCard2.parameters?.docs,source:{originalSource:"() => <Card2 />",...XCard2.parameters?.docs?.source}}},XCard3.parameters={...XCard3.parameters,docs:{...XCard3.parameters?.docs,source:{originalSource:'() => <Card3 description="Experience innovation." linkText="Get Started" />',...XCard3.parameters?.docs?.source}}},XCardProduct.parameters={...XCardProduct.parameters,docs:{...XCardProduct.parameters?.docs,source:{originalSource:'() => <CardProduct image="https://via.placeholder.com/150" title="Sample Product" id="123" price="29.99" />',...XCardProduct.parameters?.docs?.source}}},XCardSocial.parameters={...XCardSocial.parameters,docs:{...XCardSocial.parameters?.docs,source:{originalSource:'() => <MemoryRouter>\r\n    <CardSocial id="789" coverPhoto="https://via.placeholder.com/600x200" profilePic="https://via.placeholder.com/100" username="Jane Smith" categories="Lifestyle, Travel" link="/user/janesmith" status="Active" />\r\n  </MemoryRouter>',...XCardSocial.parameters?.docs?.source}}},XProjectCard.parameters={...XProjectCard.parameters,docs:{...XProjectCard.parameters?.docs,source:{originalSource:'() => <ProjectCard image="https://via.placeholder.com/300x150" name="Project Without Category" description="A project with no specific category but plenty of ambition." tier="Bronze" category="" />',...XProjectCard.parameters?.docs?.source}}},XCard4.parameters={...XCard4.parameters,docs:{...XCard4.parameters?.docs,source:{originalSource:"() => <Card4 />",...XCard4.parameters?.docs?.source}}},XCard5.parameters={...XCard5.parameters,docs:{...XCard5.parameters?.docs,source:{originalSource:"() => <Card5 />",...XCard5.parameters?.docs?.source}}},XCard6.parameters={...XCard6.parameters,docs:{...XCard6.parameters?.docs,source:{originalSource:"() => <Card6 />",...XCard6.parameters?.docs?.source}}},XCard7.parameters={...XCard7.parameters,docs:{...XCard7.parameters?.docs,source:{originalSource:"() => <Card7 />",...XCard7.parameters?.docs?.source}}},XDeleteCard.parameters={...XDeleteCard.parameters,docs:{...XDeleteCard.parameters?.docs,source:{originalSource:"() => <DeleteCard onCancel={() => console.log('cancel')} onConfirm={() => console.log('confirm')} />",...XDeleteCard.parameters?.docs?.source}}}},"./src/components/atoms/cards/DeleteCard.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,slideDown=styled_components__WEBPACK_IMPORTED_MODULE_1__.i7`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`,CardContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  background-color: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.3s ease-out forwards;
`,CardContent=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out forwards;
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.svg`
  height: 3rem;
  width: 3rem;
  fill: #ef4444;
  margin-bottom: 1rem;
`,CardTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`,CardMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`,ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  border-radius: 9999px;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease-in;
  border: 2px solid;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`,CancelButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(Button)`
  border-color: #d1d5db;
  background-color: #e5e7eb;
  color: #4b5563;
  &:hover {
    border-color: #9ca3af;
    background-color: #d1d5db;
  }
`,ConfirmButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(Button)`
  border-color: #ef4444;
  background-color: #ef4444;
  color: white;
  &:hover {
    background-color: transparent;
    color: #ef4444;
  }
`,__WEBPACK_DEFAULT_EXPORT__=_ref=>{let{title,message,onCancel,onConfirm}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardContent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon,{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{clipRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",fillRule:"evenodd"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardTitle,null,title||"Are you sure?"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardMessage,null,message||"Do you really want to continue? This process cannot be undone.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonContainer,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(CancelButton,{onClick:onCancel},"Cancel"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfirmButton,{onClick:onConfirm},"Confirm")))}}}]);
//# sourceMappingURL=stories-atoms-cards-Cards-stories.f34fdabe.iframe.bundle.js.map