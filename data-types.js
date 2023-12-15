//1-1 задание
const age = 23;
const name = 'Mark';
const bool = true;
const nul = null;
const und = undefined;
const obj = {car: "audi"};
const bigInt = 566749n;
const id = Symbol('id');

console.log('age', age, typeof age)
console.log('name', name, typeof name)
console.log('bool', bool, typeof bool)
console.log('nul', nul, typeof nul)
console.log('und', und, typeof und)
console.log('obj', obj, typeof obj)
console.log('bigInt', bigInt, typeof bigInt)
console.log('id', id, typeof id)
///////////////////////////////////////////////////

//1-3 задание

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log('ageOfPerson1', typeof ageOfPerson2)

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log('nameOfAnimal1', typeof nameOfAnima2)

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log("Переменную c const переопределить нельзя")
console.log("bestProgrammingLanguage1, bestProgrammingLanguage2", typeof bestProgrammingLanguage1, typeof bestProgrammingLanguage2)


let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log('initialValue1', typeof initialValue2)

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log("var является устаревшим")
console.log("isJavaScriptProgrammer1", typeof isJavaScriptProgrammer2)


let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log('helloText1', typeof helloText2)
//////////////////////////////////////////////////////////////////////////



