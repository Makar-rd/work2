//dz
// task1




async function getUsers() {
    try {
    const ul  = document.querySelector('#data-container') 
const loader = document.getElementById('loader');

loader.removeAttribute("hidden")

    let users = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let user = await users.json()

    loader.setAttribute("hidden", "true")

    user.forEach(people => {
        const li = document.createElement('li');
        ul.append(li);

        const a = document.createElement('a');
        a.hasAttribute('#')
        a.innerHTML = people.name;
        li.append(a)
    });
    }
    catch (error) {
        console.error('ошибка', error);
    }
}
getUsers()

 function getUsersByIds(array) {
    const ul  = document.querySelector('#data-container') 
    const loader = document.getElementById('loader');


    loader.removeAttribute("hidden")

    const request = array.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
    })
    )

    Promise.all(request)
    .then(users => {
       loader.setAttribute("hidden", "true") 
       users.forEach(people => {
        const li = document.createElement('li');
        ul.append(li);

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = people.name;
        li.append(a)
    });
        
    })
    .catch(error => {
        console.error("Ошибка", error)
    })
    
}

getUsersByIds([5, 6, 2, 1])













// console.log('Request data...')

// // setTimeout(() => {
// //     console.log('Prepending data...')

// //     const backendData = {
// //         server: 'aws',
// //         port: 2000,
// //         status: 'working'
// //     }
// // setTimeout(() => {
// //     backendData.modified = true
// //     console.log('Data received', backendData)
// // }, 2000)

// // }, 2000)


// // const p = new Promise(function(resolve, reject) {
// //     setTimeout(() => {
// //         console.log('Prepending data...')
// //         const backendData = {
// //                     server: 'aws',
// //                     port: 2000,
// //                     status: 'working'
// //                 }
// //                 resolve(backendData)
// //     }, 2000)
// // })

// // p.then(data => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //                 data.modified = true
// //                 reject(data)
// //             }, 2000)
// //     })

// //     // p2.then(clientData => {
// //     //     console.log('Data received', clientData)
// //     // })
// // })

// // .then(clientData => {
// //     // console.log('Data received', clientData)
// //     clientData.fromPromise = true
// //     return clientData
// // })
// // .then(data => {
// //     console.log('Modified', data)
// // })
// // .catch(err => console.error('Error: ', err))

// // .finally(() => console.log('Finally'))

// const sleep = ms => {
//    return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
//     }

//     // sleep(2000).then(() => console.log('After 2 sec'))
//     // sleep(3000).then(() => console.log('After 3 sec'))

//     Promise.all([sleep(2000), sleep(5000)]) .then(() => {
//         console.log('All promises')
//     })
       
//     Promise.race([sleep(2000), sleep(5000)]) .then(() => {
//         console.log('Race promises')
//     })