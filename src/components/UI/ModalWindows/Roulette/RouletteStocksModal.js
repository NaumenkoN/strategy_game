import styles from "./RouletteStocksModal.module.css";
import { closeRouletteStocksModal, rouletteBuyStocks } from "../../../../store/fields";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";
import CloseButton from "../../ModalWindows/ModalButtons/CloseButton";
import ArgButton from "../../ModalWindows/ModalButtons/ArgButton";
import SimpleButton from "../../ModalWindows/ModalButtons/SimpleButton";
import clickSound from "../../../../media/click-sound.mp3";

const RouletteStocksModal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const rouletteSkocksValue = useSelector((state) => state.fields.rouletteSkocksModal.value);
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");
    const activePlayerName = (isOpenRouletteModalp1 && player1Name) || (isOpenRouletteModalp2 && player2Name);
    const mouseClickAudio = new Audio(clickSound);

    const closeRouletteStocksModalHandler = () => {
        dispatch(closeRouletteStocksModal());
    };

    const rouletteBuyStocksHandler = (player) => {
        mouseClickAudio.play();
        dispatch(rouletteBuyStocks(player));
    };

    useEffect(() => {
        const onKeyPressYes = (e) => {
            if (e.key === "y") {
                rouletteBuyStocks();
            }
        };
        document.addEventListener("keypress", onKeyPressYes);

        const onKeyPressNo = (e) => {
            if (e.key === "n") {
                closeRouletteStocksModal();
            }
        };
        document.addEventListener("keypress", onKeyPressNo);
        return () => {
            document.removeEventListener("keypress", onKeyPressYes);
            document.removeEventListener("keypress", onKeyPressNo);
        };
    }, []);
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeRouletteStocksModalHandler} />
                <h1 className={styles.header}>Congratulations!</h1>
                <h2
                    className={styles.description}
                >{`${activePlayerName}, you are able to buy a ${rouletteSkocksValue} extra stocks for ${
                    rouletteSkocksValue * 20
                }$! Will you buy it?`}</h2>
                <div className={styles.buttons}>
                    <ArgButton
                        className={styles.button}
                        message={"YES"}
                        handler={rouletteBuyStocksHandler}
                        arguments={activePlayer}
                    />
                    <SimpleButton
                        className={styles.button}
                        message={"NO"}
                        handler={closeRouletteStocksModalHandler}
                    />
                </div>
            </ModalWindow>
        </>
    );
};
export default RouletteStocksModal;
