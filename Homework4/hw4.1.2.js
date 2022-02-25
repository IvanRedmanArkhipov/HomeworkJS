'use strict'

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    Post.text = prompt("Текст");
}

let firstpost = new Post("Неизвестный автор", "", "23.08.1998");
firstpost.edit();
console.log("Автор: " + firstpost.author +  ", Текст: " + firstpost.text +  ", Дата: " + firstpost.date);

class B {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt("Текст");
    }
}

let secondpost = new B("Какой-то автор", "", "12.04.2017");
secondpost.edit();
console.log("Автор: " + secondpost.author +  ", Текст: " + secondpost.text +  ", Дата: " + secondpost.date)

function AttachedPost() {
    Post.call();
    highlighted = false;
}

AttachedPost.prototype.TextHighlighted = function() {
    AttachedPost.highlighted = true;
}

let firstAttachedPost = new Post("Также неизвестный автор", "", "13.09.1998");
firstAttachedPost.edit();
firstAttachedPost.TextHighlighted();
console.log("Автор: " + firstAttachedPost.author +  ", Текст: " + firstAttachedPost.text +  ", Дата: " + firstAttachedPost.date);

class C {
    constructor(){
        Post.call();
        highlighted = false;
    }

    TextHighlighted() {
        AttachedPost.highlighted = true;
    }
}

let secondAttachedPost = new C("Ещё какой-то автор", "", "22.05.2017");
secondAttachedPost.edit();
secondAttachedPost.TextHighlighted();
console.log("Автор: " + secondAttachedPost.author +  ", Текст: " + secondAttachedPost.text +  ", Дата: " + secondAttachedPost.date)
