btn.onclick = () => {
  let t = txt.value;
  let p = t.split(" ").length;
  let m = (t.match(/[A-Z]/g) || []).length;
  res.innerHTML = `Caracteres: ${t.length}<br>Palavras: ${p}<br>Maiúsculas: ${m}`;
};