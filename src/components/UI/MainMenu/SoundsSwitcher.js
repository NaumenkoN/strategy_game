import styles from "./Settings.module.css";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";

const SoundsSwitcher = (props) => {
    return (
        <div className={styles.input}>
            <div className={styles.p}>{props.message}</div>
            <SimpleButton
                className={props.classesSwitcher}
                message={<div className={props.classesCircle}></div>}
                handler={props.handler}
            />
        </div>
    );
};

export default SoundsSwitcher;
