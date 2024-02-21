function MyClass() {
    // Приватная переменная
    let privateVariable = 'I am private';
  
    // Приватный метод
    function privateMethod() {
      console.log('This is a private method');
    }
  
    // Публичный метод с доступом к приватным элементам
    this.publicMethod = function() {
      console.log(privateVariable);
      privateMethod();
    };
  }
  
  let myInstance = new MyClass();
  myInstance.publicMethod();
  // myInstance.privateMethod(); // Ошибка - метод недоступен извне
  // console.log(myInstance.privateVariable); // Ошибка - переменная недоступна извне
  