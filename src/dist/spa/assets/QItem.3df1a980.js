import{c as d,a as u,h as o,d as v,z as h,B as k,g as y,$ as R,a0 as z,a1 as E,r as q,a2 as p,x as A,f as $}from"./index.676c6ac0.js";var K=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=u(()=>parseInt(e.lines,10)),i=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),l=u(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>o("div",{style:l.value,class:i.value},v(t.default))}}),N=d({name:"QList",props:{...h,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=y(),i=k(e,a.proxy.$q),l=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:l.value,role:"list"},v(t.default))}});const f={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},j=Object.keys(f);f.all=!0;function O(e){const t={};for(const a of j)e[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?f:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function P(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function M(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),R.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function T(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function U(e,t,a){if(a<=t)return t;const i=a-t+1;let l=t+(e-t)%i;return l<t&&(l=i+l),l===0?0:l}var F=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:a.value},v(t.default))}}),W=d({name:"QItem",props:{...h,...z,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:i}}=y(),l=k(e,i),{hasLink:m,linkAttrs:B,linkClass:_,linkTag:w,navigateOnClick:C}=E(),s=q(null),c=q(null),b=u(()=>e.clickable===!0||m.value===!0||e.tag==="label"),r=u(()=>e.disable!==!0&&b.value===!0),L=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?_.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=u(()=>{if(e.insetLevel===void 0)return null;const n=i.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function S(n){r.value===!0&&(c.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===s.value?c.value.focus():document.activeElement===c.value&&s.value.focus()),C(n))}function I(n){if(r.value===!0&&p(n,13)===!0){A(n),n.qKeyEvent=!0;const g=new MouseEvent("click",n);g.qKeyEvent=!0,s.value.dispatchEvent(g)}a("keyup",n)}function Q(){const n=$(t.default,[]);return r.value===!0&&n.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),n}return()=>{const n={ref:s,class:L.value,style:x.value,role:"listitem",onClick:S,onKeyup:I};return r.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,B.value)):b.value===!0&&(n["aria-disabled"]="true"),o(w.value,n,Q())}}});export{F as Q,K as a,T as b,M as c,W as d,N as e,O as g,U as n,P as s};
