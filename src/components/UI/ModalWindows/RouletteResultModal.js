import styles from "./RouletteResultModal.module.css";
import { closeRouletteResultModal, settingPlayerRouletteisOpen } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";

const RouletteResultModal = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.fields.rouletteState);
    let message;
    if (result === "-100" || result === "-300" || result === "-500") {
        message = `You got a withdrawal ${result}$`;
    }
    if (result === "+100" || result === "+300" || result === "+500") {
        message = `You got a deposite ${result}$`;
    }
    if (result === "jailFree") {
        message = `You got a "${result}" card`;
    }
    if (result === "fieldsRepairing") {
        message = `You should pay a 100$ for each your field to repair them`;
    }
    if (result === "creditFree") {
        message = `Congratulations, all your debts have been canceled!`;
    }
    if (result === "start") {
        message = `You moving to a start field`;
    }
    if (result === "field12" || result === "field36") {
        message = `You are going to jail!`;
    }
    if (result === "field4" || result === "field23" || result === "field28" || result === "field47") {
        message = `You moving to a field ${result.slice(5)}`;
    }

    const closeResultRouletteModalHandler = (e) => {
        dispatch(closeRouletteResultModal());
        dispatch(settingPlayerRouletteisOpen());
    };

    return (
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <button onClick={closeResultRouletteModalHandler} className={styles["close-button"]}>
                    x
                </button>
                <h1>Roulette Result</h1>
                <p>{message}</p>
            </div>
        </>
    );
};
export default RouletteResultModal;
