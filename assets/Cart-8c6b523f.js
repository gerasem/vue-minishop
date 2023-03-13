import{_ as te,u as fe,b as ne,d as U,e as ie,r as j,f as z,o as r,g as d,h as m,w as k,a as o,t as _,i as g,j as u,n as x,D as l,O as me,Z as I,U as G,R as oe,s as se,k as K,c as $,T as Z,l as S,m as R,p as H,q as P,v as he,C as F,x as be,y as ge,z as Q,A as W,B as ve,E as ye,F as M,G as _e,H as X,I as J,J as xe,K as ke}from"./index-b391a787.js";const we={class:"cart__item"},Ce={class:"cart__image-container"},Le=["src","alt"],Ee={class:"cart__main"},Se={class:"cart__prices"},ze={class:"cart__price"},De={key:0,class:"cart__old-price"},Ie={key:1,class:"cart__discount"},Be={class:"cart__title"},Fe={class:"cart__actions"},Pe=["value"],je={__name:"CartItem",props:{item:{type:Object,required:!0}},emits:{cartHasErrors:null},setup(e,{emit:n}){const i=e,a=fe(),s=ne(),{deleteItem:t,decrementCount:p,incrementCount:f,changeCount:b}=U(),c=ie(()=>{if(i.item.old_price)return((i.item.price/i.item.old_price-1)*100).toFixed(0)}),L=j(!1),Y=v=>{if(L.value=+v.target.value<1||+v.target.value>999,n("cartHasErrors",L.value),+v.target.value==0&&b(i.item,""),+v.target.value>999){const h=v.target.value.substring(0,3);b(i.item,+h)}L.value||b(i.item,+v.target.value)},N=v=>{L.value=v.target.value===""},T=j(null),D=v=>{T.value.select()},E=(v,h)=>{a.require({target:v.currentTarget,message:"Do you want to delete this item?",acceptClass:"p-button-danger",accept:()=>{s.add({summary:"Confirmed",detail:"Record deleted",life:3e3}),t(h)}})};return(v,h)=>{const V=z("router-link"),B=z("ui-icon");return r(),d("div",we,[m(V,{to:e.item.slug??e.item},{default:k(()=>[o("div",Ce,[o("img",{src:e.item.image,alt:e.item.title,class:"cart__image"},null,8,Le)])]),_:1},8,["to"]),o("div",Ee,[o("div",Se,[o("div",ze,_(e.item.price)+"€",1),e.item.old_price?(r(),d("div",De,_(e.item.old_price)+"€ ",1)):g("",!0),u(c)?(r(),d("div",Ie,_(u(c))+"% ",1)):g("",!0)]),o("h4",Be,_(e.item.title),1)]),o("div",Fe,[m(B,{icon:"dash-lg",class:x({"icon--disabled":e.item.count<=1}),onClick:h[0]||(h[0]=w=>u(p)(e.item))},null,8,["class"]),o("input",{type:"number",ref_key:"cartInput",ref:T,class:x(["cart__input",{"cart__input--error":L.value}]),value:e.item.count,onBlur:h[1]||(h[1]=w=>N(w)),onInput:h[2]||(h[2]=w=>Y(w)),onClick:h[3]||(h[3]=w=>D())},null,42,Pe),m(B,{icon:"plus-lg",class:x({"icon--disabled":e.item.count>=999}),onClick:h[4]||(h[4]=w=>u(f)(e.item))},null,8,["class"])]),m(B,{icon:"x-lg",class:"ms-3",onClick:h[5]||(h[5]=w=>E(w,e.item))})])}}},$e=te(je,[["__scopeId","data-v-5133c688"]]);function Ae(e,n){const{onFocusIn:i,onFocusOut:a}=n.value||{};e.$_pfocustrap_mutationobserver=new MutationObserver(s=>{s.forEach(t=>{if(t.type==="childList"&&!e.contains(document.activeElement)){const p=f=>{const b=l.isFocusableElement(f)?f:l.getFirstFocusableElement(f);return me.isNotEmpty(b)?b:p(f.nextSibling)};l.focus(p(t.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=s=>i&&i(s),e.$_pfocustrap_focusoutlistener=s=>a&&a(s),e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)}function ee(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)}function Te(e,n){const{autoFocusSelector:i="",firstFocusableSelector:a="",autoFocus:s=!1}=n.value||{};let t=l.getFirstFocusableElement(e,`[autofocus]:not(.p-hidden-focusable)${i}`);s&&!t&&(t=l.getFirstFocusableElement(e,`:not(.p-hidden-focusable)${a}`)),l.focus(t)}function Oe(e){const{currentTarget:n,relatedTarget:i}=e,a=i===n.$_pfocustrap_lasthiddenfocusableelement?l.getFirstFocusableElement(n.parentElement,`:not(.p-hidden-focusable)${n.$_pfocustrap_focusableselector}`):n.$_pfocustrap_lasthiddenfocusableelement;l.focus(a)}function Re(e){const{currentTarget:n,relatedTarget:i}=e,a=i===n.$_pfocustrap_firsthiddenfocusableelement?l.getLastFocusableElement(n.parentElement,`:not(.p-hidden-focusable)${n.$_pfocustrap_focusableselector}`):n.$_pfocustrap_firsthiddenfocusableelement;l.focus(a)}function He(e,n){const{tabIndex:i=0,firstFocusableSelector:a="",lastFocusableSelector:s=""}=n.value||{},t=b=>{const c=document.createElement("span");return c.classList="p-hidden-accessible p-hidden-focusable",c.tabIndex=i,c.setAttribute("aria-hidden","true"),c.setAttribute("role","presentation"),c.addEventListener("focus",b),c},p=t(Oe),f=t(Re);p.$_pfocustrap_lasthiddenfocusableelement=f,p.$_pfocustrap_focusableselector=a,f.$_pfocustrap_firsthiddenfocusableelement=p,f.$_pfocustrap_focusableselector=s,e.prepend(p),e.append(f)}const ae={mounted(e,n){const{disabled:i}=n.value||{};i||(He(e,n),Ae(e,n),Te(e,n))},updated(e,n){const{disabled:i}=n.value||{};i&&ee(e)},unmounted(e){ee(e)}};var le={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:ie(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&I.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&I.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&l.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&I.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=i=>i.querySelector("[autofocus]");let n=this.$slots.footer&&e(this.footerContainer);n||(n=this.$slots.header&&e(this.headerContainer),n||(n=this.$slots.default&&e(this.content),n||(n=e(this.container)))),n&&(this.focusable=!0,n.focus())},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?l.addClass(document.body,"p-overflow-hidden"):l.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&l.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&l.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return n?`p-dialog-${n}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){l.hasClass(e.target,"p-dialog-header-icon")||l.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",l.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let n=l.getOuterWidth(this.container),i=l.getOuterHeight(this.container),a=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,t=this.container.getBoundingClientRect(),p=t.left+a,f=t.top+s,b=l.getViewport();this.container.style.position="fixed",this.keepInViewport?(p>=this.minX&&p+n<b.width&&(this.lastPageX=e.pageX,this.container.style.left=p+"px"),f>=this.minY&&f+i<b.height&&(this.lastPageY=e.pageY,this.container.style.top=f+"px")):(this.lastPageX=e.pageX,this.container.style.left=p+"px",this.lastPageY=e.pageY,this.container.style.top=f+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,l.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return G()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return G()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:oe,focustrap:ae},components:{Portal:se}};const Ke=["aria-labelledby","aria-modal"],Ye=["id"],Ne={class:"p-dialog-header-icons"},Ve=["autofocus","tabindex"],Me=["autofocus","aria-label"];function Xe(e,n,i,a,s,t){const p=z("Portal"),f=K("ripple"),b=K("focustrap");return r(),$(p,{appendTo:i.appendTo},{default:k(()=>[s.containerVisible?(r(),d("div",{key:0,ref:t.maskRef,class:x(t.maskClass),onClick:n[3]||(n[3]=(...c)=>t.onMaskClick&&t.onMaskClick(...c))},[m(Z,{name:"p-dialog",onBeforeEnter:t.onBeforeEnter,onEnter:t.onEnter,onBeforeLeave:t.onBeforeLeave,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave,appear:""},{default:k(()=>[i.visible?S((r(),d("div",R({key:0,ref:t.containerRef,class:t.dialogClass,role:"dialog","aria-labelledby":t.ariaLabelledById,"aria-modal":i.modal},e.$attrs),[i.showHeader?(r(),d("div",{key:0,ref:t.headerContainerRef,class:"p-dialog-header",onMousedown:n[2]||(n[2]=(...c)=>t.initDrag&&t.initDrag(...c))},[H(e.$slots,"header",{},()=>[i.header?(r(),d("span",{key:0,id:t.ariaLabelledById,class:"p-dialog-title"},_(i.header),9,Ye)):g("",!0)]),o("div",Ne,[i.maximizable?S((r(),d("button",{key:0,ref:t.maximizableRef,autofocus:s.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:n[0]||(n[0]=(...c)=>t.maximize&&t.maximize(...c)),type:"button",tabindex:i.maximizable?"0":"-1"},[o("span",{class:x(t.maximizeIconClass)},null,2)],8,Ve)),[[f]]):g("",!0),i.closable?S((r(),d("button",R({key:1,ref:t.closeButtonRef,autofocus:s.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:n[1]||(n[1]=(...c)=>t.close&&t.close(...c)),"aria-label":t.closeAriaLabel,type:"button"},i.closeButtonProps),[o("span",{class:x(["p-dialog-header-close-icon",i.closeIcon])},null,2)],16,Me)),[[f]]):g("",!0)])],544)):g("",!0),o("div",R({ref:t.contentRef,class:t.contentStyleClass,style:i.contentStyle},i.contentProps),[H(e.$slots,"default")],16),i.footer||e.$slots.footer?(r(),d("div",{key:1,ref:t.footerContainerRef,class:"p-dialog-footer"},[H(e.$slots,"footer",{},()=>[P(_(i.footer),1)])],512)):g("",!0)],16,Ke)),[[b,{disabled:!i.modal}]]):g("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):g("",!0)]),_:3},8,["appendTo"])}function Ue(e,n){n===void 0&&(n={});var i=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Ze=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;Ue(Ze);le.render=Xe;var re={name:"Button",props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:oe}};const qe=["aria-label","disabled"],Ge={class:"p-button-label"};function Qe(e,n,i,a,s,t){const p=K("ripple");return S((r(),d("button",{class:x(t.buttonClass),type:"button","aria-label":t.defaultAriaLabel,disabled:t.disabled},[H(e.$slots,"default",{},()=>[i.loading&&!i.icon?(r(),d("span",{key:0,class:x(t.iconStyleClass)},null,2)):g("",!0),i.icon?(r(),d("span",{key:1,class:x(t.iconStyleClass)},null,2)):g("",!0),o("span",Ge,_(i.label||" "),1),i.badge?(r(),d("span",{key:2,class:x(t.badgeStyleClass)},_(i.badge),3)):g("",!0)])],10,qe)),[[p]])}re.render=Qe;var We=he(),ce={name:"ConfirmPopup",inheritAttrs:!1,props:{group:String},data(){return{visible:!1,confirmation:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted(){this.confirmListener=e=>{e&&e.group===this.group&&(this.confirmation=e,this.target=e.target,this.confirmation.onShow&&this.confirmation.onShow(),this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},F.on("confirm",this.confirmListener),F.on("close",this.closeListener)},beforeUnmount(){F.off("confirm",this.confirmListener),F.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(I.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.accept(),l.focus(this.target),e.preventDefault())},onRejectKeydown(e){(e.code==="Space"||e.code==="Enter")&&(this.reject(),l.focus(this.target),e.preventDefault())},onEnter(e){this.focus(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),I.set("overlay",e,this.$primevue.config.zIndex.overlay)},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave(e){I.clear(e)},alignOverlay(){l.absolutePosition(this.container,this.target);const e=l.getOffset(this.container),n=l.getOffset(this.target);let i=0;e.left<n.left&&(i=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),e.top<n.top&&l.addClass(this.container,"p-confirm-popup-flipped")},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)?(this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1):this.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new be(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!l.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},isTargetClicked(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef(e){this.container=e},onOverlayClick(e){We.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown(e){e.code==="Escape"&&(F.emit("close",this.closeListener),l.focus(this.target))}},computed:{containerClass(){return["p-confirm-popup p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},message(){return this.confirmation?this.confirmation.message:null},iconClass(){return["p-confirm-popup-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-popup-accept p-button-sm",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-popup-reject p-button-sm",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]},autoFocusAccept(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject(){return this.confirmation.defaultFocus==="reject"}},components:{CPButton:re,Portal:se},directives:{focustrap:ae}};const Je=["aria-modal"],et={key:0,class:"p-confirm-popup-content"},tt={class:"p-confirm-popup-message"},nt={class:"p-confirm-popup-footer"};function it(e,n,i,a,s,t){const p=z("CPButton"),f=z("Portal"),b=K("focustrap");return r(),$(f,null,{default:k(()=>[m(Z,{name:"p-confirm-popup",onEnter:t.onEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},{default:k(()=>[s.visible?S((r(),d("div",R({key:0,ref:t.containerRef,role:"alertdialog",class:t.containerClass,"aria-modal":s.visible,onClick:n[2]||(n[2]=(...c)=>t.onOverlayClick&&t.onOverlayClick(...c)),onKeydown:n[3]||(n[3]=(...c)=>t.onOverlayKeydown&&t.onOverlayKeydown(...c))},e.$attrs),[e.$slots.message?(r(),$(ge(e.$slots.message),{key:1,message:s.confirmation},null,8,["message"])):(r(),d("div",et,[o("i",{class:x(t.iconClass)},null,2),o("span",tt,_(s.confirmation.message),1)])),o("div",nt,[m(p,{label:t.rejectLabel,icon:t.rejectIcon,class:x(t.rejectClass),onClick:n[0]||(n[0]=c=>t.reject()),onKeydown:t.onRejectKeydown,autofocus:t.autoFocusReject},null,8,["label","icon","class","onKeydown","autofocus"]),m(p,{label:t.acceptLabel,icon:t.acceptIcon,class:x(t.acceptClass),onClick:n[1]||(n[1]=c=>t.accept()),onKeydown:t.onAcceptKeydown,autofocus:t.autoFocusAccept},null,8,["label","icon","class","onKeydown","autofocus"])])],16,Je)),[[b]]):g("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])]),_:1})}function ot(e,n){n===void 0&&(n={});var i=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var st=`
.p-confirm-popup {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-confirm-popup-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}

/* Animation */
.p-confirm-popup-enter-from {
    opacity: 0;
    -webkit-transform: scaleY(0.8);
            transform: scaleY(0.8);
}
.p-confirm-popup-leave-to {
    opacity: 0;
}
.p-confirm-popup-enter-active {
    -webkit-transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-confirm-popup-leave-active {
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
}
.p-confirm-popup:after,
.p-confirm-popup:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-confirm-popup:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-confirm-popup:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-confirm-popup-flipped:after,
.p-confirm-popup-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-confirm-popup.p-confirm-popup-flipped:after {
    border-bottom-color: transparent;
}
.p-confirm-popup.p-confirm-popup-flipped:before {
    border-bottom-color: transparent;
}
.p-confirm-popup .p-confirm-popup-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;ot(st);ce.render=it;const A=e=>(xe("data-v-7d7542d3"),e=e(),ke(),e),at={key:0,class:"container-fluid flex-grow-1"},lt={key:0},rt=A(()=>o("h1",null,"Cart",-1)),ct={class:"row"},dt={class:"col-lg-8"},ut={class:"col-lg-4"},pt={class:"cart__form"},ft={key:0,class:"cart__info"},mt={key:1,class:"cart__info cart__info--error"},ht={class:"cart__form-container"},bt={class:"text-center"},gt={class:"row"},vt=A(()=>o("div",{class:"col text-end"},"Sub-Total:",-1)),yt={class:"col text-start"},_t={class:"cart__form-price"},xt={class:"row"},kt=A(()=>o("div",{class:"col text-end"},"Shipping:",-1)),wt={class:"col text-start"},Ct={class:"cart__form-price"},Lt={key:0,class:"row"},Et={class:"col text-end cart__form-price--discount"},St={class:"col text-start"},zt={class:"cart__form-price cart__form-price--discount"},Dt={class:"row"},It=A(()=>o("div",{class:"col text-end fw-bold"},"Total price:",-1)),Bt={class:"col text-start"},Ft={class:"cart__form-price cart__form-price--total"},Pt={class:"row text-start"},jt={class:"col"},$t={class:"row text-start"},At={class:"col"},Tt={key:2},Ot=A(()=>o("div",{class:"confirmation-content"},[o("span",null,"Are you sure you want to proceed?")],-1)),Rt={__name:"Cart",setup(e){const n=ne(),{loading:i,serverError:a}=Q(W()),{getItems:s}=W();s();const{fullCart:t,totalPrice:p,subTotal:f,freeShipping:b,coupon:c,couponError:L,discount:Y}=Q(U());ve(()=>{D.value=c.value.code});const{checkCouponCode:N,deleteCart:T}=U(),D=j(""),E=j(!1),v=()=>{N(D.value)},h=()=>{E.value=!0},V=()=>{E.value=!1},B=()=>{T(),E.value=!1,n.add({summary:"Confirmed",detail:"Cart deleted",life:3e3})},w=j(!1),de=q=>{w.value=q};return(q,y)=>{const ue=z("ui-input"),O=z("ui-button");return r(),d(M,null,[u(i)?(r(),$(ye,{key:0})):g("",!0),m(Z,null,{default:k(()=>[u(i)?g("",!0):(r(),d("main",at,[u(a)?(r(),d("p",lt,_(u(a)),1)):g("",!0),rt,u(t).length?(r(),d(M,{key:1},[m(u(ce)),o("div",ct,[o("div",dt,[(r(!0),d(M,null,_e(u(t),C=>(r(),$($e,{key:C.title,item:C,onCartHasErrors:y[0]||(y[0]=pe=>de(pe))},null,8,["item"]))),128))]),o("div",ut,[o("div",pt,[u(L)?(r(),d("div",mt,_(u(L)),1)):(r(),d("div",ft," Free Shipping on all orders over 50€ ")),o("div",ht,[o("div",bt,[o("div",gt,[vt,o("div",yt,[o("span",_t,[m(X,{number:u(f)},null,8,["number"])])])]),o("div",xt,[kt,o("div",wt,[o("span",Ct,_(u(b)?"Free":"5€"),1)])]),u(c).code&&!u(L)?(r(),d("div",Lt,[o("div",Et," Discount ("+_(u(c).value)+" "+_(u(c).type)+"): ",1),o("div",St,[o("span",zt,[m(X,{number:u(Y)},null,8,["number"])])])])):g("",!0),o("div",Dt,[It,o("div",Bt,[o("span",Ft,[m(X,{number:u(p)},null,8,["number"])])])]),o("div",Pt,[o("div",jt,[m(ue,{modelValue:D.value,"onUpdate:modelValue":y[1]||(y[1]=C=>D.value=C),placeholder:"Coupon code",icon:"ticket",onApplyCoupon:y[2]||(y[2]=C=>v()),description:"For example: <strong>test</strong> or <strong>abc</strong>"},null,8,["modelValue"])])]),o("div",$t,[o("div",At,[S(m(O,{class:"btn-primary",icon:"bag-check",disabled:w.value},{default:k(()=>[P(" Buy ")]),_:1},8,["disabled"]),[[J,u(t).length]])])])])])])])])],64)):(r(),d("p",Tt,"Shopping cart is empty")),S(m(O,{onClickOnButton:y[3]||(y[3]=C=>h()),class:"btn-outline-primary",icon:"trash"},{default:k(()=>[P(" Delete cart ")]),_:1},512),[[J,u(t).length]]),m(u(le),{header:"are you sure?",visible:E.value,"onUpdate:visible":y[6]||(y[6]=C=>E.value=C),modal:!0,dismissableMask:!0},{footer:k(()=>[m(O,{icon:"x-lg",onClick:y[4]||(y[4]=C=>V()),class:"btn-outline-secondary"},{default:k(()=>[P(" No ")]),_:1}),m(O,{icon:"check-lg",onClick:y[5]||(y[5]=C=>B()),class:"btn-outline-primary",autofocus:""},{default:k(()=>[P(" Yes ")]),_:1})]),default:k(()=>[Ot]),_:1},8,["visible"])]))]),_:1})],64)}}},Kt=te(Rt,[["__scopeId","data-v-7d7542d3"]]);export{Kt as default};
