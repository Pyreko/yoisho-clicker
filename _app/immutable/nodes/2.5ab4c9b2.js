import{J as Ue,K as Ve,L as ke,S as K,i as Q,s as W,k as p,a as E,l as v,m as b,c as A,h,n as u,b as k,G as _,M as ze,N as He,H as ue,q as T,r as B,u as O,O as ie,e as F,P as Oe,v as Ye,Q as qe,f as Je,g as x,d as Z,y as fe,z as he,A as de,B as _e,R as Le,T as Fe,I as Se,w as Ke,o as Qe}from"../chunks/index.b73f83ad.js";import{w as Me}from"../chunks/index.66b76caa.js";const X="https://api.yoisho.clicker",N=(s,e)=>(s=Math.ceil(s),e=Math.floor(e),Math.floor(Math.random()*(e-s+1)+s)),G=s=>N(0,s),le=()=>Math.random()<.5,We=s=>{if(typeof localStorage<"u"){const e=localStorage.getItem(s);return e??void 0}else return},Pe=s=>{const e=We(s);if(e==null)return 0;{const t=parseInt(e,10);return isNaN(t)?(localStorage.removeItem(s),0):t}},xe=(s,e)=>{const t=setInterval(s,e);Ue(()=>{clearInterval(t)})},Ze=async(s,e)=>{const t=G(e),n=new Audio;if(n.crossOrigin="anonymous",n.src=`${X}/sound/${t}`,s==null&&(s=new AudioContext),s!=null){const a=s.createMediaElementSource(n),o=G(2)-1,c=new StereoPannerNode(s,{pan:o});a.connect(c).connect(s.destination)}n.play()},Xe=async()=>{try{const e=await fetch(`${X}/num-files`);if(e.ok){const t=await e.json(),n=parseInt(t.count,10);if(!isNaN(n))return n}return 300}catch{return 300}},Te=Me(Pe("localYoishoCount"));let z=Pe("batchedYoishoCount");const we=async()=>{z>0&&(await fetch(`${X}/increment`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:z})}),z=0,localStorage.setItem("batchedYoishoCount",z.toString()))},et=s=>{let e=0;Te.update(t=>(e=t+s,e)),localStorage.setItem("localYoishoCount",e.toString()),z+=s,localStorage.setItem("batchedYoishoCount",z.toString()),ee.update(t=>t+s)},Ie=s=>Math.max(1,10**Math.floor(Math.log10(s))),Be=async()=>{try{const s=await fetch(`${X}/count`);if(s.ok){const e=await s.json(),t=parseInt(e,10);if(!isNaN(t))return t}return 0}catch{return 0}};let J;const Ge=async(s,e)=>{let t=Ve(ee);if(t!=e){let n=Ie(e-t);J!==void 0&&clearInterval(J),J=setInterval(()=>{if(t>=e)clearInterval(J);else{const a=e-t;a<n&&(n=Ie(a)),t+=n,s(Math.min(t,e))}},20)}},ee=Me(0,s=>{const e=setInterval(async()=>{const t=await Be();await Ge(s,t)},2e4);return()=>{clearInterval(e)}});var w=(s=>(s[s.None=0]="None",s[s.New=1]="New",s[s.Base=2]="Base",s[s.Silver=3]="Silver",s[s.Gold=4]="Gold",s[s.Plat=5]="Plat",s[s.Pon=6]="Pon",s))(w||{});const L=["IRyStocrat","Diamond","Goose","Honk","Pon","Yeet","Huh","Bloom","Gloom","Zoom","Guy","Wheeze","Banana","Tofu","Meatball","Chan","Kun","Yoisho","Volume","Hope","Despair","Caesura","Seiso","Nephilim","Hopium","Copium","Ch.","Shark","Rawr","Idol","Gravity","Sleep","Lost","BL","Baseball","Bromance","Sports","Flower","Frozen","Dumb","Genias","GuyRyS","Evil","Cute","Small","Smol","Ethereal","Seraphic","Wistful","Celestial","Harmonize","Mystical","Whispers","Confused","Excited","Radiant","Dreamer","Serene","Phoenix","Sparkle","Harmony","Mystic","Blissful","Captain","Doctor","Alex","Emily","Ethan","Sophia","Jacob","Olivia","Ava","Michael","Isabella","Daniel","Mia","Matthew","David","Noah","Harper","James","Amelia","Watson","Benjamin","Evelyn","William","Scarlett","Bob","Grace","Henry","Lily","Samuel","Aria","Zoe","Gabriel","Riley","Jackson","Nora","Eleanor","Forte","Aubrey","Stella","Joshua","Hazel","Anthony","Penelope","Ryan","Lilith"],tt=()=>{const s=N(1,2),e=G(116);let t="";for(let a=0;a<s;a++)le()?t+=L[G(L.length-1)].toLowerCase():t+=L[G(L.length-1)],le()&&(t+=" ");return e==69?t="IRySo"+t:e==116&&(t+="RyS"),le()&&(t+=G(9999).toString()),t};var je={};/**
 * @license MIT
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 *
 * @class
 */let st=class ce{constructor(e){this._elements=Array.isArray(e)?e:[],this._offset=0}enqueue(e){return this._elements.push(e),this}push(e){return this.enqueue(e)}dequeue(){if(this.size()===0)return null;const e=this.front();return this._offset+=1,this._offset*2<this._elements.length||(this._elements=this._elements.slice(this._offset),this._offset=0),e}pop(){return this.dequeue()}front(){return this.size()>0?this._elements[this._offset]:null}back(){return this.size()>0?this._elements[this._elements.length-1]:null}size(){return this._elements.length-this._offset}isEmpty(){return this.size()===0}toArray(){return this._elements.slice(this._offset)}clear(){this._elements=[],this._offset=0}clone(){return new ce(this._elements.slice(this._offset))}static fromArray(e){return new ce(e)}};je.Queue=st;const{Queue:nt}=je;var at=nt;function ot(s){const e=s-1;return e*e*e+1}function rt(s,{delay:e=0,duration:t=400,easing:n=ot,x:a=0,y:o=0,opacity:c=0}={}){const i=getComputedStyle(s),r=+i.opacity,l=i.transform==="none"?"":i.transform,d=r*(1-c),[y,g]=ke(a),[f,m]=ke(o);return{delay:e,duration:t,easing:n,css:(I,D)=>`
			transform: ${l} translate(${(1-I)*y}${g}, ${(1-I)*f}${m});
			opacity: ${r-d*D}`}}function Ce(s,e,t){const n=s.slice();return n[3]=e[t],n}function lt(s){const e=s.slice(),t=e[1].get(e[0].membership);return e[6]=t,e}function it(s){let e,t=s[0].username+"",n;return{c(){e=p("p"),n=T(t),this.h()},l(a){e=v(a,"P",{class:!0});var o=b(e);n=B(o,t),o.forEach(h),this.h()},h(){u(e,"class","username svelte-8d4anr")},m(a,o){k(a,e,o),_(e,n)},p(a,o){o&1&&t!==(t=a[0].username+"")&&O(n,t)},d(a){a&&h(e)}}}function Ee(s){let e,t=s[0].username+"",n,a,o,c,i;return{c(){e=p("p"),n=T(t),a=E(),o=p("img"),this.h()},l(r){e=v(r,"P",{class:!0});var l=b(e);n=B(l,t),l.forEach(h),a=A(r),o=v(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){u(e,"class","username member svelte-8d4anr"),ie(o.src,c=`images/badges/${s[6]}.webp`)||u(o,"src",c),u(o,"alt",i=`${s[6]} membership badge`),u(o,"class","badge svelte-8d4anr")},m(r,l){k(r,e,l),_(e,n),k(r,a,l),k(r,o,l)},p(r,l){l&1&&t!==(t=r[0].username+"")&&O(n,t),l&1&&!ie(o.src,c=`images/badges/${r[6]}.webp`)&&u(o,"src",c),l&1&&i!==(i=`${r[6]} membership badge`)&&u(o,"alt",i)},d(r){r&&h(e),r&&h(a),r&&h(o)}}}function ct(s){let e,t=s[0].message.contents+"",n;return{c(){e=p("p"),n=T(t),this.h()},l(a){e=v(a,"P",{class:!0});var o=b(e);n=B(o,t),o.forEach(h),this.h()},h(){u(e,"class","svelte-8d4anr")},m(a,o){k(a,e,o),_(e,n)},p(a,o){o&1&&t!==(t=a[0].message.contents+"")&&O(n,t)},d(a){a&&h(e)}}}function ut(s){let e,t={length:s[0].message.repetitions},n=[];for(let a=0;a<t.length;a+=1)n[a]=Ae(Ce(s,t,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=F()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=F()},m(a,o){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(a,o);k(a,e,o)},p(a,o){if(o&1){t={length:a[0].message.repetitions};let c;for(c=0;c<t.length;c+=1){const i=Ce(a,t,c);n[c]?n[c].p(i,o):(n[c]=Ae(),n[c].c(),n[c].m(e.parentNode,e))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}},d(a){Oe(n,a),a&&h(e)}}}function Ae(s){let e,t;return{c(){e=p("img"),this.h()},l(n){e=v(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ie(e.src,t="images/emotes/yoisho.webp")||u(e,"src",t),u(e,"alt","yoisho membership emote"),u(e,"class","emote svelte-8d4anr")},m(n,a){k(n,e,a)},p:ue,d(n){n&&h(e)}}}function ft(s){let e,t,n,a,o;function c(f,m){return f[0].membership!=w.None?Ee:it}function i(f,m){return m===Ee?lt(f):f}let r=c(s),l=r(i(s,r));function d(f,m){return m&1&&(a=null),a==null&&(a=!!f[2](f[0].message)),a?ut:ct}let y=d(s,-1),g=y(s);return{c(){e=p("div"),l.c(),t=E(),n=p("div"),g.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var m=b(e);l.l(m),t=A(m),n=v(m,"DIV",{class:!0});var I=b(n);g.l(I),I.forEach(h),m.forEach(h),this.h()},h(){u(n,"class","message-contents svelte-8d4anr"),u(e,"class","message svelte-8d4anr")},m(f,m){k(f,e,m),l.m(e,null),_(e,t),_(e,n),g.m(n,null)},p(f,[m]){r===(r=c(f))&&l?l.p(i(f,r),m):(l.d(1),l=r(i(f,r)),l&&(l.c(),l.m(e,t))),y===(y=d(f,m))&&g?g.p(f,m):(g.d(1),g=y(f),g&&(g.c(),g.m(n,null)))},i(f){o||ze(()=>{o=He(e,rt,{y:10}),o.start()})},o:ue,d(f){f&&h(e),l.d(),g.d()}}}function ht(s,e,t){let{msg:n}=e;const a=new Map([[w.New,"new"],[w.Base,"base"],[w.Silver,"silver"],[w.Gold,"gold"],[w.Plat,"plat"],[w.Pon,"pon"]]),o=c=>"repetitions"in c;return s.$$set=c=>{"msg"in c&&t(0,n=c.msg)},[n,a,o]}class dt extends K{constructor(e){super(),Q(this,e,ht,ft,W,{msg:0})}}function Ne(s,e,t){const n=s.slice();return n[4]=e[t],n}function De(s,e){let t,n,a;return n=new dt({props:{msg:e[4]}}),{key:s,first:null,c(){t=F(),fe(n.$$.fragment),this.h()},l(o){t=F(),he(n.$$.fragment,o),this.h()},h(){this.first=t},m(o,c){k(o,t,c),de(n,o,c),a=!0},p(o,c){e=o;const i={};c&1&&(i.msg=e[4]),n.$set(i)},i(o){a||(x(n.$$.fragment,o),a=!0)},o(o){Z(n.$$.fragment,o),a=!1},d(o){o&&h(t),_e(n,o)}}}function _t(s){let e,t=[],n=new Map,a,o=s[0];const c=i=>i[4];for(let i=0;i<o.length;i+=1){let r=Ne(s,o,i),l=c(r);n.set(l,t[i]=De(l,r))}return{c(){e=p("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=v(i,"DIV",{id:!0,class:!0});var r=b(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(h),this.h()},h(){u(e,"id","chat-area"),u(e,"class","svelte-2bgbho")},m(i,r){k(i,e,r);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);a=!0},p(i,[r]){r&1&&(o=i[0],Ye(),t=qe(t,r,c,1,i,o,n,e,Le,De,null,Ne),Je())},i(i){if(!a){for(let r=0;r<o.length;r+=1)x(t[r]);a=!0}},o(i){for(let r=0;r<t.length;r+=1)Z(t[r]);a=!1},d(i){i&&h(e);for(let r=0;r<t.length;r+=1)t[r].d()}}}function mt(s,e,t){const n=()=>{const i=(()=>{const y=N(1,20);return y>3?1:y})(),r=G(15);let l="";if(N(0,1e4)==116)l="What's going on?";else{const y=N(1,5)==4;if(i==1&&y)l="よいしょ";else for(let g=0;g<i;g++)l+="yoisho",g<i-1&&(l+=" ");switch(r){case 1:l+="!";break;case 2:l+="?";break;case 3:y?l+="!?":l+="?!";break;case 4:l+="...";break;case 5:l+="...?";break;case 6:l=`"${l}"`;break}}return l};let a=new at,o=[];return[o,()=>{const i=N(1,5);for(let r=0;r<i;r++){const l=tt();let d=0;N(1,3)==2&&(d=N(w.New,w.Pon));const g=G(3)==3?{contents:n()}:{repetitions:N(1,5)};a.push({username:l,membership:d,message:g})}for(;a.size()>30;)a.pop();t(0,o=a.toArray().reverse())}]}class gt extends K{constructor(e){super(),Q(this,e,mt,_t,W,{generateMessages:1})}get generateMessages(){return this.$$.ctx[1]}}function pt(s){let e,t,n,a,o,c,i=s[1].toLocaleString()+"",r,l,d,y,g,f,m,I,D,te,C,R,se,ne,j,H=s[2].toLocaleString()+"",Y,ae,M,oe,U,re,me,Re={};return m=new gt({props:Re}),s[4](m),{c(){e=p("div"),t=p("div"),n=p("p"),a=T("global yoishos"),o=E(),c=p("p"),r=T(i),l=E(),d=p("div"),y=p("div"),g=E(),f=p("div"),fe(m.$$.fragment),I=E(),D=p("div"),te=E(),C=p("div"),R=p("p"),se=T("yoishos"),ne=E(),j=p("p"),Y=T(H),ae=E(),M=p("button"),oe=T("Yoisho!"),this.h()},l($){e=v($,"DIV",{id:!0,class:!0});var S=b(e);t=v(S,"DIV",{id:!0,class:!0});var V=b(t);n=v(V,"P",{class:!0});var ge=b(n);a=B(ge,"global yoishos"),ge.forEach(h),o=A(V),c=v(V,"P",{id:!0,class:!0});var pe=b(c);r=B(pe,i),pe.forEach(h),V.forEach(h),l=A(S),d=v(S,"DIV",{id:!0,class:!0});var P=b(d);y=v(P,"DIV",{id:!0,class:!0}),b(y).forEach(h),g=A(P),f=v(P,"DIV",{id:!0,class:!0});var ve=b(f);he(m.$$.fragment,ve),ve.forEach(h),I=A(P),D=v(P,"DIV",{id:!0,class:!0}),b(D).forEach(h),te=A(P),C=v(P,"DIV",{id:!0,class:!0});var q=b(C);R=v(q,"P",{class:!0});var ye=b(R);se=B(ye,"yoishos"),ye.forEach(h),ne=A(q),j=v(q,"P",{id:!0,class:!0});var be=b(j);Y=B(be,H),be.forEach(h),q.forEach(h),P.forEach(h),ae=A(S),M=v(S,"BUTTON",{id:!0,class:!0});var $e=b(M);oe=B($e,"Yoisho!"),$e.forEach(h),S.forEach(h),this.h()},h(){u(n,"class","svelte-gfuj5p"),u(c,"id","global-count"),u(c,"class","svelte-gfuj5p"),u(t,"id","above-chat"),u(t,"class","svelte-gfuj5p"),u(y,"id","chat-filler"),u(y,"class","svelte-gfuj5p"),u(f,"id","chat-wrapper"),u(f,"class","svelte-gfuj5p"),u(D,"id","chat-divider"),u(D,"class","svelte-gfuj5p"),u(R,"class","svelte-gfuj5p"),u(j,"id","local-count"),u(j,"class","svelte-gfuj5p"),u(C,"id","under-chat"),u(C,"class","svelte-gfuj5p"),u(d,"id","chat-background"),u(d,"class","svelte-gfuj5p"),u(M,"id","yoisho-button"),u(M,"class","svelte-gfuj5p"),u(e,"id","clicker"),u(e,"class","svelte-gfuj5p")},m($,S){k($,e,S),_(e,t),_(t,n),_(n,a),_(t,o),_(t,c),_(c,r),_(e,l),_(e,d),_(d,y),_(d,g),_(d,f),de(m,f,null),_(d,I),_(d,D),_(d,te),_(d,C),_(C,R),_(R,se),_(C,ne),_(C,j),_(j,Y),_(e,ae),_(e,M),_(M,oe),U=!0,re||(me=Fe(M,"click",s[3]),re=!0)},p($,[S]){(!U||S&2)&&i!==(i=$[1].toLocaleString()+"")&&O(r,i);const V={};m.$set(V),(!U||S&4)&&H!==(H=$[2].toLocaleString()+"")&&O(Y,H)},i($){U||(x(m.$$.fragment,$),U=!0)},o($){Z(m.$$.fragment,$),U=!1},d($){$&&h(e),s[4](null),_e(m),re=!1,me()}}}function vt(s,e,t){let n,a;Se(s,ee,d=>t(1,n=d)),Se(s,Te,d=>t(2,a=d));let o,c,i;async function r(){et(1),o===void 0&&(o=await Xe()-1),await Ze(c,o),setTimeout(()=>{i!==void 0&&i.generateMessages()},200)}function l(d){Ke[d?"unshift":"push"](()=>{i=d,t(0,i)})}return[i,n,a,r,l]}class yt extends K{constructor(e){super(),Q(this,e,vt,pt,W,{})}}function bt(s){let e,t,n;return t=new yt({}),{c(){e=p("div"),fe(t.$$.fragment),this.h()},l(a){e=v(a,"DIV",{id:!0,class:!0});var o=b(e);he(t.$$.fragment,o),o.forEach(h),this.h()},h(){u(e,"id","main"),u(e,"class","svelte-nablc8")},m(a,o){k(a,e,o),de(t,e,null),n=!0},p:ue,i(a){n||(x(t.$$.fragment,a),n=!0)},o(a){Z(t.$$.fragment,a),n=!1},d(a){a&&h(e),_e(t)}}}function $t(s){async function e(){const t=await Be();await Ge(ee.set,t)}return Qe(async()=>{await we(),await e()}),xe(we,10*1e3),[]}class wt extends K{constructor(e){super(),Q(this,e,$t,bt,W,{})}}export{wt as component};
