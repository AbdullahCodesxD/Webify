export const state={currTemplate:null,currTool:null,main:"",second:"",toolsInfo:{}};export const changeCurrTool=function(t){state.currTool=t};export const updateTypoColors=function(){if(state.toolsInfo.head){let t=state.toolsInfo.head.length,{colours:o}=state.toolsInfo.head[t-1];o.map(t=>{let o=Object.values(t),e=state[o];if(e)return e})}if(state.toolsInfo.para){let e=state.toolsInfo.para.length,{colours:a}=state.toolsInfo.para[e-1];a.map(t=>{let o=Object.values(t),e=state[o];if(e)return e})}};export const updateColor=function(){let t=Object.values(state.toolsInfo.colour[0]),o=Object.values(state.toolsInfo.colour[1]);state.main=t,state.second=o};let updateEl=function(t,o){let e=Object.keys(o)[0],a=Object.values(o)[0],n,s;return t.forEach((o,l)=>{if(o.includes(`${e}`)||o.includes(`.${e}`)){let r=t[l].split("\n");r.join("\n").includes("font-size")&&(s=l,n=r.map((t,o,e)=>{let n=t.includes("font-size");if(!n)return t;{state.currTool;let s=`font-size : ${a}px;`;return r[o]=s}}).join("\n"))}}),t[s]=n,t};export const updateColorOfEl=function(){if("head"===state.currTool){let t=state.toolsInfo.head[state.toolsInfo.head.length-1].colours[0],o=state.toolsInfo.head[state.toolsInfo.head.length-1].colours[1],e=state.toolsInfo.head[state.toolsInfo.head.length-1].colours[2],a=state.main,n=state.second,s=[t,o,e].map((t,o)=>{if("main"===Object.values(t)[0]){let e=""===a?"":`h${o+1}{
  color : ${a} !important ;
}`;return e}if("second"===Object.values(t)[0]){let s=""===n?"":`h${o+1}{
  color : ${n} !important;
}`;return s}});return s}if("para"===state.currTool){let l=state.toolsInfo.para[state.toolsInfo.para.length-1].colours[0],r=state.toolsInfo.para[state.toolsInfo.para.length-1].colours[1],u=state.main,f=state.second,c=["main-para","lead"],i=[l,r].map((t,o)=>{if("main"===Object.values(t)[0]){let e=""===u?"":`.${c[o]}{
  color : ${u} !important;
}`;return e}if("second"===Object.values(t)[0]){let a=""===f?"":`.${c[o]}{
  color : ${f} !important;
}`;return a}});return i}};export const updateFontCss=function(t){let o=state.currTool,e=t.split("}"),a=t;if("head"===o){let{h1:n}=state.toolsInfo.head[0],{h2:s}=state.toolsInfo.head[1],{h3:l}=state.toolsInfo.head[2];[n,s,l].forEach((t,o)=>{""!==t&&(a=updateEl(e,state.toolsInfo.head[o]).join("}"))})}if("para"===o){let{main:r}=state.toolsInfo.para[0],{lead:u}=state.toolsInfo.para[0];[r,u].forEach((t,o)=>{""!==t&&(a=updateEl(e,state.toolsInfo.para[o]).join("}"))})}return a};export const updateImages=function(t,o){let e=state.toolsInfo.img;e.forEach((a,n)=>{if(n>=e.length-1)return;let s=a.url;if(""===s.trim()||!s.includes("http"))return;let l=t[n],r=o[n];l.src=s,r.src=s})};export const giveCode=function(t){window.localStorage.setItem("code",t.join("---"));let o=window.location.href.split("/");o[o.length-1]="code.html",window.location.href=o.join("/")};