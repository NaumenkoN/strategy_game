import styles from "./BuyModal.module.css";
import { closeBuyModal, buyField } from "../../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";
import SimpleButton from "../ModalButtons/SimpleButton";
import CloseButton from "../ModalButtons/CloseButton";
import buyFieldSound from "../../../../media/rentalWithdrawal.mp3";
const BuyModal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const isOpenBuyModalPlayer1 = useSelector((state) => state.fields.player1.isOpenBuyModal);
    const isOpenBuyModalPlayer2 = useSelector((state) => state.fields.player2.isOpenBuyModal);
    const player1Steps = useSelector((state) => state.dice.playersPosition.player1);
    const player2Steps = useSelector((state) => state.dice.playersPosition.player2);
    const fields = useSelector((state) => state.fields.fields);
    const activeField = (isOpenBuyModalPlayer1 && player1Steps) || (isOpenBuyModalPlayer2 && player2Steps);
    const activePlayer = (isOpenBuyModalPlayer1 && "player1") || (isOpenBuyModalPlayer2 && "player2");
    const activePlayerName = (isOpenBuyModalPlayer1 && player1Name) || (isOpenBuyModalPlayer2 && player2Name);
    const isfieldIsCommercial = useSelector((state) => state.fields.isOpenBuyCommercialModal);

    const fieldType = isfieldIsCommercial === false ? "living" : "commercial";
    const buyfield = new Audio(buyFieldSound);
    const closeBuyModalHandler = () => {
        dispatch(closeBuyModal());
    };

    const buyFieldHandler = () => {
        buyfield.play();
        dispatch(buyField([activeField, activePlayer, fieldType]));
    };

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeBuyModalHandler} />
                <div className={styles.info}>
                    <h1 className={styles.header}>
                        Empty {isfieldIsCommercial && "Commercial"} Field #{activeField}
                    </h1>
                    <h2 className={styles.price}>Price: {fields[`${activeField}`].price}</h2>
                    <h1 className={styles.action}>{activePlayerName}, you whant to buy?</h1>
                    <div className={styles["buttons-group"]}>
                        <SimpleButton className={styles.button} message={"YEAS"} handler={buyFieldHandler} />
                        <SimpleButton className={styles.button} message={"NO"} handler={closeBuyModalHandler} />
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};
export default BuyModal;
