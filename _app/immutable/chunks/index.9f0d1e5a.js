function k(){}const et=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function Y(){return Object.create(null)}function N(t){t.forEach(nt)}function H(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Wt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function xt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return it(t,n=>e=n)(),e}function Jt(t,e,n){t.$$.on_destroy.push(it(e,n))}function Kt(t,e,n,i){if(t){const r=rt(t,e,n,i);return t[0](r)}}function rt(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const s=rt(e,n,i,l);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const st=typeof window<"u";let ct=st?()=>window.performance.now():()=>Date.now(),V=st?t=>requestAnimationFrame(t):k;const M=new Set;function ot(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&V(ot)}function lt(t){let e;return M.size===0&&V(ot),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let I=!1;function wt(){I=!0}function vt(){I=!1}function Et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=a?r+1:Et(1,r,h=>e[n[h]].claim_order,a))-1;i[o]=n[_]+1;const f=_+1;n[f]=o,r=Math.max(f,r)}const l=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<l.length&&s[o].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(s[o],_)}}function Nt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=ft("style");return At(at(t),e),e.sheet}function At(t,e){return Nt(t.head||t,e),e.sheet}function Mt(t,e){if(I){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){I&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function te(){return X(" ")}function ee(){return X("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,r=!1){jt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Pt(t,e,n,i){return _t(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||l.push(c.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return Pt(t,e,n,ft)}function Dt(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function ce(t){return Dt(t," ")}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e){return new t(e)}const L=new Map;let T=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:St(e),rules:{}};return L.set(t,n),n}function K(t,e,n,i,r,l,s,c=0){const o=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*l(y);a+=y*100+`%{${s(g,1-g)}}
`}const _=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${c}`,h=at(t),{stylesheet:u,rules:d}=L.get(h)||qt(h,t);d[f]||(d[f]=!0,u.insertRule(`@keyframes ${f} ${_}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,T+=1,f}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Rt())}function Rt(){V(()=>{T||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),L.clear())})}let O;function P(t){O=t}function W(){if(!O)throw new Error("Function called outside component initialization");return O}function ue(t){W().$$.on_mount.push(t)}function fe(t){W().$$.after_update.push(t)}function _e(t){W().$$.on_destroy.push(t)}function de(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=dt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function he(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],Z=[];let C=[];const tt=[],ht=Promise.resolve();let U=!1;function mt(){U||(U=!0,ht.then(pt))}function me(){return mt(),ht}function q(t){C.push(t)}const J=new Set;let S=0;function pt(){if(S!==0)return;const t=O;do{try{for(;S<A.length;){const e=A[S];S++,P(e),zt(e.$$)}}catch(e){throw A.length=0,S=0,e}for(P(null),A.length=0,S=0;Z.length;)Z.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];J.has(n)||(J.add(n),n())}C.length=0}while(A.length);for(;tt.length;)tt.pop()();U=!1,J.clear(),P(t)}function zt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function Bt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let j;function yt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function D(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const F=new Set;let E;function pe(){E={r:0,c:[],p:E}}function ye(){E.r||N(E.c),E=E.p}function gt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),E.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const bt={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,c,o=0;function a(){s&&Q(t,s)}function _(){const{delay:h=0,duration:u=300,easing:d=et,tick:p=k,css:y}=r||bt;y&&(s=K(t,0,1,u,h,d,y,o++)),p(0,1);const g=ct()+h,v=g+u;c&&c.abort(),l=!0,q(()=>D(t,!0,"start")),c=lt(b=>{if(l){if(b>=v)return p(1,0),D(t,!0,"end"),a(),l=!1;if(b>=g){const $=d((b-g)/u);p($,1-$)}}return l})}let f=!1;return{start(){f||(f=!0,Q(t),H(r)?(r=r(i),yt().then(_)):_())},invalidate(){f=!1},end(){l&&(a(),l=!1)}}}function be(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,c=null,o=null,a=null;function _(){a&&Q(t,a)}function f(u,d){const p=u.b-s;return d*=Math.abs(p),{a:s,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:y=et,tick:g=k,css:v}=l||bt,b={start:ct()+d,b:u};u||(b.group=E,E.r+=1),c||o?o=b:(v&&(_(),a=K(t,s,u,p,d,y,v)),u&&g(0,1),c=f(b,p),q(()=>D(t,u,"start")),lt($=>{if(o&&$>o.start&&(c=f(o,p),o=null,D(t,c.b,"start"),v&&(_(),a=K(t,s,c.b,c.duration,0,y,l.css))),c){if($>=c.end)g(s=c.b,1-s),D(t,c.b,"end"),o||(c.b?_():--c.group.r||N(c.group.c)),c=null;else if($>=c.start){const R=$-c.start;s=c.a+c.d*y(R/c.duration),g(s,1-s)}}return!!(c||o)}))}return{run(u){H(l)?yt().then(()=>{l=l(r),h(u)}):h(u)},end(){_(),c=o=null}}}function $e(t,e){Ft(t,1,1,()=>{e.delete(t.key)})}function xe(t,e,n,i,r,l,s,c,o,a,_,f){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,v=new Map,b=[];for(d=u;d--;){const m=f(r,l,d),x=n(m);let w=s.get(x);w?i&&b.push(()=>w.p(m,e)):(w=a(x,m),w.c()),g.set(x,y[d]=w),x in p&&v.set(x,Math.abs(d-p[x]))}const $=new Set,R=new Set;function G(m){gt(m,1),m.m(c,_),s.set(m.key,m),_=m.first,u--}for(;h&&u;){const m=y[u-1],x=t[h-1],w=m.key,z=x.key;m===x?(_=m.first,h--,u--):g.has(z)?!s.has(w)||$.has(w)?G(m):R.has(z)?h--:v.get(w)>v.get(z)?(R.add(w),G(m)):($.add(z),h--):(o(x,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||o(m,s)}for(;u;)G(y[u-1]);return N(b),y}function we(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Lt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(nt).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),l.forEach(q)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(Bt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(A.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,r,l,s,c=[-1]){const o=O;P(t);const a=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&r(a.ctx[f],a.ctx[f]=d)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](d),_&&Ht(t,f)),h}):[],a.update(),_=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){wt();const f=Ct(e.target);a.fragment&&a.fragment.l(f),f.forEach(ut)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),vt(),pt()}P(o)}class ke{$destroy(){Tt(this,1),this.$destroy=k}$on(e,n){if(!H(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Lt as A,Tt as B,Kt as C,Ut as D,Vt as E,Qt as F,Mt as G,k as H,Jt as I,_e as J,Gt as K,et as L,Xt as M,q as N,ge as O,Wt as P,Zt as Q,xe as R,ke as S,$e as T,ne as U,de as V,ie as W,be as X,N as Y,he as Z,te as a,Yt as b,ce as c,Ft as d,ee as e,ye as f,gt as g,ut as h,Ee as i,fe as j,ft as k,se as l,Ct as m,re as n,ue as o,le as p,X as q,Dt as r,It as s,me as t,oe as u,pe as v,Z as w,ae as x,we as y,ve as z};