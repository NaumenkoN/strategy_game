import styles from "./BuyModal.module.css";
import { closeBuyModal, buyField } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const BuyModal = () => {
    const dispatch = useDispatch();
    const isOpenBuyModalPlayer1 = useSelector((state) => state.fields.player1.isOpenBuyModal);
    const isOpenBuyModalPlayer2 = useSelector((state) => state.fields.player2.isOpenBuyModal);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const fields = useSelector((state) => state.fields.fields);
    const activeField =
        (isOpenBuyModalPlayer1 && player1Steps) || (isOpenBuyModalPlayer2 && player2Steps);
    const activePlayer =
        (isOpenBuyModalPlayer1 && "player1") || (isOpenBuyModalPlayer2 && "player2");

    const closeBuyModalHandler = () => {
        dispatch(closeBuyModal());
    };

    const buyFieldHandler = () => {
        dispatch(buyField([activeField, activePlayer]));
    };

    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeBuyModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <div className={styles.info}>
                    <h1>Empty Field #{activeField}</h1>
                    <h2>Price: {fields[`${activeField}`].price}</h2>
                    <h1>{activePlayer}, You whant to buy?</h1>
                    <div>
                        <button onClick={buyFieldHandler}>yeas</button>
                        <button>no</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BuyModal;
