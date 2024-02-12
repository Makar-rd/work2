//function

function Animal(name) {
    this.name = name;
    
    this.getName = function() {
        return this.name;
    }
}

//new

const cat = new Animal("кот");
console.log("cat", cat)
console.log(cat.name);
console.log(cat.gatName);



//class

class Animal {
    constructor(name) {
        this.name = name; //поле
    }
    
   getName() {
       return this.name; //метод
   } 
}

const dog = new Animal("собака");

//ООП
//наследование

class Human {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return 'Hello, I am ' + this.name;
  }
}

class Men extends Human {
  constructor(name) {
    super(name)
  }
}
class Coder extends Human {
  constructor(name) {
    super(name)
  }
}

const alex = new Men('Alex');
const leo = new Coder('Leo');

alex.sayMyName() // Hello, I am Alex
leo.sayMyName() // Hello, I am Leo


alex instanceof Human


//Инкапсуляция 
function User(uName, uAge) {
    this.name = uName;
    this.age = uAge;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    };
}
 
const tom = new User("Tom", 39);
tom.age = 11500;
tom.print();    // Name: Tom  Age: 11500


////////////////////////////////////////////
class Counter {
  #count = 0
  
  click () {
    this.#count += 1;
  }
  getCount () {
    return this.#count.toLocaleString()
  }
}

const myCounter = new Counter();
myCounter.click();
myCounter.click();
myCounter.click();
console.log(
  myCounter.getCount()
);


//Геттеры
const student = {

    // свойство-данные
    firstName: 'Маша',
    
    // свойство-аксессор (геттер)
    get getName() {
        return this.firstName;
    }
};

// доступ к свойству-данным
console.log(student.firstName); // Вывод: Маша

// доступ к свойству-аксессору
console.log(student.getName); // Вывод: Маша

// если попытаемся вызвать геттер как метод — получим ошибку
console.log(student.getName()); // здесь будет ошибка

//Сеттеры
const student = {
    firstName: 'Маша',
    
    // свойство-аксессор (сеттер)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Вывод: Маша

// изменяем свойство объекта с помощью сеттера
student.changeName = 'Настя';

console.log(student.firstName); // Вывод: Настя



//Полиморфизм
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }
}

class Author extends User {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
  }

  login(email, password) {
		const isAdminValid = true; 
		// делаем проверку на валидность администратора
		// например 2-ух факторная идентификация
    if (email === this.email && password === this.password && isAdminValid == true) {
      console.log('Admin Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  removeUser(userId) {
    console.log('User Removed successfully.');
  }
}

const author= new Author('author@gmail.com', 'password:)');
author.login('author@gmail.com', 'password:)'); // Login Successfully

const admin= new Admin('admin@gmail.com', 'password');
admin.login('admin@gmail.com', 'password'); // Admin Login Successfully


//////////////////////////////////


//абстракция

class User {
  name;
  email;
  #password;
  constructor() {}

  #validateEmail(email) {
    // проверка email на валидность.
    return true;
  }

  #validatePassword(password) {
    // проверка на валидность пароля
    return true;
  }

  signUp(name, email, password) {
    let isValidated = false;
    isValidated = this.#validateEmail(email);
    isValidated &&= this.#validatePassword(password);

    if (isValidated) {
      this.name = name;
      this.email = email;
      this.#password = password;
      // добавляем пользователя в базу данных
      console.log('User registered successfuly');
    } else {
      console.log('Please enter correct Details!!');
    }
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log('Login Successfully');
    } else {
      console.log('Authentication Failed!!');
    }
  }

  #isRegisteredUser(email) {
    // проверка пользователя на наличие регистрации
    return true;
  }

  resetPassword(email, newPassword) {
    if (this.#isRegisteredUser(email)) {
        this.#password = newPassword;
        console.log('Operation performed successfully');
    }
    else {
      console.log('No account found!');
    }
  }
};

const author= new User();
author.signUp('Max Andreyev', 'author@gmail.com', 'password:)'); // User registered successfully

author.#validateEmail('author@gmail.com'); // Syntax Error.

author.login('author@gmail.com', 'password:)'); // Login Successfully
author.resetPassword('author@gmail.com', ''); // Operation performed successfully



//static

class StaticMethodCall {
  static staticMethod() {
    return "Вызван статический метод";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " из другого статического метода";
  }
}
StaticMethodCall.staticMethod();
// 'Вызван статический метод'

StaticMethodCall.anotherStaticMethod();
// 'Вызван статический метод из другого статического метода'