"use strict"
const sayHi = {
    say: 'Hi!',
}
function GM() {
    return this.say
}
console.log(GM.call(sayHi)) // Hi!

// link: https://github.com/alimbaeva/31github/blob/main/week-1/md/useStick.md
