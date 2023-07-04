const s=async(t,e,r)=>{var n={method:t};return t=="post"&&(n.body={params:r}),await fetch(e,n).then(o=>o.json())},a=(t,e)=>s("get",t+e);export{a as h};
