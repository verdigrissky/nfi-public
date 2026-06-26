import{a as Ge}from"./chunk-EPUFRAP2.js";import{a as Ne}from"./chunk-OHPD23DQ.js";import{a as me,b as le,c as se,e as he,f as be,g as ke,h as pe,i as ue,j as xe,n as _e,o as fe,p as Ae,u as Te,v as Re,w as Pe,x as ze}from"./chunk-3BKAJPZR.js";import{A as De,B as Fe,g as ge,l as ve,p as ye,s as Ce,t as Ee,u as Ie,w as we,y as Se,z as Me}from"./chunk-F2K3H7L3.js";import{a as de}from"./chunk-6LEBQZLA.js";import{a as Oe}from"./chunk-7WRV2PRP.js";import{b as T,c as N}from"./chunk-BSC5VM4P.js";import"./chunk-MH6SX7BI.js";import{h as ce,w as oe,y as re}from"./chunk-CR762PRV.js";import{Eb as z,Fb as $,Ib as p,Kb as u,Lb as I,Mb as w,Ob as K,Pb as O,Qa as d,Qb as G,S as j,U as q,Ub as J,W as U,Wb as y,Xb as ee,Y as s,Yb as r,Zb as b,_b as S,ac as te,ba as C,ca as E,da as X,db as f,dc as M,ea as W,eb as Z,fc as A,ja as F,ka as H,nc as ne,oa as _,pb as P,qb as g,ra as Q,rb as v,sc as ie,ua as Y,wb as k,wc as x,xb as i,xc as ae,yb as t,zb as m}from"./chunk-GEEAUJKG.js";var qe=["mat-internal-form-field",""],Ue=["*"],Ve=(()=>{class c{labelPosition="after";static \u0275fac=function(o){return new(o||c)};static \u0275cmp=f({type:c,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(o,n){o&2&&y("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:qe,ngContentSelectors:Ue,decls:1,vars:0,template:function(o,n){o&1&&(I(),w(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return c})();var Xe=["input"],We=["label"],He=["*"],L={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Qe=new U("mat-checkbox-default-options",{providedIn:"root",factory:()=>L}),l=(function(c){return c[c.Init=0]="Init",c[c.Checked=1]="Checked",c[c.Unchecked=2]="Unchecked",c[c.Indeterminate=3]="Indeterminate",c})(l||{}),V=class{source;checked},B=(()=>{class c{_elementRef=s(Y);_changeDetectorRef=s(ie);_ngZone=s(H);_animationsDisabled=ye();_options=s(Qe,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let o=new V;return o.source=this,o.checked=e,o}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new F;indeterminateChange=new F;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=l.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(ge).load(Ee);let e=s(new ne("tabindex"),{optional:!0});this._options=this._options||L,this.color=this._options.color||L.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(ve).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let o=e!=this._indeterminate();this._indeterminate.set(e),o&&(e?this._transitionCheckState(l.Indeterminate):this._transitionCheckState(this.checked?l.Checked:l.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=_(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let o=this._currentCheckState,n=this._getAnimationTargetElement();if(!(o===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(o,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let h=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(h)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?l.Checked:l.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,o){if(this._animationsDisabled)return"";switch(e){case l.Init:if(o===l.Checked)return this._animationClasses.uncheckedToChecked;if(o==l.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case l.Unchecked:return o===l.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case l.Checked:return o===l.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case l.Indeterminate:return o===l.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let o=this._inputElement;o&&(o.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(o){return new(o||c)};static \u0275cmp=f({type:c,selectors:[["mat-checkbox"]],viewQuery:function(o,n){if(o&1&&K(Xe,5)(We,5),o&2){let h;O(h=G())&&(n._inputElement=h.first),O(h=G())&&(n._labelElement=h.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(o,n){o&2&&($("id",n.id),P("tabindex",null)("aria-label",null)("aria-labelledby",null),ee(n.color?"mat-"+n.color:"mat-accent"),y("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",x],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",x],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",x],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ae(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],indeterminate:[2,"indeterminate","indeterminate",x]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[te([{provide:me,useExisting:j(()=>c),multi:!0},{provide:se,useExisting:c,multi:!0}]),Q],ngContentSelectors:He,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(o,n){if(o&1&&(I(),i(0,"div",3),p("click",function(D){return n._preventBubblingFromLabel(D)}),i(1,"div",4,0)(3,"div",5),p("click",function(){return n._onTouchTargetClick()}),t(),i(4,"input",6,1),p("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(D){return n._onInteractionEvent(D)}),t(),m(6,"div",7),i(7,"div",8),X(),i(8,"svg",9),m(9,"path",10),t(),W(),m(10,"div",11),t(),m(11,"div",12),t(),i(12,"label",13,2),w(14),t()()),o&2){let h=J(2);k("labelPosition",n.labelPosition),d(4),y("mdc-checkbox--selected",n.checked),k("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),P("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),d(7),k("matRippleTrigger",h)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),d(),k("for",n.inputId)}},dependencies:[Ce,Ve],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return c})(),Be=(()=>{class c{static \u0275fac=function(o){return new(o||c)};static \u0275mod=Z({type:c});static \u0275inj=q({imports:[B,we]})}return c})();function Ze(c,a){if(c&1&&r(0),c&2){let e=u();S(" ",e.game().name," ")}}function $e(c,a){c&1&&r(0," Loading\u2026 ")}function Ke(c,a){if(c&1&&(i(0,"span",5),r(1),t()),c&2){let e=u();d(),b(e.game().slug)}}function Je(c,a){if(c&1){let e=z();i(0,"div",6)(1,"button",8),p("click",function(){C(e);let n=u();return E(n.refetch())}),i(2,"mat-icon"),r(3),t(),r(4),t(),i(5,"button",9),p("click",function(){C(e);let n=u();return E(n.save())}),i(6,"mat-icon"),r(7),t(),r(8),t()()}if(c&2){let e=u();d(),k("disabled",e.refetching()||e.saving()),d(2),b(e.refetching()?"sync":"cloud_download"),d(),S(" ",e.refetching()?"Re-fetching\u2026":"Re-fetch from RAWG"," "),d(),k("disabled",e.saving()||e.refetching()),d(2),b(e.saving()?"sync":"save"),d(),S(" ",e.saving()?"Saving\u2026":"Save changes"," ")}}function et(c,a){c&1&&(i(0,"div",7)(1,"p",10),r(2,"Loading\u2026"),t()())}function tt(c,a){if(c&1){let e=z();i(0,"div",11)(1,"h3",12),r(2,"RAWG metadata"),t(),i(3,"div",13)(4,"div",14)(5,"span",15),r(6,"RAWG ID"),t(),i(7,"span",16),r(8),t()(),i(9,"div",14)(10,"span",15),r(11,"RAWG slug"),t(),i(12,"span",16),r(13),t()(),i(14,"div",14)(15,"span",15),r(16,"Detail fetched"),t(),i(17,"span",17),r(18),t()(),i(19,"div",14)(20,"span",15),r(21,"Last synced"),t(),i(22,"span",17),r(23),M(24,"date"),t()(),i(25,"div",14)(26,"span",15),r(27,"Created"),t(),i(28,"span",17),r(29),M(30,"date"),t()(),i(31,"div",14)(32,"span",15),r(33,"Updated"),t(),i(34,"span",17),r(35),M(36,"date"),t()()()(),i(37,"form",18),p("ngSubmit",function(){C(e);let n=u();return E(n.save())}),i(38,"div",19)(39,"h3",12),r(40,"Core"),t(),i(41,"div",20)(42,"mat-form-field",21)(43,"mat-label"),r(44,"Name"),t(),m(45,"input",22),t(),i(46,"mat-form-field",23)(47,"mat-label"),r(48,"Slug"),t(),m(49,"input",24),t(),i(50,"mat-form-field",23)(51,"mat-label"),r(52,"Release date"),t(),m(53,"input",25),t(),i(54,"mat-form-field",23)(55,"mat-label"),r(56,"ESRB rating"),t(),m(57,"input",26),t(),i(58,"mat-form-field",21)(59,"mat-label"),r(60,"Cover image URL"),t(),m(61,"input",27),t(),i(62,"mat-form-field",21)(63,"mat-label"),r(64,"Website"),t(),m(65,"input",28),t()()(),i(66,"div",19)(67,"h3",12),r(68,"Scores"),t(),i(69,"div",29)(70,"mat-form-field",23)(71,"mat-label"),r(72,"Rating"),t(),m(73,"input",30),t(),i(74,"mat-form-field",23)(75,"mat-label"),r(76,"Rating count"),t(),m(77,"input",31),t(),i(78,"mat-form-field",23)(79,"mat-label"),r(80,"Metacritic"),t(),m(81,"input",32),t()()(),i(82,"div",19)(83,"h3",12),r(84,"Taxonomy"),t(),i(85,"p",33),r(86,"Comma-separated values"),t(),i(87,"div",20)(88,"mat-form-field",23)(89,"mat-label"),r(90,"Platforms"),t(),m(91,"input",34),t(),i(92,"mat-form-field",23)(93,"mat-label"),r(94,"Genres"),t(),m(95,"input",35),t(),i(96,"mat-form-field",23)(97,"mat-label"),r(98,"Developers"),t(),m(99,"input",36),t(),i(100,"mat-form-field",23)(101,"mat-label"),r(102,"Publishers"),t(),m(103,"input",37),t()()(),i(104,"div",19)(105,"h3",12),r(106,"Description"),t(),i(107,"mat-form-field",38)(108,"mat-label"),r(109,"Description"),t(),m(110,"textarea",39),t()(),i(111,"div",19)(112,"h3",12),r(113,"Admin flags"),t(),i(114,"div",40)(115,"mat-checkbox",41),r(116,"Needs review"),t(),i(117,"mat-checkbox",42),r(118,"Detail fetched"),t()(),i(119,"mat-form-field",43)(120,"mat-label"),r(121,"Review reason"),t(),m(122,"input",44),t()()()}if(c&2){let e=u();d(8),b(e.game().rawgId),d(5),b(e.game().rawgSlug),d(5),b(e.game().detailFetched?"Yes":"No"),d(5),b(A(24,7,e.game().rawgSyncedAt,"medium")),d(6),b(A(30,10,e.game().createdAt,"medium")),d(6),b(A(36,13,e.game().updatedAt,"medium")),d(2),k("formGroup",e.form)}}var je=class c{route=s(oe);router=s(re);admin=s(Ge);loading=s(de);title=s(Oe);fb=s(_e);game=_(null);pageLoading=_(!0);saving=_(!1);refetching=_(!1);form;ngOnInit(){let a=this.route.snapshot.paramMap.get("id");this.loading.start(),this.admin.getGame(a).subscribe({next:e=>{this.game.set(e),this.title.editTitle(`Admin \xB7 ${e.name}`),this.buildForm(e),this.pageLoading.set(!1),this.loading.stop()},error:()=>{this.pageLoading.set(!1),this.loading.stop(),T("Failed to load game.")}})}ngOnDestroy(){this.title.resetTitle()}buildForm(a){this.form=this.fb.group({name:[a.name],slug:[a.slug],released:[a.released??""],coverImage:[a.coverImage??""],rating:[a.rating??""],ratingCount:[a.ratingCount],metacritic:[a.metacritic??""],description:[a.description??""],website:[a.website??""],esrbRating:[a.esrbRating??""],platforms:[a.platforms.join(", ")],genres:[a.genres.join(", ")],developers:[a.developers.join(", ")],publishers:[a.publishers.join(", ")],needsReview:[a.needsReview],reviewReason:[a.reviewReason??""],detailFetched:[a.detailFetched]})}save(){if(!this.game()||this.saving())return;let a=this.form.value,e={name:a.name,slug:a.slug,released:a.released||null,coverImage:a.coverImage||null,rating:a.rating!==""?Number(a.rating):null,ratingCount:Number(a.ratingCount),metacritic:a.metacritic!==""?Number(a.metacritic):null,description:a.description||null,website:a.website||null,esrbRating:a.esrbRating||null,platforms:R(a.platforms),genres:R(a.genres),developers:R(a.developers),publishers:R(a.publishers),needsReview:a.needsReview,reviewReason:a.reviewReason||null,detailFetched:a.detailFetched};N(),this.saving.set(!0),this.loading.start(),this.admin.updateGame(this.game().id,e).subscribe({next:o=>{this.game.set(o),this.buildForm(o),this.saving.set(!1),this.loading.stop()},error:()=>{T("Failed to save changes."),this.saving.set(!1),this.loading.stop()}})}refetch(){!this.game()||this.refetching()||(N(),this.refetching.set(!0),this.loading.start(),this.admin.refetchGameDetail(this.game().id).subscribe({next:a=>{this.game.set(a),this.buildForm(a),this.refetching.set(!1),this.loading.stop()},error:()=>{T("Failed to re-fetch from RAWG."),this.refetching.set(!1),this.loading.stop()}}))}backToGames(){this.router.navigate(["/admin/games"])}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=f({type:c,selectors:[["admin-game-edit"]],decls:15,vars:4,consts:[[1,"admin-page"],[1,"page-header"],[1,"page-header-left"],["mat-icon-button","","aria-label","Back to games",1,"back-btn",3,"click"],[1,"font-heading","text-content"],[1,"game-slug-display"],[1,"header-actions"],[1,"empty-state"],["mat-stroked-button","",1,"button-outline",3,"click","disabled"],["mat-flat-button","",1,"button-flat",3,"click","disabled"],[1,"text-sm",2,"color","var(--text-secondary)"],[1,"section-card","metadata-card"],[1,"section-title"],[1,"meta-grid"],[1,"meta-item"],[1,"meta-label"],[1,"meta-value","mono"],[1,"meta-value"],[1,"edit-form",3,"ngSubmit","formGroup"],[1,"section-card"],[1,"form-grid"],["appearance","outline","subscriptSizing","dynamic",1,"field-wide"],["matInput","","formControlName","name"],["appearance","outline","subscriptSizing","dynamic"],["matInput","","formControlName","slug"],["matInput","","formControlName","released","placeholder","YYYY-MM-DD"],["matInput","","formControlName","esrbRating"],["matInput","","formControlName","coverImage"],["matInput","","formControlName","website"],[1,"form-grid","form-grid-scores"],["matInput","","type","number","step","0.01","formControlName","rating"],["matInput","","type","number","formControlName","ratingCount"],["matInput","","type","number","formControlName","metacritic"],[1,"section-hint"],["matInput","","formControlName","platforms"],["matInput","","formControlName","genres"],["matInput","","formControlName","developers"],["matInput","","formControlName","publishers"],["appearance","outline","subscriptSizing","dynamic",1,"field-full"],["matInput","","formControlName","description","rows","8"],[1,"flags-grid"],["formControlName","needsReview","color","primary"],["formControlName","detailFetched","color","primary"],["appearance","outline","subscriptSizing","dynamic",1,"field-full",2,"margin-top","1rem"],["matInput","","formControlName","reviewReason"]],template:function(e,o){e&1&&(i(0,"div",0),m(1,"admin-nav"),i(2,"div",1)(3,"div",2)(4,"button",3),p("click",function(){return o.backToGames()}),i(5,"mat-icon"),r(6,"arrow_back"),t()(),i(7,"div")(8,"h2",4),g(9,Ze,1,1)(10,$e,1,0),t(),g(11,Ke,2,1,"span",5),t()(),g(12,Je,9,6,"div",6),t(),g(13,et,3,0,"div",7)(14,tt,123,16),t()),e&2&&(d(9),v(o.game()?9:10),d(2),v(o.game()?11:-1),d(),v(o.game()?12:-1),d(),v(o.pageLoading()?13:o.game()?14:-1))},dependencies:[fe,ke,le,pe,he,be,xe,ue,Me,Se,Ie,Fe,De,Re,Te,Ae,ze,Pe,Be,B,Ne,ce],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:calc(100dvh - 64px)}.admin-page[_ngcontent-%COMP%]{max-width:1100px;width:100%;margin:0 auto;padding:2rem 1.5rem}.page-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:2rem}.page-header-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.back-btn[_ngcontent-%COMP%]{flex-shrink:0;color:var(--text-secondary)}.game-slug-display[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);font-family:var(--font-family-mono)}.header-actions[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap}.section-card[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:.75rem;background:var(--surface-1);padding:1.25rem 1.5rem;margin-bottom:1.5rem}.section-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-tertiary);margin:0 0 1rem}.section-hint[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-tertiary);margin:-.5rem 0 1rem}.metadata-card[_ngcontent-%COMP%]{background:var(--surface-0)}.meta-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem 1.5rem}.meta-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.125rem}.meta-label[_ngcontent-%COMP%]{font-size:.6875rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--text-tertiary)}.meta-value[_ngcontent-%COMP%]{font-size:.875rem;color:var(--text-secondary)}.meta-value.mono[_ngcontent-%COMP%]{font-family:var(--font-family-mono)}.edit-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.875rem}@media(max-width:600px){.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.form-grid-scores[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}@media(max-width:600px){.form-grid-scores[_ngcontent-%COMP%]{grid-template-columns:1fr}}.field-wide[_ngcontent-%COMP%]{grid-column:1/-1}.field-full[_ngcontent-%COMP%]{width:100%}.flags-grid[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:wrap}.empty-state[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:4rem 0}"]})};function R(c){return c.split(",").map(a=>a.trim()).filter(a=>a.length>0)}export{je as AdminGameEdit};
