//let carro = "volvo";

alert("Bem vindo ao portal Pig Lovers!");

///let a=10;
//let b=5;
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
 
// {let a=5;
// let b=5;
// alert(10/2);
// }

//  {let n= prompt ("Digite um numero");
//let total=n/2;
//let resultado= total % 2 == 0 ? 'par' : 'impar';
//alert(n+"é" + resultado);
//  }

  const form= document.getElementById("form");
  const username= document.getElementById("Seu nome");
  const email= document.getElementById("E-mail");
  const password= document.getElementById("Senha");
  const passwordConfirmation= document.getElementById("Confirme sua senha");

  form.addEventListener("submit",(e)=>{e.preventDefault;checkInputs();});
  function checkInputs(){
      const usernameValue= username.value;
      const emailValue=email.value;
      const passwordValue=password.value;
      const passwordConfirmationValue=passwordConfirmation.value;
      if(usernameValue===""){
        setErrorFor(username,"O nome de usuário é obrigatório");
     }else{
         setSuccessFor(username);
   }
   if(emailValue===""){
       setErrorFor(email,"O email é obrigatório");
    }else{
        setSuccessFor(email);
  }
  if(passwordValue===""){
   setErrorFor(password,"A senha é obrigatório");
}else if(passwordValue.length<7){
    setErrorFor(password,"A senha precisa ter no minímo 7 caracteres");
    setSuccessFor(password);
}

  }
  if(passwordConfirmationValue===""){
 setErrorFor(passwordConfirmations,"As senhas precisam ser iguais");
}else if(passwordConfirmationValue.length<7){
  setErrorFor(passwordConfirmation,"As senhas não são iguais");
  setSuccessFor(passwordConfirmation);
}
{
const formControls= form.querySelectorAll(".form-control");
const formIsValid=[...formControls].every((formControls)=>{
return formControl.className==="form-control success";
 });
  if(formIsValid){
  console.log("O formulário passou no teste!");
  }
}

function setErrorFor(input,message){
  const formControl= input.parentElement;
  const small= formControl.querySelector("small");
  //Adiciona a mensagem de erro
  small.innerText=message;
  //Adiciona a classe de erro
  formControl.className="form-control error";
}

function setSuccessFor(input){
  const formControl=input.parentElement;
  //Adiciona a classe de sucesso
  formControl.className="form-control sucess";
}
function checkEmail(email){
  return/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);
}