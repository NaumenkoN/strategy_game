import styles from "./EnoughtlessMoney.module.css";
import { closeEnoughtlessMoneyModal } from "../../../store/fields";

import { useSelector, useDispatch } from "react-redux";
import Backdrop from "./ModalTemplate/Backdrop";
import ModalWindow from "./ModalTemplate/ModalWindow";
import CloseButton from "./ModalButtons/CloseButton";

const EnoughtlessMoneyModal = () => {
    const dispatch = useDispatch();

    const closeEnoughtlessMoneyModalHandler = (e) => {
        dispatch(closeEnoughtlessMoneyModal());
    };
    return (
        <>
            <Backdrop />
            <ModalWindow>
                <CloseButton handler={closeEnoughtlessMoneyModalHandler} />
                <h1>Enoughtless Money</h1>
            </ModalWindow>
        </>
    );
};
export default EnoughtlessMoneyModal;
