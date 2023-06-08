import styles from "./ModalButtons.module.css";

const ArgButton = (props) => {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            onClick={() => props.handler(props.arguments)}
            className={styles["sell-stocks"]}
        >
            {props.message}
        </button>
    );
};

export default ArgButton;
