interface Chai {
	flavour: string;
	price: number;
}

const masala: Chai = {
	flavour: "Masala",
	price: 100,
};

interface DiscountCal {
	(price: number): number;
}
const discount: DiscountCal = (price: number): number => {
	return price * 0.1;
};

console.log(masala);
console.log("Discounted Price:", discount(masala.price));


interface TeaMachine{
    start(): void;
    stop(): void;
    // isRunning: boolean;
}

const machine: TeaMachine = {
    start: () => console.log("Tea Machine is running"),
    stop: () => console.log("Tea Machine is stopped"),
    // isRunning: true,
};

