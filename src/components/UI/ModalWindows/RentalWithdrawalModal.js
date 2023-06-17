import styles from "./RentalWithdrawal.module.css";
import ModalWindow from "./ModalTemplate/ModalWindow";
import { closeRentalWithdrawalModal } from "../../../store/fields";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const RentalWithdrawal = () => {
    const dispatch = useDispatch();
    const fromPlayer = useSelector((state) => state.fields.rental.from);
    const toPlayer = useSelector((state) => state.fields.rental.to);
    const amount = useSelector((state) => state.fields.rental.amount);
    const isOpen = useSelector((state) => state.fields.rental.isOpen);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                dispatch(closeRentalWithdrawalModal());
            }, 3000);
        }
    }, [isOpen]);
    return (
        <ModalWindow className={`${styles.modal} ${isOpen && styles[`animation-downslide`]}`}>
            <h2 className={styles.header}>{`${fromPlayer} pays ${amount}$ to ${toPlayer}`}</h2>
        </ModalWindow>
    );
};

export default RentalWithdrawal;
