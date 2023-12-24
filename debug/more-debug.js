// const people = [
//     {id: 1, name: 'Makar', age: 23},
//     {id: 2, name: 'oleg', age: 40},
//     {id: 3, name: 'elena', age: 35},
//     {id: 4, name: 'maria', age: 18},
// ]

// console.table(people)


console.time('timer')
const items = []

for(let i = 0; i < 10000; i++) {
    items.push({el: i + 1})
}
console.timeEnd('timer')

