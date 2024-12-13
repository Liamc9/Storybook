(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2042],{"./node_modules/react-player/lib/players/Twitch.js":(module,__unused_webpack_exports,__webpack_require__)=>{var mod,__create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),Twitch_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(Twitch_exports,{default:()=>Twitch}),module.exports=(mod=Twitch_exports,__copyProps(__defProp({},"__esModule",{value:!0}),mod));var import_react=((mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)))(__webpack_require__("./node_modules/react/index.js")),import_utils=__webpack_require__("./node_modules/react-player/lib/utils.js"),import_patterns=__webpack_require__("./node_modules/react-player/lib/patterns.js");class Twitch extends import_react.Component{constructor(){super(...arguments),__publicField(this,"callPlayer",import_utils.callPlayer),__publicField(this,"playerID",this.props.config.playerId||`twitch-player-${(0,import_utils.randomString)()}`),__publicField(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),__publicField(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(url,isReady){const{playsinline,onError,config,controls}=this.props,isChannel=import_patterns.MATCH_URL_TWITCH_CHANNEL.test(url),id=isChannel?url.match(import_patterns.MATCH_URL_TWITCH_CHANNEL)[1]:url.match(import_patterns.MATCH_URL_TWITCH_VIDEO)[1];isReady?isChannel?this.player.setChannel(id):this.player.setVideo("v"+id):(0,import_utils.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((Twitch2=>{this.player=new Twitch2.Player(this.playerID,{video:isChannel?"":id,channel:isChannel?id:"",height:"100%",width:"100%",playsinline,autoplay:this.props.playing,muted:this.props.muted,controls:!!isChannel||controls,time:(0,import_utils.parseStartTime)(url),...config.options});const{READY,PLAYING,PAUSE,ENDED,ONLINE,OFFLINE,SEEK}=Twitch2.Player;this.player.addEventListener(READY,this.props.onReady),this.player.addEventListener(PLAYING,this.props.onPlay),this.player.addEventListener(PAUSE,this.props.onPause),this.player.addEventListener(ENDED,this.props.onEnded),this.player.addEventListener(SEEK,this.props.onSeek),this.player.addEventListener(ONLINE,this.props.onLoaded),this.player.addEventListener(OFFLINE,this.props.onLoaded)}),onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(seconds,keepPlaying=!0){this.callPlayer("seek",seconds),keepPlaying||this.pause()}setVolume(fraction){this.callPlayer("setVolume",fraction)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return import_react.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}__publicField(Twitch,"displayName","Twitch"),__publicField(Twitch,"canPlay",import_patterns.canPlay.twitch),__publicField(Twitch,"loopOnEnded",!0)}}]);