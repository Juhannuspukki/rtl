(()=>{var e={156:function(e,i,o){"use strict";var n=this&&this.__awaiter||function(e,i,o,n){return new(o||(o=Promise))((function(t,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(a,s)}c((n=n.apply(e,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0});const t=o(232),r=o(185),a=["geolocation","camera","microphone","notifications","midi","background-sync","ambient-light-sensor","accelerometer","gyroscope","magnetometer","accessibility-events","clipboard-read","clipboard-write","payment-handler","idle-detection","periodic-background-sync","screen-wake-lock","nfc"];function s(e){return n(this,void 0,void 0,(function*(){if(navigator.permissions&&navigator.permissions.query)try{return(yield navigator.permissions.query({name:e})).state}catch(e){return"unknown"}return"unknown"}))}function c(){return navigator.language}function d(){return{width:window.screen.width,height:window.screen.height}}function u(e){let i=0;for(let o=0;o<e.length;o++)i=(i<<5)-i+e.charCodeAt(o),i|=0;return i.toString()}function l(e){return Array.isArray(e)?JSON.stringify(e.map((e=>l(e)))):"object"==typeof e&&null!==e?Object.keys(e).sort().map((i=>`${i}:${l(e[i])}`)).join("|"):e}function b(){return n(this,void 0,void 0,(function*(){const e=(new t.UAParser).getResult(),i=d(),o=window.screen.colorDepth,r=function(){const e=document.createElement("canvas"),i=e.getContext("2d");return i?(e.width=200,e.height=200,i.fillStyle="rgb(255, 0, 255)",i.fillRect(0,0,e.width,e.height),i.font="16px Arial",i.fillStyle="rgb(0, 255, 255)",i.textBaseline="middle",i.fillText("Canvas Fingerprint",10,e.height/2),i.beginPath(),i.arc(50,50,30,0,2*Math.PI),i.strokeStyle="rgb(255, 255, 0)",i.lineWidth=2,i.stroke(),u(e.toDataURL())):""}(),b=c(),w=function(){const e=document.createElement("canvas"),i=e.getContext("webgl")||e.getContext("experimental-webgl");return i&&i instanceof WebGLRenderingContext?u(i.getParameter(i.VENDOR)+i.getParameter(i.RENDERER)):""}(),p=function(){const e=document.createElement("canvas"),i=e.getContext("webgl")||e.getContext("experimental-webgl");if(!(i&&i instanceof WebGLRenderingContext))return console.error("WebGL is not supported"),{};const o={};for(const e in WebGLRenderingContext){const n=WebGLRenderingContext[e];if("number"==typeof n){const t=i.getParameter(n);null!==t&&(o[e]=t)}}return o}(),m=function(){const e=[];try{MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E"')&&e.push("H.264"),MediaSource.isTypeSupported('video/webm; codecs="vp8"')&&e.push("VP8"),MediaSource.isTypeSupported('video/webm; codecs="vp9"')&&e.push("VP9"),MediaSource.isTypeSupported('video/mp4; codecs="av01.0.05M.08"')&&e.push("AV1"),MediaSource.isTypeSupported('video/mp4; codecs="hev1.1.6.L93.B0"')&&e.push("HEVC"),MediaSource.isTypeSupported('video/ogg; codecs="theora"')&&e.push("Theora")}catch(e){console.log("Failed to determine supported video codecs.")}return e}(),v=function(){const e=[];try{MediaRecorder.isTypeSupported('audio/webm; codecs="opus"')&&e.push("Opus"),MediaRecorder.isTypeSupported('audio/webm; codecs="vorbis"')&&e.push("Vorbis"),MediaRecorder.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')&&e.push("AAC"),MediaRecorder.isTypeSupported("audio/flac")&&e.push("FLAC"),MediaRecorder.isTypeSupported('audio/mp4; codecs="alac"')&&e.push("ALAC"),MediaRecorder.isTypeSupported('audio/ogg; codecs="speex"')&&e.push("Speex"),MediaRecorder.isTypeSupported('audio/wav; codecs="1"')&&e.push("PCM")}catch(e){console.log("Failed to determine supported audio codecs.")}return e}(),h=function(){const e=[];for(const i in navigator)e.push(i);return e}(),f=yield function(){return n(this,void 0,void 0,(function*(){const e={};for(const i of a){const o=yield s(i);e[i]=o}return e}))}(),g={userAgent:{browser:e.browser.name,cpu:e.cpu,device:e.device,engine:e.engine.name,os:e.os.name},screenResolution:i,colorDepth:o,canvasFingerprint:r,language:b,webglFingerprint:w,webglParameters:p,videoCodecs:m,audioCodecs:v,navigatorProperties:h,permissions:f};return console.log("Device data:",g),l(g)}))}function w(){let e="",i="";return e="https://tsgkgufovvgqnfavuuoj.supabase.co/functions/v1/log-visit",i="https://tsgkgufovvgqnfavuuoj.supabase.co/functions/v1/log-time",{visitEndpoint:"https://tsgkgufovvgqnfavuuoj.supabase.co/functions/v1/log-visit",timeEndpoint:"https://tsgkgufovvgqnfavuuoj.supabase.co/functions/v1/log-time"}}!function(){n(this,void 0,void 0,(function*(){var e,i,o,a,s,u,l,p,m;const v=performance.now(),h=self.crypto.randomUUID(),f=yield b(),g=yield function(e){return n(this,void 0,void 0,(function*(){const i=(new TextEncoder).encode(e),o=yield crypto.subtle.digest("SHA-256",i),n=Array.from(new Uint8Array(o)).map((e=>e.toString(16).padStart(2,"0"))).join("").slice(0,32);return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20,32)}`}))}(f),y=d(),k=c(),x=document.referrer,S=window.location.pathname,E=(new t.UAParser).getResult(),T={visitID:h,visitorID:g,language:k,referrer:x,pathName:S,screenWidth:null!==(e=y.width)&&void 0!==e?e:0,screenHeight:null!==(i=y.height)&&void 0!==i?i:0,browserName:null!==(o=E.browser.name)&&void 0!==o?o:"Unknown",browserVersion:null!==(a=E.browser.version)&&void 0!==a?a:"Unknown",deviceVendor:null!==(s=E.device.vendor)&&void 0!==s?s:"Unknown",deviceModel:null!==(u=E.device.model)&&void 0!==u?u:"Unknown",deviceType:null!==(l=E.device.type)&&void 0!==l?l:"Unknown",osName:null!==(p=E.os.name)&&void 0!==p?p:"Unknown",osVersion:null!==(m=E.os.version)&&void 0!==m?m:"Unknown"};console.log("Visit data",T);const _=performance.now(),A=Math.round(_-v);console.log(`Visit data was generated in ${A} ms.`),(0,r.attachEventListeners)((function e(){return n(this,void 0,void 0,(function*(){console.log("Logging activated."),(0,r.removeEventListeners)(e);const i=w().visitEndpoint,o=w().timeEndpoint;document.addEventListener("visibilitychange",(function(){if("hidden"===document.visibilityState){const e=performance.now(),i=Math.round(e-v);navigator.sendBeacon(o,JSON.stringify({visitID:h,timeOnPage:i}))}})),yield fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(T)})}))}))}))}()},185:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.removeEventListeners=i.attachEventListeners=void 0,i.attachEventListeners=function(e){document.addEventListener("mousemove",e),document.addEventListener("keydown",e),document.addEventListener("scroll",e),document.addEventListener("touchstart",e),document.addEventListener("click",e)},i.removeEventListeners=function(e){document.removeEventListener("mousemove",e),document.removeEventListener("keydown",e),document.removeEventListener("scroll",e),document.removeEventListener("touchstart",e),document.removeEventListener("click",e)}},232:function(e,i,o){var n;!function(t,r){"use strict";var a="function",s="undefined",c="object",d="string",u="major",l="model",b="name",w="type",p="vendor",m="version",v="architecture",h="console",f="mobile",g="tablet",y="smarttv",k="wearable",x="embedded",S="Amazon",E="Apple",T="ASUS",_="BlackBerry",A="Browser",C="Chrome",M="Firefox",L="Google",R="Huawei",P="LG",q="Microsoft",N="Motorola",O="Opera",U="Samsung",j="Sharp",z="Sony",V="Xiaomi",D="Zebra",B="Facebook",I="Chromium OS",G="Mac OS",$=function(e){for(var i={},o=0;o<e.length;o++)i[e[o].toUpperCase()]=e[o];return i},F=function(e,i){return typeof e===d&&-1!==W(i).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,i){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof i===s?e:e.substring(0,500)},Z=function(e,i){for(var o,n,t,s,d,u,l=0;l<i.length&&!d;){var b=i[l],w=i[l+1];for(o=n=0;o<b.length&&!d&&b[o];)if(d=b[o++].exec(e))for(t=0;t<w.length;t++)u=d[++n],typeof(s=w[t])===c&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):r:this[s[0]]=u?s[1].call(this,u,s[2]):r:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):r):this[s]=u||r;l+=2}},X=function(e,i){for(var o in i)if(typeof i[o]===c&&i[o].length>0){for(var n=0;n<i[o].length;n++)if(F(i[o][n],e))return"?"===o?r:o}else if(F(i[o],e))return"?"===o?r:o;return e},J={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,m],[/opios[\/ ]+([\w\.]+)/i],[m,[b,O+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[m,[b,O+" GX"]],[/\bopr\/([\w\.]+)/i],[m,[b,O]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[b,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,m],[/\bddg\/([\w\.]+)/i],[m,[b,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[b,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[b,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[b,"Smart Lenovo "+A]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+A],m],[/\bfocus\/([\w\.]+)/i],[m,[b,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[b,O+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[b,O+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[b,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[m,[b,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+A]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+A],m],[/samsungbrowser\/([\w\.]+)/i],[m,[b,U+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],m],[/metasr[\/ ]?([\d\.]+)/i],[m,[b,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[b,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[b,m],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,B],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[b,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,C+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[b,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[m,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[b,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,m],[/(cobalt)\/([\w\.]+)/i],[b,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,W]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/windows (ce|mobile); ppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[v,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[v,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[p,U],[w,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[p,U],[w,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[p,E],[w,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[p,E],[w,g]],[/(macintosh);/i],[l,[p,E]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[p,j],[w,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[p,R],[w,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[p,R],[w,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[p,V],[w,f]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[p,V],[w,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[p,"OPPO"],[w,f]],[/\b(opd2\d{3}a?) bui/i],[l,[p,"OPPO"],[w,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[p,"Vivo"],[w,f]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[p,"Realme"],[w,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[p,N],[w,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[p,N],[w,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[p,P],[w,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[p,P],[w,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[p,"Lenovo"],[w,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[p,"Nokia"],[w,f]],[/(pixel c)\b/i],[l,[p,L],[w,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[p,L],[w,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[p,z],[w,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[p,z],[w,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[p,"OnePlus"],[w,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[p,S],[w,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[p,S],[w,f]],[/(playbook);[-\w\),; ]+(rim)/i],[l,p,[w,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[p,_],[w,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[p,T],[w,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[p,T],[w,f]],[/(nexus 9)/i],[l,[p,"HTC"],[w,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[l,/_/g," "],[w,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[p,"Acer"],[w,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[p,"Meizu"],[w,f]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[p,"Ulefone"],[w,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,l,[w,f]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,l,[w,g]],[/(surface duo)/i],[l,[p,q],[w,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[p,"Fairphone"],[w,f]],[/(u304aa)/i],[l,[p,"AT&T"],[w,f]],[/\bsie-(\w*)/i],[l,[p,"Siemens"],[w,f]],[/\b(rct\w+) b/i],[l,[p,"RCA"],[w,g]],[/\b(venue[\d ]{2,7}) b/i],[l,[p,"Dell"],[w,g]],[/\b(q(?:mv|ta)\w+) b/i],[l,[p,"Verizon"],[w,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[p,"Barnes & Noble"],[w,g]],[/\b(tm\d{3}\w+) b/i],[l,[p,"NuVision"],[w,g]],[/\b(k88) b/i],[l,[p,"ZTE"],[w,g]],[/\b(nx\d{3}j) b/i],[l,[p,"ZTE"],[w,f]],[/\b(gen\d{3}) b.+49h/i],[l,[p,"Swiss"],[w,f]],[/\b(zur\d{3}) b/i],[l,[p,"Swiss"],[w,g]],[/\b((zeki)?tb.*\b) b/i],[l,[p,"Zeki"],[w,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],l,[w,g]],[/\b(ns-?\w{0,9}) b/i],[l,[p,"Insignia"],[w,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[p,"NextBook"],[w,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],l,[w,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],l,[w,f]],[/\b(ph-1) /i],[l,[p,"Essential"],[w,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[p,"Envizen"],[w,g]],[/\b(trio[-\w\. ]+) b/i],[l,[p,"MachSpeed"],[w,g]],[/\btu_(1491) b/i],[l,[p,"Rotor"],[w,g]],[/(shield[\w ]+) b/i],[l,[p,"Nvidia"],[w,g]],[/(sprint) (\w+)/i],[p,l,[w,f]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,q],[w,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[p,D],[w,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[p,D],[w,f]],[/smart-tv.+(samsung)/i],[p,[w,y]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[p,U],[w,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,P],[w,y]],[/(apple) ?tv/i],[p,[l,E+" TV"],[w,y]],[/crkey/i],[[l,C+"cast"],[p,L],[w,y]],[/droid.+aft(\w+)( bui|\))/i],[l,[p,S],[w,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[p,j],[w,y]],[/(bravia[\w ]+)( bui|\))/i],[l,[p,z],[w,y]],[/(mitv-\w{5}) bui/i],[l,[p,V],[w,y]],[/Hbbtv.*(technisat) (.*);/i],[p,l,[w,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[l,H],[w,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[w,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,l,[w,h]],[/droid.+; (shield) bui/i],[l,[p,"Nvidia"],[w,h]],[/(playstation [345portablevi]+)/i],[l,[p,z],[w,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[p,q],[w,h]],[/((pebble))app/i],[p,l,[w,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[p,E],[w,k]],[/droid.+; (glass) \d/i],[l,[p,L],[w,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[p,D],[w,k]],[/(quest( \d| pro)?)/i],[l,[p,B],[w,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[w,x]],[/(aeobc)\b/i],[l,[p,S],[w,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[w,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[w,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[w,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[w,f]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[b,[m,X,J]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,X,J],[b,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,G],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,m],[/\(bb(10);/i],[m,[b,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[b,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[b,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,I],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,m],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,m]]},Q=function(e,i){if(typeof e===c&&(i=e,e=r),!(this instanceof Q))return new Q(e,i).getResult();var o=typeof t!==s&&t.navigator?t.navigator:r,n=e||(o&&o.userAgent?o.userAgent:""),h=o&&o.userAgentData?o.userAgentData:r,y=i?function(e,i){var o={};for(var n in e)i[n]&&i[n].length%2==0?o[n]=i[n].concat(e[n]):o[n]=e[n];return o}(K,i):K,k=o&&o.userAgent==n;return this.getBrowser=function(){var e,i={};return i[b]=r,i[m]=r,Z.call(i,n,y.browser),i[u]=typeof(e=i[m])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:r,k&&o&&o.brave&&typeof o.brave.isBrave==a&&(i[b]="Brave"),i},this.getCPU=function(){var e={};return e[v]=r,Z.call(e,n,y.cpu),e},this.getDevice=function(){var e={};return e[p]=r,e[l]=r,e[w]=r,Z.call(e,n,y.device),k&&!e[w]&&h&&h.mobile&&(e[w]=f),k&&"Macintosh"==e[l]&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(e[l]="iPad",e[w]=g),e},this.getEngine=function(){var e={};return e[b]=r,e[m]=r,Z.call(e,n,y.engine),e},this.getOS=function(){var e={};return e[b]=r,e[m]=r,Z.call(e,n,y.os),k&&!e[b]&&h&&h.platform&&"Unknown"!=h.platform&&(e[b]=h.platform.replace(/chrome os/i,I).replace(/macos/i,G)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===d&&e.length>500?H(e,500):e,this},this.setUA(n),this};Q.VERSION="1.0.38",Q.BROWSER=$([b,m,u]),Q.CPU=$([v]),Q.DEVICE=$([l,p,w,h,f,y,g,k,x]),Q.ENGINE=Q.OS=$([b,m]),typeof i!==s?(e.exports&&(i=e.exports=Q),i.UAParser=Q):o.amdO?(n=function(){return Q}.call(i,o,i,e))===r||(e.exports=n):typeof t!==s&&(t.UAParser=Q);var Y=typeof t!==s&&(t.jQuery||t.Zepto);if(Y&&!Y.ua){var ee=new Q;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var i=ee.getResult();for(var o in i)Y.ua[o]=i[o]}}}("object"==typeof window?window:this)}},i={};function o(n){var t=i[n];if(void 0!==t)return t.exports;var r=i[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.amdO={},o(156)})();