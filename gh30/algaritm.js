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
}

