import styles from "./EnoughtlessMoney.module.css";
import { closeEnoughtlessMoneyModal } from "../../../store/fields";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import CloseButton from "./ModalButtons/CloseButton";
import audio from "../../../media/enoughtlessMoney.mp3";

const EnoughtlessMoneyModal = () => {
    const dispatch = useDispatch();

    const closeEnoughtlessMoneyModalHandler = (e) => {
        dispatch(closeEnoughtlessMoneyModal());
    };
    const sound = new Audio(audio);
    useEffect(() => {
        sound.play();
    }, []);
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeEnoughtlessMoneyModalHandler} />
                <h1 className={styles.header}>Money is not enought!</h1>
            </ModalWindow>
        </>
    );
};
export default EnoughtlessMoneyModal;
