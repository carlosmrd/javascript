let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lenght = text.length;
console.log(lenght);
//A propriedade lenght reorna o tamanho em caracteres de uma string como número.

text = "Hello, World.";
let char = text.charAt(7);
console.log(char);
//Existem 4 métodos de extrair caracteres de strings. O método charAt() retorna o caractere na posição especificada dentro de uma string. A contagem dos caracteres em JavaScript começa em 0.

char = text.charCodeAt(7);
console.log(char);
//O método charAt() retorna o código UTF-16 correspondente ao caractere na posição especificada dentro de uma string.

let name = "Evelyn";
let letter = name.at(2);
console.log(letter);

letter = name[2];
console.log(letter);
//O método at() retorna o caractere na posição especificada dentro de uma string, assim como o charAt(), mas é mais recente. Ele apresenta vantagens em relação aos charAt() e é suportado por todos os navegadores modernos de Março de 2022 em diante.

char = text[0];
console.log(char);
//Property access might be a little unpredictable: It makes strings look like arrays (but they are not). If no character is found, [ ] returns undefined, while charAt() returns an empty string. It is read only. str[0] = "A" gives no error (but does not work!).

text = "Apple, banana, kiwi";
let part = text.slice(7, 13);
console.log(part);
//Existem 3 métodos para extrair partes de Strings. O método slice() extrai uma parte de uma string especificando a posição dos caracteres iniciais e finais e retorna em uma nova string.

part = text.slice(7,);
console.log(part);
//Se o segundo parâmetro for omitido, todo o restante da string será extraído.

part = text.slice(-12);
console.log(part);
//Se o parâmetro for negativo, a contagem começa no final da string.

part = text.slice(-12, -6)
console.log(part);
//Exemplo de slice usando somente parâmetros negativos.

part = text.substr(7, 6);
console.log(part)
//O método substr() é similar ao slice(), mas o segundo parâmetro especifica o tamanho da parte extraída. Esse é um método preterido, usado apenas para compatibilidade com navegadores antigos.

part = text.substr(7);
console.log(part)
//Se o segundo parâmetro for omitido, todo o restante da string será extraído.

part = text.substr(-4);
console.log(part)
//Se o parâmetro for negativo, a contagem começa no final da string.