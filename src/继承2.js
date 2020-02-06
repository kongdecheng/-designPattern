class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    say() {

    }
}

class A extends People {
    constructor(name, house) {
        super(name, house)
    }
    say() {
        console.log('I ma A')
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house)
    }
    say() {
        console.log('I ma B')
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showHouse() {
        console.log(`我的房子再：${this.city}`)
    }
}

let aHouse = new House('合肥')
console.log(aHouse)
let a = new A('a', aHouse)
console.log(a)
let b = new B('b')
console.log(b)