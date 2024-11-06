(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5518],{5518:function(i,e,r){"use strict";var o=r(7294);o&&"object"==typeof o&&"default"in o&&o.default;var n=r(3451),a=new n,t=a.getBrowser(),s=a.getCPU(),b=a.getDevice(),u=a.getEngine(),w=a.getOS(),d=a.getUA(),c=function(i){if(!i){console.error("No userAgent string was provided");return}var e=new n(i);return{UA:e,browser:e.getBrowser(),cpu:e.getCPU(),device:e.getDevice(),engine:e.getEngine(),os:e.getOS(),ua:e.getUA(),setUserAgent:function(i){return e.setUA(i)}}},l=Object.freeze({ClientUAInstance:a,browser:t,cpu:s,device:b,engine:u,os:w,ua:d,setUa:function(i){return a.setUA(i)},parseUserAgent:c}),m={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},f={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},p=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},g=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},v=function(i){var e=g();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)},h=function(i){return i.type===m.Mobile},x=function(i){return i.type===m.Tablet},k=function(i){var e=i.type;return e===m.Mobile||e===m.Tablet},y=function(i){return i.type===m.SmartTv},S=function(i){return i.type===m.Browser},T=function(i){return i.type===m.Wearable},_=function(i){return i.type===m.Console},A=function(i){return i.type===m.Embedded},E=function(i){return p(i.vendor)},C=function(i){return p(i.model)},M=function(i){return p(i.type,"browser")},O=function(i){return"Android"===i.name},U=function(i){return"Windows"===i.name},I=function(i){return"Mac OS"===i.name},N=function(i){return"Windows Phone"===i.name},P=function(i){return"iOS"===i.name},q=function(i){return p(i.version)},z=function(i){return p(i.name)},B=function(i){return i.name===f.Chrome},j=function(i){return i.name===f.Firefox},V=function(i){return i.name===f.Chromium},D=function(i){return i.name===f.Edge},R=function(i){return i.name===f.Yandex},W=function(i){var e=i.name;return e===f.Safari||e===f.MobileSafari},F=function(i){return i.name===f.MobileSafari},G=function(i){return i.name===f.Opera},L=function(i){var e=i.name;return e===f.InternetExplorer||e===f.Ie},H=function(i){return i.name===f.MIUI},Y=function(i){return i.name===f.SamsungBrowser},Z=function(i){return p(i.version)},$=function(i){return p(i.major)},X=function(i){return p(i.name)},K=function(i){return p(i.name)},Q=function(i){return p(i.version)},J=function(){var i=g(),e=i&&i.userAgent&&i.userAgent.toLowerCase();return"string"==typeof e&&/electron/.test(e)},ii=function(i){return"string"==typeof i&&-1!==i.indexOf("Edg/")},ie=function(){var i=g();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream},ir=function(){return v("iPad")},io=function(){return v("iPhone")},ia=function(){return v("iPod")},it=function(i){return p(i)};function is(i){var e=i||l,r=e.device,o=e.browser,n=e.os,a=e.engine,t=e.ua;return{isSmartTV:y(r),isConsole:_(r),isWearable:T(r),isEmbedded:A(r),isMobileSafari:F(o)||ir(),isChromium:V(o),isMobile:k(r)||ir(),isMobileOnly:h(r),isTablet:x(r)||ir(),isBrowser:S(r),isDesktop:S(r),isAndroid:O(n),isWinPhone:N(n),isIOS:P(n)||ir(),isChrome:B(o),isFirefox:j(o),isSafari:W(o),isOpera:G(o),isIE:L(o),osVersion:q(n),osName:z(n),fullBrowserVersion:Z(o),browserVersion:$(o),browserName:X(o),mobileVendor:E(r),mobileModel:C(r),engineName:K(a),engineVersion:Q(a),getUA:it(t),isEdge:D(o)||ii(t),isYandex:R(o),deviceType:M(r),isIOS13:ie(),isIPad13:ir(),isIPhone13:io(),isIPod13:ia(),isElectron:J(),isEdgeChromium:ii(t),isLegacyEdge:D(o)&&!ii(t),isWindows:U(n),isMacOs:I(n),isMIUI:H(o),isSamsungBrowser:Y(o)}}y(b),_(b),T(b),A(b),F(t)||ir(),V(t);var ib=k(b)||ir(),iu=(h(b),x(b)||ir()),iw=(S(b),S(b),O(w)),id=(N(w),P(w)||ir()),ic=B(t),il=(j(t),W(t)),im=(G(t),L(t),q(w)),ip=(z(w),Z(t),$(t),X(t),E(b),C(b),K(u),Q(u),it(d));D(t)||ii(d),R(t),M(b),ie(),ir(),io(),ia(),J(),ii(d),D(t)&&ii(d),U(w),I(w),H(t),Y(t),e.bG=function(i){if(!i||"string"!=typeof i){console.error("No valid user agent string was provided");return}var e=c(i);return is({device:e.device,browser:e.browser,os:e.os,engine:e.engine,ua:e.ua})},e.z$=ip,e.Dt=iw,e.i7=ic,e.gn=id,e.tq=ib,e.G6=il,e.Em=iu,e.MM=im,e.CD=function(i){var e=c(i||window.navigator.userAgent||window.navigator.userAgent);return[is(e),e]}},3451:function(i,e,r){var o;!function(n,a){"use strict";var t="function",s="undefined",b="object",u="string",w="major",d="model",c="name",l="type",m="vendor",f="version",p="architecture",g="console",v="mobile",h="tablet",x="smarttv",k="wearable",y="embedded",S="Amazon",T="Apple",_="ASUS",A="BlackBerry",E="Browser",C="Chrome",M="Firefox",O="Google",U="Huawei",I="Microsoft",N="Motorola",P="Opera",q="Samsung",z="Sharp",B="Sony",j="Xiaomi",V="Zebra",D="Facebook",R="Chromium OS",W="Mac OS",F=function(i,e){var r={};for(var o in i)e[o]&&e[o].length%2==0?r[o]=e[o].concat(i[o]):r[o]=i[o];return r},G=function(i){for(var e={},r=0;r<i.length;r++)e[i[r].toUpperCase()]=i[r];return e},L=function(i,e){return typeof i===u&&-1!==H(e).indexOf(H(i))},H=function(i){return i.toLowerCase()},Y=function(i,e){if(typeof i===u)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,350)},Z=function(i,e){for(var r,o,n,s,u,w,d=0;d<e.length&&!u;){var c=e[d],l=e[d+1];for(r=o=0;r<c.length&&!u&&c[r];)if(u=c[r++].exec(i))for(n=0;n<l.length;n++)w=u[++o],typeof(s=l[n])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,w):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=w?w.replace(s[1],s[2]):void 0:this[s[0]]=w?s[1].call(this,w,s[2]):void 0:4===s.length&&(this[s[0]]=w?s[3].call(this,w.replace(s[1],s[2])):void 0):this[s]=w||a;d+=2}},$=function(i,e){for(var r in e)if(typeof e[r]===b&&e[r].length>0){for(var o=0;o<e[r].length;o++)if(L(e[r][o],i))return"?"===r?a:r}else if(L(e[r],i))return"?"===r?a:r;return i},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,f],[/opios[\/ ]+([\w\.]+)/i],[f,[c,P+" Mini"]],[/\bopr\/([\w\.]+)/i],[f,[c,P]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[c,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[f,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[f,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+E],f],[/\bfocus\/([\w\.]+)/i],[f,[c,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[f,[c,P+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[c,P+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[c,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[f,[c,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+E]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+E],f],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,D],f],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[c,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[f,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[c,C+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,C+" WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[c,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,f],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[f,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[f,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[f,$,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[c,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,f],[/(cobalt)\/([\w\.]+)/i],[c,[f,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,H]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",H]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[m,q],[l,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[m,q],[l,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[m,T],[l,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[m,T],[l,h]],[/(macintosh);/i],[d,[m,T]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[m,z],[l,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[m,U],[l,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[m,U],[l,v]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[m,j],[l,v]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[m,j],[l,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[m,"OPPO"],[l,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[m,"Vivo"],[l,v]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[d,[m,"Realme"],[l,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[m,N],[l,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[m,N],[l,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[m,"LG"],[l,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[m,"LG"],[l,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[m,"Lenovo"],[l,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[m,"Nokia"],[l,v]],[/(pixel c)\b/i],[d,[m,O],[l,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[m,O],[l,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[m,B],[l,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[m,B],[l,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[m,"OnePlus"],[l,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[m,S],[l,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[m,S],[l,v]],[/(playbook);[-\w\),; ]+(rim)/i],[d,m,[l,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[m,A],[l,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[m,_],[l,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[m,_],[l,v]],[/(nexus 9)/i],[d,[m,"HTC"],[l,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[d,/_/g," "],[l,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[m,"Acer"],[l,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[m,"Meizu"],[l,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,d,[l,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,d,[l,h]],[/(surface duo)/i],[d,[m,I],[l,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[m,"Fairphone"],[l,v]],[/(u304aa)/i],[d,[m,"AT&T"],[l,v]],[/\bsie-(\w*)/i],[d,[m,"Siemens"],[l,v]],[/\b(rct\w+) b/i],[d,[m,"RCA"],[l,h]],[/\b(venue[\d ]{2,7}) b/i],[d,[m,"Dell"],[l,h]],[/\b(q(?:mv|ta)\w+) b/i],[d,[m,"Verizon"],[l,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[m,"Barnes & Noble"],[l,h]],[/\b(tm\d{3}\w+) b/i],[d,[m,"NuVision"],[l,h]],[/\b(k88) b/i],[d,[m,"ZTE"],[l,h]],[/\b(nx\d{3}j) b/i],[d,[m,"ZTE"],[l,v]],[/\b(gen\d{3}) b.+49h/i],[d,[m,"Swiss"],[l,v]],[/\b(zur\d{3}) b/i],[d,[m,"Swiss"],[l,h]],[/\b((zeki)?tb.*\b) b/i],[d,[m,"Zeki"],[l,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],d,[l,h]],[/\b(ns-?\w{0,9}) b/i],[d,[m,"Insignia"],[l,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[m,"NextBook"],[l,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],d,[l,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],d,[l,v]],[/\b(ph-1) /i],[d,[m,"Essential"],[l,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[m,"Envizen"],[l,h]],[/\b(trio[-\w\. ]+) b/i],[d,[m,"MachSpeed"],[l,h]],[/\btu_(1491) b/i],[d,[m,"Rotor"],[l,h]],[/(shield[\w ]+) b/i],[d,[m,"Nvidia"],[l,h]],[/(sprint) (\w+)/i],[m,d,[l,v]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[m,I],[l,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[m,V],[l,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[m,V],[l,v]],[/smart-tv.+(samsung)/i],[m,[l,x]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[m,q],[l,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[l,x]],[/(apple) ?tv/i],[m,[d,T+" TV"],[l,x]],[/crkey/i],[[d,C+"cast"],[m,O],[l,x]],[/droid.+aft(\w)( bui|\))/i],[d,[m,S],[l,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[m,z],[l,x]],[/(bravia[\w ]+)( bui|\))/i],[d,[m,B],[l,x]],[/(mitv-\w{5}) bui/i],[d,[m,j],[l,x]],[/Hbbtv.*(technisat) (.*);/i],[m,d,[l,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,Y],[d,Y],[l,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[l,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,d,[l,g]],[/droid.+; (shield) bui/i],[d,[m,"Nvidia"],[l,g]],[/(playstation [345portablevi]+)/i],[d,[m,B],[l,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[m,I],[l,g]],[/((pebble))app/i],[m,d,[l,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[m,T],[l,k]],[/droid.+; (glass) \d/i],[d,[m,O],[l,k]],[/droid.+; (wt63?0{2,3})\)/i],[d,[m,V],[l,k]],[/(quest( 2| pro)?)/i],[d,[m,D],[l,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[l,y]],[/(aeobc)\b/i],[d,[m,S],[l,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[d,[l,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[l,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[l,h]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[l,v]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[f,$,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[f,$,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,W],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[f,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,f],[/\(bb(10);/i],[f,[c,A]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[c,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[f,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[f,[c,C+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,R],f],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,f],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,f]]},Q=function(i,e){if(typeof i===b&&(e=i,i=a),!(this instanceof Q))return new Q(i,e).getResult();var r=typeof n!==s&&n.navigator?n.navigator:a,o=i||(r&&r.userAgent?r.userAgent:""),g=r&&r.userAgentData?r.userAgentData:a,x=e?F(K,e):K,k=r&&r.userAgent==o;return this.getBrowser=function(){var i,e={};return e[c]=a,e[f]=a,Z.call(e,o,x.browser),e[w]=typeof(i=e[f])===u?i.replace(/[^\d\.]/g,"").split(".")[0]:a,k&&r&&r.brave&&typeof r.brave.isBrave==t&&(e[c]="Brave"),e},this.getCPU=function(){var i={};return i[p]=a,Z.call(i,o,x.cpu),i},this.getDevice=function(){var i={};return i[m]=a,i[d]=a,i[l]=a,Z.call(i,o,x.device),k&&!i[l]&&g&&g.mobile&&(i[l]=v),k&&"Macintosh"==i[d]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(i[d]="iPad",i[l]=h),i},this.getEngine=function(){var i={};return i[c]=a,i[f]=a,Z.call(i,o,x.engine),i},this.getOS=function(){var i={};return i[c]=a,i[f]=a,Z.call(i,o,x.os),k&&!i[c]&&g&&"Unknown"!=g.platform&&(i[c]=g.platform.replace(/chrome os/i,R).replace(/macos/i,W)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=typeof i===u&&i.length>350?Y(i,350):i,this},this.setUA(o),this};Q.VERSION="1.0.35",Q.BROWSER=G([c,f,w]),Q.CPU=G([p]),Q.DEVICE=G([d,m,l,g,v,x,h,k,y]),Q.ENGINE=Q.OS=G([c,f]),typeof e!==s?(i.exports&&(e=i.exports=Q),e.UAParser=Q):r.amdO?a!==(o=(function(){return Q}).call(e,r,e,i))&&(i.exports=o):typeof n!==s&&(n.UAParser=Q);var J=typeof n!==s&&(n.jQuery||n.Zepto);if(J&&!J.ua){var ii=new Q;J.ua=ii.getResult(),J.ua.get=function(){return ii.getUA()},J.ua.set=function(i){ii.setUA(i);var e=ii.getResult();for(var r in e)J.ua[r]=e[r]}}}("object"==typeof window?window:this)}}]);