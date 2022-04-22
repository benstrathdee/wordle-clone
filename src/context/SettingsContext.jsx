import { createContext, useState, useEffect } from "react";
import { getCookie, setCookie } from "../functions/utilities";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const [modalShow, setModalShow] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const [theme, setTheme] = useState(
		localStorage.theme ? getCookie("theme") : "Light"
	);

	useEffect(() => {
		setCookie("theme", theme);
	}, [theme]);

	const settingsTemplate = {};
	const [settings, setSettings] = useState(
		localStorage.settings ? getCookie("settings") : settingsTemplate
	);

	const data = {
		settings,
		setSettings,
		modalShow,
		setModalShow,
		modalContent,
		setModalContent,
		theme,
		setTheme,
	};
	return (
		<SettingsContext.Provider value={data}>
			{children}
		</SettingsContext.Provider>
	);
};
