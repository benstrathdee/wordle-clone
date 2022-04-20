import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext/GuessContext";
import Tile from "../Tile";
import styles from "./Line.module.scss";

const Line = ({ rowNumber }) => {
	const { currentGuess, prevGuesses } = useContext(GuessContext);

	const getLetter = (tileNumber) => {
		if (prevGuesses.length === rowNumber) {
			return currentGuess[tileNumber];
		} else {
			return prevGuesses[rowNumber] === undefined
				? ""
				: prevGuesses[rowNumber][tileNumber];
		}
	};

	return (
		<div className={styles.Line}>
			<Tile rowNumber={rowNumber} colNumber={0} letter={getLetter(0)} />
			<Tile rowNumber={rowNumber} colNumber={1} letter={getLetter(1)} />
			<Tile rowNumber={rowNumber} colNumber={2} letter={getLetter(2)} />
			<Tile rowNumber={rowNumber} colNumber={3} letter={getLetter(3)} />
			<Tile rowNumber={rowNumber} colNumber={4} letter={getLetter(4)} />
		</div>
	);
};

export default Line;
