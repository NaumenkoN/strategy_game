import styles from "./Map.module.css";
import GameInfo from "./GameInfo";
import WalkingRoad from "./WalkingRoad";
import BuyModal from "./UI/ModalWindows/BuyModals/BuyModal";
import FightModal from "./UI/ModalWindows/FightModal";
import JailModal from "./UI/ModalWindows/JailModal";
import SellStocksModal from "./UI/ModalWindows/SellStocks/SellStocksModal";
import BuildingModal from "./UI/ModalWindows/BuyModals/BuildingModal";
import RouletteModal from "./UI/ModalWindows/RouletteModal";
import EnoughtlessMoneyModal from "./UI/ModalWindows/EnoughtlessMoneyModal";
import WarningModal from "./UI/ModalWindows/WarningModal";
import RouletteStocksModal from "./UI/ModalWindows/RouletteStocksModal";
import RouletteResultModal from "./UI/ModalWindows/RouletteResultModal";
import GameOverModal from "./UI/ModalWindows/GameOverModal";
import MainMenu from "./UI/MainMenu/MainMenu";
import { useSelector } from "react-redux";

const Map = () => {
    const isOpenBuyModal = useSelector((state) => state.fields.isOpenBuyModal);
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

    return (
        <ul className={styles.map}>
            {!isOpenMainMenu && (
                <>
                    {isGameIsOver && <GameOverModal />}
                    {isOpenRouletteResultModal && <RouletteResultModal />}
                    {isOpenRouletteSkocksModal && <RouletteStocksModal />}
                    {isOpenWarningModal && <WarningModal />}
                    {isOpenBuildingModal && <BuildingModal />}
                    {isOpenBuyModal && <BuyModal />}
                    {isOpenFightModal && <FightModal />}
                    {isOpenSellStocksModal && <SellStocksModal />}
                    {jailModalIsOpen && <JailModal />}
                    {isOpenRouletteModal && <RouletteModal />}
                    {isOpenEnoughtlessMoneyModal && <EnoughtlessMoneyModal />}
                    <WalkingRoad />
                    <GameInfo />
                </>
            )}

            {isOpenMainMenu && <MainMenu />}
        </ul>
    );
};

export default Map;
