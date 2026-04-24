btn.onclick = () => {
  let p = peso.value;
  let a = altura.value;
  let i = p/(a*a);
  let r="";
  if(i<18.5) r="Abaixo do peso";
  else if(i<25) r="Peso normal";
  else if(i<30) r="Sobrepeso";
  else r="Obesidade";
  res.innerHTML = i.toFixed(2)+" - "+r;
};