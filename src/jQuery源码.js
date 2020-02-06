class jQuery {
    constructor(selector) {
        console.log(selector, 'selector')
        let slice = Array.prototype.slice
        console.log(slice, 'slice')
        console.log(document.querySelectorAll(selector), 'slice2')
        let dom = slice.call(document.querySelectorAll(selector))
        console.log(dom, 'dom')
        console.log(this, 'this')
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
}


window.$ = function (selector) {
    return new jQuery(selector)
}

var $p = $("p")
console.log($p)