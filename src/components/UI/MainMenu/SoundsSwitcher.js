import styles from "./Settings.module.css";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";

const SoundsSwitcher = (props) => {
    return (
        <div className={styles.input}>
            <p className={styles.p}>{props.message}</p>
            <SimpleButton
                className={props.classesSwitcher}
                message={<div className={props.classesCircle}></div>}
                handler={props.handler}
            />
        </div>
    );
};

export default SoundsSwitcher;
