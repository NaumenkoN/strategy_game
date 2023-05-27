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

    return (
        <ul className={styles.map}>
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
