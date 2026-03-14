(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qm={exports:{}},zl={},Jm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),nv=Symbol.for("react.portal"),iv=Symbol.for("react.fragment"),rv=Symbol.for("react.strict_mode"),sv=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),cv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),md=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=md&&t[md]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=Ns.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var ef=Jh.prototype=new ig;ef.constructor=Jh;tg(ef,Ns.prototype);ef.isPureReactComponent=!0;var gd=Array.isArray,rg=Object.prototype.hasOwnProperty,tf={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,i)&&!sg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Go,type:t,key:s,ref:o,props:r,_owner:tf.current}}function dv(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _d=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pv(""+t.key):e.toString(36)}function Wa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case nv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ou(o,0):i,gd(r)?(n="",t!=null&&(n=t.replace(_d,"$&/")+"/"),Wa(r,e,n,"",function(u){return u})):r!=null&&(nf(r)&&(r=dv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_d,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ou(s,a);o+=Wa(s,e,n,l,r)}else if(l=fv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,a++),o+=Wa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return Wa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Xa={transition:null},gv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:tf};function ag(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Ns;Be.Fragment=iv;Be.Profiler=sv;Be.PureComponent=Jh;Be.StrictMode=rv;Be.Suspense=uv;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;Be.act=ag;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rg.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Go,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ov,_context:t},t.Consumer=t};Be.createElement=og;Be.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:lv,render:t}};Be.isValidElement=nf;Be.lazy=function(t){return{$$typeof:hv,_payload:{_status:-1,_result:t},_init:mv}};Be.memo=function(t,e){return{$$typeof:cv,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};Be.unstable_act=ag;Be.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Be.useContext=function(t){return Zt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Be.useId=function(){return Zt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Be.useRef=function(t){return Zt.current.useRef(t)};Be.useState=function(t){return Zt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Zt.current.useTransition()};Be.version="18.3.1";Jm.exports=Be;var Ft=Jm.exports;const _v=tv(Ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=Ft,xv=Symbol.for("react.element"),yv=Symbol.for("react.fragment"),Sv=Object.prototype.hasOwnProperty,Mv=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ev={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Sv.call(e,i)&&!Ev.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xv,type:t,key:s,ref:o,props:r,_owner:Mv.current}}zl.Fragment=yv;zl.jsx=lg;zl.jsxs=lg;Qm.exports=zl;var Lt=Qm.exports,gc={},ug={exports:{}},xn={},cg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var Z=D.length;D.push(Y);e:for(;0<Z;){var se=Z-1>>>1,Se=D[se];if(0<r(Se,Y))D[se]=Y,D[Z]=Se,Z=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],Z=D.pop();if(Z!==Y){D[0]=Z;e:for(var se=0,Se=D.length,We=Se>>>1;se<We;){var W=2*(se+1)-1,re=D[W],me=W+1,le=D[me];if(0>r(re,Z))me<Se&&0>r(le,re)?(D[se]=le,D[me]=Z,se=me):(D[se]=re,D[W]=Z,se=W);else if(me<Se&&0>r(le,Z))D[se]=le,D[me]=Z,se=me;else break e}}return Y}function r(D,Y){var Z=D.sortIndex-Y.sortIndex;return Z!==0?Z:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=D)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function y(D){if(_=!1,x(D),!g)if(n(l)!==null)g=!0,X(R);else{var Y=n(u);Y!==null&&$(y,Y.startTime-D)}}function R(D,Y){g=!1,_&&(_=!1,c(C),C=-1),p=!0;var Z=f;try{for(x(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||D&&!P());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var Se=se(d.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&i(l),x(Y)}else i(l);d=n(l)}if(d!==null)var We=!0;else{var W=n(u);W!==null&&$(y,W.startTime-Y),We=!1}return We}finally{d=null,f=Z,p=!1}}var w=!1,A=null,C=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function z(){if(A!==null){var D=t.unstable_now();S=D;var Y=!0;try{Y=A(!0,D)}finally{Y?O():(w=!1,A=null)}}else w=!1}var O;if(typeof v=="function")O=function(){v(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,q=k.port2;k.port1.onmessage=z,O=function(){q.postMessage(null)}}else O=function(){m(z,0)};function X(D){A=D,w||(w=!0,O())}function $(D,Y){C=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,X(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var Z=f;f=Y;try{return D()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return Y()}finally{f=Z}},t.unstable_scheduleCallback=function(D,Y,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,D={id:h++,callback:Y,priorityLevel:D,startTime:Z,expirationTime:Se,sortIndex:-1},Z>se?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(_?(c(C),C=-1):_=!0,$(y,Z-se))):(D.sortIndex=Se,e(l,D),g||p||(g=!0,X(R))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var Y=f;return function(){var Z=f;f=Y;try{return D.apply(this,arguments)}finally{f=Z}}}})(hg);cg.exports=hg;var Tv=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=Ft,vn=Tv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fg=new Set,So={};function Lr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(So[t]=e,t=0;t<e.length;t++)fg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},xd={};function Rv(t){return _c.call(xd,t)?!0:_c.call(vd,t)?!1:Av.test(t)?xd[t]=!0:(vd[t]=!0,!1)}function Cv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bv(t,e,n,i){if(e===null||typeof e>"u"||Cv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);zt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);zt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);zt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bv(e,n,r,i)&&(n=null),i||r===null?Rv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),yd=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=yd&&t[yd]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,au;function io(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function uu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function Pv(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function Sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case vc:return"Profiler";case af:return"StrictMode";case xc:return"Suspense";case yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:Sc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Sc(t(e))}catch{}}return null}function Lv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(e);case 8:return e===af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dv(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=Dv(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function Ec(t,e){vg(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tc(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tc(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ed(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ro(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function xg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Td(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){Iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Uv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(t,e){if(e){if(Uv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bc=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pc=null,ps=null,ms=null;function wd(t){if(t=Yo(t)){if(typeof Pc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Gl(e),Pc(t.stateNode,t.type,e))}}function Tg(t){ps?ms?ms.push(t):ms=[t]:ps=t}function wg(){if(ps){var t=ps,e=ms;if(ms=ps=null,wd(t),e)for(t=0;t<e.length;t++)wd(e[t])}}function Ag(t,e){return t(e)}function Rg(){}var cu=!1;function Cg(t,e,n){if(cu)return t(e,n);cu=!0;try{return Ag(t,e,n)}finally{cu=!1,(ps!==null||ms!==null)&&(Rg(),wg())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Lc=!1;if(xi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Lc=!1}function Nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var uo=!1,ul=null,cl=!1,Dc=null,Fv={onError:function(t){uo=!0,ul=t}};function Ov(t,e,n,i,r,s,o,a,l){uo=!1,ul=null,Nv.apply(Fv,arguments)}function zv(t,e,n,i,r,s,o,a,l){if(Ov.apply(this,arguments),uo){if(uo){var u=ul;uo=!1,ul=null}else throw Error(te(198));cl||(cl=!0,Dc=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ad(t){if(Dr(t)!==t)throw Error(te(188))}function kv(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ad(r),t;if(s===i)return Ad(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Pg(t){return t=kv(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var Dg=vn.unstable_scheduleCallback,Rd=vn.unstable_cancelCallback,Bv=vn.unstable_shouldYield,Vv=vn.unstable_requestPaint,yt=vn.unstable_now,Hv=vn.unstable_getCurrentPriorityLevel,hf=vn.unstable_ImmediatePriority,Ig=vn.unstable_UserBlockingPriority,hl=vn.unstable_NormalPriority,Gv=vn.unstable_LowPriority,Ug=vn.unstable_IdlePriority,kl=null,ei=null;function Wv(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:jv,Xv=Math.log,Yv=Math.LN2;function jv(t){return t>>>=0,t===0?32:31-(Xv(t)/Yv|0)|0}var ra=64,sa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $v(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ng(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function Kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Og,df,zg,kg,Bg,Uc=!1,oa=[],ki=null,Bi=null,Vi=null,To=new Map,wo=new Map,Ui=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qv(t,e,n,i,r){switch(e){case"focusin":return ki=Gs(ki,t,e,n,i,r),!0;case"dragenter":return Bi=Gs(Bi,t,e,n,i,r),!0;case"mouseover":return Vi=Gs(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,Gs(To.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wo.set(s,Gs(wo.get(s)||null,t,e,n,i,r)),!0}return!1}function Vg(t){var e=gr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Bg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bc=i,n.target.dispatchEvent(i),bc=null}else return e=Yo(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function bd(t,e,n){Ya(t)&&n.delete(e)}function Jv(){Uc=!1,ki!==null&&Ya(ki)&&(ki=null),Bi!==null&&Ya(Bi)&&(Bi=null),Vi!==null&&Ya(Vi)&&(Vi=null),To.forEach(bd),wo.forEach(bd)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Jv)))}function Ao(t){function e(r){return Ws(r,t)}if(0<oa.length){Ws(oa[0],t);for(var n=1;n<oa.length;n++){var i=oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Ws(ki,t),Bi!==null&&Ws(Bi,t),Vi!==null&&Ws(Vi,t),To.forEach(e),wo.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Ui.shift()}var gs=Ei.ReactCurrentBatchConfig,dl=!0;function ex(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=1,pf(t,e,n,i)}finally{et=r,gs.transition=s}}function tx(t,e,n,i){var r=et,s=gs.transition;gs.transition=null;try{et=4,pf(t,e,n,i)}finally{et=r,gs.transition=s}}function pf(t,e,n,i){if(dl){var r=Nc(t,e,n,i);if(r===null)Su(t,e,i,pl,n),Cd(t,i);else if(Qv(r,t,e,n,i))i.stopPropagation();else if(Cd(t,i),e&4&&-1<Zv.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&Og(s),s=Nc(t,e,n,i),s===null&&Su(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var pl=null;function Nc(t,e,n,i){if(pl=null,t=cf(i),t=gr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hv()){case hf:return 1;case Ig:return 4;case hl:case Gv:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var Oi=null,mf=null,ja=null;function Gg(){if(ja)return ja;var t,e=mf,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ja=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Pd(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:Pd,this.isPropagationStopped=Pd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=yn(Fs),Xo=_t({},Fs,{view:0,detail:0}),nx=yn(Xo),fu,du,Xs,Bl=_t({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(fu=t.screenX-Xs.screenX,du=t.screenY-Xs.screenY):du=fu=0,Xs=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),Ld=yn(Bl),ix=_t({},Bl,{dataTransfer:0}),rx=yn(ix),sx=_t({},Xo,{relatedTarget:0}),pu=yn(sx),ox=_t({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),ax=yn(ox),lx=_t({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ux=yn(lx),cx=_t({},Fs,{data:0}),Dd=yn(cx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dx[t])?!!e[t]:!1}function _f(){return px}var mx=_t({},Xo,{key:function(t){if(t.key){var e=hx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=yn(mx),_x=_t({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=yn(_x),vx=_t({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),xx=yn(vx),yx=_t({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=yn(yx),Mx=_t({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=yn(Mx),Tx=[9,13,27,32],vf=xi&&"CompositionEvent"in window,co=null;xi&&"documentMode"in document&&(co=document.documentMode);var wx=xi&&"TextEvent"in window&&!co,Wg=xi&&(!vf||co&&8<co&&11>=co),Ud=" ",Nd=!1;function Xg(t,e){switch(t){case"keyup":return Tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Ax(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(Nd=!0,Ud);case"textInput":return t=e.data,t===Ud&&Nd?null:t;default:return null}}function Rx(t,e){if(ts)return t==="compositionend"||!vf&&Xg(t,e)?(t=Gg(),ja=mf=Oi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cx[t.type]:e==="textarea"}function jg(t,e,n,i){Tg(i),e=ml(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,Ro=null;function bx(t){r_(t,0)}function Vl(t){var e=rs(t);if(_g(e))return t}function Px(t,e){if(t==="change")return e}var qg=!1;if(xi){var mu;if(xi){var gu="oninput"in document;if(!gu){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),gu=typeof Od.oninput=="function"}mu=gu}else mu=!1;qg=mu&&(!document.documentMode||9<document.documentMode)}function zd(){ho&&(ho.detachEvent("onpropertychange",$g),Ro=ho=null)}function $g(t){if(t.propertyName==="value"&&Vl(Ro)){var e=[];jg(e,Ro,t,cf(t)),Cg(bx,e)}}function Lx(t,e,n){t==="focusin"?(zd(),ho=e,Ro=n,ho.attachEvent("onpropertychange",$g)):t==="focusout"&&zd()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Ro)}function Ix(t,e){if(t==="click")return Vl(e)}function Ux(t,e){if(t==="input"||t==="change")return Vl(e)}function Nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Nx;function Co(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_c.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,e){var n=kd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fx(t){var e=Zg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(i!==null&&xf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bd(n,s);var o=Bd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ox=xi&&"documentMode"in document&&11>=document.documentMode,ns=null,Fc=null,fo=null,Oc=!1;function Vd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||ns==null||ns!==ll(i)||(i=ns,"selectionStart"in i&&xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&Co(fo,i)||(fo=i,i=ml(Fc,"onSelect"),0<i.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},_u={},Qg={};xi&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Hl(t){if(_u[t])return _u[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return _u[t]=e[n];return t}var Jg=Hl("animationend"),e_=Hl("animationiteration"),t_=Hl("animationstart"),n_=Hl("transitionend"),i_=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){i_.set(t,e),Lr(e,[t])}for(var vu=0;vu<Hd.length;vu++){var xu=Hd[vu],zx=xu.toLowerCase(),kx=xu[0].toUpperCase()+xu.slice(1);er(zx,"on"+kx)}er(Jg,"onAnimationEnd");er(e_,"onAnimationIteration");er(t_,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(n_,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Gd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zv(i,e,void 0,t),t.currentTarget=null}function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gd(r,a,u),s=l}}}if(cl)throw t=Dc,cl=!1,Dc=null,t}function at(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var i=t+"__bubble";n.has(i)||(s_(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),s_(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[ua]){t[ua]=!0,fg.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,yu("selectionchange",!1,e))}}function s_(t,e,n,i){switch(Hg(e)){case 1:var r=ex;break;case 4:r=tx;break;default:r=pf}n=r.bind(null,e,n,t),r=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cg(function(){var u=s,h=cf(n),d=[];e:{var f=i_.get(t);if(f!==void 0){var p=gf,g=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=gx;break;case"focusin":g="focus",p=pu;break;case"focusout":g="blur",p=pu;break;case"beforeblur":case"afterblur":p=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xx;break;case Jg:case e_:case t_:p=ax;break;case n_:p=Sx;break;case"scroll":p=nx;break;case"wheel":p=Ex;break;case"copy":case"cut":case"paste":p=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Id}var _=(e&4)!==0,m=!_&&t==="scroll",c=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,c!==null&&(y=Eo(v,c),y!=null&&_.push(Po(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==bc&&(g=n.relatedTarget||n.fromElement)&&(gr(g)||g[yi]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?gr(g):null,g!==null&&(m=Dr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Ld,y="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Id,y="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?f:rs(p),x=g==null?f:rs(g),f=new _(y,v+"leave",p,n,h),f.target=m,f.relatedTarget=x,y=null,gr(h)===u&&(_=new _(c,v+"enter",g,n,h),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,c=g,v=0,x=_;x;x=Fr(x))v++;for(x=0,y=c;y;y=Fr(y))x++;for(;0<v-x;)_=Fr(_),v--;for(;0<x-v;)c=Fr(c),x--;for(;v--;){if(_===c||c!==null&&_===c.alternate)break t;_=Fr(_),c=Fr(c)}_=null}else _=null;p!==null&&Wd(d,f,p,_,!1),g!==null&&m!==null&&Wd(d,m,g,_,!0)}}e:{if(f=u?rs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Px;else if(Fd(f))if(qg)R=Ux;else{R=Dx;var w=Lx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=Ix);if(R&&(R=R(t,u))){jg(d,R,n,h);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Tc(f,"number",f.value)}switch(w=u?rs(u):window,t){case"focusin":(Fd(w)||w.contentEditable==="true")&&(ns=w,Fc=u,fo=null);break;case"focusout":fo=Fc=ns=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Vd(d,n,h);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Vd(d,n,h)}var A;if(vf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ts?Xg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Wg&&n.locale!=="ko"&&(ts||C!=="onCompositionStart"?C==="onCompositionEnd"&&ts&&(A=Gg()):(Oi=h,mf="value"in Oi?Oi.value:Oi.textContent,ts=!0)),w=ml(u,C),0<w.length&&(C=new Dd(C,t,null,n,h),d.push({event:C,listeners:w}),A?C.data=A:(A=Yg(n),A!==null&&(C.data=A)))),(A=wx?Ax(t,n):Rx(t,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(h=new Dd("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=A))}r_(d,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(t,n),s!=null&&i.unshift(Po(t,s,r)),s=Eo(t,e),s!=null&&i.push(Po(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Eo(n,s),l!=null&&o.unshift(Po(n,l,a))):r||(l=Eo(n,s),l!=null&&o.push(Po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Vx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Xd(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(Hx,"")}function ca(t,e,n){if(e=Xd(e),Xd(t)!==e&&n)throw Error(te(425))}function gl(){}var zc=null,kc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(Xx)}:Vc;function Xx(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ao(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Os,Lo="__reactProps$"+Os,yi="__reactContainer$"+Os,Hc="__reactEvents$"+Os,Yx="__reactListeners$"+Os,jx="__reactHandles$"+Os;function gr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jd(t);t!==null;){if(n=t[Zn])return n;t=jd(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Zn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Gl(t){return t[Lo]||null}var Gc=[],ss=-1;function tr(t){return{current:t}}function lt(t){0>ss||(t.current=Gc[ss],Gc[ss]=null,ss--)}function st(t,e){ss++,Gc[ss]=t.current,t.current=e}var Ki={},Wt=tr(Ki),rn=tr(!1),Er=Ki;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function _l(){lt(rn),lt(Wt)}function qd(t,e,n){if(Wt.current!==Ki)throw Error(te(168));st(Wt,e),st(rn,n)}function o_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Lv(t)||"Unknown",r));return _t({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Er=Wt.current,st(Wt,t),st(rn,rn.current),!0}function $d(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=o_(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,lt(rn),lt(Wt),st(Wt,t)):lt(rn),st(rn,n)}var hi=null,Wl=!1,Eu=!1;function a_(t){hi===null?hi=[t]:hi.push(t)}function qx(t){Wl=!0,a_(t)}function nr(){if(!Eu&&hi!==null){Eu=!0;var t=0,e=et;try{var n=hi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Wl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),Dg(hf,nr),r}finally{et=e,Eu=!1}}return null}var os=[],as=0,xl=null,yl=0,Tn=[],wn=0,Tr=null,di=1,pi="";function hr(t,e){os[as++]=yl,os[as++]=xl,xl=t,yl=e}function l_(t,e,n){Tn[wn++]=di,Tn[wn++]=pi,Tn[wn++]=Tr,Tr=t;var i=di;t=pi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-Hn(e)+r|n<<r|i,pi=s+t}else di=1<<s|n<<r|i,pi=t}function yf(t){t.return!==null&&(hr(t,1),l_(t,1,0))}function Sf(t){for(;t===xl;)xl=os[--as],os[as]=null,yl=os[--as],os[as]=null;for(;t===Tr;)Tr=Tn[--wn],Tn[wn]=null,pi=Tn[--wn],Tn[wn]=null,di=Tn[--wn],Tn[wn]=null}var _n=null,gn=null,ht=!1,kn=null;function u_(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:di,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xc(t){if(ht){var e=gn;if(e){var n=e;if(!Kd(t,e)){if(Wc(t))throw Error(te(418));e=Hi(n.nextSibling);var i=_n;e&&Kd(t,e)?u_(i,n):(t.flags=t.flags&-4097|2,ht=!1,_n=t)}}else{if(Wc(t))throw Error(te(418));t.flags=t.flags&-4097|2,ht=!1,_n=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function ha(t){if(t!==_n)return!1;if(!ht)return Zd(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=gn)){if(Wc(t))throw c_(),Error(te(418));for(;e;)u_(t,e),e=Hi(e.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?Hi(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=gn;t;)t=Hi(t.nextSibling)}function ws(){gn=_n=null,ht=!1}function Mf(t){kn===null?kn=[t]:kn.push(t)}var $x=Ei.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qd(t){var e=t._init;return e(t._payload)}function h_(t){function e(c,v){if(t){var x=c.deletions;x===null?(c.deletions=[v],c.flags|=16):x.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=Yi(c,v),c.index=0,c.sibling=null,c}function s(c,v,x){return c.index=x,t?(x=c.alternate,x!==null?(x=x.index,x<v?(c.flags|=2,v):x):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,x,y){return v===null||v.tag!==6?(v=Pu(x,c.mode,y),v.return=c,v):(v=r(v,x),v.return=c,v)}function l(c,v,x,y){var R=x.type;return R===es?h(c,v,x.props.children,y,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&Qd(R)===v.type)?(y=r(v,x.props),y.ref=Ys(c,v,x),y.return=c,y):(y=tl(x.type,x.key,x.props,null,c.mode,y),y.ref=Ys(c,v,x),y.return=c,y)}function u(c,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Lu(x,c.mode,y),v.return=c,v):(v=r(v,x.children||[]),v.return=c,v)}function h(c,v,x,y,R){return v===null||v.tag!==7?(v=Mr(x,c.mode,y,R),v.return=c,v):(v=r(v,x),v.return=c,v)}function d(c,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pu(""+v,c.mode,x),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:return x=tl(v.type,v.key,v.props,null,c.mode,x),x.ref=Ys(c,null,v),x.return=c,x;case Jr:return v=Lu(v,c.mode,x),v.return=c,v;case Li:var y=v._init;return d(c,y(v._payload),x)}if(ro(v)||Vs(v))return v=Mr(v,c.mode,x,null),v.return=c,v;fa(c,v)}return null}function f(c,v,x,y){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(c,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:return x.key===R?l(c,v,x,y):null;case Jr:return x.key===R?u(c,v,x,y):null;case Li:return R=x._init,f(c,v,R(x._payload),y)}if(ro(x)||Vs(x))return R!==null?null:h(c,v,x,y,null);fa(c,x)}return null}function p(c,v,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(x)||null,a(v,c,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ta:return c=c.get(y.key===null?x:y.key)||null,l(v,c,y,R);case Jr:return c=c.get(y.key===null?x:y.key)||null,u(v,c,y,R);case Li:var w=y._init;return p(c,v,x,w(y._payload),R)}if(ro(y)||Vs(y))return c=c.get(x)||null,h(v,c,y,R,null);fa(v,y)}return null}function g(c,v,x,y){for(var R=null,w=null,A=v,C=v=0,E=null;A!==null&&C<x.length;C++){A.index>C?(E=A,A=null):E=A.sibling;var S=f(c,A,x[C],y);if(S===null){A===null&&(A=E);break}t&&A&&S.alternate===null&&e(c,A),v=s(S,v,C),w===null?R=S:w.sibling=S,w=S,A=E}if(C===x.length)return n(c,A),ht&&hr(c,C),R;if(A===null){for(;C<x.length;C++)A=d(c,x[C],y),A!==null&&(v=s(A,v,C),w===null?R=A:w.sibling=A,w=A);return ht&&hr(c,C),R}for(A=i(c,A);C<x.length;C++)E=p(A,c,C,x[C],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?C:E.key),v=s(E,v,C),w===null?R=E:w.sibling=E,w=E);return t&&A.forEach(function(P){return e(c,P)}),ht&&hr(c,C),R}function _(c,v,x,y){var R=Vs(x);if(typeof R!="function")throw Error(te(150));if(x=R.call(x),x==null)throw Error(te(151));for(var w=R=null,A=v,C=v=0,E=null,S=x.next();A!==null&&!S.done;C++,S=x.next()){A.index>C?(E=A,A=null):E=A.sibling;var P=f(c,A,S.value,y);if(P===null){A===null&&(A=E);break}t&&A&&P.alternate===null&&e(c,A),v=s(P,v,C),w===null?R=P:w.sibling=P,w=P,A=E}if(S.done)return n(c,A),ht&&hr(c,C),R;if(A===null){for(;!S.done;C++,S=x.next())S=d(c,S.value,y),S!==null&&(v=s(S,v,C),w===null?R=S:w.sibling=S,w=S);return ht&&hr(c,C),R}for(A=i(c,A);!S.done;C++,S=x.next())S=p(A,c,C,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?C:S.key),v=s(S,v,C),w===null?R=S:w.sibling=S,w=S);return t&&A.forEach(function(z){return e(c,z)}),ht&&hr(c,C),R}function m(c,v,x,y){if(typeof x=="object"&&x!==null&&x.type===es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:e:{for(var R=x.key,w=v;w!==null;){if(w.key===R){if(R=x.type,R===es){if(w.tag===7){n(c,w.sibling),v=r(w,x.props.children),v.return=c,c=v;break e}}else if(w.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Li&&Qd(R)===w.type){n(c,w.sibling),v=r(w,x.props),v.ref=Ys(c,w,x),v.return=c,c=v;break e}n(c,w);break}else e(c,w);w=w.sibling}x.type===es?(v=Mr(x.props.children,c.mode,y,x.key),v.return=c,c=v):(y=tl(x.type,x.key,x.props,null,c.mode,y),y.ref=Ys(c,v,x),y.return=c,c=y)}return o(c);case Jr:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(c,v.sibling),v=r(v,x.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Lu(x,c.mode,y),v.return=c,c=v}return o(c);case Li:return w=x._init,m(c,v,w(x._payload),y)}if(ro(x))return g(c,v,x,y);if(Vs(x))return _(c,v,x,y);fa(c,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,x),v.return=c,c=v):(n(c,v),v=Pu(x,c.mode,y),v.return=c,c=v),o(c)):n(c,v)}return m}var As=h_(!0),f_=h_(!1),Sl=tr(null),Ml=null,ls=null,Ef=null;function Tf(){Ef=ls=Ml=null}function wf(t){var e=Sl.current;lt(Sl),t._currentValue=e}function Yc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Ml=t,Ef=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Ml===null)throw Error(te(308));ls=t,Ml.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var _r=null;function Af(t){_r===null?_r=[t]:_r.push(t)}function d_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Af(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Af(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}function Jd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=_t({},d,f);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=d}}function ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var jo={},ti=tr(jo),Do=tr(jo),Io=tr(jo);function vr(t){if(t===jo)throw Error(te(174));return t}function Cf(t,e){switch(st(Io,e),st(Do,t),st(ti,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ac(e,t)}lt(ti),st(ti,e)}function Rs(){lt(ti),lt(Do),lt(Io)}function m_(t){vr(Io.current);var e=vr(ti.current),n=Ac(e,t.type);e!==n&&(st(Do,t),st(ti,n))}function bf(t){Do.current===t&&(lt(ti),lt(Do))}var mt=tr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function Pf(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ka=Ei.ReactCurrentDispatcher,wu=Ei.ReactCurrentBatchConfig,wr=0,gt=null,wt=null,Dt=null,wl=!1,po=!1,Uo=0,Kx=0;function kt(){throw Error(te(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Df(t,e,n,i,r,s){if(wr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?ey:ty,t=n(i,r),po){s=0;do{if(po=!1,Uo=0,25<=s)throw Error(te(301));s+=1,Dt=wt=null,e.updateQueue=null,Ka.current=ny,t=n(i,r)}while(po)}if(Ka.current=Al,e=wt!==null&&wt.next!==null,wr=0,Dt=wt=gt=null,wl=!1,e)throw Error(te(300));return t}function If(){var t=Uo!==0;return Uo=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function bn(){if(wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?gt.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?gt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function No(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((wr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,gt.lanes|=h,Ar|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function g_(){}function __(t,e){var n=gt,i=bn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Uf(y_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Fo(9,x_.bind(null,n,i,r,e),void 0,null),It===null)throw Error(te(349));wr&30||v_(n,e,r)}return r}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,i){e.value=n,e.getSnapshot=i,S_(e)&&M_(t)}function y_(t,e,n){return n(function(){S_(e)&&M_(t)})}function S_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function M_(t){var e=Si(t,1);e!==null&&Gn(e,t,1,-1)}function tp(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=Jx.bind(null,gt,t),[e.memoizedState,t]}function Fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E_(){return bn().memoizedState}function Za(t,e,n,i){var r=$n();gt.flags|=t,r.memoizedState=Fo(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Lf(i,o.deps)){r.memoizedState=Fo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Fo(1|e,n,s,i)}function np(t,e){return Za(8390656,8,t,e)}function Uf(t,e){return Xl(2048,8,t,e)}function T_(t,e){return Xl(4,2,t,e)}function w_(t,e){return Xl(4,4,t,e)}function A_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,A_.bind(null,e,t),n)}function Nf(){}function C_(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b_(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P_(t,e,n){return wr&21?(jn(n,e)||(n=Ng(),gt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Zx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=wu.transition;wu.transition={};try{t(!1),e()}finally{et=n,wu.transition=i}}function L_(){return bn().memoizedState}function Qx(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))I_(e,n);else if(n=d_(t,e,n,i),n!==null){var r=Kt();Gn(n,t,i,r),U_(n,e,i)}}function Jx(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))I_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Af(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=d_(t,e,r,i),n!==null&&(r=Kt(),Gn(n,t,i,r),U_(n,e,i))}}function D_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function I_(t,e){po=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ff(t,n)}}var Al={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ey={readContext:Cn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,A_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:Nf,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=Zx.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=$n();if(ht){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),It===null)throw Error(te(349));wr&30||v_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,np(y_.bind(null,i,s,t),[t]),i.flags|=2048,Fo(9,x_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=It.identifierPrefix;if(ht){var n=pi,i=di;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ty={readContext:Cn,useCallback:C_,useContext:Cn,useEffect:Uf,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:w_,useMemo:b_,useReducer:Au,useRef:E_,useState:function(){return Au(No)},useDebugValue:Nf,useDeferredValue:function(t){var e=bn();return P_(e,wt.memoizedState,t)},useTransition:function(){var t=Au(No)[0],e=bn().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:__,useId:L_,unstable_isNewReconciler:!1},ny={readContext:Cn,useCallback:C_,useContext:Cn,useEffect:Uf,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:w_,useMemo:b_,useReducer:Ru,useRef:E_,useState:function(){return Ru(No)},useDebugValue:Nf,useDeferredValue:function(t){var e=bn();return wt===null?e.memoizedState=t:P_(e,wt.memoizedState,t)},useTransition:function(){var t=Ru(No)[0],e=bn().memoizedState;return[t,e]},useMutableSource:g_,useSyncExternalStore:__,useId:L_,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Gn(e,t,r,i),$a(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Xi(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gi(t,s,r),e!==null&&(Gn(e,t,r,i),$a(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Xi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gi(t,r,i),e!==null&&(Gn(e,t,i,n),$a(e,t,i))}};function ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,i)||!Co(r,s):!0}function N_(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?Er:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function qc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?Er:Wt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=Pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,sh=i),$c(t,e)},n}function O_(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_y.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Gi(n,e,1))),n.lanes|=1),t)}var ry=Ei.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?f_(e,null,n,i):As(e,t.child,n,i)}function lp(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Df(t,e,n,i,s,r),n=If(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ht&&n&&yf(e),e.flags|=1,$t(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z_(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function z_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Co(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Kc(t,e,n,i,r)}function k_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(cs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(cs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(cs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(cs,dn),dn|=i;return $t(t,e,r,n),e.child}function B_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kc(t,e,n,i,r){var s=sn(n)?Er:Wt.current;return s=Ts(e,s),_s(e,r),n=Df(t,e,n,i,s,r),i=If(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ht&&i&&yf(e),e.flags|=1,$t(t,e,n,r),e.child)}function cp(t,e,n,i,r){if(sn(n)){var s=!0;vl(e)}else s=!1;if(_s(e,r),e.stateNode===null)Qa(t,e),N_(e,n,i),qc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=sn(n)?Er:Wt.current,u=Ts(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&rp(e,o,i,u),Di=!1;var f=e.memoizedState;o.state=f,El(e,i,o,r),l=e.memoizedState,a!==i||f!==l||rn.current||Di?(typeof h=="function"&&(jc(e,n,h,i),l=e.memoizedState),(a=Di||ip(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,p_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?Er:Wt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&rp(e,o,i,l),Di=!1,f=e.memoizedState,o.state=f,El(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||rn.current||Di?(typeof p=="function"&&(jc(e,n,p,i),g=e.memoizedState),(u=Di||ip(e,n,u,i,f,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zc(t,e,n,i,s,r)}function Zc(t,e,n,i,r,s){B_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$d(e,n,!1),Mi(t,e,s);i=e.stateNode,ry.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&$d(e,n,!0),e.child}function V_(t){var e=t.stateNode;e.pendingContext?qd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qd(t,e.context,!1),Cf(t,e.containerInfo)}function hp(t,e,n,i,r){return ws(),Mf(r),e.flags|=256,$t(t,e,n,i),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return Xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jc(n),e.memoizedState=Qc,t):Ff(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qc,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ff(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,i){return i!==null&&Mf(i),As(e,t.child,null,n),t=Ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(te(422))),da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Jc(o),e.memoizedState=Qc,s);if(!(e.mode&1))return da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Cu(s,i,void 0),da(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Gn(i,t,r,-1))}return Hf(),i=Cu(Error(te(421))),da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Hi(r.nextSibling),_n=e,ht=!0,kn=null,t!==null&&(Tn[wn++]=di,Tn[wn++]=pi,Tn[wn++]=Tr,di=t.id,pi=t.overflow,Tr=e),e=Ff(e,i.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yc(t.return,e,n)}function bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function G_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bu(e,!0,n,null,s);break;case"together":bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oy(t,e,n){switch(e.tag){case 3:V_(e),ws();break;case 5:m_(e);break;case 1:sn(e.type)&&vl(e);break;case 4:Cf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(st(mt,mt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return G_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,k_(t,e,n)}return Mi(t,e,n)}var W_,eh,X_,Y_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};X_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(ti.current);var s=null;switch(n){case"input":r=Mc(t,r),i=Mc(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=wc(t,r),i=wc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Rc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ay(t,e,n){var i=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return sn(e.type)&&_l(),Bt(e),null;case 3:return i=e.stateNode,Rs(),lt(rn),lt(Wt),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(lh(kn),kn=null))),eh(t,e),Bt(e),null;case 5:bf(e);var r=vr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)X_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Bt(e),null}if(t=vr(ti.current),ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)at(oo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Sd(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Ed(i,s),at("invalid",i)}Rc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):So.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":na(i),Md(i,s,!0);break;case"textarea":na(i),Td(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Lo]=i,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)at(oo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Sd(t,i),r=Mc(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":Ed(t,i),r=wc(t,i),at("invalid",t);break;default:r=i}Rc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&of(t,s,l,o))}switch(n){case"input":na(t),Md(t,i,!1);break;case"textarea":na(t),Td(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=vr(Io.current),vr(ti.current),ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Bt(e),null;case 13:if(lt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&gn!==null&&e.mode&1&&!(e.flags&128))c_(),ws(),e.flags|=98560,s=!1;else if(s=ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Zn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else kn!==null&&(lh(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?At===0&&(At=3):Hf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Rs(),eh(t,e),t===null&&bo(e.stateNode.containerInfo),Bt(e),null;case 10:return wf(e.type._context),Bt(e),null;case 17:return sn(e.type)&&_l(),Bt(e),null;case 19:if(lt(mt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>bs&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Bt(e),null}else 2*yt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function ly(t,e){switch(Sf(e),e.tag){case 1:return sn(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),lt(rn),lt(Wt),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(lt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(mt),null;case 4:return Rs(),null;case 10:return wf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var pa=!1,Gt=!1,uy=typeof WeakSet=="function"?WeakSet:Set,fe=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){xt(t,e,i)}}var dp=!1;function cy(t,e){if(zc=dl,t=Zg(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++h===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},dl=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:On(e.type,_),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return g=dp,dp=!1,g}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&th(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j_(t){var e=t.alternate;e!==null&&(t.alternate=null,j_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Lo],delete e[Hc],delete e[Yx],delete e[jx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var Nt=null,zn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Gt||us(n,e);case 6:var i=Nt,r=zn;Nt=null,Ti(t,e,n),Nt=i,zn=r,Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Ao(t)):Mu(Nt,n.stateNode));break;case 4:i=Nt,r=zn,Nt=n.stateNode.containerInfo,zn=!0,Ti(t,e,n),Nt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Gt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ti(t,e,n),Gt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uy),e.forEach(function(i){var r=xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,zn=!1;break e;case 3:Nt=a.stateNode.containerInfo,zn=!0;break e;case 4:Nt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Nt===null)throw Error(te(160));$_(s,o,r),Nt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{mo(3,t,t.return),jl(3,t)}catch(_){xt(t,t.return,_)}try{mo(5,t,t.return)}catch(_){xt(t,t.return,_)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{Mo(r,"")}catch(_){xt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vg(r,s),Cc(a,o);var u=Cc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Eg(r,d):h==="dangerouslySetInnerHTML"?Sg(r,d):h==="children"?Mo(r,d):of(r,h,d,u)}switch(a){case"input":Ec(r,s);break;case"textarea":xg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Lo]=s}catch(_){xt(t,t.return,_)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){xt(t,t.return,_)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(_){xt(t,t.return,_)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kf=yt())),i&4&&mp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||h,In(e,t),Gt=u):In(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(fe=t,h=t.child;h!==null;){for(d=fe=h;fe!==null;){switch(f=fe,p=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:us(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){xt(i,n,_)}}break;case 5:us(f,f.return);break;case 22:if(f.memoizedState!==null){_p(d);continue}}p!==null?(p.return=f,fe=p):_p(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mg("display",o))}catch(_){xt(t,t.return,_)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){xt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),qn(t),i&4&&mp(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mo(r,""),i.flags&=-33);var s=pp(t);rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pp(t);ih(t,a,o);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hy(t,e,n){fe=t,Z_(t)}function Z_(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=pa;var u=Gt;if(pa=o,(Gt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?vp(r):l!==null?(l.return=o,fe=l):vp(r);for(;s!==null;)fe=s,Z_(s),s=s.sibling;fe=r,pa=a,Gt=u}gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):gp(t)}}function gp(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Gt||e.flags&512&&nh(e)}catch(f){xt(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function _p(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function vp(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{nh(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var fy=Math.ceil,Rl=Ei.ReactCurrentDispatcher,Of=Ei.ReactCurrentOwner,Rn=Ei.ReactCurrentBatchConfig,Ge=0,It=null,Mt=null,Ot=0,dn=0,cs=tr(0),At=0,Oo=null,Ar=0,ql=0,zf=0,go=null,tn=null,kf=0,bs=1/0,ci=null,Cl=!1,sh=null,Wi=null,ma=!1,zi=null,bl=0,_o=0,oh=null,Ja=-1,el=0;function Kt(){return Ge&6?yt():Ja!==-1?Ja:Ja=yt()}function Xi(t){return t.mode&1?Ge&2&&Ot!==0?Ot&-Ot:$x.transition!==null?(el===0&&(el=Ng()),el):(t=et,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function Gn(t,e,n,i){if(50<_o)throw _o=0,oh=null,Error(te(185));Wo(t,n,i),(!(Ge&2)||t!==It)&&(t===It&&(!(Ge&2)&&(ql|=n),At===4&&Ni(t,Ot)),on(t,i),n===1&&Ge===0&&!(e.mode&1)&&(bs=yt()+500,Wl&&nr()))}function on(t,e){var n=t.callbackNode;$v(t,e);var i=fl(t,t===It?Ot:0);if(i===0)n!==null&&Rd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rd(n),e===1)t.tag===0?qx(xp.bind(null,t)):a_(xp.bind(null,t)),Wx(function(){!(Ge&6)&&nr()}),n=null;else{switch(Fg(i)){case 1:n=hf;break;case 4:n=Ig;break;case 16:n=hl;break;case 536870912:n=Ug;break;default:n=hl}n=s0(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(Ja=-1,el=0,Ge&6)throw Error(te(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=fl(t,t===It?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=Ge;Ge|=2;var s=e0();(It!==t||Ot!==e)&&(ci=null,bs=yt()+500,Sr(t,e));do try{my();break}catch(a){J_(t,a)}while(!0);Tf(),Rl.current=s,Ge=r,Mt!==null?e=0:(It=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Ic(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Oo,Sr(t,0),Ni(t,i),on(t,yt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!dy(r)&&(e=Pl(t,i),e===2&&(s=Ic(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=Oo,Sr(t,0),Ni(t,i),on(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:fr(t,tn,ci);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=kf+500-yt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vc(fr.bind(null,t,tn,ci),e);break}fr(t,tn,ci);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fy(i/1960))-i,10<i){t.timeoutHandle=Vc(fr.bind(null,t,tn,ci),i);break}fr(t,tn,ci);break;case 5:fr(t,tn,ci);break;default:throw Error(te(329))}}}return on(t,yt()),t.callbackNode===n?Q_.bind(null,t):null}function ah(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=tn,tn=n,e!==null&&lh(e)),t}function lh(t){tn===null?tn=t:tn.push.apply(tn,t)}function dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~zf,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function xp(t){if(Ge&6)throw Error(te(327));vs();var e=fl(t,0);if(!(e&1))return on(t,yt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Ic(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Oo,Sr(t,0),Ni(t,e),on(t,yt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,tn,ci),on(t,yt()),null}function Bf(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(bs=yt()+500,Wl&&nr())}}function Rr(t){zi!==null&&zi.tag===0&&!(Ge&6)&&vs();var e=Ge;Ge|=1;var n=Rn.transition,i=et;try{if(Rn.transition=null,et=1,t)return t()}finally{et=i,Rn.transition=n,Ge=e,!(Ge&6)&&nr()}}function Vf(){dn=cs.current,lt(cs)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gx(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Rs(),lt(rn),lt(Wt),Pf();break;case 5:bf(i);break;case 4:Rs();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:wf(i.type._context);break;case 22:case 23:Vf()}n=n.return}if(It=t,Mt=t=Yi(t.current,null),Ot=dn=e,At=0,Oo=null,zf=ql=Ar=0,tn=go=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function J_(t,e){do{var n=Mt;try{if(Tf(),Ka.current=Al,wl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(wr=0,Dt=wt=gt=null,po=!1,Uo=0,Of.current=null,n===null||n.return===null){At=1,Oo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=op(o);if(p!==null){p.flags&=-257,ap(p,o,a,s,e),p.mode&1&&sp(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){sp(s,u,e),Hf();break e}l=Error(te(426))}}else if(ht&&a.mode&1){var m=op(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ap(m,o,a,s,e),Mf(Cs(l,a));break e}}s=l=Cs(l,a),At!==4&&(At=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=F_(s,l,e);Jd(s,c);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wi===null||!Wi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=O_(s,a,e);Jd(s,y);break e}}s=s.return}while(s!==null)}n0(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function e0(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function Hf(){(At===0||At===3||At===2)&&(At=4),It===null||!(Ar&268435455)&&!(ql&268435455)||Ni(It,Ot)}function Pl(t,e){var n=Ge;Ge|=2;var i=e0();(It!==t||Ot!==e)&&(ci=null,Sr(t,e));do try{py();break}catch(r){J_(t,r)}while(!0);if(Tf(),Ge=n,Rl.current=i,Mt!==null)throw Error(te(261));return It=null,Ot=0,At}function py(){for(;Mt!==null;)t0(Mt)}function my(){for(;Mt!==null&&!Bv();)t0(Mt)}function t0(t){var e=r0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?n0(t):Mt=e,Of.current=null}function n0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ly(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=ay(n,e,dn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function fr(t,e,n){var i=et,r=Rn.transition;try{Rn.transition=null,et=1,gy(t,e,n,i)}finally{Rn.transition=r,et=i}return null}function gy(t,e,n,i){do vs();while(zi!==null);if(Ge&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kv(t,s),t===It&&(Mt=It=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,s0(hl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=et;et=1;var a=Ge;Ge|=4,Of.current=null,cy(t,n),K_(n,t),Fx(kc),dl=!!zc,kc=zc=null,t.current=n,hy(n),Vv(),Ge=a,et=o,Rn.transition=s}else t.current=n;if(ma&&(ma=!1,zi=t,bl=r),s=t.pendingLanes,s===0&&(Wi=null),Wv(n.stateNode),on(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=sh,sh=null,t;return bl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===oh?_o++:(_o=0,oh=t):_o=0,nr(),null}function vs(){if(zi!==null){var t=Fg(bl),e=Rn.transition,n=et;try{if(Rn.transition=null,et=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,bl=0,Ge&6)throw Error(te(331));var r=Ge;for(Ge|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var h=fe;switch(h.tag){case 0:case 11:case 15:mo(8,h,s)}var d=h.child;if(d!==null)d.return=h,fe=d;else for(;fe!==null;){h=fe;var f=h.sibling,p=h.return;if(j_(h),h===u){fe=null;break}if(f!==null){f.return=p,fe=f;break}fe=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break e}fe=s.return}}var v=t.current;for(fe=v;fe!==null;){o=fe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,fe=x;else e:for(o=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(Ge=r,nr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{et=n,Rn.transition=e}}return!1}function yp(t,e,n){e=Cs(n,e),e=F_(t,e,1),t=Gi(t,e,1),e=Kt(),t!==null&&(Wo(t,1,e),on(t,e))}function xt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Cs(n,t),t=O_(e,t,1),e=Gi(e,t,1),t=Kt(),e!==null&&(Wo(e,1,t),on(e,t));break}}e=e.return}}function _y(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>yt()-kf?Sr(t,0):zf|=n),on(t,e)}function i0(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=Kt();t=Si(t,e),t!==null&&(Wo(t,e,n),on(t,n))}function vy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i0(t,n)}function xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),i0(t,n)}var r0;r0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,oy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ht&&e.flags&1048576&&l_(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qa(t,e),t=e.pendingProps;var r=Ts(e,Wt.current);_s(e,n),r=Df(null,e,i,t,r,n);var s=If();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,qc(e,i,t,n),e=Zc(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&yf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sy(i),t=On(i,t),r){case 0:e=Kc(null,e,i,t,n);break e;case 1:e=cp(null,e,i,t,n);break e;case 11:e=lp(null,e,i,t,n);break e;case 14:e=up(null,e,i,On(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Kc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),cp(t,e,i,r,n);case 3:e:{if(V_(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p_(t,e),El(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(te(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(te(424)),e),e=hp(t,e,i,n,r);break e}else for(gn=Hi(e.stateNode.containerInfo.firstChild),_n=e,ht=!0,kn=null,n=f_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=Mi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return m_(e),t===null&&Xc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Bc(i,r)?o=null:s!==null&&Bc(i,s)&&(e.flags|=32),B_(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Xc(e),null;case 13:return H_(t,e,n);case 4:return Cf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),lp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Sl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),up(t,e,i,r,n);case 15:return z_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Qa(t,e),e.tag=1,sn(i)?(t=!0,vl(e)):t=!1,_s(e,n),N_(e,i,r),qc(e,i,r,n),Zc(null,e,i,!0,t,n);case 19:return G_(t,e,n);case 22:return k_(t,e,n)}throw Error(te(156,e.tag))};function s0(t,e){return Dg(t,e)}function yy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new yy(t,e,n,i)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sy(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===uf)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return Mr(n.children,r,s,e);case af:o=8,r|=8;break;case vc:return t=An(12,n,e,r|2),t.elementType=vc,t.lanes=s,t;case xc:return t=An(13,n,e,r),t.elementType=xc,t.lanes=s,t;case yc:return t=An(19,n,e,r),t.elementType=yc,t.lanes=s,t;case mg:return $l(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:o=10;break e;case pg:o=9;break e;case lf:o=11;break e;case uf:o=14;break e;case Li:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=An(22,t,i,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Pu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Lu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function My(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,i,r,s,o,a,l){return t=new My(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function Ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function o0(t){if(!t)return Ki;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(sn(n))return o_(t,n,e)}return e}function a0(t,e,n,i,r,s,o,a,l){return t=Wf(n,i,!0,t,r,s,o,a,l),t.context=o0(null),n=t.current,i=Kt(),r=Xi(n),s=_i(i,r),s.callback=e??null,Gi(n,s,r),t.current.lanes=r,Wo(t,r,i),on(t,i),t}function Kl(t,e,n,i){var r=e.current,s=Kt(),o=Xi(r);return n=o0(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gi(r,e,o),t!==null&&(Gn(t,r,o,s),$a(t,r,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function Ty(){return null}var l0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yf(t){this._internalRoot=t}Zl.prototype.render=Yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Kl(t,e,null,null)};Zl.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Kl(null,t,null,null)}),e[yi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Vg(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ll(o);s.call(u)}}var o=a0(e,i,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[yi]=o.current,bo(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ll(l);a.call(u)}}var l=Wf(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[yi]=l.current,bo(t.nodeType===8?t.parentNode:t),Rr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ll(o);a.call(l)}}Kl(e,o,t,r)}else o=wy(n,e,t,r,i);return Ll(o)}Og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(ff(e,n|1),on(e,yt()),!(Ge&6)&&(bs=yt()+500,nr()))}break;case 13:Rr(function(){var i=Si(t,1);if(i!==null){var r=Kt();Gn(i,t,1,r)}}),Xf(t,1)}};df=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Kt();Gn(e,t,134217728,n)}Xf(t,134217728)}};zg=function(t){if(t.tag===13){var e=Xi(t),n=Si(t,e);if(n!==null){var i=Kt();Gn(n,t,e,i)}Xf(t,e)}};kg=function(){return et};Bg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Pc=function(t,e,n){switch(e){case"input":if(Ec(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(te(90));_g(i),Ec(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Ag=Bf;Rg=Rr;var Ay={usingClientEntryPoint:!1,Events:[Yo,rs,Gl,Tg,wg,Bf]},qs={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{kl=ga.inject(Ry),ei=ga}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(te(200));return Ey(t,e,null,n)};xn.createRoot=function(t,e){if(!jf(t))throw Error(te(299));var n=!1,i="",r=l0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,bo(t.nodeType===8?t.parentNode:t),new Yf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Pg(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Rr(t)};xn.hydrate=function(t,e,n){if(!Ql(e))throw Error(te(200));return Jl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=l0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=a0(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,bo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};xn.render=function(t,e,n){if(!Ql(e))throw Error(te(200));return Jl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(te(40));return t._reactRootContainer?(Rr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};xn.unstable_batchedUpdates=Bf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Jl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(t){console.error(t)}}u0(),ug.exports=xn;var Cy=ug.exports,Ep=Cy;gc.createRoot=Ep.createRoot,gc.hydrateRoot=Ep.hydrateRoot;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="177",xs={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},by=0,Tp=1,Py=2,c0=1,Ly=2,ui=3,Zi=0,an=1,fi=2,ji=0,ys=1,uh=2,wp=3,Ap=4,Dy=5,pr=100,Iy=101,Uy=102,Ny=103,Fy=104,Oy=200,zy=201,ky=202,By=203,ch=204,hh=205,Vy=206,Hy=207,Gy=208,Wy=209,Xy=210,Yy=211,jy=212,qy=213,$y=214,fh=0,dh=1,ph=2,Ps=3,mh=4,gh=5,_h=6,vh=7,h0=0,Ky=1,Zy=2,qi=0,Qy=1,Jy=2,eS=3,tS=4,nS=5,iS=6,rS=7,f0=300,Ls=301,Ds=302,xh=303,yh=304,eu=306,Sh=1e3,xr=1001,Mh=1002,Wn=1003,sS=1004,_a=1005,Qn=1006,Du=1007,yr=1008,ni=1009,d0=1010,p0=1011,zo=1012,$f=1013,Cr=1014,mi=1015,qo=1016,Kf=1017,Zf=1018,ko=1020,m0=35902,g0=1021,_0=1022,Bn=1023,Bo=1026,Vo=1027,v0=1028,Qf=1029,x0=1030,Jf=1031,ed=1033,nl=33776,il=33777,rl=33778,sl=33779,Eh=35840,Th=35841,wh=35842,Ah=35843,Rh=36196,Ch=37492,bh=37496,Ph=37808,Lh=37809,Dh=37810,Ih=37811,Uh=37812,Nh=37813,Fh=37814,Oh=37815,zh=37816,kh=37817,Bh=37818,Vh=37819,Hh=37820,Gh=37821,ol=36492,Wh=36494,Xh=36495,y0=36283,Yh=36284,jh=36285,qh=36286,oS=3200,aS=3201,S0=0,lS=1,Fi="",pn="srgb",Is="srgb-linear",Dl="linear",tt="srgb",Or=7680,Rp=519,uS=512,cS=513,hS=514,M0=515,fS=516,dS=517,pS=518,mS=519,Cp=35044,bp="300 es",gi=2e3,Il=2001;class Ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const vo=Math.PI/180,Ho=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function ke(t,e,n){return Math.max(e,Math.min(n,t))}function td(t,e){return(t%e+e)%e}function gS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function _S(t,e,n){return t!==e?(n-t)/(e-t):0}function xo(t,e,n){return(1-n)*t+n*e}function vS(t,e,n,i){return xo(t,e,1-Math.exp(-n*i))}function xS(t,e=1){return e-Math.abs(td(t,e*2)-e)}function yS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function SS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function MS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ES(t,e){return t+Math.random()*(e-t)}function TS(t){return t*(.5-Math.random())}function wS(t){t!==void 0&&(Pp=t);let e=Pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AS(t){return t*vo}function RS(t){return t*Ho}function CS(t){return(t&t-1)===0&&t!==0}function bS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function PS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function LS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*d,l*f,a*u);break;case"YZY":t.set(l*f,a*h,l*d,a*u);break;case"ZXZ":t.set(l*d,l*f,a*h,a*u);break;case"XZX":t.set(a*h,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*h,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fn={DEG2RAD:vo,RAD2DEG:Ho,generateUUID:zs,clamp:ke,euclideanModulo:td,mapLinear:gS,inverseLerp:_S,lerp:xo,damp:vS,pingpong:xS,smoothstep:yS,smootherstep:SS,randInt:MS,randFloat:ES,randFloatSpread:TS,seededRandom:wS,degToRad:AS,radToDeg:RS,isPowerOfTwo:CS,ceilPowerOfTwo:bS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:LS,normalize:jt,denormalize:Zr};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||u!==p||h!==g){let m=1-a;const c=l*f+u*p+h*g+d*_,v=c>=0?1:-1,x=1-c*c;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,c*v);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,h=h*m+g*y,d=d*m+_*y,m===1-a){const R=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=R,u*=R,h*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+h*d+l*p-u*f,e[n+1]=l*g+h*f+u*d-a*p,e[n+2]=u*g+h*p+a*f-l*d,e[n+3]=h*g-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+u*p*g,this._y=u*p*d-f*h*g,this._z=u*h*g+f*p*d,this._w=u*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+u*p*g,this._y=u*p*d-f*h*g,this._z=u*h*g-f*p*d,this._w=u*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-u*p*g,this._y=u*p*d+f*h*g,this._z=u*h*g+f*p*d,this._w=u*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-u*p*g,this._y=u*p*d+f*h*g,this._z=u*h*g-f*p*d,this._w=u*h*d+f*p*g;break;case"YZX":this._x=f*h*d+u*p*g,this._y=u*p*d+f*h*g,this._z=u*h*g-f*p*d,this._w=u*h*d-f*p*g;break;case"XZY":this._x=f*h*d-u*p*g,this._y=u*p*d-f*h*g,this._z=u*h*g+f*p*d,this._w=u*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),d=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*h,this.y=i+l*h+a*u-s*d,this.z=r+l*d+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new U,Lp=new br;class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],c=r[6],v=r[1],x=r[4],y=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*m+a*x+l*w,s[6]=o*c+a*y+l*A,s[1]=u*_+h*v+d*R,s[4]=u*m+h*x+d*w,s[7]=u*c+h*y+d*A,s[2]=f*_+p*v+g*R,s[5]=f*m+p*x+g*w,s[8]=f*c+p*y+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*l-h*s,p=u*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*u-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new Fe;function E0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=Ul("canvas");return t.style.display="block",t}const Dp={};function Ss(t){t in Dp||(Dp[t]=!0,console.warn(t))}function IS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function US(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ip=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FS(){const t={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?Dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Is]:{primaries:e,whitePoint:i,transfer:Dl,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Ip,fromXYZ:Up,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const je=FS();function vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ms(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class OS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Ul("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vi(n[i]/255)*255):n[i]=vi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nu(r[o].image)):s.push(Nu(r[o]))}else s=Nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?OS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;const Fu=new U;class ln extends Ir{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=xr,r=xr,s=Qn,o=yr,a=Bn,l=ni,u=ln.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=zs(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=f0;ln.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],c=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,y=(p+1)/2,R=(c+1)/2,w=(h+f)/4,A=(d+_)/4,C=(g+m)/4;return x>y&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ke(this.x,e.x,n.x),this.y=ke(this.y,e.y,n.y),this.z=ke(this.z,e.z,n.z),this.w=ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ke(this.x,e,n),this.y=ke(this.y,e,n),this.z=ke(this.z,e,n),this.w=ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Ir{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ln(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends BS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class T0 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),xa.subVectors(this.max,$s),kr.subVectors(e.a,$s),Br.subVectors(e.b,$s),Vr.subVectors(e.c,$s),wi.subVectors(Br,kr),Ai.subVectors(Vr,Br),sr.subVectors(kr,Vr);let n=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-sr.z,sr.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,sr.z,0,-sr.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-sr.y,sr.x,0];return!Ou(n,kr,Br,Vr,xa)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,kr,Br,Vr,xa))?!1:(ya.crossVectors(wi,Ai),n=[ya.x,ya.y,ya.z],Ou(n,kr,Br,Vr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,va=new $o,kr=new U,Br=new U,Vr=new U,wi=new U,Ai=new U,sr=new U,$s=new U,xa=new U,ya=new U,or=new U;function Ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),u=n.dot(or),h=i.dot(or);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const HS=new $o,Ks=new U,zu=new U;class Ko{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(zu)),this.expandByPoint(Ks.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new U,ku=new U,Sa=new U,Ri=new U,Bu=new U,Ma=new U,Vu=new U;class tu{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=Ri.dot(this.direction),l=-Ri.dot(Sa),u=Ri.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ku).addScaledVector(Sa,f),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Bu.subVectors(n,e),Ma.subVectors(i,e),Vu.crossVectors(Bu,Ma);let o=this.direction.dot(Vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Ri,Ma));if(l<0)return null;const u=a*this.direction.dot(Bu.cross(Ri));if(u<0||l+u>o)return null;const h=-a*Ri.dot(Vu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m)}set(e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=d,c[14]=f,c[3]=p,c[7]=g,c[11]=_,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=f-_*u,n[9]=-a*l,n[2]=_-f*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=u*h,_=u*d;n[0]=f+_*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=p*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=u*h,_=u*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*h,n[9]=_-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=g*u-p,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*h,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=f*d+_,n[5]=o*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,WS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ci.crossVectors(i,cn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ci.crossVectors(i,cn)),Ci.normalize(),Ea.crossVectors(cn,Ci),r[0]=Ci.x,r[4]=Ea.x,r[8]=cn.x,r[1]=Ci.y,r[5]=Ea.y,r[9]=cn.y,r[2]=Ci.z,r[6]=Ea.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],c=i[14],v=i[3],x=i[7],y=i[11],R=i[15],w=r[0],A=r[4],C=r[8],E=r[12],S=r[1],P=r[5],z=r[9],O=r[13],k=r[2],q=r[6],X=r[10],$=r[14],D=r[3],Y=r[7],Z=r[11],se=r[15];return s[0]=o*w+a*S+l*k+u*D,s[4]=o*A+a*P+l*q+u*Y,s[8]=o*C+a*z+l*X+u*Z,s[12]=o*E+a*O+l*$+u*se,s[1]=h*w+d*S+f*k+p*D,s[5]=h*A+d*P+f*q+p*Y,s[9]=h*C+d*z+f*X+p*Z,s[13]=h*E+d*O+f*$+p*se,s[2]=g*w+_*S+m*k+c*D,s[6]=g*A+_*P+m*q+c*Y,s[10]=g*C+_*z+m*X+c*Z,s[14]=g*E+_*O+m*$+c*se,s[3]=v*w+x*S+y*k+R*D,s[7]=v*A+x*P+y*q+R*Y,s[11]=v*C+x*z+y*X+R*Z,s[15]=v*E+x*O+y*$+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],c=e[15];return g*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*h-s*l*h)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*h-i*u*h)+c*(-r*a*h-n*l*d+n*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],c=e[15],v=d*m*u-_*f*u+_*l*p-a*m*p-d*l*c+a*f*c,x=g*f*u-h*m*u-g*l*p+o*m*p+h*l*c-o*f*c,y=h*_*u-g*d*u+g*a*p-o*_*p-h*a*c+o*d*c,R=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,w=n*v+i*x+r*y+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*c-i*f*c)*A,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(h*m*s-g*f*s+g*r*p-n*m*p-h*r*c+n*f*c)*A,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*f*s-h*l*s+h*r*u-n*f*u-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(g*d*s-h*_*s-g*i*p+n*_*p+h*i*c-n*d*c)*A,e[10]=(o*_*s-g*a*s+g*i*u-n*_*u-o*i*c+n*a*c)*A,e[11]=(h*a*s-o*d*s-h*i*u+n*d*u+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(h*_*r-g*d*r+g*i*f-n*_*f-h*i*m+n*d*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-h*a*r+h*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,d=a+a,f=s*u,p=s*h,g=s*d,_=o*h,m=o*d,c=a*d,v=l*u,x=l*h,y=l*d,R=i.x,w=i.y,A=i.z;return r[0]=(1-(_+c))*R,r[1]=(p+y)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+c))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(m-v)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,h=1/o,d=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===gi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Il)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,u=1/(n-e),h=1/(i-r),d=1/(o-s),f=(n+e)*u,p=(i+r)*h;let g,_;if(a===gi)g=(o+s)*d,_=-2*d;else if(a===Il)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new U,Nn=new ut,GS=new U(0,0,0),WS=new U(1,1,1),Ci=new U,Ea=new U,cn=new U,Np=new ut,Fp=new br;let Qi=class w0{constructor(e=0,n=0,i=0,r=w0.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XS=0;const Op=new U,Gr=new br,oi=new ut,Ta=new U,Zs=new U,YS=new U,jS=new br,zp=new U(1,0,0),kp=new U(0,1,0),Bp=new U(0,0,1),Vp={type:"added"},qS={type:"removed"},Wr={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Rt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new U,n=new Qi,i=new br,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Zs,Ta,this.up):oi.lookAt(Ta,Zs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(oi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qS),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,YS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new U,ai=new U,Gu=new U,li=new U,Xr=new U,Yr=new U,Hp=new U,Wu=new U,Xu=new U,Yu=new U,ju=new it,qu=new it,$u=new it;let Qs=class Qr{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),ai.subVectors(i,n),Gu.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(ai),l=Fn.dot(Gu),u=ai.dot(ai),h=ai.dot(Gu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ju.setScalar(0),qu.setScalar(0),$u.setScalar(0),ju.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ju,s.x),o.addScaledVector(qu,s.y),o.addScaledVector($u,s.z),o}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ai.subVectors(e,n),Fn.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,i),Yr.subVectors(s,i),Wu.subVectors(e,i);const l=Xr.dot(Wu),u=Yr.dot(Wu);if(l<=0&&u<=0)return n.copy(i);Xu.subVectors(e,r);const h=Xr.dot(Xu),d=Yr.dot(Xu);if(h>=0&&d<=h)return n.copy(r);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Xr,o);Yu.subVectors(e,s);const p=Xr.dot(Yu),g=Yr.dot(Yu);if(g>=0&&p<=g)return n.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Yr,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Hp.subVectors(s,r),a=(d-h)/(d-h+(p-g)),n.copy(r).addScaledVector(Hp,a);const c=1/(m+_+f);return o=_*c,a=f*c,n.copy(i).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let He=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=td(e,1),n=ke(n,0,1),i=ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ku(o,s,e+1/3),this.g=Ku(o,s,e),this.b=Ku(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=R0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return je.workingToColorSpace(Ht.copy(this),e),Math.round(ke(Ht.r*255,0,255))*65536+Math.round(ke(Ht.g*255,0,255))*256+Math.round(ke(Ht.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=pn){je.workingToColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(wa);const i=xo(bi.h,wa.h,n),r=xo(bi.s,wa.s,n),s=xo(bi.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ht=new He;He.NAMES=R0;let $S=0;class Ur extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ys,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class C0 extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,Aa=new Ne;let KS=0;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class b0 extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class P0 extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yn extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZS=0;const En=new ut,Zu=new Rt,jr=new U,hn=new $o,Js=new $o,Pt=new U;class Pn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?P0:b0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(hn.min,Js.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,Js.max),hn.expandByPoint(Pt)):(hn.expandByPoint(Js.min),hn.expandByPoint(Js.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Pt.fromBufferAttribute(a,u),l&&(jr.fromBufferAttribute(e,u),Pt.add(jr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new U,l[C]=new U;const u=new U,h=new U,d=new U,f=new Ne,p=new Ne,g=new Ne,_=new U,m=new U;function c(C,E,S){u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(u),d.sub(u),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[E].add(_),a[S].add(_),l[C].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,E=v.length;C<E;++C){const S=v[C],P=S.start,z=S.count;for(let O=P,k=P+z;O<k;O+=3)c(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new U,y=new U,R=new U,w=new U;function A(C){R.fromBufferAttribute(r,C),w.copy(R);const E=a[C];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(w,E);const P=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,E=v.length;C<E;++C){const S=v[C],P=S.start,z=S.count;for(let O=P,k=P+z;O<k;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,h=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let c=0;c<h;c++)f[g++]=u[p++]}return new Xn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new ut,ar=new tu,Ra=new Ko,Wp=new U,Ca=new U,ba=new U,Pa=new U,Qu=new U,La=new U,Xp=new U,Da=new U;let Jn=class extends Rt{constructor(e=new Pn,n=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],d=s[l];h!==0&&(Qu.fromBufferAttribute(d,e),o?La.addScaledVector(Qu,h):La.addScaledVector(Qu.sub(n),h))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ra.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ra,Wp)===null||ar.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=x;y<R;y+=3){const w=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);r=Ia(this,c,e,i,u,h,d,w,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Ia(this,o,e,i,u,h,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,R=x;y<R;y+=3){const w=y,A=y+1,C=y+2;r=Ia(this,c,e,i,u,h,d,w,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,c=_;m<c;m+=3){const v=m,x=m+1,y=m+2;r=Ia(this,o,e,i,u,h,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function QS(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Zi,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Da);return u<n.near||u>n.far?null:{distance:u,point:Da.clone(),object:t}}function Ia(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ca),t.getVertexPosition(l,ba),t.getVertexPosition(u,Pa);const h=QS(t,e,n,i,Ca,ba,Pa,Xp);if(h){const d=new U;Qs.getBarycoord(Xp,Ca,ba,Pa,d),r&&(h.uv=Qs.getInterpolatedAttribute(r,a,l,u,d,new Ne)),s&&(h.uv1=Qs.getInterpolatedAttribute(s,a,l,u,d,new Ne)),o&&(h.normal=Qs.getInterpolatedAttribute(o,a,l,u,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new U,materialIndex:0};Qs.getNormal(Ca,ba,Pa,f.normal),h.face=f,h.barycoord=d}return h}class Zo extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yn(u,3)),this.setAttribute("normal",new Yn(h,3)),this.setAttribute("uv",new Yn(d,2));function g(_,m,c,v,x,y,R,w,A,C,E){const S=y/A,P=R/C,z=y/2,O=R/2,k=w/2,q=A+1,X=C+1;let $=0,D=0;const Y=new U;for(let Z=0;Z<X;Z++){const se=Z*P-O;for(let Se=0;Se<q;Se++){const We=Se*S-z;Y[_]=We*v,Y[m]=se*x,Y[c]=k,u.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[c]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Se/A),d.push(1-Z/C),$+=1}}for(let Z=0;Z<C;Z++)for(let se=0;se<A;se++){const Se=f+se+q*Z,We=f+se+q*(Z+1),W=f+(se+1)+q*(Z+1),re=f+(se+1)+q*Z;l.push(Se,We,re),l.push(We,W,re),D+=6}a.addGroup(p,D,E),p+=D,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function JS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function L0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const eM={clone:Us,merge:qt};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=JS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class D0 extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new U,Yp=new Ne,jp=new Ne;class mn extends D0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Yp,jp),n.subVectors(jp,Yp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,$r=1;class iM extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(qr,$r,e,n);r.layers=this.layers,this.add(r);const s=new mn(qr,$r,e,n);s.layers=this.layers,this.add(s);const o=new mn(qr,$r,e,n);o.layers=this.layers,this.add(o);const a=new mn(qr,$r,e,n);a.layers=this.layers,this.add(a);const l=new mn(qr,$r,e,n);l.layers=this.layers,this.add(l);const u=new mn(qr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class I0 extends ln{constructor(e=[],n=Ls,i,r,s,o,a,l,u,h){super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new I0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zo(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ji});s.uniforms.tEquirect.value=n;const o=new Jn(r,s),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=Qn),new iM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ua extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),c=this._getHandJoint(u,_);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oM extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ec=new U,aM=new U,lM=new Fe;class Ii{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ec.subVectors(i,n).cross(aM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ec),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lM.getNormalMatrix(e),r=this.coplanarPoint(ec).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Ko,Na=new U;class id{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],c=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-c).normalize(),i[1].setComponents(l+s,f+u,m+p,y+c).normalize(),i[2].setComponents(l+o,f+h,m+g,y+v).normalize(),i[3].setComponents(l-o,f-h,m-g,y-v).normalize(),i[4].setComponents(l-a,f-d,m-_,y-x).normalize(),n===gi)i[5].setComponents(l+a,f+d,m+_,y+x).normalize();else if(n===Il)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U0 extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nl=new U,Fl=new U,qp=new ut,eo=new tu,Fa=new Ko,tc=new U,$p=new U;class uM extends Rt{constructor(e=new Pn,n=new U0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Nl.fromBufferAttribute(n,r-1),Fl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Nl.distanceTo(Fl);e.setAttribute("lineDistance",new Yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;qp.copy(r).invert(),eo.copy(e.ray).applyMatrix4(qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const c=h.getX(_),v=h.getX(_+1),x=Oa(this,e,eo,l,c,v,_);x&&n.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),c=Oa(this,e,eo,l,_,m,g-1);c&&n.push(c)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const c=Oa(this,e,eo,l,_,_+1,_);c&&n.push(c)}if(this.isLineLoop){const _=Oa(this,e,eo,l,g-1,p,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oa(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Nl.fromBufferAttribute(a,r),Fl.fromBufferAttribute(a,s),n.distanceSqToSegment(Nl,Fl,tc,$p)>i)return;tc.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(tc);if(!(u<e.near||u>e.far))return{distance:u,point:$p.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class N0 extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kp=new ut,$h=new tu,za=new Ko,ka=new U;class cM extends Rt{constructor(e=new Pn,n=new N0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;Kp.copy(r).invert(),$h.copy(e.ray).applyMatrix4(Kp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);ka.fromBufferAttribute(d,m),Zp(ka,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)ka.fromBufferAttribute(d,g),Zp(ka,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zp(t,e,n,i,r,s,o){const a=$h.distanceSqToPoint(t);if(a<n){const l=new U;$h.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class F0 extends ln{constructor(e,n,i=Cr,r,s,o,a=Wn,l=Wn,u,h=Bo,d=1){if(h!==Bo&&h!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nu extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,d=e/a,f=n/l,p=[],g=[],_=[],m=[];for(let c=0;c<h;c++){const v=c*f-o;for(let x=0;x<u;x++){const y=x*d-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const x=v+u*c,y=v+u*(c+1),R=v+1+u*(c+1),w=v+1+u*c;p.push(x,y,w),p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class rd extends Pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],d=new U,f=new U,p=[],g=[],_=[],m=[];for(let c=0;c<=i;c++){const v=[],x=c/i;let y=0;c===0&&o===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let R=0;R<=n;R++){const w=R/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-x),v.push(u++)}h.push(v)}for(let c=0;c<i;c++)for(let v=0;v<n;v++){const x=h[c][v+1],y=h[c][v],R=h[c+1][v],w=h[c+1][v+1];(c!==0||o>0)&&p.push(x,y,w),(c!==i-1||l<Math.PI)&&p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hM extends Ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fM extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dM extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sd extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class pM extends sd{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const nc=new ut,Qp=new U,Jp=new U;class O0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qp),Jp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jp),n.updateMatrixWorld(),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const em=new ut,to=new U,ic=new U;class mM extends O0{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),to.setFromMatrixPosition(e.matrixWorld),i.position.copy(to),ic.copy(i.position),ic.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ic),i.updateMatrixWorld(),r.makeTranslation(-to.x,-to.y,-to.z),em.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(em)}}class gM extends sd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class z0 extends D0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _M extends O0{constructor(){super(new z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vM extends sd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xM extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=tm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function tm(){return performance.now()}class nm{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class SM extends Ir{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function im(t,e,n,i){const r=MM(i);switch(n){case g0:return t*e;case v0:return t*e/r.components*r.byteLength;case Qf:return t*e/r.components*r.byteLength;case x0:return t*e*2/r.components*r.byteLength;case Jf:return t*e*2/r.components*r.byteLength;case _0:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case ed:return t*e*4/r.components*r.byteLength;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:case Ah:return Math.max(t,16)*Math.max(e,8)/4;case Eh:case wh:return Math.max(t,8)*Math.max(e,8)/2;case Rh:case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ol:case Wh:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case y0:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jh:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MM(t){switch(t){case ni:case d0:return{byteLength:1,components:1};case zo:case p0:case qo:return{byteLength:2,components:1};case Kf:case Zf:return{byteLength:2,components:4};case Cr:case $f:case mi:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function k0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function EM(t){const e=new WeakMap;function n(a,l){const u=a.array,h=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const h=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eE="gl_FragColor = linearToOutputTexel( gl_FragColor );",tE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ME=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:TM,alphahash_pars_fragment:wM,alphamap_fragment:AM,alphamap_pars_fragment:RM,alphatest_fragment:CM,alphatest_pars_fragment:bM,aomap_fragment:PM,aomap_pars_fragment:LM,batching_pars_vertex:DM,batching_vertex:IM,begin_vertex:UM,beginnormal_vertex:NM,bsdfs:FM,iridescence_fragment:OM,bumpmap_pars_fragment:zM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:YM,common:jM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:$M,displacementmap_pars_vertex:KM,displacementmap_vertex:ZM,emissivemap_fragment:QM,emissivemap_pars_fragment:JM,colorspace_fragment:eE,colorspace_pars_fragment:tE,envmap_fragment:nE,envmap_common_pars_fragment:iE,envmap_pars_fragment:rE,envmap_pars_vertex:sE,envmap_physical_pars_fragment:gE,envmap_vertex:oE,fog_vertex:aE,fog_pars_vertex:lE,fog_fragment:uE,fog_pars_fragment:cE,gradientmap_pars_fragment:hE,lightmap_pars_fragment:fE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:pE,lights_pars_begin:mE,lights_toon_fragment:_E,lights_toon_pars_fragment:vE,lights_phong_fragment:xE,lights_phong_pars_fragment:yE,lights_physical_fragment:SE,lights_physical_pars_fragment:ME,lights_fragment_begin:EE,lights_fragment_maps:TE,lights_fragment_end:wE,logdepthbuf_fragment:AE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:bE,map_fragment:PE,map_pars_fragment:LE,map_particle_fragment:DE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:NE,morphinstance_vertex:FE,morphcolor_vertex:OE,morphnormal_vertex:zE,morphtarget_pars_vertex:kE,morphtarget_vertex:BE,normal_fragment_begin:VE,normal_fragment_maps:HE,normal_pars_fragment:GE,normal_pars_vertex:WE,normal_vertex:XE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:KE,opaque_fragment:ZE,packing:QE,premultiplied_alpha_fragment:JE,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:u1,skinning_pars_vertex:c1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:v1,uv_pars_fragment:x1,uv_pars_vertex:y1,uv_vertex:S1,worldpos_vertex:M1,background_vert:E1,background_frag:T1,backgroundCube_vert:w1,backgroundCube_frag:A1,cube_vert:R1,cube_frag:C1,depth_vert:b1,depth_frag:P1,distanceRGBA_vert:L1,distanceRGBA_frag:D1,equirect_vert:I1,equirect_frag:U1,linedashed_vert:N1,linedashed_frag:F1,meshbasic_vert:O1,meshbasic_frag:z1,meshlambert_vert:k1,meshlambert_frag:B1,meshmatcap_vert:V1,meshmatcap_frag:H1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:j1,meshphysical_frag:q1,meshtoon_vert:$1,meshtoon_frag:K1,points_vert:Z1,points_frag:Q1,shadow_vert:J1,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Kn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Kn.physical={uniforms:qt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ba={r:0,b:0,g:0},ur=new Qi,iT=new ut;function rT(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,u,h,d=null,f=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function _(x){let y=!1;const R=g(x);R===null?c(a,l):R&&R.isColor&&(c(R,1),y=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const R=g(y);R&&(R.isCubeTexture||R.mapping===eu)?(h===void 0&&(h=new Jn(new Zo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Us(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ur.copy(y.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ur)),h.material.toneMapped=je.getTransfer(R.colorSpace)!==tt,(d!==R||f!==R.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new Jn(new nu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Us(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=je.getTransfer(R.colorSpace)!==tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function c(x,y){x.getRGB(Ba,L0(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,c(a,l)},render:_,addToRenderList:m,dispose:v}}function sT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,P,z,O,k){let q=!1;const X=d(O,z,P);s!==X&&(s=X,u(s.object)),q=p(S,O,z,k),q&&g(S,O,z,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,P,z,O),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function d(S,P,z){const O=z.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let X=q[O];return X===void 0&&(X=f(l()),q[O]=X),X}function f(S){const P=[],z=[],O=[];for(let k=0;k<n;k++)P[k]=0,z[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,P,z,O){const k=s.attributes,q=P.attributes;let X=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){const Z=k[D];let se=q[D];if(se===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function g(S,P,z,O){const k={},q=P.attributes;let X=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){let Z=q[D];Z===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),k[D]=se,X++}s.attributes=k,s.attributesNum=X,s.index=O}function _(){const S=s.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function m(S){c(S,0)}function c(S,P){const z=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;z[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),k[S]!==P&&(t.vertexAttribDivisor(S,P),k[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==S[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function x(S,P,z,O,k,q,X){X===!0?t.vertexAttribIPointer(S,P,z,k,q):t.vertexAttribPointer(S,P,z,O,k,q)}function y(S,P,z,O){_();const k=O.attributes,q=z.getAttributes(),X=P.defaultAttributeValues;for(const $ in q){const D=q[$];if(D.location>=0){let Y=k[$];if(Y===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Z=Y.normalized,se=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const We=Se.buffer,W=Se.type,re=Se.bytesPerElement,me=W===t.INT||W===t.UNSIGNED_INT||Y.gpuType===$f;if(Y.isInterleavedBufferAttribute){const le=Y.data,Te=le.stride,qe=Y.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<D.locationSize;Pe++)c(D.location+Pe,le.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<D.locationSize;Pe++)m(D.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Pe=0;Pe<D.locationSize;Pe++)x(D.location+Pe,se/D.locationSize,W,Z,Te*re,(qe+se/D.locationSize*Pe)*re,me)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)c(D.location+le,Y.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<D.locationSize;le++)m(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,We);for(let le=0;le<D.locationSize;le++)x(D.location+le,se/D.locationSize,W,Z,se*re,se/D.locationSize*le*re,me)}}else if(X!==void 0){const Z=X[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(D.location,Z);break;case 3:t.vertexAttrib3fv(D.location,Z);break;case 4:t.vertexAttrib4fv(D.location,Z);break;default:t.vertexAttrib1fv(D.location,Z)}}}}v()}function R(){C();for(const S in i){const P=i[S];for(const z in P){const O=P[z];for(const k in O)h(O[k].object),delete O[k];delete P[z]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const z in P){const O=P[z];for(const k in O)h(O[k].object),delete O[k];delete P[z]}delete i[S.id]}function A(S){for(const P in i){const z=i[P];if(z[S.id]===void 0)continue;const O=z[S.id];for(const k in O)h(O[k].object),delete O[k];delete z[S.id]}}function C(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function oT(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function o(u,h,d){d!==0&&(t.drawArraysInstanced(i,u,h,d),n.update(h,i,d))}function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ni&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mi&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function lT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):u();else{const v=s?0:i,x=v*4;let y=c.clippingState||null;l.value=y,y=h(g,f,x,p);for(let R=0;R!==x;++R)y[R]=n[R];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const c=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function uT(t){let e=new WeakMap;function n(o,a){return a===xh?o.mapping=Ls:a===yh&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xh||a===yh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new rM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fs=4,rm=[.125,.215,.35,.446,.526,.582],mr=20,rc=new z0,sm=new He;let sc=null,oc=0,ac=0,lc=!1;const dr=(1+Math.sqrt(5))/2,Kr=1/dr,om=[new U(-dr,Kr,0),new U(dr,Kr,0),new U(-Kr,0,dr),new U(Kr,0,dr),new U(0,dr,-Kr),new U(0,dr,Kr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],cT=new U;class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=cT}=s;sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,oc,ac),this._renderer.xr.enabled=lc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:qo,format:Bn,colorSpace:Is,depthBuffer:!1},r=lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(s)),this._blurMaterial=fT(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,rc)}_sceneToCubeUV(e,n,i,r,s){const l=new mn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(sm),d.toneMapping=qi,d.autoClear=!1;const g=new C0({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Jn(new Zo,g);let m=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,m=!0):(g.color.copy(sm),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):x===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const y=this._cubeSize;Va(r,x*y,v>2?y:0,y,y),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ls||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Va(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=om[(r-s-1)%om.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Jn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const c=[];let v=0;for(let A=0;A<mr;++A){const C=A/_,E=Math.exp(-C*C/2);c.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],R=3*y*(r>x-fs?r-x+fs:0),w=4*(this._cubeSize-y);Va(n,R,w,3*y,2*y),l.setRenderTarget(n),l.render(d,rc)}}function hT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=rm[o-t+fs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,c=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(c*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(E,_*g*w),x.set(f,m*g*w);const S=[w,w,w,w,w,w];y.set(S,c*g*w)}const R=new Pn;R.setAttribute("position",new Xn(v,_)),R.setAttribute("uv",new Xn(x,m)),R.setAttribute("faceIndex",new Xn(y,c)),e.push(R),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lm(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Va(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fT(t,e,n){const i=new Float32Array(mr),r=new U(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function um(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function cm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xh||l===yh,h=l===Ls||l===Ds;if(u||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new am(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new am(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const R=v[x+0],w=v[x+1],A=v[x+2];f.push(R,w,w,A,A,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const R=x+0,w=x+1,A=x+2;f.push(R,w,w,A,A,R)}}else return;const m=new(E0(f)?P0:b0)(f,1);m.version=_;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function gT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let c=0;c<g;c++)m+=p[c];n.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<f.length;c++)u(f[c]/o,p[c],_[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let c=0;for(let v=0;v<g;v++)c+=p[v]*_[v];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e,n){const i=new WeakMap,r=new it;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*w*4*d),C=new T0(A,R,w,d);C.type=mi,C.needsUpdate=!0;const E=y*4;for(let P=0;P<d;P++){const z=c[P],O=v[P],k=x[P],q=R*w*4*P;for(let X=0;X<z.count;X++){const $=X*E;g===!0&&(r.fromBufferAttribute(z,X),A[q+$+0]=r.x,A[q+$+1]=r.y,A[q+$+2]=r.z,A[q+$+3]=0),_===!0&&(r.fromBufferAttribute(O,X),A[q+$+4]=r.x,A[q+$+5]=r.y,A[q+$+6]=r.z,A[q+$+7]=0),m===!0&&(r.fromBufferAttribute(k,X),A[q+$+8]=r.x,A[q+$+9]=r.y,A[q+$+10]=r.z,A[q+$+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new Ne(R,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const B0=new ln,hm=new F0(1,1),V0=new T0,H0=new VS,G0=new I0,fm=[],dm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fm[r];if(s===void 0&&(s=new Float32Array(r),fm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;gm.set(i),t.uniformMatrix2fv(this.addr,!1,gm),bt(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;mm.set(i),t.uniformMatrix3fv(this.addr,!1,mm),bt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;pm.set(i),t.uniformMatrix4fv(this.addr,!1,pm),bt(n,i)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function NT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(hm.compareFunction=M0,s=hm):s=B0,n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||H0,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||G0,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||V0,r)}function kT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return TT;case 35675:return wT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return bT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return DT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return zT}}function BT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YT(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jT(t,e){t.uniform1iv(this.addr,e)}function qT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function JT(t,e){t.uniform3uiv(this.addr,e)}function ew(t,e){t.uniform4uiv(this.addr,e)}function tw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||B0,s[o])}function nw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||H0,s[o])}function iw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||G0,s[o])}function rw(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||V0,s[o])}function sw(t){switch(t){case 5126:return BT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return jT;case 35667:case 35671:return qT;case 35668:case 35672:return $T;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kT(n.type)}}class aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sw(n.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function uw(t,e,n){const i=t.name,r=i.length;for(uc.lastIndex=0;;){const s=uc.exec(i),o=uc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_m(n,u===void 0?new ow(a,t,e):new aw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lw(a),_m(n,d)),n=d}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);uw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cw=37297;let hw=0;function fw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const xm=new Fe;function dw(t){je._getMatrix(xm,je.workingColorSpace,t);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Dl:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fw(t.getShaderSource(e),o)}else return r}function pw(t,e){const n=dw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mw(t,e){let n;switch(e){case Qy:n="Linear";break;case Jy:n="Reinhard";break;case eS:n="Cineon";break;case tS:n="ACESFilmic";break;case iS:n="AgX";break;case rS:n="Neutral";break;case nS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ha=new U;function gw(){je.getLuminanceCoefficients(Ha);const t=Ha.x.toFixed(4),e=Ha.y.toFixed(4),n=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function vw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(yw,Mw)}const Sw=new Map;function Mw(t,e){let n=ze[e];if(n===void 0){const i=Sw.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(n)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(Ew,Tw)}function Tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ww(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Aw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Cw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case Zy:e="ENVMAP_BLENDING_ADD";break}return e}function bw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Pw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ww(n),u=Aw(n),h=Rw(n),d=Cw(n),f=bw(n),p=_w(n),g=vw(s),_=r.createProgram();let m,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ao).join(`
`),c.length>0&&(c+=`
`)):(m=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),c=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?ze.tonemapping_pars_fragment:"",n.toneMapping!==qi?mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,pw("linearToOutputTexel",n.outputColorSpace),gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Kh(o),o=Sm(o,n),o=Mm(o,n),a=Kh(a),a=Sm(a,n),a=Mm(a,n),o=Em(o),a=Em(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const x=v+m+o,y=v+c+a,R=vm(r,r.VERTEX_SHADER,x),w=vm(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(w).trim();let q=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,w);else{const $=ym(r,R,"vertex"),D=ym(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:c}})}r.deleteShader(R),r.deleteShader(w),C=new al(r,_),E=xw(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,cw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Lw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Iw(e),n.set(e,i)),i}}class Iw{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}}function Uw(t,e,n,i,r,s,o){const a=new A0,l=new Dw,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,z,O){const k=z.fog,q=O.geometry,X=E.isMeshStandardMaterial?z.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),D=$&&$.mapping===eu?$.image.height:null,Y=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Z!==void 0?Z.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let We,W,re,me;if(Y){const Qe=Kn[Y];We=Qe.vertexShader,W=Qe.fragmentShader}else We=E.vertexShader,W=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const le=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),qe=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,ft=!!E.map,dt=!!E.matcap,$e=!!$,L=!!E.aoMap,Xt=!!E.lightMap,Ke=!!E.bumpMap,rt=!!E.normalMap,ye=!!E.displacementMap,Xe=!!E.emissiveMap,Ae=!!E.metalnessMap,Oe=!!E.roughnessMap,Et=E.anisotropy>0,b=E.clearcoat>0,M=E.dispersion>0,B=E.iridescence>0,j=E.sheen>0,Q=E.transmission>0,G=Et&&!!E.anisotropyMap,Me=b&&!!E.clearcoatMap,ue=b&&!!E.clearcoatNormalMap,xe=b&&!!E.clearcoatRoughnessMap,Ee=B&&!!E.iridescenceMap,J=B&&!!E.iridescenceThicknessMap,de=j&&!!E.sheenColorMap,be=j&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,oe=!!E.specularColorMap,Ie=!!E.specularIntensityMap,I=Q&&!!E.transmissionMap,ce=Q&&!!E.thicknessMap,ee=!!E.gradientMap,ge=!!E.alphaMap,ne=E.alphaTest>0,K=!!E.alphaHash,_e=!!E.extensions;let Ue=qi;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const ot={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:W,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:qe,instancingColor:qe&&O.instanceColor!==null,instancingMorph:qe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Is,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:dt,envMap:$e,envMapMode:$e&&$.mapping,envMapCubeUVHeight:D,aoMap:L,lightMap:Xt,bumpMap:Ke,normalMap:rt,displacementMap:f&&ye,emissiveMap:Xe,normalMapObjectSpace:rt&&E.normalMapType===lS,normalMapTangentSpace:rt&&E.normalMapType===S0,metalnessMap:Ae,roughnessMap:Oe,anisotropy:Et,anisotropyMap:G,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:M,iridescence:B,iridescenceMap:Ee,iridescenceThicknessMap:J,sheen:j,sheenColorMap:de,sheenRoughnessMap:be,specularMap:Ce,specularColorMap:oe,specularIntensityMap:Ie,transmission:Q,transmissionMap:I,thicknessMap:ce,gradientMap:ee,opaque:E.transparent===!1&&E.blending===ys&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:K,combine:E.combine,mapUv:ft&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:Xt&&_(E.lightMap.channel),bumpMapUv:Ke&&_(E.bumpMap.channel),normalMapUv:rt&&_(E.normalMap.channel),displacementMapUv:ye&&_(E.displacementMap.channel),emissiveMapUv:Xe&&_(E.emissiveMap.channel),metalnessMapUv:Ae&&_(E.metalnessMap.channel),roughnessMapUv:Oe&&_(E.roughnessMap.channel),anisotropyMapUv:G&&_(E.anisotropyMap.channel),clearcoatMapUv:Me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(E.sheenRoughnessMap.channel),specularMapUv:Ce&&_(E.specularMap.channel),specularColorMapUv:oe&&_(E.specularColorMap.channel),specularIntensityMapUv:Ie&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ce&&_(E.thicknessMap.channel),alphaMapUv:ge&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||Et),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ft||ge),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:Xe&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ot.vertexUv1s=u.has(1),ot.vertexUv2s=u.has(2),ot.vertexUv3s=u.has(3),u.clear(),ot}function c(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=g[E.type];let P;if(S){const z=Kn[S];P=eM.clone(z.uniforms)}else P=E.uniforms;return P}function R(E,S){let P;for(let z=0,O=h.length;z<O;z++){const k=h[z];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Pw(t,S,E,s),h.push(P)),P}function w(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function Nw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=f,c.material=p,c.groupOrder=g,c.renderOrder=d.renderOrder,c.z=_,c.group=m),e++,c}function a(d,f,p,g,_,m){const c=o(d,f,p,g,_,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,f,p,g,_,m){const c=o(d,f,p,g,_,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,f){n.length>1&&n.sort(d||Fw),i.length>1&&i.sort(f||wm),r.length>1&&r.sort(f||wm)}function h(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Ow(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Am,t.set(i,[o])):r>=s.length?(o=new Am,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new He};break;case"SpotLight":n={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Bw=0;function Vw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hw(t){const e=new zw,n=kw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new ut,o=new ut;function a(u){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,c=0,v=0,x=0,y=0,R=0,w=0,A=0;u.sort(Vw);for(let E=0,S=u.length;E<S;E++){const P=u[E],z=P.color,O=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,d+=z.g*O,f+=z.b*O;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],O);A++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const $=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=$.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=q,y++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const $=P.shadow,D=n.get(P);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(O),X.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[c]=X,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==c||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=c,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=c,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=A,i.version=Bw++)}function l(u,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const x=u[c];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Rm(t){const e=new Hw(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Gw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rm(t),e.set(r,[a])):s>=o.length?(a=new Rm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yw(t,e,n){let i=new id;const r=new Ne,s=new Ne,o=new it,a=new fM({depthPacking:aS}),l=new dM,u={},h=n.maxTextureSize,d={[Zi]:an,[an]:Zi,[fi]:fi},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let c=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=c!==ui&&this.type===ui,k=c===ui&&this.type!==ui;for(let q=0,X=w.length;q<X;q++){const $=w[q],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||O===!0||k===!0){const se=this.type!==ui?{minFilter:Wn,magFilter:Wn}:{};D.map!==null&&D.map.dispose(),D.map=new Pr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Z=D.getViewportCount();for(let se=0;se<Z;se++){const Se=D.getViewport(se);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),z.viewport(o),D.updateMatrices($,se),i=D.getFrustum(),y(A,C,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&v(D,C),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,P)};function v(w,A){const C=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,C,p,_,null)}function x(w,A,C,E){let S=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=S.uuid,O=A.uuid;let k=u[z];k===void 0&&(k={},u[z]=k);let q=k[O];q===void 0&&(q=S.clone(),k[O]=q,A.addEventListener("dispose",R)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ui?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=C}return S}function y(w,A,C,E,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),k=w.material;if(Array.isArray(k)){const q=O.groups;for(let X=0,$=q.length;X<$;X++){const D=q[X],Y=k[D.materialIndex];if(Y&&Y.visible){const Z=x(w,Y,E,S);w.onBeforeShadow(t,w,A,C,O,Z,D),t.renderBufferDirect(C,null,O,Z,w,D),w.onAfterShadow(t,w,A,C,O,Z,D)}}}else if(k.visible){const q=x(w,k,E,S);w.onBeforeShadow(t,w,A,C,O,q,null),t.renderBufferDirect(C,null,O,q,w,null),w.onAfterShadow(t,w,A,C,O,q,null)}}const z=w.children;for(let O=0,k=z.length;O<k;O++)y(z[O],A,C,E,S)}function R(w){w.target.removeEventListener("dispose",R);for(const C in u){const E=u[C],S=w.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const jw={[fh]:dh,[ph]:_h,[mh]:vh,[Ps]:gh,[dh]:fh,[_h]:ph,[vh]:mh,[gh]:Ps};function qw(t,e){function n(){let I=!1;const ce=new it;let ee=null;const ge=new it(0,0,0,0);return{setMask:function(ne){ee!==ne&&!I&&(t.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){I=ne},setClear:function(ne,K,_e,Ue,ot){ot===!0&&(ne*=Ue,K*=Ue,_e*=Ue),ce.set(ne,K,_e,Ue),ge.equals(ce)===!1&&(t.clearColor(ne,K,_e,Ue),ge.copy(ce))},reset:function(){I=!1,ee=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,ee=null,ge=null,ne=null;return{setReversed:function(K){if(ce!==K){const _e=e.get("EXT_clip_control");K?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ce=K;const Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return ce},setTest:function(K){K?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(K){ee!==K&&!I&&(t.depthMask(K),ee=K)},setFunc:function(K){if(ce&&(K=jw[K]),ge!==K){switch(K){case fh:t.depthFunc(t.NEVER);break;case dh:t.depthFunc(t.ALWAYS);break;case ph:t.depthFunc(t.LESS);break;case Ps:t.depthFunc(t.LEQUAL);break;case mh:t.depthFunc(t.EQUAL);break;case gh:t.depthFunc(t.GEQUAL);break;case _h:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=K}},setLocked:function(K){I=K},setClear:function(K){ne!==K&&(ce&&(K=1-K),t.clearDepth(K),ne=K)},reset:function(){I=!1,ee=null,ge=null,ne=null,ce=!1}}}function r(){let I=!1,ce=null,ee=null,ge=null,ne=null,K=null,_e=null,Ue=null,ot=null;return{setTest:function(Qe){I||(Qe?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!I&&(t.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,Ln,ii){(ee!==Qe||ge!==Ln||ne!==ii)&&(t.stencilFunc(Qe,Ln,ii),ee=Qe,ge=Ln,ne=ii)},setOp:function(Qe,Ln,ii){(K!==Qe||_e!==Ln||Ue!==ii)&&(t.stencilOp(Qe,Ln,ii),K=Qe,_e=Ln,Ue=ii)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ot!==Qe&&(t.clearStencil(Qe),ot=Qe)},reset:function(){I=!1,ce=null,ee=null,ge=null,ne=null,K=null,_e=null,Ue=null,ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,c=null,v=null,x=null,y=null,R=null,w=null,A=new He(0,0,0),C=0,E=!1,S=null,P=null,z=null,O=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),X=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),X=$>=2);let Y=null,Z={};const se=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),We=new it().fromArray(se),W=new it().fromArray(Se);function re(I,ce,ee,ge){const ne=new Uint8Array(4),K=t.createTexture();t.bindTexture(I,K),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<ee;_e++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ce+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return K}const me={};me[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Ps),Ke(!1),rt(Tp),le(t.CULL_FACE),L(ji);function le(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function Te(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function qe(I,ce){return d[I]!==ce?(t.bindFramebuffer(I,ce),d[I]=ce,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(I,ce){let ee=p,ge=!1;if(I){ee=f.get(ce),ee===void 0&&(ee=[],f.set(ce,ee));const ne=I.textures;if(ee.length!==ne.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let K=0,_e=ne.length;K<_e;K++)ee[K]=t.COLOR_ATTACHMENT0+K;ee.length=ne.length,ge=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ee)}function ft(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const dt={[pr]:t.FUNC_ADD,[Iy]:t.FUNC_SUBTRACT,[Uy]:t.FUNC_REVERSE_SUBTRACT};dt[Ny]=t.MIN,dt[Fy]=t.MAX;const $e={[Oy]:t.ZERO,[zy]:t.ONE,[ky]:t.SRC_COLOR,[ch]:t.SRC_ALPHA,[Xy]:t.SRC_ALPHA_SATURATE,[Gy]:t.DST_COLOR,[Vy]:t.DST_ALPHA,[By]:t.ONE_MINUS_SRC_COLOR,[hh]:t.ONE_MINUS_SRC_ALPHA,[Wy]:t.ONE_MINUS_DST_COLOR,[Hy]:t.ONE_MINUS_DST_ALPHA,[Yy]:t.CONSTANT_COLOR,[jy]:t.ONE_MINUS_CONSTANT_COLOR,[qy]:t.CONSTANT_ALPHA,[$y]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,ce,ee,ge,ne,K,_e,Ue,ot,Qe){if(I===ji){_===!0&&(Te(t.BLEND),_=!1);return}if(_===!1&&(le(t.BLEND),_=!0),I!==Dy){if(I!==m||Qe!==E){if((c!==pr||y!==pr)&&(t.blendEquation(t.FUNC_ADD),c=pr,y=pr),Qe)switch(I){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uh:t.blendFunc(t.ONE,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,R=null,w=null,A.set(0,0,0),C=0,m=I,E=Qe}return}ne=ne||ce,K=K||ee,_e=_e||ge,(ce!==c||ne!==y)&&(t.blendEquationSeparate(dt[ce],dt[ne]),c=ce,y=ne),(ee!==v||ge!==x||K!==R||_e!==w)&&(t.blendFuncSeparate($e[ee],$e[ge],$e[K],$e[_e]),v=ee,x=ge,R=K,w=_e),(Ue.equals(A)===!1||ot!==C)&&(t.blendColor(Ue.r,Ue.g,Ue.b,ot),A.copy(Ue),C=ot),m=I,E=!1}function Xt(I,ce){I.side===fi?Te(t.CULL_FACE):le(t.CULL_FACE);let ee=I.side===an;ce&&(ee=!ee),Ke(ee),I.blending===ys&&I.transparent===!1?L(ji):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function rt(I){I!==by?(le(t.CULL_FACE),I!==P&&(I===Tp?t.cullFace(t.BACK):I===Py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),P=I}function ye(I){I!==z&&(X&&t.lineWidth(I),z=I)}function Xe(I,ce,ee){I?(le(t.POLYGON_OFFSET_FILL),(O!==ce||k!==ee)&&(t.polygonOffset(ce,ee),O=ce,k=ee)):Te(t.POLYGON_OFFSET_FILL)}function Ae(I){I?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=t.TEXTURE0+q-1),Y!==I&&(t.activeTexture(I),Y=I)}function Et(I,ce,ee){ee===void 0&&(Y===null?ee=t.TEXTURE0+q-1:ee=Y);let ge=Z[ee];ge===void 0&&(ge={type:void 0,texture:void 0},Z[ee]=ge),(ge.type!==I||ge.texture!==ce)&&(Y!==ee&&(t.activeTexture(ee),Y=ee),t.bindTexture(I,ce||me[I]),ge.type=I,ge.texture=ce)}function b(){const I=Z[Y];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){We.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function be(I){W.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function Ce(I,ce){let ee=u.get(ce);ee===void 0&&(ee=new WeakMap,u.set(ce,ee));let ge=ee.get(I);ge===void 0&&(ge=t.getUniformBlockIndex(ce,I.name),ee.set(I,ge))}function oe(I,ce){const ge=u.get(ce).get(I);l.get(ce)!==ge&&(t.uniformBlockBinding(ce,ge,I.__bindingPointIndex),l.set(ce,ge))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,Z={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,c=null,v=null,x=null,y=null,R=null,w=null,A=new He(0,0,0),C=0,E=!1,S=null,P=null,z=null,O=null,k=null,We.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Te,bindFramebuffer:qe,drawBuffers:Pe,useProgram:ft,setBlending:L,setMaterial:Xt,setFlipSided:Ke,setCullFace:rt,setLineWidth:ye,setPolygonOffset:Xe,setScissorTest:Ae,activeTexture:Oe,bindTexture:Et,unbindTexture:b,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Ee,texImage3D:J,updateUBOMapping:Ce,uniformBlockBinding:oe,texStorage2D:ue,texStorage3D:xe,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:de,viewport:be,reset:Ie}}function $w(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ne,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Ul("canvas")}function _(b,M,B){let j=1;const Q=Et(b);if((Q.width>B||Q.height>B)&&(j=B/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(j*Q.width),Me=Math.floor(j*Q.height);d===void 0&&(d=g(G,Me));const ue=M?g(G,Me):d;return ue.width=G,ue.height=Me,ue.getContext("2d").drawImage(b,0,0,G,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+Me+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function c(b){t.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(b,M,B,j,Q=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=M;if(M===t.RED&&(B===t.FLOAT&&(G=t.R32F),B===t.HALF_FLOAT&&(G=t.R16F),B===t.UNSIGNED_BYTE&&(G=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(G=t.R8UI),B===t.UNSIGNED_SHORT&&(G=t.R16UI),B===t.UNSIGNED_INT&&(G=t.R32UI),B===t.BYTE&&(G=t.R8I),B===t.SHORT&&(G=t.R16I),B===t.INT&&(G=t.R32I)),M===t.RG&&(B===t.FLOAT&&(G=t.RG32F),B===t.HALF_FLOAT&&(G=t.RG16F),B===t.UNSIGNED_BYTE&&(G=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(G=t.RG8UI),B===t.UNSIGNED_SHORT&&(G=t.RG16UI),B===t.UNSIGNED_INT&&(G=t.RG32UI),B===t.BYTE&&(G=t.RG8I),B===t.SHORT&&(G=t.RG16I),B===t.INT&&(G=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(G=t.RGB8UI),B===t.UNSIGNED_SHORT&&(G=t.RGB16UI),B===t.UNSIGNED_INT&&(G=t.RGB32UI),B===t.BYTE&&(G=t.RGB8I),B===t.SHORT&&(G=t.RGB16I),B===t.INT&&(G=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),B===t.UNSIGNED_INT&&(G=t.RGBA32UI),B===t.BYTE&&(G=t.RGBA8I),B===t.SHORT&&(G=t.RGBA16I),B===t.INT&&(G=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),M===t.RGBA){const Me=Q?Dl:je.getTransfer(j);B===t.FLOAT&&(G=t.RGBA32F),B===t.HALF_FLOAT&&(G=t.RGBA16F),B===t.UNSIGNED_BYTE&&(G=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(b,M){let B;return b?M===null||M===Cr||M===ko?B=t.DEPTH24_STENCIL8:M===mi?B=t.DEPTH32F_STENCIL8:M===zo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Cr||M===ko?B=t.DEPTH_COMPONENT24:M===mi?B=t.DEPTH_COMPONENT32F:M===zo&&(B=t.DEPTH_COMPONENT16),B}function R(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Wn&&b.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){const M=b.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&h.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),S(M)}function C(b){const M=i.get(b);if(M.__webglInit===void 0)return;const B=b.source,j=f.get(B);if(j){const Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(b),Object.keys(j).length===0&&f.delete(B)}i.remove(b)}function E(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const B=b.source,j=f.get(B);delete j[M.__cacheKey],o.memory.textures--}function S(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=b.textures;for(let j=0,Q=B.length;j<Q;j++){const G=i.get(B[j]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(B[j])}i.remove(b)}let P=0;function z(){P=0}function O(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function k(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function q(b,M){const B=i.get(b);if(b.isVideoTexture&&Ae(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(B,b,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function X(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){me(B,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function $(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){me(B,b,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function D(b,M){const B=i.get(b);if(b.version>0&&B.__version!==b.version){le(B,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const Y={[Sh]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[Mh]:t.MIRRORED_REPEAT},Z={[Wn]:t.NEAREST,[sS]:t.NEAREST_MIPMAP_NEAREST,[_a]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Du]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},se={[uS]:t.NEVER,[mS]:t.ALWAYS,[cS]:t.LESS,[M0]:t.LEQUAL,[hS]:t.EQUAL,[pS]:t.GEQUAL,[fS]:t.GREATER,[dS]:t.NOTEQUAL};function Se(b,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===Du||M.magFilter===_a||M.magFilter===yr||M.minFilter===Qn||M.minFilter===Du||M.minFilter===_a||M.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Y[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Y[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Y[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==_a&&M.minFilter!==yr||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function We(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const j=M.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const G=k(M);if(G!==b.__cacheKey){Q[G]===void 0&&(Q[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[G].usedTimes++;const Me=Q[b.__cacheKey];Me!==void 0&&(Q[b.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),b.__cacheKey=G,b.__webglTexture=Q[G].texture}return B}function W(b,M,B){return Math.floor(Math.floor(b/B)/M)}function re(b,M,B,j){const G=b.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,j,M.data);else{G.sort((J,de)=>J.start-de.start);let Me=0;for(let J=1;J<G.length;J++){const de=G[Me],be=G[J],Ce=de.start+de.count,oe=W(be.start,M.width,4),Ie=W(de.start,M.width,4);be.start<=Ce+1&&oe===Ie&&W(be.start+be.count-1,M.width,4)===oe?de.count=Math.max(de.count,be.start+be.count-de.start):(++Me,G[Me]=be)}G.length=Me+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),xe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let J=0,de=G.length;J<de;J++){const be=G[J],Ce=Math.floor(be.start/4),oe=Math.ceil(be.count/4),Ie=Ce%M.width,I=Math.floor(Ce/M.width),ce=oe,ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ie,I,ce,ee,B,j,M.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function me(b,M,B){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const Q=We(b,M),G=M.source;n.bindTexture(j,b.__webglTexture,t.TEXTURE0+B);const Me=i.get(G);if(G.version!==Me.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const ue=je.getPrimaries(je.workingColorSpace),xe=M.colorSpace===Fi?null:je.getPrimaries(M.colorSpace),Ee=M.colorSpace===Fi||ue===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let J=_(M.image,!1,r.maxTextureSize);J=Oe(M,J);const de=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Ce=x(M.internalFormat,de,be,M.colorSpace,M.isVideoTexture);Se(j,M);let oe;const Ie=M.mipmaps,I=M.isVideoTexture!==!0,ce=Me.__version===void 0||Q===!0,ee=G.dataReady,ge=R(M,J);if(M.isDepthTexture)Ce=y(M.format===Vo,M.type),ce&&(I?n.texStorage2D(t.TEXTURE_2D,1,Ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ce,J.width,J.height,0,de,be,null));else if(M.isDataTexture)if(Ie.length>0){I&&ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,Ie[0].width,Ie[0].height);for(let ne=0,K=Ie.length;ne<K;ne++)oe=Ie[ne],I?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,oe.width,oe.height,de,be,oe.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,oe.width,oe.height,0,de,be,oe.data);M.generateMipmaps=!1}else I?(ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,J.width,J.height),ee&&re(M,J,de,be)):n.texImage2D(t.TEXTURE_2D,0,Ce,J.width,J.height,0,de,be,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ce,Ie[0].width,Ie[0].height,J.depth);for(let ne=0,K=Ie.length;ne<K;ne++)if(oe=Ie[ne],M.format!==Bn)if(de!==null)if(I){if(ee)if(M.layerUpdates.size>0){const _e=im(oe.width,oe.height,M.format,M.type);for(const Ue of M.layerUpdates){const ot=oe.data.subarray(Ue*_e/oe.data.BYTES_PER_ELEMENT,(Ue+1)*_e/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ue,oe.width,oe.height,1,de,ot)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,J.depth,de,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,oe.width,oe.height,J.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,J.depth,de,be,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ce,oe.width,oe.height,J.depth,0,de,be,oe.data)}else{I&&ce&&n.texStorage2D(t.TEXTURE_2D,ge,Ce,Ie[0].width,Ie[0].height);for(let ne=0,K=Ie.length;ne<K;ne++)oe=Ie[ne],M.format!==Bn?de!==null?I?ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,oe.width,oe.height,de,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Ce,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,oe.width,oe.height,de,be,oe.data):n.texImage2D(t.TEXTURE_2D,ne,Ce,oe.width,oe.height,0,de,be,oe.data)}else if(M.isDataArrayTexture)if(I){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Ce,J.width,J.height,J.depth),ee)if(M.layerUpdates.size>0){const ne=im(J.width,J.height,M.format,M.type);for(const K of M.layerUpdates){const _e=J.data.subarray(K*ne/J.data.BYTES_PER_ELEMENT,(K+1)*ne/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,de,be,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,be,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,J.width,J.height,J.depth,0,de,be,J.data);else if(M.isData3DTexture)I?(ce&&n.texStorage3D(t.TEXTURE_3D,ge,Ce,J.width,J.height,J.depth),ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,be,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,J.width,J.height,J.depth,0,de,be,J.data);else if(M.isFramebufferTexture){if(ce)if(I)n.texStorage2D(t.TEXTURE_2D,ge,Ce,J.width,J.height);else{let ne=J.width,K=J.height;for(let _e=0;_e<ge;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ce,ne,K,0,de,be,null),ne>>=1,K>>=1}}else if(Ie.length>0){if(I&&ce){const ne=Et(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ge,Ce,ne.width,ne.height)}for(let ne=0,K=Ie.length;ne<K;ne++)oe=Ie[ne],I?ee&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,be,oe):n.texImage2D(t.TEXTURE_2D,ne,Ce,de,be,oe);M.generateMipmaps=!1}else if(I){if(ce){const ne=Et(J);n.texStorage2D(t.TEXTURE_2D,ge,Ce,ne.width,ne.height)}ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,be,J)}else n.texImage2D(t.TEXTURE_2D,0,Ce,de,be,J);m(M)&&c(j),Me.__version=G.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function le(b,M,B){if(M.image.length!==6)return;const j=We(b,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+B);const G=i.get(Q);if(Q.version!==G.__version||j===!0){n.activeTexture(t.TEXTURE0+B);const Me=je.getPrimaries(je.workingColorSpace),ue=M.colorSpace===Fi?null:je.getPrimaries(M.colorSpace),xe=M.colorSpace===Fi||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ee&&!J?de[K]=_(M.image[K],!0,r.maxCubemapSize):de[K]=J?M.image[K].image:M.image[K],de[K]=Oe(M,de[K]);const be=de[0],Ce=s.convert(M.format,M.colorSpace),oe=s.convert(M.type),Ie=x(M.internalFormat,Ce,oe,M.colorSpace),I=M.isVideoTexture!==!0,ce=G.__version===void 0||j===!0,ee=Q.dataReady;let ge=R(M,be);Se(t.TEXTURE_CUBE_MAP,M);let ne;if(Ee){I&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ie,be.width,be.height);for(let K=0;K<6;K++){ne=de[K].mipmaps;for(let _e=0;_e<ne.length;_e++){const Ue=ne[_e];M.format!==Bn?Ce!==null?I?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,Ce,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Ie,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,0,0,Ue.width,Ue.height,Ce,oe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e,Ie,Ue.width,Ue.height,0,Ce,oe,Ue.data)}}}else{if(ne=M.mipmaps,I&&ce){ne.length>0&&ge++;const K=Et(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(J){I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Ce,oe,de[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,de[K].width,de[K].height,0,Ce,oe,de[K].data);for(let _e=0;_e<ne.length;_e++){const ot=ne[_e].image[K].image;I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,ot.width,ot.height,Ce,oe,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Ie,ot.width,ot.height,0,Ce,oe,ot.data)}}else{I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,oe,de[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,Ce,oe,de[K]);for(let _e=0;_e<ne.length;_e++){const Ue=ne[_e];I?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,0,0,Ce,oe,Ue.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,_e+1,Ie,Ce,oe,Ue.image[K])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),G.__version=Q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Te(b,M,B,j,Q,G){const Me=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),xe=x(B.internalFormat,Me,ue,B.colorSpace),Ee=i.get(M),J=i.get(B);if(J.__renderTarget=M,!Ee.__hasExternalTextures){const de=Math.max(1,M.width>>G),be=Math.max(1,M.height>>G);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,G,xe,de,be,M.depth,0,Me,ue,null):n.texImage2D(Q,G,xe,de,be,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Q,J.__webglTexture,0,ye(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Q,J.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(b,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,G=y(M.stencilBuffer,Q),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ye(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,G,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,G,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,G,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,b)}else{const j=M.textures;for(let Q=0;Q<j.length;Q++){const G=j[Q],Me=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),xe=x(G.internalFormat,Me,ue,G.colorSpace),Ee=ye(M);B&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,xe,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Q=j.__webglTexture,G=ye(M);if(M.depthTexture.format===Bo)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Vo)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ft(b){const M=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const j=b.texture.mipmaps;j&&j.length>0?Pe(M.__webglFramebuffer[0],b):Pe(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),qe(M.__webglDepthbuffer[j],b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,G)}}else{const j=b.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),qe(M.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(b,M,B){const j=i.get(b);M!==void 0&&Te(j.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ft(b)}function $e(b){const M=b.texture,B=i.get(b),j=i.get(M);b.addEventListener("dispose",A);const Q=b.textures,G=b.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,o.memory.textures++),G){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let xe=0;xe<M.mipmaps.length;xe++)B.__webglFramebuffer[ue][xe]=t.createFramebuffer()}else B.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)B.__webglFramebuffer[ue]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,xe=Q.length;ue<xe;ue++){const Ee=i.get(Q[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const xe=Q[ue];B.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const Ee=s.convert(xe.format,xe.colorSpace),J=s.convert(xe.type),de=x(xe.internalFormat,Ee,J,xe.colorSpace,b.isXRRenderTarget===!0),be=ye(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(B.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Te(B.__webglFramebuffer[ue][xe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else Te(B.__webglFramebuffer[ue],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,xe=Q.length;ue<xe;ue++){const Ee=Q[ue],J=i.get(Ee);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),Se(t.TEXTURE_2D,Ee),Te(B.__webglFramebuffer,b,Ee,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Ee)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,j.__webglTexture),Se(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Te(B.__webglFramebuffer[xe],b,M,t.COLOR_ATTACHMENT0,ue,xe);else Te(B.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,ue,0);m(M)&&c(ue),n.unbindTexture()}b.depthBuffer&&ft(b)}function L(b){const M=b.textures;for(let B=0,j=M.length;B<j;B++){const Q=M[B];if(m(Q)){const G=v(b),Me=i.get(Q).__webglTexture;n.bindTexture(G,Me),c(G),n.unbindTexture()}}}const Xt=[],Ke=[];function rt(b){if(b.samples>0){if(Xe(b)===!1){const M=b.textures,B=b.width,j=b.height;let Q=t.COLOR_BUFFER_BIT;const G=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(b),ue=M.length>1;if(ue)for(let Ee=0;Ee<M.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const J=i.get(M[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,B,j,0,0,B,j,Q,t.NEAREST),l===!0&&(Xt.length=0,Ke.length=0,Xt.push(t.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Xt.push(G),Ke.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<M.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);const J=i.get(M[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ye(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(b){const M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Oe(b,M){const B=b.colorSpace,j=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Is&&B!==Fi&&(je.getTransfer(B)===tt?(j!==Bn||Q!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=dt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Xe}function Kw(t,e){function n(i,r=Fi){let s;const o=je.getTransfer(r);if(i===ni)return t.UNSIGNED_BYTE;if(i===Kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===m0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===d0)return t.BYTE;if(i===p0)return t.SHORT;if(i===zo)return t.UNSIGNED_SHORT;if(i===$f)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===qo)return t.HALF_FLOAT;if(i===g0)return t.ALPHA;if(i===_0)return t.RGB;if(i===Bn)return t.RGBA;if(i===Bo)return t.DEPTH_COMPONENT;if(i===Vo)return t.DEPTH_STENCIL;if(i===v0)return t.RED;if(i===Qf)return t.RED_INTEGER;if(i===x0)return t.RG;if(i===Jf)return t.RG_INTEGER;if(i===ed)return t.RGBA_INTEGER;if(i===nl||i===il||i===rl||i===sl)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eh||i===Th||i===wh||i===Ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ch||i===bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rh||i===Ch)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ph||i===Lh||i===Dh||i===Ih||i===Uh||i===Nh||i===Fh||i===Oh||i===zh||i===kh||i===Bh||i===Vh||i===Hh||i===Gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ph)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===Wh||i===Xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ol)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===y0||i===Yh||i===jh||i===qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends Ir{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,g=null;const _=new Jw,m=n.getContextAttributes();let c=null,v=null;const x=[],y=[],R=new Ne;let w=null;const A=new mn;A.viewport=new it;const C=new mn;C.viewport=new it;const E=[A,C],S=new xM;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=x[W];return re===void 0&&(re=new Ju,x[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=x[W];return re===void 0&&(re=new Ju,x[W]=re),re.getGripSpace()},this.getHand=function(W){let re=x[W];return re===void 0&&(re=new Ju,x[W]=re),re.getHandSpace()};function O(W){const re=y.indexOf(W.inputSource);if(re===-1)return;const me=x[re];me!==void 0&&(me.update(W.inputSource,W.frame,u||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let W=0;W<x.length;W++){const re=y[W];re!==null&&(y[W]=null,x[W].disconnect(re))}P=null,z=null,_.reset(),e.setRenderTarget(c),p=null,f=null,d=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?Vo:Bo,le=m.stencil?ko:Cr);const qe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Pr(f.textureWidth,f.textureHeight,{format:Bn,type:ni,depthTexture:new F0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let re=0;re<W.removed.length;re++){const me=W.removed[re],le=y.indexOf(me);le>=0&&(y[le]=null,x[le].disconnect(me))}for(let re=0;re<W.added.length;re++){const me=W.added[re];let le=y.indexOf(me);if(le===-1){for(let qe=0;qe<x.length;qe++)if(qe>=y.length){y.push(me),le=qe;break}else if(y[qe]===null){y[qe]=me,le=qe;break}if(le===-1)break}const Te=x[le];Te&&Te.connect(me)}}const X=new U,$=new U;function D(W,re,me){X.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);const le=X.distanceTo($),Te=re.projectionMatrix.elements,qe=me.projectionMatrix.elements,Pe=Te[14]/(Te[10]-1),ft=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],$e=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],Xt=(qe[8]+1)/qe[0],Ke=Pe*L,rt=Pe*Xt,ye=le/(-L+Xt),Xe=ye*-L;if(re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Xe),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ae=Pe+ye,Oe=ft+ye,Et=Ke-Xe,b=rt+(le-Xe),M=dt*ft/Oe*Ae,B=$e*ft/Oe*Ae;W.projectionMatrix.makePerspective(Et,b,M,B,Ae,Oe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let re=W.near,me=W.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(me=_.depthFar)),S.near=C.near=A.near=re,S.far=C.far=A.far=me,(P!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far),A.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;const le=W.parent,Te=S.cameras;Y(S,le);for(let qe=0;qe<Te.length;qe++)Y(Te[qe],le);Te.length===2?D(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),Z(W,S,le)};function Z(W,re,me){me===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ho*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let se=null;function Se(W,re){if(h=re.getViewerPose(u||o),g=re,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;me.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Pe=0;Pe<me.length;Pe++){const ft=me[Pe];let dt=null;if(p!==null)dt=p.getViewport(ft);else{const L=d.getViewSubImage(f,ft);dt=L.viewport,Pe===0&&(e.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(v))}let $e=E[Pe];$e===void 0&&($e=new mn,$e.layers.enable(Pe),$e.viewport=new it,E[Pe]=$e),$e.matrix.fromArray(ft.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ft.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(dt.x,dt.y,dt.width,dt.height),Pe===0&&(S.matrix.copy($e.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push($e)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Pe=d.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let me=0;me<x.length;me++){const le=y[me],Te=x[me];le!==null&&Te!==void 0&&Te.update(le,re,u||o)}se&&se(W,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const We=new k0;We.setAnimationLoop(Se),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const cr=new Qi,tA=new ut;function nA(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,L0(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,x,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),h(m,c)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(s(m,c),g(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),_(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,x):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===an&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===an&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,cr.copy(y),cr.x*=-1,cr.y*=-1,cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(cr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,x){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=x*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function _(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function h(v){const x=d();v.__bindingPointIndex=x;const y=t.createBuffer(),R=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let w=0,A=y.length;w<A;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,S=C.length;E<S;E++){const P=C[E];if(p(P,w,E,R)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<O.length;q++){const X=O[q],$=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,z+k,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,y,R){const w=v.value,A=x+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const C=R[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const R=16;for(let A=0,C=x.length;A<C;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,P=E.length;S<P;S++){const z=E[S],O=Array.isArray(z.value)?z.value:[z.value];for(let k=0,q=O.length;k<q;k++){const X=O[k],$=_(X),D=y%R,Y=D%$.boundary,Z=D+Y;y+=Y,Z!==0&&R-Z<$.storage&&(y+=R-Z),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=$.storage}}}const w=y%R;return w>0&&(y+=R-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class rA{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,c=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=pn;let w=0,A=0,C=null,E=-1,S=null;const P=new it,z=new it;let O=null;const k=new He(0);let q=0,X=n.width,$=n.height,D=1,Y=null,Z=null;const se=new it(0,0,X,$),Se=new it(0,0,X,$);let We=!1;const W=new id;let re=!1,me=!1;const le=new ut,Te=new ut,qe=new U,Pe=new it,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function $e(){return C===null?D:1}let L=i;function Xt(T,N){return n.getContext(T,N)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",K,!1),L===null){const N="webgl2";if(L=Xt(N,T),L===null)throw Xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ke,rt,ye,Xe,Ae,Oe,Et,b,M,B,j,Q,G,Me,ue,xe,Ee,J,de,be,Ce,oe,Ie,I;function ce(){Ke=new pT(L),Ke.init(),oe=new Kw(L,Ke),rt=new aT(L,Ke,e,oe),ye=new qw(L,Ke),rt.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Xe=new _T(L),Ae=new Nw,Oe=new $w(L,Ke,ye,Ae,rt,oe,Xe),Et=new uT(y),b=new dT(y),M=new EM(L),Ie=new sT(L,M),B=new mT(L,M,Xe,Ie),j=new xT(L,B,M,Xe),de=new vT(L,rt,Oe),xe=new lT(Ae),Q=new Uw(y,Et,b,Ke,rt,Ie,xe),G=new nA(y,Ae),Me=new Ow,ue=new Gw(Ke),J=new rT(y,Et,b,ye,j,p,l),Ee=new Yw(y,j,rt),I=new iA(L,Xe,rt,ye),be=new oT(L,Ke,Xe),Ce=new gT(L,Ke,Xe),Xe.programs=Q.programs,y.capabilities=rt,y.extensions=Ke,y.properties=Ae,y.renderLists=Me,y.shadowMap=Ee,y.state=ye,y.info=Xe}ce();const ee=new eA(y,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(X,$,!1))},this.getSize=function(T){return T.set(X,$)},this.setSize=function(T,N,V=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,$=N,n.width=Math.floor(T*D),n.height=Math.floor(N*D),V===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*D,$*D).floor()},this.setDrawingBufferSize=function(T,N,V){X=T,$=N,D=V,n.width=Math.floor(T*V),n.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,N,V,H){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,N,V,H),ye.viewport(P.copy(se).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,N,V,H){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,N,V,H),ye.scissor(z.copy(Se).multiplyScalar(D).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){ye.setScissorTest(We=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,V=!0){let H=0;if(T){let F=!1;if(C!==null){const ie=C.texture.format;F=ie===ed||ie===Jf||ie===Qf}if(F){const ie=C.texture.type,he=ie===ni||ie===Cr||ie===zo||ie===ko||ie===Kf||ie===Zf,ve=J.getClearColor(),pe=J.getClearAlpha(),Le=ve.r,De=ve.g,we=ve.b;he?(g[0]=Le,g[1]=De,g[2]=we,g[3]=pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Le,_[1]=De,_[2]=we,_[3]=pe,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",K,!1),J.dispose(),Me.dispose(),ue.dispose(),Ae.dispose(),Et.dispose(),b.dispose(),j.dispose(),Ie.dispose(),I.dispose(),Q.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ld),ee.removeEventListener("sessionend",ud),ir.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=Xe.autoReset,N=Ee.enabled,V=Ee.autoUpdate,H=Ee.needsUpdate,F=Ee.type;ce(),Xe.autoReset=T,Ee.enabled=N,Ee.autoUpdate=V,Ee.needsUpdate=H,Ee.type=F}function K(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const N=T.target;N.removeEventListener("dispose",_e),Ue(N)}function Ue(T){ot(T),Ae.remove(T)}function ot(T){const N=Ae.get(T).programs;N!==void 0&&(N.forEach(function(V){Q.releaseProgram(V)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,H,F,ie){N===null&&(N=ft);const he=F.isMesh&&F.matrixWorld.determinant()<0,ve=$0(T,N,V,H,F);ye.setMaterial(H,he);let pe=V.index,Le=1;if(H.wireframe===!0){if(pe=B.getWireframeAttribute(V),pe===void 0)return;Le=2}const De=V.drawRange,we=V.attributes.position;let Ve=De.start*Le,Je=(De.start+De.count)*Le;ie!==null&&(Ve=Math.max(Ve,ie.start*Le),Je=Math.min(Je,(ie.start+ie.count)*Le)),pe!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,pe.count)):we!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,we.count));const pt=Je-Ve;if(pt<0||pt===1/0)return;Ie.setup(F,H,ve,V,pe);let vt,Ye=be;if(pe!==null&&(vt=M.get(pe),Ye=Ce,Ye.setIndex(vt)),F.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*$e()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(F.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*$e()),F.isLineSegments?Ye.setMode(L.LINES):F.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else F.isPoints?Ye.setMode(L.POINTS):F.isSprite&&Ye.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Re=F._multiDrawStarts,Ut=F._multiDrawCounts,Ze=F._multiDrawCount,Dn=pe?M.get(pe).bytesPerElement:1,Nr=Ae.get(H).currentProgram.getUniforms();for(let un=0;un<Ze;un++)Nr.setValue(L,"_gl_DrawID",un),Ye.render(Re[un]/Dn,Ut[un])}else if(F.isInstancedMesh)Ye.renderInstances(Ve,pt,F.count);else if(V.isInstancedBufferGeometry){const Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ut=Math.min(V.instanceCount,Re);Ye.renderInstances(Ve,pt,Ut)}else Ye.render(Ve,pt)};function Qe(T,N,V){T.transparent===!0&&T.side===fi&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Jo(T,N,V),T.side=Zi,T.needsUpdate=!0,Jo(T,N,V),T.side=fi):Jo(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),c=ue.get(V),c.init(N),x.push(c),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),c.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const ve=ie[he];Qe(ve,V,F),H.add(ve)}else Qe(ie,V,F),H.add(ie)}),c=x.pop(),H},this.compileAsync=function(T,N,V=null){const H=this.compile(T,N,V);return new Promise(F=>{function ie(){if(H.forEach(function(he){Ae.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){F(T);return}setTimeout(ie,10)}Ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ln=null;function ii(T){Ln&&Ln(T)}function ld(){ir.stop()}function ud(){ir.start()}const ir=new k0;ir.setAnimationLoop(ii),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(T){Ln=T,ee.setAnimationLoop(T),T===null?ir.stop():ir.start()},ee.addEventListener("sessionstart",ld),ee.addEventListener("sessionend",ud),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,C),c=ue.get(T,x.length),c.init(N),x.push(c),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Te),me=this.localClippingEnabled,re=xe.init(this.clippingPlanes,me),m=Me.get(T,v.length),m.init(),v.push(m),ee.enabled===!0&&ee.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&ru(ie,N,-1/0,y.sortObjects)}ru(T,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Y,Z),dt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,dt&&J.addToRenderList(m,T),this.info.render.frame++,re===!0&&xe.beginShadows();const V=c.state.shadowsArray;Ee.render(V,T,N),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(c.setupLights(),N.isArrayCamera){const ie=N.cameras;if(F.length>0)for(let he=0,ve=ie.length;he<ve;he++){const pe=ie[he];hd(H,F,T,pe)}dt&&J.render(T);for(let he=0,ve=ie.length;he<ve;he++){const pe=ie[he];cd(m,T,pe,pe.viewport)}}else F.length>0&&hd(H,F,T,N),dt&&J.render(T),cd(m,T,N);C!==null&&A===0&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,N),Ie.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(c=x[x.length-1],re===!0&&xe.setGlobalState(y.clippingPlanes,c.state.camera)):c=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ru(T,N,V,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)c.pushLight(T),T.castShadow&&c.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){H&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const he=j.update(T),ve=T.material;ve.visible&&m.push(T,he,ve,V,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const he=j.update(T),ve=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Pe.copy(he.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(ve)){const pe=he.groups;for(let Le=0,De=pe.length;Le<De;Le++){const we=pe[Le],Ve=ve[we.materialIndex];Ve&&Ve.visible&&m.push(T,he,Ve,V,Pe.z,we)}}else ve.visible&&m.push(T,he,ve,V,Pe.z,null)}}const ie=T.children;for(let he=0,ve=ie.length;he<ve;he++)ru(ie[he],N,V,H)}function cd(T,N,V,H){const F=T.opaque,ie=T.transmissive,he=T.transparent;c.setupLightsView(V),re===!0&&xe.setGlobalState(y.clippingPlanes,V),H&&ye.viewport(P.copy(H)),F.length>0&&Qo(F,N,V),ie.length>0&&Qo(ie,N,V),he.length>0&&Qo(he,N,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function hd(T,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[H.id]===void 0&&(c.state.transmissionRenderTarget[H.id]=new Pr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?qo:ni,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ie=c.state.transmissionRenderTarget[H.id],he=H.viewport||P;ie.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const ve=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(k),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),dt&&J.render(V);const pe=y.toneMapping;y.toneMapping=qi;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),c.setupLightsView(H),re===!0&&xe.setGlobalState(y.clippingPlanes,H),Qo(T,V,H),Oe.updateMultisampleRenderTarget(ie),Oe.updateRenderTargetMipmap(ie),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let we=0,Ve=N.length;we<Ve;we++){const Je=N[we],pt=Je.object,vt=Je.geometry,Ye=Je.material,Re=Je.group;if(Ye.side===fi&&pt.layers.test(H.layers)){const Ut=Ye.side;Ye.side=an,Ye.needsUpdate=!0,fd(pt,V,H,vt,Ye,Re),Ye.side=Ut,Ye.needsUpdate=!0,De=!0}}De===!0&&(Oe.updateMultisampleRenderTarget(ie),Oe.updateRenderTargetMipmap(ie))}y.setRenderTarget(ve),y.setClearColor(k,q),Le!==void 0&&(H.viewport=Le),y.toneMapping=pe}function Qo(T,N,V){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ie=T.length;F<ie;F++){const he=T[F],ve=he.object,pe=he.geometry,Le=he.group;let De=he.material;De.allowOverride===!0&&H!==null&&(De=H),ve.layers.test(V.layers)&&fd(ve,N,V,pe,De,Le)}}function fd(T,N,V,H,F,ie){T.onBeforeRender(y,N,V,H,F,ie),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,N,V,H,T,ie),F.transparent===!0&&F.side===fi&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,y.renderBufferDirect(V,N,H,F,T,ie),F.side=Zi,F.needsUpdate=!0,y.renderBufferDirect(V,N,H,F,T,ie),F.side=fi):y.renderBufferDirect(V,N,H,F,T,ie),T.onAfterRender(y,N,V,H,F,ie)}function Jo(T,N,V){N.isScene!==!0&&(N=ft);const H=Ae.get(T),F=c.state.lights,ie=c.state.shadowsArray,he=F.state.version,ve=Q.getParameters(T,F.state,ie,N,V),pe=Q.getProgramCacheKey(ve);let Le=H.programs;H.environment=T.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(T.isMeshStandardMaterial?b:Et).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",_e),Le=new Map,H.programs=Le);let De=Le.get(pe);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===he)return pd(T,ve),De}else ve.uniforms=Q.getUniforms(T),T.onBeforeCompile(ve,y),De=Q.acquireProgram(ve,pe),Le.set(pe,De),H.uniforms=ve.uniforms;const we=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=xe.uniform),pd(T,ve),H.needsLights=Z0(T),H.lightsStateVersion=he,H.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=De,H.uniformsList=null,De}function dd(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=al.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function pd(T,N){const V=Ae.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function $0(T,N,V,H,F){N.isScene!==!0&&(N=ft),Oe.resetTextureUnits();const ie=N.fog,he=H.isMeshStandardMaterial?N.environment:null,ve=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Is,pe=(H.isMeshStandardMaterial?b:Et).get(H.envMap||he),Le=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!V.morphAttributes.position,Ve=!!V.morphAttributes.normal,Je=!!V.morphAttributes.color;let pt=qi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=y.toneMapping);const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ye=vt!==void 0?vt.length:0,Re=Ae.get(H),Ut=c.state.lights;if(re===!0&&(me===!0||T!==S)){const Yt=T===S&&H.id===E;xe.setState(H,T,Yt)}let Ze=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ut.state.version||Re.outputColorSpace!==ve||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==pe||H.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==xe.numPlanes||Re.numIntersection!==xe.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==De||Re.morphTargets!==we||Re.morphNormals!==Ve||Re.morphColors!==Je||Re.toneMapping!==pt||Re.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,Re.__version=H.version);let Dn=Re.currentProgram;Ze===!0&&(Dn=Jo(H,N,F));let Nr=!1,un=!1,Bs=!1;const ct=Dn.getUniforms(),Sn=Re.uniforms;if(ye.useProgram(Dn.program)&&(Nr=!0,un=!0,Bs=!0),H.id!==E&&(E=H.id,un=!0),Nr||S!==T){ye.buffers.depth.getReversed()?(le.copy(T.projectionMatrix),US(le),NS(le),ct.setValue(L,"projectionMatrix",le)):ct.setValue(L,"projectionMatrix",T.projectionMatrix),ct.setValue(L,"viewMatrix",T.matrixWorldInverse);const Jt=ct.map.cameraPosition;Jt!==void 0&&Jt.setValue(L,qe.setFromMatrixPosition(T.matrixWorld)),rt.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,un=!0,Bs=!0)}if(F.isSkinnedMesh){ct.setOptional(L,F,"bindMatrix"),ct.setOptional(L,F,"bindMatrixInverse");const Yt=F.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),ct.setValue(L,"boneTexture",Yt.boneTexture,Oe))}F.isBatchedMesh&&(ct.setOptional(L,F,"batchingTexture"),ct.setValue(L,"batchingTexture",F._matricesTexture,Oe),ct.setOptional(L,F,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",F._indirectTexture,Oe),ct.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",F._colorsTexture,Oe));const Mn=V.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&de.update(F,V,Dn),(un||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,ct.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sn.envMap.value=pe,Sn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),un&&(ct.setValue(L,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&K0(Sn,Bs),ie&&H.fog===!0&&G.refreshFogUniforms(Sn,ie),G.refreshMaterialUniforms(Sn,H,D,$,c.state.transmissionRenderTarget[T.id]),al.upload(L,dd(Re),Sn,Oe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(al.upload(L,dd(Re),Sn,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(L,"center",F.center),ct.setValue(L,"modelViewMatrix",F.modelViewMatrix),ct.setValue(L,"normalMatrix",F.normalMatrix),ct.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let Jt=0,su=Yt.length;Jt<su;Jt++){const rr=Yt[Jt];I.update(rr,Dn),I.bind(rr,Dn)}}return Dn}function K0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Z0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,V){const H=Ae.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ae.get(T.texture).__webglTexture=N,Ae.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const V=Ae.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Q0=L.createFramebuffer();this.setRenderTarget=function(T,N=0,V=0){C=T,w=N,A=V;let H=!0,F=null,ie=!1,he=!1;if(T){const pe=Ae.get(T);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(pe.__hasExternalTextures)Oe.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const we=T.depthTexture;if(pe.__boundDepthTexture!==we){if(we!==null&&Ae.has(we)&&(T.width!==we.image.width||T.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const De=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[N])?F=De[N][V]:F=De[N],ie=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?F=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[V]:F=De,P.copy(T.viewport),z.copy(T.scissor),O=T.scissorTest}else P.copy(se).multiplyScalar(D).floor(),z.copy(Se).multiplyScalar(D).floor(),O=We;if(V!==0&&(F=Q0),ye.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&ye.drawBuffers(T,F),ye.viewport(P),ye.scissor(z),ye.setScissorTest(O),ie){const pe=Ae.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,V)}else if(he){const pe=Ae.get(T.texture),Le=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,V,Le)}else if(T!==null&&V!==0){const pe=Ae.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(T,N,V,H,F,ie,he,ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){ye.bindFramebuffer(L.FRAMEBUFFER,pe);try{const Le=T.textures[ve],De=Le.format,we=Le.type;if(!rt.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&V>=0&&V<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(N,V,H,F,oe.convert(De),oe.convert(we),ie))}finally{const Le=C!==null?Ae.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,N,V,H,F,ie,he,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(N>=0&&N<=T.width-H&&V>=0&&V<=T.height-F){ye.bindFramebuffer(L.FRAMEBUFFER,pe);const Le=T.textures[ve],De=Le.format,we=Le.type;if(!rt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),L.readPixels(N,V,H,F,oe.convert(De),oe.convert(we),0);const Je=C!==null?Ae.get(C).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Je);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await IS(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Ve),L.deleteSync(pt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,V=0){const H=Math.pow(2,-V),F=Math.floor(T.image.width*H),ie=Math.floor(T.image.height*H),he=N!==null?N.x:0,ve=N!==null?N.y:0;Oe.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,he,ve,F,ie),ye.unbindTexture()};const J0=L.createFramebuffer(),ev=L.createFramebuffer();this.copyTextureToTexture=function(T,N,V=null,H=null,F=0,ie=null){ie===null&&(F!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let he,ve,pe,Le,De,we,Ve,Je,pt;const vt=T.isCompressedTexture?T.mipmaps[ie]:T.image;if(V!==null)he=V.max.x-V.min.x,ve=V.max.y-V.min.y,pe=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,De=V.min.y,we=V.isBox3?V.min.z:0;else{const Mn=Math.pow(2,-F);he=Math.floor(vt.width*Mn),ve=Math.floor(vt.height*Mn),T.isDataArrayTexture?pe=vt.depth:T.isData3DTexture?pe=Math.floor(vt.depth*Mn):pe=1,Le=0,De=0,we=0}H!==null?(Ve=H.x,Je=H.y,pt=H.z):(Ve=0,Je=0,pt=0);const Ye=oe.convert(N.format),Re=oe.convert(N.type);let Ut;N.isData3DTexture?(Oe.setTexture3D(N,0),Ut=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),Ut=L.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),Dn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nr=L.getParameter(L.UNPACK_SKIP_PIXELS),un=L.getParameter(L.UNPACK_SKIP_ROWS),Bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we);const ct=T.isDataArrayTexture||T.isData3DTexture,Sn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const Mn=Ae.get(T),Yt=Ae.get(N),Jt=Ae.get(Mn.__renderTarget),su=Ae.get(Yt.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let rr=0;rr<pe;rr++)ct&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,F,we+rr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,ie,pt+rr)),L.blitFramebuffer(Le,De,he,ve,Ve,Je,he,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||Ae.has(T)){const Mn=Ae.get(T),Yt=Ae.get(N);ye.bindFramebuffer(L.READ_FRAMEBUFFER,J0),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,ev);for(let Jt=0;Jt<pe;Jt++)ct?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mn.__webglTexture,F,we+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mn.__webglTexture,F),Sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,ie,pt+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,ie),F!==0?L.blitFramebuffer(Le,De,he,ve,Ve,Je,he,ve,L.COLOR_BUFFER_BIT,L.NEAREST):Sn?L.copyTexSubImage3D(Ut,ie,Ve,Je,pt+Jt,Le,De,he,ve):L.copyTexSubImage2D(Ut,ie,Ve,Je,Le,De,he,ve);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ut,ie,Ve,Je,pt,he,ve,pe,Ye,Re,vt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,ie,Ve,Je,pt,he,ve,pe,Ye,vt.data):L.texSubImage3D(Ut,ie,Ve,Je,pt,he,ve,pe,Ye,Re,vt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Ve,Je,he,ve,Ye,Re,vt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Ve,Je,vt.width,vt.height,Ye,vt.data):L.texSubImage2D(L.TEXTURE_2D,ie,Ve,Je,he,ve,Ye,Re,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nr),L.pixelStorei(L.UNPACK_SKIP_ROWS,un),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bs),ie===0&&N.generateMipmaps&&L.generateMipmap(Ut),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V=null,H=null,F=0){return Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,V,H,F)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const Cm={type:"change"},ad={type:"start"},W0={type:"end"},Ga=new tu,bm=new Ii,sA=Math.cos(70*fn.DEG2RAD),Tt=new U,en=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cc=1e-6;class oA extends SM{constructor(e,n=null){super(e,n),this.state=nt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new br,this._lastTargetPosition=new U,this._quat=new br().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nm,this._sphericalDelta=new nm,this._scale=1,this._panOffset=new U,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new U,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lA.bind(this),this._onPointerDown=aA.bind(this),this._onPointerUp=uA.bind(this),this._onContextMenu=gA.bind(this),this._onMouseWheel=fA.bind(this),this._onKeyDown=dA.bind(this),this._onTouchStart=pA.bind(this),this._onTouchMove=mA.bind(this),this._onMouseDown=cA.bind(this),this._onMouseMove=hA.bind(this),this._interceptControlDown=_A.bind(this),this._interceptControlUp=vA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cm),this.update(),this.state=nt.NONE}update(e=null){const n=this.object.position;Tt.copy(n).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new U(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<sA?this.object.lookAt(this.target):(bm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(bm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>cc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cc||this._lastTargetPosition.distanceToSquared(this.target)>cc?(this.dispatchEvent(Cm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Tt.setFromMatrixColumn(n,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,n){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(n,1):(Tt.setFromMatrixColumn(n,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function lA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function uA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=nt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=nt.DOLLY;break;case xs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}break;case xs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ad)}function hA(t){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function fA(t){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(t.preventDefault(),this.dispatchEvent(ad),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(W0))}function dA(t){this.enabled!==!1&&this._handleKeyDown(t)}function pA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=nt.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=nt.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ad)}function mA(t){switch(this._trackPointer(t),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=nt.NONE}}function gA(t){this.enabled!==!1&&t.preventDefault()}function _A(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pm=18e3,Lm=5,xA=4,yA=14,SA=18,MA=260;function EA(){const t=Ft.useRef(null),e=Ft.useRef(null),[n,i]=Ft.useState(!0);return Ft.useEffect(()=>{const r=t.current;if(!r)return;const s=new oM;s.background=new He(198928),s.fog=null;const o=new mn(62,r.clientWidth/r.clientHeight,.1,1200);o.position.set(0,0,120);const a=new rA({antialias:!0,powerPreference:"high-performance"});a.setSize(r.clientWidth,r.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=pn,r.appendChild(a.domElement);const l=new oA(o,a.domElement);e.current=l,l.enablePan=!1,l.enableZoom=!1,l.minDistance=SA,l.maxDistance=MA,l.enabled=!1,l.enableDamping=!0,l.dampingFactor=.05,l.rotateSpeed=.38,l.minPolarAngle=.05,l.maxPolarAngle=Math.PI-.05,l.target.set(0,0,0);const u=new gM(11981311,1.25,500);u.position.set(0,0,0),s.add(u);const h=new pM(7315455,198928,.28);s.add(h);const d=new vM(5214207,.35);d.position.set(75,40,-120),s.add(d);const f=new Jn(new rd(7.6,48,48),new hM({color:14018303,emissive:3892904,emissiveIntensity:.35}));f.position.copy(u.position),s.add(f),l.target.copy(f.position),l.update();const p=new Pn,g=new Float32Array(Pm*3);for(let E=0;E<Pm;E+=1)g[E*3]=fn.randFloatSpread(1600),g[E*3+1]=fn.randFloatSpread(1600),g[E*3+2]=fn.randFloatSpread(1600);p.setAttribute("position",new Xn(g,3));const _=new N0({color:12113919,size:1.12,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1}),m=new cM(p,_);s.add(m);const c=[],v=new U(0,1,0);let x=Lm;const y=()=>{const E=new U(fn.randFloatSpread(420),fn.randFloat(95,250),fn.randFloatSpread(420)),S=new U(fn.randFloat(-1.1,-.25),fn.randFloat(-.42,-.18),fn.randFloat(-.55,.55)).normalize(),P=fn.randFloat(20,32),z=new Pn().setFromPoints([new U(0,0,0),new U(0,P,0)]),O=new U0({color:16766973,transparent:!0,opacity:.85,depthWrite:!1,blending:uh}),k=new uM(z,O);k.position.copy(E),k.quaternion.setFromUnitVectors(v,S.clone().negate()),s.add(k),c.push({line:k,start:E,direction:S,speed:fn.randFloat(120,180),life:fn.randFloat(.55,1.05),age:0})},R=()=>{t.current&&(o.aspect=t.current.clientWidth/t.current.clientHeight,o.updateProjectionMatrix(),a.setSize(t.current.clientWidth,t.current.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)))};window.addEventListener("resize",R);let w=0;const A=new yM,C=()=>{w=requestAnimationFrame(C);const E=A.getDelta(),S=A.elapsedTime;if(m.rotation.y=S*.008,_.opacity=.9+Math.sin(S*.7)*.06,S>x){const P=Math.max(0,yA-c.length),z=Math.min(xA,P);for(let O=0;O<z;O+=1)y();x=S+Lm}for(let P=c.length-1;P>=0;P-=1){const z=c[P];z.age+=E;const O=z.age/z.life,k=z.speed*z.age;z.line.position.set(z.start.x+z.direction.x*k,z.start.y+z.direction.y*k,z.start.z+z.direction.z*k),z.line.material.opacity=Math.max(0,.9*(1-O*1.15)),O>=1&&(s.remove(z.line),z.line.geometry.dispose(),z.line.material.dispose(),c.splice(P,1))}l.update(),a.render(s,o)};return C(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",R),c.forEach(E=>{s.remove(E.line),E.line.geometry.dispose(),E.line.material.dispose()}),l.dispose(),e.current=null,p.dispose(),_.dispose(),a.dispose(),s.traverse(E=>{const S=E;S.geometry&&S.geometry.dispose(),Array.isArray(S.material)?S.material.forEach(P=>P.dispose()):S.material&&S.material.dispose()}),r.contains(a.domElement)&&r.removeChild(a.domElement)}},[]),Ft.useEffect(()=>{const r=e.current;if(!r)return;const s=!n;r.enabled=s,r.enableZoom=s},[n]),Lt.jsxs("main",{className:"page",children:[Lt.jsx("div",{className:"canvas-wrap is-visible",ref:t}),Lt.jsxs("section",{className:`world-card ${n?"":"world-card--hidden"}`,children:[Lt.jsx("h2",{children:"The GitSky"}),Lt.jsxs("div",{className:"world-card__actions",children:[Lt.jsx("button",{type:"button",children:"Login/Create"}),Lt.jsx("button",{className:"world-card__orbit",type:"button",onClick:()=>i(!1),children:"Orbit 🚀"})]})]}),Lt.jsx("button",{className:`world-card-toggle ${n?"":"world-card-toggle--visible"}`,type:"button","aria-label":"Open controls card",onClick:()=>i(!0),children:"˅"})]})}function yo(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function Zh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function TA(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function Dm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Im(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function wA(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function AA(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function hc(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function RA(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function CA(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function Um(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function bA(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function PA(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Qh(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function X0(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Nm(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2];return t[0]=r*l-s*a,t[1]=s*o-i*l,t[2]=i*a-r*o,t}function LA(t,e,n,i){let r=e[0],s=e[1],o=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=o+i*(n[2]-o),t}function DA(t,e,n,i,r){const s=Math.exp(-i*r);let o=e[0],a=e[1],l=e[2];return t[0]=n[0]+(o-n[0])*s,t[1]=n[1]+(a-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function IA(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/o,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/o,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/o,t}function UA(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[3]*i+n[7]*r+n[11]*s+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/o,t[1]=(n[1]*i+n[5]*r+n[9]*s)/o,t[2]=(n[2]*i+n[6]*r+n[10]*s)/o,t}function NA(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function FA(t,e,n){let i=e[0],r=e[1],s=e[2],o=n[0],a=n[1],l=n[2],u=n[3],h=a*s-l*r,d=l*i-o*s,f=o*r-a*i,p=a*f-l*d,g=l*h-o*f,_=o*d-a*h,m=u*2;return h*=m,d*=m,f*=m,p*=2,g*=2,_*=2,t[0]=i+h+p,t[1]=r+d+g,t[2]=s+f+_,t}const OA=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){Zh(t,n),Zh(e,i),Qh(t,t),Qh(e,e);let r=X0(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function zA(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class Vn extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(TA(this,e,n,i),this)}copy(e){return Zh(this,e),this}add(e,n){return n?Dm(this,e,n):Dm(this,this,e),this}sub(e,n){return n?Im(this,e,n):Im(this,this,e),this}multiply(e){return e.length?wA(this,this,e):hc(this,this,e),this}divide(e){return e.length?AA(this,this,e):hc(this,this,1/e),this}inverse(e=this){return PA(this,e),this}len(){return yo(this)}distance(e){return e?RA(this,e):yo(this)}squaredLen(){return Um(this)}squaredDistance(e){return e?CA(this,e):Um(this)}negate(e=this){return bA(this,e),this}cross(e,n){return n?Nm(this,e,n):Nm(this,this,e),this}scale(e){return hc(this,this,e),this}normalize(){return Qh(this,this),this}dot(e){return X0(this,e)}equals(e){return zA(this,e)}applyMatrix3(e){return NA(this,this,e),this}applyMatrix4(e){return IA(this,this,e),this}scaleRotateMatrix4(e){return UA(this,this,e),this}applyQuaternion(e){return FA(this,this,e),this}angle(e){return OA(this,e)}lerp(e,n){return LA(this,this,e,n),this}smoothLerp(e,n,i){return DA(this,this,e,n,i),this}clone(){return new Vn(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const Fm=new Vn;let kA=1,BA=1,Om=!1;class VA{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=kA++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=BA++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;r===35674&&(o=2),r===35675&&(o=3),r===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*4,u=o===1?0:o*4;for(let h=0;h<o;h++)this.gl.vertexAttribPointer(n+h,a,s.type,s.normalized,s.stride+l,s.offset+h*u),this.gl.enableVertexAttribArray(n+h),this.gl.renderer.vertexAttribDivisor(n+h,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:o})=>{const a=this.attributes[o];a.needsUpdate&&this.updateAttribute(a)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Om)return console.warn("No position buffer data found to compute bounds"),Om=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new Vn,max:new Vn,center:new Vn,scale:new Vn,radius:1/0});const r=this.bounds.min,s=this.bounds.max,o=this.bounds.center,a=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,u=n.length;l<u;l+=i){const h=n[l],d=n[l+1],f=n[l+2];r.x=Math.min(h,r.x),r.y=Math.min(d,r.y),r.z=Math.min(f,r.z),s.x=Math.max(h,s.x),s.y=Math.max(d,s.y),s.z=Math.max(f,s.z)}a.sub(s,r),o.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,o=n.length;s<o;s+=i)Fm.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(Fm));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let HA=1;const zm={};class GA{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:o=e.BACK,frontFace:a=e.CCW,depthTest:l=!0,depthWrite:u=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=HA++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=o,this.frontFace=a,this.depthTest=l,this.depthWrite=u,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${km(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${km(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let o=0;o<i;o++){let a=this.gl.getActiveUniform(this.program,o);this.uniformLocations.set(a,this.gl.getUniformLocation(this.program,a.name));const l=a.name.match(/(\w+)/g);a.uniformName=l[0],a.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const a=this.gl.getActiveAttrib(this.program,o),l=this.gl.getAttribLocation(this.program,a.name);l!==-1&&(r[l]=a.name,this.attributeLocations.set(a,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let o=this.uniforms[s.uniformName];for(const a of s.nameComponents){if(!o)break;if(a in o)o=o[a];else{if(Array.isArray(o.value))break;o=void 0;break}}if(!o)return Bm(`Active uniform ${s.name} has not been supplied`);if(o&&o.value===void 0)return Bm(`${s.name} uniform is missing a value parameter`);if(o.value.texture)return n=n+1,o.value.update(n),fc(this.gl,s.type,r,n);if(o.value.length&&o.value[0].texture){const a=[];return o.value.forEach(l=>{n=n+1,l.update(n),a.push(n)}),fc(this.gl,s.type,r,a)}fc(this.gl,s.type,r,o.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function fc(t,e,n,i){i=i.length?WA(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(XA(r,i))return;r.set?r.set(i):YA(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function km(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function WA(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=zm[i];r||(zm[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function XA(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function YA(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let dc=0;function Bm(t){dc>100||(console.warn(t),dc++,dc>100&&console.warn("More than 100 program warnings - stopping logs."))}const pc=new Vn;let jA=1;class qA{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:h=!1,powerPreference:d="default",autoClear:f=!0,webgl:p=2}={}){const g={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d};this.dpr=r,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=u,this.autoClear=f,this.id=jA++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(o=>{if(!o.visible)return!0;o.draw&&(i&&o.frustumCulled&&n&&!n.frustumIntersectsMesh(o)||s.push(o))}),r){const o=[],a=[],l=[];s.forEach(u=>{u.program.transparent?u.program.depthTest?a.push(u):l.push(u):o.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!n)&&(u.worldMatrix.getTranslation(pc),pc.applyMatrix4(n.projectionViewMatrix),u.zDepth=pc.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),l.sort(this.sortUI),s=o.concat(a,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:o=!0,clear:a}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(a||this.autoClear&&a!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:o,sort:s}).forEach(u=>{u.draw({camera:n})})}}function $A(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function KA(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function ZA(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s;return o>0&&(o=1/Math.sqrt(o)),t[0]=n*o,t[1]=i*o,t[2]=r*o,t[3]=s*o,t}function QA(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function JA(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function eR(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function Vm(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=n[0],l=n[1],u=n[2],h=n[3];return t[0]=i*h+o*a+r*u-s*l,t[1]=r*h+o*l+s*a-i*u,t[2]=s*h+o*u+i*l-r*a,t[3]=o*h-i*a-r*l-s*u,t}function tR(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+o*a,t[1]=r*l+s*a,t[2]=s*l-r*a,t[3]=o*l-i*a,t}function nR(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*a,t[1]=r*l+o*a,t[2]=s*l+i*a,t[3]=o*l-r*a,t}function iR(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],o=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*a,t[1]=r*l-i*a,t[2]=s*l+o*a,t[3]=o*l-s*a,t}function rR(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=e[3],l=n[0],u=n[1],h=n[2],d=n[3],f,p,g,_,m;return p=r*l+s*u+o*h+a*d,p<0&&(p=-p,l=-l,u=-u,h=-h,d=-d),1-p>1e-6?(f=Math.acos(p),g=Math.sin(f),_=Math.sin((1-i)*f)/g,m=Math.sin(i*f)/g):(_=1-i,m=i),t[0]=_*r+m*l,t[1]=_*s+m*u,t[2]=_*o+m*h,t[3]=_*a+m*d,t}function sR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n*n+i*i+r*r+s*s,a=o?1/o:0;return t[0]=-n*a,t[1]=-i*a,t[2]=-r*a,t[3]=s*a,t}function oR(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function aR(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,o=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[o*3+o]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+o]-e[o*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[o]=(e[o*3+r]+e[r*3+o])*i}return t}function lR(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),o=Math.cos(e[1]*.5),a=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="YXZ"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="ZXY"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l-i*s*a):n==="ZYX"?(t[0]=i*o*l-r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l+i*s*a):n==="YZX"?(t[0]=i*o*l+r*s*a,t[1]=r*s*l+i*o*a,t[2]=r*o*a-i*s*l,t[3]=r*o*l-i*s*a):n==="XZY"&&(t[0]=i*o*l-r*s*a,t[1]=r*s*l-i*o*a,t[2]=r*o*a+i*s*l,t[3]=r*o*l+i*s*a),t}const uR=$A,cR=KA,hR=QA,fR=ZA;class dR extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return JA(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(cR(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return tR(this._target,this._target,e),this.onChange(),this}rotateY(e){return nR(this._target,this._target,e),this.onChange(),this}rotateZ(e){return iR(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return sR(this._target,e),this.onChange(),this}conjugate(e=this._target){return oR(this._target,e),this.onChange(),this}copy(e){return uR(this._target,e),this.onChange(),this}normalize(e=this._target){return fR(this._target,e),this.onChange(),this}multiply(e,n){return n?Vm(this._target,e,n):Vm(this._target,this._target,e),this.onChange(),this}dot(e){return hR(this._target,e)}fromMatrix3(e){return aR(this._target,e),this.onChange(),this}fromEuler(e,n){return lR(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return eR(this._target,e,n),this.onChange(),this}slerp(e,n){return rR(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const pR=1e-6;function mR(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function gR(t,e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=u,t[9]=h,t[10]=d,t[11]=f,t[12]=p,t[13]=g,t[14]=_,t[15]=m,t}function _R(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function vR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],c=e[15],v=n*a-i*o,x=n*l-r*o,y=n*u-s*o,R=i*l-r*a,w=i*u-s*a,A=r*u-s*l,C=h*_-d*g,E=h*m-f*g,S=h*c-p*g,P=d*m-f*_,z=d*c-p*_,O=f*c-p*m,k=v*O-x*z+y*P+R*S-w*E+A*C;return k?(k=1/k,t[0]=(a*O-l*z+u*P)*k,t[1]=(r*z-i*O-s*P)*k,t[2]=(_*A-m*w+c*R)*k,t[3]=(f*w-d*A-p*R)*k,t[4]=(l*S-o*O-u*E)*k,t[5]=(n*O-r*S+s*E)*k,t[6]=(m*y-g*A-c*x)*k,t[7]=(h*A-f*y+p*x)*k,t[8]=(o*z-a*S+u*C)*k,t[9]=(i*S-n*z-s*C)*k,t[10]=(g*w-_*y+c*v)*k,t[11]=(d*y-h*w-p*v)*k,t[12]=(a*E-o*P-l*C)*k,t[13]=(n*P-i*E+r*C)*k,t[14]=(_*x-g*R-m*v)*k,t[15]=(h*R-d*x+f*v)*k,t):null}function Y0(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],a=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],g=t[13],_=t[14],m=t[15],c=e*o-n*s,v=e*a-i*s,x=e*l-r*s,y=n*a-i*o,R=n*l-r*o,w=i*l-r*a,A=u*g-h*p,C=u*_-d*p,E=u*m-f*p,S=h*_-d*g,P=h*m-f*g,z=d*m-f*_;return c*z-v*P+x*S+y*E-R*C+w*A}function Hm(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],f=e[9],p=e[10],g=e[11],_=e[12],m=e[13],c=e[14],v=e[15],x=n[0],y=n[1],R=n[2],w=n[3];return t[0]=x*i+y*a+R*d+w*_,t[1]=x*r+y*l+R*f+w*m,t[2]=x*s+y*u+R*p+w*c,t[3]=x*o+y*h+R*g+w*v,x=n[4],y=n[5],R=n[6],w=n[7],t[4]=x*i+y*a+R*d+w*_,t[5]=x*r+y*l+R*f+w*m,t[6]=x*s+y*u+R*p+w*c,t[7]=x*o+y*h+R*g+w*v,x=n[8],y=n[9],R=n[10],w=n[11],t[8]=x*i+y*a+R*d+w*_,t[9]=x*r+y*l+R*f+w*m,t[10]=x*s+y*u+R*p+w*c,t[11]=x*o+y*h+R*g+w*v,x=n[12],y=n[13],R=n[14],w=n[15],t[12]=x*i+y*a+R*d+w*_,t[13]=x*r+y*l+R*f+w*m,t[14]=x*s+y*u+R*p+w*c,t[15]=x*o+y*h+R*g+w*v,t}function xR(t,e,n){let i=n[0],r=n[1],s=n[2],o,a,l,u,h,d,f,p,g,_,m,c;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(o=e[0],a=e[1],l=e[2],u=e[3],h=e[4],d=e[5],f=e[6],p=e[7],g=e[8],_=e[9],m=e[10],c=e[11],t[0]=o,t[1]=a,t[2]=l,t[3]=u,t[4]=h,t[5]=d,t[6]=f,t[7]=p,t[8]=g,t[9]=_,t[10]=m,t[11]=c,t[12]=o*i+h*r+g*s+e[12],t[13]=a*i+d*r+_*s+e[13],t[14]=l*i+f*r+m*s+e[14],t[15]=u*i+p*r+c*s+e[15]),t}function yR(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function SR(t,e,n,i){let r=i[0],s=i[1],o=i[2],a=Math.hypot(r,s,o),l,u,h,d,f,p,g,_,m,c,v,x,y,R,w,A,C,E,S,P,z,O,k,q;return Math.abs(a)<pR?null:(a=1/a,r*=a,s*=a,o*=a,l=Math.sin(n),u=Math.cos(n),h=1-u,d=e[0],f=e[1],p=e[2],g=e[3],_=e[4],m=e[5],c=e[6],v=e[7],x=e[8],y=e[9],R=e[10],w=e[11],A=r*r*h+u,C=s*r*h+o*l,E=o*r*h-s*l,S=r*s*h-o*l,P=s*s*h+u,z=o*s*h+r*l,O=r*o*h+s*l,k=s*o*h-r*l,q=o*o*h+u,t[0]=d*A+_*C+x*E,t[1]=f*A+m*C+y*E,t[2]=p*A+c*C+R*E,t[3]=g*A+v*C+w*E,t[4]=d*S+_*P+x*z,t[5]=f*S+m*P+y*z,t[6]=p*S+c*P+R*z,t[7]=g*S+v*P+w*z,t[8]=d*O+_*k+x*q,t[9]=f*O+m*k+y*q,t[10]=p*O+c*k+R*q,t[11]=g*O+v*k+w*q,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function MR(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function j0(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],o=e[5],a=e[6],l=e[8],u=e[9],h=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,o,a),t[2]=Math.hypot(l,u,h),t}function ER(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],o=t[6],a=t[8],l=t[9],u=t[10];const h=e*e+n*n+i*i,d=r*r+s*s+o*o,f=a*a+l*l+u*u;return Math.sqrt(Math.max(h,d,f))}const q0=function(){const t=[1,1,1];return function(e,n){let i=t;j0(i,n);let r=1/i[0],s=1/i[1],o=1/i[2],a=n[0]*r,l=n[1]*s,u=n[2]*o,h=n[4]*r,d=n[5]*s,f=n[6]*o,p=n[8]*r,g=n[9]*s,_=n[10]*o,m=a+d+_,c=0;return m>0?(c=Math.sqrt(m+1)*2,e[3]=.25*c,e[0]=(f-g)/c,e[1]=(p-u)/c,e[2]=(l-h)/c):a>d&&a>_?(c=Math.sqrt(1+a-d-_)*2,e[3]=(f-g)/c,e[0]=.25*c,e[1]=(l+h)/c,e[2]=(p+u)/c):d>_?(c=Math.sqrt(1+d-a-_)*2,e[3]=(p-u)/c,e[0]=(l+h)/c,e[1]=.25*c,e[2]=(f+g)/c):(c=Math.sqrt(1+_-a-d)*2,e[3]=(l-h)/c,e[0]=(p+u)/c,e[1]=(f+g)/c,e[2]=.25*c),e}}();function TR(t,e,n,i){let r=yo([t[0],t[1],t[2]]);const s=yo([t[4],t[5],t[6]]),o=yo([t[8],t[9],t[10]]);Y0(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),u=1/r,h=1/s,d=1/o;l[0]*=u,l[1]*=u,l[2]*=u,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=d,l[9]*=d,l[10]*=d,q0(e,l),i[0]=r,i[1]=s,i[2]=o}function wR(t,e,n,i){const r=t,s=e[0],o=e[1],a=e[2],l=e[3],u=s+s,h=o+o,d=a+a,f=s*u,p=s*h,g=s*d,_=o*h,m=o*d,c=a*d,v=l*u,x=l*h,y=l*d,R=i[0],w=i[1],A=i[2];return r[0]=(1-(_+c))*R,r[1]=(p+y)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+c))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(m-v)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function AR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,u=n*o,h=i*o,d=i*a,f=r*o,p=r*a,g=r*l,_=s*o,m=s*a,c=s*l;return t[0]=1-d-g,t[1]=h+c,t[2]=f-m,t[3]=0,t[4]=h-c,t[5]=1-u-g,t[6]=p+_,t[7]=0,t[8]=f+m,t[9]=p-_,t[10]=1-u-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function RR(t,e,n,i,r){let s=1/Math.tan(e/2),o=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*o,t[15]=0,t}function CR(t,e,n,i,r,s,o){let a=1/(e-n),l=1/(i-r),u=1/(s-o);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+n)*a,t[13]=(r+i)*l,t[14]=(o+s)*u,t[15]=1,t}function bR(t,e,n,i){let r=e[0],s=e[1],o=e[2],a=i[0],l=i[1],u=i[2],h=r-n[0],d=s-n[1],f=o-n[2],p=h*h+d*d+f*f;p===0?f=1:(p=1/Math.sqrt(p),h*=p,d*=p,f*=p);let g=l*f-u*d,_=u*h-a*f,m=a*d-l*h;return p=g*g+_*_+m*m,p===0&&(u?a+=1e-6:l?u+=1e-6:l+=1e-6,g=l*f-u*d,_=u*h-a*f,m=a*d-l*h,p=g*g+_*_+m*m),p=1/Math.sqrt(p),g*=p,_*=p,m*=p,t[0]=g,t[1]=_,t[2]=m,t[3]=0,t[4]=d*m-f*_,t[5]=f*g-h*m,t[6]=h*_-d*g,t[7]=0,t[8]=h,t[9]=d,t[10]=f,t[11]=0,t[12]=r,t[13]=s,t[14]=o,t[15]=1,t}function Gm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function Wm(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function PR(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Ol extends Array{constructor(e=1,n=0,i=0,r=0,s=0,o=1,a=0,l=0,u=0,h=0,d=1,f=0,p=0,g=0,_=0,m=1){return super(e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m){return e.length?this.copy(e):(gR(this,e,n,i,r,s,o,a,l,u,h,d,f,p,g,_,m),this)}translate(e,n=this){return xR(this,n,e),this}rotate(e,n,i=this){return SR(this,i,e,n),this}scale(e,n=this){return yR(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?Gm(this,e,n):Gm(this,this,e),this}sub(e,n){return n?Wm(this,e,n):Wm(this,this,e),this}multiply(e,n){return e.length?n?Hm(this,e,n):Hm(this,this,e):PR(this,this,e),this}identity(){return _R(this),this}copy(e){return mR(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return RR(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:o}){return CR(this,e,n,i,r,s,o),this}fromQuaternion(e){return AR(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return vR(this,e),this}compose(e,n,i){return wR(this,e,n,i),this}decompose(e,n,i){return TR(this,e,n,i),this}getRotation(e){return q0(e,this),this}getTranslation(e){return MR(e,this),this}getScaling(e){return j0(e,this),this}getMaxScaleOnAxis(){return ER(this)}lookAt(e,n,i){return bR(this,e,n,i),this}determinant(){return Y0(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function LR(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Xm=new Ol;class DR extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(o,a){const l=Reflect.set(...arguments);return l&&s.includes(a)&&o.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return LR(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return Xm.fromQuaternion(e),this._target.fromRotationMatrix(Xm,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}}class IR{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ol,this.worldMatrix=new Ol,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Vn,this.quaternion=new dR,this.scale=new Vn(1),this.rotation=new DR,this.up=new Vn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function UR(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function NR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=n+n,a=i+i,l=r+r,u=n*o,h=i*o,d=i*a,f=r*o,p=r*a,g=r*l,_=s*o,m=s*a,c=s*l;return t[0]=1-d-g,t[3]=h-c,t[6]=f+m,t[1]=h+c,t[4]=1-u-g,t[7]=p-_,t[2]=f-m,t[5]=p+_,t[8]=1-u-d,t}function FR(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function OR(t,e,n,i,r,s,o,a,l,u){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=l,t[8]=u,t}function zR(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function kR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=h*o-a*u,f=-h*s+a*l,p=u*s-o*l,g=n*d+i*f+r*p;return g?(g=1/g,t[0]=d*g,t[1]=(-h*i+r*u)*g,t[2]=(a*i-r*o)*g,t[3]=f*g,t[4]=(h*n-r*l)*g,t[5]=(-a*n+r*s)*g,t[6]=p*g,t[7]=(-u*n+i*l)*g,t[8]=(o*n-i*s)*g,t):null}function Ym(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],f=n[0],p=n[1],g=n[2],_=n[3],m=n[4],c=n[5],v=n[6],x=n[7],y=n[8];return t[0]=f*i+p*o+g*u,t[1]=f*r+p*a+g*h,t[2]=f*s+p*l+g*d,t[3]=_*i+m*o+c*u,t[4]=_*r+m*a+c*h,t[5]=_*s+m*l+c*d,t[6]=v*i+x*o+y*u,t[7]=v*r+x*a+y*h,t[8]=v*s+x*l+y*d,t}function BR(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],f=n[0],p=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=o,t[4]=a,t[5]=l,t[6]=f*i+p*o+u,t[7]=f*r+p*a+h,t[8]=f*s+p*l+d,t}function VR(t,e,n){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],f=Math.sin(n),p=Math.cos(n);return t[0]=p*i+f*o,t[1]=p*r+f*a,t[2]=p*s+f*l,t[3]=p*o-f*i,t[4]=p*a-f*r,t[5]=p*l-f*s,t[6]=u,t[7]=h,t[8]=d,t}function HR(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function GR(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],c=e[15],v=n*a-i*o,x=n*l-r*o,y=n*u-s*o,R=i*l-r*a,w=i*u-s*a,A=r*u-s*l,C=h*_-d*g,E=h*m-f*g,S=h*c-p*g,P=d*m-f*_,z=d*c-p*_,O=f*c-p*m,k=v*O-x*z+y*P+R*S-w*E+A*C;return k?(k=1/k,t[0]=(a*O-l*z+u*P)*k,t[1]=(l*S-o*O-u*E)*k,t[2]=(o*z-a*S+u*C)*k,t[3]=(r*z-i*O-s*P)*k,t[4]=(n*O-r*S+s*E)*k,t[5]=(i*S-n*z-s*C)*k,t[6]=(_*A-m*w+c*R)*k,t[7]=(m*y-g*A-c*x)*k,t[8]=(g*w-_*y+c*v)*k,t):null}class WR extends Array{constructor(e=1,n=0,i=0,r=0,s=1,o=0,a=0,l=0,u=1){return super(e,n,i,r,s,o,a,l,u),this}set(e,n,i,r,s,o,a,l,u){return e.length?this.copy(e):(OR(this,e,n,i,r,s,o,a,l,u),this)}translate(e,n=this){return BR(this,n,e),this}rotate(e,n=this){return VR(this,n,e),this}scale(e,n=this){return HR(this,n,e),this}multiply(e,n){return n?Ym(this,e,n):Ym(this,this,e),this}identity(){return zR(this),this}copy(e){return FR(this,e),this}fromMatrix4(e){return UR(this,e),this}fromQuaternion(e){return NR(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return kR(this,e),this}getNormalMatrix(e){return GR(this,e),this}}let XR=0;class YR extends IR{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=XR++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=o,this.modelViewMatrix=new Ol,this.normalMatrix=new WR,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}const jm={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function qm(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function jR(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function $m(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?qm(t):jm[t.toLowerCase()]?qm(jm[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):jR(t)}class Km extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...$m(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy($m(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class qR extends VA{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}}const $R=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,KR=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;function ZR({focal:t=[.5,.5],rotation:e=[1,0],starSpeed:n=.5,density:i=1,hueShift:r=140,disableAnimation:s=!1,speed:o=1,mouseInteraction:a=!0,glowIntensity:l=.3,saturation:u=0,mouseRepulsion:h=!0,repulsionStrength:d=2,twinkleIntensity:f=.3,rotationSpeed:p=.1,autoCenterRepulsion:g=0,transparent:_=!0,...m}){const c=Ft.useRef(null),v=Ft.useRef({x:.5,y:.5}),x=Ft.useRef({x:.5,y:.5}),y=Ft.useRef(0),R=Ft.useRef(0);return Ft.useEffect(()=>{if(!c.current)return;const w=c.current,A=new qA({alpha:_,premultipliedAlpha:!1}),C=A.gl;_?(C.enable(C.BLEND),C.blendFunc(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA),C.clearColor(0,0,0,0)):C.clearColor(0,0,0,1);let E;function S(){A.setSize(w.offsetWidth*1,w.offsetHeight*1),E&&(E.uniforms.uResolution.value=new Km(C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height))}window.addEventListener("resize",S,!1),S();const P=new qR(C);E=new GA(C,{vertex:$R,fragment:KR,uniforms:{uTime:{value:0},uResolution:{value:new Km(C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height)},uFocal:{value:new Float32Array(t)},uRotation:{value:new Float32Array(e)},uStarSpeed:{value:n},uDensity:{value:i},uHueShift:{value:r},uSpeed:{value:o},uMouse:{value:new Float32Array([x.current.x,x.current.y])},uGlowIntensity:{value:l},uSaturation:{value:u},uMouseRepulsion:{value:h},uTwinkleIntensity:{value:f},uRotationSpeed:{value:p},uRepulsionStrength:{value:d},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:g},uTransparent:{value:_}}});const z=new YR(C,{geometry:P,program:E});let O;function k($){O=requestAnimationFrame(k),s||(E.uniforms.uTime.value=$*.001,E.uniforms.uStarSpeed.value=$*.001*n/10);const D=.05;x.current.x+=(v.current.x-x.current.x)*D,x.current.y+=(v.current.y-x.current.y)*D,R.current+=(y.current-R.current)*D,E.uniforms.uMouse.value[0]=x.current.x,E.uniforms.uMouse.value[1]=x.current.y,E.uniforms.uMouseActiveFactor.value=R.current,A.render({scene:z})}O=requestAnimationFrame(k),w.appendChild(C.canvas);function q($){const D=w.getBoundingClientRect(),Y=($.clientX-D.left)/D.width,Z=1-($.clientY-D.top)/D.height;v.current={x:Y,y:Z},y.current=1}function X(){y.current=0}return a&&(w.addEventListener("mousemove",q),w.addEventListener("mouseleave",X)),()=>{var $;cancelAnimationFrame(O),window.removeEventListener("resize",S),a&&(w.removeEventListener("mousemove",q),w.removeEventListener("mouseleave",X)),w.removeChild(C.canvas),($=C.getExtension("WEBGL_lose_context"))==null||$.loseContext()}},[t,e,n,i,r,s,o,a,l,u,h,f,p,d,g,_]),Lt.jsx("div",{ref:c,className:"galaxy-container",...m})}const QR="_root_zzg9a_1",JR="_stage_zzg9a_23",eC="_getStartedButton_zzg9a_35",mc={root:QR,stage:JR,getStartedButton:eC};function tC(){const t=()=>{window.location.href="/video"};return Lt.jsxs("main",{className:mc.root,children:[Lt.jsx("div",{className:mc.stage,children:Lt.jsx(ZR,{starSpeed:.5,density:1,hueShift:140,speed:1,glowIntensity:.3,saturation:0,mouseRepulsion:!0,repulsionStrength:2,twinkleIntensity:.3,rotationSpeed:.1,transparent:!0})}),Lt.jsx("button",{className:mc.getStartedButton,type:"button",onClick:t,children:"Get Started"})]})}const nC="_root_1v53u_1",iC="_zoomExit_1v53u_27",rC="_videoViewport_1v53u_37",sC="_videoFrame_1v53u_51",no={root:nC,zoomExit:iC,videoViewport:rC,videoFrame:sC,"pointer-events-none":"_pointer-events-none_1v53u_71"};function oC({videoId:t="EBGh_1l_cZs",redirectUrl:e="/world"}){const[n,i]=Ft.useState(!1),r=Ft.useMemo(()=>`https://www.youtube.com/embed/${t}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&vq=hd2160`,[t]);return Ft.useEffect(()=>{const s=document.body.style.background;document.body.style.background="#000";let o;const a=window.setTimeout(()=>{i(!0),o=window.setTimeout(()=>{window.location.href=e},1500)},2e4);return()=>{window.clearTimeout(a),o&&window.clearTimeout(o),document.body.style.background=s}},[e]),Lt.jsx("main",{className:`${no.root} ${n?no.zoomExit:""}`,children:Lt.jsx("div",{className:no.videoViewport,children:Lt.jsx("iframe",{className:`${no.videoFrame} ${no["pointer-events-none"]}`,src:r,title:"YouTube Intro",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0,referrerPolicy:"strict-origin-when-cross-origin"})})})}const Zm=window.location.pathname,aC=Zm==="/world"?EA:Zm==="/video"?oC:tC;gc.createRoot(document.getElementById("root")).render(Lt.jsx(_v.StrictMode,{children:Lt.jsx(aC,{})}));
