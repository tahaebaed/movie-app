"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[645],{7645:function(e,s,a){a.r(s);var t=a(885),n=a(2791),l=a(5112),r=a(6871),i=a(9126),c=a(6355),d=a(5614),m=a(1907),o=a(184);s.default=function(){var e,s=(0,r.UO)().id,a=(0,n.useState)(!1),f=(0,t.Z)(a,2),h=f[0],u=f[1],x=(0,n.useState)(!1),p=(0,t.Z)(x,2),b=p[0],j=p[1],v=(0,r.s0)();return(0,n.useEffect)((function(){m.u.request({method:"GET",url:"movie/".concat(s,"?api_key=6acbd1e77111f3ead9c9bba49d78ba9f")}).then((function(e){return u(e.data)})),m.u.request({method:"GET",url:"movie/".concat(s,"/credits?api_key=6acbd1e77111f3ead9c9bba49d78ba9f")}).then((function(e){return j(e.data)}))}),[s]),h&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"row row-cols-lg-2 row-cols-md-1 row-cols-1 mt-3",children:[(0,o.jsx)("div",{className:"col",children:(0,o.jsx)("img",{className:"movie-info-img rounded-3",src:"https://image.tmdb.org/t/p/w780".concat(h.backdrop_path),alt:h.title})}),(0,o.jsxs)("div",{className:"col text-start",children:[(0,o.jsx)("h2",{className:"fw-lighter",children:h.title}),(0,o.jsx)("h3",{className:"fs-5 fw-bold",children:h.tagline}),(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center flex-column flex-md-column flex-lg-row",children:[(0,o.jsx)(l.Z,{count:5,value:h.vote_average/2,size:24,activeColor:"#000"}),(0,o.jsx)("p",{className:"ms-3 my-auto",children:h.vote_average})]}),(0,o.jsxs)("div",{className:"movie-info-date d-flex align-items-center",children:[null===h||void 0===h||null===(e=h.spoken_languages)||void 0===e?void 0:e.map((function(e){return"".concat(e.name.toUpperCase(),"/")})),h.runtime," min/",h.release_date.match(/\d+/)]})]}),(0,o.jsx)("h2",{className:"mt-3 fs-5",children:" the genres"}),(0,o.jsx)("ul",{className:"d-flex fs-6 p-0",children:h.genres.map((function(e){return(0,o.jsxs)("li",{className:"d-flex align-items-center mt-2",children:[(0,o.jsx)(i.q5W,{className:"ms-2"}),(0,o.jsx)("p",{className:"m-0 ms-2",children:e.name})]},e.id)}))}),(0,o.jsx)("h2",{className:"mt-3 fs-5",children:" THE SYNOPSIS"}),(0,o.jsx)("p",{className:"fs-6 fw-lighter",children:h.overview}),(0,o.jsx)("h2",{className:"mt-3 fs-5",children:" THE CAST"}),(0,o.jsx)("div",{className:"d-flex",children:b&&b.cast.filter((function(e,s){return s<5})).map((function(e){return(0,o.jsx)("img",{className:"movie-cast-info-img me-4",src:"https://image.tmdb.org/t/p/w780".concat(e.profile_path),alt:e.name},e.id)}))}),(0,o.jsxs)("div",{className:"d-flex justify-content-between my-4",children:[(0,o.jsx)("a",{href:h.homepage,target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(d.Z,{btnClassName:"btn btn-outline-dark rounded-pill me-0",children:["Website ",(0,o.jsx)(i.Gzp,{})]})}),(0,o.jsx)("a",{href:"https://www.imdb.com/title/".concat(h.imdb_id,"/?ref_=hm_fanfav_tt_i_1_pd_fp1"),target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(d.Z,{btnClassName:"btn btn-outline-dark rounded-pill me-0",children:["imdb ",(0,o.jsx)(c.rM6,{})]})}),(0,o.jsx)("a",{href:"https://www.imdb.com/title/".concat(h.imdb_id,"/?ref_=hm_fanfav_tt_i_1_pd_fp1"),target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(d.Z,{btnClassName:"btn btn-outline-dark rounded-pill me-0",children:["Trailer ",(0,o.jsx)(c.gmG,{})]})}),(0,o.jsxs)(d.Z,{btnClassName:"btn btn-dark rounded-pill me-0",handleClick:function(){return v(-1)},children:[(0,o.jsx)(i.i1r,{})," Back"]})]})]})]})})}}}]);
//# sourceMappingURL=645.bfb68220.chunk.js.map