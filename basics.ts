const x: number = 10;
console.log(x);

function greet(name: String) {
	console.log(name);
}
greet("John");

function sum(a: number, b: number) {
	return a + b;
}

console.log(sum(2, 3));

function isUserAdult(age: number) {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}

console.log(isUserAdult(19));

interface User {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
}

function getUser(user: User) {
	console.log(user);
}

getUser({
	firstName: "John",
	lastName: "Doe",
	age: 25,
	email: "johndoe@example.com",
});

