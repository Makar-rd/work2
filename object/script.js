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
// const patientsInfo = [...patients]


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

function handleObject (obj, key, action){
    if(action === 'get'){
      return key in obj // Возвращаем значение ключа
    }

    if(action === 'add'){
        obj[key] = ''; // Добавить новый ключ и присвоить ему пустую строку
        return obj
    }

    if(action === 'delete'){
        delete obj[key];  // Удаляем свойство key из объекта
        return obj
    }

    return obj
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
    }

    const result = handleObject(student, 'programmingLanguage',
    'delete');

    console.log('result', result)

    // task 4

// function giveJobToStudent (student, jobName){
//     return [...student]
// }

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//     }
//     const updatedStudent = giveJobToStudent(student,
//     'веб-разработчик');
    