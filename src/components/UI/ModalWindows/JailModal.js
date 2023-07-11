import styles from "./JailModal.module.css";
import { closeJailModal } from "../../../store/fields";
import jail from "../../../media/jail2.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";

const JailModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeJailModal());
        }, 2000);
    }, []);

    return (
        <>
            <Backdrop />
            <ModalWindow>
                <h1 className={styles.header}>You went to jail!</h1>
                <h3 className={styles.info}>
                    You will miss 3 steps, if you cant throw double.
                    <br /> Or use "Jail Card" to release yourself at any time.
                </h3>
                <img className={styles.jail} src={jail} alt={"jail"}></img>
            </ModalWindow>
        </>
    );
};
export default JailModal;
