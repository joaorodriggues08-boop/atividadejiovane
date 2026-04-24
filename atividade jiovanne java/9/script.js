btn.onclick = () => {
  res.innerHTML = senha.value.length >= 8 ? "Forte" : "Fraca";
};