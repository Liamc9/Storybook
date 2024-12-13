(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6887],{"./node_modules/react-player/lib/players/Facebook.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Facebook_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Facebook_exports,{default:()=>Facebook}),module.exports=(mod=Facebook_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react/index.js")),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js");const SDK_URL="https://connect.facebook.net/en_US/sdk.js";class Facebook extends import_react.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",import_utils.callPlayer),__publicField(this,"playerID",this.props.config.playerId||`facebook-player-${(0,import_utils.randomString)()}`),__publicField(this,"mute",(()=>{this.callPlayer("mute")})),__publicField(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(url,isReady){isReady?(0,import_utils.getSDK)(SDK_URL,"FB","fbAsyncInit").then((FB=>FB.XFBML.parse())):(0,import_utils.getSDK)(SDK_URL,"FB","fbAsyncInit").then((FB=>{FB.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),FB.Event.subscribe("xfbml.render",(msg=>{this.props.onLoaded()})),FB.Event.subscribe("xfbml.ready",(msg=>{"video"===msg.type&&msg.id===this.playerID&&(this.player=msg.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(seconds,keepPlaying=!0){this.callPlayer("seek",seconds),keepPlaying||this.pause()}setVolume(fraction){this.callPlayer("setVolume",fraction)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes}=this.props.config;return import_react.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...attributes})}}__publicField(Facebook,"displayName","Facebook"),__publicField(Facebook,"canPlay",import_patterns.canPlay.facebook),__publicField(Facebook,"loopOnEnded",!0)}}]);