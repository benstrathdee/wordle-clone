import { useEffect, useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid/GameGrid";
import { GuessProvider } from "./context/GuessContext/GuessContext";
import { resetGame } from "./functions/settings";
import { getCookie, setCookie } from "./functions/utilities";

function App() {
	const [theme, setTheme] = useState(
		localStorage.theme ? getCookie("theme") : "Light"
	);

	useEffect(() => {
		setCookie("theme", theme);
	}, [theme]);

	const themeStyle = {
		color: theme === "Light" ? "black" : "white",
		backgroundColor: theme === "Light" ? "white" : "black",
	};

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
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
				<option value="Light">Light Theme</option>
				<option value="Dark">Dark Theme</option>
			</select>
		</div>
		// Modal for winning
	);
}

export default App;
