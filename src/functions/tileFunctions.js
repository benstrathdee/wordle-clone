export const getTileClass = (tileNumber, letter, setting, styles, theme) => {
	// sets the appropriate classes for tiles
	const classList = [];
	// resonsible for transition delays
	if (theme === "light") {
		switch (tileNumber) {
			case 0:
				classList.push(styles.TileLight_DelayZero);
				break;
			case 1:
				classList.push(styles.TileLight_DelayOne);
				break;
			case 2:
				classList.push(styles.TileLight_DelayTwo);
				break;
			case 3:
				classList.push(styles.TileLight_DelayThree);
				break;
			case 4:
				classList.push(styles.TileLight_DelayFour);
				break;
			default:
				console.log("Something may have broken.");
		}
		// responsible for animations/colours
		classList.push(
			setting === "default" && letter === ""
				? styles.TileLight__Default
				: setting === "default"
				? styles.TileLight__Filled
				: setting === "notPresent"
				? styles.TileLight__NotPresent
				: setting === "present"
				? styles.TileLight__Present
				: styles.TileLight__Correct
		);
	} else if (theme === "dark") {
		switch (tileNumber) {
			case 0:
				classList.push(styles.TileDark_DelayZero);
				break;
			case 1:
				classList.push(styles.TileDark_DelayOne);
				break;
			case 2:
				classList.push(styles.TileDark_DelayTwo);
				break;
			case 3:
				classList.push(styles.TileDark_DelayThree);
				break;
			case 4:
				classList.push(styles.TileDark_DelayFour);
				break;
			default:
				console.log("Something may have broken.");
		}
		// responsible for animations/colours
		classList.push(
			setting === "default" && letter === ""
				? styles.TileDark__Default
				: setting === "default"
				? styles.TileDark__Filled
				: setting === "notPresent"
				? styles.TileDark__NotPresent
				: setting === "present"
				? styles.TileDark__Present
				: styles.TileDark__Correct
		);
	}
	console.log(classList);
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
