
// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"]

// let newArray = [...new Set(arr)];

// console.log(newArray);

// let newArray = arr => arr.filter((el, i)=> arr.indexOf(el) === i);
// console.log(newArray(arr));

// var deleteArr = ["php", "css", "script", "html"]


// function removeDuplicates(arr) {
// const newArr= [];
// for (var i = 0; i < arr.length; i++) {
//     // if (deleteArr.includes(arr[i])) {
//     //     arr.splice(i, 1);
//     // }
//     const arr2 = i % 2 === 0
// }

// }

// console.log(removeDuplicates())

///////////////////////////////////////////////////

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
///////////////////////////////////////////////////////////////////////////////

//task1
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария',
// 'Светлана', 'Артем', 'Глеб'];

// function shiftPeopleList() {
//   return peopleWaiting.shift();

// }

// console.log(shiftPeopleList(), shiftPeopleList(), shiftPeopleList());
// console.log(peopleWaiting)
// for( let i= 0; i = peopleWaiting.length; i++){
//     shiftPeopleList()
// }
// console.log(peopleWaiting)

//task2

// function getSumOfSequence (number){
//     let array = [];
//     for (let i = 1; i <= number; i++){
//          array.push(i)
//     }
//     return array[0] + array[array.length - 1]
// }

// console.log(getSumOfSequence(5))

//task3
// const coffees = ['Latte', 'Cappuccino', 'Americano'];//

// let coffeeName = prompt('Поиск кофе по названию:')
// coffeeName = coffeeName?.trim().toLowerCase();
// let incCoffe = coffees.findIndex(el =>el.toLowerCase() === coffeeName);

    
// if (coffees[incCoffe]) {
//     alert(`Держите ваш любимый кофе ${coffeeName}`)
// } else {
//     alert('К сожалению, такого вида кофе нет в наличии')
// }



//task 4
let coffees = ['Latte', 'Cappuccino', 'Americano'];//
let prices = [1.5, 1, 2];
let updatedPrices = prices.map((el) => el + 0.5);//

coffees.forEach((name, index) => {
    coffees[name] = updatedPrices[index];

    alert(`“Кофе ${coffees[index]} сейчас стоит ${updatedPrices[index]} евро`)
})

//task 5

let clientsEstimations = [];

function askClientToGiveEstimation () {
 const reviews = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
 if (reviews >= 1 && reviews <= 10){
    clientsEstimations.push(reviews)
 } else {
    alert('введите число от 1 до 10')
 }
}

for (let i = 0; i < 5; i++) {
   askClientToGiveEstimation()
}



let goodEstimations = clientsEstimations.filter(num => num > 5);
let notGoodEstimations = clientsEstimations.filter(num => num <= 5);
console.log('больше 5', goodEstimations)
console.log('меньше 5', notGoodEstimations)
alert(`Всего положительных оценок: ${goodEstimations}, Всего отрицательных оценок: ${notGoodEstimations}`)