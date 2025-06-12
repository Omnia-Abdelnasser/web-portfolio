import{d as x,j as r}from"./index-QOzpZ-eP.js";import{u as p}from"./firestore-DetmPEDM.js";import{m as f}from"./proxy-Dey9y88f.js";import"./firebase-YnCF1Ofz.js";const g=()=>{const e=x.c(8),{isLoading:m,error:d,data:l}=p();if(m){let t;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("p",{className:` bg-secondary text-center text-2xl font-semibold\r
   text-[#25c1dd] animate-pulse`,children:"Loading..."}),e[0]=t):t=e[0],t}if(d){let t;return e[1]===Symbol.for("react.memo_cache_sentinel")?(t=r.jsx("p",{className:`text-center text-2xl font-semibold  animate-pulse\r
   text-red-500 bg-secondary`,children:"Error happened!"}),e[1]=t):t=e[1],t}let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:r.jsx("h1",{className:`text-3xl text-[#25c1dd] font-semibold \r
        w-fit mx-auto    pb-1 tracking-wide drop-shadow-md mt-16`,children:"About Me"})}),e[2]=s):s=e[2];let a,n,o;e[3]===Symbol.for("react.memo_cache_sentinel")?(a={opacity:0,x:-50},n={opacity:1,x:0},o={delay:.1,duration:.8,ease:"easeOut"},e[3]=a,e[4]=n,e[5]=o):(a=e[3],n=e[4],o=e[5]);const c=l==null?void 0:l.about;let i;return e[6]!==c?(i=r.jsxs("section",{id:"about",className:" text-center  px-4 bg-secondary py-20  ",children:[s,r.jsx(f.div,{initial:a,whileInView:n,transition:o,className:`\r
      sm:p-6   \r
    transition-colors duration-500\r
    w-full max-w-8xl mx-auto \r
  `,children:r.jsx("p",{className:`bg-white dark:bg-[#1e1e1e] text-sm md:text-[20px] font-semibold leading-relaxed text-gray-800\r
             \r
   shadow-md rounded-xl p-8 space-y-4 border-l-4\r
             border-[#209191] text-left whitespace-pre-wrap\r
             dark:text-gray-300 `,children:c})})]}),e[6]=c,e[7]=i):i=e[7],i};export{g as default};
