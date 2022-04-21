import { useEffect, useContext } from "react";
import styles from "./GameGrid.module.scss";
import Line from "../Line";
import { words } from "./../../words/words";
import { GuessContext } from "../../context/GuessContext/GuessContext";
import {
	getDateCode,
	setCookie,
	getCookie,
} from "../../functions/gridFunctions";

const GameGrid = ({ rows, columns }) => {
	const {
		currentGuess,
		setCurrentGuess,
		prevGuesses,
		setPrevGuesses,
		setWordOfDay,
	} = useContext(GuessContext);

	useEffect(() => {
		// On first load, check if player has a stored date code
		// If not present or not today's code, generate and
		// store/update locally, reset game board
		const dateCode = getDateCode();
		if (!localStorage.dateCode || getCookie("dateCode") !== dateCode) {
			setCurrentGuess([]);
			setPrevGuesses([]);
			setCookie("dateCode", dateCode);
		}
		// set the word of the day
		setWordOfDay(words[dateCode].split(""));
	}, []);

	useEffect(() => {
		// These things happen any time any of the state values change

		// Start keyboard input
		window.addEventListener("keydown", handleKeydown);
		// Set state values in cookie
		setCookie("currentGuess", currentGuess);
		setCookie("prevGuesses", prevGuesses);

		return () => {
			// remove keyboard listener when done
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [currentGuess, prevGuesses]);

	const handleKeydown = (e) => {
		// Reference for valid character input
		const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
		if (
			alphabet.includes(e.key) &&
			prevGuesses.length < rows &&
			!e.repeat
		) {
			// if the key is an un-repeated alphabet character,
			// and the guess isn't full, add it to the current guess
			setCurrentGuess((currentGuess) =>
				currentGuess.length < columns
					? [...currentGuess, e.key]
					: currentGuess
			);
		} else if (
			e.key === "Enter" && // if the key is "Enter"
			prevGuesses.length < rows && // and the board isn't full
			currentGuess.length === columns // and the guess is complete
		) {
			if (words.includes(currentGuess.join(""))) {
				// if the word is valid set it on the board, move to next line
				setPrevGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
				setCurrentGuess("");
			} else {
				// TODO
			}
		} else if (e.key === "Backspace" && currentGuess.length > 0) {
			// if the guess has at least one input, remove the most recent
			setCurrentGuess((currentGuess) => currentGuess.slice(0, -1));
		}
	};

	return (
		<>
			<div className={styles.Wrapper}>
				{Array.from(Array(rows)).map((e, i) => (
					<Line key={"line" + i} rowNumber={i} columns={columns} />
				))}
			</div>
		</>
	);
};

export default GameGrid;
