//Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
const toUpperCase = (str) => {
  return str.toUpperCase();
};
var palavra = "agronorte";
var palavraMaiúscula = toUpperCase(palavra);
console.log(palavraMaiúscula);

//Escreva uma função que recebe duas strings como argumento e concatena-as em uma única string com um espaço entre elas.
const concatStrings = (str1, str2) => {
  return `${str1}${str2}`;
};
var string1 = "Agronorte";
var string2 = "Nutrição";
var resultado = concatStrings(string1, string2);
console.log(resultado);


//Crie uma função que recebe uma string como argumento e retorna o número de caracteres nessa string.
const numberString = (str) => {
return str.length
};

var texto = "Agronorte";
var numeroDeCaracteres = numberString(texto);
console.log(numeroDeCaracteres);


//Crie uma função que receba uma palavra, e uma frase. Você deve verificar se existe esta palavra nesta frase e retornar true ou false.
const existKeyword = (keyword, str) => {
var palavras = str.split(' ');
return palavras.includes(keyword);
};

var frase = "Bandeira do Brasil";
var palavraChave = "Bandeira";
var resultado = existKeyword(palavraChave, frase);
console.log(resultado);

//Escreva uma função que recebe um array de números como argumento e retorna a soma de todos os números no array.
const sumAllItemsInArray = (arr) => {
return arr.reduce((total, currentValue) => total + currentValue, 0);
};
var numeros = [10, 10, 10];
var resultado = sumAllItemsInArray(numeros);
console.log(resultado);


//Você receberá uma lista com nomes de usuarios, verifique se um usuario existe neste array e retorne true ou false.
const verifyUserInArray = (strArr, str) => {
return strArr.includes(str);
};

var nomes = ["Julio", "Kallew", "Vinicius"];
var usuario = "Julio";
var resultado = verifyUserInArray(nomes, usuario);
console.log(resultado);


//Escreva uma função que recebe dois números como argumento e retorna a soma deles.
const sumNumber = (num1, num2) => {
return num1 + num2;
};

var numero1 = 5
var numero2 = 5
var sum = sumNumber(numero1, numero2);
console.log(sum);


//Crie uma função que recebe um número como argumento e verifica se ele é par ou ímpar retornando  a string "par" ou "impar"
const verifyNumberIsPairOrOdd = (num) => {
if (num % 2 === 0) {
return "par";
} else {
return "impar";
}
};

var impar = 5;
var par = 2;
var resultadoImpar = verifyNumberIsPairOrOdd(impar);
var resultadoPar = verifyNumberIsPairOrOdd(par);
console.log(resultadoImpar);
console.log(resultadoPar);



module.exports = {
toUpperCase,
concatStrings,
numberString,
existKeyword,
sumAllItemsInArray,
verifyUserInArray,
sumNumber,
verifyNumberIsPairOrOdd,
};