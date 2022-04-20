import { createContext, useState } from "react";

export const GuessContext = createContext();

export const GuessProvider = ({ children }) => {
	// Get two state values from local storage if present,
	// Set to blank if not present
	const [currentGuess, setCurrentGuess] = useState(
		localStorage.currentGuess ? JSON.parse(localStorage.currentGuess) : []
	);
	const [prevGuesses, setPrevGuesses] = useState(
		localStorage.prevGuesses ? JSON.parse(localStorage.prevGuesses) : []
	);

	const data = {
		currentGuess,
		setCurrentGuess,
		prevGuesses,
		setPrevGuesses,
	};
	return (
		<GuessContext.Provider value={data}>{children}</GuessContext.Provider>
	);
};
