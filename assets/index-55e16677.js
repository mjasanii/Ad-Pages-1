(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const h="modulepreload",g=function(s,o){return new URL(s,o).href},f={},d=function(o,i,l){if(!i||i.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=g(e,l),e in f)return;f[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":h,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((c,a)=>{n.addEventListener("load",c),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};d(()=>import("./needle-asap-06cd3753.js"),["./needle-asap-06cd3753.js","./three.module-19edce0d.js"],import.meta.url);globalThis["needle:dependencies:ready"]=d(()=>import("./register_types-c2071eb9.js"),["./register_types-c2071eb9.js","./needle-engine-7834ed80.js","./three.module-19edce0d.js"],import.meta.url);const u=new Array;globalThis["needle:codegen_files"]=u;u.push("assets/hotspots.glb?v=1729679235196");u.push("assets/adPagesSolutionsLogo.glb?v=1729679235196");u.push("assets/adPagesSolutionsLogo1.glb?v=1729679235196");document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("needle-engine");s&&s.getAttribute("src")===null&&(s.setAttribute("hash","1729679235196"),s.setAttribute("src",JSON.stringify(u)))});console.log("Made with ♥ by 🌵 Needle - https://needle.tools — Version 3.49.0-pre");d(()=>import("./needle-engine-7834ed80.js"),["./needle-engine-7834ed80.js","./three.module-19edce0d.js"],import.meta.url);export{d as _};