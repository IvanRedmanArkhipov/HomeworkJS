'use strict'
let a5 = 1
let b5 = 4
let c5 = "division"

alert(mathOperation(a5, b5, c5))

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "plus":
            return plus(arg1, arg2)
        case "minus":
            return minus(arg1, arg2)
        case "multiplication":
            return multiplication(arg1, arg2)
        case "division":
            return division(arg1, arg2)
    }
}