// 1 task and 2 task
// const clientName = 'Игорь';
// let clientSpentForAllTime =  110;
// let clientSpentToday = 25;
// let clientName = prompt ('Введите имя клиента');

// let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
// clientSpentToday = Number(clientSpentToday);
// if (!Number(clientSpentToday)) {
//     alert('“Сумма, которую которую потратил сегодня, должна быть числом!')
// }

// let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
// clientSpentForAllTime = Number(clientSpentForAllTime);
// if ( !Number(clientSpentForAllTime)) {
//     alert('“Сумма, которую клиент потратил за все время, должна быть числом!')
// } 

// let discount = 0;
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//     discount = 10;
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//     discount = 20;
// } else if (clientSpentForAllTime >= 500 ) {
//     discount = 30;
// }

// clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
// clientSpentForAllTime += clientSpentToday

// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все
// время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)


// 3 task

// const password = prompt('Введите пароль')
// const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
// const message = 'Пароль валидный. Добро пожаловать в аккаунт!';
// if (password.length === null || password.length < 3 || password.length > 20) {
//     alert(errorMessage)
// } else {
//     let hasBigSymbol = false;
//     let hasNumbers = false;
//     for (let i = 0; i < password.length; i++){
//         const symbol = password[i];
//         const isNumaberSymbol = !isNaN(parseInt(symbol))
//         if (isNumaberSymbol) {
//             hasNumbers = true
//         } 

//         if (symbol.toUpperCase() === symbol && !isNumaberSymbol) {
//             hasBigSymbol = true;
//         }
//     } 
//         console.log('hasBigSymbol', hasBigSymbol)
//         console.log('hasNumbers', hasNumbers)
//      if (!hasBigSymbol || !hasNumbers) {
//         alert(errorMessage)
//      } else {
//         alert(message)
//      }

// }

///функции

// function checkQuestionAnswer (question, correctAnswer) {
//     const userAnswer = prompt(question);
//     if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()){
//         alert('true')
//     }   else {
//         alert('false')
//     }

// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')

// 2 задание

// function showSuccessMessage (message) {
//     console.log(message);
// }

// function showErrorMessage (message) {
//     console.error(message);
// }

// function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
//     let countErrors = 0;

//     for(let i = 0; i < text.length; i++) {
//         if (text[i] === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
//             countErrors++
//         } 
        
//         }

//         if (successCallback && countErrors === 0 ) {
//             successCallback(`В данном тексте нет запрещенных символов`)
//         }
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);