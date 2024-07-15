function greet(name) {
	if (!name || name === "")
		return "Hello there"

	if (name instanceof Array && name.length === 2) {
		return "Hello, " + name[0] + " and " + name[1];
	}

	if (name instanceof Array && name.length >= 3) {
		let message = "Hello, ";
		for (let i = 0; i < name.length - 1; i++)
			message = message + name[i] + ", "

		message = message + "and " + name[name.length - 1];
		return message;
	}

	if (name === name.toUpperCase())
		return "HELLO " + name;

	return "Hello, " + name;
}

module.exports = greet;