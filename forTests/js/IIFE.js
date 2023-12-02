console.log(foo);

var foo='Hello!';

console.log((function iife(a) { 
    arguments[0] = 10;
    return a
})(5));
