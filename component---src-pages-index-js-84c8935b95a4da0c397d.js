(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,l=e.value,r=e.nonInteraction,o=void 0!==r&&r,i=e.transport,c=e.hitCallback,u=e.callbackTimeout,s=void 0===u?1e3:u;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:a,eventValue:l,nonInteraction:o,transport:i};c&&"function"==typeof c&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(c,s)),window.ga("send","event",d)}};var l=a(n("pVnL")),r=a(n("8OQS")),o=a(n("q1tI")),i=a(n("17x9"));function c(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,i=e.eventValue,c=(0,r.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,l.default)({},c,{onClick:function(l){"function"==typeof e.onClick&&e.onClick(l);var r=!0;return(0!==l.button||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey||l.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:i,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}c.propTypes={href:i.default.string,target:i.default.string,eventCategory:i.default.string,eventAction:i.default.string,eventLabel:i.default.string,eventValue:i.default.number,onClick:i.default.func}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return s}));var a=n("KQm4"),l=n("q1tI"),r=n.n(l),o=n("9eSz"),i=n.n(o),c=n("Wbzz"),u=n("Kfvu");var s="402788561";t.default=function(e){var t=e.data,n=Object(l.useState)(0),o=n[0],s=n[1],d=Object(l.useState)(Object(a.a)(t.allImageSharp.edges)),f=d[0],v=d[1],m={color:"#a7a4a4",maxWidth:"720px",padding:"12px"},p=function(){var e=-1;window.ga((function(t){e=1})),v(function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(f)),s(e)};return r.a.createElement("div",{className:"container full-height flex flex-column"},r.a.createElement("h1",{style:{marginTop:"12px",padding:"12px"}},"Mugs Collection"),-1===o&&r.a.createElement("div",{className:"flex flex-column flex-grow flex-center align-center"},r.a.createElement("h2",{style:m},"Votez pour votre tasse préférée",r.a.createElement("br",null),"en cliquant sur une des quatres images qui apparaîtront.",r.a.createElement("br",null),"Les tasses ayant reçus le plus de votes seront fabriquées en série et vous pourrez les commander en ligne :)"),r.a.createElement("p",{style:{paddingBottom:"12px"}},"Il semble que votre navigateur bloque Google Analytics.",r.a.createElement("br",null)," Veuillez autoriser Google Analytics pour pouvoir voter."),r.a.createElement("button",{onClick:p},"Je vote →")),0===o&&r.a.createElement("div",{className:"flex flex-column flex-grow flex-center align-center"},r.a.createElement("h2",{style:m},"Votez pour votre tasse préférée",r.a.createElement("br",null),"en cliquant sur une des quatres images qui apparaîtront.",r.a.createElement("br",null),"Les tasses ayant reçu le plus de votes seront fabriquées en série et vous pourrez les commander en ligne :) "),r.a.createElement("button",{onClick:p},"Je vote →")),o>0&&o<11&&r.a.createElement("div",null,r.a.createElement("p",{style:{textAlign:"right",paddingRight:"6px"}},o,"/10"),r.a.createElement("div",null,f.filter((function(e,t){return t>=4*(o-1)&&t<4*o})).map((function(e,t){return r.a.createElement("div",{key:t,className:"imgVote",onClick:function(){return t=e.node.fluid.src.split("/").pop(),Object(u.trackCustomEvent)({category:"Image",action:"Click",label:t.split(".")[0]}),void s(o+1);var t},role:"button",tabIndex:0},r.a.createElement(i.a,{fluid:e.node.fluid}))})))),11===o&&r.a.createElement("div",{className:"flex flex-column flex-grow flex-center align-center"},r.a.createElement("h2",{style:m},"Merci beaucoup :)",r.a.createElement("br",null),"Pour être tenu au courant lorsque les tasses seront disponibles, inscrivez-vous ici:"),r.a.createElement("iframe",{src:"https://d8cb2fc7.sibforms.com/serve/MUIEAMVOJ6SgMjZISqkBOqsWeI4wYLjqQnt_xUHejO0-yEqpRFXt9In54eZxa6iU9Rdu7MTSLbKAbzlBM-MQt979AdFMYOt6Vnf9tikb5O0PIOjLu3I1Q96dWB6Q8pFvDaC-xLwp13BgSsqccaELRb4aWyJCzH48mMJReOT1TyE4omLD-vXIcNZdovB5CnbLqGfKDHeAKmDcoiDc",title:"newsletter",frameborder:"0",scrolling:"auto",allowfullscreen:!0,style:{display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"100%"}})),r.a.createElement(c.a,{to:"/collection",style:{padding:"12px"}},"Voir toute la collection"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-84c8935b95a4da0c397d.js.map