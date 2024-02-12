/* Напишите функцию getMax(fn, num), которая принимает функцию и число num. Функция getMax должна возвращать функцию,
 которая при каждом вызове увеличивает свой внутренний счетчик (counter++). Если счетчик больше числа num, 
 внутренняя функция должна возвращать строку «Максимум!», */

// function add(a,b){
//     return a+b
// }

// function getMax(fn, num) {	
// let counter = 0;
// return function (){
//   counter ++;
// if (counter > num){
//     return 'Максимум!'
// }
// return fn.apply(this, arguments)
// }

// }


// var addOnlyThreeTimes = getMax(add, 3);
// console.log(addOnlyThreeTimes(1,2)) // 3
// console.log(addOnlyThreeTimes(2,2)) // 4
// console.log(addOnlyThreeTimes(1,2)) // 3
// console.log(addOnlyThreeTimes(1,2)) // "Максимум!"

////////////////////////////////////////////////////////////////////
///1 task

let student = {
	stack: ['HTML'],
  level: 1,
  improveLevel(){
  	this.level++;
    
    switch(this.level) {
    case 2:
    		this.stack.push('css');
        break;
    case 3:
        this.stack.push('JavaScript');
        break;
    case 4:
        this.stack.push('React');
        break;
    case 5:
        this.stack.push('NodeJS');
        break;
    default:
    if(this.level > 5) {
    console.log('Студент выучил все технологии!')
    }
    }
    return this
  }
  
}

console.log(student.improveLevel().improveLevel().improveLevel())

/////////////////

//task 2

const dog = {
name: 'Чарли',
type: 'Собака',
makeSound() {
return 'Гав-Гав';
}
}

const bird = {
name: 'Петя',
type: 'Воробей',
makeSound() {
return 'Чик-чирик';
}
}

function makeDomestic(isDomestic){
	
	console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`) 
 return {
 	...this,isDomestic
 }
}

const dog2 = makeDomestic.bind(dog, true);
console.log(dog2())
console.log(makeDomestic.apply(bird, [true]))
console.log(makeDomestic.call(bird, true))

///////////////////////////////////////////

// task 3

const footballer = {
fullName: 'Cristiano Ronaldo',
attack() {
console.log(`${this.fullName} сейчас с мячом и начинает
атаку!`);
},
scoreGoal(sound) {
console.log(`${this.fullName} забил гол! Вот это да!`);
this.celebrate(sound);
},
celebrate(sound) {
console.log(sound);
},
goToSubstitution: function(newPlayer) {
console.log(`${this.fullName} уходит на замену. На поле
выходит ${newPlayer}`);
}
};
const attack = footballer.attack.bind(footballer)();
const score = footballer.scoreGoal.call(footballer, 'Сиииии');
const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);
console.log('attaka1', attack());
console.log('SCORE',score());
console.log('3 function',substitute());

///////////////////////////

// dop task 
const attacker = {
archer: 30,
footSoldier: 55,
cavalry: 10,
artillery: 3,

checkChancesToWin(defenderObject) {
	const attackerValues = Object.values(this);
  const dafenderValues = Object.values(defenderObject);
  let archerCounter = 0;
  attackerValues.forEach((value, index) => {
  if(value > dafenderValues[index]) {
  	archerCounter++
  }
  })
  return [archerCounter, dafenderValues.lenght]
},

improveArmy() {
	Object.entries(this).forEach( el => {
  	const key = el[0];
    const value = el[1];
    this[key] = value + 5;
  })
},

attack(defender){
const change = this.checkChancesToWin(defender) ;
const ourArmyChances = change[0];
const maximumChances = Math.round(change[1]* 70 / 100);
	if(ourArmyChances < maximumChances){
  console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}`)
  	this.improveArmy() 
  } else {
  	console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
  }
  console.log(this)
}
 
}

const defender = {
archer: 33,
footSoldier: 50,
cavalry: 40,
artillery: 10,
}

console.log(attacker.attack(defender))