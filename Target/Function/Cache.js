var c=i=>{classCache=new Set,idCache=new Set;const s=[i];for(;s.length;){const t=s.shift();if(t.hasAttribute("class")&&t.getAttribute("class").trim().split(" ").forEach(a=>{classCache.add(a)}),t.hasAttribute("id")){const e=t.getAttribute("id").trim();idCache.add(e)}s.push(...t.children.filter(e=>e.type==="tag"))}};export{c as default};
