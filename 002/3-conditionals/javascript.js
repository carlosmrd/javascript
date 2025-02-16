console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true
//Em JavaScript comparações matemáticas são escritas da seguinte forma:
//Maior/Menor que: a > b, a < b.
//Maior/Menor que ou igual: a >= b, a <= b.
//Igual: a == b. Importante o uso de dois sinais de igual em ==, que faz referência a teste de equalidade. O uso de um = faz referência a uma atribuição.
//Não igual: a != b.
//O resultado das comparações é sempre um valor booleano, true ou false.

let result = 5 > 4;
console.log(result); //true
//A comparação pode ser atribuída a uma variável.

console.log('Z' > 'A');//true
console.log('Glow' > 'Glee');//true
console.log('Bee' > 'Be');//true
//Strings são comparadas letra por letra e organizadas entre maior e menor pela ordem lexicografica dos caracteres. Por exemplo, na comparação entre Glow e Glee, G é igual a G, l é igual a l, o é maior que e, portanto Glow é maior que Glee.

console.log('2' > 1);//true
console.log('01' == 1)//true
//No caso de comparação entre string e número, a string é convertida em número. No caso de uso de valores booleanos dentro das comparações, true é considerado 1 e false é considerado 0.

console.log(0 == false);//true
//A comparação de equalidade == não diferencia 0 de false.

console.log(0 === false);//false
//A comparação de equalidade estrita diferencia 0 de false. Isso acontece porque ela compara o valor e o tipo dos parâmetros. Existe também uma comparação de falsa equalidade estrita ==!.

console.log(null == undefined);//true
console.log(null === undefined);//false
//Comparações com null e undefined se comportam da seguinte forma:
//Em comparação de equalidade ambos possuem o mesmo valor, diferente de qualquer outro parâmetro em JavaScript.
//Em comparação de equalidade estrita apesar de ter o mesmo valor, os tipos são diferentes.

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
//Comparações entre null e 0 retornam valores matematicamente confusos. Dentro de uma comparação, null é convertido em número, mas dentro de uma verificação de equalidade não.

console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined == 0);//false
//O valor undefined não deve ser usado em comparação. Dentro de comparações com números, o undefined é convertido para NaN é difere de qualquer valor numérico, retornando false em todas as comparações. Dentro de verificações de equalidade, o undefined só é igual a null, e portanto também difere de 0.

//Exerício
console.log(5 > 4);//true
console.log("apple" > "pineapple");//false
console.log("2" > "12");//true
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(null == "\n0\n");//false
console.log(null === +"\n0\n");//false

const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
if (hour < 18) {
    greeting = "Good day";
}
console.log(greeting);
//A declaração 'if' especifica um bloco de código a ser executado se uma condição for cumprida.

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
//A declaração 'else' especifica um bloco de código a ser executado se uma condição não for cumprida.

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
//A declaração 'if else' especifica uma nova condição caso a primeira seja falsa.

