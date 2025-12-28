// let number: number[] = [1, 2, 3, 4, 5];

// console.log(number);

// let strings: string[] = ["Hello", "TS"];
// console.log(strings);

// // let mixed: number | string[] = [1, "Hello"];
// // console.log(mixed);

// // using type alias for Array

// type User = {
// 	name: string;
// 	age: number;
// };

// let users: User[] = [
// 	{
// 		name: "Mimoh",
// 		age: 23,
// 	},
// 	{
// 		name: "rohit",
// 		age: 25,
// 	},
// ];

// console.log(users);

// // Generic Array Function

// function getFirst<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirst<number>([10, 20]));  // 10
// console.log(getFirst<string>(["a", "b"])); // "a"

// export {};

// const chaiFalavour:string[] = ["Chai", "Falavour", "Chai Tea"];

// const chaiFalavour2:Array<string> = ["Masala", "Ginger", "Lemon"];

const chaiNaam1: string[] = ["Chai", "Falavour", "Chai Tea"];
const chaiNaam2: Array<string> = ["Masala", "Ginger", "Lemon"];
console.log(chaiNaam1);
console.log(chaiNaam2);

type chai = {
	name: string;
	price: number;
	isHotDrink: boolean;
};

let chais: chai[] = [
	{ name: "Chai", price: 100, isHotDrink: true },
	{ name: "Falavour", price: 200, isHotDrink: false },
	{ name: "Chai Tea", price: 300, isHotDrink: true },
];

// tuples

let chaiTuple:[string,number];

chaiTuple = ["Masala Chai",150];

