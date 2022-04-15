(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6322)}])},6322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),a=n(4942),c=n(7462),l=n(7294),s=n(4184),i=n.n(s),o=n(7435),d=n(1975),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){var t=e.prefixCls,n=e.className,r=e.hoverable,s=void 0===r||r,o=p(e,["prefixCls","className","hoverable"]);return l.createElement(d.C,null,(function(e){var r=(0,e.getPrefixCls)("card",t),d=i()("".concat(r,"-grid"),n,(0,a.Z)({},"".concat(r,"-grid-hoverable"),s));return l.createElement("div",(0,c.Z)({},o,{className:d}))}))},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e){return l.createElement(d.C,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,a=e.className,s=e.avatar,o=e.title,d=e.description,p=h(e,["prefixCls","className","avatar","title","description"]),m=n("card",r),u=i()("".concat(m,"-meta"),a),x=s?l.createElement("div",{className:"".concat(m,"-meta-avatar")},s):null,g=o?l.createElement("div",{className:"".concat(m,"-meta-title")},o):null,b=d?l.createElement("div",{className:"".concat(m,"-meta-description")},d):null,v=g||b?l.createElement("div",{className:"".concat(m,"-meta-detail")},g,b):null;return l.createElement("div",(0,c.Z)({},p,{className:u}),x,v)}))},x=n(1884),g=n(1230),b=n(5746),v=n(7647),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var j=function(e){var t,n,r,s=l.useContext(d.E_),p=s.getPrefixCls,h=s.direction,u=l.useContext(v.Z),j=e.prefixCls,y=e.className,w=e.extra,E=e.headStyle,Z=void 0===E?{}:E,O=e.bodyStyle,C=void 0===O?{}:O,k=e.title,N=e.loading,_=e.bordered,P=void 0===_||_,S=e.size,T=e.type,q=e.cover,K=e.actions,z=e.tabList,A=e.children,I=e.activeTabKey,L=e.defaultActiveTabKey,B=e.tabBarExtraContent,G=e.hoverable,M=e.tabProps,R=void 0===M?{}:M,D=f(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),X=p("card",j),Y=0===C.padding||"0px"===C.padding?{padding:24}:void 0,$=l.createElement("div",{className:"".concat(X,"-loading-block")}),F=l.createElement("div",{className:"".concat(X,"-loading-content"),style:Y},l.createElement(g.Z,{gutter:8},l.createElement(b.Z,{span:22},$)),l.createElement(g.Z,{gutter:8},l.createElement(b.Z,{span:8},$),l.createElement(b.Z,{span:15},$)),l.createElement(g.Z,{gutter:8},l.createElement(b.Z,{span:6},$),l.createElement(b.Z,{span:18},$)),l.createElement(g.Z,{gutter:8},l.createElement(b.Z,{span:13},$),l.createElement(b.Z,{span:9},$)),l.createElement(g.Z,{gutter:8},l.createElement(b.Z,{span:4},$),l.createElement(b.Z,{span:3},$),l.createElement(b.Z,{span:16},$))),H=void 0!==I,V=(0,c.Z)((0,c.Z)({},R),(t={},(0,a.Z)(t,H?"activeKey":"defaultActiveKey",H?I:L),(0,a.Z)(t,"tabBarExtraContent",B),t)),W=z&&z.length?l.createElement(x.Z,(0,c.Z)({size:"large"},V,{className:"".concat(X,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),z.map((function(e){return l.createElement(x.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(k||w||W)&&(r=l.createElement("div",{className:"".concat(X,"-head"),style:Z},l.createElement("div",{className:"".concat(X,"-head-wrapper")},k&&l.createElement("div",{className:"".concat(X,"-head-title")},k),w&&l.createElement("div",{className:"".concat(X,"-extra")},w)),W));var J=q?l.createElement("div",{className:"".concat(X,"-cover")},q):null,Q=l.createElement("div",{className:"".concat(X,"-body"),style:C},N?F:A),U=K&&K.length?l.createElement("ul",{className:"".concat(X,"-actions")},function(e){return e.map((function(t,n){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},l.createElement("span",null,t))}))}(K)):null,ee=(0,o.Z)(D,["onTabChange"]),te=S||u,ne=i()(X,(n={},(0,a.Z)(n,"".concat(X,"-loading"),N),(0,a.Z)(n,"".concat(X,"-bordered"),P),(0,a.Z)(n,"".concat(X,"-hoverable"),G),(0,a.Z)(n,"".concat(X,"-contain-grid"),function(){var t;return l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===m&&(t=!0)})),t}()),(0,a.Z)(n,"".concat(X,"-contain-tabs"),z&&z.length),(0,a.Z)(n,"".concat(X,"-").concat(te),te),(0,a.Z)(n,"".concat(X,"-type-").concat(T),!!T),(0,a.Z)(n,"".concat(X,"-rtl"),"rtl"===h),n),y);return l.createElement("div",(0,c.Z)({},ee,{className:ne}),r,J,Q,U)};j.Grid=m,j.Meta=u;var y=j,w=n(7685),E=n(6330),Z=n.n(E),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=function(e){var t,n=e.prefixCls,r=e.className,s=e.checked,o=e.onChange,p=e.onClick,m=O(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,l.useContext(d.E_).getPrefixCls)("tag",n),u=i()(h,(t={},(0,a.Z)(t,"".concat(h,"-checkable"),!0),(0,a.Z)(t,"".concat(h,"-checkable-checked"),s),t),r);return l.createElement("span",(0,c.Z)({},m,{className:u,onClick:function(e){o&&o(!s),p&&p(e)}}))},k=n(8787),N=n(7202),_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P=new RegExp("^(".concat(k.Y.join("|"),")(-inverse)?$")),S=new RegExp("^(".concat(k.E.join("|"),")$")),T=function(e,t){var n,r=e.prefixCls,s=e.className,p=e.style,m=e.children,h=e.icon,u=e.color,x=e.onClose,g=e.closeIcon,b=e.closable,v=void 0!==b&&b,f=_(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=l.useContext(d.E_),y=j.getPrefixCls,E=j.direction,O=l.useState(!0),C=(0,w.Z)(O,2),k=C[0],T=C[1];l.useEffect((function(){"visible"in f&&T(f.visible)}),[f.visible]);var q=function(){return!!u&&(P.test(u)||S.test(u))},K=(0,c.Z)({backgroundColor:u&&!q()?u:void 0},p),z=q(),A=y("tag",r),I=i()(A,(n={},(0,a.Z)(n,"".concat(A,"-").concat(u),z),(0,a.Z)(n,"".concat(A,"-has-color"),u&&!z),(0,a.Z)(n,"".concat(A,"-hidden"),!k),(0,a.Z)(n,"".concat(A,"-rtl"),"rtl"===E),n),s),L=function(e){e.stopPropagation(),x&&x(e),e.defaultPrevented||"visible"in f||T(!1)},B="onClick"in f||m&&"a"===m.type,G=(0,o.Z)(f,["visible"]),M=h||null,R=M?l.createElement(l.Fragment,null,M,l.createElement("span",null,m)):m,D=l.createElement("span",(0,c.Z)({},G,{ref:t,className:I,style:K}),R,v?g?l.createElement("span",{className:"".concat(A,"-close-icon"),onClick:L},g):l.createElement(Z(),{className:"".concat(A,"-close-icon"),onClick:L}):null);return B?l.createElement(N.Z,null,D):D},q=l.forwardRef(T);q.displayName="Tag",q.CheckableTag=C;var K=q,z=n(8250),A=n(7049),I=(n(5062),n(1664)),L=z.Z.Title,B=z.Z.Paragraph,G=y.Meta;function M(){return(0,r.jsxs)("div",{style:{marginTop:"2%"},children:[(0,r.jsxs)("section",{children:[(0,r.jsx)(L,{style:{textAlign:"center"},children:"Welcome to StringLand Tech"}),(0,r.jsx)(B,{style:{textAlign:"center",fontSize:"x-large"},children:"StringLand Tech has various kinds of useful office/study tools, and fun games."}),(0,r.jsxs)(B,{style:{textAlign:"center",fontSize:"x-large"},children:["Learn more about StringLand Tech from ",(0,r.jsx)("a",{href:"https://stringlandtech.blogspot.com",target:"_blank",rel:"noreferrer",children:"Blog"})]}),(0,r.jsx)(B,{style:{textAlign:"center",fontSize:"x-large"},children:"Let us click the key features cards below and start the jouney!"})]}),(0,r.jsx)("br",{}),(0,r.jsx)(A.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(K,{color:"black",children:"key features"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsxs)(g.Z,{gutter:10,children:[(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(I.default,{href:"/textedit",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech simple text editor",src:"https://www.linkpicture.com/q/stringland-textop.svg"}),children:(0,r.jsx)(G,{title:"Text Editor",description:"Support text search, replace and conversion"})})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/math_operations/math_base",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech calculator",src:"https://www.linkpicture.com/q/stringland-math.svg"}),children:(0,r.jsx)(G,{title:"Math Opertion",description:"Math base/unit conversion and logic calculator"})})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/mis_operations/convert_timezone",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech time conversion",src:"https://www.linkpicture.com/q/stringland-clock.svg"}),children:(0,r.jsx)(G,{title:"Time Operation",description:"time stamp/date/unit conversion"})})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/mis_operations/base_string",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech string conversion/coding",src:"https://www.linkpicture.com/q/stringland-strop_1.svg"}),children:(0,r.jsx)(G,{title:"String Operation",description:"string encode/decode, pasword generation and etc"})})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/security/generate_checksum",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech security operation",src:"https://www.linkpicture.com/q/stringland-security-v2.svg"}),children:(0,r.jsx)(G,{title:"Security Operation",description:"checksum and password generation"})})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/mis_operations/convert_color",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech color code conversion",src:"https://www.linkpicture.com/q/stringland-color.svg"}),children:(0,r.jsx)(G,{title:"Color Operation",description:"Conversion between different color codes, like RGB, HSV, CMYK and etc"})})})})]})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(A.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(K,{color:"black",children:"games"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsx)(g.Z,{gutter:10,children:(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)("a",{href:"https://stringland.github.io/web/#/guess_number_game",children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"stringland tech guess number game",src:"https://www.linkpicture.com/q/stringland-guessnum_2.svg"}),children:(0,r.jsx)(G,{title:"Guess Number Game",description:"Classic Bulls and Cows Game"})})})})})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(A.Z,{orientation:"left"}),(0,r.jsxs)("section",{children:[(0,r.jsx)(K,{color:"black",children:"upcoming features"}),(0,r.jsx)("div",{className:"site-card-wrapper",style:{marginTop:"1%"},children:(0,r.jsxs)(g.Z,{gutter:10,children:[(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"example",src:"https://www.linkpicture.com/q/stringland-sdk_1.svg"}),children:(0,r.jsx)(G,{title:"SDK",description:"SDK for multiple programming languages"})})}),(0,r.jsx)(b.Z,{xs:16,xl:8,xxl:4,children:(0,r.jsx)(y,{hoverable:!0,cover:(0,r.jsx)("img",{alt:"example",src:"https://www.linkpicture.com/q/stringland-game_1.svg"}),children:(0,r.jsx)(G,{title:"Game Center",description:"More simple casual games"})})})]})})]}),(0,r.jsx)("br",{})]})}}},function(e){e.O(0,[250,474,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);