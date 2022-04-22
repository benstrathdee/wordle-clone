import { createContext, useState } from "react";
import { getCookie } from "../functions/utilities";

export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
	const statsTemplate = {
		games: 0,
		wins: 0,
		currentStreak: 0,
		maxStreak: 0,
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	const [stats, setStats] = useState(
		localStorage.stats ? getCookie("stats") : statsTemplate
	);

	const data = { stats, setStats };
	return (
		<StatsContext.Provider value={data}>{children}</StatsContext.Provider>
	);
};
