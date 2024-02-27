class Hex {
  constructor(value) {
    this.value = value;  // эгземпляр класса
  }

  hexDigit(num) {
    return num.toString(16).toUpperCase();
  }

  toString() {
    return "0x" + this.hexDigit(this.value);
  }

  toJSON() {
    return "0x" + this.hexDigit(this.value);
  }

  valueOf() {
    return this.value;
  }

  plus(num) {
    return new Hex(this.value + num);  // создается новый объект и его значения возвращается и прибавляется
    // тоесть a.plus(b) в кострукторе а сохранилось значения и оно возвращается и плюсуется значения сохраненное в конструкторе b
  }

  minus(num) {
    return new Hex(this.value - num);
  }

  static parse(str16) { // static это значит не привязывается конструкторам класса в вызывается прямо из самого класса
    return parseInt(str16, 16);
  }
}
  
// Создайте класс Hex, который принимает число в качестве аргумента.

// Добавление объекта hex к числу (с помощью valueOf) генерирует число, но вызов toString или toJSON покажет его шестнадцатеричное значение, начинающееся с "0x". Чтобы сделать шестнадцатеричные объекты сопоставимыми, вы должны предоставить метод equals.

// Пример:

var FF = new Hex(255);
FF.toString() == "0xFF";
FF.valueOf() + 1 == 256;
// Также создайте два метода, plus и minus которые будут добавлять или вычитать число или шестнадцатеричный объект и возвращать новый шестнадцатеричный объект.

var a = new Hex(10);
var b = new Hex(5);
a.plus(b).toJSON() == "0xF";
// Кроме того, создайте parse метод класса, который может анализировать шестнадцатеричные числа и преобразовывать их в стандартные десятичные числа:

Hex.parse("0xFF") == 255;
Hex.parse("FF") == 255;
// Примечание: Если вы определяете оба valueOf и toString, "Шестнадцатеричное значение:" + new Hex (255) может вести себя не так, как ожидалось!