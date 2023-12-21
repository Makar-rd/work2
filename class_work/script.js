const javaScriptDescription = `JavaScript —
мультипарадигменный язык программирования. Поддерживает
объектно-ориентированный, императивный и функциональный стили.
Является реализацией спецификации ECMAScript. JavaScript обычно
используется как встраиваемый язык для программного доступа к объектам приложений.`

const halfOfTheLine = javaScriptDescription.length -1;
console.log(halfOfTheLine)

const math = Math.floor(halfOfTheLine / 2);
const slice = javaScriptDescription.slice(0, math).replaceAll('а', 'A').replaceAll(' ', '').repeat(3)
console.log(slice)
const halfOfTheLine2 = Math.floor((slice.length -1) / 2)
console.log(halfOfTheLine2)
const symbol =slice.charAt(halfOfTheLine2 + 1)
console.log('символ:', symbol)