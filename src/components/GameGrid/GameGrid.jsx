import { useEffect, useContext } from "react";
import styles from "./GameGrid.module.scss";
import Line from "../Line";
import { words } from "./../../words/words";
import { GuessContext } from "../../context/GuessContext/GuessContext";

const GameGrid = () => {
	const { currentGuess, setCurrentGuess, prevGuesses, setPrevGuesses } =
		useContext(GuessContext);

	// Reference for valid character input
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

	useEffect(() => {
		// These things happen any time any of the state values change

		// Start keyboard input
		window.addEventListener("keydown", handleKeydown);

		// Set state values in local storage
		localStorage.currentGuess = JSON.stringify(currentGuess);
		localStorage.prevGuesses = JSON.stringify(prevGuesses);

		// remove keyboard listener when done
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [currentGuess, prevGuesses]);

	const handleKeydown = (e) => {
		if (!e.repeat && alphabet.includes(e.key)) {
			// if the key is an un-repeated alphabet character,
			// add it to the current guess
			if (prevGuesses.length < 6) {
				setCurrentGuess((currentGuess) =>
					currentGuess.length < 5
						? [...currentGuess, e.key]
						: currentGuess
				);
			}
		} else if (
			e.key === "Enter" &&
			prevGuesses.length < 6 &&
			currentGuess.length === 5 &&
			words.includes(currentGuess.join(""))
		) {
			// if the key is "Enter", and a full guess has been input,
			// and the guess is a valid word, add it to the list of guesses,
			// and move to next empty guess unless all 6 guesses made
			setPrevGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
			setCurrentGuess("");
		} else if (e.key === "Backspace" && currentGuess.length > 0) {
			// if the guess has at least one input, remove the most recent
			// input
			setCurrentGuess((currentGuess) => currentGuess.slice(0, -1));
		}
	};

	const resetGame = () => {
		setCurrentGuess([]);
		setPrevGuesses([]);
	};

	return (
		<>
			<h1>Definitely NOT Wordle</h1>
			<div className={styles.Wrapper}>
				<Line rowNumber={0} />
				<Line rowNumber={1} />
				<Line rowNumber={2} />
				<Line rowNumber={3} />
				<Line rowNumber={4} />
				<Line rowNumber={5} />
			</div>
			{/* <div>Current Guess: {currentGuess}</div>
			<div>
				All Guesses:{" "}
				{prevGuesses.map((guess) => guess.join("")).join(", ")}
			</div> */}
			<button onClick={resetGame}>Clear</button>
		</>
	);
};

export default GameGrid;
