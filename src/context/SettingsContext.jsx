import { createContext, useState, useEffect } from "react";
import { getCookie, setCookie } from "../functions/utilities";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const [modalShow, setModalShow] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const openModal = (element) => {
		setModalContent(element);
		setModalShow(true);
	};

	const [theme, setTheme] = useState(
		localStorage.theme ? getCookie("theme") : "Light"
	);

	useEffect(() => {
		setCookie("theme", theme);
	}, [theme]);

	// const [columns, setColumns] = useState(
	// 	localStorage.columns ? getCookie("columns") : 5
	// );
	// const [rows, setRows] = useState(localStorage.rows ? getCookie("rows") : 6);

	// useEffect(() => {
	// 	setCookie("columns", columns);
	// }, [columns]);

	// useEffect(() => {
	// 	setCookie("rows", rows);
	// }, [rows]);

	const settingsTemplate = {};
	const [settings, setSettings] = useState(
		localStorage.settings ? getCookie("settings") : settingsTemplate
	);

	const data = {
		settings,
		setSettings,
		modalShow,
		setModalShow,
		openModal,
		modalContent,
		setModalContent,
		theme,
		setTheme,
		// columns,
		// setColumns,
		// rows,
		// setRows,
	};
	return (
		<SettingsContext.Provider value={data}>
			{children}
		</SettingsContext.Provider>
	);
};
