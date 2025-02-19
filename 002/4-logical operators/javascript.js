//Existem 4 operadores lógicos em JavaScript: || (OR), $$ (AND), ! (NOT), ?? (Nullish Coalescing).

console.log(true || true);// true
console.log(false || true);// true
console.log(true || false);// true
console.log(false || false);// false
//Em programação, a lógica OR serve para manipular valores booleanos, se um dos argumentos for true, ele retorna true. Caso contrário o retorno é false. No JavaScript, o retorno é sempre true, exceto no caso de ambos os argumentos serem false.

if (1 || 0) {
    console.log("True!");
}
//No caso de argumentos que não sejam booleanos, eles são convertidos primeiro. Como 1 equivale a true e 0 equivale a false, a declaração if retorna um valor, já que (1 || 0) resulta em true.

let hour = 9;
if (hour < 10 || hour > 18) {
    console.log("The office is closed.")
} else {
    console.log("The office is open.")
}
//Nesse caso, como a variável 9 é menor que 10, o valor do primeiro parâmetro dentro do if é true, e como a variável 9 é menor que 18, o valor é false. Como um dos parâmetros é true, a declaração if retorna o valor designado a ela.

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(null || 1 || 0); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)
//No caso de múltiplos operandos, o operador OR faz as verificações da esquerda para a direita e rertorna o primeiro valor que resulta em true (após conversão, se necessário), ou o último valor, caso todos resultem em false.

let firstName = "";
let lastName = "";
let nickName = "Biboo";
console.log(firstName || lastName || nickName || "Anonymous");
//Nesse exemplo, existem três variáveis opcionais: firstName, lastName e nickName. O operador OR vai retornar o primeiro que tiver um valor true (nickName, já que as demais são undefined). Caso nickName também não possuísse um valor verdadeiro, o operador retornaria a string "Anonymous".

true || console.log("not printed.");
false || console.log("printed.");
//Esse é um exemplo de short-circuit evaluation. O operador OR só processa argumentos até encontrar um valor true. Isso é importante no caso de uma expressão sendo usada como valor. Da forma apresentada acima, como o primeiro operando da primeira expressão é true, o operador OR o encontra e não processa a função a seguir.

console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false
//O operador AND em programação retorna true se ambos operandos forem verdadeiro, e false caso não.

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    console.log("Agora são 12:30");
}
//Exemplo com if. Como ambos os valores são verdadeiros a declaração if retorna um valor.

console.log(1 && 0);//0
console.log(1 && 5);//5
console.log(1 && 0 && 5);//0
console.log(1 && 2 && null && 3);//null
console.log(1 && 2 && 3);//null
//De forma similar, porém oposta ao OR, o operador AND verifica os operandos da esquerda para a direita e retorna o primeiro valor falso que encontrar, ou o último valor verificado caso todos os operandos sejam verdadeiros.

//O operador AND tem maior precedência que o operador OR. Por exemplo, no código a && b || c && d; os operadores AND funcionam de forma similar a parênteses, dessa forma: (a && b) || (c && d);