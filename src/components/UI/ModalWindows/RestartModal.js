import styles from "./BuyModals/BuyModal.module.css";
import SimpleButton from "./ModalButtons/SimpleButton";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import { closeRestartGameModal, restartGame } from "../../../store/fields";
import { restartPositions } from "../../../store/diceAndPlayerPositions";
import { closeMainMenu } from "../../../store/mainMenu";
import audio from "../../../media/click-sound.mp3";
import { useDispatch } from "react-redux";

const RestartModal = () => {
    const clickSound = new Audio(audio);
    const dispatch = useDispatch();

    const restartGameHandler = () => {
        clickSound.play();
        dispatch(restartGame());
        dispatch(restartPositions());
        dispatch(closeRestartGameModal());
        dispatch(closeMainMenu());
    };

    const closeRestartModalHandler = () => {
        clickSound.play();
        dispatch(closeRestartGameModal());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.restart}>
                <div className={styles.info}>
                    <h1 className={styles.header}>You shure you whant to restart the game?</h1>
                    <div className={styles["buttons-group"]}>
                        <SimpleButton className={styles.button} message={"YEAS"} handler={restartGameHandler} />
                        <SimpleButton
                            className={styles.button}
                            message={"NO"}
                            handler={closeRestartModalHandler}
                        />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default RestartModal;
