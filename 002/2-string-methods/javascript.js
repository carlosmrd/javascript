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

let text1 = "Hello, World!";
let text2 = text1.toUpperCase();
console.log(text2);
//toUpperCase() converte uma string para letras maíusculas.

text2 = text1.toLowerCase();
console.log(text2);
//toLowerCase() converte uma string para letras minúsculas.

text1 = "Hello,";
text2 = "World!";
let text3 = text1.concat(" ", text2);
console.log(text3);
//O método concat() junta duas ou mais strings.

text = text1 + " " + text2;
console.log(text);
text = text1.concat(" ", text2);
console.log(text);
//Pode ser o usado o concat() ou o operador +. Ambas as linhas acima produzem o mesmo resultado.

text1 = "   Hello, World!   ";
text2 = text1.trim();
console.log(text2);
//O método trim() remove espaços em branco no início e no final da string.

text2 = text1.trimStart();
console.log(text2);
//O método trimStart() remove espaços em branco no início da string.

text2 = text1.trimEnd();
console.log(text2);
//O método trimEnd() remove espaços em branco no final da string.

text = "5"
let padded = text.padStart(4,"0");
console.log(padded);
//O método padStart() completa uma string com um carctere especificado no início até que ela atinga um certo tamanho. Nesse exemplo, ela completa a string com o caractere 0 até que ela tenha 4 caracteres.

text = "5"
padded = text.padEnd(4,"x");
console.log(padded);
//O método padEnd() completa uma string com um carctere especificado no final até que ela atinga um certo tamanho. Nesse exemplo, ela completa a string com o caractere x até que ela tenha 4 caracteres.

let numb= 5;
text = numb.toString();
padded = text.padStart(4,"x");
console.log(padded);
//Os métodos padStart() e padEnd() só funcionam com strings. Para uso de números, é necessário convertê-los para string primeiro.

text = "Hello world!";
let result = text.repeat(3);
console.log(result);
//A string repeat() retora uma nova string com cópias da string original. O parâmetro count dentro da sintaxe string.repeat(count) define o número de cópias.

text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)
//O método replace() retorna uma string com parte da string original substituida. Por padrão ele substitui somente o primeiro resultado encontrado e é sensível a caracteres maiúsculos ou minúsculos.

text = "Please visit Microsoft, and also Microsoft!";
newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText)
//A flag /g faz com que todos os resultados sejam substituídos.

text = "Please visit Microsoft!";
newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText)
//A flag /i faz com que o método não seja sensível a caracteres maiúsculos ou minúsculos.

text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);
//O método replaceAll() substitui expressões regulares, ao invés de substituir a string. Se o parâmetro for uma expressão regular, a flag /g deve ser utilizada.

