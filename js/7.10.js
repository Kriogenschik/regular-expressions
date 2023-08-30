//task2
//Найти все HTML-комментарии в тексте

let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert( str.match(regexp) );

//task3
// найти все (открывающие и закрывающие) HTML-теги с их атрибутами.

let regexp2 = /<[^>]+>/g;

let str2 = '<> <a href="/"> <input type="radio" checked> <b>';

alert( str2.match(regexp2) );