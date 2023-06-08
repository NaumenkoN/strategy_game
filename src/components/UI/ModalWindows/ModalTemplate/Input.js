import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.labelMessage}</label>
            <input
                onChange={props.onChange}
                value={props.value}
                id={props.id}
                type={props.type}
                min={props.min}
                max={props.max}
                step={props.step}
            ></input>
        </>
    );
};

export default Input;
