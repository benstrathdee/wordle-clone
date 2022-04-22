export const getLetter = (rowNumber, tileNumber, currentGuess, prevGuesses) => {
	// check if this row is the row for current guess
	if (prevGuesses.length === rowNumber) {
		return currentGuess[tileNumber];
	} else {
		// if not, it's either the first row, or a previous
		// guess, fill appropriately
		if (prevGuesses[rowNumber] !== undefined)
			return prevGuesses[rowNumber][tileNumber];
	}
};

export const getTileSetting = (
	rowNumber,
	tileNumber,
	prevGuesses,
	wordOfDay
) => {
	// sets the setting of the tiles based on if they're
	// correct/present/not present in the day's word
	if (rowNumber > prevGuesses.length) return "Default";
	if (rowNumber === prevGuesses.length) return "Filled";
	if (wordOfDay.includes(prevGuesses[rowNumber][tileNumber]))
		return "Present";
	if (prevGuesses[rowNumber][tileNumber] === wordOfDay[tileNumber])
		return "Correct";
	else return "NotPresent";
};
