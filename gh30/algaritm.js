const obj = {
    name: "Asel",
    cash: {
        name: 'asyl'
    }
}

const {cash: {name}} = obj
const {name: nameis } = obj.cash

console.log(name)

console.log(nameis)


class Animals {
    component(types) {
        this.type = types
    }

    get () {
        console.log(this.type)
    }
}

class Cat extends Animals {
    constructor(name) {
        super(type='Кошка')
        this.name = name
    }

    call() {
        return `Кисс, кисс ${this.name}, это вид ${this.type}`
    }

    do(action) {
        return `${this.name} ${action}, потому что оно ${this.type}`
    }

    get () {
        Array.from({length: 5}, this.name).forEach((el) => {
            console.log(`${el}`)
        })
    }
}

const callCat = new Cat('Киса')

console.log(callCat.call())
console.log(callCat.get())

const dbj = {
    name: 'Asel',
    age: 16,
}

function fn(any) {
  console.log(any)
}