function greet(name) {
	if (!name || name === "")
		return "Hello there"

	if (name === name.toUpperCase())
		return "HELLO " + name;

	return "Hello, " + name;
}

module.exports = greet;