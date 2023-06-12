import styles from "./Button.module.css";

const Button = (props) => {
    const classes = styles["player-info--button"] + " " + props.className;
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={() => props.handler(props.playerName)}
            className={classes}
        >
            {props.message + (props.message === "Jail card" ? ": " + props.jailCard : "")}
        </button>
    );
};

export default Button;
