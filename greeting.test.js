const greet = require('./greeting.js');

describe("test greeting ", function () {
	test('string is "Hello, Luke"', () => {
		let name = "Luke";
		expect(greet(name)).toBe("Hello, Luke");
	});
});