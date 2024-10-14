import{r as C,R as Y}from"./react-Cn7aBO_v.js";const D={BASE_URL:"/themoviedb-react",DEV:!1,MODE:"production",PROD:!0,SSR:!1};let Z=0;function _n(n,o){const r=`atom${++Z}`,c={toString(){return(D?"production":void 0)!=="production"&&this.debugLabel?r+":"+this.debugLabel:r}};return typeof n=="function"?c.read=n:(c.init=n,c.read=x,c.write=S),c}function x(n){return n(this)}function S(n,o,r){return o(this,typeof r=="function"?r(n(this)):r)}const J=(n,o)=>n.unstable_is?n.unstable_is(o):o===n,U=n=>"init"in n,B=n=>!!n.write,F=new WeakMap,W=n=>{var o;return z(n)&&!((o=F.get(n))!=null&&o[1])},m=(n,o)=>{const r=F.get(n);if(r)r[1]=!0,r[0].forEach(c=>c(o));else if((D?"production":void 0)!=="production")throw new Error("[Bug] cancelable promise not found")},nn=n=>{if(F.has(n))return;const o=[new Set,!1];F.set(n,o);const r=()=>{o[1]=!0};n.then(r,r),n.onCancel=c=>{o[0].add(c)}},z=n=>typeof(n==null?void 0:n.then)=="function",$=n=>"v"in n||"e"in n,j=n=>{if("e"in n)throw n.e;if((D?"production":void 0)!=="production"&&!("v"in n))throw new Error("[Bug] atom state is not initialized");return n.v},q=(n,o,r)=>{r.p.has(n)||(r.p.add(n),o.then(()=>{r.p.delete(n)},()=>{r.p.delete(n)}))},H=(n,o,r,c,b)=>{var M;if((D?"production":void 0)!=="production"&&c===o)throw new Error("[Bug] atom cannot depend on itself");r.d.set(c,b.n),W(r.v)&&q(o,r.v,b),(M=b.m)==null||M.t.add(o),n&&en(n,c,o)},A=()=>[new Map,new Map,new Set],I=(n,o,r)=>{n[0].has(o)||n[0].set(o,new Set),n[1].set(o,r)},en=(n,o,r)=>{const c=n[0].get(o);c&&c.add(r)},sn=(n,o)=>n[0].get(o),N=(n,o)=>{n[2].add(o)},R=n=>{for(;n[1].size||n[2].size;){n[0].clear();const o=new Set(n[1].values());n[1].clear();const r=new Set(n[2]);n[2].clear(),o.forEach(c=>{var b;return(b=c.m)==null?void 0:b.l.forEach(M=>M())}),r.forEach(c=>c())}},G=n=>{let o;(D?"production":void 0)!=="production"&&(o=new Set);const r=(t,s,e)=>{const i="v"in s,l=s.v,u=W(s.v)?s.v:null;if(z(e)){nn(e);for(const v of s.d.keys())q(t,e,n(v,s));s.v=e,delete s.e}else s.v=e,delete s.e;(!i||!Object.is(l,s.v))&&(++s.n,u&&m(u,e))},c=(t,s,e,i)=>{var l;if(!(i!=null&&i(s))&&$(e)&&(e.m||Array.from(e.d).every(([d,E])=>c(t,d,n(d,e),i).n===E)))return e;e.d.clear();let u=!0;const v=d=>{if(J(s,d)){const p=n(d,e);if(!$(p))if(U(d))r(d,p,d.init);else throw new Error("no atom init");return j(p)}const E=c(t,d,n(d,e),i);if(u)H(t,s,e,d,E);else{const p=A();H(p,s,e,d,E),f(p,s,e),R(p)}return j(E)};let h,_;const w={get signal(){return h||(h=new AbortController),h.signal},get setSelf(){return(D?"production":void 0)!=="production"&&!B(s)&&console.warn("setSelf function cannot be used with read-only atom"),!_&&B(s)&&(_=(...d)=>{if((D?"production":void 0)!=="production"&&u&&console.warn("setSelf function cannot be called in sync"),!u)return P(s,...d)}),_}};try{const d=s.read(v,w);if(r(s,e,d),z(d)){(l=d.onCancel)==null||l.call(d,()=>h==null?void 0:h.abort());const E=()=>{if(e.m){const p=A();f(p,s,e),R(p)}};d.then(E,E)}return e}catch(d){return delete e.v,e.e=d,++e.n,e}finally{u=!1}},b=t=>j(c(void 0,t,n(t))),M=(t,s,e)=>{var i,l;const u=new Map;for(const v of((i=e.m)==null?void 0:i.t)||[])u.set(v,n(v,e));for(const v of e.p)u.set(v,n(v,e));return(l=sn(t,s))==null||l.forEach(v=>{u.set(v,n(v,e))}),u},k=(t,s,e)=>{const i=[],l=new Set,u=(_,w)=>{if(!l.has(_)){l.add(_);for(const[d,E]of M(t,_,w))_!==d&&u(d,E);i.push([_,w,w.n])}};u(s,e);const v=new Set([s]),h=_=>l.has(_);for(let _=i.length-1;_>=0;--_){const[w,d,E]=i[_];let p=!1;for(const O of d.d.keys())if(O!==w&&v.has(O)){p=!0;break}p&&(c(t,w,d,h),f(t,w,d),E!==d.n&&(I(t,w,d),v.add(w))),l.delete(w)}},y=(t,s,e,...i)=>{const l=h=>j(c(t,h,n(h,e))),u=(h,..._)=>{const w=n(h,e);let d;if(J(s,h)){if(!U(h))throw new Error("atom not writable");const E="v"in w,p=w.v,O=_[0];r(h,w,O),f(t,h,w),(!E||!Object.is(p,w.v))&&(I(t,h,w),k(t,h,w))}else d=y(t,h,w,..._);return R(t),d};return s.write(l,u,...i)},P=(t,...s)=>{const e=A(),i=y(e,t,n(t),...s);return R(e),i},f=(t,s,e)=>{if(e.m&&!W(e.v)){for(const i of e.d.keys())e.m.d.has(i)||(g(t,i,n(i,e)).t.add(s),e.m.d.add(i));for(const i of e.m.d||[])if(!e.d.has(i)){e.m.d.delete(i);const l=L(t,i,n(i,e));l==null||l.t.delete(s)}}},g=(t,s,e)=>{if(!e.m){c(t,s,e);for(const i of e.d.keys())g(t,i,n(i,e)).t.add(s);if(e.m={l:new Set,d:new Set(e.d.keys()),t:new Set},(D?"production":void 0)!=="production"&&o.add(s),B(s)&&s.onMount){const i=e.m,{onMount:l}=s;N(t,()=>{const u=l((...v)=>y(t,s,e,...v));u&&(i.u=u)})}}return e.m},L=(t,s,e)=>{if(e.m&&!e.m.l.size&&!Array.from(e.m.t).some(i=>{var l;return(l=n(i,e).m)==null?void 0:l.d.has(s)})){const i=e.m.u;i&&N(t,i),delete e.m,(D?"production":void 0)!=="production"&&o.delete(s);for(const l of e.d.keys()){const u=L(t,l,n(l,e));u==null||u.t.delete(s)}return}return e.m},a={get:b,set:P,sub:(t,s)=>{const e=A(),i=n(t),l=g(e,t,i);R(e);const u=l.l;return u.add(s),()=>{u.delete(s);const v=A();L(v,t,i),R(v)}},unstable_derive:t=>G(...t(n))};return(D?"production":void 0)!=="production"&&Object.assign(a,{dev4_get_internal_weak_map:()=>({get:s=>{const e=n(s);if(e.n!==0)return e}}),dev4_get_mounted_atoms:()=>o,dev4_restore_atoms:s=>{const e=A();for(const[i,l]of s)if(U(i)){const u=n(i),v="v"in u,h=u.v;r(i,u,l),f(e,i,u),(!v||!Object.is(h,u.v))&&(I(e,i,u),k(e,i,u))}R(e)}}),a},on=()=>{const n=new WeakMap;return G(r=>{let c=n.get(r);return c||(c={d:new Map,p:new Set,n:0},n.set(r,c)),c})};let T;const rn=()=>(T||(T=on(),(D?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=T),globalThis.__JOTAI_DEFAULT_STORE__!==T&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),T),K={BASE_URL:"/themoviedb-react",DEV:!1,MODE:"production",PROD:!0,SSR:!1},tn=C.createContext(void 0),Q=n=>C.useContext(tn)||rn(),X=n=>typeof(n==null?void 0:n.then)=="function",cn=n=>{n.status="pending",n.then(o=>{n.status="fulfilled",n.value=o},o=>{n.status="rejected",n.reason=o})},un=Y.use||(n=>{if(n.status==="pending")throw n;if(n.status==="fulfilled")return n.value;throw n.status==="rejected"?n.reason:(cn(n),n)}),V=new WeakMap,dn=n=>{let o=V.get(n);return o||(o=new Promise((r,c)=>{let b=n;const M=P=>f=>{b===P&&r(f)},k=P=>f=>{b===P&&c(f)},y=P=>{"onCancel"in P&&typeof P.onCancel=="function"&&P.onCancel(f=>{if((K?"production":void 0)!=="production"&&f===P)throw new Error("[Bug] p is not updated even after cancelation");X(f)?(V.set(f,o),b=f,f.then(M(f),k(f)),y(f)):r(f)})};n.then(M(n),k(n)),y(n)}),V.set(n,o)),o};function ln(n,o){const r=Q(),[[c,b,M],k]=C.useReducer(f=>{const g=r.get(n);return Object.is(f[0],g)&&f[1]===r&&f[2]===n?f:[g,r,n]},void 0,()=>[r.get(n),r,n]);let y=c;if((b!==r||M!==n)&&(k(),y=r.get(n)),C.useEffect(()=>{const f=r.sub(n,()=>{k()});return k(),f},[r,n,void 0]),C.useDebugValue(y),X(y)){const f=dn(y);return un(f)}return y}function fn(n,o){const r=Q();return C.useCallback((...b)=>{if((K?"production":void 0)!=="production"&&!("write"in n))throw new Error("not writable atom");return r.set(n,...b)},[r,n])}function bn(n,o){return[ln(n),fn(n)]}export{_n as a,bn as u};
