function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}

function makeClass(...properties) {  // ...properties - это метод ress, тоесть делает массип аргументов
  // возвращаем класс с пустым телом
  return class {
    constructor(...values) {  // принимает в любом количестве аргументов
      properties.forEach((property, index) => { // пробежится по каждому аргументу массива и создаст свойства по по порядку и назначитим значения переданному по value
        this[property] = values[index];   // this.name = 'Bob';
      });
    }
  };
}


const Animal = makeClass("name","species","age","health","weight","color") 
const dog1 = new Animal('Bob','Dog','5','good','50lb','brown')