import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext";
import { SettingsContext } from "../../context/SettingsContext";
import styles from "./KeyboardKey.module.scss";

const KeyboardKey = ({ character }) => {
	const { theme } = useContext(SettingsContext);
	const { doInput, getKeySetting } = useContext(GuessContext);

	const setting = getKeySetting(character);
	return (
		<div
			className={styles[`${theme}__${setting}`]}
			onClick={() => doInput(character, 6)}
		>
			{character.toUpperCase()}
		</div>
	);
};

export default KeyboardKey;
