(self.webpackChunkdiggital_webb=self.webpackChunkdiggital_webb||[]).push([[678],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,l=new RegExp("^"+r.source),s=new RegExp(r.source+i.source,"gu"),c=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):r(e);return e!==r(e)&&(e=((e,n,i)=>{let r=!1,l=!1,s=!1;for(let c=0;c<e.length;c++){const o=e[c];r&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),r=!1,s=l,l=!0,c++):l&&s&&a.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=l,l=!1,r=!0):(r=n(o)===o&&i(o)!==o,s=l,l=i(o)===o&&n(o)!==o)}return e})(e,r,o)),e=e.replace(l,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){"use strict";a.d(t,{L:function(){return p},M:function(){return E},P:function(){return N},S:function(){return J},_:function(){return s},a:function(){return l},b:function(){return d},g:function(){return u},h:function(){return c}});var n=a(7294),i=(a(3204),a(5697)),r=a.n(i);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,i){return void 0===i&&(i={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},i,{opacity:t?1:0})})}function u(e,t,a,n,i,r,s,c){const o={};r&&(o.backgroundColor=r,"fixed"===a?(o.width=n,o.height=i,o.backgroundColor=r,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),c&&(o.objectPosition=c);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const g=["children"],m=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,g);return n.createElement(n.Fragment,null,n.createElement(m,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],w=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:r="",shouldLoad:c}=e,o=s(e,f);return n.createElement("img",l({},o,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:r}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,r=s(e,w);const c=r.sizes||(null==t?void 0:t.sizes),o=n.createElement(h,l({},r,t,{sizes:c,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:c})})),o):o};var b;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const M=["fallback"],N=function(e){let{fallback:t}=e,a=s(e,M);return t?n.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};N.displayName="Placeholder",N.propTypes={fallback:i.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(y,l({},e)),n.createElement("noscript",null,n.createElement(y,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],v=["style","className"],I=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),l=3;l<n;l++)i[l-3]=arguments[l];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:r().object.isRequired,alt:C},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let z,D;const k=function(e){let{as:t="div",image:i,style:r,backgroundColor:d,className:u,class:g,onStartLoad:m,onLoad:p,onError:f}=e,w=s(e,S);const{width:h,height:y,layout:b}=i,M=o(h,y,b),{style:N,className:E}=M,L=s(M,T),v=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);g&&(u=g);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,y);return(0,n.useEffect)((()=>{z||(z=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return D=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(I);if(D&&j.has(I))return;let t,n;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;v.current&&(v.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(I),image:i},w)),j.has(I)||(t=requestAnimationFrame((()=>{v.current&&(n=s(v.current,I,j,r,m,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{j.has(I)&&D&&(v.current.innerHTML=D(l({isLoading:j.has(I),isLoaded:j.has(I),image:i},w)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(t,l({},L,{style:l({},N,r,{backgroundColor:d}),className:E+(u?" "+u:""),ref:v,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},A=(0,n.memo)((function(e){return e.image?(0,n.createElement)(k,e):null}));A.propTypes=x,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:a,__imageData:i,__error:r}=t,c=s(t,O);return r&&console.warn(r),i?n.createElement(e,l({image:i},c)):(console.warn("Image not loaded",a),null)}}const Z=W((function(e){let{as:t="div",className:a,class:i,style:r,image:c,loading:g="lazy",imgClassName:m,imgStyle:f,backgroundColor:w,objectFit:h,objectPosition:y}=e,b=s(e,L);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=l({objectFit:h,objectPosition:y,backgroundColor:w},f);const{width:M,height:C,layout:x,images:S,placeholder:T,backgroundColor:j}=c,z=o(M,C,x),{style:D,className:k}=z,A=s(z,v),O={fallback:void 0,sources:[]};return S.fallback&&(O.fallback=l({},S.fallback,{srcSet:S.fallback.srcSet?I(S.fallback.srcSet):void 0})),S.sources&&(O.sources=S.sources.map((e=>l({},e,{srcSet:I(e.srcSet)})))),n.createElement(t,l({},A,{style:l({},D,r,{backgroundColor:w}),className:k+(a?" "+a:"")}),n.createElement(p,{layout:x,width:M,height:C},n.createElement(N,l({},u(T,!1,x,M,C,j,h,y))),n.createElement(E,l({"data-gatsby-image-ssr":"",className:m},b,d("eager"===g,!1,O,g,f)))))})),G=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),V={src:r().string.isRequired,alt:C,width:G,height:G,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Z.displayName="StaticImage",Z.propTypes=V;const J=W(A);J.displayName="StaticImage",J.propTypes=V},7277:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),i=a(1883);const r={fontFamily:"Playfair Display",fontWeight:900};var l=e=>{let{pageTitle:t,children:a}=e;return n.createElement("div",{className:"container",style:r},n.createElement("div",{className:"d-flex flex-wrap align-items-center justify-content-center"},n.createElement(i.rU,{to:"/",className:"d-flex align-items-center my-2 me-auto text-decoration-none"},n.createElement("h1",{className:"mx-2 text-dark",style:r},"Diggital")),n.createElement(i.rU,{to:"/",className:"d-flex align-items-center my-2 me-auto text-decoration-none"},n.createElement("img",{alt:"Lane7",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTAgMTUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMTUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMDAwMDAwMzY5NzAzNDIwMTk3ODIxNTA2NjAwMDAwMDU4MzE1NTUxMTkzNjkyODkzODVfKTt9Cgkuc3Qye2ZpbGw6dXJsKCNTVkdJRF8wMDAwMDEyNDE1NjkxNDQwNjcxMzcyNjc0MDAwMDAxNDg5ODM3MjI4MzMyNDY0NTU1OF8pO30KCS5zdDN7ZmlsbDojODczM0ZGO30KPC9zdHlsZT4KPGc+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijc0Ljc5NyIgeTE9IjczLjU5MjQiIHgyPSIxNTguNjQ4NiIgeTI9IjczLjU5MjQiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MzFEQjUiLz4KCQk8c3RvcCAgb2Zmc2V0PSIwLjQ1NTgiIHN0eWxlPSJzdG9wLWNvbG9yOiM4NzMzRkYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIyLjIsNTMuN2w0LjUsNy40bDE4LjcsMzIuNmwtNzAuNiwwbDMuMSw1LjRjMSwxLjgsMywyLjksNS4xLDIuOWg2Ny4zaDYuNmMxLjMsMCwyLjItMS41LDEuNS0yLjYKCQlsLTMxLjMtNTQuM0wxMjIuMiw1My43eiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDEwMjUwODY4NDE5Njg3OTYwMTg3MDAwMDAxNjA1NjMxOTgxMzAxMTMzMzUwNV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNzQuNzY5OCIgeTE9IjU0Ljg5MDUiIHgyPSIxNDAuMDMzMiIgeTI9IjU0Ljg5MDUiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGMDAiLz4KCQk8c3RvcCAgb2Zmc2V0PSIwLjk5ODgiIHN0eWxlPSJzdG9wLWNvbG9yOiM2N0ZGMDgiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzAwMDAwMTAyNTA4Njg0MTk2ODc5NjAxODcwMDAwMDE2MDU2MzE5ODEzMDExMzMzNTA1Xyk7IiBkPSJNMTIxLjIsMjEuOWwtMTQuNCwyNUw4Ny45LDc5LjVoNDcuMwoJCWw0LjgsOC4zSDgzLjFoLTYuNmMtMS4zLDAtMi4yLTEuNS0xLjUtMi42bDM0LjktNjAuNGMxLTEuOCwzLTIuOSw1LjEtMi45SDEyMS4yeiIvPgoJCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8wMDAwMDExNjIxMTY2NzU4OTY3NzU2NzY3MDAwMDAwODIxODE2NTgyNDU0MTI2NTgwMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTYuNjE5MiIgeTE9IjYxLjc5MTgiIHgyPSIxNzEuMjMzNCIgeTI9IjYxLjc5MTgiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM3RDMzQTkiLz4KCQk8c3RvcCAgb2Zmc2V0PSIwLjc5NjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjMxRkEiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzAwMDAwMTE2MjExNjY3NTg5Njc3NTY3NjcwMDAwMDA4MjE4MTY1ODI0NTQxMjY1ODAxXyk7IiBkPSJNMTA2LjIsNzcuOGw0LjgtOC4zbDE4LjgtMzIuNmwzNy40LDY0LjkKCQlsMy4xLTUuNGMxLTEuOCwxLTQsMC01LjhsLTM1LjgtNjEuOWwtMy4zLTUuN2MtMC43LTEuMi0yLjQtMS4yLTMsMGwtMzEuOCw1NUgxMDYuMnoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik03Ni40LDEwNi43aDIuM3YxMi42aDYuOHYyaC05LjFWMTA2Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MyIgZD0iTTEwMC44LDEwNi43aDEuOHYyLjRIMTAybC00LjEsMTIuMmgtMi40TDEwMC44LDEwNi43eiBNOTguNywxMTUuNWg2LjZsMC43LDEuOEg5OEw5OC43LDExNS41eiBNMTAyLDEwOS4xCgkJCXYtMi40aDEuMmw1LjMsMTQuNmgtMi40TDEwMiwxMDkuMXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTE4LjUsMTA2LjdoMi4xbDksMTIuOWwtMi40LTIuMWgxdi0xMC44aDIuM3YxNC42aC0yLjFsLTktMTIuOWwyLjQsMi4xaC0xdjEwLjhoLTIuM1YxMDYuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTQwLjQsMTA2LjdoOS4zdjJoLTd2NC4yaDYuNnYxLjloLTYuNnY0LjVoN3YyaC05LjNWMTA2Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MyIgZD0iTTE2Ny40LDEwOC43TDE2Ny40LDEwOC43bC03LjctMC4xdi0xLjloOS45djJsLTYuMywxMi42aC0yLjRMMTY3LjQsMTA4Ljd6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==",width:150,height:120,className:"d-inline-block align-text-top"})),n.createElement("ul",{className:"nav col-12 col-lg-auto my-2 justify-content-center my-md-0"},n.createElement("li",null,n.createElement(i.rU,{to:"/",className:"nav-link text-dark font-weight-bold"},"Home")),n.createElement("li",null,n.createElement(i.rU,{to:"/",className:"nav-link"},"Portfolio")),n.createElement("li",null,n.createElement(i.rU,{to:"/",className:"nav-link"},"Contact")))))};const s={fontFamily:"'Playfair Display', serif !important"};var c=e=>{let{pageTitle:t,children:a}=e;return n.createElement("main",{className:"container-fluid",style:s},n.createElement(l,null),a)}},8989:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return b},default:function(){return M}});var n=a(7294),i=a(7277),r=a(7005),l=a.p+"static/Lane-49abed59a765ddeb012cba4d9599f64a.png",s=a.p+"static/Seltzer-0a0cfe57e160f55d11dcf19c10a1ff38.png",c=a.p+"static/Sippy-cdaafbb81ed2c524466a26bb9e998c7a.png",o=a.p+"static/SnowLeopard-b797fe1fb2d3353100a0f7dd621df906.png",d=a.p+"static/VIVA_Cider-4de5a68bb1ddf1fa521e3804e17f69ad.png";function u(){const e=300,t=400,a=[{id:1,fileSrc:l,label:"Lane",width:e,height:t},{id:2,fileSrc:s,label:"Seltzer",width:e,height:t},{id:3,fileSrc:c,label:"Sippy",width:e,height:t},{id:4,fileSrc:o,label:"SnowLeopard",width:e,height:t},{id:5,fileSrc:d,label:"VIVA Cider",width:600,height:t}];return n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement(r.Z,null,a.map(((e,t)=>n.createElement("span",{"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":"Tooltip on top",key:t},n.createElement("img",{alt:e.label,src:e.fileSrc,width:e.widt,height:e.heig})))))))}var g=a.p+"static/Lane7-506fb5f567556ec872b8de32d04de44b.gif";function m(){return n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row p-4 bg-light border-top border-bottom border-dark rounded",style:{fontFamily:"Playfair Display"}},n.createElement("div",{className:"col"},n.createElement("img",{alt:"Lane7",src:g,style:{width:"100%",height:"350px"}})),n.createElement("div",{className:"col",style:{fontFamily:"Playfair Display",fontWeight:600}},n.createElement("h2",{className:"mb-4",style:{fontWeight:600}},"Welcome to Lane7"),n.createElement("h3",{className:"mb-4"},"We are an independent agency dedicated to the craft of advertising. Imagine colour, imagine baffling design concepts, imagine Cristiano Ronaldo wearing your brand whilst shopping for another Buggatti !"),n.createElement("h2",{style:{fontWeight:600}},"Imagine the Infinite. Imagine Lane7"))))}function p(){return n.createElement("div",{className:"row p-4",style:{fontFamily:"Playfair Display"}},n.createElement("div",{className:"col text-center"},n.createElement("h1",{className:"mb-4",style:{fontSize:"4em",fontWeight:900}},"We Create Awesome Stuff for your Brands")))}var f="heroCarousel-module--slider_group--5ed88",w=a(8032);function h(){const e=300,t=400;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"heroCarousel-module--sliderImgContainer--0e2df heroCarousel-module--sliderImgContainer_hover_pause--572a6"},n.createElement("div",{className:f},n.createElement("span",{"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":"Tooltip on top"},n.createElement(w.S,{alt:"Lane",src:"../images/products/Lane.png",width:e,height:t,__imageData:a(9282)})),n.createElement("span",null,n.createElement(w.S,{alt:"Seltzer",src:"../images/products/Seltzer.png",width:e,height:t,__imageData:a(6154)})),n.createElement("span",null,n.createElement(w.S,{alt:"Sippy",src:"../images/products/Sippy.png",width:e,height:t,__imageData:a(8460)})),n.createElement("span",null,n.createElement(w.S,{alt:"SnowLeopard",src:"../images/products/SnowLeopard.png",width:e,height:t,__imageData:a(9038)})),n.createElement("span",null,n.createElement(w.S,{alt:"VIVA_Cider",src:"../images/products/VIVA_Cider.png",width:600,height:t,__imageData:a(5924)}))),n.createElement("div",{className:f,"aria-hidden":"true"},n.createElement("span",{"data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":"Tooltip on top"},n.createElement(w.S,{alt:"Lane",src:"../images/products/Lane.png",width:e,height:t,__imageData:a(9282)})),n.createElement("span",null,n.createElement(w.S,{alt:"Seltzer",src:"../images/products/Seltzer.png",width:e,height:t,__imageData:a(6154)})),n.createElement("span",null,n.createElement(w.S,{alt:"Sippy",src:"../images/products/Sippy.png",width:e,height:t,__imageData:a(8460)})),n.createElement("span",null,n.createElement(w.S,{alt:"SnowLeopard",src:"../images/products/SnowLeopard.png",width:e,height:t,__imageData:a(9038)})),n.createElement("span",null,n.createElement(w.S,{alt:"VIVA_Cider",src:"../images/products/VIVA_Cider.png",width:600,height:t,__imageData:a(5924)}))))))}const y={fontFamily:"Playfair Display"},b=()=>n.createElement("title",null,"Diggital");var M=()=>n.createElement(i.Z,{pageTitle:"Diggital",style:y},n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement(h,null),n.createElement(u,null),n.createElement(m,null)))},7005:function(e,t,a){var n=a(7294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=i(n);!function(e){if(!e||"undefined"==typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n}\n\n.child {\n  transform: var(--transform);\n}');const l=n.forwardRef((function({style:e={},className:t="",autoFill:a=!1,play:i=!0,pauseOnHover:l=!1,pauseOnClick:s=!1,direction:c="left",speed:o=50,delay:d=0,loop:u=0,gradient:g=!1,gradientColor:m=[255,255,255],gradientWidth:p=200,onFinish:f,onCycleComplete:w,children:h},y){const[b,M]=n.useState(0),[N,E]=n.useState(0),[L,v]=n.useState(1),[I,C]=n.useState(!1),x=n.useRef(null),S=y||x,T=n.useRef(null),j=n.useCallback((()=>{if(T.current&&S.current){const e=S.current.getBoundingClientRect(),t=T.current.getBoundingClientRect();let n=e.width,i=t.width;"up"!==c&&"down"!==c||(n=e.height,i=t.height),v(a&&n&&i&&i<n?Math.ceil(n/i):1),M(n),E(i)}}),[a,S,c]);n.useEffect((()=>{if(I&&(j(),T.current&&S.current)){const e=new ResizeObserver((()=>j()));return e.observe(S.current),e.observe(T.current),()=>{e&&e.disconnect()}}}),[j,S,I]),n.useEffect((()=>{j()}),[j,h]),n.useEffect((()=>{C(!0)}),[]);const z=n.useMemo((()=>a?N*L/o:N<b?b/o:N/o),[a,b,N,L,o]),D=`rgba(${m[0]}, ${m[1]}, ${m[2]}`,k=n.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||l?"paused":"running","--pause-on-click":!i||l&&!s||s?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"})),[e,i,l,s,c]),A=n.useMemo((()=>({"--gradient-color":`${D}, 1), ${D}, 0)`,"--gradient-width":"number"==typeof p?`${p}px`:p})),[D,p]),O=n.useMemo((()=>({"--play":i?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":`${z}s`,"--delay":`${d}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":a?"auto":"100%"})),[i,c,z,d,u,a]),W=n.useMemo((()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"})),[c]),Z=n.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,t)=>r.default.createElement(n.Fragment,{key:t},n.Children.map(h,(e=>r.default.createElement("div",{style:W,className:"child"},e))))))),[W,h]);return I?r.default.createElement("div",{ref:S,style:k,className:"marquee-container "+t},g&&r.default.createElement("div",{style:A,className:"overlay"}),r.default.createElement("div",{className:"marquee",style:O,onAnimationIteration:w,onAnimationEnd:f},r.default.createElement("div",{className:"initial-child-container",ref:T},n.Children.map(h,(e=>r.default.createElement("div",{style:W,className:"child"},e)))),Z(L-1)),r.default.createElement("div",{className:"marquee",style:O},Z(L))):null}));t.Z=l},6154:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/22385da12054d1a44e13f5d99e044e19/24db9/Seltzer.png","srcSet":"/static/22385da12054d1a44e13f5d99e044e19/24db9/Seltzer.png 300w,\\n/static/22385da12054d1a44e13f5d99e044e19/34546/Seltzer.png 500w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/22385da12054d1a44e13f5d99e044e19/1e3eb/Seltzer.webp 300w,\\n/static/22385da12054d1a44e13f5d99e044e19/96211/Seltzer.webp 500w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":400}')},9038:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/faa305da4dd0d75c8cc858ddfdfb7421/24db9/SnowLeopard.png","srcSet":"/static/faa305da4dd0d75c8cc858ddfdfb7421/24db9/SnowLeopard.png 300w,\\n/static/faa305da4dd0d75c8cc858ddfdfb7421/34546/SnowLeopard.png 500w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/faa305da4dd0d75c8cc858ddfdfb7421/1e3eb/SnowLeopard.webp 300w,\\n/static/faa305da4dd0d75c8cc858ddfdfb7421/96211/SnowLeopard.webp 500w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":400}')},5924:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8f84ac4ac0c90891a508f13cbd819502/3e3b4/VIVA_Cider.png","srcSet":"/static/8f84ac4ac0c90891a508f13cbd819502/3e3b4/VIVA_Cider.png 600w,\\n/static/8f84ac4ac0c90891a508f13cbd819502/ff528/VIVA_Cider.png 612w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/8f84ac4ac0c90891a508f13cbd819502/cfc04/VIVA_Cider.webp 600w,\\n/static/8f84ac4ac0c90891a508f13cbd819502/0f794/VIVA_Cider.webp 612w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":400}')},8460:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/70132fdac9dfea1e3200d1c1172b321e/24db9/Sippy.png","srcSet":"/static/70132fdac9dfea1e3200d1c1172b321e/24db9/Sippy.png 300w,\\n/static/70132fdac9dfea1e3200d1c1172b321e/34546/Sippy.png 500w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/70132fdac9dfea1e3200d1c1172b321e/1e3eb/Sippy.webp 300w,\\n/static/70132fdac9dfea1e3200d1c1172b321e/96211/Sippy.webp 500w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":400}')},9282:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c22c95a00dc1fc947fca46e390c7234d/24db9/Lane.png","srcSet":"/static/c22c95a00dc1fc947fca46e390c7234d/24db9/Lane.png 300w,\\n/static/c22c95a00dc1fc947fca46e390c7234d/34546/Lane.png 500w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/c22c95a00dc1fc947fca46e390c7234d/1e3eb/Lane.webp 300w,\\n/static/c22c95a00dc1fc947fca46e390c7234d/96211/Lane.webp 500w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":400}')}}]);
//# sourceMappingURL=component---src-pages-index-js-cc6da2b7b5b83eeec814.js.map