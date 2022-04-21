export const getTileClass = (tileNumber, letter, setting, styles) => {
	// sets the appropriate classes for tiles
	const classList = [];
	// resonsible for transition delays
	switch (tileNumber) {
		case 0:
			classList.push(styles.Tile_DelayZero);
			break;
		case 1:
			classList.push(styles.Tile_DelayOne);
			break;
		case 2:
			classList.push(styles.Tile_DelayTwo);
			break;
		case 3:
			classList.push(styles.Tile_DelayThree);
			break;
		case 4:
			classList.push(styles.Tile_DelayFour);
			break;
		default:
			console.log("Something may have broken.");
	}
	// responsible for animations/colours
	classList.push(
		setting === "default" && letter === ""
			? styles.Tile__Default
			: setting === "default"
			? styles.Tile__Filled
			: setting === "notPresent"
			? styles.Tile__NotPresent
			: setting === "present"
			? styles.Tile__Present
			: styles.Tile__Correct
	);
	return classList.join(" ");
};

export const getLetterClass = (tileNumber, setting, styles) => {
	// sets the appropriate classes for letters
	const classList = [];
	// responsible for transition delays
	switch (tileNumber) {
		case 0:
			classList.push(styles.Letter_DelayZero);
			break;
		case 1:
			classList.push(styles.Letter_DelayOne);
			break;
		case 2:
			classList.push(styles.Letter_DelayTwo);
			break;
		case 3:
			classList.push(styles.Letter_DelayThree);
			break;
		case 4:
			classList.push(styles.Letter_DelayFour);
			break;
		default:
			console.log("Something may have broken.");
	}
	// responsible for flipping
	classList.push(
		setting === "default" ? styles.Letter : styles.Letter__Flipped
	);
	return classList.join(" ");
};

export const getTileTheme = (theme) => {
	const bgCol = theme === "light" ? "white" : "black";
	const letterCol = theme === "light" ? "black" : "black";
	const blankTileCol = theme === "light" ? "white" : "darkgrey";

	const tileTheme = {
		backgroundColor: bgCol,
		color: letterCol,
	};
	return tileTheme;
};
