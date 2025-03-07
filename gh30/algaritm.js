const obj = {
    name: "Asel",
    cash: {
        name: 'asyl'
    }
};

const { name: nameis } = obj.cash;
console.log(nameis); // prints 'asyl'

class Animals {
    component(types) {
        this.type = types;
    }

    get() {
        console.log(this.type);
    }
}

class Cat extends Animals {
    constructor(name) {
        super("Кошка"); // Correct usage
        this.name = name;
    }

    call() {
        return `Кисс, кисс ${this.name}, это вид ${this.type}`;
    }

    do(action) {
        return `${this.name} ${action}, потому что оно ${this.type}`;
    }

    get() {
        Array.from({ length: 5 }, () => this.name).forEach((el) => {
            console.log(`${el}`);
        });
    }
}

const callCat = new Cat('Киса');
console.log(callCat.call()); // "Кисс, кисс Киса, это вид Кошка"
callCat.get(); // Logs 'Киса' five times

const dbj = {
    name: 'Asel',
    age: 16,
};

function fn(any) {
    console.log(any);
}

console.log(fn.apply(dbj, ['save'])); // 'save' as an array, works correctly
console.log(fn.call(dbj, 'call')); // 'call' as a single argument, works fine

const bindCall = fn.bind(dbj, 'bind');
console.log(bindCall()); // 'bind'

const fnArg = (arg1, ...arg2) => {
    console.log(arg1);
    console.log(arg2);
}

function fnArg2 () {
    console.log(arguments);
}

console.log(fnArg(15, 12, 11, 10));
console.log(fnArg(15, ['12, 11, 10', 'ass']));
console.log(fnArg2(15, ['12, 11,']));
const arrowfn = (...arg) => {
    console.log(arg);
    console.log('arrow function');
}
console.log(arrowfn(15, ['12, 11,']));
console.log(arrowfn(1,2,3,4,5,6,7);
console.log(arrowfn();

const fnExpreton = () {
    console.log('fnExpreton')
    console.log(this)
    console.log(arguments)
}

fnExpreton(1,2,3)
fnExpreton(3)

console.log(3 === '3')
console.log(3 == '3')
console.log(3 + '3')

console.log(null === null)
console.log(null == null)

