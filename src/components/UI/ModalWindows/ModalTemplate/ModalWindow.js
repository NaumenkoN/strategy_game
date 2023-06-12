import styles from "./ModalWindow.module.css";
import { useSelector } from "react-redux";

const ModalWindow = (props) => {
    const BuyModal = useSelector((state) => state.fields.isOpenBuyModal);
    const jailModalIsOpen = useSelector((state) => state.fields.isOpenJailModal);
    const isOpenRouletteModal = useSelector((state) => state.fields.isOpenRouletteModal);
    const isOpenEnoughtlessMoneyModal = useSelector((state) => state.fields.isOpenEnoughtlessMoneyModal);
    const isOpenFightModal = useSelector((state) => state.fields.isOpenFightModal);
    const isOpenSellStocksModal = useSelector((state) => state.fields.isOpenSellStocksModal);
    const isOpenBuildingModal = useSelector((state) => state.fields.isOpenBuildingModal);
    const isOpenWarningModal = useSelector((state) => state.fields.warningModal);
    const isOpenRouletteSkocksModal = useSelector((state) => state.fields.rouletteSkocksModal.isOpen);
    const isOpenRouletteResultModal = useSelector((state) => state.fields.isOpenRouletteResultModal);
    const isGameIsOver = useSelector((state) => state.fields.gameIsOver);

    const isOpenMainMenu = useSelector((state) => state.menu.isOpenMainMenu);

    const isAnymodalIsOpen =
        isGameIsOver ||
        isOpenRouletteResultModal ||
        isOpenRouletteSkocksModal ||
        isOpenWarningModal ||
        isOpenBuildingModal ||
        isOpenSellStocksModal ||
        isOpenFightModal ||
        isOpenEnoughtlessMoneyModal ||
        BuyModal ||
        jailModalIsOpen ||
        isOpenRouletteModal;

    const classes = styles.modal + " " + (isAnymodalIsOpen && styles["animation-in"]) + " " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default ModalWindow;
