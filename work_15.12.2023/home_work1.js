// const myName = "Makar" ;
// const programmingLanguage = "JavaScript" ;
// const courseCreatorName = "Vera" ;
// const reasonText = "Интересно" ;
// const numberOfMonth = 4 ;

// console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык
// программирования ${programmingLanguage} на курсе по
// ${programmingLanguage} у ${courseCreatorName}.
// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого
// я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я
// уверен(а), что пройду данный курс до конца`)

/////////////////////////////////////
//2 задание

// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык
// программирования ${programmingLanguage} на курсе по
// ${programmingLanguage} у ${courseCreatorName}.
// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого
// я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я
// уверен(а), что пройду данный курс до конца`;



// myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
// console.log('итог:',myInfoText)
// console.log('длина строки:', myInfoText.length)
// console.log('первый символ:', myInfoText[0], 'последний символ:', myInfoText[myInfoText.length -1])

//3 задание?

// let userName = prompt('Как вас зовут?');
// userName = userName.toLowerCase().trim();
// console.log(alert(`Вас зовут ${userName}`))

/////////
// 4 задание

// let userAge = prompt('Сколько вам лет?');
// userAge = Number(userAge)
// console.log(alert(`Вас зовут ${userName} и вам ${userAge}`))

//5 задание

// let userString = prompt('Введите текст для обрезки');
// userString= userString.trim();
// let  startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
// startSliceIndex = Number(startSliceIndex)
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
// endSliceIndex = Number(endSliceIndex)

// const string = userString.slice(startSliceIndex, endSliceIndex);

// alert(`Результат: ${string}`)

// 6 задание

// let userText = prompt('Введите текст');
// userText = userText.trim();
// let wordFromText = prompt('“Введите слово из текста');
// wordFromText = wordFromText.trim();

// const indexOfWord = userText.indexOf(wordFromText);

// if (indexOfWord !== -1){
//     let string = userText.slice(0, indexOfWord + wordFromText.length);
//     alert(`Результат ${string}`)
// }
/////////////////////////////////////////////////////////////////////////////

// 2-1 задание

// const existedUserLogin = 'the_best_user';
// const existedUserPassword = '12345678';
// let userLogin = prompt('Введите логин');
// userLogin = userLogin.trim();
// let userPassword = prompt('Введите пароль');
// userPassword = userPassword.trim();

// if (userLogin === existedUserLogin, userPassword === existedUserPassword){
//     alert(`welcome ${userLogin}`)
// }else {
//     alert('Логин и (или) Пароль введены неверно!')
// }

// 2-2задание

let correctAnswers = 0;
let incorrectAnswers = 0;


const question1 = prompt('Сколько будет 2 + 2?');
const answer1 = 4;

if( question1 == answer1){
    alert('Correct answer')
    correctAnswers ++
}else {
    alert( 'ответ не верный')
    incorrectAnswers ++
}

const question2 = prompt(' Сколько будет 2 * 2?');
const answer2 = 4;

if( question2 == answer2){
    alert('Correct answer')
    correctAnswers ++
}else {
    alert( 'ответ не верный')
    incorrectAnswers ++
}

const question3 = prompt(' У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
const answer3 = 1;

if( question3 == answer3){
    alert('Correct answer')
    correctAnswers ++
}else {
    alert( 'ответ не верный')
    incorrectAnswers ++
}

const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
const answer4 = 12;

if( question4 == answer4){
    alert('Correct answer')
    correctAnswers ++
}else {
    alert( 'ответ не верный')
    incorrectAnswers ++
}

const question5 = prompt('Сколько будет 2 + 2 * 2?');
const answer5 = 6;

if( question5 == answer5){
    alert('Correct answer')
    correctAnswers ++
}else {
    alert( 'ответ не верный')
    incorrectAnswers ++
}

alert(`“Конец теста! Правильные ответы- ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.” `)


// 2-3 задание в папке конфирм


//2-4 задание

// let i = 0;

// while (i<3) {

// let newStudent = prompt('Введите имя нового студента!');
// newStudent = newStudent.trim();

//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//         }
//         i+=1;
// }

// let i = 0;
// do {

//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
    

//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//         };
//         i += 1;
//     }while (i < 3)

///2-5 задание


// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i
// }
// alert(`${sum}`)