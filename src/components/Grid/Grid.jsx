import { useEffect, useContext } from "react";
import styles from "./Grid.module.scss";
import GridLine from "../GridLine";
import { words } from "../../words/words";
import { GuessContext } from "../../context/GuessContext";
import { setCookie, getCookie, getDateCode } from "../../functions/utilities";

const Grid = ({ rows, columns }) => {
	const {
		currentGuess,
		setCurrentGuess,
		prevGuesses,
		setPrevGuesses,
		setWordOfDay,
		gameOver,
		setGameOver,
		doInput,
		doSubmit,
		doBackspace,
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
			setCookie("gameOver", false);
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
			!e.metaKey && // no modifier keys held
			!e.shiftKey &&
			!e.ctrlKey &&
			!e.altKey &&
			!e.repeat && // no repeating
			prevGuesses.length < rows // game board isn't full
		) {
			if (alphabet.includes(e.key)) {
				doInput(e.key, columns);
			} else if (
				e.key === "Enter" && // if the key is "Enter"
				currentGuess.length === columns // and the guess is complete
			) {
				doSubmit();
			} else if (e.key === "Backspace" && currentGuess.length > 0) {
				doBackspace();
			}
		}
	};

	const wrapperStyle = { gridTemplateRows: `repeat(${rows}, 1fr)` };

	return (
		<>
			<div className={styles.Wrapper} style={wrapperStyle}>
				{Array.from(Array(rows)).map((e, i) => (
					<GridLine
						key={"line" + i}
						rowNumber={i}
						columns={columns}
					/>
				))}
			</div>
		</>
	);
};

export default Grid;
