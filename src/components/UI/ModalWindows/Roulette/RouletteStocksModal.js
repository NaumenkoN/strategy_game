import styles from "./RouletteStocksModal.module.css";
import { closeRouletteStocksModal, rouletteBuyStocks } from "../../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";
import CloseButton from "../../ModalWindows/ModalButtons/CloseButton";
import ArgButton from "../../ModalWindows/ModalButtons/ArgButton";
import SimpleButton from "../../ModalWindows/ModalButtons/SimpleButton";
import buyStocksSound from "../../../../media/rentalWithdrawal.mp3";

const RouletteStocksModal = () => {
    const dispatch = useDispatch();
    const rouletteSkocksValue = useSelector((state) => state.fields.rouletteSkocksModal.value);
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const buyStocks = new Audio(buyStocksSound);
    const closeRouletteStocksModalHandler = () => {
        dispatch(closeRouletteStocksModal());
    };

    const rouletteBuyStocksHandler = (player) => {
        buyStocks.play();
        dispatch(rouletteBuyStocks(player));
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeRouletteStocksModalHandler} />
                <h1 className={styles.header}>Congratilations!</h1>
                <h2
                    className={styles.description}
                >{`${activePlayer}, you are able to buy a ${rouletteSkocksValue} extra stocks for ${
                    rouletteSkocksValue * 20
                }$! Will you buy it?`}</h2>
                <div className={styles.buttons}>
                    <ArgButton
                        className={styles.button}
                        message={"Buy"}
                        handler={rouletteBuyStocksHandler}
                        arguments={activePlayer}
                    />
                    <SimpleButton
                        className={styles.button}
                        message={"Cancel"}
                        handler={closeRouletteStocksModalHandler}
                    />
                </div>
            </ModalWindow>
        </>
    );
};
export default RouletteStocksModal;
