import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext";
import GridTile from "../GridTile";
import styles from "./GridLine.module.scss";
import { getLetter, getTileSetting } from "../../functions/lineFunctions";

const GridLine = ({ rowNumber, columns, theme }) => {
	const { currentGuess, prevGuesses, wordOfDay } = useContext(GuessContext);

	const wrapperStyle = { gridTemplateColumns: `repeat(${columns}, 1fr)` };

	return (
		<div className={styles.Wrapper} style={wrapperStyle}>
			{Array.from(Array(columns)).map((e, i) => (
				<GridTile
					key={"tile" + i}
					tileNumber={i}
					letter={getLetter(rowNumber, i, currentGuess, prevGuesses)}
					setting={getTileSetting(
						rowNumber,
						i,
						prevGuesses,
						wordOfDay
					)}
					theme={theme}
				/>
			))}
		</div>
	);
};

export default GridLine;
