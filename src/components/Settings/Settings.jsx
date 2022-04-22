import React, { useContext } from "react";
import styles from "./Settings.module.scss";
import { SettingsContext } from "../../context/SettingsContext";
import { resetGame } from "./../../functions/settings";

const Settings = () => {
	const { theme, setTheme } = useContext(SettingsContext);

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
	};

	return (
		<div className={styles.Wrapper}>
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
			<button onClick={resetGame}>Reset</button>
		</div>
	);
};

export default Settings;
