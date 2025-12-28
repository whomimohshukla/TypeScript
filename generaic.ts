function wrapInArray<T>(item: T): T[] {
	return [item];
}

wrapInArray(10);
wrapInArray("Hello");
wrapInArray(true);

function pair<K, V>(key: K, value: V): [K, V] {
	return [key, value];
}

pair<number, string>(1, "One");
pair<string, boolean>("isStudent", true);
pair<number, number>(10, 20);

// Generic Interface

interface Box<T> {
	contents: T;
}

const numberBox: Box<number> = {
	contents: 10,
};
const stringBox: Box<string> = {
	contents: "Hello",
};

