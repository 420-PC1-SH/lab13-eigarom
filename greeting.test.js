const greet = require('./greeting.js');

describe("test greeting ", function () {
	test('string is "Hello, Luke"', () => {
		let name = "Luke";
		expect(greet(name)).toBe("Hello, Luke");
	});

	describe('empty name returns "Hello there"', function () {
		test('undefined returns "Hello there"', () => {
			let name;
			expect(greet(name)).toBe("Hello there");
		});

		test('null returns "Hello there"', () => {
			let name = null;
			expect(greet(name)).toBe("Hello there");
		});

		test('empty string returns "Hello there"', () => {
			let name = "";
			expect(greet(name)).toBe("Hello there");
		});
	});
});