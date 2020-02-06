class Login {
    constructor() {
        this.status = false
    }
    show() {
        if (this.status) {
            alert("已经显示")
        }
        this.status = true
        console.log('显示登陆框')
    }
    hide() {
        if (!this.status) {
            alert("已经隐藏")
        }
        this.status = false
        console.log('隐藏登陆框')
    }
}

Login.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            return instance = new Login
        }
        return instance
    }
})()


let lg1 = Login.getInstance()
lg1.show()
console.log(lg1)
let lg2 = Login.getInstance()
lg1.show()
console.log(lg2)
console.log(lg1 === lg2)