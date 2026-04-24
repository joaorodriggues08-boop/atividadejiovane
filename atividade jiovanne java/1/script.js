btn.onclick = () => {
  let n = num.value;
  let r = "";
  for(let i=0;i<=10;i++){
    r += `${n} x ${i} = ${n*i}<br>`;
  }
  res.innerHTML = r;
};