'use strict'

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    Product.price *= 0.75;
}

let bread = new Product("хлеб", 50);
bread.make25PercentDiscount();
console.log("Наименование: " + bread.name +  ", Цена: " + bread.price)

class A {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let cheese = new A("сыр", 100);
cheese.make25PercentDiscount();
console.log("Наименование: " + cheese.name +  ", Цена: " + cheese.price)