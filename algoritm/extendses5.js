// Определение родительского класса
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log('Hello, I am ' + this.name);
    }
  }
  
  // Определение дочернего класса с использованием extends
  class Dog extends Animal {
    constructor(name, breed) {
      // Вызов конструктора родительского класса с использованием super
      super(name);
  
      // Добавление своего свойства
      this.breed = breed;
    }
  
    bark() {
      console.log('Woof!');
    }
  }
  
  // Создание экземпляра дочернего класса
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  // Использование методов
  myDog.sayHello(); // Hello, I am Buddy
  myDog.bark();     // Woof!
  