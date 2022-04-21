import React from "react";
import styles from "./Tile.module.scss";
import { getTileClass, getLetterClass } from "../../functions/tileFunctions";

const Tile = ({ tileNumber, letter = "", setting = "default" }) => {
	return (
		<span className={getTileClass(tileNumber, letter, setting, styles)}>
			<span className={getLetterClass(tileNumber, setting, styles)}>
				{letter.toUpperCase()}
			</span>
		</span>
	);
};

export default Tile;
