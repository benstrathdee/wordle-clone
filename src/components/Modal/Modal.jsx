import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import styles from "./Modal.module.scss";

const Modal = () => {
	const { modalShow, setModalShow, modalContent, theme } =
		useContext(SettingsContext);

	const wrapperClass = modalShow ? styles.Wrapper : styles.Wrapper__Invis;

	return (
		<div className={wrapperClass} onClick={() => setModalShow(false)}>
			<div
				className={styles[`Box__${theme}`]}
				onClick={(e) => e.stopPropagation()}
			>
				{modalContent}
			</div>
		</div>
	);
};

export default Modal;
