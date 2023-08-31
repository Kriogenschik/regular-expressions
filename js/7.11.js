//task1
//проверит, является ли строка MAC-адресом

let regexp = /^([0-9a-f]{2}:){5}[0-9a-f]{2}$/gi;

alert( regexp.test('01:32:54:67:89:AB') ); // true

alert( regexp.test('0132546789AB') ); // false (нет двоеточий)


//task2
//соответствует цветам в формате #abc или #abcdef

let regexp2 = /#([0-9a-f]{3}){1,2}\b/gi;

let str2 = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert( str2.match(regexp2) );

//task3
// ищет любые десятичные числа, включая целочисленные, с плавающей точкой и отрицательные.
let regexp3 = /-?\d+(\.\d+)?/g;

let str3 = "-1.5 0 2 -123.4.";

alert( str3.match(regexp3) );

//task4
//функция parse(expr), которая принимает выражение и возвращает массив из трёх элементов:

function parse(expr) {
	let result = expr.match( /(-?\d+(?:\.\d+)?)\s*([-+/*])\s*(-?\d+(?:\.\d+)?)/ );
	result.shift();
	return result;
}

alert( parse("-1.23 * 3.45") );