(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[170],{9170:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(2791),a=n(9434),o=n(3504),i=n(6871),l=n(5614),c=n(8152),s=n(5112),u=n(184);var f=function(e){var t=e.id,n=e.title,a=e.imgSrc,i=e.rating,l=(0,r.useState)(!1),f=(0,c.Z)(l,2),d=f[0],v=f[1];return(0,r.useEffect)((function(){}),[d]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center col ".concat(d&&"bg-dark rounded-3"),onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:[(0,u.jsxs)(o.rU,{to:"/movie-app/movie/".concat(t),className:"text-decoration-none",children:[(0,u.jsx)("div",{className:"movie-card-container",children:(0,u.jsx)("img",{className:"movie-card-img rounded-3",src:"https://image.tmdb.org/t/p/w780".concat(a),alt:n})}),(0,u.jsx)("h6",{className:"movie-card-title ".concat(d&&"text-white"),children:n})]}),(0,u.jsx)(s.Z,{count:5,value:i/2,size:24,isHalf:!0,activeColor:"#000"}),","]})})};var d=function(e){var t=e.children;return(0,u.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mt-5",children:t})};var v=function(){var e,t=(0,a.v9)((function(e){return e.search}));return(0,u.jsx)("div",{className:"container",children:"loading"===t?(0,u.jsx)("p",{children:"loading"}):0===t.results.length?(0,u.jsx)("h3",{children:"There is no Movie With that name"}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{children:null===(e=t.results)||void 0===e?void 0:e.map((function(e){return(0,u.jsx)(f,{id:e.id,imgSrc:e.poster_path,rating:e.vote_average,title:e.title},e.id)}))})})})},p=n(6678);var h=function(e){var t,n=e.query,c=(0,i.UO)().id,s=(0,a.v9)((function(e){return e.popular})),h=(0,a.I0)();return(0,r.useEffect)((function(){h((0,p.L)(c))}),[h,c,n]),""!==n?(0,u.jsx)(v,{}):(0,u.jsx)("div",{className:"container",children:"loading"===s?(0,u.jsx)("p",{children:"loading"}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{children:null===s||void 0===s||null===(t=s.results)||void 0===t?void 0:t.map((function(e){return(0,u.jsx)(f,{id:e.id,imgSrc:e.poster_path,rating:e.vote_average,title:e.title},e.id)}))}),(0,u.jsxs)("div",{className:"d-flex justify-content-".concat("1"===c?"end":"between"," fixed-bottom container mb-2"),children:[c>1&&(0,u.jsx)(o.rU,{to:"/movie-app/popular/".concat(+c-1),children:(0,u.jsxs)(l.Z,{btnClassName:"btn btn-dark",children:["Page ",+c-1]})}),(0,u.jsx)(o.rU,{to:"/movie-app/popular/".concat(+c+1),children:(0,u.jsxs)(l.Z,{btnClassName:"btn btn-dark",children:["Page ",+c+1]})})]})]})})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),n=r(t,2),o=n[0],i=n[1],l=(0,a.useState)(e.size),c=r(l,2),s=c[0],u=c[1],f=(0,a.useState)(e.char),d=r(f,2),v=d[0],p=d[1],h=(0,a.useState)(e.color),m=r(h,2),y=m[0],g=m[1],b=(0,a.useState)(e.activeColor),x=r(b,2),S=x[0],j=x[1],I=(0,a.useState)(e.isHalf),w=r(I,2),_=w[0],C=w[1],M=(0,a.useState)(e.edit),N=r(M,2),k=N[0],O=N[1],H=(0,a.useState)(e.emptyIcon),E=r(H,2),T=E[0],A=E[1],P=(0,a.useState)(e.halfIcon),z=r(P,2),L=z[0],U=z[1],R=(0,a.useState)(e.filledIcon),D=r(R,2),Z=D[0],q=D[1],F=(0,a.useState)(e.a11y),W=r(F,2),B=W[0],K=W[1];return[{count:o,size:s,char:v,color:y,activeColor:S,isHalf:_,edit:k,emptyIcon:T,halfIcon:L,filledIcon:Z,a11y:B},function(e){i(e.count),u(e.size),p(e.char),g(e.color),j(e.activeColor),C(e.isHalf),O(e.edit),A(e.emptyIcon),U(e.halfIcon),q(e.filledIcon),K(e.a11y)}]};var a=n(2791)},5112:function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(2791),o=s(a),i=s(n(2007)),l=s(n(2198)),c=s(n(9059));function s(e){return e&&e.__esModule?e:{default:e}}var u={overflow:"hidden",position:"relative"};function f(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function d(e){var t=(0,a.useState)(""),n=r(t,2),i=n[0],s=n[1],d=(0,a.useState)(0),v=r(d,2),p=v[0],h=v[1],m=(0,a.useState)([]),y=r(m,2),g=y[0],b=y[1],x=(0,a.useState)(!1),S=r(x,2),j=S[0],I=S[1],w=(0,l.default)(e),_=r(w,2),C=_[0],M=_[1],N=(0,a.useState)(0),k=r(N,2),O=k[0],H=k[1],E=(0,a.useState)(!1),T=r(E,2),A=T[0],P=T[1],z=(0,a.useState)(""),L=r(z,2),U=L[0],R=L[1];function D(e){"undefined"===typeof e&&(e=C.isHalf?Math.floor(p):Math.round(p));for(var t=[],n=0;n<C.count;n++)t.push({active:n<=e-1});return t}function Z(e){if(C.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(C.isHalf){var n=q(e);P(n),n&&(t+=1),H(t)}else t+=1;!function(e){var t=g.filter((function(e){return e.active}));e!==t.length&&b(D(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function F(){C.edit&&(W(p),b(D()))}function W(e){C.isHalf&&(P(function(e){return e%1===0}(e)),H(Math.floor(e)))}function B(e){if(C.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(C.isHalf){var r=q(e);P(r),r&&(t+=1),n=r?t:t+.5,H(t)}else n=t+=1;K(n)}}function K(t){t!==p&&(b(D(t)),h(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,n;!function(){var t="react-stars";R(e.classNames+" "+t)}(),t=e.value,n=e.count,h(t<0||t>n?0:t),b(D(e.value)),M(e),s((Math.random()+"").replace(".","")),I(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),H(Math.floor(e.value)),P(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},o.default.createElement("div",{tabIndex:C.a11y&&C.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(C.a11y||C.edit){var t=e.key,n=p,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=C.count&&(n=r):("ArrowUp"===t||"ArrowRight"===t)&&n<C.count?(e.preventDefault(),n+=C.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=C.isHalf?.5:1),W(n),K(n)}},className:U,style:u},C.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:j?(e=C.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):f(C.activeColor,i)}});var e}(),g.map((function(e,t){return o.default.createElement(c.default,{key:t,index:t,active:e.active,config:C,onMouseOver:Z,onMouseLeave:F,onClick:B,halfStarHidden:A,halfStarAt:O,isUsingIcons:j,uniqueness:i})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},p)))}d.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},d.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.Z=d},9059:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.index,n=e.active,a=e.config,o=e.onMouseOver,c=e.onMouseLeave,s=e.onClick,u=e.halfStarHidden,f=e.halfStarAt,d=e.isUsingIcons,v=e.uniqueness,p=a.color,h=a.activeColor,m=a.size,y=a.char,g=a.isHalf,b=a.edit,x=a.halfIcon,S=a.emptyIcon,j=a.filledIcon,I="",w=!1;g&&!u&&f===t&&(I=d?"react-stars-half":"react-stars-"+v,w=!0);var _=r({},l,{color:n?h:p,cursor:b?"pointer":"default",fontSize:m+"px"});return i.default.createElement("span",{className:I,style:_,key:t,"data-index":t,"data-forhalf":j?t:y,onMouseOver:o,onMouseMove:o,onMouseLeave:c,onClick:s},d?n?j:!n&&w?x:S:y)};var a,o=n(2791),i=(a=o)&&a.__esModule?a:{default:a};var l={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}}]);
//# sourceMappingURL=170.8ed27f24.chunk.js.map