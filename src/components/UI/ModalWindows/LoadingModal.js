import styles from "./LoadingModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closeLoadingModal } from "../../../store/mainMenu";

const LoadingModal = (props) => {
    const dispatch = useDispatch();
    const closeLoadingModalHandler = () => {
        dispatch(closeLoadingModal());
    };
    return (
        <>
            <div className={styles.backdrop}></div>

            <button className={styles.button} onClick={closeLoadingModalHandler}>
                Click to Start
            </button>
        </>
    );
};

export default LoadingModal;
