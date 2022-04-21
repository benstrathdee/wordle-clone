import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import { GuessProvider } from "./context/GuessContext/GuessContext";
import { resetGame } from "./functions/settings";
import { getCookie, setCookie } from "./functions/utilities";

function App() {
	const [theme, setTheme] = useState(
		localStorage.theme ? getCookie("theme") : "light"
	);

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
	};

	useEffect(() => {
		setCookie("theme", theme);
	}, [theme]);

	const themeStyle = {
		color: theme === "light" ? "black" : "white",
		backgroundColor: theme === "light" ? "white" : "black",
	};

	return (
		<div id="page" style={themeStyle}>
			<h1 style={themeStyle}>Definitely NOT Wordle</h1>
			<GuessProvider>
				<GameGrid rows={6} columns={5} theme={theme} />
			</GuessProvider>
			<button onClick={resetGame}>Reset</button>
			<label htmlFor="theme">Theme</label>
			<select name="theme" id="theme" onChange={handleThemeChange}>
				<option value="light">Light Theme</option>
				<option value="dark">Dark Theme</option>
			</select>
		</div>
		// Modal for winning
	);
}

export default App;
