
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
// let coffees = ['Latte', 'Cappuccino', 'Americano'];//
// let prices = [1.5, 1, 2];
// let updatedPrices = prices.map((el) => el + 0.5);//

// coffees.forEach((name, index) => {
//     coffees[name] = updatedPrices[index];

//     alert(`“Кофе ${coffees[index]} сейчас стоит ${updatedPrices[index]} евро`)
// })

//task 5

// let clientsEstimations = [];

// function askClientToGiveEstimation () {
//  const reviews = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
//  if (reviews >= 1 && reviews <= 10){
//     clientsEstimations.push(reviews)
//  } else {
//     alert('введите число от 1 до 10')
//  }
// }

// for (let i = 0; i < 5; i++) {
//    askClientToGiveEstimation()
// }

// let goodEstimations = clientsEstimations.filter(num => num > 5);
// let notGoodEstimations = clientsEstimations.filter(num => num <= 5);
// console.log('больше 5', goodEstimations)
// console.log('меньше 5', notGoodEstimations)
// alert(`Всего положительных оценок: ${goodEstimations}, Всего отрицательных оценок: ${notGoodEstimations}`)


//task 6 

// let numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0

// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i] ** 3
// }
// console.log(sum)

// numbers.forEach((i) => { 
//     sum += i **3

// })
// console.log(sum)


// for (let number of numbers) {
//     sum += number ** 3
// }
// console.log(sum)

// let result = numbers.reduce( (i, number) => i + number ** 3);
// console.log(result)

//class work
const goals = [8, 1, 1, 3, 2, -1, 5];


let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberGoals = goals[0];
goals.forEach((golNumber, i) => {
    if (golNumber > maxNumberOfGoals) {
        maxNumberOfGoals = golNumber;
        maxNumberOfGoalsIndex = i;
    } 

    if ( golNumber < minNumberGoals && golNumber >= 0){
        minNumberGoals = golNumber;
    }
})

console.log(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}, В нем было забито ${maxNumberOfGoals} гол(ов) `);


const matchVithMinNumberOfGoals = goals.map((golNumber, i) =>  golNumber === minNumberGoals ? i + 1 : -1 ).filter(  el => el > 0).join(', ');

console.log('min gol', matchVithMinNumberOfGoals)
console.log(`Самые нерезультативные матчи были под номерами ${matchVithMinNumberOfGoals}. В каждом из них было забито по ${minNumberGoals} мячу(а).`)


let sumGoals = goals.reduce((sum, i) => sum + i, 0);
console.log(`Общее количество голов за сезон равно ${sumGoals}`);


for(let i = 0; i < goals.length; i++) {
   if (goals[i] <= 0) {
    console.log(`Были автоматические поражения: да`)
    } else {
    console.log(`Были автоматические поражения: нет`)
    }
}
 

const numberOfGoals = Math.round(sumGoals / goals.length);
console.log(`Среднее количество голов за матч равно ${numberOfGoals}`)

 goals.sort( (a, b) => a - b)

 console.log(goals)