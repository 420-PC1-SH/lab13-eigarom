function greet(name) {
	if (!name || name === "")
		return "Hello there"

	if (name instanceof Array && name.length === 2) {
		return "Hello, " + name[0] + " and " + name[1];
	}

	if (name === name.toUpperCase())
		return "HELLO " + name;

	return "Hello, " + name;
}

module.exports = greet;