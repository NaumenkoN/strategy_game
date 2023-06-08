import styles from "./ModalButtons.module.css";

const CloseArgButton = (props) => {
    return (
        <button disabled={props.disabled} onClick={() => props.handler(props.arguments)} className={styles.close}>
            x
        </button>
    );
};

export default CloseArgButton;
