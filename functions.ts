// =====================
// TypeScript Functions
// =====================

// 1. Basic Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Mimoh"));

// 2. Function Without Return (void)
function logMessage(message: string): void {
    console.log("Message:", message);
}
logMessage("This is TypeScript!");

// 3. Function with Optional Parameters
function greetUser(name: string, age?: number): string {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}!`;
}
console.log(greetUser("Mimoh"));
console.log(greetUser("Mimoh", 23));

// 4. Function with Default Parameters
function greetPerson(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}
console.log(greetPerson());
console.log(greetPerson("Mimoh"));

// 5. Function with Rest Parameters
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(10, 20, 30, 40));

// 6. Anonymous Function (Function Expression)
const multiply = function (a: number, b: number): number {
    return a * b;
};
console.log(multiply(5, 4));

// 7. Arrow Function
const divide = (a: number, b: number): number => a / b;
console.log(divide(10, 2));

// 8. Function Types
let add: (x: number, y: number) => number;
add = (a, b) => a + b;
console.log(add(5, 7));

// 9. Function Overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine(5, 10));
console.log(combine("Hello, ", "TS"));

// 10. Higher-Order Function
function operation(a: number, b: number, fn: (x: number, y: number) => number): number {
    return fn(a, b);
}
const result = operation(5, 3, (x, y) => x * y);
console.log(result);

// 11. Function Returning a Function
function createMultiplier(factor: number) {
    return (num: number) => num * factor;
}
const double = createMultiplier(2);
console.log(double(5));

// 12. Optional: this Parameter in Functions
interface User {
    name: string;
    greet(this: User): void;
}
const user: User = {
    name: "Mimoh",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
user.greet();


export {};