import{r as c,j as e}from"./react-Cn7aBO_v.js";import{L as m}from"./index-hAbfg5VM.js";import{f as d}from"./react-router-DMoB8goq.js";import{u as x,a as p}from"./jotai-BdDUh7Gg.js";import"./react-dom-C6A_9beh.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-CqLnuOSD.js";import"./@remix-run-ByNhnkJC.js";const f=p({}),D=()=>{const{id:s}=d(),[r,a]=x(f),t=s?r[s]:null;return c.useEffect(()=>{(async()=>{if(!s||t)return;const o=await fetch(`undefined/movie/${s}?api_key=undefined`);if(!o.ok){console.error("Failed to fetch movie details");return}const l=await o.json();a(n=>({...n,[s]:l}))})()},[s,t,a]),t?e.jsxs("div",{className:"relative text-white min-h-screen",style:{backgroundImage:`url(https://image.tmdb.org/t/p/original${t.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-70"}),e.jsxs("div",{className:"relative container mx-auto p-8 flex flex-col md:flex-row items-center gap-8 min-h-screen",children:[e.jsx("img",{src:`https://image.tmdb.org/t/p/w500${t.poster_path}`,alt:t.title,className:"w-72 rounded-lg shadow-lg"}),e.jsxs("div",{className:"text-left max-w-2xl",children:[e.jsx("h1",{className:"text-4xl font-bold mb-2",children:t.title}),e.jsxs("p",{className:"text-gray-400 mb-4",children:[new Date(t.release_date).toLocaleDateString()," •"," ",t.genres.map(i=>i.name).join(", ")]}),e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("span",{className:"flex items-center bg-yellow-500 text-black px-2 py-1 rounded-full font-semibold",children:t.vote_average.toFixed(1)}),e.jsxs("span",{children:[t.runtime," min"]})]}),e.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"Overview"}),e.jsx("p",{className:"text-gray-300",children:t.overview})]})]})]}):e.jsx(m,{})};export{D as default};
