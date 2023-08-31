//task1
// ищет только неотрицательные числа.
let regexp = /\b(?<!-)\d+/g;

let str = "0 12 -5 123 -18";

alert( str.match(regexp) );

//task2

// вставляет <h2>Hello</h2> сразу же после тега <body>

let str2 = '...<body style="...">...';
str2 = str2.replace(/<body.*?>/, '$&<h2>Hello</h2>');

alert(str2);