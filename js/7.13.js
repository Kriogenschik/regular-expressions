//task1
let regexp = /JavaScript|Java|PHP|C\+\+|C/g;

alert("Java JavaScript PHP C++ C".match(regexp));

//task2
//Найдите пары BB-кодов

let regexp2 = /\[(b|url|quote)].+?\[\/\1]/gs;

let str2 = `
[b]привет![/b]
[quote]
	[url]http://test.com[/url]
[/quote]
`;
alert( str2.match(regexp2) );

//task3
//Найдите строки в кавычках
let regexp3 = /"(\\.|[^"\\])*"/g;
let str3 = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

alert( str3.match(regexp3) );

//task4
// ищет тег <style...>

let regexp4 = /<style(>|\s.*?>)/g;

alert( '<style> <styler> <style test="...">'.match(regexp4) );