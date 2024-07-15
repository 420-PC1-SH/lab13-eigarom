const greet = require('./greeting.js');

describe("test greeting ", () => {
	test('string is "Hello, Luke"', () => {
		let name = "Luke";
		expect(greet(name)).toBe("Hello, Luke");
	});

	describe('empty name returns "Hello there"', () => {
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

	test('uppercase name "HAN" returns "HELLO HAN"', () => {
		let name = "HAN";
		expect(greet(name)).toBe("HELLO HAN");
	});

	test('array of two names', () => {
		let names = ["Jango", "Boba"];
		expect(greet(names)).toBe("Hello, Jango and Boba");
	});
});