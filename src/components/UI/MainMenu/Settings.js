import styles from "./Settings.module.css";
import ModalWindow from "../ModalWindows/ModalTemplate/ModalWindow";
import Backdrop from "../ModalWindows/ModalTemplate/Backdrop";
import CloseButton from "../ModalWindows/ModalButtons/CloseButton";
import Input from "./../ModalWindows/ModalTemplate/Input";
import { closeSettings } from "../../../store/mainMenu";
import { useSelector, useDispatch } from "react-redux";

const Settings = () => {
    const dispatch = useDispatch();

    const closeSettingsHandler = () => {
        dispatch(closeSettings());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <CloseButton className={styles["close-button"]} handler={closeSettingsHandler} />
                {/* <Input
                    className={styles.input}
                    labelMessage={""}
                    onChange={onChangeLivBuildHandler}
                    value={floorValue}
                    id={"build"}
                    type={"number"}
                    min={1}
                    max={4 - floorHeight[index]}
                    step={1}
                /> */}
            </ModalWindow>
        </>
    );
};

export default Settings;
