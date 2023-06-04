import styles from "./Map.module.css";
import GameInfo from "./GameInfo";
import WalkingRoad from "./WalkingRoad";
import BuyModal from "./UI/ModalWindows/BuyModal";
import BuyCommercialModal from "./UI/ModalWindows/BuyCommercialModal";
import FightModal from "./UI/ModalWindows/FightModal";
import JailModal from "./UI/ModalWindows/JailModal";
import SellStocksModal from "./UI/ModalWindows/SellStocksModal";
import BuildingModal from "./UI/ModalWindows/BuildingModal";
import RouletteModal from "./UI/ModalWindows/RouletteModal";
import EnoughtlessMoneyModal from "./UI/ModalWindows/EnoughtlessMoneyModal";
import SellConfirmModal from "./UI/ModalWindows/SellConfirmModal";
import WarningModal from "./UI/ModalWindows/WarningModal";
import RouletteStocksModal from "./UI/ModalWindows/RouletteStocksModal";
import RouletteResultModal from "./UI/ModalWindows/RouletteResultModal";
import GameOverModal from "./UI/ModalWindows/GameOverModal";

import { useSelector, useDispatch } from "react-redux";

const Map = () => {
    const buyModalIsOpen = useSelector((state) => state.fields.isOpenBuyModal);
    const buyCommercialModalIsOpen = useSelector((state) => state.fields.isOpenBuyCommercialModal);
    const jailModalIsOpen = useSelector((state) => state.fields.isOpenJailModal);
    const rouletteModalIsOpen = useSelector((state) => state.fields.isOpenRouletteModal);
    const enoughtlessMoneyModalIsOpen = useSelector((state) => state.fields.isOpenEnoughtlessMoneyModal);
    const openFightModal = useSelector((state) => state.fields.isOpenFightModal);
    const isOpenSellStocksModal = useSelector((state) => state.fields.isOpenSellStocksModal);
    const isOpenBuildingModal = useSelector((state) => state.fields.isOpenBuildingModal);
    const isOpenSellConfirmModal = useSelector((state) => state.fields.isOpenSellConfirmModal);
    const isOpenWarningModal = useSelector((state) => state.fields.warningModal);
    const isOpenRouletteSkocksModal = useSelector((state) => state.fields.rouletteSkocksModal.isOpen);
    const isOpenRouletteResultModal = useSelector((state) => state.fields.isOpenRouletteResultModal);
    const gameIsOver = useSelector((state) => state.fields.gameIsOver);

    return (
        <ul className={styles.map}>
            {gameIsOver && <GameOverModal />}
            {isOpenRouletteResultModal && <RouletteResultModal />}
            {isOpenRouletteSkocksModal && <RouletteStocksModal />}
            {isOpenWarningModal && <WarningModal />}
            {isOpenSellConfirmModal && <SellConfirmModal />}
            {isOpenBuildingModal && <BuildingModal />}
            {buyCommercialModalIsOpen && <BuyCommercialModal />}
            {buyModalIsOpen && <BuyModal />}
            {openFightModal && <FightModal />}
            {isOpenSellStocksModal && <SellStocksModal />}
            {jailModalIsOpen && <JailModal />}
            {rouletteModalIsOpen && <RouletteModal />}
            {enoughtlessMoneyModalIsOpen && <EnoughtlessMoneyModal />}
            <WalkingRoad />
            <GameInfo />
        </ul>
    );
};

export default Map;
