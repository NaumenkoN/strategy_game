import styles from "./RouletteResultModal.module.css";
import { closeRouletteResultModal, settingPlayerRouletteisClose } from "../../../../store/fields";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "../ModalTemplate/Backdrop";
import ModalWindow from "../ModalTemplate/ModalWindow";

const RouletteResultModal = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.fields.rouletteState);
    const fieldsReparinAmount = useSelector((state) => state.fields.fieldsRepairingAmount);
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

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeRouletteResultModal());
            dispatch(settingPlayerRouletteisClose());
        }, 3000);
    }, []);

    return (
        <>
            <Backdrop />
            <ModalWindow className={styles.modal}>
                <h1 className={styles.header}>{message}</h1>
            </ModalWindow>
        </>
    );
};
export default RouletteResultModal;
