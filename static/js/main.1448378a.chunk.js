(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mountains.97c55f0f.jpg"},function(e,t,a){e.exports=a.p+"static/media/san-francisco.9e61d3af.jpg"},function(e,t,a){e.exports=a.p+"static/media/italy.acc76c23.jpg"},function(e,t,a){e.exports=a.p+"static/media/architecture.43041bb3.jpg"},function(e,t,a){e.exports=a.p+"static/media/einkorn.52dfc0a6.jpg"},function(e,t,a){e.exports=a.p+"static/media/india.e3f95e5c.jpg"},function(e,t,a){e.exports=a.p+"static/media/satellite.9c9dcddf.jpg"},function(e,t,a){e.exports=a.p+"static/media/night.faa05dc1.mp4"},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){(function(t){"object"!=typeof window?t.window=t:window,e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=a(1))&&n.__esModule?n:{default:n},r=l.default;t.default=r,t.default=l.default,e.exports=t.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=a(2))&&n.__esModule?n:{default:n};function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");var a=t.get(e);return a.get?a.get.call(e):a.value}function o(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a}var c=function(){function e(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b.add(this),d.add(this),u.add(this),s.add(this),m.set(this,{writable:!0,value:function(){a.element&&(o(a,b,E).call(a),"function"==typeof a.callbacks.onScroll&&a.callbacks.onScroll(a.element))}}),p.set(this,{writable:!0,value:function(){a.element&&(o(a,b,E).call(a),"function"==typeof a.callbacks.onResize&&a.callbacks.onResize(a.element))}}),this.element=t,this.callbacks=l,this.settings=this.extendSettings(n),"function"==typeof this.callbacks.onInit&&this.callbacks.onInit(this.element),o(this,b,E).call(this),o(this,s,f).call(this)}var t,a,n;return t=e,n=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.elements,n=t.settings,l=t.callbacks;a instanceof Node&&(a=[a]),a instanceof NodeList&&(a=[].slice.call(a));var r=!0,i=!1,o=void 0;try{for(var c,s=a[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var u=c.value;"parlx"in u||(u.parlx=new e(u,n,l))}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}],(a=[{key:"destroy",value:function(){"function"==typeof this.callbacks.onDestroy&&this.callbacks.onDestroy(this.element),o(this,u,h).call(this),this.element.parlx=null,delete this.element.parlx,this.element=null}},{key:"extendSettings",value:function(e){var t={direction:"vertical",exclude:null,height:"400px",speed:.3,type:"background"},a={};for(var n in t)if(n in e)a[n]=e[n];else if(this.element.getAttribute("data-".concat(n))){var l=this.element.getAttribute("data-".concat(n));try{a[n]=JSON.parse(l)}catch(e){a[n]=l}}else a[n]=t[n];return a}}])&&r(t.prototype,a),n&&r(t,n),e}();t.default=c;var s=new WeakSet,u=new WeakSet,m=new WeakMap,p=new WeakMap,d=new WeakSet,b=new WeakSet,f=function(){window.addEventListener("scroll",i(this,m)),window.addEventListener("resize",i(this,p))},h=function(){window.removeEventListener("scroll",i(this,m)),window.removeEventListener("resize",i(this,p))},g=function(){var e,t;"horizontal"===this.settings.direction?(e=this.movement,t="0"):"vertical"===this.settings.direction?(e="0",t=this.movement):"diagonal"===this.settings.direction&&(e=this.movement,t=this.movement),this.transform="translate(".concat(e,"px, ").concat(t,"px)")},E=function(){var e;this.element.style.height=this.settings.height;var t=this.element.getBoundingClientRect().top,a=window.pageYOffset>=0?t:0;if(Math.abs(this.settings.speed)>1&&(this.settings.speed=.3),this.movement=this.settings.speed*a/2,(l.default.name.match(this.settings.exclude)||(null===(e=l.default.product)||void 0===e?void 0:e.match(this.settings.exclude)))&&(this.settings.speed=0),o(this,d,g).call(this),"foreground"===this.settings.type)Object.assign(this.element.style,{transform:this.transform});else if("background"===this.settings.type){if(!this.element.querySelector(".parlx-children")){var n=document.createElement("div");n.classList.add("parlx-children"),this.element.appendChild(n)}Object.assign(this.element.querySelector(".parlx-children").style,{transform:this.transform,"object-fit":"cover","min-width":"".concat(this.element.offsetWidth*(1+2*Math.abs(this.settings.speed)),"px"),height:"".concat(this.element.offsetHeight*(1+2*Math.abs(this.settings.speed)),"px")})}var r={move:this.movement};this.element.dispatchEvent(new CustomEvent("parlxMove",{detail:r}))};if("undefined"!=typeof document){window.Parlx=c;var x=document.querySelectorAll("[data-parlx]");x.length&&c.init({elements:x})}window.jQuery&&(window.jQuery.fn.parlx=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c.init({elements:this,settings:e.settings||{},callbacks:e.callbacks||{}})})},function(e,t,a){(function(e,n){var l;(function(){"use strict";var r={function:!0,object:!0},i=r[typeof window]&&window||this,o=r[typeof t]&&t,c=r[typeof e]&&e&&!e.nodeType&&e,s=o&&c&&"object"==typeof n&&n;!s||s.global!==s&&s.window!==s&&s.self!==s||(i=s);var u=Math.pow(2,53)-1,m=/\bOpera/,p=Object.prototype,d=p.hasOwnProperty,b=p.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function h(e){return e=y(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function g(e,t){for(var a in e)d.call(e,a)&&t(e[a],a,e)}function E(e){return null==e?f(e):b.call(e).slice(8,-1)}function x(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function v(e,t){var a=null;return function(e,t){var a=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=u)for(;++a<n;)t(e[a],a);else g(e,t)}(e,function(n,l){a=t(a,n,l,e)}),a}function y(e){return String(e).replace(/^ +| +$/g,"")}var S=function e(t){var a=i,n=t&&"object"==typeof t&&"String"!=E(t);n&&(a=t,t=null);var l=a.navigator||{},r=l.userAgent||"";t||(t=r);var o,c,s,u,p,d=n?!!l.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(b.toString()),f=n?"Object":"ScriptBridgingProxyObject",S=n?"Object":"Environment",w=n&&a.java?"JavaPackage":E(a.java),O=n?"Object":"RuntimeObject",P=/\bJava/.test(w)&&a.java,M=P&&E(a.environment)==S,N=P?"a":"\u03b1",j=P?"b":"\u03b2",k=a.document||{},T=a.operamini||a.opera,W=m.test(W=n&&T?T["[[Class]]"]:E(T))?W:T=null,C=t,B=[],A=null,I=t==r,R=I&&T&&"function"==typeof T.version&&T.version(),$=v([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,a){return e||RegExp("\\b"+(a.pattern||x(a))+"\\b","i").exec(t)&&(a.label||a)}),F=v(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(e,a){return e||RegExp("\\b"+(a.pattern||x(a))+"\\b","i").exec(t)&&(a.label||a)}),G=L([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),_=v({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(e,a,n){return e||(a[G]||a[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)]||RegExp("\\b"+x(n)+"(?:\\b|\\w*\\d)","i").exec(t))&&n}),X=v(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(e,a){var n=a.pattern||x(a);return!e&&(e=RegExp("\\b"+n+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,a){var n={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&a&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(n=n[/[\d.]+$/.exec(e)])&&(e="Windows "+n),e=String(e),t&&a&&(e=e.replace(RegExp(t,"i"),a)),e=h(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,n,a.label||a)),e});function L(e){return v(e,function(e,a){var n=a.pattern||x(a);return!e&&(e=RegExp("\\b"+n+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+n+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+n+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(a.label&&!RegExp(n,"i").test(a.label)?a.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),a=a.label||a,e=h(e[0].replace(RegExp(n,"i"),a).replace(RegExp("; *(?:"+a+"[_-])?","i")," ").replace(RegExp("("+a+")[-_.]?(\\w)","i"),"$1 $2"))),e})}if($&&($=[$]),_&&!G&&(G=L([_])),(o=/\bGoogle TV\b/.exec(G))&&(G=o[0]),/\bSimulator\b/i.test(t)&&(G=(G?G+" ":"")+"Simulator"),"Opera Mini"==F&&/\bOPiOS\b/.test(t)&&B.push("running in Turbo/Uncompressed mode"),"IE"==F&&/\blike iPhone OS\b/.test(t)?(_=(o=e(t.replace(/like iPhone OS/,""))).manufacturer,G=o.product):/^iP/.test(G)?(F||(F="Safari"),X="iOS"+((o=/ OS ([\d_]+)/i.exec(t))?" "+o[1].replace(/_/g,"."):"")):"Konqueror"!=F||/buntu/i.test(X)?_&&"Google"!=_&&(/Chrome/.test(F)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(G))||/\bAndroid\b/.test(X)&&/^Chrome/.test(F)&&/\bVersion\//i.test(t)?(F="Android Browser",X=/\bAndroid\b/.test(X)?X:"Android"):"Silk"==F?(/\bMobi/i.test(t)||(X="Android",B.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&B.unshift("accelerated")):"PaleMoon"==F&&(o=/\bFirefox\/([\d.]+)\b/.exec(t))?B.push("identifying as Firefox "+o[1]):"Firefox"==F&&(o=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(X||(X="Firefox OS"),G||(G=o[1])):!F||(o=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(F))?(F&&!G&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(o+"/")+8))&&(F=null),(o=G||_||X)&&(G||_||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(X))&&(F=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(X)?X:o)+" Browser")):"Electron"==F&&(o=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&B.push("Chromium "+o):X="Kubuntu",R||(R=v(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",x(F),"(?:Firefox|Minefield|NetFront)"],function(e,a){return e||(RegExp(a+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null})),(o=("iCab"==$&&parseFloat(R)>3?"WebKit":/\bOpera\b/.test(F)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test($)&&"WebKit"||!$&&/\bMSIE\b/i.test(t)&&("Mac OS"==X?"Tasman":"Trident")||"WebKit"==$&&/\bPlayStation\b(?! Vita\b)/i.test(F)&&"NetFront")&&($=[o]),"IE"==F&&(o=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(F+=" Mobile",X="Windows Phone "+(/\+$/.test(o)?o:o+".x"),B.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(F="IE Mobile",X="Windows Phone 8.x",B.unshift("desktop mode"),R||(R=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=F&&"Trident"==$&&(o=/\brv:([\d.]+)/.exec(t))&&(F&&B.push("identifying as "+F+(R?" "+R:"")),F="IE",R=o[1]),I){if(u="global",p=null!=(s=a)?typeof s[u]:"number",/^(?:boolean|number|string|undefined)$/.test(p)||"object"==p&&!s[u])E(o=a.runtime)==f?(F="Adobe AIR",X=o.flash.system.Capabilities.os):E(o=a.phantom)==O?(F="PhantomJS",R=(o=o.version||null)&&o.major+"."+o.minor+"."+o.patch):"number"==typeof k.documentMode&&(o=/\bTrident\/(\d+)/i.exec(t))?(R=[R,k.documentMode],(o=+o[1]+4)!=R[1]&&(B.push("IE "+R[1]+" mode"),$&&($[1]=""),R[1]=o),R="IE"==F?String(R[1].toFixed(1)):R[0]):"number"==typeof k.documentMode&&/^(?:Chrome|Firefox)\b/.test(F)&&(B.push("masking as "+F+" "+R),F="IE",R="11.0",$=["Trident"],X="Windows");else if(P&&(C=(o=P.lang.System).getProperty("os.arch"),X=X||o.getProperty("os.name")+" "+o.getProperty("os.version")),M){try{R=a.require("ringo/engine").version.join("."),F="RingoJS"}catch(e){(o=a.system)&&o.global.system==a.system&&(F="Narwhal",X||(X=o[0].os||null))}F||(F="Rhino")}else"object"==typeof a.process&&!a.process.browser&&(o=a.process)&&("object"==typeof o.versions&&("string"==typeof o.versions.electron?(B.push("Node "+o.versions.node),F="Electron",R=o.versions.electron):"string"==typeof o.versions.nw&&(B.push("Chromium "+R,"Node "+o.versions.node),F="NW.js",R=o.versions.nw)),F||(F="Node.js",C=o.arch,X=o.platform,R=(R=/[\d.]+/.exec(o.version))?R[0]:null));X=X&&h(X)}if(R&&(o=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(R)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(I&&l.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(A=/b/i.test(o)?"beta":"alpha",R=R.replace(RegExp(o+"\\+?$"),"")+("beta"==A?j:N)+(/\d+\+?/.exec(o)||"")),"Fennec"==F||"Firefox"==F&&/\b(?:Android|Firefox OS)\b/.test(X))F="Firefox Mobile";else if("Maxthon"==F&&R)R=R.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(G))"Xbox 360"==G&&(X=null),"Xbox 360"==G&&/\bIEMobile\b/.test(t)&&B.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(F)&&(!F||G||/Browser|Mobi/.test(F))||"Windows CE"!=X&&!/Mobi/i.test(t))if("IE"==F&&I)try{null===a.external&&B.unshift("platform preview")}catch(e){B.unshift("embedded")}else(/\bBlackBerry\b/.test(G)||/\bBB10\b/.test(t))&&(o=(RegExp(G.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||R)?(X=((o=[o,/BB10/.test(t)])[1]?(G=null,_="BlackBerry"):"Device Software")+" "+o[0],R=null):this!=g&&"Wii"!=G&&(I&&T||/Opera/.test(F)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==F&&/\bOS X (?:\d+\.){2,}/.test(X)||"IE"==F&&(X&&!/^Win/.test(X)&&R>5.5||/\bWindows XP\b/.test(X)&&R>8||8==R&&!/\bTrident\b/.test(t)))&&!m.test(o=e.call(g,t.replace(m,"")+";"))&&o.name&&(o="ing as "+o.name+((o=o.version)?" "+o:""),m.test(F)?(/\bIE\b/.test(o)&&"Mac OS"==X&&(X=null),o="identify"+o):(o="mask"+o,F=W?h(W.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(o)&&(X=null),I||(R=null)),$=["Presto"],B.push(o));else F+=" Mobile";(o=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(o=[parseFloat(o.replace(/\.(\d)$/,".0$1")),o],"Safari"==F&&"+"==o[1].slice(-1)?(F="WebKit Nightly",A="alpha",R=o[1].slice(0,-1)):R!=o[1]&&R!=(o[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(R=null),o[1]=(/\bChrome\/([\d.]+)/i.exec(t)||0)[1],537.36==o[0]&&537.36==o[2]&&parseFloat(o[1])>=28&&"WebKit"==$&&($=["Blink"]),I&&(d||o[1])?($&&($[1]="like Chrome"),o=o[1]||((o=o[0])<530?1:o<532?2:o<532.05?3:o<533?4:o<534.03?5:o<534.07?6:o<534.1?7:o<534.13?8:o<534.16?9:o<534.24?10:o<534.3?11:o<535.01?12:o<535.02?"13+":o<535.07?15:o<535.11?16:o<535.19?17:o<536.05?18:o<536.1?19:o<537.01?20:o<537.11?"21+":o<537.13?23:o<537.18?24:o<537.24?25:o<537.36?26:"Blink"!=$?"27":"28")):($&&($[1]="like Safari"),o=(o=o[0])<400?1:o<500?2:o<526?3:o<533?4:o<534?"4+":o<535?5:o<537?6:o<538?7:o<601?8:"8"),$&&($[1]+=" "+(o+="number"==typeof o?".x":/[.+]/.test(o)?"":"+")),"Safari"==F&&(!R||parseInt(R)>45)&&(R=o)),"Opera"==F&&(o=/\bzbov|zvav$/.exec(X))?(F+=" ",B.unshift("desktop mode"),"zvav"==o?(F+="Mini",R=null):F+="Mobile",X=X.replace(RegExp(" *"+o+"$"),"")):"Safari"==F&&/\bChrome\b/.exec($&&$[1])&&(B.unshift("desktop mode"),F="Chrome Mobile",R=null,/\bOS X\b/.test(X)?(_="Apple",X="iOS 4.3+"):X=null),R&&0==R.indexOf(o=/[\d.]+$/.exec(X))&&t.indexOf("/"+o+"-")>-1&&(X=y(X.replace(o,""))),$&&!/\b(?:Avant|Nook)\b/.test(F)&&(/Browser|Lunascape|Maxthon/.test(F)||"Safari"!=F&&/^iOS/.test(X)&&/\bSafari\b/.test($[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(F)&&$[1])&&(o=$[$.length-1])&&B.push(o),B.length&&(B=["("+B.join("; ")+")"]),_&&G&&G.indexOf(_)<0&&B.push("on "+_),G&&B.push((/^on /.test(B[B.length-1])?"":"on ")+G),X&&(o=/ ([\d.+]+)$/.exec(X),c=o&&"/"==X.charAt(X.length-o[0].length-1),X={architecture:32,family:o&&!c?X.replace(o[0],""):X,version:o?o[1]:null,toString:function(){var e=this.version;return this.family+(e&&!c?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(o=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(C))&&!/\bi686\b/i.test(C)?(X&&(X.architecture=64,X.family=X.family.replace(RegExp(" *"+o),"")),F&&(/\bWOW64\b/i.test(t)||I&&/\w(?:86|32)$/.test(l.cpuClass||l.platform)&&!/\bWin64; x64\b/i.test(t))&&B.unshift("32-bit")):X&&/^OS X/.test(X.family)&&"Chrome"==F&&parseFloat(R)>=39&&(X.architecture=64),t||(t=null);var z={};return z.description=t,z.layout=$&&$[0],z.manufacturer=_,z.name=F,z.prerelease=A,z.product=G,z.ua=t,z.version=F&&R,z.os=X||{architecture:null,family:null,version:null,toString:function(){return"null"}},z.parse=e,z.toString=function(){return this.description||""},z.version&&B.unshift(R),z.name&&B.unshift(F),X&&F&&(X!=String(X).split(" ")[0]||X!=F.split(" ")[0]&&!G)&&B.push(G?"("+X+")":"on "+X),B.length&&(z.description=B.join(" ")),z}();i.platform=S,void 0===(l=function(){return S}.call(t,a,t,e))||(e.exports=l)}).call(this)}).call(this,a(3)(e),a(4))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"==typeof window&&(a=window)}e.exports=a}])}).call(this,a(5))},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),o=(a(24),a(7)),c=a(3),s=a.n(c),u=a(10),m=a(2),p=(a(31),a(11)),d=a.n(p),b=function(){var e=Object(n.useState)(window.innerHeight),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(1),c=Object(o.a)(i,2),p=c[0],b=c[1];return Object(n.useEffect)(function(){window.addEventListener("resize",function(){return r(window.innerHeight)})},[]),l.a.createElement("header",null,l.a.createElement(s.a,{settings:{height:a,speed:"-0.3"},parlxMove:function(e){return b(1-e/80)},overlay:!0},l.a.createElement("img",{className:"parlx-children",src:d.a,alt:"view"}),l.a.createElement("div",{className:"header-title",style:{opacity:p}},l.a.createElement("h1",null,"parlx.js"),l.a.createElement("h2",null,"Parallax effect library for:",l.a.createElement("br",null),"JS, TS, React and jQuery"),l.a.createElement("a",{href:"https://github.com/JB1905/parlx.js"},l.a.createElement(m.a,{icon:u.a}),"See on GitHub"))))},f=a(4),h=(a(32),a(12)),g=a.n(h),E=a(13),x=a.n(E),v=a(14),y=a.n(v),S=a(15),w=a.n(S),O=a(16),P=a.n(O),M=a(17),N=a.n(M),j=a(18),k=a.n(j),T=function(){return l.a.createElement("main",null,l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.a}),"How to Install"),l.a.createElement("p",null,"npm / Yarn:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"$ npm install parlx.js"),l.a.createElement("br",null),l.a.createElement("code",null,"$ yarn add parlx.js")),l.a.createElement("p",null,"HTML script tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<script src="/path/to/parlx.js"><\/script>'))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.f}),"Getting Started"),l.a.createElement("p",null,"ES6+:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"import Parlx from 'parlx.js';")),l.a.createElement("p",null,"CommonJS:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"const Parlx = require('parlx.js');")),l.a.createElement("br",null),l.a.createElement("p",null,"JavaScript / TypeScript:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"const elems = document.querySelectorAll('.parallax');"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"//"," v2+"),l.a.createElement("br",null),l.a.createElement("code",null,"const parlx = Parlx.init(elems, {"),l.a.createElement("br",null),l.a.createElement("code",null,"  //"," options..."),l.a.createElement("br",null),l.a.createElement("code",null,"});"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"//"," v1+"),l.a.createElement("br",null),l.a.createElement("code",null,"const parlx = new Parlx(elems, {"),l.a.createElement("br",null),l.a.createElement("code",null,"  //"," options..."),l.a.createElement("br",null),l.a.createElement("code",null,"});")),l.a.createElement("p",null,"jQuery:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>')),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"$ npm install jquery"),l.a.createElement("br",null),l.a.createElement("code",null,"$ yarn add jquery"),l.a.createElement("br",null),l.a.createElement("code",null,"$ bower install jquery")),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"const jQuery = require('jquery');")),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"$('.parallax').parlx({"),l.a.createElement("br",null),l.a.createElement("code",null,"  //"," options..."),l.a.createElement("br",null),l.a.createElement("code",null,"});"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.h}),"Autoinit"),l.a.createElement("p",null,"To use it, add ",l.a.createElement("code",null,"data-parlx")," to html element e.g:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,"<div data-parlx></div>"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.c}),"Methods"),l.a.createElement("p",null,"Destroy method (v2+)"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"elems.parlx.destroy();"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.i}),"Custom speed"),l.a.createElement("p",null,"To set custom speed to single element use following code in div tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<div data-speed="0.1">')),l.a.createElement("br",null),l.a.createElement("p",null,"To set custom speed to all elements place in options:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"speed: 0.1"))),l.a.createElement("section",{className:"split-view"},l.a.createElement(s.a,{className:"parallax",overlay:!0},l.a.createElement("img",{className:"parlx-children",src:g.a,alt:"san-francisco"}),l.a.createElement("h3",{className:"parallax-marker"},"0.3")),l.a.createElement(s.a,{className:"parallax",settings:{speed:"-0.3"},overlay:!0},l.a.createElement("img",{className:"parlx-children",src:x.a,alt:"italy"}),l.a.createElement("h3",{className:"parallax-marker"},"-0.3"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.g}),"Custom height"),l.a.createElement("p",null,"To set custom height to single element use following code in div tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<div data-height="700px">')),l.a.createElement("br",null),l.a.createElement("p",null,"To set custom height to all elements place in options:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"height: '700px'"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.b}),"Disable parallax effect on selected user agents"),l.a.createElement("p",null,"To disable parallax effect on selected user agents on single element use following code in div tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<div data-exclude="/(iPod|iPhone|iPad|Android)/">')),l.a.createElement("br",null),l.a.createElement("p",null,"To disable parallax effect on selected user agents on all elements place in options:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"exclude: /(iPod|iPhone|iPad|Android)/"))),l.a.createElement("section",{className:"split-view"},l.a.createElement(s.a,{className:"parallax",settings:{exclude:/(Firefox|iPad)/},overlay:!0},l.a.createElement("img",{className:"parlx-children",src:y.a,alt:"architecture"}),l.a.createElement("h3",{className:"parallax-marker"},"Exclude Firefox & iPad"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.d}),"Parallax effect direction"),l.a.createElement("p",null,"To disable parallax effect on mobile on single element use following code in div tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'data-direction="vertical"')),l.a.createElement("br",null),l.a.createElement("p",null,"To disable parallax effect on all elements place in options:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"direction: 'vertical'"))),l.a.createElement("section",{className:"split-view"},l.a.createElement(s.a,{className:"parallax",overlay:!0},l.a.createElement("img",{className:"parlx-children",src:w.a,alt:"einkorn"}),l.a.createElement("h3",{className:"parallax-marker"},"vertical")),l.a.createElement(s.a,{className:"parallax",settings:{direction:"horizontal"},overlay:!0},l.a.createElement("img",{className:"parlx-children",src:P.a,alt:"india"}),l.a.createElement("h3",{className:"parallax-marker"},"horizontal"))),l.a.createElement("section",{className:"split-view"},l.a.createElement(s.a,{className:"parallax",settings:{direction:"diagonal"},overlay:!0},l.a.createElement("img",{className:"parlx-children",src:N.a,alt:"satellite"}),l.a.createElement("h3",{className:"parallax-marker"},"diagonal"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement(m.a,{icon:f.e}),"Parallax effect type"),l.a.createElement("p",null,"To set type of parallax effect use following code in div tag:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<div data-type="foreground">')),l.a.createElement("br",null),l.a.createElement("p",null,"To set type of parallax effect on all elements place in options:"),l.a.createElement("pre",{className:"language-javascript"},l.a.createElement("code",null,"type: 'foreground'"))),l.a.createElement("section",{className:"split-view"},l.a.createElement(s.a,{className:"parallax",overlay:!0},l.a.createElement("video",{className:"parlx-children",src:k.a,autoPlay:!0,playsInline:!0,loop:!0,muted:!0}),l.a.createElement("h3",{className:"parallax-marker"},"Not only images!"))),l.a.createElement("section",{className:"content"},l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"party"},"\ud83c\udf89")," ","Videos, divs and other HTML5 tags since v1.2.0"," ",l.a.createElement("span",{role:"img","aria-label":"party"},"\ud83c\udf89")),l.a.createElement("p",null,"To assign parallax children add ",l.a.createElement("code",null,'class="parlx-children"')," to element inside of parallax container e.g:"),l.a.createElement("pre",{className:"language-html"},l.a.createElement("code",null,'<video class="parlx-children" src="sample.mp4">'))))};a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(function(){return l.a.createElement("div",{className:"wrap"},l.a.createElement(b,null),l.a.createElement(T,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,1,2]]]);