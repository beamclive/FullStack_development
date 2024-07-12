
var peso;
var altura;
var imc; 
var resultado; 

function calcular(event){
    event.preventDefault(); 

    peso = document.getElementById('peso').value; 
    altura = document.getElementById('altura').value; 

    imc = peso / (altura * altura); 

    resultado = document.getElementById('resultado'); 

    if(imc < 17){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuiado, você está muito abaixo do peso'
    } else if (imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuiado, você está abaixo do peso'
    } else if (imc > 18.49 && imc <= 24.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Você está no peso ideal'
    } else if (imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuiado, você está acima do peso'
    } else if (imc >= 30){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuiado, obesidade'
    }

    document.getElementById('peso').value = ''; 
    document.getElementById('altura').value = ''; 
}


/* 
event.preventDefault(); - impede que a ação padrão do navegador de limpar as informações do formulario ocorra.
toFixed(2) - informa a quantidade de casas decimais depois da ,
*/