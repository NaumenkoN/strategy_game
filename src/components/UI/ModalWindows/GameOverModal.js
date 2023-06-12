import styles from "./GameOvermodal.module.css";
import { restartGame } from "../../../store/fields";
import { restartPositions } from "../../../store/diceAndPlayerPositions";
import { openMainMenu } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";

const GameOverModal = () => {
    const dispatch = useDispatch();
    const player1money = useSelector((state) => state.fields.player1.money);

    const looser = player1money < 0 ? "player1" : "player2";

    const restartGameHandler = () => {
        dispatch(restartGame());
        dispatch(restartPositions());
    };

    const MainMenuHandler = () => {
        dispatch(openMainMenu());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <div className={styles.info}>
                    <h1 className={styles.header}>Game Over!</h1>
                    <h2 className={styles.header2}>{looser} loose 🤷‍♂️</h2>
                    <h3>You whant to restart?</h3>
                    <SimpleButton className={styles.button} handler={restartGameHandler} message={"Yeas"} />
                    <SimpleButton className={styles.button} handler={MainMenuHandler} message={"Menu"} />
                </div>
            </ModalWindow>
        </>
    );
};
export default GameOverModal;
