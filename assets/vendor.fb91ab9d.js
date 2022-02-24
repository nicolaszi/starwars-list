function Zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const $s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bs=Zr($s);function Qi(e){return!!e||e===""}function Qr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Ks(r):Qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(fe(e))return e}}const Ws=/;(?![^(]*\))/g,Ys=/:(.+)/;function Ks(e){const t={};return e.split(Ws).forEach(n=>{if(n){const r=n.split(Ys);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ea(e){let t="";if(ce(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=ea(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cm=e=>ce(e)?e:e==null?"":$(e)||fe(e)&&(e.toString===ro||!W(e.toString))?JSON.stringify(e,eo,2):String(e),eo=(e,t)=>t&&t.__v_isRef?eo(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:to(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!$(t)&&!ao(t)?String(t):t,Q={},Dt=[],Se=()=>{},qs=()=>!1,Vs=/^on[^a-z]/,Vn=e=>Vs.test(e),ta=e=>e.startsWith("onUpdate:"),pe=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gs=Object.prototype.hasOwnProperty,q=(e,t)=>Gs.call(e,t),$=Array.isArray,Ft=e=>Gn(e)==="[object Map]",to=e=>Gn(e)==="[object Set]",W=e=>typeof e=="function",ce=e=>typeof e=="string",ra=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",no=e=>fe(e)&&W(e.then)&&W(e.catch),ro=Object.prototype.toString,Gn=e=>ro.call(e),Xs=e=>Gn(e).slice(8,-1),ao=e=>Gn(e)==="[object Object]",aa=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Js=/-(\w)/g,ze=Xn(e=>e.replace(Js,(t,n)=>n?n.toUpperCase():"")),Zs=/\B([A-Z])/g,$t=Xn(e=>e.replace(Zs,"-$1").toLowerCase()),Jn=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Xn(e=>e?`on${Jn(e)}`:""),un=(e,t)=>!Object.is(e,t),Tn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let za;const Qs=()=>za||(za=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class el{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function tl(e,t=$e){t&&t.active&&t.effects.push(e)}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},io=e=>(e.w&st)>0,oo=e=>(e.n&st)>0,nl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},rl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];io(a)&&!oo(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},_r=new WeakMap;let Xt=0,st=1;const Ar=30;let Fe;const vt=Symbol(""),kr=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tl(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,at=!0,st=1<<++Xt,Xt<=Ar?nl(this):ja(this),this.fn()}finally{Xt<=Ar&&rl(this),st=1<<--Xt,Fe=this.parent,at=n,this.parent=void 0}}stop(){this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const so=[];function Bt(){so.push(at),at=!1}function Wt(){const e=so.pop();at=e===void 0?!0:e}function _e(e,t,n){if(at&&Fe){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),lo(a)}}function lo(e,t){let n=!1;Xt<=Ar?oo(e)||(e.n|=st,n=!io(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function Ye(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?aa(n)&&s.push(o.get("length")):(s.push(o.get(vt)),Ft(e)&&s.push(o.get(kr)));break;case"delete":$(e)||(s.push(o.get(vt)),Ft(e)&&s.push(o.get(kr)));break;case"set":Ft(e)&&s.push(o.get(vt));break}if(s.length===1)s[0]&&Er(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Er(ia(l))}}function Er(e,t){for(const n of $(e)?e:[...e])(n!==Fe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const al=Zr("__proto__,__v_isRef,__isVue"),fo=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ra)),il=sa(),ol=sa(!1,!0),sl=sa(!0),Ha=ll();function ll(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=V(this)[t].apply(this,n);return Wt(),r}}),e}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?kl:po:t?ho:mo).get(r))return r;const o=$(r);if(!e&&o&&q(Ha,a))return Reflect.get(Ha,a,i);const s=Reflect.get(r,a,i);return(ra(a)?fo.has(a):al(a))||(e||_e(r,"get",a),t)?s:me(s)?!o||!aa(a)?s.value:s:fe(s)?e?go(s):yn(s):s}}const fl=co(),cl=co(!0);function co(e=!1){return function(n,r,a,i){let o=n[r];if(dn(o)&&me(o)&&!me(a))return!1;if(!e&&!dn(a)&&(vo(a)||(a=V(a),o=V(o)),!$(n)&&me(o)&&!me(a)))return o.value=a,!0;const s=$(n)&&aa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?un(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function ul(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function dl(e,t){const n=Reflect.has(e,t);return(!ra(t)||!fo.has(t))&&_e(e,"has",t),n}function ml(e){return _e(e,"iterate",$(e)?"length":vt),Reflect.ownKeys(e)}const uo={get:il,set:fl,deleteProperty:ul,has:dl,ownKeys:ml},hl={get:sl,set(e,t){return!0},deleteProperty(e,t){return!0}},pl=pe({},uo,{get:ol,set:cl}),la=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function _n(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);t!==i&&!n&&_e(a,"get",t),!n&&_e(a,"get",i);const{has:o}=Zn(a),s=r?la:n?ua:mn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function An(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return e!==a&&!t&&_e(r,"has",e),!t&&_e(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function kn(e,t=!1){return e=e.__v_raw,!t&&_e(V(e),"iterate",vt),Reflect.get(e,"size",e)}function Ua(e){e=V(e);const t=V(this);return Zn(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function $a(e,t){t=V(t);const n=V(this),{has:r,get:a}=Zn(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?un(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function Ba(e){const t=V(this),{has:n,get:r}=Zn(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Wa(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function En(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?la:e?ua:mn;return!e&&_e(s,"iterate",vt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function Cn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Ft(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?la:t?ua:mn;return!t&&_e(i,"iterate",l?kr:vt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function gl(){const e={get(i){return _n(this,i)},get size(){return kn(this)},has:An,add:Ua,set:$a,delete:Ba,clear:Wa,forEach:En(!1,!1)},t={get(i){return _n(this,i,!1,!0)},get size(){return kn(this)},has:An,add:Ua,set:$a,delete:Ba,clear:Wa,forEach:En(!1,!0)},n={get(i){return _n(this,i,!0)},get size(){return kn(this,!0)},has(i){return An.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:En(!0,!1)},r={get(i){return _n(this,i,!0,!0)},get size(){return kn(this,!0)},has(i){return An.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Cn(i,!1,!1),n[i]=Cn(i,!0,!1),t[i]=Cn(i,!1,!0),r[i]=Cn(i,!0,!0)}),[e,n,t,r]}const[vl,bl,yl,wl]=gl();function fa(e,t){const n=t?e?wl:yl:e?bl:vl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const xl={get:fa(!1,!1)},_l={get:fa(!1,!0)},Al={get:fa(!0,!1)},mo=new WeakMap,ho=new WeakMap,po=new WeakMap,kl=new WeakMap;function El(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cl(e){return e.__v_skip||!Object.isExtensible(e)?0:El(Xs(e))}function yn(e){return dn(e)?e:ca(e,!1,uo,xl,mo)}function Ol(e){return ca(e,!1,pl,_l,ho)}function go(e){return ca(e,!0,hl,Al,po)}function ca(e,t,n,r,a){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Cl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Lt(e){return dn(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function dn(e){return!!(e&&e.__v_isReadonly)}function vo(e){return!!(e&&e.__v_isShallow)}function bo(e){return Lt(e)||dn(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function yo(e){return Dn(e,"__v_skip",!0),e}const mn=e=>fe(e)?yn(e):e,ua=e=>fe(e)?go(e):e;function wo(e){at&&Fe&&(e=V(e),lo(e.dep||(e.dep=ia())))}function xo(e,t){e=V(e),e.dep&&Er(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function Pl(e){return _o(e,!1)}function Tl(e){return _o(e,!0)}function _o(e,t){return me(e)?e:new Sl(e,t)}class Sl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:mn(t)}get value(){return wo(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),un(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:mn(t),xo(this))}}function en(e){return me(e)?e.value:e}const Ml={get:(e,t,n)=>en(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ao(e){return Lt(e)?e:new Proxy(e,Ml)}class Nl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rl(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=Se):(r=e.get,a=e.set),new Nl(r,a,i||!a,n)}Promise.resolve();function it(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Qn(i,t,n)}return a}function Me(e,t,n,r){if(W(e)){const i=it(e,t,n,r);return i&&no(i)&&i.catch(o=>{Qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function Qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}Il(e,n,a,r)}function Il(e,t,n,r=!0){console.error(e)}let Fn=!1,Cr=!1;const we=[];let We=0;const tn=[];let Jt=null,Tt=0;const nn=[];let tt=null,St=0;const ko=Promise.resolve();let da=null,Or=null;function Eo(e){const t=da||ko;return e?t.then(this?e.bind(this):e):t}function Dl(e){let t=We+1,n=we.length;for(;t<n;){const r=t+n>>>1;hn(we[r])<e?t=r+1:n=r}return t}function Co(e){(!we.length||!we.includes(e,Fn&&e.allowRecurse?We+1:We))&&e!==Or&&(e.id==null?we.push(e):we.splice(Dl(e.id),0,e),Oo())}function Oo(){!Fn&&!Cr&&(Cr=!0,da=ko.then(So))}function Fl(e){const t=we.indexOf(e);t>We&&we.splice(t,1)}function Po(e,t,n,r){$(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Oo()}function Ll(e){Po(e,Jt,tn,Tt)}function zl(e){Po(e,tt,nn,St)}function ma(e,t=null){if(tn.length){for(Or=t,Jt=[...new Set(tn)],tn.length=0,Tt=0;Tt<Jt.length;Tt++)Jt[Tt]();Jt=null,Tt=0,Or=null,ma(e,t)}}function To(e){if(nn.length){const t=[...new Set(nn)];if(nn.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,r)=>hn(n)-hn(r)),St=0;St<tt.length;St++)tt[St]();tt=null,St=0}}const hn=e=>e.id==null?1/0:e.id;function So(e){Cr=!1,Fn=!0,ma(e),we.sort((n,r)=>hn(n)-hn(r));const t=Se;try{for(We=0;We<we.length;We++){const n=we[We];n&&n.active!==!1&&it(n,null,14)}}finally{We=0,we.length=0,To(),Fn=!1,da=null,(we.length||tn.length||nn.length)&&So(e)}}function jl(e,t,...n){const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||Q;h?a=n.map(b=>b.trim()):d&&(a=n.map(xr))}let s,l=r[s=cr(t)]||r[s=cr(ze(t))];!l&&i&&(l=r[s=cr($t(t))]),l&&Me(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(c,e,6,a)}}function Mo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=c=>{const f=Mo(c,t,!0);f&&(s=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):pe(o,i),r.set(e,o),o)}function ha(e,t){return!e||!Vn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,$t(t))||q(e,t))}let Pe=null,No=null;function Ln(e){const t=Pe;return Pe=e,No=e&&e.type.__scopeId||null,t}function Hl(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ei(-1);const i=Ln(t),o=e(...a);return Ln(i),r._d&&ei(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:b,ctx:A,inheritAttrs:M}=e;let P,v;const p=Ln(e);try{if(n.shapeFlag&4){const j=a||r;P=De(f.call(j,j,d,i,b,h,A)),v=l}else{const j=t;P=De(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),v=t.props?l:Ul(l)}}catch(j){an.length=0,Qn(j,e,1),P=xe(wt)}let R=P;if(v&&M!==!1){const j=Object.keys(v),{shapeFlag:U}=R;j.length&&U&7&&(o&&j.some(ta)&&(v=$l(v,o)),R=pn(R,v))}return n.dirs&&(R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),P=R,Ln(p),P}const Ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vn(n))&&((t||(t={}))[n]=e[n]);return t},$l=(e,t)=>{const n={};for(const r in e)(!ta(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Bl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!ha(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ya(r,o,c):!0:!!o;return!1}function Ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!ha(n,i))return!0}return!1}function Wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Yl=e=>e.__isSuspense;function Kl(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):zl(e)}function Sn(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function ot(e,t,n=!1){const r=de||Pe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const Ka={};function rn(e,t,n){return Ro(e,t,n)}function Ro(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Q){const s=de;let l,c=!1,f=!1;if(me(e)?(l=()=>e.value,c=vo(e)):Lt(e)?(l=()=>e,r=!0):$(e)?(f=!0,c=e.some(Lt),l=()=>e.map(v=>{if(me(v))return v.value;if(Lt(v))return pt(v);if(W(v))return it(v,s,2)})):W(e)?t?l=()=>it(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Me(e,s,3,[h])}:l=Se,t&&r){const v=l;l=()=>pt(v())}let d,h=v=>{d=P.onStop=()=>{it(v,s,4)}};if(gn)return h=Se,t?n&&Me(t,s,3,[l(),f?[]:void 0,h]):l(),Se;let b=f?[]:Ka;const A=()=>{if(!!P.active)if(t){const v=P.run();(r||c||(f?v.some((p,R)=>un(p,b[R])):un(v,b)))&&(d&&d(),Me(t,s,3,[v,b===Ka?void 0:b,h]),b=v)}else P.run()};A.allowRecurse=!!t;let M;a==="sync"?M=A:a==="post"?M=()=>ve(A,s&&s.suspense):M=()=>{!s||s.isMounted?Ll(A):A()};const P=new oa(l,M);return t?n?A():b=P.run():a==="post"?ve(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&na(s.scope.effects,P)}}function ql(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?Io(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=de;jt(this);const s=Ro(a,i.bind(r),n);return o?jt(o):yt(),s}function Io(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))pt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(to(e)||Ft(e))e.forEach(n=>{pt(n,t)});else if(ao(e))for(const n in e)pt(e[n],t);return e}function wn(e){return W(e)?{setup:e,name:e.name}:e}const Pr=e=>!!e.type.__asyncLoader,Do=e=>e.type.__isKeepAlive;function Vl(e,t){Fo(e,"a",t)}function Gl(e,t){Fo(e,"da",t)}function Fo(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Do(a.parent.vnode)&&Xl(r,t,n,a),a=a.parent}}function Xl(e,t,n,r){const a=er(t,e,r,!0);Lo(()=>{na(r[t],a)},n)}function er(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),jt(n);const s=Me(t,n,e,o);return yt(),Wt(),s});return r?a.unshift(i):a.push(i),i}}const Ge=e=>(t,n=de)=>(!gn||e==="sp")&&er(e,t,n),Jl=Ge("bm"),Zl=Ge("m"),Ql=Ge("bu"),ef=Ge("u"),tf=Ge("bum"),Lo=Ge("um"),nf=Ge("sp"),rf=Ge("rtg"),af=Ge("rtc");function of(e,t=de){er("ec",e,t)}let Tr=!0;function sf(e){const t=jo(e),n=e.proxy,r=e.ctx;Tr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:b,updated:A,activated:M,deactivated:P,beforeDestroy:v,beforeUnmount:p,destroyed:R,unmounted:j,render:U,renderTracked:ne,renderTriggered:se,errorCaptured:ke,serverPrefetch:ue,expose:Je,inheritAttrs:je,components:He,directives:At,filters:kt}=t;if(c&&lf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const G=o[ee];W(G)&&(r[ee]=G.bind(n))}if(a){const ee=a.call(n,n);fe(ee)&&(e.data=yn(ee))}if(Tr=!0,i)for(const ee in i){const G=i[ee],Ee=W(G)?G.bind(n,n):W(G.get)?G.get.bind(n,n):Se,Ct=!W(G)&&W(G.set)?G.set.bind(n):Se,Ue=oe({get:Ee,set:Ct});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ne=>Ue.value=Ne})}if(s)for(const ee in s)zo(s[ee],r,n,ee);if(l){const ee=W(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(G=>{Sn(G,ee[G])})}f&&qa(f,e,"c");function le(ee,G){$(G)?G.forEach(Ee=>ee(Ee.bind(n))):G&&ee(G.bind(n))}if(le(Jl,d),le(Zl,h),le(Ql,b),le(ef,A),le(Vl,M),le(Gl,P),le(of,ke),le(af,ne),le(rf,se),le(tf,p),le(Lo,j),le(nf,ue),$(Je))if(Je.length){const ee=e.exposed||(e.exposed={});Je.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:Ee=>n[G]=Ee})})}else e.exposed||(e.exposed={});U&&e.render===Se&&(e.render=U),je!=null&&(e.inheritAttrs=je),He&&(e.components=He),At&&(e.directives=At)}function lf(e,t,n=Se,r=!1){$(e)&&(e=Sr(e));for(const a in e){const i=e[a];let o;fe(i)?"default"in i?o=ot(i.from||a,i.default,!0):o=ot(i.from||a):o=ot(i),me(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function qa(e,t,n){Me($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function zo(e,t,n,r){const a=r.includes(".")?Io(n,r):()=>n[r];if(ce(e)){const i=t[e];W(i)&&rn(a,i)}else if(W(e))rn(a,e.bind(n));else if(fe(e))if($(e))e.forEach(i=>zo(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&rn(a,i,e)}}function jo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ff[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ff={data:Va,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:mt,directives:mt,watch:uf,provide:Va,inject:cf};function Va(e,t){return t?e?function(){return pe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function cf(e,t){return mt(Sr(e),Sr(t))}function Sr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function mt(e,t){return e?pe(pe(Object.create(null),e),t):t}function uf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function df(e,t,n,r=!1){const a={},i={};Dn(i,tr,1),e.propsDefaults=Object.create(null),Ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ol(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function mf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];const b=t[h];if(l)if(q(i,h))b!==i[h]&&(i[h]=b,c=!0);else{const A=ze(h);a[A]=Mr(l,s,A,b,e,!1)}else b!==i[h]&&(i[h]=b,c=!0)}}}else{Ho(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!q(t,d)&&((f=$t(d))===d||!q(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Mr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],c=!0)}c&&Ye(e,"set","$attrs")}function Ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let f;a&&q(a,f=ze(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:ha(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||Q;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Mr(a,l,d,c[d],e,!q(c,d))}}return o}function Mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(jt(a),r=c[n]=l.call(null,t),yt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function Uo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const f=d=>{l=!0;const[h,b]=Uo(d,t,!0);pe(o,h),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,Dt),Dt;if($(i))for(let f=0;f<i.length;f++){const d=ze(i[f]);Ga(d)&&(o[d]=Q)}else if(i)for(const f in i){const d=ze(f);if(Ga(d)){const h=i[f],b=o[d]=$(h)||W(h)?{type:h}:h;if(b){const A=Za(Boolean,b.type),M=Za(String,b.type);b[0]=A>-1,b[1]=M<0||A<M,(A>-1||q(b,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Ga(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ja(e,t){return Xa(e)===Xa(t)}function Za(e,t){return $(t)?t.findIndex(n=>Ja(n,e)):W(t)&&Ja(t,e)?0:-1}const $o=e=>e[0]==="_"||e==="$stable",pa=e=>$(e)?e.map(De):[De(e)],hf=(e,t,n)=>{const r=Hl((...a)=>pa(t(...a)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if($o(a))continue;const i=e[a];if(W(i))t[a]=hf(a,i,r);else if(i!=null){const o=pa(i);t[a]=()=>o}}},Wo=(e,t)=>{const n=pa(t);e.slots.default=()=>n},pf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Dn(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&Wo(e,t);Dn(e.slots,tr,1)},gf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Bo(t,a)),o=t}else t&&(Wo(e,t),o={default:1});if(i)for(const s in a)!$o(s)&&!(s in o)&&delete a[s]};function um(e,t){const n=Pe;if(n===null)return e;const r=n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=Q]=t[i];W(o)&&(o={mounted:o,updated:o}),o.deep&&pt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),Me(l,n,8,[e.el,s,e,t]),Wt())}}function Yo(){return{app:null,config:{isNativeTag:qs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function bf(e,t){return function(r,a=null){a!=null&&!fe(a)&&(a=null);const i=Yo(),o=new Set;let s=!1;const l=i.app={_uid:vf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:$f,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...f)):W(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=xe(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,ba(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Nr(e,t,n,r,a=!1){if($(e)){e.forEach((h,b)=>Nr(h,t&&($(t)?t[b]:t),n,r,a));return}if(Pr(r)&&!a)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===Q?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(ce(c)?(f[c]=null,q(d,c)&&(d[c]=null)):me(c)&&(c.value=null)),W(l))it(l,s,12,[o,f]);else{const h=ce(l),b=me(l);if(h||b){const A=()=>{if(e.f){const M=h?f[l]:l.value;a?$(M)&&na(M,i):$(M)?M.includes(i)||M.push(i):h?f[l]=[i]:(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,q(d,l)&&(d[l]=o)):me(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,ve(A,n)):A()}}}const ve=Kl;function yf(e){return wf(e)}function wf(e,t){const n=Qs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:b=Se,cloneNode:A,insertStaticContent:M}=e,P=(u,m,g,x=null,w=null,E=null,T=!1,k=null,C=!!m.dynamicChildren)=>{if(u===m)return;u&&!Vt(u,m)&&(x=D(u),Ce(u,w,E,!0),u=null),m.patchFlag===-2&&(C=!1,m.dynamicChildren=null);const{type:_,ref:F,shapeFlag:N}=m;switch(_){case ga:v(u,m,g,x);break;case wt:p(u,m,g,x);break;case dr:u==null&&R(m,g,x,T);break;case Be:At(u,m,g,x,w,E,T,k,C);break;default:N&1?ne(u,m,g,x,w,E,T,k,C):N&6?kt(u,m,g,x,w,E,T,k,C):(N&64||N&128)&&_.process(u,m,g,x,w,E,T,k,C,te)}F!=null&&w&&Nr(F,u&&u.ref,E,m||u,!m)},v=(u,m,g,x)=>{if(u==null)r(m.el=s(m.children),g,x);else{const w=m.el=u.el;m.children!==u.children&&c(w,m.children)}},p=(u,m,g,x)=>{u==null?r(m.el=l(m.children||""),g,x):m.el=u.el},R=(u,m,g,x)=>{[u.el,u.anchor]=M(u.children,m,g,x,u.el,u.anchor)},j=({el:u,anchor:m},g,x)=>{let w;for(;u&&u!==m;)w=h(u),r(u,g,x),u=w;r(m,g,x)},U=({el:u,anchor:m})=>{let g;for(;u&&u!==m;)g=h(u),a(u),u=g;a(m)},ne=(u,m,g,x,w,E,T,k,C)=>{T=T||m.type==="svg",u==null?se(m,g,x,w,E,T,k,C):Je(u,m,w,E,T,k,C)},se=(u,m,g,x,w,E,T,k)=>{let C,_;const{type:F,props:N,shapeFlag:L,transition:H,patchFlag:K,dirs:ie}=u;if(u.el&&A!==void 0&&K===-1)C=u.el=A(u.el);else{if(C=u.el=o(u.type,E,N&&N.is,N),L&8?f(C,u.children):L&16&&ue(u.children,C,null,x,w,E&&F!=="foreignObject",T,k),ie&&ct(u,null,x,"created"),N){for(const re in N)re!=="value"&&!Pn(re)&&i(C,re,null,N[re],E,u.children,x,w,O);"value"in N&&i(C,"value",null,N.value),(_=N.onVnodeBeforeMount)&&Ie(_,x,u)}ke(C,u,u.scopeId,T,x)}ie&&ct(u,null,x,"beforeMount");const J=(!w||w&&!w.pendingBranch)&&H&&!H.persisted;J&&H.beforeEnter(C),r(C,m,g),((_=N&&N.onVnodeMounted)||J||ie)&&ve(()=>{_&&Ie(_,x,u),J&&H.enter(C),ie&&ct(u,null,x,"mounted")},w)},ke=(u,m,g,x,w)=>{if(g&&b(u,g),x)for(let E=0;E<x.length;E++)b(u,x[E]);if(w){let E=w.subTree;if(m===E){const T=w.vnode;ke(u,T,T.scopeId,T.slotScopeIds,w.parent)}}},ue=(u,m,g,x,w,E,T,k,C=0)=>{for(let _=C;_<u.length;_++){const F=u[_]=k?nt(u[_]):De(u[_]);P(null,F,m,g,x,w,E,T,k)}},Je=(u,m,g,x,w,E,T)=>{const k=m.el=u.el;let{patchFlag:C,dynamicChildren:_,dirs:F}=m;C|=u.patchFlag&16;const N=u.props||Q,L=m.props||Q;let H;g&&ut(g,!1),(H=L.onVnodeBeforeUpdate)&&Ie(H,g,m,u),F&&ct(m,u,g,"beforeUpdate"),g&&ut(g,!0);const K=w&&m.type!=="foreignObject";if(_?je(u.dynamicChildren,_,k,g,x,K,E):T||Ee(u,m,k,null,g,x,K,E,!1),C>0){if(C&16)He(k,m,N,L,g,x,w);else if(C&2&&N.class!==L.class&&i(k,"class",null,L.class,w),C&4&&i(k,"style",N.style,L.style,w),C&8){const ie=m.dynamicProps;for(let J=0;J<ie.length;J++){const re=ie[J],Oe=N[re],Ot=L[re];(Ot!==Oe||re==="value")&&i(k,re,Oe,Ot,w,u.children,g,x,O)}}C&1&&u.children!==m.children&&f(k,m.children)}else!T&&_==null&&He(k,m,N,L,g,x,w);((H=L.onVnodeUpdated)||F)&&ve(()=>{H&&Ie(H,g,m,u),F&&ct(m,u,g,"updated")},x)},je=(u,m,g,x,w,E,T)=>{for(let k=0;k<m.length;k++){const C=u[k],_=m[k],F=C.el&&(C.type===Be||!Vt(C,_)||C.shapeFlag&70)?d(C.el):g;P(C,_,F,null,x,w,E,T,!0)}},He=(u,m,g,x,w,E,T)=>{if(g!==x){for(const k in x){if(Pn(k))continue;const C=x[k],_=g[k];C!==_&&k!=="value"&&i(u,k,_,C,T,m.children,w,E,O)}if(g!==Q)for(const k in g)!Pn(k)&&!(k in x)&&i(u,k,g[k],null,T,m.children,w,E,O);"value"in x&&i(u,"value",g.value,x.value)}},At=(u,m,g,x,w,E,T,k,C)=>{const _=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=m;H&&(k=k?k.concat(H):H),u==null?(r(_,g,x),r(F,g,x),ue(m.children,g,F,w,E,T,k,C)):N>0&&N&64&&L&&u.dynamicChildren?(je(u.dynamicChildren,L,g,w,E,T,k),(m.key!=null||w&&m===w.subTree)&&Ko(u,m,!0)):Ee(u,m,g,F,w,E,T,k,C)},kt=(u,m,g,x,w,E,T,k,C)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?w.ctx.activate(m,g,x,T,C):Et(m,g,x,w,E,T,C):le(u,m,C)},Et=(u,m,g,x,w,E,T)=>{const k=u.component=Df(u,x,w);if(Do(u)&&(k.ctx.renderer=te),Ff(k),k.asyncDep){if(w&&w.registerDep(k,ee),!u.el){const C=k.subTree=xe(wt);p(null,C,m,g)}return}ee(k,u,m,g,w,E,T)},le=(u,m,g)=>{const x=m.component=u.component;if(Bl(u,m,g))if(x.asyncDep&&!x.asyncResolved){G(x,m,g);return}else x.next=m,Fl(x.update),x.update();else m.component=u.component,m.el=u.el,x.vnode=m},ee=(u,m,g,x,w,E,T)=>{const k=()=>{if(u.isMounted){let{next:F,bu:N,u:L,parent:H,vnode:K}=u,ie=F,J;ut(u,!1),F?(F.el=K.el,G(u,F,T)):F=K,N&&Tn(N),(J=F.props&&F.props.onVnodeBeforeUpdate)&&Ie(J,H,F,K),ut(u,!0);const re=ur(u),Oe=u.subTree;u.subTree=re,P(Oe,re,d(Oe.el),D(Oe),u,w,E),F.el=re.el,ie===null&&Wl(u,re.el),L&&ve(L,w),(J=F.props&&F.props.onVnodeUpdated)&&ve(()=>Ie(J,H,F,K),w)}else{let F;const{el:N,props:L}=m,{bm:H,m:K,parent:ie}=u,J=Pr(m);if(ut(u,!1),H&&Tn(H),!J&&(F=L&&L.onVnodeBeforeMount)&&Ie(F,ie,m),ut(u,!0),N&&B){const re=()=>{u.subTree=ur(u),B(N,u.subTree,u,w,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=ur(u);P(null,re,g,x,u,w,E),m.el=re.el}if(K&&ve(K,w),!J&&(F=L&&L.onVnodeMounted)){const re=m;ve(()=>Ie(F,ie,re),w)}m.shapeFlag&256&&u.a&&ve(u.a,w),u.isMounted=!0,m=g=x=null}},C=u.effect=new oa(k,()=>Co(u.update),u.scope),_=u.update=C.run.bind(C);_.id=u.uid,ut(u,!0),_()},G=(u,m,g)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,mf(u,m.props,x,g),gf(u,m.children,g),Bt(),ma(void 0,u.update),Wt()},Ee=(u,m,g,x,w,E,T,k,C=!1)=>{const _=u&&u.children,F=u?u.shapeFlag:0,N=m.children,{patchFlag:L,shapeFlag:H}=m;if(L>0){if(L&128){Ue(_,N,g,x,w,E,T,k,C);return}else if(L&256){Ct(_,N,g,x,w,E,T,k,C);return}}H&8?(F&16&&O(_,w,E),N!==_&&f(g,N)):F&16?H&16?Ue(_,N,g,x,w,E,T,k,C):O(_,w,E,!0):(F&8&&f(g,""),H&16&&ue(N,g,x,w,E,T,k,C))},Ct=(u,m,g,x,w,E,T,k,C)=>{u=u||Dt,m=m||Dt;const _=u.length,F=m.length,N=Math.min(_,F);let L;for(L=0;L<N;L++){const H=m[L]=C?nt(m[L]):De(m[L]);P(u[L],H,g,null,w,E,T,k,C)}_>F?O(u,w,E,!0,!1,N):ue(m,g,x,w,E,T,k,C,N)},Ue=(u,m,g,x,w,E,T,k,C)=>{let _=0;const F=m.length;let N=u.length-1,L=F-1;for(;_<=N&&_<=L;){const H=u[_],K=m[_]=C?nt(m[_]):De(m[_]);if(Vt(H,K))P(H,K,g,null,w,E,T,k,C);else break;_++}for(;_<=N&&_<=L;){const H=u[N],K=m[L]=C?nt(m[L]):De(m[L]);if(Vt(H,K))P(H,K,g,null,w,E,T,k,C);else break;N--,L--}if(_>N){if(_<=L){const H=L+1,K=H<F?m[H].el:x;for(;_<=L;)P(null,m[_]=C?nt(m[_]):De(m[_]),g,K,w,E,T,k,C),_++}}else if(_>L)for(;_<=N;)Ce(u[_],w,E,!0),_++;else{const H=_,K=_,ie=new Map;for(_=K;_<=L;_++){const be=m[_]=C?nt(m[_]):De(m[_]);be.key!=null&&ie.set(be.key,_)}let J,re=0;const Oe=L-K+1;let Ot=!1,Da=0;const qt=new Array(Oe);for(_=0;_<Oe;_++)qt[_]=0;for(_=H;_<=N;_++){const be=u[_];if(re>=Oe){Ce(be,w,E,!0);continue}let Re;if(be.key!=null)Re=ie.get(be.key);else for(J=K;J<=L;J++)if(qt[J-K]===0&&Vt(be,m[J])){Re=J;break}Re===void 0?Ce(be,w,E,!0):(qt[Re-K]=_+1,Re>=Da?Da=Re:Ot=!0,P(be,m[Re],g,null,w,E,T,k,C),re++)}const Fa=Ot?xf(qt):Dt;for(J=Fa.length-1,_=Oe-1;_>=0;_--){const be=K+_,Re=m[be],La=be+1<F?m[be+1].el:x;qt[_]===0?P(null,Re,g,La,w,E,T,k,C):Ot&&(J<0||_!==Fa[J]?Ne(Re,g,La,2):J--)}}},Ne=(u,m,g,x,w=null)=>{const{el:E,type:T,transition:k,children:C,shapeFlag:_}=u;if(_&6){Ne(u.component.subTree,m,g,x);return}if(_&128){u.suspense.move(m,g,x);return}if(_&64){T.move(u,m,g,te);return}if(T===Be){r(E,m,g);for(let N=0;N<C.length;N++)Ne(C[N],m,g,x);r(u.anchor,m,g);return}if(T===dr){j(u,m,g);return}if(x!==2&&_&1&&k)if(x===0)k.beforeEnter(E),r(E,m,g),ve(()=>k.enter(E),w);else{const{leave:N,delayLeave:L,afterLeave:H}=k,K=()=>r(E,m,g),ie=()=>{N(E,()=>{K(),H&&H()})};L?L(E,K,ie):ie()}else r(E,m,g)},Ce=(u,m,g,x=!1,w=!1)=>{const{type:E,props:T,ref:k,children:C,dynamicChildren:_,shapeFlag:F,patchFlag:N,dirs:L}=u;if(k!=null&&Nr(k,null,g,u,!0),F&256){m.ctx.deactivate(u);return}const H=F&1&&L,K=!Pr(u);let ie;if(K&&(ie=T&&T.onVnodeBeforeUnmount)&&Ie(ie,m,u),F&6)I(u.component,g,x);else{if(F&128){u.suspense.unmount(g,x);return}H&&ct(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,g,w,te,x):_&&(E!==Be||N>0&&N&64)?O(_,m,g,!1,!0):(E===Be&&N&384||!w&&F&16)&&O(C,m,g),x&&fr(u)}(K&&(ie=T&&T.onVnodeUnmounted)||H)&&ve(()=>{ie&&Ie(ie,m,u),H&&ct(u,null,m,"unmounted")},g)},fr=u=>{const{type:m,el:g,anchor:x,transition:w}=u;if(m===Be){y(g,x);return}if(m===dr){U(u);return}const E=()=>{a(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:T,delayLeave:k}=w,C=()=>T(g,E);k?k(u.el,E,C):C()}else E()},y=(u,m)=>{let g;for(;u!==m;)g=h(u),a(u),u=g;a(m)},I=(u,m,g)=>{const{bum:x,scope:w,update:E,subTree:T,um:k}=u;x&&Tn(x),w.stop(),E&&(E.active=!1,Ce(T,u,m,g)),k&&ve(k,m),ve(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(u,m,g,x=!1,w=!1,E=0)=>{for(let T=E;T<u.length;T++)Ce(u[T],m,g,x,w)},D=u=>u.shapeFlag&6?D(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),X=(u,m,g)=>{u==null?m._vnode&&Ce(m._vnode,null,null,!0):P(m._vnode||null,u,m,null,null,null,g),To(),m._vnode=u},te={p:P,um:Ce,m:Ne,r:fr,mt:Et,mc:ue,pc:Ee,pbc:je,n:D,o:e};let Y,B;return t&&([Y,B]=t(te)),{render:X,hydrate:Y,createApp:bf(X,Y)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ko(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||Ko(o,s))}}function xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const _f=e=>e.__isTeleport,qo="components";function dm(e,t){return kf(qo,e,!0,t)||e}const Af=Symbol();function kf(e,t,n=!0,r=!1){const a=Pe||de;if(a){const i=a.type;if(e===qo){const s=Hf(i);if(s&&(s===t||s===ze(t)||s===Jn(ze(t))))return i}const o=Qa(a[e]||i[e],t)||Qa(a.appContext[e],t);return!o&&r?i:o}}function Qa(e,t){return e&&(e[t]||e[ze(t)]||e[Jn(ze(t))])}const Be=Symbol(void 0),ga=Symbol(void 0),wt=Symbol(void 0),dr=Symbol(void 0),an=[];let bt=null;function Ef(e=!1){an.push(bt=e?null:[])}function Cf(){an.pop(),bt=an[an.length-1]||null}let jn=1;function ei(e){jn+=e}function Vo(e){return e.dynamicChildren=jn>0?bt||Dt:null,Cf(),jn>0&&bt&&bt.push(e),e}function mm(e,t,n,r,a,i){return Vo(Xo(e,t,n,r,a,i,!0))}function Of(e,t,n,r,a){return Vo(xe(e,t,n,r,a,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Go=({key:e})=>e!=null?e:null,Mn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||me(e)||W(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function Xo(e,t=null,n=null,r=0,a=null,i=e===Be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Go(t),ref:t&&Mn(t),scopeId:No,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),jn>0&&!o&&bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&bt.push(l),l}const xe=Pf;function Pf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Af)&&(e=wt),Rr(e)){const s=pn(e,t,!0);return n&&va(s,n),s}if(Uf(e)&&(e=e.__vccOpts),t){t=Tf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=ea(s)),fe(l)&&(bo(l)&&!$(l)&&(l=pe({},l)),t.style=Qr(l))}const o=ce(e)?1:Yl(e)?128:_f(e)?64:fe(e)?4:W(e)?2:0;return Xo(e,t,n,r,a,o,i,!0)}function Tf(e){return e?bo(e)||tr in e?pe({},e):e:null}function pn(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Mf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Go(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Mn(t)):[a,Mn(t)]:Mn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pn(e.ssContent),ssFallback:e.ssFallback&&pn(e.ssFallback),el:e.el,anchor:e.anchor}}function Sf(e=" ",t=0){return xe(ga,null,e,t)}function hm(e="",t=!1){return t?(Ef(),Of(wt,null,e)):xe(wt,null,e)}function De(e){return e==null||typeof e=="boolean"?xe(wt):$(e)?xe(Be,null,e.slice()):typeof e=="object"?nt(e):xe(ga,null,String(e))}function nt(e){return e.el===null||e.memo?e:pn(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Sf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ea([t.class,r.class]));else if(a==="style")t.style=Qr([t.style,r.style]);else if(Vn(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Me(e,t,7,[n,r])}function pm(e,t,n,r){let a;const i=n&&n[r];if($(e)||ce(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ir=e=>e?Jo(e)?ba(e)||e.proxy:Ir(e.parent):null,Hn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>()=>Co(e.update),$nextTick:e=>Eo.bind(e.proxy),$watch:e=>ql.bind(e)}),Nf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Q&&q(r,t))return o[t]=1,r[t];if(a!==Q&&q(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,i[t];if(n!==Q&&q(n,t))return o[t]=4,n[t];Tr&&(o[t]=0)}}const f=Hn[t];let d,h;if(f)return t==="$attrs"&&_e(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==Q&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Q&&q(a,t)?(a[t]=n,!0):r!==Q&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Q&&q(e,o)||t!==Q&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(Hn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Rf=Yo();let If=0;function Df(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Rf,i={uid:If++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new el(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,a),emitsOptions:Mo(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jl.bind(null,i),e.ce&&e.ce(i),i}let de=null;const jt=e=>{de=e,e.scope.on()},yt=()=>{de&&de.scope.off(),de=null};function Jo(e){return e.vnode.shapeFlag&4}let gn=!1;function Ff(e,t=!1){gn=t;const{props:n,children:r}=e.vnode,a=Jo(e);df(e,n,a,t),pf(e,r);const i=a?Lf(e,t):void 0;return gn=!1,i}function Lf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=yo(new Proxy(e.ctx,Nf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?jf(e):null;jt(e),Bt();const i=it(r,e,0,[e.props,a]);if(Wt(),yt(),no(i)){if(i.then(yt,yt),t)return i.then(o=>{ti(e,o,t)}).catch(o=>{Qn(o,e,0)});e.asyncDep=i}else ti(e,i,t)}else Zo(e,t)}function ti(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Ao(t)),Zo(e,n)}let ni;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&ni&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=ni(a,c)}}e.render=r.render||Se}jt(e),Bt(),sf(e),Wt(),yt()}function zf(e){return new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}})}function jf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=zf(e))},slots:e.slots,emit:e.emit,expose:t}}function ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ao(yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hn)return Hn[n](e)}}))}function Hf(e){return W(e)&&e.displayName||e.name}function Uf(e){return W(e)&&"__vccOpts"in e}const oe=(e,t)=>Rl(e,t,gn);function nr(e,t,n){const r=arguments.length;return r===2?fe(t)&&!$(t)?Rr(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),xe(e,t,n))}const $f="3.2.31",Bf="http://www.w3.org/2000/svg",ht=typeof document!="undefined"?document:null,ri=ht&&ht.createElement("template"),Wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ht.createElementNS(Bf,e):ht.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Yf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kf(e,t,n){const r=e.style,a=ce(n);if(n&&!a){for(const i in n)Dr(r,i,n[i]);if(t&&!ce(t))for(const i in t)n[i]==null&&Dr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ai=/\s*!important$/;function Dr(e,t,n){if($(n))n.forEach(r=>Dr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=qf(e,t);ai.test(n)?e.setProperty($t(r),n.replace(ai,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],mr={};function qf(e,t){const n=mr[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return mr[t]=r;r=Jn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in e)return mr[t]=i}return t}const oi="http://www.w3.org/1999/xlink";function Vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oi,t.slice(6,t.length)):e.setAttributeNS(oi,t,n);else{const i=Bs(t);n==null||i&&!Qi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Gf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=Qi(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Un=Date.now,Qo=!1;if(typeof window!="undefined"){Un()>document.createEvent("Event").timeStamp&&(Un=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Qo=!!(e&&Number(e[1])<=53)}let Fr=0;const Xf=Promise.resolve(),Jf=()=>{Fr=0},Zf=()=>Fr||(Xf.then(Jf),Fr=Un());function Mt(e,t,n,r){e.addEventListener(t,n,r)}function Qf(e,t,n,r){e.removeEventListener(t,n,r)}function ec(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=tc(t);if(r){const c=i[t]=nc(r,a);Mt(e,s,c,l)}else o&&(Qf(e,s,o,l),i[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function tc(e){let t;if(si.test(e)){t={};let n;for(;n=e.match(si);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[$t(e.slice(2)),t]}function nc(e,t){const n=r=>{const a=r.timeStamp||Un();(Qo||a>=n.attached-1)&&Me(rc(r,n.value),t,5,[r])};return n.value=e,n.attached=Zf(),n}function rc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const li=/^on[a-z]/,ac=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Yf(e,r,a):t==="style"?Kf(e,n,r):Vn(t)?ta(t)||ec(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ic(e,t,r,a))?Gf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Vf(e,t,r,a))};function ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&li.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||li.test(t)&&ce(n)?!1:t in e}const fi=e=>{const t=e.props["onUpdate:modelValue"];return $(t)?n=>Tn(t,n):t};function oc(e){e.target.composing=!0}function ci(e){const t=e.target;t.composing&&(t.composing=!1,sc(t,"input"))}function sc(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const gm={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=fi(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n?s=s.trim():i&&(s=xr(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",oc),Mt(e,"compositionend",ci),Mt(e,"change",ci))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=fi(i),e.composing||document.activeElement===e&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&xr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},lc=pe({patchProp:ac},Wf);let ui;function fc(){return ui||(ui=yf(lc))}const vm=(...e)=>{const t=fc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=cc(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function cc(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Yt=e=>es?Symbol(e):"_vr_"+e,uc=Yt("rvlm"),di=Yt("rvd"),ya=Yt("r"),ts=Yt("rl"),Lr=Yt("rvl"),Nt=typeof window!="undefined";function dc(e){return e.__esModule||es&&e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function hr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const on=()=>{},mc=/\/$/,hc=e=>e.replace(mc,"");function pr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=bc(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function pc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function mi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Ht(t.matched[r],n.matched[a])&&ns(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ht(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ns(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vc(e[n],t[n]))return!1;return!0}function vc(e,t){return Array.isArray(e)?hi(e,t):Array.isArray(t)?hi(t,e):e===t}function hi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function bc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var vn;(function(e){e.pop="pop",e.push="push"})(vn||(vn={}));var sn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(sn||(sn={}));function yc(e){if(!e)if(Nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hc(e)}const wc=/^[^#]+#/;function xc(e,t){return e.replace(wc,"#")+t}function _c(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ac(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=_c(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function pi(e,t){return(history.state?history.state.position-t:-1)+e}const zr=new Map;function kc(e,t){zr.set(e,t)}function Ec(e){const t=zr.get(e);return zr.delete(e),t}let Cc=()=>location.protocol+"//"+location.host;function rs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),mi(l,"")}return mi(n,e)+r+a}function Oc(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const b=rs(e,location),A=n.value,M=t.value;let P=0;if(h){if(n.value=b,t.value=h,o&&o===A){o=null;return}P=M?h.position-M.position:0}else r(b);a.forEach(v=>{v(n.value,A,{delta:P,type:vn.pop,direction:P?P>0?sn.forward:sn.back:sn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const b=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(b),b}function f(){const{history:h}=window;!h.state||h.replaceState(Z({},h.state,{scroll:rr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function gi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?rr():null}}function Pc(e){const{history:t,location:n}=window,r={value:rs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Cc()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(b){console.error(b),n[f?"replace":"assign"](h)}}function o(l,c){const f=Z({},t.state,gi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Z({},a.value,t.state,{forward:l,scroll:rr()});i(f.current,f,!0);const d=Z({},gi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function bm(e){e=yc(e);const t=Pc(e),n=Oc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Z({location:"",base:e,go:r,createHref:xc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Tc(e){return typeof e=="string"||e&&typeof e=="object"}function as(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},is=Yt("nf");var vi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vi||(vi={}));function Ut(e,t){return Z(new Error,{type:e,[is]:!0},t)}function dt(e,t){return e instanceof Error&&is in e&&(t==null||!!(e.type&t))}const bi="[^/]+?",Sc={sensitive:!1,strict:!1,start:!0,end:!0},Mc=/[.+*?^${}()[\]/\\]/g;function Nc(e,t){const n=Z({},Sc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let b=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Mc,"\\$&"),b+=40;else if(h.type===1){const{value:A,repeatable:M,optional:P,regexp:v}=h;i.push({name:A,repeatable:M,optional:P});const p=v||bi;if(p!==bi){b+=10;try{new RegExp(`(${p})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${A}" (${p}): `+j.message)}}let R=M?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;d||(R=P&&c.length<2?`(?:/${R})`:"/"+R),P&&(R+="?"),a+=R,b+=20,P&&(b+=-8),M&&(b+=-20),p===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const b=f[h]||"",A=i[h-1];d[A.name]=b&&A.repeatable?b.split("/"):b}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const b of h)if(b.type===0)f+=b.value;else if(b.type===1){const{value:A,repeatable:M,optional:P}=b,v=A in c?c[A]:"";if(Array.isArray(v)&&!M)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const p=Array.isArray(v)?v.join("/"):v;if(!p)if(P)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=p}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Rc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ic(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Rc(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Dc={type:0,value:""},Fc=/[a-zA-Z0-9_]/;function Lc(e){if(!e)return[[]];if(e==="/")return[[Dc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Fc.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function zc(e,t,n){const r=Nc(Lc(e.path),n),a=Z(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function jc(e,t){const n=[],r=new Map;t=wi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const b=!h,A=Uc(f);A.aliasOf=h&&h.record;const M=wi(t,f),P=[A];if("alias"in f){const R=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of R)P.push(Z({},A,{components:h?h.record.components:A.components,path:j,aliasOf:h?h.record:A}))}let v,p;for(const R of P){const{path:j}=R;if(d&&j[0]!=="/"){const U=d.record.path,ne=U[U.length-1]==="/"?"":"/";R.path=d.record.path+(j&&ne+j)}if(v=zc(R,d,M),h?h.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),b&&f.name&&!yi(v)&&o(f.name)),"children"in A){const U=A.children;for(let ne=0;ne<U.length;ne++)i(U[ne],v,h&&h.children[ne])}h=h||v,l(v)}return p?()=>{o(p)}:on}function o(f){if(as(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Ic(f,n[d])>=0;)d++;n.splice(d,0,f),f.record.name&&!yi(f)&&r.set(f.record.name,f)}function c(f,d){let h,b={},A,M;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Ut(1,{location:f});M=h.record.name,b=Z(Hc(d.params,h.keys.filter(p=>!p.optional).map(p=>p.name)),f.params),A=h.stringify(b)}else if("path"in f)A=f.path,h=n.find(p=>p.re.test(A)),h&&(b=h.parse(A),M=h.record.name);else{if(h=d.name?r.get(d.name):n.find(p=>p.re.test(d.path)),!h)throw Ut(1,{location:f,currentLocation:d});M=h.record.name,b=Z({},d.params,f.params),A=h.stringify(b)}const P=[];let v=h;for(;v;)P.unshift(v.record),v=v.parent;return{name:M,path:A,params:b,matched:P,meta:Bc(P)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Hc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Uc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$c(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function $c(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Bc(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const os=/#/g,Wc=/&/g,Yc=/\//g,Kc=/=/g,qc=/\?/g,ss=/\+/g,Vc=/%5B/g,Gc=/%5D/g,ls=/%5E/g,Xc=/%60/g,fs=/%7B/g,Jc=/%7C/g,cs=/%7D/g,Zc=/%20/g;function wa(e){return encodeURI(""+e).replace(Jc,"|").replace(Vc,"[").replace(Gc,"]")}function Qc(e){return wa(e).replace(fs,"{").replace(cs,"}").replace(ls,"^")}function jr(e){return wa(e).replace(ss,"%2B").replace(Zc,"+").replace(os,"%23").replace(Wc,"%26").replace(Xc,"`").replace(fs,"{").replace(cs,"}").replace(ls,"^")}function eu(e){return jr(e).replace(Kc,"%3D")}function tu(e){return wa(e).replace(os,"%23").replace(qc,"%3F")}function nu(e){return e==null?"":tu(e).replace(Yc,"%2F")}function $n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ru(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ss," "),o=i.indexOf("="),s=$n(o<0?i:i.slice(0,o)),l=o<0?null:$n(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function xi(e){let t="";for(let n in e){const r=e[n];if(n=eu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&jr(i)):[r&&jr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function au(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Gt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function rt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Ut(4,{from:n,to:t})):d instanceof Error?s(d):Tc(d)?s(Ut(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function gr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(iu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(rt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=dc(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&rt(h,n,r,i,o)()}))}}return a}function iu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _i(e){const t=ot(ya),n=ot(ts),r=oe(()=>t.resolve(en(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Ht.bind(null,f));if(h>-1)return h;const b=Ai(l[c-2]);return c>1&&Ai(f)===b&&d[d.length-1].path!==b?d.findIndex(Ht.bind(null,l[c-2])):h}),i=oe(()=>a.value>-1&&fu(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&ns(n.params,r.value.params));function s(l={}){return lu(l)?t[en(e.replace)?"replace":"push"](en(e.to)).catch(on):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const ou=wn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_i,setup(e,{slots:t}){const n=yn(_i(e)),{options:r}=ot(ya),a=oe(()=>({[ki(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ki(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:nr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),su=ou;function lu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function fu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Ai(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ki=(e,t,n)=>e!=null?e:t!=null?t:n,cu=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=ot(Lr),a=oe(()=>e.route||r.value),i=ot(di,0),o=oe(()=>a.value.matched[i]);Sn(di,i+1),Sn(uc,o),Sn(Lr,a);const s=Pl();return rn(()=>[s.value,o.value,e.name],([l,c,f],[d,h,b])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Ht(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return Ei(n.default,{Component:f,route:l});const h=c.props[e.name],b=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=nr(f,Z({},b,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return Ei(n.default,{Component:M,route:l})||M}}});function Ei(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const uu=cu;function ym(e){const t=jc(e.routes,e),n=e.parseQuery||ru,r=e.stringifyQuery||xi,a=e.history,i=Gt(),o=Gt(),s=Gt(),l=Tl(Qe);let c=Qe;Nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hr.bind(null,y=>""+y),d=hr.bind(null,nu),h=hr.bind(null,$n);function b(y,I){let O,D;return as(y)?(O=t.getRecordMatcher(y),D=I):D=y,t.addRoute(D,O)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function M(){return t.getRoutes().map(y=>y.record)}function P(y){return!!t.getRecordMatcher(y)}function v(y,I){if(I=Z({},I||l.value),typeof y=="string"){const B=pr(n,y,I.path),u=t.resolve({path:B.path},I),m=a.createHref(B.fullPath);return Z(B,u,{params:h(u.params),hash:$n(B.hash),redirectedFrom:void 0,href:m})}let O;if("path"in y)O=Z({},y,{path:pr(n,y.path,I.path).path});else{const B=Z({},y.params);for(const u in B)B[u]==null&&delete B[u];O=Z({},y,{params:d(y.params)}),I.params=d(I.params)}const D=t.resolve(O,I),X=y.hash||"";D.params=f(h(D.params));const te=pc(r,Z({},y,{hash:Qc(X),path:D.path})),Y=a.createHref(te);return Z({fullPath:te,hash:X,query:r===xi?au(y.query):y.query||{}},D,{redirectedFrom:void 0,href:Y})}function p(y){return typeof y=="string"?pr(n,y,l.value.path):Z({},y)}function R(y,I){if(c!==y)return Ut(8,{from:I,to:y})}function j(y){return se(y)}function U(y){return j(Z(p(y),{replace:!0}))}function ne(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:O}=I;let D=typeof O=="function"?O(y):O;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=p(D):{path:D},D.params={}),Z({query:y.query,hash:y.hash,params:y.params},D)}}function se(y,I){const O=c=v(y),D=l.value,X=y.state,te=y.force,Y=y.replace===!0,B=ne(O);if(B)return se(Z(p(B),{state:X,force:te,replace:Y}),I||O);const u=O;u.redirectedFrom=I;let m;return!te&&gc(r,D,O)&&(m=Ut(16,{to:u,from:D}),Ct(D,D,!0,!1)),(m?Promise.resolve(m):ue(u,D)).catch(g=>dt(g)?g:ee(g,u,D)).then(g=>{if(g){if(dt(g,2))return se(Z(p(g.to),{state:X,force:te,replace:Y}),I||u)}else g=je(u,D,!0,Y,X);return Je(u,D,g),g})}function ke(y,I){const O=R(y,I);return O?Promise.reject(O):Promise.resolve()}function ue(y,I){let O;const[D,X,te]=du(y,I);O=gr(D.reverse(),"beforeRouteLeave",y,I);for(const B of D)B.leaveGuards.forEach(u=>{O.push(rt(u,y,I))});const Y=ke.bind(null,y,I);return O.push(Y),Pt(O).then(()=>{O=[];for(const B of i.list())O.push(rt(B,y,I));return O.push(Y),Pt(O)}).then(()=>{O=gr(X,"beforeRouteUpdate",y,I);for(const B of X)B.updateGuards.forEach(u=>{O.push(rt(u,y,I))});return O.push(Y),Pt(O)}).then(()=>{O=[];for(const B of y.matched)if(B.beforeEnter&&!I.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const u of B.beforeEnter)O.push(rt(u,y,I));else O.push(rt(B.beforeEnter,y,I));return O.push(Y),Pt(O)}).then(()=>(y.matched.forEach(B=>B.enterCallbacks={}),O=gr(te,"beforeRouteEnter",y,I),O.push(Y),Pt(O))).then(()=>{O=[];for(const B of o.list())O.push(rt(B,y,I));return O.push(Y),Pt(O)}).catch(B=>dt(B,8)?B:Promise.reject(B))}function Je(y,I,O){for(const D of s.list())D(y,I,O)}function je(y,I,O,D,X){const te=R(y,I);if(te)return te;const Y=I===Qe,B=Nt?history.state:{};O&&(D||Y?a.replace(y.fullPath,Z({scroll:Y&&B&&B.scroll},X)):a.push(y.fullPath,X)),l.value=y,Ct(y,I,O,Y),Ee()}let He;function At(){He=a.listen((y,I,O)=>{const D=v(y),X=ne(D);if(X){se(Z(X,{replace:!0}),D).catch(on);return}c=D;const te=l.value;Nt&&kc(pi(te.fullPath,O.delta),rr()),ue(D,te).catch(Y=>dt(Y,12)?Y:dt(Y,2)?(se(Y.to,D).then(B=>{dt(B,20)&&!O.delta&&O.type===vn.pop&&a.go(-1,!1)}).catch(on),Promise.reject()):(O.delta&&a.go(-O.delta,!1),ee(Y,D,te))).then(Y=>{Y=Y||je(D,te,!1),Y&&(O.delta?a.go(-O.delta,!1):O.type===vn.pop&&dt(Y,20)&&a.go(-1,!1)),Je(D,te,Y)}).catch(on)})}let kt=Gt(),Et=Gt(),le;function ee(y,I,O){Ee(y);const D=Et.list();return D.length?D.forEach(X=>X(y,I,O)):console.error(y),Promise.reject(y)}function G(){return le&&l.value!==Qe?Promise.resolve():new Promise((y,I)=>{kt.add([y,I])})}function Ee(y){le||(le=!0,At(),kt.list().forEach(([I,O])=>y?O(y):I()),kt.reset())}function Ct(y,I,O,D){const{scrollBehavior:X}=e;if(!Nt||!X)return Promise.resolve();const te=!O&&Ec(pi(y.fullPath,0))||(D||!O)&&history.state&&history.state.scroll||null;return Eo().then(()=>X(y,I,te)).then(Y=>Y&&Ac(Y)).catch(Y=>ee(Y,y,I))}const Ue=y=>a.go(y);let Ne;const Ce=new Set;return{currentRoute:l,addRoute:b,removeRoute:A,hasRoute:P,getRoutes:M,resolve:v,options:e,push:j,replace:U,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Et.add,isReady:G,install(y){const I=this;y.component("RouterLink",su),y.component("RouterView",uu),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>en(l)}),Nt&&!Ne&&l.value===Qe&&(Ne=!0,j(a.location).catch(X=>{}));const O={};for(const X in Qe)O[X]=oe(()=>l.value[X]);y.provide(ya,I),y.provide(ts,yn(O)),y.provide(Lr,l);const D=y.unmount;Ce.add(y),y.unmount=function(){Ce.delete(y),Ce.size<1&&(c=Qe,He&&He(),l.value=Qe,Ne=!1,le=!1),D()}}}}function Pt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function du(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Ht(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Ht(c,l))||a.push(l))}return[n,r,a]}var mu=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,hu=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,pu=/[^-+\dA-Z]/g;function wm(e,t,n,r){if(arguments.length===1&&typeof e=="string"&&!/\d/.test(e)&&(t=e,e=void 0),e=e||e===0?e:new Date,e instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");t=String(Ci[t]||t||Ci.default);var a=t.slice(0,4);(a==="UTC:"||a==="GMT:")&&(t=t.slice(4),n=!0,a==="GMT:"&&(r=!0));var i=function(){return n?"getUTC":"get"},o=function(){return e[i()+"Date"]()},s=function(){return e[i()+"Day"]()},l=function(){return e[i()+"Month"]()},c=function(){return e[i()+"FullYear"]()},f=function(){return e[i()+"Hours"]()},d=function(){return e[i()+"Minutes"]()},h=function(){return e[i()+"Seconds"]()},b=function(){return e[i()+"Milliseconds"]()},A=function(){return n?0:e.getTimezoneOffset()},M=function(){return gu(e)},P=function(){return vu(e)},v={d:function(){return o()},dd:function(){return ye(o())},ddd:function(){return ge.dayNames[s()]},DDD:function(){return Oi({y:c(),m:l(),d:o(),_:i(),dayName:ge.dayNames[s()],short:!0})},dddd:function(){return ge.dayNames[s()+7]},DDDD:function(){return Oi({y:c(),m:l(),d:o(),_:i(),dayName:ge.dayNames[s()+7]})},m:function(){return l()+1},mm:function(){return ye(l()+1)},mmm:function(){return ge.monthNames[l()]},mmmm:function(){return ge.monthNames[l()+12]},yy:function(){return String(c()).slice(2)},yyyy:function(){return ye(c(),4)},h:function(){return f()%12||12},hh:function(){return ye(f()%12||12)},H:function(){return f()},HH:function(){return ye(f())},M:function(){return d()},MM:function(){return ye(d())},s:function(){return h()},ss:function(){return ye(h())},l:function(){return ye(b(),3)},L:function(){return ye(Math.floor(b()/10))},t:function(){return f()<12?ge.timeNames[0]:ge.timeNames[1]},tt:function(){return f()<12?ge.timeNames[2]:ge.timeNames[3]},T:function(){return f()<12?ge.timeNames[4]:ge.timeNames[5]},TT:function(){return f()<12?ge.timeNames[6]:ge.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":bu(e)},o:function(){return(A()>0?"-":"+")+ye(Math.floor(Math.abs(A())/60)*100+Math.abs(A())%60,4)},p:function(){return(A()>0?"-":"+")+ye(Math.floor(Math.abs(A())/60),2)+":"+ye(Math.floor(Math.abs(A())%60),2)},S:function(){return["th","st","nd","rd"][o()%10>3?0:(o()%100-o()%10!=10)*o()%10]},W:function(){return M()},WW:function(){return ye(M())},N:function(){return P()}};return t.replace(mu,function(p){return p in v?v[p]():p.slice(1,p.length-1)})}var Ci={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},ge={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},ye=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(t).padStart(n,"0")},Oi=function(t){var n=t.y,r=t.m,a=t.d,i=t._,o=t.dayName,s=t.short,l=s===void 0?!1:s,c=new Date,f=new Date;f.setDate(f[i+"Date"]()-1);var d=new Date;d.setDate(d[i+"Date"]()+1);var h=function(){return c[i+"Date"]()},b=function(){return c[i+"Month"]()},A=function(){return c[i+"FullYear"]()},M=function(){return f[i+"Date"]()},P=function(){return f[i+"Month"]()},v=function(){return f[i+"FullYear"]()},p=function(){return d[i+"Date"]()},R=function(){return d[i+"Month"]()},j=function(){return d[i+"FullYear"]()};return A()===n&&b()===r&&h()===a?l?"Tdy":"Today":v()===n&&P()===r&&M()===a?l?"Ysd":"Yesterday":j()===n&&R()===r&&p()===a?l?"Tmw":"Tomorrow":o},gu=function(t){var n=new Date(t.getFullYear(),t.getMonth(),t.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=new Date(n.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);var a=n.getTimezoneOffset()-r.getTimezoneOffset();n.setHours(n.getHours()-a);var i=(n-r)/(864e5*7);return 1+Math.floor(i)},vu=function(t){var n=t.getDay();return n===0&&(n=7),n},bu=function(t){return(String(t).match(hu)||[""]).pop().replace(pu,"").replace(/GMT\+0000/g,"UTC")};/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){xu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function yu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ti(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&Ti(e.prototype,t),n&&Ti(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xa(e,t){return Au(e)||Eu(e,t)||us(e,t)||Ou()}function ar(e){return _u(e)||ku(e)||us(e)||Cu()}function _u(e){if(Array.isArray(e))return Hr(e)}function Au(e){if(Array.isArray(e))return e}function ku(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function us(e,t){if(!!e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ou(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Si=function(){},_a={},ds={},ms=null,hs={mark:Si,measure:Si};try{typeof window!="undefined"&&(_a=window),typeof document!="undefined"&&(ds=document),typeof MutationObserver!="undefined"&&(ms=MutationObserver),typeof performance!="undefined"&&(hs=performance)}catch{}var Pu=_a.navigator||{},Mi=Pu.userAgent,Ni=Mi===void 0?"":Mi,lt=_a,ae=ds,Ri=ms,On=hs;lt.document;var Xe=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",ps=~Ni.indexOf("MSIE")||~Ni.indexOf("Trident/"),Ke="___FONT_AWESOME___",Ur=16,gs="fa",vs="svg-inline--fa",xt="data-fa-i2svg",$r="data-fa-pseudo-element",Tu="data-fa-pseudo-element-pending",Aa="data-prefix",ka="data-icon",Ii="fontawesome-i2svg",Su="async",Mu=["HTML","HEAD","STYLE","SCRIPT"],bs=function(){try{return!0}catch{return!1}}(),Ea={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ys={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Nu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ru=/fa[srltdbk\-\ ]/,ws="fa-layers-text",Iu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Du={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},xs=[1,2,3,4,5,6,7,8,9,10],Fu=xs.concat([11,12,13,14,15,16,17,18,19,20]),Lu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zu=[].concat(ar(Object.keys(Wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(xs.map(function(e){return"".concat(e,"x")})).concat(Fu.map(function(e){return"w-".concat(e)})),_s=lt.FontAwesomeConfig||{};function ju(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Uu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uu.forEach(function(e){var t=xa(e,2),n=t[0],r=t[1],a=Hu(ju(n));a!=null&&(_s[r]=a)})}var $u={familyPrefix:gs,styleDefault:"solid",replacementClass:vs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ln=S(S({},$u),_s);ln.autoReplaceSvg||(ln.observeMutations=!1);var z={};Object.keys(ln).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){ln[e]=n,Nn.forEach(function(r){return r(z)})},get:function(){return ln[e]}})});lt.FontAwesomeConfig=z;var Nn=[];function Bu(e){return Nn.push(e),function(){Nn.splice(Nn.indexOf(e),1)}}var et=Ur,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wu(e){if(!(!e||!Xe)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var Yu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bn(){for(var e=12,t="";e-- >0;)t+=Yu[Math.random()*62|0];return t}function Kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ca(e){return e.classList?Kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function As(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(As(e[n]),'" ')},"").trim()}function ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Oa(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function qu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Vu(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ps?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Gu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ks(){var e=gs,t=vs,n=z.familyPrefix,r=z.replacementClass,a=Gu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Di=!1;function vr(){z.autoAddCss&&!Di&&(Wu(ks()),Di=!0)}var Xu={mixout:function(){return{dom:{css:ks,insertCss:vr}}},hooks:function(){return{beforeDOMElementCreation:function(){vr()},beforeI2svg:function(){vr()}}}},qe=lt||{};qe[Ke]||(qe[Ke]={});qe[Ke].styles||(qe[Ke].styles={});qe[Ke].hooks||(qe[Ke].hooks={});qe[Ke].shims||(qe[Ke].shims=[]);var Te=qe[Ke],Es=[],Ju=function e(){ae.removeEventListener("DOMContentLoaded",e),Yn=1,Es.map(function(t){return t()})},Yn=!1;Xe&&(Yn=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Yn||ae.addEventListener("DOMContentLoaded",Ju));function Zu(e){!Xe||(Yn?setTimeout(e,0):Es.push(e))}function xn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?As(e):"<".concat(t," ").concat(Ku(r),">").concat(i.map(xn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qu(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Br(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Li(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Li(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,Li(t)):Te.styles[e]=S(S({},Te.styles[e]||{}),i),e==="fas"&&Wr("fa",t)}var fn=Te.styles,nd=Te.shims,rd=Object.values(ys),Pa=null,Cs={},Os={},Ps={},Ts={},Ss={},ad=Object.keys(Ea);function id(e){return~zu.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!id(a)?a:null}var Ms=function(){var t=function(i){return br(fn,function(o,s,l){return o[l]=br(s,i,{}),o},{})};Cs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Os=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ss=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in fn||z.autoFetchSvg,r=br(nd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ps=r.names,Ts=r.unicodes,Pa=or(z.styleDefault)};Bu(function(e){Pa=or(e.styleDefault)});Ms();function Ta(e,t){return(Cs[e]||{})[t]}function sd(e,t){return(Os[e]||{})[t]}function Rt(e,t){return(Ss[e]||{})[t]}function Ns(e){return Ps[e]||{prefix:null,iconName:null}}function ld(e){var t=Ts[e],n=Ta("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Pa}var Sa=function(){return{prefix:null,iconName:null,rest:[]}};function or(e){var t=Ea[e],n=Wn[e]||Wn[t],r=e in Te.styles?e:null;return n||r||null}function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=od(z.familyPrefix,s);if(fn[s]?(s=rd.includes(s)?Nu[s]:s,a=s,o.prefix=s):ad.indexOf(s)>-1?(a=s,o.prefix=or(s)):l?o.iconName=l:s!==z.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?Ns(o.iconName):{},f=Rt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!fn.far&&fn.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},Sa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ft()||"fas"),i}var fd=function(){function e(){yu(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=S(S({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=ys[s];l&&Wr(l,o[s]),Ms()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),zi=[],It={},zt={},cd=Object.keys(zt);function ud(e,t){var n=t.mixoutsTo;return zi=e,It={},Object.keys(zt).forEach(function(r){cd.indexOf(r)===-1&&delete zt[r]}),zi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(zt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function _t(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zt[e]?zt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(!!t)return t=Rt(n,t)||t,Fi(Rs.definitions,n,t)||Fi(Te.styles,n,t)}var Rs=new fd,dd=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,_t("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(_t("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Zu(function(){pd({autoReplaceSvgRoot:n}),_t("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=or(t[0]);return{prefix:r,iconName:Rt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(Ru))){var a=sr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:Rt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:Rt(i,t)||t}}}},Ae={noAuto:dd,config:z,dom:md,parse:hd,library:Rs,findIconDefinition:Kr,toHtml:xn},pd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Te.styles).length>0||z.autoFetchSvg)&&Xe&&z.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return xn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xe){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ir(S(S({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function Ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,b=h===void 0?!1:h,A=r.found?r:n,M=A.width,P=A.height,v=a==="fak",p=[z.replacementClass,i?"".concat(z.familyPrefix,"-").concat(i):""].filter(function(ue){return d.classes.indexOf(ue)===-1}).filter(function(ue){return ue!==""||!!ue}).concat(d.classes).join(" "),R={children:[],attributes:S(S({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(P)})},j=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/P*16*.0625,"em")}:{};b&&(R.attributes[xt]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(f||bn())},children:[l]}),delete R.attributes.title);var U=S(S({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:S(S({},j),d.styles)}),ne=r.found&&n.found?Ve("generateAbstractMask",U)||{children:[],attributes:{}}:Ve("generateAbstractIcon",U)||{children:[],attributes:{}},se=ne.children,ke=ne.attributes;return U.children=se,U.attributes=ke,s?vd(U):gd(U)}function ji(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xt]="");var f=S({},o.styles);Oa(a)&&(f.transform=Vu({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=ir(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function bd(e){var t=e.content,n=e.title,r=e.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yr=Te.styles;function qr(e){var t=e[0],n=e[1],r=e.slice(4),a=xa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yd={found:!1,width:512,height:512};function wd(e,t){!bs&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vr(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(Ve("missingIconAbstract"),n==="fa"){var i=Ns(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yr[t]&&yr[t][e]){var o=yr[t][e];return r(qr(o))}wd(e,t),r(S(S({},yd),{},{icon:z.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Hi=function(){},Gr=z.measurePerformance&&On&&On.mark&&On.measure?On:{mark:Hi,measure:Hi},Zt='FA "6.0.0"',xd=function(t){return Gr.mark("".concat(Zt," ").concat(t," begins")),function(){return Is(t)}},Is=function(t){Gr.mark("".concat(Zt," ").concat(t," ends")),Gr.measure("".concat(Zt," ").concat(t),"".concat(Zt," ").concat(t," begins"),"".concat(Zt," ").concat(t," ends"))},Na={begin:xd,end:Is},Rn=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function _d(e){var t=e.getAttribute?e.getAttribute(Aa):null,n=e.getAttribute?e.getAttribute(ka):null;return t&&n}function Ad(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function kd(){if(z.autoReplaceSvg===!0)return In.replace;var e=In[z.autoReplaceSvg];return e||In.replace}function Ed(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Cd(e){return ae.createElement(e)}function Ds(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ed:Cd:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ds(o,{ceFn:r}))}),a}function Od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ds(a),n)}),n.getAttribute(xt)===null&&z.keepOriginalSource){var r=ae.createComment(Od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ca(n).indexOf(z.replacementClass))return In.replace(t);var a=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return xn(s)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=o}};function $i(e){e()}function Fs(e,t){var n=typeof t=="function"?t:Rn;if(e.length===0)n();else{var r=$i;z.mutateApproach===Su&&(r=lt.requestAnimationFrame||$i),r(function(){var a=kd(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ra=!1;function Ls(){Ra=!0}function Xr(){Ra=!1}var Kn=null;function Bi(e){if(!!Ri&&!!z.observeMutations){var t=e.treeCallback,n=t===void 0?Rn:t,r=e.nodeCallback,a=r===void 0?Rn:r,i=e.pseudoElementsCallback,o=i===void 0?Rn:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;Kn=new Ri(function(c){if(!Ra){var f=ft();Kt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ui(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ui(d.target)&&~Lu.indexOf(d.attributeName))if(d.attributeName==="class"&&_d(d.target)){var h=sr(Ca(d.target)),b=h.prefix,A=h.iconName;d.target.setAttribute(Aa,b||f),A&&d.target.setAttribute(ka,A)}else Ad(d.target)&&a(d.target)})}}),!!Xe&&Kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){!Kn||Kn.disconnect()}function Td(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Sd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=sr(Ca(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=sd(a.prefix,e.innerText)||Ta(a.prefix,Br(e.innerText))),a}function Md(e){var t=Kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||bn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Md(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?Td(e):[];return S({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Rd=Te.styles;function zs(e){var t=z.autoReplaceSvg==="nest"?Wi(e,{styleParser:!1}):Wi(e);return~t.extra.classes.indexOf(ws)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(Ii,"-").concat(d))},a=function(d){return n.remove("".concat(Ii,"-").concat(d))},i=z.autoFetchSvg?Object.keys(Ea):Object.keys(Rd),o=[".".concat(ws,":not([").concat(xt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(xt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),c=s.reduce(function(f,d){try{var h=zs(d);h&&f.push(h)}catch(b){bs||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Fs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Id(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zs(e).then(function(n){n&&Fs([n],t)})}function Dd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,S(S({},n),{},{mask:a}))}}var Fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,b=n.titleId,A=b===void 0?null:b,M=n.classes,P=M===void 0?[]:M,v=n.attributes,p=v===void 0?{}:v,R=n.styles,j=R===void 0?{}:R;if(!!t){var U=t.prefix,ne=t.iconName,se=t.icon;return lr(S({type:"icon"},t),function(){return _t("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(h?p["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(A||bn()):(p["aria-hidden"]="true",p.focusable="false")),Ma({icons:{main:qr(se),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ne,transform:S(S({},Le),a),symbol:o,title:h,maskId:f,titleId:A,extra:{attributes:p,styles:j,classes:P}})})}},Ld={mixout:function(){return{icon:Dd(Fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Yi,n.nodeCallback=Id,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return Yi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(b,A){Promise.all([Vr(a,s),f.iconName?Vr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var P=xa(M,2),v=P[0],p=P[1];b([n,Ma({icons:{main:v,mask:p},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ir(s);l.length>0&&(a.style=l);var c;return Oa(o)&&(c=Ve("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},zd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return lr({type:"layer"},function(){_t("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(ar(i)).join(" ")},children:o}]})}}}},jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return lr({type:"counter",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(ar(s))}})})}}}},Hd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,b=h===void 0?{}:h;return lr({type:"text",content:n},function(){return _t("beforeDOMElementCreation",{content:n,params:r}),ji({content:n,transform:S(S({},Le),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(z.familyPrefix,"-layers-text")].concat(ar(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ps){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ji({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ud=new RegExp('"',"ug"),Ki=[1105920,1112319];function $d(e){var t=e.replace(Ud,""),n=td(t,0),r=n>=Ki[0]&&n<=Ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Br(a?t[0]:t),isSecondary:r||a}}function qi(e,t){var n="".concat(Tu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kt(e.children),o=i.filter(function(ne){return ne.getAttribute($r)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Iu),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Wn[l[2].toLowerCase()]:Du[c],b=$d(d),A=b.value,M=b.isSecondary,P=l[0].startsWith("FontAwesome"),v=Ta(h,A),p=v;if(P){var R=ld(A);R.iconName&&R.prefix&&(v=R.iconName,h=R.prefix)}if(v&&!M&&(!o||o.getAttribute(Aa)!==h||o.getAttribute(ka)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var j=Nd(),U=j.extra;U.attributes[$r]=t,Vr(v,h).then(function(ne){var se=Ma(S(S({},j),{},{icons:{main:ne,mask:Sa()},prefix:h,iconName:p,extra:U,watchable:!0})),ke=ae.createElement("svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=se.map(function(ue){return xn(ue)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bd(e){return Promise.all([qi(e,"::before"),qi(e,"::after")])}function Wd(e){return e.parentNode!==document.head&&!~Mu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vi(e){if(!!Xe)return new Promise(function(t,n){var r=Kt(e.querySelectorAll("*")).filter(Wd).map(Bd),a=Na.begin("searchPseudoElements");Ls(),Promise.all(r).then(function(){a(),Xr(),t()}).catch(function(){a(),Xr(),n()})})}var Yd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;z.searchPseudoElements&&Vi(a)}}},Gi=!1,Kd={mixout:function(){return{dom:{unwatch:function(){Ls(),Gi=!0}}}},hooks:function(){return{bootstrap:function(){Bi(Yr("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var r=n.observeMutationsRoot;Gi?Xr():Bi(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},qd={mixout:function(){return{parse:{transform:function(n){return Xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:h};return{tag:"g",attributes:S({},b.outer),children:[{tag:"g",attributes:S({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:S(S({},r.icon.attributes),b.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vd(e){return e.tag==="g"?e.children:[e]}var Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?sr(a.split(" ").map(function(o){return o.trim()})):Sa();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,b=qu({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:S(S({},wr),{},{fill:"white"})},M=f.children?{children:f.children.map(Ji)}:{},P={tag:"g",attributes:S({},b.inner),children:[Ji(S({tag:f.tag,attributes:S(S({},f.attributes),b.path)},M))]},v={tag:"g",attributes:S({},b.outer),children:[P]},p="mask-".concat(s||bn()),R="clip-".concat(s||bn()),j={tag:"mask",attributes:S(S({},wr),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Vd(h)},j]};return r.push(U,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(p,")")},wr)}),{children:r,attributes:a}}}},Xd={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:S(S({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=S(S({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:S(S({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:S(S({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:S(S({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:S(S({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zd=[Xu,Ld,zd,jd,Hd,Yd,Kd,qd,Gd,Xd,Jd];ud(Zd,{mixoutsTo:Ae});Ae.noAuto;var js=Ae.config,xm=Ae.library;Ae.dom;var Hs=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var Qd=Ae.icon;Ae.layer;var em=Ae.text;Ae.counter;var tm=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function nm(e,t){return t={exports:{}},e(t,t.exports),t.exports}var rm=nm(function(e){(function(t){var n=function(v,p,R){if(!c(p)||d(p)||h(p)||b(p)||l(p))return p;var j,U=0,ne=0;if(f(p))for(j=[],ne=p.length;U<ne;U++)j.push(n(v,p[U],R));else{j={};for(var se in p)Object.prototype.hasOwnProperty.call(p,se)&&(j[v(se,R)]=n(v,p[se],R))}return j},r=function(v,p){p=p||{};var R=p.separator||"_",j=p.split||/(?=[A-Z])/;return v.split(j).join(R)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,R){return R?R.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=a(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return r(v,p).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},M=function(v,p){var R=p&&"process"in p?p.process:p;return typeof R!="function"?v:function(j,U){return R(j,v,U)}},P={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return n(M(a,p),v)},decamelizeKeys:function(v,p){return n(M(o,p),v,p)},pascalizeKeys:function(v,p){return n(M(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(tm)}),am=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},qn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},im=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Jr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function om(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=rm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function sm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ia(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=sm(f);break;case"style":l.style=om(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=im(n,["class","style"]);return nr(e.tag,qn({},t,{class:a.class,style:qn({},a.style,o)},a.attrs,s),r)}var Us=!1;try{Us=!0}catch{}function lm(){if(!Us&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function cn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qt({},e,t):{}}function fm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Qt(t,"fa-"+e.size,e.size!==null),Qt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Qt(t,"fa-pull-"+e.pull,e.pull!==null),Qt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Zi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":am(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _m=wn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Zi(t.icon)}),i=oe(function(){return cn("classes",fm(t))}),o=oe(function(){return cn("transform",typeof t.transform=="string"?Hs.transform(t.transform):t.transform)}),s=oe(function(){return cn("mask",Zi(t.mask))}),l=oe(function(){return Qd(a.value,qn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});rn(l,function(f){if(!f)return lm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?Ia(l.value.abstract[0],{},r):null});return function(){return c.value}}});wn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=js.familyPrefix,i=oe(function(){return[a+"-layers"].concat(Jr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return nr("div",{class:i.value},r.default?r.default():[])}}});wn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=js.familyPrefix,i=oe(function(){return cn("classes",[].concat(Jr(t.counter?[a+"-layers-counter"]:[]),Jr(t.position?[a+"-layers-"+t.position]:[])))}),o=oe(function(){return cn("transform",typeof t.transform=="string"?Hs.transform(t.transform):t.transform)}),s=oe(function(){var c=em(t.value.toString(),qn({},o.value,i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=oe(function(){return Ia(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Am={prefix:"fas",iconName:"angle-left",icon:[256,512,[8249],"f104","M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"]},km={prefix:"fas",iconName:"angle-right",icon:[256,512,[8250],"f105","M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"]},Em={prefix:"fas",iconName:"angles-left",icon:[448,512,[171,"angle-double-left"],"f100","M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z"]},Cm={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]};export{Be as F,uu as R,Xo as a,xe as b,mm as c,wm as d,pm as e,hm as f,Of as g,ym as h,bm as i,Am as j,km as k,xm as l,Em as m,ea as n,Ef as o,Cm as p,vm as q,dm as r,_m as s,cm as t,en as u,gm as v,um as w};
