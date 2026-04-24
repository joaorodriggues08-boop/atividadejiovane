btn.onclick = () => {
  let m=(+n1.value + +n2.value + +n3.value)/3;
  res.innerHTML = m>=7 ? "Aprovado":"Reprovado";
};