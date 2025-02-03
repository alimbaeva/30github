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