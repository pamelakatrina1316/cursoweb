var dots= document.querySelector(".dots");
var quantidade= document.querySelectorAll(".slides .images");
var atual=0;
var imagem= document.getElementById("atual");
var próximo= document.getElementById("próximo");
var voltar= document.getElementById("voltar");

for(let i=0;i < quantidade.length; i++){
    var div= document.createElement("div");
    div.id= i;
    dots.appendChild(div);
}
document.getElementById("0").classList.add("imgAtual");
var pos= document.querySelectorAll(".dots div");
for (let i=0; i < pos.length; i++){
pos[i].addEventListener("click",function (){
    atual = pos[i];
    slide();

});
}
voltar.addEventListener("click",() => {
    atual--;
    slide();
});

próximo.addEventListener("click",() => {
    atual++;
    slide();
});
function slide(){
    if(atual >= quantidade.length){
        atual=0;
    } else if (atual < 0){
        atual=quantidade.length;
    }
    document.querySelector(".imgAtual").classList.remove(".imgAtual");
    imagem.style.marginLeft= -1024 * atual + "px";
    document.getElementById("atual").classList.add("imgAtual");
}

