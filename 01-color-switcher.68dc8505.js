const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let d=null;e.addEventListener("click",(function(){d=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),console.log("stop"),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.68dc8505.js.map
