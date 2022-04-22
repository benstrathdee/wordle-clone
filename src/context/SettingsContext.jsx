import { createContext, useState } from "react";
import { getCookie } from "../functions/utilities";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const [modalShow, setModalShow] = useState(false);
	const [modalContent, setModalContent] = useState(null);

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
	};
	return (
		<SettingsContext.Provider value={data}>
			{children}
		</SettingsContext.Provider>
	);
};
