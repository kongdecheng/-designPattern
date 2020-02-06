class Car {
    constructor(name, number, mileage) {
        this.name = name
        this.number = number
        this.mileage = mileage
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        let p = `车型:${this.car.name},车牌:${this.car.number}`
        return p
    }
    end() {
        let p = `车型:${this.car.name},车费:${this.car.mileage * this.car.price}`
        return p
    }
}

class SpecialTrain extends Car {
    constructor(name, number, mileage) {
        super(name, number, mileage)
        this.price = 2
    }
}

class ExpressTrain extends Car {
    constructor(name, number, mileage) {
        super(name, number, mileage)
        this.price = 1
    }
}

let specialTrain = new Trip(new SpecialTrain("专车", 20202020, 5))
console.log(specialTrain.start(), 1)
console.log(specialTrain.end(), 2)

let expressTrain = new Trip(new ExpressTrain("快车", 20182018, 5))
console.log(expressTrain.start(), 3)
console.log(expressTrain.end(), 4)