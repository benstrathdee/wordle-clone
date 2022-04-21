import { createContext, useState } from "react";
import { getCookie } from "../../functions/gridFunctions";

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

	// Set on page load depending on dateCode
	const [wordOfDay, setWordOfDay] = useState([]);

	const data = {
		currentGuess,
		setCurrentGuess,
		prevGuesses,
		setPrevGuesses,
		wordOfDay,
		setWordOfDay,
	};
	return (
		<GuessContext.Provider value={data}>{children}</GuessContext.Provider>
	);
};
