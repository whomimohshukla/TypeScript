interface user {
	name: string;
	age: number;
	email: string;
}

const user1: user = { name: "John", age: 25, email: "john@gmail.com" };

const user2: user = { name: "John", age: 25, email: "john@gmail.com" };

const user3: user = { name: "John", age: 25, email: "john@gmail.com" };

interface BaseSchema {
	createdAt: Date;
	updatedAt: Date;
}

interface Url extends BaseSchema {
	shortCode: string;
	originalUrl: string;
}

const url1: Url = {
	shortCode: "abc123",
	originalUrl: "https://www.google.com",
	createdAt: new Date(),
	updatedAt: new Date(),
};


// type method
type User2 = {
	id: string;
	name: string;
	email: string;
};
const userA: User2 = {
	id: "1",
	name: "Alice",
	email: "alice@example.com",
};
