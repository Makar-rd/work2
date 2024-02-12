// Напишите функцию JavaScript, чтобы получить количество дней в месяце.
// Пример ввода:
// document.write(getDaysInMonth(9, 2021));
// Вывод:
// 30
// function getDaysInMonth(month, years) {
//     return new Date(years, month).getDate();
// }
// console.log(getDaysInMonth(1, 2024))
////////////////////////////////////
// Получите текущую дату
// Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
// Пример ввода:
// document.write(curday('-'));

// function JavaScript (a) {
// const toDay = new Date()
// console.log('toDayy', toDay);
//     const year = toDay.getFullYear();
//     const month = toDay.getMonth();
//     const day = toDay.getDate();
//     return `${year}${a}${month}${a}${day}`
// }

// console.log(JavaScript('-'))

///////////////////////////////////////////
// Напишите функцию JavaScript, которая будет возвращать количество минут в часах и минутах.
// Пример ввода:
// document.write(timeConvert(200));
// Вывод:
// "200 минут = 3 часа и 20 минут."

// Решение:

// function timeConvert(min) {
//     const math = min / 60;
//     const hours = Math.floor(math);
//     const minutes = (math - hours) * 60;
//     const minut = Math.round(minutes);

//     // return `${hours} - ${minut}`
//     return hours + '-' + minut
// }

// console.log(timeConvert(713))

//Задание 1

function getDateFormat(date, separator = '.') {
    const dateDay = date.getDay().toString().padStart(2, '0');
    const dateMonth = (date.getMonth() + 1).toString().padStart(2, '0');
    const dateYear = date.getFullYear().toString();
  
if (separator === '-') `${dateDay}${separator}${dateMonth}${separator}${dateYear}`
 
    return `${dateDay}${separator}${dateMonth}${separator}${dateYear}`

}
const date1 = new Date()
console.log(getDateFormat(date1))
console.log(getDateFormat(date1, '-'))

// тоже самая задача

const number = a => ( a > 9 ? '' : '0') + a;

const getDateFormat = (date, separator = '.') => 
number(date.getDate() + separator) + number(date.getMonth() + 1)
    + separator + date.getFullYear();

let date = new Date();
console.log(getDateFormat(date))


// задание 2

function getDaysBeforeBirthday(nextBirthdayDate) {
    const today = new Date();
    const currentDate = Math.round((nextBirthdayDate - today) / 1000 / 3600 / 24);
	
    return currentDate
}

console.log(getDaysBeforeBirthday(new Date(2024, 1, 1)))


// задание 3 

function addDays(date, days = 1) {

    return new Date(date.getTime() + days * 86400000)
    
    }
    
    console.log(addDays(new Date(), 5))
    

//задача доп 1

const peopleWithVisa = [
    {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2023',
    },
    {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2021',
    },
    {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2022',
    },
    {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2021',
    },
    ];

    function allowVisa(people) {
        return people.filter(el => el.criminalRecord === false && new Date().toLocaleDateString() < el.passportExpiration)
    }
    
    
    const result = allowVisa(peopleWithVisa);
    console.log('result', result)

    ///////////////////
    function is_date(input){
        return input instanceof Date
      }
      
      console.log(is_date(new Date(86400000)))
      /////////////
      
      function month_name(date){
          const locale = "ru-ru";
          return date.toLocaleString(locale, {month: "long"})
        
      }
      
      console.log(month_name(new Date("10/11/2021")))
      
      //////////////
      
      function is_weekend(dateStr){
          const date = new Date(dateStr)
        if(date.getDay() == 0 || date.getDay() == 6){
            return 'выходной'
        } else {
            return 'не выходной'
        }
        
      }
      
      console.log(is_weekend('Nov 18, 2023'))
      
      ///////////////////
      
      function write(day1, day2){
          const date1 = new Date(day1)
          const date2 = new Date(day2)
        const difference =Math.ceil((date2 - date1) / 86400000 ) 
        return difference
      }
      
      console.log(write('04/02/2021', '11/04/2021'))
      
      //////////////
      
      function yesterday(date){
      const day = new Date(date);
      const minusDay = new Date(day.getTime() - 86400000)
      return minusDay
      }
      
      console.log(yesterday('Nov 16, 2021'))
      
      /////////////////////////////////
      
      function days_of_a_year(year){
          
      }
      
      //////////////
      
      function quarter_of_the_year(qvart){
      
      }
      
      /////////////////////
      
      function calculate_age(age){
          const datebirthday = new Date(age);
        const presentTime = new Date();
        const YearAge = presentTime.getFullYear() - datebirthday.getFullYear();
        return YearAge
      }
      console.log(calculate_age(new Date(2000, 1, 1)))