import styles from "./ModalButtons.module.css";

const ArgButton = (props) => {
    const classes = styles["arg-button"] + " " + props.className;
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={() => props.handler(props.arguments)}
            className={classes}
        >
            {props.message}
        </button>
    );
};

export default ArgButton;
