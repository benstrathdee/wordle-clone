import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
import Modal from "./components/Modal/Modal";
import { GuessProvider } from "./context/GuessContext";
import { SettingsProvider } from "./context/SettingsContext";
import { StatsProvider } from "./context/StatsContext";
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
		<SettingsProvider>
			<div id="page" style={themeStyle}>
				<h1 style={themeStyle}>Definitely NOT Wordle</h1>
				<StatsProvider>
					<GuessProvider>
						<Grid rows={6} columns={5} theme={theme} />
					</GuessProvider>
					<Modal>
						<div>Test</div>
					</Modal>
				</StatsProvider>
				<button onClick={resetGame}>Reset</button>
				<label htmlFor="theme">Theme</label>
				<select
					name="theme"
					id="theme"
					defaultValue={theme}
					onChange={handleThemeChange}
				>
					<option value="Light">Light Theme</option>
					<option value="Dark">Dark Theme</option>
				</select>
			</div>
		</SettingsProvider>
	);
}

export default App;
