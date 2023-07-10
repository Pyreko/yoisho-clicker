import{J as Ue,K as Ve,L as ke,S as K,i as Q,s as W,k as p,a as E,l as v,m as y,c as A,h as f,n as u,b as k,G as _,M as ze,N as He,H as ue,q as T,r as B,u as O,O as ie,e as F,P as Oe,v as Ye,Q as qe,f as Je,g as x,d as Z,y as he,z as fe,A as de,B as _e,R as Le,T as Fe,I as Se,w as Ke,o as Qe}from"../chunks/index.b73f83ad.js";import{w as Me}from"../chunks/index.66b76caa.js";const X="https://api.yoisho.clicker",N=(s,e)=>(s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1)+s)),G=s=>N(0,s),le=()=>Math.random()<.5,We=s=>{if(typeof localStorage<"u"){const e=localStorage.getItem(s);return e??void 0}else return},Pe=s=>{const e=We(s);if(e==null)return 0;{const t=parseInt(e,10);return isNaN(t)?(localStorage.removeItem(s),0):t}},xe=(s,e)=>{const t=setInterval(s,e);Ue(()=>{clearInterval(t)})},Ze=async(s,e)=>{const t=G(e),n=new Audio;if(n.crossOrigin="anonymous",n.src=`${X}/sound/${t}`,s==null&&(s=new AudioContext),s!=null){const a=s.createMediaElementSource(n),o=G(2)-1,c=new StereoPannerNode(s,{pan:o});a.connect(c).connect(s.destination)}n.play()},Xe=async()=>{try{const e=await fetch(`${X}/num-files`);if(e.ok){const t=await e.json(),n=parseInt(t.count,10);if(!isNaN(n))return n}return 300}catch{return 300}},Te=Me(Pe("localYoishoCount"));let z=Pe("batchedYoishoCount");const we=async()=>{z>0&&(await fetch(`${X}/increment`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:z})}),z=0,localStorage.setItem("batchedYoishoCount",z.toString()))},et=s=>{let e=0;Te.update(t=>(e=t+s,e)),localStorage.setItem("localYoishoCount",e.toString()),z+=s,localStorage.setItem("batchedYoishoCount",z.toString()),ee.update(t=>t+s)},Ie=s=>Math.max(1,10**Math.floor(Math.log10(s))),Be=async()=>{try{const s=await fetch(`${X}/count`);if(s.ok){const e=await s.json(),t=parseInt(e,10);if(!isNaN(t))return t}return 0}catch{return 0}};let J;const Ge=async(s,e)=>{let t=Ve(ee);if(t!=e){let n=Ie(e-t);J!==void 0&&clearInterval(J),J=setInterval(()=>{if(t>=e)clearInterval(J);else{const a=e-t;a<n&&(n=Ie(a)),t+=n,s(Math.min(t,e))}},20)}},ee=Me(0,s=>{const e=setInterval(async()=>{const t=await Be();await Ge(s,t)},2e4);return()=>{clearInterval(e)}});var w=(s=>(s[s.None=0]="None",s[s.New=1]="New",s[s.Base=2]="Base",s[s.Silver=3]="Silver",s[s.Gold=4]="Gold",s[s.Plat=5]="Plat",s[s.Pon=6]="Pon",s))(w||{});const L=["IRyStocrat","Diamond","Goose","Honk","Pon","Yeet","Huh","Bloom","Gloom","Zoom","Guy","Wheeze","Banana","Tofu","Meatball","Chan","Kun","Yoisho","Volume","Hope","Despair","Caesura","Seiso","Nephilim","Hopium","Copium","Ch.","Shark","Rawr","Idol","Gravity","Sleep","Lost","BL","Baseball","Bromance","Sports","Flower","Frozen","Dumb","Genias","GuyRyS","Evil","Cute","Small","Smol","Ethereal","Seraphic","Wistful","Celestial","Harmonize","Mystical","Whispers","Confused","Excited","Radiant","Dreamer","Serene","Phoenix","Sparkle","Harmony","Mystic","Blissful","Captain","Doctor","Alex","Emily","Ethan","Sophia","Jacob","Olivia","Ava","Michael","Isabella","Daniel","Mia","Matthew","David","Noah","Harper","James","Amelia","Watson","Benjamin","Evelyn","William","Scarlett","Bob","Grace","Henry","Lily","Samuel","Aria","Zoe","Gabriel","Riley","Jackson","Nora","Eleanor","Forte","Aubrey","Stella","Joshua","Hazel","Anthony","Penelope","Ryan","Lilith"],tt=()=>{const s=N(1,2),e=G(116);let t="";for(let a=0;a<s;a++)le()?t+=L[G(L.length-1)].toLowerCase():t+=L[G(L.length-1)],le()&&(t+=" ");return e==69?t="IRySo"+t:e==116&&(t+="RyS"),le()&&(t+=G(9999).toString()),t};var je={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let st=class ce{constructor(e){this._elements=Array.isArray(e)?e:[],this._offset=0}enqueue(e){return this._elements.push(e),this}push(e){return this.enqueue(e)}dequeue(){if(this.size()===0)return null;const e=this.front();return this._offset+=1,this._offset*2<this._elements.length||(this._elements=this._elements.slice(this._offset),this._offset=0),e}pop(){return this.dequeue()}front(){return this.size()>0?this._elements[this._offset]:null}back(){return this.size()>0?this._elements[this._elements.length-1]:null}size(){return this._elements.length-this._offset}isEmpty(){return this.size()===0}toArray(){return this._elements.slice(this._offset)}clear(){this._elements=[],this._offset=0}clone(){return new ce(this._elements.slice(this._offset))}static fromArray(e){return new ce(e)}};je.Queue=st;const{Queue:nt}=je;var at=nt;function ot(s){const e=s-1;return e*e*e+1}function rt(s,{delay:e=0,duration:t=400,easing:n=ot,x:a=0,y:o=0,opacity:c=0}={}){const i=getComputedStyle(s),r=+i.opacity,l=i.transform==="none"?"":i.transform,d=r*(1-c),[b,g]=ke(a),[h,m]=ke(o);return{delay:e,duration:t,easing:n,css:(I,D)=>`
			transform: ${l} translate(${(1-I)*b}${g}, ${(1-I)*h}${m});
			opacity: ${r-d*D}`}}function Ce(s,e,t){const n=s.slice();return n[3]=e[t],n}function lt(s){const e=s.slice(),t=e[1].get(e[0].membership);return e[6]=t,e}function it(s){let e,t=s[0].username+"",n;return{c(){e=p("p"),n=T(t),this.h()},l(a){e=v(a,"P",{class:!0});var o=y(e);n=B(o,t),o.forEach(f),this.h()},h(){u(e,"class","username svelte-8d4anr")},m(a,o){k(a,e,o),_(e,n)},p(a,o){o&1&&t!==(t=a[0].username+"")&&O(n,t)},d(a){a&&f(e)}}}function Ee(s){let e,t=s[0].username+"",n,a,o,c,i;return{c(){e=p("p"),n=T(t),a=E(),o=p("img"),this.h()},l(r){e=v(r,"P",{class:!0});var l=y(e);n=B(l,t),l.forEach(f),a=A(r),o=v(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){u(e,"class","username member svelte-8d4anr"),ie(o.src,c=`images/badges/${s[6]}.webp`)||u(o,"src",c),u(o,"alt",i=`${s[6]} membership badge`),u(o,"class","badge svelte-8d4anr")},m(r,l){k(r,e,l),_(e,n),k(r,a,l),k(r,o,l)},p(r,l){l&1&&t!==(t=r[0].username+"")&&O(n,t),l&1&&!ie(o.src,c=`images/badges/${r[6]}.webp`)&&u(o,"src",c),l&1&&i!==(i=`${r[6]} membership badge`)&&u(o,"alt",i)},d(r){r&&f(e),r&&f(a),r&&f(o)}}}function ct(s){let e,t=s[0].message.contents+"",n;return{c(){e=p("p"),n=T(t),this.h()},l(a){e=v(a,"P",{class:!0});var o=y(e);n=B(o,t),o.forEach(f),this.h()},h(){u(e,"class","svelte-8d4anr")},m(a,o){k(a,e,o),_(e,n)},p(a,o){o&1&&t!==(t=a[0].message.contents+"")&&O(n,t)},d(a){a&&f(e)}}}function ut(s){let e,t={length:s[0].message.repetitions},n=[];for(let a=0;a<t.length;a+=1)n[a]=Ae(Ce(s,t,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=F()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=F()},m(a,o){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(a,o);k(a,e,o)},p(a,o){if(o&1){t={length:a[0].message.repetitions};let c;for(c=0;c<t.length;c+=1){const i=Ce(a,t,c);n[c]?n[c].p(i,o):(n[c]=Ae(),n[c].c(),n[c].m(e.parentNode,e))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}},d(a){Oe(n,a),a&&f(e)}}}function Ae(s){let e,t;return{c(){e=p("img"),this.h()},l(n){e=v(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ie(e.src,t="images/emotes/yoisho.webp")||u(e,"src",t),u(e,"alt","yoisho membership emote"),u(e,"class","emote svelte-8d4anr")},m(n,a){k(n,e,a)},p:ue,d(n){n&&f(e)}}}function ht(s){let e,t,n,a,o;function c(h,m){return h[0].membership!=w.None?Ee:it}function i(h,m){return m===Ee?lt(h):h}let r=c(s),l=r(i(s,r));function d(h,m){return m&1&&(a=null),a==null&&(a=!!h[2](h[0].message)),a?ut:ct}let b=d(s,-1),g=b(s);return{c(){e=p("div"),l.c(),t=E(),n=p("div"),g.c(),this.h()},l(h){e=v(h,"DIV",{class:!0});var m=y(e);l.l(m),t=A(m),n=v(m,"DIV",{class:!0});var I=y(n);g.l(I),I.forEach(f),m.forEach(f),this.h()},h(){u(n,"class","message-contents svelte-8d4anr"),u(e,"class","message svelte-8d4anr")},m(h,m){k(h,e,m),l.m(e,null),_(e,t),_(e,n),g.m(n,null)},p(h,[m]){r===(r=c(h))&&l?l.p(i(h,r),m):(l.d(1),l=r(i(h,r)),l&&(l.c(),l.m(e,t))),b===(b=d(h,m))&&g?g.p(h,m):(g.d(1),g=b(h),g&&(g.c(),g.m(n,null)))},i(h){o||ze(()=>{o=He(e,rt,{y:10}),o.start()})},o:ue,d(h){h&&f(e),l.d(),g.d()}}}function ft(s,e,t){let{msg:n}=e;const a=new Map([[w.New,"new"],[w.Base,"base"],[w.Silver,"silver"],[w.Gold,"gold"],[w.Plat,"plat"],[w.Pon,"pon"]]),o=c=>"repetitions"in c;return s.$$set=c=>{"msg"in c&&t(0,n=c.msg)},[n,a,o]}class dt extends K{constructor(e){super(),Q(this,e,ft,ht,W,{msg:0})}}function Ne(s,e,t){const n=s.slice();return n[4]=e[t],n}function De(s,e){let t,n,a;return n=new dt({props:{msg:e[4]}}),{key:s,first:null,c(){t=F(),he(n.$$.fragment),this.h()},l(o){t=F(),fe(n.$$.fragment,o),this.h()},h(){this.first=t},m(o,c){k(o,t,c),de(n,o,c),a=!0},p(o,c){e=o;const i={};c&1&&(i.msg=e[4]),n.$set(i)},i(o){a||(x(n.$$.fragment,o),a=!0)},o(o){Z(n.$$.fragment,o),a=!1},d(o){o&&f(t),_e(n,o)}}}function _t(s){let e,t=[],n=new Map,a,o=s[0];const c=i=>i[4];for(let i=0;i<o.length;i+=1){let r=Ne(s,o,i),l=c(r);n.set(l,t[i]=De(l,r))}return{c(){e=p("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=v(i,"DIV",{id:!0,class:!0});var r=y(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(f),this.h()},h(){u(e,"id","chat-area"),u(e,"class","svelte-2bgbho")},m(i,r){k(i,e,r);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);a=!0},p(i,[r]){r&1&&(o=i[0],Ye(),t=qe(t,r,c,1,i,o,n,e,Le,De,null,Ne),Je())},i(i){if(!a){for(let r=0;r<o.length;r+=1)x(t[r]);a=!0}},o(i){for(let r=0;r<t.length;r+=1)Z(t[r]);a=!1},d(i){i&&f(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function mt(s,e,t){const n=()=>{const i=(()=>{const b=N(1,20);return b>3?1:b})(),r=G(15);let l="";if(N(0,1e4)==116)l="What's going on?";else{const b=N(1,5)==4;if(i==1&&b)l="よいしょ";else for(let g=0;g<i;g++)l+="yoisho",g<i-1&&(l+=" ");switch(r){case 1:l+="!";break;case 2:l+="?";break;case 3:b?l+="!?":l+="?!";break;case 4:l+="...";break;case 5:l+="...?";break;case 6:l=`"${l}"`;break}}return l};let a=new at,o=[];return[o,()=>{const i=N(1,5);for(let r=0;r<i;r++){const l=tt();let d=0;N(1,3)==2&&(d=N(w.New,w.Pon));const g=G(3)==3?{contents:n()}:{repetitions:N(1,5)};a.push({username:l,membership:d,message:g})}for(;a.size()>30;)a.pop();t(0,o=a.toArray().reverse())}]}class gt extends K{constructor(e){super(),Q(this,e,mt,_t,W,{generateMessages:1})}get generateMessages(){return this.$$.ctx[1]}}function pt(s){let e,t,n,a,o,c,i=s[1].toLocaleString()+"",r,l,d,b,g,h,m,I,D,te,C,R,se,ne,j,H=s[2].toLocaleString()+"",Y,ae,M,oe,U,re,me,Re={};return m=new gt({props:Re}),s[4](m),{c(){e=p("div"),t=p("div"),n=p("p"),a=T("global yoishos"),o=E(),c=p("p"),r=T(i),l=E(),d=p("div"),b=p("div"),g=E(),h=p("div"),he(m.$$.fragment),I=E(),D=p("div"),te=E(),C=p("div"),R=p("p"),se=T("yoishos"),ne=E(),j=p("p"),Y=T(H),ae=E(),M=p("button"),oe=T("Yoisho!"),this.h()},l($){e=v($,"DIV",{id:!0,class:!0});var S=y(e);t=v(S,"DIV",{id:!0,class:!0});var V=y(t);n=v(V,"P",{class:!0});var ge=y(n);a=B(ge,"global yoishos"),ge.forEach(f),o=A(V),c=v(V,"P",{id:!0,class:!0});var pe=y(c);r=B(pe,i),pe.forEach(f),V.forEach(f),l=A(S),d=v(S,"DIV",{id:!0,class:!0});var P=y(d);b=v(P,"DIV",{id:!0,class:!0}),y(b).forEach(f),g=A(P),h=v(P,"DIV",{id:!0,class:!0});var ve=y(h);fe(m.$$.fragment,ve),ve.forEach(f),I=A(P),D=v(P,"DIV",{id:!0,class:!0}),y(D).forEach(f),te=A(P),C=v(P,"DIV",{id:!0,class:!0});var q=y(C);R=v(q,"P",{class:!0});var be=y(R);se=B(be,"yoishos"),be.forEach(f),ne=A(q),j=v(q,"P",{id:!0,class:!0});var ye=y(j);Y=B(ye,H),ye.forEach(f),q.forEach(f),P.forEach(f),ae=A(S),M=v(S,"BUTTON",{id:!0,class:!0});var $e=y(M);oe=B($e,"Yoisho!"),$e.forEach(f),S.forEach(f),this.h()},h(){u(n,"class","svelte-hjb105"),u(c,"id","global-count"),u(c,"class","svelte-hjb105"),u(t,"id","above-chat"),u(t,"class","svelte-hjb105"),u(b,"id","chat-filler"),u(b,"class","svelte-hjb105"),u(h,"id","chat-wrapper"),u(h,"class","svelte-hjb105"),u(D,"id","chat-divider"),u(D,"class","svelte-hjb105"),u(R,"class","svelte-hjb105"),u(j,"id","local-count"),u(j,"class","svelte-hjb105"),u(C,"id","under-chat"),u(C,"class","svelte-hjb105"),u(d,"id","chat-background"),u(d,"class","svelte-hjb105"),u(M,"id","yoisho-button"),u(M,"class","svelte-hjb105"),u(e,"id","clicker"),u(e,"class","svelte-hjb105")},m($,S){k($,e,S),_(e,t),_(t,n),_(n,a),_(t,o),_(t,c),_(c,r),_(e,l),_(e,d),_(d,b),_(d,g),_(d,h),de(m,h,null),_(d,I),_(d,D),_(d,te),_(d,C),_(C,R),_(R,se),_(C,ne),_(C,j),_(j,Y),_(e,ae),_(e,M),_(M,oe),U=!0,re||(me=Fe(M,"click",s[3]),re=!0)},p($,[S]){(!U||S&2)&&i!==(i=$[1].toLocaleString()+"")&&O(r,i);const V={};m.$set(V),(!U||S&4)&&H!==(H=$[2].toLocaleString()+"")&&O(Y,H)},i($){U||(x(m.$$.fragment,$),U=!0)},o($){Z(m.$$.fragment,$),U=!1},d($){$&&f(e),s[4](null),_e(m),re=!1,me()}}}function vt(s,e,t){let n,a;Se(s,ee,d=>t(1,n=d)),Se(s,Te,d=>t(2,a=d));let o,c,i;async function r(){et(1),o===void 0&&(o=await Xe()-1),await Ze(c,o),setTimeout(()=>{i!==void 0&&i.generateMessages()},200)}function l(d){Ke[d?"unshift":"push"](()=>{i=d,t(0,i)})}return[i,n,a,r,l]}class bt extends K{constructor(e){super(),Q(this,e,vt,pt,W,{})}}function yt(s){let e,t,n;return t=new bt({}),{c(){e=p("div"),he(t.$$.fragment),this.h()},l(a){e=v(a,"DIV",{id:!0,class:!0});var o=y(e);fe(t.$$.fragment,o),o.forEach(f),this.h()},h(){u(e,"id","main"),u(e,"class","svelte-1lb9vcl")},m(a,o){k(a,e,o),de(t,e,null),n=!0},p:ue,i(a){n||(x(t.$$.fragment,a),n=!0)},o(a){Z(t.$$.fragment,a),n=!1},d(a){a&&f(e),_e(t)}}}function $t(s){async function e(){const t=await Be();await Ge(ee.set,t)}return Qe(async()=>{await we(),await e()}),xe(we,10*1e3),[]}class wt extends K{constructor(e){super(),Q(this,e,$t,yt,W,{})}}export{wt as component};
