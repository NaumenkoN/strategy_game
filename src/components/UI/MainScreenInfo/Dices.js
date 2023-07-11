import styles from "../../GameInfo.module.css";
import dice1 from "../../../media/dices/dice1.png";
import dice2 from "../../../media/dices/dice2.png";
import dice3 from "../../../media/dices/dice3.png";
import dice4 from "../../../media/dices/dice4.png";
import dice5 from "../../../media/dices/dice5.png";
import dice6 from "../../../media/dices/dice6.png";
import { useSelector } from "react-redux";

const Dices = () => {
    const diceLeft = useSelector((state) => state.dice.firstDice);
    const diceRight = useSelector((state) => state.dice.secondDice);
    const dices = ["", dice1, dice2, dice3, dice4, dice5, dice6];
    return (
        <div className={styles.dices}>
            <div className={styles["dice-holder"]}>
                <img className={styles.dice} src={dices[diceLeft]} alt="dice"></img>
            </div>
            <div className={styles["dice-holder"]}>
                <img className={styles.dice} src={dices[diceRight]} alt="dice"></img>
            </div>
        </div>
    );
};
export default Dices;
