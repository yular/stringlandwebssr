(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{24778:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(17621));function i(e,t,r){var n;return(n=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-2*t:Math.round(e.h)+2*t:r?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?n+=360:n>=360&&(n-=360),n}function o(e,t,r){return 0===e.h&&0===e.s?e.s:((n=r?Math.round(100*e.s)-16*t:4===t?Math.round(100*e.s)+16:Math.round(100*e.s)+5*t)>100&&(n=100),r&&5===t&&n>10&&(n=10),n<6&&(n=6),n);var n}function s(e,t,r){return r?Math.round(100*e.v)+5*t:Math.round(100*e.v)-15*t}t.default=function(e){for(var t=[],r=a.default(e),n=5;n>0;n-=1){var c=r.toHsv(),l=a.default({h:i(c,n,!0),s:o(c,n,!0),v:s(c,n,!0)}).toHexString();t.push(l)}for(t.push(r.toHexString()),n=1;n<=4;n+=1){c=r.toHsv(),l=a.default({h:i(c,n),s:o(c,n),v:s(c,n)}).toHexString();t.push(l)}return t}},39086:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(24778));t.generate=a.default;var i={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"};t.presetPrimaryColors=i;var o={};t.presetPalettes=o,Object.keys(i).forEach((function(e){o[e]=a.default(i[e]),o[e].primary=o[e][5]}));var s=o.red;t.red=s;var c=o.volcano;t.volcano=c;var l=o.gold;t.gold=l;var f=o.orange;t.orange=f;var u=o.yellow;t.yellow=u;var h=o.lime;t.lime=h;var d=o.green;t.green=d;var g=o.cyan;t.cyan=g;var b=o.blue;t.blue=b;var p=o.geekblue;t.geekblue=p;var m=o.purple;t.purple=m;var v=o.magenta;t.magenta=v;var y=o.grey;t.grey=y},72652:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},42135:function(e,t,r){"use strict";r.d(t,{Z:function(){return H}});var n=r(97685),a=r(4942),i=r(91),o=r(67294),s=r(94184),c=r.n(s),l=r(71002),f=r(39086),u=r(80334),h=r(38186);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){return"object"===(0,l.Z)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===(0,l.Z)(e.icon)||"function"===typeof e.icon)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,r){var n=e[r];if("class"===r)t.className=n,delete t.class;else t[r]=n;return t}),{})}function m(e,t,r){return r?o.createElement(e.tag,g(g({key:t},p(e.attrs)),r),(e.children||[]).map((function(r,n){return m(r,"".concat(t,"-").concat(e.tag,"-").concat(n))}))):o.createElement(e.tag,g({key:t},p(e.attrs)),(e.children||[]).map((function(r,n){return m(r,"".concat(t,"-").concat(e.tag,"-").concat(n))})))}function v(e){return(0,f.generate)(e)[0]}function y(e){return e?Array.isArray(e)?e:[e]:[]}var _="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",w=!1;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var C=function(e){var t,r,n=e.icon,a=e.className,s=e.onClick,c=e.style,l=e.primaryColor,f=e.secondaryColor,d=(0,i.Z)(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),g=A;if(l&&(g={primaryColor:l,secondaryColor:f||v(l)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;(0,o.useEffect)((function(){w||((0,h.insertCss)(e,{prepend:!0}),w=!0)}),[])}(),t=b(n),r="icon should be icon definiton, but got ".concat(n),(0,u.ZP)(t,"[@ant-design/icons] ".concat(r)),!b(n))return null;var p=n;return p&&"function"===typeof p.icon&&(p=x(x({},p),{},{icon:p.icon(g.primaryColor,g.secondaryColor)})),m(p.icon,"svg-".concat(p.name),x({className:a,onClick:s,style:c,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d))};C.displayName="IconReact",C.getTwoToneColors=function(){return x({},A)},C.setTwoToneColors=function(e){var t=e.primaryColor,r=e.secondaryColor;A.primaryColor=t,A.secondaryColor=r||v(t),A.calculated=!!r};var O=C;function S(e){var t=y(e),r=(0,n.Z)(t,2),a=r[0],i=r[1];return O.setTwoToneColors({primaryColor:a,secondaryColor:i})}S("#1890ff");var j=o.forwardRef((function(e,t){var r=e.className,s=e.icon,l=e.spin,f=e.rotate,u=e.tabIndex,h=e.onClick,d=e.twoToneColor,g=(0,i.Z)(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=c()("anticon",(0,a.Z)({},"anticon-".concat(s.name),Boolean(s.name)),r),p=c()({"anticon-spin":!!l||"loading"===s.name}),m=u;void 0===m&&h&&(m=-1);var v=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,_=y(d),w=(0,n.Z)(_,2),k=w[0],x=w[1];return o.createElement("span",Object.assign({role:"img","aria-label":s.name},g,{ref:t,tabIndex:m,onClick:h,className:b}),o.createElement(O,{className:p,icon:s,primaryColor:k,secondaryColor:x,style:v}))}));j.displayName="AntdIcon",j.getTwoToneColor=function(){var e=O.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},j.setTwoToneColor=S;var H=j},43529:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(n=r(26909))&&n.__esModule?n:{default:n};t.default=a,e.exports=a},26909:function(e,t,r){"use strict";var n=r(20862),a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(81109)),o=n(r(67294)),s=a(r(72652)),c=a(r(26545)),l=function(e,t){return o.createElement(c.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:s.default}))};l.displayName="DownOutlined";var f=o.forwardRef(l);t.default=f},38186:function(e){var t=[],r=[];function n(e,n){if(n=n||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var a,i=!0===n.prepend?"prepend":"append",o=void 0!==n.container?n.container:document.querySelector("head"),s=t.indexOf(o);return-1===s&&(s=t.push(o)-1,r[s]={}),void 0!==r[s]&&void 0!==r[s][i]?a=r[s][i]:(a=r[s][i]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===i?o.insertBefore(a,o.childNodes[0]):o.appendChild(a)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),a.styleSheet?a.styleSheet.cssText+=e:a.textContent+=e,a}e.exports=n,e.exports.insertCss=n},17621:function(e,t,r){var n;!function(a){var i=/^\s+/,o=/\s+$/,s=0,c=a.round,l=a.min,f=a.max,u=a.random;function h(e,t){if(t=t||{},(e=e||"")instanceof h)return e;if(!(this instanceof h))return new h(e,t);var r=function(e){var t={r:0,g:0,b:0},r=1,n=null,s=null,c=null,u=!1,h=!1;"string"==typeof e&&(e=function(e){e=e.replace(i,"").replace(o,"").toLowerCase();var t,r=!1;if(F[e])e=F[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};if(t=Z.rgb.exec(e))return{r:t[1],g:t[2],b:t[3]};if(t=Z.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=Z.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=Z.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=Z.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=Z.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=Z.hex8.exec(e))return{r:T(t[1]),g:T(t[2]),b:T(t[3]),a:q(t[4]),format:r?"name":"hex8"};if(t=Z.hex6.exec(e))return{r:T(t[1]),g:T(t[2]),b:T(t[3]),format:r?"name":"hex"};if(t=Z.hex4.exec(e))return{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),a:q(t[4]+""+t[4]),format:r?"name":"hex8"};if(t=Z.hex3.exec(e))return{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),format:r?"name":"hex"};return!1}(e));"object"==typeof e&&(z(e.r)&&z(e.g)&&z(e.b)?(d=e.r,g=e.g,b=e.b,t={r:255*R(d,255),g:255*R(g,255),b:255*R(b,255)},u=!0,h="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(n=D(e.s),s=D(e.v),t=function(e,t,r){e=6*R(e,360),t=R(t,100),r=R(r,100);var n=a.floor(e),i=e-n,o=r*(1-t),s=r*(1-i*t),c=r*(1-(1-i)*t),l=n%6;return{r:255*[r,s,o,o,c,r][l],g:255*[c,r,r,s,o,o][l],b:255*[o,o,c,r,r,s][l]}}(e.h,n,s),u=!0,h="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(n=D(e.s),c=D(e.l),t=function(e,t,r){var n,a,i;function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=R(e,360),t=R(t,100),r=R(r,100),0===t)n=a=i=r;else{var s=r<.5?r*(1+t):r+t-r*t,c=2*r-s;n=o(c,s,e+1/3),a=o(c,s,e),i=o(c,s,e-1/3)}return{r:255*n,g:255*a,b:255*i}}(e.h,n,c),u=!0,h="hsl"),e.hasOwnProperty("a")&&(r=e.a));var d,g,b;return r=P(r),{ok:u,format:e.format||h,r:l(255,f(t.r,0)),g:l(255,f(t.g,0)),b:l(255,f(t.b,0)),a:r}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=c(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=c(this._r)),this._g<1&&(this._g=c(this._g)),this._b<1&&(this._b=c(this._b)),this._ok=r.ok,this._tc_id=s++}function d(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var n,a,i=f(e,t,r),o=l(e,t,r),s=(i+o)/2;if(i==o)n=a=0;else{var c=i-o;switch(a=s>.5?c/(2-i-o):c/(i+o),i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:a,l:s}}function g(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var n,a,i=f(e,t,r),o=l(e,t,r),s=i,c=i-o;if(a=0===i?0:c/i,i==o)n=0;else{switch(i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4}n/=6}return{h:n,s:a,v:s}}function b(e,t,r,n){var a=[N(c(e).toString(16)),N(c(t).toString(16)),N(c(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function p(e,t,r,n){return[N(I(n)),N(c(e).toString(16)),N(c(t).toString(16)),N(c(r).toString(16))].join("")}function m(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s-=t/100,r.s=E(r.s),h(r)}function v(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.s+=t/100,r.s=E(r.s),h(r)}function y(e){return h(e).desaturate(100)}function _(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l+=t/100,r.l=E(r.l),h(r)}function w(e,t){t=0===t?0:t||10;var r=h(e).toRgb();return r.r=f(0,l(255,r.r-c(-t/100*255))),r.g=f(0,l(255,r.g-c(-t/100*255))),r.b=f(0,l(255,r.b-c(-t/100*255))),h(r)}function k(e,t){t=0===t?0:t||10;var r=h(e).toHsl();return r.l-=t/100,r.l=E(r.l),h(r)}function x(e,t){var r=h(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,h(r)}function A(e){var t=h(e).toHsl();return t.h=(t.h+180)%360,h(t)}function C(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+120)%360,s:t.s,l:t.l}),h({h:(r+240)%360,s:t.s,l:t.l})]}function O(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+90)%360,s:t.s,l:t.l}),h({h:(r+180)%360,s:t.s,l:t.l}),h({h:(r+270)%360,s:t.s,l:t.l})]}function S(e){var t=h(e).toHsl(),r=t.h;return[h(e),h({h:(r+72)%360,s:t.s,l:t.l}),h({h:(r+216)%360,s:t.s,l:t.l})]}function j(e,t,r){t=t||6,r=r||30;var n=h(e).toHsl(),a=360/r,i=[h(e)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(h(n));return i}function H(e,t){t=t||6;for(var r=h(e).toHsv(),n=r.h,a=r.s,i=r.v,o=[],s=1/t;t--;)o.push(h({h:n,s:a,v:i})),i=(i+s)%1;return o}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:a.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=P(e),this._roundA=c(100*this._a)/100,this},toHsv:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=g(this._r,this._g,this._b),t=c(360*e.h),r=c(100*e.s),n=c(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=d(this._r,this._g,this._b),t=c(360*e.h),r=c(100*e.s),n=c(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,a){var i=[N(c(e).toString(16)),N(c(t).toString(16)),N(c(r).toString(16)),N(I(n))];if(a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0);return i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:c(this._r),g:c(this._g),b:c(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+c(this._r)+", "+c(this._g)+", "+c(this._b)+")":"rgba("+c(this._r)+", "+c(this._g)+", "+c(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:c(100*R(this._r,255))+"%",g:c(100*R(this._g,255))+"%",b:c(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+c(100*R(this._r,255))+"%, "+c(100*R(this._g,255))+"%, "+c(100*R(this._b,255))+"%)":"rgba("+c(100*R(this._r,255))+"%, "+c(100*R(this._g,255))+"%, "+c(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(M[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var a=h(e);r="#"+p(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(k,arguments)},desaturate:function(){return this._applyModification(m,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(H,arguments)},splitcomplement:function(){return this._applyCombination(S,arguments)},triad:function(){return this._applyCombination(C,arguments)},tetrad:function(){return this._applyCombination(O,arguments)}},h.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:D(e[n]));e=r}return h(e,t)},h.equals=function(e,t){return!(!e||!t)&&h(e).toRgbString()==h(t).toRgbString()},h.random=function(){return h.fromRatio({r:u(),g:u(),b:u()})},h.mix=function(e,t,r){r=0===r?0:r||50;var n=h(e).toRgb(),a=h(t).toRgb(),i=r/100;return h({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},h.readability=function(e,t){var r=h(e),n=h(t);return(a.max(r.getLuminance(),n.getLuminance())+.05)/(a.min(r.getLuminance(),n.getLuminance())+.05)},h.isReadable=function(e,t,r){var n,a,i=h.readability(e,t);switch(a=!1,(n=function(e){var t,r;t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase(),r=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA");"small"!==r&&"large"!==r&&(r="small");return{level:t,size:r}}(r)).level+n.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7}return a},h.mostReadable=function(e,t,r){var n,a,i,o,s=null,c=0;a=(r=r||{}).includeFallbackColors,i=r.level,o=r.size;for(var l=0;l<t.length;l++)(n=h.readability(e,t[l]))>c&&(c=n,s=h(t[l]));return h.isReadable(e,s,{level:i,size:o})||!a?s:(r.includeFallbackColors=!1,h.mostReadable(e,["#fff","#000"],r))};var F=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},M=h.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(F);function P(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function R(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"===typeof e&&-1!=e.indexOf("%")}(e);return e=l(t,f(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),a.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function E(e){return l(1,f(0,e))}function T(e){return parseInt(e,16)}function N(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function I(e){return a.round(255*parseFloat(e)).toString(16)}function q(e){return T(e)/255}var Z=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",r="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function z(e){return!!Z.CSS_UNIT.exec(e)}e.exports?e.exports=h:void 0===(n=function(){return h}.call(t,r,t,e))||(e.exports=n)}(Math)}}]);