const POSTS_URL ='https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

const createNewPost = () => {
isLoading = true;
fetch(POSTS_URL, {
method: 'POST',
})
.then((response) => response.json())
.then((result) => {
console.log('result', result)
})
.catch((error) => {
console.log('error', error)
})
.finally(() => {
isLoading = false;
});
};
console.log('111',createNewPost());

/// переделка
async function createNewPost() {
    isLoading = true;
    try {
    const response = await fetch(POSTS_URL, {
        method: 'POST',
    })
    const data = await response.json();
    console.log('result:', data);
    } catch (error) {
        console.log('error:', error)
    } finally {
        isLoading = false;
    }
}

createNewPost()
/////////////////

// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo start.. ');
//    return delay(2000).then(() => fetch(url))
//       .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data)
//     })
//     .catch(e => console.error(e))
// /////////////////////////////////////////////
// async function fetchAsyncTodos() {
//     console.log('Fetch todo start.. ');
//     try {
//    await delay(2000)
//    const response = await fetch(url)
//    const data = await response.json()
//    console.log('Data: ', data)
// } catch (e) {
//     console.error(e)
// } finally {

// }

// }

// fetchAsyncTodos()