import{c as A,a as f,h as L,d as se,i as Be,e as V,r as D,w as y,o as Se,f as Re,g as $e,l as Le,j as Ue,k as z,n as je,m as Ke,p as N,q as ae,s as he,t as re,u as ie,v as oe,x as Ge,y as Je,z as Ze,A as et,B as tt,C as at,D as rt,E as ot,F as nt,G as pe,H as ut,I as ye,J as it,K as Te,_ as De,L as F,M as Y,N as _,O as w,Q as lt,P as st,R,S as be,T as we,U as ge,V as dt,W as ct,X as vt,Y as ft,Z as mt}from"./index.676c6ac0.js";import{Q as ht}from"./QResizeObserver.b513426f.js";import{g as Ce,s as qe,c as pt,b as X,Q as ke,a as le,d as yt,e as bt}from"./QItem.3df1a980.js";import{Q as wt,a as gt}from"./QLayout.304c77a5.js";var Ct=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:n}){const u=f(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>L("div",{class:u.value},se(n.default))}});const qt=L("div",{class:"q-space"});var kt=A({name:"QSpace",setup(){return()=>qt}}),_t=A({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:n}){const u=f(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:u.value,role:"toolbar"},se(n.default))}}),Bt=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:n,emit:u}){const{proxy:{$q:b}}=$e(),e=Be(Le,V);if(e===V)return console.error("QHeader needs to be child of QLayout"),V;const r=D(parseInt(t.heightHint,10)),i=D(!0),m=f(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||b.platform.is.ios&&e.isContainer.value===!0),c=f(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return i.value===!0?r.value:0;const l=r.value-e.scroll.value.position;return l>0?l:0}),d=f(()=>t.modelValue!==!0||m.value===!0&&i.value!==!0),o=f(()=>t.modelValue===!0&&d.value===!0&&t.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),k=f(()=>{const l=e.rows.value.top,S={};return l[0]==="l"&&e.left.space===!0&&(S[b.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),l[2]==="r"&&e.right.space===!0&&(S[b.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),S});function h(l,S){e.update("header",l,S)}function v(l,S){l.value!==S&&(l.value=S)}function $({height:l}){v(r,l),h("size",l)}function g(l){o.value===!0&&v(i,!0),u("focusin",l)}y(()=>t.modelValue,l=>{h("space",l),v(i,!0),e.animate()}),y(c,l=>{h("offset",l)}),y(()=>t.reveal,l=>{l===!1&&v(i,t.modelValue)}),y(i,l=>{e.animate(),u("reveal",l)}),y(e.scroll,l=>{t.reveal===!0&&v(i,l.direction==="up"||l.position<=t.revealOffset||l.position-l.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&h("size",r.value),h("space",t.modelValue),h("offset",c.value),Se(()=>{e.instances.header===p&&(e.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const l=Re(n.default,[]);return t.elevated===!0&&l.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(L(ht,{debounce:0,onResize:$})),L("header",{class:q.value,style:k.value,onFocusin:g},l)}}});function ne(t,n,u){const b=ie(t);let e,r=b.left-n.event.x,i=b.top-n.event.y,m=Math.abs(r),c=Math.abs(i);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?e=r<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=i<0?"up":"down":d.up===!0&&i<0?(e="up",m>c&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.down===!0&&i>0?(e="down",m>c&&(d.left===!0&&r<0?e="left":d.right===!0&&r>0&&(e="right"))):d.left===!0&&r<0?(e="left",m<c&&(d.up===!0&&i<0?e="up":d.down===!0&&i>0&&(e="down"))):d.right===!0&&r>0&&(e="right",m<c&&(d.up===!0&&i<0?e="up":d.down===!0&&i>0&&(e="down")));let o=!1;if(e===void 0&&u===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,o=!0,e==="left"||e==="right"?(b.left-=r,m=0,r=0):(b.top-=i,c=0,i=0)}return{synthetic:o,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:b,direction:e,isFirst:n.event.isFirst,isFinal:u===!0,duration:Date.now()-n.event.time,distance:{x:m,y:c},offset:{x:r,y:i},delta:{x:b.left-n.event.lastX,y:b.top-n.event.lastY}}}}let St=0;var ue=Ue({name:"touch-pan",beforeMount(t,{value:n,modifiers:u}){if(u.mouse!==!0&&z.has.touch!==!0)return;function b(r,i){u.mouse===!0&&i===!0?Ge(r):(u.stop===!0&&re(r),u.prevent===!0&&he(r))}const e={uid:"qvtp_"+St++,handler:n,modifiers:u,direction:Ce(u),noop:je,mouseStart(r){qe(r,e)&&Ke(r)&&(N(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(qe(r,e)){const i=r.target;N(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,i){if(z.is.firefox===!0&&ae(t,!0),e.lastEvt=r,i===!0||u.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&he(d),r.cancelBubble===!0&&re(d),Object.assign(d,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:d}}re(r)}const{left:m,top:c}=ie(r);e.event={x:m,y:c,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(r){if(e.event===void 0)return;const i=ie(r),m=i.left-e.event.x,c=i.top-e.event.y;if(m===0&&c===0)return;e.lastEvt=r;const d=e.event.mouse===!0,o=()=>{b(r,d);let h;u.preserveCursor!==!0&&u.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pt(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),d===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{$(),v()},50):$()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&b(r,e.event.mouse);const{payload:h,synthetic:v}=ne(r,e,!1);h!==void 0&&(e.handler(h)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=h.position.left,e.event.lastY=h.position.top,e.event.lastDir=v===!0?void 0:h.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(r);return}const q=Math.abs(m),k=Math.abs(c);q!==k&&(e.direction.horizontal===!0&&q>k||e.direction.vertical===!0&&q<k||e.direction.up===!0&&q<k&&c<0||e.direction.down===!0&&q<k&&c>0||e.direction.left===!0&&q>k&&m<0||e.direction.right===!0&&q>k&&m>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,i){if(e.event!==void 0){if(oe(e,"temp"),z.is.firefox===!0&&ae(t,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ne(r===void 0?e.lastEvt:r,e).payload);const{payload:m}=ne(r===void 0?e.lastEvt:r,e,!0),c=()=>{e.handler(m)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,u.mouse===!0){const r=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";N(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}z.has.touch===!0&&N(e,"main",[[t,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const u=t.__qtouchpan;u!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&u.end(),u.handler=n.value),u.direction=Ce(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),oe(n,"main"),oe(n,"temp"),z.is.firefox===!0&&ae(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});const _e=150;var $t=A({name:"QDrawer",inheritAttrs:!1,props:{...Je,...Ze,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...et,"onLayout","miniState"],setup(t,{slots:n,emit:u,attrs:b}){const e=$e(),{proxy:{$q:r}}=e,i=tt(t,r),{preventBodyScroll:m}=it(),{registerTimeout:c,removeTimeout:d}=at(),o=Be(Le,V);if(o===V)return console.error("QDrawer needs to be child of QLayout"),V;let q,k,h;const v=D(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),$=f(()=>t.mini===!0&&v.value!==!0),g=f(()=>$.value===!0?t.miniWidth:t.width),p=D(t.showIfAbove===!0&&v.value===!1?!0:t.modelValue===!0),l=f(()=>t.persistent!==!0&&(v.value===!0||Qe.value===!0));function S(a,s){if(Oe(),a!==!1&&o.animate(),B(0),v.value===!0){const C=o.instances[W.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),O(1),o.isContainer.value!==!0&&m(!0)}else O(0),a!==!1&&Z(!1);c(()=>{a!==!1&&Z(!0),s!==!0&&u("show",a)},_e)}function de(a,s){xe(),a!==!1&&o.animate(),O(0),B(Q.value*g.value),ee(),s!==!0?c(()=>{u("hide",a)},_e):d()}const{show:U,hide:E}=rt({showing:p,hideOnRouteChange:l,handleShow:S,handleHide:de}),{addToHistory:Oe,removeFromHistory:xe}=ot(p,E,l),H={belowBreakpoint:v,hide:E},T=f(()=>t.side==="right"),Q=f(()=>(r.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),ce=D(0),M=D(!1),j=D(!1),ve=D(g.value*Q.value),W=f(()=>T.value===!0?"left":"right"),K=f(()=>p.value===!0&&v.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:g.value:0),G=f(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(T.value?"R":"L")>-1||r.platform.is.ios===!0&&o.isContainer.value===!0),P=f(()=>t.overlay===!1&&p.value===!0&&v.value===!1),Qe=f(()=>t.overlay===!0&&p.value===!0&&v.value===!1),Me=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&M.value===!1?" hidden":"")),Ve=f(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),fe=f(()=>T.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ee=f(()=>T.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Pe=f(()=>{const a={};return o.header.space===!0&&fe.value===!1&&(G.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&Ee.value===!1&&(G.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),ze=f(()=>{const a={width:`${g.value}px`,transform:`translateX(${ve.value}px)`};return v.value===!0?a:Object.assign(a,Pe.value)}),Fe=f(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ae=f(()=>`q-drawer q-drawer--${t.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(G.value===!0||P.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),He=f(()=>{const a=r.lang.rtl===!0?t.side:W.value;return[[ue,Xe,void 0,{[a]:!0,mouse:!0}]]}),We=f(()=>{const a=r.lang.rtl===!0?W.value:t.side;return[[ue,me,void 0,{[a]:!0,mouse:!0}]]}),Ie=f(()=>{const a=r.lang.rtl===!0?W.value:t.side;return[[ue,me,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function J(){Ye(v,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}y(v,a=>{a===!0?(q=p.value,p.value===!0&&E(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(p.value===!0?(B(0),O(0),ee()):U(!1))}),y(()=>t.side,(a,s)=>{o.instances[s]===H&&(o.instances[s]=void 0,o[s].space=!1,o[s].offset=0),o.instances[a]=H,o[a].size=g.value,o[a].space=P.value,o[a].offset=K.value}),y(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&J()}),y(()=>t.behavior+t.breakpoint,J),y(o.isContainer,a=>{p.value===!0&&m(a!==!0),a===!0&&J()}),y(o.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),y(K,a=>{x("offset",a)}),y(P,a=>{u("onLayout",a),x("space",a)}),y(T,()=>{B()}),y(g,a=>{B(),te(t.miniToOverlay,a)}),y(()=>t.miniToOverlay,a=>{te(a,g.value)}),y(()=>r.lang.rtl,()=>{B()}),y(()=>t.mini,()=>{t.modelValue===!0&&(Ne(),o.animate())}),y($,a=>{u("miniState",a)});function B(a){a===void 0?pe(()=>{a=p.value===!0?0:g.value,B(Q.value*a)}):(o.isContainer.value===!0&&T.value===!0&&(v.value===!0||Math.abs(a)===g.value)&&(a+=Q.value*o.scrollbarWidth.value),ve.value=a)}function O(a){ce.value=a}function Z(a){const s=a===!0?"remove":o.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Ne(){clearTimeout(k),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,k=setTimeout(()=>{j.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Xe(a){if(p.value!==!1)return;const s=g.value,C=X(a.distance.x,0,s);if(a.isFinal===!0){C>=Math.min(75,s)===!0?U():(o.animate(),O(0),B(Q.value*s)),M.value=!1;return}B((r.lang.rtl===!0?T.value!==!0:T.value)?Math.max(s-C,0):Math.min(0,C-s)),O(X(C/s,0,1)),a.isFirst===!0&&(M.value=!0)}function me(a){if(p.value!==!0)return;const s=g.value,C=a.direction===t.side,I=(r.lang.rtl===!0?C!==!0:C)?X(a.distance.x,0,s):0;if(a.isFinal===!0){Math.abs(I)<Math.min(75,s)===!0?(o.animate(),O(1),B(0)):E(),M.value=!1;return}B(Q.value*I),O(X(1-I/s,0,1)),a.isFirst===!0&&(M.value=!0)}function ee(){m(!1),Z(!0)}function x(a,s){o.update(t.side,a,s)}function Ye(a,s){a.value!==s&&(a.value=s)}function te(a,s){x("size",a===!0?t.miniWidth:s)}return o.instances[t.side]=H,te(t.miniToOverlay,g.value),x("space",P.value),x("offset",K.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),nt(()=>{u("onLayout",P.value),u("miniState",$.value),q=t.showIfAbove===!0;const a=()=>{(p.value===!0?S:de)(!1,!0)};if(o.totalWidth.value!==0){pe(a);return}h=y(o.totalWidth,()=>{h(),h=void 0,p.value===!1&&t.showIfAbove===!0&&v.value===!1?U(!1):a()})}),Se(()=>{h!==void 0&&h(),clearTimeout(k),p.value===!0&&ee(),o.instances[t.side]===H&&(o.instances[t.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];v.value===!0&&(t.noSwipeOpen===!1&&a.push(ut(L("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),He.value)),a.push(ye("div",{ref:"backdrop",class:Me.value,style:Ve.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>Ie.value)));const s=$.value===!0&&n.mini!==void 0,C=[L("div",{...b,key:""+s,class:[Fe.value,b.class]},s===!0?n.mini():se(n.default))];return t.elevated===!0&&p.value===!0&&C.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ye("aside",{ref:"content",class:Ae.value,style:ze.value},C,"contentclose",t.noSwipeClose!==!0&&v.value===!0,()=>We.value)),L("div",{class:"q-drawer-container"},a)}}});const Lt=Te({name:"sideBar",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:String,default:"#"},icon:{type:String,default:""}}});function Tt(t,n,u,b,e,r){return F(),Y(yt,{clickable:"",href:t.to},{default:_(()=>[t.icon?(F(),Y(ke,{key:0,avatar:""},{default:_(()=>[w(lt,{name:t.icon},null,8,["name"])]),_:1})):st("",!0),w(ke,null,{default:_(()=>[w(le,null,{default:_(()=>[R(be(t.title),1)]),_:1}),w(le,{caption:""},{default:_(()=>[R(be(t.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Dt=De(Lt,[["render",Tt]]);const Ot=[{title:"Home",caption:"Bienvenido",icon:"home",to:"/"},{title:"Proveedores",caption:"Gestion de Proveedores",icon:"supervisor_account",to:"provaider"}],xt=Te({name:"MainLayout",components:{sideBarVue:Dt},setup(){const t=D(!1);return{sideBars:Ot,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}}),Qt={class:"q-gutter-sm row items-center no-wrap"};function Mt(t,n,u,b,e,r){const i=we("sideBarVue"),m=we("router-view");return F(),Y(wt,{view:"lHh Lpr lFf"},{default:_(()=>[w(Bt,{elevated:""},{default:_(()=>[w(_t,null,{default:_(()=>[w(ge,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t.toggleLeftDrawer},null,8,["onClick"]),w(Ct,null,{default:_(()=>[R(" App Siipi ")]),_:1}),w(kt),dt("div",Qt,[w(ge,{class:"q-mr-xs",flat:"",round:"",onClick:n[0]||(n[0]=c=>t.$q.dark.toggle()),icon:t.$q.dark.isActive?"nights_stay":"wb_sunny"},null,8,["icon"])])]),_:1})]),_:1}),w($t,{modelValue:t.leftDrawerOpen,"onUpdate:modelValue":n[1]||(n[1]=c=>t.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:_(()=>[w(bt,null,{default:_(()=>[w(le,{header:""},{default:_(()=>[R(" Essential Links ")]),_:1}),(F(!0),ct(ft,null,vt(t.sideBars,c=>(F(),Y(i,mt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),w(gt,null,{default:_(()=>[w(m)]),_:1})]),_:1})}var At=De(xt,[["render",Mt]]);export{At as default};
