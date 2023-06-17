import styles from "./ModalButtons.module.css";

const CloseButton = (props) => {
    const classes = styles.close + " " + props.className;
    return (
        <button disabled={props.disabled} onClick={props.handler} className={classes}>
            X
        </button>
    );
};

export default CloseButton;
