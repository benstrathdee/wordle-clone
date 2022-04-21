import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext/GuessContext";
import Tile from "../Tile";
import styles from "./Line.module.scss";
import { getLetter, getTileSetting } from "../../functions/lineFunctions";

const Line = ({ rowNumber, columns }) => {
	const { currentGuess, prevGuesses, wordOfDay } = useContext(GuessContext);

	return (
		<div className={styles.Line}>
			{Array.from(Array(columns)).map((e, i) => (
				<Tile
					key={"tile" + i}
					tileNumber={i}
					letter={getLetter(rowNumber, i, currentGuess, prevGuesses)}
					setting={getTileSetting(
						rowNumber,
						i,
						prevGuesses,
						wordOfDay
					)}
				/>
			))}
		</div>
	);
};

export default Line;
