import styles from "./Map.module.css";
import GameInfo from "./GameInfo";
import WalkingRoad from "./WalkingRoad";
import BuyModal from "./UI/ModalWindows/BuyModal";
import FightModal from "./UI/ModalWindows/FightModal";
import JailModal from "./UI/ModalWindows/JailModal";
import RouletteModal from "./UI/ModalWindows/RouletteModal";
import EnoughtlessMoneyModal from "./UI/ModalWindows/EnoughtlessMoneyModal";

import { useSelector, useDispatch } from "react-redux";

const Map = () => {
    const buyModalIsOpen = useSelector((state) => state.fields.isOpenBuyModal);
    const jailModalIsOpen = useSelector((state) => state.fields.isOpenJailModal);
    const rouletteModalIsOpen = useSelector((state) => state.fields.isOpenRouletteModal);
    const enoughtlessMoneyModalIsOpen = useSelector((state) => state.fields.isOpenEnoughtlessMoneyModal);
    const openFightModal = useSelector((state) => state.fields.isOpenFightModal);
    console.log(openFightModal);

    return (
        <ul className={styles.map}>
            {openFightModal && <FightModal />}
            {buyModalIsOpen && <BuyModal />}
            {jailModalIsOpen && <JailModal />}
            {rouletteModalIsOpen && <RouletteModal />}
            {enoughtlessMoneyModalIsOpen && <EnoughtlessMoneyModal />}
            <WalkingRoad />
            <GameInfo />
        </ul>
    );
};

export default Map;
