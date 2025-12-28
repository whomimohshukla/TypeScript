const myObject = {
	name: "Whomimoh",
	age: 23,
	isStudent: true,
};

// now we will defein the type of object

let mytea: {
	name: string;
	age: number;
	isStudent: boolean;
};

mytea = {
	name: "Whomimoh",
	age: 23,
	isStudent: true,
};
console.log(mytea);

// now using type alias

type Tea = {
	name: string;
	age: number;
	isStudent: boolean;
};

let mytea2: Tea = {
	name: "Whomimoh",
	age: 23,
	isStudent: true,
};

console.log(mytea2);

//partial type

type PartialTea = {
	name: string;
	isHotDrink: boolean;
	price: number;
};

const updateChai = (updates: Partial<PartialTea>) => {
	console.log("updates", updates);
};

updateChai({ price: 20 });
updateChai({ name: "Green Tea", isHotDrink: true });
updateChai({}); // valid

//required
type requiredTea = {
	name?: string;
	age?: number;
	isStudent?: boolean;
};

const requiredKeyword = (reqqq: Required<requiredTea>) => {
	console.log("required", reqqq);
};

requiredKeyword({ name: "Whomimoh", age: 23, isStudent: true });

//pick 
type PickTea = {
    name: string;
    age: number;
    isStudent: boolean;
    course: string;
};

const pickKeyword = (reqqq: Pick<PickTea, "name" | "age">) => {
	console.log("pick", reqqq);
};

// pickKeyword({ name: "Whomimoh", age: 23, isStudent: true, course: "TypeScript" });// Error: Object literal may only specify known properties, and 'isStudent' does not exist in type 'Pick<Tea, "name" | "age">'.

pickKeyword({ name: "Whomimoh", age: 23 });// valid


//omit
type OmitTea = {
    name: string;
    age: number;
    isStudent: boolean;
    course: string;
};

const omitKeyword = (reqqq: Omit<OmitTea, "isStudent" | "course">) => {
    console.log("omit", reqqq);
};

// omitKeyword({ name: "Whomimoh", age: 23, isStudent: true, course: "TypeScript" });// Error: Object literal may only specify known properties, and 'isStudent' does not exist in type 'Omit<Tea, "isStudent" | "course">'.

omitKeyword({ name: "Whomimoh", age: 23 });// valid



