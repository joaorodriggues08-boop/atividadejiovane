let n = Math.floor(Math.random()*100)+1;

btn.onclick = () => {
  let p = palpite.value;
  if(p == n) res.innerHTML = "Acertou";
  else if(p < n) res.innerHTML = "Maior";
  else res.innerHTML = "Menor";
};