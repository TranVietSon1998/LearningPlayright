/**
 * JavaScript Types (runnable examples)
 *
 * JS has:
 * - 7 primitive types: undefined, null, boolean, number, bigint, string, symbol
 * - 1 non-primitive category: object (includes arrays, functions, dates, maps, sets, etc.)
 *
 * Run:
 *   node JsBasic/hello.js
 */

console.log("=== JavaScript Types: Examples ===\n");

const section = (title) => console.log(`\n--- ${title} ---`);
const show = (label, value) => {
	// JSON.stringify can't serialize BigInt and Symbols; handle safely
	const printable =
		typeof value === "bigint"
			? `${value}n`
			: typeof value === "symbol"
				? value.toString()
				: value;
	console.log(`${label}:`, printable, "| typeof:", typeof value);
};

// 1) undefined
section("Primitive: undefined");
let notAssigned;
show("notAssigned", notAssigned);
show("missing property", ({ a: 1 }).b);
show("void 0", void 0);

// 2) null
section("Primitive: null");
const empty = null;
show("empty", empty);
console.log("null is a primitive, but typeof null is a long-standing bug:", typeof null);
console.log("Use value === null to check for null:", empty === null);

// 3) boolean
section("Primitive: boolean");
show("true", true);
show("false", false);
show("Boolean(0)", Boolean(0));
show("Boolean(\"hello\")", Boolean("hello"));

// 4) number
section("Primitive: number");
show("42", 42);
show("3.14", 3.14);
show("NaN", NaN);
console.log("NaN is the only value not equal to itself:", NaN !== NaN);
console.log("Use Number.isNaN(x):", Number.isNaN(NaN));
show("Infinity", Infinity);
show("-Infinity", -Infinity);
show("0/0", 0 / 0);
show("1/0", 1 / 0);
console.log("Number.isFinite(10):", Number.isFinite(10));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));

// 5) bigint
section("Primitive: bigint");
const big = 9007199254740993n; // bigger than Number.MAX_SAFE_INTEGER
show("big", big);
console.log("BigInt + BigInt works:", 10n + 20n);
console.log(
	"You cannot mix BigInt and Number directly (would throw TypeError). Convert first, e.g. Number(10n) or BigInt(10)."
);

// 6) string
section("Primitive: string");
show("'hello'", "hello");
show("template literal", `Hi ${"there"}`);
show("length", "hello".length);

// 7) symbol
section("Primitive: symbol");
const symA = Symbol("id");
const symB = Symbol("id");
show("symA", symA);
show("symB", symB);
console.log("Each Symbol is unique:", symA === symB);
const objWithSymbolKey = { [symA]: "secret", visible: "ok" };
console.log("Object keys (string keys only):", Object.keys(objWithSymbolKey));
console.log("Object symbol keys:", Object.getOwnPropertySymbols(objWithSymbolKey));

// 8) object (non-primitive)
section("Non-primitive: object (plain object)");
const person = { name: "Ada", age: 37 };
show("person", person);
console.log("person.name:", person.name);
console.log("Is object?", typeof person === "object" && person !== null);

// Arrays are objects
section("Object subtype: Array");
const numbers = [1, 2, 3];
show("numbers", numbers);
console.log("Array.isArray(numbers):", Array.isArray(numbers));
console.log("numbers[0] ->", numbers[0]);

// Functions have typeof "function" (special case)
section("Object subtype: Function");
function add(a, b) {
	return a + b;
}
show("add", add);
console.log("add(2, 3) ->", add(2, 3));

// Dates are objects
section("Object subtype: Date");
const now = new Date();
show("now", now);
console.log("now instanceof Date:", now instanceof Date);
console.log("now.toISOString():", now.toISOString());

// Regular expressions are objects
section("Object subtype: RegExp");
const re = /\w+/g;
show("re", re);
console.log("re.test('hello'):", re.test("hello"));

// Maps and Sets are objects
section("Object subtype: Map");
const map = new Map([
	["a", 1],
	["b", 2],
]);
show("map", map);
console.log("map.get('a') ->", map.get("a"));

section("Object subtype: Set");
const set = new Set([1, 1, 2, 3]);
show("set", set);
console.log("set.has(2) ->", set.has(2));

// Errors are objects
section("Object subtype: Error");
const err = new Error("Something went wrong");
show("err", err);
console.log("err.message:", err.message);

// Wrapper objects (rarely recommended)
section("Object subtype: Wrapper Objects (rarely use)");
const strObj = new String("abc");
const numObj = new Number(123);
const boolObj = new Boolean(false);
show("new String('abc')", strObj);
show("new Number(123)", numObj);
show("new Boolean(false)", boolObj);
console.log("Prefer primitives: string/number/boolean instead of wrappers.");

// Quick summary: typeof values
section("Quick Reference: typeof results");
console.log([
	"typeof undefined  -> 'undefined'",
	"typeof null       -> 'object' (historical bug; check with === null)",
	"typeof boolean    -> 'boolean'",
	"typeof number     -> 'number'",
	"typeof bigint     -> 'bigint'",
	"typeof string     -> 'string'",
	"typeof symbol     -> 'symbol'",
	"typeof function   -> 'function'",
	"typeof object     -> 'object' (arrays, dates, maps, sets, errors...)"
].join("\n"));

console.log("\nDone.");
