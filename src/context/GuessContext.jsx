import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../functions/utilities";
import { words } from "../words/words";

export const GuessContext = createContext();

export const GuessProvider = ({ children }) => {
	// Get two state values from local storage if present,
	// Set to blank if not present
	const [currentGuess, setCurrentGuess] = useState(
		localStorage.currentGuess ? getCookie("currentGuess") : []
	);
	const [prevGuesses, setPrevGuesses] = useState(
		localStorage.prevGuesses ? getCookie("prevGuesses") : []
	);
	const [gameOver, setGameOver] = useState(
		localStorage.gameOver ? getCookie("gameOver") : false
	);

	useEffect(() => {
		setCookie("gameOver", gameOver);
	}, [gameOver]);
	// Set on page load depending on dateCode
	const [wordOfDay, setWordOfDay] = useState([]);

	const doInput = (char, maxGuess) => {
		// add character to current row
		if (!gameOver) {
			setCurrentGuess((currentGuess) =>
				currentGuess.length < maxGuess
					? [...currentGuess, char]
					: currentGuess
			);
		}
	};

	const doSubmit = () => {
		if (words.includes(currentGuess.join(""))) {
			// if the word is valid set it on the board, move to next line
			setPrevGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
			if (currentGuess.join("") === wordOfDay.join("")) {
				setGameOver(true);
				// do game over things
			}
			setCurrentGuess("");
		}
	};

	const doBackspace = () => {
		// if the guess has at least one input, remove the most recent
		setCurrentGuess((currentGuess) => currentGuess.slice(0, -1));
	};

	const getTileLetter = (rowNumber, tileNumber) => {
		// check if this row is the row for current guess
		if (prevGuesses.length === rowNumber) {
			return currentGuess[tileNumber];
		} else if (prevGuesses[rowNumber]) {
			// if not, it's either the first row, or a previous
			// guess, fill appropriately
			return prevGuesses[rowNumber][tileNumber];
		}
	};

	const getTileSetting = (rowNumber, tileNumber) => {
		// sets the setting of the tiles based on if they're
		// correct/present/not present in the day's word
		if (rowNumber > prevGuesses.length) return "Default";
		if (rowNumber === prevGuesses.length) return "Filled";
		if (prevGuesses[rowNumber][tileNumber] === wordOfDay[tileNumber])
			return "Correct";
		if (wordOfDay.includes(prevGuesses[rowNumber][tileNumber]))
			return "Present";
		else return "NotPresent";
	};

	const getLetterClass = (tileNumber, setting, styles) => {
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

	const getTileClass = (tileNumber, letter, setting, styles, theme) => {
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

	const getKeySetting = (character) => {
		// sets the setting of the key based on if the character
		// present/not present in the day's word
		if (!prevGuesses.flat().includes(character)) return "Default";
		if (
			prevGuesses.flat().includes(character) &&
			wordOfDay.includes(character)
		)
			return "Present";
		if (
			prevGuesses.flat().includes(character) &&
			!wordOfDay.includes(character)
		)
			return "NotPresent";
	};

	const data = {
		currentGuess,
		setCurrentGuess,
		prevGuesses,
		setPrevGuesses,
		wordOfDay,
		setWordOfDay,
		gameOver,
		setGameOver,
		doInput,
		doSubmit,
		doBackspace,
		getTileLetter,
		getTileSetting,
		getTileClass,
		getLetterClass,
		getKeySetting,
	};
	return (
		<GuessContext.Provider value={data}>{children}</GuessContext.Provider>
	);
};
