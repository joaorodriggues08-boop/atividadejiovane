function show(n){
  document.querySelectorAll(".box").forEach(b=>b.style.display="none");
  document.getElementById("ex"+n).style.display="block";
}

//1
function tabuada(){
  let n=n1.value, r="";
  for(let i=0;i<=10;i++) r+=`${n*i}<br>`;
  r1.innerHTML=r;
}

//2
function op(){
  let n=n2.value, o=op2.value, r="";
  for(let i=0;i<=10;i++){
    let v = eval(n+o+i);
    r+=v+"<br>";
  }
  r2.innerHTML=r;
}

//3
function imc(){
  let i=peso.value/(alt.value*alt.value);
  r3.innerHTML=i.toFixed(2);
}

//4
function idade(){
  let i=idade.value;
  r4.innerHTML=i<12?"Criança":i<18?"Adolescente":i<60?"Adulto":"Idoso";
}

//5
function media(){
  let m=(+a.value+ +b.value+ +c.value)/3;
  r5.innerHTML=m>=7?"Aprovado":"Reprovado";
}

//6
function calc(o){
  r6.innerHTML=eval(x.value+o+y.value);
}

//7
function par(){
  r7.innerHTML=num.value%2==0?"Par":"Ímpar";
}

//8
function conv(){
  r8.innerHTML=real.value/cot.value;
}

//9
function senha(){
  r9.innerHTML=senha.value.length>=8?"Forte":"Fraca";
}

//10
function texto(){
  let t=txt.value;
  r10.innerHTML=t.length;
}

//11
function start(){
  let n=cont.value;
  let i=setInterval(()=>{
    r11.innerHTML=n;
    n--;
    if(n<0) clearInterval(i);
  },1000);
}

//12
let nRand=Math.floor(Math.random()*100)+1;
function guess(){
  let p=palpite.value;
  r12.innerHTML=p==nRand?"Acertou":p<nRand?"Maior":"Menor";
}

//13
function cad(){
  r13.innerHTML=`${nome.value} ${idade2.value} ${email.value}`;
}

//14
function desc(){
  let v=valor.value;
  r14.innerHTML=v<=100?v:v<=500?v*0.9:v*0.8;
}

//15
let s=0,i;
function ini(){ i=setInterval(()=>{s++;t.innerHTML=s},1000); }
function pau(){ clearInterval(i); }
function reset(){ clearInterval(i); s=0; t.innerHTML=0; }