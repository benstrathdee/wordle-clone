import React, { useContext } from "react";
import styles from "./Home.module.scss";
import Grid from "./../Grid";
import Keyboard from "../Keyboard/Keyboard";
import Modal from "./../Modal";
import Header from "../Header/Header";
import { GuessProvider } from "./../../context/GuessContext";
import { StatsProvider } from "./../../context/StatsContext";
import { SettingsContext } from "../../context/SettingsContext";

const Home = () => {
	const { theme } = useContext(SettingsContext);

	return (
		<div className={styles[`Wrapper__${theme}`]}>
			<Header />
			<StatsProvider>
				<GuessProvider>
					<Grid rows={6} columns={5} />
					<Keyboard />
				</GuessProvider>
				<Modal />
			</StatsProvider>
		</div>
	);
};

export default Home;
