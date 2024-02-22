const privateVariable = Symbol('privateVariable');

let obj = {
  [privateVariable]: 'I am private',
  publicMethod: function() {
    console.log(this[privateVariable]);
  }
};

obj.publicMethod();
// console.log(obj[privateVariable]); // Ошибка - символ недоступен извне
