import{b as C,g as R,k as y,i,r as p,u as h,a as T,_ as d,j as g,c as m,e as x}from"./index.e6f4fcc4.js";import{T as $}from"./Tablelvl2Context.f3ffff17.js";function O(e){return C("MuiTableRow",e)}const k=R("MuiTableRow",["root","selected","hover","head","footer"]),v=k,M=["className","component","hover","selected"],U=e=>{const{classes:o,selected:a,hover:t,head:l,footer:s}=e;return x({root:["root",a&&"selected",t&&"hover",l&&"head",s&&"footer"]},O,o)},_=y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.head&&o.head,a.footer&&o.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${v.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:i(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:i(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),u="tr",j=p.exports.forwardRef(function(o,a){const t=h({props:o,name:"MuiTableRow"}),{className:l,component:s=u,hover:n=!1,selected:b=!1}=t,f=T(t,M),r=p.exports.useContext($),c=d({},t,{component:s,hover:n,selected:b,head:r&&r.variant==="head",footer:r&&r.variant==="footer"}),w=U(c);return g(_,d({as:s,ref:a,className:m(w.root,l),role:s===u?null:"row",ownerState:c},f))}),P=j;export{P as default,O as getTableRowUtilityClass,v as tableRowClasses};
