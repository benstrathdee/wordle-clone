import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { SettingsContext } from "../../context/SettingsContext";
import Settings from "../Settings";
import Stats from "../Stats";
import Info from "../Info";
import { FaCog, FaInfoCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const Header = () => {
	const { openModal } = useContext(SettingsContext);
	return (
		<div className={styles.Header}>
			<div className={styles.Header_Icons}>
				<FaInfoCircle onClick={() => openModal(<Info />)} />
			</div>
			<h1 className={styles.Header_Title}>Definitely NOT Wordle</h1>
			<div className={styles.Header_Icons}>
				<MdLeaderboard onClick={() => openModal(<Stats />)} />
				<FaCog onClick={() => openModal(<Settings />)} />
			</div>
		</div>
	);
};

export default Header;
