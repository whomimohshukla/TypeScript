let number: number[] = [1, 2, 3, 4, 5];

console.log(number);

let strings: string[] = ["Hello", "TS"];
console.log(strings);

// let mixed: number | string[] = [1, "Hello"];
// console.log(mixed);

// using type alias for Array

type User = {
	name: string;
	age: number;
};

let users: User[] = [
	{
		name: "Mimoh",
		age: 23,
	},
	{
		name: "rohit",
		age: 25,
	},
];

console.log(users);




// Generic Array Function

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([10, 20]));  // 10
console.log(getFirst<string>(["a", "b"])); // "a"

export {};
