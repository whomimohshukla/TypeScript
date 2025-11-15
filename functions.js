// =====================
// TypeScript Functions
// =====================
// 1. Basic Function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Mimoh"));
// 2. Function Without Return (void)
function logMessage(message) {
    console.log("Message:", message);
}
logMessage("This is TypeScript!");
// 3. Function with Optional Parameters
function greetUser(name, age) {
    if (age) {
        return "Hello ".concat(name, ", you are ").concat(age, " years old.");
    }
    return "Hello ".concat(name, "!");
}
console.log(greetUser("Mimoh"));
console.log(greetUser("Mimoh", 23));
// 4. Function with Default Parameters
function greetPerson(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name, "!");
}
console.log(greetPerson());
console.log(greetPerson("Mimoh"));
// 5. Function with Rest Parameters
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(10, 20, 30, 40));
// 6. Anonymous Function (Function Expression)
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 4));
// 7. Arrow Function
var divide = function (a, b) { return a / b; };
console.log(divide(10, 2));
// 8. Function Types
var add;
add = function (a, b) { return a + b; };
console.log(add(5, 7));
function combine(a, b) {
    return a + b;
}
console.log(combine(5, 10));
console.log(combine("Hello, ", "TS"));
// 10. Higher-Order Function
function operation(a, b, fn) {
    return fn(a, b);
}
var result = operation(5, 3, function (x, y) { return x * y; });
console.log(result);
// 11. Function Returning a Function
function createMultiplier(factor) {
    return function (num) { return num * factor; };
}
var double = createMultiplier(2);
console.log(double(5));
var user = {
    name: "Mimoh",
    greet: function () {
        console.log("Hello, ".concat(this.name));
    }
};
user.greet();
