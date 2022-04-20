import React from "react";
import styles from "./Tile.module.scss";

const Tile = ({ rowNumber, colNumber, letter = "", setting = "default" }) => {
	const tileClass =
		letter === ""
			? styles.Tile__Default
			: setting === "default"
			? styles.Tile__Filled
			: setting === "notPresent"
			? styles.Tile__Filled
			: setting === "present"
			? styles.Tile__Present
			: styles.Tile__Correct;
	const letterClass =
		setting === "default" ? styles.Letter : styles.Letter__Flipped;

	return (
		<span className={tileClass} data-row={rowNumber} data-col={colNumber}>
			<span className={letterClass}>{letter.toUpperCase()}</span>
		</span>
	);
};

export default Tile;
