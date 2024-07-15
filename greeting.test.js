const greeting = require('./greeting.js');
const processor = require("./processor");

describe("test greeting ", function () {
	test('string is "Hello, Luke"', () => {
		let name = "Luke";
		expect(greeting.greet(name)).toBe("Hello, Luke");
	});
});