(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,l=e.value,o=e.nonInteraction,r=void 0!==o&&o,i=e.transport,c=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var f={eventCategory:t,eventAction:n,eventLabel:a,eventValue:l,nonInteraction:r,transport:i};c&&"function"==typeof c&&(f.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(c,s)),window.ga("send","event",f)}};var l=a(n("pVnL")),o=a(n("8OQS")),r=a(n("q1tI")),i=a(n("17x9"));function c(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,i=e.eventValue,c=(0,o.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return r.default.createElement("a",(0,l.default)({},c,{onClick:function(l){"function"==typeof e.onClick&&e.onClick(l);var o=!0;return(0!==l.button||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey||l.defaultPrevented)&&(o=!1),e.target&&"_self"!==e.target.toLowerCase()&&(o=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:i,transport:o?"beacon":"",hitCallback:function(){o&&(document.location=e.href)}}):o&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return s}));var a=n("KQm4"),l=n("q1tI"),o=n.n(l),r=n("9eSz"),i=n.n(r),c=n("Wbzz"),u=n("Kfvu");var s="402788561";t.default=function(e){var t=e.data,n=Object(l.useState)(0),r=n[0],s=n[1],f=Object(l.useState)(Object(a.a)(t.allImageSharp.edges)),d=f[0],v=f[1],m={color:"#a7a4a4",maxWidth:"720px",padding:"12px"};return o.a.createElement("div",{className:"container full-height flex flex-column"},o.a.createElement("h1",{style:{marginTop:"12px",padding:"12px"}},"Mugs Collection"),0===r&&o.a.createElement("div",{className:"flex flex-column flex-grow flex-center align-center"},o.a.createElement("h2",{style:m},"Votez pour votre tasse préférée en cliquant sur l'image.",o.a.createElement("br",null),"Les tasses ayant reçus le plus de votes seront fabriquées en série et vous pourrez les commander en ligne :) "),o.a.createElement("button",{onClick:function(){var e=-1;window.ga((function(t){e=1})),console.log(e),v(function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(d)),s(r+1)}},"C'est parti !")),r>0&&r<11&&o.a.createElement("div",null,o.a.createElement("p",{style:{textAlign:"right",paddingRight:"6px"}},r,"/10"),o.a.createElement("div",null,d.filter((function(e,t){return t>=4*(r-1)&&t<4*r})).map((function(e,t){return o.a.createElement("div",{key:t,className:"imgVote",onClick:function(){return t=e.node.fluid.src.split("/").pop(),Object(u.trackCustomEvent)({category:"Image",action:"Click",label:t.split(".")[0]}),void s(r+1);var t},role:"button",tabIndex:0},o.a.createElement(i.a,{fluid:e.node.fluid}))})))),11===r&&o.a.createElement("div",{className:"flex flex-column flex-grow flex-center align-center"},o.a.createElement("h2",{style:m},"Merci beaucoup :)",o.a.createElement("br",null),"Pour être tenu au courant lorsque les tasses seront disponibles, inscrivez-vous avec votre email ici:"),o.a.createElement("iframe",{src:"https://d8cb2fc7.sibforms.com/serve/MUIEAMVOJ6SgMjZISqkBOqsWeI4wYLjqQnt_xUHejO0-yEqpRFXt9In54eZxa6iU9Rdu7MTSLbKAbzlBM-MQt979AdFMYOt6Vnf9tikb5O0PIOjLu3I1Q96dWB6Q8pFvDaC-xLwp13BgSsqccaELRb4aWyJCzH48mMJReOT1TyE4omLD-vXIcNZdovB5CnbLqGfKDHeAKmDcoiDc",title:"newsletter",frameborder:"0",scrolling:"auto",allowfullscreen:!0,style:{display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"100%"}})),o.a.createElement(c.a,{to:"/collection",style:{padding:"12px"}},"Voir toute la collection"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-deb3823254a68717f4a9.js.map