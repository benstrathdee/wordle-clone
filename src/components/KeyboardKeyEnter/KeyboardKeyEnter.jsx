import React, { useContext } from "react";
import { GuessContext } from "../../context/GuessContext";
import styles from "./../KeyboardKey/KeyboardKey.module.scss";

const KeyboardKeyEnter = ({ theme }) => {
	const { doSubmit } = useContext(GuessContext);
	return (
		<div
			className={styles.Light}
			style={{ width: "9vw", maxWidth: "90px" }}
			onClick={doSubmit}
		>
			Enter
		</div>
	);
};

export default KeyboardKeyEnter;
