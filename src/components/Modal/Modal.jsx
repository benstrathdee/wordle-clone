import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import styles from "./Modal.module.scss";

const Modal = () => {
	const { modalShow, setModalShow, modalContent } =
		useContext(SettingsContext);

	const modalClass = modalShow ? styles.Wrapper : styles.Wrapper__Invis;

	return (
		<div className={modalClass} onClick={() => setModalShow(false)}>
			<div className={styles.Box}>{modalContent}</div>
		</div>
	);
};

export default Modal;
