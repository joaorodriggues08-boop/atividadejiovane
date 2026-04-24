btn.onclick = () => {
  let v = valor.value;
  if(v <= 100) res.innerHTML = v;
  else if(v <= 500) res.innerHTML = v * 0.9;
  else res.innerHTML = v * 0.8;
};