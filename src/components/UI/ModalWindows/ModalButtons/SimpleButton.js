import styles from "./ModalButtons.module.css";

const SimpleButton = (props) => {
    return (
        <button type={props.type} disabled={props.disabled} onClick={props.handler} className={styles.simple}>
            {props.message}
        </button>
    );
};

export default SimpleButton;
