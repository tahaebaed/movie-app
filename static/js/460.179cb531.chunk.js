"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[460],{1460:function(e,a,n){n.r(a);var s=n(2791),t=n(3539),i=n(4349),o=n(9434),l=n(6871),r=n(3504),c=n(5614),u=n(1716),d=n(7649),p=n(9900),m=n(6678),g=n(4718),x=n(184);a.default=function(e){var a,n=e.query,f=(0,l.UO)().id,h=(0,s.useContext)(d.R).locale,v=(0,t.Z)(),b=(0,o.v9)((function(e){return e.popular})),j=(0,o.I0)(),Z=(0,g.Z)({QueryName:"popular",watchers:[f,h],refetchOnWindowFocus:!1,axios:!0,method:"GET",url:"movie/popular?api_key=6acbd1e77111f3ead9c9bba49d78ba9f&language=".concat(h),params:{page:f},onSuccess:function(e){return j((0,m.dK)(e))}}).isFetching;return""!==n?(0,x.jsx)(l.Fg,{to:"/search/1",replace:!0}):(0,x.jsx)("div",{className:"container",children:Z||b===v.messages.loading?(0,x.jsx)("p",{children:(0,x.jsx)(i.Z,{id:"loading",defaultMessage:"loading"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z,{children:null===b||void 0===b||null===(a=b.results)||void 0===a?void 0:a.map((function(e){return(0,x.jsx)(u.Z,{movie:e},e.id)}))}),(0,x.jsxs)("div",{className:"d-flex justify-content-".concat("1"===f?"end":"between"," fixed-bottom container mb-2"),children:[f>1&&(0,x.jsx)(r.rU,{to:"/popular/".concat(+f-1),children:(0,x.jsx)(c.Z,{btnClassName:"btn btn-dark",children:(0,x.jsx)(i.Z,{id:"paginationBtn",defaultMessage:"page {num}",values:{num:+f-1}})})}),f<(null===b||void 0===b?void 0:b.total_pages)&&(0,x.jsx)(r.rU,{to:"/popular/".concat(+f+1),children:(0,x.jsx)(c.Z,{btnClassName:"btn btn-dark",children:(0,x.jsx)(i.Z,{id:"paginationBtn",defaultMessage:"page {num}",values:{num:+f+1}})})})]})]})})}}}]);
//# sourceMappingURL=460.179cb531.chunk.js.map