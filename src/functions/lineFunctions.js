export const getLetter = (rowNumber, tileNumber, currentGuess, prevGuesses) => {
	// check if this row is the row for current guess
	if (prevGuesses.length === rowNumber) {
		return currentGuess[tileNumber];
	} else {
		// if not, it's either the first row, or a previous
		// guess, fill appropriately
		return !prevGuesses[rowNumber]
			? ""
			: prevGuesses[rowNumber][tileNumber];
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
	if (rowNumber >= prevGuesses.length) {
		return "default";
	} else {
		return prevGuesses[rowNumber][tileNumber] === wordOfDay[tileNumber]
			? "correct"
			: wordOfDay.includes(prevGuesses[rowNumber][tileNumber])
			? "present"
			: "notPresent";
	}
};
