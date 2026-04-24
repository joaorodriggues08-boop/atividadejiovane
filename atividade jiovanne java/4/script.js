btn.onclick = () => {
  let i = idade.value;
  if(i<12) res.innerHTML="Criança";
  else if(i<18) res.innerHTML="Adolescente";
  else if(i<60) res.innerHTML="Adulto";
  else res.innerHTML="Idoso";
};