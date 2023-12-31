import styles from "./ModalButtons.module.css";

const SimpleButton = (props) => {
    const classes = styles.simple + " " + props.className;
    return (
        <button
            onMouseEnter={props.onMouseEnter}
            type={props.type}
            disabled={props.disabled}
            onClick={props.handler}
            className={classes}
        >
            {props.message}
        </button>
    );
};

export default SimpleButton;
