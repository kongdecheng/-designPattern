class ChickenShop {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}


window.$ = function (name, price) {
    return new ChickenShop(name, price)
}



let p1 = $('蒸蛋', 6)
let p2 = $('鸡汁腊鱼', 16)
let p3 = $('鸡汤娃娃菜', 12)

console.log(p1)
console.log(p2)
console.log(p3)