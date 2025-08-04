"use strict";
const x = 10;
console.log(x);
function greet(name) {
    console.log(name);
}
greet("John");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isUserAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isUserAdult(19));
