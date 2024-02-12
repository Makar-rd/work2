//class work
// let cat = {}

// cat.name = 'murka';
// cat.laps = 4;
// cat.color = 'Черепаховый';
// cat['full name']= 'Мурка Филомена Уси-Пусечка';

// console.log(cat)
// console.log(cat['full name'])


// const kitten = Object.create(cat)

// console.log('kitten', kitten.name)

// console.log(cat.name === kitten.name)

/// home work

//1 task

// const users = [
//     {
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//     },
//     {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//     },
//     {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//     }
//     ]

//     const onlineUsers = users.filter(user => user.status === 'online');
//     console.log(onlineUsers)

//     const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

//     console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)


// 2task

// function giveTalonsInOrder(patients, orders){
// const patientsInfo = patients.reduce((acc, person) => {
//     acc[person.id] = person
//     return acc
// }, {})
// return orders.map(el => patientsInfo[el])

// }

// const ordersArr = [4, 2, 1, 3];
// const people = [
// { id: 1, name: "Максим" },
// { id: 2, name: "Николай" },
// { id: 3, name: "Ангелина" },
// { id: 4, name: "Виталий" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);

// 3 task

// function handleObject (obj, key, action){
    // if(action === 'get'){
    //   return key in obj // Возвращаем значение ключа
    // }

    // if(action === 'add'){
    //     obj[key] = ''; // Добавить новый ключ и присвоить ему пустую строку
    //     return obj
    // }

    // if(action === 'delete'){
    //     delete obj[key];  // Удаляем свойство key из объекта
    //     return obj
    // }
//     switch (action) {
//         case 'get':
//             return key in obj;
//         case 'add':
//             obj[key] = '';
//             return obj;
//         case 'delete':
//             delete obj[key];
//             return obj;
//             default: 
//             return obj;
//     }

// }

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
//     }

//     const result = handleObject(student, 'programmingLanguage',
//     'delete');

//     console.log('result', result)

    // task 4

// function giveJobToStudent (student, jobName){
//     console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
//     return {...student, job: jobName}
// }

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//     }
//     const updatedStudent = giveJobToStudent(student,
//     'веб-разработчик');
//     console.log(updatedStudent)
//////////////////////////////////////////////////////////
// доп задания
// 1 задание

// const groceries = {
//     "Orange Juice": {
//     price : 1.5,
//     discount: 10,
//     },
//     "Chocolate": {
//     price : 2,
//     discount : 0,
//     },
//     // more items...
//     }

// function getTotalPriceOfShoppingBag(shoppingBag){
//     if(shoppingBag.length === 0){
//         return 0
//     }
//     const totalPrice = shoppingBag.reduce((acc, {product, quantity}) => {
//         if(!groceries[product]){
//             return acc
//         }
//         const {price, discount} = groceries[product];
//         const priceDiscount = price - (price / 100) * discount;
//         return acc + priceDiscount * quantity
//     }, 0)
        
//         return Number(totalPrice.toFixed(2))
// }

// const shoppingBag = [
//     { product: 'Chocolate', quantity: 3 },
//     { product: 'Orange Juice', quantity: 23 },
//     ]
//     const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
//     console.log('totalPrice', totalPrice); // Возвращает 37.05

// 2 dop task

// const hero = {
//     name: 'Batman',
//     health: 100,
//     heatEnemy: enemy => enemy.health -= 10
//     }
    
//     const enemy = {
//     name: 'Joker',
//     health: 100,
//     heatHero: hero => hero.health -= 10
//     }

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     }


// function startGame(heroPlayer, enemyPlayer){
//     while(heroPlayer.health > 0 || enemyPlayer.health > 0) {
//         const random = getRandomNumberInRange(0, 1);
//         if(random === 0) {
//             heroPlayer.heatEnemy(enemyPlayer);
//             if(enemyPlayer.health <= 0) {
//                 break
//             }} else {
//                 enemyPlayer.heatHero(heroPlayer);
//                 if(heroPlayer.health <= 0) {
//                     break
//                 }
//             }

//     } 
//     if(heroPlayer.health <= 0) {
//         console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
//     }else {
//        console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
//     }
// }

//     startGame(hero, enemy)
//     console.log('hero',hero)
//     console.log('enemy',enemy)

/// 3 dop task
// function getKiller(suspectInfo, deadPeople){
//     let killerName = '';
//     Object.entries(suspectInfo).forEach(([killer, arr]) => {
//         const allDeadPeople = deadPeople.every(el => arr.includes(el));
//     if (allDeadPeople) {
//             killerName = ` killer he is ${killer}`;
//         }
//     })
// return killerName
// }

// console.log(getKiller(
//     {
//     'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//     'Peter': ['Lucy', 'Kyle'],
//     },
//     ['Lucas', 'Bill']
//     )); // Убийца James
//    console.log( getKiller(
//     {
//     'Brad': [],
//     'Megan': ['Ben', 'Kevin'],
//     'Finn': [],
//     },
//     ['Ben']
//     )); // Убийца Megan

///4 dop task

// const todaysWinner = {
//     prize: '10 000$',
//     }
//     const winnerApplicants = {
//     '001': {
//     name: 'Максим',
//     age: 25,
//     },
//     '201': {
//     name: 'Светлана',
//     age: 20,
//     },
//     '304': {
//     name: 'Екатерина',
//     age: 35,
//     },
// }

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }

// function getWinner(applicants, winnerObject){
//     let key = Object.keys(applicants)

//     const random = getRandomNumberInRange(0, 1);
//     const randomKey = key[random];
//     const winner = applicants[randomKey];
//     const result = {...winnerObject, winner}
//     return result
// }



    
//     const resultWinner = getWinner(winnerApplicants, todaysWinner);
//     console.log('resultWinner:', resultWinner);
    // { prize: '10 000$', name: 'Максим', age: 25 
////////////////////////////////////////////////////////////////////////////////////
    // Необходимо обработать массив таким образом, чтобы распределить
//людей по группам городов

// Данные на вход
// const people = [
//   {
//     name: 'Alex',
//     city: 'Moscow',
//   },
//   {
//     name: 'Ivan',
//     city: 'Moscow',
//   },
//   {
//     name: 'Joe',
//     city: 'New York'
//   },
//   {
//     name: 'Johan',
//     city: 'Berlin'
//   },
// ]

// const groupByCity = (array) => {
//     const result = {};
//     for(const item of array) {
//         const{city, name} = item;
//         if (!result[city]){
//             result[city] = name;
//         }else if (Array.isArray(result[city])) {
//             result[city].push(name);
//         } else {
//             result[city] = [result[city], name];
//         }
//     }
//     return result;
// }
// console.log(groupByCity(people))

// Данные на выход

// {
//   'Moscow': [ 'Alex', 'Ivan' ],
//   'New York': 'Joe',
//   'Berlin': 'Johan'
// }
/////////////////////////////////////////////////////
// const str = 'one.two.three.four.five';
// const arr = str.split('.')
// const str2 = arr.reduceRight((acc, el) => {
//     // console.log('acc', acc)
//     // console.log('el', el)
//     return {[el]: acc}
// }, {})

// console.log(str2)

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/




