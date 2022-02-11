'use strict'
let a2 = 2

let x = 1 + (a2 *= 2); // x = 1 + (a = a * 2)
                      // x = 1 + (a = 2 * 2 = 4)
                      // x = 1 + 4 = 5
                      // a = 4
alert("x = " + x)
alert("a = " + a2)