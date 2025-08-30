var Aa=n=>{throw TypeError(n)};var qs=(n,t,e)=>t.has(n)||Aa("Cannot "+e);var k=(n,t,e)=>(qs(n,t,"read from private field"),e?e.call(n):t.get(n)),mt=(n,t,e)=>t.has(n)?Aa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),et=(n,t,e,r)=>(qs(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),at=(n,t,e)=>(qs(n,t,"access private method"),e);import{S as Uh,p as Ra,h as Lt,s as ei,i as Fn,n as ni,k as ri,l as ba,t as Bh,m as jh,o as $h,q as Sa,v as Qu,a as Jt,w as qh,x as zh,e as Hh}from"./index-mHn4ytvZ.js";var Pt,H,Zn,Ct,Ne,Ze,Yt,ce,tr,tn,en,Oe,xe,le,nn,Q,kn,si,ii,oi,ai,ui,ci,li,Xu,Wu,Gh=(Wu=class extends Uh{constructor(t,e){super();mt(this,Q);mt(this,Pt);mt(this,H);mt(this,Zn);mt(this,Ct);mt(this,Ne);mt(this,Ze);mt(this,Yt);mt(this,ce);mt(this,tr);mt(this,tn);mt(this,en);mt(this,Oe);mt(this,xe);mt(this,le);mt(this,nn,new Set);this.options=e,et(this,Pt,t),et(this,ce,null),et(this,Yt,Ra()),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(k(this,H).addObserver(this),Ca(k(this,H),this.options)?at(this,Q,kn).call(this):this.updateResult(),at(this,Q,ai).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return hi(k(this,H),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return hi(k(this,H),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,at(this,Q,ui).call(this),at(this,Q,ci).call(this),k(this,H).removeObserver(this)}setOptions(t){const e=this.options,r=k(this,H);if(this.options=k(this,Pt).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Lt(this.options.enabled,k(this,H))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");at(this,Q,li).call(this),k(this,H).setOptions(this.options),e._defaulted&&!ei(this.options,e)&&k(this,Pt).getQueryCache().notify({type:"observerOptionsUpdated",query:k(this,H),observer:this});const s=this.hasListeners();s&&Pa(k(this,H),r,this.options,e)&&at(this,Q,kn).call(this),this.updateResult(),s&&(k(this,H)!==r||Lt(this.options.enabled,k(this,H))!==Lt(e.enabled,k(this,H))||Fn(this.options.staleTime,k(this,H))!==Fn(e.staleTime,k(this,H)))&&at(this,Q,si).call(this);const o=at(this,Q,ii).call(this);s&&(k(this,H)!==r||Lt(this.options.enabled,k(this,H))!==Lt(e.enabled,k(this,H))||o!==k(this,le))&&at(this,Q,oi).call(this,o)}getOptimisticResult(t){const e=k(this,Pt).getQueryCache().build(k(this,Pt),t),r=this.createResult(e,t);return Wh(this,r)&&(et(this,Ct,r),et(this,Ze,this.options),et(this,Ne,k(this,H).state)),r}getCurrentResult(){return k(this,Ct)}trackResult(t,e){return new Proxy(t,{get:(r,s)=>(this.trackProp(s),e==null||e(s),s==="promise"&&!this.options.experimental_prefetchInRender&&k(this,Yt).status==="pending"&&k(this,Yt).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),Reflect.get(r,s))})}trackProp(t){k(this,nn).add(t)}getCurrentQuery(){return k(this,H)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=k(this,Pt).defaultQueryOptions(t),r=k(this,Pt).getQueryCache().build(k(this,Pt),e);return r.fetch().then(()=>this.createResult(r,e))}fetch(t){return at(this,Q,kn).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),k(this,Ct)))}createResult(t,e){var _;const r=k(this,H),s=this.options,o=k(this,Ct),a=k(this,Ne),c=k(this,Ze),d=t!==r?t.state:k(this,Zn),{state:m}=t;let E={...m},I=!1,b;if(e._optimisticResults){const y=this.hasListeners(),T=!y&&Ca(t,e),A=y&&Pa(t,r,e,s);(T||A)&&(E={...E,...$h(m.data,t.options)}),e._optimisticResults==="isRestoring"&&(E.fetchStatus="idle")}let{error:V,errorUpdatedAt:O,status:P}=E;b=E.data;let z=!1;if(e.placeholderData!==void 0&&b===void 0&&P==="pending"){let y;o!=null&&o.isPlaceholderData&&e.placeholderData===(c==null?void 0:c.placeholderData)?(y=o.data,z=!0):y=typeof e.placeholderData=="function"?e.placeholderData((_=k(this,en))==null?void 0:_.state.data,k(this,en)):e.placeholderData,y!==void 0&&(P="success",b=Sa(o==null?void 0:o.data,y,e),I=!0)}if(e.select&&b!==void 0&&!z)if(o&&b===(a==null?void 0:a.data)&&e.select===k(this,tr))b=k(this,tn);else try{et(this,tr,e.select),b=e.select(b),b=Sa(o==null?void 0:o.data,b,e),et(this,tn,b),et(this,ce,null)}catch(y){et(this,ce,y)}k(this,ce)&&(V=k(this,ce),b=k(this,tn),O=Date.now(),P="error");const B=E.fetchStatus==="fetching",$=P==="pending",tt=P==="error",xt=$&&B,ot=b!==void 0,p={status:P,fetchStatus:E.fetchStatus,isPending:$,isSuccess:P==="success",isError:tt,isInitialLoading:xt,isLoading:xt,data:b,dataUpdatedAt:E.dataUpdatedAt,error:V,errorUpdatedAt:O,failureCount:E.fetchFailureCount,failureReason:E.fetchFailureReason,errorUpdateCount:E.errorUpdateCount,isFetched:E.dataUpdateCount>0||E.errorUpdateCount>0,isFetchedAfterMount:E.dataUpdateCount>d.dataUpdateCount||E.errorUpdateCount>d.errorUpdateCount,isFetching:B,isRefetching:B&&!$,isLoadingError:tt&&!ot,isPaused:E.fetchStatus==="paused",isPlaceholderData:I,isRefetchError:tt&&ot,isStale:Oi(t,e),refetch:this.refetch,promise:k(this,Yt),isEnabled:Lt(e.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const y=g=>{p.status==="error"?g.reject(p.error):p.data!==void 0&&g.resolve(p.data)},T=()=>{const g=et(this,Yt,p.promise=Ra());y(g)},A=k(this,Yt);switch(A.status){case"pending":t.queryHash===r.queryHash&&y(A);break;case"fulfilled":(p.status==="error"||p.data!==A.value)&&T();break;case"rejected":(p.status!=="error"||p.error!==A.reason)&&T();break}}return p}updateResult(){const t=k(this,Ct),e=this.createResult(k(this,H),this.options);if(et(this,Ne,k(this,H).state),et(this,Ze,this.options),k(this,Ne).data!==void 0&&et(this,en,k(this,H)),ei(e,t))return;et(this,Ct,e);const r=()=>{if(!t)return!0;const{notifyOnChangeProps:s}=this.options,o=typeof s=="function"?s():s;if(o==="all"||!o&&!k(this,nn).size)return!0;const a=new Set(o??k(this,nn));return this.options.throwOnError&&a.add("error"),Object.keys(k(this,Ct)).some(c=>{const h=c;return k(this,Ct)[h]!==t[h]&&a.has(h)})};at(this,Q,Xu).call(this,{listeners:r()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&at(this,Q,ai).call(this)}},Pt=new WeakMap,H=new WeakMap,Zn=new WeakMap,Ct=new WeakMap,Ne=new WeakMap,Ze=new WeakMap,Yt=new WeakMap,ce=new WeakMap,tr=new WeakMap,tn=new WeakMap,en=new WeakMap,Oe=new WeakMap,xe=new WeakMap,le=new WeakMap,nn=new WeakMap,Q=new WeakSet,kn=function(t){at(this,Q,li).call(this);let e=k(this,H).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(ni)),e},si=function(){at(this,Q,ui).call(this);const t=Fn(this.options.staleTime,k(this,H));if(ri||k(this,Ct).isStale||!ba(t))return;const r=Bh(k(this,Ct).dataUpdatedAt,t)+1;et(this,Oe,setTimeout(()=>{k(this,Ct).isStale||this.updateResult()},r))},ii=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(k(this,H)):this.options.refetchInterval)??!1},oi=function(t){at(this,Q,ci).call(this),et(this,le,t),!(ri||Lt(this.options.enabled,k(this,H))===!1||!ba(k(this,le))||k(this,le)===0)&&et(this,xe,setInterval(()=>{(this.options.refetchIntervalInBackground||jh.isFocused())&&at(this,Q,kn).call(this)},k(this,le)))},ai=function(){at(this,Q,si).call(this),at(this,Q,oi).call(this,at(this,Q,ii).call(this))},ui=function(){k(this,Oe)&&(clearTimeout(k(this,Oe)),et(this,Oe,void 0))},ci=function(){k(this,xe)&&(clearInterval(k(this,xe)),et(this,xe,void 0))},li=function(){const t=k(this,Pt).getQueryCache().build(k(this,Pt),this.options);if(t===k(this,H))return;const e=k(this,H);et(this,H,t),et(this,Zn,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},Xu=function(t){Qu.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(k(this,Ct))}),k(this,Pt).getQueryCache().notify({query:k(this,H),type:"observerResultsUpdated"})})},Wu);function Kh(n,t){return Lt(t.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&t.retryOnMount===!1)}function Ca(n,t){return Kh(n,t)||n.state.data!==void 0&&hi(n,t,t.refetchOnMount)}function hi(n,t,e){if(Lt(t.enabled,n)!==!1&&Fn(t.staleTime,n)!=="static"){const r=typeof e=="function"?e(n):e;return r==="always"||r!==!1&&Oi(n,t)}return!1}function Pa(n,t,e,r){return(n!==t||Lt(r.enabled,n)===!1)&&(!e.suspense||n.state.status!=="error")&&Oi(n,e)}function Oi(n,t){return Lt(t.enabled,n)!==!1&&n.isStaleByTime(Fn(t.staleTime,n))}function Wh(n,t){return!ei(n.getCurrentResult(),t)}var Yu=Jt.createContext(!1),Qh=()=>Jt.useContext(Yu);Yu.Provider;function Xh(){let n=!1;return{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n}}var Yh=Jt.createContext(Xh()),Jh=()=>Jt.useContext(Yh),Zh=(n,t)=>{(n.suspense||n.throwOnError||n.experimental_prefetchInRender)&&(t.isReset()||(n.retryOnMount=!1))},td=n=>{Jt.useEffect(()=>{n.clearReset()},[n])},ed=({result:n,errorResetBoundary:t,throwOnError:e,query:r,suspense:s})=>n.isError&&!t.isReset()&&!n.isFetching&&r&&(s&&n.data===void 0||qh(e,[n.error,r])),nd=n=>{if(n.suspense){const t=r=>r==="static"?r:Math.max(r??1e3,1e3),e=n.staleTime;n.staleTime=typeof e=="function"?(...r)=>t(e(...r)):t(e),typeof n.gcTime=="number"&&(n.gcTime=Math.max(n.gcTime,1e3))}},rd=(n,t)=>n.isLoading&&n.isFetching&&!t,sd=(n,t)=>(n==null?void 0:n.suspense)&&t.isPending,Va=(n,t,e)=>t.fetchOptimistic(n).catch(()=>{e.clearReset()});function id(n,t,e){var E,I,b,V,O;const r=Qh(),s=Jh(),o=zh(),a=o.defaultQueryOptions(n);(I=(E=o.getDefaultOptions().queries)==null?void 0:E._experimental_beforeQuery)==null||I.call(E,a),a._optimisticResults=r?"isRestoring":"optimistic",nd(a),Zh(a,s),td(s);const c=!o.getQueryCache().get(a.queryHash),[h]=Jt.useState(()=>new t(o,a)),d=h.getOptimisticResult(a),m=!r&&n.subscribed!==!1;if(Jt.useSyncExternalStore(Jt.useCallback(P=>{const z=m?h.subscribe(Qu.batchCalls(P)):ni;return h.updateResult(),z},[h,m]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),Jt.useEffect(()=>{h.setOptions(a)},[a,h]),sd(a,d))throw Va(a,h,s);if(ed({result:d,errorResetBoundary:s,throwOnError:a.throwOnError,query:o.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw d.error;if((V=(b=o.getDefaultOptions().queries)==null?void 0:b._experimental_afterQuery)==null||V.call(b,a,d),a.experimental_prefetchInRender&&!ri&&rd(d,r)){const P=c?Va(a,h,s):(O=o.getQueryCache().get(a.queryHash))==null?void 0:O.promise;P==null||P.catch(ni).finally(()=>{h.updateResult()})}return a.notifyOnChangeProps?d:h.trackResult(d)}function od(n,t){return id(n,Gh)}const ad=()=>{};var Da={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ud=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(I=64)),r.push(e[m],e[E],e[I],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ju(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ud(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||E==null)throw new cd;const I=o<<2|c>>4;if(r.push(I),d!==64){const b=c<<4&240|d>>2;if(r.push(b),E!==64){const V=d<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ld=function(n){const t=Ju(n);return Zu.encodeByteArray(t,!0)},Fr=function(n){return ld(n).replace(/\./g,"")},hd=function(n){try{return Zu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=()=>dd().__FIREBASE_DEFAULTS__,pd=()=>{if(typeof process>"u"||typeof Da>"u")return;const n=Da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},md=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hd(n[1]);return t&&JSON.parse(t)},xi=()=>{try{return ad()||fd()||pd()||md()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gd=n=>{var t,e;return(e=(t=xi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_d=n=>{const t=gd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tc=()=>{var n;return(n=xi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ed(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fr(JSON.stringify(e)),Fr(JSON.stringify(a)),""].join(".")}const Ln={};function vd(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ln))Ln[t]?n.emulator.push(t):n.prod.push(t);return n}function Id(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ka=!1;function wd(n,t){if(typeof window>"u"||typeof document>"u"||!Mi(window.location.host)||Ln[n]===t||Ln[n]||ka)return;Ln[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=vd().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ka=!0,a()},I}function m(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=Id(r),b=e("text"),V=document.getElementById(b)||document.createElement("span"),O=e("learnmore"),P=document.getElementById(O)||document.createElement("a"),z=e("preprendIcon"),B=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const $=I.element;c($),m(P,O);const tt=d();h(B,z),$.append(B,V,P,tt),document.body.appendChild($)}o?(V.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){var n;const t=(n=xi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ec(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bd(){return!Rd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fi(){try{return typeof indexedDB=="object"}catch{return!1}}function Li(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function nc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sd,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Cd(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ae(s,c,r)}}function Cd(n,t){return n.replace(Pd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Pd=/\{\$([^}]+)}/g;function rn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Na(o)&&Na(a)){if(!rn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Na(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=1e3,Dd=2,kd=14400*1e3,Nd=.5;function Oa(n,t=Vd,e=Dd){const r=t*Math.pow(e,n),s=Math.round(Nd*r*(Math.random()-.5)*2);return Math.min(kd,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}class ee{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new yd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Md(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ve){return this.instances.has(t)}getOptions(t=Ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ve){return this.component?this.component.multipleInstances?t:Ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xd(n){return n===Ve?void 0:n}function Md(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Od(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Ld={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Ud=K.INFO,Bd={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},jd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Bd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ui{constructor(t){this.name=t,this._logLevel=Ud,this._logHandler=jd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ld[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const $d=(n,t)=>t.some(e=>n instanceof e);let xa,Ma;function qd(){return xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zd(){return Ma||(Ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,di=new WeakMap,sc=new WeakMap,zs=new WeakMap,Bi=new WeakMap;function Hd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(de(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rc.set(e,n)}).catch(()=>{}),Bi.set(t,n),t}function Gd(n){if(di.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});di.set(n,t)}let fi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return di.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return de(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kd(n){fi=n(fi)}function Wd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Hs(this),t,...e);return sc.set(r,t.sort?t.sort():[t]),de(r)}:zd().includes(n)?function(...t){return n.apply(Hs(this),t),de(rc.get(this))}:function(...t){return de(n.apply(Hs(this),t))}}function Qd(n){return typeof n=="function"?Wd(n):(n instanceof IDBTransaction&&Gd(n),$d(n,qd())?new Proxy(n,fi):n)}function de(n){if(n instanceof IDBRequest)return Hd(n);if(zs.has(n))return zs.get(n);const t=Qd(n);return t!==n&&(zs.set(n,t),Bi.set(t,n)),t}const Hs=n=>Bi.get(n);function ic(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=de(a);return r&&a.addEventListener("upgradeneeded",h=>{r(de(a.result),h.oldVersion,h.newVersion,de(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Xd=["get","getKey","getAll","getAllKeys","count"],Yd=["put","add","delete","clear"],Gs=new Map;function Fa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Gs.get(t))return Gs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Yd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xd.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Gs.set(t,o),o}Kd(n=>({...n,get:(t,e,r)=>Fa(t,e)||n.get(t,e,r),has:(t,e)=>!!Fa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Zd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Zd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const pi="@firebase/app",La="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Ui("@firebase/app"),tf="@firebase/app-compat",ef="@firebase/analytics-compat",nf="@firebase/analytics",rf="@firebase/app-check-compat",sf="@firebase/app-check",of="@firebase/auth",af="@firebase/auth-compat",uf="@firebase/database",cf="@firebase/data-connect",lf="@firebase/database-compat",hf="@firebase/functions",df="@firebase/functions-compat",ff="@firebase/installations",pf="@firebase/installations-compat",mf="@firebase/messaging",gf="@firebase/messaging-compat",_f="@firebase/performance",yf="@firebase/performance-compat",Ef="@firebase/remote-config",Tf="@firebase/remote-config-compat",vf="@firebase/storage",If="@firebase/storage-compat",wf="@firebase/firestore",Af="@firebase/ai",Rf="@firebase/firestore-compat",bf="firebase",Sf="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="[DEFAULT]",Cf={[pi]:"fire-core",[tf]:"fire-core-compat",[nf]:"fire-analytics",[ef]:"fire-analytics-compat",[sf]:"fire-app-check",[rf]:"fire-app-check-compat",[of]:"fire-auth",[af]:"fire-auth-compat",[uf]:"fire-rtdb",[cf]:"fire-data-connect",[lf]:"fire-rtdb-compat",[hf]:"fire-fn",[df]:"fire-fn-compat",[ff]:"fire-iid",[pf]:"fire-iid-compat",[mf]:"fire-fcm",[gf]:"fire-fcm-compat",[_f]:"fire-perf",[yf]:"fire-perf-compat",[Ef]:"fire-rc",[Tf]:"fire-rc-compat",[vf]:"fire-gcs",[If]:"fire-gcs-compat",[wf]:"fire-fst",[Rf]:"fire-fst-compat",[Af]:"fire-vertex","fire-js":"fire-js",[bf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,Pf=new Map,gi=new Map;function Ua(n,t){try{n.container.addComponent(t)}catch(e){ne.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ge(n){const t=n.name;if(gi.has(t))return ne.debug(`There were multiple attempts to register component ${t}.`),!1;gi.set(t,n);for(const e of Lr.values())Ua(e,n);for(const e of Pf.values())Ua(e,n);return!0}function er(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Vf(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fe=new Zr("app","Firebase",Df);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=Sf;function oc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:mi,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw fe.create("bad-app-name",{appName:String(s)});if(e||(e=tc()),!e)throw fe.create("no-options");const o=Lr.get(s);if(o){if(rn(e,o.options)&&rn(r,o.config))return o;throw fe.create("duplicate-app",{appName:s})}const a=new Fd(s);for(const h of gi.values())a.addComponent(h);const c=new kf(e,r,a);return Lr.set(s,c),c}function ac(n=mi){const t=Lr.get(n);if(!t&&n===mi&&tc())return oc();if(!t)throw fe.create("no-app",{appName:n});return t}function jt(n,t,e){var r;let s=(r=Cf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ne.warn(c.join(" "));return}ge(new ee(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="firebase-heartbeat-database",xf=1,Hn="firebase-heartbeat-store";let Ks=null;function uc(){return Ks||(Ks=ic(Of,xf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Hn)}catch(e){console.warn(e)}}}}).catch(n=>{throw fe.create("idb-open",{originalErrorMessage:n.message})})),Ks}async function Mf(n){try{const e=(await uc()).transaction(Hn),r=await e.objectStore(Hn).get(cc(n));return await e.done,r}catch(t){if(t instanceof Ae)ne.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ne.warn(e.message)}}}async function Ba(n,t){try{const r=(await uc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(t,cc(n)),await r.done}catch(e){if(e instanceof Ae)ne.warn(e.message);else{const r=fe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ne.warn(r.message)}}}function cc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=1024,Lf=30;class Uf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ja();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Lf){const a=$f(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ne.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ja(),{heartbeatsToSend:r,unsentEntries:s}=Bf(this._heartbeatsCache.heartbeats),o=Fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ne.warn(e),""}}}function ja(){return new Date().toISOString().substring(0,10)}function Bf(n,t=Ff){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),$a(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),$a(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class jf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fi()?Li().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Mf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $a(n){return Fr(JSON.stringify({version:2,heartbeats:n})).length}function $f(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){ge(new ee("platform-logger",t=>new Jd(t),"PRIVATE")),ge(new ee("heartbeat",t=>new Uf(t),"PRIVATE")),jt(pi,La,n),jt(pi,La,"esm2017"),jt("fire-js","")}qf("");var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pe,lc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,A){for(var g=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)g[Wt-2]=arguments[Wt];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=p+(A^_&(T^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(A^_&(T^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(T^p&(_^T))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=T+(_^A&(p^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(p^T&(A^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^A&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^A&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(A^p))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^T)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=T+(A^p^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~T))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=T+(p^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(y[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,y),T=0;break}}else for(;A<p;)if(y[T++]=v[A++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;y&&A==p||(_[T]=A,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return P(d(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return P(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=E,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var E=h(0),I=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-P(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(O(this))return"-"+P(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,y="";;){var T=tt(_,p).g;_=z(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,V(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=z(this,v),O(v)?-1:V(v)?0:1};function P(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new a(_,~v.h).add(I)}n.abs=function(){return O(this)?P(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=p;T++){var A=y+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(v,p){return v.add(P(p))}n.j=function(v){if(V(this)||V(v))return E;if(O(this))return O(v)?P(this).j(P(v)):P(P(this).j(v));if(O(v))return P(this.j(P(v)));if(0>this.l(b)&&0>v.l(b))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,Wt=v.i(T)>>>16,mn=v.i(T)&65535;_[2*y+2*T]+=g*mn,B(_,2*y+2*T),_[2*y+2*T+1]+=A*mn,B(_,2*y+2*T+1),_[2*y+2*T+1]+=g*Wt,B(_,2*y+2*T+1),_[2*y+2*T+2]+=A*Wt,B(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function B(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function $(v,p){this.g=v,this.h=p}function tt(v,p){if(V(p))throw Error("division by zero");if(V(v))return new $(E,E);if(O(v))return p=tt(P(v),p),new $(P(p.g),P(p.h));if(O(p))return p=tt(v,P(p)),new $(P(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=p;0>=y.l(v);)_=xt(_),y=xt(y);var T=ot(_,1),A=ot(y,1);for(y=ot(y,2),_=ot(_,2);!V(y);){var g=A.add(y);0>=g.l(v)&&(T=T.add(_),A=g),y=ot(y,1),_=ot(_,1)}return p=z(v,T.j(p)),new $(T,p)}for(T=E;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(p);O(g)||0<g.l(v);)_-=y,A=d(_),g=A.j(p);V(A)&&(A=I),T=T.add(A),v=z(v,g)}return new $(T,v)}n.A=function(v){return tt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function xt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function ot(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,T=[],A=0;A<y;A++)T[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,pe=a}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hc,Nn,dc,Dr,_i,fc,pc,mc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof br=="object"&&br];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break t;l=l[w]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,w={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function E(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(u,w)}}return function(){return i.apply(u,arguments)}}function I(i,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,I.apply(null,arguments)}function b(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function V(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return u.prototype[w].apply(f,D)}}function O(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function P(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let D=0;D<R;D++)i[w+D]=f[D]}else i.push(f)}}class z{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(i){return/^[\s\xa0]*$/.test(i)}function $(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var xt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ot(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function v(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function A(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Es;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Wt{constructor(){this.h=this.g=null}add(u,l){const f=mn.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var mn=new z(()=>new sh,i=>i.reset());class sh{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let gn,_n=!1,Es=new Wt,Ao=()=>{const i=c.Promise.resolve(void 0);gn=()=>{i.then(ih)}};var ih=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var u=mn;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}_n=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var oh=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i})();function yn(i,u){if(Et.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{tt(u.nodeName);var w=!0;break t}catch{}w=!1}w||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ah[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&yn.aa.h.call(this)}}V(yn,Et);var ah={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ar="closure_listenable_"+(1e6*Math.random()|0),uh=0;function ch(i,u,l,f,w){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=w,this.key=++uh,this.da=this.fa=!1}function ur(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function cr(i){this.src=i,this.g={},this.h=0}cr.prototype.add=function(i,u,l,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=vs(i,u,f,w);return-1<D?(u=i[D],l||(u.fa=!1)):(u=new ch(u,this.src,R,!!f,w),u.fa=l,i.push(u)),u};function Ts(i,u){var l=u.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(ur(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function vs(i,u,l,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return w}return-1}var Is="closure_lm_"+(1e6*Math.random()|0),ws={};function Ro(i,u,l,f,w){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ro(i,u[R],l,f,w);return null}return l=Co(l),i&&i[ar]?i.K(u,l,d(f)?!!f.capture:!1,w):lh(i,u,l,!1,f,w)}function lh(i,u,l,f,w,R){if(!u)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,Y=Rs(i);if(Y||(i[Is]=Y=new cr(i)),l=Y.add(u,l,f,D,R),l.proxy)return l;if(f=hh(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)oh||(w=D),w===void 0&&(w=!1),i.addEventListener(u.toString(),f,w);else if(i.attachEvent)i.attachEvent(So(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function hh(){function i(l){return u.call(i.src,i.listener,l)}const u=dh;return i}function bo(i,u,l,f,w){if(Array.isArray(u))for(var R=0;R<u.length;R++)bo(i,u[R],l,f,w);else f=d(f)?!!f.capture:!!f,l=Co(l),i&&i[ar]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=vs(R,l,f,w),-1<l&&(ur(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Rs(i))&&(u=i.g[u.toString()],i=-1,u&&(i=vs(u,l,f,w)),(l=-1<i?u[i]:null)&&As(l))}function As(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[ar])Ts(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(So(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Rs(u))?(Ts(l,i),l.h==0&&(l.src=null,u[Is]=null)):ur(i)}}}function So(i){return i in ws?ws[i]:ws[i]="on"+i}function dh(i,u){if(i.da)i=!0;else{u=new yn(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&As(i),i=l.call(f,u)}return i}function Rs(i){return i=i[Is],i instanceof cr?i:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(i){return typeof i=="function"?i:(i[bs]||(i[bs]=function(u){return i.handleEvent(u)}),i[bs])}function Tt(){ie.call(this),this.i=new cr(this),this.M=this,this.F=null}V(Tt,ie),Tt.prototype[ar]=!0,Tt.prototype.removeEventListener=function(i,u,l,f){bo(this,i,u,l,f)};function bt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new Et(u,i);else if(u instanceof Et)u.target=u.target||i;else{var w=u;u=new Et(f,i),y(u,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var D=u.g=l[R];w=lr(D,f,!0,u)&&w}if(D=u.g=i,w=lr(D,f,!0,u)&&w,w=lr(D,f,!1,u)&&w,l)for(R=0;R<l.length;R++)D=u.g=l[R],w=lr(D,f,!1,u)&&w}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)ur(l[f]);delete i.g[u],i.h--}}this.F=null},Tt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},Tt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function lr(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,R=0;R<u.length;++R){var D=u[R];if(D&&!D.da&&D.capture==l){var Y=D.listener,pt=D.ha||D.src;D.fa&&Ts(i.i,D),w=Y.call(pt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Po(i,u,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Vo(i){i.g=Po(()=>{i.g=null,i.i&&(i.i=!1,Vo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class fh extends ie{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(i){ie.call(this),this.h=i,this.g={}}V(En,ie);var Do=[];function ko(i){ot(i.g,function(u,l){this.g.hasOwnProperty(l)&&As(u)},i),i.g={}}En.prototype.N=function(){En.aa.N.call(this),ko(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ss=c.JSON.stringify,ph=c.JSON.parse,mh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Cs(){}Cs.prototype.h=null;function No(i){return i.h||(i.h=i.i())}function Oo(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ps(){Et.call(this,"d")}V(Ps,Et);function Vs(){Et.call(this,"c")}V(Vs,Et);var be={},xo=null;function hr(){return xo=xo||new Tt}be.La="serverreachability";function Mo(i){Et.call(this,be.La,i)}V(Mo,Et);function vn(i){const u=hr();bt(u,new Mo(u))}be.STAT_EVENT="statevent";function Fo(i,u){Et.call(this,be.STAT_EVENT,i),this.stat=u}V(Fo,Et);function St(i){const u=hr();bt(u,new Fo(u,i))}be.Ma="timingevent";function Lo(i,u){Et.call(this,be.Ma,i),this.size=u}V(Lo,Et);function In(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function gh(i,u,l,f,w,R){i.info(function(){if(i.g)if(R)for(var D="",Y=R.split("&"),pt=0;pt<Y.length;pt++){var W=Y[pt].split("=");if(1<W.length){var vt=W[0];W=W[1];var It=vt.split("_");D=2<=It.length&&It[1]=="type"?D+(vt+"="+W+"&"):D+(vt+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+u+`
`+l+`
`+D})}function _h(i,u,l,f,w,R,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+u+`
`+l+`
`+R+" "+D})}function ze(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Eh(i,l)+(f?" "+f:"")})}function yh(i,u){i.info(function(){return"TIMEOUT: "+u})}wn.prototype.info=function(){};function Eh(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return Ss(l)}catch{return u}}var dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ds;function fr(){}V(fr,Cs),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},Ds=new fr;function oe(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new En(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bo}function Bo(){this.i=null,this.g="",this.h=!1}var jo={},ks={};function Ns(i,u,l){i.L=1,i.v=_r(Qt(u)),i.m=l,i.P=!0,$o(i,null)}function $o(i,u){i.F=Date.now(),pr(i),i.A=Qt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),na(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Bo,i.g=Ta(i.j,l?u:null,!i.m),0<i.O&&(i.M=new fh(I(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Do[0]=w.toString()),w=Do);for(var R=0;R<w.length;R++){var D=Ro(l,w[R],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),vn(),gh(i.i,i.u,i.A,i.l,i.R,i.m)}oe.prototype.ca=function(i){i=i.target;const u=this.M;u&&Xt(i)==3?u.j():this.Y(i)},oe.prototype.Y=function(i){try{if(i==this.g)t:{const It=Xt(this.g);var u=this.g.Ba();const Ke=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||It!=4||u==7||(u==8||0>=Ke?vn(3):vn(2)),Os(this);var l=this.g.Z();this.X=l;e:if(qo(this)){var f=ca(this.g);i="";var w=f.length,R=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),An(this);var D="";break e}this.h.i=new c.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==w-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=l==200,_h(this.i,this.u,this.A,this.l,this.R,It,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Y,pt=this.g;if((Y=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Y)){var W=Y;break e}}W=null}if(l=W)ze(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xs(this,l);else{this.o=!1,this.s=3,St(12),Se(this),An(this);break t}}if(this.P){l=!0;let Ft;for(;!this.J&&this.C<D.length;)if(Ft=Th(this,D),Ft==ks){It==4&&(this.s=4,St(14),l=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==jo){this.s=4,St(15),ze(this.i,this.l,D,"[Invalid Chunk]"),l=!1;break}else ze(this.i,this.l,Ft,null),xs(this,Ft);if(qo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||D.length!=0||this.h.h||(this.s=1,St(16),l=!1),this.o=this.o&&l,!l)ze(this.i,this.l,D,"[Invalid Chunked Response]"),Se(this),An(this);else if(0<D.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),js(vt),vt.M=!0,St(11))}}else ze(this.i,this.l,D,null),xs(this,D);It==4&&Se(this),this.o&&!this.J&&(It==4?ga(this.j,this):(this.o=!1,pr(this)))}else Fh(this.g),l==400&&0<D.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Se(this),An(this)}}}catch{}finally{}};function qo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Th(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?ks:(l=Number(u.substring(l,f)),isNaN(l)?jo:(f+=1,f+l>u.length?ks:(u=u.slice(f,f+l),i.C=f+l,u)))}oe.prototype.cancel=function(){this.J=!0,Se(this)};function pr(i){i.S=Date.now()+i.I,zo(i,i.I)}function zo(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=In(I(i.ba,i),u)}function Os(i){i.B&&(c.clearTimeout(i.B),i.B=null)}oe.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(yh(this.i,this.A),this.L!=2&&(vn(),St(17)),Se(this),this.s=2,An(this)):zo(this,this.S-i)};function An(i){i.j.G==0||i.J||ga(i.j,i)}function Se(i){Os(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,ko(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function xs(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||Ms(l.h,i))){if(!i.K&&Ms(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)wr(l),vr(l);else break t;Bs(l),St(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=In(I(l.Za,l),6e3));if(1>=Ko(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Pe(l,11)}else if((i.K||l.g==i)&&wr(l),!B(u))for(w=l.Da.g.parse(u),u=0;u<w.length;u++){let W=w[u];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const vt=W[3];vt!=null&&(l.la=vt,l.j.info("VER="+l.la));const It=W[4];It!=null&&(l.Aa=It,l.j.info("SVER="+l.Aa));const Ke=W[5];Ke!=null&&typeof Ke=="number"&&0<Ke&&(f=1.5*Ke,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ft=i.g;if(Ft){const Rr=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var R=f.h;R.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Fs(R,R.h),R.h=null))}if(f.D){const $s=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(f.ya=$s,J(f.I,f.D,$s))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var D=i;if(f.qa=Ea(f,f.J?f.ia:null,f.W),D.K){Wo(f.h,D);var Y=D,pt=f.L;pt&&(Y.I=pt),Y.B&&(Os(Y),pr(Y)),f.g=D}else pa(f);0<l.i.length&&Ir(l)}else W[0]!="stop"&&W[0]!="close"||Pe(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Pe(l,7):Us(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}vn(4)}catch{}}var vh=class{constructor(i,u){this.g=i,this.map=u}};function Ho(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Go(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ko(i){return i.h?1:i.g?i.g.size:0}function Ms(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Fs(i,u){i.g?i.g.add(u):i.h=u}function Wo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Ho.prototype.cancel=function(){if(this.i=Qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Qo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return O(i.i)}function Ih(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function wh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function Xo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=wh(i),f=Ih(i),w=f.length,R=0;R<w;R++)u.call(void 0,f[R],l&&l[R],i)}var Yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ah(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),w=null;if(0<=f){var R=i[l].substring(0,f);w=i[l].substring(f+1)}else R=i[l];u(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ce(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ce){this.h=i.h,mr(this,i.j),this.o=i.o,this.g=i.g,gr(this,i.s),this.l=i.l;var u=i.i,l=new Sn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Jo(this,l),this.m=i.m}else i&&(u=String(i).match(Yo))?(this.h=!1,mr(this,u[1]||"",!0),this.o=Rn(u[2]||""),this.g=Rn(u[3]||"",!0),gr(this,u[4]),this.l=Rn(u[5]||"",!0),Jo(this,u[6]||"",!0),this.m=Rn(u[7]||"")):(this.h=!1,this.i=new Sn(null,this.h))}Ce.prototype.toString=function(){var i=[],u=this.j;u&&i.push(bn(u,Zo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(bn(u,Zo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(bn(l,l.charAt(0)=="/"?Sh:bh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",bn(l,Ph)),i.join("")};function Qt(i){return new Ce(i)}function mr(i,u,l){i.j=l?Rn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function gr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function Jo(i,u,l){u instanceof Sn?(i.i=u,Vh(i.i,i.h)):(l||(u=bn(u,Ch)),i.i=new Sn(u,i.h))}function J(i,u,l){i.i.set(u,l)}function _r(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Rn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function bn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Rh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Zo=/[#\/\?@]/g,bh=/[#\?:]/g,Sh=/[#\?]/g,Ch=/[#\?@]/g,Ph=/#/g;function Sn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ae(i){i.g||(i.g=new Map,i.h=0,i.i&&Ah(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=Sn.prototype,n.add=function(i,u){ae(this),this.i=null,i=He(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ta(i,u){ae(i),u=He(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function ea(i,u){return ae(i),u=He(i,u),i.g.has(u)}n.forEach=function(i,u){ae(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(u,w,f,this)},this)},this)},n.na=function(){ae(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const w=i[f];for(let R=0;R<w.length;R++)l.push(u[f])}return l},n.V=function(i){ae(this);let u=[];if(typeof i=="string")ea(this,i)&&(u=u.concat(this.g.get(He(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return ae(this),this.i=null,i=He(this,i),ea(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function na(i,u,l){ta(i,u),0<l.length&&(i.i=null,i.g.set(He(i,u),O(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=R;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),i.push(w)}}return this.i=i.join("&")};function He(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Vh(i,u){u&&!i.j&&(ae(i),i.i=null,i.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(ta(this,f),na(this,w,l))},i)),i.j=u}function Dh(i,u){const l=new wn;if(c.Image){const f=new Image;f.onload=b(ue,l,"TestLoadImage: loaded",!0,u,f),f.onerror=b(ue,l,"TestLoadImage: error",!1,u,f),f.onabort=b(ue,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=b(ue,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function kh(i,u){const l=new wn,f=new AbortController,w=setTimeout(()=>{f.abort(),ue(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ue(l,"TestPingServer: ok",!0,u):ue(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),ue(l,"TestPingServer: error",!1,u)})}function ue(i,u,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Nh(){this.g=new mh}function Oh(i,u,l){const f=l||"";try{Xo(i,function(w,R){let D=w;d(w)&&(D=Ss(w)),u.push(f+R+"="+encodeURIComponent(D))})}catch(w){throw u.push(f+"type="+encodeURIComponent("_badmap")),w}}function yr(i){this.l=i.Ub||null,this.j=i.eb||!1}V(yr,Cs),yr.prototype.g=function(){return new Er(this.l,this.j)},yr.prototype.i=(function(i){return function(){return i}})({});function Er(i,u){Tt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Er,Tt),n=Er.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Pn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ra(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ra(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Cn(this):Pn(this),this.readyState==3&&ra(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Cn(this))},n.Qa=function(i){this.g&&(this.response=i,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Pn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function Pn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function sa(i){let u="";return ot(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function Ls(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=sa(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):J(i,u,l))}function st(i){Tt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(st,Tt);var xh=/^https?$/i,Mh=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ds.g(),this.v=this.o?No(this.o):No(Ds),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){ia(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Mh,u,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of l)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ua(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ia(this,R)}};function ia(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,oa(i),Tr(i)}function oa(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},n.bb=function(){aa(this)};function aa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Xt(i)!=4||i.Z()!=2)){if(i.u&&Xt(i)==4)Po(i.Ea,0,i);else if(bt(i,"readystatechange"),Xt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=D===0){var w=String(i.D).match(Yo)[1]||null;!w&&c.self&&c.self.location&&(w=c.self.location.protocol.slice(0,-1)),f=!xh.test(w?w.toLowerCase():"")}l=f}if(l)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var R=2<Xt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",oa(i)}}finally{Tr(i)}}}}function Tr(i,u){if(i.g){ua(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||bt(i,"ready");try{l.onreadystatechange=f}catch{}}}function ua(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Xt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),ph(u)}};function ca(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Fh(i){const u={};i=(i.g&&2<=Xt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(B(i[f]))continue;var l=T(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[w]||[];u[w]=R,R.push(l)}v(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function la(i){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vn("baseRetryDelayMs",5e3,i),this.cb=Vn("retryDelaySeedMs",1e4,i),this.Wa=Vn("forwardChannelMaxRetries",2,i),this.wa=Vn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ho(i&&i.concurrentRequestLimit),this.Da=new Nh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=la.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){St(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Ea(this,null,this.W),Ir(this)};function Us(i){if(ha(i),i.G==3){var u=i.U++,l=Qt(i.I);if(J(l,"SID",i.K),J(l,"RID",u),J(l,"TYPE","terminate"),Dn(i,l),u=new oe(i,i.j,u),u.L=2,u.v=_r(Qt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ta(u.j,null),u.g.ea(u.v)),u.F=Date.now(),pr(u)}ya(i)}function vr(i){i.g&&(js(i),i.g.cancel(),i.g=null)}function ha(i){vr(i),i.u&&(c.clearTimeout(i.u),i.u=null),wr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Ir(i){if(!Go(i.h)&&!i.s){i.s=!0;var u=i.Ga;gn||Ao(),_n||(gn(),_n=!0),Es.add(u,i),i.B=0}}function Lh(i,u){return Ko(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=In(I(i.Ga,i,u),_a(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new oe(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=fa(this,w,u),l=Qt(this.I),J(l,"RID",i),J(l,"CVER",22),this.D&&J(l,"X-HTTP-Session-Id",this.D),Dn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(sa(R)))+"&"+u:this.m&&Ls(l,this.m,R)),Fs(this.h,w),this.Ua&&J(l,"TYPE","init"),this.P?(J(l,"$req",u),J(l,"SID","null"),w.T=!0,Ns(w,l,null)):Ns(w,l,u),this.G=2}}else this.G==3&&(i?da(this,i):this.i.length==0||Go(this.h)||da(this))};function da(i,u){var l;u?l=u.l:l=i.U++;const f=Qt(i.I);J(f,"SID",i.K),J(f,"RID",l),J(f,"AID",i.T),Dn(i,f),i.m&&i.o&&Ls(f,i.m,i.o),l=new oe(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=fa(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Fs(i.h,l),Ns(l,f,u)}function Dn(i,u){i.H&&ot(i.H,function(l,f){J(u,f,l)}),i.l&&Xo({},function(l,f){J(u,f,l)})}function fa(i,u,l){l=Math.min(i.i.length,l);var f=i.l?I(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const D=["count="+l];R==-1?0<l?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let Y=!0;for(let pt=0;pt<l;pt++){let W=w[pt].g;const vt=w[pt].map;if(W-=R,0>W)R=Math.max(0,w[pt].g-100),Y=!1;else try{Oh(vt,D,"req"+W+"_")}catch{f&&f(vt)}}if(Y){f=D.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function pa(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;gn||Ao(),_n||(gn(),_n=!0),Es.add(u,i),i.v=0}}function Bs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=In(I(i.Fa,i),_a(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ma(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=In(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),vr(this),ma(this))};function js(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ma(i){i.g=new oe(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Qt(i.qa);J(u,"RID","rpc"),J(u,"SID",i.K),J(u,"AID",i.T),J(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(u,"TO",i.ja),J(u,"TYPE","xmlhttp"),Dn(i,u),i.m&&i.o&&Ls(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=_r(Qt(u)),l.m=null,l.P=!0,$o(l,i)}n.Za=function(){this.C!=null&&(this.C=null,vr(this),Bs(this),St(19))};function wr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function ga(i,u){var l=null;if(i.g==u){wr(i),js(i),i.g=null;var f=2}else if(Ms(i.h,u))l=u.D,Wo(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var w=i.B;f=hr(),bt(f,new Lo(f,l)),Ir(i)}else pa(i);else if(w=u.s,w==3||w==0&&0<u.X||!(f==1&&Lh(i,u)||f==2&&Bs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),w){case 1:Pe(i,5);break;case 4:Pe(i,10);break;case 3:Pe(i,6);break;default:Pe(i,2)}}}function _a(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function Pe(i,u){if(i.j.info("Error code "+u),u==2){var l=I(i.fb,i),f=i.Xa;const w=!f;f=new Ce(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mr(f,"https"),_r(f),w?Dh(f.toString(),l):kh(f.toString(),l)}else St(2);i.G=0,i.l&&i.l.sa(u),ya(i),ha(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function ya(i){if(i.G=0,i.ka=[],i.l){const u=Qo(i.h);(u.length!=0||i.i.length!=0)&&(P(i.ka,u),P(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Ea(i,u,l){var f=l instanceof Ce?Qt(l):new Ce(l);if(f.g!="")u&&(f.g=u+"."+f.g),gr(f,f.s);else{var w=c.location;f=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var R=new Ce(null);f&&mr(R,f),u&&(R.g=u),w&&gr(R,w),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&J(f,l,u),J(f,"VER",i.la),Dn(i,f),f}function Ta(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new st(new yr({eb:l})):new st(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function va(){}n=va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ar(){}Ar.prototype.g=function(i,u){return new kt(i,u)};function kt(i,u){Tt.call(this),this.g=new la(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!B(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ge(this)}V(kt,Tt),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Us(this.g)},kt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Ss(i),i=l);u.i.push(new vh(u.Ya++,i)),u.G==3&&Ir(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,kt.aa.N.call(this)};function Ia(i){Ps.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}V(Ia,Ps);function wa(){Vs.call(this),this.status=1}V(wa,Vs);function Ge(i){this.g=i}V(Ge,va),Ge.prototype.ua=function(){bt(this.g,"a")},Ge.prototype.ta=function(i){bt(this.g,new Ia(i))},Ge.prototype.sa=function(i){bt(this.g,new wa)},Ge.prototype.ra=function(){bt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,mc=function(){return new Ar},pc=function(){return hr()},fc=be,_i={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Dr=dr,Uo.COMPLETE="complete",dc=Uo,Oo.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,Nn=Oo,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,hc=st}).apply(typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{});const za="@firebase/firestore",Ha="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Ui("@firebase/firestore");function We(){return Fe.logLevel}function N(n,...t){if(Fe.logLevel<=K.DEBUG){const e=t.map(ji);Fe.debug(`Firestore (${hn}): ${n}`,...e)}}function re(n,...t){if(Fe.logLevel<=K.ERROR){const e=t.map(ji);Fe.error(`Firestore (${hn}): ${n}`,...e)}}function _e(n,...t){if(Fe.logLevel<=K.WARN){const e=t.map(ji);Fe.warn(`Firestore (${hn}): ${n}`,...e)}}function ji(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,gc(n,r,e)}function gc(n,t,e){let r=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw re(r),new Error(r)}function X(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||gc(t,s,r)}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(At.UNAUTHENTICATED)))}shutdown(){}}class Hf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gf{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new me;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new me,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new me)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new _c(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new At(t)}}class Kf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Wf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Kf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(At.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ga{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vf(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ga(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ga(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Xf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function yi(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return j(r,s);{const o=yc(),a=Yf(o.encode(Ka(n,e)),o.encode(Ka(t,e)));return a!==0?a:j(r,s)}}e+=r>65535?2:1}return j(n.length,t.length)}function Ka(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Yf(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function sn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="__name__";class Bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Bt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Bt.isNumericId(t),s=Bt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(t).compare(Bt.extractNumericId(e)):yi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return pe.fromString(t.substring(4,t.length-2))}}class nt extends Bt{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new nt(e)}static emptyPath(){return new nt([])}}const Jf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Bt{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return Jf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wa}static keyField(){return new _t([Wa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(nt.fromString(t))}static fromName(t){return new M(nt.fromString(t).popFirst(5))}static empty(){return new M(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new nt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tp(n,t,e,r){if(t===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qa(n){if(!M.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Gn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qi(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,t){const e={typeString:n};return t&&(e.value=t),e}function nr(n,t){if(!Ec(n))throw new x(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=-62135596800,Ya=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ya);return new Z(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Xa)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ya}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(nr(t,Z._jsonSchema))return new Z(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Xa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ct("string",Z._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Z(0,0))}static max(){return new L(new Z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=-1;function ep(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new Z(e+1,0):new Z(e,r));return new ye(s,M.empty(),t)}function np(n){return new ye(n.readTime,n.key,Kn)}class ye{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ye(L.min(),M.empty(),Kn)}static max(){return new ye(L.max(),M.empty(),Kn)}}function rp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==sp)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,o=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++c,c===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new S(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function op(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function fn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}ts.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=-1;function es(n){return n==null}function Ur(n){return n===0&&1/n==-1/0}function ap(n){return typeof n=="number"&&Number.isInteger(n)&&!Ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="";function up(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ja(t)),t=cp(n.get(e),t);return Ja(t)}function cp(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Tc:e+="";break;default:e+=o}}return e}function Ja(n){return n+Tc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function vc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sr(this.root,t,this.comparator,!0)}}class Sr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new gt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(t){return new tu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class tu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new ht(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return sn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ic("Invalid base64 string: "+o):o}})(t);return new yt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const lp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=lp.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Te(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="server_timestamp",Ac="__type__",Rc="__previous_value__",bc="__local_write_time__";function Hi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ac])===null||e===void 0?void 0:e.stringValue)===wc}function ns(n){const t=n.mapValue.fields[Rc];return Hi(t)?ns(t):t}function Wn(n){const t=Ee(n.mapValue.fields[bc].timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e,r,s,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Br="(default)";class Qn{constructor(t,e){this.projectId=t,this.database=e||Br}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database===Br}isEqual(t){return t instanceof Qn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="__type__",dp="__max__",Cr={mapValue:{}},Cc="__vector__",jr="value";function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hi(n)?4:pp(n)?9007199254740991:fp(n)?10:11:F(28295,{value:n})}function Gt(n,t){if(n===t)return!0;const e=ve(n);if(e!==ve(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Wn(n).isEqual(Wn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ee(s.timestampValue),c=Ee(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Te(s.bytesValue).isEqual(Te(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=it(s.doubleValue),c=it(o.doubleValue);return a===c?Ur(a)===Ur(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return sn(n.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Za(a)!==Za(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Gt(a[h],c[h])))return!1;return!0})(n,t);default:return F(52216,{left:n})}}function Xn(n,t){return(n.values||[]).find((e=>Gt(e,t)))!==void 0}function on(n,t){if(n===t)return 0;const e=ve(n),r=ve(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return eu(n.timestampValue,t.timestampValue);case 4:return eu(Wn(n),Wn(t));case 5:return yi(n.stringValue,t.stringValue);case 6:return(function(o,a){const c=Te(o),h=Te(a);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=j(c[d],h[d]);if(m!==0)return m}return j(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=j(it(o.latitude),it(a.latitude));return c!==0?c:j(it(o.longitude),it(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return nu(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var c,h,d,m;const E=o.fields||{},I=a.fields||{},b=(c=E[jr])===null||c===void 0?void 0:c.arrayValue,V=(h=I[jr])===null||h===void 0?void 0:h.arrayValue,O=j(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:nu(b,V)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Cr.mapValue&&a===Cr.mapValue)return 0;if(o===Cr.mapValue)return 1;if(a===Cr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const I=yi(h[E],m[E]);if(I!==0)return I;const b=on(c[h[E]],d[m[E]]);if(b!==0)return b}return j(h.length,m.length)})(n.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function eu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Ee(n),r=Ee(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function nu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=on(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function an(n){return Ei(n)}function Ei(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Ee(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Te(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ei(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ei(e.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function kr(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ns(n);return t?16+kr(t):16;case 5:return 2*n.stringValue.length;case 6:return Te(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+kr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Re(r.fields,((o,a)=>{s+=o.length+kr(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function Ti(n){return!!n&&"integerValue"in n}function Gi(n){return!!n&&"arrayValue"in n}function ru(n){return!!n&&"nullValue"in n}function su(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nr(n){return!!n&&"mapValue"in n}function fp(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Sc])===null||e===void 0?void 0:e.stringValue)===Cc}function Un(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Re(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Un(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Un(n.arrayValue.values[e]);return t}return Object.assign({},n)}function pp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Un(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Un(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Re(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Nt(Un(this.value))}}function Pc(n){const t=[];return Re(n.fields,((e,r)=>{const s=new _t([e]);if(Nr(r)){const o=Pc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Ut(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Rt(t,0,L.min(),L.min(),L.min(),Nt.empty(),0)}static newFoundDocument(t,e,r,s){return new Rt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new Rt(t,2,e,L.min(),L.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new Rt(t,3,e,L.min(),L.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.position=t,this.inclusive=e}}function iu(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=on(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ou(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Gt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e="asc"){this.field=t,this.dir=e}}function mp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{}class lt extends Vc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _p(t,e,r):e==="array-contains"?new Tp(t,r):e==="in"?new vp(t,r):e==="not-in"?new Ip(t,r):e==="array-contains-any"?new wp(t,r):new lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yp(t,r):new Ep(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(on(e,this.value)):e!==null&&ve(this.value)===ve(e)&&this.matchesComparison(on(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Vc{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Kt(t,e)}matches(t){return Dc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Dc(n){return n.op==="and"}function kc(n){return gp(n)&&Dc(n)}function gp(n){for(const t of n.filters)if(t instanceof Kt)return!1;return!0}function vi(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+an(n.value);if(kc(n))return n.filters.map((t=>vi(t))).join(",");{const t=n.filters.map((e=>vi(e))).join(",");return`${n.op}(${t})`}}function Nc(n,t){return n instanceof lt?(function(r,s){return s instanceof lt&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)})(n,t):n instanceof Kt?(function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&Nc(a,s.filters[c])),!0):!1})(n,t):void F(19439)}function Oc(n){return n instanceof lt?(function(e){return`${e.field.canonicalString()} ${e.op} ${an(e.value)}`})(n):n instanceof Kt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Oc).join(" ,")+"}"})(n):"Filter"}class _p extends lt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yp extends lt{constructor(t,e){super(t,"in",e),this.keys=xc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ep extends lt{constructor(t,e){super(t,"not-in",e),this.keys=xc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class Tp extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gi(e)&&Xn(e.arrayValue,this.value)}}class vp extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Xn(this.value.arrayValue,e)}}class Ip extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Xn(this.value.arrayValue,e)}}class wp extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Xn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Pe=null}}function au(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Ap(n,t,e,r,s,o,a)}function Ki(n){const t=U(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>vi(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),es(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>an(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>an(r))).join(",")),t.Pe=e}return t.Pe}function Wi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!mp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Nc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ou(n.startAt,t.startAt)&&ou(n.endAt,t.endAt)}function Ii(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Rp(n,t,e,r,s,o,a,c){return new rs(n,t,e,r,s,o,a,c)}function Qi(n){return new rs(n)}function uu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bp(n){return n.collectionGroup!==null}function Bn(n){const t=U(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ht(_t.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new qr(o,r))})),e.has(_t.keyField().canonicalString())||t.Te.push(new qr(_t.keyField(),r))}return t.Te}function $t(n){const t=U(n);return t.Ie||(t.Ie=Sp(t,Bn(n))),t.Ie}function Sp(n,t){if(n.limitType==="F")return au(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new qr(s.field,o)}));const e=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return au(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function wi(n,t,e){return new rs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ss(n,t){return Wi($t(n),$t(t))&&n.limitType===t.limitType}function Mc(n){return`${Ki($t(n))}|lt:${n.limitType}`}function Qe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Oc(s))).join(", ")}]`),es(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>an(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>an(s))).join(",")),`Target(${r})`})($t(n))}; limitType=${n.limitType})`}function is(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of Bn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const d=iu(a,c,h);return a.inclusive?d<=0:d<0})(r.startAt,Bn(r),s)||r.endAt&&!(function(a,c,h){const d=iu(a,c,h);return a.inclusive?d>=0:d>0})(r.endAt,Bn(r),s))})(n,t)}function Cp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fc(n){return(t,e)=>{let r=!1;for(const s of Bn(n)){const o=Pp(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Pp(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?on(h,d):F(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new rt(M.comparator);function se(){return Vp}const Lc=new rt(M.comparator);function On(...n){let t=Lc;for(const e of n)t=t.insert(e.key,e);return t}function Uc(n){let t=Lc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function De(){return jn()}function Bc(){return jn()}function jn(){return new je((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Dp=new rt(M.comparator),kp=new ht(M.comparator);function q(...n){let t=kp;for(const e of n)t=t.add(e);return t}const Np=new ht(j);function Op(){return Np}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(t)?"-0":t}}function jc(n){return{integerValue:""+n}}function xp(n,t){return ap(t)?jc(t):Xi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this._=void 0}}function Mp(n,t,e){return n instanceof zr?(function(s,o){const a={fields:{[Ac]:{stringValue:wc},[bc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hi(o)&&(o=ns(o)),o&&(a.fields[Rc]=o),{mapValue:a}})(e,t):n instanceof un?qc(n,t):n instanceof Yn?zc(n,t):(function(s,o){const a=$c(s,o),c=cu(a)+cu(s.Ee);return Ti(a)&&Ti(s.Ee)?jc(c):Xi(s.serializer,c)})(n,t)}function Fp(n,t,e){return n instanceof un?qc(n,t):n instanceof Yn?zc(n,t):e}function $c(n,t){return n instanceof Hr?(function(r){return Ti(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class zr extends os{}class un extends os{constructor(t){super(),this.elements=t}}function qc(n,t){const e=Hc(t);for(const r of n.elements)e.some((s=>Gt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Yn extends os{constructor(t){super(),this.elements=t}}function zc(n,t){let e=Hc(t);for(const r of n.elements)e=e.filter((s=>!Gt(s,r)));return{arrayValue:{values:e}}}class Hr extends os{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function cu(n){return it(n.integerValue||n.doubleValue)}function Hc(n){return Gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,e){this.field=t,this.transform=e}}function Up(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof un&&s instanceof un||r instanceof Yn&&s instanceof Yn?sn(r.elements,s.elements,Gt):r instanceof Hr&&s instanceof Hr?Gt(r.Ee,s.Ee):r instanceof zr&&s instanceof zr})(n.transform,t.transform)}class Bp{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class as{}function Gc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wc(n.key,Zt.none()):new us(n.key,n.data,Zt.none());{const e=n.data,r=Nt.empty();let s=new ht(_t.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new $e(n.key,r,new Ut(s.toArray()),Zt.none())}}function jp(n,t,e){n instanceof us?(function(s,o,a){const c=s.value.clone(),h=hu(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof $e?(function(s,o,a){if(!Or(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=hu(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function $n(n,t,e,r){return n instanceof us?(function(o,a,c,h){if(!Or(o.precondition,a))return c;const d=o.value.clone(),m=du(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof $e?(function(o,a,c,h){if(!Or(o.precondition,a))return c;const d=du(o.fieldTransforms,h,a),m=a.data;return m.setAll(Kc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(n,t,e,r):(function(o,a,c){return Or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function $p(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=$c(r.transform,s||null);o!=null&&(e===null&&(e=Nt.empty()),e.set(r.field,o))}return e||null}function lu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sn(r,s,((o,a)=>Up(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class us extends as{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $e extends as{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kc(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function hu(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Fp(a,c,e[s]))}return r}function du(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Mp(o,a,t))}return r}class Wc extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qp extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&jp(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=$n(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=$n(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bc();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Gc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&sn(this.mutations,t.mutations,((e,r)=>lu(e,r)))&&sn(this.baseMutations,t.baseMutations,((e,r)=>lu(e,r)))}}class Yi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){X(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return Dp})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Yi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,G;function Kp(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Qc(n){if(n===void 0)return re("GRPC error has no .code"),C.UNKNOWN;switch(n){case ut.OK:return C.OK;case ut.CANCELLED:return C.CANCELLED;case ut.UNKNOWN:return C.UNKNOWN;case ut.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ut.INTERNAL:return C.INTERNAL;case ut.UNAVAILABLE:return C.UNAVAILABLE;case ut.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ut.NOT_FOUND:return C.NOT_FOUND;case ut.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ut.ABORTED:return C.ABORTED;case ut.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ut.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}(G=ut||(ut={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new pe([4294967295,4294967295],0);function fu(n){const t=yc().encode(n),e=new lc;return e.update(t),new Uint8Array(e.digest())}function pu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new pe([e,r],0),new pe([s,o],0)]}class Ji{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new xn(`Invalid padding: ${e}`);if(r<0)throw new xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new xn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=pe.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(pe.fromNumber(r)));return s.compare(Wp)===1&&(s=new pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=fu(t),[r,s]=pu(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ji(o,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.fe===0)return;const e=fu(t),[r,s]=pu(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,rr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new cs(L.min(),s,new rt(j),se(),q())}}class rr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new rr(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class Xc{constructor(t,e){this.targetId=t,this.De=e}}class Yc{constructor(t,e,r=yt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class mu{constructor(){this.ve=0,this.Ce=gu(),this.Fe=yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),r=q();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}})),new rr(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=gu()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Qp{constructor(t){this.We=t,this.Ge=new Map,this.ze=se(),this.je=Pr(),this.Je=Pr(),this.He=new rt(j)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Ii(o))if(r===0){const a=new M(o.path);this.Xe(e,a,Rt.newNoDocument(a,L.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const c=this._t(t),h=c?this.ut(c,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Te(r).toUint8Array()}catch(h){if(h instanceof Ic)return _e("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ji(a,s,o)}catch(h){return _e(h instanceof xn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const c=this.st(a);if(c){if(o.current&&Ii(c.target)){const h=new M(c.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Rt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let r=q();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const s=new cs(t,e,this.He,this.ze,r);return this.ze=se(),this.je=Pr(),this.Je=Pr(),this.He=new rt(j),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new mu,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ht(j),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ht(j),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new mu),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Pr(){return new rt(M.comparator)}function gu(){return new rt(M.comparator)}const Xp={asc:"ASCENDING",desc:"DESCENDING"},Yp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jp={and:"AND",or:"OR"};class Zp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ai(n,t){return n.useProto3Json||es(t)?t:{value:t}}function Gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function tm(n,t){return Gr(n,t.toTimestamp())}function qt(n){return X(!!n,49232),L.fromTimestamp((function(e){const r=Ee(e);return new Z(r.seconds,r.nanos)})(n))}function Zi(n,t){return Ri(n,t).canonicalString()}function Ri(n,t){const e=(function(s){return new nt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Zc(n){const t=nt.fromString(n);return X(sl(t),10190,{key:t.toString()}),t}function bi(n,t){return Zi(n.databaseId,t.path)}function Ws(n,t){const e=Zc(t);if(e.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(el(e))}function tl(n,t){return Zi(n.databaseId,t)}function em(n){const t=Zc(n);return t.length===4?nt.emptyPath():el(t)}function Si(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function el(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _u(n,t,e){return{name:bi(n,t),fields:e.value.mapValue.fields}}function nm(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(X(m===void 0||typeof m=="string",58123),yt.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),yt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?C.UNKNOWN:Qc(d.code);return new x(m,d.message||"")})(a);e=new Yc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ws(n,r.document.name),o=qt(r.document.updateTime),a=r.document.createTime?qt(r.document.createTime):L.min(),c=new Nt({mapValue:{fields:r.document.fields}}),h=Rt.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new xr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ws(n,r.document),o=r.readTime?qt(r.readTime):L.min(),a=Rt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new xr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ws(n,r.document),o=r.removedTargetIds||[];e=new xr([],o,s,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Gp(s,o),c=r.targetId;e=new Xc(c,a)}}return e}function rm(n,t){let e;if(t instanceof us)e={update:_u(n,t.key,t.value)};else if(t instanceof Wc)e={delete:bi(n,t.key)};else if(t instanceof $e)e={update:_u(n,t.key,t.data),updateMask:dm(t.fieldMask)};else{if(!(t instanceof qp))return F(16599,{Rt:t.type});e={verify:bi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const c=a.transform;if(c instanceof zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof un)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Hr)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:tm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,t.precondition)),e}function sm(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?qt(s.updateTime):qt(o);return a.isEqual(L.min())&&(a=qt(o)),new Bp(a,s.transformResults||[])})(e,t)))):[]}function im(n,t){return{documents:[tl(n,t.path)]}}function om(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=tl(n,s);const o=(function(d){if(d.length!==0)return rl(Kt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(I){return{field:Xe(I.field),direction:cm(I.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ai(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function am(n){let t=em(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){X(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(E){const I=nl(E);return I instanceof Kt&&kc(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((I=>(function(V){return new qr(Ye(V.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(I)))})(e.orderBy));let c=null;e.limit&&(c=(function(E){let I;return I=typeof E=="object"?E.value:E,es(I)?null:I})(e.limit));let h=null;e.startAt&&(h=(function(E){const I=!!E.before,b=E.values||[];return new $r(b,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(E){const I=!E.before,b=E.values||[];return new $r(b,I)})(e.endAt)),Rp(t,s,a,o,c,"F",h,d)}function um(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nl(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ye(e.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ye(e.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ye(e.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ye(e.unaryFilter.field);return lt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(e){return lt.create(Ye(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Kt.create(e.compositeFilter.filters.map((r=>nl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(n):F(30097,{filter:n})}function cm(n){return Xp[n]}function lm(n){return Yp[n]}function hm(n){return Jp[n]}function Xe(n){return{fieldPath:n.canonicalString()}}function Ye(n){return _t.fromServerFormat(n.fieldPath)}function rl(n){return n instanceof lt?(function(e){if(e.op==="=="){if(su(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NAN"}};if(ru(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(su(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NAN"}};if(ru(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xe(e.field),op:lm(e.op),value:e.value}}})(n):n instanceof Kt?(function(e){const r=e.getFilters().map((s=>rl(s)));return r.length===1?r[0]:{compositeFilter:{op:hm(e.op),filters:r}}})(n):F(54877,{filter:n})}function dm(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function sl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e,r,s,o=L.min(),a=L.min(),c=yt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new he(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.gt=t}}function pm(n){const t=am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Dn=new gm}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ye.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ye.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class gm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(nt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},il=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(il,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new cn(0)}static ur(){return new cn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="LruGarbageCollector",_m=1048576;function Tu([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class ym{constructor(t){this.Tr=t,this.buffer=new ht(Tu),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Tu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Em{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(Eu,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){fn(e)?N(Eu,"Ignoring IndexedDB error during garbage collection: ",e):await dn(e)}await this.Rr(3e5)}))}}class Tm{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(ts.ue);const r=new ym(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(yu)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yu):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s)))).next((E=>(r=E,c=Date.now(),this.removeTargets(t,r,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((E=>(d=Date.now(),We()<=K.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E}))))}}function vm(n,t){return new Tm(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.changes=new je((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&$n(r.mutation,s,Ut.empty(),Z.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const s=De();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=On();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=De();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let o=se();const a=jn(),c=(function(){return jn()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof $e)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),$n(m.mutation,d,m.mutation.getFieldMask(),Z.now())):a.set(d.key,Ut.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var E;return c.set(d,new wm(m,(E=a.get(d))!==null&&E!==void 0?E:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=jn();let s=new rt(((a,c)=>a-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ut.empty();m=c.applyToLocalView(d,m),r.set(h,m);const E=(s.get(c.batchId)||q()).add(h);s=s.insert(c.batchId,E)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=Bc();m.forEach((I=>{if(!o.has(I)){const b=Gc(e.get(I),r.get(I));b!==null&&E.set(I,b),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return S.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(De());let c=Kn,h=o;return a.next((d=>S.forEach(d,((m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next((I=>{h=h.insert(m,I)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,q()))).next((m=>({batchId:c,changes:Uc(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let s=On();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=On();return this.indexManager.getCollectionParents(t,o).next((c=>S.forEach(c,(h=>{const d=(function(E,I){return new rs(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((E,I)=>{a=a.insert(E,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Rt.newInvalidDocument(m)))}));let c=On();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&$n(m.mutation,d,Ut.empty(),Z.now()),is(e,d)&&(c=c.insert(h,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:pm(s.bundledQuery),readTime:qt(s.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.overlays=new rt(M.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=De();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=De(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new rt(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=De(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=De(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return S.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hp(e,r));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.qr=new ht(dt.Qr),this.$r=new ht(dt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new dt(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new M(new nt([])),r=new dt(e,t),s=new dt(e,t+1),o=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new nt([])),r=new dt(e,t),s=new dt(e,t+1);let o=q();return this.$r.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new dt(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||j(t.Hr,e.Hr)}static Ur(t,e){return j(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ht(dt.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zp(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new dt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?zi:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);o.push(c)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(j);return e.forEach((s=>{const o=new dt(s,0),a=new dt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(c=>{r=r.add(c.Hr)}))})),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new dt(new M(o),0);let c=new ht(j);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Hr)),!0)}),a),S.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){X(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,(s=>{const o=new dt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new dt(e,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t){this.ni=t,this.docs=(function(){return new rt(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(e))}getEntries(t,e){let r=se();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Rt.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=se();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||rp(np(m),r)<=0||(s.has(m.key)||is(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ri(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Vm(this)}getSize(t){return S.resolve(this.size)}}class Vm extends Im{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.persistence=t,this.ii=new je((e=>Ki(e)),Wi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new to,this.targetCount=0,this._i=cn.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new cn(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.ai={},this.overlays={},this.ui=new ts(0),this.ci=!1,this.ci=!0,this.li=new Sm,this.referenceDelegate=t(this),this.hi=new Dm(this),this.indexManager=new mm,this.remoteDocumentCache=(function(s){return new Pm(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new fm(e),this.Ti=new Rm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Cm(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new km(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return S.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class km extends ip{constructor(t){super(),this.currentSequenceNumber=t}}class eo{constructor(t){this.persistence=t,this.Ai=new to,this.Ri=null}static Vi(t){return new eo(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,(r=>{const s=M.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,L.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Kr{constructor(t,e){this.persistence=t,this.gi=new je((r=>up(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=vm(this,e)}static Vi(t,e){return new Kr(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return S.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((c=>{c||(r++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=kr(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new no(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return bd()?8:op(Ad())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Nm;return this.ws(t,e,a).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,a,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(We()<=K.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(We()<=K.DEBUG&&N("QueryEngine","Query:",Qe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(We()<=K.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$t(e))):S.resolve())}ps(t,e){if(uu(e))return S.resolve(null);let r=$t(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=wi(e,null,"F"),r=$t(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=q(...o);return this.gs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,c);return this.Ds(e,d,a,h.readTime)?this.ps(t,wi(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,r,s){return uu(e)||s.isEqual(L.min())?S.resolve(null):this.gs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?S.resolve(null):(We()<=K.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qe(e)),this.vs(t,a,e,ep(s,Kn)).next((c=>c)))}))}bs(t,e){let r=new ht(Fc(t));return e.forEach(((s,o)=>{is(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return We()<=K.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Qe(e)),this.gs.getDocumentsMatchingQuery(t,e,ye.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="LocalStore",xm=3e8;class Mm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new rt(j),this.Ms=new je((o=>Ki(o)),Wi),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Am(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Fm(n,t,e,r){return new Mm(n,t,e,r)}async function al(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let h=q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Lm(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,d,m){const E=d.batch,I=E.keys();let b=S.resolve();return I.forEach((V=>{b=b.next((()=>m.getEntry(h,V))).next((O=>{const P=d.docVersions.get(V);X(P!==null,48541),O.version.compareTo(P)<0&&(E.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(h,E)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function ul(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Um(n,t){const e=U(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const c=[];t.targetChanges.forEach(((m,E)=>{const I=s.get(E);if(!I)return;c.push(e.hi.removeMatchingKeys(o,m.removedDocuments,E).next((()=>e.hi.addMatchingKeys(o,m.addedDocuments,E))));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(yt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(E,b),(function(O,P,z){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=xm?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(I,b,m)&&c.push(e.hi.updateTargetData(o,b))}));let h=se(),d=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(Bm(o,a,t.documentUpdates).next((m=>{h=m.Ls,d=m.ks}))),!r.isEqual(L.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next((E=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(m)}return S.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function Bm(n,t,e){let r=q(),s=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=se();return e.forEach(((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(ro,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:s}}))}function jm(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=zi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function $m(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,S.resolve(s)):e.hi.allocateTargetId(r).next((a=>(s=new he(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function Ci(n,t,e){const r=U(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!fn(a))throw a;N(ro,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function vu(n,t,e){const r=U(n);let s=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const E=U(h),I=E.Ms.get(m);return I!==void 0?S.resolve(E.Fs.get(I)):E.hi.getTargetData(d,m)})(r,a,$t(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:q()))).next((c=>(qm(r,Cp(t),c),{documents:c,qs:o})))))}function qm(n,t,e){let r=n.xs.get(t)||L.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class Iu{constructor(){this.activeTargetIds=Op()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.Fo=new Iu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Iu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="ConnectivityMonitor";class Au{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(wu,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(wu,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr=null;function Pi(){return Vr===null?Vr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vr++,"0x"+Vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="RestConnection",Gm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Km{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Br?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Pi(),c=this.Go(t,e.toUriEncodedString());N(Qs,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(c),m=Mi(d);return this.jo(t,c,h,r,m).then((E=>(N(Qs,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw _e(Qs,`RPC '${t}' ${a} failed with error: `,E,"url: ",c,"request:",r),E}))}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=Gm[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class Qm extends Km{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Pi();return new Promise(((c,h)=>{const d=new hc;d.setWithCredentials(!0),d.listenOnce(dc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Dr.NO_ERROR:const E=d.getResponseJson();N(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),c(E);break;case Dr.TIMEOUT:N(wt,`RPC '${t}' ${a} timed out`),h(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const I=d.getStatus();if(N(wt,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const O=(function(z){const B=z.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(B)>=0?B:C.UNKNOWN})(V.status);h(new x(O,V.message))}else h(new x(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(wt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);N(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}P_(t,e,r){const s=Pi(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=mc(),c=pc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(wt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);this.T_(E);let I=!1,b=!1;const V=new Wm({Ho:P=>{b?N(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(I||(N(wt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),I=!0),N(wt,`RPC '${t}' stream ${s} sending:`,P),E.send(P))},Yo:()=>E.close()}),O=(P,z,B)=>{P.listen(z,($=>{try{B($)}catch(tt){setTimeout((()=>{throw tt}),0)}}))};return O(E,Nn.EventType.OPEN,(()=>{b||(N(wt,`RPC '${t}' stream ${s} transport opened.`),V.s_())})),O(E,Nn.EventType.CLOSE,(()=>{b||(b=!0,N(wt,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(E))})),O(E,Nn.EventType.ERROR,(P=>{b||(b=!0,_e(wt,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),V.__(new x(C.UNAVAILABLE,"The operation could not be completed")))})),O(E,Nn.EventType.MESSAGE,(P=>{var z;if(!b){const B=P.data[0];X(!!B,16349);const $=B,tt=($==null?void 0:$.error)||((z=$[0])===null||z===void 0?void 0:z.error);if(tt){N(wt,`RPC '${t}' stream ${s} received error:`,tt);const xt=tt.status;let ot=(function(_){const y=ut[_];if(y!==void 0)return Qc(y)})(xt),v=tt.message;ot===void 0&&(ot=C.INTERNAL,v="Unknown error status: "+xt+" with message "+tt.message),b=!0,V.__(new x(ot,v)),E.close()}else N(wt,`RPC '${t}' stream ${s} received:`,B),V.a_(B)}})),O(c,fc.STAT_EVENT,(P=>{P.stat===_i.PROXY?N(wt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===_i.NOPROXY&&N(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){return new Zp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="PersistentStream";class ll{constructor(t,e,r,s,o,a,c,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new cl(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(re(e.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return N(Ru,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(N(Ru,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xm extends ll{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=nm(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?qt(a.readTime):L.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Si(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=Ii(h)?{documents:im(o,h)}:{query:om(o,h).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Jc(o,a.resumeToken);const d=Ai(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Gr(o,a.snapshotVersion.toTimestamp());const d=Ai(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const r=um(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Si(this.serializer),e.removeTarget=t,this.k_(e)}}class Ym extends ll{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=sm(t.writeResults,t.commitTime),r=qt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Si(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>rm(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{}class Zm extends Jm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Ri(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(t,Ri(e,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(re(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="RemoteStore";class eg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{qe(this)&&(N(Le,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ia.add(4),await sr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await hs(d)})(this))}))})),this.Aa=new tg(r,s)}}async function hs(n){if(qe(n))for(const t of n.da)await t(!0)}async function sr(n){for(const t of n.da)await t(!1)}function hl(n,t){const e=U(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),ao(e)?oo(e):pn(e).x_()&&io(e,t))}function so(n,t){const e=U(n),r=pn(e);e.Ta.delete(t),r.x_()&&dl(e,t),e.Ta.size===0&&(r.x_()?r.B_():qe(e)&&e.Aa.set("Unknown"))}function io(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}pn(n).H_(t)}function dl(n,t){n.Ra.$e(t),pn(n).Y_(t)}function oo(n){n.Ra=new Qp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),pn(n).start(),n.Aa.aa()}function ao(n){return qe(n)&&!pn(n).M_()&&n.Ta.size>0}function qe(n){return U(n).Ia.size===0}function fl(n){n.Ra=void 0}async function ng(n){n.Aa.set("Online")}async function rg(n){n.Ta.forEach(((t,e)=>{io(n,t)}))}async function sg(n,t){fl(n),ao(n)?(n.Aa.la(t),oo(n)):n.Aa.set("Unknown")}async function ig(n,t,e){if(n.Aa.set("Online"),t instanceof Yc&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,t)}catch(r){N(Le,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Wr(n,r)}else if(t instanceof xr?n.Ra.Ye(t):t instanceof Xc?n.Ra.it(t):n.Ra.et(t),!e.isEqual(L.min()))try{const r=await ul(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const c=o.Ra.Pt(a);return c.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(yt.EMPTY_BYTE_STRING,m.snapshotVersion)),dl(o,h);const E=new he(m.target,h,d,m.sequenceNumber);io(o,E)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N(Le,"Failed to raise snapshot:",r),await Wr(n,r)}}async function Wr(n,t,e){if(!fn(t))throw t;n.Ia.add(1),await sr(n),n.Aa.set("Offline"),e||(e=()=>ul(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(Le,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await hs(n)}))}function pl(n,t){return t().catch((e=>Wr(n,e,t)))}async function ds(n){const t=U(n),e=Ie(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:zi;for(;og(t);)try{const s=await jm(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,ag(t,s)}catch(s){await Wr(t,s)}ml(t)&&gl(t)}function og(n){return qe(n)&&n.Pa.length<10}function ag(n,t){n.Pa.push(t);const e=Ie(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function ml(n){return qe(n)&&!Ie(n).M_()&&n.Pa.length>0}function gl(n){Ie(n).start()}async function ug(n){Ie(n).na()}async function cg(n){const t=Ie(n);for(const e of n.Pa)t.X_(e.mutations)}async function lg(n,t,e){const r=n.Pa.shift(),s=Yi.from(r,t,e);await pl(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ds(n)}async function hg(n,t){t&&Ie(n).Z_&&await(async function(r,s){if((function(a){return Kp(a)&&a!==C.ABORTED})(s.code)){const o=r.Pa.shift();Ie(r).N_(),await pl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await ds(r)}})(n,t),ml(n)&&gl(n)}async function bu(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),N(Le,"RemoteStore received new credentials");const r=qe(e);e.Ia.add(3),await sr(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await hs(e)}async function dg(n,t){const e=U(n);t?(e.Ia.delete(2),await hs(e)):t||(e.Ia.add(2),await sr(e),e.Aa.set("Unknown"))}function pn(n){return n.Va||(n.Va=(function(e,r,s){const o=U(e);return o.ia(),new Xm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:ng.bind(null,n),e_:rg.bind(null,n),n_:sg.bind(null,n),J_:ig.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),ao(n)?oo(n):n.Aa.set("Unknown")):(await n.Va.stop(),fl(n))}))),n.Va}function Ie(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.ia(),new Ym(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:ug.bind(null,n),n_:hg.bind(null,n),ea:cg.bind(null,n),ta:lg.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await ds(n)):(await n.ma.stop(),n.Pa.length>0&&(N(Le,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new uo(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function co(n,t){if(re("AsyncQueue",`${t}: ${n}`),fn(n))return new x(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{static emptySet(t){return new Je(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=On(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Je;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.fa=new rt(M.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class ln{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new ln(t,e,Je.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ss(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class pg{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Cu(),o.forEach(((a,c)=>{for(const h of c.wa)h.onError(r)}))})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Cu(){return new je((n=>Mc(n)),ss)}async function mg(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new fg,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=co(a,`Initialization of query '${Qe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&lo(e)}async function gg(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _g(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&lo(e)}function yg(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function lo(n){n.Da.forEach((t=>{t.next()}))}var Vi,Pu;(Pu=Vi||(Vi={})).Fa="default",Pu.Cache="cache";class Eg{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ln(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=ln.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Vi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.key=t}}class yl{constructor(t){this.key=t}}class Tg{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=Fc(t),this.eu=new Je(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new Su,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,E)=>{const I=s.get(m),b=is(this.query,E)?E:null,V=!!I&&this.mutatedKeys.has(I.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;I&&b?I.data.isEqual(b.data)?V!==O&&(r.track({type:3,doc:b}),P=!0):this.iu(I,b)||(r.track({type:2,doc:b}),P=!0,(h&&this.Xa(b,h)>0||d&&this.Xa(b,d)<0)&&(c=!0)):!I&&b?(r.track({type:0,doc:b}),P=!0):I&&!b&&(r.track({type:1,doc:I}),P=!0,(h||d)&&(c=!0)),P&&(b?(a=a.add(b),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,E)=>(function(b,V){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:P})}};return O(b)-O(V)})(m.type,E.type)||this.Xa(m.doc,E.doc))),this.su(r),s=s!=null&&s;const c=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new ln(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Su,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new yl(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new _l(r))})),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return ln.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ho="SyncEngine";class vg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ig{constructor(t){this.key=t,this.lu=!1}}class wg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new je((c=>Mc(c)),ss),this.Tu=new Map,this.Iu=new Set,this.du=new rt(M.comparator),this.Eu=new Map,this.Au=new to,this.Ru={},this.Vu=new Map,this.mu=cn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Ag(n,t,e=!0){const r=Al(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await El(r,t,e,!0),s}async function Rg(n,t){const e=Al(n);await El(e,t,!0,!1)}async function El(n,t,e,r){const s=await $m(n.localStore,$t(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await bg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&hl(n.remoteStore,s),c}async function bg(n,t,e,r,s){n.gu=(E,I,b)=>(async function(O,P,z,B){let $=P.view.nu(z);$.Ds&&($=await vu(O.localStore,P.query,!1).then((({documents:v})=>P.view.nu(v,$))));const tt=B&&B.targetChanges.get(P.targetId),xt=B&&B.targetMismatches.get(P.targetId)!=null,ot=P.view.applyChanges($,O.isPrimaryClient,tt,xt);return Du(O,P.targetId,ot._u),ot.snapshot})(n,E,I,b);const o=await vu(n.localStore,t,!0),a=new Tg(t,o.qs),c=a.nu(o.documents),h=rr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Du(n,e,d._u);const m=new vg(t,e,a);return n.Pu.set(t,m),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function Sg(n,t,e){const r=U(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((a=>!ss(a,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ci(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&so(r.remoteStore,s.targetId),Di(r,s.targetId)})).catch(dn)):(Di(r,s.targetId),await Ci(r.localStore,s.targetId,!0))}async function Cg(n,t){const e=U(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),so(e.remoteStore,r.targetId))}async function Pg(n,t,e){const r=Mg(n);try{const s=await(function(a,c){const h=U(a),d=Z.now(),m=c.reduce(((b,V)=>b.add(V.key)),q());let E,I;return h.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=se(),O=q();return h.Os.getEntries(b,m).next((P=>{V=P,V.forEach(((z,B)=>{B.isValidDocument()||(O=O.add(z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(b,V))).next((P=>{E=P;const z=[];for(const B of c){const $=$p(B,E.get(B.key).overlayedDocument);$!=null&&z.push(new $e(B.key,$,Pc($.value.mapValue),Zt.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,z,c)})).next((P=>{I=P;const z=P.applyToLocalDocumentSet(E,O);return h.documentOverlayCache.saveOverlays(b,P.batchId,z)}))})).then((()=>({batchId:I.batchId,changes:Uc(E)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new rt(j)),d=d.insert(c,h),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,e),await ir(r,s.changes),await ds(r.remoteStore)}catch(s){const o=co(s,"Failed to persist write");e.reject(o)}}async function Tl(n,t){const e=U(n);try{const r=await Um(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Eu.get(o);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await ir(e,r,t)}catch(r){await dn(r)}}function Vu(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=U(a);h.onlineState=c;let d=!1;h.queries.forEach(((m,E)=>{for(const I of E.wa)I.va(c)&&(d=!0)})),d&&lo(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vg(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new rt(M.comparator);a=a.insert(o,Rt.newNoDocument(o,L.min()));const c=q().add(o),h=new cs(L.min(),new Map,new rt(j),a,c);await Tl(r,h),r.du=r.du.remove(o),r.Eu.delete(t),fo(r)}else await Ci(r.localStore,t,!1).then((()=>Di(r,t,e))).catch(dn)}async function Dg(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Lm(e.localStore,t);Il(e,r,null),vl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ir(e,s)}catch(s){await dn(s)}}async function kg(n,t,e){const r=U(n);try{const s=await(function(a,c){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next((E=>(X(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);Il(r,t,e),vl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ir(r,s)}catch(s){await dn(s)}}function vl(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Il(n,t,e){const r=U(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function Di(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||wl(n,r)}))}function wl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(so(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),fo(n))}function Du(n,t,e){for(const r of e)r instanceof _l?(n.Au.addReference(r.key,t),Ng(n,r)):r instanceof yl?(N(ho,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||wl(n,r.key)):F(19791,{yu:r})}function Ng(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(N(ho,"New document in limbo: "+e),n.Iu.add(r),fo(n))}function fo(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(nt.fromString(t)),r=n.mu.next();n.Eu.set(r,new Ig(e)),n.du=n.du.insert(e,r),hl(n.remoteStore,new he($t(Qi(e.path)),r,"TargetPurposeLimboResolution",ts.ue))}}async function ir(n,t,e){const r=U(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,h)=>{a.push(r.gu(h,t,e).then((d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=no.Es(h.targetId,d);o.push(E)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(h,d){const m=U(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>S.forEach(d,(I=>S.forEach(I.Is,(b=>m.persistence.referenceDelegate.addReference(E,I.targetId,b))).next((()=>S.forEach(I.ds,(b=>m.persistence.referenceDelegate.removeReference(E,I.targetId,b)))))))))}catch(E){if(!fn(E))throw E;N(ro,"Failed to update sequence numbers: "+E)}for(const E of d){const I=E.targetId;if(!E.fromCache){const b=m.Fs.get(I),V=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(V);m.Fs=m.Fs.insert(I,O)}}})(r.localStore,o))}async function Og(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){N(ho,"User change. New user:",t.toKey());const r=await al(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new x(C.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ir(e,r.Bs)}}function xg(n,t){const e=U(n),r=e.Eu.get(t);if(r&&r.lu)return q().add(r.key);{let s=q();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const c=e.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Al(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vg.bind(null,t),t.hu.J_=_g.bind(null,t.eventManager),t.hu.pu=yg.bind(null,t.eventManager),t}function Mg(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kg.bind(null,t),t}class Qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ls(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Fm(this.persistence,new Om,t.initialUser,this.serializer)}Du(t){return new ol(eo.Vi,this.serializer)}bu(t){return new zm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qr.provider={build:()=>new Qr};class Fg extends Qr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){X(this.persistence.referenceDelegate instanceof Kr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Em(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new ol((r=>Kr.Vi(r,e)),this.serializer)}}class ki{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Og.bind(null,this.syncEngine),await dg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new pg})()}createDatastore(t){const e=ls(t.databaseInfo.databaseId),r=(function(o){return new Qm(o)})(t.databaseInfo);return(function(o,a,c,h){return new Zm(o,a,c,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,c){return new eg(r,s,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Vu(this.syncEngine,e,0)),(function(){return Au.C()?new Au:new Hm})())}createSyncEngine(t,e){return(function(s,o,a,c,h,d,m){const E=new wg(s,o,a,c,h,d);return m&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=U(s);N(Le,"RemoteStore shutting down."),o.Ia.add(5),await sr(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ki.provider={build:()=>new ki};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):re("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="FirestoreClient";class Ug{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=$i.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{N(we,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(N(we,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=co(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ys(n,t){n.asyncQueue.verifyOperationInProgress(),N(we,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await al(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{_e("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{_e("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function ku(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bg(n);N(we,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>bu(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>bu(t.remoteStore,s))),n._onlineComponents=t}async function Bg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(we,"Using user provided OfflineComponentProvider");try{await Ys(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;_e("Error using user provided cache. Falling back to memory cache: "+e),await Ys(n,new Qr)}}else N(we,"Using default OfflineComponentProvider"),await Ys(n,new Fg(void 0));return n._offlineComponents}async function Rl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(we,"Using user provided OnlineComponentProvider"),await ku(n,n._uninitializedComponentsProvider._online)):(N(we,"Using default OnlineComponentProvider"),await ku(n,new ki))),n._onlineComponents}function jg(n){return Rl(n).then((t=>t.syncEngine))}async function $g(n){const t=await Rl(n),e=t.eventManager;return e.onListen=Ag.bind(null,t.syncEngine),e.onUnlisten=Sg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cg.bind(null,t.syncEngine),e}function qg(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,d){const m=new Lg({next:I=>{m.Ou(),a.enqueueAndForget((()=>gg(o,E)));const b=I.docs.has(c);!b&&I.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new Eg(Qi(c.path),m,{includeMetadataChanges:!0,ka:!0});return mg(o,E)})(await $g(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="firestore.googleapis.com",Ou=!0;class xu{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sl,this.ssl=Ou}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ou;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=il;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_m)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class po{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zf;switch(r.type){case"firstParty":return new Wf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Nu.get(e);r&&(N("ComponentProvider","Removing Datastore"),Nu.delete(e),r.terminate())})(this),Promise.resolve()}}function zg(n,t,e,r={}){var s;n=Gn(n,po);const o=Mi(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Ed(`https://${h}`),wd("Firestore",!0)),a.host!==Sl&&a.host!==h&&_e("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!rn(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=At.MOCK_USER;else{m=Td(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new At(I)}n._authCredentials=new Hf(new _c(m,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new mo(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(nr(e,ft._jsonSchema))return new ft(t,r||null,new M(nt.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:ct("string",ft._jsonSchemaVersion),referencePath:ct("string")};class Jn extends mo{constructor(t,e,r){super(t,e,Qi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new M(t))}withConverter(t){return new Jn(this.firestore,t,this._path)}}function Hg(n,t,...e){if(n=te(n),arguments.length===1&&(t=$i.newId()),Zf("doc","path",t),n instanceof po){const r=nt.fromString(t,...e);return Qa(r),new ft(n,null,new M(r))}{if(!(n instanceof ft||n instanceof Jn))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return Qa(r),new ft(n.firestore,n instanceof Jn?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="AsyncQueue";class Fu{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new cl(this,"async_queue_retry"),this.oc=()=>{const r=Xs();r&&N(Mu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=Xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new me;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!fn(t))throw t;N(Mu,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,re("INTERNAL UNHANDLED ERROR: ",Lu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=uo.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:Lu(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Lu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class go extends po{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Fu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fu(t),this._firestoreClient=void 0,await t}}}function Gg(n,t){const e=typeof n=="object"?n:ac(),r=typeof n=="string"?n:Br,s=er(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=_d("firestore");o&&zg(s,...o)}return s}function Cl(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kg(n),n._firestoreClient}function Kg(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,h,d,m){return new hp(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,bl(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ug(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mt(yt.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Mt(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(nr(t,Mt._jsonSchema))return Mt.fromBase64String(t.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:ct("string",Mt._jsonSchemaVersion),bytes:ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(t){if(nr(t,zt._jsonSchema))return new zt(t.latitude,t.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:ct("string",zt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(nr(t,Ht._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ht(t.vectorValues);throw new x(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:ct("string",Ht._jsonSchemaVersion),vectorValues:ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=/^__.*__$/;class Pl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new $e(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Vl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class ms{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new ms(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Xr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Vl(this.Ec)&&Wg.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Qg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ls(t)}Dc(t,e,r,s=!1){return new ms({Ec:t,methodName:e,bc:r,path:_t.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xg(n){const t=n._freezeSettings(),e=ls(n._databaseId);return new Qg(n._databaseId,!!t.ignoreUndefinedProperties,e)}class gs extends ps{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gs}}function Yg(n,t,e){return new ms({Ec:3,bc:t.settings.bc,methodName:n._methodName,mc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class _o extends ps{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Yg(this,t,!0),r=this.vc.map((o=>or(o,e))),s=new un(r);return new Lp(t.path,s)}isEqual(t){return t instanceof _o&&rn(this.vc,t.vc)}}function Jg(n,t,e,r){const s=n.Dc(1,t,e);kl("Data must be an object, but it was:",s,r);const o=[],a=Nt.empty();Re(r,((h,d)=>{const m=yo(t,h,e);d=te(d);const E=s.gc(m);if(d instanceof gs)o.push(m);else{const I=or(d,E);I!=null&&(o.push(m),a.set(m,I))}}));const c=new Ut(o);return new Pl(a,c,s.fieldTransforms)}function Zg(n,t,e,r,s,o){const a=n.Dc(1,t,e),c=[Uu(t,r,e)],h=[s];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(Uu(t,o[I])),h.push(o[I+1]);const d=[],m=Nt.empty();for(let I=c.length-1;I>=0;--I)if(!n_(d,c[I])){const b=c[I];let V=h[I];V=te(V);const O=a.gc(b);if(V instanceof gs)d.push(b);else{const P=or(V,O);P!=null&&(d.push(b),m.set(b,P))}}const E=new Ut(d);return new Pl(m,E,a.fieldTransforms)}function or(n,t){if(Dl(n=te(n)))return kl("Unsupported field value:",t,n),t_(n,t);if(n instanceof ps)return(function(r,s){if(!Vl(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let h=or(c,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Z.fromDate(r);return{timestampValue:Gr(s.serializer,o)}}if(r instanceof Z){const o=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gr(s.serializer,o)}}if(r instanceof zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:Jc(s.serializer,r._byteString)};if(r instanceof ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ht)return(function(a,c){return{mapValue:{fields:{[Sc]:{stringValue:Cc},[jr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Xi(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${qi(r)}`)})(n,t)}function t_(n,t){const e={};return vc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(n,((r,s)=>{const o=or(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Dl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof zt||n instanceof Mt||n instanceof ft||n instanceof ps||n instanceof Ht)}function kl(n,t,e){if(!Dl(e)||!Ec(e)){const r=qi(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Uu(n,t,e){if((t=te(t))instanceof fs)return t._internalPath;if(typeof t=="string")return yo(n,t);throw Xr("Field path arguments must be of type string or ",n,!1,void 0,e)}const e_=new RegExp("[~\\*/\\[\\]]");function yo(n,t,e){if(t.search(e_)>=0)throw Xr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new fs(...t.split("."))._internalPath}catch{throw Xr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Xr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(C.INVALID_ARGUMENT,c+n+h)}function n_(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new r_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ol("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class r_ extends Nl{data(){return super.data()}}function Ol(n,t){return typeof t=="string"?yo(n,t):t instanceof fs?t._internalPath:t._delegate._internalPath}class s_{convertValue(t,e="none"){switch(ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Re(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[jr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>it(a.doubleValue)));return new Ht(o)}convertGeoPoint(t){return new zt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ns(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Wn(t));default:return null}}convertTimestamp(t){const e=Ee(t);return new Z(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);X(sl(r),9688,{name:t});const s=new Qn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||re(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class Mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Me extends Nl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ol("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Me._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Me._jsonSchemaVersion="firestore/documentSnapshot/1.0",Me._jsonSchema={type:ct("string",Me._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class Mr extends Me{data(t={}){return super.data(t)}}class qn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Mr(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new Mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new Mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:i_(c.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=qn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$i.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function i_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){n=Gn(n,ft);const t=Gn(n.firestore,go);return qg(Cl(t),n._key).then((e=>c_(t,n,e)))}qn._jsonSchemaVersion="firestore/querySnapshot/1.0",qn._jsonSchema={type:ct("string",qn._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class a_ extends s_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Ly(n,t,e,...r){n=Gn(n,ft);const s=Gn(n.firestore,go),o=Xg(s);let a;return a=typeof(t=te(t))=="string"||t instanceof fs?Zg(o,"updateDoc",n._key,t,e,r):Jg(o,"updateDoc",n._key,t),u_(s,[a.toMutation(n._key,Zt.exists(!0))])}function u_(n,t){return(function(r,s){const o=new me;return r.asyncQueue.enqueueAndForget((async()=>Pg(await jg(r),s,o))),o.promise})(Cl(n),t)}function c_(n,t,e){const r=e.docs.get(t._key),s=new a_(n);return new Me(n,s,t._key,r,new Mn(e.hasPendingWrites,e.fromCache),t.converter)}function Uy(...n){return new _o("arrayUnion",n)}(function(t,e=!0){(function(s){hn=s})(Nf),ge(new ee("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new go(new Gf(r.getProvider("auth-internal")),new Qf(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(d.options.projectId,m)})(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),jt(za,Ha,t),jt(za,Ha,"esm2017")})();var l_="firebase",h_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(l_,h_,"app");const xl="@firebase/installations",Eo="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=1e4,Fl=`w:${Eo}`,Ll="FIS_v2",d_="https://firebaseinstallations.googleapis.com/v1",f_=3600*1e3,p_="installations",m_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ue=new Zr(p_,m_,g_);function Ul(n){return n instanceof Ae&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl({projectId:n}){return`${d_}/projects/${n}/installations`}function jl(n){return{token:n.token,requestStatus:2,expiresIn:y_(n.expiresIn),creationTime:Date.now()}}async function $l(n,t){const r=(await t.json()).error;return Ue.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ql({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function __(n,{refreshToken:t}){const e=ql(n);return e.append("Authorization",E_(t)),e}async function zl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function y_(n){return Number(n.replace("s","000"))}function E_(n){return`${Ll} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Bl(n),s=ql(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Ll,appId:n.appId,sdkVersion:Fl},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await zl(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:jl(d.authToken)}}else throw await $l("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=/^[cdef][\w-]{21}$/,Ni="";function w_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=A_(n);return I_.test(e)?e:Ni}catch{return Ni}}function A_(n){return v_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map;function Kl(n,t){const e=_s(n);Wl(e,t),R_(e,t)}function Wl(n,t){const e=Gl.get(n);if(e)for(const r of e)r(t)}function R_(n,t){const e=b_();e&&e.postMessage({key:n,fid:t}),S_()}let ke=null;function b_(){return!ke&&"BroadcastChannel"in self&&(ke=new BroadcastChannel("[Firebase] FID Change"),ke.onmessage=n=>{Wl(n.data.key,n.data.fid)}),ke}function S_(){Gl.size===0&&ke&&(ke.close(),ke=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firebase-installations-database",P_=1,Be="firebase-installations-store";let Js=null;function To(){return Js||(Js=ic(C_,P_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Be)}}})),Js}async function Yr(n,t){const e=_s(n),s=(await To()).transaction(Be,"readwrite"),o=s.objectStore(Be),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Kl(n,t.fid),t}async function Ql(n){const t=_s(n),r=(await To()).transaction(Be,"readwrite");await r.objectStore(Be).delete(t),await r.done}async function ys(n,t){const e=_s(n),s=(await To()).transaction(Be,"readwrite"),o=s.objectStore(Be),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&Kl(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n){let t;const e=await ys(n.appConfig,r=>{const s=V_(r),o=D_(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ni?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function V_(n){const t=n||{fid:w_(),registrationStatus:0};return Xl(t)}function D_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ue.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=k_(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:N_(n)}:{installationEntry:t}}async function k_(n,t){try{const e=await T_(n,t);return Yr(n.appConfig,e)}catch(e){throw Ul(e)&&e.customData.serverCode===409?await Ql(n.appConfig):await Yr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function N_(n){let t=await Bu(n.appConfig);for(;t.registrationStatus===1;)await Hl(100),t=await Bu(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await vo(n);return r||e}return t}function Bu(n){return ys(n,t=>{if(!t)throw Ue.create("installation-not-found");return Xl(t)})}function Xl(n){return O_(n)?{fid:n.fid,registrationStatus:0}:n}function O_(n){return n.registrationStatus===1&&n.registrationTime+Ml<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_({appConfig:n,heartbeatServiceProvider:t},e){const r=M_(n,e),s=__(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Fl,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await zl(()=>fetch(r,c));if(h.ok){const d=await h.json();return jl(d)}else throw await $l("Generate Auth Token",h)}function M_(n,{fid:t}){return`${Bl(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n,t=!1){let e;const r=await ys(n.appConfig,o=>{if(!Yl(o))throw Ue.create("not-registered");const a=o.authToken;if(!t&&U_(a))return o;if(a.requestStatus===1)return e=F_(n,t),o;{if(!navigator.onLine)throw Ue.create("app-offline");const c=j_(o);return e=L_(n,c),c}});return e?await e:r.authToken}async function F_(n,t){let e=await ju(n.appConfig);for(;e.authToken.requestStatus===1;)await Hl(100),e=await ju(n.appConfig);const r=e.authToken;return r.requestStatus===0?Io(n,t):r}function ju(n){return ys(n,t=>{if(!Yl(t))throw Ue.create("not-registered");const e=t.authToken;return $_(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function L_(n,t){try{const e=await x_(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Yr(n.appConfig,r),e}catch(e){if(Ul(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Ql(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Yr(n.appConfig,r)}throw e}}function Yl(n){return n!==void 0&&n.registrationStatus===2}function U_(n){return n.requestStatus===2&&!B_(n)}function B_(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+f_}function j_(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function $_(n){return n.requestStatus===1&&n.requestTime+Ml<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(n){const t=n,{installationEntry:e,registrationPromise:r}=await vo(t);return r?r.catch(console.error):Io(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,t=!1){const e=n;return await H_(e),(await Io(e,t)).token}async function H_(n){const{registrationPromise:t}=await vo(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n){if(!n||!n.options)throw Zs("App Configuration");if(!n.name)throw Zs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Zs(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Zs(n){return Ue.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="installations",K_="installations-internal",W_=n=>{const t=n.getProvider("app").getImmediate(),e=G_(t),r=er(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Q_=n=>{const t=n.getProvider("app").getImmediate(),e=er(t,Jl).getImmediate();return{getId:()=>q_(e),getToken:s=>z_(e,s)}};function X_(){ge(new ee(Jl,W_,"PUBLIC")),ge(new ee(K_,Q_,"PRIVATE"))}X_();jt(xl,Eo);jt(xl,Eo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="analytics",Y_="firebase_id",J_="origin",Z_=60*1e3,ty="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Ui("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new Zr("analytics","Analytics",ey);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(n){if(!n.startsWith(wo)){const t=Ot.create("invalid-gtag-resource",{gtagURL:n});return Dt.warn(t.message),""}return n}function Zl(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function ry(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function sy(n,t){const e=ry("firebase-js-sdk-policy",{createScriptURL:ny}),r=document.createElement("script"),s=`${wo}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function iy(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function oy(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Zl(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){Dt.error(c)}n("config",s,o)}async function ay(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Zl(e);for(const h of a){const d=c.find(E=>E.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Dt.error(o)}}function uy(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await ay(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await oy(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){Dt.error(c)}}return s}function cy(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=uy(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function ly(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(wo)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=30,dy=1e3;class fy{constructor(t={},e=dy){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const th=new fy;function py(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function my(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:py(r)},o=ty.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function gy(n,t=th,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Ot.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Ot.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Ey;return setTimeout(async()=>{c.abort()},Z_),eh({appId:r,apiKey:s,measurementId:o},a,c,t)}async function eh(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=th){var o;const{appId:a,measurementId:c}=n;try{await _y(r,t)}catch(h){if(c)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await my(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!yy(d)){if(s.deleteThrottleMetadata(a),c)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Oa(e,s.intervalMillis,hy):Oa(e,s.intervalMillis),E={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,E),Dt.debug(`Calling attemptFetch again in ${m} millis`),eh(n,E,r,s)}}function _y(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function yy(n){if(!(n instanceof Ae)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ey{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ty(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(){if(Fi())try{await Li()}catch(n){return Dt.warn(Ot.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Dt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Iy(n,t,e,r,s,o,a){var c;const h=gy(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Dt.error(b)),t.push(h);const d=vy().then(b=>{if(b)return r.getId()}),[m,E]=await Promise.all([h,d]);ly(o)||sy(o,m.measurementId),s("js",new Date);const I=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return I[J_]="firebase",I.update=!0,E!=null&&(I[Y_]=E),s("config",m.measurementId,I),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t){this.app=t}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},$u=[];const qu={};let ti="dataLayer",Ay="gtag",zu,nh,Hu=!1;function Ry(){const n=[];if(ec()&&n.push("This is a browser extension environment."),nc()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Ot.create("invalid-analytics-context",{errorInfo:t});Dt.warn(e.message)}}function by(n,t,e){Ry();const r=n.options.appId;if(!r)throw Ot.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(zn[r]!=null)throw Ot.create("already-exists",{id:r});if(!Hu){iy(ti);const{wrappedGtag:o,gtagCore:a}=cy(zn,$u,qu,ti,Ay);nh=o,zu=a,Hu=!0}return zn[r]=Iy(n,$u,qu,t,zu,ti,e),new wy(n)}function Sy(n=ac()){n=te(n);const t=er(n,Jr);return t.isInitialized()?t.getImmediate():Cy(n)}function Cy(n,t={}){const e=er(n,Jr);if(e.isInitialized()){const s=e.getImmediate();if(rn(t,e.getOptions()))return s;throw Ot.create("already-initialized")}return e.initialize({options:t})}async function Py(){if(ec()||!nc()||!Fi())return!1;try{return await Li()}catch{return!1}}function Vy(n,t,e,r){n=te(n),Ty(nh,zn[n.app.options.appId],t,e,r).catch(s=>Dt.error(s))}const Gu="@firebase/analytics",Ku="0.10.17";function Dy(){ge(new ee(Jr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return by(r,s,e)},"PUBLIC")),ge(new ee("analytics-internal",n,"PRIVATE")),jt(Gu,Ku),jt(Gu,Ku,"esm2017");function n(t){try{const e=t.getProvider(Jr).getImmediate();return{logEvent:(r,s,o)=>Vy(e,r,s,o)}}catch(e){throw Ot.create("interop-component-reg-failed",{reason:e})}}}Dy();const ky={apiKey:"AIzaSyCm0mKPc_8_Tc1NzGWDbBYOpIKzBkglozs",authDomain:"portflio-a5b10.firebaseapp.com",projectId:"portflio-a5b10",storageBucket:"portflio-a5b10.firebasestorage.app",messagingSenderId:"1040313084668",appId:"1:1040313084668:web:68004bcaa079c235c58579",measurementId:"G-9ZWLDK4XN3"},rh=oc(ky),Ny=Gg(rh);Py().then(n=>{n&&Sy(rh)});const By=()=>{const n=Hh.c(1);let t;return n[0]===Symbol.for("react.memo_cache_sentinel")?(t={queryKey:["about"],queryFn:Oy},n[0]=t):t=n[0],od(t)};async function Oy(){const n=Hg(Ny,"users","Abdallah_Alqiran"),t=await o_(n);if(!t.exists())throw new Error("Document not found");return t.data()}export{Ny as a,Ly as b,Uy as c,Hg as d,By as u};
