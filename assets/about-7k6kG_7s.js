import{d as x,j as s}from"./index-CubVlbT9.js";import{u as p}from"./firestore-DNrdAN6K.js";import{m as f}from"./proxy-CbKdw4r2.js";import"./firebase-YnCF1Ofz.js";const g=()=>{const e=x.c(8),{isLoading:m,error:d,data:l}=p();if(m){let t;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=s.jsx("p",{className:` bg-secondary text-center text-2xl font-semibold
   text-[#25c1dd] animate-pulse`,children:"Loading..."}),e[0]=t):t=e[0],t}if(d){let t;return e[1]===Symbol.for("react.memo_cache_sentinel")?(t=s.jsx("p",{className:`text-center text-2xl font-semibold  animate-pulse
   text-red-500 bg-secondary`,children:"Error happened!"}),e[1]=t):t=e[1],t}let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=s.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:s.jsx("h1",{className:`text-3xl text-[#25c1dd] font-semibold 
        w-fit mx-auto    pb-1 tracking-wide drop-shadow-md mt-16`,children:"About Me"})}),e[2]=r):r=e[2];let o,a,n;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={opacity:0,x:-50},a={opacity:1,x:0},n={delay:.1,duration:.8,ease:"easeOut"},e[3]=o,e[4]=a,e[5]=n):(o=e[3],a=e[4],n=e[5]);const c=l==null?void 0:l.about;let i;return e[6]!==c?(i=s.jsxs("section",{id:"about",className:" text-center  px-4 bg-secondary py-20  ",children:[r,s.jsx(f.div,{initial:o,whileInView:a,transition:n,className:`
      sm:p-6   
    transition-colors duration-500
    w-full max-w-8xl mx-auto 
  `,children:s.jsx("p",{className:`bg-white dark:bg-[#1e1e1e]
   shadow-md rounded-xl p-8 space-y-4 border-l-4
             border-[#209191] text-left whitespace-pre-wrap
              text-gray-600 dark:text-gray-300 text-sm font-semibold md:text-lg`,children:c})})]}),e[6]=c,e[7]=i):i=e[7],i};export{g as default};
