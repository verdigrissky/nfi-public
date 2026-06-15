import{a as be}from"./chunk-6B3FCKGO.js";import{A as q,C as yt,D as V,E as Ct,F as fe,G as $,H as xt,I as ge,J as ve,K as _e,c as st,e as dt,f as pe,g as ct,h as lt,j as mt,k as he,l as pt,m as ht,n as ut,o as R,p as ue,q as ft,r as gt,u as vt,v as _t,w as bt,y as U,z as wt}from"./chunk-BRGFHQSF.js";import{a as Y}from"./chunk-SB3GINYJ.js";import{$ as N,$a as G,A as Ae,Ab as te,Bb as Q,Cb as _,Db as b,Ib as B,J as oe,Jb as m,Kb as rt,L as w,La as et,Lb as p,Ma as h,Mb as it,N as Ye,Nb as ne,Ob as z,R as ee,Ra as le,Rb as at,S as T,Sa as Ie,Sb as Le,Ta as me,U as L,W as o,Wb as ot,Ya as l,Za as O,Zb as re,_a as Z,aa as j,ba as Ke,ca as se,da as W,e as He,f as g,ga as de,gb as Be,ha as E,hb as A,ib as P,j as Qe,jb as tt,ka as Xe,kb as ze,la as f,lb as Ve,mb as nt,n as Fe,na as Pe,nb as s,ob as d,pa as ce,pb as S,qb as y,ra as F,rb as C,sa as Je,sb as I,t as Ue,tb as H,u as D,v as Oe,vb as x,xb as k,y as qe,yb as v,z as $e,zb as u}from"./chunk-B4WZNTRI.js";var kt=[{path:"",loadComponent:()=>import("./chunk-2VQEX6AB.js").then(n=>n.Login)},{path:"home",redirectTo:"",pathMatch:"full"},{path:"landing",redirectTo:"",pathMatch:"full"},{path:"a/login",loadComponent:()=>import("./chunk-2VQEX6AB.js").then(n=>n.Login)},{path:"a/login/with-topt",loadComponent:()=>import("./chunk-2VQEX6AB.js").then(n=>n.Login)},{path:"a/login/with-passkey",loadComponent:()=>import("./chunk-2VQEX6AB.js").then(n=>n.Login)},{path:"a/forgot-password",loadComponent:()=>import("./chunk-2VQEX6AB.js").then(n=>n.Login)},{path:"a/new-account",loadComponent:()=>import("./chunk-KOIOPK6H.js").then(n=>n.Registration)},{path:"a/profile",loadComponent:()=>import("./chunk-XWZD5GQT.js").then(n=>n.Profile)},{path:"a/sudo",loadComponent:()=>import("./chunk-OEOIPB3T.js").then(n=>n.Admin)},{path:"a/debug",loadComponent:()=>import("./chunk-GJ6EJFA6.js").then(n=>n.Landing)},{path:"**",loadComponent:()=>import("./chunk-HYIEGZY7.js").then(n=>n.NotFound)}];var Mt={providers:[Xe(),at(),ht(kt,ut())]};var Gt=20,Ne=(()=>{class n{_ngZone=o(E);_platform=o(R);_renderer=o(Ie).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new g;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Gt){return this._platform.isBrowser?new He(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Oe(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Qe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(D(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_scrollableContainsElement(e,t){let r=ft(t),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),K=(()=>{class n{elementRef=o(F);scrollDispatcher=o(Ne);ngZone=o(E);dir=o(fe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new g;_renderer=o(me);_cleanupScroll;_elementScrolled=new g;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&q()!=U.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),q()==U.INVERTED?e.left=e.right:q()==U.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;wt()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let c=this.dir&&this.dir.value=="rtl";return e=="start"?e=c?r:t:e=="end"&&(e=c?t:r),c&&q()==U.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:c&&q()==U.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Ht=20,Dt=(()=>{class n{_platform=o(R);_listeners;_viewportSize=null;_change=new g;_document=o(W);constructor(){let e=o(E),t=o(Ie).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),c=-a.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,ae=-a.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:c,left:ae}}change(e=Ht){return e>0?this._change.pipe(Oe(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var je=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=T({})}return n})();var Ce=["*"],Ut=["content"],qt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],$t=["mat-drawer","mat-drawer-content","*"];function Yt(n,i){if(n&1){let e=H();s(0,"div",1),x("click",function(){N(e);let r=k();return j(r._onBackdropClicked())}),d()}if(n&2){let e=k();m("mat-drawer-shown",e._isShowingBackdrop())}}function Kt(n,i){n&1&&(s(0,"mat-drawer-content"),u(1,2),d())}var Xt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Jt=["mat-sidenav","mat-sidenav-content","*"];function en(n,i){if(n&1){let e=H();s(0,"div",1),x("click",function(){N(e);let r=k();return j(r._onBackdropClicked())}),d()}if(n&2){let e=k();m("mat-drawer-shown",e._isShowingBackdrop())}}function tn(n,i){n&1&&(s(0,"mat-sidenav-content"),u(1,2),d())}var nn=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var rn=new L("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ge=new L("MAT_DRAWER_CONTAINER"),we=(()=>{class n extends K{_platform=o(R);_changeDetectorRef=o(re);_container=o(Ze);constructor(){let e=o(F),t=o(Ne),r=o(E);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(B("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),m("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[z([{provide:K,useExisting:n}]),G],ngContentSelectors:Ce,decls:1,vars:0,template:function(t,r){t&1&&(v(),u(0))},encapsulation:2,changeDetection:0})}return n})(),We=(()=>{class n{_elementRef=o(F);_focusTrapFactory=o(_t);_focusMonitor=o(gt);_platform=o(R);_ngZone=o(E);_renderer=o(me);_interactivityChecker=o(vt);_doc=o(W);_container=o(Ge,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=V(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=V(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(V(e))}_opened=f(!1);_openedVia=null;_animationStarted=new g;_animationEnd=new g;openedChange=new de(!0);_openedStream=this.openedChange.pipe(D(e=>e),Fe(()=>{}));openedStart=this._animationStarted.pipe(D(()=>this.opened),Ae(void 0));_closedStream=this.openedChange.pipe(D(e=>!e),Fe(()=>{}));closedStart=this._animationStarted.pipe(D(()=>!this.opened),Ae(void 0));_destroyed=new g;onPositionChanged=new de;_content;_modeChanged=new g;_injector=o(se);_changeDetectorRef=o(re);constructor(){this.openedChange.pipe(w(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!bt(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),c(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),c=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":le(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe($e(1)).subscribe(c=>a(c?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&Q(Ut,5),t&2){let a;_(a=b())&&(r._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(Be("align",null)("tabIndex",r.mode!=="side"?"-1":null),B("visibility",!r._container&&!r.opened?"hidden":null),m("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ce,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(v(),s(0,"div",1,0),u(2),d())},dependencies:[K],encapsulation:2,changeDetection:0})}return n})(),Ze=(()=>{class n{_dir=o(fe,{optional:!0});_element=o(F);_ngZone=o(E);_changeDetectorRef=o(re);_animationDisabled=yt();_transitionsEnabled=!1;_allDrawers;_drawers=new Je;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=V(e)}_autosize=o(rn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:V(e)}_backdropOverride=null;backdropClick=new de;_start=null;_end=null;_left=null;_right=null;_destroyed=new g;_doCheckSubject=new g;_contentMargins={left:null,right:null};_contentMarginChanges=new g;get scrollable(){return this._userContent||this._content}_injector=o(se);constructor(){let e=o(R),t=o(Dt);this._dir?.change.pipe(w(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(w(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(oe(this._allDrawers),w(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(oe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(qe(10),w(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(w(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(w(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(w(this._drawers.changes)).subscribe(()=>{le({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(w(Ue(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,a){if(t&1&&te(a,we,5)(a,We,5),t&2){let c;_(c=b())&&(r._content=c.first),_(c=b())&&(r._allDrawers=c)}},viewQuery:function(t,r){if(t&1&&Q(we,5),t&2){let a;_(a=b())&&(r._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&m("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[z([{provide:Ge,useExisting:n}])],ngContentSelectors:$t,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(v(qt),A(0,Yt,1,2,"div",0),u(1),u(2,1),A(3,Kt,2,0,"mat-drawer-content")),t&2&&(P(r.hasBackdrop?0:-1),h(3),P(r._content?-1:3))},dependencies:[we],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),ye=(()=>{class n extends we{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=l({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[z([{provide:K,useExisting:n}]),G],ngContentSelectors:Ce,decls:1,vars:0,template:function(t,r){t&1&&(v(),u(0))},encapsulation:2,changeDetection:0})}return n})(),an=(()=>{class n extends We{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=V(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ue(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ue(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=l({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(Be("tabIndex",r.mode!=="side"?"-1":null)("align",null),B("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),m("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[z([{provide:We,useExisting:n}]),G],ngContentSelectors:Ce,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(v(),s(0,"div",1,0),u(2),d())},dependencies:[K],encapsulation:2,changeDetection:0})}return n})(),St=(()=>{class n extends Ze{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=l({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,a){if(t&1&&te(a,ye,5)(a,an,5),t&2){let c;_(c=b())&&(r._content=c.first),_(c=b())&&(r._allDrawers=c)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&m("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[z([{provide:Ge,useExisting:n},{provide:Ze,useExisting:n}]),G],ngContentSelectors:Jt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(v(Xt),A(0,en,1,2,"div",0),u(1),u(2,1),A(3,tn,2,0,"mat-sidenav-content")),t&2&&(P(r.hasBackdrop?0:-1),h(3),P(r._content?-1:3))},dependencies:[ye],styles:[nn],encapsulation:2,changeDetection:0})}return n})(),Rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=T({imports:[je,$,je]})}return n})();var sn=["*",[["mat-toolbar-row"]]],dn=["*","mat-toolbar-row"],cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Tt=(()=>{class n{_elementRef=o(F);_platform=o(R);_document=o(W);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,a){if(t&1&&te(a,cn,5),t&2){let c;_(c=b())&&(r._toolbarRows=c)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(rt(r.color?"mat-"+r.color:""),m("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:dn,decls:2,vars:0,template:function(t,r){t&1&&(v(sn),u(0),u(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Et=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=T({imports:[$]})}return n})();var mn=["dpadGroup"],ie=700,Ft=700,pn=1400,Ot=.35,xe=class n{dpadGroupRef;loadingService=o(Y);reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");isSpinning=f(!1);isSpinEntering=f(!1);spinAnimation=null;kickbackAnim=null;rampRAF=null;settleTimer=null;entryTimer=null;constructor(){Pe(()=>{this.loadingService.isLoading()?this.startSpin():this.stopSpin()})}ngAfterViewInit(){}ngOnDestroy(){this.cancelRamp(),this.kickbackAnim?.cancel(),this.spinAnimation?.cancel(),this.settleTimer&&clearTimeout(this.settleTimer),this.entryTimer&&clearTimeout(this.entryTimer)}startSpin(){if(this.kickbackAnim||Le(this.isSpinEntering))return;if(this.cancelRamp(),this.settleTimer&&(clearTimeout(this.settleTimer),this.settleTimer=null),this.spinAnimation){this.ramp(this.spinAnimation.playbackRate,1,Ft,"easeIn");return}let i=this.dpadGroupRef?.nativeElement;i&&(this.isSpinEntering.set(!0),this.entryTimer=setTimeout(()=>{if(this.entryTimer=null,this.isSpinEntering.set(!1),this.reducedMotion.matches){this.isSpinning.set(!0);return}i.style.transition="",i.style.transform="",this.kickbackAnim=i.animate([{transform:"rotate(0deg)",easing:"ease-out"},{transform:"rotate(-14deg)",easing:"ease-in"},{transform:"rotate(0deg)"}],{duration:160,iterations:1}),this.kickbackAnim.onfinish=()=>{this.kickbackAnim=null,this.spinAnimation=i.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:ie,iterations:1/0,easing:"linear"}),this.spinAnimation.playbackRate=Ot,this.isSpinning.set(!0),this.ramp(Ot,1,Ft,"easeIn")}},200))}stopSpin(){if(this.entryTimer&&(clearTimeout(this.entryTimer),this.entryTimer=null,this.isSpinEntering.set(!1)),this.kickbackAnim&&(this.kickbackAnim.cancel(),this.kickbackAnim=null),!this.spinAnimation){this.isSpinning.set(!1);return}if(this.reducedMotion.matches){this.spinAnimation.cancel(),this.spinAnimation=null,this.isSpinning.set(!1);return}let i=this.spinAnimation.playbackRate;this.cancelRamp(),this.ramp(i,0,pn,"easeOut",()=>this.snapAndSettle())}snapAndSettle(){if(!this.spinAnimation)return;let i=this.dpadGroupRef.nativeElement,r=(this.spinAnimation.currentTime%ie+ie)%ie/ie*360,a=Math.round(r/90)*90;i.style.transform=`rotate(${r}deg)`,this.spinAnimation.cancel(),this.spinAnimation=null,requestAnimationFrame(()=>{i.style.transition="transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",i.style.transform=`rotate(${a}deg)`,this.settleTimer=setTimeout(()=>{this.settleTimer=null,i.style.setProperty("--rest-angle",`${a%360}deg`),i.style.transition="none",i.style.transform="",this.isSpinning.set(!1),requestAnimationFrame(()=>{i.style.transition=""})},480)})}ramp(i,e,t,r,a){this.cancelRamp();let c=performance.now(),ae=jt=>{let J=Math.min((jt-c)/t,1),Wt=r==="easeIn"?J*J:1-(1-J)*(1-J),Zt=i+(e-i)*Wt;this.spinAnimation&&(this.spinAnimation.playbackRate=Zt),J<1?this.rampRAF=requestAnimationFrame(ae):(this.rampRAF=null,a?.())};this.rampRAF=requestAnimationFrame(ae)}cancelRamp(){this.rampRAF!==null&&(cancelAnimationFrame(this.rampRAF),this.rampRAF=null)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["next-flavor-brand"]],viewQuery:function(e,t){if(e&1&&Q(mn,5),e&2){let r;_(r=b())&&(t.dpadGroupRef=r.first)}},decls:18,vars:4,consts:[["dpadGroup",""],["viewBox","0 0 1019.13 138.59","fill","white","focusable","false","role","img","aria-label","Next Flavor"],[1,"text-tail"],["d","M224.82,73.21c3.24-4.86.72-27.26,1.5-32.87,0-11.05-8.96-20-20-20-54.22.02-132.66-.01-186.05,0C.16,21.06-.75,39.71.27,55.37c.02,13.39-.02,31.7,0,45.08-.96,15.68-.23,34.26,20,35.03,46.3-.07,140.71.05,186.65,0,24.32-.6,19.88-27.64,20-44.25,0-3.21-.76-6.25-2.1-8.94,0,0,0-9.09,0-9.09Z",1,"flavor-fill"],["d","M1016.86,106.28l-9.33-18c23.25-30.16.68-68.83-36.88-67.94,0,0-72.44,0-72.44,0-5.7,0-10.84,2.4-14.48,6.23-22.42-11.73-58.31-12.36-82.63-2.15-3.44-2.61-7.67-4.08-12.09-4.08-28.97,0-74.01,0-102.99,0-1.38.03-65.66-.02-69.13,0-9.01,0-16.9,6.02-19.29,14.71-1.19,4.32-2.39,8.66-3.61,13.01-1.06,3.87-3.99,14.19-5.03,17.97h-14.19c0-1.81,0-12.25,0-14.31,0,0,0-11.37,0-11.37,0-11.05-8.95-20-20-20,0,0-41.58,0-41.58,0h-3.61c-54.54,0-143.23,0-197.87,0-11.05,0-20,8.95-20,20v30.46c0,11.05,8.95,20,20,20,0,0,4.35,0,4.35,0,0,5.77,0,18.8,0,24.68,0,11.05,8.95,20,20,20h41.58c11.05,0,20-8.95,20-20-.02-7.29.01-17.41,0-24.68,2.11-.02,5.66.13,7.69-.3-.02,6.02.01,18.89,0,24.99,0,11.05,8.95,20,20,20h41.68c9.62,0,17.65-6.79,19.56-15.83h7.06c1.92,9.04,9.94,15.83,19.56,15.83,1.3-.04,80.18.07,81.51-.03,33.58.1,80.2,0,113.75.03,0,0,58.01,0,58.01,0,8.59,0,16.18-5.48,18.92-13.57,23.52,20.28,71.72,21.24,98.34,7.34,3.64,3.83,8.78,6.23,14.48,6.23h100.89c14.81.14,24.71-16.11,17.75-29.21Z",1,"flavor-fill"],[1,"text"],["d","M79.48,25.34h38.57v75.14h-46.39c-.05-.1-12.61-36.11-12.67-36.17-.44,11.4,0,24.53-.15,36.17H20.27V25.34h44.88l14.13,41.58c.56.25.01-41.47.2-41.58Z"],["d","M206.32,50.59h-43.68v5.71h42.18v14.13c-.1.05-42.14-.1-42.18.05-.03.21.02,5.56,0,5.76h44.28v24.25h-84.86V25.34h84.26v25.25Z"],["d","M401.99,25.34v30.46h-24.15c-.58,14.59,0,29.89-.2,44.68h-41.58c-.05-14.87.1-29.79-.05-44.63-.1-.15-24.16,0-24.3-.05v-30.46h90.27Z"],["d","M509.59,54.8h-42.58v5.91s0,.1,0,.1h41.08v23.84h-41.08v15.83h-41.68V25.34h84.26v29.46Z"],["d","M554.77,70.83c-.07.58,39.07,0,39.27.2v29.46h-80.85V25.34h41.58v45.49Z"],["d","M679.11,25.34c7.13,25.03,14.15,50.09,21.24,75.14h-44.68l-1.7-9.82h-13.62l-1.7,9.82h-42.78c7.07-25.04,14.08-50.08,21.04-75.14h62.22ZM641.53,83.65c.1.03,11.01-.02,11.12,0-1.66-11.58-3.54-21.8-5.51-33.46h-.1c-1.98,11.72-3.67,21.71-5.51,33.46Z"],["d","M789.01,25.34c-7.43,25.07-14.95,50.12-22.54,75.14h-58.01c-7.47-25.05-14.89-50.11-22.44-75.14h44.68c2.55,15.56,4.87,31.13,7.41,46.69h.2c2.43-15.55,4.99-31.13,7.41-46.69h43.28Z"],["d","M840.11,103.49c-26.05.78-55.53-11.07-55.1-40.68-.54-29.46,29.27-41.28,55.1-40.47,27.49-.71,55.17,11.35,55.1,40.48.53,29.23-28.79,41.62-55.1,40.68ZM840.21,71.63c16.35.7,16.55-18.11,0-17.43-16.64-.9-16.84,18.19,0,17.43Z"],["d","M983.68,70.73h-4.91c-.94.02-1.13-1.4-.21-1.62,19.76-4.49,25.6-30.85,6.72-40.61-8.21-6.22-76.45-1.99-87.06-3.16v75.14h41.58c.2-15.54-.38-28.81.2-44.68,6.09.43,19.49-2.52,19.54,7.01-.09,9.58-13.67,6.56-19.74,7.01,3.97,10.2,7.88,20.42,11.72,30.66h47.59l-15.43-29.76Z"],[1,"dpad-group"],["d","M304.43,67.68l18.95-25.35c5-6.69,4.32-16.18-1.59-22.09l-15.29-15.29C303.31,1.76,299.06,0,294.54,0c-3.68,0-7.18,1.16-10.12,3.37l-25.35,18.95-25.35-18.95C230.77,1.16,227.27,0,223.6,0h0c-4.52,0-8.77,1.76-11.96,4.95l-15.29,15.29c-5.9,5.9-6.59,15.4-1.59,22.09l18.95,25.35-18.95,25.35c-5,6.69-4.32,16.18,1.59,22.09l15.29,15.29c3.19,3.19,7.44,4.95,11.96,4.95,3.68,0,7.18-1.16,10.12-3.37l25.35-18.95,25.35,18.95c2.95,2.2,6.45,3.37,10.12,3.37,4.52,0,8.77-1.76,11.96-4.95l15.29-15.29c5.9-5.9,6.59-15.4,1.59-22.09l-18.95-25.35Z",1,"flavor-fill"],["d","M288.01,8.17l-28.94,21.64-28.94-21.64c-4.34-3.25-10.42-2.81-14.25,1.02l-15.29,15.29c-3.84,3.84-4.27,9.91-1.02,14.25l21.64,28.94-21.64,28.94c-3.25,4.34-2.81,10.42,1.02,14.25l15.29,15.29c3.84,3.84,9.91,4.27,14.25,1.02l28.94-21.64,28.94,21.64c4.34,3.25,10.42,2.81,14.25-1.02l15.29-15.29c3.84-3.84,4.27-9.91,1.02-14.25l-21.64-28.94,21.64-28.94c3.25-4.34,2.81-10.42-1.02-14.25l-15.29-15.29c-3.84-3.84-9.91-4.27-14.25-1.02ZM221.9,107.83c2.37,2.37.69,6.43-2.66,6.43h-6.75v-6.75c0-3.35,4.06-5.03,6.43-2.66l2.98,2.98ZM305.65,107.51v6.75h-6.75c-3.35,0-5.03-4.06-2.66-6.43l2.98-2.98c2.37-2.37,6.43-.69,6.43,2.66ZM221.9,27.52l-2.98,2.98c-2.37,2.37-6.43.69-6.43-2.66v-6.75h6.75c3.35,0,5.03,4.06,2.66,6.43ZM305.65,27.85c0,3.35-4.06,5.03-6.43,2.66l-2.98-2.98c-2.37-2.37-.69-6.43,2.66-6.43h6.75v6.75Z"]],template:function(e,t){e&1&&(Ke(),y(0,"svg",1)(1,"g",2),I(2,"path",3)(3,"path",4),C(),y(4,"g",5),I(5,"path",6)(6,"path",7)(7,"path",8)(8,"path",9)(9,"path",10)(10,"path",11)(11,"path",12)(12,"path",13)(13,"path",14),C(),y(14,"g",15,0),I(16,"path",16)(17,"path",17),C()()),e&2&&(h(14),m("spinning",t.isSpinning())("spin-entering",t.isSpinEntering()))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;height:32px;cursor:pointer}svg[_ngcontent-%COMP%]{height:100%;width:auto;overflow:visible}.flavor-fill[_ngcontent-%COMP%]{fill:var(--primary, #888)}.dpad-group[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rest-angle, 0deg));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]:hover   .dpad-group[_ngcontent-%COMP%]:not(.spinning):not(.spin-entering){transform:rotate(calc(var(--rest-angle, 0deg) + 90deg))}.dpad-group.spin-entering[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dpad-group.spinning[_ngcontent-%COMP%]{transition:none}@media(prefers-reduced-motion:reduce){.dpad-group[_ngcontent-%COMP%]{transition:none!important}}"]})};var ke=class n{get(i){return localStorage.getItem(i)}set(i,e){localStorage.setItem(i,e)}remove(i){localStorage.removeItem(i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ee({token:n,factory:n.\u0275fac,providedIn:"root"})};var un=(n,i)=>i.id;function fn(n,i){if(n&1){let e=H();s(0,"button",8),x("click",function(){let r=N(e).$implicit,a=k(2);return j(a.selectTheme(r))}),p(1),d()}if(n&2){let e=i.$implicit,t=k(2);m("active",t.activeTheme()===e),h(),ne(" ",e," ")}}function gn(n,i){if(n&1){let e=H();s(0,"button",9),x("click",function(){let r=N(e).$implicit,a=k(2);return j(a.selectFlavor(r.id))}),S(1,"span",10),p(2),d()}if(n&2){let e=i.$implicit,t=k(2);B("--swatch-color",e.color),m("active",t.activeFlavor()===e.id),h(2),ne(" ",e.label," ")}}function vn(n,i){if(n&1&&(s(0,"div",2),x("click",function(t){return t.stopPropagation()}),s(1,"p",3),p(2,"Appearance"),d(),s(3,"div",4),ze(4,fn,2,3,"button",5,tt),d(),s(6,"p",3),p(7,"Flavor"),d(),s(8,"div",6),ze(9,gn,3,5,"button",7,un),d()()),n&2){let e=k();h(4),Ve(e.themes),h(5),Ve(e.flavors)}}var At="theme",Pt="flavor",It=["Night","Day","System"],Bt=[{id:"avocado",label:"Avocado",color:"#3d7a3d"},{id:"cherry",label:"Cherry",color:"#b52a2a"},{id:"grape",label:"Grape",color:"#6a2d8a"},{id:"lime",label:"Lime",color:"#5c8c1e"},{id:"orange",label:"Orange",color:"#c46a0a"}],Me=class n{storage=o(ke);themes=It;flavors=Bt;isOpen=f(!1);activeTheme=f("Night");activeFlavor=f("avocado");mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");mediaListener=()=>this.applyDataTheme(this.activeTheme());onDocumentClick(){this.isOpen.set(!1)}ngOnInit(){let i=this.storage.get(At),e=i&&It.includes(i)?i:"Night";this.activeTheme.set(e),this.applyTheme(e);let t=this.storage.get(Pt),r=Bt.map(c=>c.id),a=t&&r.includes(t)?t:"avocado";this.activeFlavor.set(a),this.applyFlavor(a)}ngOnDestroy(){this.mediaQuery.removeEventListener("change",this.mediaListener)}toggle(i){i.stopPropagation(),this.isOpen.update(e=>!e)}selectTheme(i){this.activeTheme.set(i),this.storage.set(At,i),this.applyTheme(i)}selectFlavor(i){this.activeFlavor.set(i),this.storage.set(Pt,i),this.applyFlavor(i)}applyTheme(i){this.mediaQuery.removeEventListener("change",this.mediaListener),i==="System"&&this.mediaQuery.addEventListener("change",this.mediaListener),this.applyDataTheme(i)}applyDataTheme(i){let e=i==="System"?this.mediaQuery.matches?"night":"day":i.toLowerCase();document.documentElement.setAttribute("data-theme",e)}applyFlavor(i){document.documentElement.setAttribute("data-flavor",i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["theme-picker"]],hostBindings:function(e,t){e&1&&x("click",function(){return t.onDocumentClick()},et)},decls:4,vars:3,consts:[["aria-label","Appearance settings",1,"trigger",3,"click"],[1,"dropdown"],[1,"dropdown",3,"click"],[1,"section-label"],[1,"theme-pills"],[1,"theme-pill",3,"active"],[1,"flavor-pills"],[1,"flavor-pill",3,"active","--swatch-color"],[1,"theme-pill",3,"click"],[1,"flavor-pill",3,"click"],[1,"swatch"]],template:function(e,t){e&1&&(s(0,"button",0),x("click",function(a){return t.toggle(a)}),s(1,"mat-icon"),p(2,"palette"),d()(),A(3,vn,11,0,"div",1)),e&2&&(m("open",t.isOpen()),h(3),P(t.isOpen()?3:-1))},dependencies:[_e,ve],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}.trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:inherit;cursor:pointer;transition:background .15s}.trigger[_ngcontent-%COMP%]:hover{background:#8080801f}.trigger.open[_ngcontent-%COMP%]{background:#80808033}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:1050;min-width:220px;padding:14px 16px 16px;background:var(--surface-1, #f8f9fa);border:1px solid var(--border, #e2e8f0);border-radius:12px;box-shadow:var(--shadow-lg)}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-tertiary, #718096)}.theme-pills[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:14px}.theme-pill[_ngcontent-%COMP%]{flex:1;padding:5px 8px;border:1px solid var(--border, #e2e8f0);border-radius:6px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.theme-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.theme-pill.active[_ngcontent-%COMP%]{background:var(--primary, #3d7a3d);color:var(--primary-text, #fff);border-color:transparent}.flavor-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.flavor-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid var(--border, #e2e8f0);border-radius:20px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.flavor-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.flavor-pill.active[_ngcontent-%COMP%]{background:var(--swatch-color);color:#fff;border-color:transparent}.swatch[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--swatch-color);flex-shrink:0}"]})};var _n=["*"];var bn=new L("MAT_CARD_CONFIG"),zt=(()=>{class n{appearance;constructor(){let e=o(bn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&m("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:_n,decls:1,vars:0,template:function(t,r){t&1&&(v(),u(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var Vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=Z({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Lt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=T({imports:[$]})}return n})();var De=class n{open=ot(!1);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["nav-dropdown"]],inputs:{open:[1,"open"]},decls:27,vars:2,consts:[[1,"dropdown-panel"],[1,"cards-grid"],["routerLink","/login",1,"card-link"],["routerLink","/profile",1,"card-link"],["routerLink","/sudo",1,"card-link"],[1,"btn-group"],["mat-flat-button","","routerLink","/login"],["mat-stroked-button","","routerLink","/register"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"h3"),p(5,"Adventure Awaits"),d(),s(6,"a",2),p(7,"Login (debug)"),d(),s(8,"a",3),p(9,"Profile (debug)"),d(),s(10,"a",4),p(11,"Admin (debug)"),d()()(),s(12,"mat-card")(13,"mat-card-content")(14,"h3"),p(15,"New Releases"),d()()(),s(16,"mat-card")(17,"mat-card-content")(18,"h3"),p(19,"Get in the Game"),d(),s(20,"p"),p(21,"Login or Register to track game releases, make friends, and get cool spam in your inbox."),d(),s(22,"div",5)(23,"button",6),p(24,"Login"),d(),s(25,"button",7),p(26,"Register"),d()()()()()()),e&2&&m("open",t.open())},dependencies:[pt,Lt,zt,Vt,ge,xt],styles:["[_nghost-%COMP%]{display:block}.dropdown-panel[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1);background:var(--surface-crevice);box-shadow:inset 0 12px 24px -8px #000000bf,inset 0 -12px 24px -8px #000000bf}.dropdown-panel.open[_ngcontent-%COMP%]{height:300px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:16px;height:100%;box-sizing:border-box;overflow:auto}.card-link[_ngcontent-%COMP%]{display:block;color:var(--primary);text-decoration:none;padding:2px 0}.card-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.btn-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;width:100%;margin-top:12px}.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}@media(min-width:768px){.btn-group[_ngcontent-%COMP%]{flex-direction:row}.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}}"]})};var Se=class n{menuOpen=f(!1);constructor(){o(he).events.pipe(D(i=>i instanceof pe),be()).subscribe(()=>this.menuOpen.set(!1))}toggleMenu(){this.menuOpen.update(i=>!i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["navigation"]],decls:8,vars:1,consts:[["matIconButton","","aria-label","Main Application Navigation Menu",1,"app-nav-menu",3,"click"],[1,"nav-spacer"],[3,"open"]],template:function(e,t){e&1&&(s(0,"mat-toolbar")(1,"button",0),x("click",function(){return t.toggleMenu()}),s(2,"mat-icon"),p(3,"menu"),d()(),S(4,"next-flavor-brand")(5,"span",1)(6,"theme-picker"),d(),S(7,"nav-dropdown",2)),e&2&&(h(7),nt("open",t.menuOpen()))},dependencies:[Et,Tt,ge,Ct,_e,ve,xe,Me,De],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{overflow:visible}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var Re=class n{isLoading=o(Y).isLoading;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["load-progress-bar"]],decls:2,vars:2,consts:[[1,"track"],[1,"fill"]],template:function(e,t){e&1&&(y(0,"div",0),I(1,"div",1),C()),e&2&&(h(),m("active",t.isLoading()))},styles:["[_nghost-%COMP%]{display:block;height:3px;pointer-events:none}.track[_ngcontent-%COMP%]{width:100%;height:100%;background:color-mix(in srgb,var(--primary, #888) 18%,transparent);overflow:hidden;position:relative;transition:background .3s}.fill[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,transparent 0%,var(--primary, #888) 40%);box-shadow:0 0 10px 1px var(--primary, #888);opacity:0;transform:translate(-100%);transition:opacity .25s ease}.fill.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_bar-sweep 1.5s cubic-bezier(.4,0,.3,1) infinite}@keyframes _ngcontent-%COMP%_bar-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.fill.active[_ngcontent-%COMP%]{animation:none;transform:none;width:100%;background:var(--primary, #888);opacity:.6}}"]})};var Nt="0.0.4 Alpha";var Te=class n{ngVersion=Ye.full;appVersion=Nt;currentYear=new Date().getFullYear();versionText=f(`ng ${this.ngVersion} ${this.appVersion}`);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["footer"]],decls:5,vars:2,consts:[[1,"bg-black","flex","flex-col","items-center","justify-center","py-4","gap-0.5",2,"background-color","black"],[1,"font-mono","text-sm","text-primary"],[1,"font-mono","text-xs","text-primary/50"]],template:function(e,t){e&1&&(y(0,"div",0)(1,"p",1),p(2),C(),y(3,"p",2),p(4),C()()),e&2&&(h(2),ne("\xA9 ",t.currentYear," Shadow Government Holdings LLC"),h(2),it(t.versionText()))},styles:["[_nghost-%COMP%]{display:block}"]})};var Ee=class n{constructor(){let i=o(he),e=o(Y);i.events.pipe(be()).subscribe(t=>{t instanceof dt?e.start():(t instanceof pe||t instanceof ct||t instanceof lt)&&e.stop()})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-root"]],decls:8,vars:0,consts:[[1,"sticky-header"],[1,"sidenav-container"],[1,"main-content"]],template:function(e,t){e&1&&(s(0,"div",0),S(1,"navigation")(2,"load-progress-bar"),d(),s(3,"mat-sidenav-container",1)(4,"mat-sidenav-content")(5,"div",2),S(6,"router-outlet"),d()()(),S(7,"footer"))},dependencies:[Se,Re,Rt,St,ye,mt,Te],encapsulation:2})};st(Ee,Mt).catch(n=>console.error(n));
