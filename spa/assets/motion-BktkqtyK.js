import{g as on,o as sn,a as an,w as j,b as ee,c as w,t as k,s as ne,d as cn,u as D,e as re,f as oe,h as se,F as ln,i as ie,r as V,j as ot,k as un}from"./index-Bqd0a1NY.js";function lt(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function ht(t,e,n=".",r){if(!lt(e))return ht(t,{},n,r);const o=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const s=t[i];s!=null&&(r&&r(o,i,s,n)||(Array.isArray(s)&&Array.isArray(o[i])?o[i]=[...s,...o[i]]:lt(s)&&lt(o[i])?o[i]=ht(s,o[i],(n?`${n}.`:"")+i.toString(),r):o[i]=s))}return o}function fn(t){return(...e)=>e.reduce((n,r)=>ht(n,r,"",t),{})}const ae=fn();function ce(t){return on()?(sn(t),!0):!1}const pn=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dn=t=>t!=null,mn=Object.prototype.toString,tt=t=>mn.call(t)==="[object Object]",ut=()=>{};function X(t){return Array.isArray(t)?t:[t]}function yn(t){return ee()}function bn(t,e){yn()&&an(t,e)}function hn(t,e,n){return j(t,e,{...n,immediate:!0})}const le=pn?window:void 0;function P(t){var e;const n=k(t);return(e=n?.$el)!=null?e:n}function A(...t){const e=[],n=()=>{e.forEach(a=>a()),e.length=0},r=(a,c,l,u)=>(a.addEventListener(c,l,u),()=>a.removeEventListener(c,l,u)),o=w(()=>{const a=X(k(t[0])).filter(c=>c!=null);return a.every(c=>typeof c!="string")?a:void 0}),i=hn(()=>{var a,c;return[(c=(a=o.value)==null?void 0:a.map(l=>P(l)))!=null?c:[le].filter(l=>l!=null),X(k(o.value?t[1]:t[0])),X(D(o.value?t[2]:t[1])),k(o.value?t[3]:t[2])]},([a,c,l,u])=>{if(n(),!a?.length||!c?.length||!l?.length)return;const f=tt(u)?{...u}:u;e.push(...a.flatMap(p=>c.flatMap(y=>l.map(b=>r(p,y,b,f)))))},{flush:"post"}),s=()=>{i(),n()};return ce(n),s}function gn(){const t=ne(!1),e=ee();return e&&cn(()=>{t.value=!0},e),t}function vn(t){const e=gn();return w(()=>(e.value,!!t()))}function On(t,e,n={}){const{root:r,rootMargin:o="0px",threshold:i=0,window:s=le,immediate:a=!0}=n,c=vn(()=>s&&"IntersectionObserver"in s),l=w(()=>{const b=k(t);return X(b).map(P).filter(dn)});let u=ut;const f=ne(a),p=c.value?j(()=>[l.value,P(r),f.value],([b,S])=>{if(u(),!f.value||!b.length)return;const O=new IntersectionObserver(e,{root:P(S),rootMargin:o,threshold:i});b.forEach(g=>g&&O.observe(g)),u=()=>{O.disconnect(),u=ut}},{immediate:a,flush:"post"}):ut,y=()=>{u(),p(),f.value=!1};return ce(y),{isSupported:c,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:y}}const ue=1/60*1e3,xn=typeof performance<"u"?()=>performance.now():()=>Date.now(),fe=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(xn()),ue);function Sn(t){let e=[],n=[],r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(c,l=!1,u=!1)=>{const f=u&&o,p=f?e:n;return l&&s.add(c),p.indexOf(c)===-1&&(p.push(c),f&&o&&(r=e.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),s.delete(c)},process:c=>{if(o){i=!0;return}if(o=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let l=0;l<r;l++){const u=e[l];u(c),s.has(u)&&(a.schedule(u),t())}o=!1,i&&(i=!1,a.process(c))}};return a}const Tn=40;let gt=!0,U=!1,vt=!1;const _={delta:0,timestamp:0},H=["read","update","preRender","render","postRender"],st=H.reduce((t,e)=>(t[e]=Sn(()=>U=!0),t),{}),Ot=H.reduce((t,e)=>{const n=st[e];return t[e]=(r,o=!1,i=!1)=>(U||An(),n.schedule(r,o,i)),t},{}),Mn=H.reduce((t,e)=>(t[e]=st[e].cancel,t),{});H.reduce((t,e)=>(t[e]=()=>st[e].process(_),t),{});const jn=t=>st[t].process(_),pe=t=>{U=!1,_.delta=gt?ue:Math.max(Math.min(t-_.timestamp,Tn),1),_.timestamp=t,vt=!0,H.forEach(jn),vt=!1,U&&(gt=!1,fe(pe))},An=()=>{U=!0,gt=!0,vt||fe(pe)},de=()=>_;function me(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}var zt=function(){};const xt=(t,e,n)=>Math.min(Math.max(n,t),e),Ut=.001,Cn=.01,wn=10,Vn=.05,En=1;function Rn({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let o,i,s=1-e;s=xt(Vn,En,s),t=xt(Cn,wn,t/1e3),s<1?(o=l=>{const u=l*s,f=u*t,p=u-n,y=St(l,s),b=Math.exp(-f);return Ut-p/y*b},i=l=>{const f=l*s*t,p=f*n+n,y=Math.pow(s,2)*Math.pow(l,2)*t,b=Math.exp(-f),S=St(Math.pow(l,2),s);return(-o(l)+Ut>0?-1:1)*((p-y)*b)/S}):(o=l=>{const u=Math.exp(-l*t),f=(l-n)*t+1;return-.001+u*f},i=l=>{const u=Math.exp(-l*t),f=(n-l)*(t*t);return u*f});const a=5/t,c=Fn(o,i,a);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:s*2*Math.sqrt(r*l),duration:t}}}const Nn=12;function Fn(t,e,n){let r=n;for(let o=1;o<Nn;o++)r=r-t(r)/e(r);return r}function St(t,e){return t*Math.sqrt(1-e*e)}const In=["duration","bounce"],Dn=["stiffness","damping","mass"];function $t(t,e){return e.some(n=>t[n]!==void 0)}function _n(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!$t(t,Dn)&&$t(t,In)){const n=Rn(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function wt(t){var{from:e=0,to:n=1,restSpeed:r=2,restDelta:o}=t,i=me(t,["from","to","restSpeed","restDelta"]);const s={done:!1,value:e};let{stiffness:a,damping:c,mass:l,velocity:u,duration:f,isResolvedFromDuration:p}=_n(i),y=Ht,b=Ht;function S(){const O=u?-(u/1e3):0,g=n-e,x=c/(2*Math.sqrt(a*l)),m=Math.sqrt(a/l)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-e)/100,.4)),x<1){const h=St(m,x);y=v=>{const T=Math.exp(-x*m*v);return n-T*((O+x*m*g)/h*Math.sin(h*v)+g*Math.cos(h*v))},b=v=>{const T=Math.exp(-x*m*v);return x*m*T*(Math.sin(h*v)*(O+x*m*g)/h+g*Math.cos(h*v))-T*(Math.cos(h*v)*(O+x*m*g)-h*g*Math.sin(h*v))}}else if(x===1)y=h=>n-Math.exp(-m*h)*(g+(O+m*g)*h);else{const h=m*Math.sqrt(x*x-1);y=v=>{const T=Math.exp(-x*m*v),C=Math.min(h*v,300);return n-T*((O+x*m*g)*Math.sinh(C)+h*g*Math.cosh(C))/h}}}return S(),{next:O=>{const g=y(O);if(p)s.done=O>=f;else{const x=b(O)*1e3,m=Math.abs(x)<=r,h=Math.abs(n-g)<=o;s.done=m&&h}return s.value=s.done?n:g,s},flipTarget:()=>{u=-u,[e,n]=[n,e],S()}}}wt.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const Ht=t=>0,ye=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Vt=(t,e,n)=>-n*t+n*e+t,be=(t,e)=>n=>Math.max(Math.min(n,e),t),L=t=>t%1?Number(t.toFixed(5)):t,$=/(-)?([\d]*\.?[\d])+/g,Tt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,kn=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function q(t){return typeof t=="string"}const W={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},B=Object.assign(Object.assign({},W),{transform:be(0,1)}),Y=Object.assign(Object.assign({},W),{default:1}),Et=t=>({test:e=>q(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),N=Et("deg"),z=Et("%"),d=Et("px"),qt=Object.assign(Object.assign({},z),{parse:t=>z.parse(t)/100,transform:t=>z.transform(t*100)}),Rt=(t,e)=>n=>!!(q(n)&&kn.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),he=(t,e,n)=>r=>{if(!q(r))return r;const[o,i,s,a]=r.match($);return{[t]:parseFloat(o),[e]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},I={test:Rt("hsl","hue"),parse:he("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+z.transform(L(e))+", "+z.transform(L(n))+", "+L(B.transform(r))+")"},Pn=be(0,255),ft=Object.assign(Object.assign({},W),{transform:t=>Math.round(Pn(t))}),R={test:Rt("rgb","red"),parse:he("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+ft.transform(t)+", "+ft.transform(e)+", "+ft.transform(n)+", "+L(B.transform(r))+")"};function Ln(t){let e="",n="",r="",o="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),o=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),o=t.substr(4,1),e+=e,n+=n,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Mt={test:Rt("#"),parse:Ln,transform:R.transform},M={test:t=>R.test(t)||Mt.test(t)||I.test(t),parse:t=>R.test(t)?R.parse(t):I.test(t)?I.parse(t):Mt.parse(t),transform:t=>q(t)?t:t.hasOwnProperty("red")?R.transform(t):I.transform(t)},ge="${c}",ve="${n}";function Bn(t){var e,n,r,o;return isNaN(t)&&q(t)&&((n=(e=t.match($))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((o=(r=t.match(Tt))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Oe(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const r=t.match(Tt);r&&(n=r.length,t=t.replace(Tt,ge),e.push(...r.map(M.parse)));const o=t.match($);return o&&(t=t.replace($,ve),e.push(...o.map(W.parse))),{values:e,numColors:n,tokenised:t}}function xe(t){return Oe(t).values}function Se(t){const{values:e,numColors:n,tokenised:r}=Oe(t),o=e.length;return i=>{let s=r;for(let a=0;a<o;a++)s=s.replace(a<n?ge:ve,a<n?M.transform(i[a]):L(i[a]));return s}}const zn=t=>typeof t=="number"?0:t;function Un(t){const e=xe(t);return Se(t)(e.map(zn))}const K={test:Bn,parse:xe,createTransformer:Se,getAnimatableNone:Un},$n=new Set(["brightness","contrast","saturate","opacity"]);function Hn(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match($)||[];if(!r)return t;const o=n.replace(r,"");let i=$n.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+o+")"}const qn=/([a-z-]*)\(.*?\)/g,jt=Object.assign(Object.assign({},K),{getAnimatableNone:t=>{const e=t.match(qn);return e?e.map(Hn).join(" "):t}});function pt(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Wt({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let o=0,i=0,s=0;if(!e)o=i=s=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;o=pt(c,a,t+1/3),i=pt(c,a,t),s=pt(c,a,t-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const Wn=(t,e,n)=>{const r=t*t,o=e*e;return Math.sqrt(Math.max(0,n*(o-r)+r))},Kn=[Mt,R,I],Kt=t=>Kn.find(e=>e.test(t)),Te=(t,e)=>{let n=Kt(t),r=Kt(e),o=n.parse(t),i=r.parse(e);n===I&&(o=Wt(o),n=R),r===I&&(i=Wt(i),r=R);const s=Object.assign({},o);return a=>{for(const c in s)c!=="alpha"&&(s[c]=Wn(o[c],i[c],a));return s.alpha=Vt(o.alpha,i.alpha,a),n.transform(s)}},Zn=t=>typeof t=="number",Yn=(t,e)=>n=>e(t(n)),Me=(...t)=>t.reduce(Yn);function je(t,e){return Zn(t)?n=>Vt(t,e,n):M.test(t)?Te(t,e):Ce(t,e)}const Ae=(t,e)=>{const n=[...t],r=n.length,o=t.map((i,s)=>je(i,e[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}},Gn=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const o in n)t[o]!==void 0&&e[o]!==void 0&&(r[o]=je(t[o],e[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}};function Zt(t){const e=K.parse(t),n=e.length;let r=0,o=0,i=0;for(let s=0;s<n;s++)r||typeof e[s]=="number"?r++:e[s].hue!==void 0?i++:o++;return{parsed:e,numNumbers:r,numRGB:o,numHSL:i}}const Ce=(t,e)=>{const n=K.createTransformer(e),r=Zt(t),o=Zt(e);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?Me(Ae(r.parsed,o.parsed),n):s=>`${s>0?e:t}`},Xn=(t,e)=>n=>Vt(t,e,n);function Jn(t){if(typeof t=="number")return Xn;if(typeof t=="string")return M.test(t)?Te:Ce;if(Array.isArray(t))return Ae;if(typeof t=="object")return Gn}function Qn(t,e,n){const r=[],o=n||Jn(t[0]),i=t.length-1;for(let s=0;s<i;s++){let a=o(t[s],t[s+1]);if(e){const c=Array.isArray(e)?e[s]:e;a=Me(c,a)}r.push(a)}return r}function tr([t,e],[n]){return r=>n(ye(t,e,r))}function er(t,e){const n=t.length,r=n-1;return o=>{let i=0,s=!1;if(o<=t[0]?s=!0:o>=t[r]&&(i=r-1,s=!0),!s){let c=1;for(;c<n&&!(t[c]>o||c===r);c++);i=c-1}const a=ye(t[i],t[i+1],o);return e[i](a)}}function we(t,e,{clamp:n=!0,ease:r,mixer:o}={}){const i=t.length;zt(i===e.length),zt(!r||!Array.isArray(r)||r.length===i-1),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const s=Qn(e,r,o),a=i===2?tr(t,s):er(t,s);return n?c=>a(xt(t[0],t[i-1],c)):a}const it=t=>e=>1-t(1-e),Nt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,nr=t=>e=>Math.pow(e,t),Ve=t=>e=>e*e*((t+1)*e-t),rr=t=>{const e=Ve(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ee=1.525,or=4/11,sr=8/11,ir=9/10,Re=t=>t,Ft=nr(2),ar=it(Ft),Ne=Nt(Ft),Fe=t=>1-Math.sin(Math.acos(t)),Ie=it(Fe),cr=Nt(Ie),It=Ve(Ee),lr=it(It),ur=Nt(It),fr=rr(Ee),pr=4356/361,dr=35442/1805,mr=16061/1805,et=t=>{if(t===1||t===0)return t;const e=t*t;return t<or?7.5625*e:t<sr?9.075*e-9.9*t+3.4:t<ir?pr*e-dr*t+mr:10.8*t*t-20.52*t+10.72},yr=it(et),br=t=>t<.5?.5*(1-et(1-t*2)):.5*et(t*2-1)+.5;function hr(t,e){return t.map(()=>e||Ne).splice(0,t.length-1)}function gr(t){const e=t.length;return t.map((n,r)=>r!==0?r/(e-1):0)}function vr(t,e){return t.map(n=>n*e)}function J({from:t=0,to:e=1,ease:n,offset:r,duration:o=300}){const i={done:!1,value:t},s=Array.isArray(e)?e:[t,e],a=vr(r&&r.length===s.length?r:gr(s),o);function c(){return we(a,s,{ease:Array.isArray(n)?n:hr(s,n)})}let l=c();return{next:u=>(i.value=l(u),i.done=u>=o,i),flipTarget:()=>{s.reverse(),l=c()}}}function Or({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:i}){const s={done:!1,value:e};let a=n*t;const c=e+a,l=i===void 0?c:i(c);return l!==c&&(a=l-e),{next:u=>{const f=-a*Math.exp(-u/r);return s.done=!(f>o||f<-o),s.value=s.done?l:l+f,s},flipTarget:()=>{}}}const Yt={keyframes:J,spring:wt,decay:Or};function xr(t){if(Array.isArray(t.to))return J;if(Yt[t.type])return Yt[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?J:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?wt:J}function De(t,e,n=0){return t-e-n}function Sr(t,e,n=0,r=!0){return r?De(e+-t,e,n):e-(t-e)+n}function Tr(t,e,n,r){return r?t>=e+n:t<=-n}const Mr=t=>{const e=({delta:n})=>t(n);return{start:()=>Ot.update(e,!0),stop:()=>Mn.update(e)}};function _e(t){var e,n,{from:r,autoplay:o=!0,driver:i=Mr,elapsed:s=0,repeat:a=0,repeatType:c="loop",repeatDelay:l=0,onPlay:u,onStop:f,onComplete:p,onRepeat:y,onUpdate:b}=t,S=me(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:O}=S,g,x=0,m=S.duration,h,v=!1,T=!0,C;const Z=xr(S);!((n=(e=Z).needsInterpolation)===null||n===void 0)&&n.call(e,r,O)&&(C=we([0,100],[r,O],{clamp:!1}),r=0,O=100);const E=Z(Object.assign(Object.assign({},S),{from:r,to:O}));function tn(){x++,c==="reverse"?(T=x%2===0,s=Sr(s,m,l,T)):(s=De(s,m,l),c==="mirror"&&E.flipTarget()),v=!1,y&&y()}function en(){g.stop(),p&&p()}function nn(ct){if(T||(ct=-ct),s+=ct,!v){const Bt=E.next(Math.max(0,s));h=Bt.value,C&&(h=C(h)),v=T?Bt.done:s<=0}b?.(h),v&&(x===0&&(m??(m=s)),x<a?Tr(s,m,l,T)&&tn():en())}function rn(){u?.(),g=i(nn),g.start()}return o&&rn(),{stop:()=>{f?.(),g.stop()}}}function ke(t,e){return e?t*(1e3/e):0}function jr({from:t=0,velocity:e=0,min:n,max:r,power:o=.8,timeConstant:i=750,bounceStiffness:s=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:l,driver:u,onUpdate:f,onComplete:p,onStop:y}){let b;function S(m){return n!==void 0&&m<n||r!==void 0&&m>r}function O(m){return n===void 0?r:r===void 0||Math.abs(n-m)<Math.abs(r-m)?n:r}function g(m){b?.stop(),b=_e(Object.assign(Object.assign({},m),{driver:u,onUpdate:h=>{var v;f?.(h),(v=m.onUpdate)===null||v===void 0||v.call(m,h)},onComplete:p,onStop:y}))}function x(m){g(Object.assign({type:"spring",stiffness:s,damping:a,restDelta:c},m))}if(S(t))x({from:t,velocity:e,to:O(t)});else{let m=o*e+t;typeof l<"u"&&(m=l(m));const h=O(m),v=h===n?-1:1;let T,C;const Z=E=>{T=C,C=E,e=ke(E-T,de().delta),(v===1&&E>h||v===-1&&E<h)&&x({from:E,to:h,velocity:e})};g({type:"decay",from:t,velocity:e,timeConstant:i,power:o,restDelta:c,modifyTarget:l,onUpdate:S(m)?Z:void 0})}return{stop:()=>b?.stop()}}const Pe=(t,e)=>1-3*e+3*t,Le=(t,e)=>3*e-6*t,Be=t=>3*t,nt=(t,e,n)=>((Pe(e,n)*t+Le(e,n))*t+Be(e))*t,ze=(t,e,n)=>3*Pe(e,n)*t*t+2*Le(e,n)*t+Be(e),Ar=1e-7,Cr=10;function wr(t,e,n,r,o){let i,s,a=0;do s=e+(n-e)/2,i=nt(s,r,o)-t,i>0?n=s:e=s;while(Math.abs(i)>Ar&&++a<Cr);return s}const Vr=8,Er=.001;function Rr(t,e,n,r){for(let o=0;o<Vr;++o){const i=ze(e,n,r);if(i===0)return e;const s=nt(e,n,r)-t;e-=s/i}return e}const Q=11,G=1/(Q-1);function Nr(t,e,n,r){if(t===e&&n===r)return Re;const o=new Float32Array(Q);for(let s=0;s<Q;++s)o[s]=nt(s*G,t,n);function i(s){let a=0,c=1;const l=Q-1;for(;c!==l&&o[c]<=s;++c)a+=G;--c;const u=(s-o[c])/(o[c+1]-o[c]),f=a+u*G,p=ze(f,t,n);return p>=Er?Rr(s,f,t,n):p===0?f:wr(s,a,a+G,t,n)}return s=>s===0||s===1?s:nt(i(s),e,r)}const Dt={},dt={};class Fr{subscriptions=new Set;add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,r){if(this.subscriptions.size)for(const o of this.subscriptions)o(e,n,r)}clear(){this.subscriptions.clear()}}function Gt(t){return!Number.isNaN(Number.parseFloat(t))}class Ir{current;prev;timeDelta=0;lastUpdated=0;updateSubscribers=new Fr;stopAnimation;canTrackVelocity=!1;constructor(e){this.prev=this.current=e,this.canTrackVelocity=Gt(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}updateAndNotify=e=>{this.prev=this.current,this.current=e;const{delta:n,timestamp:r}=de();this.lastUpdated!==r&&(this.timeDelta=n,this.lastUpdated=r),Ot.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)};get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ke(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}scheduleVelocityCheck=()=>Ot.postRender(this.velocityCheck);velocityCheck=({timestamp:e})=>{this.canTrackVelocity||(this.canTrackVelocity=Gt(this.current)),e!==this.lastUpdated&&(this.prev=this.current)};start(e){return this.stop(),new Promise(n=>{const{stop:r}=e(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Dr(t){return new Ir(t)}const{isArray:_r}=Array;function kr(){const t=V({}),e=r=>{const o=i=>{t.value[i]&&(t.value[i].stop(),t.value[i].destroy(),delete t.value[i])};r?_r(r)?r.forEach(o):o(r):Object.keys(t.value).forEach(o)},n=(r,o,i)=>{if(t.value[r])return t.value[r];const s=Dr(o);return s.onChange(a=>i[r]=a),t.value[r]=s,s};return bn(e),{motionValues:t,get:n,stop:e}}function Pr(t){return Array.isArray(t)}function F(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function mt(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function Lr(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function yt(){return{type:"keyframes",ease:"linear",duration:300}}function Br(t){return{type:"keyframes",duration:800,values:t}}const Xt={default:Lr,x:F,y:F,z:F,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scaleX:mt,scaleY:mt,scale:mt,backgroundColor:yt,color:yt,opacity:yt};function Ue(t,e){let n;return Pr(e)?n=Br:n=Xt[t]||Xt.default,{to:e,...n(e)}}const Jt={...W,transform:Math.round},$e={color:M,backgroundColor:M,outlineColor:M,fill:M,stroke:M,borderColor:M,borderTopColor:M,borderRightColor:M,borderBottomColor:M,borderLeftColor:M,borderWidth:d,borderTopWidth:d,borderRightWidth:d,borderBottomWidth:d,borderLeftWidth:d,borderRadius:d,radius:d,borderTopLeftRadius:d,borderTopRightRadius:d,borderBottomRightRadius:d,borderBottomLeftRadius:d,width:d,maxWidth:d,height:d,maxHeight:d,size:d,top:d,right:d,bottom:d,left:d,padding:d,paddingTop:d,paddingRight:d,paddingBottom:d,paddingLeft:d,margin:d,marginTop:d,marginRight:d,marginBottom:d,marginLeft:d,rotate:N,rotateX:N,rotateY:N,rotateZ:N,scale:Y,scaleX:Y,scaleY:Y,scaleZ:Y,skew:N,skewX:N,skewY:N,distance:d,translateX:d,translateY:d,translateZ:d,x:d,y:d,z:d,perspective:d,transformPerspective:d,opacity:B,originX:qt,originY:qt,originZ:d,zIndex:Jt,filter:jt,WebkitFilter:jt,fillOpacity:B,strokeOpacity:B,numOctaves:Jt},_t=t=>$e[t];function At(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function zr(t,e){let n=_t(t);return n!==jt&&(n=K),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ur={linear:Re,easeIn:Ft,easeInOut:Ne,easeOut:ar,circIn:Fe,circInOut:cr,circOut:Ie,backIn:It,backInOut:ur,backOut:lr,anticipate:fr,bounceIn:yr,bounceInOut:br,bounceOut:et};function Qt(t){if(Array.isArray(t)){const[e,n,r,o]=t;return Nr(e,n,r,o)}else if(typeof t=="string")return Ur[t];return t}function $r(t){return Array.isArray(t)&&typeof t[0]!="number"}function te(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&K.test(e)&&!e.startsWith("url("))}function Hr(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function qr({ease:t,times:e,delay:n,...r}){const o={...r};return e&&(o.offset=e),t&&(o.ease=$r(t)?t.map(Qt):Qt(t)),n&&(o.elapsed=-n),o}function Wr(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),Hr(e),Kr(t)||(t={...t,...Ue(n,e.to)}),{...e,...qr(t)}}function Kr({delay:t,repeat:e,repeatType:n,repeatDelay:r,from:o,...i}){return!!Object.keys(i).length}function Zr(t,e){return t[e]||t.default||t}function Yr(t,e,n,r,o){const i=Zr(r,t);let s=i.from===null||i.from===void 0?e.get():i.from;const a=te(t,n);s==="none"&&a&&typeof n=="string"&&(s=zr(t,n));const c=te(t,s);function l(f){const p={from:s,to:n,velocity:r.velocity?r.velocity:e.getVelocity(),onUpdate:y=>e.set(y)};return i.type==="inertia"||i.type==="decay"?jr({...p,...i}):_e({...Wr(i,p,t),onUpdate:y=>{p.onUpdate(y),i.onUpdate&&i.onUpdate(y)},onComplete:()=>{o&&o(),f&&f()}})}function u(f){return e.set(n),o&&o(),f&&f(),{stop:()=>{}}}return!c||!a||i.type===!1?u:l}function Gr(){const{motionValues:t,stop:e,get:n}=kr();return{motionValues:t,stop:e,push:(o,i,s,a={},c)=>{const l=s[o],u=n(o,l,s);if(a&&a.immediate){u.set(i);return}const f=Yr(o,u,i,a,c);u.start(f)}}}function Xr(t,e={},{motionValues:n,push:r,stop:o}=Gr()){const i=D(e),s=V(!1);j(n,f=>{s.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>{typeof f=="string"&&(f=a(f));const p=Object.entries(f).map(([b,S])=>{if(b!=="transition")return new Promise(O=>r(b,S,t,f.transition||Ue(b,f[b]),O))}).filter(Boolean);async function y(){await Promise.all(p),f.transition?.onComplete?.()}return Promise.all([y()])};return{isAnimating:s,apply:c,set:f=>{const p=tt(f)?f:a(f);Object.entries(p).forEach(([y,b])=>{y!=="transition"&&r(y,b,t,{immediate:!0})})},leave:async f=>{let p;if(i&&(i.leave&&(p=i.leave),!i.leave&&i.initial&&(p=i.initial)),!p){f();return}await c(p),f()},stop:o}}const kt=typeof window<"u",Jr=()=>kt&&(window.onpointerdown===null||Dt?.TEST),Qr=()=>kt&&(window.ontouchstart===null||Dt?.TEST),to=()=>kt&&(window.onmousedown===null||Dt?.TEST);function eo({target:t,state:e,variants:n,apply:r}){const o=D(n),i=V(!1),s=V(!1),a=V(!1),c=w(()=>{let u=[...Object.keys(e.value||{})];return o&&(o.hovered&&(u=[...u,...Object.keys(o.hovered)]),o.tapped&&(u=[...u,...Object.keys(o.tapped)]),o.focused&&(u=[...u,...Object.keys(o.focused)])),u}),l=w(()=>{const u={};Object.assign(u,e.value),i.value&&o.hovered&&Object.assign(u,o.hovered),s.value&&o.tapped&&Object.assign(u,o.tapped),a.value&&o.focused&&Object.assign(u,o.focused);for(const f in u)c.value.includes(f)||delete u[f];return u});o.hovered&&(A(t,"mouseenter",()=>i.value=!0),A(t,"mouseleave",()=>{i.value=!1,s.value=!1})),o.tapped&&(to()&&(A(t,"mousedown",()=>s.value=!0),A(t,"mouseup",()=>s.value=!1)),Jr()&&(A(t,"pointerdown",()=>s.value=!0),A(t,"pointerup",()=>s.value=!1)),Qr()&&(A(t,"touchstart",()=>s.value=!0),A(t,"touchend",()=>s.value=!1))),o.focused&&(A(t,"focus",()=>a.value=!0),A(t,"blur",()=>a.value=!1)),j([i,s,a],()=>{r(l.value)})}function no({set:t,target:e,variants:n,variant:r}){const o=D(n);j(()=>e,()=>{o&&(o.initial&&(t("initial"),r.value="initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function ro({state:t,apply:e}){j(t,n=>{n&&e(n)},{immediate:!0})}function He({target:t,variants:e,variant:n}){const r=D(e);r&&(r.visible||r.visibleOnce)&&On(t,([{isIntersecting:o}])=>{r.visible?o?n.value="visible":n.value="initial":r.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function oo(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&no(t),e.syncVariants&&ro(t),e.visibilityHooks&&He(t),e.eventListeners&&eo(t)}function qe(t={}){const e=ot({...t}),n=V({});return j(e,()=>{const r={};for(const[o,i]of Object.entries(e)){const s=_t(o),a=At(i,s);r[o]=a}n.value=r},{immediate:!0,deep:!0}),{state:e,style:n}}function Pt(t,e){j(()=>P(t),n=>{n&&e(n)},{immediate:!0})}const so={x:"translateX",y:"translateY",z:"translateZ"};function We(t={},e=!0){const n=ot({...t}),r=V("");return j(n,o=>{let i="",s=!1;if(e&&(o.x||o.y||o.z)){const a=[o.x||0,o.y||0,o.z||0].map(c=>At(c,d)).join(",");i+=`translate3d(${a}) `,s=!0}for(const[a,c]of Object.entries(o)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const l=_t(a),u=At(c,l);i+=`${so[a]||a}(${u}) `}e&&!s&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const io=["","X","Y","Z"],ao=["perspective","translate","scale","rotate","skew"],Ke=["transformPerspective","x","y","z"];ao.forEach(t=>{io.forEach(e=>{const n=t+e;Ke.push(n)})});const co=new Set(Ke);function Lt(t){return co.has(t)}const lo=new Set(["originX","originY","originZ"]);function Ze(t){return lo.has(t)}function uo(t){const e={},n={};return Object.entries(t).forEach(([r,o])=>{Lt(r)||Ze(r)?e[r]=o:n[r]=o}),{transform:e,style:n}}function at(t){const{transform:e,style:n}=uo(t),{transform:r}=We(e),{style:o}=qe(n);return r.value&&(o.value.transform=r.value),o.value}function fo(t,e){let n,r;const{state:o,style:i}=qe();return Pt(t,s=>{r=s;for(const a of Object.keys($e))s.style[a]===null||s.style[a]===""||Lt(a)||Ze(a)||(o[a]=s.style[a]);n&&Object.entries(n).forEach(([a,c])=>s.style[a]=c),e&&e(o)}),j(i,s=>{if(!r){n=s;return}for(const a in s)r.style[a]=s[a]},{immediate:!0}),{style:o}}function po(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?Number.parseFloat(r):Number.isNaN(Number(r))?Number(r):r;return e.reduce((r,o)=>{if(!o)return r;const[i,s]=o.split("("),c=s.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),l=c.length===1?c[0]:c;return{...r,[i]:l}},{})}function mo(t,e){Object.entries(po(e)).forEach(([n,r])=>{const o=["x","y","z"];if(n==="translate3d"){if(r===0){o.forEach(i=>t[i]=0);return}r.forEach((i,s)=>t[o[s]]=i);return}if(r=Number.parseFloat(`${r}`),n==="translateX"){t.x=r;return}if(n==="translateY"){t.y=r;return}if(n==="translateZ"){t.z=r;return}t[n]=r})}function yo(t,e){let n,r;const{state:o,transform:i}=We();return Pt(t,s=>{r=s,s.style.transform&&mo(o,s.style.transform),n&&(s.style.transform=n),e&&e(o)}),j(i,s=>{if(!r){n=s;return}r.style.transform=s},{immediate:!0}),{transform:o}}function bo(t){return Object.entries(t)}function ho(t,e){const n=ot({}),r=s=>Object.entries(s).forEach(([a,c])=>n[a]=c),{style:o}=fo(t,r),{transform:i}=yo(t,r);return j(n,s=>{bo(s).forEach(([a,c])=>{const l=Lt(a)?i:o;l[a]&&l[a]===c||(l[a]=c)})},{immediate:!0,deep:!0}),Pt(t,()=>e),{motionProperties:n,style:o,transform:i}}function go(t={}){const e=D(t),n=V();return{state:w(()=>{if(n.value)return e[n.value]}),variant:n}}function Ye(t,e={},n){const{motionProperties:r}=ho(t),{variant:o,state:i}=go(e),s=Xr(r,e),a={target:t,variant:o,variants:e,state:i,motionProperties:r,...s};return oo(a,n),a}const Ge=["delay","duration"],vo=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...Ge];function Oo(t){return Ge.includes(t)}function xo(t,e){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};if(n){n.variants&&tt(n.variants)&&(e.value={...e.value,...n.variants});for(let r of vo)if(!(!n||!n[r])){if(Oo(r)&&typeof n[r]=="number"){for(const o of["enter","visible","visibleOnce"]){const i=e.value[o];i!=null&&(i.transition??={},i.transition[r]=n[r])}continue}if(tt(n[r])){const o=n[r];r==="visible-once"&&(r="visibleOnce"),e.value[r]=o}}}}function bt(t,e=!1){return{created:(o,i,s)=>{const a=i.value&&typeof i.value=="string"?i.value:s.key;a&&dt[a]&&dt[a].stop();const c=e?structuredClone(ie(t)||{}):t||{},l=V(c);typeof i.value=="object"&&(l.value=i.value),xo(s,l);const f=Ye(o,l,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});o.motionInstance=f,a&&(dt[a]=f)},mounted:(o,i,s)=>{o.motionInstance&&He(o.motionInstance)},getSSRProps(o,i){let{initial:s}=o.value||i&&i?.props||{};s=D(s);const a=ae({},t?.initial||{},s||{});return!a||Object.keys(a).length===0?void 0:{style:at(a)}}}}const So={initial:{opacity:0},enter:{opacity:1}},To={initial:{opacity:0},visible:{opacity:1}},Mo={initial:{opacity:0},visibleOnce:{opacity:1}},jo={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Ao={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Co={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},wo={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Vo={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Eo={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Ro={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},No={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Fo={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Io={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Do={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_o={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ko={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Po={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Lo={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Bo={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},zo={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Uo={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},$o={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Ho={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},qo={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Wo={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Ko={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Zo={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Yo={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Go={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Xo={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},rt={__proto__:null,fade:So,fadeVisible:To,fadeVisibleOnce:Mo,pop:jo,popVisible:Ao,popVisibleOnce:Co,rollBottom:ko,rollLeft:wo,rollRight:Ro,rollTop:Io,rollVisibleBottom:Po,rollVisibleLeft:Vo,rollVisibleOnceBottom:Lo,rollVisibleOnceLeft:Eo,rollVisibleOnceRight:Fo,rollVisibleOnceTop:_o,rollVisibleRight:No,rollVisibleTop:Do,slideBottom:Yo,slideLeft:Bo,slideRight:$o,slideTop:Wo,slideVisibleBottom:Go,slideVisibleLeft:zo,slideVisibleOnceBottom:Xo,slideVisibleOnceLeft:Uo,slideVisibleOnceRight:qo,slideVisibleOnceTop:Zo,slideVisibleRight:Ho,slideVisibleTop:Ko};function Jo(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>n.charAt(e.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Xe=Symbol(""),Je={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Qo(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ct(t){if(Array.isArray(t))return t.map(Ct);if(Qo(t)){const e={};for(const n in t)e[n]=Ct(t[n]);return e}return t}function Qe(t){const e=ot({}),n=un(Xe,{}),r=w(()=>t.preset==null?{}:n!=null&&t.preset in n?structuredClone(ie(n)[t.preset]):t.preset in rt?structuredClone(rt[t.preset]):{}),o=w(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused}));function i(c,l){for(const u of["delay","duration"]){if(l[u]==null)continue;const f=Number.parseInt(l[u]);for(const p of["enter","visible","visibleOnce"]){const y=c[p];y!=null&&(y.transition??={},y.transition[u]=f)}}return c}const s=w(()=>{const c=ae({},o.value,r.value,t.variants||{});return i({...c},t)});function a(c,l,u){c.props??={},c.props.style??={},c.props.style={...c.props.style,...u};const f=i(Ct(s.value),c.props);return c.props.onVnodeMounted=({el:p})=>{e[l]=Ye(p,f)},c.props.onVnodeUpdated=({el:p})=>{const y=at(e[l].state);for(const[b,S]of Object.entries(y))p.style[b]=S},c}return{motionConfig:s,setNodeInstance:a}}const ts=re({name:"Motion",props:{...Je,is:{type:[String,Object],default:"div"}},setup(t){const e=oe(),{motionConfig:n,setNodeInstance:r}=Qe(t);return()=>{const o=at(n.value.initial||{}),i=se(t.is,void 0,e);return r(i,0,o),i}}}),es=re({name:"MotionGroup",props:{...Je,is:{type:[String,Object],required:!1}},setup(t){const e=oe(),{motionConfig:n,setNodeInstance:r}=Qe(t);return()=>{const o=at(n.value.initial||{}),i=e.default?.()||[];for(let s=0;s<i.length;s++){const a=i[s];a.type===ln&&Array.isArray(a.children)?a.children.forEach(function c(l,u){if(l!=null){if(Array.isArray(l)){c(l,u);return}typeof l=="object"&&r(l,u,o)}}):r(a,s,o)}return t.is?se(t.is,void 0,i):i}}}),ns={install(t,e){if(t.directive("motion",bt()),!e||e&&!e.excludePresets)for(const n in rt){const r=rt[n];t.directive(`motion-${Jo(n)}`,bt(r,!0))}if(e&&e.directives)for(const n in e.directives){const r=e.directives[n];r.initial,t.directive(`motion-${n}`,bt(r,!0))}t.provide(Xe,e?.directives),t.component("Motion",ts),t.component("MotionGroup",es)}},os=({app:t})=>{t.use(ns)};export{os as default};
