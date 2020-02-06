class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    return `${this.name}在吃饭`
  }
  speak() {
    return `${this.age}岁了`
  }
}

let p = new Person('dckong', 21)
console.log(p.eat())
console.log(p.speak())

class Student extends Person {
  constructor(name, age, num) {
    super(name, age)
    this.number = num
  }
  stand() {
    return `我的学号是：${this.number}`
  }
}

let s = new Student('张三', 21, '20180205')
console.log(s.eat())
console.log(s.speak())
console.log(s.stand())
