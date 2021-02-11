var message = "Help me, Obi-Wan Kenobi. You're my only hope";
console.log(message);
var episode = 4;
//episode = '4' // Por padrao ele assume o comportamento do javascript e torna string. assim ele concatenara em caso de um + adiante
console.log("This is episode " + 4);
episode = episode + 1;
console.log("This is episode " + episode);
var nome;
nome = 'Marcio';
nome = 8;
console.log("o nome e: " + nome); //any aceita mudar igual a var em javascript
//Funcoes
var ehMaiorDeIdade = function (idade) {
    return idade > 17;
};
var idade = 15;
//Atenção. Perceba abaixo a Template String e não é aspas simples e sim o simbolo da crase. Permite utilizar expressoes ${}
console.log("Diga, " + idade + " anos \u00E9 maior de idade? " + (ehMaiorDeIdade(idade) ? ' Sim' : 'Não'));
