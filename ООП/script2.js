// task 2
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    compareAge(person) {
      if(person.age >= this.age){
        alert(`${this.name} старше, чем ${person.name}`)
      } else {
        alert(`${this.name} младше, чем ${person.name}`)
      }
    }
    
  }
  
  const person1 = new Person('Максим', 24);
  const person2 = new Person('Светлана', 36);
  const person3 = new Person('Ирина', 23);
  person1.compareAge(person2); // Максим младше, чем Светлана
  person2.compareAge(person3); // Светлана старше, чем Ирина
  person3.compareAge(person1); // Ирина младше, чем Максиm
  ///////////////////////////////////////////////////////
  
  //task 1
  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.technologies = [];
      this.status = 'Junior';
    }
    setTechnologies(technologies) {
      this.technologies = [
      ...this.technologies,
      ...technologies,
    ];
    }
    setNewStatus(newStatus) {
      this.status = newStatus;
    }
    
  }
  
  const student = new Student ('Maxim', 20);
  student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
  student.setNewStatus('Middle');
  console.log(student);
  ////////////////////////////////////////////
  // task 3
  
  class Dictionary {
    constructor (name) {
      this.name = name;
      this.words = {};
    }
    
    add(word, description) {
      this.words[word] = {
        description: description
      };
    }
    
    remove(word) {
      if(this.words.hasOwnProperty(word)) {
        delete this.words[word]
      }
    }
    
    get(words) {
      return this.words
    }
    
    showAllWords() {
      for (const word in this.words){
      console.log(`${word} - ${this.words[word].description}`)
      }
    }
    
  }
  
  const dictionary = new Dictionary('Толковый словарь');
  dictionary.add('JavaScript', 'популярный язык программирования');
  dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
  dictionary.remove('JavaScript');
  dictionary.showAllWords();
  ////////////////////////////////////////
  ///task 4
  
  class HardWordsDictionary extends Dictionary {
    constructor(name) {
      super(name)
    }
    
    add(word, description) {
      super.add(word, description);
      
    }
  }
  
  const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
  hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
  hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
  hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
  hardWordsDictionary.remove('неологизм');
  hardWordsDictionary.showAllWords();
  ///////////////////////
  
  //task 5
  
  class Developer {
    constructor(fullName, age, position) {
      this.fullName = fullName;
      this.age = age;
      this.position = position;
      this.technologies = [];
    }
    
    code() {
    }
    
    learnNewTechnology(technology) {
      this.technologies.push(technology)
    }
  }
  
  class JuniorDeveloper extends Developer {
    constructor(fullName, age){
      super(fullName, age, 'Junior')
      this.technologies = ['HTML', 'CSS', 'JavaScript']
    }
    code() {
      console.log('Junior разработчик пишет код...')
    }
  }
  
  
  class MiddleDeveloper extends Developer {
    constructor(fullName, age){
      super(fullName, age, 'Middle')
      this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
    }
    code() {
      console.log('Middle разработчик пишет код...')
    }
  }
  
  class SeniorDeveloper extends Developer {
    constructor(fullName, age){
      super(fullName, age, 'Senior')
      this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
    }
    code() {
      console.log('Senior разработчик пишет код...')
    }
  }
  
  const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
  const middleDeveloper = new MiddleDeveloper('Игорь', 25)
  const seniorDeveloper = new SeniorDeveloper('Максим', 30)
  juniorDeveloper.code(); // Junior разработчик пишет код...
  middleDeveloper.code(); // Middle разработчик пишет код…
  seniorDeveloper.code(); // Senior разработчик пишет код...
  console.log(juniorDeveloper.fullName, juniorDeveloper.age,
  juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
  console.log(middleDeveloper.fullName, middleDeveloper.age,
  middleDeveloper.position); // 'Игорь', 25, 'Middle'
  console.log(seniorDeveloper.fullName, seniorDeveloper.age,
  seniorDeveloper.position); // 'Максим', 30, 'Senior'
  
  // 1task DOP
  
  
  
  class Dictionary {
      #name;
    #words;
      constructor (name) {
        this.#name = name;
      this.#words = {};
    }
    
    get mainName() {
        return this.#name;
    }
    
    set setMainName(newName) {
            this.#name = newName;
    }
    
    get allWords() {
          return this.#words;
      }
    
    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj
    }
    
    add(word, description) {
    /* 	this.#words[word] = {
              description: description
            }; */
          if(!this.#words[word]) {
              const newWord = {word, description}
               this._addNewWord(word, newWord)
          }
      
    }
    
    remove(word) {
        if(this.#words.hasOwnProperty(word)) {
          delete this.#words[word]
      }
    }
    
    get(words) {
        return this.#words
    }
    
    showAllWords() {
        for (const word in this.#words) {
        console.log(`${word} - ${this.#words[word].description}`)
      }
    }
    
  }
  
  
  class HardWordsDictionary extends Dictionary {
  /* 	constructor(name) {
          super(name)
        } */
    
    add(word, description) {
  /*   	super.add(word, description);
         */    
       if(!this.allWords[word]) {
           this._addNewWord[word, {word, description, isDifficult: true}]
          }
    }
  }
  
  
  const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
  hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
  hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
  hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
  hardWordsDictionary.remove('неологизм');
  hardWordsDictionary.showAllWords();
  console.log(hardWordsDictionary.mainName); // Сложные слова
  hardWordsDictionary.setMainName = 'Новый Словарь';
  console.log(hardWordsDictionary.mainName); // Новый Словарь
  console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
  // дилетант и кван
  
  
  
  //2 task DOP
  
  class CarService {
    static DefaultWorkingHours = { 
      from: '9:00',
      till: '20:00',
  
    };
  
    constructor(name, workingHours) {
      this.name = name;
      this.workingHours = {
        from: workingHours.form || CarService.DefaultWorkingHours.from,
        till: workingHours.till || CarService.DefaultWorkingHours.till,
      };
    }
    
    repairCar(carName) {
      if(!carName) {
        console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
      } else {
          const currentTime = new Date();
          const currentHours = currentTime.getHours();
          const  workingHoursFrom = Number(this.workingHours.from.split(':')[0])
          const workingHoursTill = Number(this.workingHours.till.split(':')[0])
            if(currentHours >= workingHoursFrom && currentHours <= workingHoursTill) {
              console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
            } else {
                  console.log(`Закрыто`)
  
            }
      }
    }
    
  }
  
  const carService = new CarService('RepairCarNow', { from: '8:00', till: '21:00' });
  carService.repairCar('BMW');