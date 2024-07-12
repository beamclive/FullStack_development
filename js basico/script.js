var area = document.getElementById('area')

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome== '' || nome == null){
        alert("Algo deu errado");
        area.innerHTML = "Clique no botao para acessar..."
    }else {
        area.innerHTML = "Bem vindo, " + nome + " ";

        // let cria a variavel só no escopo do bloco
        let botaosair = document.createElement("button");
        botaosair.innerText = "Sair"; 
        botaosair.onclick = sair; 

        // insere um elemento filho dentro de outro elemento HTML já existente
        area.appendChild(botaosair); 
    }

}

function sair(){
    alert("Até mais");
    area.innerHTML = "Você saiu"
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2; 

    if(media >= 6){
        console.log("Aluno aprovado com a média " + media)
    }else if(media < 6){
        console.log("Aluno reprovado com a média " + media)
    }

}

function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso; 

    console.log(mensagem); 
}






/* 

innerText - manipula o texto visível, ignorando elementos HTML
innerHTML - lida com todo o conteúdo HTML dentro de um elemento, incluindo tags e texto
var lista = ['bia', 'lucas', 'jose', 150]; - cria lista
lista[2]; - ve o conteudo da posição 
lista.indexOf('jose') - procura o conteudo na lista e apresenta a posição 
lista.push('matheus') - inclui novo conteudo
lista.shift(); - remove o primeiro 
lista.pop(); - remove o ultimo 
lista.join('; '); - muda o formato de separação dos conteudos exibido, mas não altera a lista 
var data = new date(); - data atual 
data.getHours(); - pega apenas a hora 
minutes (minuto), seconds (segundos), miliseconds (milisegundos)
ata.getDate(); - pega o dia da data 
data.getMonth(); - pega  mes, porém sempre será apresentado um a menos pois o js começa no 0. 
data.getDay(); - pega o dia da semana, também apresenta um a menos 
datanova.getFullYear(); - ano 
datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear(); - formatando data 
datanova.setDate(datanova.getDate()+5) - soma qtd de dias no date
dias['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
dias[datanova.getDay()]; - apresenta os dias da semana em nome reconhecneod pela posição do array

*/

