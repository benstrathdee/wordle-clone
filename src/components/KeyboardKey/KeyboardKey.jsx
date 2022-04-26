import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext";
import styles from "./KeyboardKey.module.scss";

const KeyboardKey = ({ character }) => {
	const { doInput, getKeySetting } = useContext(GuessContext);
	return (
		<div className={styles.Light} onClick={() => doInput(character, 6)}>
			{character.toUpperCase()}
		</div>
	);
};

export default KeyboardKey;
