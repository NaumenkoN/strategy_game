import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
    const classes = styles.modal + " " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default ModalWindow;
