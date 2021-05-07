(self.webpackChunkinternet_for_all_nyc=self.webpackChunkinternet_for_all_nyc||[]).push([[351],{1531:function(e,t,n){"use strict";n.d(t,{E:function(){return f}});var r=n(2980),a=n(4821),o=n(7294),i=n(8481),l=n(4059);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=o.forwardRef((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,a=e.alt,i=s(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",c({width:n,height:r,ref:t,alt:a},i))})),f=(0,r.forwardRef)((function(e,t){var n=e.fallbackSrc,f=e.fallback,d=e.src,p=e.align,m=e.fit,h=e.loading,v=e.ignoreFallback,y=e.crossOrigin,b=s(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),g=null!=h||v,w=function(e){var t=e.src,n=e.srcSet,r=e.onLoad,a=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,o.useState)("pending"),d=(0,i.Z)(f,2),p=d[0],m=d[1];(0,o.useEffect)((function(){m(t?"loading":"pending")}),[t]);var h=(0,o.useRef)(),v=(0,o.useCallback)((function(){if(t){y();var e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),e.onload=function(e){y(),m("loaded"),null==r||r(e)},e.onerror=function(e){y(),m("failed"),null==a||a(e)},h.current=e}}),[t,c,n,s,r,a]),y=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,l.G)((function(){if(!u)return"loading"===p&&v(),function(){y()}}),[p,v,u]),u?"loaded":p}(c({},e,{ignoreFallback:g})),E=c({ref:t,objectFit:m,objectPosition:p},g?b:(0,a.omit)(b,["onError","onLoad"]));return"loaded"!==w?f||o.createElement(r.chakra.img,c({as:u,className:"chakra-image__placeholder",src:n},E)):o.createElement(r.chakra.img,c({as:u,src:d,crossOrigin:y,loading:h,className:"chakra-image"},E))}));a.__DEV__&&(f.displayName="Image")},7690:function(e,t,n){"use strict";n.d(t,{xu:function(){return c}});var r=n(2980),a=n(4821),o=n(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var c=(0,r.chakra)("div");a.__DEV__&&(c.displayName="Box");var s=(0,r.forwardRef)((function(e,t){var n=e.size,r=e.centerContent,a=void 0===r||r,s=l(e,["size","centerContent"]),u=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(c,i({ref:t,boxSize:n,__css:i({},u,{flexShrink:0,flexGrow:0})},s))}));a.__DEV__&&(s.displayName="Square");var u=(0,r.forwardRef)((function(e,t){var n=e.size,r=l(e,["size"]);return o.createElement(s,i({size:n,ref:t,borderRadius:"9999px"},r))}));a.__DEV__&&(u.displayName="Circle")},7361:function(e,t,n){"use strict";n.d(t,{k:function(){return l}});var r=n(2980),a=n(4821),o=n(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)((function(e,t){var n=e.direction,a=e.align,l=e.justify,c=e.wrap,s=e.basis,u=e.grow,f=e.shrink,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:n,alignItems:a,justifyContent:l,flexWrap:c,flexBasis:s,flexGrow:u,flexShrink:f};return o.createElement(r.chakra.div,i({ref:t,__css:p},d))}));a.__DEV__&&(l.displayName="Flex")},8540:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(2980),a=n(7487),o=n(4821),i=n(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=(0,r.forwardRef)((function(e,t){var n=(0,r.useStyleConfig)("Link",e),c=(0,a.Lr)(e),s=c.className,u=c.isExternal,f=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(c,["className","isExternal"]);return i.createElement(r.chakra.a,l({target:u?"_blank":void 0,rel:u?"noopener noreferrer":void 0,ref:t,className:(0,o.cx)("chakra-link",s)},f,{__css:n}))}));o.__DEV__&&(c.displayName="Link")},7622:function(e,t,n){"use strict";n.d(t,{Ug:function(){return f},Kq:function(){return u},gC:function(){return d}});var r=n(6156),a=n(2980),o=n(4821),i=n(7294),l="& > *:not(style) ~ *:not(style)";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return i.createElement(a.chakra.div,c({className:"chakra-stack__item"},e,{__css:c({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},u=(0,a.forwardRef)((function(e,t){var n=e.isInline,u=e.direction,f=e.align,d=e.justify,p=e.spacing,m=void 0===p?"0.5rem":p,h=e.wrap,v=e.children,y=e.divider,b=e.className,g=e.shouldWrapChildren,w=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),E=n?"row":null!=u?u:"column",k=i.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,a={column:{marginTop:t,marginStart:0},row:{marginStart:t,marginTop:0},"column-reverse":{marginBottom:t,marginEnd:0},"row-reverse":{marginEnd:t,marginBottom:0}};return(0,r.Z)({flexDirection:n},l,(0,o.mapResponsive)(n,(function(e){return a[e]})))}({direction:E,spacing:m})}),[E,m]),x=i.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,o.mapResponsive)(n,(function(e){return r[e]}))}}({spacing:m,direction:E})}),[m,E]),_=!!y,O=!g&&!_,C=(0,o.getValidChildren)(v),T=O?C:C.map((function(e,t){var n=t+1===C.length,r=g?i.createElement(s,{key:t},e):e;if(!_)return r;var a=n?null:i.cloneElement(y,{__css:x});return i.createElement(i.Fragment,{key:t},r,a)})),S=(0,o.cx)("chakra-stack",b);return i.createElement(a.chakra.div,c({ref:t,display:"flex",alignItems:f,justifyContent:d,flexDirection:k.flexDirection,flexWrap:h,className:S,__css:_?{}:(0,r.Z)({},l,k[l])},w),T)}));o.__DEV__&&(u.displayName="Stack");var f=(0,a.forwardRef)((function(e,t){return i.createElement(u,c({align:"center"},e,{direction:"row",ref:t}))}));o.__DEV__&&(f.displayName="HStack");var d=(0,a.forwardRef)((function(e,t){return i.createElement(u,c({align:"center"},e,{direction:"column",ref:t}))}));o.__DEV__&&(d.displayName="VStack")},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},6010:function(e,t,n){"use strict";n.d(t,{Ar:function(){return vt},KM:function(){return m}});var r=n(7294),a=n(8540),o=n(7690),i=n(5444),l=n(2980);"undefined"==typeof window||!window.document||window.document.createElement;function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s={path:r.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},r.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),r.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),r.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},u=(0,l.forwardRef)((function(e,t){var n=e.as,a=e.viewBox,o=e.color,i=void 0===o?"currentColor":o,u=e.focusable,f=void 0!==u&&u,d=e.children,p=e.className,m=e.__css,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),v={ref:t,focusable:f,className:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("chakra-icon",p),__css:c({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i},m)},y=null!=a?a:s.viewBox;if(n&&"string"!=typeof n)return r.createElement(l.chakra.svg,c({as:n},v,h));var b=null!=d?d:s.path;return r.createElement(l.chakra.svg,c({verticalAlign:"middle",viewBox:y},v,h),b)}));function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.d,o=e.path,i=(e.displayName,e.defaultProps),c=void 0===i?{}:i,s=(0,l.forwardRef)((function(e,t){return r.createElement(u,f({ref:t,viewBox:n},c,e),null!=o?o:r.createElement("path",{fill:"currentColor",d:a}))}));return s}var p=d({displayName:"ArrowIcon",viewBox:"0 0 37 16",d:"M36.7071 8.70711C37.0976 8.31658 37.0976 7.68342 36.7071 7.29289L30.3431 0.928932C29.9526 0.538408 29.3195 0.538408 28.9289 0.928932C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM0 9H36V7H0V9Z"}),m=function(e){var t=e.href,n=e.title,l=e.background,c=e.backgroundHover,s=e.color;return r.createElement(a.r,{as:i.rU,to:t,position:"relative",display:"inline-block"},r.createElement(o.xu,{as:"button",variant:"solid",background:l,color:s,borderRadius:"0",zIndex:"1",padding:"10px 18px",position:"relative",minWidth:"159px",fontFamily:"Karla",fontWeight:"700",transition:"transform 0.3s ease",_hover:{backgroundColor:c},_active:{transform:"translate(.3rem, .3rem)"}},n,r.createElement(p,{boxSize:"2em",ml:"0.8em"})),r.createElement("div",{style:{position:"absolute",bottom:"-.3rem",right:"-.3rem",background:"white",width:"100%",height:"100%",border:"1px solid "+l,zIndex:0}}))},h=n(4959),v=n(7495),y=n(5623),b=n(6397),g=function(e){var t=e.children,n=e.colorModeManager,a=e.portalZIndex,o=e.resetCSS,i=void 0===o||o,c=e.theme,s=void 0===c?b.ZP:c;return r.createElement(l.ThemeProvider,{theme:s},r.createElement(y.SG,{colorModeManager:n,options:s.config},i&&r.createElement(h.Z,null),r.createElement(l.GlobalStyle,null),a?r.createElement(v.h,{zIndex:a},t):t))},w=n(7361),E=n(5230),k=n(4821);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var O=(0,l.forwardRef)((function(e,t){var n=e.isExternal,a=e.target,o=e.rel,i=e.className,c=_(e,["isExternal","target","rel","className"]);return r.createElement(l.chakra.a,x({},c,{ref:t,className:(0,k.cx)("chakra-linkbox__overlay",i),rel:n?"noopener noreferrer":o,target:n?"_blank":a,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),C=(0,l.forwardRef)((function(e,t){var n=e.className,a=_(e,["className"]);return r.createElement(l.chakra.div,x({ref:t,position:"relative"},a,{className:(0,k.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),T=n(7622),S=n(1531),A=n(3431),j=n(7487),N={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},I=(0,l.chakra)("span",{baseStyle:N});k.__DEV__&&(I.displayName="VisuallyHidden");var L=(0,l.chakra)("input",{baseStyle:N});k.__DEV__&&(L.displayName="VisuallyHiddenInput");function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var F=(0,A.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),B=(0,l.forwardRef)((function(e,t){var n=(0,l.useStyleConfig)("Spinner",e),a=(0,j.Lr)(e),o=a.label,i=void 0===o?"Loading...":o,c=a.thickness,s=void 0===c?"2px":c,u=a.speed,f=void 0===u?"0.45s":u,d=a.color,p=a.emptyColor,m=void 0===p?"transparent":p,h=a.className,v=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["label","thickness","speed","color","emptyColor","className"]),y=(0,k.cx)("chakra-spinner",h),b=P({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:m,borderLeftColor:m,color:d,animation:F+" "+f+" linear infinite"},n);return r.createElement(l.chakra.div,P({ref:t,__css:b,className:y},v),i&&r.createElement(I,null,i))}));k.__DEV__&&(B.displayName="Spinner");var R=n(8481);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=(0,k.createContext)({strict:!1,name:"ButtonGroupContext"}),H=(0,R.Z)(M,2),W=H[0],z=H[1],V=(0,l.forwardRef)((function(e,t){var n=e.size,a=e.colorScheme,o=e.variant,i=e.className,c=e.spacing,s=void 0===c?"0.5rem":c,u=e.isAttached,f=e.isDisabled,d=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),p=(0,k.cx)("chakra-button__group",i),m=r.useMemo((function(){return{size:n,colorScheme:a,variant:o,isDisabled:f}}),[n,a,o,f]),h={display:"inline-flex"};return h=D({},h,u?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:s}}),r.createElement(W,{value:m},r.createElement(l.chakra.div,D({ref:t,role:"group",__css:h,className:p},d)))}));function U(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}k.__DEV__&&(V.displayName="ButtonGroup");var K=(0,l.forwardRef)((function(e,t){var n,a=z(),o=(0,l.useStyleConfig)("Button",q({},a,e)),i=(0,j.Lr)(e),c=i.isDisabled,s=void 0===c?null==a?void 0:a.isDisabled:c,u=i.isLoading,f=i.isActive,d=i.isFullWidth,p=i.children,m=i.leftIcon,h=i.rightIcon,v=i.loadingText,y=i.iconSpacing,b=void 0===y?"0.5rem":y,g=i.type,w=void 0===g?"button":g,E=i.spinner,x=i.className,_=i.as,O=U(i,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),C=(0,k.mergeWith)({},null!=(n=null==o?void 0:o._focus)?n:{},{zIndex:1}),T=q({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:d?"100%":"auto"},o,!!a&&{_focus:C});return r.createElement(l.chakra.button,q({disabled:s||u,ref:t,as:_,type:_?void 0:w,"data-active":(0,k.dataAttr)(f),"data-loading":(0,k.dataAttr)(u),__css:T,className:(0,k.cx)("chakra-button",x)},O),m&&!u&&r.createElement(Y,{marginEnd:b},m),u&&r.createElement(Z,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:b,label:v},E),u?v||r.createElement(l.chakra.span,{opacity:0},p):p,h&&!u&&r.createElement(Y,{marginStart:b},h))}));k.__DEV__&&(K.displayName="Button");var Y=function(e){var t=e.children,n=e.className,a=U(e,["children","className"]),o=r.isValidElement(t)?r.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,k.cx)("chakra-button__icon",n);return r.createElement(l.chakra.span,q({},a,{className:i}),o)};k.__DEV__&&(Y.displayName="ButtonIcon");var Z=function(e){var t=e.label,n=e.spacing,a=e.children,o=void 0===a?r.createElement(B,{color:"currentColor",width:"1em",height:"1em"}):a,i=e.className,c=e.__css,s=U(e,["label","spacing","children","className","__css"]),u=(0,k.cx)("chakra-button__spinner",i),f=q({display:"flex",alignItems:"center",position:t?"relative":"absolute",marginEnd:t?n:0},c);return r.createElement(l.chakra.div,q({className:u},s,{__css:f}),o)};function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}k.__DEV__&&(Z.displayName="ButtonSpinner");var J=(0,l.forwardRef)((function(e,t){var n=e.icon,a=e.children,o=e.isRound,i=e["aria-label"],l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),c=n||a,s=r.isValidElement(c)?r.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(K,G({padding:"0",borderRadius:o?"full":"md",ref:t,"aria-label":i},l),s)}));k.__DEV__&&(J.displayName="IconButton");var Q=d({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"}),X=n.p+"static/logo-9de468098851198f5ec18525d035243b.png",$=function(){return r.createElement(w.k,{alignItems:"center",bgColor:"purple",px:["24px","64px"],py:["24px","48px"],justifyContent:"space-between"},r.createElement(C,{as:T.Ug},r.createElement(S.E,{src:X,boxSize:"44px"}),r.createElement(O,{as:i.rU,to:"/",color:"white",fontFamily:"Helvetica",fontSize:[24,32],fontWeight:"bold",_hover:{textDecoration:"underline",textDecorationColor:"orange"}},"Internet for All")),r.createElement(T.Ug,{spacing:"24px",display:["none","block"]},r.createElement(a.r,{as:i.rU,to:"/principles",variant:"navbar"},"Principles"),r.createElement(a.r,{as:i.rU,to:"/coalition-partners",variant:"navbar"},"Coalition Partners"),r.createElement(a.r,{as:i.rU,to:"/take-action",variant:"navbar"},"Take Action")),r.createElement(E.Menu,null,r.createElement(E.MenuButton,{backgroundColor:"purple",as:J,icon:r.createElement(Q,{color:"white"}),display:["block","none"]}),r.createElement(E.MenuList,{display:["block","none"],zIndex:2},r.createElement(a.r,{as:i.rU,to:"/principles",variant:"navmenu"},r.createElement(E.MenuItem,null,"Principles")),r.createElement(a.r,{as:i.rU,to:"/coalition-partners",variant:"navmenu"},r.createElement(E.MenuItem,null,"Coalition Partners")),r.createElement(a.r,{as:i.rU,to:"/take-action",variant:"navmenu"},r.createElement(E.MenuItem,null,"Take Action")))))};var ee,te,ne,re,ae,oe,ie=(ee={colors:{blue:"#2E70FF",purple:"#4000B4",aqua:"#5CCDC1",orange:"#FFB803",orangeLight:"#FFBC35",offWhite:"#FAFAFA",offBlack:"#222222"},fonts:{body:"Karla",heading:"Inconsolata",Helvetica:"HelveticaNeueCyr"},components:{Link:{variants:{body:{color:"purple",textDecoration:"underline",textDecorationColor:"purple"},navbar:{color:"white",_hover:{textDecoration:"underline",textDecorationColor:"orange"}},navmenu:{_hover:{textDecoration:"none"}}}}}},void 0===te&&(te=b.ZP),(0,k.mergeWith)({},te,ee,(function e(t,n,r,a){if(((0,k.isFunction)(t)||(0,k.isFunction)(n))&&Object.prototype.hasOwnProperty.call(a,r))return function(){var r=(0,k.isFunction)(t)?t.apply(void 0,arguments):t,a=(0,k.isFunction)(n)?n.apply(void 0,arguments):n;return(0,k.mergeWith)({},r,a,e)}}))),le=n(5697),ce=n.n(le),se=n(4839),ue=n.n(se),fe=n(2993),de=n.n(fe),pe=n(6494),me=n.n(pe),he="bodyAttributes",ve="htmlAttributes",ye="titleAttributes",be={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},ge=(Object.keys(be).map((function(e){return be[e]})),"charset"),we="cssText",Ee="href",ke="http-equiv",xe="innerHTML",_e="itemprop",Oe="name",Ce="property",Te="rel",Se="src",Ae="target",je={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ne="defaultTitle",Ie="defer",Le="encodeSpecialCharacters",Pe="onChangeClientState",Fe="titleTemplate",Be=Object.keys(je).reduce((function(e,t){return e[je[t]]=t,e}),{}),Re=[be.NOSCRIPT,be.SCRIPT,be.STYLE],De="data-react-helmet",Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},We=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Ue=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},qe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ke=function(e){var t=Qe(e,be.TITLE),n=Qe(e,Fe);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Qe(e,Ne);return t||r||void 0},Ye=function(e){return Qe(e,Pe)||function(){}},Ze=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ze({},e,t)}),{})},Ge=function(e,t){return t.filter((function(e){return void 0!==e[be.BASE]})).map((function(e){return e[be.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Je=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&nt("Helmet: "+e+' should be of type "Array". Instead found type "'+Me(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===Te&&"canonical"===e[n].toLowerCase()||c===Te&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==xe&&l!==we&&l!==_e||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=me()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Qe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Xe=(ne=Date.now(),function(e){var t=Date.now();t-ne>16?(ne=t,e(t)):setTimeout((function(){Xe(e)}),0)}),$e=function(e){return clearTimeout(e)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Xe:n.g.requestAnimationFrame||Xe,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$e:n.g.cancelAnimationFrame||$e,nt=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},rt=null,at=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;lt(be.BODY,r),lt(be.HTML,a),it(f,d);var p={baseTag:ct(be.BASE,n),linkTags:ct(be.LINK,o),metaTags:ct(be.META,i),noscriptTags:ct(be.NOSCRIPT,l),scriptTags:ct(be.SCRIPT,s),styleTags:ct(be.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},ot=function(e){return Array.isArray(e)?e.join(""):e},it=function(e,t){void 0!==e&&document.title!==e&&(document.title=ot(e)),lt(be.TITLE,t)},lt=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(De),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(De):n.getAttribute(De)!==i.join(",")&&n.setAttribute(De,i.join(","))}},ct=function(e,t){var n=document.head||document.querySelector(be.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===xe)n.innerHTML=t.innerHTML;else if(r===we)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(De,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},st=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ut=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[je[n]||n]=e[n],t}),t)},ft=function(e,t,n){switch(e){case be.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[De]=!0,o=ut(n,a),[r.createElement(be.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=st(n),o=ot(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+qe(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+qe(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case he:case ve:return{toComponent:function(){return ut(t)},toString:function(){return st(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[De]=!0,a);return Object.keys(t).forEach((function(e){var n=je[e]||e;if(n===xe||n===we){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===xe||e===we)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+qe(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===Re.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},dt=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:ft(be.BASE,t,r),bodyAttributes:ft(he,n,r),htmlAttributes:ft(ve,a,r),link:ft(be.LINK,o,r),meta:ft(be.META,i,r),noscript:ft(be.NOSCRIPT,l,r),script:ft(be.SCRIPT,c,r),style:ft(be.STYLE,s,r),title:ft(be.TITLE,{title:f,titleAttributes:d},r)}},pt=ue()((function(e){return{baseTag:Ge([Ee,Ae],e),bodyAttributes:Ze(he,e),defer:Qe(e,Ie),encode:Qe(e,Le),htmlAttributes:Ze(ve,e),linkTags:Je(be.LINK,[Te,Ee],e),metaTags:Je(be.META,[Oe,ge,ke,Ce,_e],e),noscriptTags:Je(be.NOSCRIPT,[xe],e),onChangeClientState:Ye(e),scriptTags:Je(be.SCRIPT,[Se,xe],e),styleTags:Je(be.STYLE,[we],e),title:Ke(e),titleAttributes:Ze(ye,e)}}),(function(e){rt&&tt(rt),e.defer?rt=et((function(){at(e,(function(){rt=null}))})):(at(e),rt=null)}),dt)((function(){return null})),mt=(re=pt,oe=ae=function(e){function t(){return He(this,t),Ue(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!de()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case be.SCRIPT:case be.NOSCRIPT:return{innerHTML:t};case be.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return ze({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ze({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case be.TITLE:return ze({},a,((t={})[r.type]=i,t.titleAttributes=ze({},o),t));case be.BODY:return ze({},a,{bodyAttributes:ze({},o)});case be.HTML:return ze({},a,{htmlAttributes:ze({},o)})}return ze({},a,((n={})[r.type]=ze({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ze({},t);return Object.keys(e).forEach((function(t){var r;n=ze({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Be[n]||n]=e[n],t}),t)}(Ve(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case be.LINK:case be.META:case be.NOSCRIPT:case be.SCRIPT:case be.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Ve(e,["children"]),a=ze({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(re,a)},We(t,null,[{key:"canUseDOM",set:function(e){re.canUseDOM=e}}]),t}(r.Component),ae.propTypes={base:ce().object,bodyAttributes:ce().object,children:ce().oneOfType([ce().arrayOf(ce().node),ce().node]),defaultTitle:ce().string,defer:ce().bool,encodeSpecialCharacters:ce().bool,htmlAttributes:ce().object,link:ce().arrayOf(ce().object),meta:ce().arrayOf(ce().object),noscript:ce().arrayOf(ce().object),onChangeClientState:ce().func,script:ce().arrayOf(ce().object),style:ce().arrayOf(ce().object),title:ce().string,titleAttributes:ce().object,titleTemplate:ce().string},ae.defaultProps={defer:!0,encodeSpecialCharacters:!0},ae.peek=re.peek,ae.rewind=function(){var e=re.rewind();return e||(e=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},oe);mt.renderStatic=mt.rewind;var ht=function(){return r.createElement(A.xB,{styles:"\n      @font-face {\n        font-family: 'Karla';\n        font-style: normal;\n        font-weight: normal;\n        src: url('../../../Fonts/karla-v15-latin-regular.eot');\n        src:\n            url('../../../Fonts/karla-v15-latin-regular.eot?#iefix') format('embedded-opentype'),\n            url('../../../Fonts/karla-v15-latin-regular.woff2') format('woff2'),\n            url('../../../Fonts/karla-v15-latin-regular.woff') format('woff'),\n            url('../../../Fonts/karla-v15-latin-regular.ttf') format('truetype');\n      }\n      @font-face {\n        font-family: 'Inconsolata';\n        font-style: normal;\n        font-weight: 500;\n        src: url('../../../Fonts/inconsolata-v21-latin-500.eot');\n        src:\n            url('../../../Fonts/inconsolata-v21-latin-500.eot?#iefix') format('embedded-opentype'),\n            url('../../../Fonts/inconsolata-v21-latin-500.woff2') format('woff2'),\n            url('../../../Fonts/inconsolata-v21-latin-500.woff') format('woff'),\n            url('../../../Fonts/inconsolata-v21-latin-500.ttf') format('truetype');\n      }\n      @font-face {\n        font-family: 'Inconsolata';\n        font-style: normal;\n        font-weight: 700;\n        src: url('../../../Fonts/Inconsolata-Black.eot');\n        src:\n            url('../../../Fonts/Inconsolata-Black.eot?#iefix') format('embedded-opentype'),\n            url('../../../Fonts/Inconsolata-Black.woff2') format('woff2'),\n            url('../../../Fonts/Inconsolata-Black.woff') format('woff'),\n            url('../../../Fonts/Inconsolata-Black.ttf') format('truetype');\n      }\n      @font-face {\n        font-family: 'HelveticaNeueCyr';\n        font-style: normal;\n        font-weight: bold;\n        src: url('../../../Fonts/HelveticaNeueCyr-Bold.eot');\n        src:\n            url('../../../Fonts/HelveticaNeueCyr-Bold.eot?#iefix') format('embedded-opentype'),\n            url('../../../Fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),\n            url('../../../Fonts/HelveticaNeueCyr-Bold.woff') format('woff'),\n            url('../../../Fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');\n      }\n      "})},vt=function(e){var t=e.children,n=e.title,a=e.padding;return r.createElement(r.Fragment,null,r.createElement(mt,{title:n}),r.createElement(g,{theme:ie},r.createElement(ht,null),r.createElement(w.k,{minHeight:"100vh",direction:"column"},r.createElement($,null),r.createElement(w.k,{flex:"1",direction:"column",p:a,align:"center"},t))))};vt.defaultProps={padding:["24px","64px"]}}}]);
//# sourceMappingURL=commons-2fff1010c39be726584e.js.map