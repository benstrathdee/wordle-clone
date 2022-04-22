import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children }) => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Main}></div>
		</div>
	);
};

export default Modal;
