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

