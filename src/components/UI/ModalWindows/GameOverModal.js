import styles from "./JailModal.module.css";
import { restartGame } from "../../../store/fields";

import { useSelector } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import SimpleButton from "./ModalButtons/SimpleButton";

const GameOverModal = () => {
    const player1money = useSelector((state) => state.fields.player1.money);

    const looser = player1money < 0 ? "player1" : "player2";

    const restartGameHandler = () => {
        window.location.reload(false);
    };

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <h1>Game Over!</h1>
                <h2>{looser} loose 🤷‍♂️</h2>
                <h2>You whant a restart?</h2>
                <SimpleButton handler={restartGameHandler} message={"Yeas"} />
            </ModalWindow>
        </>
    );
};
export default GameOverModal;
