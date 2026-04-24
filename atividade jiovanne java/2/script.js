btn.onclick = () => {
  let n = Number(num.value);
  let op = op.value;
  let r="";
  for(let i=0;i<=10;i++){
    let v;
    if(op=="+") v=n+i;
    if(op=="-") v=n-i;
    if(op=="*") v=n*i;
    if(op=="/") v=n/i;
    r += `${n} ${op} ${i} = ${v}<br>`;
  }
  res.innerHTML=r;
};