import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext";
import GridTile from "../GridTile";
import styles from "./GridLine.module.scss";

const GridLine = ({ rowNumber, columns }) => {
	const wrapperStyle = { gridTemplateColumns: `repeat(${columns}, 1fr)` };

	return (
		<div className={styles.Wrapper} style={wrapperStyle}>
			{Array.from(Array(columns)).map((e, i) => (
				<GridTile
					key={"tile" + i}
					rowNumber={rowNumber}
					tileNumber={i}
				/>
			))}
		</div>
	);
};

export default GridLine;
