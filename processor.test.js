const processor = require('./processor.js');

describe("transmission processor", function () {

	test("takes a string and returns an object", function () {
		let result = processor("9701::<489584872710>");
		expect(typeof result).toEqual("object");
	});

	test("throws error if '::' not found", function () {
		const expectedError = new Error('Data is invalid ; should contain "::"');
		expect(() => {
			processor("9701<489584872710>");
		}).toThrow(expectedError);
	});

	test("returns id in object", function () {
		let result = processor("9701::<489584872710>");
		expect(result.id).not.toEqual(undefined);
	});

	test("id should be convertible in number", function () {
		const expectedError = new Error('id is invalid ; should be convertible in number');
		expect(() => {
			processor("x9701::<487297403495720912>");
		}).toThrow(expectedError);
	})

	test("converts id to a number", function () {
		let result = processor("9701::<489584872710>");
		expect(result.id).toEqual(9701);
	});

	test("returns rawData in object", function () {
		let result = processor("9701::<487297403495720912>");
		expect(result.rawData).not.toEqual(undefined);
	});

	describe("rawData must ", function () {
		test("have '<' at beginning", function () {
			const expectedError = new Error('rawData is invalid ; should begin with "<"');
			expect(() => {
				processor("9701::487297403495720912>");
			}).toThrow(expectedError);
		})

		test("have '>' at the end", function () {
			const expectedError = new Error('rawData is invalid ; should end with ">"');
			expect(() => {
				processor("9701::<487297403495720912");
			}).toThrow(expectedError);
		})

		test("have '<' at beginning and '>' at the end", function () {
			const expectedError = new Error('rawData is invalid ; should begin with "<" and end with ">"');
			expect(() => {
				processor("9701::487297403495720912");
			}).toThrow(expectedError);
		})
	})
});