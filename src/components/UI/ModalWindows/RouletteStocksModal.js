import styles from "./RouletteModal.module.css";
import { closeRouletteStocksModal, rouletteBuyStocks } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import CloseButton from "../ModalWindows/ModalButtons/CloseButton";
import ArgButton from "../ModalWindows/ModalButtons/ArgButton";
import SimpleButton from "../ModalWindows/ModalButtons/SimpleButton";

const RouletteStocksModal = () => {
    const dispatch = useDispatch();
    const rouletteSkocksValue = useSelector((state) => state.fields.rouletteSkocksModal.value);
    const isOpenRouletteModalp1 = useSelector((state) => state.fields.player1.isOpenRouletteModal);
    const isOpenRouletteModalp2 = useSelector((state) => state.fields.player2.isOpenRouletteModal);
    const activePlayer = (isOpenRouletteModalp1 && "player1") || (isOpenRouletteModalp2 && "player2");

    const closeRouletteStocksModalHandler = () => {
        dispatch(closeRouletteStocksModal());
    };

    const rouletteBuyStocksHandler = (player) => {
        dispatch(rouletteBuyStocks(player));
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeRouletteStocksModalHandler} />
                <h1>Congratilations!</h1>
                <h2>{`${activePlayer}, you are able to buy a ${rouletteSkocksValue} extra stocks for ${
                    rouletteSkocksValue * 20
                }$! Will you buy it?`}</h2>
                <ArgButton message={"Buy"} handler={rouletteBuyStocksHandler} arguments={activePlayer} />
                <SimpleButton message={"Cancel"} handler={closeRouletteStocksModalHandler} />
            </ModalWindow>
        </>
    );
};
export default RouletteStocksModal;
