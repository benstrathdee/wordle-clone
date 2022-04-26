import React, { useContext } from "react";
import styles from "./Settings.module.scss";
import { SettingsContext } from "../../context/SettingsContext";
import { resetGame } from "./../../functions/settings";

const Settings = () => {
	const { theme, setTheme, rows, setRows, columns, setColumns } =
		useContext(SettingsContext);

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
	};

	// const handleRowsChange = (e) => {
	// 	setRows(e.target.value);
	// };

	// const handleColumnsChange = (e) => {
	// 	setColumns(e.target.value);
	// };

	return (
		<div className={styles.Wrapper}>
			<label htmlFor="theme">Theme: </label>
			<select
				name="theme"
				id="theme"
				defaultValue={theme}
				onChange={handleThemeChange}
			>
				<option value="Light">Light Theme</option>
				<option value="Dark">Dark Theme</option>
			</select>
			{/* <label htmlFor="columns">Columns: </label>
			<input
				type="number"
				min={3}
				max={9}
				defaultValue={columns}
				onChange={handleColumnsChange}
			/>
			<label htmlFor="rows">Rows: </label>
			<input
				type="number"
				min={1}
				max={20}
				defaultValue={rows}
				onChange={handleRowsChange}
			/> */}
			<button onClick={resetGame}>Reset</button>
		</div>
	);
};

export default Settings;
