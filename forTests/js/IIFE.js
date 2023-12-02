console.log(foo);

var foo='Hello!';

console.log((function iife(a) { 
    arguments[0] = 10;
    return a
})(5));

// link to: https://github.com/alimbaeva/31github/blob/main/week-1/md/IIFE.md
