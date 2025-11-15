
// basic type  
type User = {
	name: string;
	age: number;
};

// union type


type ID=string | number;


// intersection type

type add=(a:number,b:number)=>number;

//type for tuple

type RGB = [number, number, number];

//type for enum
enum Color {
	Red,
	Green,
	Blue
}

//type for array
type ArrayType = Array<string>;


//now we can use these types
const user: User = {
	name: "Mimoh",
	age: 23
};

const id: ID = 1;

const add: add = (a, b) => a + b;

const rgb: RGB = [255, 255, 255];

const color: Color = Color.Red;

const array: ArrayType = ["Hello", "TS"];

console.log(user);
console.log(id);
console.log(add(5, 7));
console.log(rgb);
console.log(color);
console.log(array);	







export {};
