import{a as Xt,b as ce,c as Kt,d as rt}from"./chunk-PIWFHZSM.js";import{a as Jt}from"./chunk-OYVC53NQ.js";import{a as De}from"./chunk-L23RDOGB.js";import{a as oe,c as Vt}from"./chunk-AR64TULC.js";import{a as qt}from"./chunk-PXDVZ5ZV.js";import{A as Yt,B as de,E as ke,F as L,G,d as se,e as nt,g as Ut,k as $t,l as Zt,m as Ht,u as Qt,w as H,z as Wt}from"./chunk-PAPM5F2H.js";import{a as Lt}from"./chunk-7X3KVG2T.js";import{a as zt,b as jt}from"./chunk-7EHQDLLM.js";import{a as A}from"./chunk-63TMGZCI.js";import{a as Gt}from"./chunk-6CDPO5EE.js";import{d as re,g as St,h as Tt,j as Et,k as Ot,n as At,o as Me,p as Ft,q as Nt,s as It,t as ae,u as ie,w as Rt,x as Bt}from"./chunk-4TXPSCFJ.js";import{$b as ee,Ab as u,B as ft,Bb as f,C as gt,Cb as z,D as qe,Db as E,Eb as Ce,Hb as b,Jb as p,Kb as F,Lb as D,M as Xe,Mb as fe,Na as X,Nb as ge,O as R,Ob as N,Pa as wt,Pb as I,Q as ht,Qa as o,Ub as V,V as Y,Va as Je,Vb as h,Wb as Mt,X as me,Xb as c,Ya as Ct,Yb as C,Z as d,Zb as O,ac as kt,bc as Z,ca as S,cc as te,da as T,db as l,ea as vt,eb as K,ec as ne,f as j,fa as Ke,fb as we,ga as ve,h as dt,ha as _t,hb as ue,hc as Dt,ja as _e,jc as Pt,k as ct,ka as be,kc as et,n as lt,na as bt,nc as tt,o as mt,oa as v,p as Ye,pb as J,qa as pe,qb as y,qc as xe,rb as w,sa as ye,sb as xt,tb as $,ua as q,ub as M,va as yt,vb as k,w as pt,wb as B,x as U,xb as i,yb as s,z as ut,zb as _}from"./chunk-4LMTEDXW.js";var Cn=15e3,en=(t,r)=>r(t).pipe(mt(Cn),ut(e=>e instanceof lt||e instanceof Tt&&e.status===0?(jt("Connection error. Please check your network and try again."),Vt(),dt):ct(()=>e)));var tn=(t,r)=>{let e=d(A).getToken();return e&&t.url.startsWith(Lt.apiUrl)&&(t=t.clone({headers:t.headers.set("Authorization",`Bearer ${e}`)})),r(t)};var Q=()=>d(A).isLoggedIn()?!0:d(ae).createUrlTree(["/a/login"]);var Pe=()=>d(A).role()==="admin";var nn=[{path:"",loadComponent:()=>import("./chunk-QYVFHWUN.js").then(t=>t.Landing)},{path:"a/login",loadComponent:()=>import("./chunk-OE2KU7JC.js").then(t=>t.Login)},{path:"a/login/with-totp",loadComponent:()=>import("./chunk-OE2KU7JC.js").then(t=>t.Login)},{path:"a/login/with-passkey",loadComponent:()=>import("./chunk-OE2KU7JC.js").then(t=>t.Login)},{path:"a/forgot-password",loadComponent:()=>import("./chunk-MNMYPOX4.js").then(t=>t.ForgotPassword)},{path:"a/new-account",loadComponent:()=>import("./chunk-XW26DRAE.js").then(t=>t.Registration)},{path:"a/logout",loadComponent:()=>import("./chunk-U2WD6TH4.js").then(t=>t.Logout)},{path:"my/profile",canActivate:[Q],loadComponent:()=>import("./chunk-ALOLLZQA.js").then(t=>t.ProfileView),data:{mode:"own"}},{path:"my/friend/:username",canActivate:[Q],loadComponent:()=>import("./chunk-ALOLLZQA.js").then(t=>t.ProfileView),data:{mode:"friend"}},{path:"my/friends",canActivate:[Q],loadComponent:()=>import("./chunk-ALOLLZQA.js").then(t=>t.ProfileView)},{path:"my/calendar",canActivate:[Q],loadComponent:()=>import("./chunk-CB6FHTLQ.js").then(t=>t.CalendarView)},{path:"my/settings",canActivate:[Q],loadComponent:()=>import("./chunk-47NJDC7R.js").then(t=>t.UserSettings)},{path:"my/account",canActivate:[Q],loadComponent:()=>import("./chunk-PBMPYAF3.js").then(t=>t.AccountSettings)},{path:"the/calendar",loadComponent:()=>import("./chunk-CB6FHTLQ.js").then(t=>t.CalendarView)},{path:"a/gamer/named/:username",loadComponent:()=>import("./chunk-ALOLLZQA.js").then(t=>t.ProfileView),data:{mode:"public"}},{path:"admin",canMatch:[Pe],loadComponent:()=>import("./chunk-4NCJ4GDU.js").then(t=>t.Admin)},{path:"admin/games",canMatch:[Pe],loadComponent:()=>import("./chunk-EWH5Z6QB.js").then(t=>t.AdminGames)},{path:"admin/debug",canMatch:[Pe],loadComponent:()=>import("./chunk-S7MELJN2.js").then(t=>t.Debug)},{path:"random",loadComponent:()=>import("./chunk-4PYLYXFL.js").then(t=>t.RandomRedirect)},{path:":gameSlug",loadComponent:()=>import("./chunk-JVDKONES.js").then(t=>t.GameView)},{path:"**",loadComponent:()=>import("./chunk-LVQU74KY.js").then(t=>t.NotFound)}];var rn={providers:[bt(),Dt(),Rt(nn,Bt()),Et(Ot([tn,en]))]};var Ee=["*"],Mn=["content"],kn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Dn=["mat-drawer","mat-drawer-content","*"];function Pn(t,r){if(t&1){let e=E();i(0,"div",1),b("click",function(){S(e);let a=p();return T(a._onBackdropClicked())}),s()}if(t&2){let e=p();h("mat-drawer-shown",e._isShowingBackdrop())}}function Sn(t,r){t&1&&(i(0,"mat-drawer-content"),D(1,2),s())}var Tn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],En=["mat-sidenav","mat-sidenav-content","*"];function On(t,r){if(t&1){let e=E();i(0,"div",1),b("click",function(){S(e);let a=p();return T(a._onBackdropClicked())}),s()}if(t&2){let e=p();h("mat-drawer-shown",e._isShowingBackdrop())}}function An(t,r){t&1&&(i(0,"mat-sidenav-content"),D(1,2),s())}var Fn=`.mat-drawer-container {
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
`;var Nn=new me("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ot=new me("MAT_DRAWER_CONTAINER"),Se=(()=>{class t extends ce{_platform=d(se);_changeDetectorRef=d(xe);_container=d(it);constructor(){let e=d(q),n=d(Xt),a=d(be);super(e,n,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(V("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),h("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[ee([{provide:ce,useExisting:t}]),ue],ngContentSelectors:Ee,decls:1,vars:0,template:function(n,a){n&1&&(F(),D(0))},encapsulation:2,changeDetection:0})}return t})(),at=(()=>{class t{_elementRef=d(q);_focusTrapFactory=d(Zt);_focusMonitor=d(Ut);_platform=d(se);_ngZone=d(be);_renderer=d(Ct);_interactivityChecker=d($t);_doc=d(ve);_container=d(ot,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=H(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=H(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(H(e))}_opened=v(!1);_openedVia=null;_animationStarted=new j;_animationEnd=new j;openedChange=new _e(!0);_openedStream=this.openedChange.pipe(U(e=>e),Ye(()=>{}));openedStart=this._animationStarted.pipe(U(()=>this.opened),qe(void 0));_closedStream=this.openedChange.pipe(U(e=>!e),Ye(()=>{}));closedStart=this._animationStarted.pipe(U(()=>!this.opened),qe(void 0));_destroyed=new j;onPositionChanged=new _e;_content;_modeChanged=new j;_injector=d(Ke);_changeDetectorRef=d(xe);constructor(){this.openedChange.pipe(R(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!Ht(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{m(),g(),e.removeAttribute("tabindex")},m=this._renderer.listen(e,"blur",a),g=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Je(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,n,a){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(m=>{this.openedChange.pipe(gt(1)).subscribe(g=>m(g?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,a=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,n)),a.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,a){if(n&1&&ge(Mn,5),n&2){let m;N(m=I())&&(a._content=m.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,a){n&2&&(J("align",null)("tabIndex",a.mode!=="side"?"-1":null),V("visibility",!a._container&&!a.opened?"hidden":null),h("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(F(),i(0,"div",1,0),D(2),s())},dependencies:[ce],encapsulation:2,changeDetection:0})}return t})(),it=(()=>{class t{_dir=d(Yt,{optional:!0});_element=d(q);_ngZone=d(be);_changeDetectorRef=d(xe);_animationDisabled=Qt();_transitionsEnabled=!1;_allDrawers;_drawers=new yt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=H(e)}_autosize=d(Nn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:H(e)}_backdropOverride=null;backdropClick=new _e;_start=null;_end=null;_left=null;_right=null;_destroyed=new j;_doCheckSubject=new j;_contentMargins={left:null,right:null};_contentMarginChanges=new j;get scrollable(){return this._userContent||this._content}_injector=d(Ke);constructor(){let e=d(se),n=d(Kt);this._dir?.change.pipe(R(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(R(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Xe(this._allDrawers),R(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Xe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ft(10),R(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();e+=a,n-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();n+=a,e-=a}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(R(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(R(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(R(this._drawers.changes)).subscribe(()=>{Je({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(R(pt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?n.add(a):n.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,a,m){if(n&1&&fe(m,Se,5)(m,at,5),n&2){let g;N(g=I())&&(a._content=g.first),N(g=I())&&(a._allDrawers=g)}},viewQuery:function(n,a){if(n&1&&ge(Se,5),n&2){let m;N(m=I())&&(a._userContent=m.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,a){n&2&&h("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ee([{provide:ot,useExisting:t}])],ngContentSelectors:Dn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(F(kn),y(0,Pn,1,2,"div",0),D(1),D(2,1),y(3,Sn,2,0,"mat-drawer-content")),n&2&&(w(a.hasBackdrop?0:-1),o(3),w(a._content?-1:3))},dependencies:[Se],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Te=(()=>{class t extends Se{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[ee([{provide:ce,useExisting:t}]),ue],ngContentSelectors:Ee,decls:1,vars:0,template:function(n,a){n&1&&(F(),D(0))},encapsulation:2,changeDetection:0})}return t})(),In=(()=>{class t extends at{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=H(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=nt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=nt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(J("tabIndex",a.mode!=="side"?"-1":null)("align",null),V("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),h("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[ee([{provide:at,useExisting:t}]),ue],ngContentSelectors:Ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(F(),i(0,"div",1,0),D(2),s())},dependencies:[ce],encapsulation:2,changeDetection:0})}return t})(),an=(()=>{class t extends it{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ye(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,a,m){if(n&1&&fe(m,Te,5)(m,In,5),n&2){let g;N(g=I())&&(a._content=g.first),N(g=I())&&(a._allDrawers=g)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,a){n&2&&h("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[ee([{provide:ot,useExisting:t},{provide:it,useExisting:t}]),ue],ngContentSelectors:En,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(F(Tn),y(0,On,1,2,"div",0),D(1),D(2,1),y(3,An,2,0,"mat-sidenav-content")),n&2&&(w(a.hasBackdrop?0:-1),o(3),w(a._content?-1:3))},dependencies:[Te],styles:[Fn],encapsulation:2,changeDetection:0})}return t})(),on=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Y({imports:[rt,de,rt]})}return t})();var Bn=["*",[["mat-toolbar-row"]]],zn=["*","mat-toolbar-row"],jn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=we({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),sn=(()=>{class t{_elementRef=d(q);_platform=d(se);_document=d(ve);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,a,m){if(n&1&&fe(m,jn,5),n&2){let g;N(g=I())&&(a._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,a){n&2&&(Mt(a.color?"mat-"+a.color:""),h("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:zn,decls:2,vars:0,template:function(n,a){n&1&&(F(Bn),D(0),D(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Y({imports:[de]})}return t})();var Ln=["dpadGroup"],he=700,cn=700,Gn=1400,ln=.35,Oe=class t{dpadGroupRef;loadingService=d(oe);reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");isSpinning=v(!1);isSpinEntering=v(!1);spinAnimation=null;kickbackAnim=null;rampRAF=null;settleTimer=null;entryTimer=null;constructor(){pe(()=>{this.loadingService.isLoading()?this.startSpin():this.stopSpin()})}ngAfterViewInit(){}ngOnDestroy(){this.cancelRamp(),this.kickbackAnim?.cancel(),this.spinAnimation?.cancel(),this.settleTimer&&clearTimeout(this.settleTimer),this.entryTimer&&clearTimeout(this.entryTimer)}startSpin(){if(this.kickbackAnim||Pt(this.isSpinEntering))return;if(this.cancelRamp(),this.settleTimer&&(clearTimeout(this.settleTimer),this.settleTimer=null),this.spinAnimation){this.ramp(this.spinAnimation.playbackRate,1,cn,"easeIn");return}let r=this.dpadGroupRef?.nativeElement;r&&(this.isSpinEntering.set(!0),this.entryTimer=setTimeout(()=>{if(this.entryTimer=null,this.isSpinEntering.set(!1),this.reducedMotion.matches){this.isSpinning.set(!0);return}r.style.transition="",r.style.transform="",this.kickbackAnim=r.animate([{transform:"rotate(0deg)",easing:"ease-out"},{transform:"rotate(-14deg)",easing:"ease-in"},{transform:"rotate(0deg)"}],{duration:160,iterations:1}),this.kickbackAnim.onfinish=()=>{this.kickbackAnim=null,this.spinAnimation=r.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:he,iterations:1/0,easing:"linear"}),this.spinAnimation.playbackRate=ln,this.isSpinning.set(!0),this.ramp(ln,1,cn,"easeIn")}},200))}stopSpin(){if(this.entryTimer&&(clearTimeout(this.entryTimer),this.entryTimer=null,this.isSpinEntering.set(!1)),this.kickbackAnim&&(this.kickbackAnim.cancel(),this.kickbackAnim=null),!this.spinAnimation){this.isSpinning.set(!1);return}if(this.reducedMotion.matches){this.spinAnimation.cancel(),this.spinAnimation=null,this.isSpinning.set(!1);return}let r=this.spinAnimation.playbackRate;this.cancelRamp(),this.ramp(r,0,Gn,"easeOut",()=>this.snapAndSettle())}snapAndSettle(){if(!this.spinAnimation)return;let r=this.dpadGroupRef.nativeElement,a=(this.spinAnimation.currentTime%he+he)%he/he*360,m=Math.round(a/90)*90;r.style.transform=`rotate(${a}deg)`,this.spinAnimation.cancel(),this.spinAnimation=null,requestAnimationFrame(()=>{r.style.transition="transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",r.style.transform=`rotate(${m}deg)`,this.settleTimer=setTimeout(()=>{this.settleTimer=null,r.style.setProperty("--rest-angle",`${m%360}deg`),r.style.transition="none",r.style.transform="",this.isSpinning.set(!1),requestAnimationFrame(()=>{r.style.transition=""})},480)})}ramp(r,e,n,a,m){this.cancelRamp();let g=performance.now(),W=bn=>{let le=Math.min((bn-g)/n,1),yn=a==="easeIn"?le*le:1-(1-le)*(1-le),wn=r+(e-r)*yn;this.spinAnimation&&(this.spinAnimation.playbackRate=wn),le<1?this.rampRAF=requestAnimationFrame(W):(this.rampRAF=null,m?.())};this.rampRAF=requestAnimationFrame(W)}cancelRamp(){this.rampRAF!==null&&(cancelAnimationFrame(this.rampRAF),this.rampRAF=null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["next-flavor-brand"]],viewQuery:function(e,n){if(e&1&&ge(Ln,5),e&2){let a;N(a=I())&&(n.dpadGroupRef=a.first)}},decls:18,vars:4,consts:[["dpadGroup",""],["viewBox","0 0 1019.13 138.59","fill","white","focusable","false","role","img","aria-label","Next Flavor"],[1,"text-tail"],["d","M224.82,73.21c3.24-4.86.72-27.26,1.5-32.87,0-11.05-8.96-20-20-20-54.22.02-132.66-.01-186.05,0C.16,21.06-.75,39.71.27,55.37c.02,13.39-.02,31.7,0,45.08-.96,15.68-.23,34.26,20,35.03,46.3-.07,140.71.05,186.65,0,24.32-.6,19.88-27.64,20-44.25,0-3.21-.76-6.25-2.1-8.94,0,0,0-9.09,0-9.09Z",1,"flavor-fill"],["d","M1016.86,106.28l-9.33-18c23.25-30.16.68-68.83-36.88-67.94,0,0-72.44,0-72.44,0-5.7,0-10.84,2.4-14.48,6.23-22.42-11.73-58.31-12.36-82.63-2.15-3.44-2.61-7.67-4.08-12.09-4.08-28.97,0-74.01,0-102.99,0-1.38.03-65.66-.02-69.13,0-9.01,0-16.9,6.02-19.29,14.71-1.19,4.32-2.39,8.66-3.61,13.01-1.06,3.87-3.99,14.19-5.03,17.97h-14.19c0-1.81,0-12.25,0-14.31,0,0,0-11.37,0-11.37,0-11.05-8.95-20-20-20,0,0-41.58,0-41.58,0h-3.61c-54.54,0-143.23,0-197.87,0-11.05,0-20,8.95-20,20v30.46c0,11.05,8.95,20,20,20,0,0,4.35,0,4.35,0,0,5.77,0,18.8,0,24.68,0,11.05,8.95,20,20,20h41.58c11.05,0,20-8.95,20-20-.02-7.29.01-17.41,0-24.68,2.11-.02,5.66.13,7.69-.3-.02,6.02.01,18.89,0,24.99,0,11.05,8.95,20,20,20h41.68c9.62,0,17.65-6.79,19.56-15.83h7.06c1.92,9.04,9.94,15.83,19.56,15.83,1.3-.04,80.18.07,81.51-.03,33.58.1,80.2,0,113.75.03,0,0,58.01,0,58.01,0,8.59,0,16.18-5.48,18.92-13.57,23.52,20.28,71.72,21.24,98.34,7.34,3.64,3.83,8.78,6.23,14.48,6.23h100.89c14.81.14,24.71-16.11,17.75-29.21Z",1,"flavor-fill"],[1,"text"],["d","M79.48,25.34h38.57v75.14h-46.39c-.05-.1-12.61-36.11-12.67-36.17-.44,11.4,0,24.53-.15,36.17H20.27V25.34h44.88l14.13,41.58c.56.25.01-41.47.2-41.58Z"],["d","M206.32,50.59h-43.68v5.71h42.18v14.13c-.1.05-42.14-.1-42.18.05-.03.21.02,5.56,0,5.76h44.28v24.25h-84.86V25.34h84.26v25.25Z"],["d","M401.99,25.34v30.46h-24.15c-.58,14.59,0,29.89-.2,44.68h-41.58c-.05-14.87.1-29.79-.05-44.63-.1-.15-24.16,0-24.3-.05v-30.46h90.27Z"],["d","M509.59,54.8h-42.58v5.91s0,.1,0,.1h41.08v23.84h-41.08v15.83h-41.68V25.34h84.26v29.46Z"],["d","M554.77,70.83c-.07.58,39.07,0,39.27.2v29.46h-80.85V25.34h41.58v45.49Z"],["d","M679.11,25.34c7.13,25.03,14.15,50.09,21.24,75.14h-44.68l-1.7-9.82h-13.62l-1.7,9.82h-42.78c7.07-25.04,14.08-50.08,21.04-75.14h62.22ZM641.53,83.65c.1.03,11.01-.02,11.12,0-1.66-11.58-3.54-21.8-5.51-33.46h-.1c-1.98,11.72-3.67,21.71-5.51,33.46Z"],["d","M789.01,25.34c-7.43,25.07-14.95,50.12-22.54,75.14h-58.01c-7.47-25.05-14.89-50.11-22.44-75.14h44.68c2.55,15.56,4.87,31.13,7.41,46.69h.2c2.43-15.55,4.99-31.13,7.41-46.69h43.28Z"],["d","M840.11,103.49c-26.05.78-55.53-11.07-55.1-40.68-.54-29.46,29.27-41.28,55.1-40.47,27.49-.71,55.17,11.35,55.1,40.48.53,29.23-28.79,41.62-55.1,40.68ZM840.21,71.63c16.35.7,16.55-18.11,0-17.43-16.64-.9-16.84,18.19,0,17.43Z"],["d","M983.68,70.73h-4.91c-.94.02-1.13-1.4-.21-1.62,19.76-4.49,25.6-30.85,6.72-40.61-8.21-6.22-76.45-1.99-87.06-3.16v75.14h41.58c.2-15.54-.38-28.81.2-44.68,6.09.43,19.49-2.52,19.54,7.01-.09,9.58-13.67,6.56-19.74,7.01,3.97,10.2,7.88,20.42,11.72,30.66h47.59l-15.43-29.76Z"],[1,"dpad-group"],["d","M304.43,67.68l18.95-25.35c5-6.69,4.32-16.18-1.59-22.09l-15.29-15.29C303.31,1.76,299.06,0,294.54,0c-3.68,0-7.18,1.16-10.12,3.37l-25.35,18.95-25.35-18.95C230.77,1.16,227.27,0,223.6,0h0c-4.52,0-8.77,1.76-11.96,4.95l-15.29,15.29c-5.9,5.9-6.59,15.4-1.59,22.09l18.95,25.35-18.95,25.35c-5,6.69-4.32,16.18,1.59,22.09l15.29,15.29c3.19,3.19,7.44,4.95,11.96,4.95,3.68,0,7.18-1.16,10.12-3.37l25.35-18.95,25.35,18.95c2.95,2.2,6.45,3.37,10.12,3.37,4.52,0,8.77-1.76,11.96-4.95l15.29-15.29c5.9-5.9,6.59-15.4,1.59-22.09l-18.95-25.35Z",1,"flavor-fill"],["d","M288.01,8.17l-28.94,21.64-28.94-21.64c-4.34-3.25-10.42-2.81-14.25,1.02l-15.29,15.29c-3.84,3.84-4.27,9.91-1.02,14.25l21.64,28.94-21.64,28.94c-3.25,4.34-2.81,10.42,1.02,14.25l15.29,15.29c3.84,3.84,9.91,4.27,14.25,1.02l28.94-21.64,28.94,21.64c4.34,3.25,10.42,2.81,14.25-1.02l15.29-15.29c3.84-3.84,4.27-9.91,1.02-14.25l-21.64-28.94,21.64-28.94c3.25-4.34,2.81-10.42-1.02-14.25l-15.29-15.29c-3.84-3.84-9.91-4.27-14.25-1.02ZM221.9,107.83c2.37,2.37.69,6.43-2.66,6.43h-6.75v-6.75c0-3.35,4.06-5.03,6.43-2.66l2.98,2.98ZM305.65,107.51v6.75h-6.75c-3.35,0-5.03-4.06-2.66-6.43l2.98-2.98c2.37-2.37,6.43-.69,6.43,2.66ZM221.9,27.52l-2.98,2.98c-2.37,2.37-6.43.69-6.43-2.66v-6.75h6.75c3.35,0,5.03,4.06,2.66,6.43ZM305.65,27.85c0,3.35-4.06,5.03-6.43,2.66l-2.98-2.98c-2.37-2.37-.69-6.43,2.66-6.43h6.75v6.75Z"]],template:function(e,n){e&1&&(vt(),u(0,"svg",1)(1,"g",2),z(2,"path",3)(3,"path",4),f(),u(4,"g",5),z(5,"path",6)(6,"path",7)(7,"path",8)(8,"path",9)(9,"path",10)(10,"path",11)(11,"path",12)(12,"path",13)(13,"path",14),f(),u(14,"g",15,0),z(16,"path",16)(17,"path",17),f()()),e&2&&(o(14),h("spinning",n.isSpinning())("spin-entering",n.isSpinEntering()))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;height:32px;cursor:pointer}svg[_ngcontent-%COMP%]{height:100%;width:auto;overflow:visible}.flavor-fill[_ngcontent-%COMP%]{fill:var(--primary, #888)}.dpad-group[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rest-angle, 0deg));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]:hover   .dpad-group[_ngcontent-%COMP%]:not(.spinning):not(.spin-entering){transform:rotate(calc(var(--rest-angle, 0deg) + 90deg))}.dpad-group.spin-entering[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dpad-group.spinning[_ngcontent-%COMP%]{transition:none}@media(prefers-reduced-motion:reduce){.dpad-group[_ngcontent-%COMP%]{transition:none!important}}"]})};var Un=(t,r)=>r.id;function $n(t,r){if(t&1){let e=E();i(0,"button",8),b("click",function(){let a=S(e).$implicit,m=p(2);return T(m.selectTheme(a))}),c(1),s()}if(t&2){let e=r.$implicit,n=p(2);h("active",n.activeTheme()===e),o(),O(" ",e," ")}}function Zn(t,r){if(t&1){let e=E();i(0,"button",9),b("click",function(){let a=S(e).$implicit,m=p(2);return T(m.selectFlavor(a.id))}),_(1,"span",10),c(2),s()}if(t&2){let e=r.$implicit,n=p(2);V("--swatch-color",e.color),h("active",n.activeFlavor()===e.id),o(2),O(" ",e.label," ")}}function Hn(t,r){if(t&1&&(i(0,"div",2),b("click",function(n){return n.stopPropagation()}),i(1,"p",3),c(2,"Appearance"),s(),i(3,"div",4),M(4,$n,2,3,"button",5,$),s(),i(6,"p",3),c(7,"Flavor"),s(),i(8,"div",6),M(9,Zn,3,5,"button",7,Un),s()()),t&2){let e=p();o(4),k(e.themes),o(5),k(e.flavors)}}var mn="theme",pn="flavor",un=["Night","Day","System"],fn=[{id:"avocado",label:"Avocado",color:"#3d7a3d"},{id:"cherry",label:"Cherry",color:"#b52a2a"},{id:"grape",label:"Grape",color:"#6a2d8a"},{id:"lime",label:"Lime",color:"#5c8c1e"},{id:"orange",label:"Orange",color:"#c46a0a"}],Ae=class t{storage=d(Gt);themes=un;flavors=fn;isOpen=v(!1);activeTheme=v("Night");activeFlavor=v("avocado");mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");mediaListener=()=>this.applyDataTheme(this.activeTheme());onDocumentClick(){this.isOpen.set(!1)}ngOnInit(){let r=this.storage.get(mn),e=r&&un.includes(r)?r:"Night";this.activeTheme.set(e),this.applyTheme(e);let n=this.storage.get(pn),a=fn.map(g=>g.id),m=n&&a.includes(n)?n:"avocado";this.activeFlavor.set(m),this.applyFlavor(m)}ngOnDestroy(){this.mediaQuery.removeEventListener("change",this.mediaListener)}toggle(r){r.stopPropagation(),this.isOpen.update(e=>!e)}selectTheme(r){this.activeTheme.set(r),this.storage.set(mn,r),this.applyTheme(r)}selectFlavor(r){this.activeFlavor.set(r),this.storage.set(pn,r),this.applyFlavor(r)}applyTheme(r){this.mediaQuery.removeEventListener("change",this.mediaListener),r==="System"&&this.mediaQuery.addEventListener("change",this.mediaListener),this.applyDataTheme(r)}applyDataTheme(r){let e=r==="System"?this.mediaQuery.matches?"night":"day":r.toLowerCase();document.documentElement.setAttribute("data-theme",e)}applyFlavor(r){document.documentElement.setAttribute("data-flavor",r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["theme-picker"]],hostBindings:function(e,n){e&1&&b("click",function(){return n.onDocumentClick()},wt)},decls:4,vars:3,consts:[["aria-label","Appearance settings",1,"trigger",3,"click"],[1,"dropdown"],[1,"dropdown",3,"click"],[1,"section-label"],[1,"theme-pills"],[1,"theme-pill",3,"active"],[1,"flavor-pills"],[1,"flavor-pill",3,"active","--swatch-color"],[1,"theme-pill",3,"click"],[1,"flavor-pill",3,"click"],[1,"swatch"]],template:function(e,n){e&1&&(i(0,"button",0),b("click",function(m){return n.toggle(m)}),i(1,"mat-icon"),c(2,"palette"),s()(),y(3,Hn,11,0,"div",1)),e&2&&(h("open",n.isOpen()),o(3),w(n.isOpen()?3:-1))},dependencies:[G,L],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}.trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:inherit;cursor:pointer;transition:background .15s}.trigger[_ngcontent-%COMP%]:hover{background:#8080801f}.trigger.open[_ngcontent-%COMP%]{background:#80808033}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:1050;min-width:220px;padding:14px 16px 16px;background:var(--surface-1, #f8f9fa);border:1px solid var(--border, #e2e8f0);border-radius:12px;box-shadow:var(--shadow-lg)}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-tertiary, #718096)}.theme-pills[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:14px}.theme-pill[_ngcontent-%COMP%]{flex:1;padding:5px 8px;border:1px solid var(--border, #e2e8f0);border-radius:6px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.theme-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.theme-pill.active[_ngcontent-%COMP%]{background:var(--primary, #3d7a3d);color:var(--primary-text, #fff);border-color:transparent}.flavor-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.flavor-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid var(--border, #e2e8f0);border-radius:20px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.flavor-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.flavor-pill.active[_ngcontent-%COMP%]{background:var(--swatch-color);color:#fff;border-color:transparent}.swatch[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--swatch-color);flex-shrink:0}"]})};var Qn=["*"];var Wn=new me("MAT_CARD_CONFIG"),gn=(()=>{class t{appearance;constructor(){let e=d(Wn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,a){n&2&&h("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Qn,decls:1,vars:0,template:function(n,a){n&1&&(F(),D(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var hn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=we({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=K({type:t});static \u0275inj=Y({imports:[de]})}return t})();var Fe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-login-register-card"]],decls:9,vars:0,consts:[[1,"card-title"],[1,"btn-group"],["mat-flat-button","","routerLink","/a/login"],["mat-stroked-button","","routerLink","/a/new-account"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1,"Get in the Game"),s(),i(2,"p"),c(3," Login or Register to track game releases, make friends, and get cool spam in your inbox. "),s(),i(4,"div",1)(5,"button",2),c(6," Login "),s(),i(7,"button",3),c(8," Register "),s()())},dependencies:[ie],encapsulation:2})};var Ne=class t{auth=d(A);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-card"]],decls:15,vars:1,consts:[[1,"card-title"],["routerLink","/my/profile"],["routerLink","/my/friends"],["routerLink","/my/settings"],["routerLink","/a/logout"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1),s(),i(2,"ul")(3,"li")(4,"a",1),c(5,"Profile"),s()(),i(6,"li")(7,"a",2),c(8,"Friends"),s()(),i(9,"li")(10,"a",3),c(11,"Settings"),s()(),i(12,"li")(13,"a",4),c(14,"Logout"),s()()()),e&2&&(o(),C(n.auth.username()))},dependencies:[ie],encapsulation:2})};var Ie=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-calendar-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(u(0,"h3",0),c(1,"Minimap"),f())},encapsulation:2})};var Re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-developer-social-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(u(0,"h3",0),c(1,"From the Developers"),f())},encapsulation:2})};var Be=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-forecast-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(u(0,"h3",0),c(1,"Gaming Forecast"),f())},encapsulation:2})};var qn=()=>[1,2,3],Xn=t=>["/",t],Kn=(t,r)=>r.id;function Jn(t,r){t&1&&(i(0,"div",3),_(1,"div",4)(2,"span",5)(3,"span",6),s())}function er(t,r){t&1&&(i(0,"div",1),M(1,Jn,4,0,"div",3,xt),s()),t&2&&(o(),k(kt(0,qn)))}function tr(t,r){t&1&&(i(0,"p",2),c(1,"No upcoming releases found."),s())}function nr(t,r){if(t&1&&_(0,"img",8),t&2){let e=p().$implicit;B("src",e.coverImage,X)("alt",e.name)}}function rr(t,r){if(t&1&&(i(0,"div",3)(1,"a",7),y(2,nr,1,2,"img",8),s(),i(3,"span",9),c(4),s(),i(5,"span",10),c(6),te(7,"date"),i(8,"span",11),c(9),s()()()),t&2){let e=r.$implicit,n=p(2);o(),B("routerLink",Z(8,Xn,e.slug)),o(),w(e.coverImage?2:-1),o(2),C(e.name),o(2),O(" ",ne(7,5,e.released,"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e.released))}}function ar(t,r){if(t&1&&(i(0,"div",1),M(1,rr,10,10,"div",3,Kn),s()),t&2){let e=p();o(),k(e.games())}}var ze=class t{gamesService=d(Jt);games=v([]);loading=v(!0);ngOnInit(){this.gamesService.getUpcoming(3).subscribe({next:r=>{this.games.set(r),this.loading.set(!1)},error:()=>this.loading.set(!1)})}timeUntil(r){if(!r)return"";let e=new Date(r).getTime()-Date.now();if(e<=0)return"Out now";let n=Math.floor(e/864e5);return n<1?"Tomorrow":`In ${n} day${n!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-new-releases-card"]],decls:5,vars:1,consts:[[1,"card-title"],[1,"release-group"],[1,"empty-label"],[1,"release-container"],[1,"image-frame","skeleton"],[1,"release-title","skeleton-text"],[1,"release-date","skeleton-text","short"],[1,"image-frame",3,"routerLink"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1,"New Releases"),s(),y(2,er,3,1,"div",1)(3,tr,2,0,"p",2)(4,ar,3,0,"div",1)),e&2&&(o(2),w(n.loading()?2:n.games().length===0?3:4))},dependencies:[ie,re],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}.empty-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);margin:.5rem 0 0}.skeleton[_ngcontent-%COMP%]{background:var(--surface-2);animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}.skeleton-text[_ngcontent-%COMP%]{display:block;height:.65rem;border-radius:4px;background:var(--surface-2);animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}.skeleton-text.short[_ngcontent-%COMP%]{width:60%}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.45}}']})};var ir=(t,r)=>r.title;function or(t,r){t&1&&(u(0,"span",6),c(1,"EA"),f())}function sr(t,r){if(t&1&&(u(0,"div",2)(1,"div",3),z(2,"img",4),f(),u(3,"span",5),c(4),y(5,or,2,0,"span",6),f(),u(6,"span",7),c(7),te(8,"date"),u(9,"span",8),c(10),f()()()),t&2){let e=r.$implicit,n=p();o(2),Ce("src",e.imageSource,X)("alt",e.title),o(2),O(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),O(" ",ne(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e))}}var je=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let g=Math.floor(n/864e5);return`In ${g} day${g!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(u(0,"h3",0),c(1,"Your Releases"),f(),u(2,"div",1),M(3,sr,11,9,"div",2,ir),f()),e&2&&(o(3),k(n.newReleases))},dependencies:[re],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var dr=(t,r)=>r.title;function cr(t,r){t&1&&(u(0,"span",6),c(1,"EA"),f())}function lr(t,r){if(t&1&&(u(0,"div",2)(1,"div",3),z(2,"img",4),f(),u(3,"span",5),c(4),y(5,cr,2,0,"span",6),f(),u(6,"span",7),c(7),te(8,"date"),u(9,"span",8),c(10),f()()()),t&2){let e=r.$implicit,n=p();o(2),Ce("src",e.imageSource,X)("alt",e.title),o(2),O(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),O(" ",ne(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e))}}var Ve=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let g=Math.floor(n/864e5);return`In ${g} day${g!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-pinned-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(u(0,"h3",0),c(1,"Pinned Releases"),f(),u(2,"div",1),M(3,lr,11,9,"div",2,dr),f()),e&2&&(o(3),k(n.newReleases))},dependencies:[re],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var Le=t=>[t];function mr(t,r){t&1&&_(0,"nav-calendar-card")}function pr(t,r){t&1&&_(0,"nav-developer-social-card")}function ur(t,r){t&1&&_(0,"nav-forecast-card")}function fr(t,r){if(t&1&&(i(0,"div",6),y(1,mr,1,0,"nav-calendar-card")(2,pr,1,0,"nav-developer-social-card")(3,ur,1,0,"nav-forecast-card"),s()),t&2){let e,n=p();o(),w((e=n.slot1Cards()[n.card1Index()])==="calendar"?1:e==="developerBluesky"?2:e==="forecast"?3:-1)}}function gr(t,r){if(t&1&&_(0,"div",13),t&2){let e=p(2);h("paused",e.paused1()||e.hovering1())}}function hr(t,r){if(t&1){let e=E();i(0,"div",7)(1,"div",10),M(2,gr,1,2,"div",11,$),s(),i(4,"button",12),b("click",function(){S(e);let a=p();return T(a.togglePause(1))}),i(5,"mat-icon"),c(6),s()()()}if(t&2){let e=p();o(2),k(Z(2,Le,e.card1Index())),o(2),J("aria-label",e.paused1()?"Resume":"Pause"),o(2),C(e.paused1()?"play_arrow":"pause")}}function vr(t,r){t&1&&_(0,"nav-new-releases-card")}function _r(t,r){t&1&&_(0,"nav-user-releases-card")}function br(t,r){t&1&&_(0,"nav-pinned-releases-card")}function yr(t,r){if(t&1&&(i(0,"div",6),y(1,vr,1,0,"nav-new-releases-card")(2,_r,1,0,"nav-user-releases-card")(3,br,1,0,"nav-pinned-releases-card"),s()),t&2){let e,n=p();o(),w((e=n.slot2Cards()[n.card2Index()])==="newReleases"?1:e==="yourReleases"?2:e==="pinnedReleases"?3:-1)}}function wr(t,r){if(t&1&&_(0,"div",13),t&2){let e=p(2);h("paused",e.paused2()||e.hovering2())}}function Cr(t,r){if(t&1){let e=E();i(0,"div",7)(1,"div",10),M(2,wr,1,2,"div",11,$),s(),i(4,"button",12),b("click",function(){S(e);let a=p();return T(a.togglePause(2))}),i(5,"mat-icon"),c(6),s()()()}if(t&2){let e=p();o(2),k(Z(2,Le,e.card2Index())),o(2),J("aria-label",e.paused2()?"Resume":"Pause"),o(2),C(e.paused2()?"play_arrow":"pause")}}function xr(t,r){t&1&&_(0,"nav-user-card")}function Mr(t,r){t&1&&_(0,"nav-login-register-card")}var Ge=class t{open=tt(!1);isAuthenticated=tt(!1);userCardPreferences=v([{card:"calendar",display:1},{card:"developerBluesky",display:1},{card:"forecast",display:1},{card:"newReleases",display:2},{card:"yourReleases",display:2},{card:"pinnedReleases",display:2}]);slot1Cards=et(()=>this.userCardPreferences().filter(r=>r.display===1).map(r=>r.card));slot2Cards=et(()=>this.userCardPreferences().filter(r=>r.display===2).map(r=>r.card));card1Index=v(0);card2Index=v(0);card1Dir=v("down");card2Dir=v("down");hovering1=v(!1);hovering2=v(!1);paused1=v(!1);paused2=v(!1);autoInterval=4800;timer1=null;timer2=null;destroyRef=d(_t);constructor(){pe(()=>{this.open()&&!this.paused1()&&!this.hovering1()?this.startSlot1():this.stopSlot1()}),pe(()=>{this.open()&&!this.paused2()&&!this.hovering2()?this.startSlot2():this.stopSlot2()}),this.destroyRef.onDestroy(()=>{this.stopSlot1(),this.stopSlot2()})}startSlot1(){this.stopSlot1(),this.slot1Cards().length>1&&(this.timer1=setInterval(()=>this.cycle(1,"next"),this.autoInterval))}stopSlot1(){this.timer1!==null&&(clearInterval(this.timer1),this.timer1=null)}startSlot2(){this.stopSlot2(),this.slot2Cards().length>1&&(this.timer2=setInterval(()=>this.cycle(2,"next"),this.autoInterval))}stopSlot2(){this.timer2!==null&&(clearInterval(this.timer2),this.timer2=null)}cycle(r,e){let n=r===1?this.slot1Cards():this.slot2Cards(),a=r===1?this.card1Index:this.card2Index;(r===1?this.card1Dir:this.card2Dir).set(e==="next"?"down":"up"),a.update(g=>{let W=e==="next"?g+1:g-1;return W<0||W>=n.length?0:W}),r===1&&!this.paused1()&&!this.hovering1()&&this.open()?this.startSlot1():r===2&&!this.paused2()&&!this.hovering2()&&this.open()&&this.startSlot2()}togglePause(r){r===1?this.paused1.update(e=>!e):this.paused2.update(e=>!e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-dropdown"]],inputs:{open:[1,"open"],isAuthenticated:[1,"isAuthenticated"]},decls:36,vars:21,consts:[[1,"dropdown-panel"],[1,"cards-grid"],[1,"card-col"],["aria-label","Previous",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper",3,"mouseenter","mouseleave"],[1,"card-slot"],[1,"card-anim"],[1,"card-overlay"],["aria-label","Next",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper"],[1,"countdown-track"],[1,"countdown-fill",3,"paused"],[1,"pause-btn",3,"click"],[1,"countdown-fill"]],template:function(e,n){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),b("click",function(){return n.cycle(1,"prev")}),i(4,"mat-icon"),c(5,"keyboard_arrow_up"),s()(),i(6,"div",4),b("mouseenter",function(){return n.hovering1.set(!0)})("mouseleave",function(){return n.hovering1.set(!1)}),i(7,"mat-card")(8,"mat-card-content")(9,"div",5),M(10,fr,4,1,"div",6,$),s()()(),y(12,hr,7,4,"div",7),s(),i(13,"button",8),b("click",function(){return n.cycle(1,"next")}),i(14,"mat-icon"),c(15,"keyboard_arrow_down"),s()()(),i(16,"div",2)(17,"button",3),b("click",function(){return n.cycle(2,"prev")}),i(18,"mat-icon"),c(19,"keyboard_arrow_up"),s()(),i(20,"div",4),b("mouseenter",function(){return n.hovering2.set(!0)})("mouseleave",function(){return n.hovering2.set(!1)}),i(21,"mat-card")(22,"mat-card-content")(23,"div",5),M(24,yr,4,1,"div",6,$),s()()(),y(26,Cr,7,4,"div",7),s(),i(27,"button",8),b("click",function(){return n.cycle(2,"next")}),i(28,"mat-icon"),c(29,"keyboard_arrow_down"),s()()(),i(30,"div",2)(31,"div",9)(32,"mat-card")(33,"mat-card-content"),y(34,xr,1,0,"nav-user-card")(35,Mr,1,0,"nav-login-register-card"),s()()()()()()),e&2&&(h("open",n.open()),o(3),B("disabled",n.slot1Cards().length<=1),o(6),h("from-down",n.card1Dir()==="down")("from-up",n.card1Dir()==="up"),o(),k(Z(17,Le,n.card1Index())),o(2),w(n.slot1Cards().length>1?12:-1),o(),B("disabled",n.slot1Cards().length<=1),o(4),B("disabled",n.slot2Cards().length<=1),o(6),h("from-down",n.card2Dir()==="down")("from-up",n.card2Dir()==="up"),o(),k(Z(19,Le,n.card2Index())),o(2),w(n.slot2Cards().length>1?26:-1),o(),B("disabled",n.slot2Cards().length<=1),o(7),w(n.isAuthenticated()?34:35))},dependencies:[vn,gn,hn,ke,G,L,Fe,Ne,Ie,Re,Be,ze,je,Ve],styles:["[_nghost-%COMP%]{display:block}.dropdown-panel[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);background:var(--surface-crevice);box-shadow:inset 0 12px 24px -8px #000000bf,inset 0 -12px 24px -8px #000000bf}.dropdown-panel.open[_ngcontent-%COMP%]{height:340px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:12px 16px;height:100%;box-sizing:border-box}.card-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-height:0}.full-arrow[_ngcontent-%COMP%]{width:100%;height:20px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:var(--text-secondary, #888);cursor:pointer;border-radius:4px;flex-shrink:0;padding:0;transition:background .15s ease,color .15s ease,opacity .15s ease}.full-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.full-arrow[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--primary)}.full-arrow[_ngcontent-%COMP%]:disabled{opacity:0;pointer-events:none;cursor:default}.card-wrapper[_ngcontent-%COMP%]{position:relative;flex:1;min-height:0;display:flex;flex-direction:column}mat-card[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:hidden}[_nghost-%COMP%]     mat-card{padding:0!important}[_nghost-%COMP%]     mat-card-content{padding:0!important;margin-bottom:0!important}[_nghost-%COMP%]     .card-title{margin:0;padding:6px 8px 4px}.card-slot[_ngcontent-%COMP%]{overflow:hidden;height:100%}.card-slot.from-down[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-bottom .22s cubic-bezier(.4,0,.2,1)}.card-slot.from-up[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-top .22s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_slide-from-bottom{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slide-from-top{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}.card-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;gap:6px;padding:10px 8px 6px;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 100%);border-radius:0 0 12px 12px}.countdown-track[_ngcontent-%COMP%]{flex:1;height:3px;background:#ffffff2e;border-radius:2px;overflow:hidden;position:relative;opacity:.5;transition:opacity .15s ease}.card-wrapper[_ngcontent-%COMP%]:hover   .countdown-track[_ngcontent-%COMP%]{opacity:1}.countdown-fill[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--primary);transform-origin:left center;animation:_ngcontent-%COMP%_countdown 5s linear forwards}.countdown-fill.paused[_ngcontent-%COMP%]{animation-play-state:paused}@keyframes _ngcontent-%COMP%_countdown{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.pause-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20px;height:20px;background:#0006;border:none;color:#fffc;cursor:pointer;border-radius:4px;padding:0;flex-shrink:0;opacity:.5;transition:background .15s ease,color .15s ease,opacity .15s ease}.pause-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;line-height:13px}.pause-btn[_ngcontent-%COMP%]:hover{background:#0009;color:#fff;opacity:1}"]})};var Ue=class t{auth=d(A);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-corner"]],decls:3,vars:1,consts:[["size","tiny"],[1,"username"]],template:function(e,n){e&1&&(_(0,"profile-photo-viewer",0),i(1,"span",1),c(2),s()),e&2&&(o(2),C(n.auth.username()))},dependencies:[qt],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:8px}.username[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--text-primary)}"]})};function kr(t,r){if(t&1){let e=E();i(0,"nav-user-corner",5),b("click",function(){S(e);let a=p();return T(a.toggleMenu())}),s()}}var $e=class t{menuOpen=v(!1);auth=d(A);constructor(){d(ae).events.pipe(U(r=>r instanceof Me),De()).subscribe(()=>this.menuOpen.set(!1))}toggleMenu(){this.menuOpen.update(r=>!r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["navigation"]],decls:9,vars:3,consts:[["matIconButton","","aria-label","Main Application Navigation Menu",1,"app-nav-menu",3,"click"],[3,"click"],[1,"nav-spacer"],[1,"cursor-pointer"],[3,"open","isAuthenticated"],[1,"cursor-pointer",3,"click"]],template:function(e,n){e&1&&(i(0,"mat-toolbar")(1,"button",0),b("click",function(){return n.toggleMenu()}),i(2,"mat-icon"),c(3,"menu"),s()(),i(4,"next-flavor-brand",1),b("click",function(){return n.toggleMenu()}),s(),_(5,"span",2),y(6,kr,1,0,"nav-user-corner",3),_(7,"theme-picker"),s(),_(8,"nav-dropdown",4)),e&2&&(o(6),w(n.auth.isLoggedIn()?6:-1),o(2),B("open",n.menuOpen())("isAuthenticated",n.auth.isLoggedIn()))},dependencies:[dn,sn,ke,Wt,G,L,Oe,Ue,Ae,Ge],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{overflow:visible}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var Ze=class t{isLoading=d(oe).isLoading;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["load-progress-bar"]],decls:2,vars:2,consts:[[1,"track"],[1,"fill"]],template:function(e,n){e&1&&(u(0,"div",0),z(1,"div",1),f()),e&2&&(o(),h("active",n.isLoading()))},styles:["[_nghost-%COMP%]{display:block;height:3px;pointer-events:none}.track[_ngcontent-%COMP%]{width:100%;height:100%;background:color-mix(in srgb,var(--primary, #888) 18%,transparent);overflow:hidden;position:relative;transition:background .3s}.fill[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,transparent 0%,var(--primary, #888) 40%);box-shadow:0 0 10px 1px var(--primary, #888);opacity:0;transform:translate(-100%);transition:opacity .25s ease}.fill.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_bar-sweep 1.5s cubic-bezier(.4,0,.3,1) infinite}@keyframes _ngcontent-%COMP%_bar-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.fill.active[_ngcontent-%COMP%]{animation:none;transform:none;width:100%;background:var(--primary, #888);opacity:.6}}"]})};var Dr=(t,r)=>r.id;function Pr(t,r){if(t&1){let e=E();i(0,"div",3)(1,"div",4)(2,"div",5)(3,"mat-icon",6),c(4),s(),i(5,"span",7),c(6),s(),i(7,"button",8),b("click",function(){let a=S(e).$implicit,m=p();return T(m.startDismiss(a.id))}),i(8,"mat-icon",9),c(9,"close"),s()()()()()}if(t&2){let e=r.$implicit,n=p();h("dismissing",n.dismissing().has(e.id)),o(2),V("--alert-color",n.typeColor[e.type])("--alert-bg",n.typeBg[e.type]),o(2),C(n.typeIcon[e.type]),o(2),C(e.message)}}var Sr={error:"error_outline",warning:"warning_amber",info:"info_outline"},Tr={error:"var(--error)",warning:"var(--warning)",info:"var(--info)"},Er={error:"var(--error-bg)",warning:"var(--warning-bg)",info:"var(--info-bg)"},He=class t{service=d(zt);dismissing=v(new Set);typeIcon=Sr;typeColor=Tr;typeBg=Er;startDismiss(r){this.dismissing.update(e=>new Set([...e,r])),setTimeout(()=>{this.service.dismiss(r),this.dismissing.update(e=>{let n=new Set(e);return n.delete(r),n})},290)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["alert-display"]],decls:4,vars:2,consts:[["aria-live","polite","aria-atomic","false",1,"panel"],[1,"inner"],[1,"alert-wrap",3,"dismissing"],[1,"alert-wrap"],[1,"alert-content"],[1,"alert-row"],[1,"alert-icon"],[1,"alert-message"],["aria-label","Dismiss alert",1,"dismiss-btn",3,"click"],[1,"dismiss-icon"]],template:function(e,n){e&1&&(i(0,"div",0)(1,"div",1),M(2,Pr,10,8,"div",2,Dr),s()()),e&2&&(h("open",n.service.hasAlerts()),o(2),k(n.service.alerts()))},dependencies:[G,L],styles:["[_nghost-%COMP%]{display:block}.panel[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s cubic-bezier(.4,0,.2,1),border-bottom-color .3s cubic-bezier(.4,0,.2,1);background:var(--surface-1);border-bottom:1px solid transparent}.panel.open[_ngcontent-%COMP%]{grid-template-rows:1fr;border-bottom-color:var(--border)}.inner[_ngcontent-%COMP%]{overflow:hidden;min-height:0;padding:0;transition:padding .3s cubic-bezier(.4,0,.2,1)}.panel.open[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:6px 0}.alert-wrap[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;transition:grid-template-rows .28s cubic-bezier(.4,0,.2,1),opacity .28s ease;animation:_ngcontent-%COMP%_alert-in .3s cubic-bezier(.4,0,.2,1)}.alert-wrap.dismissing[_ngcontent-%COMP%]{grid-template-rows:0fr;opacity:0}.alert-content[_ngcontent-%COMP%]{overflow:hidden;min-height:0}.alert-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:3px 16px;padding:8px 10px 8px 12px;border-radius:35px;border:solid var(--alert-color);border-width:1px 3px 6px;corner-shape:squircle;background:var(--alert-bg)}.alert-icon[_ngcontent-%COMP%]{color:var(--alert-color);font-size:20px;width:20px;height:20px;flex-shrink:0}.alert-message[_ngcontent-%COMP%]{flex:1;font-size:.875rem;line-height:1.4;color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;color:var(--text-tertiary);flex-shrink:0;transition:background .15s,color .15s}.dismiss-btn[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.dismiss-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}@keyframes _ngcontent-%COMP%_alert-in{0%{grid-template-rows:0fr;opacity:0}to{grid-template-rows:1fr;opacity:1}}"]})};var _n="0.4.0 Alpha";var Qe=class t{ngVersion=ht.full;appVersion=_n;currentYear=new Date().getFullYear();versionText=v(`ng ${this.ngVersion} ${this.appVersion}`);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["footer"]],decls:5,vars:2,consts:[[1,"bg-black","flex","flex-col","items-center","justify-center","py-4","gap-0.5",2,"background-color","black"],[1,"font-mono","text-sm","text-primary"],[1,"font-mono","text-xs","text-primary/50"]],template:function(e,n){e&1&&(u(0,"div",0)(1,"p",1),c(2),f(),u(3,"p",2),c(4),f()()),e&2&&(o(2),O("\xA9 ",n.currentYear),o(2),C(n.versionText()))},styles:["[_nghost-%COMP%]{display:block}"]})};var We=class t{constructor(){let r=d(ae),e=d(oe);r.events.pipe(De()).subscribe(n=>{n instanceof At?e.start():(n instanceof Me||n instanceof Ft||n instanceof Nt)&&e.stop()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"sticky-header"],[1,"sidenav-container"],[1,"main-content"]],template:function(e,n){e&1&&(i(0,"div",0),_(1,"navigation")(2,"load-progress-bar")(3,"alert-display"),s(),i(4,"mat-sidenav-container",1)(5,"mat-sidenav-content")(6,"div",2),_(7,"router-outlet"),s()()(),_(8,"footer"))},dependencies:[$e,Ze,He,on,an,Te,It,Qe],encapsulation:2})};St(We,rn).catch(t=>console.error(t));
