// Родительский конструктор
function Animal(name) {
    this.name = name;
  }
  
  // Добавление метода к прототипу родительского класса
  Animal.prototype.sayHello = function() {
    console.log('Hello, I am ' + this.name);
  };
  
  // Дочерний конструктор
  function Dog(name, breed) {
    // Вызов конструктора родительского класса
    Animal.call(this, name);
  
    // Добавление своего свойства
    this.breed = breed;
  }
  
  // Наследование прототипа
  Dog.prototype = Object.create(Animal.prototype);
  
  // Добавление метода к прототипу дочернего класса
  Dog.prototype.bark = function() {
    console.log('Woof!');
  };
  
  // Создание экземпляра дочернего класса
  var myDog = new Dog('Buddy', 'Golden Retriever');
  
  // Использование методов
  myDog.sayHello(); // Hello, I am Buddy
  myDog.bark();     // Woof!
  