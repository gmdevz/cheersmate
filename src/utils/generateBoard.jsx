const generateBoard = (value) => {
	const result = [];

	const drinkingIndex = Math.floor(Math.random() * (value - 1)) + 1;
	for (let i = 0; i < value; i++) {
		if (drinkingIndex === i) {
			result.push(i);
		} else {
			result.push(0);
		}
	}
	return result;
};

export default generateBoard;
