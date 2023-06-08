import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={() => props.handler(props.playerName)}
            className={styles["sell-stocks"]}
        >
            {`${props.message} ${props.playerName} `}
            {props.card && props.jailCard}
        </button>
    );
};

export default Button;
