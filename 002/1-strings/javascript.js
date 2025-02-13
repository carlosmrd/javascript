const string = "The revolution will not be televised.";
console.log(string);

//const badString1 = This is a test;
//const badString2 = 'This is a test;
//const badString3 = This is a test';
//Exemplos de strings incorretas. Resultam em erro.

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
//Qualquer uma das opçoes acima pode ser usada ao envelopar strings.

console.log(single);
console.log(double);
console.log(backtick);

//const badQuotes = 'This is not allowed!";
//O mesmo caractere deve ser usado no início e no fim do envelopamento.

let name = "Evelyn";
let greeting = `Hello, ${name}`;
console.log(greeting);
//Strings envelopadas em backticks são chamadas de template literal. Podem sem usadas em strings para envelopar outras strings.

const one = "Hello";
const two = "How are you?";
const joined = `${one}, ${name}. ${two}`
console.log(joined);
//O uso de strings em conjunto dessa forma é chamado de concatenation.

greeting = "Hello";
console.log(greeting + ", " + name);
//Pode-se usar esse método para concatenar strings que não são template literals.

console.log(`${greeting}, ${name}`);
//O uso do template literal pra concatenar strings normalmente resulta em códigos mais fáceis de ler.

const song = "Caramel Pain";
const score = 10;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%.`;
console.log(output);
//Pode-se incluir expressões em template literals.

let newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);
//Template literals respeitam quebras de linha no código fonte.

newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);
//Para quebras de linha em strings comuns, usa-se o \n.

//const badQuotes = "She said "I think so!"";
//Devido ao uso das aspas para envelopar strings, não se pode escrever aspas dentro delas dessa forma.

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1, goodQuotes2);
//Uma opção comum é o uso de outros envelopamentos diferentes dos utilizados dentro da string.

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);
//Outra opção é o uso de contrabarra. Em JavaScript ela faz com que os caracteres sejam reconhecidos como texto e não parte do código.

name = "Front ";
const number = 242;
console.log(name + number);
//Ao concatenar strings e números, o navegador converte o número em string e concatena ambas.

const numberString1 = "123";
const numberNumber1 = Number(numberString1);
console.log(typeof numberNumber1)
//A função Number() converte o que passa por ela em número, caso possível.

const numberNumber2 = 123;
const numberString2 = String(numberNumber2);
console.log(typeof numberString2)
//A função String() converte o que passa por ela em string.

