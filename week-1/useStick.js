"use strict"
const sayHi = {
    say: 'Hi!',
}
function GM() {
    return this.say
}
console.log(GM.call(sayHi)) // Hi!