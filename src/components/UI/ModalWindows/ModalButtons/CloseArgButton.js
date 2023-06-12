import styles from "./ModalButtons.module.css";

const CloseArgButton = (props) => {
    const classes = styles.close + " " + props.className;
    return (
        <button disabled={props.disabled} onClick={() => props.handler(props.arguments)} className={classes}>
            close
        </button>
    );
};

export default CloseArgButton;
