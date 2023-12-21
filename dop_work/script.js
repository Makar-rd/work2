// 1 task and 2 task
// const clientName = 'Игорь';
// let clientSpentForAllTime =  110;
// let clientSpentToday = 25;
let clientName = prompt ('Введите имя клиента');

let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
clientSpentToday = Number(clientSpentToday);
if (!Number(clientSpentToday)) {
    alert('“Сумма, которую которую потратил сегодня, должна быть числом!')
}

let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
clientSpentForAllTime = Number(clientSpentForAllTime);
if ( !Number(clientSpentForAllTime)) {
    alert('“Сумма, которую клиент потратил за все время, должна быть числом!')
} 

let discount = 0;
if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 500 ) {
    discount = 30;
}

clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
clientSpentForAllTime += clientSpentToday

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все
время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)


// 3 task

const password = prompt('Введите пароль')

if (password.length >= 3 && password.length < 20) {

} 