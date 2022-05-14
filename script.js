let carro = "volvo";

//alert("Olá pessoas!");

let a=10;
let b=5;
//alert(a+b);

function clicou(){
    alert("Voce clicou em um botão");
}
let cliques=0;
function clicar(){
    cliques++;
    document.getElementById("RESULTADO").innerHTML="O contador esta com <mark> "+cliques+ "cliques </mark>";
}

function clica(){
    cliques--;
    document.getElementById("RESULTADO").innerHTML="O contador esta com <mark> "+cliques+ "cliques </mark>";
}
 
 {let a=5;
 let b=5;
 alert(10/2);
 }

  {let n= prompt ("Digite um numero");
let total=n/2;
let resultado= total % 2 == 0 ? 'par' : 'impar';
alert(n+"é" + resultado);
  }

  function qualemaior(){
      let a = prompt ("digite um numero");
      let b = prompt ("digite um numero");
      if(a<b){
        alert("A é maior que B");
     )else(
      alert("B é maior que A");
    }