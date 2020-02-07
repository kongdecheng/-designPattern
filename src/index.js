/**
 * 不传参的装饰器模式
 */
// @testDec
// class Demo {
//     constructor() {
//         console.log()
//     }
// }


// function testDec(target) {
//     target.isDec = true
// }

// console.log(Demo)

/**
 * 传参的装饰器模式
 */
// @testDec(false)
// class Demo {

// }

// function testDec(e) {
//     return function (target) {
//         target.isDec = e
//     }
// }

// console.log(Demo.isDec)

/**
 * 原理
 */
// class Demo {}

// function testDec(target) {}

// Demo = testDec(Demo) || Demo

/**
 * 改变类的原型链
 */

// function mixins(...list) {
//     console.log(...list)
//     return function (target) {
//         Object.assign(target.prototype, ...list)
//     }
// }

// const Foo = {
//     foo() {
//         alert("成功")
//     },
//     foo2() {
//         alert("失败")
//     }
// }

// @mixins(Foo)
// class MyClass {}
// let myClass = new MyClass()
// myClass.foo()

/**
 * 只读函数
 */

// function readonly(target, name, descriptor) {
//     console.log(descriptor, '>>>>>')
//     descriptor.writable = false
//     return descriptor
// }
// class Person {
//     constructor() {
//         this.first = 'A'
//         this.last = 'B'
//     }

//     @readonly
//     add() {
//         return `${this.first}和${this.last}`
//     }
// }



// let p = new Person()
// console.log(p.add())
// p.add = function () {}

/**
 * 在原有方法上添加日志功能23
 */
function log(target, name, descriptor) {
    console.log(arguments, 'arguments')
    console.log(descriptor, 'descriptor')
    let oldVal = descriptor.value
    console.log(oldVal, 'descriptor')
    descriptor.value = function () {
        console.log(999)
        return oldVal.apply(this, arguments)
    }
    return descriptor
}

class Amath {
    @log
    add(a, b) {
        return a + b
    }
}
let amath = new Amath()
console.log(amath.add(1, 2))