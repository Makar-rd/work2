const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = (ids) => {

const requests = ids.map((id) =>
fetch(`${TODOS_URL}/${id}`));

Promise.all(requests)
.then((responses) => {

const dataResults = responses.map((data) =>
data.json());

return Promise.all(dataResults)
})
.then((allTasks) => {
console.log(allTasks);
})
.catch((error) => {
console.log(error);
})
}
getTodosByIds([43, 21, 55, 100, 10]);

///////////////////////////////////////////////////

async function getTodosByIds(ids) {
    try {
        const requests = ids.map(async (id) => {
            const response = await fetch(`${TODOS_URL}/${id}`);
            return response.json();
        });
        const data = await Promise.all(requests);
        console.log(data);
        return data
        } catch (error) {
        console.error('Ошибка',error);
    }
}
getTodosByIds([43, 21, 55, 100, 10])
