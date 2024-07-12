/*
// while
var x = 5;

while(x < 10){
    document.write("<br> O valor de X é: " + x);

    x++
}

// for
var valor = 10;

for (a =0; a < valor; a++){
document.write("<br> Valor de A é: " + a); 

}

*/ 

// switch 

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4"); 

    switch(Number(valor)){
        case 1: 
            alert("Você escolheu: 1 - Suco"); 
            break; 
        case 2:
            alert("Você escolheu: 2 - Agua gelada");
            break; 
        case 3:
            alert("Você escolheu: 3 - Sorvete");
            break;
        case 4:
            alert("Você chamou o garçom!"); 
            break; 
        default:
            alert("Escolha uma opção entre 1 e 4"); 
            break; 
    }

}