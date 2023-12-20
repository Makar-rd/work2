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
//не разобрался


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


let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i
}
alert(`${sum}`)