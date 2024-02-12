// Асинхронное программирование — это подход к написанию кода, при котором несколько задач 
// выполняются параллельно и независимо друг от друга (в отличие от синхронного программирования, 
// где каждая операция выполняется последовательно и синхронно)



// От английского promise — обещать

// у промиса есть 3 состояния. Это:

// 1. Промис в состоянии ожидания (pending). Когда вы не знаете, получите ли вы мобильный телефон к следующей неделе или нет.
// 2. Промис решен (resolved). Вам реально купят новый телефон.
// 3. Промис отклонен (rejected). Вы не получили новый мобильный телефон, так как всё-таки, мама была не в настроении.

/_ ES5 _/
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // Всё выполнено
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);


///////////////////////////////////////////////////////////////////////////////////////
//Применяем промисы

/_ ES5 _/
///////

// Вызываем промис
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();


//////////////////////////////////////////////////////////////////////////////////
// ES 5 — поддерживают почти все браузеры. Демо код работает в ES5 среде (Все основные браузеры + NodeJS), 
// если бы вы подключили библиотеку промисов Bluebird. Почему так? Потому что ES5 не 
// поддерживает промисы из коробки. Другая знаменитая библиотека промисов это Q, от Криса Коваля.

// ES6 / ES2015 — демо код сработает прямо из коробки, так как ES6 поддерживает промисы естественным путём. 
// Более того, с ES6 функциями, мы можем ещё круче упростить код с помощью => и использовать const и let.

/_ ES6 _/
const isMomHappy = true;

// Промис
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// Вызываем промис
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();
// Обратите внимание, что все var заменены на const. Все function(resolve, reject) были упрощены на (resolve, reject) => .

// ES7 — Async/await делают синтаксис визуально лучше. 
// ES7 представил async и await синтаксис. 
// Это делает асинхронный синтаксис визуально лучше и проще для понимания, 
// без .then и .catch . Перепишем свой пример с ES7 синтаксисом.

//_ ES7 _/
const isMomHappy = true;

// Промис
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2й промис
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// Вызываем промис
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();



// 1.Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. 
// Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка,
// результаты остальных промисов будут игнорироваться.

// 2.Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их
// результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.

// 3.Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.

// 4.Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, 
// который становится его результатом, остальные игнорируются. 
// Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.

// 5.Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.

// 6.Promise.reject(error) – возвращает промис с ошибкой error.

// Из всех перечисленных методов, самый часто используемый – это, пожалуй, Promise.all.



Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива




let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
  .then(responses => responses.forEach(
    response => alert(`${response.url}: ${response.status}`)
  ));
  
  
  
  
  ///////////////////////////////////////////////
  
  
// 1.Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют выполнять func регулярно или только один раз после задержки delay, заданной в мс.

// 2.Для отмены выполнения необходимо вызвать clearInterval/clearTimeout со значением, которое возвращают методы setInterval/setTimeout.

// 3.Вложенный вызов setTimeout является более гибкой альтернативой setInterval. Также он позволяет более точно задать интервал между выполнениями.

// 4.Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.

//////////////////////////////////////////////////////////////


