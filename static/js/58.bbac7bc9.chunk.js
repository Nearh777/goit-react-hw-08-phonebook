"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[58],{5469:function(e,t,r){r.d(t,{Z:function(){return ae}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode,c=Object.assign;function i(e){return e.trim()}function o(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function h(e){return e.length}function p(e,t){return t.push(e),e}var v=1,m=1,y=0,g=0,b=0,w="";function k(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:v,column:m,length:c,return:""}}function _(e,t){return c(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return b=g>0?l(w,--g):0,m--,10===b&&(m=1,v--),b}function x(){return b=g<y?l(w,g++):0,m++,10===b&&(m=1,v++),b}function $(){return l(w,g)}function A(){return g}function O(e,t){return f(w,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return v=m=1,y=d(w=e),g=0,[]}function N(e){return w="",e}function S(e){return i(O(g-1,Z(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(b=$())&&b<33;)x();return E(e)>2||E(b)>3?"":" "}function z(e,t){for(;--t&&x()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return O(e,A()+(t<6&&32==$()&&32==x()))}function Z(e){for(;x();)switch(b){case e:return g;case 34:case 39:34!==e&&39!==e&&Z(b);break;case 40:41===e&&Z(e);break;case 92:x()}return g}function M(e,t){for(;x()&&e+b!==57&&(e+b!==84||47!==$()););return"/*"+O(t,g-1)+"*"+s(47===e?e:x())}function T(e){for(;!E($());)x();return O(e,g)}var L="-ms-",R="-moz-",F="-webkit-",I="comm",q="rule",B="decl",H="@keyframes";function W(e,t){for(var r="",n=h(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function V(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case B:return e.return=e.return||e.value;case I:return"";case H:return e.return=e.value+"{"+W(e.children,n)+"}";case q:e.value=e.props.join(",")}return d(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function D(e){return N(G("",null,null,null,[""],e=P(e),0,[0],e))}function G(e,t,r,n,a,c,i,f,h){for(var v=0,m=0,y=i,g=0,b=0,w=0,k=1,_=1,O=1,E=0,P="",N=a,Z=c,L=n,R=P;_;)switch(w=E,E=x()){case 40:if(108!=w&&58==l(R,y-1)){-1!=u(R+=o(S(E),"&","&\f"),"&\f")&&(O=-1);break}case 34:case 39:case 91:R+=S(E);break;case 9:case 10:case 13:case 32:R+=j(w);break;case 92:R+=z(A()-1,7);continue;case 47:switch($()){case 42:case 47:p(K(M(x(),A()),t,r),h);break;default:R+="/"}break;case 123*k:f[v++]=d(R)*O;case 125*k:case 59:case 0:switch(E){case 0:case 125:_=0;case 59+m:-1==O&&(R=o(R,/\f/g,"")),b>0&&d(R)-y&&p(b>32?Q(R+";",n,r,y-1):Q(o(R," ","")+";",n,r,y-2),h);break;case 59:R+=";";default:if(p(L=J(R,t,r,v,m,a,f,P,N=[],Z=[],y),c),123===E)if(0===m)G(R,t,L,L,N,c,y,f,Z);else switch(99===g&&110===l(R,3)?100:g){case 100:case 108:case 109:case 115:G(e,L,L,n&&p(J(e,L,L,0,0,a,f,P,a,N=[],y),Z),a,Z,y,f,n?N:Z);break;default:G(R,L,L,L,[""],Z,0,f,Z)}}v=m=b=0,k=O=1,P=R="",y=i;break;case 58:y=1+d(R),b=w;default:if(k<1)if(123==E)--k;else if(125==E&&0==k++&&125==C())continue;switch(R+=s(E),E*k){case 38:O=m>0?1:(R+="\f",-1);break;case 44:f[v++]=(d(R)-1)*O,O=1;break;case 64:45===$()&&(R+=S(x())),g=$(),m=y=d(P=R+=T(A())),E++;break;case 45:45===w&&2==d(R)&&(k=0)}}return c}function J(e,t,r,n,s,c,u,l,d,p,v){for(var m=s-1,y=0===s?c:[""],g=h(y),b=0,w=0,_=0;b<n;++b)for(var C=0,x=f(e,m+1,m=a(w=u[b])),$=e;C<g;++C)($=i(w>0?y[C]+" "+x:o(x,/&\f/g,y[C])))&&(d[_++]=$);return k(e,t,r,0===s?q:l,d,p,v)}function K(e,t,r){return k(e,t,r,I,s(b),f(e,2,-2),0)}function Q(e,t,r,n){return k(e,t,r,B,f(e,0,n),f(e,n+1,-1),n)}var U=function(e,t,r){for(var n=0,a=0;n=a,a=$(),38===n&&12===a&&(t[r]=1),!E(a);)x();return O(e,g)},X=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(E(n)){case 0:38===n&&12===$()&&(t[r]=1),e[r]+=U(g-1,t,r);break;case 2:e[r]+=S(n);break;case 4:if(44===n){e[++r]=58===$()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=x());return e}(P(e),t))},Y=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Y.get(r))&&!n){Y.set(e,!0);for(var a=[],s=X(t,a),c=r.props,i=0,o=0;i<s.length;i++)for(var u=0;u<c.length;u++,o++)e.props[o]=a[i]?s[i].replace(/&\f/g,c[u]):c[u]+" "+s[i]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+R+e+L+e+e;case 6828:case 4268:return F+e+L+e+e;case 6165:return F+e+L+"flex-"+e+e;case 5187:return F+e+o(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return F+e+L+"flex-item-"+o(e,/flex-|-self/,"")+e;case 4675:return F+e+L+"flex-line-pack"+o(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+L+o(e,"shrink","negative")+e;case 5292:return F+e+L+o(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+o(e,"-grow","")+F+e+L+o(e,"grow","positive")+e;case 4554:return F+o(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return o(o(o(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return o(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return o(o(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return o(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return o(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?re(o(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return o(e,":",":-webkit-")+e;case 101:return o(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===l(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return F+e+L+o(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+L+o(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+L+o(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+L+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=re(e.value,e.length);break;case H:return W([_(e,{value:o(e.value,"@","@-webkit-")})],n);case q:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([_(e,{props:[o(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([_(e,{props:[o(t,/:(plac\w+)/,":-webkit-input-$1")]}),_(e,{props:[o(t,/:(plac\w+)/,":-moz-$1")]}),_(e,{props:[o(t,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var s,c,i={},o=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;o.push(e)}));var u,l,f=[V,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var t=h(e);return function(r,n,a,s){for(var c="",i=0;i<t;i++)c+=e[i](r,n,a,s)||"";return c}}([ee,te].concat(a,f));c=function(e,t,r,n){u=r,W(D(e?e+"{"+t.styles+"}":t.styles),d),n&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new n({key:t,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return p.sheet.hydrate(o),p}},2554:function(e,t,r){r.d(t,{F4:function(){return s}});r(2791),r(2561);var n=r(7666);r(5469),r(2110);function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.O)(t)}var s=function(){var e=a.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},7666:function(e,t,r){r.d(t,{O:function(){return p}});var n=r(8952),a=r(9797),s=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},o=function(e){return null!=e&&"boolean"!==typeof e},u=(0,a.Z)((function(e){return i(e)?e:e.replace(s,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===n.Z[e]||i(e)||"number"!==typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a])+";";else for(var s in r){var c=r[s];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=s+"{"+t[c]+"}":o(c)&&(n+=u(s)+":"+l(s,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var i=f(e,t,c);switch(s){case"animation":case"animationName":n+=u(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var d=0;d<c.length;d++)o(c[d])&&(n+=u(s)+":"+l(s,c[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,s=r(e);return d=a,f(e,t,s)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var p=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";d=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=f(r,t,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),n&&(a+=s[c]);h.lastIndex=0;for(var i,o="";null!==(i=h.exec(a));)o+="-"+i[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+o;return{name:u,styles:a,next:d}}},9262:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return b}});var a=r(2791),s=r(9791),c=r(5469),i=r(7666),o=r(2561),u=a.createContext("undefined"!==typeof HTMLElement?(0,c.Z)({key:"css"}):null);u.Provider;var l=function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(u);return e(t,n,r)}))};var f=a.createContext({});function d(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var h=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},p=s.Z,v=function(e){return"theme"!==e},m=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?p:v},y=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},g=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return h(t,r,n),(0,o.L)((function(){return function(e,t,r){h(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)})),null},b=function e(t,r){var s,c,o=t.__emotion_real===t,u=o&&t.__emotion_base||t;void 0!==r&&(s=r.label,c=r.target);var h=y(t,r,o),p=h||m(u),v=!p("as");return function(){var b=arguments,w=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==s&&w.push("label:"+s+";"),null==b[0]||void 0===b[0].raw)w.push.apply(w,b);else{0,w.push(b[0][0]);for(var k=b.length,_=1;_<k;_++)w.push(b[_],b[0][_])}var C=l((function(e,t,r){var n=v&&e.as||u,s="",o=[],l=e;if(null==e.theme){for(var y in l={},e)l[y]=e[y];l.theme=a.useContext(f)}"string"===typeof e.className?s=d(t.registered,o,e.className):null!=e.className&&(s=e.className+" ");var b=(0,i.O)(w.concat(o),t.registered,l);s+=t.key+"-"+b.name,void 0!==c&&(s+=" "+c);var k=v&&void 0===h?m(n):p,_={};for(var C in e)v&&"as"===C||k(C)&&(_[C]=e[C]);return _.className=s,_.ref=r,a.createElement(a.Fragment,null,a.createElement(g,{cache:t,serialized:b,isStringTag:"string"===typeof n}),a.createElement(n,_))}));return C.displayName=void 0!==s?s:"Styled("+("string"===typeof u?u:u.displayName||u.name||"Component")+")",C.defaultProps=t.defaultProps,C.__emotion_real=C,C.__emotion_base=u,C.__emotion_styles=w,C.__emotion_forwardProp=h,Object.defineProperty(C,"toString",{value:function(){return"."+c}}),C.withComponent=function(t,a){return e(t,n({},r,a,{shouldForwardProp:y(C,a,!0)})).apply(void 0,w)},C}}},2561:function(e,t,r){var n;r.d(t,{L:function(){return c}});var a=r(2791),s=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,c=s||function(e){return e()};s||a.useLayoutEffect},5899:function(e,t,r){r.d(t,{frZ:function(){return f}});var n=r(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function u(e){return function(t){return n.createElement(l,c({attr:c({},e.attr)},t),o(e.child))}}function l(e){var t=function(t){var r,a=e.attr,s=e.size,o=e.title,u=i(e,["attr","size","title"]),l=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==s?n.createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(e)}}}]);
//# sourceMappingURL=58.bbac7bc9.chunk.js.map