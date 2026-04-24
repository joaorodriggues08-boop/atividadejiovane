let s = 0, i;

ini.onclick = () => {
  i = setInterval(() => {
    s++;
    t.innerHTML = s;
  }, 1000);
};

pau.onclick = () => clearInterval(i);

reset.onclick = () => {
  clearInterval(i);
  s = 0;
  t.innerHTML = 0;
};