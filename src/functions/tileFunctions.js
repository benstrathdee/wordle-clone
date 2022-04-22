export const getTileClass = (tileNumber, letter, setting, styles, theme) => {
	// sets the appropriate classes for tiles
	const classList = [];
	// resonsible for transition delays
	classList.push(styles[`Delay${tileNumber}`]);
	// responsible for animations/colours
	classList.push(
		letter === ""
			? styles[`${theme}__Default`]
			: styles[`${theme}__${setting}`]
	);
	return classList.join(" ");
};

export const getLetterClass = (tileNumber, setting, styles) => {
	// sets the appropriate classes for letters
	const classList = [];
	// responsible for transition delays
	classList.push(styles[`Letter_Delay${tileNumber}`]);
	// responsible for flipping
	classList.push(
		setting === "Default" || setting === "Filled"
			? styles.Letter
			: styles.Letter__Flipped
	);
	return classList.join(" ");
};
