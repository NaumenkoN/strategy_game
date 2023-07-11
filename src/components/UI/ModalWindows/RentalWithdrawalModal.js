import styles from "./RentalWithdrawal.module.css";
import ModalWindow from "./ModalTemplate/ModalWindow";
import { closeRentalWithdrawalModal } from "../../../store/fields";
import { setPrevPosAsCurrent } from "../../../store/diceAndPlayerPositions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const RentalWithdrawal = () => {
    const dispatch = useDispatch();
    const player1Name = useSelector((state) => state.fields.player1.name);
    const player2Name = useSelector((state) => state.fields.player2.name);
    const fromPlayer = useSelector((state) => state.fields.rental.from);
    const toPlayer = useSelector((state) => state.fields.rental.to);
    const amount = useSelector((state) => state.fields.rental.amount);
    const isOpen = useSelector((state) => state.fields.rental.isOpen);
    const fromPlayerName = fromPlayer === "player1" ? player1Name : player2Name;
    const toPlayerName = toPlayer === "player1" ? player1Name : player2Name;

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                dispatch(closeRentalWithdrawalModal());
                dispatch(setPrevPosAsCurrent());
            }, 3000);
        }
    }, [isOpen]);
    return (
        <ModalWindow className={`${styles.modal} ${isOpen && styles[`animation-downslide`]}`}>
            <h2 className={styles.header}>{`${fromPlayerName} pays ${amount}$ to ${toPlayerName}`}</h2>
        </ModalWindow>
    );
};

export default RentalWithdrawal;
