function getSumOfNumbers (number, type = 'odd') {
    if (typeof number !== 'number') {
        return NaN
    }

    let sum = 0;
    for (let i = 0; i <= number; i++) {

        const isEvent = i % 2 === 0;
        const isOdd = !isEvent

        if (isOdd && type === 'odd') {
            sum += i;
        } else if (isEvent && type === 'even') {
            sum += i;
        } else if  (type === '') {
            sum += i;
        }
    }
    return sum
}

console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))

//3 задание

function getDivisorsCount (number) {
    if (typeof number !== 'number') {
        return NaN
    } 
    
    if (!Number.isInteger(number) || number < 0) {
        alert('number должен быть целым числом и больше нуля!')
        return 
    }

    let counter = 0;
    for (let i = number; i > 0; i--) {
        if (number % i === 0){
           counter ++ 
        }  
    }
    return counter
}

console.log(getDivisorsCount(10))