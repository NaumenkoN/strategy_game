import styles from "../ModalWindows/BuyModals/BuyModal.module.css";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";
import { closeCreditModal, takeCredit } from "../../../store/fields";
import { useDispatch, useSelector } from "react-redux";
import buySound from "../../../media/rentalWithdrawal.mp3";
const TakeCreditModal = () => {
    const dispatch = useDispatch();
    const playerIsActive = useSelector((state) => state.dice.activePlayer);
    const sound = new Audio(buySound);
    const player = (playerIsActive === 1 && "player1") || (playerIsActive === 2 && "player2");
    const takeCreditHandler = () => {
        sound.play();
        dispatch(takeCredit(player));
        dispatch(closeCreditModal());
    };
    const closeCreditModalHandler = () => {
        dispatch(closeCreditModal());
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <div className={styles.info}>
                    <h1 className={styles.header}>Shure you need a credit 1000$?</h1>

                    <h1 className={styles.action}>You should return 1500$ passing circle next time.</h1>
                    <div className={styles["buttons-group"]}>
                        <SimpleButton className={styles.button} message={"YES"} handler={takeCreditHandler} />
                        <SimpleButton className={styles.button} message={"NO"} handler={closeCreditModalHandler} />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default TakeCreditModal;
