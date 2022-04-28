import { wait } from "@testing-library/user-event/dist/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../functions/utilities";
import { words } from "../words/words";
import { SettingsContext } from "./SettingsContext";
import GameEnd from "./../components/GameEnd";

export const GuessContext = createContext();

export const GuessProvider = ({ children }) => {
	const { openModal } = useContext(SettingsContext);
	// Get two state values from local storage if present,
	// Set to blank if not present
	const [currentGuess, setCurrentGuess] = useState(
		localStorage.currentGuess ? getCookie("currentGuess") : []
	);
	const [prevGuesses, setPrevGuesses] = useState(
		localStorage.prevGuesses ? getCookie("prevGuesses") : []
	);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [presentLetters, setPresentLetters] = useState([]);
	const [gameOver, setGameOver] = useState(
		localStorage.gameOver ? getCookie("gameOver") : false
	);

	useEffect(() => {
		setCookie("gameOver", gameOver);
	}, [gameOver]);

	useEffect(() => {
		const tempCorrect = [];
		const tempPresent = [];
		for (const guess of prevGuesses) {
			for (const char of guess) {
				if (guess.indexOf(char) === wordOfDay.indexOf(char)) {
					tempCorrect.push(char);
				} else if (wordOfDay.includes(char)) {
					tempPresent.push(char);
				}
			}
		}
		setCorrectLetters(tempCorrect);
		setPresentLetters(tempPresent);
	}, [prevGuesses]);

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

	const doSubmit = async () => {
		if (words.includes(currentGuess.join(""))) {
			// if the word is valid set it on the board, move to next line
			setPrevGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
			if (currentGuess.join("") === wordOfDay.join("")) {
				setGameOver(true);
				setCurrentGuess("");
				await wait(2000);
				openModal(<GameEnd />);
				// do game over things
			} else {
				setCurrentGuess("");
			}
		} else {
			// TODO - implement animation, toast on incorrect guess
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
		// correct/present/not present in the day's word
		if (!prevGuesses.flat().includes(character)) return "Default";
		if (correctLetters.includes(character)) return "Correct";
		if (presentLetters.includes(character)) return "Present";
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
