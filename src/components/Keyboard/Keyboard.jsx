import React, { useContext } from "react";
import styles from "./Keyboard.module.scss";
import KeyboardKey from "../KeyboardKey/KeyboardKey";
import { SettingsContext } from "../../context/SettingsContext";
import KeyboardKeyEnter from "../KeyboardKeyEnter/KeyboardKeyEnter";
import KeyboardKeyBackspace from "../KeyboardKeyBackspace/KeyboardKeyBackspace";

const Keyboard = () => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Line}>
				<KeyboardKey character={"q"} />
				<KeyboardKey character={"w"} />
				<KeyboardKey character={"e"} />
				<KeyboardKey character={"r"} />
				<KeyboardKey character={"t"} />
				<KeyboardKey character={"y"} />
				<KeyboardKey character={"u"} />
				<KeyboardKey character={"i"} />
				<KeyboardKey character={"o"} />
				<KeyboardKey character={"p"} />
			</div>
			<div className={styles.Line}>
				<KeyboardKey character={"a"} />
				<KeyboardKey character={"s"} />
				<KeyboardKey character={"d"} />
				<KeyboardKey character={"f"} />
				<KeyboardKey character={"g"} />
				<KeyboardKey character={"h"} />
				<KeyboardKey character={"j"} />
				<KeyboardKey character={"k"} />
				<KeyboardKey character={"l"} />
			</div>
			<div className={styles.Line}>
				<KeyboardKeyEnter />
				<KeyboardKey character={"z"} />
				<KeyboardKey character={"x"} />
				<KeyboardKey character={"c"} />
				<KeyboardKey character={"v"} />
				<KeyboardKey character={"b"} />
				<KeyboardKey character={"n"} />
				<KeyboardKey character={"m"} />
				<KeyboardKeyBackspace />
			</div>
		</div>
	);
};

export default Keyboard;
