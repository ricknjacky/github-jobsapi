(this["webpackJsonpgithubapi--fem"]=this["webpackJsonpgithubapi--fem"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.66810c3d.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-sun.20ea2dcb.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-moon.a0697094.svg"},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/github-black.7be5b44b.svg"},function(e,t,a){e.exports=a.p+"static/media/github-purple.baece89f.svg"},function(e,t,a){e.exports=a.p+"static/media/Magnify-1.2s-200px.e9ae9839.svg"},function(e,t,a){e.exports=a.p+"static/media/Magnify-1.2s-200px--dark.69ea0178.svg"},function(e,t,a){e.exports=a.p+"static/media/github-red.100102f1.svg"},function(e,t,a){e.exports=a.p+"static/media/up-arrow.5b679796.svg"},function(e,t,a){e.exports=a(71)},,,,,,function(e,t,a){var n={"./bg-pattern-detail-footer.svg":45,"./bg-pattern-header.svg":46,"./icon-check.svg":47,"./icon-location.svg":48,"./icon-moon.svg":16,"./icon-search-white.svg":49,"./icon-search.svg":50,"./icon-sun.svg":15,"./logo.svg":14};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=44},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-detail-footer.f5101f61.svg"},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-header.549c5470.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-check.6354efb6.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-location.7c42293b.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search-white.2304decb.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search.b89fe227.svg"},function(e,t,a){var n={"./bg-pattern-detail-footer.svg":52,"./bg-pattern-header.svg":53,"./icon-filter.svg":54};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=51},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-detail-footer.86300130.svg"},function(e,t,a){e.exports=a.p+"static/media/bg-pattern-header.1360e861.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-filter.3c89a70b.svg"},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),c=a.n(r),s=a(17),l=a.n(s),i=a(12),m=a(20),u=a(28),d=a(2),g=a(8),b=a(1),h=a(14),p=a.n(h),_=a(15),f=a.n(_),E=a(16),v=a.n(E),j=function(){var e=Object(n.useContext)(Y),t=e.BASE_URL,r=e.fetchGithubAPI,c=e.lightTheme,s=e.setLightTheme,l=e.setSearchInput,i=e.setLocationInput,m=e.setFullTime,u=e.setSearchURL,d=e.mobileFilter,b=document.body.parentElement;Object(n.useEffect)((function(){localStorage.getItem("theme")?b.setAttribute("data-theme",localStorage.getItem("theme")):(s(!0),localStorage.setItem("theme","light"),b.setAttribute("data-theme","light"))}),[]);return o.a.createElement("div",{className:"header ".concat(d?"blur":"")},o.a.createElement("div",{className:"header__backgrounds"},o.a.createElement("img",{className:"background__desktop",src:a(44)("./bg-pattern-header.svg"),alt:""}),o.a.createElement("img",{className:"background__mobile",src:a(51)("./bg-pattern-header.svg"),alt:""})),o.a.createElement("div",{className:"header__inner"},o.a.createElement(g.b,{to:"/",onClick:function(){return r("".concat(t,".json")),u(""),l(""),i(""),m(!1),void sessionStorage.setItem("search URL","")}},o.a.createElement("img",{className:"header__logo",src:p.a,alt:"DevJobs company logo"})),o.a.createElement("div",{className:"header__toggle"},o.a.createElement("span",null,o.a.createElement("img",{src:f.a,alt:"Sun illustration"})),o.a.createElement("button",{className:"header__toggle__btn ".concat(c?"":"active"),"aria-label":"Set page theme to either light or dark",onClick:function(){c?(localStorage.setItem("theme","dark"),b.setAttribute("data-theme",localStorage.getItem("theme")),s(!1)):(localStorage.setItem("theme","light"),b.setAttribute("data-theme",localStorage.getItem("theme")),s(!0))}},o.a.createElement("span",{className:"slider"})),o.a.createElement("span",null,o.a.createElement("img",{src:v.a,alt:"Moon illustration"})))))},y=function(e){var t=e.children,a=Object(n.useContext)(Y).mobileFilter;return o.a.createElement("section",{className:"job__board ".concat(a?"blur":"")},t)},N=a(30),x=a.n(N),O=a(31),w=a.n(O)()()(x.a),S=function(e){var t=e.logo,a=e.date,r=e.lengthTerm,c=e.company,s=e.jobTitle,l=e.location,i=e.id,m=["#8d47ff","#235cdf","#daa278","#68ab97","#bb4643","#e7de63"],u=Object(n.useState)(m[Math.floor(Math.random()*m.length)]),b=Object(d.a)(u,1)[0];return o.a.createElement(g.b,{to:"/".concat(i)},o.a.createElement("div",{className:"job__board__thumbnail"},o.a.createElement("div",{className:"thumbnail__image__container"},t&&o.a.createElement("img",{src:t,alt:"".concat(c," company logo")}),!t&&o.a.createElement("div",{className:"no-logo",style:{backgroundColor:b}},"n / a")),o.a.createElement("p",{className:"thumbnail__time-type"},o.a.createElement("span",{className:"thumbnail__time"},a),o.a.createElement("span",{style:{margin:"0 10px"}},"\u2022"),o.a.createElement("span",{className:"thumbnail__type"},r)),o.a.createElement(w,{className:"thumbnail__title",text:s,component:"h3",maxLine:2}),o.a.createElement("p",{className:"thumbnail__company"},c),o.a.createElement(w,{className:"thumbnail__location",text:l,component:"small"})))},k=a(32),M=a.n(k),I=a(33),L=a.n(I),A=function(e){var t=e.withinJobBoard,a=Object(n.useContext)(Y).lightTheme;return o.a.createElement("div",{className:"spinner--gh ".concat(t?"resize":"")},o.a.createElement("img",{src:"".concat(a?M.a:L.a),alt:"Github logo as loading spinner"}))},T=a(34),C=a.n(T),U=a(35),R=a.n(U),D=function(e){var t=e.initialSearch,a=Object(n.useContext)(Y).lightTheme;return o.a.createElement("div",{className:"spinner--magnify ".concat(t?"big":"small")},o.a.createElement("img",{src:"".concat(a?C.a:R.a),alt:"Magnifying glass"}))},F=a(36),z=a.n(F),Z=function(e){var t=e.noJobs,a=e.apiError,r=Object(n.useContext)(Y).error,c=localStorage.getItem("search"),s=localStorage.getItem("location"),l=localStorage.getItem("full time");return o.a.createElement("div",{className:"error"},o.a.createElement("img",{src:z.a,alt:"Github logo for error"}),o.a.createElement("div",{className:"error__msg ".concat(a?"visible":"hidden")},o.a.createElement("h3",null,r.statusCode),o.a.createElement("p",null,r.statusText)),o.a.createElement("p",{className:"no__jobs ".concat(t?"visible":"hidden")},"No ",o.a.createElement("strong",null,"true"===l?"full time":"")," ",o.a.createElement("strong",null,c)," jobs found ",s?"in":""," ",o.a.createElement("strong",null,s)))};function B(e,t){var a=e-t;return a<6e4?Math.round(a/1e3)+" seconds ago":a<36e5?1!==Math.round(a/6e4)?Math.round(a/6e4)+" minutes ago":Math.round(a/6e4)+" minute ago":a<864e5?1!==Math.round(a/36e5)?Math.round(a/36e5)+" hours ago":Math.round(a/36e5)+" hour ago":a<2592e6?1!==Math.round(a/864e5)?Math.round(a/864e5)+" days ago":Math.round(a/864e5)+" day ago":a<31536e6?1!==Math.round(a/2592e6)?Math.round(a/2592e6)+" months ago":Math.round(a/2592e6)+" month ago":1!==Math.round(a/31536e6)?Math.round(a/31536e6)+" years ago":Math.round(a/31536e6)+" year ago"}var J=a(37),G=a.n(J),H=function(){var e=Object(n.useContext)(Y),t=e.data.jobs,a=e.BASE_URL,r=e.loading,c=e.error,s=e.resultLength,l=e.searchURL,i=e.fetchGithubAPI,m=e.mobileFilter,u=Object(n.useState)(2),g=Object(d.a)(u,2),b=g[0],h=g[1],p=Object(n.useState)(window.innerHeight),_=Object(d.a)(p,2),f=_[0],E=_[1],v=Object(n.useState)(window.pageYOffset),j=Object(d.a)(v,2),N=j[0],x=j[1];Object(n.useEffect)((function(){h(2)}),[s<50]);return Object(n.useEffect)((function(){function e(){E(window.innerHeight),x(window.pageYOffset)}return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[f,N]),o.a.createElement("div",{className:"home__page"},r&&!l&&!m&&o.a.createElement(A,{initialSearch:!0}),r&&l&&!m&&o.a.createElement(D,null),c.error&&o.a.createElement(Z,{apiError:!0}),!c.error&&!r&&l&&0===t.length&&o.a.createElement(Z,{noJobs:!0}),t&&!c.error&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null,t.map((function(e){return o.a.createElement(S,{key:e.id,id:e.id,logo:e.company_logo,date:B(Date.now(),Date.parse(e.created_at)),lengthTerm:e.type,company:e.company,jobTitle:e.title,location:e.location})})),b>2&&!l&&r&&o.a.createElement(A,{withinJobBoard:!0}),b>2&&l&&r&&o.a.createElement(D,{loadMoreSearch:!0})),s>=50&&!m&&o.a.createElement("button",{className:"load__more__btn btn",onClick:function(){h(b+1);var e=l?"".concat(l,"&page=").concat(b):"".concat(a,".json?page=").concat(b);i(e),sessionStorage.setItem("search URL",e)}},"Load More"),N>=2*f&&!m&&o.a.createElement("button",{className:"back-to-top","aria-label":"Button to scroll back to top of page",onClick:function(){return window.scrollTo(0,0)}},o.a.createElement("img",{src:G.a,alt:""}))))},P=function(e){var t=e.match,a=Object(n.useContext)(Y),r=a.data.jobs,c=a.loading,s=a.error,l=Object(n.useState)(),i=Object(d.a)(l,2),m=i[0],u=i[1],g=["#8d47ff","#235cdf","#daa278","#68ab97","#bb4643","#e7de63"],b=Object(n.useState)(g[Math.floor(Math.random()*g.length)]),h=Object(d.a)(b,1)[0];Object(n.useEffect)((function(){r&&u(r.find((function(e){return e.id===t.params.jobID})))}),[r,m]);var p,_=function(e){return e.match(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"/)[1]};return o.a.createElement(o.a.Fragment,null,c&&o.a.createElement(A,null),s.error&&o.a.createElement(Z,{apiError:!0}),m&&!s.error&&o.a.createElement("div",{className:"job__listing"},o.a.createElement("div",{className:"job__listing__header"},o.a.createElement("div",{className:"header__image__container"},m.company_logo&&o.a.createElement("img",{src:m.company_logo,alt:"".concat(m.company," company logo")}),!m.company_logo&&o.a.createElement("div",{className:"no-logo",style:{backgroundColor:h}},"n / a")),o.a.createElement("div",{className:"header__textbox"},o.a.createElement("div",{className:"textbox__inner"},o.a.createElement("h1",{className:"header__textbox__heading"},m.company),o.a.createElement("p",{className:"header__textbox__site"},(p=m.company_url)&&p.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").split("/")[0])),o.a.createElement("div",{className:"header__textbox__company-redirect ".concat(function(e){return new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi).test(e)}(m.company_url)?"":"invalid")},o.a.createElement("a",{className:"btn",target:"_blank",rel:"noopener noreferrer",href:m.company_url},"Company site"),o.a.createElement("small",null,"No company site")))),o.a.createElement("div",{className:"job__listing__body"},o.a.createElement("div",{className:"body__heading"},o.a.createElement("div",{className:"body__heading__inner"},o.a.createElement("p",{className:"body__heading__time-type"},o.a.createElement("span",{className:"body__heading__time"},B(Date.now(),Date.parse(m.created_at))),o.a.createElement("span",{style:{margin:"0 10px"}},"\u2022"),o.a.createElement("span",{className:"body__heading__type"},m.type)),o.a.createElement("h2",{className:"body__heading__title"},m.title),o.a.createElement("p",{className:"body__heading__location"},m.location)),o.a.createElement("a",{className:"body__heading__redirect btn",href:_(m.how_to_apply),target:"_blank",rel:"noopener noreferrer"},"Apply Now")),o.a.createElement("div",{className:"body__main",dangerouslySetInnerHTML:{__html:m.description}})),o.a.createElement("div",{className:"job__listing__cta"},o.a.createElement("h3",{className:"cta__heading"},"How to Apply"),o.a.createElement("br",null),o.a.createElement("p",{className:"cta__body",dangerouslySetInnerHTML:{__html:m.how_to_apply}})),o.a.createElement("footer",{className:"job__listing__footer"},o.a.createElement("div",{className:"footer__textbox"},o.a.createElement("h4",{className:"footer__textbox__position"},m.title),o.a.createElement("small",{className:"footer__textbox__company"},m.company)),o.a.createElement("a",{className:"footer__btn btn",href:_(m.how_to_apply),rel:"noopener noreferrer",target:"_blank"},"Apply Now"))))},Y=(a(70),Object(n.createContext)()),q=function(){var e=Object(n.useState)({jobs:[]}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),s=Object(d.a)(c,2),h=s[0],p=s[1],_=Object(n.useState)({error:!1}),f=Object(d.a)(_,2),E=f[0],v=f[1],y=Object(n.useState)(),N=Object(d.a)(y,2),x=N[0],O=N[1],w=Object(n.useState)(""),S=Object(d.a)(w,2),k=S[0],M=S[1],I=Object(n.useState)(""),L=Object(d.a)(I,2),A=L[0],T=L[1],C=Object(n.useState)(!1),U=Object(d.a)(C,2),R=U[0],D=U[1],F=Object(n.useState)(""),z=Object(d.a)(F,2),Z=z[0],B=z[1],J=Object(n.useState)("light"===localStorage.getItem("theme")),G=Object(d.a)(J,2),q=G[0],K=G[1],Q=Object(n.useState)(!1),V=Object(d.a)(Q,2),W=V[0],X=V[1],$="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions",ee=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),a=t.search("page"),e.next=4,fetch(t);case 4:if(!(n=e.sent).ok){e.next=13;break}return e.next=8,n.json();case 8:o=e.sent,r((function(e){return Object(m.a)(Object(m.a)({},e),{},{jobs:-1!==a?[].concat(Object(i.a)(e.jobs),Object(i.a)(o)):Object(i.a)(o)})})),O(o.length),e.next=14;break;case 13:v({error:!0,statusCode:n.status,statusText:n.statusText});case 14:p(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){sessionStorage.getItem("search URL")?(ee(sessionStorage.getItem("search URL")),B(sessionStorage.getItem("search URL"))):ee("".concat($,".json"))}),[]),o.a.createElement(g.a,null,o.a.createElement(Y.Provider,{value:{BASE_URL:$,fetchGithubAPI:ee,data:a,loading:h,error:E,resultLength:x,lightTheme:q,setLightTheme:K,searchInput:k,setSearchInput:M,locationInput:A,setLocationInput:T,fullTime:R,setFullTime:D,searchURL:Z,setSearchURL:B,mobileFilter:W,setMobileFilter:X}},o.a.createElement("div",{className:"App"},o.a.createElement(j,null),o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/",component:H}),o.a.createElement(b.a,{exact:!0,path:"/:jobID",component:P})))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.b4a6a734.chunk.js.map