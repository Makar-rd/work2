// 2-2 задание
console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // неявное
console.log('50');
//2
console.log(Number('100')); // явное
//3
console.log('' + 1);// неявное
console.log(1);
//4
console.log(String(1)); // явное
//5
console.log(Boolean(0));// явное
//6
console.log(+'001');// неявное
console.log('001')
//7
console.log(1 + '');// неявное
console.log(1)
//8
console.log(Boolean(1));// явное
//9
console.log(String(001)); // явное
//10
console.log(Number('Hello World')) // явное

//////////////////////////////////////
// задание 2-3

const obj = { name: 'Maxim' };
console.log(Number(obj), Boolean(obj), String(obj));

const symbol1 = Symbol('key');

const num = Number;
console.log(Number(num), Boolean(num), String(num));
// const symbol = ";

const number = 0;
console.log(Number(number), Boolean(number), String(number));
const negativeNumber = -10;
console.log(Number(negativeNumber), Boolean(negativeNumber), String(negativeNumber));
const negativeNumber2 = '-105';
console.log(Number(negativeNumber2), Boolean(negativeNumber2), String(negativeNumber2));

///////////////////////////////////
// задание 2-4 

// 1
console.log(Number(' 1 2 3 4 5')); //-
// 2
console.log(Number('1234 5'));// +
// 3
console.log(Number('12345'));// + 
// 4
console.log(String(false));// -
// 5
console.log(Boolean(0000000));// +
// 6
console.log(Boolean(0.0000001));//+
// 7
console.log(String(undefined));// +
// 8
console.log(Number('100f'));// +
// 9
console.log(Number('100'));// +
// 10
console.log(Number('000001'))//+