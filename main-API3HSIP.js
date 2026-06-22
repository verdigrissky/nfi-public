import{a as Ne}from"./chunk-BQKWM3DB.js";import{a as L,b as Fe,c as $t,d as Qt,g as qt,h as Yt,i as Kt,k as me,l as Xt,m as pe,o as Jt,p as K,q as en,r as Ae,s as ue,u as Ie,v as H,w as $}from"./chunk-JVJ7VTP4.js";import{a as Wt,b as Gt,d as ce,f as Ht}from"./chunk-FSOWBJCD.js";import{a as he}from"./chunk-SPWM6KZS.js";import{c as le,e as At,f as It,h as Nt,i as zt,l as Bt,m as Re,n as Vt,o as Lt,q as jt,r as Te,s as Oe,t as Ut,u as Zt,v as tn}from"./chunk-NJXOK2YI.js";import{$a as m,A as St,B as Et,Bb as _,C as st,Db as f,Eb as A,Fb as M,Gb as ve,Hb as oe,Ib as I,Jb as N,L as Ce,Ma as te,N as z,Oa as Ot,Ob as V,P as Pt,Pa as o,Pb as g,Qb as Pe,Rb as l,Sb as x,T as dt,Tb as P,U,Ua as Se,Ub as Y,Va as ct,Vb as _e,W as X,Wa as Ee,Wb as se,Xb as de,Y as d,_b as Ft,ab as G,ac as mt,ba as T,bb as ne,bc as pt,ca as O,da as xe,db as re,e as bt,ea as Me,ec as be,f as R,fa as J,ga as lt,h as yt,hc as ye,ia as De,j as wt,ja as Z,k as Ct,kb as ie,lb as y,ma as Rt,mb as w,n as xt,na as v,nb as Q,o as Mt,ob as k,p as at,pa as ee,pb as S,qb as q,ra as ke,rb as s,sb as c,ta as W,tb as b,ua as Tt,ub as p,v as Dt,vb as u,w as B,wb as E,x as ot,xb as F,y as kt,yb as ae}from"./chunk-5IJJHCRB.js";var Mn=15e3,nn=(n,i)=>i(n).pipe(Mt(Mn),kt(e=>e instanceof xt||e instanceof It&&e.status===0?(Gt("Connection error. Please check your network and try again."),Ht(),yt):Ct(()=>e)));var rn=[{path:"",loadComponent:()=>import("./chunk-EAN6T4XV.js").then(n=>n.Landing)},{path:"a/login",loadComponent:()=>import("./chunk-NQLT6GGO.js").then(n=>n.Login)},{path:"a/login/with-totp",loadComponent:()=>import("./chunk-NQLT6GGO.js").then(n=>n.Login)},{path:"a/login/with-passkey",loadComponent:()=>import("./chunk-NQLT6GGO.js").then(n=>n.Login)},{path:"a/forgot-password",loadComponent:()=>import("./chunk-WZO3JHOV.js").then(n=>n.ForgotPassword)},{path:"a/new-account",loadComponent:()=>import("./chunk-WBXPKASB.js").then(n=>n.Registration)},{path:"a/logout",loadComponent:()=>import("./chunk-AC7FDGEI.js").then(n=>n.Logout)},{path:"my/profile",loadComponent:()=>import("./chunk-P2FQ7DA3.js").then(n=>n.ProfileView)},{path:"my/friends",loadComponent:()=>import("./chunk-P2FQ7DA3.js").then(n=>n.ProfileView)},{path:"my/calendar",loadComponent:()=>import("./chunk-NEPFM37Z.js").then(n=>n.CalendarView)},{path:"my/settings",loadComponent:()=>import("./chunk-THZ2FEZ5.js").then(n=>n.UserSettings)},{path:"the/calendar",loadComponent:()=>import("./chunk-NEPFM37Z.js").then(n=>n.CalendarView)},{path:"admin",loadComponent:()=>import("./chunk-PHI5JXED.js").then(n=>n.Admin)},{path:"admin/debug",loadComponent:()=>import("./chunk-DJV4IBJ2.js").then(n=>n.Debug)},{path:":gameSlug",loadComponent:()=>import("./chunk-O7LLFOE4.js").then(n=>n.GameView)},{path:"**",loadComponent:()=>import("./chunk-Y3T4R3X6.js").then(n=>n.NotFound)}];var an={providers:[Rt(),Ft(),Ut(rn,Zt()),Nt(zt([nn]))]};var Dn=20,ut=(()=>{class n{_ngZone=d(Z);_platform=d(L);_renderer=d(ct).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Dn){return this._platform.isBrowser?new bt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ot(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):wt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(B(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_scrollableContainsElement(e,t){let r=$t(t),a=e.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fe=(()=>{class n{elementRef=d(W);scrollDispatcher=d(ut);ngZone=d(Z);dir=d(Ae,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=d(Ee);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&pe()!=me.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),pe()==me.INVERTED?e.left=e.right:pe()==me.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Xt()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let h=this.dir&&this.dir.value=="rtl";return e=="start"?e=h?r:t:e=="end"&&(e=h?t:r),h&&pe()==me.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:h&&pe()==me.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),kn=20,on=(()=>{class n{_platform=d(L);_listeners;_viewportSize=null;_change=new R;_document=d(J);constructor(){let e=d(Z),t=d(ct).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=a=>this._change.next(a);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,a=r.getBoundingClientRect(),h=-a.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,j=-a.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:h,left:j}}change(e=kn){return e>0?this._change.pipe(ot(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=dt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=U({})}return n})();var Ve=["*"],En=["content"],Pn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Rn=["mat-drawer","mat-drawer-content","*"];function Tn(n,i){if(n&1){let e=F();s(0,"div",1),_("click",function(){T(e);let r=f();return O(r._onBackdropClicked())}),c()}if(n&2){let e=f();g("mat-drawer-shown",e._isShowingBackdrop())}}function On(n,i){n&1&&(s(0,"mat-drawer-content"),M(1,2),c())}var Fn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],An=["mat-sidenav","mat-sidenav-content","*"];function In(n,i){if(n&1){let e=F();s(0,"div",1),_("click",function(){T(e);let r=f();return O(r._onBackdropClicked())}),c()}if(n&2){let e=f();g("mat-drawer-shown",e._isShowingBackdrop())}}function Nn(n,i){n&1&&(s(0,"mat-sidenav-content"),M(1,2),c())}var zn=`.mat-drawer-container {
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
`;var Bn=new X("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),vt=new X("MAT_DRAWER_CONTAINER"),ze=(()=>{class n extends fe{_platform=d(L);_changeDetectorRef=d(ye);_container=d(gt);constructor(){let e=d(W),t=d(ut),r=d(Z);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(V("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Y([{provide:fe,useExisting:n}]),re],ngContentSelectors:Ve,decls:1,vars:0,template:function(t,r){t&1&&(A(),M(0))},encapsulation:2,changeDetection:0})}return n})(),ft=(()=>{class n{_elementRef=d(W);_focusTrapFactory=d(Yt);_focusMonitor=d(Qt);_platform=d(L);_ngZone=d(Z);_renderer=d(Ee);_interactivityChecker=d(qt);_doc=d(J);_container=d(vt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=K(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=K(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(K(e))}_opened=v(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new De(!0);_openedStream=this.openedChange.pipe(B(e=>e),at(()=>{}));openedStart=this._animationStarted.pipe(B(()=>this.opened),st(void 0));_closedStream=this.openedChange.pipe(B(e=>!e),at(()=>{}));closedStart=this._animationStarted.pipe(B(()=>!this.opened),st(void 0));_destroyed=new R;onPositionChanged=new De;_content;_modeChanged=new R;_injector=d(Me);_changeDetectorRef=d(ye);constructor(){this.openedChange.pipe(z(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Kt(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),h(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",r),h=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Se(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(Et(1)).subscribe(h=>a(h?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&oe(En,5),t&2){let a;I(a=N())&&(r._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(ie("align",null)("tabIndex",r.mode!=="side"?"-1":null),V("visibility",!r._container&&!r.opened?"hidden":null),g("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(A(),s(0,"div",1,0),M(2),c())},dependencies:[fe],encapsulation:2,changeDetection:0})}return n})(),gt=(()=>{class n{_dir=d(Ae,{optional:!0});_element=d(W);_ngZone=d(Z);_changeDetectorRef=d(ye);_animationDisabled=Jt();_transitionsEnabled=!1;_allDrawers;_drawers=new Tt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=K(e)}_autosize=d(Bn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:K(e)}_backdropOverride=null;backdropClick=new De;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=d(Me);constructor(){let e=d(L),t=d(on);this._dir?.change.pipe(z(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(z(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ce(this._allDrawers),z(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ce(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(St(10),z(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(z(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(z(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(z(this._drawers.changes)).subscribe(()=>{Se({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(z(Dt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,a){if(t&1&&ve(a,ze,5)(a,ft,5),t&2){let h;I(h=N())&&(r._content=h.first),I(h=N())&&(r._allDrawers=h)}},viewQuery:function(t,r){if(t&1&&oe(ze,5),t&2){let a;I(a=N())&&(r._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&g("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Y([{provide:vt,useExisting:n}])],ngContentSelectors:Rn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(A(Pn),y(0,Tn,1,2,"div",0),M(1),M(2,1),y(3,On,2,0,"mat-drawer-content")),t&2&&(w(r.hasBackdrop?0:-1),o(3),w(r._content?-1:3))},dependencies:[ze],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),Be=(()=>{class n extends ze{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ke(n)))(r||n)}})();static \u0275cmp=m({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Y([{provide:fe,useExisting:n}]),re],ngContentSelectors:Ve,decls:1,vars:0,template:function(t,r){t&1&&(A(),M(0))},encapsulation:2,changeDetection:0})}return n})(),Vn=(()=>{class n extends ft{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=K(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Fe(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Fe(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ke(n)))(r||n)}})();static \u0275cmp=m({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(ie("tabIndex",r.mode!=="side"?"-1":null)("align",null),V("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),g("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Y([{provide:ft,useExisting:n}]),re],ngContentSelectors:Ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(A(),s(0,"div",1,0),M(2),c())},dependencies:[fe],encapsulation:2,changeDetection:0})}return n})(),sn=(()=>{class n extends gt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ke(n)))(r||n)}})();static \u0275cmp=m({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,a){if(t&1&&ve(a,Be,5)(a,Vn,5),t&2){let h;I(h=N())&&(r._content=h.first),I(h=N())&&(r._allDrawers=h)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&g("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Y([{provide:vt,useExisting:n},{provide:gt,useExisting:n}]),re],ngContentSelectors:An,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(A(Fn),y(0,In,1,2,"div",0),M(1),M(2,1),y(3,Nn,2,0,"mat-sidenav-content")),t&2&&(w(r.hasBackdrop?0:-1),o(3),w(r._content?-1:3))},dependencies:[Be],styles:[zn],encapsulation:2,changeDetection:0})}return n})(),dn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=U({imports:[ht,ue,ht]})}return n})();var jn=["*",[["mat-toolbar-row"]]],Un=["*","mat-toolbar-row"],Zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),ln=(()=>{class n{_elementRef=d(W);_platform=d(L);_document=d(J);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,r,a){if(t&1&&ve(a,Zn,5),t&2){let h;I(h=N())&&(r._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(Pe(r.color?"mat-"+r.color:""),g("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Un,decls:2,vars:0,template:function(t,r){t&1&&(A(jn),M(0),M(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=U({imports:[ue]})}return n})();var Gn=["dpadGroup"],we=700,mn=700,Hn=1400,pn=.35,Le=class n{dpadGroupRef;loadingService=d(ce);reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");isSpinning=v(!1);isSpinEntering=v(!1);spinAnimation=null;kickbackAnim=null;rampRAF=null;settleTimer=null;entryTimer=null;constructor(){ee(()=>{this.loadingService.isLoading()?this.startSpin():this.stopSpin()})}ngAfterViewInit(){}ngOnDestroy(){this.cancelRamp(),this.kickbackAnim?.cancel(),this.spinAnimation?.cancel(),this.settleTimer&&clearTimeout(this.settleTimer),this.entryTimer&&clearTimeout(this.entryTimer)}startSpin(){if(this.kickbackAnim||mt(this.isSpinEntering))return;if(this.cancelRamp(),this.settleTimer&&(clearTimeout(this.settleTimer),this.settleTimer=null),this.spinAnimation){this.ramp(this.spinAnimation.playbackRate,1,mn,"easeIn");return}let i=this.dpadGroupRef?.nativeElement;i&&(this.isSpinEntering.set(!0),this.entryTimer=setTimeout(()=>{if(this.entryTimer=null,this.isSpinEntering.set(!1),this.reducedMotion.matches){this.isSpinning.set(!0);return}i.style.transition="",i.style.transform="",this.kickbackAnim=i.animate([{transform:"rotate(0deg)",easing:"ease-out"},{transform:"rotate(-14deg)",easing:"ease-in"},{transform:"rotate(0deg)"}],{duration:160,iterations:1}),this.kickbackAnim.onfinish=()=>{this.kickbackAnim=null,this.spinAnimation=i.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:we,iterations:1/0,easing:"linear"}),this.spinAnimation.playbackRate=pn,this.isSpinning.set(!0),this.ramp(pn,1,mn,"easeIn")}},200))}stopSpin(){if(this.entryTimer&&(clearTimeout(this.entryTimer),this.entryTimer=null,this.isSpinEntering.set(!1)),this.kickbackAnim&&(this.kickbackAnim.cancel(),this.kickbackAnim=null),!this.spinAnimation){this.isSpinning.set(!1);return}if(this.reducedMotion.matches){this.spinAnimation.cancel(),this.spinAnimation=null,this.isSpinning.set(!1);return}let i=this.spinAnimation.playbackRate;this.cancelRamp(),this.ramp(i,0,Hn,"easeOut",()=>this.snapAndSettle())}snapAndSettle(){if(!this.spinAnimation)return;let i=this.dpadGroupRef.nativeElement,r=(this.spinAnimation.currentTime%we+we)%we/we*360,a=Math.round(r/90)*90;i.style.transform=`rotate(${r}deg)`,this.spinAnimation.cancel(),this.spinAnimation=null,requestAnimationFrame(()=>{i.style.transition="transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",i.style.transform=`rotate(${a}deg)`,this.settleTimer=setTimeout(()=>{this.settleTimer=null,i.style.setProperty("--rest-angle",`${a%360}deg`),i.style.transition="none",i.style.transform="",this.isSpinning.set(!1),requestAnimationFrame(()=>{i.style.transition=""})},480)})}ramp(i,e,t,r,a){this.cancelRamp();let h=performance.now(),j=wn=>{let ge=Math.min((wn-h)/t,1),Cn=r==="easeIn"?ge*ge:1-(1-ge)*(1-ge),xn=i+(e-i)*Cn;this.spinAnimation&&(this.spinAnimation.playbackRate=xn),ge<1?this.rampRAF=requestAnimationFrame(j):(this.rampRAF=null,a?.())};this.rampRAF=requestAnimationFrame(j)}cancelRamp(){this.rampRAF!==null&&(cancelAnimationFrame(this.rampRAF),this.rampRAF=null)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["next-flavor-brand"]],viewQuery:function(e,t){if(e&1&&oe(Gn,5),e&2){let r;I(r=N())&&(t.dpadGroupRef=r.first)}},decls:18,vars:4,consts:[["dpadGroup",""],["viewBox","0 0 1019.13 138.59","fill","white","focusable","false","role","img","aria-label","Next Flavor"],[1,"text-tail"],["d","M224.82,73.21c3.24-4.86.72-27.26,1.5-32.87,0-11.05-8.96-20-20-20-54.22.02-132.66-.01-186.05,0C.16,21.06-.75,39.71.27,55.37c.02,13.39-.02,31.7,0,45.08-.96,15.68-.23,34.26,20,35.03,46.3-.07,140.71.05,186.65,0,24.32-.6,19.88-27.64,20-44.25,0-3.21-.76-6.25-2.1-8.94,0,0,0-9.09,0-9.09Z",1,"flavor-fill"],["d","M1016.86,106.28l-9.33-18c23.25-30.16.68-68.83-36.88-67.94,0,0-72.44,0-72.44,0-5.7,0-10.84,2.4-14.48,6.23-22.42-11.73-58.31-12.36-82.63-2.15-3.44-2.61-7.67-4.08-12.09-4.08-28.97,0-74.01,0-102.99,0-1.38.03-65.66-.02-69.13,0-9.01,0-16.9,6.02-19.29,14.71-1.19,4.32-2.39,8.66-3.61,13.01-1.06,3.87-3.99,14.19-5.03,17.97h-14.19c0-1.81,0-12.25,0-14.31,0,0,0-11.37,0-11.37,0-11.05-8.95-20-20-20,0,0-41.58,0-41.58,0h-3.61c-54.54,0-143.23,0-197.87,0-11.05,0-20,8.95-20,20v30.46c0,11.05,8.95,20,20,20,0,0,4.35,0,4.35,0,0,5.77,0,18.8,0,24.68,0,11.05,8.95,20,20,20h41.58c11.05,0,20-8.95,20-20-.02-7.29.01-17.41,0-24.68,2.11-.02,5.66.13,7.69-.3-.02,6.02.01,18.89,0,24.99,0,11.05,8.95,20,20,20h41.68c9.62,0,17.65-6.79,19.56-15.83h7.06c1.92,9.04,9.94,15.83,19.56,15.83,1.3-.04,80.18.07,81.51-.03,33.58.1,80.2,0,113.75.03,0,0,58.01,0,58.01,0,8.59,0,16.18-5.48,18.92-13.57,23.52,20.28,71.72,21.24,98.34,7.34,3.64,3.83,8.78,6.23,14.48,6.23h100.89c14.81.14,24.71-16.11,17.75-29.21Z",1,"flavor-fill"],[1,"text"],["d","M79.48,25.34h38.57v75.14h-46.39c-.05-.1-12.61-36.11-12.67-36.17-.44,11.4,0,24.53-.15,36.17H20.27V25.34h44.88l14.13,41.58c.56.25.01-41.47.2-41.58Z"],["d","M206.32,50.59h-43.68v5.71h42.18v14.13c-.1.05-42.14-.1-42.18.05-.03.21.02,5.56,0,5.76h44.28v24.25h-84.86V25.34h84.26v25.25Z"],["d","M401.99,25.34v30.46h-24.15c-.58,14.59,0,29.89-.2,44.68h-41.58c-.05-14.87.1-29.79-.05-44.63-.1-.15-24.16,0-24.3-.05v-30.46h90.27Z"],["d","M509.59,54.8h-42.58v5.91s0,.1,0,.1h41.08v23.84h-41.08v15.83h-41.68V25.34h84.26v29.46Z"],["d","M554.77,70.83c-.07.58,39.07,0,39.27.2v29.46h-80.85V25.34h41.58v45.49Z"],["d","M679.11,25.34c7.13,25.03,14.15,50.09,21.24,75.14h-44.68l-1.7-9.82h-13.62l-1.7,9.82h-42.78c7.07-25.04,14.08-50.08,21.04-75.14h62.22ZM641.53,83.65c.1.03,11.01-.02,11.12,0-1.66-11.58-3.54-21.8-5.51-33.46h-.1c-1.98,11.72-3.67,21.71-5.51,33.46Z"],["d","M789.01,25.34c-7.43,25.07-14.95,50.12-22.54,75.14h-58.01c-7.47-25.05-14.89-50.11-22.44-75.14h44.68c2.55,15.56,4.87,31.13,7.41,46.69h.2c2.43-15.55,4.99-31.13,7.41-46.69h43.28Z"],["d","M840.11,103.49c-26.05.78-55.53-11.07-55.1-40.68-.54-29.46,29.27-41.28,55.1-40.47,27.49-.71,55.17,11.35,55.1,40.48.53,29.23-28.79,41.62-55.1,40.68ZM840.21,71.63c16.35.7,16.55-18.11,0-17.43-16.64-.9-16.84,18.19,0,17.43Z"],["d","M983.68,70.73h-4.91c-.94.02-1.13-1.4-.21-1.62,19.76-4.49,25.6-30.85,6.72-40.61-8.21-6.22-76.45-1.99-87.06-3.16v75.14h41.58c.2-15.54-.38-28.81.2-44.68,6.09.43,19.49-2.52,19.54,7.01-.09,9.58-13.67,6.56-19.74,7.01,3.97,10.2,7.88,20.42,11.72,30.66h47.59l-15.43-29.76Z"],[1,"dpad-group"],["d","M304.43,67.68l18.95-25.35c5-6.69,4.32-16.18-1.59-22.09l-15.29-15.29C303.31,1.76,299.06,0,294.54,0c-3.68,0-7.18,1.16-10.12,3.37l-25.35,18.95-25.35-18.95C230.77,1.16,227.27,0,223.6,0h0c-4.52,0-8.77,1.76-11.96,4.95l-15.29,15.29c-5.9,5.9-6.59,15.4-1.59,22.09l18.95,25.35-18.95,25.35c-5,6.69-4.32,16.18,1.59,22.09l15.29,15.29c3.19,3.19,7.44,4.95,11.96,4.95,3.68,0,7.18-1.16,10.12-3.37l25.35-18.95,25.35,18.95c2.95,2.2,6.45,3.37,10.12,3.37,4.52,0,8.77-1.76,11.96-4.95l15.29-15.29c5.9-5.9,6.59-15.4,1.59-22.09l-18.95-25.35Z",1,"flavor-fill"],["d","M288.01,8.17l-28.94,21.64-28.94-21.64c-4.34-3.25-10.42-2.81-14.25,1.02l-15.29,15.29c-3.84,3.84-4.27,9.91-1.02,14.25l21.64,28.94-21.64,28.94c-3.25,4.34-2.81,10.42,1.02,14.25l15.29,15.29c3.84,3.84,9.91,4.27,14.25,1.02l28.94-21.64,28.94,21.64c4.34,3.25,10.42,2.81,14.25-1.02l15.29-15.29c3.84-3.84,4.27-9.91,1.02-14.25l-21.64-28.94,21.64-28.94c3.25-4.34,2.81-10.42-1.02-14.25l-15.29-15.29c-3.84-3.84-9.91-4.27-14.25-1.02ZM221.9,107.83c2.37,2.37.69,6.43-2.66,6.43h-6.75v-6.75c0-3.35,4.06-5.03,6.43-2.66l2.98,2.98ZM305.65,107.51v6.75h-6.75c-3.35,0-5.03-4.06-2.66-6.43l2.98-2.98c2.37-2.37,6.43-.69,6.43,2.66ZM221.9,27.52l-2.98,2.98c-2.37,2.37-6.43.69-6.43-2.66v-6.75h6.75c3.35,0,5.03,4.06,2.66,6.43ZM305.65,27.85c0,3.35-4.06,5.03-6.43,2.66l-2.98-2.98c-2.37-2.37-.69-6.43,2.66-6.43h6.75v6.75Z"]],template:function(e,t){e&1&&(xe(),p(0,"svg",1)(1,"g",2),E(2,"path",3)(3,"path",4),u(),p(4,"g",5),E(5,"path",6)(6,"path",7)(7,"path",8)(8,"path",9)(9,"path",10)(10,"path",11)(11,"path",12)(12,"path",13)(13,"path",14),u(),p(14,"g",15,0),E(16,"path",16)(17,"path",17),u()()),e&2&&(o(14),g("spinning",t.isSpinning())("spin-entering",t.isSpinEntering()))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;height:32px;cursor:pointer}svg[_ngcontent-%COMP%]{height:100%;width:auto;overflow:visible}.flavor-fill[_ngcontent-%COMP%]{fill:var(--primary, #888)}.dpad-group[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rest-angle, 0deg));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]:hover   .dpad-group[_ngcontent-%COMP%]:not(.spinning):not(.spin-entering){transform:rotate(calc(var(--rest-angle, 0deg) + 90deg))}.dpad-group.spin-entering[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dpad-group.spinning[_ngcontent-%COMP%]{transition:none}@media(prefers-reduced-motion:reduce){.dpad-group[_ngcontent-%COMP%]{transition:none!important}}"]})};var $n=(n,i)=>i.id;function Qn(n,i){if(n&1){let e=F();s(0,"button",8),_("click",function(){let r=T(e).$implicit,a=f(2);return O(a.selectTheme(r))}),l(1),c()}if(n&2){let e=i.$implicit,t=f(2);g("active",t.activeTheme()===e),o(),P(" ",e," ")}}function qn(n,i){if(n&1){let e=F();s(0,"button",9),_("click",function(){let r=T(e).$implicit,a=f(2);return O(a.selectFlavor(r.id))}),b(1,"span",10),l(2),c()}if(n&2){let e=i.$implicit,t=f(2);V("--swatch-color",e.color),g("active",t.activeFlavor()===e.id),o(2),P(" ",e.label," ")}}function Yn(n,i){if(n&1&&(s(0,"div",2),_("click",function(t){return t.stopPropagation()}),s(1,"p",3),l(2,"Appearance"),c(),s(3,"div",4),k(4,Qn,2,3,"button",5,Q),c(),s(6,"p",3),l(7,"Flavor"),c(),s(8,"div",6),k(9,qn,3,5,"button",7,$n),c()()),n&2){let e=f();o(4),S(e.themes),o(5),S(e.flavors)}}var un="theme",hn="flavor",fn=["Night","Day","System"],gn=[{id:"avocado",label:"Avocado",color:"#3d7a3d"},{id:"cherry",label:"Cherry",color:"#b52a2a"},{id:"grape",label:"Grape",color:"#6a2d8a"},{id:"lime",label:"Lime",color:"#5c8c1e"},{id:"orange",label:"Orange",color:"#c46a0a"}],je=class n{storage=d(tn);themes=fn;flavors=gn;isOpen=v(!1);activeTheme=v("Night");activeFlavor=v("avocado");mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");mediaListener=()=>this.applyDataTheme(this.activeTheme());onDocumentClick(){this.isOpen.set(!1)}ngOnInit(){let i=this.storage.get(un),e=i&&fn.includes(i)?i:"Night";this.activeTheme.set(e),this.applyTheme(e);let t=this.storage.get(hn),r=gn.map(h=>h.id),a=t&&r.includes(t)?t:"avocado";this.activeFlavor.set(a),this.applyFlavor(a)}ngOnDestroy(){this.mediaQuery.removeEventListener("change",this.mediaListener)}toggle(i){i.stopPropagation(),this.isOpen.update(e=>!e)}selectTheme(i){this.activeTheme.set(i),this.storage.set(un,i),this.applyTheme(i)}selectFlavor(i){this.activeFlavor.set(i),this.storage.set(hn,i),this.applyFlavor(i)}applyTheme(i){this.mediaQuery.removeEventListener("change",this.mediaListener),i==="System"&&this.mediaQuery.addEventListener("change",this.mediaListener),this.applyDataTheme(i)}applyDataTheme(i){let e=i==="System"?this.mediaQuery.matches?"night":"day":i.toLowerCase();document.documentElement.setAttribute("data-theme",e)}applyFlavor(i){document.documentElement.setAttribute("data-flavor",i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["theme-picker"]],hostBindings:function(e,t){e&1&&_("click",function(){return t.onDocumentClick()},Ot)},decls:4,vars:3,consts:[["aria-label","Appearance settings",1,"trigger",3,"click"],[1,"dropdown"],[1,"dropdown",3,"click"],[1,"section-label"],[1,"theme-pills"],[1,"theme-pill",3,"active"],[1,"flavor-pills"],[1,"flavor-pill",3,"active","--swatch-color"],[1,"theme-pill",3,"click"],[1,"flavor-pill",3,"click"],[1,"swatch"]],template:function(e,t){e&1&&(s(0,"button",0),_("click",function(a){return t.toggle(a)}),s(1,"mat-icon"),l(2,"palette"),c()(),y(3,Yn,11,0,"div",1)),e&2&&(g("open",t.isOpen()),o(3),w(t.isOpen()?3:-1))},dependencies:[$,H],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}.trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:inherit;cursor:pointer;transition:background .15s}.trigger[_ngcontent-%COMP%]:hover{background:#8080801f}.trigger.open[_ngcontent-%COMP%]{background:#80808033}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:1050;min-width:220px;padding:14px 16px 16px;background:var(--surface-1, #f8f9fa);border:1px solid var(--border, #e2e8f0);border-radius:12px;box-shadow:var(--shadow-lg)}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-tertiary, #718096)}.theme-pills[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:14px}.theme-pill[_ngcontent-%COMP%]{flex:1;padding:5px 8px;border:1px solid var(--border, #e2e8f0);border-radius:6px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.theme-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.theme-pill.active[_ngcontent-%COMP%]{background:var(--primary, #3d7a3d);color:var(--primary-text, #fff);border-color:transparent}.flavor-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.flavor-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid var(--border, #e2e8f0);border-radius:20px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.flavor-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.flavor-pill.active[_ngcontent-%COMP%]{background:var(--swatch-color);color:#fff;border-color:transparent}.swatch[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--swatch-color);flex-shrink:0}"]})};var Kn=["*"];var Xn=new X("MAT_CARD_CONFIG"),vn=(()=>{class n{appearance;constructor(){let e=d(Xn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=m({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&g("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Kn,decls:1,vars:0,template:function(t,r){t&1&&(A(),M(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var _n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=ne({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var bn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=G({type:n});static \u0275inj=U({imports:[ue]})}return n})();var Ue=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-login-register-card"]],decls:9,vars:0,consts:[[1,"card-title"],[1,"btn-group"],["mat-flat-button","","routerLink","/a/login"],["mat-stroked-button","","routerLink","/a/new-account"]],template:function(e,t){e&1&&(s(0,"h3",0),l(1,"Get in the Game"),c(),s(2,"p"),l(3," Login or Register to track game releases, make friends, and get cool spam in your inbox. "),c(),s(4,"div",1)(5,"button",2),l(6," Login "),c(),s(7,"button",3),l(8," Register "),c()())},dependencies:[Oe],encapsulation:2})};var Ze=class n{auth=d(he);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-user-card"]],decls:15,vars:1,consts:[[1,"card-title"],["routerLink","/my/profile"],["routerLink","/my/friends"],["routerLink","/my/settings"],["routerLink","/a/logout"]],template:function(e,t){e&1&&(s(0,"h3",0),l(1),c(),s(2,"ul")(3,"li")(4,"a",1),l(5,"Profile"),c()(),s(6,"li")(7,"a",2),l(8,"Friends"),c()(),s(9,"li")(10,"a",3),l(11,"Settings"),c()(),s(12,"li")(13,"a",4),l(14,"Logout"),c()()()),e&2&&(o(),x(t.auth.username()))},dependencies:[Oe],encapsulation:2})};var We=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-calendar-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"Minimap"),u())},encapsulation:2})};var Ge=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-developer-social-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"From the Developers"),u())},encapsulation:2})};var He=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-forecast-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"Gaming Forecast"),u())},encapsulation:2})};var er=(n,i)=>i.title;function tr(n,i){n&1&&(p(0,"span",6),l(1,"EA"),u())}function nr(n,i){if(n&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),l(4),y(5,tr,2,0,"span",6),u(),p(6,"span",7),l(7),se(8,"date"),p(9,"span",8),l(10),u()()()),n&2){let e=i.$implicit,t=f();o(2),ae("src",e.imageSource,te)("alt",e.title),o(2),P(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),P(" ",de(8,6,t.releaseDate(e),"MM/dd/yyyy")," "),o(3),x(t.timeUntil(e))}}var $e=class n{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(i){return i.release.earlyAccessDate??i.release.date??i.release.premiumDate??null}timeUntil(i){let e=this.releaseDate(i);if(e===null)return"";let t=e-Date.now();if(t<=0)return"Out now";let r=Math.floor(t/6e4);if(r<60)return`In ${r} minute${r!==1?"s":""}`;let a=Math.floor(t/36e5);if(a<24)return`In ${a} hour${a!==1?"s":""}`;let h=Math.floor(t/864e5);return`In ${h} day${h!==1?"s":""}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-new-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"New Releases"),u(),p(2,"div",1),k(3,nr,11,9,"div",2,er),u()),e&2&&(o(3),S(t.newReleases))},dependencies:[le],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var rr=(n,i)=>i.title;function ir(n,i){n&1&&(p(0,"span",6),l(1,"EA"),u())}function ar(n,i){if(n&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),l(4),y(5,ir,2,0,"span",6),u(),p(6,"span",7),l(7),se(8,"date"),p(9,"span",8),l(10),u()()()),n&2){let e=i.$implicit,t=f();o(2),ae("src",e.imageSource,te)("alt",e.title),o(2),P(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),P(" ",de(8,6,t.releaseDate(e),"MM/dd/yyyy")," "),o(3),x(t.timeUntil(e))}}var Qe=class n{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(i){return i.release.earlyAccessDate??i.release.date??i.release.premiumDate??null}timeUntil(i){let e=this.releaseDate(i);if(e===null)return"";let t=e-Date.now();if(t<=0)return"Out now";let r=Math.floor(t/6e4);if(r<60)return`In ${r} minute${r!==1?"s":""}`;let a=Math.floor(t/36e5);if(a<24)return`In ${a} hour${a!==1?"s":""}`;let h=Math.floor(t/864e5);return`In ${h} day${h!==1?"s":""}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-user-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"Your Releases"),u(),p(2,"div",1),k(3,ar,11,9,"div",2,rr),u()),e&2&&(o(3),S(t.newReleases))},dependencies:[le],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var or=(n,i)=>i.title;function sr(n,i){n&1&&(p(0,"span",6),l(1,"EA"),u())}function dr(n,i){if(n&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),l(4),y(5,sr,2,0,"span",6),u(),p(6,"span",7),l(7),se(8,"date"),p(9,"span",8),l(10),u()()()),n&2){let e=i.$implicit,t=f();o(2),ae("src",e.imageSource,te)("alt",e.title),o(2),P(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),P(" ",de(8,6,t.releaseDate(e),"MM/dd/yyyy")," "),o(3),x(t.timeUntil(e))}}var qe=class n{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(i){return i.release.earlyAccessDate??i.release.date??i.release.premiumDate??null}timeUntil(i){let e=this.releaseDate(i);if(e===null)return"";let t=e-Date.now();if(t<=0)return"Out now";let r=Math.floor(t/6e4);if(r<60)return`In ${r} minute${r!==1?"s":""}`;let a=Math.floor(t/36e5);if(a<24)return`In ${a} hour${a!==1?"s":""}`;let h=Math.floor(t/864e5);return`In ${h} day${h!==1?"s":""}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-pinned-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,t){e&1&&(p(0,"h3",0),l(1,"Pinned Releases"),u(),p(2,"div",1),k(3,dr,11,9,"div",2,or),u()),e&2&&(o(3),S(t.newReleases))},dependencies:[le],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var Ye=n=>[n];function lr(n,i){n&1&&b(0,"nav-calendar-card")}function cr(n,i){n&1&&b(0,"nav-developer-social-card")}function mr(n,i){n&1&&b(0,"nav-forecast-card")}function pr(n,i){if(n&1&&(s(0,"div",6),y(1,lr,1,0,"nav-calendar-card")(2,cr,1,0,"nav-developer-social-card")(3,mr,1,0,"nav-forecast-card"),c()),n&2){let e,t=f();o(),w((e=t.slot1Cards()[t.card1Index()])==="calendar"?1:e==="developerBluesky"?2:e==="forecast"?3:-1)}}function ur(n,i){if(n&1&&b(0,"div",13),n&2){let e=f(2);g("paused",e.paused1()||e.hovering1())}}function hr(n,i){if(n&1){let e=F();s(0,"div",7)(1,"div",10),k(2,ur,1,2,"div",11,Q),c(),s(4,"button",12),_("click",function(){T(e);let r=f();return O(r.togglePause(1))}),s(5,"mat-icon"),l(6),c()()()}if(n&2){let e=f();o(2),S(_e(2,Ye,e.card1Index())),o(2),ie("aria-label",e.paused1()?"Resume":"Pause"),o(2),x(e.paused1()?"play_arrow":"pause")}}function fr(n,i){n&1&&b(0,"nav-new-releases-card")}function gr(n,i){n&1&&b(0,"nav-user-releases-card")}function vr(n,i){n&1&&b(0,"nav-pinned-releases-card")}function _r(n,i){if(n&1&&(s(0,"div",6),y(1,fr,1,0,"nav-new-releases-card")(2,gr,1,0,"nav-user-releases-card")(3,vr,1,0,"nav-pinned-releases-card"),c()),n&2){let e,t=f();o(),w((e=t.slot2Cards()[t.card2Index()])==="newReleases"?1:e==="yourReleases"?2:e==="pinnedReleases"?3:-1)}}function br(n,i){if(n&1&&b(0,"div",13),n&2){let e=f(2);g("paused",e.paused2()||e.hovering2())}}function yr(n,i){if(n&1){let e=F();s(0,"div",7)(1,"div",10),k(2,br,1,2,"div",11,Q),c(),s(4,"button",12),_("click",function(){T(e);let r=f();return O(r.togglePause(2))}),s(5,"mat-icon"),l(6),c()()()}if(n&2){let e=f();o(2),S(_e(2,Ye,e.card2Index())),o(2),ie("aria-label",e.paused2()?"Resume":"Pause"),o(2),x(e.paused2()?"play_arrow":"pause")}}function wr(n,i){n&1&&b(0,"nav-user-card")}function Cr(n,i){n&1&&b(0,"nav-login-register-card")}var Ke=class n{open=be(!1);isAuthenticated=be(!1);userCardPreferences=v([{card:"calendar",display:1},{card:"developerBluesky",display:1},{card:"forecast",display:1},{card:"newReleases",display:2},{card:"yourReleases",display:2},{card:"pinnedReleases",display:2}]);slot1Cards=pt(()=>this.userCardPreferences().filter(i=>i.display===1).map(i=>i.card));slot2Cards=pt(()=>this.userCardPreferences().filter(i=>i.display===2).map(i=>i.card));card1Index=v(0);card2Index=v(0);card1Dir=v("down");card2Dir=v("down");hovering1=v(!1);hovering2=v(!1);paused1=v(!1);paused2=v(!1);autoInterval=4800;timer1=null;timer2=null;destroyRef=d(lt);constructor(){ee(()=>{this.open()&&!this.paused1()&&!this.hovering1()?this.startSlot1():this.stopSlot1()}),ee(()=>{this.open()&&!this.paused2()&&!this.hovering2()?this.startSlot2():this.stopSlot2()}),this.destroyRef.onDestroy(()=>{this.stopSlot1(),this.stopSlot2()})}startSlot1(){this.stopSlot1(),this.slot1Cards().length>1&&(this.timer1=setInterval(()=>this.cycle(1,"next"),this.autoInterval))}stopSlot1(){this.timer1!==null&&(clearInterval(this.timer1),this.timer1=null)}startSlot2(){this.stopSlot2(),this.slot2Cards().length>1&&(this.timer2=setInterval(()=>this.cycle(2,"next"),this.autoInterval))}stopSlot2(){this.timer2!==null&&(clearInterval(this.timer2),this.timer2=null)}cycle(i,e){let t=i===1?this.slot1Cards():this.slot2Cards(),r=i===1?this.card1Index:this.card2Index;(i===1?this.card1Dir:this.card2Dir).set(e==="next"?"down":"up"),r.update(h=>{let j=e==="next"?h+1:h-1;return j<0||j>=t.length?0:j}),i===1&&!this.paused1()&&!this.hovering1()&&this.open()?this.startSlot1():i===2&&!this.paused2()&&!this.hovering2()&&this.open()&&this.startSlot2()}togglePause(i){i===1?this.paused1.update(e=>!e):this.paused2.update(e=>!e)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-dropdown"]],inputs:{open:[1,"open"],isAuthenticated:[1,"isAuthenticated"]},decls:36,vars:21,consts:[[1,"dropdown-panel"],[1,"cards-grid"],[1,"card-col"],["aria-label","Previous",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper",3,"mouseenter","mouseleave"],[1,"card-slot"],[1,"card-anim"],[1,"card-overlay"],["aria-label","Next",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper"],[1,"countdown-track"],[1,"countdown-fill",3,"paused"],[1,"pause-btn",3,"click"],[1,"countdown-fill"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),_("click",function(){return t.cycle(1,"prev")}),s(4,"mat-icon"),l(5,"keyboard_arrow_up"),c()(),s(6,"div",4),_("mouseenter",function(){return t.hovering1.set(!0)})("mouseleave",function(){return t.hovering1.set(!1)}),s(7,"mat-card")(8,"mat-card-content")(9,"div",5),k(10,pr,4,1,"div",6,Q),c()()(),y(12,hr,7,4,"div",7),c(),s(13,"button",8),_("click",function(){return t.cycle(1,"next")}),s(14,"mat-icon"),l(15,"keyboard_arrow_down"),c()()(),s(16,"div",2)(17,"button",3),_("click",function(){return t.cycle(2,"prev")}),s(18,"mat-icon"),l(19,"keyboard_arrow_up"),c()(),s(20,"div",4),_("mouseenter",function(){return t.hovering2.set(!0)})("mouseleave",function(){return t.hovering2.set(!1)}),s(21,"mat-card")(22,"mat-card-content")(23,"div",5),k(24,_r,4,1,"div",6,Q),c()()(),y(26,yr,7,4,"div",7),c(),s(27,"button",8),_("click",function(){return t.cycle(2,"next")}),s(28,"mat-icon"),l(29,"keyboard_arrow_down"),c()()(),s(30,"div",2)(31,"div",9)(32,"mat-card")(33,"mat-card-content"),y(34,wr,1,0,"nav-user-card")(35,Cr,1,0,"nav-login-register-card"),c()()()()()()),e&2&&(g("open",t.open()),o(3),q("disabled",t.slot1Cards().length<=1),o(6),g("from-down",t.card1Dir()==="down")("from-up",t.card1Dir()==="up"),o(),S(_e(17,Ye,t.card1Index())),o(2),w(t.slot1Cards().length>1?12:-1),o(),q("disabled",t.slot1Cards().length<=1),o(4),q("disabled",t.slot2Cards().length<=1),o(6),g("from-down",t.card2Dir()==="down")("from-up",t.card2Dir()==="up"),o(),S(_e(19,Ye,t.card2Index())),o(2),w(t.slot2Cards().length>1?26:-1),o(),q("disabled",t.slot2Cards().length<=1),o(7),w(t.isAuthenticated()?34:35))},dependencies:[bn,vn,_n,Ie,$,H,Ue,Ze,We,Ge,He,$e,Qe,qe],styles:["[_nghost-%COMP%]{display:block}.dropdown-panel[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);background:var(--surface-crevice);box-shadow:inset 0 12px 24px -8px #000000bf,inset 0 -12px 24px -8px #000000bf}.dropdown-panel.open[_ngcontent-%COMP%]{height:340px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:12px 16px;height:100%;box-sizing:border-box}.card-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-height:0}.full-arrow[_ngcontent-%COMP%]{width:100%;height:20px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:var(--text-secondary, #888);cursor:pointer;border-radius:4px;flex-shrink:0;padding:0;transition:background .15s ease,color .15s ease,opacity .15s ease}.full-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.full-arrow[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--primary)}.full-arrow[_ngcontent-%COMP%]:disabled{opacity:0;pointer-events:none;cursor:default}.card-wrapper[_ngcontent-%COMP%]{position:relative;flex:1;min-height:0;display:flex;flex-direction:column}mat-card[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:hidden}[_nghost-%COMP%]     mat-card{padding:0!important}[_nghost-%COMP%]     mat-card-content{padding:0!important;margin-bottom:0!important}[_nghost-%COMP%]     .card-title{margin:0;padding:6px 8px 4px}.card-slot[_ngcontent-%COMP%]{overflow:hidden;height:100%}.card-slot.from-down[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-bottom .22s cubic-bezier(.4,0,.2,1)}.card-slot.from-up[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-top .22s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_slide-from-bottom{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slide-from-top{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}.card-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;gap:6px;padding:10px 8px 6px;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 100%);border-radius:0 0 12px 12px}.countdown-track[_ngcontent-%COMP%]{flex:1;height:3px;background:#ffffff2e;border-radius:2px;overflow:hidden;position:relative;opacity:.5;transition:opacity .15s ease}.card-wrapper[_ngcontent-%COMP%]:hover   .countdown-track[_ngcontent-%COMP%]{opacity:1}.countdown-fill[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--primary);transform-origin:left center;animation:_ngcontent-%COMP%_countdown 5s linear forwards}.countdown-fill.paused[_ngcontent-%COMP%]{animation-play-state:paused}@keyframes _ngcontent-%COMP%_countdown{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.pause-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20px;height:20px;background:#0006;border:none;color:#fffc;cursor:pointer;border-radius:4px;padding:0;flex-shrink:0;opacity:.5;transition:background .15s ease,color .15s ease,opacity .15s ease}.pause-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;line-height:13px}.pause-btn[_ngcontent-%COMP%]:hover{background:#0009;color:#fff;opacity:1}"]})};var Xe=class n{size=be("small");static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["profile-photo-viewer"]],hostVars:2,hostBindings:function(e,t){e&2&&Pe(t.size())},inputs:{size:[1,"size"]},decls:7,vars:0,consts:[[1,"avatar-frame"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512"],["width","520","height","520",2,"fill","var(--surface-1)"],["d","M259.54,308.58h0c-107.45,0-199.25,76.05-220.03,180.44-1.48,7.41-4.48,14.43-8.88,20.57l-7.51,10.46h472.85l-7.51-10.46c-4.4-6.14-7.41-13.16-8.88-20.57-20.78-104.39-112.58-180.44-220.03-180.44Z",2,"fill","var(--primary)"],["d","M260,319h0c-100.86,0-186.52,73.83-201.41,173.58l-4.09,27.43h411l-4.09-27.43c-14.89-99.75-100.55-173.58-201.41-173.58Z",2,"fill","var(--primary-text)"],["d","M374.5,239.24l47.83-63.98c12.62-16.88,10.9-40.85-4-55.75l-38.6-38.6c-8.06-8.06-18.79-12.5-30.19-12.5-9.28,0-18.12,2.94-25.55,8.5l-63.98,47.83-63.98-47.83c-7.44-5.56-16.27-8.5-25.55-8.5h0c-11.4,0-22.13,4.44-30.19,12.5l-38.6,38.6c-14.9,14.9-16.62,38.87-4,55.75l47.83,63.98-47.83,63.98c-12.62,16.88-10.9,40.85,4,55.75l38.6,38.6c8.06,8.06,18.79,12.5,30.19,12.5,9.28,0,18.12-2.94,25.55-8.5l63.98-47.83,63.98,47.83c7.44,5.56,16.27,8.5,25.55,8.5,11.4,0,22.13-4.44,30.19-12.5l38.6-38.6c14.9-14.9,16.62-38.87,4-55.75l-47.83-63.98h0Z",2,"fill","var(--primary)"],["d","M333.04,89.04l-73.04,54.61-73.04-54.61c-10.97-8.2-26.29-7.1-35.97,2.59l-38.6,38.6c-9.68,9.68-10.78,25-2.59,35.97l54.61,73.04-54.61,73.04c-8.2,10.97-7.1,26.29,2.59,35.97l38.6,38.6c9.68,9.68,25,10.78,35.97,2.59l73.04-54.61,73.04,54.61c10.97,8.2,26.29,7.1,35.97-2.59l38.6-38.6c9.68-9.68,10.78-25,2.59-35.97l-54.61-73.04,54.61-73.04c8.2-10.97,7.1-26.29-2.59-35.97l-38.6-38.6c-9.68-9.68-25-10.78-35.97-2.59h0ZM166.18,340.59c5.98,5.98,1.75,16.23-6.72,16.23h-17.04v-17.04c0-8.47,10.24-12.71,16.23-6.72l7.53,7.53ZM377.57,339.77v17.04h-17.04c-8.47,0-12.71-10.24-6.72-16.23l7.53-7.53c5.98-5.98,16.23-1.75,16.23,6.72h0ZM166.18,137.89l-7.53,7.53c-5.98,5.98-16.23,1.75-16.23-6.72v-17.04h17.04c8.47,0,12.71,10.24,6.72,16.23ZM377.57,138.71c0,8.47-10.24,12.71-16.23,6.72l-7.53-7.53c-5.98-5.98-1.75-16.23,6.72-16.23h17.04v17.04Z",2,"fill","var(--primary-text)"]],template:function(e,t){e&1&&(p(0,"div",0),xe(),p(1,"svg",1),E(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6),u()())},styles:["[_nghost-%COMP%]{display:block}.tiny[_nghost-%COMP%]{width:32px}.small[_nghost-%COMP%]{width:48px}.medium[_nghost-%COMP%]{width:80px}.avatar-frame[_ngcontent-%COMP%]{width:100%;border:solid var(--primary);border-width:1px 3px 6px;border-radius:15px;corner-shape:squircle;overflow:hidden;aspect-ratio:1}svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]})};var Je=class n{auth=d(he);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["nav-user-corner"]],decls:3,vars:1,consts:[["size","tiny"],[1,"username"]],template:function(e,t){e&1&&(b(0,"profile-photo-viewer",0),s(1,"span",1),l(2),c()),e&2&&(o(2),x(t.auth.username()))},dependencies:[Xe],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:8px}.username[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--text-primary)}"]})};function xr(n,i){if(n&1){let e=F();s(0,"nav-user-corner",5),_("click",function(){T(e);let r=f();return O(r.toggleMenu())}),c()}}var et=class n{menuOpen=v(!1);auth=d(he);constructor(){d(Te).events.pipe(B(i=>i instanceof Re),Ne()).subscribe(()=>this.menuOpen.set(!1))}toggleMenu(){this.menuOpen.update(i=>!i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["navigation"]],decls:9,vars:3,consts:[["matIconButton","","aria-label","Main Application Navigation Menu",1,"app-nav-menu",3,"click"],[3,"click"],[1,"nav-spacer"],[1,"cursor-pointer"],[3,"open","isAuthenticated"],[1,"cursor-pointer",3,"click"]],template:function(e,t){e&1&&(s(0,"mat-toolbar")(1,"button",0),_("click",function(){return t.toggleMenu()}),s(2,"mat-icon"),l(3,"menu"),c()(),s(4,"next-flavor-brand",1),_("click",function(){return t.toggleMenu()}),c(),b(5,"span",2),y(6,xr,1,0,"nav-user-corner",3),b(7,"theme-picker"),c(),b(8,"nav-dropdown",4)),e&2&&(o(6),w(t.auth.isLoggedIn()?6:-1),o(2),q("open",t.menuOpen())("isAuthenticated",t.auth.isLoggedIn()))},dependencies:[cn,ln,Ie,en,$,H,Le,Je,je,Ke],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{overflow:visible}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var tt=class n{isLoading=d(ce).isLoading;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["load-progress-bar"]],decls:2,vars:2,consts:[[1,"track"],[1,"fill"]],template:function(e,t){e&1&&(p(0,"div",0),E(1,"div",1),u()),e&2&&(o(),g("active",t.isLoading()))},styles:["[_nghost-%COMP%]{display:block;height:3px;pointer-events:none}.track[_ngcontent-%COMP%]{width:100%;height:100%;background:color-mix(in srgb,var(--primary, #888) 18%,transparent);overflow:hidden;position:relative;transition:background .3s}.fill[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,transparent 0%,var(--primary, #888) 40%);box-shadow:0 0 10px 1px var(--primary, #888);opacity:0;transform:translate(-100%);transition:opacity .25s ease}.fill.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_bar-sweep 1.5s cubic-bezier(.4,0,.3,1) infinite}@keyframes _ngcontent-%COMP%_bar-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.fill.active[_ngcontent-%COMP%]{animation:none;transform:none;width:100%;background:var(--primary, #888);opacity:.6}}"]})};var Mr=(n,i)=>i.id;function Dr(n,i){if(n&1){let e=F();s(0,"div",3)(1,"div",4)(2,"div",5)(3,"mat-icon",6),l(4),c(),s(5,"span",7),l(6),c(),s(7,"button",8),_("click",function(){let r=T(e).$implicit,a=f();return O(a.startDismiss(r.id))}),s(8,"mat-icon",9),l(9,"close"),c()()()()()}if(n&2){let e=i.$implicit,t=f();g("dismissing",t.dismissing().has(e.id)),o(2),V("--alert-color",t.typeColor[e.type])("--alert-bg",t.typeBg[e.type]),o(2),x(t.typeIcon[e.type]),o(2),x(e.message)}}var kr={error:"error_outline",warning:"warning_amber",info:"info_outline"},Sr={error:"var(--error)",warning:"var(--warning)",info:"var(--info)"},Er={error:"var(--error-bg)",warning:"var(--warning-bg)",info:"var(--info-bg)"},nt=class n{service=d(Wt);dismissing=v(new Set);typeIcon=kr;typeColor=Sr;typeBg=Er;startDismiss(i){this.dismissing.update(e=>new Set([...e,i])),setTimeout(()=>{this.service.dismiss(i),this.dismissing.update(e=>{let t=new Set(e);return t.delete(i),t})},290)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["alert-display"]],decls:4,vars:2,consts:[["aria-live","polite","aria-atomic","false",1,"panel"],[1,"inner"],[1,"alert-wrap",3,"dismissing"],[1,"alert-wrap"],[1,"alert-content"],[1,"alert-row"],[1,"alert-icon"],[1,"alert-message"],["aria-label","Dismiss alert",1,"dismiss-btn",3,"click"],[1,"dismiss-icon"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"div",1),k(2,Dr,10,8,"div",2,Mr),c()()),e&2&&(g("open",t.service.hasAlerts()),o(2),S(t.service.alerts()))},dependencies:[$,H],styles:["[_nghost-%COMP%]{display:block}.panel[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s cubic-bezier(.4,0,.2,1),border-bottom-color .3s cubic-bezier(.4,0,.2,1);background:var(--surface-1);border-bottom:1px solid transparent}.panel.open[_ngcontent-%COMP%]{grid-template-rows:1fr;border-bottom-color:var(--border)}.inner[_ngcontent-%COMP%]{overflow:hidden;min-height:0;padding:0;transition:padding .3s cubic-bezier(.4,0,.2,1)}.panel.open[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:6px 0}.alert-wrap[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;transition:grid-template-rows .28s cubic-bezier(.4,0,.2,1),opacity .28s ease;animation:_ngcontent-%COMP%_alert-in .3s cubic-bezier(.4,0,.2,1)}.alert-wrap.dismissing[_ngcontent-%COMP%]{grid-template-rows:0fr;opacity:0}.alert-content[_ngcontent-%COMP%]{overflow:hidden;min-height:0}.alert-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:3px 16px;padding:8px 10px 8px 12px;border-radius:35px;border:solid var(--alert-color);border-width:1px 3px 6px;corner-shape:squircle;background:var(--alert-bg)}.alert-icon[_ngcontent-%COMP%]{color:var(--alert-color);font-size:20px;width:20px;height:20px;flex-shrink:0}.alert-message[_ngcontent-%COMP%]{flex:1;font-size:.875rem;line-height:1.4;color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;color:var(--text-tertiary);flex-shrink:0;transition:background .15s,color .15s}.dismiss-btn[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.dismiss-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}@keyframes _ngcontent-%COMP%_alert-in{0%{grid-template-rows:0fr;opacity:0}to{grid-template-rows:1fr;opacity:1}}"]})};var yn="0.1.1 Alpha";var rt=class n{ngVersion=Pt.full;appVersion=yn;currentYear=new Date().getFullYear();versionText=v(`ng ${this.ngVersion} ${this.appVersion}`);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["footer"]],decls:5,vars:2,consts:[[1,"bg-black","flex","flex-col","items-center","justify-center","py-4","gap-0.5",2,"background-color","black"],[1,"font-mono","text-sm","text-primary"],[1,"font-mono","text-xs","text-primary/50"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"p",1),l(2),u(),p(3,"p",2),l(4),u()()),e&2&&(o(2),P("\xA9 ",t.currentYear),o(2),x(t.versionText()))},styles:["[_nghost-%COMP%]{display:block}"]})};var it=class n{constructor(){let i=d(Te),e=d(ce);i.events.pipe(Ne()).subscribe(t=>{t instanceof Bt?e.start():(t instanceof Re||t instanceof Vt||t instanceof Lt)&&e.stop()})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"sticky-header"],[1,"sidenav-container"],[1,"main-content"]],template:function(e,t){e&1&&(s(0,"div",0),b(1,"navigation")(2,"load-progress-bar")(3,"alert-display"),c(),s(4,"mat-sidenav-container",1)(5,"mat-sidenav-content")(6,"div",2),b(7,"router-outlet"),c()()(),b(8,"footer"))},dependencies:[et,tt,nt,dn,sn,Be,jt,rt],encapsulation:2})};At(it,an).catch(n=>console.error(n));
