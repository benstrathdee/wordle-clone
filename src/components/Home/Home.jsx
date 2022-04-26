import React, { useContext } from "react";
import styles from "./Home.module.scss";
import Grid from "./../Grid";
import Keyboard from "../Keyboard/Keyboard";
import Modal from "./../Modal";
import Settings from "../Settings";
import Stats from "../Stats";
import Info from "../Info";
import { GuessProvider } from "./../../context/GuessContext";
import { StatsProvider } from "./../../context/StatsContext";
import { SettingsContext } from "../../context/SettingsContext";
import { FaCog, FaInfoCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

const Home = () => {
	const { setModalShow, setModalContent, theme } =
		useContext(SettingsContext);

	const openModal = (element) => {
		setModalContent(element);
		setModalShow(true);
	};

	return (
		<div className={styles[`Wrapper__${theme}`]}>
			<div className={styles.Wrapper__Icons}>
				<FaInfoCircle onClick={() => openModal(<Info />)} />
				<MdLeaderboard onClick={() => openModal(<Stats />)} />
				<FaCog onClick={() => openModal(<Settings />)} />
			</div>
			<h1>Definitely NOT Wordle</h1>
			<StatsProvider>
				<GuessProvider>
					<Grid rows={6} columns={5} theme={theme} />
					<Keyboard />
				</GuessProvider>
				<Modal />
			</StatsProvider>
		</div>
	);
};

export default Home;
