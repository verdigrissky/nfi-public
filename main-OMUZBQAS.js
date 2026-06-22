import{a as Yt,b as se,c as qt,d as it}from"./chunk-CIHZD32I.js";import{a as Se}from"./chunk-PTUWNHAO.js";import{A as Qt,B as Wt,C as oe,F as Ee,G as j,H as L,a as jt,e as ie,f as at,h as Zt,l as Gt,m as Ut,n as $t,v as Ht,x as $}from"./chunk-4GKXKZJE.js";import{a as Bt,b as zt,d as ae,f as Vt}from"./chunk-YTD2HSSB.js";import{a as F}from"./chunk-HO5XMCPB.js";import{a as At,b as ke,c as Ot,d as Ft,f as Nt,g as re,h as Pe,i as It,j as Rt,k as Lt}from"./chunk-7QWEPUWE.js";import{e as ne,g as Pt,h as Et,j as St,k as Tt}from"./chunk-CUDIU76G.js";import{$b as te,A as vt,Ab as E,B as bt,Bb as O,C as Je,Cb as K,Fb as b,Hb as h,Ib as N,Jb as P,Kb as pe,L as et,Lb as ue,Ma as Y,Mb as I,N as B,Nb as R,Oa as Ct,P as _t,Pa as i,Sb as V,Tb as g,U as Q,Ua as nt,Ub as Me,Vb as d,W as ce,Wb as C,Xa as Mt,Xb as S,Y as s,Yb as J,Zb as fe,_b as ee,ba as T,ca as A,cb as l,cc as Dt,da as be,db as q,ea as tt,eb as Ce,ec as kt,f as z,fa as _e,fc as rt,ga as yt,gb as me,h as mt,ia as ye,ic as he,ja as we,k as pt,lc as De,ma as wt,n as ut,na as v,o as ft,ob as X,p as Ke,pa as le,pb as y,qb as w,ra as xe,rb as G,sb as D,ta as W,tb as k,ua as xt,ub as U,v as ht,vb as o,w as Z,wb as c,xb as _,y as gt,yb as p,zb as u}from"./chunk-7KKWJ3BI.js";var _n=15e3,Xt=(t,r)=>r(t).pipe(ft(_n),gt(e=>e instanceof ut||e instanceof Et&&e.status===0?(zt("Connection error. Please check your network and try again."),Vt(),mt):pt(()=>e)));var Kt=(t,r)=>{let e=s(F).getToken();return e&&t.url.startsWith(jt.apiUrl)&&(t=t.clone({headers:t.headers.set("Authorization",`Bearer ${e}`)})),r(t)};var ge=()=>s(F).isLoggedIn()?!0:s(re).createUrlTree(["/a/login"]);var ot=()=>s(F).role()==="admin";var Jt=[{path:"",loadComponent:()=>import("./chunk-G3IL4GWY.js").then(t=>t.Landing)},{path:"a/login",loadComponent:()=>import("./chunk-MGMWBN4P.js").then(t=>t.Login)},{path:"a/login/with-totp",loadComponent:()=>import("./chunk-MGMWBN4P.js").then(t=>t.Login)},{path:"a/login/with-passkey",loadComponent:()=>import("./chunk-MGMWBN4P.js").then(t=>t.Login)},{path:"a/forgot-password",loadComponent:()=>import("./chunk-XDKURSS2.js").then(t=>t.ForgotPassword)},{path:"a/new-account",loadComponent:()=>import("./chunk-4RS7AFSR.js").then(t=>t.Registration)},{path:"a/logout",loadComponent:()=>import("./chunk-OBMO4COH.js").then(t=>t.Logout)},{path:"my/profile",canActivate:[ge],loadComponent:()=>import("./chunk-PO4NICZB.js").then(t=>t.ProfileView)},{path:"my/friends",canActivate:[ge],loadComponent:()=>import("./chunk-PO4NICZB.js").then(t=>t.ProfileView)},{path:"my/calendar",canActivate:[ge],loadComponent:()=>import("./chunk-B33VGLLO.js").then(t=>t.CalendarView)},{path:"my/settings",canActivate:[ge],loadComponent:()=>import("./chunk-7YEZRS4R.js").then(t=>t.UserSettings)},{path:"the/calendar",loadComponent:()=>import("./chunk-B33VGLLO.js").then(t=>t.CalendarView)},{path:"admin",canMatch:[ot],loadComponent:()=>import("./chunk-KUSCL3N3.js").then(t=>t.Admin)},{path:"admin/debug",canMatch:[ot],loadComponent:()=>import("./chunk-Z3ZMFUOC.js").then(t=>t.Debug)},{path:":gameSlug",loadComponent:()=>import("./chunk-AFFVY7AK.js").then(t=>t.GameView)},{path:"**",loadComponent:()=>import("./chunk-PYEV6LBO.js").then(t=>t.NotFound)}];var en={providers:[wt(),Dt(),It(Jt,Rt()),St(Tt([Kt,Xt]))]};var Oe=["*"],wn=["content"],xn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Cn=["mat-drawer","mat-drawer-content","*"];function Mn(t,r){if(t&1){let e=O();o(0,"div",1),b("click",function(){T(e);let a=h();return A(a._onBackdropClicked())}),c()}if(t&2){let e=h();g("mat-drawer-shown",e._isShowingBackdrop())}}function Dn(t,r){t&1&&(o(0,"mat-drawer-content"),P(1,2),c())}var kn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Pn=["mat-sidenav","mat-sidenav-content","*"];function En(t,r){if(t&1){let e=O();o(0,"div",1),b("click",function(){T(e);let a=h();return A(a._onBackdropClicked())}),c()}if(t&2){let e=h();g("mat-drawer-shown",e._isShowingBackdrop())}}function Sn(t,r){t&1&&(o(0,"mat-sidenav-content"),P(1,2),c())}var Tn=`.mat-drawer-container {
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
`;var An=new ce("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ct=new ce("MAT_DRAWER_CONTAINER"),Te=(()=>{class t extends se{_platform=s(ie);_changeDetectorRef=s(De);_container=s(dt);constructor(){let e=s(W),n=s(Yt),a=s(we);super(e,n,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(V("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[J([{provide:se,useExisting:t}]),me],ngContentSelectors:Oe,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},encapsulation:2,changeDetection:0})}return t})(),st=(()=>{class t{_elementRef=s(W);_focusTrapFactory=s(Ut);_focusMonitor=s(Zt);_platform=s(ie);_ngZone=s(we);_renderer=s(Mt);_interactivityChecker=s(Gt);_doc=s(_e);_container=s(ct,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=$(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=$(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle($(e))}_opened=v(!1);_openedVia=null;_animationStarted=new z;_animationEnd=new z;openedChange=new ye(!0);_openedStream=this.openedChange.pipe(Z(e=>e),Ke(()=>{}));openedStart=this._animationStarted.pipe(Z(()=>this.opened),Je(void 0));_closedStream=this.openedChange.pipe(Z(e=>!e),Ke(()=>{}));closedStart=this._animationStarted.pipe(Z(()=>!this.opened),Je(void 0));_destroyed=new z;onPositionChanged=new ye;_content;_modeChanged=new z;_injector=s(tt);_changeDetectorRef=s(De);constructor(){this.openedChange.pipe(B(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!$t(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{m(),f(),e.removeAttribute("tabindex")},m=this._renderer.listen(e,"blur",a),f=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":nt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,n,a){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(m=>{this.openedChange.pipe(bt(1)).subscribe(f=>m(f?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,a=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,n)),a.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,a){if(n&1&&ue(wn,5),n&2){let m;I(m=R())&&(a._content=m.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,a){n&2&&(X("align",null)("tabIndex",a.mode!=="side"?"-1":null),V("visibility",!a._container&&!a.opened?"hidden":null),g("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Oe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(N(),o(0,"div",1,0),P(2),c())},dependencies:[se],encapsulation:2,changeDetection:0})}return t})(),dt=(()=>{class t{_dir=s(Wt,{optional:!0});_element=s(W);_ngZone=s(we);_changeDetectorRef=s(De);_animationDisabled=Ht();_transitionsEnabled=!1;_allDrawers;_drawers=new xt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=$(e)}_autosize=s(An);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:$(e)}_backdropOverride=null;backdropClick=new ye;_start=null;_end=null;_left=null;_right=null;_destroyed=new z;_doCheckSubject=new z;_contentMargins={left:null,right:null};_contentMarginChanges=new z;get scrollable(){return this._userContent||this._content}_injector=s(tt);constructor(){let e=s(ie),n=s(qt);this._dir?.change.pipe(B(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(B(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(et(this._allDrawers),B(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(et(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(vt(10),B(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();e+=a,n-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();n+=a,e-=a}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(B(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(B(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(B(this._drawers.changes)).subscribe(()=>{nt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(B(ht(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?n.add(a):n.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,a,m){if(n&1&&pe(m,Te,5)(m,st,5),n&2){let f;I(f=R())&&(a._content=f.first),I(f=R())&&(a._allDrawers=f)}},viewQuery:function(n,a){if(n&1&&ue(Te,5),n&2){let m;I(m=R())&&(a._userContent=m.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,a){n&2&&g("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[J([{provide:ct,useExisting:t}])],ngContentSelectors:Cn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(N(xn),y(0,Mn,1,2,"div",0),P(1),P(2,1),y(3,Dn,2,0,"mat-drawer-content")),n&2&&(w(a.hasBackdrop?0:-1),i(3),w(a._content?-1:3))},dependencies:[Te],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ae=(()=>{class t extends Te{static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[J([{provide:se,useExisting:t}]),me],ngContentSelectors:Oe,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},encapsulation:2,changeDetection:0})}return t})(),On=(()=>{class t extends st{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=$(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=at(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=at(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(X("tabIndex",a.mode!=="side"?"-1":null)("align",null),V("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),g("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[J([{provide:st,useExisting:t}]),me],ngContentSelectors:Oe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(N(),o(0,"div",1,0),P(2),c())},dependencies:[se],encapsulation:2,changeDetection:0})}return t})(),tn=(()=>{class t extends dt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,a,m){if(n&1&&pe(m,Ae,5)(m,On,5),n&2){let f;I(f=R())&&(a._content=f.first),I(f=R())&&(a._allDrawers=f)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,a){n&2&&g("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[J([{provide:ct,useExisting:t},{provide:dt,useExisting:t}]),me],ngContentSelectors:Pn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(N(kn),y(0,En,1,2,"div",0),P(1),P(2,1),y(3,Sn,2,0,"mat-sidenav-content")),n&2&&(w(a.hasBackdrop?0:-1),i(3),w(a._content?-1:3))},dependencies:[Ae],styles:[Tn],encapsulation:2,changeDetection:0})}return t})(),nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=Q({imports:[it,oe,it]})}return t})();var Nn=["*",[["mat-toolbar-row"]]],In=["*","mat-toolbar-row"],Rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Ce({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),rn=(()=>{class t{_elementRef=s(W);_platform=s(ie);_document=s(_e);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,a,m){if(n&1&&pe(m,Rn,5),n&2){let f;I(f=R())&&(a._toolbarRows=f)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,a){n&2&&(Me(a.color?"mat-"+a.color:""),g("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:In,decls:2,vars:0,template:function(n,a){n&1&&(N(Nn),P(0),P(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var an=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=Q({imports:[oe]})}return t})();var zn=["dpadGroup"],ve=700,on=700,Vn=1400,sn=.35,Fe=class t{dpadGroupRef;loadingService=s(ae);reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");isSpinning=v(!1);isSpinEntering=v(!1);spinAnimation=null;kickbackAnim=null;rampRAF=null;settleTimer=null;entryTimer=null;constructor(){le(()=>{this.loadingService.isLoading()?this.startSpin():this.stopSpin()})}ngAfterViewInit(){}ngOnDestroy(){this.cancelRamp(),this.kickbackAnim?.cancel(),this.spinAnimation?.cancel(),this.settleTimer&&clearTimeout(this.settleTimer),this.entryTimer&&clearTimeout(this.entryTimer)}startSpin(){if(this.kickbackAnim||kt(this.isSpinEntering))return;if(this.cancelRamp(),this.settleTimer&&(clearTimeout(this.settleTimer),this.settleTimer=null),this.spinAnimation){this.ramp(this.spinAnimation.playbackRate,1,on,"easeIn");return}let r=this.dpadGroupRef?.nativeElement;r&&(this.isSpinEntering.set(!0),this.entryTimer=setTimeout(()=>{if(this.entryTimer=null,this.isSpinEntering.set(!1),this.reducedMotion.matches){this.isSpinning.set(!0);return}r.style.transition="",r.style.transform="",this.kickbackAnim=r.animate([{transform:"rotate(0deg)",easing:"ease-out"},{transform:"rotate(-14deg)",easing:"ease-in"},{transform:"rotate(0deg)"}],{duration:160,iterations:1}),this.kickbackAnim.onfinish=()=>{this.kickbackAnim=null,this.spinAnimation=r.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:ve,iterations:1/0,easing:"linear"}),this.spinAnimation.playbackRate=sn,this.isSpinning.set(!0),this.ramp(sn,1,on,"easeIn")}},200))}stopSpin(){if(this.entryTimer&&(clearTimeout(this.entryTimer),this.entryTimer=null,this.isSpinEntering.set(!1)),this.kickbackAnim&&(this.kickbackAnim.cancel(),this.kickbackAnim=null),!this.spinAnimation){this.isSpinning.set(!1);return}if(this.reducedMotion.matches){this.spinAnimation.cancel(),this.spinAnimation=null,this.isSpinning.set(!1);return}let r=this.spinAnimation.playbackRate;this.cancelRamp(),this.ramp(r,0,Vn,"easeOut",()=>this.snapAndSettle())}snapAndSettle(){if(!this.spinAnimation)return;let r=this.dpadGroupRef.nativeElement,a=(this.spinAnimation.currentTime%ve+ve)%ve/ve*360,m=Math.round(a/90)*90;r.style.transform=`rotate(${a}deg)`,this.spinAnimation.cancel(),this.spinAnimation=null,requestAnimationFrame(()=>{r.style.transition="transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",r.style.transform=`rotate(${m}deg)`,this.settleTimer=setTimeout(()=>{this.settleTimer=null,r.style.setProperty("--rest-angle",`${m%360}deg`),r.style.transition="none",r.style.transform="",this.isSpinning.set(!1),requestAnimationFrame(()=>{r.style.transition=""})},480)})}ramp(r,e,n,a,m){this.cancelRamp();let f=performance.now(),H=gn=>{let de=Math.min((gn-f)/n,1),vn=a==="easeIn"?de*de:1-(1-de)*(1-de),bn=r+(e-r)*vn;this.spinAnimation&&(this.spinAnimation.playbackRate=bn),de<1?this.rampRAF=requestAnimationFrame(H):(this.rampRAF=null,m?.())};this.rampRAF=requestAnimationFrame(H)}cancelRamp(){this.rampRAF!==null&&(cancelAnimationFrame(this.rampRAF),this.rampRAF=null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["next-flavor-brand"]],viewQuery:function(e,n){if(e&1&&ue(zn,5),e&2){let a;I(a=R())&&(n.dpadGroupRef=a.first)}},decls:18,vars:4,consts:[["dpadGroup",""],["viewBox","0 0 1019.13 138.59","fill","white","focusable","false","role","img","aria-label","Next Flavor"],[1,"text-tail"],["d","M224.82,73.21c3.24-4.86.72-27.26,1.5-32.87,0-11.05-8.96-20-20-20-54.22.02-132.66-.01-186.05,0C.16,21.06-.75,39.71.27,55.37c.02,13.39-.02,31.7,0,45.08-.96,15.68-.23,34.26,20,35.03,46.3-.07,140.71.05,186.65,0,24.32-.6,19.88-27.64,20-44.25,0-3.21-.76-6.25-2.1-8.94,0,0,0-9.09,0-9.09Z",1,"flavor-fill"],["d","M1016.86,106.28l-9.33-18c23.25-30.16.68-68.83-36.88-67.94,0,0-72.44,0-72.44,0-5.7,0-10.84,2.4-14.48,6.23-22.42-11.73-58.31-12.36-82.63-2.15-3.44-2.61-7.67-4.08-12.09-4.08-28.97,0-74.01,0-102.99,0-1.38.03-65.66-.02-69.13,0-9.01,0-16.9,6.02-19.29,14.71-1.19,4.32-2.39,8.66-3.61,13.01-1.06,3.87-3.99,14.19-5.03,17.97h-14.19c0-1.81,0-12.25,0-14.31,0,0,0-11.37,0-11.37,0-11.05-8.95-20-20-20,0,0-41.58,0-41.58,0h-3.61c-54.54,0-143.23,0-197.87,0-11.05,0-20,8.95-20,20v30.46c0,11.05,8.95,20,20,20,0,0,4.35,0,4.35,0,0,5.77,0,18.8,0,24.68,0,11.05,8.95,20,20,20h41.58c11.05,0,20-8.95,20-20-.02-7.29.01-17.41,0-24.68,2.11-.02,5.66.13,7.69-.3-.02,6.02.01,18.89,0,24.99,0,11.05,8.95,20,20,20h41.68c9.62,0,17.65-6.79,19.56-15.83h7.06c1.92,9.04,9.94,15.83,19.56,15.83,1.3-.04,80.18.07,81.51-.03,33.58.1,80.2,0,113.75.03,0,0,58.01,0,58.01,0,8.59,0,16.18-5.48,18.92-13.57,23.52,20.28,71.72,21.24,98.34,7.34,3.64,3.83,8.78,6.23,14.48,6.23h100.89c14.81.14,24.71-16.11,17.75-29.21Z",1,"flavor-fill"],[1,"text"],["d","M79.48,25.34h38.57v75.14h-46.39c-.05-.1-12.61-36.11-12.67-36.17-.44,11.4,0,24.53-.15,36.17H20.27V25.34h44.88l14.13,41.58c.56.25.01-41.47.2-41.58Z"],["d","M206.32,50.59h-43.68v5.71h42.18v14.13c-.1.05-42.14-.1-42.18.05-.03.21.02,5.56,0,5.76h44.28v24.25h-84.86V25.34h84.26v25.25Z"],["d","M401.99,25.34v30.46h-24.15c-.58,14.59,0,29.89-.2,44.68h-41.58c-.05-14.87.1-29.79-.05-44.63-.1-.15-24.16,0-24.3-.05v-30.46h90.27Z"],["d","M509.59,54.8h-42.58v5.91s0,.1,0,.1h41.08v23.84h-41.08v15.83h-41.68V25.34h84.26v29.46Z"],["d","M554.77,70.83c-.07.58,39.07,0,39.27.2v29.46h-80.85V25.34h41.58v45.49Z"],["d","M679.11,25.34c7.13,25.03,14.15,50.09,21.24,75.14h-44.68l-1.7-9.82h-13.62l-1.7,9.82h-42.78c7.07-25.04,14.08-50.08,21.04-75.14h62.22ZM641.53,83.65c.1.03,11.01-.02,11.12,0-1.66-11.58-3.54-21.8-5.51-33.46h-.1c-1.98,11.72-3.67,21.71-5.51,33.46Z"],["d","M789.01,25.34c-7.43,25.07-14.95,50.12-22.54,75.14h-58.01c-7.47-25.05-14.89-50.11-22.44-75.14h44.68c2.55,15.56,4.87,31.13,7.41,46.69h.2c2.43-15.55,4.99-31.13,7.41-46.69h43.28Z"],["d","M840.11,103.49c-26.05.78-55.53-11.07-55.1-40.68-.54-29.46,29.27-41.28,55.1-40.47,27.49-.71,55.17,11.35,55.1,40.48.53,29.23-28.79,41.62-55.1,40.68ZM840.21,71.63c16.35.7,16.55-18.11,0-17.43-16.64-.9-16.84,18.19,0,17.43Z"],["d","M983.68,70.73h-4.91c-.94.02-1.13-1.4-.21-1.62,19.76-4.49,25.6-30.85,6.72-40.61-8.21-6.22-76.45-1.99-87.06-3.16v75.14h41.58c.2-15.54-.38-28.81.2-44.68,6.09.43,19.49-2.52,19.54,7.01-.09,9.58-13.67,6.56-19.74,7.01,3.97,10.2,7.88,20.42,11.72,30.66h47.59l-15.43-29.76Z"],[1,"dpad-group"],["d","M304.43,67.68l18.95-25.35c5-6.69,4.32-16.18-1.59-22.09l-15.29-15.29C303.31,1.76,299.06,0,294.54,0c-3.68,0-7.18,1.16-10.12,3.37l-25.35,18.95-25.35-18.95C230.77,1.16,227.27,0,223.6,0h0c-4.52,0-8.77,1.76-11.96,4.95l-15.29,15.29c-5.9,5.9-6.59,15.4-1.59,22.09l18.95,25.35-18.95,25.35c-5,6.69-4.32,16.18,1.59,22.09l15.29,15.29c3.19,3.19,7.44,4.95,11.96,4.95,3.68,0,7.18-1.16,10.12-3.37l25.35-18.95,25.35,18.95c2.95,2.2,6.45,3.37,10.12,3.37,4.52,0,8.77-1.76,11.96-4.95l15.29-15.29c5.9-5.9,6.59-15.4,1.59-22.09l-18.95-25.35Z",1,"flavor-fill"],["d","M288.01,8.17l-28.94,21.64-28.94-21.64c-4.34-3.25-10.42-2.81-14.25,1.02l-15.29,15.29c-3.84,3.84-4.27,9.91-1.02,14.25l21.64,28.94-21.64,28.94c-3.25,4.34-2.81,10.42,1.02,14.25l15.29,15.29c3.84,3.84,9.91,4.27,14.25,1.02l28.94-21.64,28.94,21.64c4.34,3.25,10.42,2.81,14.25-1.02l15.29-15.29c3.84-3.84,4.27-9.91,1.02-14.25l-21.64-28.94,21.64-28.94c3.25-4.34,2.81-10.42-1.02-14.25l-15.29-15.29c-3.84-3.84-9.91-4.27-14.25-1.02ZM221.9,107.83c2.37,2.37.69,6.43-2.66,6.43h-6.75v-6.75c0-3.35,4.06-5.03,6.43-2.66l2.98,2.98ZM305.65,107.51v6.75h-6.75c-3.35,0-5.03-4.06-2.66-6.43l2.98-2.98c2.37-2.37,6.43-.69,6.43,2.66ZM221.9,27.52l-2.98,2.98c-2.37,2.37-6.43.69-6.43-2.66v-6.75h6.75c3.35,0,5.03,4.06,2.66,6.43ZM305.65,27.85c0,3.35-4.06,5.03-6.43,2.66l-2.98-2.98c-2.37-2.37-.69-6.43,2.66-6.43h6.75v6.75Z"]],template:function(e,n){e&1&&(be(),p(0,"svg",1)(1,"g",2),E(2,"path",3)(3,"path",4),u(),p(4,"g",5),E(5,"path",6)(6,"path",7)(7,"path",8)(8,"path",9)(9,"path",10)(10,"path",11)(11,"path",12)(12,"path",13)(13,"path",14),u(),p(14,"g",15,0),E(16,"path",16)(17,"path",17),u()()),e&2&&(i(14),g("spinning",n.isSpinning())("spin-entering",n.isSpinEntering()))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;height:32px;cursor:pointer}svg[_ngcontent-%COMP%]{height:100%;width:auto;overflow:visible}.flavor-fill[_ngcontent-%COMP%]{fill:var(--primary, #888)}.dpad-group[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rest-angle, 0deg));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]:hover   .dpad-group[_ngcontent-%COMP%]:not(.spinning):not(.spin-entering){transform:rotate(calc(var(--rest-angle, 0deg) + 90deg))}.dpad-group.spin-entering[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dpad-group.spinning[_ngcontent-%COMP%]{transition:none}@media(prefers-reduced-motion:reduce){.dpad-group[_ngcontent-%COMP%]{transition:none!important}}"]})};var jn=(t,r)=>r.id;function Ln(t,r){if(t&1){let e=O();o(0,"button",8),b("click",function(){let a=T(e).$implicit,m=h(2);return A(m.selectTheme(a))}),d(1),c()}if(t&2){let e=r.$implicit,n=h(2);g("active",n.activeTheme()===e),i(),S(" ",e," ")}}function Zn(t,r){if(t&1){let e=O();o(0,"button",9),b("click",function(){let a=T(e).$implicit,m=h(2);return A(m.selectFlavor(a.id))}),_(1,"span",10),d(2),c()}if(t&2){let e=r.$implicit,n=h(2);V("--swatch-color",e.color),g("active",n.activeFlavor()===e.id),i(2),S(" ",e.label," ")}}function Gn(t,r){if(t&1&&(o(0,"div",2),b("click",function(n){return n.stopPropagation()}),o(1,"p",3),d(2,"Appearance"),c(),o(3,"div",4),D(4,Ln,2,3,"button",5,G),c(),o(6,"p",3),d(7,"Flavor"),c(),o(8,"div",6),D(9,Zn,3,5,"button",7,jn),c()()),t&2){let e=h();i(4),k(e.themes),i(5),k(e.flavors)}}var dn="theme",cn="flavor",ln=["Night","Day","System"],mn=[{id:"avocado",label:"Avocado",color:"#3d7a3d"},{id:"cherry",label:"Cherry",color:"#b52a2a"},{id:"grape",label:"Grape",color:"#6a2d8a"},{id:"lime",label:"Lime",color:"#5c8c1e"},{id:"orange",label:"Orange",color:"#c46a0a"}],Ne=class t{storage=s(Lt);themes=ln;flavors=mn;isOpen=v(!1);activeTheme=v("Night");activeFlavor=v("avocado");mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");mediaListener=()=>this.applyDataTheme(this.activeTheme());onDocumentClick(){this.isOpen.set(!1)}ngOnInit(){let r=this.storage.get(dn),e=r&&ln.includes(r)?r:"Night";this.activeTheme.set(e),this.applyTheme(e);let n=this.storage.get(cn),a=mn.map(f=>f.id),m=n&&a.includes(n)?n:"avocado";this.activeFlavor.set(m),this.applyFlavor(m)}ngOnDestroy(){this.mediaQuery.removeEventListener("change",this.mediaListener)}toggle(r){r.stopPropagation(),this.isOpen.update(e=>!e)}selectTheme(r){this.activeTheme.set(r),this.storage.set(dn,r),this.applyTheme(r)}selectFlavor(r){this.activeFlavor.set(r),this.storage.set(cn,r),this.applyFlavor(r)}applyTheme(r){this.mediaQuery.removeEventListener("change",this.mediaListener),r==="System"&&this.mediaQuery.addEventListener("change",this.mediaListener),this.applyDataTheme(r)}applyDataTheme(r){let e=r==="System"?this.mediaQuery.matches?"night":"day":r.toLowerCase();document.documentElement.setAttribute("data-theme",e)}applyFlavor(r){document.documentElement.setAttribute("data-flavor",r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["theme-picker"]],hostBindings:function(e,n){e&1&&b("click",function(){return n.onDocumentClick()},Ct)},decls:4,vars:3,consts:[["aria-label","Appearance settings",1,"trigger",3,"click"],[1,"dropdown"],[1,"dropdown",3,"click"],[1,"section-label"],[1,"theme-pills"],[1,"theme-pill",3,"active"],[1,"flavor-pills"],[1,"flavor-pill",3,"active","--swatch-color"],[1,"theme-pill",3,"click"],[1,"flavor-pill",3,"click"],[1,"swatch"]],template:function(e,n){e&1&&(o(0,"button",0),b("click",function(m){return n.toggle(m)}),o(1,"mat-icon"),d(2,"palette"),c()(),y(3,Gn,11,0,"div",1)),e&2&&(g("open",n.isOpen()),i(3),w(n.isOpen()?3:-1))},dependencies:[L,j],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}.trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:inherit;cursor:pointer;transition:background .15s}.trigger[_ngcontent-%COMP%]:hover{background:#8080801f}.trigger.open[_ngcontent-%COMP%]{background:#80808033}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:1050;min-width:220px;padding:14px 16px 16px;background:var(--surface-1, #f8f9fa);border:1px solid var(--border, #e2e8f0);border-radius:12px;box-shadow:var(--shadow-lg)}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-tertiary, #718096)}.theme-pills[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:14px}.theme-pill[_ngcontent-%COMP%]{flex:1;padding:5px 8px;border:1px solid var(--border, #e2e8f0);border-radius:6px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.theme-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.theme-pill.active[_ngcontent-%COMP%]{background:var(--primary, #3d7a3d);color:var(--primary-text, #fff);border-color:transparent}.flavor-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.flavor-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid var(--border, #e2e8f0);border-radius:20px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.flavor-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.flavor-pill.active[_ngcontent-%COMP%]{background:var(--swatch-color);color:#fff;border-color:transparent}.swatch[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--swatch-color);flex-shrink:0}"]})};var Un=["*"];var $n=new ce("MAT_CARD_CONFIG"),pn=(()=>{class t{appearance;constructor(){let e=s($n,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,a){n&2&&g("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Un,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Ce({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var fn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=q({type:t});static \u0275inj=Q({imports:[oe]})}return t})();var Ie=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-login-register-card"]],decls:9,vars:0,consts:[[1,"card-title"],[1,"btn-group"],["mat-flat-button","","routerLink","/a/login"],["mat-stroked-button","","routerLink","/a/new-account"]],template:function(e,n){e&1&&(o(0,"h3",0),d(1,"Get in the Game"),c(),o(2,"p"),d(3," Login or Register to track game releases, make friends, and get cool spam in your inbox. "),c(),o(4,"div",1)(5,"button",2),d(6," Login "),c(),o(7,"button",3),d(8," Register "),c()())},dependencies:[Pe],encapsulation:2})};var Re=class t{auth=s(F);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-card"]],decls:15,vars:1,consts:[[1,"card-title"],["routerLink","/my/profile"],["routerLink","/my/friends"],["routerLink","/my/settings"],["routerLink","/a/logout"]],template:function(e,n){e&1&&(o(0,"h3",0),d(1),c(),o(2,"ul")(3,"li")(4,"a",1),d(5,"Profile"),c()(),o(6,"li")(7,"a",2),d(8,"Friends"),c()(),o(9,"li")(10,"a",3),d(11,"Settings"),c()(),o(12,"li")(13,"a",4),d(14,"Logout"),c()()()),e&2&&(i(),C(n.auth.username()))},dependencies:[Pe],encapsulation:2})};var Be=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-calendar-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"Minimap"),u())},encapsulation:2})};var ze=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-developer-social-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"From the Developers"),u())},encapsulation:2})};var Ve=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-forecast-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"Gaming Forecast"),u())},encapsulation:2})};var Qn=(t,r)=>r.title;function Wn(t,r){t&1&&(p(0,"span",6),d(1,"EA"),u())}function Yn(t,r){if(t&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),d(4),y(5,Wn,2,0,"span",6),u(),p(6,"span",7),d(7),ee(8,"date"),p(9,"span",8),d(10),u()()()),t&2){let e=r.$implicit,n=h();i(2),K("src",e.imageSource,Y)("alt",e.title),i(2),S(" ",e.title," "),i(),w(e.earlyAccess?5:-1),i(2),S(" ",te(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),i(3),C(n.timeUntil(e))}}var je=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let f=Math.floor(n/864e5);return`In ${f} day${f!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-new-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"New Releases"),u(),p(2,"div",1),D(3,Yn,11,9,"div",2,Qn),u()),e&2&&(i(3),k(n.newReleases))},dependencies:[ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var qn=(t,r)=>r.title;function Xn(t,r){t&1&&(p(0,"span",6),d(1,"EA"),u())}function Kn(t,r){if(t&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),d(4),y(5,Xn,2,0,"span",6),u(),p(6,"span",7),d(7),ee(8,"date"),p(9,"span",8),d(10),u()()()),t&2){let e=r.$implicit,n=h();i(2),K("src",e.imageSource,Y)("alt",e.title),i(2),S(" ",e.title," "),i(),w(e.earlyAccess?5:-1),i(2),S(" ",te(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),i(3),C(n.timeUntil(e))}}var Le=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let f=Math.floor(n/864e5);return`In ${f} day${f!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"Your Releases"),u(),p(2,"div",1),D(3,Kn,11,9,"div",2,qn),u()),e&2&&(i(3),k(n.newReleases))},dependencies:[ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var Jn=(t,r)=>r.title;function er(t,r){t&1&&(p(0,"span",6),d(1,"EA"),u())}function tr(t,r){if(t&1&&(p(0,"div",2)(1,"div",3),E(2,"img",4),u(),p(3,"span",5),d(4),y(5,er,2,0,"span",6),u(),p(6,"span",7),d(7),ee(8,"date"),p(9,"span",8),d(10),u()()()),t&2){let e=r.$implicit,n=h();i(2),K("src",e.imageSource,Y)("alt",e.title),i(2),S(" ",e.title," "),i(),w(e.earlyAccess?5:-1),i(2),S(" ",te(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),i(3),C(n.timeUntil(e))}}var Ze=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let f=Math.floor(n/864e5);return`In ${f} day${f!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-pinned-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(p(0,"h3",0),d(1,"Pinned Releases"),u(),p(2,"div",1),D(3,tr,11,9,"div",2,Jn),u()),e&2&&(i(3),k(n.newReleases))},dependencies:[ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var Ge=t=>[t];function nr(t,r){t&1&&_(0,"nav-calendar-card")}function rr(t,r){t&1&&_(0,"nav-developer-social-card")}function ar(t,r){t&1&&_(0,"nav-forecast-card")}function ir(t,r){if(t&1&&(o(0,"div",6),y(1,nr,1,0,"nav-calendar-card")(2,rr,1,0,"nav-developer-social-card")(3,ar,1,0,"nav-forecast-card"),c()),t&2){let e,n=h();i(),w((e=n.slot1Cards()[n.card1Index()])==="calendar"?1:e==="developerBluesky"?2:e==="forecast"?3:-1)}}function or(t,r){if(t&1&&_(0,"div",13),t&2){let e=h(2);g("paused",e.paused1()||e.hovering1())}}function sr(t,r){if(t&1){let e=O();o(0,"div",7)(1,"div",10),D(2,or,1,2,"div",11,G),c(),o(4,"button",12),b("click",function(){T(e);let a=h();return A(a.togglePause(1))}),o(5,"mat-icon"),d(6),c()()()}if(t&2){let e=h();i(2),k(fe(2,Ge,e.card1Index())),i(2),X("aria-label",e.paused1()?"Resume":"Pause"),i(2),C(e.paused1()?"play_arrow":"pause")}}function dr(t,r){t&1&&_(0,"nav-new-releases-card")}function cr(t,r){t&1&&_(0,"nav-user-releases-card")}function lr(t,r){t&1&&_(0,"nav-pinned-releases-card")}function mr(t,r){if(t&1&&(o(0,"div",6),y(1,dr,1,0,"nav-new-releases-card")(2,cr,1,0,"nav-user-releases-card")(3,lr,1,0,"nav-pinned-releases-card"),c()),t&2){let e,n=h();i(),w((e=n.slot2Cards()[n.card2Index()])==="newReleases"?1:e==="yourReleases"?2:e==="pinnedReleases"?3:-1)}}function pr(t,r){if(t&1&&_(0,"div",13),t&2){let e=h(2);g("paused",e.paused2()||e.hovering2())}}function ur(t,r){if(t&1){let e=O();o(0,"div",7)(1,"div",10),D(2,pr,1,2,"div",11,G),c(),o(4,"button",12),b("click",function(){T(e);let a=h();return A(a.togglePause(2))}),o(5,"mat-icon"),d(6),c()()()}if(t&2){let e=h();i(2),k(fe(2,Ge,e.card2Index())),i(2),X("aria-label",e.paused2()?"Resume":"Pause"),i(2),C(e.paused2()?"play_arrow":"pause")}}function fr(t,r){t&1&&_(0,"nav-user-card")}function hr(t,r){t&1&&_(0,"nav-login-register-card")}var Ue=class t{open=he(!1);isAuthenticated=he(!1);userCardPreferences=v([{card:"calendar",display:1},{card:"developerBluesky",display:1},{card:"forecast",display:1},{card:"newReleases",display:2},{card:"yourReleases",display:2},{card:"pinnedReleases",display:2}]);slot1Cards=rt(()=>this.userCardPreferences().filter(r=>r.display===1).map(r=>r.card));slot2Cards=rt(()=>this.userCardPreferences().filter(r=>r.display===2).map(r=>r.card));card1Index=v(0);card2Index=v(0);card1Dir=v("down");card2Dir=v("down");hovering1=v(!1);hovering2=v(!1);paused1=v(!1);paused2=v(!1);autoInterval=4800;timer1=null;timer2=null;destroyRef=s(yt);constructor(){le(()=>{this.open()&&!this.paused1()&&!this.hovering1()?this.startSlot1():this.stopSlot1()}),le(()=>{this.open()&&!this.paused2()&&!this.hovering2()?this.startSlot2():this.stopSlot2()}),this.destroyRef.onDestroy(()=>{this.stopSlot1(),this.stopSlot2()})}startSlot1(){this.stopSlot1(),this.slot1Cards().length>1&&(this.timer1=setInterval(()=>this.cycle(1,"next"),this.autoInterval))}stopSlot1(){this.timer1!==null&&(clearInterval(this.timer1),this.timer1=null)}startSlot2(){this.stopSlot2(),this.slot2Cards().length>1&&(this.timer2=setInterval(()=>this.cycle(2,"next"),this.autoInterval))}stopSlot2(){this.timer2!==null&&(clearInterval(this.timer2),this.timer2=null)}cycle(r,e){let n=r===1?this.slot1Cards():this.slot2Cards(),a=r===1?this.card1Index:this.card2Index;(r===1?this.card1Dir:this.card2Dir).set(e==="next"?"down":"up"),a.update(f=>{let H=e==="next"?f+1:f-1;return H<0||H>=n.length?0:H}),r===1&&!this.paused1()&&!this.hovering1()&&this.open()?this.startSlot1():r===2&&!this.paused2()&&!this.hovering2()&&this.open()&&this.startSlot2()}togglePause(r){r===1?this.paused1.update(e=>!e):this.paused2.update(e=>!e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-dropdown"]],inputs:{open:[1,"open"],isAuthenticated:[1,"isAuthenticated"]},decls:36,vars:21,consts:[[1,"dropdown-panel"],[1,"cards-grid"],[1,"card-col"],["aria-label","Previous",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper",3,"mouseenter","mouseleave"],[1,"card-slot"],[1,"card-anim"],[1,"card-overlay"],["aria-label","Next",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper"],[1,"countdown-track"],[1,"countdown-fill",3,"paused"],[1,"pause-btn",3,"click"],[1,"countdown-fill"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),b("click",function(){return n.cycle(1,"prev")}),o(4,"mat-icon"),d(5,"keyboard_arrow_up"),c()(),o(6,"div",4),b("mouseenter",function(){return n.hovering1.set(!0)})("mouseleave",function(){return n.hovering1.set(!1)}),o(7,"mat-card")(8,"mat-card-content")(9,"div",5),D(10,ir,4,1,"div",6,G),c()()(),y(12,sr,7,4,"div",7),c(),o(13,"button",8),b("click",function(){return n.cycle(1,"next")}),o(14,"mat-icon"),d(15,"keyboard_arrow_down"),c()()(),o(16,"div",2)(17,"button",3),b("click",function(){return n.cycle(2,"prev")}),o(18,"mat-icon"),d(19,"keyboard_arrow_up"),c()(),o(20,"div",4),b("mouseenter",function(){return n.hovering2.set(!0)})("mouseleave",function(){return n.hovering2.set(!1)}),o(21,"mat-card")(22,"mat-card-content")(23,"div",5),D(24,mr,4,1,"div",6,G),c()()(),y(26,ur,7,4,"div",7),c(),o(27,"button",8),b("click",function(){return n.cycle(2,"next")}),o(28,"mat-icon"),d(29,"keyboard_arrow_down"),c()()(),o(30,"div",2)(31,"div",9)(32,"mat-card")(33,"mat-card-content"),y(34,fr,1,0,"nav-user-card")(35,hr,1,0,"nav-login-register-card"),c()()()()()()),e&2&&(g("open",n.open()),i(3),U("disabled",n.slot1Cards().length<=1),i(6),g("from-down",n.card1Dir()==="down")("from-up",n.card1Dir()==="up"),i(),k(fe(17,Ge,n.card1Index())),i(2),w(n.slot1Cards().length>1?12:-1),i(),U("disabled",n.slot1Cards().length<=1),i(4),U("disabled",n.slot2Cards().length<=1),i(6),g("from-down",n.card2Dir()==="down")("from-up",n.card2Dir()==="up"),i(),k(fe(19,Ge,n.card2Index())),i(2),w(n.slot2Cards().length>1?26:-1),i(),U("disabled",n.slot2Cards().length<=1),i(7),w(n.isAuthenticated()?34:35))},dependencies:[fn,pn,un,Ee,L,j,Ie,Re,Be,ze,Ve,je,Le,Ze],styles:["[_nghost-%COMP%]{display:block}.dropdown-panel[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);background:var(--surface-crevice);box-shadow:inset 0 12px 24px -8px #000000bf,inset 0 -12px 24px -8px #000000bf}.dropdown-panel.open[_ngcontent-%COMP%]{height:340px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:12px 16px;height:100%;box-sizing:border-box}.card-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-height:0}.full-arrow[_ngcontent-%COMP%]{width:100%;height:20px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:var(--text-secondary, #888);cursor:pointer;border-radius:4px;flex-shrink:0;padding:0;transition:background .15s ease,color .15s ease,opacity .15s ease}.full-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.full-arrow[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--primary)}.full-arrow[_ngcontent-%COMP%]:disabled{opacity:0;pointer-events:none;cursor:default}.card-wrapper[_ngcontent-%COMP%]{position:relative;flex:1;min-height:0;display:flex;flex-direction:column}mat-card[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:hidden}[_nghost-%COMP%]     mat-card{padding:0!important}[_nghost-%COMP%]     mat-card-content{padding:0!important;margin-bottom:0!important}[_nghost-%COMP%]     .card-title{margin:0;padding:6px 8px 4px}.card-slot[_ngcontent-%COMP%]{overflow:hidden;height:100%}.card-slot.from-down[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-bottom .22s cubic-bezier(.4,0,.2,1)}.card-slot.from-up[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-top .22s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_slide-from-bottom{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slide-from-top{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}.card-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;gap:6px;padding:10px 8px 6px;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 100%);border-radius:0 0 12px 12px}.countdown-track[_ngcontent-%COMP%]{flex:1;height:3px;background:#ffffff2e;border-radius:2px;overflow:hidden;position:relative;opacity:.5;transition:opacity .15s ease}.card-wrapper[_ngcontent-%COMP%]:hover   .countdown-track[_ngcontent-%COMP%]{opacity:1}.countdown-fill[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--primary);transform-origin:left center;animation:_ngcontent-%COMP%_countdown 5s linear forwards}.countdown-fill.paused[_ngcontent-%COMP%]{animation-play-state:paused}@keyframes _ngcontent-%COMP%_countdown{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.pause-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20px;height:20px;background:#0006;border:none;color:#fffc;cursor:pointer;border-radius:4px;padding:0;flex-shrink:0;opacity:.5;transition:background .15s ease,color .15s ease,opacity .15s ease}.pause-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;line-height:13px}.pause-btn[_ngcontent-%COMP%]:hover{background:#0009;color:#fff;opacity:1}"]})};var $e=class t{size=he("small");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["profile-photo-viewer"]],hostVars:2,hostBindings:function(e,n){e&2&&Me(n.size())},inputs:{size:[1,"size"]},decls:7,vars:0,consts:[[1,"avatar-frame"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512"],["width","520","height","520",2,"fill","var(--surface-1)"],["d","M259.54,308.58h0c-107.45,0-199.25,76.05-220.03,180.44-1.48,7.41-4.48,14.43-8.88,20.57l-7.51,10.46h472.85l-7.51-10.46c-4.4-6.14-7.41-13.16-8.88-20.57-20.78-104.39-112.58-180.44-220.03-180.44Z",2,"fill","var(--primary)"],["d","M260,319h0c-100.86,0-186.52,73.83-201.41,173.58l-4.09,27.43h411l-4.09-27.43c-14.89-99.75-100.55-173.58-201.41-173.58Z",2,"fill","var(--primary-text)"],["d","M374.5,239.24l47.83-63.98c12.62-16.88,10.9-40.85-4-55.75l-38.6-38.6c-8.06-8.06-18.79-12.5-30.19-12.5-9.28,0-18.12,2.94-25.55,8.5l-63.98,47.83-63.98-47.83c-7.44-5.56-16.27-8.5-25.55-8.5h0c-11.4,0-22.13,4.44-30.19,12.5l-38.6,38.6c-14.9,14.9-16.62,38.87-4,55.75l47.83,63.98-47.83,63.98c-12.62,16.88-10.9,40.85,4,55.75l38.6,38.6c8.06,8.06,18.79,12.5,30.19,12.5,9.28,0,18.12-2.94,25.55-8.5l63.98-47.83,63.98,47.83c7.44,5.56,16.27,8.5,25.55,8.5,11.4,0,22.13-4.44,30.19-12.5l38.6-38.6c14.9-14.9,16.62-38.87,4-55.75l-47.83-63.98h0Z",2,"fill","var(--primary)"],["d","M333.04,89.04l-73.04,54.61-73.04-54.61c-10.97-8.2-26.29-7.1-35.97,2.59l-38.6,38.6c-9.68,9.68-10.78,25-2.59,35.97l54.61,73.04-54.61,73.04c-8.2,10.97-7.1,26.29,2.59,35.97l38.6,38.6c9.68,9.68,25,10.78,35.97,2.59l73.04-54.61,73.04,54.61c10.97,8.2,26.29,7.1,35.97-2.59l38.6-38.6c9.68-9.68,10.78-25,2.59-35.97l-54.61-73.04,54.61-73.04c8.2-10.97,7.1-26.29-2.59-35.97l-38.6-38.6c-9.68-9.68-25-10.78-35.97-2.59h0ZM166.18,340.59c5.98,5.98,1.75,16.23-6.72,16.23h-17.04v-17.04c0-8.47,10.24-12.71,16.23-6.72l7.53,7.53ZM377.57,339.77v17.04h-17.04c-8.47,0-12.71-10.24-6.72-16.23l7.53-7.53c5.98-5.98,16.23-1.75,16.23,6.72h0ZM166.18,137.89l-7.53,7.53c-5.98,5.98-16.23,1.75-16.23-6.72v-17.04h17.04c8.47,0,12.71,10.24,6.72,16.23ZM377.57,138.71c0,8.47-10.24,12.71-16.23,6.72l-7.53-7.53c-5.98-5.98-1.75-16.23,6.72-16.23h17.04v17.04Z",2,"fill","var(--primary-text)"]],template:function(e,n){e&1&&(p(0,"div",0),be(),p(1,"svg",1),E(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6),u()())},styles:["[_nghost-%COMP%]{display:block}.tiny[_nghost-%COMP%]{width:32px}.small[_nghost-%COMP%]{width:48px}.medium[_nghost-%COMP%]{width:80px}.avatar-frame[_ngcontent-%COMP%]{width:100%;border:solid var(--primary);border-width:1px 3px 6px;border-radius:15px;corner-shape:squircle;overflow:hidden;aspect-ratio:1}svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]})};var He=class t{auth=s(F);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-corner"]],decls:3,vars:1,consts:[["size","tiny"],[1,"username"]],template:function(e,n){e&1&&(_(0,"profile-photo-viewer",0),o(1,"span",1),d(2),c()),e&2&&(i(2),C(n.auth.username()))},dependencies:[$e],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:8px}.username[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--text-primary)}"]})};function gr(t,r){if(t&1){let e=O();o(0,"nav-user-corner",5),b("click",function(){T(e);let a=h();return A(a.toggleMenu())}),c()}}var Qe=class t{menuOpen=v(!1);auth=s(F);constructor(){s(re).events.pipe(Z(r=>r instanceof ke),Se()).subscribe(()=>this.menuOpen.set(!1))}toggleMenu(){this.menuOpen.update(r=>!r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["navigation"]],decls:9,vars:3,consts:[["matIconButton","","aria-label","Main Application Navigation Menu",1,"app-nav-menu",3,"click"],[3,"click"],[1,"nav-spacer"],[1,"cursor-pointer"],[3,"open","isAuthenticated"],[1,"cursor-pointer",3,"click"]],template:function(e,n){e&1&&(o(0,"mat-toolbar")(1,"button",0),b("click",function(){return n.toggleMenu()}),o(2,"mat-icon"),d(3,"menu"),c()(),o(4,"next-flavor-brand",1),b("click",function(){return n.toggleMenu()}),c(),_(5,"span",2),y(6,gr,1,0,"nav-user-corner",3),_(7,"theme-picker"),c(),_(8,"nav-dropdown",4)),e&2&&(i(6),w(n.auth.isLoggedIn()?6:-1),i(2),U("open",n.menuOpen())("isAuthenticated",n.auth.isLoggedIn()))},dependencies:[an,rn,Ee,Qt,L,j,Fe,He,Ne,Ue],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{overflow:visible}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var We=class t{isLoading=s(ae).isLoading;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["load-progress-bar"]],decls:2,vars:2,consts:[[1,"track"],[1,"fill"]],template:function(e,n){e&1&&(p(0,"div",0),E(1,"div",1),u()),e&2&&(i(),g("active",n.isLoading()))},styles:["[_nghost-%COMP%]{display:block;height:3px;pointer-events:none}.track[_ngcontent-%COMP%]{width:100%;height:100%;background:color-mix(in srgb,var(--primary, #888) 18%,transparent);overflow:hidden;position:relative;transition:background .3s}.fill[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,transparent 0%,var(--primary, #888) 40%);box-shadow:0 0 10px 1px var(--primary, #888);opacity:0;transform:translate(-100%);transition:opacity .25s ease}.fill.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_bar-sweep 1.5s cubic-bezier(.4,0,.3,1) infinite}@keyframes _ngcontent-%COMP%_bar-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.fill.active[_ngcontent-%COMP%]{animation:none;transform:none;width:100%;background:var(--primary, #888);opacity:.6}}"]})};var vr=(t,r)=>r.id;function br(t,r){if(t&1){let e=O();o(0,"div",3)(1,"div",4)(2,"div",5)(3,"mat-icon",6),d(4),c(),o(5,"span",7),d(6),c(),o(7,"button",8),b("click",function(){let a=T(e).$implicit,m=h();return A(m.startDismiss(a.id))}),o(8,"mat-icon",9),d(9,"close"),c()()()()()}if(t&2){let e=r.$implicit,n=h();g("dismissing",n.dismissing().has(e.id)),i(2),V("--alert-color",n.typeColor[e.type])("--alert-bg",n.typeBg[e.type]),i(2),C(n.typeIcon[e.type]),i(2),C(e.message)}}var _r={error:"error_outline",warning:"warning_amber",info:"info_outline"},yr={error:"var(--error)",warning:"var(--warning)",info:"var(--info)"},wr={error:"var(--error-bg)",warning:"var(--warning-bg)",info:"var(--info-bg)"},Ye=class t{service=s(Bt);dismissing=v(new Set);typeIcon=_r;typeColor=yr;typeBg=wr;startDismiss(r){this.dismissing.update(e=>new Set([...e,r])),setTimeout(()=>{this.service.dismiss(r),this.dismissing.update(e=>{let n=new Set(e);return n.delete(r),n})},290)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["alert-display"]],decls:4,vars:2,consts:[["aria-live","polite","aria-atomic","false",1,"panel"],[1,"inner"],[1,"alert-wrap",3,"dismissing"],[1,"alert-wrap"],[1,"alert-content"],[1,"alert-row"],[1,"alert-icon"],[1,"alert-message"],["aria-label","Dismiss alert",1,"dismiss-btn",3,"click"],[1,"dismiss-icon"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1),D(2,br,10,8,"div",2,vr),c()()),e&2&&(g("open",n.service.hasAlerts()),i(2),k(n.service.alerts()))},dependencies:[L,j],styles:["[_nghost-%COMP%]{display:block}.panel[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s cubic-bezier(.4,0,.2,1),border-bottom-color .3s cubic-bezier(.4,0,.2,1);background:var(--surface-1);border-bottom:1px solid transparent}.panel.open[_ngcontent-%COMP%]{grid-template-rows:1fr;border-bottom-color:var(--border)}.inner[_ngcontent-%COMP%]{overflow:hidden;min-height:0;padding:0;transition:padding .3s cubic-bezier(.4,0,.2,1)}.panel.open[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:6px 0}.alert-wrap[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;transition:grid-template-rows .28s cubic-bezier(.4,0,.2,1),opacity .28s ease;animation:_ngcontent-%COMP%_alert-in .3s cubic-bezier(.4,0,.2,1)}.alert-wrap.dismissing[_ngcontent-%COMP%]{grid-template-rows:0fr;opacity:0}.alert-content[_ngcontent-%COMP%]{overflow:hidden;min-height:0}.alert-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:3px 16px;padding:8px 10px 8px 12px;border-radius:35px;border:solid var(--alert-color);border-width:1px 3px 6px;corner-shape:squircle;background:var(--alert-bg)}.alert-icon[_ngcontent-%COMP%]{color:var(--alert-color);font-size:20px;width:20px;height:20px;flex-shrink:0}.alert-message[_ngcontent-%COMP%]{flex:1;font-size:.875rem;line-height:1.4;color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;color:var(--text-tertiary);flex-shrink:0;transition:background .15s,color .15s}.dismiss-btn[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.dismiss-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}@keyframes _ngcontent-%COMP%_alert-in{0%{grid-template-rows:0fr;opacity:0}to{grid-template-rows:1fr;opacity:1}}"]})};var hn="0.1.1 Alpha";var qe=class t{ngVersion=_t.full;appVersion=hn;currentYear=new Date().getFullYear();versionText=v(`ng ${this.ngVersion} ${this.appVersion}`);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["footer"]],decls:5,vars:2,consts:[[1,"bg-black","flex","flex-col","items-center","justify-center","py-4","gap-0.5",2,"background-color","black"],[1,"font-mono","text-sm","text-primary"],[1,"font-mono","text-xs","text-primary/50"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"p",1),d(2),u(),p(3,"p",2),d(4),u()()),e&2&&(i(2),S("\xA9 ",n.currentYear),i(2),C(n.versionText()))},styles:["[_nghost-%COMP%]{display:block}"]})};var Xe=class t{constructor(){let r=s(re),e=s(ae);r.events.pipe(Se()).subscribe(n=>{n instanceof At?e.start():(n instanceof ke||n instanceof Ot||n instanceof Ft)&&e.stop()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"sticky-header"],[1,"sidenav-container"],[1,"main-content"]],template:function(e,n){e&1&&(o(0,"div",0),_(1,"navigation")(2,"load-progress-bar")(3,"alert-display"),c(),o(4,"mat-sidenav-container",1)(5,"mat-sidenav-content")(6,"div",2),_(7,"router-outlet"),c()()(),_(8,"footer"))},dependencies:[Qe,We,Ye,nn,tn,Ae,Nt,qe],encapsulation:2})};Pt(Xe,en).catch(t=>console.error(t));
