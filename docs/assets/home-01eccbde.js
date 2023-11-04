import{b as F,m,s as D,d as S,D as _,e as $,f as k,c as p,i as u,a as d,A,F as I,t as f}from"./index-9a4318c3.js";import{u as n,a as z}from"./authors-82787dd1.js";const E=k();function P(t){let e=this||{};return(...r)=>{const l=o=>{const a=F(E),c=m(o,{theme:a}),w=m(c,{get class(){const g=c.class,y="class"in c&&/^go[0-9]+/.test(g);let v=n.apply({target:e.target,o:y,p:c,g:e.g},r);return[g,v].filter(Boolean).join(" ")}}),[C,b]=D(w,["as","theme"]),h=b,i=C.as||t;let s;return typeof i=="function"?s=i(h):e.g==1?(s=document.createElement(i),S(s,h)):s=_(m({component:i},h)),s};return l.class=o=>$(()=>n.apply({target:e.target,p:o,g:e.g},r)),l}}const x=new Proxy(P,{get(t,e){return t(e)}}),B=f('<div><div><form action="#"><label>'),j=f("<div>"),K=()=>(()=>{const t=B(),e=t.firstChild,r=e.firstChild,l=r.firstChild;return p(t,T),p(e,H),p(r,M),u(l,d(N,{type:"text",placeholder:"著者を入力"})),u(r,d(R,{type:"submit","aria-label":"検索"}),null),u(t,d(I,{each:z,children:o=>(()=>{const a=j();return p(a,V),u(a,d(A,{get href(){return`/authors/${o.authorID}`},class:q,get children(){return o.author.replaceAll("—"," ").replaceAll(" "," ").trim()}})),a})()}),null),t})(),T=n({background:"black"}),H=n({width:"300px",margin:"5vw 0 5vw calc(50vw - 150px)"}),M=n({display:"flex",justifyContent:"space-between",alignItems:"center",overflow:"hidden",border:"2px solid orange",borderRadius:"3px"}),N=x("input")`
  width: 250px;
  height: 45px;
  padding: 5px 15px;
  border: none;
  box-sizing: border-box;
  font-size: 1em;
  outline: none;

  &:placeholder {
    color: #767d83;
  }
`,R=x("button")`
  display: flex;
  justify-content: center;
  alignItems: center;
  width: 50px;
  height: 45px;
  border: none;
  backgroundColor: red;
  cursor: pointer;

  &:after {
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%20%3Cpath%20d%3D%22M23.7%2020.8%2019%2016.1c-.2-.2-.5-.3-.8-.3h-.8c1.3-1.7%202-3.7%202-6C19.5%204.4%2015.1%200%209.7%200S0%204.4%200%209.7s4.4%209.7%209.7%209.7c2.3%200%204.3-.8%206-2v.8c0%20.3.1.6.3.8l4.7%204.7c.4.4%201.2.4%201.6%200l1.3-1.3c.5-.5.5-1.2.1-1.6zm-14-5.1c-3.3%200-6-2.7-6-6s2.7-6%206-6%206%202.7%206%206-2.6%206-6%206z%22%20fill%3D%22%23fff%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    content: '';
  }
`,V=n({padding:"10px"}),q=n({color:"white",fontSize:"20px",fontFamily:"MyFont",padding:"5px"});export{K as default};
