btn.onclick = () => {
  let n = num.value;
  let i = setInterval(() => {
    res.innerHTML = n;
    n--;
    if (n < 0) clearInterval(i);
  }, 1000);
};