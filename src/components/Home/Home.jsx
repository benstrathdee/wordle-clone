import React, { useState, useContext, useEffect } from "react";
import styles from "./Home.module.scss";
import { setCookie, getCookie } from "../../functions/utilities";
import Grid from "./../Grid";
import Modal from "./../Modal";
import { GuessProvider } from "./../../context/GuessContext";
import { StatsProvider } from "./../../context/StatsContext";
import { resetGame } from "./../../functions/settings";

const Home = () => {
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
		<div className={styles.Wrapper} style={themeStyle}>
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
	);
};

export default Home;
