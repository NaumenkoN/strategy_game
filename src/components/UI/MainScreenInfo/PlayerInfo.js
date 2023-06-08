import styles from "./PlayerInfo.module.css";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

const PlayerInfo = (props) => {
    return (
        <div className={styles.field}>
            <h1 className={styles.dice}>
                {props.activePlayer === props.index && "+"}
                {props.playerName} position: {props.playerSteps}
            </h1>
            <h1 className={styles.dice}>
                {props.playerName} money: {props.playerMoney}
            </h1>
            <h1 className={styles.dice}>
                {props.playerName} debt: {props.playerDebt}
            </h1>
            <h1 className={styles.dice}>
                {props.playerName} expected taxes: {props.expectedTaxes}
            </h1>
            <h1 className={styles.dice}>
                {props.playerName} owned fields:
                {props.playerOnwnedFields
                    .filter((num) => num !== 4 && num !== 16 && num !== 28 && num !== 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <h1 className={styles.dice}>
                {props.playerName} owned commercial fields:
                {props.playerOnwnedFields
                    .filter((num) => num === 4 || num === 16 || num === 28 || num === 40)
                    .sort((a, b) => a - b)
                    .map((item) => item + ",")}
            </h1>
            <div className={styles["control-buttons--group"]}>
                <Button
                    handler={props.sellStocksHandler}
                    playerName={props.playerName}
                    message={"Sell Stocks"}
                    disabled={props.playerStocks === 0}
                ></Button>
                <Button
                    handler={props.buyBuildingHandler}
                    playerName={props.playerName}
                    message={"Building Manage"}
                ></Button>
                <Button
                    handler={props.takeCreditHandler}
                    playerName={props.playerName}
                    message={"Take a credit"}
                    disabled={props.playerCreditCount === 0}
                ></Button>
                <Button
                    handler={props.jailreleaseHandler}
                    playerName={props.playerName}
                    message={"Jail Release card"}
                    jailCard={props.jailCard}
                    JailDaysLeft={props.jailDaysLeft}
                    card={true}
                    disabled={props.jailCard === 0 || props.jailDaysLeft === 0}
                ></Button>
            </div>
        </div>
    );
};

export default PlayerInfo;
