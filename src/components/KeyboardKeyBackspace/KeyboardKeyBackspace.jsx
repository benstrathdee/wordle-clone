import React, { useContext } from "react";
import styles from "./../KeyboardKey/KeyboardKey.module.scss";
import { BsBackspace } from "react-icons/bs";
import { GuessContext } from "../../context/GuessContext";

const KeyboardKeyBackspace = ({ theme }) => {
	const { doBackspace } = useContext(GuessContext);
	return (
		<div
			className={styles.Light}
			style={{ width: "9vw", maxWidth: "90px" }}
			onClick={doBackspace}
		>
			<BsBackspace />
		</div>
	);
};

export default KeyboardKeyBackspace;
