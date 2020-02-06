//现代码，实现ajax.send(obj)传递参数，要实现$(obj)
class Ajax {
    send(obj) {
        return obj
    }
}

class Target {
    constructor(obj) {
        this.ajax = new Ajax().send(obj)
    }
    send() {
        return this.ajax
    }
}


window.$ = function (obj) {
    let s = new Target(obj).send()
    return s
}


let ajax = new Ajax()

console.log(ajax.send("dckong"))

console.log($("oh cool"), '>>>>>>')