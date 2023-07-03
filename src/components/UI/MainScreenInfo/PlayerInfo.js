import styles from "./PlayerInfo.module.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

const PlayerInfo = (props) => {
    const classes = styles.info + " " + props.className;
    const isActiveInfo = props.activePlayer !== props.index ? styles.active : "";
    const isActiveButtons = props.activePlayer !== props.index ? styles["active-buttons"] : "";
    console.log(isActiveButtons);
    return (
        <div className={`${classes} ${isActiveInfo}`}>
            <h1 className={styles["player-name"]}>{props.playerName}</h1>
            <h1 className={styles["player-info"]}>Position: {props.playerSteps}</h1>
            <h1 className={styles["player-info"]}>Money: {props.playerMoney}</h1>
            <h1 className={styles["player-info"]}>Debt: {props.playerDebt}</h1>
            <h1 className={styles["player-info"]}>Expected taxes: {props.expectedTaxes}</h1>
            <h1 className={styles["player-info"]}>
                Fields:
                {props.playerOnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .sort((a, b) => a - b)
                    .map((item, index) => (index === 0 && " ") + item + ", ")}
            </h1>
            <h1 className={styles["player-info"]}>
                Commercial fields:
                {props.playerOnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .sort((a, b) => a - b)
                    .map((item, index) => (index === 0 && " ") + item + ", ")}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <Button
                    className={isActiveButtons}
                    handler={props.sellStocksHandler}
                    playerName={props.activePlayerName}
                    message={"Sell Stocks"}
                    disabled={props.playerStocks === 0 || props.activePlayer !== props.index}
                ></Button>
                <Button
                    className={isActiveButtons}
                    handler={props.buyBuildingHandler}
                    playerName={props.activePlayerName}
                    message={"Assest Management"}
                    disabled={props.activePlayer !== props.index}
                ></Button>
                <Button
                    className={isActiveButtons}
                    handler={props.takeCreditHandler}
                    playerName={props.activePlayerName}
                    message={"Take a Credit"}
                    disabled={props.playerCreditCount === 0 || props.activePlayer !== props.index}
                ></Button>
                <Button
                    className={isActiveButtons}
                    handler={props.jailreleaseHandler}
                    playerName={props.activePlayerName}
                    message={"Jail card"}
                    jailCard={props.jailCard}
                    JailDaysLeft={props.jailDaysLeft}
                    card={true}
                    disabled={
                        props.jailCard === 0 || props.jailDaysLeft === 0 || props.activePlayer !== props.index
                    }
                ></Button>
            </div>
        </div>
    );
};

export default PlayerInfo;
