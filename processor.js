function processor(transmission) {
	if (!transmission.includes("::")) {
		throw new Error('Data is invalid ; should contain "::"');
	}
	let parts = transmission.split("::");
	let rawData = parts[1];
	
	validateIdFormat(parts[0]);
	validateRawDataFormat(rawData);

	return {
		id: Number(parts[0]),
		rawData: rawData
	};
}

function validateIdFormat(id) {
	if (isNaN(id)) {
		throw new Error('id is invalid ; should be convertible in number');
	}
}

function validateRawDataFormat(rawData) {
	if (rawData[0] !== "<" && rawData[rawData.length - 1] !== ">") {
		throw new Error('rawData is invalid ; should begin with "<" and end with ">"');
	} else if (rawData[0] !== "<") {
		throw new Error('rawData is invalid ; should begin with "<"');
	} else if (rawData[rawData.length - 1] !== ">") {
		throw new Error('rawData is invalid ; should end with ">"');
	}
}

module.exports = processor;