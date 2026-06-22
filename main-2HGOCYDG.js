import{a as Xt,b as de,c as Kt,d as ot}from"./chunk-PIWFHZSM.js";import{a as Jt}from"./chunk-3V6BW2KA.js";import{a as Te}from"./chunk-L23RDOGB.js";import{a as Gt}from"./chunk-EDUZX76J.js";import{a as Vt,b as jt,d as ie,f as Lt}from"./chunk-X3C3DEEE.js";import{A as qt,B as se,E as Se,F as L,G,d as oe,e as it,g as Ut,k as $t,l as Ht,m as Qt,u as Wt,w as H,z as Yt}from"./chunk-PAPM5F2H.js";import{a as A}from"./chunk-63TMGZCI.js";import{a as Zt}from"./chunk-6CDPO5EE.js";import{d as ne,g as Tt,h as Et,j as Ot,k as Ft,n as At,o as Pe,p as Nt,q as It,s as Rt,t as re,u as ae,w as Bt,x as zt}from"./chunk-4TXPSCFJ.js";import{$b as J,Ab as p,B as vt,Bb as f,C as _t,Cb as F,D as et,Db as E,Eb as Me,Hb as b,Jb as u,Kb as N,Lb as P,M as tt,Mb as fe,Na as q,Nb as ge,O as B,Ob as I,Pa as Ct,Pb as R,Q as bt,Qa as o,Ub as j,V as W,Va as rt,Vb as h,Wb as ke,X as me,Xb as c,Ya as Mt,Yb as C,Z as d,Zb as O,ac as Dt,bc as $,ca as S,cc as ee,da as T,db as l,ea as _e,eb as X,ec as te,f as V,fa as nt,fb as Ce,ga as be,h as mt,ha as yt,hb as ue,hc as Pt,ja as ye,jc as St,k as pt,ka as we,kc as at,n as ut,na as wt,nc as he,o as ft,oa as v,p as Je,pb as K,qa as pe,qb as y,qc as De,rb as w,sa as xe,sb as kt,tb as U,ua as Y,ub as M,va as xt,vb as k,w as gt,wb as z,x as Z,xb as i,yb as s,z as ht,zb as _}from"./chunk-4LMTEDXW.js";var xn=15e3,en=(t,r)=>r(t).pipe(ft(xn),ht(e=>e instanceof ut||e instanceof Et&&e.status===0?(jt("Connection error. Please check your network and try again."),Lt(),mt):pt(()=>e)));var tn=(t,r)=>{let e=d(A).getToken();return e&&t.url.startsWith(Gt.apiUrl)&&(t=t.clone({headers:t.headers.set("Authorization",`Bearer ${e}`)})),r(t)};var ce=()=>d(A).isLoggedIn()?!0:d(re).createUrlTree(["/a/login"]);var Ee=()=>d(A).role()==="admin";var nn=[{path:"",loadComponent:()=>import("./chunk-ADTOUZ65.js").then(t=>t.Landing)},{path:"a/login",loadComponent:()=>import("./chunk-4RKDSD2L.js").then(t=>t.Login)},{path:"a/login/with-totp",loadComponent:()=>import("./chunk-4RKDSD2L.js").then(t=>t.Login)},{path:"a/login/with-passkey",loadComponent:()=>import("./chunk-4RKDSD2L.js").then(t=>t.Login)},{path:"a/forgot-password",loadComponent:()=>import("./chunk-IAAS5DHP.js").then(t=>t.ForgotPassword)},{path:"a/new-account",loadComponent:()=>import("./chunk-G5CJZ6P6.js").then(t=>t.Registration)},{path:"a/logout",loadComponent:()=>import("./chunk-U2WD6TH4.js").then(t=>t.Logout)},{path:"my/profile",canActivate:[ce],loadComponent:()=>import("./chunk-RJ6EMGKF.js").then(t=>t.ProfileView),data:{mode:"own"}},{path:"my/friend/:username",canActivate:[ce],loadComponent:()=>import("./chunk-RJ6EMGKF.js").then(t=>t.ProfileView),data:{mode:"friend"}},{path:"my/friends",canActivate:[ce],loadComponent:()=>import("./chunk-RJ6EMGKF.js").then(t=>t.ProfileView)},{path:"my/calendar",canActivate:[ce],loadComponent:()=>import("./chunk-CB6FHTLQ.js").then(t=>t.CalendarView)},{path:"my/settings",canActivate:[ce],loadComponent:()=>import("./chunk-H6EICYGF.js").then(t=>t.UserSettings)},{path:"the/calendar",loadComponent:()=>import("./chunk-CB6FHTLQ.js").then(t=>t.CalendarView)},{path:"a/gamer/named/:username",loadComponent:()=>import("./chunk-RJ6EMGKF.js").then(t=>t.ProfileView),data:{mode:"public"}},{path:"admin",canMatch:[Ee],loadComponent:()=>import("./chunk-ZAFHBPSF.js").then(t=>t.Admin)},{path:"admin/games",canMatch:[Ee],loadComponent:()=>import("./chunk-6WOSVU4X.js").then(t=>t.AdminGames)},{path:"admin/debug",canMatch:[Ee],loadComponent:()=>import("./chunk-S7MELJN2.js").then(t=>t.Debug)},{path:":gameSlug",loadComponent:()=>import("./chunk-BCLMNLHH.js").then(t=>t.GameView)},{path:"**",loadComponent:()=>import("./chunk-LVQU74KY.js").then(t=>t.NotFound)}];var rn={providers:[wt(),Pt(),Bt(nn,zt()),Ot(Ft([tn,en]))]};var Ae=["*"],Mn=["content"],kn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Dn=["mat-drawer","mat-drawer-content","*"];function Pn(t,r){if(t&1){let e=E();i(0,"div",1),b("click",function(){S(e);let a=u();return T(a._onBackdropClicked())}),s()}if(t&2){let e=u();h("mat-drawer-shown",e._isShowingBackdrop())}}function Sn(t,r){t&1&&(i(0,"mat-drawer-content"),P(1,2),s())}var Tn=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],En=["mat-sidenav","mat-sidenav-content","*"];function On(t,r){if(t&1){let e=E();i(0,"div",1),b("click",function(){S(e);let a=u();return T(a._onBackdropClicked())}),s()}if(t&2){let e=u();h("mat-drawer-shown",e._isShowingBackdrop())}}function Fn(t,r){t&1&&(i(0,"mat-sidenav-content"),P(1,2),s())}var An=`.mat-drawer-container {
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
`;var Nn=new me("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ct=new me("MAT_DRAWER_CONTAINER"),Oe=(()=>{class t extends de{_platform=d(oe);_changeDetectorRef=d(De);_container=d(dt);constructor(){let e=d(Y),n=d(Xt),a=d(we);super(e,n,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(j("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),h("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[J([{provide:de,useExisting:t}]),ue],ngContentSelectors:Ae,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},encapsulation:2,changeDetection:0})}return t})(),st=(()=>{class t{_elementRef=d(Y);_focusTrapFactory=d(Ht);_focusMonitor=d(Ut);_platform=d(oe);_ngZone=d(we);_renderer=d(Mt);_interactivityChecker=d($t);_doc=d(be);_container=d(ct,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=H(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=H(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(H(e))}_opened=v(!1);_openedVia=null;_animationStarted=new V;_animationEnd=new V;openedChange=new ye(!0);_openedStream=this.openedChange.pipe(Z(e=>e),Je(()=>{}));openedStart=this._animationStarted.pipe(Z(()=>this.opened),et(void 0));_closedStream=this.openedChange.pipe(Z(e=>!e),Je(()=>{}));closedStart=this._animationStarted.pipe(Z(()=>!this.opened),et(void 0));_destroyed=new V;onPositionChanged=new ye;_content;_modeChanged=new V;_injector=d(nt);_changeDetectorRef=d(De);constructor(){this.openedChange.pipe(B(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!Qt(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{m(),g(),e.removeAttribute("tabindex")},m=this._renderer.listen(e,"blur",a),g=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":rt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,n,a){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(m=>{this.openedChange.pipe(_t(1)).subscribe(g=>m(g?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,a=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,n)),a.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,a){if(n&1&&ge(Mn,5),n&2){let m;I(m=R())&&(a._content=m.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,a){n&2&&(K("align",null)("tabIndex",a.mode!=="side"?"-1":null),j("visibility",!a._container&&!a.opened?"hidden":null),h("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ae,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(N(),i(0,"div",1,0),P(2),s())},dependencies:[de],encapsulation:2,changeDetection:0})}return t})(),dt=(()=>{class t{_dir=d(qt,{optional:!0});_element=d(Y);_ngZone=d(we);_changeDetectorRef=d(De);_animationDisabled=Wt();_transitionsEnabled=!1;_allDrawers;_drawers=new xt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=H(e)}_autosize=d(Nn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:H(e)}_backdropOverride=null;backdropClick=new ye;_start=null;_end=null;_left=null;_right=null;_destroyed=new V;_doCheckSubject=new V;_contentMargins={left:null,right:null};_contentMarginChanges=new V;get scrollable(){return this._userContent||this._content}_injector=d(nt);constructor(){let e=d(oe),n=d(Kt);this._dir?.change.pipe(B(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(B(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(tt(this._allDrawers),B(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(tt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(vt(10),B(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();e+=a,n-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();n+=a,e-=a}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(B(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(B(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(B(this._drawers.changes)).subscribe(()=>{rt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(B(gt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?n.add(a):n.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,a,m){if(n&1&&fe(m,Oe,5)(m,st,5),n&2){let g;I(g=R())&&(a._content=g.first),I(g=R())&&(a._allDrawers=g)}},viewQuery:function(n,a){if(n&1&&ge(Oe,5),n&2){let m;I(m=R())&&(a._userContent=m.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,a){n&2&&h("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[J([{provide:ct,useExisting:t}])],ngContentSelectors:Dn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(N(kn),y(0,Pn,1,2,"div",0),P(1),P(2,1),y(3,Sn,2,0,"mat-drawer-content")),n&2&&(w(a.hasBackdrop?0:-1),o(3),w(a._content?-1:3))},dependencies:[Oe],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Fe=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[J([{provide:de,useExisting:t}]),ue],ngContentSelectors:Ae,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},encapsulation:2,changeDetection:0})}return t})(),In=(()=>{class t extends st{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=H(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=it(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=it(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(K("tabIndex",a.mode!=="side"?"-1":null)("align",null),j("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),h("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[J([{provide:st,useExisting:t}]),ue],ngContentSelectors:Ae,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(N(),i(0,"div",1,0),P(2),s())},dependencies:[de],encapsulation:2,changeDetection:0})}return t})(),an=(()=>{class t extends dt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=xe(t)))(a||t)}})();static \u0275cmp=l({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,a,m){if(n&1&&fe(m,Fe,5)(m,In,5),n&2){let g;I(g=R())&&(a._content=g.first),I(g=R())&&(a._allDrawers=g)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,a){n&2&&h("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[J([{provide:ct,useExisting:t},{provide:dt,useExisting:t}]),ue],ngContentSelectors:En,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(N(Tn),y(0,On,1,2,"div",0),P(1),P(2,1),y(3,Fn,2,0,"mat-sidenav-content")),n&2&&(w(a.hasBackdrop?0:-1),o(3),w(a._content?-1:3))},dependencies:[Fe],styles:[An],encapsulation:2,changeDetection:0})}return t})(),on=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[ot,se,ot]})}return t})();var Bn=["*",[["mat-toolbar-row"]]],zn=["*","mat-toolbar-row"],Vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Ce({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),sn=(()=>{class t{_elementRef=d(Y);_platform=d(oe);_document=d(be);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,a,m){if(n&1&&fe(m,Vn,5),n&2){let g;I(g=R())&&(a._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,a){n&2&&(ke(a.color?"mat-"+a.color:""),h("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:zn,decls:2,vars:0,template:function(n,a){n&1&&(N(Bn),P(0),P(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[se]})}return t})();var Ln=["dpadGroup"],ve=700,cn=700,Gn=1400,ln=.35,Ne=class t{dpadGroupRef;loadingService=d(ie);reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");isSpinning=v(!1);isSpinEntering=v(!1);spinAnimation=null;kickbackAnim=null;rampRAF=null;settleTimer=null;entryTimer=null;constructor(){pe(()=>{this.loadingService.isLoading()?this.startSpin():this.stopSpin()})}ngAfterViewInit(){}ngOnDestroy(){this.cancelRamp(),this.kickbackAnim?.cancel(),this.spinAnimation?.cancel(),this.settleTimer&&clearTimeout(this.settleTimer),this.entryTimer&&clearTimeout(this.entryTimer)}startSpin(){if(this.kickbackAnim||St(this.isSpinEntering))return;if(this.cancelRamp(),this.settleTimer&&(clearTimeout(this.settleTimer),this.settleTimer=null),this.spinAnimation){this.ramp(this.spinAnimation.playbackRate,1,cn,"easeIn");return}let r=this.dpadGroupRef?.nativeElement;r&&(this.isSpinEntering.set(!0),this.entryTimer=setTimeout(()=>{if(this.entryTimer=null,this.isSpinEntering.set(!1),this.reducedMotion.matches){this.isSpinning.set(!0);return}r.style.transition="",r.style.transform="",this.kickbackAnim=r.animate([{transform:"rotate(0deg)",easing:"ease-out"},{transform:"rotate(-14deg)",easing:"ease-in"},{transform:"rotate(0deg)"}],{duration:160,iterations:1}),this.kickbackAnim.onfinish=()=>{this.kickbackAnim=null,this.spinAnimation=r.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:ve,iterations:1/0,easing:"linear"}),this.spinAnimation.playbackRate=ln,this.isSpinning.set(!0),this.ramp(ln,1,cn,"easeIn")}},200))}stopSpin(){if(this.entryTimer&&(clearTimeout(this.entryTimer),this.entryTimer=null,this.isSpinEntering.set(!1)),this.kickbackAnim&&(this.kickbackAnim.cancel(),this.kickbackAnim=null),!this.spinAnimation){this.isSpinning.set(!1);return}if(this.reducedMotion.matches){this.spinAnimation.cancel(),this.spinAnimation=null,this.isSpinning.set(!1);return}let r=this.spinAnimation.playbackRate;this.cancelRamp(),this.ramp(r,0,Gn,"easeOut",()=>this.snapAndSettle())}snapAndSettle(){if(!this.spinAnimation)return;let r=this.dpadGroupRef.nativeElement,a=(this.spinAnimation.currentTime%ve+ve)%ve/ve*360,m=Math.round(a/90)*90;r.style.transform=`rotate(${a}deg)`,this.spinAnimation.cancel(),this.spinAnimation=null,requestAnimationFrame(()=>{r.style.transition="transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",r.style.transform=`rotate(${m}deg)`,this.settleTimer=setTimeout(()=>{this.settleTimer=null,r.style.setProperty("--rest-angle",`${m%360}deg`),r.style.transition="none",r.style.transform="",this.isSpinning.set(!1),requestAnimationFrame(()=>{r.style.transition=""})},480)})}ramp(r,e,n,a,m){this.cancelRamp();let g=performance.now(),Q=bn=>{let le=Math.min((bn-g)/n,1),yn=a==="easeIn"?le*le:1-(1-le)*(1-le),wn=r+(e-r)*yn;this.spinAnimation&&(this.spinAnimation.playbackRate=wn),le<1?this.rampRAF=requestAnimationFrame(Q):(this.rampRAF=null,m?.())};this.rampRAF=requestAnimationFrame(Q)}cancelRamp(){this.rampRAF!==null&&(cancelAnimationFrame(this.rampRAF),this.rampRAF=null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["next-flavor-brand"]],viewQuery:function(e,n){if(e&1&&ge(Ln,5),e&2){let a;I(a=R())&&(n.dpadGroupRef=a.first)}},decls:18,vars:4,consts:[["dpadGroup",""],["viewBox","0 0 1019.13 138.59","fill","white","focusable","false","role","img","aria-label","Next Flavor"],[1,"text-tail"],["d","M224.82,73.21c3.24-4.86.72-27.26,1.5-32.87,0-11.05-8.96-20-20-20-54.22.02-132.66-.01-186.05,0C.16,21.06-.75,39.71.27,55.37c.02,13.39-.02,31.7,0,45.08-.96,15.68-.23,34.26,20,35.03,46.3-.07,140.71.05,186.65,0,24.32-.6,19.88-27.64,20-44.25,0-3.21-.76-6.25-2.1-8.94,0,0,0-9.09,0-9.09Z",1,"flavor-fill"],["d","M1016.86,106.28l-9.33-18c23.25-30.16.68-68.83-36.88-67.94,0,0-72.44,0-72.44,0-5.7,0-10.84,2.4-14.48,6.23-22.42-11.73-58.31-12.36-82.63-2.15-3.44-2.61-7.67-4.08-12.09-4.08-28.97,0-74.01,0-102.99,0-1.38.03-65.66-.02-69.13,0-9.01,0-16.9,6.02-19.29,14.71-1.19,4.32-2.39,8.66-3.61,13.01-1.06,3.87-3.99,14.19-5.03,17.97h-14.19c0-1.81,0-12.25,0-14.31,0,0,0-11.37,0-11.37,0-11.05-8.95-20-20-20,0,0-41.58,0-41.58,0h-3.61c-54.54,0-143.23,0-197.87,0-11.05,0-20,8.95-20,20v30.46c0,11.05,8.95,20,20,20,0,0,4.35,0,4.35,0,0,5.77,0,18.8,0,24.68,0,11.05,8.95,20,20,20h41.58c11.05,0,20-8.95,20-20-.02-7.29.01-17.41,0-24.68,2.11-.02,5.66.13,7.69-.3-.02,6.02.01,18.89,0,24.99,0,11.05,8.95,20,20,20h41.68c9.62,0,17.65-6.79,19.56-15.83h7.06c1.92,9.04,9.94,15.83,19.56,15.83,1.3-.04,80.18.07,81.51-.03,33.58.1,80.2,0,113.75.03,0,0,58.01,0,58.01,0,8.59,0,16.18-5.48,18.92-13.57,23.52,20.28,71.72,21.24,98.34,7.34,3.64,3.83,8.78,6.23,14.48,6.23h100.89c14.81.14,24.71-16.11,17.75-29.21Z",1,"flavor-fill"],[1,"text"],["d","M79.48,25.34h38.57v75.14h-46.39c-.05-.1-12.61-36.11-12.67-36.17-.44,11.4,0,24.53-.15,36.17H20.27V25.34h44.88l14.13,41.58c.56.25.01-41.47.2-41.58Z"],["d","M206.32,50.59h-43.68v5.71h42.18v14.13c-.1.05-42.14-.1-42.18.05-.03.21.02,5.56,0,5.76h44.28v24.25h-84.86V25.34h84.26v25.25Z"],["d","M401.99,25.34v30.46h-24.15c-.58,14.59,0,29.89-.2,44.68h-41.58c-.05-14.87.1-29.79-.05-44.63-.1-.15-24.16,0-24.3-.05v-30.46h90.27Z"],["d","M509.59,54.8h-42.58v5.91s0,.1,0,.1h41.08v23.84h-41.08v15.83h-41.68V25.34h84.26v29.46Z"],["d","M554.77,70.83c-.07.58,39.07,0,39.27.2v29.46h-80.85V25.34h41.58v45.49Z"],["d","M679.11,25.34c7.13,25.03,14.15,50.09,21.24,75.14h-44.68l-1.7-9.82h-13.62l-1.7,9.82h-42.78c7.07-25.04,14.08-50.08,21.04-75.14h62.22ZM641.53,83.65c.1.03,11.01-.02,11.12,0-1.66-11.58-3.54-21.8-5.51-33.46h-.1c-1.98,11.72-3.67,21.71-5.51,33.46Z"],["d","M789.01,25.34c-7.43,25.07-14.95,50.12-22.54,75.14h-58.01c-7.47-25.05-14.89-50.11-22.44-75.14h44.68c2.55,15.56,4.87,31.13,7.41,46.69h.2c2.43-15.55,4.99-31.13,7.41-46.69h43.28Z"],["d","M840.11,103.49c-26.05.78-55.53-11.07-55.1-40.68-.54-29.46,29.27-41.28,55.1-40.47,27.49-.71,55.17,11.35,55.1,40.48.53,29.23-28.79,41.62-55.1,40.68ZM840.21,71.63c16.35.7,16.55-18.11,0-17.43-16.64-.9-16.84,18.19,0,17.43Z"],["d","M983.68,70.73h-4.91c-.94.02-1.13-1.4-.21-1.62,19.76-4.49,25.6-30.85,6.72-40.61-8.21-6.22-76.45-1.99-87.06-3.16v75.14h41.58c.2-15.54-.38-28.81.2-44.68,6.09.43,19.49-2.52,19.54,7.01-.09,9.58-13.67,6.56-19.74,7.01,3.97,10.2,7.88,20.42,11.72,30.66h47.59l-15.43-29.76Z"],[1,"dpad-group"],["d","M304.43,67.68l18.95-25.35c5-6.69,4.32-16.18-1.59-22.09l-15.29-15.29C303.31,1.76,299.06,0,294.54,0c-3.68,0-7.18,1.16-10.12,3.37l-25.35,18.95-25.35-18.95C230.77,1.16,227.27,0,223.6,0h0c-4.52,0-8.77,1.76-11.96,4.95l-15.29,15.29c-5.9,5.9-6.59,15.4-1.59,22.09l18.95,25.35-18.95,25.35c-5,6.69-4.32,16.18,1.59,22.09l15.29,15.29c3.19,3.19,7.44,4.95,11.96,4.95,3.68,0,7.18-1.16,10.12-3.37l25.35-18.95,25.35,18.95c2.95,2.2,6.45,3.37,10.12,3.37,4.52,0,8.77-1.76,11.96-4.95l15.29-15.29c5.9-5.9,6.59-15.4,1.59-22.09l-18.95-25.35Z",1,"flavor-fill"],["d","M288.01,8.17l-28.94,21.64-28.94-21.64c-4.34-3.25-10.42-2.81-14.25,1.02l-15.29,15.29c-3.84,3.84-4.27,9.91-1.02,14.25l21.64,28.94-21.64,28.94c-3.25,4.34-2.81,10.42,1.02,14.25l15.29,15.29c3.84,3.84,9.91,4.27,14.25,1.02l28.94-21.64,28.94,21.64c4.34,3.25,10.42,2.81,14.25-1.02l15.29-15.29c3.84-3.84,4.27-9.91,1.02-14.25l-21.64-28.94,21.64-28.94c3.25-4.34,2.81-10.42-1.02-14.25l-15.29-15.29c-3.84-3.84-9.91-4.27-14.25-1.02ZM221.9,107.83c2.37,2.37.69,6.43-2.66,6.43h-6.75v-6.75c0-3.35,4.06-5.03,6.43-2.66l2.98,2.98ZM305.65,107.51v6.75h-6.75c-3.35,0-5.03-4.06-2.66-6.43l2.98-2.98c2.37-2.37,6.43-.69,6.43,2.66ZM221.9,27.52l-2.98,2.98c-2.37,2.37-6.43.69-6.43-2.66v-6.75h6.75c3.35,0,5.03,4.06,2.66,6.43ZM305.65,27.85c0,3.35-4.06,5.03-6.43,2.66l-2.98-2.98c-2.37-2.37-.69-6.43,2.66-6.43h6.75v6.75Z"]],template:function(e,n){e&1&&(_e(),p(0,"svg",1)(1,"g",2),F(2,"path",3)(3,"path",4),f(),p(4,"g",5),F(5,"path",6)(6,"path",7)(7,"path",8)(8,"path",9)(9,"path",10)(10,"path",11)(11,"path",12)(12,"path",13)(13,"path",14),f(),p(14,"g",15,0),F(16,"path",16)(17,"path",17),f()()),e&2&&(o(14),h("spinning",n.isSpinning())("spin-entering",n.isSpinEntering()))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;height:32px;cursor:pointer}svg[_ngcontent-%COMP%]{height:100%;width:auto;overflow:visible}.flavor-fill[_ngcontent-%COMP%]{fill:var(--primary, #888)}.dpad-group[_ngcontent-%COMP%]{transform-box:fill-box;transform-origin:center;transform:rotate(var(--rest-angle, 0deg));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]:hover   .dpad-group[_ngcontent-%COMP%]:not(.spinning):not(.spin-entering){transform:rotate(calc(var(--rest-angle, 0deg) + 90deg))}.dpad-group.spin-entering[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,.2,1)}.dpad-group.spinning[_ngcontent-%COMP%]{transition:none}@media(prefers-reduced-motion:reduce){.dpad-group[_ngcontent-%COMP%]{transition:none!important}}"]})};var Zn=(t,r)=>r.id;function Un(t,r){if(t&1){let e=E();i(0,"button",8),b("click",function(){let a=S(e).$implicit,m=u(2);return T(m.selectTheme(a))}),c(1),s()}if(t&2){let e=r.$implicit,n=u(2);h("active",n.activeTheme()===e),o(),O(" ",e," ")}}function $n(t,r){if(t&1){let e=E();i(0,"button",9),b("click",function(){let a=S(e).$implicit,m=u(2);return T(m.selectFlavor(a.id))}),_(1,"span",10),c(2),s()}if(t&2){let e=r.$implicit,n=u(2);j("--swatch-color",e.color),h("active",n.activeFlavor()===e.id),o(2),O(" ",e.label," ")}}function Hn(t,r){if(t&1&&(i(0,"div",2),b("click",function(n){return n.stopPropagation()}),i(1,"p",3),c(2,"Appearance"),s(),i(3,"div",4),M(4,Un,2,3,"button",5,U),s(),i(6,"p",3),c(7,"Flavor"),s(),i(8,"div",6),M(9,$n,3,5,"button",7,Zn),s()()),t&2){let e=u();o(4),k(e.themes),o(5),k(e.flavors)}}var mn="theme",pn="flavor",un=["Night","Day","System"],fn=[{id:"avocado",label:"Avocado",color:"#3d7a3d"},{id:"cherry",label:"Cherry",color:"#b52a2a"},{id:"grape",label:"Grape",color:"#6a2d8a"},{id:"lime",label:"Lime",color:"#5c8c1e"},{id:"orange",label:"Orange",color:"#c46a0a"}],Ie=class t{storage=d(Zt);themes=un;flavors=fn;isOpen=v(!1);activeTheme=v("Night");activeFlavor=v("avocado");mediaQuery=window.matchMedia("(prefers-color-scheme: dark)");mediaListener=()=>this.applyDataTheme(this.activeTheme());onDocumentClick(){this.isOpen.set(!1)}ngOnInit(){let r=this.storage.get(mn),e=r&&un.includes(r)?r:"Night";this.activeTheme.set(e),this.applyTheme(e);let n=this.storage.get(pn),a=fn.map(g=>g.id),m=n&&a.includes(n)?n:"avocado";this.activeFlavor.set(m),this.applyFlavor(m)}ngOnDestroy(){this.mediaQuery.removeEventListener("change",this.mediaListener)}toggle(r){r.stopPropagation(),this.isOpen.update(e=>!e)}selectTheme(r){this.activeTheme.set(r),this.storage.set(mn,r),this.applyTheme(r)}selectFlavor(r){this.activeFlavor.set(r),this.storage.set(pn,r),this.applyFlavor(r)}applyTheme(r){this.mediaQuery.removeEventListener("change",this.mediaListener),r==="System"&&this.mediaQuery.addEventListener("change",this.mediaListener),this.applyDataTheme(r)}applyDataTheme(r){let e=r==="System"?this.mediaQuery.matches?"night":"day":r.toLowerCase();document.documentElement.setAttribute("data-theme",e)}applyFlavor(r){document.documentElement.setAttribute("data-flavor",r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["theme-picker"]],hostBindings:function(e,n){e&1&&b("click",function(){return n.onDocumentClick()},Ct)},decls:4,vars:3,consts:[["aria-label","Appearance settings",1,"trigger",3,"click"],[1,"dropdown"],[1,"dropdown",3,"click"],[1,"section-label"],[1,"theme-pills"],[1,"theme-pill",3,"active"],[1,"flavor-pills"],[1,"flavor-pill",3,"active","--swatch-color"],[1,"theme-pill",3,"click"],[1,"flavor-pill",3,"click"],[1,"swatch"]],template:function(e,n){e&1&&(i(0,"button",0),b("click",function(m){return n.toggle(m)}),i(1,"mat-icon"),c(2,"palette"),s()(),y(3,Hn,11,0,"div",1)),e&2&&(h("open",n.isOpen()),o(3),w(n.isOpen()?3:-1))},dependencies:[G,L],styles:["[_nghost-%COMP%]{position:relative;display:inline-flex;align-items:center}.trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:none;background:transparent;color:inherit;cursor:pointer;transition:background .15s}.trigger[_ngcontent-%COMP%]:hover{background:#8080801f}.trigger.open[_ngcontent-%COMP%]{background:#80808033}.dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:1050;min-width:220px;padding:14px 16px 16px;background:var(--surface-1, #f8f9fa);border:1px solid var(--border, #e2e8f0);border-radius:12px;box-shadow:var(--shadow-lg)}.section-label[_ngcontent-%COMP%]{margin:0 0 8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-tertiary, #718096)}.theme-pills[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:14px}.theme-pill[_ngcontent-%COMP%]{flex:1;padding:5px 8px;border:1px solid var(--border, #e2e8f0);border-radius:6px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.theme-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.theme-pill.active[_ngcontent-%COMP%]{background:var(--primary, #3d7a3d);color:var(--primary-text, #fff);border-color:transparent}.flavor-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.flavor-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid var(--border, #e2e8f0);border-radius:20px;background:transparent;color:var(--text-primary, #1a1a1a);font:inherit;font-size:.8rem;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.flavor-pill[_ngcontent-%COMP%]:hover:not(.active){background:var(--surface-2, #f1f3f5)}.flavor-pill.active[_ngcontent-%COMP%]{background:var(--swatch-color);color:#fff;border-color:transparent}.swatch[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:var(--swatch-color);flex-shrink:0}"]})};var Qn=["*"];var Wn=new me("MAT_CARD_CONFIG"),gn=(()=>{class t{appearance;constructor(){let e=d(Wn,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,a){n&2&&h("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Qn,decls:1,vars:0,template:function(n,a){n&1&&(N(),P(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var hn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=Ce({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=X({type:t});static \u0275inj=W({imports:[se]})}return t})();var Re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-login-register-card"]],decls:9,vars:0,consts:[[1,"card-title"],[1,"btn-group"],["mat-flat-button","","routerLink","/a/login"],["mat-stroked-button","","routerLink","/a/new-account"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1,"Get in the Game"),s(),i(2,"p"),c(3," Login or Register to track game releases, make friends, and get cool spam in your inbox. "),s(),i(4,"div",1)(5,"button",2),c(6," Login "),s(),i(7,"button",3),c(8," Register "),s()())},dependencies:[ae],encapsulation:2})};var Be=class t{auth=d(A);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-card"]],decls:15,vars:1,consts:[[1,"card-title"],["routerLink","/my/profile"],["routerLink","/my/friends"],["routerLink","/my/settings"],["routerLink","/a/logout"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1),s(),i(2,"ul")(3,"li")(4,"a",1),c(5,"Profile"),s()(),i(6,"li")(7,"a",2),c(8,"Friends"),s()(),i(9,"li")(10,"a",3),c(11,"Settings"),s()(),i(12,"li")(13,"a",4),c(14,"Logout"),s()()()),e&2&&(o(),C(n.auth.username()))},dependencies:[ae],encapsulation:2})};var ze=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-calendar-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),c(1,"Minimap"),f())},encapsulation:2})};var Ve=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-developer-social-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),c(1,"From the Developers"),f())},encapsulation:2})};var je=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-forecast-card"]],decls:2,vars:0,consts:[[1,"card-title"]],template:function(e,n){e&1&&(p(0,"h3",0),c(1,"Gaming Forecast"),f())},encapsulation:2})};var qn=()=>[1,2,3],Xn=t=>["/",t],Kn=(t,r)=>r.id;function Jn(t,r){t&1&&(i(0,"div",3),_(1,"div",4)(2,"span",5)(3,"span",6),s())}function er(t,r){t&1&&(i(0,"div",1),M(1,Jn,4,0,"div",3,kt),s()),t&2&&(o(),k(Dt(0,qn)))}function tr(t,r){t&1&&(i(0,"p",2),c(1,"No upcoming releases found."),s())}function nr(t,r){if(t&1&&_(0,"img",8),t&2){let e=u().$implicit;z("src",e.coverImage,q)("alt",e.name)}}function rr(t,r){if(t&1&&(i(0,"div",3)(1,"a",7),y(2,nr,1,2,"img",8),s(),i(3,"span",9),c(4),s(),i(5,"span",10),c(6),ee(7,"date"),i(8,"span",11),c(9),s()()()),t&2){let e=r.$implicit,n=u(2);o(),z("routerLink",$(8,Xn,e.slug)),o(),w(e.coverImage?2:-1),o(2),C(e.name),o(2),O(" ",te(7,5,e.released,"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e.released))}}function ar(t,r){if(t&1&&(i(0,"div",1),M(1,rr,10,10,"div",3,Kn),s()),t&2){let e=u();o(),k(e.games())}}var Le=class t{gamesService=d(Jt);games=v([]);loading=v(!0);ngOnInit(){this.gamesService.getUpcoming(3).subscribe({next:r=>{this.games.set(r),this.loading.set(!1)},error:()=>this.loading.set(!1)})}timeUntil(r){if(!r)return"";let e=new Date(r).getTime()-Date.now();if(e<=0)return"Out now";let n=Math.floor(e/864e5);return n<1?"Tomorrow":`In ${n} day${n!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-new-releases-card"]],decls:5,vars:1,consts:[[1,"card-title"],[1,"release-group"],[1,"empty-label"],[1,"release-container"],[1,"image-frame","skeleton"],[1,"release-title","skeleton-text"],[1,"release-date","skeleton-text","short"],[1,"image-frame",3,"routerLink"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(i(0,"h3",0),c(1,"New Releases"),s(),y(2,er,3,1,"div",1)(3,tr,2,0,"p",2)(4,ar,3,0,"div",1)),e&2&&(o(2),w(n.loading()?2:n.games().length===0?3:4))},dependencies:[ae,ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}.empty-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);margin:.5rem 0 0}.skeleton[_ngcontent-%COMP%]{background:var(--surface-2);animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}.skeleton-text[_ngcontent-%COMP%]{display:block;height:.65rem;border-radius:4px;background:var(--surface-2);animation:_ngcontent-%COMP%_pulse 1.4s ease-in-out infinite}.skeleton-text.short[_ngcontent-%COMP%]{width:60%}@keyframes _ngcontent-%COMP%_pulse{0%,to{opacity:1}50%{opacity:.45}}']})};var ir=(t,r)=>r.title;function or(t,r){t&1&&(p(0,"span",6),c(1,"EA"),f())}function sr(t,r){if(t&1&&(p(0,"div",2)(1,"div",3),F(2,"img",4),f(),p(3,"span",5),c(4),y(5,or,2,0,"span",6),f(),p(6,"span",7),c(7),ee(8,"date"),p(9,"span",8),c(10),f()()()),t&2){let e=r.$implicit,n=u();o(2),Me("src",e.imageSource,q)("alt",e.title),o(2),O(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),O(" ",te(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e))}}var Ge=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let g=Math.floor(n/864e5);return`In ${g} day${g!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(p(0,"h3",0),c(1,"Your Releases"),f(),p(2,"div",1),M(3,sr,11,9,"div",2,ir),f()),e&2&&(o(3),k(n.newReleases))},dependencies:[ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var dr=(t,r)=>r.title;function cr(t,r){t&1&&(p(0,"span",6),c(1,"EA"),f())}function lr(t,r){if(t&1&&(p(0,"div",2)(1,"div",3),F(2,"img",4),f(),p(3,"span",5),c(4),y(5,cr,2,0,"span",6),f(),p(6,"span",7),c(7),ee(8,"date"),p(9,"span",8),c(10),f()()()),t&2){let e=r.$implicit,n=u();o(2),Me("src",e.imageSource,q)("alt",e.title),o(2),O(" ",e.title," "),o(),w(e.earlyAccess?5:-1),o(2),O(" ",te(8,6,n.releaseDate(e),"MM/dd/yyyy")," "),o(3),C(n.timeUntil(e))}}var Ze=class t{newReleases=[{title:"007 First Light",release:{date:1787616e6,premiumDate:17872704e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/007-first-light.jpeg"},{title:"Forza Horizon 6",release:{date:1791936e6,premiumDate:17915904e5},earlyAccess:!1,premiumAccess:!0,imageSource:"/images/games/forza-horizon-6.png"},{title:"Subnautica 2",release:{earlyAccessDate:17836416e5},earlyAccess:!0,imageSource:"/images/games/subnautica-2.jpg"}];releaseDate(r){return r.release.earlyAccessDate??r.release.date??r.release.premiumDate??null}timeUntil(r){let e=this.releaseDate(r);if(e===null)return"";let n=e-Date.now();if(n<=0)return"Out now";let a=Math.floor(n/6e4);if(a<60)return`In ${a} minute${a!==1?"s":""}`;let m=Math.floor(n/36e5);if(m<24)return`In ${m} hour${m!==1?"s":""}`;let g=Math.floor(n/864e5);return`In ${g} day${g!==1?"s":""}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-pinned-releases-card"]],decls:5,vars:0,consts:[[1,"card-title"],[1,"release-group"],[1,"release-container"],[1,"image-frame"],[1,"release-image",3,"src","alt"],[1,"release-title"],[1,"ea-pill"],[1,"release-date"],[1,"relative-time"]],template:function(e,n){e&1&&(p(0,"h3",0),c(1,"Pinned Releases"),f(),p(2,"div",1),M(3,lr,11,9,"div",2,dr),f()),e&2&&(o(3),k(n.newReleases))},dependencies:[ne],styles:['.release-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.release-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.image-frame[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:1;border-radius:6px;overflow:hidden;background:var(--surface-2);transition:box-shadow .3s cubic-bezier(.4,0,.2,1)}.image-frame[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 55%);opacity:0;transition:opacity .3s ease}.image-frame[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 2px var(--primary),0 6px 20px #00000073}.image-frame[_ngcontent-%COMP%]:hover:after{opacity:1}.release-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block;cursor:pointer;transition:transform .35s cubic-bezier(.4,0,.2,1),filter .35s ease}.image-frame[_ngcontent-%COMP%]:hover   .release-image[_ngcontent-%COMP%]{transform:scale(1.08);filter:brightness(1.08) saturate(1.15)}.release-title[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;line-height:1.3;display:flex;align-items:center;gap:4px;cursor:default}.release-date[_ngcontent-%COMP%]{font-size:.68rem;color:var(--text-secondary, #888);cursor:pointer;display:flex;align-items:center;gap:5px}.relative-time[_ngcontent-%COMP%]{color:var(--primary);opacity:0;transition:opacity .2s ease}.release-container[_ngcontent-%COMP%]:hover   .relative-time[_ngcontent-%COMP%]{opacity:1}.ea-pill[_ngcontent-%COMP%]{font-size:.6rem;background:var(--primary);color:var(--on-primary, #fff);padding:1px 5px;border-radius:4px;font-weight:700;letter-spacing:.03em;flex-shrink:0}']})};var Ue=t=>[t];function mr(t,r){t&1&&_(0,"nav-calendar-card")}function pr(t,r){t&1&&_(0,"nav-developer-social-card")}function ur(t,r){t&1&&_(0,"nav-forecast-card")}function fr(t,r){if(t&1&&(i(0,"div",6),y(1,mr,1,0,"nav-calendar-card")(2,pr,1,0,"nav-developer-social-card")(3,ur,1,0,"nav-forecast-card"),s()),t&2){let e,n=u();o(),w((e=n.slot1Cards()[n.card1Index()])==="calendar"?1:e==="developerBluesky"?2:e==="forecast"?3:-1)}}function gr(t,r){if(t&1&&_(0,"div",13),t&2){let e=u(2);h("paused",e.paused1()||e.hovering1())}}function hr(t,r){if(t&1){let e=E();i(0,"div",7)(1,"div",10),M(2,gr,1,2,"div",11,U),s(),i(4,"button",12),b("click",function(){S(e);let a=u();return T(a.togglePause(1))}),i(5,"mat-icon"),c(6),s()()()}if(t&2){let e=u();o(2),k($(2,Ue,e.card1Index())),o(2),K("aria-label",e.paused1()?"Resume":"Pause"),o(2),C(e.paused1()?"play_arrow":"pause")}}function vr(t,r){t&1&&_(0,"nav-new-releases-card")}function _r(t,r){t&1&&_(0,"nav-user-releases-card")}function br(t,r){t&1&&_(0,"nav-pinned-releases-card")}function yr(t,r){if(t&1&&(i(0,"div",6),y(1,vr,1,0,"nav-new-releases-card")(2,_r,1,0,"nav-user-releases-card")(3,br,1,0,"nav-pinned-releases-card"),s()),t&2){let e,n=u();o(),w((e=n.slot2Cards()[n.card2Index()])==="newReleases"?1:e==="yourReleases"?2:e==="pinnedReleases"?3:-1)}}function wr(t,r){if(t&1&&_(0,"div",13),t&2){let e=u(2);h("paused",e.paused2()||e.hovering2())}}function xr(t,r){if(t&1){let e=E();i(0,"div",7)(1,"div",10),M(2,wr,1,2,"div",11,U),s(),i(4,"button",12),b("click",function(){S(e);let a=u();return T(a.togglePause(2))}),i(5,"mat-icon"),c(6),s()()()}if(t&2){let e=u();o(2),k($(2,Ue,e.card2Index())),o(2),K("aria-label",e.paused2()?"Resume":"Pause"),o(2),C(e.paused2()?"play_arrow":"pause")}}function Cr(t,r){t&1&&_(0,"nav-user-card")}function Mr(t,r){t&1&&_(0,"nav-login-register-card")}var $e=class t{open=he(!1);isAuthenticated=he(!1);userCardPreferences=v([{card:"calendar",display:1},{card:"developerBluesky",display:1},{card:"forecast",display:1},{card:"newReleases",display:2},{card:"yourReleases",display:2},{card:"pinnedReleases",display:2}]);slot1Cards=at(()=>this.userCardPreferences().filter(r=>r.display===1).map(r=>r.card));slot2Cards=at(()=>this.userCardPreferences().filter(r=>r.display===2).map(r=>r.card));card1Index=v(0);card2Index=v(0);card1Dir=v("down");card2Dir=v("down");hovering1=v(!1);hovering2=v(!1);paused1=v(!1);paused2=v(!1);autoInterval=4800;timer1=null;timer2=null;destroyRef=d(yt);constructor(){pe(()=>{this.open()&&!this.paused1()&&!this.hovering1()?this.startSlot1():this.stopSlot1()}),pe(()=>{this.open()&&!this.paused2()&&!this.hovering2()?this.startSlot2():this.stopSlot2()}),this.destroyRef.onDestroy(()=>{this.stopSlot1(),this.stopSlot2()})}startSlot1(){this.stopSlot1(),this.slot1Cards().length>1&&(this.timer1=setInterval(()=>this.cycle(1,"next"),this.autoInterval))}stopSlot1(){this.timer1!==null&&(clearInterval(this.timer1),this.timer1=null)}startSlot2(){this.stopSlot2(),this.slot2Cards().length>1&&(this.timer2=setInterval(()=>this.cycle(2,"next"),this.autoInterval))}stopSlot2(){this.timer2!==null&&(clearInterval(this.timer2),this.timer2=null)}cycle(r,e){let n=r===1?this.slot1Cards():this.slot2Cards(),a=r===1?this.card1Index:this.card2Index;(r===1?this.card1Dir:this.card2Dir).set(e==="next"?"down":"up"),a.update(g=>{let Q=e==="next"?g+1:g-1;return Q<0||Q>=n.length?0:Q}),r===1&&!this.paused1()&&!this.hovering1()&&this.open()?this.startSlot1():r===2&&!this.paused2()&&!this.hovering2()&&this.open()&&this.startSlot2()}togglePause(r){r===1?this.paused1.update(e=>!e):this.paused2.update(e=>!e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-dropdown"]],inputs:{open:[1,"open"],isAuthenticated:[1,"isAuthenticated"]},decls:36,vars:21,consts:[[1,"dropdown-panel"],[1,"cards-grid"],[1,"card-col"],["aria-label","Previous",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper",3,"mouseenter","mouseleave"],[1,"card-slot"],[1,"card-anim"],[1,"card-overlay"],["aria-label","Next",1,"full-arrow",3,"click","disabled"],[1,"card-wrapper"],[1,"countdown-track"],[1,"countdown-fill",3,"paused"],[1,"pause-btn",3,"click"],[1,"countdown-fill"]],template:function(e,n){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),b("click",function(){return n.cycle(1,"prev")}),i(4,"mat-icon"),c(5,"keyboard_arrow_up"),s()(),i(6,"div",4),b("mouseenter",function(){return n.hovering1.set(!0)})("mouseleave",function(){return n.hovering1.set(!1)}),i(7,"mat-card")(8,"mat-card-content")(9,"div",5),M(10,fr,4,1,"div",6,U),s()()(),y(12,hr,7,4,"div",7),s(),i(13,"button",8),b("click",function(){return n.cycle(1,"next")}),i(14,"mat-icon"),c(15,"keyboard_arrow_down"),s()()(),i(16,"div",2)(17,"button",3),b("click",function(){return n.cycle(2,"prev")}),i(18,"mat-icon"),c(19,"keyboard_arrow_up"),s()(),i(20,"div",4),b("mouseenter",function(){return n.hovering2.set(!0)})("mouseleave",function(){return n.hovering2.set(!1)}),i(21,"mat-card")(22,"mat-card-content")(23,"div",5),M(24,yr,4,1,"div",6,U),s()()(),y(26,xr,7,4,"div",7),s(),i(27,"button",8),b("click",function(){return n.cycle(2,"next")}),i(28,"mat-icon"),c(29,"keyboard_arrow_down"),s()()(),i(30,"div",2)(31,"div",9)(32,"mat-card")(33,"mat-card-content"),y(34,Cr,1,0,"nav-user-card")(35,Mr,1,0,"nav-login-register-card"),s()()()()()()),e&2&&(h("open",n.open()),o(3),z("disabled",n.slot1Cards().length<=1),o(6),h("from-down",n.card1Dir()==="down")("from-up",n.card1Dir()==="up"),o(),k($(17,Ue,n.card1Index())),o(2),w(n.slot1Cards().length>1?12:-1),o(),z("disabled",n.slot1Cards().length<=1),o(4),z("disabled",n.slot2Cards().length<=1),o(6),h("from-down",n.card2Dir()==="down")("from-up",n.card2Dir()==="up"),o(),k($(19,Ue,n.card2Index())),o(2),w(n.slot2Cards().length>1?26:-1),o(),z("disabled",n.slot2Cards().length<=1),o(7),w(n.isAuthenticated()?34:35))},dependencies:[vn,gn,hn,Se,G,L,Re,Be,ze,Ve,je,Le,Ge,Ze],styles:["[_nghost-%COMP%]{display:block}.dropdown-panel[_ngcontent-%COMP%]{height:0;overflow:hidden;transition:height .3s cubic-bezier(.4,0,.2,1);background:var(--surface-crevice);box-shadow:inset 0 12px 24px -8px #000000bf,inset 0 -12px 24px -8px #000000bf}.dropdown-panel.open[_ngcontent-%COMP%]{height:340px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:12px 16px;height:100%;box-sizing:border-box}.card-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-height:0}.full-arrow[_ngcontent-%COMP%]{width:100%;height:20px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:var(--text-secondary, #888);cursor:pointer;border-radius:4px;flex-shrink:0;padding:0;transition:background .15s ease,color .15s ease,opacity .15s ease}.full-arrow[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.full-arrow[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--primary)}.full-arrow[_ngcontent-%COMP%]:disabled{opacity:0;pointer-events:none;cursor:default}.card-wrapper[_ngcontent-%COMP%]{position:relative;flex:1;min-height:0;display:flex;flex-direction:column}mat-card[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:hidden}[_nghost-%COMP%]     mat-card{padding:0!important}[_nghost-%COMP%]     mat-card-content{padding:0!important;margin-bottom:0!important}[_nghost-%COMP%]     .card-title{margin:0;padding:6px 8px 4px}.card-slot[_ngcontent-%COMP%]{overflow:hidden;height:100%}.card-slot.from-down[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-bottom .22s cubic-bezier(.4,0,.2,1)}.card-slot.from-up[_ngcontent-%COMP%]   .card-anim[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide-from-top .22s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_slide-from-bottom{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slide-from-top{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}.card-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;gap:6px;padding:10px 8px 6px;background:linear-gradient(to top,rgba(0,0,0,.55) 0%,transparent 100%);border-radius:0 0 12px 12px}.countdown-track[_ngcontent-%COMP%]{flex:1;height:3px;background:#ffffff2e;border-radius:2px;overflow:hidden;position:relative;opacity:.5;transition:opacity .15s ease}.card-wrapper[_ngcontent-%COMP%]:hover   .countdown-track[_ngcontent-%COMP%]{opacity:1}.countdown-fill[_ngcontent-%COMP%]{position:absolute;inset:0;background:var(--primary);transform-origin:left center;animation:_ngcontent-%COMP%_countdown 5s linear forwards}.countdown-fill.paused[_ngcontent-%COMP%]{animation-play-state:paused}@keyframes _ngcontent-%COMP%_countdown{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.pause-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:20px;height:20px;background:#0006;border:none;color:#fffc;cursor:pointer;border-radius:4px;padding:0;flex-shrink:0;opacity:.5;transition:background .15s ease,color .15s ease,opacity .15s ease}.pause-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:13px;width:13px;height:13px;line-height:13px}.pause-btn[_ngcontent-%COMP%]:hover{background:#0009;color:#fff;opacity:1}"]})};var He=class t{size=he("small");static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["profile-photo-viewer"]],hostVars:2,hostBindings:function(e,n){e&2&&ke(n.size())},inputs:{size:[1,"size"]},decls:7,vars:0,consts:[[1,"avatar-frame"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512"],["width","520","height","520",2,"fill","var(--surface-1)"],["d","M259.54,308.58h0c-107.45,0-199.25,76.05-220.03,180.44-1.48,7.41-4.48,14.43-8.88,20.57l-7.51,10.46h472.85l-7.51-10.46c-4.4-6.14-7.41-13.16-8.88-20.57-20.78-104.39-112.58-180.44-220.03-180.44Z",2,"fill","var(--primary)"],["d","M260,319h0c-100.86,0-186.52,73.83-201.41,173.58l-4.09,27.43h411l-4.09-27.43c-14.89-99.75-100.55-173.58-201.41-173.58Z",2,"fill","var(--primary-text)"],["d","M374.5,239.24l47.83-63.98c12.62-16.88,10.9-40.85-4-55.75l-38.6-38.6c-8.06-8.06-18.79-12.5-30.19-12.5-9.28,0-18.12,2.94-25.55,8.5l-63.98,47.83-63.98-47.83c-7.44-5.56-16.27-8.5-25.55-8.5h0c-11.4,0-22.13,4.44-30.19,12.5l-38.6,38.6c-14.9,14.9-16.62,38.87-4,55.75l47.83,63.98-47.83,63.98c-12.62,16.88-10.9,40.85,4,55.75l38.6,38.6c8.06,8.06,18.79,12.5,30.19,12.5,9.28,0,18.12-2.94,25.55-8.5l63.98-47.83,63.98,47.83c7.44,5.56,16.27,8.5,25.55,8.5,11.4,0,22.13-4.44,30.19-12.5l38.6-38.6c14.9-14.9,16.62-38.87,4-55.75l-47.83-63.98h0Z",2,"fill","var(--primary)"],["d","M333.04,89.04l-73.04,54.61-73.04-54.61c-10.97-8.2-26.29-7.1-35.97,2.59l-38.6,38.6c-9.68,9.68-10.78,25-2.59,35.97l54.61,73.04-54.61,73.04c-8.2,10.97-7.1,26.29,2.59,35.97l38.6,38.6c9.68,9.68,25,10.78,35.97,2.59l73.04-54.61,73.04,54.61c10.97,8.2,26.29,7.1,35.97-2.59l38.6-38.6c9.68-9.68,10.78-25,2.59-35.97l-54.61-73.04,54.61-73.04c8.2-10.97,7.1-26.29-2.59-35.97l-38.6-38.6c-9.68-9.68-25-10.78-35.97-2.59h0ZM166.18,340.59c5.98,5.98,1.75,16.23-6.72,16.23h-17.04v-17.04c0-8.47,10.24-12.71,16.23-6.72l7.53,7.53ZM377.57,339.77v17.04h-17.04c-8.47,0-12.71-10.24-6.72-16.23l7.53-7.53c5.98-5.98,16.23-1.75,16.23,6.72h0ZM166.18,137.89l-7.53,7.53c-5.98,5.98-16.23,1.75-16.23-6.72v-17.04h17.04c8.47,0,12.71,10.24,6.72,16.23ZM377.57,138.71c0,8.47-10.24,12.71-16.23,6.72l-7.53-7.53c-5.98-5.98-1.75-16.23,6.72-16.23h17.04v17.04Z",2,"fill","var(--primary-text)"]],template:function(e,n){e&1&&(p(0,"div",0),_e(),p(1,"svg",1),F(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6),f()())},styles:["[_nghost-%COMP%]{display:block}.tiny[_nghost-%COMP%]{width:32px}.small[_nghost-%COMP%]{width:48px}.medium[_nghost-%COMP%]{width:80px}.avatar-frame[_ngcontent-%COMP%]{width:100%;border:solid var(--primary);border-width:1px 3px 6px;border-radius:15px;corner-shape:squircle;overflow:hidden;aspect-ratio:1}svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]})};var Qe=class t{auth=d(A);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["nav-user-corner"]],decls:3,vars:1,consts:[["size","tiny"],[1,"username"]],template:function(e,n){e&1&&(_(0,"profile-photo-viewer",0),i(1,"span",1),c(2),s()),e&2&&(o(2),C(n.auth.username()))},dependencies:[He],styles:["[_nghost-%COMP%]{display:flex;align-items:center;gap:8px}.username[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:var(--text-primary)}"]})};function kr(t,r){if(t&1){let e=E();i(0,"nav-user-corner",5),b("click",function(){S(e);let a=u();return T(a.toggleMenu())}),s()}}var We=class t{menuOpen=v(!1);auth=d(A);constructor(){d(re).events.pipe(Z(r=>r instanceof Pe),Te()).subscribe(()=>this.menuOpen.set(!1))}toggleMenu(){this.menuOpen.update(r=>!r)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["navigation"]],decls:9,vars:3,consts:[["matIconButton","","aria-label","Main Application Navigation Menu",1,"app-nav-menu",3,"click"],[3,"click"],[1,"nav-spacer"],[1,"cursor-pointer"],[3,"open","isAuthenticated"],[1,"cursor-pointer",3,"click"]],template:function(e,n){e&1&&(i(0,"mat-toolbar")(1,"button",0),b("click",function(){return n.toggleMenu()}),i(2,"mat-icon"),c(3,"menu"),s()(),i(4,"next-flavor-brand",1),b("click",function(){return n.toggleMenu()}),s(),_(5,"span",2),y(6,kr,1,0,"nav-user-corner",3),_(7,"theme-picker"),s(),_(8,"nav-dropdown",4)),e&2&&(o(6),w(n.auth.isLoggedIn()?6:-1),o(2),z("open",n.menuOpen())("isAuthenticated",n.auth.isLoggedIn()))},dependencies:[dn,sn,Se,Yt,G,L,Ne,Qe,Ie,$e],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{overflow:visible}.nav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var Ye=class t{isLoading=d(ie).isLoading;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["load-progress-bar"]],decls:2,vars:2,consts:[[1,"track"],[1,"fill"]],template:function(e,n){e&1&&(p(0,"div",0),F(1,"div",1),f()),e&2&&(o(),h("active",n.isLoading()))},styles:["[_nghost-%COMP%]{display:block;height:3px;pointer-events:none}.track[_ngcontent-%COMP%]{width:100%;height:100%;background:color-mix(in srgb,var(--primary, #888) 18%,transparent);overflow:hidden;position:relative;transition:background .3s}.fill[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,transparent 0%,var(--primary, #888) 40%);box-shadow:0 0 10px 1px var(--primary, #888);opacity:0;transform:translate(-100%);transition:opacity .25s ease}.fill.active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_bar-sweep 1.5s cubic-bezier(.4,0,.3,1) infinite}@keyframes _ngcontent-%COMP%_bar-sweep{0%{transform:translate(-100%)}to{transform:translate(250%)}}@media(prefers-reduced-motion:reduce){.fill.active[_ngcontent-%COMP%]{animation:none;transform:none;width:100%;background:var(--primary, #888);opacity:.6}}"]})};var Dr=(t,r)=>r.id;function Pr(t,r){if(t&1){let e=E();i(0,"div",3)(1,"div",4)(2,"div",5)(3,"mat-icon",6),c(4),s(),i(5,"span",7),c(6),s(),i(7,"button",8),b("click",function(){let a=S(e).$implicit,m=u();return T(m.startDismiss(a.id))}),i(8,"mat-icon",9),c(9,"close"),s()()()()()}if(t&2){let e=r.$implicit,n=u();h("dismissing",n.dismissing().has(e.id)),o(2),j("--alert-color",n.typeColor[e.type])("--alert-bg",n.typeBg[e.type]),o(2),C(n.typeIcon[e.type]),o(2),C(e.message)}}var Sr={error:"error_outline",warning:"warning_amber",info:"info_outline"},Tr={error:"var(--error)",warning:"var(--warning)",info:"var(--info)"},Er={error:"var(--error-bg)",warning:"var(--warning-bg)",info:"var(--info-bg)"},qe=class t{service=d(Vt);dismissing=v(new Set);typeIcon=Sr;typeColor=Tr;typeBg=Er;startDismiss(r){this.dismissing.update(e=>new Set([...e,r])),setTimeout(()=>{this.service.dismiss(r),this.dismissing.update(e=>{let n=new Set(e);return n.delete(r),n})},290)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["alert-display"]],decls:4,vars:2,consts:[["aria-live","polite","aria-atomic","false",1,"panel"],[1,"inner"],[1,"alert-wrap",3,"dismissing"],[1,"alert-wrap"],[1,"alert-content"],[1,"alert-row"],[1,"alert-icon"],[1,"alert-message"],["aria-label","Dismiss alert",1,"dismiss-btn",3,"click"],[1,"dismiss-icon"]],template:function(e,n){e&1&&(i(0,"div",0)(1,"div",1),M(2,Pr,10,8,"div",2,Dr),s()()),e&2&&(h("open",n.service.hasAlerts()),o(2),k(n.service.alerts()))},dependencies:[G,L],styles:["[_nghost-%COMP%]{display:block}.panel[_ngcontent-%COMP%]{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s cubic-bezier(.4,0,.2,1),border-bottom-color .3s cubic-bezier(.4,0,.2,1);background:var(--surface-1);border-bottom:1px solid transparent}.panel.open[_ngcontent-%COMP%]{grid-template-rows:1fr;border-bottom-color:var(--border)}.inner[_ngcontent-%COMP%]{overflow:hidden;min-height:0;padding:0;transition:padding .3s cubic-bezier(.4,0,.2,1)}.panel.open[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding:6px 0}.alert-wrap[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;transition:grid-template-rows .28s cubic-bezier(.4,0,.2,1),opacity .28s ease;animation:_ngcontent-%COMP%_alert-in .3s cubic-bezier(.4,0,.2,1)}.alert-wrap.dismissing[_ngcontent-%COMP%]{grid-template-rows:0fr;opacity:0}.alert-content[_ngcontent-%COMP%]{overflow:hidden;min-height:0}.alert-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:3px 16px;padding:8px 10px 8px 12px;border-radius:35px;border:solid var(--alert-color);border-width:1px 3px 6px;corner-shape:squircle;background:var(--alert-bg)}.alert-icon[_ngcontent-%COMP%]{color:var(--alert-color);font-size:20px;width:20px;height:20px;flex-shrink:0}.alert-message[_ngcontent-%COMP%]{flex:1;font-size:.875rem;line-height:1.4;color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]{all:unset;cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;color:var(--text-tertiary);flex-shrink:0;transition:background .15s,color .15s}.dismiss-btn[_ngcontent-%COMP%]:hover{background:var(--surface-2);color:var(--text-primary)}.dismiss-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.dismiss-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}@keyframes _ngcontent-%COMP%_alert-in{0%{grid-template-rows:0fr;opacity:0}to{grid-template-rows:1fr;opacity:1}}"]})};var _n="0.4.0 Alpha";var Xe=class t{ngVersion=bt.full;appVersion=_n;currentYear=new Date().getFullYear();versionText=v(`ng ${this.ngVersion} ${this.appVersion}`);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["footer"]],decls:5,vars:2,consts:[[1,"bg-black","flex","flex-col","items-center","justify-center","py-4","gap-0.5",2,"background-color","black"],[1,"font-mono","text-sm","text-primary"],[1,"font-mono","text-xs","text-primary/50"]],template:function(e,n){e&1&&(p(0,"div",0)(1,"p",1),c(2),f(),p(3,"p",2),c(4),f()()),e&2&&(o(2),O("\xA9 ",n.currentYear),o(2),C(n.versionText()))},styles:["[_nghost-%COMP%]{display:block}"]})};var Ke=class t{constructor(){let r=d(re),e=d(ie);r.events.pipe(Te()).subscribe(n=>{n instanceof At?e.start():(n instanceof Pe||n instanceof Nt||n instanceof It)&&e.stop()})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"sticky-header"],[1,"sidenav-container"],[1,"main-content"]],template:function(e,n){e&1&&(i(0,"div",0),_(1,"navigation")(2,"load-progress-bar")(3,"alert-display"),s(),i(4,"mat-sidenav-container",1)(5,"mat-sidenav-content")(6,"div",2),_(7,"router-outlet"),s()()(),_(8,"footer"))},dependencies:[We,Ye,qe,on,an,Fe,Rt,Xe],encapsulation:2})};Tt(Ke,rn).catch(t=>console.error(t));
