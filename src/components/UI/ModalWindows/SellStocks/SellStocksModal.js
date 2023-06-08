import { closeSellStocksModal } from "../../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import CloseButton from "../ModalButtons/CloseButton";
import Backdrop from "../ModalTemplate/Backdrop";
import styles from "./SellStocksModal.module.css";
import FormSellStocks from "./FormSellStocks";
import ModalWindow from "../ModalTemplate/ModalWindow";

const SellStocksModal = () => {
    const dispatch = useDispatch();
    const emergencySellActives = useSelector((state) => state.fields.emergencySellActives);
    const isOpenSellStocksModalp1 = useSelector((state) => state.fields.player1.isOpenSellStocksModal);
    const isOpenSellStocksModalp2 = useSelector((state) => state.fields.player2.isOpenSellStocksModal);
    const activePlayer = (isOpenSellStocksModalp1 && "player1") || (isOpenSellStocksModalp2 && "player2");

    const closeSellStocksModalHandler = () => {
        dispatch(closeSellStocksModal());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton disabled={!emergencySellActives} handler={closeSellStocksModalHandler} />
                <h1>{`How many stocks You want to sell ${activePlayer}?`}</h1>
                <FormSellStocks
                    closeSellStocksModalHandler={closeSellStocksModalHandler}
                    activePlayer={activePlayer}
                    handler={closeSellStocksModalHandler}
                />
            </ModalWindow>
        </>
    );
};
export default SellStocksModal;
