import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.id} className={styles.label}>
                {props.labelMessage}
            </label>
            <input
                className={styles.input}
                onChange={props.onChange}
                value={props.value}
                id={props.id}
                type={props.type}
                min={props.min}
                max={props.max}
                step={props.step}
            ></input>
        </div>
    );
};

export default Input;
