import styles from "./ModalButtons.module.css";

const CloseButton = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.handler} className={styles.close}>
            x
        </button>
    );
};

export default CloseButton;
