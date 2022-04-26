import React, { useContext } from "react";
import styles from "./GridTile.module.scss";
import { SettingsContext } from "../../context/SettingsContext";
import { GuessContext } from "../../context/GuessContext";

const GridTile = ({ rowNumber, tileNumber }) => {
	const { theme } = useContext(SettingsContext);
	const { getTileLetter, getTileSetting, getTileClass, getLetterClass } =
		useContext(GuessContext);
	const letter = getTileLetter(rowNumber, tileNumber) ?? "";
	const setting = getTileSetting(rowNumber, tileNumber);

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
