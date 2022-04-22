import React from "react";
import styles from "./GridTile.module.scss";
import { getTileClass, getLetterClass } from "../../functions/tileFunctions";

const GridTile = ({
	tileNumber,
	letter = "",
	setting = "default",
	theme = "light",
}) => {
	return (
		<span
			className={getTileClass(tileNumber, letter, setting, styles, theme)}
		>
			<span className={getLetterClass(tileNumber, setting, styles)}>
				{letter.toUpperCase()}
			</span>
		</span>
	);
};

export default GridTile;
