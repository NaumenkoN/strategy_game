import styles from "./Map.module.css";
import GameInfo from "./GameInfo";
import WalkingRoad from "./WalkingRoad";

const Map = () => {
    return (
        <ul className={styles.map}>
            <WalkingRoad />
            <GameInfo />
        </ul>
    );
};

export default Map;
