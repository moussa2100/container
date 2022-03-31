(()=>{var e,r,t,n={5579:(e,r,t)=>{Promise.all([t.e(34),t.e(950),t.e(558),t.e(858),t.e(163)]).then(t.bind(t,1163))},2020:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof preferences)return e();t.l("https://moussa2100.github.io/Preferences/remoteEntry.js",(t=>{if("undefined"!=typeof preferences)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"preferences")})).then((()=>preferences))}},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,exports:{}};return n[e](t,t.exports,a),t.exports}a.m=n,a.c=o,a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+".js",a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},a.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")=="md:"+n){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack","md:"+n),i.src=r),e[r]=[t];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r={163:[1724]},t={1724:["default","./PreferencesApp",2020]},a.f.remotes=(e,o)=>{a.o(r,e)&&r[e].forEach((e=>{var r=a.R;r||(r=[]);var i=t[e];if(!(r.indexOf(i)>=0)){if(r.push(i),i.p)return o.push(i.p);var u=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+i[1]+'" from '+i[2]),n[e]=()=>{throw r},i.p=0},l=(e,r,t,n,a,l)=>{try{var s=e(r,t);if(!s||!s.then)return a(s,n,l);var f=s.then((e=>a(e,n)),u);if(!l)return f;o.push(i.p=f)}catch(e){u(e)}},s=(e,t,n)=>l(t.get,i[1],r,0,f,n),f=r=>{i.p=1,n[e]=e=>{e.exports=r()}};l(a,i[2],0,0,((e,r,t)=>e?l(a.I,i[0],0,e,s,t):u()),1)}}))},(()=>{a.S={};var e={},r={};a.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];a.o(a.S,t)||(a.S[t]={});var i=a.S[t],u=(e,r,t,n)=>{var o=i[e]=i[e]||{},a=o[r];(!a||!a.loaded&&(!n!=!a.eager?n:"md">a.from))&&(o[r]={get:t,from:"md",eager:!!n})},l=[];return"default"===t&&(u("@emotion/react","11.8.2",(()=>Promise.all([a.e(583),a.e(950),a.e(729)]).then((()=>()=>a(6729))))),u("@emotion/styled","11.8.1",(()=>Promise.all([a.e(950),a.e(558),a.e(524)]).then((()=>()=>a(4524))))),u("@mui/material","5.5.2",(()=>Promise.all([a.e(583),a.e(856),a.e(34),a.e(950),a.e(558),a.e(858)]).then((()=>()=>a(9856))))),u("react-dom","17.0.2",(()=>Promise.all([a.e(935),a.e(950),a.e(418)]).then((()=>()=>a(3935))))),u("react","17.0.2",(()=>a.e(294).then((()=>()=>a(7294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=a(2020);if(!o)return;var i=e=>e&&e.init&&e.init(a.S[t],n);if(o.then)return l.push(o.then(i,r));var u=i(o);u&&u.then&&l.push(u.catch(r))}catch(e){r(e)}})()),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),a.p="http://localhost:8000/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():t(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(f=(typeof(s=t[i]))[0]))return!l||("u"==d?u>o&&!a:""==d!=a);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=o){if(s!=r[u])return!1}else{if(a?s>r[u]:s<r[u])return!1;s!=r[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(a||u<=o)return!1;l=!1,u--}else{if(u<=o||f<d!=a)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],h=p.pop.bind(p);for(i=1;i<r.length;i++){var c=r[i];p.push(1==c?h()|h():2==c?h()&h():c?n(c,t):!h())}return!!h()},o=(e,o,a,u)=>{var l=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,a);return n(u,l)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,a,l,u)),i(e[a][l])},i=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,o){var i=a.I(r);return i&&i.then?i.then(e.bind(e,r,a.S[r],t,n,o)):e(r,a.S[r],t,n,o)},l=u(((e,r,t,n,i)=>r&&a.o(r,t)?o(r,0,t,n):i())),s=u(((e,t,o,u,l)=>{var s=t&&a.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,u);return s?i(s):l()})),f={},d={2950:()=>l("default","react",[1,17,0,2],(()=>a.e(294).then((()=>()=>a(7294))))),9558:()=>s("default","@emotion/react",[1,11,8,2],(()=>Promise.all([a.e(583),a.e(804)]).then((()=>()=>a(6729))))),718:()=>s("default","@emotion/styled",[1,11,8,1],(()=>a.e(453).then((()=>()=>a(4524))))),2181:()=>l("default","react-dom",[1,17,0,2],(()=>a.e(935).then((()=>()=>a(3935))))),560:()=>s("default","@mui/material",[1,5,5,2],(()=>Promise.all([a.e(583),a.e(856)]).then((()=>()=>a(9856)))))},p={163:[560],558:[9558],858:[718,2181],950:[2950]};a.f.consumes=(e,r)=>{a.o(p,e)&&p[e].forEach((e=>{if(a.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,a.m[e]=t=>{delete a.c[e],t.exports=r()}},n=r=>{delete f[e],a.m[e]=t=>{throw delete a.c[e],r}};try{var o=d[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{a.b=document.baseURI||self.location.href;var e={179:0};a.f.j=(r,t)=>{var n=a.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^([58]58|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=a.p+a.u(r),u=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,u,l]=t,s=0;if(i.some((r=>0!==e[r]))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);l&&l(a)}for(r&&r(t);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmd=self.webpackChunkmd||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a(5579)})();