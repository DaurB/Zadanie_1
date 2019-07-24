'use strict'

// types of data
var number = 4;
var string = 'fff';
var sym = Symbol();
var bool = true;
null;
undefined;
var obj = {};

var person = {
    name: 'John',
    age: 25,
    isMarried: true
};

console.log(person.age);

let arr = ['fdfdf', 5, true];

console.log(arr[0]);

// общение с пользователем
// alert('hello world');

// confirm('Are you here?');

let answer = prompt("Вам есть 18?", "");
console.log(answer);
