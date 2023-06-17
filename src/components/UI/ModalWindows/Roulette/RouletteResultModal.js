import styles from "./RouletteResultModal.module.css";
import { closeRouletteResultModal, settingPlayerRouletteisClose } from "../../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";
import CloseButton from "../ModalButtons/CloseButton";

const RouletteResultModal = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.fields.rouletteState);
    const fieldsReparinAmount = useSelector((state) => state.fields.fieldsReparinAmount);
    let message;
    if (result === "-100" || result === "-300" || result === "-500") {
        message = `You got a withdrawal ${result}$`;
    }
    if (result === "+100" || result === "+300" || result === "+500") {
        message = `You got a deposit ${result}$`;
    }
    if (result === "jailFree") {
        message = `You got a "${result}" card`;
    }
    if (result === "fieldsRepairing") {
        message = `You should pay a ${fieldsReparinAmount}$ for each your field to repair them`;
    }
    if (result === "creditFree") {
        message = `Congratulations, all your debts was forgiven!`;
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
        dispatch(settingPlayerRouletteisClose());
    };

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <CloseButton handler={closeResultRouletteModalHandler} />
                <h1 className={styles.header}>{message}</h1>
            </ModalWindow>
        </>
    );
};
export default RouletteResultModal;
