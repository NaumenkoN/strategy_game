import styles from "./Game.module.css";
import GameInfo from "./GameInfo";
import WalkingRoad from "./WalkingRoad";
import BuyModal from "./UI/ModalWindows/BuyModals/BuyModal";
import FightModal from "./UI/ModalWindows/FightModal";
import JailModal from "./UI/ModalWindows/JailModal";
import SellStocksModal from "./UI/ModalWindows/SellStocks/SellStocksModal";
import BuildingModal from "./UI/ModalWindows/BuyModals/BuildingModal";
import RouletteModal from "./UI/ModalWindows/Roulette/RouletteModal";
import EnoughtlessMoneyModal from "./UI/ModalWindows/EnoughtlessMoneyModal";
import WarningModal from "./UI/ModalWindows/WarningModal";
import RouletteStocksModal from "./UI/ModalWindows/Roulette/RouletteStocksModal";
import RouletteResultModal from "./UI/ModalWindows/Roulette/RouletteResultModal";
import GameOverModal from "./UI/ModalWindows/GameOverModal";
import MainMenu from "./UI/MainMenu/MainMenu";
import RestartModal from "./UI/ModalWindows/RestartModal";
import RentalWithdrawal from "./UI/ModalWindows/RentalWithdrawalModal";
import RoulesModal from "./UI/MainMenu/RoulesModal";
import TakeCreditModal from "./UI/ModalWindows/TakeCreditModal";
import Settings from "./UI/MainMenu/Settings";
import { useSelector } from "react-redux";
import useSound from "use-sound";

const Game = () => {
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
    const isOpenRestartGameModal = useSelector((state) => state.fields.isOpenRestartGameModal);
    const isOpenRentalWithdrawalModal = useSelector((state) => state.fields.rental.isOpen);
    const isOpenRoulesModal = useSelector((state) => state.menu.isOpenRoulesModal);
    const isOpenSettingsModal = useSelector((state) => state.menu.isOpenSettingsModal);
    const isOpenTakeCreditModal = useSelector((state) => state.fields.isOpenTakeCreditModal);

    // const [play, { stop }] = useSound(mainSound, { volume: 0.5 });

    return (
        <ul className={styles.map}>
            {!isOpenMainMenu && (
                <>
                    {isOpenRouletteModal && <RouletteModal />}
                    {isOpenRouletteResultModal && <RouletteResultModal />}
                    {isOpenRouletteSkocksModal && <RouletteStocksModal />}
                    {isOpenTakeCreditModal && <TakeCreditModal />}
                    {isOpenSellStocksModal && <SellStocksModal />}
                    {isOpenFightModal && <FightModal />}
                    {isOpenRentalWithdrawalModal && <RentalWithdrawal />}

                    {isGameIsOver && <GameOverModal />}
                    {isOpenWarningModal && <WarningModal />}
                    {isOpenBuildingModal && <BuildingModal />}
                    {jailModalIsOpen && <JailModal />}
                    {isOpenBuyModal && <BuyModal />}
                    {isOpenEnoughtlessMoneyModal && <EnoughtlessMoneyModal />}
                    <WalkingRoad />
                    <GameInfo />
                </>
            )}
            {isOpenMainMenu && (
                <>
                    {isOpenMainMenu && <MainMenu />}
                    {isOpenRestartGameModal && <RestartModal />}
                    {isOpenRoulesModal && <RoulesModal />}
                    {isOpenSettingsModal && <Settings />}
                </>
            )}
        </ul>
    );
};

export default Game;
