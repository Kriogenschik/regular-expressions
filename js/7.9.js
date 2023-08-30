// task1
//Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).

let regexp = /\.{3,}/g;
alert( "Привет!... Как дела?.....".match(regexp) );

//task2
//ищет HTML-цвета в формате #ABCDEF

let regexp2 = /#[a-f0-9]{6}\b/gi

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

alert( str.match(regexp2) );
